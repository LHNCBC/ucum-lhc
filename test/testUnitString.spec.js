/**
 * Mocha tests for the UnitString class.
 *
 * Run from the command line with 'mocha testUnitString.js' or 'grunt test'
 */

var assert = require('assert');
var { ucumJsonDefs } = require('../source-cjs/ucumJsonDefs.js') ;
var UTables = require("../source-cjs/unitTables.js").UnitTables;
var UnitObj = require("../source-cjs/unit.js").Unit;
var UnitString = require("../source-cjs/unitString.js").UnitString;

var uTabs = UTables.getInstance();
ucumJsonDefs.loadJsonDefs();


describe('Test parseString method', function() {
  it('should not return isBase_=true for non-base units', ()=>{
    let uString = UnitString.getInstance();
    let resp = uString.parseString('fs', 'validate');
    let retUnit = resp[0];
    assert(!retUnit.isBase_);
  });

  it('should not return isBase_=true for units with arithmetic', ()=>{
    let uString = UnitString.getInstance();
    let resp = uString.parseString('s/g', 'validate');
    let retUnit = resp[0];
    assert(!retUnit.isBase_);
  });

  it('should not return isBase_=true for units with exponents', ()=>{
    let uString = UnitString.getInstance();
    let resp = uString.parseString('s2', 'validate');
    let retUnit = resp[0];
    assert(!retUnit.isBase_);
  });

  it('should not return synonyms for units not in the table', ()=>{
    let uString = UnitString.getInstance();
    let resp = uString.parseString('fs', 'validate');
    let retUnit = resp[0];
    assert(!retUnit.synonyms_);
  });

  describe('Test valid single unit string (cal)', function() {
    var uString = UnitString.getInstance();
    var calUnit = uTabs.getUnitByCode('cal');
    var resp = uString.parseString('cal', 'validate');
    var retUnit = resp[0];
    var origString = resp[1];
    var respMsg = resp[2];
    var errMsg = null;
    it("should return a unit object as the first array element", function() {
      assert(retUnit instanceof UnitObj, `retUnit = ${JSON.stringify(retUnit)}`);
    });
    it("should return the submitted string as the second array element", function() {
      assert.equal('cal', origString, `origString = ${origString}`);
    });
    it("should return an empty array as the third array element", function() {
      assert.deepEqual([], respMsg, `respMsg = ${JSON.stringify(respMsg)}`);
    });
    it("should return a unit object that matches the current object", function() {
      assert(calUnit.fullEquals(retUnit),
             `retUnit = ${JSON.stringify(retUnit)}\ncalUnit = ${JSON.stringify(calUnit)}`);
    });
  });

  describe('Test for unit code /g', function() {
    var uString = UnitString.getInstance();
    var gUnit = uTabs.getUnitByCode('g');
    var retMsg = [];
    var origString = '/g';
    var resp = uString.parseString('/g', 'convert');
    var retUnit = resp[0];
    var retOrig = resp[1];
    var respMsg = resp[2] ;
    it("should return a unit matching the gram unit with a negated dimension", function() {
      // invert the original g unit's dimension vector
      gUnit.dim_.minus();
      assert(gUnit.equals(retUnit),
             `retUnit = ${JSON.stringify(retUnit)}\ngUnit = ${JSON.stringify(gUnit)}`);
    });
    it("should return the origString with no changes", function() {
      assert.equal('/g', retOrig, `retOrig = ${retOrig}`);
    });
    it("should not return any messages", function() {
      assert.deepEqual([], respMsg, `respMsg = ${JSON.stringify(respMsg)}`);
    });
  });

  describe('Test for unit string 2mg', function() {
    var uString = UnitString.getInstance();
    var mgUnit = uTabs.getUnitByCode('mg');
    var retMsg = [];
    var origString = '2mg';
    var resp = uString.parseString('2mg', 'validate');
    var retUnit = resp[0];
    var retOrig = resp[1];
    var respMsg = resp[2] ;
    it("should return a unit matching the milligram unit multiplied by 2", function() {
      // multiply the mgUnit by 2
      let mg2Unit = mgUnit.multiplyThis(2);
      assert(mg2Unit.equals(retUnit),
        `retUnit = ${JSON.stringify(retUnit)}\ngUnit = ${JSON.stringify(mgUnit)}`);
    });
    it("should return the origString with a substitution", function() {
      assert.equal('2.mg', retOrig, `retOrig = ${retOrig}`);
    });
    it("should a return about the missing multiplier", function() {
      assert.equal(1, respMsg.length, `respMsg.length = ${respMsg.length}`);
      assert.equal('2mg is not a valid UCUM code.  Did you mean 2.mg?',
                   respMsg[0], `respMsg = ${JSON.stringify(respMsg)}`);
    });
  }) ;

  describe('Test for unit string 5 (number only)', function() {
    var uString = UnitString.getInstance();
    var retMsg = [];
    var origString = '5';
    var resp = uString.parseString(origString, 'validate');
    var retUnit = resp[0];
    var retOrig = resp[1];
    var respMsg = resp[2] ;
    it("should return a unit with the digit as the csCode", function() {
      assert.equal(retUnit['csCode_'], '5');
    });
    it("should not return any messages", function() {
      assert.deepEqual([], respMsg, `respMsg = ${JSON.stringify(respMsg)}`);
    });
  }) ;

  describe('Test for numeric string with an error 6(58)/9', function() {
    var uString = UnitString.getInstance();
    var origString = '6(58)/9';
    var resp = uString.parseString(origString, 'validate');
    var retUnit = resp[0];
    var retOrig = resp[1];
    var respMsg = resp[2] ;
    it("should return a unit for 6.(58)/9", function() {
      assert.notEqual(retUnit, null);
      assert.equal(retUnit['csCode_'], '6.58/9');
      assert.equal(retUnit['name_'], '[6*58]/9');
    });
    it("should return 1 message", function() {
      assert.equal(respMsg.length, 1);
      assert.equal(respMsg[0],
        '6(58) is not a valid UCUM code.  Did you mean 6.(58)?');
    });
  }) ;

  describe('Test for unit string 32.4(ug/g).mg', function() {
    var uString = UnitString.getInstance();
    var mgUnit = uTabs.getUnitByCode('mg');
    var ugUnit = uTabs.getUnitByCode('ug/g');
    var retMsg = [];
    var origString = '32.4(ug/g).mg';
    var resp = uString.parseString(origString, 'validate');
    var retUnit = resp[0];
    var retOrig = resp[1];
    var respMsg = resp[2] ;
    it("should return a unit for 32.(4(ug/g)).mg", function() {
      // multiply the ugUnit by 4 and then 32 then by the mgUnit
      let unitObj = ugUnit.multiplyThis(4);
      unitObj = unitObj.multiplyThis(32);
      unitObj = unitObj.multiplyThese(mgUnit);
      assert(unitObj.equals(retUnit),
        `retUnit = ${JSON.stringify(retUnit)}\nunitObj = ${JSON.stringify(unitObj)}`);
    });
    it("should return the origString with a substitution", function() {
      assert.equal('32.(4.(ug/g)).mg', retOrig, `retOrig = ${retOrig}`);
    });
    it("should return a message about the missing multiplier", function() {
      assert.equal(1, respMsg.length, `respMsg.length = ${respMsg.length}`);
      assert.equal('4(ug/g) is not a valid UCUM code.  Did you mean 4.(ug/g)?',
        respMsg[0], `respMsg = ${JSON.stringify(respMsg)}`);
    });
  }) ;

  describe('Test for unit string 78.2(mmol/L)', function() {
    var uString = UnitString.getInstance();
    var mmolLObj = uTabs.getUnitByCode('mmol/L')
    var retMsg = [];
    var origString = '78.2(mmol/L)';
    var resp = uString.parseString(origString, 'validate');
    var retUnit = resp[0];
    var retOrig = resp[1];
    var respMsg = resp[2] ;
    it("should return a unit for 78.(2.(mmol/L)", function() {
      // multiply the mgUnit by 2 and then 7
      let unitObj = mmolLObj.multiplyThis(2);
      unitObj = unitObj.multiplyThis(78);
      assert(unitObj.equals(retUnit),
        `retUnit = ${JSON.stringify(retUnit)}\nunitObj = ${JSON.stringify(unitObj)}`);
    });
    it("should return the origString with a substitution", function() {
      assert.equal('78.(2.(mmol/L))', retOrig, `retOrig = ${retOrig}`);
    });
    it("should return a message about the missing multiplier", function() {
      assert.equal(1, respMsg.length, `respMsg.length = ${respMsg.length}`);
      assert.equal('2(mmol/L) is not a valid UCUM code.  Did you mean 2.(mmol/L)?',
        respMsg[0], `respMsg = ${JSON.stringify(respMsg)}`);
    });
  }) ;


  describe('Test for unit string with double operators', function() {
    var uString = UnitString.getInstance();
    var retMsg = [];
    var origString = 'mg/.K';
    var resp = uString.parseString(origString, 'validate');
    var retUnit = resp[0];
    var retOrig = resp[1];
    var respMsg = resp[2] ;
    it("should not return a unit", function() {
      assert.equal(retUnit, null);
    });
    it("should return the origString unchanged", function() {
      assert.equal(retOrig, origString);
    });
    it("should return a message about the double operator", function() {
      assert.equal(1, respMsg.length);
      assert.equal("mg/.K is not a valid UCUM code. A unit code is missing " +
                   "between ->/<- and ->.<- in ->/.<- .",
                   respMsg[0]);
    });
  }) ;

  describe('Test for unit string starting with .', function() {
    var uString = UnitString.getInstance();
    var retMsg = [];
    var origString = '.3.m';
    var resp = uString.parseString(origString, 'validate');
    var retUnit = resp[0];
    var retOrig = resp[1];
    var respMsg = resp[2] ;
    it("should not return a unit", function() {
      assert.equal(retUnit, null);
    });
    it("should return the origString unchanged", function() {
      assert.equal(retOrig, origString);
    });
    it("should return a message about the multiplication operator", function() {
      assert.equal(1, respMsg.length);
      assert.equal(".3.m is not a valid UCUM code. The multiplication " +
        "operator at the beginning of the expression is not valid. A " +
        "multiplication operator must appear only between two codes.",
        respMsg[0]);
    });
  }) ;

  describe('Test for unit string 3mg/[den]', function() {
    var uString = UnitString.getInstance();
    var mgUnit = uTabs.getUnitByCode('mg').clone();
    var denUnit = uTabs.getUnitByCode('[den]').clone();
    var retMsg = [];
    var origString = '3mg/[den]';
    var resp = uString.parseString('3mg/[den]', 'validate');
    var retUnit = resp[0];
    var retOrig = resp[1];
    var respMsg = resp[2] ;
    it("should return a unit for the expression", function() {
      // multiply the mgUnit by 3
      let retObj = mgUnit.multiplyThis(3);
      // divide it by [den]
      retObj = retObj.divide(denUnit);
      assert(retObj.equals(retUnit),
        `retUnit = ${JSON.stringify(retUnit)}\nmgUnit = ${JSON.stringify(mgUnit)}`);
      it("should return the origString with a substitution", function() {
        assert.equal('3.mg/[den]', retOrig, `retOrig = ${retOrig}`);
      });
      it("should return a message about the missing multiplier", function() {
        assert.equal(1, respMsg.length, `respMsg.length = ${respMsg.length}`);
        assert.equal('3mg is not a valid UCUM code.  Did you mean 3.mg?',
          respMsg[0], `respMsg = ${JSON.stringify(respMsg)}`);
      });
    });
  }) ;

  describe('Test for unit string mg/3[den]', function() {
    var uString = UnitString.getInstance();
    var mgUnit = uTabs.getUnitByCode('mg').clone();
    var denUnit = uTabs.getUnitByCode('[den]').clone();
    var retMsg = [];
    var origString = 'mg/3[den]';
    var resp = uString.parseString('mg/3[den]', 'validate');
    var retUnit = resp[0];
    var retOrig = resp[1];
    var respMsg = resp[2] ;
    it("should return a unit for the expression", function() {
      // multiply the denUnit by 3
      denUnit = denUnit.multiplyThis(3);
      // divide the milligram unit it by [den]
      mgUnit = mgUnit.divide(denUnit);
      assert(mgUnit.equals(retUnit),
        `retUnit = ${JSON.stringify(retUnit)}\nmgUnit = ${JSON.stringify(mgUnit)}`);
      it("should return the origString with a substitution", function() {
        assert.equal('mg/(3.[den])', retOrig, `retOrig = ${retOrig}`);
      });
      it("should return a message about the missing multiplier", function() {
        assert.equal(1, respMsg.length, `respMsg.length = ${respMsg.length}`);
        assert.equal('3[den] is not a valid UCUM code.  Did you mean 3.[den]?',
          respMsg[0], `respMsg = ${JSON.stringify(respMsg)}`);
      });
    });
  }) ;

  describe('test for unit string 3mg/3[den]', function() {
    var uString = UnitString.getInstance();
    var mgUnit = uTabs.getUnitByCode('mg').clone();
    var denUnit = uTabs.getUnitByCode('[den]').clone();
    var retMsg = [];
    var origString = '3mg/3[den]';
    var resp = uString.parseString('3mg/3[den]', 'validate');
    var retUnit = resp[0];
    var retOrig = resp[1];
    var respMsg = resp[2] ;
    it("should return a unit for the expression", function() {
      // multiply the denUnit by 3
      denUnit = denUnit.multiplyThis(3);
      // multiply the milligram unit by 3
      mgUnit = mgUnit.multiplyThis(3);
      // divide the milligram unit it by [den]
      mgUnit = mgUnit.divide(denUnit);
      assert(mgUnit.equals(retUnit),
        `retUnit = ${JSON.stringify(retUnit)}\nmgUnit = ${JSON.stringify(mgUnit)}`);
      it("should return the origString with a substitution", function() {
        assert.equal('3.mg/(3.[den])', retOrig, `retOrig = ${retOrig}`);
      });
      it("should return a message about each missing multiplier", function() {
        assert.equal(2, respMsg.length, `respMsg.length = ${respMsg.length}`);
        assert.equal('3mg is not a valid UCUM code.  Did you mean 3.mg?',
          respMsg[0], `respMsg = ${JSON.stringify(respMsg)}`);
        assert.equal('3[den] is not a valid UCUM code.  Did you mean 3.[den]?',
          respMsg[0], `respMsg = ${JSON.stringify(respMsg)}`);
      });
    });
  }) ;

  describe('test for unit string day', function() {
    var uString = UnitString.getInstance();
    var dUnit = uTabs.getUnitByCode('d');
    var retMsg = [];
    var origString = 'day';
    var resp = uString.parseString('day', 'validate');
    var retUnit = resp[0];
    var retOrig = resp[1];
    var respMsg = resp[2] ;
    it("should return a unit matching the day unit", function() {
      assert(dUnit.equals(retUnit),
        `retUnit = ${JSON.stringify(retUnit)}\ndUnit = ${JSON.stringify(dUnit)}`);
    });
    it("should return the origString with a substitution", function() {
      assert.equal('d', retOrig, `retOrig = ${retOrig}`);
    });
    it("should return a message about the correct code", function() {
      assert.equal(1, respMsg.length, `respMsg.length = ${respMsg.length}`);
      assert.equal('The UCUM code for day is d.\nDid you mean d?',
        respMsg[0], `respMsg = ${JSON.stringify(respMsg)}`);
    });
  }) ;


  describe('test for unit string {degF}', function() {
    var uString = UnitString.getInstance();
    var retMsg = [];
    var origString = '{degF}';
    var resp = uString.parseString('{degF}', 'validate');
    var retUnit = resp[0];
    var retOrig = resp[1];
    var respMsg = resp[2] ;
    it("should return a unit for the annotation", function() {
      assert.equal(retUnit.name_, '{degF}');
      assert.equal(retUnit.csCode_, '{degF}');
      assert.equal(retUnit.ciCode_, '{degF}');
    });
    it("should return the origString", function() {
      assert.equal(retOrig, origString, `retOrig = ${retOrig}`);
    });
    it("should return a message about the correct code", function() {
      assert.equal(respMsg.length, 1, `respMsg.length = ${respMsg.length}`);
      assert.equal(respMsg[0], '{degF} is a valid unit expression, but ' +
        'did you mean [degF] (degrees Fahrenheit)?',
        `respMsg = ${JSON.stringify(respMsg)}`);
    });
  }) ;


  describe('test for unit string in_i', function() {
    var uString = UnitString.getInstance();
    var inUnit = uTabs.getUnitByCode('[in_i]');
    var retMsg = [];
    var origString = 'in_i';
    var resp = uString.parseString('in_i', 'validate');
    var retUnit = resp[0];
    var retOrig = resp[1];
    var respMsg = resp[2] ;
    it("should return a unit matching the [in_i] unit", function() {
      assert(inUnit.equals(retUnit),
        `retUnit = ${JSON.stringify(retUnit)}\ninUnit = ${JSON.stringify(inUnit)}`);
    });
    it("should return the origString with a substitution", function() {
      assert.equal('[in_i]', retOrig, `retOrig = ${retOrig}`);
    });
    it("should return a message about the correct code", function() {
      assert.equal(1, respMsg.length, `respMsg.length = ${respMsg.length}`);
      assert.equal('in_i is not a valid unit expression, but [in_i] is.\n' +
        'Did you mean [in_i] (inch)?', respMsg[0], `respMsg = ${JSON.stringify(respMsg)}`);
    });
  }) ;

  describe('test for unit string {creatine}mol', function() {
    var uString = UnitString.getInstance();
    var molUnit = uTabs.getUnitByCode('mol');
    var retMsg = [];
    var origString = '{creatine}mol';
    var resp = uString.parseString('{creatine}mol', 'validate');
    var retUnit = resp[0];
    var retOrig = resp[1];
    var respMsg = resp[2] ;
    it("should return a unit matching the mol{creatine} unit", function() {
      assert(molUnit.equals(retUnit),
        `retUnit = ${JSON.stringify(retUnit)}\nmolUnit = ${JSON.stringify(molUnit)}`);
    });
    it("should return the origString with a substitution", function() {
      assert.equal('mol{creatine}', retOrig, `retOrig = ${retOrig}`);
    });
    it("should return a message about the correct annotation placement", function() {
      assert.equal(1, respMsg.length, `respMsg.length = ${respMsg.length}`);
      assert.equal('The annotation {creatine} before the unit code is invalid.' +
        '\nDid you mean mol{creatine}?', respMsg[0], `respMsg = ${JSON.stringify(respMsg)}`);
    });
  }) ;

  describe('test for unit string culture/2mg with suggestions', function() {
    var uString = UnitString.getInstance();
    var retMsg = [];
    var origString = 'culture/2mg';
    var resp = uString.parseString('culture/2mg', 'validate', true);
    var retUnit = resp[0];
    var retOrig = resp[1];
    var respMsg = resp[2] ;
    var respSugg = resp[3];
    it("should not return a unit", function() {
      assert.equal(retUnit, null);
    });
    it("should return the origString updated", function() {
      assert.equal(retOrig, "culture/(2.mg)");
    });
    it("should return 1 message", function() {
      assert.equal(respMsg.length, 1);
      assert.equal(respMsg[0],
        '2mg is not a valid UCUM code.  Did you mean 2.mg?');
    });
    it("should return 2 suggestions", function() {
      assert.equal(respSugg[0]['units'].length, 2);
      assert.deepEqual(respSugg[0]['msg'], "culture is not a valid UCUM code.  " +
        "We found possible units that might be what was meant:");
      assert.deepEqual(respSugg[0]['invalidUnit'], 'culture');
      assert.deepEqual(respSugg[0]['units'][0],
        ["[CCID_50]","50% cell culture infectious dose",null]);
      assert.deepEqual(respSugg[0]['units'][1],
        ["[TCID_50]","50% tissue culture infectious dose",null]);
    });
  }) ;

  describe('test for unit string culture/2mg without suggestions', function() {
    var uString = UnitString.getInstance();
    var retMsg = [];
    var origString = 'culture/2mg';
    var resp = uString.parseString('culture/2mg', 'validate', false);
    var retUnit = resp[0];
    var retOrig = resp[1];
    var respMsg = resp[2] ;
    it("should not return a unit", function() {
      assert.equal(retUnit, null);
    });
    it("should return the origString updated", function() {
      assert.equal(retOrig, "culture/(2.mg)");
    });
    it("should return 2 messages", function() {
      assert.equal(respMsg.length, 2);
      assert.equal(respMsg[0],
        '2mg is not a valid UCUM code.  Did you mean 2.mg?');
      assert.equal(respMsg[1], "culture is not a valid UCUM code.");
    });
    it("should not return any suggestions", function() {
      assert(!resp[3]);
    });
  }) ;

  describe('test for unit string 2mg/culture with suggestions', function() {
    var uString = UnitString.getInstance();
    var retMsg = [];
    var resp = uString.parseString('2mg/culture', 'validate', true);
    var retUnit = resp[0];
    var retOrig = resp[1];
    var respMsg = resp[2] ;
    var respSugg = resp[3];
    it("should not return a unit", function() {
      assert.equal(retUnit, null);
    });
    it("should return the origString updated", function() {
      assert.equal(retOrig, "2.mg/culture");
    });
    it("should return 1 message", function() {
      assert.equal(respMsg.length, 1);
      assert.equal(respMsg[0],
        '2mg is not a valid UCUM code.  Did you mean 2.mg?');
    });
    it("should return 2 suggestions", function() {
      assert.equal(respSugg.length, 1);
      assert.equal(respSugg[0]['units'].length, 2);
      assert.deepEqual(respSugg[0]['msg'], "culture is not a valid UCUM " +
        "code.  We found possible units that might be what was meant:");
      assert.deepEqual(respSugg[0]['invalidUnit'], 'culture');
      assert.deepEqual(respSugg[0]['units'][0],
        ["[CCID_50]","50% cell culture infectious dose",null]);
      assert.deepEqual(respSugg[0]['units'][1],
        ["[TCID_50]","50% tissue culture infectious dose",null]);
    });
  }) ;

  describe('test for unit string 2mg/culture without suggestions', function() {
    var uString = UnitString.getInstance();
    var retMsg = [];
    var resp = uString.parseString('2mg/culture', 'validate');
    var retUnit = resp[0];
    var retOrig = resp[1];
    var respMsg = resp[2] ;
    it("should not return a unit", function() {
      assert.equal(retUnit, null);
    });
    it("should return the origString updated", function() {
      assert.equal(retOrig, "2.mg/culture");
    });
    it("should return 2 messages", function() {
      assert.equal(respMsg.length, 2);
      assert.equal(respMsg[0],
        '2mg is not a valid UCUM code.  Did you mean 2.mg?');
      assert.equal(respMsg[1], "culture is not a valid UCUM code.");
    });
    it("should return not return any suggestions", function() {
      assert(!resp[3]);
    });
  }) ;

  describe('test for unit string culture/meqs with suggestions', function() {
    var uString = UnitString.getInstance();
    var retMsg = [];
    var origString = 'culture/meqs';
    var resp = uString.parseString('culture/meqs', 'validate', true);
    var retUnit = resp[0];
    var retOrig = resp[1];
    var respMsg = resp[2] ;
    var respSugg = resp[3];
    it("should not return a unit", function() {
      assert.equal(retUnit, null);
    });
    it("should return 0 messages", function() {
      assert.equal(respMsg.length, 0);
    });
    it("should return suggestions for both strings", function() {
      assert.equal(respSugg.length, 2);
      assert.equal(respSugg[0]['invalidUnit'], 'culture');
      assert.equal(respSugg[0]['msg'], 'culture is not a valid UCUM code.  ' +
        'We found possible units that might be what was meant:');
      assert.equal(respSugg[0]['units'].length, 2);
      assert.deepEqual(respSugg[0]['units'][0],
        ["[CCID_50]","50% cell culture infectious dose",null]);
      assert.deepEqual(respSugg[0]['units'][1],
        ["[TCID_50]","50% tissue culture infectious dose",null]);
      assert.equal(respSugg[1]['invalidUnit'], 'meqs');
      assert.equal(respSugg[1]['msg'], 'meqs is not a valid UCUM code.  ' +
        'We found possible units that might be what was meant:');
      assert.equal(respSugg[1]['units'].length, 1);
      assert.deepEqual(respSugg[1]['units'][0],
        ["meq","milliequivalent","equivalence equals moles per valence"]);
    });
  }) ;

  describe('test for a constructed unit m2/g', function() {
    var uString = UnitString.getInstance();
    var resp = uString.parseString('m2/g', 'validate');
    var retUnit = resp[0];
    it("should return a unit with no guidance", function() {
      assert.equal(retUnit['guidance_'], '');
    });
    it ("should return a unit with a name of [square meter]/[gram]", function() {
      assert.equal(retUnit['name_'], '[square meter]/gram');
    });
  }) ;

  describe('test for a constructed unit m2.g', function() {
    var uString = UnitString.getInstance();
    var resp = uString.parseString('m2.g', 'validate');
    var retUnit = resp[0];
    it("should return a unit with no guidance", function() {
      assert.equal(retUnit['guidance_'], '');
    });
    it ("should return a unit with a name of [square meter]*[gram]", function() {
      assert.equal(retUnit['name_'], '[square meter]*gram');
    });
  }) ;

  describe('test unit expression ending with /', function() {
    var uString = UnitString.getInstance();
    var resp = uString.parseString('m2/', 'validate');
    var respMsg = resp[2] ;
    it("should return an error message", function() {
      assert.equal(respMsg, 'm2/ is not a valid UCUM code. ' +
        'It is terminated with the operator  ->/<- .');
    });
  }) ;

  describe('test unit expression ending with .', function() {
    var uString = UnitString.getInstance();
    var resp = uString.parseString('m.', 'validate');
    var respMsg = resp[2] ;
    it("should return an error message", function() {
      assert.equal(respMsg, 'm. is not a valid UCUM code. ' +
        'It is terminated with the operator  ->.<- .');
    });
  }) ;

  describe('test unit expression missing a unit between 2 operators', function() {
    var uString = UnitString.getInstance();
    var resp = uString.parseString('m2/.', 'validate');
    var respMsg = resp[2] ;
    it("should return an error message", function() {
      assert.equal(respMsg, 'm2/. is not a valid UCUM code. ' +
        'A unit code is missing between ->/<- and ->.<- in ->/.<- .');
    });
  }) ;

  describe('test unit expression dB[10.nV]',  function() {
    var uString = UnitString.getInstance();
    var resp = uString.parseString('dB[10.nV]', 'validate');
    var respUnit = resp[0];
    it("should return a decibel 10 nanovolt unit", function () {
      assert.equal(respUnit.csCode_, 'dB[10.nV]');
      assert.equal(respUnit.name_, "decibel 10 nanovolt");
      assert.equal(respUnit.isBase_, false);
      assert.equal(respUnit.ciCode_, 'DB[10.NV]');
      assert.equal(respUnit.cnvPfx_, 0.1);
    });
  });

  describe('test unit expression dB[10.nV]/m',  function() {
    var uString = UnitString.getInstance();
    var resp = uString.parseString('dB[10.nV]/m', 'validate');
    var respMsg = resp[2];
    it("should return an error message", function () {
      assert.equal(respMsg,
        'Attempt to divide non-ratio unit decibel 10 nanovolt');
    });
  });

  describe('test unit expression B[10.nV]/m',  function() {
    var uString = UnitString.getInstance();
    var resp = uString.parseString('dB[10.nV]/m', 'validate');
    var respMsg = resp[2];
    it("should return an error message", function () {
      assert.equal(respMsg,
        'Attempt to divide non-ratio unit decibel 10 nanovolt');
    });
  });

  describe('test unit expression d[m/s2/Hz^(1/2)]',  function() {
    var uString = UnitString.getInstance();
    var resp = uString.parseString('d[m/s2/Hz^(1/2)]', 'validate');
    var respUnit = resp[0] ;
    it("should return a decimeter per square seconds per square root of hertz unit", function() {
      assert.equal(respUnit.csCode_, 'd[m/s2/Hz^(1/2)]');
      assert.equal(respUnit.name_, "decimeter per square seconds per square root of hertz");
      assert.equal(respUnit.isBase_, false);
      assert.equal(respUnit.ciCode_, 'D[M/S2/HZ^(1/2)]');
      assert.equal(respUnit.cnvPfx_, 0.1 );
    });
  });

  describe('test unit expression d[m/s2/Hz^(1/2)].L',  function() {
    var uString = UnitString.getInstance();
    var resp = uString.parseString('d[m/s2/Hz^(1/2)].L', 'validate');
    var respMsg = resp[2];
    it("should return an error message", function () {
      assert.equal(respMsg, 'Attempt to multiply non-ratio unit ' +
        'decimeter per square seconds per square root of hertz failed.');
    });
  });

  describe('test for unit string /100{cells}', function() {
    const uString = UnitString.getInstance();
    const resp = uString.parseString('/100{cells}', 'validate');
    const retUnit = resp[0];
    const retOrig = resp[1];
    const respMsg = resp[2];
    it('should keep annotation in ciCode_', function() {
      assert.equal(retUnit['ciCode_'], '1/100{CELLS}');
    });
    it('should keep original string', function() {
      assert.equal('/100{cells}', retOrig);
    });
    it('should return no message', function() {
      assert.equal(0, respMsg.length);
    });
  });

}); // end test ParseString method


