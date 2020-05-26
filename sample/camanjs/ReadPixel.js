const Caman = require( 'caman' ).Caman;

function extractPix( path )
{
  Caman( path, () =>
  {
    console.log( this )
  } )
}

extractPix( `${__dirname}/../../data/images/Image.jpg` );
