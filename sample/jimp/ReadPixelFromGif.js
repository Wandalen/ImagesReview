const Jimp = require( 'jimp' );

Jimp.read( `${__dirname}/../../data/image/Image.gif` ).then( ( img ) =>
{
  console.log( 'rgb( ' + img.bitmap.data.toJSON().data.slice( 0, 3 ) + ' )' );
} );
// log: rgb( 255,0,0 )

