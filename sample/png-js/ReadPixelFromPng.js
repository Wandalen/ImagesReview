var PNG = require( 'png-js' );

PNG.decode( `${__dirname}/../../data/images/Image.png`, function( pixels )
{
  console.log( 'rgb(' + pixels.toJSON().data.slice( 0, 3 ) + ')' )
} );
// OUTPUT: rgb(255,0,0)
