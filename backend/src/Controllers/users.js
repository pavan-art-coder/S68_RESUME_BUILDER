const { Router } = require("express");
const userModel = require("../Model/userModel");
const { upload } = require("../Multer/multer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require("path");
const ErrorHandler = require("../Middleware/Error");
const AsyncError = require("../Middleware/catchAsyncError");
const auth = require("../Middleware/auth");
require("dotenv").config();

const userrouter = Router();
const secret = process.env.JWT_SECRET;

// ✅ Create User Route
userrouter.post("/create-user", upload.single("file"), AsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;
    const userEmail = await userModel.findOne({ email });

    if (userEmail) return next(new ErrorHandler("User already exists", 400));

    const filename = req.file?.filename || "";
    const fileUrl = path.join(filename);
    const hashedPassword = await bcrypt.hash(password, 10);

    const createuser = await userModel.create({
        name,
        email,
        password: hashedPassword,
        avatarurl: fileUrl,
    });

    res.status(201).json({ message: "User created successfully", user: createuser });
}));

// ✅ Login Route
userrouter.post("/login", AsyncError(async (req, res) => {
    const { email, password } = req.body;
    const check = await userModel.findOne({ email });

    if (!check) return res.status(400).json({ message: "User not found" });

    const isPasswordValid = await bcrypt.compare(password, check.password);
    if (!isPasswordValid) return res.status(400).json({ message: "Invalid password" });

    const token = jwt.sign({ email: check.email }, secret, { expiresIn: "15m" });

    res.cookie("authorization", token, {
        expires: new Date(Date.now() + 15 * 60 * 1000),
        httpOnly: true,
        domain: "localhost", // remove . before localhost
    });

    res.status(200).json({ token });
}));

// ✅ Get User Profile (public route)
userrouter.get("/profile", AsyncError(async (req, res) => {
    const { email } = req.query;
    if (!email) return res.status(400).json({ message: "Email is required" });

    const user = await userModel.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found" });

    const userProfile = {
        name: user.name,
        email: user.email,
        phone: user.phoneNumber,
        image: user.avatarurl,
        address: user.addresses,
    };

    res.status(200).json({ message: "Profile retrieved", user: userProfile });
}));

// ✅ Add Address (protected route)
userrouter.post("/add-address", auth, AsyncError(async (req, res) => {
    const email = req.user;

    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const { country, city, address1, address2, zipCode, addressType } = req.body;

    const newAddress = { country, city, address1, address2, zipCode, addressType };

    user.addresses.push(newAddress);
    await user.save();

    res.status(200).json({ message: "Address added successfully" });
}));

// ✅ Get Addresses (protected route)
userrouter.get("/get-address", auth, AsyncError(async (req, res) => {
    const email = req.user;

    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    res.status(200).json({ message: "Address list retrieved", addresses: user.addresses });
}));

module.exports = userrouter;
