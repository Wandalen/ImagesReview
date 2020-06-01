const _ = require( 'wTools' );
require( 'wFiles' );
require( 'wnpmtools' );
const { readYML, abs } = require( './Index' );

let { 'Modules to read images' : rYML } = readYML( '../data/ReadImg.yml' );
let { 'Modules to write images' : wYML } = readYML( '../data/WriteImg.yml' );
let { 'Modules to convert images' : convYML } = readYML( '../data/ConvertImg.yml' );
let { 'Modules to compress images' : compYML } = readYML( '../data/CompressImg.yml' );

const TYPES = [ 'read', 'write', 'convert', 'compress', 'process' ]
updateTable( rYML, 'read' );
// rYML = { 'Modules to read images' : rYML }
// _.fileProvider.fileWrite( { filePath : abs( '../data/ReadImg.yml' ), data : rYML, encoding : 'yaml' } );

updateTable( wYML, 'write' );
// wYML = { 'Modules to write images' : wYML }
// _.fileProvider.fileWrite( { filePath : abs( '../data/WriteImg.yml' ), data : wYML, encoding : 'yaml' } );

updateTable( convYML, 'convert' );
// convYML = { 'Modules to convert images' : convYML }
// _.fileProvider.fileWrite( { filePath : abs( '../data/ConvertImg.yml' ), data : convYML, encoding : 'yaml' } );

updateTable( compYML, 'compress' );
// compYML = { 'Modules to compress images' : compYML }
// _.fileProvider.fileWrite( { filePath : abs( '../data/CompressImg.yml' ), data : compYML, encoding : 'yaml' } );

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

  if( name==='read' )
  {
    updateTable( table );
    table = { 'Modules to read images' : table }
    _.fileProvider.fileWrite( { filePath : abs( '../data/ReadImg.yml' ), data : table, encoding : 'yaml' } );
  }
  else if( name==='write' )
  {
    updateTable( table );
    table = { 'Modules to write images' : table }
    _.fileProvider.fileWrite( { filePath : abs( '../data/WriteImg.yml' ), data : table, encoding : 'yaml' } );
  }
  else if( name==='convert' )
  {
    updateTable( table );
    table = { 'Modules to convert images' : table }
    _.fileProvider.fileWrite( { filePath : abs( '../data/ConvertImg.yml' ), data : table, encoding : 'yaml' } );
  }
  else if( name==='compress' )
  {
    updateTable( table );
    table = { 'Modules to read images' : table }
    _.fileProvider.fileWrite( { filePath : abs( '../data/CompressImg.yml' ), data : table, encoding : 'yaml' } );
  }
}
