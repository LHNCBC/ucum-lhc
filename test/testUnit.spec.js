/**
 * Mocha tests for the Unit class.
 * Run from the command line with 'mocha testunit.js' or 'grunt test'
 */

var assert = require('assert');
var {ucumJsonDefs} = require('../source-cjs/ucumJsonDefs.js');
var UTables = require("../source-cjs/unitTables.js").UnitTables;
var UnitObj = require("../source-cjs/unit.js").Unit;
var UnitString = require("../source-cjs/unitString.js").UnitString;

var uTabs = UTables.getInstance();
ucumJsonDefs.loadJsonDefs();
var uString = UnitString.getInstance();


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
  }); // end test invalid power request

  describe('Test valid Power request', function() {
    var footUnit = uTabs.getUnitByCode('[ft_i]').clone();
    var errMsg = null;
    try {
      footUnit = footUnit.power(2);
    }
    catch(err) {
      errMsg = err;
    }
    it("should not throw an error message", function() {
      assert.equal(null, errMsg);
    });
    it ("should return a unit code of [ft_i]2", function() {
      assert.equal('[ft_i]2', footUnit.csCode_);
    });
    it ("should return a magnitude of 0.09290304", function() {
      assert.equal(0.09290304, footUnit.magnitude_);
    });
    it ("should return a dimension vector of [2,0,0,0,0,0,0]", function() {
      assert.deepEqual([2,0,0,0,0,0,0], footUnit.dim_.dimVec_);
    });
  }); // end test valid power requests
}); // end Test Unit Power method


describe('Test Unit convertFrom/convertTo methods', function() {
  describe('Test conversion for units with vectors, no functions', function() {
    it('should return a little over 40.10 for 33 [lb_av] units to' +
        ' [lb_tr] units', function(){
      var avUnit = uTabs.getUnitByCode('[lb_av]');
      var troyUnit = uTabs.getUnitByCode('[lb_tr]');
      var result = troyUnit.convertFrom(33, avUnit) ;
      assert(Math.abs(40.11 - result) < 0.015, `result returned was ${result}`);
    })
  }); // end test conversion for units with vectors, no functions

  describe('Test conversion for units with no vectors, no functions', function(){
    it('should return 2000 for 2 g.kmol/(mmol.kmol) to g/mol', function() {
      var respObj = uString.parseString('g.kmol/(mmol.kmol)');
      var fromUnit = respObj[0];
      var respObj = uString.parseString('g/mol');
      var toUnit = respObj[0];
      var res1 = toUnit.convertFrom(2, fromUnit);
      assert(Math.abs(2000 - res1) < 0.0000000000003, `result returned was ${res1}`);
    });
    it('should return 2 for 2000 mol to kmol', function(){
      var mol = uTabs.getUnitByCode('mol');
      var respObj = uString.parseString('kmol');
      var kmol = respObj[0];
      var res2 = mol.convertTo(2000, kmol);
      assert.equal(res2, 2, `result returned was ${res2}`);
    });
    it('should return 10000 for 10/mol to /kmol', function(){
      respObj = uString.parseString('10/mol');
      var molD10 = respObj[0];
      var respObj = uString.parseString('/kmol');
      var kmolD1 = respObj[0];
      var res3 = kmolD1.convertFrom(1, molD10);
      assert.equal(res3, 10000, `result returned was ${res3}`);
    }) ;
  }); // end test conversion for units with no vectors, no functions

  describe('Test conversion for units with no vectors but with functions', function(){
    it("should return 50 for 10 Celsius units to Fahrenheit", function(){
      var fahrUnit = uTabs.getUnitByCode('[degF]');
      var celUnit = uTabs.getUnitByCode('Cel');
      var resToFahr = fahrUnit.convertFrom(10, celUnit);
      assert(Math.abs(50 - resToFahr) < 0.000000000099, `result returned was ${resToFahr}`);
    });
    it("should return 0 for 32 Fahrenheit units to Celsius", function() {
      var fahrUnit = uTabs.getUnitByCode('[degF]');
      var celUnit = uTabs.getUnitByCode('Cel');
      var resToCel = celUnit.convertFrom(32, fahrUnit);
      assert(Math.abs(0 - resToCel) < 0.00000000000006, `result returned was ${resToCel}`);
    });
    it("should return 537.7777777... for 1 kiloFahrenheit unit to Celsius", function() {
      var respObj = uString.parseString('k[degF]');
      var kfahrUnit = respObj[0];
      var celUnit = uTabs.getUnitByCode('Cel');
      var resToCel = celUnit.convertFrom(1, kfahrUnit);
      assert(Math.abs(resToCel) < 537.79, `result returned was ${resToCel}`);
    });
    it("should return 1832 for 1 kiloCelsius unit to Fahrenheit", function() {
      var respObj = uString.parseString('kCel');
      var kcelUnit = respObj[0];
      var fahrUnit = uTabs.getUnitByCode('[degF]');
      var resToFahr = fahrUnit.convertFrom(1, kcelUnit);
      assert.equal(resToFahr, 1832, `result returned was ${resToFahr}`);
    });
  }); // end test conversion for units with no vectors but with functions

}); // end Test Unit convertFrom method

