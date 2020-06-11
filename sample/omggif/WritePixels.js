const fs = require( 'fs' );
const omggif = require( 'omggif' );

let buf = Buffer.from( {
  type : 'Buffer',
  data : [
    255, 0, 0, 255,
    0, 255, 0, 255,
    0, 0, 255, 255,
    255, 255, 255, 255
  ]
} );

// var buf = new Buffer( 1024 * 1024 );

let gf = new omggif.GifWriter( buf, 2, 2, { palette : [ 0xff0000, 0x00ff00, 0x0000ff, 0xffffff ] } )
// gf.addFrame( 0, 0, 2, 2,
//   [ 0, 1, 1, 0 ],
//   { palette : [ 0xff0000, 0x00ff00, 0x0000ff, 0xffffff ] } );
console.log( gf.getOutputBuffer() );
fs.writeFileSync( `${__dirname}/../../data/images/WrittenPixelsOmggif.gif`, gf.getOutputBuffer() )
