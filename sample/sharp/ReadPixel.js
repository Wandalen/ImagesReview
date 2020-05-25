const sharp = require( 'sharp' );

async function extractPix( path )
{
  const { data } = await sharp( path ).raw()
  .toBuffer( { resolveWithObject : true } );

  console.log( 'rgb(' + data.toJSON().data.slice( 0, 3 ) + ')' );
}

extractPix( `${__dirname}/../../data/images/Image.png` );
extractPix( `${__dirname}/../../data/images/Image.jpg` );
extractPix( `${__dirname}/../../data/images/Image.tif` );
extractPix( `${__dirname}/../../data/images/Image.webp` );
extractPix( `${__dirname}/../../data/images/Image.gif` );
extractPix( `${__dirname}/../../data/images/Image.svg` );

// OUTPUT: rgb(255,0,0)
