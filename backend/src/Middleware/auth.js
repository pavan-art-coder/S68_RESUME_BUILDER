const jwt = require("jsonwebtoken");
require('dotenv').config();

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.authorization; // <-- Corrected key name

        if (!token) {
            return res.status(401).json({ error: "Access denied. No token provided." });
        }

        const secret = process.env.JWT_SECRET; // <-- Make sure this is correct in .env

        const decoded = jwt.verify(token, secret); // verify token

        req.user = decoded.email; // Store user info in req
        next();
    } catch (err) {
        console.error("Auth middleware error:", err.message);
        return res.status(401).json({ error: "Invalid or expired token" });
    }
};

module.exports = auth;
