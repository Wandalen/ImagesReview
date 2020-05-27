const _ = require( 'wTools' );
require( 'wFiles' );
const wNpm = require( 'wnpmtools' );

const { readYML, abs } = require( './Index' );

let { 'Modules to read/write/convert/compress images' : tableYML } = readYML( '../data/ReadWriteConvertCompressImg.yml' );
let moduleNames = tableYML.filter( ( el ) => el.Deps !== '-' ).map( ( el ) => el.N.name );

udpateDeps( moduleNames );

function getDeps( name )
{
  return wNpm.npm.dependantsRetrieve( name );
}

function createNameDepsObj( arr )
{
  let results = arr.map( async ( el ) =>
  {
    return { name : el, deps : await getDeps( el ) }
  } )

  return results;
}

function udpateDeps( arr )
{
  Promise.all( createNameDepsObj( arr ) ).then( ( data ) =>
  {
    data.forEach( ( s, i ) =>
    {
      tableYML.forEach( ( l, i ) =>
      {
        if( l.N.name === s.name )
        {
          tableYML[ i ].Deps = s.deps;
        }
      } )
    } )

    tableYML = { 'Modules to read/write/convert/compress images' :  tableYML }

    _.fileProvider.fileWrite( { filePath : abs( '../data/readWriteConvertCompressImg.yml' ), data : tableYML, encoding : 'yaml' } );
  } )
}
