"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-lerna-typescript:app", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ someAnswer: true });
  });

  it("creates files", () => {
    assert.file([
      ".gitignore",
      "jest.config.js",
      "lerna.json",
      "package.json",
      "README.md",
      "tsconfig.json",
      "tslint.json"
    ]);
  });
});
