const bmp = require( 'bmp-js' );
const fs = require( 'fs' );

const bmpBuffer = fs.readFileSync( `${__dirname}/../../data/image/Image.bmp` );
const bmpData = bmp.decode( bmpBuffer );
let data = bmpData.data.toJSON().data
data = [ data[ 3 ], data[ 2 ], data[ 1 ] ];
console.log( 'rgb( ' + data + ' )' );
// log: rgb( 255,0,0 )