describe('Test makeUnit method', function() {

  describe('Test makeUnit for unit code mL', function () {
    var uString = UnitString.getInstance();
    var mlUnit = uTabs.getUnitByCode('mL');
    var origString = 'mL';
    uString.retMsg_ = [] ;
    uString.annotations_ = [] ;
    var resp = uString._makeUnit(origString, origString);
    var retUnit = resp[0];
    var retOrig = resp[1];
    it("should not change the annotations array", function () {
      assert.deepEqual([], uString.annotations_);
    });
    it("should not return any messages", function () {
      assert.deepEqual([], uString.retMsg_);
    });
    it("should not return any changes to the original string", function () {
      assert.equal(origString, retOrig, `retOrig = ${retOrig}`);
    });
    it("should return a match to the current mL unit]", function () {
      assert(mlUnit.equals(retUnit),
             `mlUnit = ${JSON.stringify(mlUnit)}\nretUnit = ${JSON.stringify(retUnit)}`);
    });
  });

  describe('Test makeUnit for unit code m[H2O]-21', function () {
    var uString = UnitString.getInstance();
    var origString = 'm[H2O]-21';
    var resp = uString._makeUnit(origString, origString);
    var retUnit = resp[0];
    var retOrig = resp[1];
    it("should return a unit with a csCode_ of m[H2O]-21", function () {
      assert.equal('m[H2O]-21', retUnit['csCode_']);
    });
    it("should return a unit with a ciCode_ of M[H2O]-21", function () {
      assert.equal('M[H2O]-21', retUnit['ciCode_']);
    });
    it("should return a unit with a name_ of meter of water column<sup>-21</sup>", function () {
      assert.equal('meter of water column<sup>-21</sup>', retUnit['name_']);
    });
    it("should return a unit with a class_ of clinical", function () {
      assert.equal('clinical', retUnit['class_']);
    });
    it("should return a unit with isBase_ false", function () {
      assert.equal(false, retUnit['isBase_']);
    });
    it("should return a unit with a magnitude_ = 1.5068353943453534e-147", function () {
      // assert.equal(1.5068353943453534e-147, retUnit['magnitude_']);
      let magString = retUnit['magnitude_'].toExponential();
      assert.equal(true, magString.endsWith('e-147') && magString.startsWith('1.50683539434535'));
    });
    it("should return a unit with a dimension vector = [21,42,-21,-0,-0,-0]", function () {
      assert.equal('21,42,-21,0,0,0,0', retUnit['dim_']['dimVec_'].toString());
    });
  });

  describe('Test makeUnit for unit code m[H2O]+21', function () {
    var uString = UnitString.getInstance();
    var origString = 'm[H2O]+21';
    var resp = uString._makeUnit(origString, origString);
    var retUnit = resp[0];
    var retOrig = resp[1];
    it("should return a unit with a csCode_ of m[H2O]21", function () {
      assert.equal('m[H2O]21', retUnit['csCode_']);
    });
    it("should return a unit with a ciCode_ of M[H2O]21", function () {
      assert.equal('M[H2O]21', retUnit['ciCode_']);
    });
    it("should return a unit with a name_ of meter of water column<sup>21</sup>", function () {
      assert.equal('meter of water column<sup>21</sup>', retUnit['name_']);
    });
    it("should return a unit with a class_ of clinical", function () {
      assert.equal('clinical', retUnit['class_']);
    });
    it("should return a unit with isBase_ false", function () {
      assert.equal(false, retUnit['isBase_']);
    });
    it("should return a unit with a magnitude_ = 6.6364249456354935e+146", function () {
      // assert.equal(6.6364249456354935e+146, retUnit['magnitude_']);
      let magString = retUnit['magnitude_'].toExponential();
      assert.equal(true, magString.endsWith('e+146') && magString.startsWith('6.63642494563549'));
    });
    it("should return a unit with a dimension vector = [-21,42,-21,-0,-0,-0]", function () {
      assert.equal('-21,-42,21,0,0,0,0', retUnit['dim_']['dimVec_'].toString());
    });
  });

  describe('Test makeUnit for unit code m[H2O]21', function () {
    var uString = UnitString.getInstance();
    var origString = 'm[H2O]21';
    var resp = uString._makeUnit(origString, origString);
    var retUnit = resp[0];
    var retOrig = resp[1];
    it("should return a unit with a csCode_ of m[H2O]21", function () {
      assert.equal('m[H2O]21', retUnit['csCode_']);
    });
    it("should a unit with a ciCode_ of M[H2O]21", function () {
      assert.equal('M[H2O]21', retUnit['ciCode_']);
    });
    it("should a unit with a name_ of meter of water column<sup>21</sup>", function () {
      assert.equal('meter of water column<sup>21</sup>', retUnit['name_']);
    });
    it("should return a unit with a class_ of clinical", function () {
      assert.equal('clinical', retUnit['class_']);
    });
    it("should return a unit with isBase_ false", function () {
      assert.equal(false, retUnit['isBase_']);
    });
    it("should return a unit with a magnitude_ = 6.6364249456354935e+146", function () {
      // assert.equal(6.6364249456354935e+146, retUnit['magnitude_']);
      let magString = retUnit['magnitude_'].toExponential();
      assert.equal(true, magString.endsWith('e+146') && magString.startsWith('6.63642494563549'));
    });
    it("should return a unit with a dimension vector = [-21,42,-21,-0,-0,-0]", function () {
      assert.equal('-21,-42,21,0,0,0,0', retUnit['dim_']['dimVec_'].toString());
    });
    it("should return a unit with blank guidance text", function() {
      assert.equal(retUnit['guidance_'], '');
    });
  });

  describe('Test makeUnit for unit code 2+10', function () {
    var uString = UnitString.getInstance();
    var origString = '2+10';
    var resp = uString._makeUnit(origString, origString);
    var retUnit = resp[0];
    var retOrig = resp[1];
    it("should return a unit with a csCode_ of 2+10", function () {
      assert.equal(retUnit['csCode_'], '2+10');
    });
    it("should return a unit with a ciCode_ of 2+10", function () {
      assert.equal(retUnit['ciCode_'], '2+10');
    });
    it("should return a unit with a magnitude_ = 1024", function () {
      assert.equal(retUnit['magnitude_'], 1024, `Expected ${retUnit['magnitude_']} to equal 1024.`);
    });
    it("should return a unit with a name_ of 2<sup>10</sup>", function () {
      assert.equal('2<sup>10</sup>', retUnit['name_']);
    });
  });

  describe('Test makeUnit for unit code 2-10', function () {
    var uString = UnitString.getInstance();
    var origString = '2-10';
    var resp = uString._makeUnit(origString, origString);
    var retUnit = resp[0];
    var retOrig = resp[1];
    it("should return a unit with a csCode_ of 2-10", function () {
      assert.equal(retUnit['csCode_'], '2-10');
    });
    it("should return a unit with a ciCode_ of 2-10", function () {
      assert.equal(retUnit['ciCode_'], '2-10');
    });
    it("should return a unit with a magnitude_ = 0.0009765625", function () {
      assert.equal(retUnit['magnitude_'],0.0009765625, `Expected ${retUnit['magnitude_']} to equal 0.0009765625.`);
    });
    it("should return a unit with a name_ of 2<sup>-10</sup>", function () {
      assert.equal('2<sup>-10</sup>', retUnit['name_']);
    });
  });

}); // end test makeUnit method

