/**
 * This runs the code that parses the UCUM XML "essence" document,
 * which contains XML definitions of the UCUM prefixes and units.
 *
 * This assumes that the essence file is named ucum-essence.xml and is
 * located in the dist/data directory.
 *
 * This also assumes that there is a ucumDefs.json file in the dist/data
 * directory.  This should be a very small version of the ucumDefs.json
 * file.  It is required to exist for the code to run.   Copy the
 * ucumDefsMin.json in the dist/data directory to ucumDefs.json after
 * moving the current ucumDefs.json out of the way (rename and move
 * to the prevVersions subdirectory).
 *
 * This creates a file named ucumDefs + date-time-stamp + .json in the
 * dist/data directory.
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


