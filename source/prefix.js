/**
 * Prefix objects and the table of defined prefixes are defined in this file.
 */
import * as Ucum from "config.js"

/**
 * This class implements the prefix object.  Prefixes are used as multipliers
 * for units, e.g., km for kilometers
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */
class Prefix {

  /**
   * Creates a single prefix object and adds it to the PrefixTables singleton.
   *
   * @param code the code used for the prefix, e.g., k for kilo
   * @param name the name of the prefix, e.g., kilo
   * @param exponent when the base is 10, this is the exponent that, when applied
   *  to 10, yields a single value named by the code and name, e.g., 3 for kilo
   *  (10*10*10).  When the base is 2, the actual value, such as 1024.
   *  The absolute value of the exponent for a base 10 prefix must not exceed
   *  the Ucum.maxPrefixExponent_ defined in config.js
   *
   * @throws an error if the prefix has already been defined
   */
  constructor(code, name, exponent) {
    if (code === undefined || code === null ||
        name === undefined || name === null ||
        exponent === undefined || exponent === null) {
      throw('Prefix constructor called missing one or more parameters.  ' +
            'Prefix codes (cs & ci), name and exponent must all be specified ' +
            'and not null.');
    }

    // Check to see if this prefix has already been defined.

    if (PrefixTables.isDefined(code)) {
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
     * The exponent, which is the exponent that, when applied to 10, yields a
     *  single value named by the code and name, e.g., 3 for kilo (10*10*10)
     */
    this.exponent_ = exponent;

    // Add this prefix to the Prefix table

    PrefixTables.add(this) ;

  }


  /**
   * Returns the exponent for the prefix object with the specified code
   *
   * @param code the code for the prefix whose exponent is to be returned
   * @return the exponent for the prefix object with the specified code
   * @throws error if the prefix with the specified code is not found
   * */
  exponentFor(code) {

    let pfx = PrefixTable.getPrefixbyCode(code);
    if (pfx === null) {
      throw(`Exponent for prefix with code ${code} requested, but prefix ` +
            `is not defined.`);
    }
    else
      return pfx.exponent_;
  }


  /**
   * Returns the prefix string (code) for the prefix object with the
   * specified exponent.
   *
   * @param exponent the exponent for the prefix whose code is to be returned
   * @return the code for the prefix object with the specified exponent
   * @throws an error if the prefix with the specified exponent is not found
   */
  forExponent(exponent) {

    let pfx = PrefixTable.getPrefixbyExponent(exponent);
    if (pfx === null) {
      throw(`Code for prefix with exponent ${exponent} requested, but prefix ` +
      `is not defined.`);
    }
    else
      return pfx.code_;
  }


  /**
   * Assigns the values of the prefix object passed in to this object
   *
   * @param prefix2 the prefix object whose values are to be assigned to
   *  this prefix object
   * @return this prefix object
   */
  /* Why do we want this? messes up the table???  I'm not planning to
   * implement this until I find a use for it.
  assign(prefix2) {
    this.code_ = prefix2.code_ ;
    this.name_ = prefix2.name_;
    this.exponent_ = prefix2.exponent_;
    return this;
  }*/


  /**
   * Provides way to tell if one prefix equals another.  The second prefix
   * must match the code, name and exponent attribute values.
   *
   * @param prefix2 prefix object to check for a match
   * @return true for a match; false if one or more attributes don't match
   */
  equals(prefix2) {
    return this.code_ === prefix2.code_ &&
           this.name_ === prefix2.name_ &&
           this.exponent_ === prefix2.exponent_;
  }
} // end Prefix class


/**
 * This class implements the table of multiplier prefixes.
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */
class PrefixTables {

  /**
   * Constructor.  This creates the empty PrefixTable hashes once.
   * There is one hash whose key is the prefix code and one whose
   * key is the prefix exponent.
   *
   * Implementation of this as a singleton is based on the UnitTables
   * implementation.  See that class for details.
   */
  constructor(){
    this.byCode = {} ;
    this.byExponent = {};

    // Make this a singleton.  See UnitTables constructor for details.

    let holdThis = PrefixTable.prototype;
    PrefixTable = function(){throw 'PrefixTable is a Singleton. ' +
                             'Use PrefixTable.getInstance() instead.'}
    PrefixTable.prototype = holdThis;
    PrefixTable.getInstance = function(){return this} ;
  }


  /**
   * Adds a prefix object to the tables
   *
   * @param prefixObj the object to be added to the tables
   */
  add(prefixObj){
    this.byCode[prefixObj.code_] = prefixObj;
    this.byExponent[prefixObj.exponent_] = prefixObj;
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
    return this.byCode[code] !== null ;
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
   * Obtains a prefix object for a specified exponent.
   *
   * @param exponent the exponent to be used to find the prefix object
   * @return the prefix object found, or null if nothing was found
   */
  getPrefixByExponent(exponent) {
    return this.byExponent[exponent];
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
PrefixTables.getInstance() {
  return new PrefixTables();
}