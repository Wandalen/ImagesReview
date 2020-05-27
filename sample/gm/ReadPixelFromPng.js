const fs = require( 'fs' );
const gm = require( 'gm' ).subClass( { imageMagick : true } );

const { extractPix } = require( './ReadPixel' );

extractPix( `${__dirname}/../../data/images/Image.png` )
// OUTPUT: (255,0,0,255) #FF0000FF red
