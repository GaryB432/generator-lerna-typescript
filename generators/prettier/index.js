"use strict";
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  writing() {
    const pkgJson = {
      scripts: {
        format: `prettier --write "**/*.ts"  "!**/lib/**"`
      },
      devDependencies: {
        prettier: "^1.15.3"
      },
      prettier: {
        printWidth: 100,
        singleQuote: true,
        trailingComma: "es5"
      }
    };

    this.fs.extendJSON(this.destinationPath("package.json"), pkgJson);
  }

  install() {
    this.npmInstall();
  }
};
