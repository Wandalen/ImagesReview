const fs = require( 'fs' );
const PNG = require( 'pngjs' ).PNG;

new PNG().parse( fs.readFileSync( `${__dirname}/../../data/image/Image.png` ), function ( error, data )
{
  console.log( 'rgb( ' + data.data.toJSON().data.slice( 0, 3 ) + ' )' );
} );
// log: rgb( 255,0,0 )
