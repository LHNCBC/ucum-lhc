/**
 * Mocha tests for the UcumLhcUtils class.
 *
 * Run from the command line with 'mocha testUcumLhcUtils.js' or
 * 'grunt test'Intern
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

    var resp2 = utils.validateUnitString('noFool', 'suggest');
    assert.equal(resp2.status, 'invalid', resp2.status);
    assert.equal(resp2.msg[0], 'noFool is not a valid UCUM code.  ' +
                 'No alternatives were found.', resp2.msg[0]);
  });

  it("should return a message for 'Gauss'", function() {
    var resp3 = utils.validateUnitString('Gauss');
    assert.equal(resp3.status, 'invalid', resp3.status);
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

  it("should return 3 suggestions for allergen", function() {
    var resp6 = utils.validateUnitString('allergen', 'suggest');
    assert.equal(resp6.status, 'invalid');
    assert.equal(resp6.unit, null);
    assert.equal(resp6.ucumCode, null);
    var suggs = resp6['suggestions'][0] ;
    assert.equal(suggs['units'].length, 3);
    assert.equal(suggs['msg'], 'allergen is not a valid ' +
      'UCUM code.  We found possible units that might be what was meant:');
    assert.equal(suggs['invalidUnit'], 'allergen');
    assert.deepEqual(suggs['units'][0],
       ['[BAU]','bioequivalent allergen unit', null]) ;
    assert.deepEqual(suggs['units'][1], ['[AU]', 'allergy unit',
       'Most standard test allergy units are reported as [IU] or as %. ']);
    assert.deepEqual(suggs['units'][2], ["[Amb'a'1'U]",
       'allergen unit for Ambrosia artemisiifolia', 'Amb a 1 is the major ' +
       'allergen in short ragweed, and can be converted Bioequivalent ' +
       'allergen units (BAU) where 350 Amb a 1 U/mL = 100,000 BAU/mL']);
  });

}); // end validateUnitString tests


describe('Test convertUnitTo method', function() {

  it("should return error messages for no unit strings supplied", function() {

    var resp1 = utils.convertUnitTo();
    assert.equal(resp1.status, 'error', resp1.status);
    assert.equal(resp1.msg[0], 'No "from" unit expression specified.', resp1.msg[0]);
    assert.equal(resp1.msg[1], 'No "from" value, or an invalid "from" value, ' +
                               'was specified.', resp1.msg[1]);
    assert.equal(resp1.msg[2], 'No "to" unit expression specified.', resp1.msg[2]);
  });

it("should return a message for invalid unit strings", function() {

  var resp2 = utils.convertUnitTo('good', 2017, 'bad');
  assert.equal(resp2.status, 'failed', resp2.status);
  assert.equal(resp2.msg[0], 'good is not a valid UCUM code.', resp2.msg[0]);
  assert.equal(resp2.msg[1], 'Unable to find a unit for good, so no ' +
                             'conversion could be performed.', resp2.msg[1]);
  assert.equal(resp2.msg[2], 'bad is not a valid UCUM code.', resp2.msg[2]);
  assert.equal(resp2.msg[3], 'Unable to find a unit for bad, so no ' +
                             'conversion could be performed.', resp2.msg[3]);
});

  it("should return a valid conversion value and units for grams to metric carats", function() {
    var resp3 = utils.convertUnitTo('g', 56, '[car_m]');
    assert.equal(resp3.status, 'succeeded', resp3.status);
    assert.equal(resp3.toVal, 280.00, resp3.toVal);
    assert.equal(resp3.fromUnit.name_, 'gram', JSON.stringify(resp3.fromUnit));
    assert.equal(resp3.toUnit.name_, 'metric carat', JSON.stringify(resp3.toUnit));
  });

  it("should return a valid conversion value and units for 0 Fahrenheit to Celsius", function() {
    var resp3 = utils.convertUnitTo('[degF]', 0, 'Cel');
    assert.equal(resp3.status, 'succeeded', resp3.status);
    assert.equal(resp3.toVal, -17.777777777777743, resp3.toVal);
    assert.equal(resp3.fromUnit.name_, 'degrees Fahrenheit', JSON.stringify(resp3.fromUnit));
    assert.equal(resp3.toUnit.name_, 'degree Celsius', JSON.stringify(resp3.toUnit));
  });

  it("should return a valid conversion value and units for -1 Celsius to Fahrenheit", function() {
    var resp3 = utils.convertUnitTo('Cel', -1, '[degF]');
    assert.equal(resp3.status, 'succeeded', resp3.status);
    assert.equal(resp3.toVal, 30.199999999999932, resp3.toVal);
    assert.equal(resp3.fromUnit.name_, 'degree Celsius', JSON.stringify(resp3.fromUnit));
    assert.equal(resp3.toUnit.name_, 'degrees Fahrenheit', JSON.stringify(resp3.toUnit));
  });


  it("should return an error for an attempt to translate g to /g", function() {
    var resp4 = utils.convertUnitTo('g', 847, '/g');
    assert.equal(resp4.status, 'failed', resp4.status);
    assert.equal(resp4.msg[0], 'Sorry.  g cannot be converted to /g.', resp4.msg[0]);
    assert.equal(resp4.toVal, null, resp4.toVal);
    assert.equal(resp4.fromUnit, undefined, resp4.fromUnit);
    assert.equal(resp4.toUnit, undefined, resp4.toUnit);
  });

  it("should return 3 suggestions for allergen and 2 for culture", function() {
    var resp5 = utils.convertUnitTo('allergen', 3, 'culture', 'suggest');
    assert.equal(resp5.status, 'failed');
    assert.equal(resp5.toVal, null);
    assert.equal(resp5.fromUnit, null);
    assert.equal(resp5.toUnit, null);
    assert.equal(resp5.msg.length, 2);
    assert.deepEqual(resp5.msg[0], 'Unable to find a unit for allergen, ' +
                     'so no conversion could be performed.');
    assert.deepEqual(resp5.msg[1], 'Unable to find a unit for culture, ' +
      'so no conversion could be performed.');
    var suggsFrom = resp5['suggestions']['from'][0] ;
    assert.deepEqual(suggsFrom['units'].length, 3);
    assert.deepEqual(suggsFrom['msg'], 'allergen is not a valid ' +
      'UCUM code.  We found possible units that might be what was meant:');
    assert.deepEqual(suggsFrom['invalidUnit'], 'allergen');
    assert.deepEqual(suggsFrom['units'][0],
      ['[BAU]','bioequivalent allergen unit', null]) ;
    assert.deepEqual(suggsFrom['units'][1], ['[AU]', 'allergy unit',
      'Most standard test allergy units are reported as [IU] or as %. ']);
    assert.deepEqual(suggsFrom['units'][2], ["[Amb'a'1'U]",
      'allergen unit for Ambrosia artemisiifolia', 'Amb a 1 is the major ' +
      'allergen in short ragweed, and can be converted Bioequivalent ' +
      'allergen units (BAU) where 350 Amb a 1 U/mL = 100,000 BAU/mL']);
    var suggsTo = resp5['suggestions']['to'][0] ;
    assert.deepEqual(suggsTo['units'].length, 2);
    assert.deepEqual(suggsTo['msg'], 'culture is not a valid ' +
      'UCUM code.  We found possible units that might be what was meant:');
    assert.deepEqual(suggsTo['invalidUnit'], 'culture');
    assert.deepEqual(suggsTo['units'][0], ['[CCID_50]',
      '50% cell culture infectious dose', null]);
    assert.deepEqual(suggsTo['units'][1], ['[TCID_50]',
      '50% tissue culture infectious dose', null]);
  });

}); // end convertUnitTo tests


describe('Test getSynonyms method', function() {

  it("should return an error message for no synonym supplied", function() {

    var resp1 = utils.checkSynonyms();
    assert.equal('error', resp1['status']);
    assert.equal('No term specified for synonym search.', resp1['msg']);
  });

  it("should return a message for no synonym found", function() {

    var resp2 = utils.checkSynonyms('Amess');
    assert.equal('failed', resp2['status']);
    assert.equal('Unable to find any units with synonym = Amess',
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



