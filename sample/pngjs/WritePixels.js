const fs = require( 'fs' );
const PNG = require( 'pngjs' ).PNG;

let buf = Buffer.from( {
  type : 'Buffer',
  data : [
    255, 0, 0, 255,
    0, 255, 0, 255,
    0, 0, 255, 255,
    255, 255, 255, 255
  ]
} );

let png = PNG.sync.write( { width : 2, height : 2, data : buf } );
fs.writeFileSync( `${__dirname}/../../data/image/WrittenPixelsPngjs.png`, png );
