/**
 * This runs the code that creates a units list sorted by name and written
 * to a file in csv format.  Only selected fields are written.  The data is
 * from the UCUM JSON units/prefix data.
 *
 * Babel is used to translate this to ECMA 5 code, i.e.,
 * babel csvJsonList.js --out-file csvJsonList5.js
 *
 * Then run from the command line, i.e., node csvJsonList5.js
 */

var fs = require('fs');
var JDefs = require('../dist/es5/source/ucumJsonDefs.js').UcumJsonDefs;
var UnitTables = require('../dist/es5/source/unitTables.js').UnitTables;

// Load the data from the JSON file
var jdefs = JDefs.getInstance();
jdefs.loadJsonDefs();

// Write the list to the output buffer
var outBuff = 'case-sensitive code,name,unit property,unit string,magnitude,dimension\r\n';
var uTab = UnitTables.getInstance();
outBuff += uTab.allUnitsByName() ;

// write the buffer to the output file
fs.writeFileSync('ucumCsvList.csv', outBuff,
                 {encoding: 'utf8', mode: 0o666, flag: 'w'});



