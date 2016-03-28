/**
 * This runs the code that reads in the JSON definitions file
 * and provides access to the data.
 *
 * Babel is used to translate this to ECMA 5 code, i.e.,
 * babel testXmlDoc.js --out-file testJsonDoc5.js
 *
 * Then un from the command line, i.e., node testXmlDoc5.js
 */

export var UcumLhcUtils = require("./ucumLhcUtils.js").UcumLhcUtils;
export var UnitTables = require("./unitTables.js").UnitTables;
var pfx = require("./prefix.js");
var unit = require("./unit.js");

export function startup () {
  var utils = UcumLhcUtils.getInstance();
  var utab = UnitTables.getInstance();
  var unames = utab.getUnitNamesList();
  var opts = {'matchListValue': true};
  new Def.Autocompleter.Prefetch('convertFrom', unames, opts);
  new Def.Autocompleter.Prefetch('convertTo', unames, opts);
};

startup();



