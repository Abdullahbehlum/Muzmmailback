const  mongoose =  require("mongoose");
const dotenv = require("dotenv").config();
const ConnectDb = async () => {
  try {
    const dbUrl = process.env.MONGO_URL;
     await mongoose.connect(dbUrl ,     {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 30000,
        socketTimeoutMS: 30000,
        poolSize: 10, 
    }
);
    console.log("Database connection established");
  } catch (error) {
    await console.log(error.message);
  }
};
module.exports = ConnectDb
