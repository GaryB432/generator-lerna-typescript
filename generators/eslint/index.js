"use strict";
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  writing() {
    this.fs.copy(
      this.templatePath("_eslintrc.js"),
      this.destinationPath(".eslintrc.js")
    );
    const pkgJson = {
      scripts: {
        lint:
          'eslint "packages/**/{src,__tests__}/**/*.ts" -f eslint-formatter-friendly'
      },
      devDependencies: {
        "@typescript-eslint/eslint-plugin": "^2.0.0",
        "@typescript-eslint/parser": "^2.0.0",
        eslint: "^6.3.0",
        "eslint-config-prettier": "^6.1.0",
        "eslint-formatter-friendly": "^7.0.0",
        "eslint-plugin-prettier": "^3.1.0"
      }
    };

    this.fs.extendJSON(this.destinationPath("package.json"), pkgJson);
  }

  install() {
    this.npmInstall();
  }
};
