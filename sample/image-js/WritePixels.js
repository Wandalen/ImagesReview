const { Image } = require( 'image-js' );

let buf = Buffer.from( {
  type : 'Buffer',
  data : [
    255, 0, 0, 255,
    0, 255, 0, 255,
    0, 0, 255, 255,
    255, 255, 255, 255
  ]
} );

let image = new Image( 2, 2, buf );
image.save( `${__dirname}/../../data/images/WrittenPixelsImage-js.png` );
