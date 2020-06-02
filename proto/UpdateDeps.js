const _ = require( 'wTools' );
require( 'wFiles' );
require( 'wnpmtools' );
const { readYML, abs } = require( './Index' );
// const TYPES = [ 'read', 'write', 'convert', 'compress', 'process' ];

let { 'Modules to read images' : rYML } = readYML( '../data/ReadImg.yml' );
let { 'Modules to write images' : wYML } = readYML( '../data/WriteImg.yml' );
let { 'Modules to convert images' : convYML } = readYML( '../data/ConvertImg.yml' );
let { 'Modules to compress images' : compYML } = readYML( '../data/CompressImg.yml' );
let { 'Modules to process images' : procYML } = readYML( '../data/ProcessImg.yml' );

updateTable( rYML, 'Read' );
updateTable( wYML, 'Write' );
updateTable( convYML, 'Convert' );
updateTable( compYML, 'Compress' );
updateTable( procYML, 'Process' );

function updateDeps( newData, oldTable )
{
  newData.forEach( ( s, i ) =>
  {
    oldTable.forEach( ( l, i ) =>
    {
        if( l.N.name === s.name )
        {
          oldTable[ i ].Deps = s.deps;
        }
    } )
  } )
}

function updateTable( table, name )
{
  let ModuleNames = table.filter( ( el ) => el.Deps !== '-' ).map( ( el ) => el.N.name.includes( '*' ) ? el.N.name.slice( 0, el.N.name.length - 1 ) : el.N.name );
  let deps =  _.npm.dependantsRetrieve( { remotePath : ModuleNames, sync : 1 } )
  deps = ModuleNames.map( ( el, i ) =>
  {
    return { name : el, deps : deps[ i ] }
  } )
  updateDeps( deps, table );

  let tName = `Modules to ${name.toLowerCase()} images`;
  table = { [ tName ] : table };

  _.fileProvider.fileWrite( { filePath : abs( `../data/${name}Img.yml` ), data : table, encoding : 'yaml' } );
}
