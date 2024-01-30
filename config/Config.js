const  mongoose =  require("mongoose");
const dotenv = require("dotenv").config();
const ConnectDb = async () => {
  try {
    const dbUrl = process.env.MONGO_URL || "mongodb+srv://abdullahbehlum187:Abdullah12@cluster0.prn2qot.mongodb.net/EcomerceMZ?retryWrites=true&w=majority";
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
