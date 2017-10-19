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
      var returnObj = utils.validateUnitString('m2/g4');
      it("should return status of valid", function() {
        assert.equal(returnObj['status'], 'valid', "status = " +
                     returnObj['status'] ? `${returnObj['status']}` : 'null');
      });

      it("should return a ucumCode = m2/g4", function() {
        assert.equal(returnObj['ucumCode'], "m2/g4", "ucumCode = " +
                     returnObj['ucumCode'] ? `${returnObj['ucumCode']}` : 'null');
      });

      it("should return empty message array", function() {
        assert.equal(returnObj['msg'].length, 0, "msg = " +
                     returnObj['msg'] ? `${returnObj['msg'].join()}` : 'null');
      });
    });
});

describe('Validate_m2/acr', function() {
  describe('Validation Return Object', function() {
    var returnObj = utils.validateUnitString('m2/acr');
    it("should return status = invalid", function() {
      assert.equal(returnObj['status'], "invalid", "status = " +
                   returnObj['status'] ? `${returnObj['status']}` : 'null');
    });

    it("should return a null ucumCode", function() {
      assert.equal(returnObj['ucumCode'], null, "ucumCode = " +
                   returnObj['ucumCode'] ? `${returnObj['ucumCode']}` : 'null');
    });

    it("should return error message = m2/acr is not a valid unit expression.", function() {
      assert.equal(returnObj['msg'][0],
                   "Unable to find unit for acr", "msg = " +
                   returnObj['msg'] ? `${returnObj['msg'].join()}` : 'null');
    });
  });
});

describe('Convert fathoms to inches', function() {
  describe('Conversion Return Object', function() {

    var returnObj = utils.convertUnitTo('[fth_us]', 27, '[in_us]');

    it("should return status = succeeded", function() {
      assert.equal(returnObj['status'], 'succeeded',  "status = " +
                   returnObj['status'] ? `${returnObj['status']}` : 'null');
    });

    it("should return toVal = 1943.9999999999998", function() {
      assert.equal(returnObj['toVal'], 1943.9999999999998, "toVal = " +
                   returnObj['toVal'] ? `${returnObj['toVal']}` : 'null');
    });

    it("should return an empty msg array", function() {
      assert.equal(returnObj['msg'].length, 0, "msg = " +
                   `${JSON.stringify(returnObj['msg'])}`);
    }) ;

    it("should return a fromUnit object with name = fathom - US", function() {
      assert.equal(returnObj['fromUnit'].name_, 'fathom - US', "name = " +
          (returnObj['fromUnit'] && returnObj['fromUnit'].name_) ?
          `${returnObj['fromUnit'.name_]}` : 'null');
    }) ;

    it("should return a toUnit object with name = inch - US", function() {
      assert.equal(returnObj['toUnit'].name_, 'inch - US', "name = " +
          (returnObj['toUnit'] && returnObj['toUnit'].name_) ?
          `${returnObj['toUnit'.name_]}` : 'null');
    })

  });
});

describe('Convert fathoms to bars', function() {
  describe('Conversion Return Object', function() {

    var returnObj = utils.convertUnitTo('[fth_us]', 27, 'bar');

    it("should return status = failed", function() {
      assert.equal(returnObj['status'], 'failed', "status = " +
                   returnObj['status'] ? `${returnObj['status']}` : 'null');
    });

    it("should return toVal = null", function() {
      assert.equal(returnObj['toVal'], null, "toVal = " +
                   returnObj['toVal'] ? `${returnObj['toVal']}` : 'null');
    });

    it("should return msg = Sorry.  [fth_us] cannot be converted to bar.", function() {
      assert.equal(returnObj['msg'][0],
                   "Sorry.  [fth_us] cannot be converted to bar.", "msg = " +
                   returnObj['msg'] ? `${returnObj['msg'].join()}` : 'null');

    });

    it("should return a null fromUnit value", function() {
      assert.equal(returnObj['fromUnit'], null, "fromUnit = " +
                   returnObj['fromUnit'] ?
                       `${JSON.stringify(returnObj['fromUnit'])}` : 'null');
    }) ;

    it("should return a null toUnit value", function() {
      assert.equal(returnObj['toUnit'], null, "toUnit = " +
                   returnObj['toUnit'] ?
                    `${JSON.stringify(returnObj['toUnit'])}` : 'null');
    })
  });
});

describe('Convert fathoms to acrs', function() {
  describe('Conversion Return Object', function() {

    var returnObj = utils.convertUnitTo('[fth_us]', 27, 'acr');

    it("should return status = failed", function() {
      assert.equal(returnObj['status'], 'failed', "status = " +
                   returnObj['status'] ? `${returnObj['status']}` : 'null');;
    });

    it("should return toVal = null", function() {
      assert.equal(returnObj['toVal'], null, "toVal = " +
                   returnObj['toVal'] ? `${returnObj['toVal']}` : 'null');
    });

    it("should return error message = acr is not a valid unit expresion.", function() {
      assert.equal(2, returnObj['msg'].length);
      assert.equal("Sorry - an error occurred while trying to validate acr.",
                   returnObj['msg'][0], "msg = " + returnObj['msg']?
                   `${returnObj['msg'][0]}` : 'null');
      assert.equal("acr is probably not a valid expression.", returnObj['msg'][1],
                   "msg = " + returnObj['msg']? `${returnObj['msg'][1]}` : 'null');
    });

    it("should return a null fromUnit value", function() {
      assert.equal(returnObj['fromUnit'], null, "fromUnit = " +
                   returnObj['fromUnit'] ?
                   `${JSON.stringify(returnObj['fromUnit'])}` : 'null');
    }) ;

    it("should return a null toUnit value", function() {
      assert.equal(returnObj['toUnit'], null, "toUnit = " +
                   returnObj['toUnit'] ?
                   `${JSON.stringify(returnObj['toUnit'])}` : 'null');
    })
  });
});
