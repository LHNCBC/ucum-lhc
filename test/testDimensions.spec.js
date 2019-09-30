/**
 * Mocha test to verify dimension vectors in the UCUM data.
 *
 * Run from the command line with 'mocha testDimensions.spec.js' or 'grunt test'
 */
var assert = require('assert');
var UcumTestUtils = require('../test/ucumTestUtils.js').UcumTestUtils;


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


