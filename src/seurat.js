"use strict";

import "babel/polyfill";

import gm from "gm";
import pngparse from "pngparse";
import prominence from "prominence";

const DEFAULT_WIDTH = 60;
const DEFAULT_THRESHOLD = 50;

let brailleChars = "⠀⠁⠂⠃⠄⠅⠆⠇⡀⡁⡂⡃⡄⡅⡆⡇⠈⠉⠊⠋⠌⠍⠎⠏⡈⡉⡊⡋⡌⡍⡎⡏⠐⠑⠒⠓⠔⠕⠖⠗⡐⡑⡒⡓⡔⡕⡖⡗⠘⠙⠚⠛⠜⠝⠞⠟⡘⡙⡚⡛⡜⡝⡞⡟⠠⠡⠢⠣⠤⠥⠦⠧⡠⡡⡢⡣⡤⡥⡦⡧⠨⠩⠪⠫⠬⠭⠮⠯⡨⡩⡪⡫⡬⡭⡮⡯⠰⠱⠲⠳⠴⠵⠶⠷⡰⡱⡲⡳⡴⡵⡶⡷⠸⠹⠺⠻⠼⠽⠾⠿⡸⡹⡺⡻⡼⡽⡾⡿⢀⢁⢂⢃⢄⢅⢆⢇⣀⣁⣂⣃⣄⣅⣆⣇⢈⢉⢊⢋⢌⢍⢎⢏⣈⣉⣊⣋⣌⣍⣎⣏⢐⢑⢒⢓⢔⢕⢖⢗⣐⣑⣒⣓⣔⣕⣖⣗⢘⢙⢚⢛⢜⢝⢞⢟⣘⣙⣚⣛⣜⣝⣞⣟⢠⢡⢢⢣⢤⢥⢦⢧⣠⣡⣢⣣⣤⣥⣦⣧⢨⢩⢪⢫⢬⢭⢮⢯⣨⣩⣪⣫⣬⣭⣮⣯⢰⢱⢲⢳⢴⢵⢶⢷⣰⣱⣲⣳⣴⣵⣶⣷⢸⢹⢺⢻⢼⢽⢾⢿⣸⣹⣺⣻⣼⣽⣾⣿";

let createParams = (opts = {}, ratio = 1) => {
  let result = {};

  if (typeof opts.width !== "number") {
    if (typeof opts.height !== "number") {
      result.width  = DEFAULT_WIDTH;
      result.height = result.width * ratio * 0.5;
    } else {
      result.width  = opts.height / ratio * 2;
      result.height = opts.height;
    }
  } else {
    if (typeof opts.height !== "number") {
      result.width  = opts.width;
      result.height = result.width * ratio * 0.5;
    } else {
      result.width  = opts.width;
      result.height = opts.height;
    }
  }

  if (typeof opts.threshold !== "number") {
    result.threshold = DEFAULT_THRESHOLD;
  } else {
    result.threshold = opts.threshold;
  }

  result.width  = (result.width * 2)|0;
  result.height = (result.height * 4)|0;
  result.threshold = Math.max(0, Math.min(result.threshold|0, 100));
  result.invert = !!opts.invert;

  return result;
};

let brailleCodeAt = (png, x, y) => {
  let num = 0;

  num += png.getPixel(x + 0, y + 0) !== 255 ?   1 : 0;
  num += png.getPixel(x + 0, y + 1) !== 255 ?   2 : 0;
  num += png.getPixel(x + 0, y + 2) !== 255 ?   4 : 0;
  num += png.getPixel(x + 0, y + 3) !== 255 ?   8 : 0;
  num += png.getPixel(x + 1, y + 0) !== 255 ?  16 : 0;
  num += png.getPixel(x + 1, y + 1) !== 255 ?  32 : 0;
  num += png.getPixel(x + 1, y + 2) !== 255 ?  64 : 0;
  num += png.getPixel(x + 1, y + 3) !== 255 ? 128 : 0;

  return num;
};

export async function convert(src, opts) {
  let im = gm(src);
  let size = await prominence(im).size();
  let params = createParams(opts, size.height / size.width);

  im = im.resize(params.width, params.height, "!");
  im = im.threshold(`${params.threshold}%`);

  if (params.invert) {
    im = im.negative();
  }

  let buffer = await prominence(im).toBuffer("png");
  let png = await prominence(pngparse).parse(buffer);

  let result = "";

  for (let y = 0; y < png.height; y += 4) {
    for (let x = 0; x < png.width; x += 2) {
      result += brailleChars.charAt(brailleCodeAt(png, x, y));
    }
    result += "\n";
  }

  return result.trim();
};

export default convert;
