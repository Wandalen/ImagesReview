let Caman = require( 'caman' ).Caman;

// console.log( Caman )

function extractPix( path )
{
  Caman( path, () =>
  {
    console.log( this )
  } )
}

// extractPix( `${__dirname}/../../data/images/Image.jpg` );
