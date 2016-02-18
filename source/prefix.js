/**
 * Prefix objects and the table of defined prefixes are defined in this file.
 */

/**
 * This class implements the prefix object.  Prefixes are used as multipliers
 * for units, e.g., km for kilometers
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */
var Ucum = require('/home/lmericle/ucum/dist/es5/config.js');

export class Prefix {

  /**
   * Creates a single prefix object and adds it to the PrefixTables singleton.
   *
   * @param code the code used for the prefix, e.g., k for kilo
   * @param name the name of the prefix, e.g., kilo
   * @param value the value to use in multiplying the magnitude of an object,
   *  e.g., for a prefix of c the value will be .01.
   *
   * @throws an error if the prefix has already been defined
   */
  constructor(code, name, value) {
    if (code === undefined || code === null ||
        name === undefined || name === null ||
        value === undefined || value === null) {
      throw('Prefix constructor called missing one or more parameters.  ' +
      'Prefix codes (cs or ci), name and value must all be specified ' +
      'and not null.');
    }

    // Check to see if this prefix has already been defined.
    //let ptab = PrefixTables.getInstance() ;
    let ptab = Ucum.prefixTab_ ;
    if (ptab.isDefined(code)) {
      throw(`Prefix constructor called for prefix already defined; code ` +
      `= ${code}`);
    }

    /**
     * The prefix code, e.g., k for kilo.  If we are in case-sensitive
     * mode (Ucum.caseSensitive_ is true), this should be the case-sensitive
     * code, and if we're not, it should be the case-insensitive code.  Since
     * there's no way to check to see if it's the right one (because although
     * case-insensitive codes all seem to be uppercase, some case-sensitive
     * codes are also all uppercase), we'll just have to believe that the
     * right one was passed in.
     */
    this.code_ = code;

    /**
     * The prefix name, e.g., kilo
     */
    this.name_ = name;

    /**
     * The value to use in multiplying the magnitude of a unit
     */
    this.value_ = parseInt(value);

    // Add this prefix to the Prefix table

    ptab.add(this) ;

  }


  /**
   * Returns the value for the current prefix object
   * @return the value for the prefix object with the specified code
   * */
  getValue() {
    return this.value_;
  }


  /**
   * Returns the prefix string (code) for the current prefix object
   * @return the code for the current prefix object
   */
  getCode() {
    return this.code_;
  }


   /**
   * Provides way to tell if one prefix equals another.  The second prefix
   * must match the code, name and value attribute values.
   *
   * @param prefix2 prefix object to check for a match
   * @return true for a match; false if one or more attributes don't match
   */
  equals(prefix2) {
    return this.code_ === prefix2.code_ &&
        this.name_ === prefix2.name_ &&
        this.value_ === prefix2.value_;
  }
} // end Prefix class


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
    this.byCode = {} ;
    this.byValue = {};

      // Make this a singleton.  See UnitTables constructor for details.

    let holdThis = PrefixTables.prototype;
    PrefixTables = function(){throw 'PrefixTables is a Singleton. ' +
                                    'Use PrefixTables.getInstance() instead.'};
    PrefixTables.prototype = holdThis;
    PrefixTables.getInstance = function(){return this} ;
  }


  /**
   * Provides the number of prefix objects in each table
   * @returns count of the number of prefix objects in each table
   */
  entries() {
    return Object.keys(this.byCode).length ;
  }


  /**
   * Adds a prefix object to the tables
   *
   * @param prefixObj the object to be added to the tables
   */
  add(prefixObj){
    this.byCode[prefixObj.code_] = prefixObj;
    this.byValue[prefixObj.value_] = prefixObj;
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
    return this.byCode[code] !== null && this.byCode[code] !== undefined ;
  }


  /**
   * Obtains a prefix object for a specified code.
   *
   * @param code the code to be used to find the prefix object
   * @return the prefix object found, or null if nothing was found
   */
  getPrefixByCode(code) {
    return this.byCode[code];
  }


  /**
   * Obtains a prefix object for a specified value.
   *
   * @param value the value to be used to find the prefix object
   * @return the prefix object found, or null if nothing was found
   */
  getPrefixByValue(value) {
    return this.byValue[value];
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


