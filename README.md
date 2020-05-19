# Awesome image!

Curated overview of awesome Javascript projects to read / write / convert / compress / process images of different formats.

### Modules to read/write/convert/compress images

| **N** | **Format** | **R** | **W** | **Code** | **Mod** | **I** | **PL** | **B.s** | **N.s** | **Deps**| **WD**|
| --- | --- | --- | --- | --- | --- | --- | -- | --- | --- | --- | --- |
| [**imagemin**](https://github.com/imagemin/imagemin) | jpeg, png | + | + | open | yes | Pure | JavaScript | + | + | 682 |980 577 |
| [**sharp**](https://github.com/lovell/sharp)| jpeg, png, webp, gif, svg | + | + | open | yes | native binding | JavaScript | - | + | 1425 | 860 852 |
| [**gm**](https://github.com/aheckmann/gm) | GIF, JPEG, PNG, PDF, and WebP. | + | + | closed | yes | CUI adapter | C | - | + | 1122 | 166 220 |
| [**Compressor**](https://github.com/fengyuanchen/compressorjs) | jpeg, png or BLOB | + | + | open | yes | Pure | JavaScript | + | - | 21 | 17 761 |
| [**imagetracerjs**](https://github.com/jankovicsandras/imagetracerjs) | jpeg, png, webp, gif (raster images) | + | + | open | yes | Pure | JavaScript | + | + | 5 | 3 000 |
| [**lwip**](https://github.com/EyalAr/lwip) | jpeg, png, gif | + | + | open | yes | Native binding | C | - | + | 79 | 1 393 |
| [**image-conversion**](https://github.com/WangYuLue/image-conversion) | png, jpeg, gif, BLOB | + | + | open | yes | Pure | TypeScript | + | + | 2 | 972 |
| [**image-js**](https://github.com/image-js/image-js) | png, jpeg | + | + | open | yes | Pure | JavaScript | + | + |19 | 944 |
| [**Capa-Image-Lib**](https://gitlab.com/Capa_Album/capa_image_lib#README) | jpeg, png | + | + | open | yes | Native binding | С++ | - | + | 0 | 1 |
| [**CamanJS**](https://github.com/meltingice/CamanJS/) | jpeg, png | + | + | open | yes | Pure | JavaScript | + | + | 5 | n/i |
| [**imgsquash**](https://github.com/eashish93/imgsquash) | jpeg, png | + | + | open | Integrated GUI | Pure | JavaScript | + | + | - | n/i |

### Modules to process images

| **N** | **Format** | **Code** | **Mod** | **I** | **PL** | **B.s** | **N.s** | **Deps**|**WD**|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [**Jimp**](https://github.com/oliver-moran/jimp/tree/master/packages/jimp)| bmp, gif, jpeg, png, tiff| open | yes | Pure | JavaScript | + | + | 1075| 1 101 779 |
| [**sharp**](https://github.com/lovell/sharp)| jpeg, png, webp, gif, svg | open | yes | Native binding | JavaScript | - | + | 1425| 860 852 |
| [**Cropper**](https://github.com/fengyuanchen/cropperjs) | jpeg, png | open | Integrated GUI | Pure | JavaScript | + | - | 276 | 257 160 |
| [**Resemble.js**](https://github.com/rsmbl/Resemble.js) | jpg, png, | open | yes | Pure | JavaScript | + | + | 50 | 34 247 |
| [**Pica**](https://github.com/nodeca/pica) | jpeg, png | open | yes | Pure | JavaScript | + | + | 47 | 17 673 |
| [**merge-images**](https://github.com/lukechilds/merge-images) | png | open | yes | Pure | JavaScript | + | + | 11 | 8 104 |
| [**lwip**](https://github.com/EyalAr/lwip) | jpeg, png, gif | open | yes | Native binding | C | - | + | 79 | 1 393 |
| [**tui.image-editor GUI**](https://github.com/nhn/toast-ui.react-image-editor) | jpg, png, | open | Integrated GUI | Pure | JavaScript | + | + | 2 | 1 164 |
| [**UPNG.js**](https://github.com/photopea/UPNG.js) | png | open | yes | Pure | JavaScript | + | + | 1 | 960 |
| [**image-js**](https://github.com/image-js/image-js) | jpeg, png | open | yes | Pure | JavaScript | + | + | 19 | 944 |
| [**glfx.js**](https://github.com/evanw/glfx.js)| jpeg, png | open | yes | Pure | JavaScript | modern | - | 5 | 766 |
| [**MarvinJ**](https://github.com/gabrielarchanjo/marvinj) | jpeg, png | open | yes | Pure | JavaScript | + | + | 0 | 8 |
| [**lena.js**](https://github.com/davidsonfellipe/lena.js) | jpeg, png | open | yes | Pure | JavaScript | + | - | 0 | 3 |
| [**web-dsp**](https://github.com/shamadee/web-dsp) | pixelData | open | yes | Native-binding | C++ | + | - | 0 | 1 |
| [**pngjs-image**](https://github.com/YahooArchive/pngjs-image) | png | open | yes | Pure | JavaScript |-| + | 27 | n/i |
| [**Smartcrop**](https://github.com/jwagner/smartcrop.js) | jpeg, png | open | Integrated GUI | Pure | JavaScript | + | +| 19 | n/i |
| [**tui.image-editor**](https://github.com/nhn/tui.image-editor) | jpg, png, | open | yes | Pure | JavaScript | + | + | 15 | n/i |
| [**CamanJS**](https://github.com/meltingice/CamanJS/) | jpeg, png | open | yes | Pure | JavaScript | + | + | 5 | n/i |
| [**Filtrr2**](https://github.com/alexmic/filtrr/tree/master/filtrr2)| jpeg, png | open | Integrated GUI| Pure | JavaScript | + | - | - | n/i |
| [**img2css**](https://github.com/javierbyte/img2css)| jpeg, png | open | Integrated GUI | Pure | JavaScript | + | - | - | n/i |

**Columns' definitions**
* *N* - Name of the module.
* *Format* - Formats of the images this module supports
* *R* - Does this module support read operations 
* *W* - Does this module support write operations
* *Code* - Is the module's source code open or closed
* *Mod* - Is it modular or integrated GUI 
* *I* - Interface, can be either Pure or Native Binding or CUI adapter 
* *PL* - Programming language in which module is written
* *B.s* - Does the module support the browser 
* *N.s* - Does the module support Node.js
* *Deps* - The amount of dependents of this module
* *WD* - Weekly downloads (2020-05-12 to 2020-05-18); n/i - no information

### Resources:

1. [Overview of 411 image-processing projects (all programming languages)](https://awesomeopensource.com/projects/image-processing)
2. [10 JavaScript Image Manipulation Libraries for 2020](https://blog.bitsrc.io/image-manipulation-libraries-for-javascript-187fde1ad5af)
3. [Overview and comparison of popular js image processing libraries](https://webkid.io/blog/image-processing-in-javascript/)
4. [Overview of 20 Javascript Image Processing Plugins](https://bashooka.com/coding/best-of-20-javascript-image-processing-plugins/)
5. [Overview of 8 JavaScript Image processing libraries](https://tangiblejs.com/libraries/image-processing)
6. [The most popular JavaScript Image processing repositories](https://bestofjs.org/projects?tags=image)
7. [Image processing packages in npm](https://www.npmjs.com/search?q=image-processing)
