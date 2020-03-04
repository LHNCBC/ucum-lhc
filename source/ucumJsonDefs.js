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
var unpackArray = require('./jsonArrayPack.js').unpackArray;

export class UcumJsonDefs {

  /**
   * This method loads the JSON prefix and unit objects into the prefix and
   * unit tables.
   *
   * @returns nothing
   */
  loadJsonDefs() {
    // requiring the file will take care of opening it for use
    const jsonDefs = require('../data/ucumDefs.min.json');
    jsonDefs.prefixes = unpackArray(jsonDefs.prefixes);
    jsonDefs.units = unpackArray(jsonDefs.units);

    if (Utab.UnitTables.getInstance().unitsCount() === 0) {

      let pTab = PfxT.PrefixTables.getInstance();
      let prefixes = jsonDefs["prefixes"];
      let plen = prefixes.length;

      for (let p = 0; p < plen; p++) {
        let newPref = new Pfx.Prefix(prefixes[p]);
        pTab.add(newPref);
      }

      let uTab = Utab.UnitTables.getInstance();
      let units = jsonDefs["units"];
      let ulen = units.length;

      for (let u = 0; u < ulen; u++) {
        let newUnit = new Un.Unit(units[u]);
        uTab.addUnit(newUnit);
      }
    } // end if the data has not already been loaded
  } // end loadJsonDefs

} // end UcumJsonDefs class

var ucumJsonDefs = new UcumJsonDefs();
export {ucumJsonDefs};
