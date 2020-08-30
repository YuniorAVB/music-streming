const indexController = require("../controllers/index.controller");
const route = require("express").Router();

route.get("/", indexController.getRenderIndex);

route.post("/session",indexController.validateUser)

module.exports = route;
