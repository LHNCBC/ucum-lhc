/*
 * The license for the UCUM LHC code (demo and library code) is located at
 * https://github.com/lhncbc/ucum-lhc/blob/master/LICENSE.md
 *
 * This defines the UCUM demo-specific global variables and constants.
 * See the config.js file for UCUM global definitions that are not specific
 * to the demo.
 *
 * The javascript for this UCUM implementation uses syntax as
 * defined by the ECMAScript 6 standard
 */

export var UcumDemoConfig = {

   /**
   * Categories that can be used to limit units listed by the autocompleter
   * in the Demo Unit Conversions page.   Separated into two arrays, with
   * the default categories in defCategories_ .
   */
  defCategories_ : ['Clinical Use'],
  categories_ : ['Nonclinical Use', 'Constants', 'Obsolete'],

  /**
   * Hash that matches category display names with the corresponding
   * values used in the data
   */
  categoryValues_ : {'Clinical Use' : 'Clinical',
    'Nonclinical Use' : 'Nonclinical',
    'Constants' : 'Constant',
    'Obsolete' : 'Obsolete'},

  /**
   * Fields that the user can select for display in the autocompleter list
   * that displays units in the Demo Unit Conversions page.   Separated into
   * two arrays, with the default categories in defDisplayFlds_ .
   */
  defDisplayFlds_ : ['cs_code', 'name', 'guidance'],
  displayFlds_ : ['category', 'synonyms', 'loinc_property', 'source'],

  /**
   * Base URL for an autocompleter search query on the clinical tables search
   * service for extended UCUM data
   */
  baseSearchURL_ : 'https://clin-table-search.lhc.nlm.nih.gov/api/ucum/v3/' +
                   'search?q=is_simple:true',

  /**
   * Default column headers for an autocompleter search query when no display
   * fields are specified.  If no display fields are specified, these are the
   * columns that are displayed.  Once the user specifies columns to display,
   * the column headers are built from those column names.
   */
  defCols_ : ['cs_code','name', 'guidance'],

  /**
   * Basic search opts used for all autocompleter search queries
   */
  baseSearchOpts_ : {'nonMatchSuggestions': false,
                     'tableFormat': true,
                     'valueCols': [0],
                     'tokens': ['/', '.']},

  /**
   *  The default number of decimal digits to be displayed for a unit amount
   */
  decDigits_ : 2,

  /**
   *  The maximum number of decimal digits to be displayed for a unit amount.
   */
  maxDecDigits_ : 20,

  /**
   *  The default precision to be used
   */
  defaultPrecision_ : 15
} ;


