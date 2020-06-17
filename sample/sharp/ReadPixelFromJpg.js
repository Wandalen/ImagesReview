const sharp = require( 'sharp' );

sharp( `${__dirname}/../../data/image/Image.jpg` ).raw()
.toBuffer( { resolveWithObject : true } )
.then( ( { data } ) => console.log( 'rgb( ' + data.toJSON().data.slice( 0, 3 ) + ' )' ) );
// log: rgb( 249,0,0 )
