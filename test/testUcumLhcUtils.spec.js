/**
 * Mocha tests for the UcumLhcUtils class.  Starting out with just testing the
 * checkSynonyms method.  More tests to be added later.
 *
 * Run from the command line with 'mocha testUcumLhcUtils.js' or 'grunt test'
 */

var assert = require('assert');
var UcumJsonDefs = require('../source-es5/ucumJsonDefs.js').UcumJsonDefs ;
var UTables = require("../source-es5/unitTables.js").UnitTables;
var Utils = require("../source-es5/ucumLhcUtils.js").UcumLhcUtils;
var UString = require("../source-es5/unitString.js").UnitString;

var uTabs = UTables.getInstance();
var uDefs = UcumJsonDefs.getInstance();
uDefs.loadJsonDefs();
var uString = UString.getInstance();

var utils = Utils.getInstance();

describe('Test validateUnitString method', function() {

  it("should return an error message for no unit string supplied", function() {

    var resp1 = utils.validateUnitString();
    assert.equal(resp1.status, 'error', resp1.status);
    assert.equal(resp1.msg, 'No unit string specified.', resp1.msg);
  });

  it("should return a message for no unit found", function() {

    var resp2 = utils.validateUnitString('noTrump');
    assert.equal(resp2.status, 'invalid', resp2.status);
    assert.equal(resp2.msg[0], 'Unable to find unit for noTrump', resp2.msg[0]);
  });

  it("should return an updated UCUM code and message for 'Gauss'", function() {
    var resp3 = utils.validateUnitString('Gauss');
    assert.equal(resp3.status, 'valid', resp3.status);
    assert.equal(resp3.ucumCode, 'G', resp3.ucumCode);
    assert.equal(resp3.msg[0], 'The UCUM code for Gauss is G.\nDid you mean G?',
                 resp3.msg[0]);
  });

  it("should return a unit with a code, name and guidance for 'Bi'", function() {
    var resp4 = utils.validateUnitString('Bi');
    var theUnit = resp4.unit;
    assert(theUnit != null);
    if (theUnit) {
      assert.equal(theUnit.code, 'Bi', theUnit.code);
      assert.equal(theUnit.name, 'Biot', theUnit.name);
      assert.equal(theUnit.guidance, 'equal to 10 amperes', theUnit.guidance);
    }
  });

  it("should return a missing parenthesis message for 'L/(5.mg", function() {
    var resp5 = utils.validateUnitString('L/(5.mg');
    assert.equal(resp5.status, 'invalid');
    assert.equal(resp5.unit, null);
    assert.equal(resp5.ucumCode, null);
    assert.equal(resp5.msg, 'Missing close parenthesis for open parenthesis' +
        ' at L/' + uString.openEmph_ + '(' + uString.closeEmph_ + '5.mg');
   });

}); // end validateUnitString tests


describe('Test convertUnitTo method', function() {

  it("should return error messages for no unit strings supplied", function() {

    var resp1 = utils.convertUnitTo();
    assert.equal(resp1.status, 'error', resp1.status);
    assert.equal(resp1.msg[0], 'No "from" unit expression specified.', resp1.msg[0]);
    assert.equal(resp1.msg[1], 'No "from" value specified.', resp1.msg[1]);
    assert.equal(resp1.msg[2], 'No "to" unit expression specified.', resp1.msg[2]);
  });

  it("should return a message for invalid unit strings", function() {

    var resp2 = utils.convertUnitTo('Barack', 2017, 'TheDonald');
    assert.equal(resp2.status, 'failed', resp2.status);
    assert.equal(resp2.msg[0],
                 'Sorry - an error occurred while trying to validate Barack.',
                 resp2.msg[0]);
    assert.equal(resp2.msg[1], 'Barack is probably not a valid expression.',
                 resp2.msg[1]);
    assert.equal(resp2.msg[2],
                 'Sorry - an error occurred while trying to validate TheDonald.',
                  resp2.msg[2]);
    assert.equal(resp2.msg[3], 'TheDonald is probably not a valid expression.',
                 resp2.msg[3]);
  });

  it("should return a valid conversion value and units for grams to metric carats", function() {
    var resp3 = utils.convertUnitTo('g', 56, '[car_m]');
    assert.equal(resp3.status, 'succeeded', resp3.status);
    assert.equal(resp3.toVal, 280.00, resp3.toVal);
    assert.equal(resp3.fromUnit.name_, 'gram', JSON.stringify(resp3.fromUnit));
    assert.equal(resp3.toUnit.name_, 'metric carat', JSON.stringify(resp3.toUnit));
  });

  it("should return an error for an attempt to translate g to /g", function() {
    var resp4 = utils.convertUnitTo('g', 847, '/g');
    assert.equal(resp4.status, 'failed', resp4.status);
    assert.equal(resp4.msg[0], 'Sorry.  g cannot be converted to /g.', resp4.msg[0]);
    assert.equal(resp4.toVal, null, resp4.toVal);
    assert.equal(resp4.fromUnit, undefined, resp4.fromUnit);
    assert.equal(resp4.toUnit, undefined, resp4.toUnit);
  });

}); // end convertUnitTo tests


describe('Test checkSynonyms method', function() {

  it("should return an error message for no synonym supplied", function() {

    var resp1 = utils.checkSynonyms();
    assert.equal('error', resp1['status']);
    assert.equal('No term specified for synonym search.', resp1['msg']);
  });

  it("should return a message for no synonym found", function() {

    var resp2 = utils.checkSynonyms('TheDonald');
    assert.equal('failed', resp2['status']);
    assert.equal('Unable to find any units with synonym = TheDonald',
                  resp2['msg']);

  });

  it("should return multiple units for search term month", function() {
    var resp3 = utils.checkSynonyms('month');
    assert.equal('succeeded', resp3['status']);
    assert(resp3['units'].length > 1);
  });

  it("should return a code, name and guidance for each unit", function() {
    var resp4 = utils.checkSynonyms('month');
    var uLen = resp4['units'].length ;
    for (var u = 0; u < uLen; u++) {
      var theUnit = resp4['units'][u] ;
      assert.notStrictEqual(undefined, theUnit['code']);
      assert.notStrictEqual(undefined, theUnit['name']);
      assert.notStrictEqual(undefined, theUnit['guidance']);
    }
  });

}); // end checkSynonyms tests