describe('Test the processParens method', function() {

  describe('Test processParens for unit code mL', function () {
    var uString = UnitString.getInstance();
    var origString = 'mL';
    var resp = uString._processParens('mL', origString);
    var retString = resp[0];
    var retOrigString = resp[1];
    var stopProcessing = resp[2];
    it("should return the unit string with no changes", function () {
      assert.equal('mL', retString);
    });
    it("should not return any messages", function () {
      assert.deepEqual([], uString.retMsg_);
    });
    it("should not return any changes to the original string", function () {
      assert.equal(origString, retOrigString, `retOrig = ${retOrigString}`);
    });
    it("should return an empty parensUnits array", function () {
      assert.deepEqual([], uString.parensUnits_);
    });
  });

  describe('Test processParens for unit code m.g(L', function () {
    "use strict";
    var uString = UnitString.getInstance();
    var origString = 'm.g(L';
    var errMsg = 'Missing close parenthesis for open parenthesis at m.g' +
      uString.openEmph_ + '(' + uString.closeEmph_ + 'L';
    var resp = uString._processParens('m.g(L', origString);
    var retString = resp[0];
    var retOrigString = resp[1];
    var stopProcessing = resp[2];
    it("should return the unit string with no changes", function () {
      assert.equal('m.g(L', retString, `retString = ${retString}`);
    });
    it("should return one error message", function () {
      assert.equal(1, uString.retMsg_.length);
    });
    it("should return the error message about a missing close parenthesis", function () {
      assert.equal(errMsg, uString.retMsg_[0]);
    });
    it("should not return any changes to the original string", function () {
      assert.equal(origString, retOrigString);
    });
    it("should return an empty parensUnits array", function () {
      assert.deepEqual([], uString.parensUnits_);
    });
  });

  describe('Test processParens for unit code m.g)', function () {
    var uString = UnitString.getInstance();
    var origString = 'm.g)';
    var errMsg = 'Missing open parenthesis for close parenthesis at m.g' +
        uString.openEmph_ + ')' + uString.closeEmph_ ;
    var resp = uString._processParens('m.g)', origString);
    var retString = resp[0];
    var retOrigString = resp[1];
    var stopProcessing = resp[2];
    it("should return the unit string with no changes", function () {
      assert.equal('m.g)', retString, `retString = ${retString}`);
    });
    it("should return one error message", function () {
      assert.equal(1, uString.retMsg_.length);
    });
    it("should return the error message about a missing open parenthesis", function () {
      assert.equal(errMsg, uString.retMsg_[0]);
    });
    it("should not return any changes to the original string", function () {
      assert.equal(origString, retOrigString, `retOrig = ${retOrigString}`);
    });
    it("should return an empty parensUnits array", function () {
      assert.deepEqual([], uString.parensUnits_);
    });
  });

  describe('Test processParens for unit code m.g/(L.(s/m)', function () {
    var uString = UnitString.getInstance();
    var origString = 'm.g(L.(s/m)';
    var errMsg = 'Missing close parenthesis for open parenthesis at m.g' +
        uString.openEmph_ + '(' + uString.closeEmph_ + 'L.(s/m)';
    var resp = uString._processParens('m.g(L.(s/m)', origString);
    var retString = resp[0];
    var retOrigString = resp[1];
    var stopProcessing = resp[2];
    it("should return the unit string with no changes", function () {
      assert.equal('m.g(L.(s/m)', retString, `retString = ${retString}`);
    });
    it("should return one error message", function () {
      assert.equal(1, uString.retMsg_.length);
    });
    it("should return the error message about a missing close parenthesis", function () {
      assert.equal(errMsg, uString.retMsg_[0]);
    });
    it("should not return any changes to the original string", function () {
      assert.equal(origString, retOrigString, `retOrig = ${retOrigString}`);
    });
    it("should return an empty parensUnits array", function () {
      assert.deepEqual([], uString.parensUnits_);
    });
  });

  describe('Test processParens for unit code m.g/(L.(s/m))', function () {
    var uString = UnitString.getInstance();
    var parseResp = uString.parseString('L.(s/m)');
    var retParenUnit = parseResp[0];
    uString.parensUnits_ = [] ;
    uString.retMsg_ = [];
    var origString = 'm.g(L.(s/m))';
    var resp = uString._processParens('m.g(L.(s/m))', origString);
    var retString = resp[0];
    var retOrigString = resp[1];
    var stopProcessing = resp[2];
    it("should return the unit string with placeholders", function () {
      assert.equal('m.g' + uString.parensFlag_ + '0' +
                   uString.parensFlag_, retString);
    });
    it("should return no error messages", function () {
      assert.equal(0, uString.retMsg_.length);
    });
    it("should not return any changes to the original string", function () {
      assert.equal(origString, retOrigString);
    });
    it("should return a parensUnits array with one unit", function () {
      assert.equal(1, uString.parensUnits_.length);
    });
    it("should return a parensUnits array with a unit of L.(s/m)", function () {
      assert.deepEqual(retParenUnit, uString.parensUnits_[0]);
    });
  });

}); // end test processParens method

