const _ = require( 'wTools' );
require( 'wFiles' );

const { readYML, abs } = require( './Index' );

const { 'Modules to read/write/convert/compress images' : table } = readYML( '../data/readWriteConvertCompressImg.yml' );

console.log( table );
