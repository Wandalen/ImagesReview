const fs = require( 'fs' );
const omggif = require( 'omggif' );

let buf = Buffer.from( {
  type : 'Buffer',
  data : [
    255, 0, 0, 255, 0, 255,
    0, 255, 0, 0, 255, 255,
    255, 255, 255, 255
  ]
} );

let gf = new omggif.GifWriter( buf, 2, 2, { palette : [ 0xff0000, 0x0000ff ] } );

console.log( gf );
