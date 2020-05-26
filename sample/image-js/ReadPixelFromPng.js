const { Image } = require( 'image-js' );

const { extractPix } = require( './ReadPixel' );

extractPix( `${__dirname}/../../data/images/Image.png` );
// OUTPUT: rgb(255,0,0)
