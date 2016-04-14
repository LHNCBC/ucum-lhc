/**
 * This is the code entry point for the demo web page.  It coordinates the
 * loading of the prefix and unit objects from the json definitions file and
 * populating the autocompleter unit lists.
 */

export var UcumLhcUtils = require("./ucumLhcUtils.js").UcumLhcUtils;
export var UnitTables = require("./unitTables.js").UnitTables;


export function startup () {
  var utils = UcumLhcUtils.getInstance();
  var utab = UnitTables.getInstance();
  var unames = utab.getUnitNamesList();
  var opts = {'matchListValue': true};
  new Def.Autocompleter.Prefetch('convertFrom', unames); //, opts);
  new Def.Autocompleter.Prefetch('convertTo', unames); //opts);
};

startup();



