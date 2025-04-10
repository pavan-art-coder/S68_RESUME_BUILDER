const express = require('express');
require('dotenv').config();
const connectDB = require('./src/Database/db');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

// Import Routers
const userrouter = require('./src/Controllers/users');
const productrouter = require('./src/Controllers/products'); // 🔧 Consistent filename
const orderrouter = require('./src/Controllers/Order');

const app = express();
const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_URI;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // 🔐 Replace with your frontend URL
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve static image files
app.use('/products', express.static(path.join(__dirname, 'uploads/products')));

// Routes
app.get('/', (req, res) => res.send('✅ API is running!'));
app.use('/auth', userrouter);
app.use('/product', productrouter);
app.use('/order', orderrouter);

// Start Server
app.listen(PORT, async () => {
    try {
        await connectDB(URL);
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    } catch (err) {
        console.error("❌ Server failed to start:", err.message);
        process.exit(1);
    }
});
