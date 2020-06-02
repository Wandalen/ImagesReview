const { readPngFileSync }  = require( 'node-libpng' );

console.log( 'rgb(' + readPngFileSync( `${__dirname}/../../data/images/Image.png` ).data.toJSON().data.slice( 0, 3 ) + ')' )
// OUTPUT: rgb(255,0,0)
