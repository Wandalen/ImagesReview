const Jimp = require( 'jimp' );

extractPix( `${__dirname}/../../data/images/Image.png` );
// OUTPUT: rgb(255,0,0)

extractPix( `${__dirname}/../../data/images/Image.jpg` );
// OUTPUT: rgb(78,77,79)

extractPix( `${__dirname}/../../data/images/Image.gif` );
// OUTPUT: rgb(51,85,51)

extractPix( `${__dirname}/../../data/images/Image.tif` );
// OUTPUT: rgb(255,0,0)


function extractPix( path )
{
  Jimp.read( path ).then( ( img ) =>
  {
    console.log( 'rgb(' + img.bitmap.data.toJSON().data.slice( 0, 3 ) + ')' );
  } );

}
