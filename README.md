# Awesome image!

Curated overview of awesome Javascript projects to read / write / convert / compress / process images of different formats.

### Modules to read/write/convert/compress images

| **N** | **Format** | **R** | **W** | **S.Code** | **Mod** | **I** | **PL** | **B.s** | **N.s** | **Deps**|
| --- | --- | --- | --- | --- | --- | --- | -- | --- | --- | --- |
| [**sharp**](https://github.com/lovell/sharp)| jpeg, png, webp, gif, svg | + | + | open | yes | native binding | [libvips](https://github.com/libvips/libvips) + Node.js | - | + |1425|
| [**gm**](https://github.com/aheckmann/gm) | GIF, JPEG, PNG, PDF, and WebP. | + | + | closed | yes | CUI adapter | c | - | + | 1122 |
| [**imagemin**](https://github.com/imagemin/imagemin) | jpeg, png | + | + | open | yes | Pure | JavaScript | + | + | 682 |
| [**lwip**](https://github.com/EyalAr/lwip) | jpeg, png, gif | + | + | open | yes | Native binding | c | - | + | 79 |
| [**CamanJS**](https://github.com/meltingice/CamanJS/) | jpeg, png | + | + | open | yes | Pure | JavaScript | + | + | 5 |
| [**Compressor**](https://github.com/fengyuanchen/compressorjs) | jpeg, png or BLOB | + | + | open | yes | Pure | JavaScript | + | - | 21 |
| [**image-js**](https://github.com/image-js/image-js) | png, jpeg | + | + | open | yes | Pure | Node.js, JavaScript | + | + |19 |
| [**imagetracerjs**](https://github.com/jankovicsandras/imagetracerjs) | jpeg, png, webp, gif (raster images) | + | + | open | yes | Pure | JavaScript | + | + | 5 |
| [**image-conversion**](https://github.com/WangYuLue/image-conversion) | png, jpeg, gif, BLOB | + | + | open | yes | Pure | JavaScript(TypeScript) | + | + | 2 |
| [**Capa-Image-Lib**](https://gitlab.com/Capa_Album/capa_image_lib#README) | jpeg, png | + | + | open | yes | Native binding | c++ | - | + | 0 |
| [**imgsquash**](https://github.com/eashish93/imgsquash) | jpeg, png | + | + | open | Integrated GUI | Pure | Node.js, JavaScript | + | + | - |


### Modules to process images

| **N** | **Format** | **R** | **W** | **S.Code** | **Mod** | **I** | **PL** | **B.s** | **N.s** | **Deps**|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [**sharp**](https://github.com/lovell/sharp)| jpeg, png, webp, gif, svg | + | + | open | yes | Native binding | [libvips](https://github.com/libvips/libvips) + Node.js | - | + | 1425|
| [**Jimp**](https://github.com/oliver-moran/jimp/tree/master/packages/jimp)| bmp, gif, jpeg, png, tiff| + | + | open | yes | Pure | Node.js | + | + | 1075|
| [**Cropper**](https://github.com/fengyuanchen/cropperjs) | jpeg, png | + | + | open | Integrated GUI | Pure | JavaScript | + | - | 276 |
| [**lwip**](https://github.com/EyalAr/lwip) | jpeg, png, gif | + | + | open | yes | Native binding | c | - | + | 79 |
| [**Resemble.js**](https://github.com/rsmbl/Resemble.js) | jpg, png, | + | + | open | yes | Pure | JavaScript | + | + | 50 |
| [**Pica**](https://github.com/nodeca/pica) | jpeg, png | + | + | open | yes | Pure | JavaScript | + | + | 47 |
| [**image-js**](https://github.com/image-js/image-js) | jpeg, png | + | + | open | yes | Pure | Node.js, JavaScript | + | + | 19 |
| [**tui.image-editor**](https://github.com/nhn/tui.image-editor) | jpg, png, | + | + | open | yes | Pure | JavaScript | + | + |15 |
| [**pngjs-image**](https://github.com/YahooArchive/pngjs-image) | png | + | + | open | yes | Pure | JavaScript |-| + | 27 |
| [**Smartcrop**](https://github.com/jwagner/smartcrop.js) | jpeg, png | + | + | open | Integrated GUI | Pure | JavaScript | + | +| 19 |
| [**CamanJS**](https://github.com/meltingice/CamanJS/) | jpeg, png | + | + | open | yes | Pure | JavaScript | + | + | 5 |
| [**glfx.js**](https://github.com/evanw/glfx.js)| jpeg, png | + | + | open | yes | Pure | JavaScript | modern | - | 5 |
| [**merge-images**](https://github.com/lukechilds/merge-images) | png | + | + | open | yes | Pure | JavaScript | + | + | 11 |
| [**tui.image-editor GUI**](https://github.com/nhn/toast-ui.react-image-editor) | jpg, png, | + | + | open | Integrated GUI | Pure | JavaScript | + | + | 2 |
| [**UPNG.js**](https://github.com/photopea/UPNG.js) | png | + | - | open | yes | Pure | JavaScript | + | + | 1 |
| [**lena.js**](https://github.com/davidsonfellipe/lena.js) | jpeg, png | + | - | open | yes | Pure | JavaScript | + | - | 0 |
| [**MarvinJ**](https://github.com/gabrielarchanjo/marvinj) | jpeg, png | + | + | open | yes | Pure | JavaScript | + | + | 0 |
| [**Filtrr2**](https://github.com/alexmic/filtrr/tree/master/filtrr2)| jpeg, png | + | + | open | Integrated GUI| Pure | JavaScript | + | - | - |
| [**img2css**](https://github.com/javierbyte/img2css)| jpeg, png | + | - | open | Integrated GUI | Pure | JavaScript | + | - | - |
| [**web-dsp**](https://github.com/shamadee/web-dsp) | pixelData | + | - | open | yes | Native-binding | c++ | + | - | 0|




**Columns' definitions**
* *N* - Name of the module.
* *Format* - Formats of the images this module supports
* *R* - Does this module support read operations 
* *W* - Does this module support write operations
* *S.Code* - Is the module's source code open or closed
* *Mod* - Is it modular or integrated GUI 
* *I* - Interface, can be either Pure or Native Binding or CUI adapter 
* *PL* - Programming language in which module is written
* *B.s* - Does this module have browser support
* *N.s* - Does this module have Node.js support
* *Deps* - The amount of dependents of this module


### Resources:

1. [Overview of 411 image-processing projects (all programming languages)](https://awesomeopensource.com/projects/image-processing)
2. [10 JavaScript Image Manipulation Libraries for 2020](https://blog.bitsrc.io/image-manipulation-libraries-for-javascript-187fde1ad5af)
3. [Overview and comparison of popular js image processing libraries](https://webkid.io/blog/image-processing-in-javascript/)
4. [Overview of 20 Javascript Image Processing Plugins](https://bashooka.com/coding/best-of-20-javascript-image-processing-plugins/)
5. [Overview of 8 JavaScript Image processing libraries](https://tangiblejs.com/libraries/image-processing)
6. [The most popular JavaScript Image processing repositories](https://bestofjs.org/projects?tags=image)
7. [Image processing packages in npm](https://www.npmjs.com/search?q=image-processing)
