const sharp = require( 'sharp' );

let buf = Buffer.from( {
  type : 'Buffer',
  data : [
    255, 0, 0, 255, 0, 255,
    0, 255, 0, 0, 255, 255,
    255, 255, 255, 255
  ]
} );

// let buf = Buffer.from( [
//   255, 0, 0, 0, 255,
//   0, 0, 0, 255,
//   255, 255, 255
// ] );

console.log( buf )

sharp( buf ).toFile( `${__dirname}/../../data/images/WrittenPixelsSharp.png`, ( err ) => console.log( err ) );
