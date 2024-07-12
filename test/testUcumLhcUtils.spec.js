/**
 * Mocha tests for the UcumLhcUtils class.
 *
 * Run from the command line with 'mocha testUcumLhcUtils.js' or
 * 'grunt test'Intern
 */

var assert = require('assert');
var Ucum = require('../source-cjs/config.js').Ucum;
var {ucumJsonDefs} = require('../source-cjs/ucumJsonDefs.js');
var UTables = require("../source-cjs/unitTables.js").UnitTables;
var Utils = require("../source-cjs/ucumLhcUtils.js").UcumLhcUtils;
var UString = require("../source-cjs/unitString.js").UnitString;

var uTabs = UTables.getInstance();
ucumJsonDefs.loadJsonDefs();
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

  it('should return invalid for a unit with two prefixes', () => {
    let resp =  utils.validateUnitString('mcg');
    assert.equal(resp.status, 'invalid', resp.status);
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

  it('should validate integer units', function() {
    // only postive integers consisting of a string of digits are valid as unit strings
    assert.equal(utils.validateUnitString('123').status, 'valid');
    assert.equal(utils.validateUnitString('1e3').status, 'invalid'); // invalid UCUM notation
    assert.equal(utils.validateUnitString('-123').status, 'invalid');
  });

  it('should say a unit that is only an annotation is valid - {g}', ()=>{
    // {g} was getting marked invalid, along with the suggestion that maybe the
    // user meant [g].  That is a useful suggestion, but it should be valid.
    const result = utils.validateUnitString('{g}');
    assert.equal(result.status, 'valid');
    assert(result.msg.length > 0);
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
    assert.equal(Math.round(resp3.toVal*100), -1778, resp3.toVal);
    assert.equal(resp3.fromUnit.name_, 'degrees Fahrenheit', JSON.stringify(resp3.fromUnit));
    assert.equal(resp3.toUnit.name_, 'degree Celsius', JSON.stringify(resp3.toUnit));
  });

  it("should return a valid conversion value and units for -1 Celsius to Fahrenheit", function() {
    var resp3 = utils.convertUnitTo('Cel', -1, '[degF]');
    assert.equal(resp3.status, 'succeeded', resp3.status);
    assert.equal(Math.round(resp3.toVal*100), 3020, resp3.toVal);
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
    var resp5 = utils.convertUnitTo('allergen', 3, 'culture', {suggest: true});
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

  it("should return an error for an attempt to translate mol to 78.4(mmol/L)/s", function() {
    var resp4 = utils.convertUnitTo('mol', 1, '78.4(mmol/L)/s');
    assert.equal(resp4.status, 'failed', resp4.status);
    assert.equal(resp4.msg[0], '4(mmol/L) is not a valid UCUM code.  We assumed you meant 4.(mmol/L).', resp4.msg[0]);
    assert.equal(resp4.msg[1], 'Sorry.  mol cannot be converted to (78.(4.(mmol/L)))/s.', resp4.msg[1]);
    assert.equal(resp4.toVal, null, resp4.toVal);
    assert.equal(resp4.fromUnit, undefined, resp4.fromUnit);
    assert.equal(resp4.toUnit, undefined, resp4.toUnit);
  });

  it("should return a missing molecular weight error for an attempt to translate mol to 32.4(ug/g).mg", function() {
    var resp4 = utils.convertUnitTo('mol', 1, '32.4(ug/g).mg');
    assert.equal(resp4.status, 'failed', resp4.status);
    assert.equal(resp4.msg[0], '4(ug/g) is not a valid UCUM code.  We assumed you meant 4.(ug/g).', resp4.msg[0]);
    assert.equal(resp4.msg[1], Ucum.needMoleWeightMsg_);
    assert.equal(resp4.toVal, null, resp4.toVal);
    assert.equal(resp4.fromUnit, undefined, resp4.fromUnit);
    assert.equal(resp4.toUnit, undefined, resp4.toUnit);
  });

  it("should return 0.001 for an attempt to translate mmol to mol", function() {
    var resp4 = utils.convertUnitTo('mmol', 1, 'mol');
    assert.equal(resp4.status, 'succeeded', resp4.status);
    assert.equal(resp4.toVal, 0.001, resp4.toVal);
  });

  it("should return 1000 for an attempt to translate eq to meq", function() {
    var resp4 = utils.convertUnitTo('eq', 1, 'meq');
    assert.equal(resp4.status, 'succeeded', resp4.status);
    assert.equal(resp4.toVal, 1000, resp4.toVal);
  });

  /**
   * Mol <-> mass conversion tests
   */

  // Should throw an error if no molecular weight is provided for a conversion to mass since mass is needed for the calculation
  it("should return error for a request to convert mol to g with no mw", function() {
    var resp = utils.convertUnitTo('mol', 1, 'g');
    assert.equal(resp.status, 'failed', resp.status + resp.msg);
    assert.equal(resp.msg[0], Ucum.needMoleWeightMsg_, resp.msg[0]);
    assert.equal(resp.toVal, null, resp.toVal);
    assert.equal(resp.fromUnit, undefined, resp.fromUnit);
    assert.equal(resp.toUnit, undefined, resp.toUnit);
  });

  // Ignore excess optional parameters if they are not needed for the conversion
  // Do not raise error if charge is provided despite neither unit being an eq unit
  // e.g. converting between mol and g
  it("should return 40.08g for a request to convert 1 mol to g with charge 2 and mw 40.08", function() {
    var resp = utils.convertUnitTo('mol', 1, 'g', {
      charge: 2,
      molecularWeight: 40.08
    });
    assert.equal(resp.status, 'succeeded', resp.status + resp.msg);
    assert.equal(resp.toVal.toPrecision(4), 40.08, resp.toVal.toPrecision(4));
  });

  it("should return 96 for a request to convert 5.33 mmol/L to mg{molybdenum}/dL weight 180.156", function() {
    var resp5 = utils.convertUnitTo('mmol/L', 5.33, 'mg{molybdenum}/dL', { molecularWeight: 180.156 });
    assert.equal(resp5.status, 'succeeded', resp5.status + resp5.msg);
    assert.equal(resp5.toVal.toPrecision(2), 96, resp5.toVal);
  });

  it("should return 5.33 for a request to convert 96 mg/dL to mmol/L weight 180.156", function() {
    var resp5 = utils.convertUnitTo('mg/dL', 96, 'mmol/L', { molecularWeight: 180.156 });
    assert.equal(resp5.status, 'succeeded', resp5.status + resp5.msg);
    assert.equal(resp5.toVal.toPrecision(3), 5.33, resp5.toVal.toPrecision(3));
  });

  it("should return 0.533 for a request to convert 96 g to mol with mw 180.156", function() {
    var resp = utils.convertUnitTo('g', 96, 'mol', { molecularWeight: 180.156 });
    assert.equal(resp.status, 'succeeded', resp.status + resp.msg);
    assert.equal(resp.toVal.toPrecision(3), 0.533, resp.toVal.toPrecision(3));
  });

  it("should return 96 g for a request to convert 0.533 mol with mw 180.156", function() {
    var resp = utils.convertUnitTo('mol', 0.533, 'g', { molecularWeight: 180.156 });
    assert.equal(resp.status, 'succeeded', resp.status + resp.msg);
    assert.equal(resp.toVal.toPrecision(2), 96, resp.toVal.toPrecision(2));
  });

  /** Mol to eq conversion tests
   * equivalents = moles * charge
   */

  // Should throw an error if no charge is provided for a conversion to eq since charge is needed for the calculation
  it("should return error for a request to convert mol to eq with no charge and mw 40.08", function() {
    var resp = utils.convertUnitTo('mol', 1, 'eq');
    assert.equal(resp.status, 'failed', resp.status + resp.msg);
    assert.equal(resp.msg[0], Ucum.needEqChargeMsg_,
      resp.msg[0]);
    assert.equal(resp.toVal, null, resp.toVal);
    assert.equal(resp.fromUnit, undefined, resp.fromUnit);
    assert.equal(resp.toUnit, undefined, resp.toUnit);
  });

  it("should return 2 eq for a request to convert 1 mol/L to eq/L with charge 2", function() {
    var resp = utils.convertUnitTo('mol/L', 1, 'eq/L', {
      charge: 2
    });
    assert.equal(resp.status, 'succeeded', resp.status + resp.msg);
    assert.equal(resp.toVal.toPrecision(1), 2, resp.toVal.toPrecision(1));
  });

  it("should return 0.003 for a request to convert 1 mmol/L to eq/L with charge 3", function() {
    var resp = utils.convertUnitTo('mmol/L', 1, 'eq/L', {
      charge: 3
    });
    assert.equal(resp.status, 'succeeded', resp.status + resp.msg);
    assert.equal(resp.toVal.toPrecision(1), 0.003 , resp.toVal.toPrecision(1));
  });

  // Test to ignore molecular weight if not converting to mass
  // e.g. converting between mol and eq
  it("should return 5 for a request to convert 1 mmol/L to meq/L with charge 5 and mw 1000", function() {
    var resp = utils.convertUnitTo('mmol/L', 1, 'meq/L', {
      charge: 5,
      molecularWeight: 1000
    });
    assert.equal(resp.status, 'succeeded', resp.status + resp.msg);
    assert.equal(resp.toVal.toPrecision(1), 5, resp.toVal.toPrecision(1));
  });

  /** Eq to mass conversion tests
   * 
   * "The equivalent weight of an *element* is its gram atomic weight divided by its valence (combining power)."
   * https://www.britannica.com/science/equivalent-weight
   * 
   * EW = MW / charge
   */

  // test to return error if no molecular weight is provided for a conversion to mass since mass is needed for the calculation
  it("should return error for a request to convert eq to g with charge 2 and no mw", function() {
    var resp = utils.convertUnitTo('eq', 1, 'g', {
      charge: 2,
    });
    assert.equal(resp.status, 'failed', resp.status + resp.msg);
    assert.equal(resp.msg[0], Ucum.needEqWeightMsg_, resp.msg[0]);
    assert.equal(resp.toVal, null, resp.toVal);
    assert.equal(resp.fromUnit, undefined, resp.fromUnit);
    assert.equal(resp.toUnit, undefined, resp.toUnit);
  });

  // test to return error if eq conversion is attempted without charge since charge is needed for the calculation
  it("should return error for a request to convert eq to g with no charge and mw 40.08", function() {
    var resp = utils.convertUnitTo('eq', 1, 'g', {
      molecularWeight: 40.08,
    });
    assert.equal(resp.status, 'failed', resp.status + resp.msg);
    assert.equal(resp.msg[0], Ucum.needEqChargeMsg_, 
      resp.msg[0]);
    assert.equal(resp.toVal, null, resp.toVal);
    assert.equal(resp.fromUnit, undefined, resp.fromUnit);
    assert.equal(resp.toUnit, undefined, resp.toUnit);
  });

  /**
   * KCL -> K+ + Cl-
   * K+ has a valence of 1 and a molecular weight of 39.09
   * ∴ 1 mol of K = 1 eq of K
   * Equivalent mass of K+ is its atomic mass divided by valence 1.
   * Mass of potassium is 39.09 g/mole, so its equivalent mass is 39.09/1 =  39.09 g/equiv.
   */
  it("should return 39.09 for a request to convert 1 eq to g with charge 1 and mw 39.09", function() {
    var resp = utils.convertUnitTo('eq', 1, 'g', {
      charge: 1,
      molecularWeight: 39.09
    });
    assert.equal(resp.status, 'succeeded', resp.status + resp.msg);
    assert.equal(resp.toVal.toPrecision(4), 39.09, resp.toVal.toPrecision(4));
  });

  /**
   * CaCl2 -> Ca++ + 2 Cl-
   * Ca++ has a valence of 2 and a molecular weight of 40.08
   * ∴ 1 mol of Ca = 2 eq of Ca
   * Equivalent mass of Ca++ is its atomic mass divided by valence 2.
   * Mass of calcium is 40.08 g/mole, so its equivalent mass is 40.08/2 =  20.04 g/equiv.  
   */
  it("should return 20.04 for a request to convert 1 eq to g with charge 2 and mw 40.08", function() {
    var resp = utils.convertUnitTo('eq', 1, 'g', {
      charge: 2,
      molecularWeight: 40.08
    });
    assert.equal(resp.status, 'succeeded', resp.status + resp.msg);
    assert.equal(resp.toVal.toPrecision(4), 20.04, resp.toVal.toPrecision(4));
  });

  /**
   * CaCl2 -> Ca++ + 2 Cl-
   * Ca++ has a valence of 2 and a molecular weight of 40.08
   * ∴ 1 mol of Ca = 2 eq of Ca
   * Equivalent mass of Ca++ is its atomic mass divided by valence 2.
   * Mass of calcium is 40.08 g/mole, so its equivalent mass is 40.08/2 =  20.04 g/equiv.  
   * But we are converting 2 eq to g, so the result should be 40.08 g
   */
  it("should return 40.08 for a request to convert 2 eq to g with charge 2 and mw 40.08", function() {
    var resp = utils.convertUnitTo('eq', 2, 'g', {
      charge: 2,
      molecularWeight: 40.08
    });
    assert.equal(resp.status, 'succeeded', resp.status + resp.msg);
    assert.equal(resp.toVal.toPrecision(4), 40.08, resp.toVal.toPrecision(4));
  });

  /** Mass to eq conversion tests
   * 
   * The equivalent weight (EW) of an element is calculated as its atomic mass divided by its valence.
   * EW = molecular weight / valence
   * 
   * The number of equivalents is then calculated by dividing the given mass by the equivalent weight.
   * eq = amtMassOfSubstance / EW
   */
  
  // Should throw an error if no charge is provided for a conversion to eq since charge is needed for the calculation
  it("should return error for a request to convert 40.08 g to eq with no charge and mw 40.08", function() {
    var resp = utils.convertUnitTo('g', 40.08, 'eq', {
      molecularWeight: 40.08,
    });
    assert.equal(resp.status, 'failed', resp.status + resp.msg);
    assert.equal(resp.msg[0], Ucum.needEqChargeMsg_, 
      resp.msg[0]);
    assert.equal(resp.toVal, null, resp.toVal);
    assert.equal(resp.fromUnit, undefined, resp.fromUnit);
    assert.equal(resp.toUnit, undefined, resp.toUnit);
  });
  
  // Should throw an error if no molecular weight is provided for a conversion to eq since mass is needed for the calculation
  it("should return error for a request to convert 40.08 g to eq with charge 2 and no mw", function() {
    var resp = utils.convertUnitTo('g', 40.08, 'eq', {
      charge: 2,
    });
    assert.equal(resp.status, 'failed', resp.status + resp.msg);
    assert.equal(resp.msg[0], Ucum.needEqWeightMsg_, resp.msg[0]);
    assert.equal(resp.toVal, null, resp.toVal);
    assert.equal(resp.fromUnit, undefined, resp.fromUnit);
    assert.equal(resp.toUnit, undefined, resp.toUnit);
  });

  /**
   * K+ -> K+ 
   * K+ has a valence of 1 and a molecular weight of 39.09
   * ∴ 1 mol of K = 1 eq of K
   * Equivalent mass of K+ is its atomic mass divided by valence 1.
   * Mass of potassium is 39.09 g/mole, so its equivalent mass is 39.09/1 =  39.09 g/equiv.
   * But we are converting 39.09 g to eq, so the result should be 40.08g/40.08g = 1 eq
   */
  it("should return 1 for a request to convert 39.09 g to eq with charge 1 and mw 39.09", function() {
    var resp = utils.convertUnitTo('g', 39.09, 'eq', {
      charge: 1,
      molecularWeight: 39.09
    });
    assert.equal(resp.status, 'succeeded', resp.status + resp.msg);
    assert.equal(resp.toVal.toPrecision(1), 1, resp.toVal.toPrecision(1));
  });

  /**
   * CaCl2 -> Ca<sup>2+</sup> + 2 Cl-
   * Ca++ has a valence of 2 and a molecular weight of 40.08
   * ∴ 1 mol of Ca = 2 eq of Ca
   * Equivalent mass of Ca++ is its atomic mass divided by valence 2.
   * Mass of calcium is 40.08 g/mole, so its equivalent mass is 40.08/2 =  20.04 g/equiv.  
   * But we are converting 40.08 g to eq, so the result should be 40.08g/20.04g = 2 eq
   */
  it("should return 2 for a request to convert 40.08 g to eq with charge 2 and mw 40.08", function() {
    var resp = utils.convertUnitTo('g', 40.08, 'eq', {
      charge: 2,
      molecularWeight: 40.08
    });
    assert.equal(resp.status, 'succeeded', resp.status + resp.msg);
    assert.equal(resp.toVal.toPrecision(1), 2, resp.toVal.toPrecision(1));
  });

  it("should return 2 for a request to convert 40.08 g to eq with charge 2 and mw 40.08", function() {
    var resp = utils.convertUnitTo('g', 40.08, 'meq', {
      charge: 2,
      molecularWeight: 40.08
    });
    assert.equal(resp.status, 'succeeded', resp.status + resp.msg);
    assert.equal(resp.toVal.toPrecision(1), 2000, resp.toVal.toPrecision(1));
  });

  /** Eq to mol conversion tests
   * 1 equivalent equals 1/v moles, where v is the valency factor (=== valence for an element)
   * if valence is 1, then 1 equivalent equals 1 mole
   * if valence is 2, then 1 equivalent equals 0.5 moles
   * if valence is 3, then 1 equivalent equals 0.33 moles
   * etc. 
   */

  // mw should be ignored when converting between eq and mol
  it("should return 0.33 for a request to convert 1 eq/L to mol/L with charge 3 and mw 1000", function() {
    var resp = utils.convertUnitTo('eq/L', 1, 'mol/L', {
      charge: 3,
      molecularWeight: 1000
    });
    assert.equal(resp.status, 'succeeded', resp.status + resp.msg);
    assert.equal(resp.toVal.toPrecision(2), 0.33, resp.toVal.toPrecision(2));
  });

  // Should throw an error if no charge is provided for a conversion to mol since charge is needed for the calculation
  it("should return error for a request to convert eq to mol with no charge and mw 40.08", function() {
    var resp = utils.convertUnitTo('eq', 1, 'mol', {
      molecularWeight: 40.08,
    });
    assert.equal(resp.status, 'failed', resp.status + resp.msg);
    assert.equal(resp.msg[0], Ucum.needEqChargeMsg_,
      resp.msg[0]);
    assert.equal(resp.toVal, null, resp.toVal);
    assert.equal(resp.fromUnit, undefined, resp.fromUnit);
    assert.equal(resp.toUnit, undefined, resp.toUnit);
  });  

  it("should return 0.00033 for a request to convert 1 meq/L to mol/L with charge 3", function() {
    var resp = utils.convertUnitTo('meq/L', 1, 'mol/L', {
      charge: 3
    });
    assert.equal(resp.status, 'succeeded', resp.status + resp.msg);
    assert.equal(resp.toVal.toPrecision(2), 0.00033 , resp.toVal.toPrecision(2));
  });

  // end

  it("should return 3.4 for a request to convert 300.57 umol/L to mg/dL weight 113.1179", function() {
    var resp5 = utils.convertUnitTo('umol/L', 300.57, 'mg/dL', { molecularWeight: 113.1179 });
    assert.equal(resp5.status, 'succeeded', resp5.status + resp5.msg);
    assert.equal(resp5.toVal.toPrecision(3), 3.4, resp5.toVal);
  });

  it("should return 300.57 for a request to convert 3.4 mg/dL to umol/L weight 113.1179", function() {
    var resp5 = utils.convertUnitTo('mg/dL', 3.4, 'umol/L', { molecularWeight: 113.1179 });
    assert.equal(resp5.status, 'succeeded', resp5.status + resp5.msg);
    assert.equal(resp5.toVal.toPrecision(5), 300.57, resp5.toVal)
  });

  it("should return 6.7 for a request to convert 1.67 mmol/L to mg/dL weight 40.078", function() {
    var resp5 = utils.convertUnitTo('mmol/L', 1.67, 'mg/dL', { molecularWeight: 40.078 });
    assert.equal(resp5.status, 'succeeded', resp5.status + resp5.msg);
    assert.equal(resp5.toVal.toPrecision(2), 6.7, resp5.toVal);
  });

  it("should return 1.67 for a request to convert 6.7 mg/dL to mmol/L weight 40.078", function() {
    var resp5 = utils.convertUnitTo('mg/dL', 6.7, 'mmol/L', { molecularWeight: 40.078 });
    assert.equal(resp5.status, 'succeeded', resp5.status + resp5.msg);
    assert.equal(resp5.toVal.toPrecision(3), 1.67, resp5.toVal.toPrecision(3));
  });

  it("should return .001 for a request to convert 1 umol.L/g to mg.L/g weight 1", function() {
    var resp5 = utils.convertUnitTo('umol.L/g', 1, 'mg.L/g', { molecularWeight: 1 });
    assert.equal(resp5.status, 'succeeded', resp5.status + resp5.msg);
    assert.equal(resp5.toVal.toPrecision(3), .001, resp5.toVal.toPrecision(3));
  });

  it("should return .001 for a request to convert 1 mg.umol to mg2 weight 1", function() {
    var resp5 = utils.convertUnitTo('mg.umol', 1, 'mg2', { molecularWeight: 1 });
    assert.equal(resp5.status, 'succeeded', resp5.status + resp5.msg);
    assert.equal(resp5.toVal.toPrecision(3), .001, resp5.toVal.toPrecision(3));
  });

  it("should return an error for an attempt to translate 1 pmol to 1/g weight 1", function() {
    var resp4 = utils.convertUnitTo('pmol', 1, '1/g', { molecularWeight: 1 });
    assert.equal(resp4.status, 'failed', resp4.status);
    assert.equal(resp4.msg[0], 'Sorry.  pmol cannot be converted to 1/g.', resp4.msg[0]);
  });

  it("should return an error for an attempt to translate 1 pmol/g to mg/dL weight 1", function() {
    var resp4 = utils.convertUnitTo('pmol/g', 1, 'mg/dL', { molecularWeight: 1 });
    assert.equal(resp4.status, 'failed', resp4.status);
    assert.equal(resp4.msg[0], 'Sorry.  pmol/g cannot be converted to mg/dL.', resp4.msg[0]);
  });

  it('should say that 1 2.[degF] = 2 [degF]', ()=>{
    var resp5 = utils.convertUnitTo('2.[degF]', 1, '[degF]');
    assert.equal(resp5.status, 'succeeded', resp5.status + resp5.msg);
    assert.equal(resp5.toVal.toPrecision(3), 2);
  });

  it('should convert 2.[degF] to Cel', ()=>{
    var resp = utils.convertUnitTo('2.[degF]', 1, 'Cel');
    assert.equal(resp.status, 'succeeded', resp.status + resp.msg);
    assert.equal(resp.toVal.toPrecision(7), -16.66667);
  });

  it('should convert [degF].2 to Cel', ()=>{
    var resp = utils.convertUnitTo('[degF].2', 1, 'Cel');
    assert.equal(resp.status, 'succeeded', resp.status + resp.msg);
    assert.equal(resp.toVal.toPrecision(7), -16.66667);
  });

  it('should not convert {degF} to Cel', ()=>{
    const resp = utils.convertUnitTo('{degF}', 5, 'Cel');
    assert.equal(resp.status, 'failed');
    assert.equal(
      '{degF} is a valid unit expression, but did you mean [degF] (degrees Fahrenheit)?',
      resp.msg[0]);
    assert.equal('Sorry.  {degF} cannot be converted to Cel.', resp.msg[1]);
  });

  it('should convert {degF} to 1', ()=>{
    const resp = utils.convertUnitTo('{degF}', 2, '1');
    assert.equal(resp.status, 'succeeded');
    assert.equal(resp.toVal, 2);
    assert.equal(resp.msg[0],
      '{degF} is a valid unit expression, but did you mean [degF] (degrees Fahrenheit)?');
  });

  it('should convert {aaa} to {bbb}', ()=>{
    const resp = utils.convertUnitTo('{aaa}', 2, '{bbb}');
    assert.equal(resp.status, 'succeeded');
    assert.equal(resp.toVal, 2);
    assert.equal(resp.msg.length, 0);
  });

  it('should convert 3.{aaa} to {bbb}', ()=>{
    const resp = utils.convertUnitTo('3.{aaa}', 2, '{bbb}');
    assert.equal(resp.status, 'succeeded');
    assert.equal(resp.toVal, 6);
    assert.equal(resp.msg.length, 0);
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

describe('convertToBaseUnits', ()=> {
  it('should convert cm2/ms3 to base units', ()=>{
    const baseUnitData = utils.convertToBaseUnits('cm2/ms3', 1);
    assert.equal(baseUnitData.status, 'succeeded');
    assert.equal(baseUnitData.msg.length, 0);
    assert.equal(baseUnitData.magnitude, 100000);
    assert.equal(baseUnitData.fromUnitIsSpecial, false);
    assert.deepEqual(baseUnitData.unitToExp, {'m': 2, 's': -3});
  });


  it('should convert B[10.nV] to base units', ()=>{
    // Equivalent to 0.0000316227766016838 g.m2/(C.s2); 1 B[10.nV]=2*log10(10.nV)
    const baseUnitData = utils.convertToBaseUnits('B[10.nV]', 1);
    assert.equal(baseUnitData.status, 'succeeded');
    assert.equal(baseUnitData.msg.length, 0);
    assert.equal(baseUnitData.magnitude.toPrecision(15), 0.0000316227766016838);
    assert.equal(baseUnitData.fromUnitIsSpecial, true);
    assert.deepEqual(baseUnitData.unitToExp, {'g': 1, 'm': 2, 's': -2, 'C': -1});
  });

  it('should convert [degF] to base units', ()=>{
    const baseUnitData = utils.convertToBaseUnits('[degF]', 32);
    assert.equal(baseUnitData.status, 'succeeded');
    assert.equal(baseUnitData.msg.length, 0);
    assert.equal(baseUnitData.magnitude.toPrecision(15), 273.15);
    assert.equal(baseUnitData.fromUnitIsSpecial, true);
    assert.deepEqual(baseUnitData.unitToExp, {'K': 1});
  });

  it('should convert 2.[degF] to base units', ()=>{
    const baseUnitData = utils.convertToBaseUnits('2.[degF]', 16);
    assert.equal(baseUnitData.status, 'succeeded');
    assert.equal(baseUnitData.msg.length, 0);
    // Special units do not get a magnitude returned
    assert.equal(baseUnitData.magnitude.toPrecision(15), 273.15);
    assert.equal(baseUnitData.fromUnitIsSpecial, true);
    assert.deepEqual(baseUnitData.unitToExp, {'K': 1});
  });

  it('should convert [degF].2 to base units', ()=>{
    const baseUnitData = utils.convertToBaseUnits('[degF].2', 16);
    assert.equal(baseUnitData.status, 'succeeded');
    assert.equal(baseUnitData.msg.length, 0);
    assert.equal(baseUnitData.magnitude.toPrecision(15), 273.15);
    assert.equal(baseUnitData.fromUnitIsSpecial, true);
    assert.deepEqual(baseUnitData.unitToExp, {'K': 1});
  });

  it('should convert [degF] to base units with a different value', ()=>{
    const baseUnitData = utils.convertToBaseUnits('[degF]', 41);
    assert.equal(baseUnitData.status, 'succeeded');
    assert.equal(baseUnitData.msg.length, 0);
    assert.equal(baseUnitData.magnitude.toPrecision(15), 278.15);
    assert.equal(baseUnitData.fromUnitIsSpecial, true);
    assert.deepEqual(baseUnitData.unitToExp, {'K': 1});
  });

  it('should convert {degF} to 1', ()=>{
    const baseUnitData = utils.convertToBaseUnits('{degF}', 2);
    assert.equal(baseUnitData.status, 'succeeded');
    assert.equal(baseUnitData.msg.length, 1);
    assert.equal(baseUnitData.magnitude, 2);
    assert.equal(baseUnitData.fromUnitIsSpecial, false);
  });

  it('should not covert [iU] to base units', ()=>{
    // [iU] is an "arbitrary" unit and cannot be converted
    const baseUnitData = utils.convertToBaseUnits('[iU]', 1);
    assert(baseUnitData.msg.length > 0);
    assert.equal(baseUnitData.status, 'failed');
    assert.equal(baseUnitData.magnitude, undefined);
    assert.equal(baseUnitData.fromUnitIsSpecial, undefined);
    assert.deepEqual(baseUnitData.unitToExp, undefined);
  });

  it('should not covert m.[iU] to base units', ()=>{
    // [iU] is an "arbitrary" unit and cannot be converted
    const baseUnitData = utils.convertToBaseUnits('m.[iU]', 1);
    assert(baseUnitData.msg.length > 0);
    assert.equal(baseUnitData.status, 'failed');
    assert.equal(baseUnitData.magnitude, undefined);
    assert.equal(baseUnitData.fromUnitIsSpecial, undefined);
    assert.deepEqual(baseUnitData.unitToExp, undefined);
  });

  it('should return an error message for a unit string that is a synonym', ()=>{
    const baseUnitData = utils.convertToBaseUnits('foot', 1);
    assert(baseUnitData.msg.length > 0);
    assert.equal(baseUnitData.status, 'invalid');
    assert.equal(baseUnitData.magnitude, undefined);
    assert.equal(baseUnitData.fromUnitIsSpecial, undefined);
    assert.deepEqual(baseUnitData.unitToExp, undefined);
  });

  it('should return an error message for a unit string that is a unrecognized', ()=>{
    const baseUnitData = utils.convertToBaseUnits('zzz', 1);
    assert(baseUnitData.msg.length > 0);
    assert.equal(baseUnitData.status, 'invalid');
    assert.equal(baseUnitData.magnitude, undefined);
    assert.equal(baseUnitData.fromUnitIsSpecial, undefined);
    assert.deepEqual(baseUnitData.unitToExp, undefined);
  });

  it('should return an error message for if the amount is not specified', ()=>{
    const baseUnitData = utils.convertToBaseUnits('zzz', undefined);
    assert(baseUnitData.msg.length > 0);
    assert.equal(baseUnitData.status, 'error');
    assert.equal(baseUnitData.magnitude, undefined);
    assert.equal(baseUnitData.fromUnitIsSpecial, undefined);
    assert.deepEqual(baseUnitData.unitToExp, undefined);
  });

});


describe('Test detectConversionType method', ()=> {
  it("should return 'normal' for a request to detect conversion type for g to mg", function() {
    let to = utils.getSpecifiedUnit('g', 'convert').unit;
    let from = utils.getSpecifiedUnit('mg', 'convert').unit;
    let resp = utils.detectConversionType(to, from);
    assert.equal(resp, 'normal', resp);
  });

  it("should return 'normal' for a request to detect conversion type for mol to mol", function() {
    let to = utils.getSpecifiedUnit('mol', 'convert').unit;
    let from = utils.getSpecifiedUnit('mol', 'convert').unit;
    let resp = utils.detectConversionType(to, from);
    assert.equal(resp, 'normal', resp);
  });

  it("should return 'normal' for a request to detect conversion type for eq to eq", function() {
    let to = utils.getSpecifiedUnit('eq', 'convert').unit;
    let from = utils.getSpecifiedUnit('eq', 'convert').unit;
    let resp = utils.detectConversionType(to, from);
    assert.equal(resp, 'normal', resp);
  });

  it("should return 'mass->mol' for a request to detect conversion type for g to mol", function() {
    let to = utils.getSpecifiedUnit('g', 'convert').unit;
    let from = utils.getSpecifiedUnit('mol', 'convert').unit;
    let resp = utils.detectConversionType(to, from);
    assert.equal(resp, 'mass->mol', resp);
  });

  it("should return 'mol->mass' for a request to detect conversion type for mol to g", function() {
    let to = utils.getSpecifiedUnit('mol', 'convert').unit;
    let from = utils.getSpecifiedUnit('g', 'convert').unit;
    let resp = utils.detectConversionType(to, from);
    assert.equal(resp, 'mol->mass', resp);
  });

  it("should return 'mass->eq' for a request to detect conversion type for g to eq", function() {
    let to = utils.getSpecifiedUnit('g', 'convert').unit;
    let from = utils.getSpecifiedUnit('eq', 'convert').unit;
    let resp = utils.detectConversionType(to, from);
    assert.equal(resp, 'mass->eq', resp);
  });

  it("should return 'eq->mass' for a request to detect conversion type for eq to g", function() {
    let to = utils.getSpecifiedUnit('eq', 'convert').unit;
    let from = utils.getSpecifiedUnit('g', 'convert').unit;
    let resp = utils.detectConversionType(to, from);
    assert.equal(resp, 'eq->mass', resp);
  });

  it("should return 'eq->mol' for a request to detect conversion type for eq to mol", function() {
    let to = utils.getSpecifiedUnit('eq', 'convert').unit;
    let from = utils.getSpecifiedUnit('mol', 'convert').unit;
    let resp = utils.detectConversionType(to, from);
    assert.equal(resp, 'eq->mol', resp);
  });

  it("should return 'mol->eq' for a request to detect conversion type for mol to eq", function() {
    let to = utils.getSpecifiedUnit('mol', 'convert').unit;
    let from = utils.getSpecifiedUnit('eq', 'convert').unit;
    let resp = utils.detectConversionType(to, from);
    assert.equal(resp, 'mol->eq', resp);
  });
});

describe('Test commensurablesList method', function() {
  it("should filter a list of units by categories", function() {
    var resp = utils.commensurablesList('kg', ['Clinical'])[0];
    assert.deepEqual([
        'gram',
        'unified atomic mass unit',
        'pound',
        'ounce',
        'Dram mass unit',
        'short ton - US',
        'ounce - metric',
        'centigram',
        'decigram',
        'femtogram',
        'gram per millimole',
        'kilogram',
        'kilogram per mole',
        'milligram',
        'milligram per millimole',
        'nanogram',
        'nanogram per million',
        'picogram',
        'microgram',
        'microgram per millimole'
      ],
      resp.map(i => i.name_));
  });
});
