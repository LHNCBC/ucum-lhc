/**
 * Mocha tests tor the UcumInternalUtils class.
 *
 * Run from the command line with 'mocha testUcumInternalUtils.spec.js'
 * or 'grunt test'
 */
var assert = require('assert');
//var Utils = require("../source-es5/ucumInternalUtils.js").UcumInternalUtils;
var UnitTables = require("../source-es5/unitTables.js").UnitTables;
var UcumJsonDefs = require('../source-es5/ucumJsonDefs.js').UcumJsonDefs ;

var uDefs = UcumJsonDefs.getInstance();
uDefs.loadJsonDefs();
//var utils = Utils.getInstance();
var uTabs = UnitTables.getInstance();

import * as utils from "../source-es5/ucumInternalUtils.js";

describe('Test isNumericString', function() {
  it("should return false for no parameter passed", function() {
    var noParam = utils.isNumericString();
    assert.equal(noParam, false);
  });
  it("should return true for a number passed in", function() {
    "use strict";
    var numParam = utils.isNumericString(234.5);
    assert.equal(numParam, true);
  });
  it("should return false for a string containing blanks", function() {
    "use strict";
    var blankParam = utils.isNumericString(' ');
    assert.equal(blankParam, false);
  }) ;
  it("should return false for a string containing numbers & non-numbers",
    function() {
    "use strict";
    var mixedParam = utils.isNumericString('j65');
    assert.equal(mixedParam, false);
    }) ;
  it("should return true for a string containing just digits", function() {
    var digitsParam = utils.isNumericString('834829');
    assert.equal(digitsParam, true);
  }) ;
  it("should return true for a string containing a + followed by digits",
    function() {
    var posParam = utils.isNumericString('+23');
    assert.equal(posParam, true);
  });
  it("should return false for a string containing digits followed by a +",
    function() {
      var badPosParam = utils.isNumericString('32+');
      assert.equal(badPosParam, false);
  });
  it("should return true for a string containing a - followed by digits",
    function() {
      var negParam = utils.isNumericString('-23');
      assert.equal(negParam, true);
    });
  it("should return false for a string containing digits followed by a +",
    function() {
      var badNegParam = utils.isNumericString('32+');
      assert.equal(badNegParam, false);
    });
  it("should return false for a string containing just decimal points",
    function() {
      var badDecParam = utils.isNumericString('...');
      assert.equal(badDecParam, false);
    });
  it("should return false for a string containing multiple decimal points",
    function() {
      var multDecParam = utils.isNumericString('1.2.3.');
      assert.equal(multDecParam, false);
    });
}); // end isNumericString tests


describe('Test getSynonyms method', function() {
  it("should return an error for no term specified", function() {
    var noTermResp = utils.getSynonyms();
    assert.equal(noTermResp['units'], null);
    assert.equal(noTermResp['status'], 'error');
    assert.equal(noTermResp['msg'], 'Unable to find unit by ' +
                 'synonym because no synonym was provided.');
  });
  it("should return a message when no synonym is found", function() {
    var lavResp = utils.getSynonyms('lavender');
    assert.equal(lavResp['units'], null);
    assert.equal(lavResp['status'], 'failed');
    assert.equal(lavResp['msg'], 'Unable to find any units with ' +
      'synonym = lavender');
  });
  it("should return a unit array for one unit found", function() {
    var pfuUnit = uTabs.getUnitByCode('[PFU]');
    var pfuResp = utils.getSynonyms('PFU');
    assert.equal(pfuResp['units'].length, 1);
    assert.equal(pfuResp['units'][0]["code"], pfuUnit.csCode_);
    assert.equal(pfuResp['units'][0]["name"], pfuUnit.name_);
    assert.equal(pfuResp['units'][0]["guidance"], pfuUnit.guidance_)
    assert.equal(pfuResp['status'], 'succeeded');
    assert.equal(pfuResp['msg'], null);
  });
  it("should return a unit array for multiple units found", function() {
    var picaResp = utils.getSynonyms('pica');
    assert(picaResp['units'].length > 1);
    assert.equal(picaResp['status'], 'succeeded');
    assert.equal(picaResp['msg'], null);
  });
}); // end getSynonyms tests

