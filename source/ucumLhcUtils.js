/**
 * This class provides a single point of access to the LHC UCUM utilities
 *
 * @author Lee Mericle
 *
 */
var Ucum = require('./config.js').Ucum;
var UcumJsonDefs = require('./ucumJsonDefs.js').UcumJsonDefs ;
var UnitTables = require('./unitTables.js').UnitTables;
var UnitString = require('./unitString.js').UnitString;
var Unit = require('./unit.js').Unit;
var Fx = require('./functions.js');
var fs = require('fs');
var path = require('path');

//var utilsInstance = null;

export class UcumLhcUtils {

  /**
   * Constructor.  This loads the json prefix and unit definitions and
   * creates itself as a singleton object.
   *
   */
  constructor() {

      if (UnitTables.getInstance().unitsCount() === 0) {

        // Load the prefix and unit objects
        let uDefs = UcumJsonDefs.getInstance();
        uDefs.loadJsonDefs();
      }

      // Make this a singleton.  See UnitTables constructor for details.
      let holdThis = UcumLhcUtils.prototype;
      UcumLhcUtils = function () {
        throw (new Error('UcumLhcUtils is a Singleton. ' +
        'Use UcumLhcUtils.getInstance() instead.'));
      };
      if (exports)
        exports.UcumLhcUtils = UcumLhcUtils;
      UcumLhcUtils.prototype = holdThis;

    let self = this ;
    UcumLhcUtils.getInstance = function(){return self} ;

  } // end constructor


  /**
   * This method validates a unit string.  It first checks to see if the
   * string passed in is a unit code that is found in the unit codes table.
   * If it is not found it parses the string to see if it resolves to a
   * valid unit string.
   *
   * @param uStr the string to be validated
   * @param useEmph use HTML emphasis style in user messages; set to false
   *  if not defined
   * @returns true for a valid string; false for an invalid string
   */
  validUnitString(uStr, useEmph) {

    if (useEmph === undefined)
      useEmph = false ;

    //let retUnit = this.getSpecifiedUnit(uStr, useEmph);
    //return retUnit !== null ;

    return this.getSpecifiedUnit(uStr, useEmph);

  } // end validUnitString


  /**
   * This method converts one unit to another
   *
   * @param fromName the name of the unit to be converted
   * @param fromVal the number of "from" units to be converted to "to" units
   * @param toName the name of the unit that the from field is to be converted to
   * @param decDigits the maximum number of decimal digits to be displayed
   *  for the converted unit.  If not specified, the UCUM.decDigits_ value
   *  (defined in config.js) is used.
   * @param useEmph use HTML emphasis style in user messages; set to false
   *  if undefined
   * @returns a message indicating either the result of the conversion or an
   *  error message if an error occurred.
   */
  convertUnitTo(fromName, fromVal, toName, decDigits, useEmph) {

    if (decDigits === undefined)
      decDigits = Ucum.decDigits_;

    if (useEmph === undefined)
      useEmph = false ;

    let resultMsg = [];

    try {
      let parseResp = [];
      let fromUnit = null;

      parseResp = this.getSpecifiedUnit(fromName, useEmph);
      fromUnit = parseResp[0];
      if (parseResp[1].length > 0)
        resultMsg = parseResp[1];

      let toUnit = null;
      parseResp = this.getSpecifiedUnit(toName, useEmph);
      toUnit = parseResp[0];
      if (parseResp[1].length > 0) {
        if (resultMsg.length > 0)
          resultMsg = resultMsg.concat(parseResp[1]);
        else
          resultMsg = parseResp[1];
      }

      if (fromUnit && toUnit) {
        try {
          let toVal = toUnit.convertFrom(fromVal, fromUnit);
          toVal = toVal.toFixed(decDigits).replace(/\.?0+$/, "");
          resultMsg.push(fromVal.toString() + " " + fromUnit.getProperty('name_') +
                         " units = " + toVal.toString() + " " +
                         toUnit.getProperty('name_') + " units.");
        }
        catch (err) {
          resultMsg.push(err.message);
        }
      }  // end if we have the from and to units
    }
    catch (err) {
      resultMsg.push(err.message);
    }
    return resultMsg ;

  } // end convertUnitTo


