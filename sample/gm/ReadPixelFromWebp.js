const fs = require( 'fs' );
const gm = require( 'gm' ).subClass( { imageMagick : true } );

const { extractPix } = require( './ReadPixel' );

extractPix( `${__dirname}/../../data/images/Image.webp` )
// OUTPUT: (151,151,151) #979797 srgb(151,151,151)
