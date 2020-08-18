const _ = require( 'wTools' );
require( 'wFiles' );
const { readYML, abs } = require( './Utils' )

const { 'Modules to read images' : rTable } = readYML( '../data/ReadImg.yml' );
const { 'Modules to write images' : wTable } = readYML( '../data/WriteImg.yml' );
const { 'Modules to convert images' : convTable } = readYML( '../data/ConvertImg.yml' );
const { 'Modules to compress images' : compTable } = readYML( '../data/CompressImg.yml' );
const { 'Modules to process images' : processTableObj } = readYML( '../data/ProcessImg.yml' );
const { 'Projects description' : projDesc } = readYML( '../data/Overview.yml' );
const { 'Methods' : methods } = readYML( '../data/ReadImgMethods.yml' );
const
  {
    'Columns\' definitions' : columnsDef,
    'Sorting Algorithm (descending order significance)' : algo,
  } = readYML( '../data/MainInfo.yml' );

const { Resources : resources } = readYML( '../data/Resources.yml' );

let header1 = '# Awesome image projects! [![Status](https://github.com/Wandalen/OverviewImage/workflows/Test/badge.svg)](https://github.com/Wandalen/OverviewImage/actions?query=workflow%3ATest)\n\nCurated overview of awesome Javascript projects to read / write / convert / compress /'
let header2 = ' process images of different formats.\n'

let final = `${header1}${header2}\n${tableObjToMd( 'read', rTable )}\n${tableObjToMd( 'write', wTable )}
${tableObjToMd( 'convert', convTable )}\n${tableObjToMd( 'compress', compTable )}
${tableObjToMd( 'process', processTableObj )}\n${ReadImgMethodsToMd( methods )}\n${readMd( `${__dirname}/../doc/RW.md` )}\n${readMd( `${__dirname}/../doc/Samples.md` )}\n${overviewToMd( projDesc )}\n
${colsDefsToMd( columnsDef )}\n${algoToMd( algo )}\n${resourcesToMd( resources )}`;

// Writing to file
writeMd( '../README.md', final );

function readMd( path )
{
  const data = _.fileProvider.fileRead( {
    filePath : abs( path ),
  } );

  return data;
}


function writeMd( md, data )
{
  _.fileProvider.fileWrite( abs( md ), data );
}

function tableObjToMd( table, obj )
{
  let temp = '';

  if( table === 'read' || table === 'write' )
  {
    temp = `### Projects to ${table === 'read' ? 'read': 'write'} images\n\n| **Name** | ${table === 'read' ? '**Read**': '**Write**'} | **Code** | **Modular** | **Interface** | **Language** | **B.s** | **N.s** | **Deps** | **Working** | **Agg** |\n| --- | --- | --- | --- | --- | --- | -- | --- | --- | --- | --- |\n`;

    obj.forEach( ( el ) =>
    {
      temp += `| [**${ el.N.name }**](${ el.N.link }) | ${table === 'read' ? el.Read.join( ', ' ) : el.Write.join( ', ' ) } | ${ el.Code } | ${ el.Modular } | ${ el.I } | ${ el.PL } | ${ el[ 'B.s' ] } | ${ el[ 'N.s' ] } | ${ el.Deps } | ${el.Working} | ${el.Aggregative} |\n`;
    } );
  }
  else if( table === 'compress' || table === 'convert' )
  {
    temp = `### Projects to ${table === 'compress' ? 'compress': 'convert'} images\n\n| **Name** | **R** | **W** | **Code** | **Modular** | **Interface** | **Language** | **B.s** | **N.s** | **Deps** | **Working** |\n| --- | --- | --- | --- | --- | --- | --- | -- | --- | --- | --- |\n`;
    obj.forEach( ( el ) =>
    {
      temp += `| [**${ el.N.name }**](${ el.N.link }) | ${el.R[ 0 ] === '-'? '-': el.R.join( ', ' )} | ${el.W[ 0 ] === '-'? '-': el.W.join( ', ' )} | ${ el.Code } | ${ el.Modular } | ${ el.I } | ${ el.PL } | ${ el[ 'B.s' ] } | ${ el[ 'N.s' ] } | ${ el.Deps } | ${el.Working} |\n`;
    } );
  }
  else if( table === 'process' )
  {
    temp ='### Projects to process images\n\n| **Name** | **Code** | **Modular** | **Interface** | **Language** | **B.s** | **N.s** | **Deps**| **Working** |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- |\n';

    obj.forEach( ( el ) =>
    {
      temp += `| [**${ el.N.name }**](${ el.N.link }) | ${ el.Code } | ${ el.Modular } | ${ el.I } | ${ el.PL } | ${ el[ 'B.s' ] } | ${ el[ 'N.s' ] } | ${ el.Deps } | ${el.Working} |\n`;
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

    if( keyVal[ 0 ]==='Interface' )
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

function overviewToMd( ov )
{
  let temp = '### Projects description\n\n'
  ov.forEach( ( el ) =>
  {
    temp+= `* [**${el.Name}**](${el.Link}) - ${el.Description}\n`
  } )

  return temp;
}

function ReadImgMethodsToMd( met )
{
  let temp = '### Readers\' features\n\n| **Name** | **Buffer** | **Stream** | **Sync** | **Async** | **Head** |\n| --- | --- | --- | --- | --- | --- |\n'
  met.forEach( ( el ) =>
  {
    temp += `| [**${el.N.name}**](${el.N.link}) | ${el.B} | ${el.Str} | ${el.S} | ${el.A} | ${el.H} |\n`;
  } );

  return temp;
}
