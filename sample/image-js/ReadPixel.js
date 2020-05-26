const { Image } = require( 'image-js' );

function extractPix( path )
{
  Image.load( path ).then( ( img ) => console.log( 'rgb(' + img.data.slice( 0, 3 ) + ')' ) )
}

module.exports.extractPix = extractPix;


