const { Image } = require( 'image-js' );

Image.load( `${__dirname}/../../data/images/Image.jpg` ).then( ( img ) => console.log( 'rgb(' + img.data.slice( 0, 3 ) + ')' ) )
// OUTPUT: rgb(249,0,0)
