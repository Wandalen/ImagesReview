const gm = require( 'gm' ).subClass( { imageMagick : true } );

let buf = Buffer.from( {
  type : 'Buffer',
  data : [
    255, 0, 0, 255,
    0, 255, 0, 255,
    0, 0, 255, 255,
    255, 255, 255, 255
  ]
} );

// gm( `${__dirname}/../../data/images/Image.png` ).identify( ( err, data ) =>
// {
//     if( err ) console.log( err );
//     console.log( data )
// } );

// gm( buf, 'image/png' ).write( `${__dirname}/../../data/images/WrittenPixelsGm.png`, ( err ) => console.log( err ) )
gm( 2, 2, '#f00' )
.fill( '#f00' )
.fill( '#00f' )
.write( `${__dirname}/../../data/image/WrittenPixelsGm.png`, function( err )
{
    if( err )console.log( err );
    // console.log( this.outname + ' created  :: ' + arguments[ 3 ] )
} )
