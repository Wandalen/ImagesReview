const _ = require( 'wTools' );
require( 'wFiles' );

const { readYML, abs } = require( './Index' );
const sortOrder = [ 'Code', 'RW', 'Deps' ];

// SEEMS LIKE <RW> ALWAYS SECOND
// const sortOrder = [ 'Code', 'Deps', 'RW' ];

let { 'Modules to read/write/convert/compress images' : rwTableArr } = readYML( '../data/ReadWriteConvertCompressImg.yml' );
rwTableArr.sort( sortTable ).reverse();
console.log( rwTableArr );
rwTableArr = { 'Modules to read/write/convert/compress images' : rwTableArr };

_.fileProvider.fileWrite( { filePath : abs( '../data/ReadWriteConvertCompressImg.yml' ), data : rwTableArr, encoding : 'yaml' } );

function sortByCode ( a, b, funcArr )
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
    if( Array.isArray( funcArr ) )
    {
      if( funcArr.length === 2 )
      {
        funcArr[ 0 ]( a, b, [ funcArr[ 1 ] ] );
      }
      else if( funcArr.length === 1 )
      {
        funcArr[ 0 ]( a, b )
      }
    }
    else
    {
      return 0;
    }
  }
}

function sortByRW( a, b, funcArr )
{
  // Sort by R.length + W.length
  let aTotal = a.R.length + a.W.length;
  let bTotal = b.R.length + b.W.length;

  if( aTotal > bTotal )
  {
    return 1;
  }
  else if( aTotal < bTotal )
  {
    return -1
  }
  else if( aTotal === bTotal )
  {
    if( Array.isArray( funcArr ) )
    {
      if( funcArr.length === 2 )
      {
        funcArr[ 0 ]( a, b, [ funcArr[ 1 ] ] );
      }
      else if( funcArr.length === 1 )
      {
        funcArr[ 0 ]( a, b )
      }
    }
    else
    {
      return 0;
    }
  }
}

function sortByDeps( a, b, funcArr )
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
  else if( aDep === bDep )
  {
    if( Array.isArray( funcArr ) )
    {
      if( funcArr.length === 2 )
      {
        funcArr[ 0 ]( a, b, [ funcArr[ 1 ] ] );
      }
      else if( funcArr.length === 1 )
      {
        funcArr[ 0 ]( a, b )
      }
    }
    else
    {
      return 0;
    }
  }
}

function sortTable( a, b )
{
  // Sort Code -> R+W -> Deps
  if( sortOrder[ 0 ] === 'Code' )
  {
    if( sortOrder[ 1 ] === 'RW' )
    {
      sortByCode( a, b, [ sortByRW, sortByDeps ] );
    }
    else if( sortOrder[ 1 ] === 'Deps' )
    {
      sortByCode( a, b, [ sortByDeps, sortByRW ] );
    }
  }
  else if( sortOrder[ 0 ] === 'RW' )
  {
    if( sortOrder[ 1 ] === 'Code' )
    {
      sortByRW( a, b, [ sortByCode, sortByDeps ] );
    }
    else if( sortOrder[ 1 ] === 'Deps' )
    {
      sortByRW( a, b, [ sortByDeps, sortByCode ] );
    }
  }
  else if( sortOrder[ 0 ] === 'Deps' )
  {
    if( sortOrder[ 1 ] === 'Code' )
    {
      sortByDeps( a, b, [ sortByCode, sortByRW ] );
    }
    else if( sortOrder[ 1 ] === 'RW' )
    {
      sortByDeps( a, b, [ sortByRW, sortByCode ] );
    }
  }


  // 1. Sort by open/closed code
  // if( a.Code === 'open' && b.Code === 'closed' )
  // {
  //   return 1;
  // }
  // else if( a.Code === 'closed' && b.Code === 'open' )
  // {
  //   return -1;
  // }
  // else
  // // 2. Sort by the amount of formats to read/write
  // {
  //   let aTotal = a.R.length + a.W.length;
  //   let bTotal = b.R.length + b.W.length;

  //   if( aTotal > bTotal )
  //   {
  //     return 1;
  //   }
  //   else if( aTotal < bTotal )
  //   {
  //     return -1
  //   }
  //   else
  //   // 3. Sort the amount of dependents
  //   {
  //     let aDep, bDep;

  //     if( a.Deps === '-' )
  //     {
  //       aDep = -1;
  //     }
  //     if( b.Deps === '-' )
  //     {
  //       bDep = -1;
  //     }
  //     if( a.Deps !== '-' )
  //     {
  //       aDep = +a.Deps;
  //     }
  //     if( b.Deps !== '-' )
  //     {
  //       bDep = +b.Deps;
  //     }

  //     if( aDep > bDep )
  //     {
  //       return 1;
  //     }
  //     else if( aDep < bDep )
  //     {
  //       return -1;
  //     }
  //     else
  //     {
  //       return 0;
  //     }
  //   }
  // }
}
