const mongoose = require('mongoose');
const CategorySchema = mongoose.Schema({
    category_img: String,
    category_name: String,
})
const AddCategoryApi = mongoose.models.addcategory || mongoose.model('addcategory',CategorySchema);
module.exports = AddCategoryApi;