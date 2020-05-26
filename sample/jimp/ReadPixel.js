const Jimp = require( 'jimp' );

function extractPix( path )
{
  Jimp.read( path ).then( ( img ) =>
  {
    console.log( 'rgb(' + img.bitmap.data.toJSON().data.slice( 0, 3 ) + ')' );
  } );

}

module.exports.extractPix = extractPix;
