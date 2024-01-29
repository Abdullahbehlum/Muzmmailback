const express = require('express');
const multer = require('multer');
const route = express.Router();
const path = require('path')
const AddCategorySchema = require("../../../models/products/CategorySchema")
const storage = multer.diskStorage({
    destination: 'public/productCategory',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage: storage });
route.post("/", upload.single('image'), async (req, res) => {
    try {
        const imageurl = req.file ? `/productCategory/${req.file.filename}` : null
        const Category = await new AddCategorySchema({
            category_img: imageurl,
            category_name
        })
        const ImgCategory = await Category.save();
        res.status(200).json({ msg: 'category saved successfully', category: ImgCategory })
    } catch (error) {
        res.status(500).json({ msg: "Category add failed", error: error.message });
    }
})
route.get('/', async (req, res) => {
    const GetCategory = await AddCategorySchema.find();
    res.status(201).json({ msg: 'GetCategory get successfully', Category: GetCategory })

})
module.exports = route