describe('Test getAnnotations method', function() {

  it("should return an updated unit string and annotations array for " +
      " L{annotationString}", function() {
    var uString = UnitString.getInstance();
    var retString = uString._getAnnotations('L{annotationString}');
    assert.deepEqual(uString.retMsg_, []);
    assert.equal(retString, 'L' + uString.braceFlag_ + '0' +
                            uString.braceFlag_);
    assert.deepEqual(uString.annotations_, ['{annotationString}']);
  });

  it("should return an updated unit string and annotations array for " +
      " L{ann1}.mg{ann2}", function() {
    var uString = UnitString.getInstance();
    var retString = uString._getAnnotations('L{ann1}.mg{ann2}');
    assert.equal(retString, 'L' + uString.braceFlag_ + '0' +
                            uString.braceFlag_ + '.mg' + uString.braceFlag_ +
                            '1' + uString.braceFlag_);
    assert.deepEqual(uString.annotations_, ['{ann1}', '{ann2}']);
    assert.deepEqual(uString.retMsg_, []);
  });


  it("should return a missing brace message for 'L{annotation", function() {
    var uString = UnitString.getInstance();
    var retString = uString._getAnnotations('L{annotation');
    assert.equal(retString, 'L{annotation');
    assert.deepEqual(uString.annotations_, []);
    assert.equal(uString.retMsg_[0], 'Missing closing brace for annotation ' +
        'starting at ' + uString.openEmph_ +
        '{annotation' + uString.closeEmph_);
  });

  it("should return a missing brace message for 'Lannotation}", function() {
    var uString = UnitString.getInstance();
    var retString = uString._getAnnotations('Lannotation}');
    assert.equal(retString, 'Lannotation}');
    assert.deepEqual(uString.annotations_, []);
    assert.equal(uString.retMsg_[0], 'Missing opening brace for closing brace ' +
        'found at ' + uString.openEmph_ +
        'Lannotation}' + uString.closeEmph_);
  });

  /**
   *  Checks that the given unit string contains an annotation with an invalid
   *  character.
   * @param annotationString the annotation string to test (with braces)
   */
  function checkInvalidAnnotationCharacter(annotationString) {
    const uString = UnitString.getInstance();
    const unitTestString = 'L'+annotationString;
    const retString = uString._getAnnotations(unitTestString);
    assert.equal(uString.retMsg_[0], UnitString.INVALID_ANNOTATION_CHAR_MSG +
        uString.openEmph_ + annotationString + uString.closeEmph_);
    assert.equal(retString, unitTestString);
    assert.deepEqual(uString.annotations_, []);
  }

  it('should return an invalid character message for L{one two}', function() {
    checkInvalidAnnotationCharacter('{one two}');
  });

  it('should return an invalid character message for L{ annotation}', function() {
    checkInvalidAnnotationCharacter('{ annotation}');
  });

  it('should return an invalid character message for L{annotation }', function() {
    checkInvalidAnnotationCharacter('{annotation }');
  });

  it('should return an invalid character message for L{annotation{}', function() {
    checkInvalidAnnotationCharacter('{annotation{}');
  });

  it('should return an invalid character message for L{annotation (char 127)}', function() {
    checkInvalidAnnotationCharacter('{annotation'+String.fromCharCode(127)+'}');
  });

}); // end test getAnnotations method


