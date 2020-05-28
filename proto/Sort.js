const _ = require( 'wTools' );
require( 'wFiles' );

const { readYML, abs } = require( './Index' );
const { 'Modules to read images' : rTable } = readYML( '../data/ReadImg.yml' );
const { 'Modules to write images' : wTable } = readYML( '../data/WriteImg.yml' );
const { 'Modules to convert images' : convTable } = readYML( '../data/ConvertImg.yml' );
const { 'Modules to compress images' : compTable } = readYML( '../data/CompressImg.yml' );
const { 'Modules to process images' : procTable } = readYML( '../data/ProcessImg.yml' );
let sortOrder = [ 'Working', 'Code', 'RW', 'Deps' ];
// const sortOrder = [ 'Working', 'Code', 'Deps', 'RW' ];

let { 'Modules to read/write/convert/compress images' : rwTableArr } = readYML( '../data/ReadWriteConvertCompressImg.yml' );
rwTableArr.sort( sortTable ).reverse();
console.log( rwTableArr );
rwTableArr = { 'Modules to read/write/convert/compress images' : rwTableArr };

// _.fileProvider.fileWrite( { filePath : abs( '../data/ReadWriteConvertCompressImg.yml' ), data : rwTableArr, encoding : 'yaml' } );

function sortByWorking( a, b )
{
  if( a.Working === 'Working' && b.Working === 'Broken' )
  {
    return 1;
  }
  else if( a.Working === 'Broken' && b.Working === 'Working' )
  {
    return -1;
  }
  else
  {
    return 0;
  }
}

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
    // if( Array.isArray( funcArr ) )
    // {
    //   if( funcArr.length === 2 )
    //   {
    //     funcArr[ 0 ]( a, b, [ funcArr[ 1 ] ] );
    //   }
    //   else if( funcArr.length === 1 )
    //   {
    //     funcArr[ 0 ]( a, b )
    //   }
    // }
    // else
    // {
    //   return 0;
    // }
  }
}

function sortByRW( a, b )
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
  else
  {
    return 0;
    // if( Array.isArray( funcArr ) )
    // {
    //   if( funcArr.length === 2 )
    //   {
    //     funcArr[ 0 ]( a, b, [ funcArr[ 1 ] ] );
    //   }
    //   else if( funcArr.length === 1 )
    //   {
    //     funcArr[ 0 ]( a, b )
    //   }
    // }
    // else
    // {
    //   return 0;
    // }
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
    // if( Array.isArray( funcArr ) )
    // {
    //   if( funcArr.length === 2 )
    //   {
    //     funcArr[ 0 ]( a, b, [ funcArr[ 1 ] ] );
    //   }
    //   else if( funcArr.length === 1 )
    //   {
    //     funcArr[ 0 ]( a, b )
    //   }
    // }
    // else
    // {
    //   return 0;
    // }
  }
}

function sortReadTable( a, b )
{
  if( sortOrder[ 0 ] === 'Working' )
  {
    if( sortByWorking( a, b ) === 0 )
    {
      if( sortOrder[ 1 ] === 'Code' )
      {
        if( sortByCode( a, b ) === 0 )
        {
          if( sortOrder[ 2 ] ==='RW' )
          {
            const result = sortByRW( a, b ) === 0 ? sortByDeps( a, b ) : sortByRW( a, b )
            return result;
          }
          else if( sortOrder[ 2 ] ==='Deps' )
          {
            const result = sortByDeps( a, b ) === 0 ? sortByRW( a, b ) : sortByDeps( a, b )
            return result;
          }
        }
        else
        {
          return sortByCode( a, b );
        }
      }
      else if( sortOrder[ 1 ] === 'RW' )
      {
        if( sortByRW( a, b ) === 0 )
        {
          if( sortOrder[ 2 ] ==='Code' )
          {
            const result = sortByCode( a, b ) === 0 ? sortByDeps( a, b ) : sortByCode( a, b )
            return result;
          }
          else if( sortOrder[ 2 ] ==='Deps' )
          {
            const result = sortByDeps( a, b ) === 0 ? sortByCode( a, b ) : sortByDeps( a, b )
            return result;
          }
        }
        else
        {
          return sortByRW( a, b );
        }
      }
      else if()
      {

      }


    }
    else
    {
      return sortByWorking( a, b );
    }


  }

}

function sortTable( a, b, table )
{
  if( table==='read' )
  {

  }


  // Sort Code -> R+W -> Deps
  // if( sortOrder[ 0 ] === 'Code' )
  // {
  //   if( sortOrder[ 1 ] === 'RW' )
  //   {
  //     sortByCode( a, b, [ sortByRW, sortByDeps ] );
  //   }
  //   else if( sortOrder[ 1 ] === 'Deps' )
  //   {
  //     sortByCode( a, b, [ sortByDeps, sortByRW ] );
  //   }
  // }
  // else if( sortOrder[ 0 ] === 'RW' )
  // {
  //   if( sortOrder[ 1 ] === 'Code' )
  //   {
  //     sortByRW( a, b, [ sortByCode, sortByDeps ] );
  //   }
  //   else if( sortOrder[ 1 ] === 'Deps' )
  //   {
  //     sortByRW( a, b, [ sortByDeps, sortByCode ] );
  //   }
  // }
  // else if( sortOrder[ 0 ] === 'Deps' )
  // {
  //   if( sortOrder[ 1 ] === 'Code' )
  //   {
  //     sortByDeps( a, b, [ sortByCode, sortByRW ] );
  //   }
  //   else if( sortOrder[ 1 ] === 'RW' )
  //   {
  //     sortByDeps( a, b, [ sortByRW, sortByCode ] );
  //   }
  // }


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
