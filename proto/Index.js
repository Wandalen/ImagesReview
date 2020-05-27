const _ = require( 'wTools' );
require( 'wFiles' );

const { 'Modules to read/write/convert/compress images' : rwTableObj } = readYML( '../data/ReadWriteConvertCompressImg.yml' );

const { 'Modules to process images' : processTableObj } = readYML( '../data/ProcessImg.yml' );

const
  {
    'Columns\' definitions' : columnsDef,
    'Sorting Algorithm (descending order significance)' : algo,
  } = readYML( '../data/MainInfo.yml' );

const { Resources : resources } = readYML( '../data/Resources.yml' );

let header1 = '# Awesome image!\n\nCurated overview of awesome Javascript projects to read / write / convert / compress /'
let header2 = ' process images of different formats.\n'
let final = `${header1} ${header2}\n${tableObjToMd( 1, rwTableObj )}\n${tableObjToMd( 2, processTableObj )}\n
${colsDefsToMd( columnsDef )}\n${algoToMd( algo )}\n${resourcesToMd( resources )}`;

// Writing to file
// writeMd( '../README', final );

_.fileProvider.fileWrite( abs( '../README' ), _.fileProvider.fileRead( {
  filePath : abs( '../README.md' ),
} ) );

function abs()
{
  return _.path.s.join( __dirname, ... arguments );
}

exports.abs = abs;

function readYML( yml )
{
  const data = _.fileProvider.fileRead( {
    filePath : abs( yml ),
    encoding : 'yaml',
  } );

  return data;
}

exports.readYML = readYML;

function writeMd( md, data )
{
  _.fileProvider.fileWrite( abs( md ), data );
}

function tableObjToMd( table, obj )
{
  let temp = '';

  if( table === 1 )
  {
    temp = '### Modules to read/write/convert/compress images\n\n| **N** | **R** | **W** | **Code** | **Modular** | **I** | **PL** | **B.s** | **N.s** | **Deps** |\n| --- | --- | --- | --- | --- | --- | -- | --- | --- | --- |\n';

    obj.forEach( ( el ) =>
    {
      temp += `| [**${ el.N.name }**](${ el.N.link }) | ${el.R.join( ', ' )} | ${el.R.join( ', ' )} | ${ el.Code } | ${ el.Modular } | ${ el.I } | ${ el.PL } | ${ el[ 'B.s' ] } | ${ el[ 'N.s' ] } | ${ el.Deps } |\n`;
    } );

  }
  else if( table === 2 )
  {
    temp ='### Modules to process images\n\n| **N** | **Code** | **Modular** | **I** | **PL** | **B.s** | **N.s** | **Deps**|\n| --- | --- | --- | --- | --- | --- | --- | --- |\n';

    obj.forEach( ( el ) =>
    {
      temp += `| [**${ el.N.name }**](${ el.N.link }) | ${ el.Code } | ${ el.Modular } | ${ el.I } | ${ el.PL } | ${ el[ 'B.s' ] } | ${ el[ 'N.s' ] } | ${ el.Deps } |\n`;
    } );
  }

  return temp;
}

function colsDefsToMd( cols )
{
  let temp = '**Columns\' definitions**\n'

  cols.forEach( ( el ) =>
  {
    let [ keyVal ] = Object.entries( el );

    if( keyVal[ 0 ]==='I' )
    {
      temp += `* *${ keyVal[ 0 ] }*:\n`

      keyVal[ 1 ].forEach( ( el ) =>
      {
        temp += `\t* ${ el }\n`
      } );
    }
    else
    {
      temp += `* *${ keyVal[ 0 ] }* - ${ keyVal[ 1 ] }\n`
    }
  } );

  return temp;
}

function algoToMd( algo )
{
  let temp = '**Sorting Algorithm** (descending order of significance)\n'
  algo.forEach( ( el, i ) =>
  {
    temp += `${ i+1 }. ${ el }\n`
  } );

  return temp;
}

function resourcesToMd( res )
{
  let temp = '### Resources:\n\n';

  res.forEach( ( el, i ) =>
  {
    temp += `${ i + 1 }. [${ el.Name }](${ el.Link })\n`;
  } );

  return temp;
}
