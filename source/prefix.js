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
   * @param attrs a hash of the values to use in creating the prefix object.
   *  They should be:
   *   code_ - which is the code used for the prefix, e.g., k for kilo
   *   name_ - which is the name of the prefix, e.g., kilo
   *   value_ - which is teh value to use in multiplying the magnitude of
   *    a unit, e.g., for a prefix of c the value will be .01.
   *   exp_ - which is the exponent used to get the value. For decimal based
   *    prefixes the base is 10 and the exp_ is applied to 10, e.g., for a
   *    prefix of c, the exponent will be -2.  For prefixes that are not
   *    decimal based, this will be null (but must not be undefined).
   *
   * @throws an error if the not all required parameters are provided
   */
  constructor(attrs) {

    if (attrs['code_'] === undefined || attrs['code_'] === null ||
        attrs['name_'] === undefined || attrs['name_'] === null ||
        attrs['value_'] === undefined || attrs['value_'] === null ||
        attrs['exp_'] === undefined) {
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
    this.code_ = attrs['code_'];

    /**
     * The prefix name, e.g., kilo
     */
    this.name_ = attrs['name_'];

    /**
     * The value to use in multiplying the magnitude of a unit
     */
    if (typeof attrs['value_'] === 'string')
      this.value_ = parseFloat(attrs['value_']);
    else
      this.value_ = attrs['value_'] ;

    /**
     * The exponent used to create the value from 10.  For prefixes that are
     * not based on 10, this will be null.
     */
    this.exp_ = attrs['exp_'] ;

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
   * must all attribute values.
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
