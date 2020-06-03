const fs = require( 'fs' )
const jpeg = require( 'jpeg-lossless-decoder-js' );
const decoder = new jpeg.lossless.Decoder();
const output = decoder.decompress( fs.readFileSync( `${__dirname}/../../data/images/Image.jpg` ) );

console.log( output )
