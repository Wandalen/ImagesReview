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

function sortTable(a, b) 
{
  // 1. Sort by open/closed code
  if (a.Code === 'open' && b.Code === 'closed')
  {
    return 1;
  } else if (a.Code === 'closed' && b.Code === 'open')
  {
    return -1;
  } else 
  // 2. Sort by the amount of formats to read/write
  {
    let aTotal = a.R.length + a.W.length;
    let bTotal = b.R.length + b.W.length;

    if (aTotal > bTotal) 
    {
      return 1;
    } else if (aTotal < bTotal)
    {
      return -1
    } else 
    // 3. Sort the amount of dependents
    {
      let aDep = +a.Deps;
      let bDep = +b.Deps;

      if (aDep > bDep)
      {
        return 1;
      } else if (aDep < bDep)
      {
        return -1;
      } else
      {
        return 0;
      }
    }
  }
}


console.log(rwTableObj);
