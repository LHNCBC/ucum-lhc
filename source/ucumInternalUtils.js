/**
 * Internal utilities used by multiple UCUM classes.  For example,
 * isNumericString is used by both the UnitString and UcumLhcUtils
 * classes.  If it's in the UnitString class the UcumLhcUtils class
 * needs to require the UnitString class.  But the checkSynonyms
 * class is used by the UnitString class - but was in the UcumLhcUtils
 * class.  Requiring the UcumLhcUtils class from the UnitString class
 * made everything break (cyclical requires).
 *
 * So now they're here.
 */

/**
 * This class implements internal ucum utilities.
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */

var UnitTables = require('./unitTables.js').UnitTables ;

export class UcumInternalUtils {

  /**
   * Constructor.
   *
   * Implementation of this as a singleton is based on the UnitTables
   * implementation.  See that class for details.
   */
  constructor(){
    // Make this a singleton.  See UnitTables constructor for details.

    let holdThis = UcumInternalUtils.prototype;
    UcumInternalUtils = function(){throw(new Error(
                       'UcumInternalUtils is a Singleton. ' +
                       'Use UcumInternalUtils.getInstance() instead.'))};
    if (exports)
      exports.UcumInternalUtils = UcumInternalUtils;
    UcumInternalUtils.prototype = holdThis;
    let self = this ;
    UcumInternalUtils.getInstance = function(){return self} ;
  }

  /**
   * This tests a string to see if it contains only numbers (digits,
   * a period, leading - or +).  Using isNaN and Number.isNaN is too
   * frustrating, given the limitations of both - isNaN and
   * Number.isNaN both return false, i.e., the value is a number,
   * for booleans, nulls, empty strings and strings that only contain
   * spaces.
   *
   * @params theString
   * @returns true if the string contains only numbers; false otherwise
   */
  isNumericString(theString) {
    let isNumStr = false ;
    if (theString && typeof theString === 'string') {
      let ret = theString.match(/^[-|+]?[0-9\.]*$/);
      isNumStr = (ret !== null);
    }
    return isNumStr ;
  } // end isNumericString


  /**
   * This method accepts a term and looks for units that include it as
   * a synonym - or that include the term in its name.
   *
   * @param theSyn the term to search for.  This is assumed to be
   *  a string and not undefined.  The calling method should do any
   *  necessary checking before calling this.
   * @returns a hash with up to three elements:
   *  'status' contains the status of the request, which can be 'error',
   *    'failed' or succeeded';
   *  'msg' which contains a message for an error or if no units were found; and
   *  'units' which is an array that contains one hash for each unit found:
   *    'code' is the unit's csCode_
   *    'name' is the unit's name_
   *    'guidance' is the unit's guidance_
   *
   */
  getSynonyms(theSyn) {

    let retObj = {} ;
    let utab = UnitTables.getInstance();
    let resp = {} ;
    resp = utab.getUnitBySynonym(theSyn);

    // If we didn't get any units, transfer the status and message
    if (!resp['units']) {
      retObj['status'] = resp['status'];
      retObj['msg'] = resp['msg'];
    }
    else {
      retObj['status'] = 'succeeded';
      let aLen = resp['units'].length ;
      retObj['units'] = [];
      for (let a = 0; a < aLen; a++) {
        let theUnit = resp['units'][a];
        retObj['units'][a] = {
          'code': theUnit.csCode_,
          'name': theUnit.name_,
          'guidance': theUnit.guidance_
        }
      } // end do for all units returned
    } // end if we got a units list
    return retObj ;

  } // end getSynonyms

} // end UcumInternalUtils class


/**
 *  This function exists ONLY until the original PrefixTables constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton UcumInternalUtils object.  This is based on the
 *  UnitTables singleton implementation; see more detail in the
 *  UnitTables constructor description.
 *
 *  @return the singleton UcumInternalUtils object.
 */
UcumInternalUtils.getInstance = function(){
  return new UcumInternalUtils();
}

// Perform the first request for the utils object, to get the
// getInstance method set.
UcumInternalUtils.getInstance();


