var fs = require("fs");

const makeArrayFromTextFile = (path) => {
  const text = fs.readFileSync(path, "utf-8");
  const textByLine = text.split("\n");
  return textByLine;
};
const arr = makeArrayFromTextFile("./result.txt");

//const arr = ['a','b','a'];
let func = arr.reduce((acc, item) => {
  let trimItem = item.trim();
  if (acc.indexOf(trimItem) == -1) {
    acc.push(trimItem);
  }
  return acc;
}, []);
fs.writeFileSync("modified.txt", func.join("\n"), "utf8");
