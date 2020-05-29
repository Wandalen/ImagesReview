const sharp = require( 'sharp' );

const { extractPix } = require( './ReadPixel' );

extractPix( `${__dirname}/../../data/images/Image.svg` );
// OUTPUT: rgb(0,0,0)
