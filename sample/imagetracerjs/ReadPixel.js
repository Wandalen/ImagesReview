const ImageTracer = require( 'imagetracerjs' );

function extractPix( path )
{
  ImageTracer.loadImage(
    path,
    function( canvas )
    {

      // Getting ImageData from canvas with the helper function getImgdata().
      let imgd = ImageTracer.getImgdata( canvas );

      // Synchronous tracing to SVG string
      let svgstr = ImageTracer.imagedataToSVG( imgd, { scale : 5 } );

      // Appending SVG
      ImageTracer.appendSVGString( svgstr, 'svgcontainer' );

    }
  );
}
