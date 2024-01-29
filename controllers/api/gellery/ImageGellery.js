// const express = require("express");
// const GelleryImageSchema = require("../../../models/products/GellerySchema");
// const Route = express.Router();
// const multer = require('multer');
// const path = require('path')
// const storage = multer.diskStorage({
//     destination: 'public/images',
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     },
// });
  
//   const upload = multer({ storage });
  
  
  
// Route.post("/", upload.any('images',), async (req, res) => {
//     try {
//         const imagePaths = req.files.map(file => `/images/${file.filename}`);

//         const gellery = await GelleryImageSchema({
//             gelleryimges: imagePaths,
//         })
//         const gelleryUrlSave = await gellery.save();
//         res.status(201).json({ msg: "Gellery images uploaded successfully", gel: gelleryUrlSave })
//     } catch (error) {
//         res.status(500).json({ msg: "Internal Server Error", error: error.message })
//     }
// });
// Route.get("/", async (req, res) => {
//     try {
//         const gelleryimg = await GelleryImageSchema.find();
//         res.status(201).json({ msg: "gellery image get successfully", gel: gelleryimg })
//     } catch (error) {
//         res.status(500).json({ msg: "Image gellery failed!", error: error.message })
//     }
// })
// module.exports = Route