const fs = require("fs");

class ComponentCreator {
  constructor(newComponentName) {
    this.name = newComponentName;
    this.newComponentPath = "./" + newComponentName + "/";
  }

  createNewDirectory() {
    fs.mkdirSync(this.name);
  }

  createNewModelFile() {
    let modelsText = "//This is a new model";
    fs.writeFile(
      this.newComponentPath + "models.js",
      modelsText,
      function (err) {
        if (err) throw err;
      }
    );
  }
}

module.exports.ComponentCreator = ComponentCreator;
