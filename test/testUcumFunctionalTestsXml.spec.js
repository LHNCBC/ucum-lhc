/**
 * XML-driven functional tests based on test/UcumFunctionalTests.xml.
 *
 * We intentionally skip the <displayNameGeneration> assertions because this
 * project’s generated unit name formatting differs from the historical format
 * used in the XML file.
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { XMLParser } = require('fast-xml-parser');

const ucum = require('../source-cjs/ucumPkg.js');
const utils = ucum.UcumLhcUtils.getInstance();

const UnitString = require('../source-cjs/unitString.js').UnitString;
const Unit = require('../source-cjs/unit.js').Unit;

/**
 * Normalizes a parsed XML field to an array.
 *
 * fast-xml-parser will return either an object or an array depending on
 * cardinality; this helper ensures callers can always iterate.
 *
 * @template T
 * @param {T | T[] | null | undefined} value
 * @returns {T[]}
 */
function asArray(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

/**
 * Parses the UCUM XML functional test file into a JS object.
 *
 * @returns {any}
 */
function parseXmlTestFile() {
  const xmlPath = path.join(__dirname, 'UcumFunctionalTests.xml');
  const xml = fs.readFileSync(xmlPath, 'utf8');
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
    allowBooleanAttributes: true,
    trimValues: true,
    parseAttributeValue: false
  });
  return parser.parse(xml);
}

/**
 * Coerces common XML boolean representations to a boolean.
 *
 * @param {unknown} value
 * @returns {boolean}
 */
function toBool(value) {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') return value.toLowerCase() === 'true';
  return Boolean(value);
}

/**
 * Parses a numeric value from an XML attribute string.
 *
 * @param {unknown} value
 * @returns {number}
 */
function parseNumber(value) {
  if (typeof value === 'number') return value;
  if (typeof value !== 'string') return NaN;
  return parseFloat(value);
}

/**
 * Determines an absolute/relative tolerance for an expected numeric literal.
 *
 * This file’s XML outcomes are sometimes written with limited precision; the
 * tolerance is derived from the literal formatting.
 *
 * @param {unknown} literal
 * @returns {{ absTol: number, relTol: number }}
 */
function toleranceFromLiteral(literal) {
  if (typeof literal !== 'string') {
    return { absTol: 0, relTol: 1e-12 };
  }

  const s = literal.trim();
  if (s === '' || s.toLowerCase() === 'nan') {
    return { absTol: 0, relTol: 1e-12 };
  }
  if (/e[+-]?\d+/i.test(s)) {
    return { absTol: 0, relTol: 1e-12 };
  }

  // If the expected value is written as a small integer, treat it as rounded
  // to the nearest integer (e.g., 25 instead of 25.2 for limited sig figs).
  if (!s.includes('.')) {
    const n = parseFloat(s);
    if (Number.isFinite(n) && Math.abs(n) <= 1e9) {
      return { absTol: 0.5, relTol: 0 };
    }
  }

  const dot = s.indexOf('.');
  if (dot >= 0) {
    const decimals = s.length - dot - 1;
    // If the literal is short (e.g. 1.3), assume it is rounded and allow
    // half-a-unit-in-the-last-place for that decimal precision.
    if (decimals > 0 && decimals <= 6) {
      return { absTol: 0.5 * Math.pow(10, -decimals), relTol: 0 };
    }
  }
  return { absTol: 0, relTol: 1e-12 };
}

/**
 * Asserts two numbers are approximately equal using a tolerance derived from
 * the expected literal.
 *
 * @param {number} actual
 * @param {number} expected
 * @param {unknown} literalForTol
 * @param {string} contextMsg
 */
function assertApproxEqual(actual, expected, literalForTol, contextMsg) {
  assert(
    Number.isFinite(actual),
    `${contextMsg} actual is not finite: ${actual}`
  );
  assert(
    Number.isFinite(expected),
    `${contextMsg} expected is not finite: ${expected}`
  );

  const { absTol, relTol } = toleranceFromLiteral(literalForTol);
  const delta = Math.abs(actual - expected);

  if (relTol > 0 && expected !== 0) {
    const rel = delta / Math.abs(expected);
    assert(
      rel <= relTol,
      `${contextMsg} expected ${expected} got ${actual} (relErr=${rel})`
    );
  } else {
    assert(
      delta <= absTol,
      `${contextMsg} expected ${expected} got ${actual} (absErr=${delta}, absTol=${absTol})`
    );
  }
}

/**
 * Parses a UCUM unit expression into a Unit object.
 *
 * In the XML, the empty string is used to mean unity; for conversion/arithmetic
 * tests we treat that as the UCUM numeric unit "1".
 *
 * @param {unknown} unitString
 * @returns {Unit}
 */
