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
var UnitString = require("../source-es5/unitString.js").UnitString;

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
    it('should return just under 2000 for 2 g.kmol/(mmol.kmol) to g/mol', function() {
      var respObj = uString.parseString('g.kmol/(mmol.kmol)');
      var fromUnit = respObj[0];
      respObj = uString.parseString('g/mol');
      var toUnit = respObj[0];
      var res1 = toUnit.convertFrom(2, fromUnit);
      assert(Math.abs(2000 - res1) < 0.0000000000003, `result returned was ${res1}`);
    });
    it('should return 2 for 2000/mol to kmol', function(){
      var mol = uTabs.getUnitByCode('mol');
      respObj = uString.parseString('kmol');
      var kmol = respObj[0];
      var res2 = mol.convertTo(2000, kmol);
      assert.equal(res2, 2, `result returned was ${res2}`);
    });
    it('should return 10000 for 10/mol to /kmol', function(){
      respObj = uString.parseString('10/mol');
      var molD10 = respObj[0];
      respObj = uString.parseString('/kmol');
      var kmolD1 = respObj[0];
      var res3 = kmolD1.convertFrom(1, molD10);
      assert.equal(res3, 10000, `result returned was ${res3}`);
    }) ;
    it('should return 2000 for 2 kmol/[CFU] to mol', function(){
      var mol = uTabs.getUnitByCode('mol');
      respObj = uString.parseString('kmol/[CFU]');
      var kmolCFU = respObj[0];
      var res4 = kmolCFU.convertTo(2, mol);
       assert.equal(res4, 2000, `result returned was ${res4}`);
    });
  }); // end test conversion for units with no vectors, no functions

  describe('Test conversion for units with no vectors but with functions', function(){
    it("should return just under 50 for 10 Celsius units to Fahrenheit", function(){
      var fahrUnit = uTabs.getUnitByCode('[degF]');
      var celUnit = uTabs.getUnitByCode('Cel');
      var resToFahr = fahrUnit.convertFrom(10, celUnit);
      assert(Math.abs(50 - resToFahr) < 0.000000000099, `result returned was ${resToFahr}`);
    });
    it("should return a little less than 0 for 32 Fahrenheit units to Celsius", function() {
      fahrUnit = uTabs.getUnitByCode('[degF]');
      celUnit = uTabs.getUnitByCode('Cel');
      var resToCel = celUnit.convertFrom(32, fahrUnit);
      assert(Math.abs(0 - resToCel) < 0.00000000000006, `result returned was ${resToCel}`);
    });
  }); // end test conversion for units with no vectors but with functions

}); // end Test Unit convertFrom method

