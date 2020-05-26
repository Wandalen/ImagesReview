const _ = require( 'wTools' );
require( 'wFiles' );
const wNpm = require( 'wnpmtools' );

const { readYML, abs } = require( './Index' );

const { 'Modules to read/write/convert/compress images' : table } = readYML( '../data/readWriteConvertCompressImg.yml' );

let moduleDeps = {}
let moduleNames = [ 'sharp', 'jimp', 'lwip', 'image-js', 'imagetracerjs', 'image-conversion', 'compressor', 'caman', 'capa_image_lib', 'gm' ]

// console.log( table );
// getDeps( 'sharp' ).then( ( data ) => moduleDeps.sharp = data );
// getDeps( 'jimp' ).then( ( data ) => moduleDeps.jimp = data );
// getDeps( 'lwip' ).then( ( data ) => moduleDeps.lwip = data );
// getDeps( 'image-js' ).then( ( data ) => moduleDeps[ 'image-js' ] = data );
// getDeps( 'imagetracerjs' ).then( ( data ) => moduleDeps.imagetracerjs = data );
// getDeps( 'image-conversion' ).then( ( data ) => moduleDeps[ 'image-conversion' ] = data );
// getDeps( 'compressor' ).then( ( data ) => moduleDeps.compressor = data );
// getDeps( 'caman' ).then( ( data ) => moduleDeps.caman = data );
// getDeps( 'capa_image_lib' ).then( ( data ) => moduleDeps.capa_image_lib = data );
// // getDeps( 'sharp' ).then( ( data ) => moduleDeps.sharp = data );
// getDeps( 'gm' ).then( ( data ) => moduleDeps.gm = data )
// .then( ( a ) => console.log( moduleDeps ) );

async function getDeps( name )
{
  let res = await wNpm.npm.dependantsRetrieve( name );
  // let data = await res;
  // console.log( res );
  return res;
}

function fillTable( arr )
{

  let result;
  let moduleDeps = {};
  arr.forEach( async ( el ) =>
  {
    result = await getDeps( el )
    moduleDeps = { ... moduleDeps, [ el ] : result }
  } );

  return moduleDeps;
}

// const res = fillTable( moduleNames );
// console.log( res )
// console.log( moduleDeps )

// setTimeout( () => console.log( res ), 1000 )
// setTimeout( () => console.log( moduleDeps ), 1000 )

async function udpateDeps( arr )
{
  await fillTable( arr );
  console.log( moduleDeps );
}

udpateDeps( moduleNames )
// console.log( getDeps( 'sharp' ) );
