#!/usr/bin/env node

// Prints a list of the unit synonyms in synonym order and in csv format,
// and includes the synonym, the number of units for the synonym,
// and the list of unit codes for the synonym.
// It uses | as a separator rather than a comma, to keep from interfering
// with the JSON output for the unit code arrays kept for each synonym.
//
// Use standard command syntax to create the file:
//  printSynonyms.js > filename.txt

const { ucumJsonDefs } = require('../source-cjs/ucumJsonDefs.js');
const { UnitTables } = require('../source-cjs/unitTables.js');
const uTab = UnitTables.getInstance();

ucumJsonDefs.loadJsonDefs();
uTab.buildUnitSynonyms();

let sList = 'synonym|unit count|unit codes\n';
let sKeys = Object.keys(uTab.unitSynonyms_).sort();
let sLen = sKeys.length ;
for (let s = 0; s < sLen; s++) {
  let sKey = sKeys[s];
  let kLen = uTab.unitSynonyms_[sKey].length;
  let codes = JSON.stringify(uTab.unitSynonyms_[sKey]);
  codes = codes.substring(1, codes.length - 2);
  sList += sKey + '|' + kLen + '|' + codes + '\n';
}

console.log(sList);