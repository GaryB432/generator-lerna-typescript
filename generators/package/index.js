"use strict";
const Generator = require("yeoman-generator");
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

  writing() {
    const context = {
      packageName: Case.kebab(this.options.packageName)
    };
    const pfn = fname => path.join("packages", context.packageName, fname);
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
      this.templatePath("_package.json"),
      this.destinationPath(pfn("package.json")),
      context
    );
    this.fs.copyTpl(
      this.templatePath("_tsconfig.json"),
      this.destinationPath(pfn("tsconfig.json")),
      context
    );
  }
};
