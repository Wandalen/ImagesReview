const fs = require( 'fs' );
const jpeg = require( 'jpeg-js' );

const buf = Buffer.from( {
  type : 'Buffer',
  data : [
    255, 0, 0, 255, 0, 255,
    0, 255, 0, 0, 255, 255,
    255, 255, 255, 255
  ]
} );

const rawImageData =
{
  data : buf,
  width : 2,
  height : 2
}

const jpegData = jpeg.encode( rawImageData, 50 );

fs.writeFileSync( `${__dirname}/../../data/images/WrittenPixelsJpeg-js.jpg`, jpegData.data );
