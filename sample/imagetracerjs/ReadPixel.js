const fs = require( 'fs' );

// const ImageTracer = require( __dirname + '/utils/imagetracer_v1.2.6.js' );
const PNGReader = require( __dirname + '/utils/PNGReader.js' )
function extractPix( path )
{
  fs.readFile(
    path,
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
}

module.exports.extractPix = extractPix;
