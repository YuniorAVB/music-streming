const cloudController = require("../controllers/cloud.controller");
const route = require("express").Router();

route.get("/cloud", cloudController.getRenderCloud);

route.post("/upload", cloudController.fileUpload);

module.exports = route;
