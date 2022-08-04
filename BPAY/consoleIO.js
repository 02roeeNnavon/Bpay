const readlineSync = require("readline-sync");

exports.print = output => {
  console.log(output);
};

exports.stringInput = () => {
  return readlineSync.question();
};

exports.intInput = () => {
  return Number.parseInt(readlineSync.question());
};
