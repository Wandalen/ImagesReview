const Jimp = require( 'jimp' );

const { extractPix } = require( './ReadPixel' );

extractPix( `${__dirname}/../../data/images/Image.jpg` );
// OUTPUT: rgb(78,77,79)
