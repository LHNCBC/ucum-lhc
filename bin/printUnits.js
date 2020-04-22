#!/usr/bin/env node

// Prints a list of the units to console.
// Use standard command syntax to create the file:
//  printUnits.js > filename.txt

const { ucumJsonDefs } = require('../source-cjs/ucumJsonDefs.js');
const { UnitTables } = require('../source-cjs/unitTables.js');
const uTab = UnitTables.getInstance();

ucumJsonDefs.loadJsonDefs();
console.log(uTab.printUnits(true));
