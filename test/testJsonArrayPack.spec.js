/**
 * Mocha tests for the jsonArrayPack functions.
 *
 * Run from the command line with 'mocha testJsonArrayPack.js' or 'npm run test'
 */

var assert = require('assert');
var jsonArrayPack = require("../source-cjs/jsonArrayPack.js");

describe('Test jsonArrayPack functions', function () {

  it("unpackArray after packArray should return same object", function () {
    var obj = null;
    assert.equal(jsonArrayPack.unpackArray(jsonArrayPack.packArray(obj)), obj);

    obj = [
      {
        "isBase_": true,
        "name_": "meter",
        "csCode_": "m",
        "ciCode_": "M",
        "property_": "length",
        "magnitude_": 1,
        "dim_": {
          "dimVec_": [
            1,
            0,
            0,
            0,
            0,
            0,
            0
          ]
        },
        "printSymbol_": "m",
        "class_": null,
        "isMetric_": false,
        "variable_": "L",
        "cnv_": null,
        "cnvPfx_": 1,
        "isSpecial_": false,
        "isArbitrary_": false,
        "moleExp_": 0,
        "synonyms_": "meters; metres; distance",
        "source_": "UCUM",
        "loincProperty_": "Len",
        "category_": "Clinical",
        "guidance_": "unit of length = 1.09361 yards",
        "csUnitString_": null,
        "ciUnitString_": null,
        "baseFactorStr_": null,
        "baseFactor_": null,
        "defError_": false
      },
      {
        "isBase_": true,
        "name_": "second - time",
        "csCode_": "s",
        "ciCode_": "S",
        "property_": "time",
        "magnitude_": 1,
        "dim_": {
          "dimVec_": [
            0,
            1,
            0,
            0,
            0,
            0,
            0
          ]
        },
        "printSymbol_": "s",
        "class_": null,
        "isMetric_": false,
        "variable_": "T",
        "cnv_": null,
        "cnvPfx_": 1,
        "isSpecial_": false,
        "isArbitrary_": false,
        "moleExp_": 0,
        "synonyms_": "seconds",
        "source_": "UCUM",
        "loincProperty_": "Time",
        "category_": "Clinical",
        "guidance_": "",
        "csUnitString_": null,
        "ciUnitString_": null,
        "baseFactorStr_": null,
        "baseFactor_": null,
        "defError_": false
      }
    ];
    assert.deepStrictEqual(jsonArrayPack.unpackArray(jsonArrayPack.packArray(obj)), obj);

    obj = [
      {
        "code_": "n",
        "ciCode_": "N",
        "name_": "nano",
        "printSymbol_": "n",
        "value_": 1e-9,
        "exp_": "-9"
      },
      {
        "code_": "p",
        "ciCode_": "P",
        "name_": "pico",
        "printSymbol_": "p",
        "value_": 1e-12,
        "exp_": "-12"
      }
    ];
    var a = jsonArrayPack.unpackArray(jsonArrayPack.packArray(obj));
    assert.deepStrictEqual(a, obj);
  });
});