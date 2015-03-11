#!/usr/bin/env node

"use strict";

import fs from "fs";
import prominence from "prominence";
import * as seurat from "./seurat";
import * as options from "./options";

options.parse(process.argv, (args, opts) => {
  prominence(fs, "readFile", [ args[0] ]).then((data) => {
    return seurat.convert(data, opts);
  }).then((result) => {
    if (!opts.print && opts.output) {
      return prominence(fs, "writeFile", [ opts.output, result ]);
    } else {
      console.log(result);
      return result;
    }
  }).catch(console.error.bind(console));
});
