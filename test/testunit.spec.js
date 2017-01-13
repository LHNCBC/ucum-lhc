/**
 * Mocha tests for the Unit class.  Starting out with just testing the power
 * method.  More tests to be added later.
 *
 * Run from the command line with 'mocha testunit.js' or 'grunt test'
 */

var assert = require('assert');
var UcumJsonDefs = require('../source-es5/ucumJsonDefs.js').UcumJsonDefs ;
var UTables = require("../source-es5/unitTables.js").UnitTables;
var UnitObj = require("../source-es5/unit.js").Unit;

var uTabs = UTables.getInstance();
var uDefs = UcumJsonDefs.getInstance();
uDefs.loadJsonDefs();


describe('Test Unit Power method', function() {
    describe('Test invalid Power request', function() {
      var fahrUnit = uTabs.getUnitByCode('[degF]');
      var errMsg = null;
      try {
        var returnObj = fahrUnit.power(2);
      }
      catch(err) {
        errMsg = err.message;
      }
      it("should throw an error message about a non-ratio unit", function() {
        assert.equal('Attempt to raise a non-ratio unit, degrees Fahrenheit, ' +
            'to a power.', errMsg);
      });

    });

    describe('Test valid Power request', function() {
      var footUnit = uTabs.getUnitByCode('[ft_i]');
      var errMsg = null;
      var retFoot = null;
      try {
        retFoot = footUnit.power(2);
      }
      catch(err) {
        errMsg = err;
      }
      it("should not throw an error message", function() {
        assert.equal(null, errMsg);
      });
      it ("should return a unit code of [ft_i]2", function() {
        assert.equal('[ft_i]2', retFoot.csCode_);
      });
      it ("should return a magnitude of 0.09290304", function() {
        assert.equal(0.09290304, retFoot.magnitude_);
      });
      it ("should return a dimension vector of [2,0,0,0,0,0,0]", function() {
        assert.deepEqual([2,0,0,0,0,0,0], retFoot.dim_.dimVec_);
      });
  });
});


