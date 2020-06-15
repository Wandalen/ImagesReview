const sharp = require( 'sharp' );

sharp( `${__dirname}/../../data/images/Image.webp` ).raw()
.toBuffer( { resolveWithObject : true } )
.then( ( { data } ) => console.log( 'rgb( ' + data.toJSON().data.slice( 0, 3 ) + ' )' ) );
// log: rgb( 254,0,0 )
