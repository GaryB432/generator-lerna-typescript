"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-lerna-typescript:package", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/package"))
      .withArguments("tester")
      .withPrompts({ someAnswer: true });
  });

  it("creates files", () => {
    assert.file([
      "packages/tester/package.json",
      "packages/tester/tsconfig.json"
    ]);
  });
});
