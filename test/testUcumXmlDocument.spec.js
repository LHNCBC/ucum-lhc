/**
 * Mocha tests for UcumXmlDocument.
 *
 * Covers the printSymbol extraction fix: xmldoc strips mixed-content text
 * nodes between child elements, so a naive `.val + child.toString()`
 * reconstruction mis-orders text and markup. The fix slices the raw inner
 * markup out of the stored XML text using xmldoc's position offsets.
 *
 * Run from the command line with 'mocha testUcumXmlDocument.spec.js'
 * or 'grunt test'.
 */

const assert = require('assert');
const xmldoc = require('xmldoc');
const fs = require('fs');
const path = require('path');

const { UcumXmlDocument } = require('../source-cjs/ucumXmlDocument.js');

const essencePath = path.join(__dirname, '..', 'data', 'ucum-essence.xml');

describe('UcumXmlDocument.extractPrintSymbol', function() {
  const xmlDoc = UcumXmlDocument.getInstance();
  const doc = new xmldoc.XmlDocument(fs.readFileSync(essencePath, 'utf8'));
  const units = doc.childrenNamed('unit');

  function unitByCode(code) {
    const u = units.find((x) => x.attr.Code === code);
    assert.ok(u, `unit with Code="${code}" not present in ucum-essence.xml`);
    return u;
  }

  // Regression cases: H2O family. Previously the extractor emitted
  // "m HO<sub><r>2</r></sub>" (reading as "m HO₂", hydroperoxyl)
  // because the "O" text node after <sub> was lost. Correct output puts
  // the subscript between H and O so it renders as "m H₂O" (water).
  // The U+00A0 (non-breaking space) comes from &#160; in the source XML.
  describe('H2O mixed-content units (regression)', function() {
    it('m[H2O] → "m\\u00a0H<sub><r>2</r></sub>O"', function() {
      assert.strictEqual(
        xmlDoc.extractPrintSymbol(unitByCode('m[H2O]')),
        'm H<sub><r>2</r></sub>O'
      );
    });

    it("[in_i'H2O] → \"in\\u00a0H<sub><r>2</r></sub>O\"", function() {
      assert.strictEqual(
        xmlDoc.extractPrintSymbol(unitByCode("[in_i'H2O]")),
        'in H<sub><r>2</r></sub>O'
      );
    });
  });

  // Controls: previously-correct outputs must stay identical.
  describe('non-mixed-content units (unchanged behavior)', function() {
    const cases = [
      ['[Btu_IT]',  'Btu<sub>IT</sub>'],
      ['[CCID_50]', 'CCID<sub>50</sub>'],
      ['[in_i]',    'in'],
      ['[m_e]',     '<i>m<sub><r>e</r></sub></i>'],
      ['cal_IT',    'cal<sub>IT</sub>'],
      ['mo_g',      'mo<sub>g</sub>'],
      ['Cel',       '°C'],
      ['[degF]',    '°F'],
      ['gon',       '□<sup>g</sup>'],
    ];
    for (const [code, expected] of cases) {
      it(`${code} → ${JSON.stringify(expected)}`, function() {
        assert.strictEqual(
          xmlDoc.extractPrintSymbol(unitByCode(code)),
          expected
        );
      });
    }
  });

  describe('edge cases', function() {
    it('returns null when the parent has no <printSymbol> child', function() {
      const stub = { childNamed: () => null };
      assert.strictEqual(xmlDoc.extractPrintSymbol(stub), null);
    });

    it('returns "" for a self-closing <printSymbol/>', function() {
      // Build an isolated xmldoc parse so we don't depend on whether the
      // real essence file happens to contain a self-closing printSymbol.
      const snippet = '<unit><printSymbol/></unit>';
      const parent = new xmldoc.XmlDocument(snippet);
      const stubDoc = {
        xmlText_: snippet,
        extractPrintSymbol: xmlDoc.extractPrintSymbol
      };
      assert.strictEqual(stubDoc.extractPrintSymbol(parent), '');
    });

    it('decodes numeric and named XML entities in the raw slice', function() {
      const snippet = '<unit><printSymbol>a&#160;b &amp; c</printSymbol></unit>';
      const parent = new xmldoc.XmlDocument(snippet);
      const stubDoc = {
        xmlText_: snippet,
        extractPrintSymbol: xmlDoc.extractPrintSymbol
      };
      assert.strictEqual(stubDoc.extractPrintSymbol(parent), 'a b & c');
    });

    it('preserves text/element interleaving (H<sub>2</sub>O ordering)', function() {
      const snippet = '<unit><printSymbol>H<sub>2</sub>O</printSymbol></unit>';
      const parent = new xmldoc.XmlDocument(snippet);
      const stubDoc = {
        xmlText_: snippet,
        extractPrintSymbol: xmlDoc.extractPrintSymbol
      };
      assert.strictEqual(stubDoc.extractPrintSymbol(parent), 'H<sub>2</sub>O');
    });
  });

  // Full-dataset guard: every unit's extractor output must be non-null
  // (or the printSymbol element isn't present). This catches regressions
  // where a change breaks extraction for some unit we didn't enumerate.
  describe('full dataset', function() {
    it('extracts a non-null value for every unit that has a <printSymbol>', function() {
      let covered = 0;
      for (const u of units) {
        if (!u.childNamed('printSymbol')) continue;
        const out = xmlDoc.extractPrintSymbol(u);
        assert.notStrictEqual(out, null, `null extraction for Code="${u.attr.Code}"`);
        assert.strictEqual(typeof out, 'string');
        covered++;
      }
      assert.ok(covered > 0, 'no printSymbol-bearing units found');
    });
  });
});
