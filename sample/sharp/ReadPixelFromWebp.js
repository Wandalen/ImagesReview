const sharp = require( 'sharp' );

async function extractPix( path )
{
  const { data } = await sharp( path ).raw()
  .toBuffer( { resolveWithObject : true } );

  console.log( 'rgb(' + data.toJSON().data.slice( 0, 3 ) + ')' );
}

extractPix( `${__dirname}/../../data/images/Image.webp` );
// OUTPUT: rgb(83,83,83)
