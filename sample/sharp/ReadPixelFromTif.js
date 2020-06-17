const sharp = require( 'sharp' );

sharp( `${__dirname}/../../data/image/Image.tif` ).raw()
.toBuffer( { resolveWithObject : true } )
.then( ( { data } ) => console.log( 'rgb( ' + data.toJSON().data.slice( 0, 3 ) + ' )' ) );
// log: rgb( 255,0,0 )
