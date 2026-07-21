/**
 * Mocha test to verify dimension vectors in the UCUM data.
 *
 * Run from the command line with 'mocha testDimensions.spec.js' or 'grunt test'
 */
var assert = require('assert');
var UcumTestUtils = require('../test/ucumTestUtils.js').UcumTestUtils;
var Dimension = require('../source-cjs/dimension.js').Dimension;


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


describe('Dimension argument validation', function() {
  ['add', 'sub', 'equals', 'assignDim'].forEach(function(methodName) {
    it(`should reject a non-Dimension parameter passed to ${methodName}`, function() {
      assert.throws(
        () => new Dimension()[methodName]({}),
        new RegExp(`Dimension\\.${methodName} called with an invalid parameter`)
      );
    });
  });

  it('should report an invalid scalar passed to mul', function() {
    assert.throws(
      () => new Dimension().mul('two'),
      /Dimension\.mul called with an invalid parameter - string instead of an integer/
    );
  });

  it('should reject a non-integer scalar passed to mul', function() {
    assert.throws(
      () => new Dimension().mul(1.5),
      /Dimension\.mul called with an invalid parameter - number instead of an integer/
    );
  });
});
