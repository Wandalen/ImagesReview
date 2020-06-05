const gm = require( 'gm' ).subClass( { imageMagick : true } );

let buf = Buffer.from( {
  type : 'Buffer',
  data : [
    255, 0, 0, 255, 0, 255,
    0, 255, 0, 0, 255, 255,
    255, 255, 255, 255
  ]
} );

gm( 2, 2, buf ).write( `${__dirname}/../../data/images/WrittenPixelsGm.png`, ( err ) => console.log( err ) )
