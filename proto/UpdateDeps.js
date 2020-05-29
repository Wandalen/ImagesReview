const _ = require( 'wTools' );
require( 'wFiles' );
require( 'wnpmtools' );
const { readYML, abs } = require( './Index' );

let { 'Modules to read images' : rYML } = readYML( '../data/ReadImg.yml' );
let { 'Modules to write images' : wYML } = readYML( '../data/WriteImg.yml' );
let { 'Modules to convert images' : convYML } = readYML( '../data/ConvertImg.yml' );
let { 'Modules to compress images' : compYML } = readYML( '../data/CompressImg.yml' );

let rModuleNames = rYML.filter( ( el ) => el.Deps !== '-' ).map( ( el ) => el.N.name );
let wModuleNames = wYML.filter( ( el ) => el.Deps !== '-' ).map( ( el ) => el.N.name );
let convModuleNames = convYML.filter( ( el ) => el.Deps !== '-' ).map( ( el ) => el.N.name );
let compModuleNames = compYML.filter( ( el ) => el.Deps !== '-' ).map( ( el ) => el.N.name );

let rDeps =  _.npm.dependantsRetrieve( { remotePath : rModuleNames, sync : 1 } )
rDeps = rModuleNames.map( ( el, i ) =>
{
  return { name : el, deps : rDeps[ i ] }
} )
let wDeps =  _.npm.dependantsRetrieve( { remotePath : wModuleNames, sync : 1 } )
wDeps = wModuleNames.map( ( el, i ) =>
{
  return { name : el, deps : wDeps[ i ] }
} )
let convDeps =  _.npm.dependantsRetrieve( { remotePath : convModuleNames, sync : 1 } )
convDeps = convModuleNames.map( ( el, i ) =>
{
  return { name : el, deps : convDeps[ i ] }
} )
let compDeps =  _.npm.dependantsRetrieve( { remotePath : compModuleNames, sync : 1 } )
compDeps = compModuleNames.map( ( el, i ) =>
{
  return { name : el, deps : compDeps[ i ] }
} )

updateDeps( rDeps, rYML );
rYML = { 'Modules to read images' : rYML }
_.fileProvider.fileWrite( { filePath : abs( '../data/ReadImg.yml' ), data : rYML, encoding : 'yaml' } );
updateDeps( wDeps, wYML );
wYML = { 'Modules to write images' : wYML }
_.fileProvider.fileWrite( { filePath : abs( '../data/WriteImg.yml' ), data : wYML, encoding : 'yaml' } );
updateDeps( convDeps, convYML );
convYML = { 'Modules to convert images' : convYML }
_.fileProvider.fileWrite( { filePath : abs( '../data/ConvertImg.yml' ), data : convYML, encoding : 'yaml' } );
updateDeps( compDeps, compYML );
compYML = { 'Modules to compress images' : compYML };
_.fileProvider.fileWrite( { filePath : abs( '../data/CompressImg.yml' ), data : compYML, encoding : 'yaml' } );

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

_.npm.dependantsRetrieve( 'sharp' ).then( ( data ) => console.log( data ) )
