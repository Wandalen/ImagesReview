const _ = require( 'wTools' );
require( 'wFiles' );
require( 'wnpmtools' );
const { readYML, abs } = require( './Index' );
const TYPES = [ 'read', 'write', 'convert', 'compress', 'process' ];

let { 'Modules to read images' : rYML } = readYML( '../data/ReadImg.yml' );
let { 'Modules to write images' : wYML } = readYML( '../data/WriteImg.yml' );
let { 'Modules to convert images' : convYML } = readYML( '../data/ConvertImg.yml' );
let { 'Modules to compress images' : compYML } = readYML( '../data/CompressImg.yml' );
let { 'Modules to process images' : procYML } = readYML( '../data/ProcessImg.yml' );

updateTable( rYML, 'read' );
updateTable( wYML, 'write' );
updateTable( convYML, 'convert' );
updateTable( compYML, 'compress' );
updateTable( procYML, 'process' );

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
  let ModuleNames = table.filter( ( el ) => el.Deps !== '-' ).map( ( el ) => el.N.name );
  let deps =  _.npm.dependantsRetrieve( { remotePath : ModuleNames, sync : 1 } )
  deps = ModuleNames.map( ( el, i ) =>
  {
    return { name : el, deps : deps[ i ] }
  } )
  updateDeps( deps, table );

  if( name===TYPES[ 0 ] )
  {
    updateTable( table );
    table = { 'Modules to read images' : table }
    _.fileProvider.fileWrite( { filePath : abs( '../data/ReadImg.yml' ), data : table, encoding : 'yaml' } );
  }
  else if( name===TYPES[ 1 ] )
  {
    updateTable( table );
    table = { 'Modules to write images' : table }
    _.fileProvider.fileWrite( { filePath : abs( '../data/WriteImg.yml' ), data : table, encoding : 'yaml' } );
  }
  else if( name===TYPES[ 2 ] )
  {
    updateTable( table );
    table = { 'Modules to convert images' : table }
    _.fileProvider.fileWrite( { filePath : abs( '../data/ConvertImg.yml' ), data : table, encoding : 'yaml' } );
  }
  else if( name===TYPES[ 3 ] )
  {
    updateTable( table );
    table = { 'Modules to compress images' : table }
    _.fileProvider.fileWrite( { filePath : abs( '../data/CompressImg.yml' ), data : table, encoding : 'yaml' } );
  }
  else if( name===TYPES[ 4 ] )
  {
    updateTable( table );
    table = { 'Modules to process images' : table }
    _.fileProvider.fileWrite( { filePath : abs( '../data/ProcessImg.yml' ), data : table, encoding : 'yaml' } );
  }
}
