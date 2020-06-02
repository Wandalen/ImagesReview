const fs = require( 'fs' );
const PNG = require( 'pngjs' ).PNG;

new PNG().parse( fs.readFileSync( `${__dirname}/../../data/images/Image.png` ), function ( error, data )
{
  console.log( 'rgb(' + data.data.toJSON().data.slice( 0, 3 ) + ')' );
} );
// OUTPUT: rgb(255,0,0)
