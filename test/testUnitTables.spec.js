/**
 * Mocha tests for the UnitTables class.  Starting out with just testing the
 * getUnitBySynonym method.  More tests to be added later.
 *
 * Run from the command line with 'mocha testUnitTAbles.js' or 'grunt test'
 */

var assert = require('assert');
var UcumJsonDefs = require('../source-es5/ucumJsonDefs.js').UcumJsonDefs ;
var UTables = require("../source-es5/unitTables.js").UnitTables;
var UnitObj = require("../source-es5/unit.js").Unit;

var uTabs = UTables.getInstance();
var uDefs = UcumJsonDefs.getInstance();
uDefs.loadJsonDefs();


describe('Test getUnitBySynonym method', function() {

  describe('Test request with no synonym specified ', function() {

    var retObj = null;
    try {
      var retObj = uTabs.getUnitBySynonym();
    }
    catch(err) {
      errMsg = err.message;
    }
    it("should return an error message for no synonym specified", function() {
      assert.equal('error', retObj['status']);
      assert.equal('Unable to find unit by synonym because no synonym ' +
          'was provided.', retObj['msg']);
    });
  });

  describe('Test synonym request', function () {

    var retObj = null;
    var uArray = null;
    try {
      retObj = uTabs.getUnitBySynonym('month');
    }
    catch(err) {
      errMsg = err.message;
      console.log(`error thrown from get synonym request, = ${errMsg}`);
    }
    it("should show that the unitSynonyms_ hash is not empty.", function() {
      assert(Object.keys(uTabs.unitSynonyms_).length > 0);
    });
    it("should return an array with one or more values.", function() {
      assert(retObj['units'].length > 0);
    });
    it("should return valid unit objects.", function() {
      for (var u = 0; u < retObj['units'].length; u++) {
        assert(retObj['units'][u] instanceof UnitObj);
      }
    });
  });

});  // end of getUnitBySynonym tests
