var PNG = require( 'png-js' );

PNG.decode( `${__dirname}/../../data/image/Image.png`, function( pixels )
{
  console.log( 'rgb( ' + pixels.toJSON().data.slice( 0, 3 ) + ' )' )
} );
// log: rgb( 255,0,0 )
