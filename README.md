# seurat
[![Build Status](http://img.shields.io/travis/mohayonao/seurat.svg?style=flat-square)](https://travis-ci.org/mohayonao/seurat)
[![NPM Version](http://img.shields.io/npm/v/seurat.svg?style=flat-square)](https://www.npmjs.org/package/seurat)
[![Dependency Status](http://img.shields.io/david/mohayonao/seurat.svg?style=flat-square)](https://david-dm.org/mohayonao/seurat)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> JavaScript utility to generate a braille text from an image

## Installation

### Requirements

- [GraphicsMagick](http://www.graphicsmagick.org/)

### NPM

```
$ npm install -g seurat
```

## Usage

```
$ seurat image/lena.jpg

⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣛⣃⡁⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⣠⠄⠉
⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠜⡻⢿⣿⣿⣿⣿⣿⡟⠛⠛⠛⠛⢻⣿⣿⠓⠏⠈⠋⡆⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⣰⠟⠁⠀⠀
⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠈⠈⣠⣾⢣⣿⡟⢻⣀⣤⣠⣤⣤⣈⡛⠋⠉⣧⡄⠄⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠘⠁⠀⠀⠀⠀
⣿⣿⠏⢹⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⣫⠴⠞⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⠁⠀⠀⠀⠀⠀⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠂⠀⠀⠀⠀⠀⠀
⣿⠋⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠁⠀⠀⠈⠟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⢿⣿⣿⡏⠙⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⣠
⠁⠀⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⣠⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⢸⣿⣿⡇⠀⠈⢿⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⢠⣾⣿
⠀⠀⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⢀⡞⠀⠀⠀⠀⣨⣿⣿⡿⢋⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⢸⣿⣿⡇⠀⠀⢈⣽⣿⣟⠁⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿
⠀⠀⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⣸⡇⠀⠀⠀⠘⡡⠾⢉⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣼⣿⣿⣇⣠⣶⣿⣿⣿⣿⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⣿
⠀⠀⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⣿⣆⠀⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿
⠀⠀⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⣿⣿⣧⠀⢠⣾⠟⣡⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⠁⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⢼⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⣿⣿⢻⡂⠙⣡⡾⢫⡼⣿⢟⠕⠀⠀⠻⠊⠉⠉⠉⢁⣽⣿⣿⣿⣿⣿⣿⣿⡿⠟⠋⣁⡼⠃⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⢃⡼⢋⠐⣩⠞⠃⠉⠀⠀⠀⠀⠀⠀⢠⣴⣿⣿⣿⣿⣿⣿⠟⠋⠉⣶⣶⡿⠋⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⣿⡿⠀⠐⣩⠔⠀⠀⠀⠀⠀⠀⠀⠀⠀⣨⣾⣿⣿⣿⣿⣿⣿⣿⣷⠀⠈⣾⠉⠀⠀⠀⠀⠀⢀⣧⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀⠀⠂⠀⠸⠇⣠⡼⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⢸⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⢸⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⣰⡃⠹⠎⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⢿⠭⡉⠛⢿⣿⣿⣿⡿⠟⠃⠀⠈⡇⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⢸⣿⣿⣿⠃⠀⠀⠀⠀⠰⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⢋⠀⠀⢀⣦⠈⠚⣿⣿⠏⠀⣤⠀⠀⠀⡇⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⢸⣿⣿⣿⡇⠀⠀⠠⡴⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⠏⢱⣿⣷⣦⣭⣿⣿⣴⢻⣿⣿⣯⡁⠀⠀⠀⣧⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⢸⣿⣿⣿⡇⠀⠀⡉⠁⠀⠀⢀⠀⠀⠀⠀⠀⠢⠀⠀⣰⡟⠁⠀⢸⣿⣿⣿⣿⣿⣿⣿⢻⣿⣿⣿⣿⠀⠀⠀⢿⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⢸⣿⣿⣿⡇⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠊⠁⢠⣴⠏⠀⠀⠀⢸⣿⣿⣿⣿⣿⡏⡷⠜⣿⣿⣿⡏⠀⠀⠀⢸⡄⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⢸⣿⣿⣿⡇⠀⢠⠀⠀⠀⠀⠀⠱⠀⠀⠀⣠⡔⡸⠃⠀⠀⠀⠀⢈⣿⣿⣿⣿⣿⣿⣶⣶⣾⣿⡿⠁⠀⠀⠀⠘⡇⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⢸⣿⣿⣿⣇⠀⡠⠀⠀⠀⢀⠀⠀⠈⣠⣷⢏⠔⠀⠀⠀⠀⠀⠀⠸⠻⣿⣿⣉⠛⣛⣋⣻⣉⡹⠁⠀⠀⠀⠀⠀⣧⣿⣿⣿⣿⣿⣿⣿⣧⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⢸⣿⣿⣿⡇⠐⠁⠀⠀⠀⠨⢠⠀⠂⠋⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣬⣭⣽⡟⠁⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⠉⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⢸⣿⣿⣿⢇⡠⠀⠀⠀⠀⢠⠀⠁⠊⡆⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣉⣛⣿⣿⣿⣿⣁⠀⠀⠀⠀⠀⠀⠀⣿⠛⠿⠿⣿⣿⣿⡿⢸⣿⣿⣿⣿⡿⠟⠋
⣤⡀⠀⠈⣿⣿⣿⣏⠄⠀⠀⠀⠀⠀⠀⠘⠀⢀⡘⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⢜⣿⣿⣿⣿⣿⣿⣿⣶⣤⡀⠀⠀⠀⣿⣶⣦⣤⣀⠀⠀⡀⢸⣿⣿⡿⠋⠀⠀⠀
⠘⣿⡆⠀⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⡌⢠⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⢀⣿⣿⣿⣿⣿⣧⠄⣧⣿⣿⡿⠁⠀⠀⠀⠀
⠀⢻⡇⠀⣿⣿⣿⡟⠀⠀⠀⠀⠂⠀⠀⠀⠀⠀⣸⠇⡜⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⢸⣿⣿⣿⣿⣿⠃⣾⣿⣿⣿⠃⠀⠀⠀⠀⠀
⠀⢸⣿⠀⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠢⡀⠀⠀⠀⠀⠀⠘⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡸⠿⢿⣿⣿⣿⣶⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
⠀⢸⣿⠀⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢢⡀⠀⠀⠀⠀⠀⠀⠀⠁⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠈⠙⣻⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀
⠀⠸⣿⡆⣿⣿⣿⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⢽⠟⠋⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣿⡧⣻⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣽⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⡀⢀⡀⠀⠀⠀⠀⢀⠀⠀⠀⠀
```

\* The braille characters cannot display on Windows.

## Options

```
$ seurat --help

Usage: seurat [options] path/to/image

  -w, --width Number      width(cols) of the converted text
  -h, --height Number     height(rows) of the converted text
  -t, --threshold Number  threshold for binarization
  -i, --invert            invert to negative
  -o, --output String     write the converted text to this file
  -p, --print             print out the converted text
  -v, --version           show version
  --help                  show help
```

## API

- `convert(src: string|Buffer, opts: object): Promise<string>`
  - `src: string` path of the source image file
  - `src: Buffer` Buffer of the source image
  - `opts: object`
    - `width: number` width(cols) of the converted text - default: 60
    - `height: number` height(rows) of the converted text
    - `threshold: number` threshold for binarization - default: 50(%)
    - `invert: boolean` invert to negative

## Example

```javascript
var seurat = require("seurat");

seurat.convert("image/lena.jpg", {
  width: 100, height: 50, threshold: 25
}).then(function(result) {
  conosle.log(result);
});
```

## License

[MIT](http://mohayonao.mit-license.org/)
