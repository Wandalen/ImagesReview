const _ = require( 'wTools' );
require( 'wFiles' );
const { readYML, abs } = require( './Utils' );

// const sortOrder = [ '>Code', '<Deps' ];
const sortOrder = [ { name : 'Code', type : 'string', order : 1 }, { name : 'Deps', type : 'number', order : 2 } ];

let { 'Modules to read images' : rTable } = readYML( '../data/ReadImg.yml' );

rTable.sort( sortTable ).reverse();
console.log( rTable );

rTable = { 'Modules to read images' : rTable };
_.fileProvider.fileWrite( { filePath : abs( '../data/ReadImgSortedByCodeDeps.yml' ), data : rTable, encoding : 'yaml' } );

function sortByString( s1, s2 )
{
  if( s1>s2 )
  {
    return 1;
  }
  else if( s1<s2 )
  {
    return -1
  }
  else
  {
    return 0;
  }
}

function sortByNumber( n1, n2 )
{
  let n1Sum, n2Sum

  if( !isFinite( n1 ) ) n1Sum = -1;
  if( !isFinite( n2 ) ) n2Sum = -1;
  if( isFinite( n1 ) ) n1Sum = +n1;
  if( isFinite( n2 ) ) n2Sum = +n2;

  if( n1Sum > n2Sum )
  {
    return 1;
  }
  else if( n1Sum < n2Sum )
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
  for( let i = 0; i < sortOrder.length; i++ )
  {
    let val1 = a[ sortOrder[ i ].name ];
    let val2 = b[ sortOrder[ i ].name ];

    if( sortOrder[ i ].type === 'string' )
    {
      let result = sortByString( val1, val2 );
      if( result === 0 )
      continue;
      return result;
    }

    // if( sortOrder[ i ].type === 'string' )
    // {
    //   if( sortByString( val1, val2 ) === 0 )continue;
    //   return sortByString( val1, val2 )
    // }

    if( sortByNumber( val1, val2 ) === 0 )continue;
    return sortByNumber( val1, val2 )
  }
}
