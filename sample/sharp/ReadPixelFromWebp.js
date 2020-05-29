const sharp = require( 'sharp' );

const { extractPix } = require( './ReadPixel' );

extractPix( `${__dirname}/../../data/images/Image.webp` );
// OUTPUT: rgb(83,83,83)
