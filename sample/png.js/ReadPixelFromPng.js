const fs = require( 'fs' );
const PNGReader = require( 'png.js' )

fs.readFile(
  `${__dirname}/../../data/images/Image.png`,
  function( err, bytes )
  {
      if( err ) console.log( err );
      const reader = new PNGReader( bytes );

      reader.parse( ( err, png ) =>
      {
        if( err ) console.log( err );

        console.log( 'rgb(' + png.pixels.toJSON().data.slice( 0, 3 ) + ')' )
      } );
  }
);
// OUTPUT: rgb(255,0,0)
