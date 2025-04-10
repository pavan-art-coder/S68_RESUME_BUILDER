const { Router } = require("express");
const userModel = require("../Model/userModel");
const { upload } = require("../Multer/multer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require("path"); // ✅ Import path module
const ErrorHandler = require("../Middleware/Error"); // ✅ Import error handler
const AsyncError = require("../Middleware/catchAsyncError");
const auth = require("../Middleware/auth");
require("dotenv").config();

const userrouter = Router();
const secret = process.env.JWT_SECERT;

// ✅ Create User Route
userrouter.post("/create-user", async (req, res, next) => {
    const { name, email, password } = req.body;
    const userEmail = await userModel.findOne({ email });
    
    if (userEmail) {
        return next(new ErrorHandler("User already exists", 400));
    }

    const filename = req.file.filename;
    const fileUrl = path.join(filename);
    const hashedPassword = await bcrypt.hash(password, 10);

    const createuser=await userModel.create({
        name,
        email,
        password: hashedPassword
    });

    res.status(201).json({ message: "User created successfully" ,user:createuser});
});
// upload.single("file")

// ✅ Login Route
userrouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const check = await userModel.findOne({ email });

    if (!check) {
        return res.status(400).json({ message: "User not found" });
    }

    bcrypt.compare(password, check.password, (err, result) => {
        if (err || !result) {
            return res.status(400).json({ message: "Invalid password" });
        }

        jwt.sign({ email: email }, secret, (err, token) => {
            if (err) {
                return res.status(400).json({ message: "Invalid jwt" });
            }
            res.cookie("authorization", token, {
                expires: new Date(Date.now() + 900000),
                httpOnly: true,
                domain: ".localhost.com",
            });
            res.status(200).json({ token: token });
        });
    });
});

// ✅ Get User Profile
userrouter.get("/profile", async (req, res) => {
    const { email } = req.query;
    if (!email) {
        return res.status(400).json({ message: "Email cannot be empty!" });
    }

    try {
        const user = await userModel.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const Users = {
            name: user.name,
            email: user.email,
            phone: user.phoneNumber,
            image: user.avatarurl,
            address: user.address,
        };

        res.status(200).json({ message: "Successfully retrieved profile", user: Users });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Add Address Route
userrouter.post("/add-address", auth, async (req, res) => {
    try {
        const email = req.user.email; // ✅ Fix auth user data
        const { country, city, address1, address2, zipCode, addressType } = req.body;

        const user = await userModel.findOne({ email: email });
        if (!user) return res.status(400).json({ message: "User not found" });

        const newAddress = { country, city, address1, address2, zipCode, addressType };

        user.addresses.push(newAddress);
        await user.save();

        res.status(200).json({ message: "Address added successfully" });
    } catch (err) {
        console.error("Error in address:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ Get Address Route
userrouter.get("/get-address", auth, async (req, res) => {
    const email = req.user.email;

    try {
        const user = await userModel.findOne({ email: email });
        if (!user) return res.status(400).json({ message: "User not found" });

        res.status(200).json({
            message: "Successfully retrieved address",
            addresses: user.addresses,
        });
    } catch (err) {
        console.error("Error in get address:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = userrouter;
