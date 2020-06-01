const _ = require( 'wTools' );
require( 'wFiles' );
const { readYML, abs } = require( './Index' );

let { 'Modules to read images' : rTable } = readYML( '../data/ReadImg.yml' );
let { 'Modules to process images' : procTable } = readYML( '../data/ProcessImg.yml' );

rTable.sort( sortTable ).reverse();
procTable.sort( sortTable ).reverse()

rTable = { 'Modules to read images' : rTable };
procTable = { 'Modules to read images' : procTable };

_.fileProvider.fileWrite( { filePath : abs( '../data/ReadImgSortedByCodeDeps.yml' ), data : rTable, encoding : 'yaml' } );
_.fileProvider.fileWrite( { filePath : abs( '../data/ProcessImgSortedByCodeDeps.yml' ), data : procTable, encoding : 'yaml' } );

function sortByCode ( a, b )
{
// 1. Sort by open/closed code
  if( a.Code === 'open' && b.Code === 'closed' )
  {
    return 1;
  }
  else if( a.Code === 'closed' && b.Code === 'open' )
  {
    return -1;
  }
  else
  {
    return 0;
  }
}

function sortByDeps( a, b )
{
  // Sort by the amount of dependents
  let aDep, bDep;

  if( a.Deps === '-' )
  {
    aDep = -1;
  }
  if( b.Deps === '-' )
  {
    bDep = -1;
  }
  if( a.Deps !== '-' )
  {
    aDep = +a.Deps;
  }
  if( b.Deps !== '-' )
  {
    bDep = +b.Deps;
  }

  if( aDep > bDep )
  {
    return 1;
  }
  else if( aDep < bDep )
  {
    return -1;
  }
  else
  {
    return 0;
  }
}

function sortTable( a, b )
{
  if( sortByCode( a, b ) === 0 )
  {
    return sortByDeps( a, b )
  }
  else
  {
    return sortByCode( a, b )
  }
}
