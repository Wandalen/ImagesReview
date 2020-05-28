const fs = require( 'fs' );
const gm = require( 'gm' ).subClass( { imageMagick : true } );


function extractPix( path )
{
  gm( path ).identify( ( err, data ) =>
  {
    if( err ) console.log( err );
    console.log( data.Histogram[ '1' ][ 2 ] )
  } );

}

module.exports.extractPix = extractPix;
