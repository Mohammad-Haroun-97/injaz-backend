const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require('body-parser');
const routes = require('./routes')
const mongoose = require('mongoose');
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

mongoose.connect('mongodb://Mohammad-Haroun:awd123.@myfirstcluster-shard-00-00.xvzzr.mongodb.net:27017,myfirstcluster-shard-00-01.xvzzr.mongodb.net:27017,myfirstcluster-shard-00-02.xvzzr.mongodb.net:27017/Form?ssl=true&replicaSet=atlas-tlumk8-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

function start(port) {
  app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
  });
}

module.exports = { app, start };