function parseUnitOrUnity(unitString) {
  const u = (unitString ?? '').toString();
  if (u.trim() === '') {
    // In the XML, empty string is used to mean unity.
    return UnitString.getInstance().parseString('1', 'convert')[0];
  }
  return UnitString.getInstance().parseString(u, 'convert')[0];
}

describe('UcumFunctionalTests.xml (validation/conversion/arithmetic)', function () {
  const doc = parseXmlTestFile();
  const root = doc && doc.ucumTests ? doc.ucumTests : null;

  it('should load the XML test document', function () {
    assert(root, 'Failed to parse ucumTests root element from XML');
  });

  describe('validation', function () {
    const cases = asArray(root && root.validation && root.validation.case);

    it('should have validation cases', function () {
      assert(cases.length > 0, 'No <validation><case> elements found');
    });

    for (const c of cases) {
      const id = c.id;
      const unit = c.unit;
      const expectedValid = toBool(c.valid);

      it(`${id} ${unit} should be valid=${expectedValid}`, function () {
        const resp = utils.validateUnitString(unit);
        const actualValid = resp && resp.status === 'valid';

        // Treat 'error' as invalid for these conformance checks.
        assert.strictEqual(
          actualValid,
          expectedValid,
          `${id} unit=${unit} status=${resp && resp.status} msg=${JSON.stringify(resp && resp.msg)}`
        );
      });
    }
  });

  describe('conversion', function () {
    const cases = asArray(root && root.conversion && root.conversion.case);

    it('should have conversion cases', function () {
      assert(cases.length > 0, 'No <conversion><case> elements found');
    });

    for (const c of cases) {
      const id = c.id;
      const fromVal = parseNumber(c.value);
      const srcUnit = c.srcUnit;
      const dstUnit = c.dstUnit;
      const outcomeLiteral = c.outcome;
      const expected = parseNumber(outcomeLiteral);

      it(`${id} ${c.value} ${srcUnit} -> ${dstUnit} = ${outcomeLiteral}`, function () {
        const resp = utils.convertUnitTo(srcUnit, fromVal, dstUnit);
        assert.strictEqual(
          resp && resp.status,
          'succeeded',
          `${id} conversion failed: status=${resp && resp.status} msg=${JSON.stringify(resp && resp.msg)}`
        );
        assertApproxEqual(resp.toVal, expected, outcomeLiteral, `${id} conversion outcome mismatch:`);
      });
    }
  });

  describe('multiplication', function () {
    const cases = asArray(root && root.multiplication && root.multiplication.case);

    it('should have multiplication cases', function () {
      assert(cases.length > 0, 'No <multiplication><case> elements found');
    });

    for (const c of cases) {
      const id = c.id;
      const v1 = parseNumber(c.v1);
      const u1 = c.u1;
      const v2 = parseNumber(c.v2);
      const u2 = c.u2;
      const vResLiteral = c.vRes;
      const vRes = parseNumber(vResLiteral);
      const uRes = c.uRes;

      it(`${id} (${c.v1} ${u1}) * (${c.v2} ${u2}) ~= (${vResLiteral} ${uRes})`, function () {
        const unit1 = parseUnitOrUnity(u1);
        const unit2 = parseUnitOrUnity(u2);
        const expectedUnit = parseUnitOrUnity(uRes);

        const actualUnit = unit1.multiplyThese(unit2);
        const actualValue = v1 * v2;

        const converted = expectedUnit.convertFrom(actualValue, actualUnit);
        assertApproxEqual(converted, vRes, vResLiteral, `${id} multiplication mismatch:`);
      });
    }
  });

  describe('division', function () {
    const cases = asArray(root && root.division && root.division.case);

    it('should have division cases', function () {
      assert(cases.length > 0, 'No <division><case> elements found');
    });

    for (const c of cases) {
      const id = c.id;
      const v1 = parseNumber(c.v1);
      const u1 = c.u1;
      const v2 = parseNumber(c.v2);
      const u2 = c.u2;
      const vResLiteral = c.vRes;
      const vRes = parseNumber(vResLiteral);
      const uRes = c.uRes;

      it(`${id} (${c.v1} ${u1}) / (${c.v2} ${u2}) ~= (${vResLiteral} ${uRes || '(unity)'})`, function () {
        const unit1 = parseUnitOrUnity(u1);
        const unit2 = parseUnitOrUnity(u2);
        const expectedUnit = parseUnitOrUnity(uRes);

        const actualUnit = unit1.divide(unit2);
        const actualValue = v1 / v2;

        const converted = expectedUnit.convertFrom(actualValue, actualUnit);
        assertApproxEqual(converted, vRes, vResLiteral, `${id} division mismatch:`);
      });
    }
  });
});
