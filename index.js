const fs = require("fs");

let datos = null;

fs.readFile("./data.json", "utf8", function (error, data) {
  if (error) {
    throw new Error("File not Found");
  }
  datos = JSON.parse(data);

  datos.usuarios.push({
    usuario: "frank",
    ruta: "frank-dir",
  });

  fs.writeFile("./data.json", JSON.stringify(datos), "utf8", function (error) {
    if (error) {
      throw new Error("Fail Write To File");
    }

    console.log("Success", datos);
  });
});
