// This runs the code to update the json data from a csv file
//
// updateData.sh inputFileName
//
// Babel is used to translate this to ECMA 5 code, i.e.,
// babel updateData.js --out-file updateData5.js
//
// Then run from the command line, i.e., node updateData5.js inputFileName
//
var UcumDataUpdater = require("./ucumDataUpdater5.js").UcumDataUpdater;

var inputFileName = process.argv[2];
if (inputFileName) {
  var upd = UcumDataUpdater.getInstance();
  upd.readFile(inputFileName);
}
else {
  console.log('Please specify an input file name');
}