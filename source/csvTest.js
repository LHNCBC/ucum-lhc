/**
 * This validates unit strings found in a column in a csv (comma separated values)
 * file and returns the validation result in specified columns added to the
 * file.  This uses the node-csv package (https://github.com/wdavidw/node-csv)
 * to handle the input and output processing.
 *
 */

var fs = require('fs');
var parse = require('csv-parse');
var transform = require('stream-transform');
var stringify = require('csv-stringify');

var UcumLhcUtils = require("/home/lmericle/ucum/dist/es5/source/ucumLhcUtils.js").UcumLhcUtils;
var Ucum = require('./config.js').Ucum;

var output = [];
var parser = parse({columns: true});
var input = fs.createReadStream('/home/lmericle/ucum/dist/data/RegenstriefCodes.csv');
var output = fs.createWriteStream('/home/lmericle/ucum/dist/data/RegenstriefCodesValidations.csv');

// Function that processes the input record (row) read from the input file,
// calling the code to validate the string found in the specified source
// column and placing the results in the specified result columns
var transformer = transform(function(record){
  // read value in sourceCol
  // validate it
  // place results in resultCol
  //
  var utils = UcumLhcUtils.getInstance();
  let uStr = record[sourceCol];
  let parseResp = [];
  record[unitTestedCol] = uStr;
  
  try {
    let parseResp = utils.validUnitString(uStr, false);
    if (parseResp[0])
      record[resultCol] = "Valid UCUM unit.";
    else
      record[resultCol] = "Not valid UCUM unit.";
    if (parseResp[1].length > 0)
      record[commentCol] = parseResp[1].join(' - ');
    else
      record[commentCol] = '';
  }
  catch (err) {
    record[resultCol] = 'ERROR';
    record[commentCol] = err.message;
  }
   return record;
  });

var stringifier =  stringify({header: true});

var sourceCol = 'UCUM_CODE' ;
var unitTestedCol = 'Unit String Tested' ;
var resultCol = 'Validation Result' ;
var commentCol = 'Notes' ;

// Write the annotations message as the first line of the output file
output.write('*' + Ucum.bracesMsg_ + '\r\n');

// The parser reads a line (row) from the input file, sends it to the
// transformer function (above), which sends the results to the stringifier
// to format them as a spreadsheet row, and then pipes the row to the ouput file.
input.pipe(parser).pipe(transformer).pipe(stringifier).pipe(output);