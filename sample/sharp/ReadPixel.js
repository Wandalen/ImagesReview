const sharp = require( 'sharp' );

async function extractPix( path )
{
  const { data } = await sharp( path ).raw()
  .toBuffer( { resolveWithObject : true } );

  console.log( 'rgb(' + data.toJSON().data.slice( 0, 3 ) + ')' );
}

extractPix( `${__dirname}/../../data/Image.png` );

// OUTPUT: rgb(255,0,0)
