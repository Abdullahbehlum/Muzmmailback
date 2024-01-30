const express = require('express');
const multer = require('multer');
const route = express.Router();
const path = require('path')
const AddProductApi = require("../../../models/products/ProductSchema");
const storage = multer.diskStorage({
    destination: 'public/images/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage: storage });
route.post("/", function upload.any('images') ,async (req, res) => {
    try {
        const { name, price, Description,
        } = req.body;
        // const imageUrl = req.file ? `/productImages/${req.file.filename}` : null;
        const imagePaths = req.files.map(file => `/images/${file.filename}`);

        const newProduct = new AddProductApi({
            name,
            price,
            Description,
            // image: imageUrl,
            gelleryimges: imagePaths
        });

        const savedProduct = await newProduct.save();
        res.status(201).json({ msg: 'product Add successfully', products: savedProduct })

    } catch (error) {
        res.status(500).json({ msg: 'Product Add failed', error: error.message })
    }
})
route.get("/", function async (req, res) => {
    try {
     const page = req.query.page || 1;
const limit = 10;  // Adjust as needed
const product = await AddProductApi.find().skip((page - 1) * limit).limit(limit).lean();
Th
        res.status(201).json({ msg: 'product get successfully', products: product })
    } catch (error) {
        res.status(500).json({ msg: 'Product Add failed', error: error.message })
    }
})
module.exports = route;
