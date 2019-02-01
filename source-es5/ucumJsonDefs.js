"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class handles opening, reading and loading the JSON file of ucum
 * definitions (prefixes, base units, and unit atoms).
 *
 * @author Lee Mericle
 *
 */

var Pfx = require("./prefix.js");
var PfxT = require("./prefixTables.js");
var Un = require("./unit.js");
var Utab = require('./unitTables.js');

// requiring the file will take care of opening it for use
var jsonDefs_ = require('../data/ucumDefs.json');

var UcumJsonDefs = exports.UcumJsonDefs = function () {

  /**
   * Constructor.  This reads the json file (essenceFile_) into the
   * jsonDefs hash and makes this a singlton object.
   *
   */
  function UcumJsonDefs() {
    _classCallCheck(this, UcumJsonDefs);

    // Make this a singleton.  See UnitTables constructor for details.

    var holdThis = UcumJsonDefs.prototype;
    UcumJsonDefs = function UcumJsonDefs() {
      throw new Error('UcumJsonDefs is a Singleton. ' + 'Use UcumJsonDefs.getInstance() instead.');
    };
    if (exports) exports.UcumJsonDefs = UcumJsonDefs;
    UcumJsonDefs.prototype = holdThis;
    var self = this;
    UcumJsonDefs.getInstance = function () {
      return self;
    };
  } // end constructor


  /**
   * This method loads the JSON prefix and unit objects into the prefix and
   * unit tables.
   *
   * @returns nothing
   */


  _createClass(UcumJsonDefs, [{
    key: "loadJsonDefs",
    value: function loadJsonDefs() {

      if (Utab.UnitTables.getInstance().unitsCount() === 0) {

        var pTab = PfxT.PrefixTables.getInstance();
        var prefixes = jsonDefs_["prefixes"];
        var plen = prefixes.length;

        for (var p = 0; p < plen; p++) {
          var newPref = new Pfx.Prefix(prefixes[p]);
          pTab.add(newPref);
        }

        var uTab = Utab.UnitTables.getInstance();
        var units = jsonDefs_["units"];
        var ulen = units.length;

        for (var u = 0; u < ulen; u++) {
          var newUnit = new Un.Unit(units[u]);
          uTab.addUnit(newUnit);
        }
      } // end if the data has not already been loaded
    } // end loadJsonDefs

  }]);

  return UcumJsonDefs;
}(); // end UcumJsonDefs class

/**
 *  This function exists ONLY until the original UcumJsonDefs constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton UcumJsonDefs object.  This is based on the UnitTables singleton
 *  implementation; see more detail in the UnitTables constructor description.
 *
 *  @return the singleton UcumJsonDefs object.
 */


UcumJsonDefs.getInstance = function () {
  return new UcumJsonDefs();
};
//# sourceMappingURL=ucumJsonDefs.js.map
