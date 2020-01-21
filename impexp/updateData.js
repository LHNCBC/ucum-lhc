// This runs the code to update the json data from a csv file
//
// updateData.sh inputFileName
//
var UcumDataUpdater = require("./ucumDataUpdater.js").UcumDataUpdater;

var inputFileName = process.argv[2];
if (inputFileName) {
  var upd = UcumDataUpdater.getInstance();
  upd.readFile(inputFileName);
}
else {
  console.log('Please specify an input file name');
}
