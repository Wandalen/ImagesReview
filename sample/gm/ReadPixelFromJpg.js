const fs = require( 'fs' );
const gm = require( 'gm' ).subClass( { imageMagick : true } );

const { extractPix } = require( './ReadPixel' );

extractPix( `${__dirname}/../../data/images/Image.jpg` )
// OUTPUT: (249,0,0) #F90000 srgb(249,0,0)
