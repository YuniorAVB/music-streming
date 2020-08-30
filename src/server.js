const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const expressFileUpload = require("express-fileupload")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressFileUpload())

app.use(express.static(path.join(__dirname,'public')))

app.use(require('./routes/index.routes'))
app.use(require('./routes/cloud.routes'))




module.exports = app;
