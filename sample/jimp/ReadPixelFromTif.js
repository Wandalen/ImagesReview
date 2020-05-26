const Jimp = require( 'jimp' );

const { extractPix } = require( './ReadPixel' );

extractPix( `${__dirname}/../../data/images/Image.tif` );
// OUTPUT: rgb(255,0,0)
