"use strict";

import pkg from "../package";
import optionator from "optionator";

export let options = [
  {
    option: "width",
    alias: "w",
    type: "Number",
    description: "width(cols) of the converted text"
  },
  {
    option: "height",
    alias: "h",
    type: "Number",
    description: "height(rows) of the converted text"
  },
  {
    option: "threshold",
    alias: "t",
    type: "Number",
    description: "threshold for binarization"
  },
  {
    option: "invert",
    alias: "i",
    type: "Boolean",
    description: "invert to negative"
  },
  {
    option: "output",
    alias: "o",
    type: "String",
    description: "write the converted text to this file"
  },
  {
    option: "print",
    alias: "p",
    type: "Boolean",
    description: "print out the converted text"
  },
  {
    option: "version",
    alias: "v",
    type: "Boolean",
    description: "show version"
  },
  {
    option: "help",
    type: "Boolean",
    description: "show help"
  },
];

export let parse = (argv, callback) => {
  let parser = optionator({
    prepend: `Usage: ${pkg.name} [options] path/to/image`,
    options: options
  });
  let opts = parser.parse(argv);

  if (opts.help || opts._.length === 0) {
    return console.log(parser.generateHelp());
  }

  if (opts.version) {
    return console.log("v" + pkg.version);
  }

  callback(opts._, opts);
};

export default parse;
