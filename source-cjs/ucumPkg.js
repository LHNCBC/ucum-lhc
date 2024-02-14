"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnitTables = exports.UcumLhcUtils = exports.Ucum = void 0;
/**
 * This exports definitions for ucum classes that need references to them
 * available to the demo code.  The actual code will be in the ucumPkg
 * library found in the dist directory.  This file provides the hooks to
 * those classes within the library.
 */

var Ucum = require("./config.js").Ucum;
exports.Ucum = Ucum;
var UcumLhcUtils = require("./ucumLhcUtils.js").UcumLhcUtils;
exports.UcumLhcUtils = UcumLhcUtils;
var UnitTables = require("./unitTables.js").UnitTables;
exports.UnitTables = UnitTables;
//# sourceMappingURL=ucumPkg.js.map
