const express = require('express');
const { connectDB } = require('./src/Database/db');
const userrouter = require('./src/Controller/user');
const app = express();

app.use(express.json());

require('dotenv').config({
    path: './src/config/.env'
});
const port = process.env.PORT || 8080;
const url = process.env.db_url;

app.listen(port, async() => {

  try{
    await connectDB(url);
    console.log(`Server is running on port ${port}`);
  }
  catch(error){
    console.error(error);
  }
});


app.use('/auth',userrouter);
app.get('/', (req, res) => {    
    res.send('Hello World!');
});