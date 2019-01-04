"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const Case = require("case");
const path = require("path");

module.exports = class extends Generator {
  initializing() {
    this.log(
      yosay(`Welcome to the rad ${chalk.red("lerna-typescript")} generator!`)
    );

    this.composeWith(require.resolve("../package"), { arguments: ["greeter"] });
    this.composeWith(require.resolve("../prettier"));

    this.cwd = path.basename(process.cwd());
  }

  writing() {
    const context = {
      appname: Case.kebab(this.cwd)
    };
    this.fs.copy(
      this.templatePath("_gitignore"),
      this.destinationPath(".gitignore")
    );
    this.fs.copy(
      this.templatePath("jest.config.js"),
      this.destinationPath("jest.config.js")
    );
    this.fs.copy(
      this.templatePath("lerna.json"),
      this.destinationPath("lerna.json")
    );
    this.fs.copy(
      this.templatePath("_package.json"),
      this.destinationPath("package.json")
    );
    this.fs.copyTpl(
      this.templatePath("README.md"),
      this.destinationPath("README.md"),
      context
    );
    this.fs.copy(
      this.templatePath("_tsconfig.json"),
      this.destinationPath("tsconfig.json")
    );
    this.fs.copy(
      this.templatePath("tslint.json"),
      this.destinationPath("tslint.json")
    );
  }
  
  install() {
    this.installDependencies({ npm: true, bower: false, yarn: false });
  }
  
  end() {
    this.log(`Create a new package with ${chalk.green("yo lerna-typescript:package my-new-package")}.`);
  }
};
