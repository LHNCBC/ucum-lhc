/**
 * This runs the code that parses the UCUM XML "essence" document,
 * which contains XML definitions of the UCUM prefixes and units.
 *
 * This assumes that the essence file is named ucum-essence.xml and is
 * located in the data directory.
 *
 * This also assumes that there is a ucumDefs.json file in the data
 * directory.  This should be a very small version of the ucumDefs.json
 * file.  It is required to exist for the code to run.   Copy the
 * ucumDefsMin.json in the data/prevVersions directory to ucumDefs.json after
 * moving the current ucumDefs.json out of the way (rename and move
 * to the prevVersions subdirectory).
 *
 * This creates a file named ucumDefs + date-time-stamp + .json in the
 * data directory.  If you have any checking you want to do that file, do it
 * at this point.  When you're happy with it, rename the small version of the
 * file, which is still ucumDefs.json, back to ucumDefsMin.json and move it
 * back to the prevVersions subdirectory.  Rename the file you just created to
 * ucumDefs.json.  From there you can use it as is.  If you have additional
 * data to add to it, as we do, add it at this point.
 *
 * This will also create a ucumEssenceVersion.txt file in the data directory.
 * That file contains the version number, revision number and date of the
 * ucum-essence.xml file used to create ucumDefs.json.  If it differs from
 * what is currently shown on the UCUM Demo page, move the file created to
 * the demo directory and rename it UcumEssenceVersion.shtml.  Otherwise you
 * can just delete it.
 *
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


