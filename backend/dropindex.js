const mongoose = require('mongoose');
const User = require('./src/Model/userModel'); // make sure path is correct
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ Connected to MongoDB");

    const indexes = await User.collection.indexes();
    console.log("🔍 Existing Indexes:", indexes);

    // Drop the remaining faulty index
    await User.collection.dropIndex('cart.productname_1');
    console.log("✅ Dropped index: cart.productname_1");

    process.exit(0);
  })
  .catch(err => {
    console.error("❌ Error:", err);
    process.exit(1);
  });
