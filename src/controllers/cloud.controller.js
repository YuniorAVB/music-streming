const path = require("path");

const cloudController = {
  getRenderCloud: function (req, res, next) {
    res.render("pages/cloud");
  },
  fileUpload: function (req, res, next) {
    const fileUploadUser = req.files.file_upload;
    const dirUser = req.body.dir_user;
    const nameFile = req.files.file_upload.name;

    
    fileUploadUser.mv(
      path.join(__dirname, "../", "public", "uploads", dirUser,nameFile),
      function (error) {
        if (error) {
          throw new Error("Dir not Found");
          process.exit(0);
        }
        res.send({ messaje: "success", state: true });
      }
    );
  },
};

module.exports = cloudController;
