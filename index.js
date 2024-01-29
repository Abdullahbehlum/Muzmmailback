const express = require('express');
const app = express();
const Cors = require('cors');
const env = require('dotenv');
const bodyParser = require('body-parser');
env.config();
const port = process.env.PORT;
app.use(express.json());
app.use(Cors());
const path = require('path')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static("public/images"));

const ConnectDb = require("./config/Config")
const ProductAddRoute = require("./controllers/api/insert/AddProductApi");
ConnectDb();
app.use("/api/v1/insert", ProductAddRoute);
app.listen(port, () => {
    console.log("Backend listening on port " + port);
})