  /**
   * This method parses a unit string to get (or try to get) the unit
   * represented by the string.
   *
   * @param uName the string representing the unit
   * @param useEmph use HTML emphasis style in user messages; set to false
   *  if undefined
   * @returns the unit found for the string
   * @throws a message if the unit is not found
   */
  getSpecifiedUnit(uName, useEmph) {

    uName = uName.trim();

    if (useEmph === undefined)
      useEmph = false ;

    let utab = UnitTables.getInstance();
    let retMsg = [];

    // go ahead and just try using the name as the code.  This may or may not
    // work, but if it does, it cuts out a lot of parsing.
    let theUnit = utab.getUnitByCode(uName);

    // If we didn't find it, try parsing as a unit string
    if (!theUnit) {
      try {
        let uStrParser = new UnitString();
        let parseResp = uStrParser.parseString(uName, useEmph);
        theUnit = parseResp[0];
        retMsg = parseResp[1];
      }
      catch (err) {
        console.log(`Unit requested for unit string ${uName}.` +
            'request unsuccessful; error thrown = ' + err.message);
        if (uName !== '' && uName !== null)
          retMsg.unshift(`${uName} is not a valid unit.  ${err.message}`);
        else
          retMsg.unshift(err.message);
      }
    }

    // if no error was thrown but no unit was found, create a not found message
    if ((theUnit === null || theUnit === undefined) && (retMsg === '')) {
      retMsg.unshift(`Unable to find unit for name = ${uName}.`);
    }

    return [theUnit, retMsg];

  } // end getSpecifiedUnit


  /**
   * This method retrieves a list of unit commensurable, i.e., that can be
   * converted from and to, a specified unit.  Throws an error if the "from"
   * unit cannot be found or if no commensurable units are found.
   *
   * @param fromName the name/unit string of the "from" unit
   * @param useEmph use HTML emphasis style in user messages; set to false
   *  if undefined
   * @returns the list of commensurable units if any were found
   *  @throws an error if the "from" unit is not found or if no commensurable
   *   units were found
   */
  commensurablesList(fromName, useEmph) {

    if (useEmph === undefined)
      useEmph = false ;
    let retMsg = []

    let parseResp = this.getSpecifiedUnit(fromName, useEmph);
    let fromUnit = parseResp[0];
    if (parseResp[1].length > 0)
      retMsg = parseResp[1] ;
    if (!fromUnit) {
       retMsg.push(`Could not find unit ${fromName}.`);
    }

    let commUnits = null;
    let fromDim = fromUnit.getProperty('dim_');
    let dimVec = fromDim.getProperty('dimVec_');
    if (dimVec) {
      let utab = UnitTables.getInstance();
      commUnits = utab.getUnitsByDimension(dimVec);
    }
    return [commUnits , retMsg];
  } // end commensurablesList


  /**
   * Creates a file containing a list of the units
   */
  printUnits() {

    // for now, create a list of the units created and save it to a file
    // for debugging.  This is a temporary file.
    let utab = UnitTables.getInstance();
    let uct = utab.unitsCount();
    let uList = utab.printUnits(true);
    console.log('in ucumLhcUtils.printUnits, about to write file.  uList ' +
                'length = ' + uList.length + '; uct = ' + uct);
    fs.writeFileSync('/home/lmericle/ucum/test/JsonUnitsList.txt', uList,
        {encoding: 'utf8', mode: 0o666, flag: 'w'} );
  }
} // end UcumLhcUtils class


/**
 *  This function exists ONLY until the original UcumLhcUtils constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton UcumLhcUtils object.  This is based on the UnitTables singleton
 *  implementation; see more detail in the UnitTables constructor description.
 *
 *  @return the singleton UcumLhcUtils object.
 */
UcumLhcUtils.getInstance = function(){
  return new UcumLhcUtils();
}

// Perform the first request for the utils object, to get the
// getInstance method set.
UcumLhcUtils.getInstance();
