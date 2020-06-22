# Awesome image projects! [![Status](https://github.com/Wandalen/OverviewImage/workflows/Test/badge.svg)](https://github.com/Wandalen/OverviewImage/actions?query=workflow%3ATest)

Curated overview of awesome Javascript projects to read / write / convert / compress / process images of different formats.

### Projects to read images

| **Name** | **Read** | **Code** | **Modular** | **Interface** | **Language** | **B.s** | **N.s** | **Deps** | **Working** | **Agg** | **B** | **Str** | **S** | **A** | **H** |
| --- | --- | --- | --- | --- | --- | -- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [**sharp**](https://github.com/lovell/sharp) | jpg, png, webp, tiff, gif, svg | open | yes | Native binding | C++ | - | + | 1454 | Working | no | + | + | - | + | + |
| [**jimp**](https://github.com/oliver-moran/jimp/tree/master/packages/jimp) | jpg, png, gif, tiff, bmp | open | yes | Pure | JavaScript | + | + | 1098 | Working | yes |   |   |   |   |   |
| [**image-js**](https://github.com/image-js/image-js) | jpg, png, tiff | open | yes | Pure | TypeScript | + | + | 21 | Working | yes |   |   |   |   |   |
| [**pngjs**](https://github.com/lukeapage/pngjs) | png | open | yes | Pure | JavaScript | + | + | 577 | Working | no | + | + | + | + | - |
| [**jpeg-js**](https://github.com/eugeneware/jpeg-js) | jpg | open | yes | Pure | JavaScript | + | + | 170 | Working | no | + | + | - | - | - |
| [**png-js**](https://github.com/foliojs/png.js) | png | open | yes | Pure | JavaScript | + | + | 75 | Working | no | + | - | - | + | - |
| [**bmp-js**](https://github.com/shaozilee/bmp-js) | bmp | open | yes | Pure | JavaScript | + | + | 39 | Working | no | + | + | - | - | - |
| [**utif**](https://github.com/photopea/UTIF.js) | gif | open | yes | Pure | JavaScript | + | + | 29 | Working | no | + | + | - | - | + |
| [**png.js**](https://github.com/arian/pngjs) | png | open | yes | Pure | JavaScript | + | + | 11 | Working | no | + | - | - | + | + |
| [**node-libpng**](https://github.com/Prior99/node-libpng) | png | open | Native binding | Pure | C++ | + | + | 2 | Working | no | + | + | - | + (if reading from a file) | - |
| [**lwip**](https://github.com/EyalAr/lwip) | jpg, png, gif | open | yes | Native binding | C | - | + | 79 | Broken | no |   |   |   |   |   |
| [**caman**](https://github.com/meltingice/CamanJS/) | jpg, png | open | yes | Pure | CoffeeScript | + | + | 5 | Broken | yes |   |   |   |   |   |
| [**omggif**](https://github.com/deanm/omggif) | gif | open | yes | Pure | JavaScript | + | + | 63 | Broken | no |   |   |   |   |   |

### Projects to write images

| **Name** | **Write** | **Code** | **Modular** | **Interface** | **Language** | **B.s** | **N.s** | **Deps** | **Working** | **Agg** |
| --- | --- | --- | --- | --- | --- | -- | --- | --- | --- | --- |
| [**jimp**](https://github.com/oliver-moran/jimp/tree/master/packages/jimp) | jpg, png, gif, tiff, bmp | open | yes | Pure | JavaScript | + | + | 1098 | Working | yes |
| [**sharp**](https://github.com/lovell/sharp) | jpg, png, webp, tiff | open | yes | Native binding | C++ | - | + | 1454 | Working | no |
| [**image-js**](https://github.com/image-js/image-js) | jpg, png | open | yes | Pure | TypeScript | + | + | 21 | Working | yes |
| [**pngjs**](https://github.com/lukeapage/pngjs) | png | open | yes | Pure | JavaScript | + | + | 577 | Working | no |
| [**jpeg-js**](https://github.com/eugeneware/jpeg-js) | jpg | open | yes | Pure | JavaScript | + | + | 170 | Working | no |
| [**omggif**](https://github.com/deanm/omggif) | gif | open | yes | Pure | JavaScript | + | + | 63 | Working | no |
| [**bmp-js**](https://github.com/shaozilee/bmp-js) | bmp | open | yes | Pure | JavaScript | + | + | 39 | Working | no |
| [**node-libpng**](https://github.com/Prior99/node-libpng) | png | open | yes | Native binding | C++ | + | + | 2 | Working | no |
| [**libjpeg**](https://github.com/pkrumins/node-jpeg) | png | open | yes | Native binding | C++ | + | + | 0 | Working | no |
| [**lwip**](https://github.com/EyalAr/lwip) | jpg, png, gif | open | yes | Native binding | C | - | + | 79 | Broken | no |

### Projects to convert images

| **Name** | **R** | **W** | **Code** | **Modular** | **Interface** | **Language** | **B.s** | **N.s** | **Deps** | **Working** |
| --- | --- | --- | --- | --- | --- | --- | -- | --- | --- | --- |
| [**sharp**](https://github.com/lovell/sharp) | jpg, png, webp, tiff, gif, svg | jpg, png, webp, tiff | open | yes | Native binding | C++ | - | + | 1454 | Working |
| [**jimp**](https://github.com/oliver-moran/jimp/tree/master/packages/jimp) | jpg, png, gif, tiff, bmp | jpg, png, gif, tiff, bmp | open | yes | Pure | JavaScript | + | + | 1098 | Working |
| [**image-conversion**](https://github.com/WangYuLue/image-conversion) | jpg, png, gif | jpg, png, gif | open | yes | Pure | TypeScript | + | - | 2 | Working |
| [**image-js**](https://github.com/image-js/image-js) | jpg, png, tiff | jpg, png | open | yes | Pure | TypeScript | + | + | 21 | Working |
| [**imagetracerjs**](https://github.com/jankovicsandras/imagetracerjs) | - | svg | open | yes | Pure | JavaScript | + | + | 5 | Working |
| [**gm**](https://github.com/aheckmann/gm) | jpg, png, gif, pdf, webp | jpg, png, gif, pdf, webp | closed | yes | CUI adapter | C | - | + | 1124 | Working |
| [**lwip**](https://github.com/EyalAr/lwip) | jpg, png, gif | jpg, png, gif | open | yes | Native binding | C | - | + | 79 | Broken |
| [**caman**](https://github.com/meltingice/CamanJS/) | jpg, png | - | open | yes | Pure | CoffeeScript | + | + | 5 | Broken |

### Projects to compress images

| **Name** | **R** | **W** | **Code** | **Modular** | **Interface** | **Language** | **B.s** | **N.s** | **Deps** | **Working** |
| --- | --- | --- | --- | --- | --- | --- | -- | --- | --- | --- |
| [**sharp**](https://github.com/lovell/sharp) | jpg, png, webp, tiff, gif, svg | jpg, png, webp, tiff | open | yes | Native binding | C++ | - | + | 1454 | Working |
| [**jimp**](https://github.com/oliver-moran/jimp/tree/master/packages/jimp) | jpg, png, gif, tiff, bmp | jpg, png, gif, tiff, bmp | open | yes | Pure | JavaScript | + | + | 1098 | Working |
| [**image-js**](https://github.com/image-js/image-js) | jpg, png, tiff | jpg, png | open | yes | Pure | TypeScript | + | + | 21 | Working |
| [**imgsquash**](https://github.com/eashish93/imgsquash) | jpg, png | jpg, png | open | Integrated GUI | Pure | JavaScript | + | + | - | Working |
| [**compressor**](https://github.com/fengyuanchen/compressorjs) | - | jpg, png | open | yes | Pure | JavaScript | + | - | 0 | Working |
| [**imagetracerjs**](https://github.com/jankovicsandras/imagetracerjs) | - | svg | open | yes | Pure | JavaScript | + | + | 5 | Working |
| [**gm**](https://github.com/aheckmann/gm) | jpg, png, gif, pdf, webp | jpg, png, gif, pdf, webp | closed | yes | CUI adapter | C | - | + | 1124 | Working |
| [**lwip**](https://github.com/EyalAr/lwip) | jpg, png, gif | jpg, png, gif | open | yes | Native binding | C | - | + | 79 | Broken |
| [**caman**](https://github.com/meltingice/CamanJS/) | jpg, png | - | open | yes | Pure | CoffeeScript | + | + | 5 | Broken |

### Projects to process images

| **Name** | **Code** | **Modular** | **Interface** | **Language** | **B.s** | **N.s** | **Deps**| **Working** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [**jimp**](https://github.com/oliver-moran/jimp/tree/master/packages/jimp) | open | yes | Pure | JavaScript | + | + | 1098 | Working |
| [**imagemin**](https://github.com/imagemin/imagemin) | open | yes | Pure | JavaScript | + | + | 693 | Working |
| [**resemblejs**](https://github.com/rsmbl/Resemble.js) | open | yes | Pure | JavaScript | + | + | 50 | Working |
| [**pica**](https://github.com/nodeca/pica) | open | yes | Pure | JavaScript | + | + | 47 | Working |
| [**upng-js**](https://github.com/photopea/UPNG.js) | open | yes | Pure | JavaScript | + | + | 29 | Working |
| [**image-js**](https://github.com/image-js/image-js) | open | yes | Pure | TypeScript | + | + | 21 | Working |
| [**smartcrop**](https://github.com/jwagner/smartcrop.js) | open | Integrated GUI | Pure | JavaScript | + | + | 19 | Working |
| [**tui-image-editor**](https://github.com/nhn/tui.image-editor) | open | yes | Pure | JavaScript | + | + | 15 | Working |
| [**merge-images**](https://github.com/lukechilds/merge-images) | open | yes | Pure | JavaScript | + | + | 11 | Working |
| [**@toast-ui/react-image-editor**](https://github.com/nhn/toast-ui.react-image-editor) | open | Integrated GUI | Pure | JavaScript | + | + | 2 | Working |
| [**marvinj**](https://github.com/gabrielarchanjo/marvinj) | open | yes | Pure | JavaScript | + | + | 0 | Working |
| [**sharp**](https://github.com/lovell/sharp) | open | yes | Native binding | C++ | - | + | 1454 | Working |
| [**cropperjs**](https://github.com/fengyuanchen/cropperjs) | open | Integrated GUI | Pure | JavaScript | + | - | 282 | Working |
| [**lwip**](https://github.com/EyalAr/lwip) | open | yes | Native binding | C | - | + | 79 | Working |
| [**pngjs-image**](https://github.com/YahooArchive/pngjs-image) | open | yes | Pure | JavaScript | - | + | 27 | Working |
| [**web-dsp**](https://github.com/shamadee/web-dsp) | open | yes | Native-binding | C++ | + | - | 0 | Working |
| [**lena.js**](https://github.com/davidsonfellipe/lena.js) | open | yes | Pure | JavaScript | + | - | 0 | Working |
| [**glfx-es6**](https://github.com/evanw/glfx.js) | open | yes | Pure | JavaScript | + | - | 0 | Working |
| [**img2css**](https://github.com/javierbyte/img2css) | open | Integrated GUI | Pure | JavaScript | + | - | - | Working |
| [**Filtrr2**](https://github.com/alexmic/filtrr/tree/master/filtrr2) | open | Integrated GUI | Pure | JavaScript | + | - | - | Working |
| [**gm**](https://github.com/aheckmann/gm) | closed | yes | CUI adapter | C | - | + | 1124 | Working |
| [**caman**](https://github.com/meltingice/CamanJS/) | open | yes | Pure | CoffeeScript | + | + | 5 | Broken |

### Readers' methods comaprison

| **Name** | **Buffer** | **Stream** | **Sync** | **Async** | **Head** |
| --- | --- | --- | --- | --- | --- |
| [**sharp**](https://github.com/lovell/sharp) | + | + | - | + | + |
| [**pngjs**](https://github.com/lukeapage/pngjs) | + | + | + | + | - |
| [**jpeg-js**](https://github.com/eugeneware/jpeg-js) | + | + | - | - | - |
| [**png-js**](https://github.com/foliojs/png.js) | + | - | - | + | - |
| [**bmp-js**](https://github.com/shaozilee/bmp-js) | + | + | - | - | - |
| [**utif**](https://github.com/photopea/UTIF.js) | + | + | - | - | + |
| [**png.js**](https://github.com/arian/pngjs) | + | - | - | + | + |
| [**node-libpng**](https://github.com/Prior99/node-libpng) | + | + | - | + (if reading from a file) | - |

### Format support comparison

| **Name** | **jpg** | **png** | **webp** | **tiff** | **gif** | **svg** | **bmp**|
| --- | --- | --- | --- | --- | --- | --- | --- |
| [**sharp**](https://github.com/lovell/sharp) | [R](https://github.com/lovell/sharp/blob/25b964e3dfe8766e082e364d76f6705b341cce44/src/libvips/cplusplus/vips-operators.cpp#L1607) [W](https://github.com/lovell/sharp/blob/25b964e3dfe8766e082e364d76f6705b341cce44/src/pipeline.cc#L696) | [R](https://github.com/lovell/sharp/blob/25b964e3dfe8766e082e364d76f6705b341cce44/src/libvips/cplusplus/vips-operators.cpp#L2298) [W](https://github.com/lovell/sharp/blob/25b964e3dfe8766e082e364d76f6705b341cce44/src/pipeline.cc#L721) | [R](https://github.com/lovell/sharp/blob/25b964e3dfe8766e082e364d76f6705b341cce44/src/libvips/cplusplus/vips-operators.cpp#L3283) [W](https://github.com/lovell/sharp/blob/25b964e3dfe8766e082e364d76f6705b341cce44/src/pipeline.cc#L739) | [R](https://github.com/lovell/sharp/blob/25b964e3dfe8766e082e364d76f6705b341cce44/src/libvips/cplusplus/vips-operators.cpp#L3160) [W](https://github.com/lovell/sharp/blob/25b964e3dfe8766e082e364d76f6705b341cce44/src/pipeline.cc#L756) | [R](https://github.com/lovell/sharp/blob/25b964e3dfe8766e082e364d76f6705b341cce44/src/libvips/cplusplus/vips-operators.cpp#L1197) | [R](https://github.com/lovell/sharp/blob/25b964e3dfe8766e082e364d76f6705b341cce44/src/libvips/cplusplus/vips-operators.cpp#L3041) | - |
| [**Jimp**](https://github.com/oliver-moran/jimp) | [R](https://github.com/oliver-moran/jimp/blob/942e635564e36fc243767531b4f8be036afa40b5/packages/test-utils/src/jgd.js#L40) [W](https://github.com/oliver-moran/jimp/blob/942e635564e36fc243767531b4f8be036afa40b5/packages/test-utils/src/jgd.js#L52) | [R](https://github.com/lukeapage/pngjs/blob/bdcc2763516ebf06a4b13dbe6fde6878ec802258/lib/parser.js#L6) [W](https://github.com/lukeapage/pngjs/blob/bdcc2763516ebf06a4b13dbe6fde6878ec802258/lib/packer.js#L9) | - | [R](https://github.com/photopea/UTIF.js/blob/2c498bbc192eaeb58e368ea84c9559a369004703/UTIF.js#L102) [W](https://github.com/photopea/UTIF.js/blob/2c498bbc192eaeb58e368ea84c9559a369004703/UTIF.js#L47) | [R](https://github.com/deanm/omggif/blob/0ec9069a525ec66223eadda3d62059d3685fd3b0/omggif.js#L366) [W](https://github.com/deanm/omggif/blob/0ec9069a525ec66223eadda3d62059d3685fd3b0/omggif.js#L29) | - | [R](https://github.com/shaozilee/bmp-js/blob/db2c466ca1869ddc09e4b2143404eb03ecd490db/lib/decoder.js#L8) [W](https://github.com/shaozilee/bmp-js/blob/db2c466ca1869ddc09e4b2143404eb03ecd490db/lib/encoder.js#L9) |
| [**lwip**](https://github.com/EyalAr/lwip) | [R](https://github.com/EyalAr/lwip/blob/a559d24364139958ab99c9e153431bb408a031c6/src/decoder/jpeg_decoder.cpp#L3) [W](https://github.com/EyalAr/lwip/blob/a559d24364139958ab99c9e153431bb408a031c6/src/encoder/jpeg_worker.cpp#L17) | [R](https://github.com/EyalAr/lwip/blob/a559d24364139958ab99c9e153431bb408a031c6/src/decoder/png_decoder.cpp#L3) [W](https://github.com/EyalAr/lwip/blob/a559d24364139958ab99c9e153431bb408a031c6/src/encoder/png_worker.cpp#L22) | - | - | [R](https://github.com/EyalAr/lwip/blob/a559d24364139958ab99c9e153431bb408a031c6/src/decoder/gif_decoder.cpp#L7) [W](https://github.com/EyalAr/lwip/blob/a559d24364139958ab99c9e153431bb408a031c6/src/encoder/gif_worker.cpp#L31) | - | - |
| [**image-js**](https://github.com/image-js/image-js) | [R](https://github.com/eugeneware/jpeg-js/blob/a2f7080781a5539c65c2b42927cae28f1f051be5/lib/decoder.js#L1067) [W](https://github.com/eugeneware/jpeg-js/blob/a2f7080781a5539c65c2b42927cae28f1f051be5/lib/encoder.js#L42) | [R](https://github.com/image-js/fast-png/blob/25fcf4e7de99d719df6dcc1bcef4f5ce51483e53/src/PNGDecoder.ts#L27) [W](https://github.com/image-js/fast-png/blob/25fcf4e7de99d719df6dcc1bcef4f5ce51483e53/src/PNGEncoder.ts#L24) | - | [R](https://github.com/image-js/tiff/blob/286d6edd1abdd9200ed982aa69feee1ed5ea62b4/src/tiffDecoder.ts#L54) | - | - | - |
| [**caman**](https://github.com/meltingice/CamanJS/) | [R](https://github.com/Automattic/node-canvas/blob/9cd9aa37fd8755f40dbbbc6ce1a0fb06ceefb87b/src/Image.cc#L1065) | [R](https://github.com/Automattic/node-canvas/blob/9cd9aa37fd8755f40dbbbc6ce1a0fb06ceefb87b/src/Canvas.cc#L246) | - | - | - | - | - |
| [**jpeg-js***](https://github.com/eugeneware/jpeg-js) | [R](https://github.com/eugeneware/jpeg-js/blob/a2f7080781a5539c65c2b42927cae28f1f051be5/lib/decoder.js#L93) [W](https://github.com/eugeneware/jpeg-js/blob/a2f7080781a5539c65c2b42927cae28f1f051be5/lib/encoder.js#L42) | - | - | - | - | - | - |
| [**pngjs***](https://github.com/lukeapage/pngjs) | - | [R](https://github.com/lukeapage/pngjs/blob/bdcc2763516ebf06a4b13dbe6fde6878ec802258/lib/parser.js#L6) [W](https://github.com/lukeapage/pngjs/blob/bdcc2763516ebf06a4b13dbe6fde6878ec802258/lib/packer.js#L9) | -  | - | - | - | - |
| [**node-libpng***](https://github.com/Prior99/node-libpng) | - | [R](https://github.com/Prior99/node-libpng/blob/d6327a467c1d6a4aa90328764228fb8a541cf4c4/native/fill.cpp#L12) [W](https://github.com/Prior99/node-libpng/blob/d6327a467c1d6a4aa90328764228fb8a541cf4c4/native/encode.cpp#L12) | -  | - | - | - | - |
| [**bmp-js***](https://github.com/shaozilee/bmp-js) | - | -  | -  | - | - | - | [R](https://github.com/shaozilee/bmp-js/blob/db2c466ca1869ddc09e4b2143404eb03ecd490db/lib/decoder.js#L8) [W](https://github.com/shaozilee/bmp-js/blob/db2c466ca1869ddc09e4b2143404eb03ecd490db/lib/encoder.js#L9) |
| [**omggif***](https://github.com/deanm/omggif) | - | -  | -  | - | [R](https://github.com/deanm/omggif/blob/0ec9069a525ec66223eadda3d62059d3685fd3b0/omggif.js#L366) [W](https://github.com/deanm/omggif/blob/0ec9069a525ec66223eadda3d62059d3685fd3b0/omggif.js#L29)  | - | - |
| [**utif***](https://github.com/photopea/UTIF.js) | - | -  | - | [R](https://github.com/photopea/UTIF.js/blob/9f38fb543a2272d402cab552b42779783e2bef34/UTIF.js#L97) [W](https://github.com/photopea/UTIF.js/blob/9f38fb543a2272d402cab552b42779783e2bef34/UTIF.js#L42) | -  | - | - |
| [**png.js**](https://github.com/arian/pngjs) | - | [R](https://github.com/arian/pngjs/blob/c1a2f5852686a22229f5f3154f974011162b5263/PNGReader.js#L43)  | -  | - | - | - | - |
| [**png-js***](https://github.com/foliojs/png.js) | - | [R](https://github.com/foliojs/png.js/blob/977b857a11676c1e720e79ed8d9178a005a9abd6/png.js#L251) | -  | - | - | - | - |

### Projects description

* [**sharp**](https://github.com/lovell/sharp) - High performance Node.js image processing, module to read, write, convert, compress, resize JPEG, PNG, WebP and TIFF images. Uses the libvips library.
* [**jimp**](https://github.com/oliver-moran/jimp/tree/master/packages/jimp) - An image processing library for Node written entirely in JavaScript, with zero native dependencies.
* [**image-js**](https://github.com/image-js/image-js) - Image processing and manipulation library that allows to manipulate easily images directly in the browser or in node.
* [**pngjs**](https://github.com/lukeapage/pngjs) - Simple PNG encoder/decoder for Node.js with no dependencies.
* [**jpeg-js**](https://github.com/eugeneware/jpeg-js) - A pure javascript JPEG encoder and decoder for node.js
* [**png-js**](https://github.com/foliojs/png.js) - A (animated) PNG decoder in JavaScript for the HTML5 canvas element and Node.js
* [**omggif**](https://github.com/deanm/omggif) - JavaScript implementation of a GIF 89a encoder and decoder
* [**bmp-js**](https://github.com/shaozilee/bmp-js) - A pure javascript BMP encoder and decoder for node.js
* [**utif**](https://github.com/photopea/UTIF.js) - A small, fast and advanced TIFF / EXIF (+ DNG, CR2, NEF and other TIFF-ish files) decoder and encoder.
* [**png.js**](https://github.com/arian/pngjs) - PNG.js is a PNG decoder fully written in JavaScript. It works in Node.js as well as in (modern) browsers.
* [**node-libpng**](https://github.com/Prior99/node-libpng) - Unofficial bindings for node to libpng.
* [**lwip**](https://github.com/EyalAr/lwip) - Light weight image processor for NodeJS with no external runtime dependencies.
* [**caman**](https://github.com/meltingice/CamanJS/) - Manipulating images using the HTML5 canvas and Javascript.


**Columns' definitions**
* *Name* - Name of the project
* *R* - Reading formats
* *W* - Writing formats
* *Code* - Is the project's source code open or closed
* *Modular* - Is it modular (extendable entity) or integrated GUI (enclosed system provided as is)
* *Interface*:
	* Pure - Written completely in JavaScript
	* Native Binding -  wrapper library that bridges two programming languages. It provides glue code specifically made to allow JavaScript to use a foreign code written in C, C++, etc.
	* CUI adapter - wrapper library that transformes JS instructions into shell commands of another library or framework (typically written in a lower level code)
* *Language* - Programming language in which project is written
* *B.s* - Does the project support the browser
* *N.s* - Does the project support Node.js
* *Deps* - The amount of dependents of this project
* *Working* - Does this project works out of the box(Working) or require additional settings(Broken)
* *Agg* - Aggregative, does this project implements algorithms of decoding/encoding(no) or uses other projects(yes)
* *B* - Buffer, does the module support buffer as input
* *Str* - Stream, does the module support stream as input
* *S* - Sync, does the module support synchronous reading
* *A* - Async, does the module support asynchronous reading
* *H* - Head, does the module support reading metadata without pixels

**Sorting Algorithm** (descending order of significance)
1. Sort by Working (Working > Broken)
2. Sort by Code (Open > Closed)
3. Sort by the amount of Read or Write formats (For the tables "Project to read images" or "Project to write images" respectively) or by the sum of reading and writing formats (For the tables "Projects to convert images" and "Projects to compress images") or by the sum of B.s and N.S (For the table "Projects to process images")
4. Sort by the amount of dependents

### Resources:

1. [Overview of 411 image-processing projects (all programming languages)](https://awesomeopensource.com/projects/image-processing)
2. [10 JavaScript Image Manipulation Libraries for 2020](https://blog.bitsrc.io/image-manipulation-libraries-for-javascript-187fde1ad5af)
3. [Overview and comparison of popular js image processing libraries](https://webkid.io/blog/image-processing-in-javascript/)
4. [Overview of 20 Javascript Image Processing Plugins](https://bashooka.com/coding/best-of-20-javascript-image-processing-plugins/)
5. [Overview of 8 JavaScript Image processing libraries](https://tangiblejs.com/libraries/image-processing)
6. [The most popular JavaScript Image processing repositories](https://bestofjs.org/projects?tags=image)
7. [Image processing packages in npm](https://www.npmjs.com/search?q=image-processing)
