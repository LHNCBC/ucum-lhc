/**
 * This class handles opening, reading and loading the JSON file of ucum
 * definitions (prefixes, base units, and unit atoms).
 *
 * @author Lee Mericle
 *
 */

var Ucum = require('./config.js').Ucum;
var Pfx = require("./prefix.js");
var PfxT = require("./prefixTables.js");
var Un = require("./unit.js");
var Utab = require('./unitTables.js');

var jsonfile = require('jsonfile');
var util = require('util');
var fs = require('fs');
var path = require('path');

// requiring the file will take care of opening it for use
var jsonDefs_ = require('../data/ucumDefs.json');

export class UcumJsonDefs {

  /**
   * Constructor.  This reads the json file (essenceFile_) into the
   * jsonDefs hash and makes this a singlton object.
   *
   */
  constructor() {

    // Make this a singleton.  See UnitTables constructor for details.

    let holdThis = UcumJsonDefs.prototype;
    UcumJsonDefs = function(){throw 'UcumJsonDefs is a Singleton. ' +
                                    'Use UcumJsonDefs.getInstance() instead.'};
    if (exports)
      exports.UcumJsonDefs = UcumJsonDefs;
    UcumJsonDefs.prototype = holdThis;
    let self = this ;
    UcumJsonDefs.getInstance = function(){return self} ;

  } // end constructor


  /**
   * This method loads the JSON prefix and unit objects into the prefix and
   * unit tables.
   *
   * @returns nothing
   */
  loadJsonDefs() {

    let pTab = PfxT.PrefixTables.getInstance() ;
    let prefixes = jsonDefs_["prefixes"];
    let plen = prefixes.length ;

    for (let p = 0; p < plen; p++) {
      let newPref = new Pfx.Prefix(prefixes[p]);
      pTab.add(newPref);
    }

    let uTab = Utab.UnitTables.getInstance();
    let units = jsonDefs_["units"];
    let ulen = units.length ;

    for (let u = 0; u < ulen; u++) {
      let newUnit = new Un.Unit(units[u]);
      uTab.addUnit(newUnit);
    }
  } // end loadJsonDefs

} // end UcumJsonDefs class

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
UcumJsonDefs.getInstance = function(){
  return new UcumJsonDefs();
}

