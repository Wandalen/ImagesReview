const sharp = require( 'sharp' );

extractPix( `${__dirname}/../../data/images/Image.png` );
// OUTPUT: rgb(255,0,0)

extractPix( `${__dirname}/../../data/images/Image.jpg` );
// OUTPUT: rgb(77,77,79)

extractPix( `${__dirname}/../../data/images/Image.tif` );
// OUTPUT: rgb(255,0,0)

extractPix( `${__dirname}/../../data/images/Image.webp` );
// OUTPUT: rgb(83,83,83)

extractPix( `${__dirname}/../../data/images/Image.gif` );
// OUTPUT: rgb(51,85,51)

extractPix( `${__dirname}/../../data/images/Image.svg` );
// OUTPUT: rgb(0,0,0)

async function extractPix( path )
{
  const { data } = await sharp( path ).raw()
  .toBuffer( { resolveWithObject : true } );

  console.log( 'rgb(' + data.toJSON().data.slice( 0, 3 ) + ')' );
}
