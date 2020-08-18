const { Image } = require( 'image-js' );

Image.load( `${__dirname}/../../data/image/Image.png` ).then( ( img ) => console.log( 'rgb( ' + img.data.slice( 0, 3 ) + ' )' ) )
// log: rgb( 255,0,0 )
