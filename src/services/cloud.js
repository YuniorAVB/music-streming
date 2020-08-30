const { json } = require("express");
const fs = require("fs");
const path = require("path");

const cloud = {
  readDataBase: async function () {
    try {
      let dataBase = await fs.readFileSync(
        path.join(__dirname, "../", "database", "data.json")
      );

      return JSON.parse(dataBase).usuarios;
    } catch (error) {
      throw new Error(error);
    }
  },
  readFilesUser: async function (ruta) {
    try {
      let files = await fs.readdirSync(
        path.join(__dirname, "../", "public", "uploads", ruta)
      );
      console.log(files);

      return files;
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = cloud;
