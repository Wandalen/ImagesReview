const fs = require( 'fs' );
const omggif = require( 'omggif' );

let buf = Buffer.alloc( 6 * 6 );

var gf = new omggif.GifWriter( buf, 2, 2, { palette : [ 0xff0000, 0x00ff00 ] } );
gf.addFrame( 0, 0, 2, 2,
  [ 0, 1, 1, 0 ] );
let data = buf.slice( 0, gf.end() );

fs.writeFileSync( `${__dirname}/../../data/image/WrittenPixelsOmggif.gif`, data );
