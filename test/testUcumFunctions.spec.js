/**
 * Mocha tests for the UcumFunctions class (the special unit conversion
 * functions).
 *
 * Run from the command line with 'mocha testUcumFunctions.spec.js' or
 * 'grunt test'
 */

var assert = require('assert');
var funcs = require('../source-cjs/ucumFunctions.js').default;
var { ucumJsonDefs } = require('../source-cjs/ucumJsonDefs.js');
var UTables = require('../source-cjs/unitTables.js').UnitTables;

describe('Test UcumFunctions isDefined method', function() {

  ['100tan', 'tanTimes100', 'TANTIMES100', 'lgTimes2', 'Cel', 'hpX', 'hpC',
   'hpM', 'hpQ'].forEach(
    function(fname) {
      it(`should return true for the defined function ${fname}`, function() {
        assert.strictEqual(funcs.isDefined(fname), true);
      });
    });

  ['noSuchFunction', 'toString', 'constructor', '__proto__'].forEach(function(fname) {
    it(`should return false for the undefined function ${fname}`, function() {
      assert.strictEqual(funcs.isDefined(fname), false);
    });
  });

  it('should be true for the conversion function of every unit', function() {
    ucumJsonDefs.loadJsonDefs();
    const cnvNames = new Set();
    UTables.getInstance().allUnitsByDef().forEach(function(unit) {
      if (unit.cnv_)
        cnvNames.add(unit.cnv_);
    });
    assert.ok(cnvNames.size > 0, 'No units with conversion functions found');
    const undefinedNames = [...cnvNames].filter(name => !funcs.isDefined(name));
    assert.deepStrictEqual(undefinedNames, []);
  });
});

describe('Test UcumFunctions forName method', function() {

  it('should return the 100tan functions for tanTimes100 (any case)', function() {
    const tan = funcs.forName('100tan');
    assert.strictEqual(funcs.forName('tanTimes100'), tan);
    assert.strictEqual(funcs.forName('TANTIMES100'), tan);
  });

  describe('homeopathic potency functions', function() {
    const EPSILON = 1e-12;
    const hpCases = [
      // [fname, dilution ratio, potency]
      ['hpX', 0.1, 1],
      ['hpX', 1e-6, 6],
      ['hpC', 0.01, 1],
      ['hpC', 1e-6, 3],
      ['hpM', 0.001, 1],
      ['hpM', 1e-6, 2],
      ['hpQ', 1 / 50000, 1],
      ['hpQ', 1 / 2500000000, 2]
    ];

    hpCases.forEach(function([fname, ratio, potency]) {
      it(`should convert between the ratio ${ratio} and ${potency} ${fname}`,
        function() {
          const f = funcs.forName(fname);
          const toVal = f.cnvTo(ratio);
          assert.ok(Math.abs(toVal - potency) < EPSILON,
            `Expected cnvTo(${ratio}) to be ${potency} but got ${toVal}`);
          const fromVal = f.cnvFrom(potency);
          assert.ok(Math.abs(fromVal - ratio) / ratio < EPSILON,
            `Expected cnvFrom(${potency}) to be ${ratio} but got ${fromVal}`);
        });
    });
  });

  ['noSuchFunction', 'toString'].forEach(function(fname) {
    it(`should throw an error for the undefined function ${fname}`, function() {
      assert.throws(() => funcs.forName(fname), {
        message: `Requested function ${fname} is not defined`
      });
    });
  });
});

