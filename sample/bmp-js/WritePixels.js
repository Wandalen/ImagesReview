const _ = require( 'wTools' );
require( 'wFiles' );
const bmp = require( 'bmp-js' );
const fs = require( 'fs' );

let buf = Buffer.from( {
  type : 'Buffer',
  data : [
    0, 0, 0, 255,
    0, 0, 255, 0,
    0, 255, 0, 0,
    0, 255, 255, 255
  ]
} );

const bmpData = {
  data : buf,
  width : 2,
  height : 2
};
const rawData = bmp.encode( bmpData );

fs.writeFileSync( `${__dirname}/../../data/image/WrittenPixelsBmp-js.bmp`, rawData.data );
console.log( _.fileProvider.statRead( `${__dirname}/../../data/image/WrittenPixelsBmp-js.bmp` ).size );
