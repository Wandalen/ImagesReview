const Jimp = require( 'jimp' );

let buf = Buffer.from( {
  type : 'Buffer',
  data : [
    255, 0, 0, 255, 0, 255,
    0, 255, 0, 0, 255, 255,
    255, 255, 255, 255
  ]
} );

new Jimp( { data : buf, width : 2, height : 2 } )
.write( `${__dirname}/../../data/images/WrittenPixels.png`, ( err ) => console.log( err ) )
