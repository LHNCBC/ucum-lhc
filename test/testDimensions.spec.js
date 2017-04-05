/**
 * Mocha test to verify dimension vectors in the UCUM data.
 *
 * Run from the command line with 'mocha testDimensions.spec.js' or 'grunt test'
 */
var assert = require('assert');
//var fs = require('fs');
//var JDefs = require('../source-es5/ucumJsonDefs.js').UcumJsonDefs;
//var Unit = require('../source-es5/unit.js').Unit;
//var UnitTables = require('../source-es5/unitTables.js').UnitTables;
//var UnitString = require('../source-es5/unitString.js').UnitString;
var UcumTestUtils = require('../test-es5/ucumTestUtils.js').UcumTestUtils;


describe('Check computed dimension vectors', function() {
  it("should return an empty problems array", function() {
    var tUtil = new UcumTestUtils;
    var problems = tUtil.checkAllDimensions();
    var pLen = problems.length ;
    if (pLen > 0) {
      console.log('PROBLEMS:');
      for (var p = 0; p < pLen; p++)
        console.log(`${problems[p]}`);
    }
    assert.equal(0, problems.length);
  });
});


