/**
 * This exports definitions for ucum classes that need references to them
 * available to the demo code.  The actual code will be in the ucumPkg
 * library found in the dist directory.  This file provides the hooks to
 * those classes within the library.
 */

export var Ucum = require("./config.js").Ucum;
export var UcumLhcUtils = require("./ucumLhcUtils.js").UcumLhcUtils;
export var UnitTables = require("./unitTables.js").UnitTables;