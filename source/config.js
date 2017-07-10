/* 
 * This defines the namespace for the UCUM classes and provides
 * a place for the definition of global variables and constants.
 *
 * The javascript for this UCUM implementation uses syntax as
 * defined by the ECMAScript 6 standard
 */

export var Ucum = {

  /**
   *  Flag indicating whether or not we're using case sensitive labels
   *  I don't think we need this.  I think we're just going with
   *  case sensitive, per Clem.   Gunther's code has this flag, but I
   *  am removing it, at least for now.  lm, 6/2016
   */
  //caseSensitive_: true ,

  /**
   *  The number of elements in a Dimension array.   Currently this
   *  is set as a configuration variable, but when we get to the point
   *  of loading the unit definitions from a file, this value will be
   *  set from that.
   */
  dimLen_: 7,

  /**
   *  The number of decimal digits to be displayed for a unit amount
   */
  decDigits_ : 2,

  /**
   * The string used to separate a unit code and unit name when they
   * are displayed together
   */
  codeSep_ : ': ',

  /**
   * Opening HTML used to emphasize portions of error messages.  Used when
   * displaying messages on a web site; should be blank when output is
   * to a file.  See UnitString.parseString where they start out blank in
   * the constructor.
   */
  openEmph_ : '<span class="emphSpan">',

  /**
   * Closing HTML used to emphasize portions of error messages.  Used when
   * displaying messages on a web site; should be blank when output is
   * to a file.  See UnitString.parseString where they start out blank in
   * the constructor.
   */
  closeEmph_ : '</span>' ,

  /**
   * Message that is displayed when annotations are included in a unit
   * string, to let the user know how they are interpreted.
   */
  bracesMsg_ : 'Annotations (text in curley braces {}) have no influence ' +
               'on the processing of a unit string.',

  /**
   * Hash that matches unit column names to names used in the csv file
   * that is submitted to the data updater.
   */
  csvCols_ : {
    'case-sensitive code' : 'csCode_',
    'LOINC property' : 'loincProperty_',
    'name (display)' : 'name_',
    'synonyms' : 'synonyms_',
    'source' : 'source_',
    'category' : 'category_',
    'Guidance' : 'guidance_'
  } ,

  /**
   * Name of the column in the csv file that serves as the key
   */
  inputKey_ : 'case-sensitive code'
} ;


