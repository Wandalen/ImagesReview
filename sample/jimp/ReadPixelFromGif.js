const Jimp = require( 'jimp' );

Jimp.read( `${__dirname}/../../data/images/Image.gif` ).then( ( img ) =>
{
  console.log( 'rgb(' + img.bitmap.data.toJSON().data.slice( 0, 3 ) + ')' );
} );
// OUTPUT: rgb(255,0,0)

