const _ = require( 'wTools' );
require( 'wFiles' );

const { readYML, abs } = require( './Index' );
const sortOrder = [ 'Code', 'R', 'W', 'Deps' ];

let { 'Modules to read/write/convert/compress images' : rwTableObj } = readYML( '../data/ReadWriteConvertCompressImg.yml' );

rwTableObj = rwTableObj.sort( sortTable ).reverse();
rwTableObj = { 'Modules to read/write/convert/compress images' : rwTableObj };

_.fileProvider.fileWrite( { filePath : abs( '../data/ReadWriteConvertCompressImg.yml' ), data : rwTableObj, encoding : 'yaml' } );

function sortTable( a, b )
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
  // 2. Sort by the amount of formats to read/write
  {
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
    // 3. Sort the amount of dependents
    {
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
  }
}