describe('Test construction of name data for constructed units', function() {
  it('should return a new unit with names in square brackets when two units ' +
    'are multiplied', function(){
    var avUnit1 = uTabs.getUnitByCode('[lb_av]');
    var troyUnit1 = uTabs.getUnitByCode('[lb_tr]');
    var result = troyUnit1.multiplyThese(avUnit1) ;
    var constructedName = '[' + troyUnit1.name_ + ']*' + avUnit1.name_ ;
    assert.equal(result.name_, constructedName);
  });

  it('should return a new unit with names in square brackets when one unit ' +
    'is divided by another', function(){
    var avUnit2 = uTabs.getUnitByCode('[lb_av]');
    var troyUnit2 = uTabs.getUnitByCode('[lb_tr]');
    var result = troyUnit2.divide(avUnit2) ;
    var constructedName = '[' + troyUnit2.name_ + ']/' + avUnit2.name_ ;
    assert.equal(result.name_, constructedName);
  });
}) ; // end Test construction of name data for constructed units

describe('Test unit scalar multiplication functions', function() {
  it('should return an updated magnitude for a 2 * [lb_av]', function(){
    var avUnit = uTabs.getUnitByCode('[lb_av]');
    var retUnit = avUnit.multiplyThis(2);
    assert.equal('2*pound', retUnit.name_);
    assert.equal('2.[lb_av]', retUnit.csCode_);
    assert.equal('2.[LB_AV]', retUnit.ciCode_);
    assert.equal(2 * avUnit.magnitude_, retUnit.magnitude_);
  });

  it('should an updated cnvPfx_ for a 2 * Cel', function(){
    var celUnit = uTabs.getUnitByCode('Cel');
    var retUnit = celUnit.multiplyThis(2);
    assert.equal('2*[degree Celsius]', retUnit.name_);
    assert.equal('2.Cel', retUnit.csCode_);
    assert.equal('2.CEL', retUnit.ciCode_);
    assert.equal(2 * celUnit.cnvPfx_, retUnit.cnvPfx_);
  });
}) ; // end Test unit scalar multiplication functions

describe('Test requests to multiply/divide arbitrary units', function() {
  describe('Test multiplication of arbitrary units', function(){
    var molUnit = uTabs.getUnitByCode('mol');
    var cfuUnit = uTabs.getUnitByCode('[CFU]');
    var errMsg = null;
    try {
      var retUnit = molUnit.multiplyThese(cfuUnit);
    }
    catch(err) {
      errMsg = err.message;
    };
    it('should not throw an error on attempt to multiply mol by cfu', function(){
      assert.equal(errMsg, null);
    });
    it('should return a properly concatenated name for mol * [CRU]', function(){
      assert.equal(retUnit.csCode_, 'mol.[CFU]');
    });
    it('should return a unit with the isArbitrary_ flag set', function(){
      assert.equal(retUnit.isArbitrary_, true);
    });
  });
  describe('Test division of arbitrary units', function (){
    var molUnit = uTabs.getUnitByCode('mol');
    var cfuUnit = uTabs.getUnitByCode('[CFU]');
    var errMsg = null;
    try {
      var retUnit = cfuUnit.divide(molUnit);
    }
    catch(err) {
      errMsg = err.message;
    };
    it('should not throw an error on attempt to divide cfu by mol', function(){
      assert.equal(errMsg, null);
    });
    it('should return a properly concatenated name for [CFU] / mol', function(){
      assert.equal(retUnit.csCode_, '[CFU]/mol');
    });
    it('should return a unit with the isArbitrary_ flag set', function(){
      assert.equal(retUnit.isArbitrary_, true);
    });
    it('should return a unit with moleExp_ set to -1', function(){
      assert.equal(retUnit.moleExp_, -1);
    });
  });
}) ; // end Test requests to multiply/divide arbitrary units

