const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    Description: String,
    Category: String ,
    gelleryimges: [String],
})
const AddProductApi =
    mongoose.models.addproduct || mongoose.model("addproduct", ProductSchema);
module.exports = AddProductApi