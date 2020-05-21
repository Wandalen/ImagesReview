# Awesome image!

Curated overview of awesome Javascript projects to read / write / convert / compress / process images of different formats.

### Modules to read/write/convert/compress images

| **N** | **R** | **W** | **Code** | **Modular** | **I** | **PL** | **B.s** | **N.s** | **Deps**|
| --- | --- | --- | --- | --- | --- | -- | --- | --- | --- | 
| [**sharp**](https://github.com/lovell/sharp)| jpg, png, webp, tiff, gif, svg | jpg, png, webp, tiff | open | yes | Native binding | JavaScript | - | + | 1425 | 
| [**imagemin**](https://github.com/imagemin/imagemin) |jpg, png, webp, gif, svg  | jpg, png, webp, gif, svg  | open | yes | Pure | JavaScript | + | + | 682 |
| [**lwip**](https://github.com/EyalAr/lwip) | jpg, png, gif | jpg, png, gif | open | yes | Native binding | C | - | + | 79 | 
| [**image-js**](https://github.com/image-js/image-js) | png, jpg, tiff | png, jpg, tiff | open | yes | Pure | JavaScript | + | + |19 |
| [**imagetracerjs**](https://github.com/jankovicsandras/imagetracerjs) | jpg, png, webp, gif, bmp | svg | open | yes | Pure | JavaScript | + | + | 5 |
| [**image-conversion**](https://github.com/WangYuLue/image-conversion) | png, jpg, gif | png, jpg, gif | open | yes | Pure | TypeScript | + | + | 2 | 
| [**Compressor**](https://github.com/fengyuanchen/compressorjs) | jpg, png  | jpg, png | open | yes | Pure | JavaScript | + | - | 21 | 
| [**CamanJS**](https://github.com/meltingice/CamanJS/) | jpg, png | jpg, png | open | yes | Pure | JavaScript | + | + | 5 | 
| [**Capa-Image-Lib**](https://gitlab.com/Capa_Album/capa_image_lib#README) | jpg, png | jpg, png | open | yes | Native binding | С++ | - | + | 0 |
| [**imgsquash**](https://github.com/eashish93/imgsquash) | jpg, png | jpg, png | open | Integrated GUI | Pure | JavaScript | + | + | - |
| [**gm**](https://github.com/aheckmann/gm) | gif, jpg, png, pdf, webp | gif, jpg, png, pdf, webp | closed | yes | CUI adapter | C | - | + | 1122 | 

### Modules to process images

| **N** | **Code** | **Modular** | **I** | **PL** | **B.s** | **N.s** | **Deps**|
| --- | --- | --- | --- | --- | --- | --- | --- | 
| [**Jimp**](https://github.com/oliver-moran/jimp/tree/master/packages/jimp)| open | yes | Pure | JavaScript | + | + | 1075|
| [**Resemble.js**](https://github.com/rsmbl/Resemble.js) | open | yes | Pure | JavaScript | + | + | 50 | 
| [**Pica**](https://github.com/nodeca/pica) | open | yes | Pure | JavaScript | + | + | 47 | 
| [**image-js**](https://github.com/image-js/image-js) | open | yes | Pure | JavaScript | + | + | 19 | 
| [**Smartcrop**](https://github.com/jwagner/smartcrop.js) | open | Integrated GUI | Pure | JavaScript | + | +| 19 | 
| [**tui.image-editor**](https://github.com/nhn/tui.image-editor) | open | yes | Pure | JavaScript | + | + | 15 | 
| [**merge-images**](https://github.com/lukechilds/merge-images) | open | yes | Pure | JavaScript | + | + | 11 | 
| [**CamanJS**](https://github.com/meltingice/CamanJS/) | open | yes | Pure | JavaScript | + | + | 5 | 
| [**tui.image-editor GUI**](https://github.com/nhn/toast-ui.react-image-editor) | open | Integrated GUI | Pure | JavaScript | + | + | 2 |
| [**UPNG.js**](https://github.com/photopea/UPNG.js) | open | yes | Pure | JavaScript | + | + | 1 | 
| [**MarvinJ**](https://github.com/gabrielarchanjo/marvinj) | open | yes | Pure | JavaScript | + | + | 0 | 
| [**sharp**](https://github.com/lovell/sharp)| open | yes | Native binding | JavaScript | - | + | 1425| 
| [**Cropper**](https://github.com/fengyuanchen/cropperjs) | open | Integrated GUI | Pure | JavaScript | + | - | 276 | 
| [**lwip**](https://github.com/EyalAr/lwip) | open | yes | Native binding | C | - | + | 79 | 
| [**pngjs-image**](https://github.com/YahooArchive/pngjs-image) | open | yes | Pure | JavaScript |-| + | 27 |
| [**glfx.js**](https://github.com/evanw/glfx.js)| open | yes | Pure | JavaScript | + | - | 5 | 
| [**lena.js**](https://github.com/davidsonfellipe/lena.js) | open | yes | Pure | JavaScript | + | - | 0 | 
| [**web-dsp**](https://github.com/shamadee/web-dsp) | open | yes | Native-binding | C++ | + | - | 0 | 
| [**Filtrr2**](https://github.com/alexmic/filtrr/tree/master/filtrr2)| open | Integrated GUI| Pure | JavaScript | + | - | - | 
| [**img2css**](https://github.com/javierbyte/img2css)| open | Integrated GUI | Pure | JavaScript | + | - | - | 

**Columns' definitions**
* *N* - Name of the module.
* *R* - Reading formats 
* *W* - Writing formats
* *Code* - Is the module's source code open or closed
* *Modular* - Is it modular (extendable entity) or integrated GUI (enclosed system provided as is)
* *I*: 
    * Pure - Written completely in JavaScript
    * Native Binding -  wrapper library that bridges two programming languages. It provides glue code specifically made to allow JavaScript to use a foreign code written in C, C++, etc.
    * CUI adapter - wrapper library that transformes JS instructions into shell commands of another library or framework (typically written in a lower level code)
* *PL* - Programming language in which module is written
* *B.s* - Does the module support the browser 
* *N.s* - Does the module support Node.js
* *Deps* - The amount of dependents of this module


**Sorting Algorithm** (descending order of significance)
1. Sort by Code (Open > Closed)
2. Sort by the sum of reading and writing formats (For the table "Modules to read/write/convert/compress images") or sum of B.s and N.S (For the table "Modules to process images")
3. Sort by the amount of dependents

### Resources:

1. [Overview of 411 image-processing projects (all programming languages)](https://awesomeopensource.com/projects/image-processing)
2. [10 JavaScript Image Manipulation Libraries for 2020](https://blog.bitsrc.io/image-manipulation-libraries-for-javascript-187fde1ad5af)
3. [Overview and comparison of popular js image processing libraries](https://webkid.io/blog/image-processing-in-javascript/)
4. [Overview of 20 Javascript Image Processing Plugins](https://bashooka.com/coding/best-of-20-javascript-image-processing-plugins/)
5. [Overview of 8 JavaScript Image processing libraries](https://tangiblejs.com/libraries/image-processing)
6. [The most popular JavaScript Image processing repositories](https://bestofjs.org/projects?tags=image)
7. [Image processing packages in npm](https://www.npmjs.com/search?q=image-processing)
