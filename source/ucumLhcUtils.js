/**
 * This class provides a single point of access to the LHC UCUM utilities
 *
 * @author Lee Mericle
 *
 */
var Ucum = require('./config.js');
var Defs = require('./ucumJsonDefs.js') ;
var PfxT = require("./prefixTables.js");
var Utab = require('./unitTables.js');
var fs = require('fs');
var path = require('path');


export class UcumLhcUtils {

  /**
   * Constructor.  This loads the json prefix and unit definitions and
   * creates itself as a singleton object.
   *
   */
  constructor() {

    console.log('in UcumLhcUtils constructor');

    // Load the prefix and unit objects
    let uDefs = Defs.UcumJsonDefs.getInstance();
    uDefs.loadJsonDefs() ;
    console.log('just loaded defs');
    // Make this a singleton.  See UnitTables constructor for details.

    let holdThis = UcumLhcUtils.prototype;
    UcumLhcUtils = function(){throw 'UcumLhcUtils is a Singleton. ' +
                                    'Use UcumLhcUtils.getInstance() instead.'};
    if (exports)
      exports.UcumLhcUtils = UcumLhcUtils;
    UcumLhcUtils.prototype = holdThis;
    let self = this ;
    UcumLhcUtils.getInstance = function(){return self} ;

  } // end constructor


  /**
   * This method validates a string as representing a valid unit
   *
   * @returns nothing
   */
  validateString() {


  } // end validateString


  /**
   * This method converts one unit to another
   *
   */
  convertUnit() {

  } // end convertUnit

  /**
   *  This provides a list of all unit codes.  The list is either case
   *  sensitive or case-insensitive, depending on the configuration
   *  setting in config.js
   */
  allUnitCodes() {

  }

  /**
   *  This provides a list of all unit names (descriptions).  The names
   *  are returned as an array of names.  For most units the array will
   *  contain one name, but because names are sometimes duplicated, not
   *  all of the arrays returned will contain just one entry.
   */
  allUnitNames() {

  }

  /**
   * Print a list of the units
   */
  printUnits() {
    console.log('in ucumLhcUtils.printUnits');
    // for now, create a list of the units created and save it to a file
    // for debugging.  This is a temporary file.
    let utab = Utab.UnitTables.getInstance();
    let uct = utab.unitsCount();
    let uList = utab.printUnits();
    console.log('in ucumLhcUtils.printUnits, about to write file.  uList ' +
                'length = ' + uList.length + '; uct = ' + uct);
    fs.writeFileSync('/home/lmericle/ucum/test/JsonUnitsList.txt', uList,
        {encoding: 'utf8', mode: 0o666, flag: 'w'} );
  }
} // end UcumLhcUtils class

/**
 *  This function exists ONLY until the original UcumLhcUtils constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton UcumJsonDefs object.  This is based on the UnitTables singleton
 *  implementation; see more detail in the UnitTables constructor description.
 *
 *  @return the singleton UcumJsonDefs object.
 */
UcumLhcUtils.getInstance = function(){
  return new UcumLhcUtils();
}
