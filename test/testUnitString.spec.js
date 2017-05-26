/**
 * Mocha tests for the UnitString class.
 *
 * Run from the command line with 'mocha testUnitString.js' or 'grunt test'
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

describe('Test parseString method', function() {

  describe('Test valid single unit string (cal)', function() {
    var calUnit = uTabs.getUnitByCode('cal');
    var resp = uString.parseString('cal');
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
    var gUnit = uTabs.getUnitByCode('g');
    var retMsg = [];
    var origString = '/g';
    var resp = uString.parseString('/g');
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
}); // end test ParseString method


describe('Test makeUnit method', function() {

  describe('Test makeUnit for unit code mL', function () {
    var mlUnit = uTabs.getUnitByCode('mL');
    var annotations = [];
    var retMsg = [];
    var origString = 'mL';
    var resp = uString.makeUnit(origString, annotations, retMsg, origString);
    var retUnit = resp[0];
    var retOrig = resp[1];
    it("should not change the annotations array", function () {
      assert.deepEqual([], annotations);
    });
    it("should not return any messages", function () {
      assert.deepEqual([], retMsg, `retMsg = ${JSON.stringify(retMsg)}`);
    });
    it("should not return any changes to the original string", function () {
      assert.equal(origString, retOrig, `retOrig = ${retOrig}`);
    });
    it("should return a match to the current mL unit]", function () {
      assert(mlUnit.equals(retUnit),
             `mlUnit = ${JSON.stringify(mlUnit)}\nretUnit = ${JSON.stringify(retUnit)}`);
    });
  });

}); // end test makeUnit method

describe('Test the processParens method', function() {

  describe('Test processParens for unit code mL', function () {
    var parensUnits = [];
    var retMsg = [];
    var origString = 'mL';
    var resp = uString.processParens('mL', origString, parensUnits, retMsg);
    var retString = resp[0];
    var retOrigString = resp[1];
    var stopProcessing = resp[2];
    it("should return the unit string with no changes", function () {
      assert.equal('mL', retString, `retString = ${retString}`);
    });
    it("should not return any messages", function () {
      assert.deepEqual([], retMsg, `retMsg = ${JSON.stringify(retMsg)}`);
    });
    it("should not return any changes to the original string", function () {
      assert.equal(origString, retOrigString, `retOrig = ${retOrigString}`);
    });
    it("should return an empty parensUnits array", function () {
      assert.deepEqual([], parensUnits,
           `parensUnits = ${JSON.stringify(parensUnits)}`);
    });
  });

  describe('Test processParens for unit code m.g(L', function () {
    var parensUnits = [];
    var retMsg = [];
    var origString = 'm.g(L';
    var errMsg = 'Missing close parenthesis for open parenthesis at m.g(L.';
    var resp = uString.processParens('m.g(L', origString, parensUnits, retMsg);
    var retString = resp[0];
    var retOrigString = resp[1];
    var stopProcessing = resp[2];
    it("should return the unit string with no changes", function () {
      assert.equal('m.g(L', retString, `retString = ${retString}`);
    });
    it("should return one error message", function () {
      assert.equal(1, retMsg.length, `retMsg = ${JSON.stringify(retMsg)}`);
    });
    it("should return the error message about a missing close parenthesis", function () {
      assert.equal(errMsg, retMsg[0], `retMsg = ${JSON.stringify(retMsg)}`);
    });
    it("should not return any changes to the original string", function () {
      assert.equal(origString, retOrigString, `retOrig = ${retOrigString}`);
    });
    it("should return an empty parensUnits array", function () {
      assert.deepEqual([], parensUnits,
          `parensUnits = ${JSON.stringify(parensUnits)}`);
    });
  });

  describe('Test processParens for unit code m.g)', function () {
    var parensUnits = [];
    var retMsg = [];
    var origString = 'm.g)';
    var errMsg = 'Missing open parenthesis for close parenthesis at m.g).';
    var resp = uString.processParens('m.g)', origString, parensUnits, retMsg);
    var retString = resp[0];
    var retOrigString = resp[1];
    var stopProcessing = resp[2];
    it("should return the unit string with no changes", function () {
      assert.equal('m.g)', retString, `retString = ${retString}`);
    });
    it("should return one error message", function () {
      assert.equal(1, retMsg.length, `retMsg = ${JSON.stringify(retMsg)}`);
    });
    it("should return the error message about a missing open parenthesis", function () {
      assert.equal(errMsg, retMsg[0], `retMsg = ${JSON.stringify(retMsg)}`);
    });
    it("should not return any changes to the original string", function () {
      assert.equal(origString, retOrigString, `retOrig = ${retOrigString}`);
    });
    it("should return an empty parensUnits array", function () {
      assert.deepEqual([], parensUnits,
          `parensUnits = ${JSON.stringify(parensUnits)}`);
    });
  });

  describe('Test processParens for unit code m.g/(L.(s/m)', function () {
    var parensUnits = [];
    var retMsg = [];
    var origString = 'm.g(L.(s/m)';
    var errMsg = 'Missing close parenthesis for open parenthesis at m.g(L.(s/m).';
    var resp = uString.processParens('m.g(L.(s/m)', origString, parensUnits, retMsg);
    var retString = resp[0];
    var retOrigString = resp[1];
    var stopProcessing = resp[2];
    it("should return the unit string with no changes", function () {
      assert.equal('m.g(L.(s/m)', retString, `retString = ${retString}`);
    });
    it("should return one error message", function () {
      assert.equal(1, retMsg.length, `retMsg = ${JSON.stringify(retMsg)}`);
    });
    it("should return the error message about a missing close parenthesis", function () {
      assert.equal(errMsg, retMsg[0], `retMsg = ${JSON.stringify(retMsg)}`);
    });
    it("should not return any changes to the original string", function () {
      assert.equal(origString, retOrigString, `retOrig = ${retOrigString}`);
    });
    it("should return an empty parensUnits array", function () {
      assert.deepEqual([], parensUnits,
          `parensUnits = ${JSON.stringify(parensUnits)}`);
    });
  });

  describe('Test processParens for unit code m.g/(L.(s/m))', function () {
    var parensUnits = [];
    var parseResp = uString.parseString('L.(s/m)');
    var retParenUnit = parseResp[0];
    var retMsg = [];
    var origString = 'm.g(L.(s/m))';
    var errMsg = 'Missing close parenthesis for open parenthesis at m.g(L.(s/m).';
    var resp = uString.processParens('m.g(L.(s/m))', origString, parensUnits, retMsg);
    var retString = resp[0];
    var retOrigString = resp[1];
    var stopProcessing = resp[2];
    it("should return the unit string with placeholders", function () {
      assert.equal('m.gparens_placeholder0parens_placeholder', retString, `retString = ${retString}`);
    });
    it("should return no error messages", function () {
      assert.equal(0, retMsg.length, `retMsg = ${JSON.stringify(retMsg)}`);
    });
    it("should not return any changes to the original string", function () {
      assert.equal(origString, retOrigString, `retOrig = ${retOrigString}`);
    });
    it("should return a parensUnits array with one unit", function () {
      assert.equal(1, parensUnits.length,
          `parensUnits = ${JSON.stringify(parensUnits)}`);
    });
    it("should return a parensUnits array with a unit of L.(s/m)", function () {
      assert.deepEqual(retParenUnit, parensUnits[0],
          `parensUnits = ${JSON.stringify(parensUnits)}`);
    });
  });

}); // end test processParens method




