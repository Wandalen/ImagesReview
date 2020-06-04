const fs = require( 'fs' );
const UTIF = require( 'utif' );

const ifds = UTIF.decode( fs.readFileSync( `${__dirname}/../../data/images/Image.tif` ) );
console.log( ifds );
// const sss = UTIF.decodeImage( fs.readFileSync( `${__dirname}/../../data/images/Image.tif` ), ifds[ 0 ] )
// const rgba  = UTIF.toRGBA8( ifds[ 0 ] );  // Uint8Array with RGBA pixels
// console.log( ifds[ 0 ].width, ifds[ 0 ].height, ifds[ 0 ] );
// console.log( rgba )
