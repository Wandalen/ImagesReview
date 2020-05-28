const _ = require( 'wTools' );
require( 'wFiles' );

const { readYML, abs } = require( './Index' );
let { 'Modules to read images' : rTable } = readYML( '../data/ReadImg.yml' );
let { 'Modules to write images' : wTable } = readYML( '../data/WriteImg.yml' );
let { 'Modules to convert images' : convTable } = readYML( '../data/ConvertImg.yml' );
let { 'Modules to compress images' : compTable } = readYML( '../data/CompressImg.yml' );
// let { 'Modules to process images' : procTable } = readYML( '../data/ProcessImg.yml' );
let sortOrder = [ 'Working', 'Code', 'RW', 'Deps' ];
// const sortOrder = [ 'Working', 'Code', 'RW', 'Deps' ];

rTable.sort( sortTable ).reverse();
wTable.sort( sortTable ).reverse();
convTable.sort( sortTable ).reverse();
compTable.sort( sortTable ).reverse();

console.log();

rTable = { 'Modules to read images' : rTable };
wTable = { 'Modules to write images' : wTable };
convTable = { 'Modules to convert images' : convTable };
compTable = { 'Modules to compress images' : compTable };

_.fileProvider.fileWrite( { filePath : abs( '../data/ReadImg.yml' ), data : rTable, encoding : 'yaml' } );
_.fileProvider.fileWrite( { filePath : abs( '../data/WriteImg.yml' ), data : wTable, encoding : 'yaml' } );
_.fileProvider.fileWrite( { filePath : abs( '../data/ConvertImg.yml' ), data : convTable, encoding : 'yaml' } );
_.fileProvider.fileWrite( { filePath : abs( '../data/CompressImg.yml' ), data : compTable, encoding : 'yaml' } );

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
  let aTotal, bTotal;

  // Identify read/write table
  if( a.Read )
  {
    aTotal = a.Read.length;
    bTotal = b.Read.length;
  }
  else if( a.Write )
  {
    aTotal = a.Write.length;
    bTotal = b.Write.length;
  }
  // Identify convert/compress table
  else
  {
    aTotal = ( a.R[ 0 ]==='-'? 0: a.R.length ) + ( a.W[ 0 ]==='-'? 0: a.W.length );
    bTotal = ( b.R[ 0 ]==='-'? 0: b.R.length ) + ( b.W[ 0 ]==='-'? 0: b.W.length )
  }

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

