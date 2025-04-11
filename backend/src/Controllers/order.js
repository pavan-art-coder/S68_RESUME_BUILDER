const { Router } = require('express');
const auth = require('../Middleware/auth');
const User = require("../Model/userModel");
const orders = require('../Model/orderSchema');
const roleMiddleware = require('../Middleware/role');
const paypal = require('paypal-rest-sdk'); // Ensure PayPal is configured properly
const orderRouter = Router();

// ✅ Place Order Route
orderRouter.post('/place', auth, async (req, res) => {
    try {
        const email = req.user;
        const { orderItems, shippingAddress } = req.body;

        if (!email) return res.status(400).json({ message: 'Email is required.' });
        if (!orderItems || !Array.isArray(orderItems) || orderItems.length === 0) 
            return res.status(400).json({ message: 'Order items are required.' });
        if (!shippingAddress) 
            return res.status(400).json({ message: 'Shipping address is required.' });

        const userData = await User.findOne({ email });
        if (!userData) return res.status(404).json({ message: 'User not found.' });

        const totalAmount = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

        const paymentData = {
            intent: "sale",
            payer: { payment_method: "paypal" },
            transactions: [{ amount: { total: totalAmount.toFixed(2), currency: "INR" } }],
            redirect_urls: { return_url: "http://localhost:3000/success", cancel_url: "http://localhost:3000/cancel" },
        };

        paypal.payment.create(paymentData, async (error, payment) => {
            if (error) return res.status(500).json({ message: "Payment error", error });

            const orderPromises = orderItems.map(async (item) => {
                const order = new orders({
                    user: userData._id,
                    orderItems: [item],
                    shippingAddress,
                    totalAmount,
                    paymentID: payment.id
                });
                return order.save();
            });

            const placedOrders = await Promise.all(orderPromises);
            userData.cart = []; // Empty the cart
            await userData.save();

            res.status(201).json({ message: 'Orders placed successfully.', orders: placedOrders });
        });

    } catch (error) {
        console.error('Error placing orders:', error);
        res.status(500).json({ message: error.message });
    }
});

// ✅ Get Order History
orderRouter.get("/getorder", auth, async (req, res) => {
    try {
        const email = req.user;
        if (!email) return res.status(404).json({ message: "User not found." });

        const userData = await User.findOne({ email });
        if (!userData) return res.status(404).json({ message: "User not found." });

        const orderHistory = await orders.find({ user: userData._id });

        res.status(200).json({ message: "Orders retrieved successfully", orders: orderHistory });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// ✅ Cancel Order
orderRouter.patch('/cancel-order/:orderId', auth, roleMiddleware(['user']), async (req, res) => {
    try {
        const { orderId } = req.params;
        const order = await orders.findById(orderId);
        if (!order) return res.status(404).json({ message: 'Order not found.' });

        if (order.orderStatus === 'Delivered') {
            return res.status(400).json({ message: 'Order is already delivered.' });
        }

        order.orderStatus = 'Cancelled';
        await order.save();

        res.status(200).json({ message: 'Order cancelled successfully.', order });
    } catch (error) {
        console.error('Error cancelling order:', error);
        res.status(500).json({ message: error.message });
    }
});

// ✅ Verify Payment
orderRouter.get('/verify-payment', auth, async (req, res) => {
    const { orderId } = req.user;

    paypal.payment.get(orderId, async (error, payment) => {
        if (error) return res.status(500).json({ message: "Payment verification failed." });
        if (payment.state !== "approved") return res.status(400).json({ message: "Payment not approved." });

        await orders.findByIdAndUpdate(orderId, { orderStatus: 'Paid' });
        res.status(200).json({ message: "Payment verified successfully." });
    });
});

module.exports = orderRouter;
