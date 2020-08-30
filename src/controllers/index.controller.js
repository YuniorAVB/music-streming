const cloud = require("../services/cloud");

const indexController = {
  getRenderIndex: function (req, res, next) {
    res.render("pages/index");
  },
  validateUser: async function (req, res, next) {
    let datos = await cloud.readDataBase();

    let { usuario, password } = req.body;

    let userLogin = datos.find(
      (ele) => ele.usuario == usuario && ele.password == password
    );
    if (userLogin) {
     let files = await cloud.readFilesUser(userLogin.dir);
      res.render('pages/cloud',{userLogin,files})
    }
  },
};

module.exports = indexController;
