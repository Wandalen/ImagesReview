// testing
const fs = require("fs");
const _ = require("wTools");
require("wFiles");

function abs() {
  return _.path.s.join(__dirname, ...arguments);
}

function readYML(yml) {
  const data = _.fileProvider.fileRead({
    filePath: abs(yml),
    encoding: "yaml",
  });

  return data;
}

function writeMd(md, data) {
  _.fileProvider.fileWrite(abs(md), data);
}

const { "Modules to read/write/convert/compress images": rwTableObj } = readYML(
  '/../data/readWriteConvertCompressImg.yml'
);
const { "Modules to process images": processTableObj } = readYML(
  '/../data/processImg.yml'
);
const {
  "Awesome image!": header,
  "Columns' definitions": columnsDef,
  "Sorting Algorithm (descending order significance)": algo,
} = readYML('/../data/mainInfo.yml');
const { Resources: resources } = readYML('/../data/resources.yml');

// console.log(rwTable['Modules to read/write/convert/compress images']);
// console.log(processTableObj);
// console.log('---')
// console.log(columnsDef);
// console.log('---')
// console.log(algo);
// console.log('---');

function tableObjToMd(table, obj) {
  let temp = "";

  if (table === 1) {
    temp =
      "### Modules to read/write/convert/compress images\n| **N** | **R** | **W** | **Code** | **Modular** | **I** | **PL** | **B.s** | **N.s** | **Deps** |\n| --- | --- | --- | --- | --- | --- | -- | --- | --- | --- |\n";
    obj.forEach((el) => {
      temp += `| [**${el.N.name}**](${el.N.link}) | ${el.R.join(
        ", "
      )} | ${el.R.join(", ")} | ${el.Code} | ${el.Modular} | ${el.I} | ${
        el.PL
      } | ${el["B.s"]} | ${el["N.s"]} | ${el.Deps} |\n`;
    });
  } else if (table === 2) {
    temp =
      "### Modules to process images\n| **N** | **Code** | **Modular** | **I** | **PL** | **B.s** | **N.s** | **Deps**|\n| --- | --- | --- | --- | --- | --- | --- | --- |\n";
    obj.forEach((el) => {
      temp += `| [**${el.N.name}**](${el.N.link}) | ${el.Code} | ${el.Modular} | ${el.I} | ${el.PL} | ${el["B.s"]} | ${el["N.s"]} | ${el.Deps} |\n`;
    });
  }

  return temp;
}

function resourcesToMd(res) {
  let temp = "### Resources:\n";
  res.forEach((el, i) => {
    temp += `${i + 1}. [${el.Name}](${el.Link})\n`;
  });

  return temp;
}

let final = `# Awesome image!\nCurated overview of awesome Javascript projects to read / write / convert / compress / process images of different formats.\n${tableObjToMd(
  1,
  rwTableObj
)}\n${tableObjToMd(2, processTableObj)}`;

// Writing to files
writeMd('/../output/README.md', final);

