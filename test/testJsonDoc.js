/**
 * This runs the code that reads in the JSON definitions file
 * and provides access to the data.
 *
 * Babel is used to translate this to ECMA 5 code, i.e.,
 * babel testXmlDoc.js --out-file testJsonDoc5.js
 *
 * Then un from the command line, i.e., node testXmlDoc5.js
 */

var Utils = require("../dist/es5/ucumLhcUtils.js");
var pfx = require("../dist/es5/prefix.js");
var unit = require("../dist/es5/unit.js");

var utils = Utils.UcumLhcUtils.getInstance() ;
utils.printUnits();


