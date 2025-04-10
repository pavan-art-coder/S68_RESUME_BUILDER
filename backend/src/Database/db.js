// const {connect} = require('mongoose');
// const connectDB = async (url) => {
//     try {
//         await connect(url)
//         console.log('Connected to the database');
//     } catch (error) {
//         console.error('Error connecting to the database');
//         console.error(error);
//     }
// }
// module.exports = {connectDB};

 // ✅ Load environment variables
 const mongoose = require("mongoose");


 const connectDB = async (URL) => {
     try {
        //  if (!URL) {
        //      throw new Error("❌ MongoDB connection URL is not provided.");
        //  }
 
         const conn = await mongoose.connect(URL)
            //  useNewUrlParser: true,
            //  useUnifiedTopology: true,
        
 
         console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
     } catch (error) {
         console.error(`❌ Database Connection Error: ${error.message}`);
         process.exit(1);
     }
 };
 
 module.exports = connectDB;
 