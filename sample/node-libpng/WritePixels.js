const { writePngFileSync }  = require( 'node-libpng' );

let buf = Buffer.from( {
  type : 'Buffer',
  data : [
    255, 0, 0, 255,
    0, 255, 0, 255,
    0, 0, 255, 255,
    255, 255, 255, 255
  ]
} );

writePngFileSync( `${__dirname}/../../data/image/WrittenPixelsNode-libpng.png`, buf, { width : 2, height : 2 } )
console.log( 'written!' );
