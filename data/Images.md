# Description of the images

### Images:
* Size: 2x2 and 4x5 pixels
* Bits: 1, 2, 4, 16
* Interlaced: yes, no
* Has colors: yes, no(grayscale)
* Has alpha channel: yes, no

### The amount of images:
```javascript
let nbits = [ 1,2,4,16 ]
let npixels = [ ‘2x2’, ‘4x5’ ]; 
let interlaced = [ true, false ];
let hasAlpha = [ true, false ];
let hasColors = [ true, false ]
let sum = nbits.length * npixels.length * interlaced.length * hasAlpha.length * hasColors.length;
// 4 * 2 * 2 * 2 * 2 = 64 
```
**Sum = 64**

### Image filename:

**Pixels-<size>-.<description>.png**

*Where:*
* size - 2x2 or 4x5
* description - all information of the image (nbits, npixels, interlaced, hasAlpha, hasColors)

*Example:* Pixels-2x2-nbits16-interlacedTrue-hasAlphaTrue-hasColorsTrue.png