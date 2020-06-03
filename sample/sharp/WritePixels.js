const sharp = require( 'sharp' );

sharp( `${__dirname}/../../data/images/Image.png` ).toFile( `${__dirname}/../../data/images/WrittenPixelsSharp.png` )
