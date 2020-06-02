const _ = require( 'wTools' );
require( 'wFiles' );
const { readYML, abs } = require( './Index' );

let { 'Modules to read images' : rTable } = readYML( '../data/ReadImg.yml' );

rTable.sort( sortTable ).reverse();
console.log( rTable );

rTable = { 'Modules to read images' : rTable };
_.fileProvider.fileWrite( { filePath : abs( '../data/ReadImgSortedByCodeDeps.yml' ), data : rTable, encoding : 'yaml' } );


function sortByCode ( a, b )
{
// 1. Sort by open/closed code
  if( a.Code > b.Code )
  {
    return 1;
  }
  else if( a.Code < b.Code )
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

  if( !isFinite( a.Deps ) )
  {
    aDep = -1;
  }
  if( !isFinite( a.Deps ) )
  {
    bDep = -1;
  }
  if( isFinite( a.Deps ) )
  {
    aDep = +a.Deps;
  }
  if( isFinite( a.Deps ) )
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
