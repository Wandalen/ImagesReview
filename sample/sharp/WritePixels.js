const sharp = require( 'sharp' );

let buf = Buffer.from( {
  type : 'Buffer',
  data : [
    255, 0, 0, 255, 0, 255,
    0, 255, 0, 0, 255, 255,
    255, 255, 255, 255
  ]
} );

const input  =
{
  data : buf,
  info : {
    format : 'raw',
    width : 2,
    height : 2,
    channels : 4,
    premultiplied : false,
    size : 16
  }
}

// {
//   data: <Buffer ff 00 00 ff 00 ff 00 ff 00 00 ff ff ff ff ff ff>,
//   info: {
//     format: 'raw',
//     width: 2,
//     height: 2,
//     channels: 4,
//     premultiplied: false,
//     size: 16
//   }
// }

// let buf = Buffer.from( [
//   255, 0, 0, 0, 255,
//   0, 0, 0, 255,
//   255, 255, 255
// ] );

console.log( buf )

// sharp( buf ).toFile( `${__dirname}/../../data/images/WrittenPixelsSharp.png`, ( err ) => console.log( err ) );
