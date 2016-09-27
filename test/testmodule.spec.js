/**
 * Mocha tests for the built module available as a bower task.  It tests the
 * unit expression validation and conversion functions at the top level only.
 *
 * Run from the command line with 'mocha testmodule.js' or 'grunt test'
 */

var assert = require('assert');
var Utils = require("../source-es5/ucumLhcUtils.js").UcumLhcUtils;

var utils = Utils.getInstance();

describe('Validate_m2/g4', function() {
    describe('Validation Return Array', function() {
      var returnArray = utils.validUnitString('m2/g4');
      it("should return unit with name = meter<sup>2</sup>/gram<sup>4</sup>", function() {
        assert.equal("meter<sup>2</sup>/gram<sup>4</sup>", returnArray[0].name_);
      });

      it("should return empty message", function() {
        assert.equal("", returnArray[1]);
      });
    });
});

describe('Validate_m2/acr', function() {
  describe('Validation Return Array', function() {
    var returnArray = utils.validUnitString('m2/acr');
    it("should return no unit", function() {
      assert.equal(null, returnArray[0]);
    });

    it("should return error message = Unable to find unit for cr", function() {
      assert.equal("Unable to find unit for cr", returnArray[1]);
    });
  });
});

describe('Convert fathoms to inch, bar and acr units', function() {
  describe('Conversion Return Message', function() {

    it("should return 27 fathom units = 1944 inch units", function() {
      var returnMsg = utils.convertUnitTo('[fth_us]', 27, '[in_us]', 0);
      assert.equal("27 fathom units = 1944 inch units.", returnMsg[0]);
    });

    it("should return error message = Sorry.  fathom units cannot be converted to bar units", function() {
      var returnMsg = utils.convertUnitTo('[fth_us]', 27, 'bar', 0);
      assert.equal("Sorry.  fathom units cannot be converted to bar units.", returnMsg[0]);
    });

    it("should return error message = Unable to find unit for cr", function() {
      var returnMsg = utils.convertUnitTo('[fth_us]', 27, 'acr', 0);
      assert.equal("Unable to find unit for cr", returnMsg[0]);
    });
  });
});
