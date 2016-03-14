/**
 * Prefix objects are defined in this file.
 */

/**
 * This class implements the prefix object.  Prefixes are used as multipliers
 * for units, e.g., km for kilometers
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */
var Ucum = require('./config.js');

export class Prefix {

  /**
   * Creates a single prefix object.
   *
   * @param code the code used for the prefix, e.g., k for kilo
   * @param name the name of the prefix, e.g., kilo
   * @param value the value to use in multiplying the magnitude of an object,
   *  e.g., for a prefix of c the value will be .01.  Will be stored as
   *  a float.
   *
   * @throws an error if the not all required parameters are provided
   */
  constructor(code, name, value, exp) {
    if (code === undefined || code === null ||
        name === undefined || name === null ||
        value === undefined || value === null ||
        exp === undefined) {
      throw('Prefix constructor called missing one or more parameters.  ' +
      'Prefix codes (cs or ci), name, value and exponent must all be specified ' +
      'and all but the exponent must not be null.');
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
    this.value_ = parseFloat(value);

    /**
     * The exponent used to create the value from 10.  For prefixes that are
     * not based on 10, this will be null.
     */
    this.exp_ = exp ;

  } // end constructor


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
   * Returns the exponent for the current prefix object
   * @return the exponent for the current prefix object
   */
  getExp() {
    return this.exp_;
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
        this.value_ === prefix2.value_ &&
        this.exp_ === prefix2.exp_ ;
  }
} // end Prefix class
