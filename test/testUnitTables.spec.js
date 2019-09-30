/**
 * Mocha tests for the UnitTables class.  Starting out with just testing the
 * getUnitBySynonym method.  More tests to be added later.
 *
 * Run from the command line with 'mocha testUnitTAbles.js' or 'grunt test'
 */

var assert = require('assert');
var UcumJsonDefs = require('../source/ucumJsonDefs.js').UcumJsonDefs ;
var UTables = require("../source/unitTables.js").UnitTables;
var UnitObj = require("../source/unit.js").Unit;

var uTabs = UTables.getInstance();
var uDefs = UcumJsonDefs.getInstance();
uDefs.loadJsonDefs();


describe('Test getUnitBySynonym method', function() {

  describe('Test request with no synonym specified ', function() {

    var retObj = uTabs.getUnitBySynonym();
    it("should return an error message for no synonym specified", function() {
      assert.equal('error', retObj['status']);
      assert.equal('Unable to find unit by synonym because no synonym ' +
          'was provided.', retObj['msg']);
    });
  });

  describe('Test synonym request', function () {

    var retObj = uTabs.getUnitBySynonym('month');
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

describe('Test getUnitByCode method', function() {

  describe('Test request with no code specified ', function() {

    var retObj = uTabs.getUnitByCode();
    it("should return a null unit", function() {
      assert.equal(null, retObj);
    });
  });

  describe('Test request with a valid code specified', function () {

    var retObj = uTabs.getUnitByCode('m');
    it("should show that a unit is returned and with the correct name", function() {
      assert.notEqual(null, retObj);
      assert.equal('meter', retObj['name_']);
    });
  });

  describe('Test request with an invalid code specified', function () {

    var retObj = uTabs.getUnitByCode('CEL');
    it("should show that no unit is returned", function() {
      assert.equal(null, retObj);
    });
  });
});  // end of getUnitByCode tests
