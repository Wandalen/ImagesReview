const wTools = require("wTools");
require("wFiles");

function tableObjToMd(table, obj) {
  let temp = '';
  if (table === 1) {
    obj.forEach(el => {
      temp = `| ${el.N} | ${el.R.toString()}`
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
  Curated overview of awesome Javascript projects to read / write / convert / compress / process images of different formats.\n
  ### Modules to read/write/convert/compress images\n
  | **N** | **R** | **W** | **Code** | **Modular** | **I** | **PL** | **B.s** | **N.s** | **Deps**|
  | --- | --- | --- | --- | --- | --- | -- | --- | --- | --- | 

  `;
  const {
    "Modules to read/write/convert/compress images": rwcc,
    "Modules to process images": p,
    "Columns' definitions": rules,
    "Sorting Algorithm (descending order significance)": algo,
    "Resources": resources,
  } = data;


  output += tableObjToMd(rwcc);

}

const data = wTools.fileProvider.fileRead({
  filePath: `${__dirname}/input/images.yml`,
  encoding: "yaml",
});

// jsToMd(data);
// console.log(data);

wTools.fileProvider.fileWrite({
  filePath: `${__dirname}/output/README.md`,
  data: JSON.stringify(data),
});