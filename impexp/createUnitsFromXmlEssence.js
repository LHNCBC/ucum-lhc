/**
 * This runs the code that parses the UCUM XML "essence" document,
 * which contains XML definitions of the UCUM prefixes and units.
 *
 * Babel is used to translate this to ECMA 5 code, i.e.,
 * babel createUnitsFromXmlEssence.js --out-file createUnitsFromXmlEssence5.js
 *
 * Then run from the command line, i.e., node createUnitsFromXmlEssence5.js
 */

var xdoc = require("../source-es5/ucumXmlDocument.js");
var pfx = require("../source-es5/prefix.js");
var unit = require("../source-es5/unit.js");

var docObj = xdoc.UcumXmlDocument.getInstance() ;
docObj.parseXml();


