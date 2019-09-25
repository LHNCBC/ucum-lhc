/**
 * Mocha tests for the Unit class.
 * Run from the command line with 'mocha testunit.js' or 'grunt test'
 */

var assert = require('assert');
var UcumJsonDefs = require('../source/ucumJsonDefs.js').UcumJsonDefs ;
var UTables = require("../source/unitTables.js").UnitTables;
var UnitObj = require("../source/unit.js").Unit;
var UnitString = require("../source/unitString.js").UnitString;

var uTabs = UTables.getInstance();
var uDefs = UcumJsonDefs.getInstance();
uDefs.loadJsonDefs();
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
    assert.equal(2 * avUnit.magnitude_, retUnit.magnitude_);
  });

  it('should an updated cnvPfx_ for a 2 * Cel', function(){
    var celUnit = uTabs.getUnitByCode('Cel');
    var retUnit = celUnit.multiplyThis(2);
    assert.equal('2*[degree Celsius]', retUnit.name_);
    assert.equal('2.Cel', retUnit.csCode_);
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

  describe('Test multiplication of mole units', function (){
    var molUnit = uTabs.getUnitByCode('mol');
    var cfuUnit = uTabs.getUnitByCode('[CFU]');
    var errMsg = null;
    try {
      var retUnit = cfuUnit.multiplyThese(molUnit);
    }
    catch(err) {
      errMsg = err.message;
    };
    it('should return a unit with moleExp_ set to 1', function(){
      assert.equal(retUnit.moleExp_, 1);
    });
  });
}) ; // end Test requests to multiply/divide arbitrary units

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
    assert.equal('Attempt to convert arbitrary unit colony forming units',
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
    assert.equal('Attempt to convert to arbitrary unit international unit - arbitrary',
      errMsg);
  });
}) ; // end Test attempts to multiply/divide arbitrary units
