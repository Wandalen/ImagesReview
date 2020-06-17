const fs = require( 'fs' );
const omggif = require( 'omggif' );

const gr = new omggif.GifReader( fs.readFileSync( `${__dirname}/../../data/image/WrittenPixelsOmggif.gif` ) );
console.log( gr.frameInfo( 0 ) )
