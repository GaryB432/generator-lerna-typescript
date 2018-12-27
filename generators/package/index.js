"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const path = require("path");
const Case = require("case");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument("packageName", {
      type: String,
      required: true,
      desc: "the name of the package"
    });
  }

  initializing() {
    this.log(chalk.gray(`${this.options.packageName} coming right up`));
    // This.cwd = path.basename(process.cwd());
  }

  writing() {
    const pfn = fname => path.join("packages", this.options.packageName, fname);
    const context = {
      packageName: Case.kebab(this.options.packageName)
    };
    this.fs.copyTpl(
      this.templatePath("tsconfig.json"),
      this.destinationPath(pfn("tsconfig.json")),
      context
    );
    this.fs.copyTpl(
      this.templatePath("__tests__/index.spec.ts"),
      this.destinationPath(pfn("__tests__/index.spec.ts")),
      context
    );
    this.fs.copyTpl(
      this.templatePath("src/index.ts"),
      this.destinationPath(pfn("src/index.ts")),
      context
    );
    this.fs.copyTpl(
      this.templatePath("package.json"),
      this.destinationPath(pfn("package.json")),
      context
    );
    this.fs.copyTpl(
      this.templatePath("tsconfig.json"),
      this.destinationPath(pfn("tsconfig.json")),
      context
    );
  }
};
