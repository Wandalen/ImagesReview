const fs = require( 'fs' )
const jpeg = require( 'jpeg-lossless-decoder-js' );
const decoder = new jpeg.lossless.Decoder();
const output = decoder.decompress( fs.readFileSync( `${__dirname}/../../data/images/Image.jpg` ), 1000102010200, 1012312312300 );

console.log( Buffer.from( output ).toJSON() )
