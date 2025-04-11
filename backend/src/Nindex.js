// const express = require('express');
// const mongoose = require('mongoose');
// const userRouter = require('./Controllers/users');

// const app = express();
// const PORT = 3000;

// // Middleware to parse JSON bodies
// app.use(express.json());

// // ...existing code...

// app.use('/api', userRouter);

// mongoose.connect('mongodb://localhost:27017/ecommerce', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to the database');
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// }).catch((error) => {
//   console.error('Database connection error:', error);
// });



const express = require('express');
require('dotenv').config(); // ✅ Load .env variables
const connectDB = require('./Database/db'); // ✅ Your custom DB connect function
const userRouter = require('./Controllers/users');

const app = express();
const PORT = process.env.PORT || 3000;
const URL = process.env.MONGO_URI;

app.use(express.json());
app.use('/api', userRouter);

const startServer = async () => {
  try {
    await connectDB(URL); // ✅ Use .env value
    app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Server failed to start:', error.message);
    process.exit(1);
  }
};

startServer();
