/**
 * Mocha tests for the built module both with and without browserified code.
 * The non-browserified version is the npm library version available for
 * download where browserified code could get in the way of projects that
 * either don't need browserified code or have their own browser mechanisms in
 * place.   The browserified code is available as a bower module for download
 * for projects that want to use it as-is with browser-based projects.
 *
 * This loops through both versions of the the unit expression validation and
 * conversion functions at the top level of the utilities code only - which is
 * what calling code should be using..
 *
 * Run from the command line with 'mocha testModule.spec.js' or 'grunt test'
 */

var assert = require('assert');
var pkgs = ['../source-es5/ucumPkg.js', '../browser-dist/ucum-lhc.js'];

for (var u=0; u < pkgs.length; u++) {
  var ucum = require(pkgs[u]);
  var utils = ucum.UcumLhcUtils.getInstance();

  describe('Validate_m2/g4', function () {
    describe('Validation Return Object', function () {
      var returnObj = utils.validateUnitString('m2/g4');
      it("should return status of valid", function () {
        assert.equal(returnObj['status'], 'valid');
      });
      it("should return a ucumCode = m2/g4", function () {
        assert.equal(returnObj['ucumCode'], "m2/g4");
      });
      it("should return empty message array", function () {
        assert.equal(returnObj['msg'].length, 0);
      });
    });
  });

  describe('Validate_m2/acr', function () {
    describe('Validation Return Object', function () {
      var returnObj = utils.validateUnitString('m2/acr');
      it("should return status = invalid", function () {
        assert.equal(returnObj['status'], "invalid");
      });
      it("should return a null ucumCode", function () {
        assert.equal(returnObj['ucumCode'], null);
      });
      it("should return error message = m2/acr is not a valid unit expression.", function () {
        assert.equal(returnObj['msg'][0], "acr is not a valid UCUM code.");
      });
    });
  });

  describe('Convert fathoms to inches', function () {
    describe('Conversion Return Object', function () {
      var returnObj = utils.convertUnitTo('[fth_us]', 27, '[in_us]');
      it("should return status = succeeded", function () {
        assert.equal(returnObj['status'], 'succeeded');
      });
      it("should return toVal = 1943.9999999999998", function () {
        assert.equal(returnObj['toVal'], 1943.9999999999998);
      });
      it("should return an empty msg array", function () {
        assert.equal(returnObj['msg'].length, 0);
      });
      it("should return a fromUnit object with name = fathom - US", function () {
        assert.equal(returnObj['fromUnit'].name_, 'fathom - US');
      });
      it("should return a toUnit object with name = inch - US", function () {
        assert.equal(returnObj['toUnit'].name_, 'inch - US');
      })
    });
  });

  describe('Convert fathoms to bars', function () {
    describe('Conversion Return Object', function () {
      var returnObj = utils.convertUnitTo('[fth_us]', 27, 'bar');
      it("should return status = failed", function () {
        assert.equal(returnObj['status'], 'failed');
      });
      it("should return toVal = null", function () {
        assert.equal(returnObj['toVal'], null);
      });
      it("should return msg = Sorry.  [fth_us] cannot be converted to bar.", function () {
        assert.equal(returnObj['msg'][0],
          "Sorry.  [fth_us] cannot be converted to bar.");
      });
      it("should return a null fromUnit value", function () {
        assert.equal(returnObj['fromUnit'], null);
      });
      it("should return a null toUnit value", function () {
        assert.equal(returnObj['toUnit'], null);
      })
    });
  });

  describe('Convert fathoms to acrs', function () {
    describe('Conversion Return Object', function () {
      var returnObj = utils.convertUnitTo('[fth_us]', 27, 'acr');
      it("should return status = failed", function () {
        assert.equal(returnObj['status'], 'failed', "status = " +
        returnObj['status'] ? `${returnObj['status']}` : 'null');
      });
      it("should return toVal = null", function () {
        assert.equal(returnObj['toVal'], null, "toVal = " +
        returnObj['toVal'] ? `${returnObj['toVal']}` : 'null');
      });
      it("should return error message = acr is not a valid unit code.", function () {
        assert.equal(2, returnObj['msg'].length);
        assert.equal("acr is not a valid UCUM code.",
          returnObj['msg'][0], "msg = " + returnObj['msg'] ?
            `${returnObj['msg'][0]}` : 'null');
        assert.equal("Unable to find a unit for acr, so no conversion could be " +
          "performed.", returnObj['msg'][1],
          "msg = " + returnObj['msg'] ? `${returnObj['msg'][1]}` : 'null');
      });
      it("should return a null fromUnit value", function () {
        assert.equal(returnObj['fromUnit'], null, "fromUnit = " +
        returnObj['fromUnit'] ?
          `${JSON.stringify(returnObj['fromUnit'])}` : 'null');
      });
      it("should return a null toUnit value", function () {
        assert.equal(returnObj['toUnit'], null, "toUnit = " +
        returnObj['toUnit'] ?
          `${JSON.stringify(returnObj['toUnit'])}` : 'null');
      })
    });
  });

  describe('Test checkSynonyms', function () {
    describe('Get synonyms for month', function () {
      var resp = utils.checkSynonyms('month');
      it("should return multiple synonyms and at least mo", function () {
        assert.equal(resp.status, 'succeeded');
        assert(resp.units.length > 0);
        var retUnits = resp.units;
        var foundMonth = false;
        for (var i = 0; i < retUnits.length && !foundMonth; i++) {
          foundMonth = retUnits[i].code === 'mo';
        }
        assert(foundMonth);
      });
    });

    describe('Request synonyms for XmU72L', function () {
      var resp = utils.checkSynonyms('XmU72L');
      it("should return no synonyms", function () {
        assert.equal(resp.status, 'failed');
        assert(!resp.units);
      });
    });
  });
}

