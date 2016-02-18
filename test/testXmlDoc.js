/**
 * This runs the code that parses the UCUM XML "essence" document,
 * which contains XML definitions of the UCUM prefixes and units.
 *
 * Babel is used to translate this to ECMA 5 code, i.e.,
 * babel testXmlDoc.js --out-file testXmlDoc5.js
 *
 * Then un from the command line, i.e., node testXmlDoc5.js
 */

var xdoc = require("/home/lmericle/ucum/dist/es5/ucumXmlDocument.js");
var pfx = require("/home/lmericle/ucum/dist/es5/prefix.js");
var unit = require("/home/lmericle/ucum/dist/es5/unit.js");

var docObj = new xdoc.UcumXmlDocument() ;
docObj.parseXml();