describe("Test unit detection methods for mole and equivalent units", function() {
  it("equivalent should have only equivalentExp_ set", function(){
    var eqUnit = uTabs.getUnitByCode('eq');
    assert.equal(eqUnit.moleExp_, 0);
    assert.equal(eqUnit.equivalentExp_, 1);
  });
  it("mole should have moleExp_ set but not equivalentExp_", function(){
    var molUnit = uTabs.getUnitByCode('mol');
    assert.equal(molUnit.moleExp_, 1);
    assert.equal(molUnit.equivalentExp_, 0);
  });
  it("isMolarUnit should return true for mol", function(){
    var molUnit = uTabs.getUnitByCode('mol');
    assert.equal(molUnit.isMolarUnit(), true);
  });
  it("isMolarUnit should return false for eq", function(){
    var eqUnit = uTabs.getUnitByCode('eq');
    assert.equal(eqUnit.isMolarUnit(), false);
  });
  it("isEquivalentUnit should return true for eq", function(){
    var eqUnit = uTabs.getUnitByCode('eq');
    assert.equal(eqUnit.isEquivalentUnit(), true);
  });
  it("isEquivalentUnit should return false for mol", function(){
    var molUnit = uTabs.getUnitByCode('mol');
    assert.equal(molUnit.isEquivalentUnit(), false);
  });
  it("both isMolarUnit and isEquivalentUnit should return true for equivalent/millimole (eq/mmol)", function(){
    var eqmmolUnit = uTabs.getUnitByCode('eq/mmol');
    assert.equal(eqmmolUnit.isMolarUnit(), true);
    assert.equal(eqmmolUnit.isEquivalentUnit(), true);
  });
});

describe('Test multiplication, division, and powers of mole/eq units', function (){
  describe('mol.osm', function() {
    var molUnit = uTabs.getUnitByCode('mol');
    var cfuUnit = uTabs.getUnitByCode('osm');
    var errMsg = null;
    var retUnit = cfuUnit.multiplyThese(molUnit);
    it('should return a unit with moleExp_ set to 2', function(){
      assert.equal(retUnit.moleExp_, 2);
    });
  });

  describe('eq.eq', function() {
    it('should return a unit with equivalentExp_ set to 2', function() {
      var eqUnit = uTabs.getUnitByCode('eq');
      var retUnit = eqUnit.multiplyThese(eqUnit);
      assert.equal(retUnit.equivalentExp_, 2);
    });
  });

  describe('mol.eq/mol.eq', function() {
    it('should return a unit with and moleExp_ and equivalentExp_ set to 0', function() {
      var molUnit = uTabs.getUnitByCode('mol');
      var eqUnit = uTabs.getUnitByCode('eq');
      var retUnit = molUnit.multiplyThese(eqUnit).divide(molUnit).divide(eqUnit);
      assert.equal(retUnit.moleExp_, 0, 'moleExp_');
      assert.equal(retUnit.equivalentExp_, 0, 'equivalentExp_');
    });
  });

  describe('mol2/eq3', function() {
    it('should return a unit with and moleExp_ of 2 and equivalentExp_ of -3', function() {
      var molUnit = uTabs.getUnitByCode('mol');
      var eqUnit = uTabs.getUnitByCode('eq');
      var retUnit = molUnit.power(2).divide(eqUnit.power(3));
      assert.equal(retUnit.moleExp_, 2, 'moleExp_');
      assert.equal(retUnit.equivalentExp_, -3, 'equivalentExp_');
    });
  });

  describe('invert()', ()=>{
    it('should change the sign of the values of moleExp_ and equivalentExp_', ()=>{
      var molUnit = uTabs.getUnitByCode('mol');
      var eqUnit = uTabs.getUnitByCode('eq');
      var retUnit = molUnit.power(2).divide(eqUnit.power(3));
      retUnit = retUnit.invert();
      assert.equal(retUnit.moleExp_, -2, 'moleExp_');
      assert.equal(retUnit.equivalentExp_, 3, 'equivalentExp_');
    });
  });

  describe('power(n)', ()=>{
    it('should multiply the values of moleExp_ and equivalentExp_', ()=>{
      var molUnit = uTabs.getUnitByCode('mol');
      var eqUnit = uTabs.getUnitByCode('eq');
      var retUnit = molUnit.power(2).divide(eqUnit.power(3));
      retUnit = retUnit.power(2);
      assert.equal(retUnit.moleExp_, 4, 'moleExp_');
      assert.equal(retUnit.equivalentExp_, -6, 'equivalentExp_');
    });
  });
});

