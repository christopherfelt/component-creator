const fs = require("fs");
const { ComponentCreator } = require("./utils/ComponentCreator.cjs");

// let newDirName = process.argv[2];

function createNewExpressComponent(newComponentName) {
  console.log("made it here");
  const cc = new ComponentCreator(newComponentName);
  cc.createNewDirectory();
  cc.createNewModelFile();
  // fs.mkdirSync(newComponentName);
  // let newComponentPath = "./" + newComponentName + "/";
  // let modelsText = "//This is a new model";
  // fs.writeFile(newComponentPath + "models.js", modelsText, function (err) {
  //   if (err) throw err;
  // });
}

module.exports = { createNewExpressComponent };
require("make-runnable/custom")({
  printOutputFrame: false,
});
