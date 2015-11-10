/* 
 * This defines the namespace for the UCUM classes and provides
 * a place for the definition of global variables and constants.
 *
 * The javascript for this UCUM implementation uses syntax as
 * defined by the ECMAScript 6 standard
 */
export var Ucum = {  // Namespace for UCUM classes

  /**
   *  Flag indicating whether or not we're using case sensitive labels
   */
  caseSensitive_: true ,

  /**
   *  The number of elements in a Dimension array.   Currently this
   *  is set as a configuration variable, but when we get to the point
   *  of loading the unit definitions from a file, this value will be
   *  set from that.
   */
  dimLen_: 7 ,

  /**
   * Maximum absolute value for a prefix exponent (factor) when the prefix is
   * an expression based on 10, such as a kilo, which is 10 to the third power.
   */
  maxPrefixExponent_ : 24

}

