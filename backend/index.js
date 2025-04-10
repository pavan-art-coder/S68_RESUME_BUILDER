const express = require('express');
require('dotenv').config();
const connectDB = require('./src/Database/db');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

// Import Routers
const userrouter = require('./src/Controllers/users');
const productrouter = require('./src/Controllers/Product');
const orderrouter = require('./src/Controllers/Order');

const app = express();
const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(cookieParser());

// ⚠️ Use express.json only for JSON content
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); // ✅ Handles x-www-form-urlencoded (important for forms)

// ✅ Serve static image files
app.use('/products', express.static(path.join(__dirname, 'uploads/products')));

// Routes
app.get('/', (req, res) => res.send('Hello World'));
app.use('/order', orderrouter);
app.use('/auth', userrouter);
app.use(express.urlencoded({ extended: true }));
app.use('/product', productrouter);

// Start Server
app.listen(PORT, async () => {
    try {
        await connectDB(URL);
        console.log(`✅ Server running on http://localhost:${PORT}`);
    } catch (err) {
        console.error("❌ Server failed to start:", err);
        process.exit(1);
    }
});
