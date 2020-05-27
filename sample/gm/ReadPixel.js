const fs = require( 'fs' );
const gm = require( 'gm' ).subClass( { imageMagick : true } );


function extractPix( path )
{
  console.log( gm( path ) );
  // gm( `${__dirname}\\\Image.png` )
  // .resize( 240, 240 )
  // .noProfile()
  // .write( `${__dirname}/resize.png`, function ( err )
  // {
  //   if( err ) console.log( err );
  // } );
}
extractPix( `${__dirname}/../../data/images/Image.png` )
// extractPix( `${__dirname}\\\Image.png` )
module.exports.extractPix = extractPix;
