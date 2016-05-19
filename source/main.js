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
  var autoFrom = new Def.Autocompleter.Prefetch('convertFrom', []); //, opts);
  var autoTo = new Def.Autocompleter.Prefetch('convertTo', []); //opts);
  var autoList = new Def.Autocompleter.Prefetch('unitsList', unames);
  utils.setAutocompleters(autoFrom, autoTo);
};

startup();



