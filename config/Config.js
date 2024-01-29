const  mongoose =  require("mongoose");
const dotenv = require("dotenv").config();
const ConnectDb = async () => {
  try {
    const dbUrl = process.env.MONGO_URL;
     await mongoose.connect(dbUrl);
    console.log("Database connection established");
  } catch (error) {
    await console.log(error.message);
  }
};
module.exports = ConnectDb