function sortTable( a, b )
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
      else if( sortOrder[ 1 ] === 'Deps' )
      {
        if( sortByDeps( a, b ) === 0 )
        {
          if( sortOrder[ 2 ] ==='Code' )
          {
            const result = sortByCode( a, b ) === 0 ? sortByRW( a, b ) : sortByCode( a, b )
            return result;
          }
          else if( sortOrder[ 2 ] ==='RW' )
          {
            const result = sortByRW( a, b ) === 0 ? sortByCode( a, b ) : sortByRW( a, b )
            return result;
          }
        }
        else
        {
          return sortByDeps( a, b );
        }
      }
    }
    else
    {
      return sortByWorking( a, b );
    }
  }
  else if( sortOrder[ 0 ] === 'Code' )
  {
    if( sortByCode( a, b ) === 0 )
    {
      if( sortOrder[ 1 ] === 'RW' )
      {
        if( sortByRW( a, b ) === 0 )
        {
          if( sortOrder[ 2 ] ==='Working' )
          {
            const result = sortByWorking( a, b ) === 0 ? sortByDeps( a, b ) : sortByWorking( a, b )
            return result;
          }
          else if( sortOrder[ 2 ] ==='Deps' )
          {
            const result = sortByDeps( a, b ) === 0 ? sortByWorking( a, b ) : sortByDeps( a, b )
            return result;
          }
        }
        else
        {
          return sortByRW( a, b );
        }
      }
      else if( sortOrder[ 1 ] === 'Deps' )
      {
        if( sortByDeps( a, b ) === 0 )
        {
          if( sortOrder[ 2 ] ==='RW' )
          {
            const result = sortByRW( a, b ) === 0 ? sortByWorking( a, b ) : sortByRW( a, b )
            return result;
          }
          else if( sortOrder[ 2 ] ==='Working' )
          {
            const result = sortByWorking( a, b ) === 0 ? sortByRW( a, b ) : sortByWorking( a, b )
            return result;
          }
        }
        else
        {
          return sortByDeps( a, b );
        }
      }
      else if( sortOrder[ 1 ] === 'Working' )
      {
        if( sortByWorking( a, b ) === 0 )
        {
          if( sortOrder[ 2 ] ==='Deps' )
          {
            const result = sortByDeps( a, b ) === 0 ? sortByRW( a, b ) : sortByDeps( a, b )
            return result;
          }
          else if( sortOrder[ 2 ] ==='RW' )
          {
            const result = sortByRW( a, b ) === 0 ? sortByDeps( a, b ) : sortByRW( a, b )
            return result;
          }
        }
        else
        {
          return sortByWorking( a, b );
        }
      }
    }
    else
    {
      return sortByCode( a, b );
    }
  }
  else if( sortOrder[ 0 ] === 'RW' )
  {
    if( sortByRW( a, b ) === 0 )
    {
      if( sortOrder[ 1 ] === 'Code' )
      {
        if( sortByCode( a, b ) === 0 )
        {
          if( sortOrder[ 2 ] ==='Working' )
          {
            const result = sortByWorking( a, b ) === 0 ? sortByDeps( a, b ) : sortByWorking( a, b )
            return result;
          }
          else if( sortOrder[ 2 ] ==='Deps' )
          {
            const result = sortByDeps( a, b ) === 0 ? sortByWorking( a, b ) : sortByDeps( a, b )
            return result;
          }
        }
        else
        {
          return sortByCode( a, b );
        }
      }
      else if( sortOrder[ 1 ] === 'Deps' )
      {
        if( sortByDeps( a, b ) === 0 )
        {
          if( sortOrder[ 2 ] ==='Code' )
          {
            const result = sortByCode( a, b ) === 0 ? sortByWorking( a, b ) : sortByCode( a, b )
            return result;
          }
          else if( sortOrder[ 2 ] ==='Working' )
          {
            const result = sortByWorking( a, b ) === 0 ? sortByCode( a, b ) : sortByWorking( a, b )
            return result;
          }
        }
        else
        {
          return sortByDeps( a, b );
        }
      }
      else if( sortOrder[ 1 ] === 'Working' )
      {
        if( sortByWorking( a, b ) === 0 )
        {
          if( sortOrder[ 2 ] ==='Deps' )
          {
            const result = sortByDeps( a, b ) === 0 ? sortByCode( a, b ) : sortByDeps( a, b )
            return result;
          }
          else if( sortOrder[ 2 ] ==='Code' )
          {
            const result = sortByCode( a, b ) === 0 ? sortByDeps( a, b ) : sortByCode( a, b )
            return result;
          }
        }
        else
        {
          return sortByWorking( a, b );
        }
      }
    }
    else
    {
      return sortByRW( a, b );
    }
  }
  else if( sortOrder[ 0 ]=== 'Deps' )
  {
    if( sortByDeps( a, b ) === 0 )
    {
      if( sortOrder[ 1 ] === 'Code' )
      {
        if( sortByCode( a, b ) === 0 )
        {
          if( sortOrder[ 2 ] ==='Working' )
          {
            const result = sortByWorking( a, b ) === 0 ? sortByRW( a, b ) : sortByWorking( a, b )
            return result;
          }
          else if( sortOrder[ 2 ] ==='RW' )
          {
            const result = sortByRW( a, b ) === 0 ? sortByWorking( a, b ) : sortByRW( a, b )
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
            const result = sortByCode( a, b ) === 0 ? sortByWorking( a, b ) : sortByCode( a, b )
            return result;
          }
          else if( sortOrder[ 2 ] ==='Working' )
          {
            const result = sortByWorking( a, b ) === 0 ? sortByCode( a, b ) : sortByWorking( a, b )
            return result;
          }
        }
        else
        {
          return sortByRW( a, b );
        }
      }
      else if( sortOrder[ 1 ] === 'Working' )
      {
        if( sortByWorking( a, b ) === 0 )
        {
          if( sortOrder[ 2 ] ==='RW' )
          {
            const result = sortByRW( a, b ) === 0 ? sortByCode( a, b ) : sortByRW( a, b )
            return result;
          }
          else if( sortOrder[ 2 ] ==='Code' )
          {
            const result = sortByCode( a, b ) === 0 ? sortByRW( a, b ) : sortByCode( a, b )
            return result;
          }
        }
        else
        {
          return sortByWorking( a, b );
        }
      }
    }
    else
    {
      return sortByDeps( a, b );
    }
  }
}

// function sortTable( a, b, table )
// {
//   if( table==='read' )
//   {

//   }


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
// }
