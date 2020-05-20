const wTools = require("wTools");
require("wFiles");

function readYML(yml) {
  const data = wTools.fileProvider.fileRead({
    filePath: yml,
    encoding: "yaml",
  });
  return data;
}

const rwTable = readYML(`${__dirname}/../data/readWriteConvertCompressImg.yml`);
const processTable = readYML(`${__dirname}/../data/processImg.yml`);
const mainInfo = readYML(`${__dirname}/../data/mainInfo.yml`);
const resources = readYML(`${__dirname}/../data/resources.yml`);

console.log(rwTable['Modules to read/write/convert/compress images'][0]);


function tableObjToMd(table, obj) {
  let temp = '';
  
  if (table === 1) {
    temp = `### Modules to read/write/convert/compress images\n
      | **N** | **R** | **W** | **Code** | **Modular** | **I** | **PL** | **B.s** | **N.s** | **Deps** |\n
      | --- | --- | --- | --- | --- | --- | -- | --- | --- | --- |\n
    `;
    obj.forEach(el => {
      temp += `| ${el.N} | ${el.R.toString()} | ${el.R.toString()} |${el.Code}|${el.Modular}|${el.I}|${el.PL}|${el['B.s']}|${el['N.s']}|${el.Deps}|\n`
    });

    return temp;
  } else if (table === 2) {
    return temp;
  }
}

function jsToMd(data) {

  // let table1md = '';
  // let table2md = '';
  // let rulesmd = '';
  // let algomd = '';
  // let resourcesmd = '';

  let output = `
  # Awesome image!\n
  Curated overview of awesome Javascript projects to read / write / convert / compress / process images of different formats.\n`
  const {
    "Modules to read/write/convert/compress images": rwcc,
    "Modules to process images": p,
    "Columns' definitions": rules,
    "Sorting Algorithm (descending order significance)": algo,
    "Resources": resources,
  } = data;


  output += tableObjToMd(rwcc);

}



// jsToMd(data);
// console.log(data);

// wTools.fileProvider.fileWrite({
//   filePath: `${__dirname}/output/README.md`,
//   data: JSON.stringify(data),
// });
