const Jimp = require( 'jimp' );

const { extractPix } = require( './ReadPixel' );

extractPix( `${__dirname}/../../data/images/Image.jpg` );
// OUTPUT: rgb(249,0,0)
