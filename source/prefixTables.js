/**
 * The tables of defined prefixes is defined in this file.
 */

var Ucum = require('./config.js');
var Pfx = require('./prefix.js');

/**
 * This class implements the table of multiplier prefixes.
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */
export class PrefixTables {

  /**
   * Constructor.  This creates the empty PrefixTable hashes once.
   * There is one hash whose key is the prefix code and one whose
   * key is the prefix value.
   *
   * Implementation of this as a singleton is based on the UnitTables
   * implementation.  See that class for details.
   */
  constructor(){
    this.byCode_ = {} ;
    this.byValue_ = {};

      // Make this a singleton.  See UnitTables constructor for details.

    let holdThis = PrefixTables.prototype;
    PrefixTables = function(){throw 'PrefixTables is a Singleton. ' +
                                    'Use PrefixTables.getInstance() instead.'};
    if (exports)
      exports.PrefixTables = PrefixTables;
    PrefixTables.prototype = holdThis;
    let self = this ;
    PrefixTables.getInstance = function(){return self} ;
  }


  /**
   * Provides the number of prefix objects in each table
   * @returns count of the number of prefix objects in each table
   */
  prefixCount() {
    return Object.keys(this.byCode_).length ;
  }

  /**
   * This is used to get all prefix objects.  Currently it is used
   * to get the objects to write to the json ucum definitions file
   * that is used to provide prefix and unit definition objects for
   * conversions and validations.
   *
   * @returns an array containing all prefix objects, ordered by code.
   */
  allPrefixesByCode() {
    let prefixList = [];
    let pList = Object.keys(this.byCode_);
    let pLen = pList.length;
    for (let p = 0; p < pLen; p++) {
      prefixList.push(this.getPrefixByCode(pList[p])) ;
    }
    return prefixList ;
  }

  /**
   * Adds a prefix object to the tables
   *
   * @param prefixObj the object to be added to the tables
   */
  add(prefixObj){
    this.byCode_[prefixObj.getCode()] = prefixObj;
    this.byValue_[prefixObj.getValue()] = prefixObj;
  }


  /**
   * Tests whether a prefix object is found for a specified code.  This
   * is used to determine whether or not a prefix object has been created
   * for the code.
   *
   * @param code the code to be used to find the prefix object
   * @return boolean indicating whether or not a prefix object was found
   *  for the specified code
   */
  isDefined(code) {
    return this.byCode_[code] !== null && this.byCode_[code] !== undefined ;
  }


  /**
   * Obtains a prefix object for a specified code.
   *
   * @param code the code to be used to find the prefix object
   * @return the prefix object found, or null if nothing was found
   */
  getPrefixByCode(code) {
    return this.byCode_[code];
  }


  /**
   * Obtains a prefix object for a specified value.
   *
   * @param value the value to be used to find the prefix object
   * @return the prefix object found, or null if nothing was found
   */
  getPrefixByValue(value) {
    return this.byValue_[value];
  }

} // end PrefixTables class


/**
 *  This function exists ONLY until the original PrefixTables constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton PrefixTable object.  This is based on the UnitTables singleton
 *  implementation; see more detail in the UnitTables constructor description.
 *
 *  @return the singleton PrefixTables object.
 */
PrefixTables.getInstance = function(){
  return new PrefixTables();
}


