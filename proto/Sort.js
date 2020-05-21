const _ = require("wTools");
require("wFiles");

const 
{
  readYML
} = require('./Index');

const 
{
  "Modules to read/write/convert/compress images": rwTableObj
} = readYML("../data/readWriteConvertCompressImg.yml");


console.log(rwTableObj);
