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
 * This module implements internal ucum utilities.
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */

var UnitTables = require('./unitTables.js').UnitTables ;


/**
 * This function tests a string to see if it contains only numbers (digits,
 * a period, leading - or +).  This code was taken from a stackoverflow
 * solution:
 * https://stackoverflow.com/questions/175739/is-there-a-built-in-way-in-javascript-to-check-if-a-string-is-a-valid-number/42356340#42356340
 *
 * @params theString
 * @returns true if the string contains only numbers; false otherwise
 */
export function isNumericString(theString) {
  let num = "" + theString; //coerce num to be a string
  return !isNaN(num) && !isNaN(parseFloat(num));
} // end isNumericString


/**
 *  Checks whether a string qualifies as an integer unit.  Section 2.2.8 ("integer
 *  numbers", says, "A positive integer number may appear in place of a simple
 *  unit symbol.  Only a pure string of decimal digits (‘0’–‘9’) is
 *  interpreted as a number."
 *  Note:  This leaves open the question of whether "0" is a valid unit, since
 *  it is positive, but you can't measure anything in units of zero.
 * @param str the string to check
 */
export function isIntegerUnit(str) {
  return /^\d+$/.test(str);
}


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
 *  'units' which is an array that contains one array for each unit found:
 *    the unit's csCode_, the unit's name_, and the unit's guidance_
 *
 */
export function getSynonyms(theSyn) {

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
        'guidance': theUnit.guidance_};
    } // end do for all units returned
  } // end if we got a units list
  return retObj ;

} // end getSynonyms

