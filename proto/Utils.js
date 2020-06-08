const _ = require( 'wTools' );
require( 'wFiles' );

function readYML( yml )
{
  const data = _.fileProvider.fileRead( {
    filePath : abs( yml ),
    encoding : 'yaml',
  } );

  return data;
}

exports.readYML = readYML;

function abs()
{
  return _.path.s.join( __dirname, ... arguments );
}

exports.abs = abs;
