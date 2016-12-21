/**
 * Mocha tests for the built module available as a bower task.  It tests the
 * unit expression validation and conversion functions at the top level only.
 *
 * Run from the command line with 'mocha testmodule.spec.js' or 'grunt test'
 */

var assert = require('assert');
var Utils = require("../source-es5/ucumLhcUtils.js").UcumLhcUtils;

var utils = Utils.getInstance();

describe('Validate_m2/g4', function() {
    describe('Validation Return Object', function() {
      var returnObj = utils.validUnitString('m2/g4');
      it("should return status of valid", function() {
        assert.equal('valid', returnObj['status']);
      });

      it("should return a ucumCode = m2/g4", function() {
        assert.equal("m2/g4", returnObj['ucumCode']);
      });

      it("should return empty message array", function() {
        assert.equal(0, returnObj['msg'].length);
      });
    });
});

describe('Validate_m2/acr', function() {
  describe('Validation Return Object', function() {
    var returnObj = utils.validUnitString('m2/acr');

    it("should return status = invalid", function() {
      assert.equal("invalid", returnObj['status']);
    });

    it("should return a ucumCode = m2/acr", function() {
      assert.equal("m2/acr", returnObj['ucumCode']);
    });

    it("should return error message = Unable to find unit for cr", function() {
      assert.equal("Unable to find unit for m2/acr", returnObj['msg'][0]);
    });
  });
});

describe('Convert fathoms to inchs', function() {
  describe('Conversion Return Object', function() {

    var returnObj = utils.convertUnitTo('[fth_us]', 27, '[in_us]', 0);

    it("should return status = succeeded", function() {
      assert.equal('succeeded', returnObj['status']);
    });

    it("should return toVal = 1944", function() {
      assert.equal(1944, returnObj['toVal']);
    });

    it("should return msg = 27 [fth_us] = 1944 [in_us]", function() {
      assert.equal("27 [fth_us] = 1944 [in_us]", returnObj['msg'][0]);
    });
  });
});

describe('Convert fathoms to bars', function() {
  describe('Conversion Return Object', function() {

    var returnObj = utils.convertUnitTo('[fth_us]', 27, 'bar', 0);

    it("should return status = failed", function() {
      assert.equal('failed', returnObj['status']);
    });

    it("should return toVal = null", function() {
      assert.equal(null, returnObj['toVal']);
    });

    it("should return msg = Sorry.  [fth_us] cannot be converted to bar.", function() {
      assert.equal("Sorry.  [fth_us] cannot be converted to bar.",
                   returnObj['msg'][0]);
    });
  });
});

describe('Convert fathoms to acrs', function() {
  describe('Conversion Return Object', function() {

    var returnObj = utils.convertUnitTo('[fth_us]', 27, 'acr', 0);

    it("should return status = failed", function() {
      assert.equal('failed', returnObj['status']);
    });

    it("should return toVal = null", function() {
      assert.equal(null, returnObj['toVal']);
    });


    it("should return error message = Unable to find unit for acr", function() {
      assert.equal("Unable to find unit for acr", returnObj['msg'][0]);
    });
  });
});