describe('Test _isCodeWithExponent method', function() {

  it("should return ['m[H2O]', '-21'] for 'm[H2O]-21'", function() {
    var uString = UnitString.getInstance();
    var retArray = uString._isCodeWithExponent('m[H2O]-21');
    assert.equal(retArray[0], 'm[H2O]');
    assert.equal(retArray[1], '-21');
  });

  it("should return ['m[H2O]', '+21'] for 'm[H2O]+21'", function() {
    var uString = UnitString.getInstance();
    var retArray = uString._isCodeWithExponent('m[H2O]+21');
    assert.equal(retArray[0], 'm[H2O]');
    assert.equal(retArray[1], '+21');
  });

  it("should return ['m[H2O]', '21'] for 'm[H2O]21'", function() {
    var uString = UnitString.getInstance();
    var retArray = uString._isCodeWithExponent('m[H2O]21');
    assert.equal(retArray[0], 'm[H2O]');
    assert.equal(retArray[1], '21');
  });

  it("should return ['s', '2'] for 's2'", function() {
    var uString = UnitString.getInstance();
    var retArray = uString._isCodeWithExponent('s2');
    assert.equal(retArray[0], 's');
    assert.equal(retArray[1], '2');
  });

  it("should  return null for 'kg'", function() {
    var uString = UnitString.getInstance();
    var retArray = uString._isCodeWithExponent('kg');
    assert.equal(retArray, null);
  });

  it("should  return null for 'm[H2O]'", function() {
    var uString = UnitString.getInstance();
    var retArray = uString._isCodeWithExponent('m{H2O]');
    assert.equal(retArray, null);
  });

  it("should  return null for 'm{H2O]23X'", function() {
    var uString = UnitString.getInstance();
    var retArray = uString._isCodeWithExponent('m[H2O]23X');
    assert.equal(retArray, null);
  });

  it("should return ['2', '-21'] for '2-21'", function() {
    var uString = UnitString.getInstance();
    var retArray = uString._isCodeWithExponent('2-21');
    assert.equal(retArray[0], '2');
    assert.equal(retArray[1], '-21');
  });

}); // end test _isCodeWithExponent method