describe('Test attempts to convert arbitrary units', function() {
  it('should throw an error on attempt to convert 5 iu to cfu', function(){
    var iuUnit = uTabs.getUnitByCode('[IU]');
    var cfuUnit = uTabs.getUnitByCode('[CFU]');
    var errMsg = null;
    try {
      var retUnit = cfuUnit.convertFrom(5, iuUnit);
    }
    catch(err) {
      errMsg = err.message;
    }
    assert.equal('Attempt to convert to arbitrary unit "[CFU]"',
      errMsg);
  });

  it('should throw an error on attempt to convert 6 iu to 10*3', function(){
    var iuUnit = uTabs.getUnitByCode('[IU]');
    var tenUnit = uTabs.getUnitByCode('10*3');
    var errMsg = null;
    try {
      var retUnit = tenUnit.convertFrom(6, iuUnit);
    }
    catch(err) {
      errMsg = err.message;
    }
    assert.equal('Attempt to convert arbitrary unit "[IU]"',
      errMsg);
  });
}) ; // end Test attempts to multiply/divide arbitrary units

describe('Generated names for complex units', function() {
  it('should reflect evaluation order', function(){
    var resp1 = uString.parseString('kg/(s2.m)');
    var resp2 = uString.parseString('kg/(m.s2)');
    assert.equal('kilogram/[[second - time<sup>2</sup>]*meter]', resp1[0].name_);
    assert.equal('kilogram/[meter*[second - time<sup>2</sup>]]', resp2[0].name_);
  });

  it('should handle numeric units', function(){
    var unit = uString.parseString('2.[degF]')[0];
    assert.equal(unit.name_, '2*[degrees Fahrenheit]');
    assert.equal(unit.csCode_, '2.[degF]');
    assert.equal(unit.ciCode_, '2.[DEGF]');
  });

  it('should handle numeric units when they come last', function(){
    var unit = uString.parseString('[degF].2')[0];
    assert.equal(unit.name_, '[degrees Fahrenheit]*2');
    assert.equal(unit.csCode_, '[degF].2');
    assert.equal(unit.ciCode_, '[DEGF].2');
  });

  it('should handle numeric units by themselves', function(){
    // This is not a "complex" unit, but belongs with the previous case
    var unit = uString.parseString('2')[0];
    assert.equal(unit.name_, '2');
    assert.equal(unit.csCode_, '2');
    assert.equal(unit.ciCode_, '2');
  });
});

describe('Test invertString', function (){
  it('should keep sup tags intact', function(){
    var testUnit = new UnitObj();
    assert.equal(testUnit.invertString('10<sup>9</sup>'), '/10<sup>9</sup>');
  });
});

describe('isMoleMassCommensurable(unit2)', ()=> {
  it('should return true if one unit has mol and the other has the same power mass', ()=>{
    var molUnit = uTabs.getUnitByCode('mol');
    var massUnit = uTabs.getUnitByCode('kg');
    assert(molUnit.isMoleMassCommensurable(massUnit));
    assert(massUnit.isMoleMassCommensurable(molUnit));
    assert(molUnit.power(2).isMoleMassCommensurable(massUnit.power(2)));
    assert(molUnit.power(2).invert().isMoleMassCommensurable(massUnit.power(2).invert()),
      `mol-2=${JSON.stringify(molUnit.power(2).invert())}; kg-2=${JSON.stringify(massUnit.power(2).invert())}`);
  });

  it('should return false if one unit has a different power of mass/mol', ()=>{
    var molUnit = uTabs.getUnitByCode('mol');
    var massUnit = uTabs.getUnitByCode('kg');
    assert(molUnit.power(2).isMoleMassCommensurable(massUnit.power(3)) == false);
    assert(massUnit.power(2).invert().isMoleMassCommensurable(molUnit.power(3).invert()) == false);
  });
});

describe('isEqMassCommensurable(unit2)', ()=> {
  it('should return true if one unit has eq and the other has the same power mass', ()=> {
    var eqUnit = uTabs.getUnitByCode('eq');
    var massUnit = uTabs.getUnitByCode('kg');
    assert(eqUnit.isEqMassCommensurable(massUnit));
    assert(massUnit.isEqMassCommensurable(eqUnit));
    assert(eqUnit.power(2).isEqMassCommensurable(massUnit.power(2)));
    assert(eqUnit.power(2).invert().isEqMassCommensurable(massUnit.power(2).invert()));
  });

  it('should return false if one unit has a different power of mass/eq', ()=>{
    var eqUnit = uTabs.getUnitByCode('eq');
    var massUnit = uTabs.getUnitByCode('kg');
    assert(eqUnit.power(2).isEqMassCommensurable(massUnit.power(3)) == false);
    assert(massUnit.power(2).invert().isEqMassCommensurable(eqUnit.power(3).invert()) == false);
  });
});

