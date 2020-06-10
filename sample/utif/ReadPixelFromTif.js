const fs = require( 'fs' );
const UTIF = require( 'utif' );

const ifds = UTIF.decode( fs.readFileSync( `${__dirname}/../../data/images/Image.tif` ) );
UTIF.decodeImage( fs.readFileSync( `${__dirname}/../../data/images/Image.tif` ), ifds[ 0 ] )
console.log( 'rgb( ' + ifds[ 0 ].data.slice( 0, 3 ) + ' )' );
// log: rgb( 255,0,0 )
