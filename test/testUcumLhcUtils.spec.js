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

var uTabs = UTables.getInstance();
var uDefs = UcumJsonDefs.getInstance();
uDefs.loadJsonDefs();

var utils = Utils.getInstance();

describe('Test checkSynonyms method', function() {

  it("should return an error message for no synonym supplied", function() {

    var resp1 = utils.checkSynonyms();
    assert.equal('error', resp1['status']);
    assert.equal('No term specified for synonym search.', resp1['msg']);
  });

  it("should return a message for no synonym found", function() {

    var resp2 = utils.checkSynonyms('Barack');
    assert.equal('failed', resp2['status']);
    assert.equal('Unable to find any units with synonym = Barack', resp2['msg']);
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
    uTabs.printSynonyms();
  });

});




