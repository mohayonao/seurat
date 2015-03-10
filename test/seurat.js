"use strict";

import assert from "power-assert";
import * as seurat from "../src/seurat";

describe("seurat", () => {
  describe("convert(src: string|Buffer, opts: object): Promise<string>", () => {
    it("works", () => {
      let filename = `${__dirname}/../image/lena.jpg`;
      return seurat.convert(filename, {
        width: 40, height: 30, threshold: 50
      }).then((result) => {
        console.log(result);
        assert(typeof result === "string");
        assert(result.split("\n").length === 30);
        assert(result.split("\n")[0].length === 40);
      }, () => {
        throw new Error("NOT REACHED");
      });
    });
  });
});
