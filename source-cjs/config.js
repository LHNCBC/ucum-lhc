"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ucum = void 0;
/*
 * This defines the namespace for the UCUM classes and provides
 * a place for the definition of global variables and constants.
 *
 * The javascript for this UCUM implementation uses syntax as
 * defined by the ECMAScript 6 standard
 */

var Ucum = {
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
   *  The characters used as valid operators in a UCUM unit expression,
   *  where '.' is for multiplication and '/' is for division.
   */
  validOps_: ['.', '/'],
  /**
   * The string used to separate a unit code and unit name when they
   * are displayed together
   */
  codeSep_: ': ',
  // Message text variations for validation methods and conversion methods
  valMsgStart_: 'Did you mean ',
  valMsgEnd_: '?',
  cnvMsgStart_: 'We assumed you meant ',
  cnvMsgEnd_: '.',
  /**
     * Default opening string used to emphasize portions of error messages.
     * Used when NOT displaying messages on a web site, i.e., for output
     * from the library methods or to a file.
     */
  openEmph_: ' ->',
  /**
   * Default closing string used to emphasize portions of error messages.
   * Used when NOT displaying messages on a web site, i.e., for output
   * from the library methods or to a file.
   */
  closeEmph_: '<- ',
  /**
   * Opening HTML used to emphasize portions of error messages.  Used when
   * displaying messages on a web site; should be blank when output is
   * to a file.
   */
  openEmphHTML_: ' <span class="emphSpan">',
  /**
   * Closing HTML used to emphasize portions of error messages.  Used when
   * displaying messages on a web site; should be blank when output is
   * to a file.
   */
  closeEmphHTML_: '</span> ',
  /**
   * Message that is displayed when annotations are included in a unit
   * string, to let the user know how they are interpreted.
   */
  bracesMsg_: 'FYI - annotations (text in curly braces {}) are ignored, ' + 'except that an annotation without a leading symbol implies ' + 'the default unit 1 (the unity).',
  /**
   * Message that is displayed or returned when a conversion is requested
   * for two units where (only) a mass<->moles conversion is appropriate
   * but no molecular weight was specified.
   */
  needMoleWeightMsg_: 'Did you wish to convert between mass and moles?  The ' + 'molecular weight of the substance represented by the ' + 'units is required to perform the conversion.',
  /**
   * Hash that matches unit column names to names used in the csv file
   * that is submitted to the data updater.
   */
  csvCols_: {
    'case-sensitive code': 'csCode_',
    'LOINC property': 'loincProperty_',
    'name (display)': 'name_',
    'synonyms': 'synonyms_',
    'source': 'source_',
    'category': 'category_',
    'Guidance': 'guidance_'
  },
  /**
   * Name of the column in the csv file that serves as the key
   */
  inputKey_: 'case-sensitive code',
  /**
   * Special codes that contain operators within brackets.  The operator
   * within these codes causes them to parse incorrectly if they are preceded
   * by a prefix, because the parsing algorithm splits them up on the operator.
   * So we use this object to identify them and substitute placeholders to
   * avoid that.
   */
  specUnits_: {
    'B[10.nV]': 'specialUnitOne',
    '[m/s2/Hz^(1/2)]': 'specialUnitTwo'
  }
};
exports.Ucum = Ucum;
//# sourceMappingURL=config.js.map
