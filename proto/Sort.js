const _ = require( 'wTools' );
require( 'wFiles' );
const { readYML, abs } = require( './Utils' );

let types =
{
  Working : 'string',
  Code : 'string',
  RW : 'number',
  Deps : 'number'
};

let sortOrder = [ '>Working', '>Code', '>RW', '>Deps' ]

let { 'Modules to read images' : rTable } = readYML( '../data/ReadImg.yml' );
let { 'Modules to write images' : wTable } = readYML( '../data/WriteImg.yml' );
let { 'Modules to convert images' : convTable } = readYML( '../data/ConvertImg.yml' );
let { 'Modules to compress images' : compTable } = readYML( '../data/CompressImg.yml' );
let { 'Modules to process images' : procTable } = readYML( '../data/ProcessImg.yml' );

sortAndWrite( rTable, 'Read' );
sortAndWrite( wTable, 'Write' );
sortAndWrite( convTable, 'Convert' );
sortAndWrite( compTable, 'Compress' );
sortAndWrite( procTable, 'Process' );

// Sorts by Code, Working
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

// Sorts by Deps, 'RW'
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

function handleRW( a, b )
{
  let val1 = 0;
  let val2 = 0;

  // read table - 'Read'
  if( a.Read )
  {
    val1 = +a.Read.length
    val2 = +b.Read.length
  }
  // write table - 'Write'
  else if( a.Write )
  {
    val1 = +a.Write.length
    val2 = +b.Write.length
  }
  // convert/compress tables - 'R' + 'W'
  else if( a.R )
  {
    val1 = ( a.R[ 0 ]==='-'? 0 : a.R.length ) + ( a.W[ 0 ]==='-'? 0 : a.W.length );
    val2 = ( b.R[ 0 ]==='-'? 0 : b.R.length ) + ( b.W[ 0 ]==='-'? 0 : b.W.length );
  }
  // process table - 'B.s' + 'N.s'
  else if( !a.Read && !a.Write && !a.R )
  {
    val1 = a[ 'B.s' ] === '+' ? val1+1 : val1
    val1 = a[ 'N.s' ] === '+' ? val1+1 : val1;

    val2 = b[ 'B.s' ] === '+' ? val2+1 : val2;
    val2 = b[ 'N.s' ] === '+' ? val2+1 : val2;
  }

  return [ val1, val2 ];
}

function sortTable( a, b )
{
  for( let i = 0; i < sortOrder.length; i++ )
  {
    let val1, val2;
    let name = sortOrder[ i ].slice( 1 );
    let order  = sortOrder[ i ][ 0 ];

    if( name === 'RW' )
    {
      [ val1, val2 ] = handleRW( a, b );
    }
    else
    {
      val1 = a[ name ];
      val2 = b[ name ];
    }

    if( types[ name ] === 'string' )
    {
      let resultS = order === '>' ? sortByString( val1, val2 ) : sortByString( val2, val1 );
      if( resultS === 0 )continue;
      return resultS;
    }
    else if( types[ name ] === 'number' )
    {
      let resultN = order === '>' ? sortByNumber( val1, val2 ) : sortByNumber( val2, val1 )
      if( resultN === 0 )continue;
      return resultN
    }
  }

  return sortByString( a.N.name, b.N.name );
}

function sortAndWrite( table, name )
{
  table.sort( sortTable ).reverse();
  let tName = `Modules to ${name.toLowerCase()} images`;
  table = { [ tName ] : table };
  _.fileProvider.fileWrite( { filePath : abs( `../data/${name}Img.yml` ), data : table, encoding : 'yaml' } );
}
