const gm = require( 'gm' ).subClass( { imageMagick : true } );

gm( `${__dirname}/../../data/images/Image.jpg` ).identify( ( err, data ) =>
{
    if( err ) console.log( err );
    console.log( data.Histogram[ '1' ][ 2 ] )
} );
// log: (249,0,0) #F90000 srgb(249,0,0)
