const fs = require( 'fs' );
const jpeg = require( 'jpeg-js' );

// const jpegData = fs.readFileSync( `${__dirname}/../../data/images/Image.jpg` );
const jpegData = fs.readFileSync( `${__dirname}/../../data/images/WrittenPixelsJimp.jpg` );
let rawImageData = jpeg.decode( jpegData );
console.log( 'rgb( '+ rawImageData.data.toJSON().data.slice( 0, 3 ) + ' )' );
//log: rgb( 254,0,0 )
