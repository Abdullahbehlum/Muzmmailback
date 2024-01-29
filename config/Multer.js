const express = require('express');
const app = express();
app.use('/productImages', express.static('public/productImages'))
const storage = multer.diskStorage({
    destination: 'public/productImages',
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });