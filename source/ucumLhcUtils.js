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
var Prefix = require('./prefix.js').Prefix;
var fs = require('fs');

/**
 * Constructor; initiates load of the prefix and units objects
 */
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
   * This method calls the useHTMLInMessages method on the (singleton)
   * UnitString object.  It should be called by web applications that use
   * these utilities.
   *
   * @param use flag indicating whether or not to use the braces message;
   *  defaults to true
   */
  useHTMLInMessages(use) {
    let us = UnitString.getInstance() ;
    if (use === undefined)
      use = true ;
    us.useHTMLInMessages(use);
  }


  /**
   * This method calls the useBraceMsgForEachString method on the (singleton)
   * UnitString object.  It should be called by web applications where unit
   * strings are validated individually (as opposed to validating a whole
   * file of unit strings).
   *
   * @param use flag indicating whether or not to use the braces message;
   *  defaults to true
   */
  useBraceMsgForEachString(use) {
    let us = UnitString.getInstance() ;
    if (use === undefined)
      use = true ;
    us.useBraceMsgForEachString(use);
  }


  /**
   * This method validates a unit string.  It first checks to see if the
   * string passed in is a unit code that is found in the unit codes table.
   * If it is not found it parses the string to see if it resolves to a
   * valid unit string.
   *
   * @param uStr the string to be validated
   * @returns an object with two properties:
   *  'status' either 'valid' or 'invalid'
   *  'ucumCode' the valid ucum code, which may differ from what was passed
   *    in (e.g., if 'pound' is passed in, this will contain '[lb_av]'); and
   *   'msg' contains a message, if the string is invalid, indicating
   *         the problem, or an explanation of a substitution such as the
   *         substitution of '[lb_av]' for 'pound'
   */
  validUnitString(uStr) {

    let resp = this.getSpecifiedUnit(uStr);
    let retObj = {'status' : (resp[0] !== null ? 'valid' : 'invalid'),
                  'ucumCode' : resp[1],
                  'msg': resp[2]};
    return retObj;

  } // end validUnitString


  /**
   * This method converts one unit to another
   *
   * @param fromUnitCode the unit code/expression/string of the unit to be converted
   * @param fromVal the number of "from" units to be converted to "to" units
   * @param toUnitCode the unit code/expression/string of the unit that the from
   *  field is to be converted to
   * @param decDigits the maximum number of decimal digits to be displayed
   *  for the converted unit.  If not specified, the UCUM.decDigits_ value
   *  (defined in config.js) is used.
   * @returns an object with three elements:
   *  'status' either 'succeeded' or 'failed';
   *  'toVal' the numeric value indicating the conversion amount, or null
   *     null if the conversion failed (e.g., if the units are not commensurable)
   *  'msg' an array of any messages returned, including a description of
   *     a successful result or an error message if an error occurred.
   */
  convertUnitTo(fromUnitCode, fromVal, toUnitCode, decDigits) {

    if (decDigits === undefined)
      decDigits = Ucum.decDigits_;

    let resultMsg = [];
    let returnObj = {'status' : 'failed',
                     'toVal' : null} ;

    try {
      let fromUnit = null;

      let parseResp = this.getSpecifiedUnit(fromUnitCode);
      fromUnit = parseResp[0];
      if (parseResp[2].length > 0)
        resultMsg = parseResp[2];

      let toUnit = null;
      parseResp = this.getSpecifiedUnit(toUnitCode);
      toUnit = parseResp[0];
      if (parseResp[2].length > 0) {
        if (resultMsg.length > 0)
          resultMsg = resultMsg.concat(parseResp[2]);
        else
          resultMsg = parseResp[2];
      }

      if (fromUnit && toUnit) {
        try {
          let toVal = toUnit.convertFrom(fromVal, fromUnit);
          toVal = toVal.toFixed(decDigits).replace(/\.?0+$/, "");
          resultMsg.push(fromVal.toString() + " " + fromUnit.getProperty('csCode_') +
                         " = " + toVal.toString() + " " +
                         toUnit.getProperty('csCode_'));
          returnObj['toVal'] = toVal ;
          returnObj['status'] = 'succeeded';
        }
        catch (err) {
          resultMsg.push(err.message);
        }
      }  // end if we have the from and to units
    }
    catch (err) {
      resultMsg.push(err.message);
    }
    returnObj['msg'] = resultMsg;
    return returnObj ;

  } // end convertUnitTo


  /**
   * This method parses a unit string to get (or try to get) the unit
   * represented by the string.
   *
   * @param uName the expression/string representing the unit
   * @returns an array containing the unit found for the string (or null if
   *  no unit was found), a (possibly) updated version of the string (for
   *  cases where a unit name was specified and the code was found for it)
   *  and a message array containing any returned
   */
  getSpecifiedUnit(uName) {

    uName = uName.trim();

    let utab = UnitTables.getInstance();
    let retMsg = [];
    let retUnitString = null;

    // go ahead and just try using the name as the code.  This may or may not
    // work, but if it does, it cuts out a lot of parsing.
    let theUnit = utab.getUnitByCode(uName);

    // If we found it, set the returned unit string to what was passed in;
    // otherwise try parsing as a unit string
    if (theUnit) {
      retUnitString = uName ;
    }
    else {
      try {
        let uStrParser = UnitString.getInstance();
        let parseResp = uStrParser.parseString(uName);
        theUnit = parseResp[0];
        retUnitString = parseResp[1];
        retMsg = parseResp[2];
      }
      catch (err) {
        console.log(`Unit requested for unit string ${uName}.` +
            'request unsuccessful; error thrown = ' + err.message);
        if (uName)
          retMsg.unshift(`${uName} is not a valid unit.  ${err.message}`);
        else
          retMsg.unshift(err.message);
      }
    }

    // if no error was thrown but no unit was found, create a not found message
    if ((theUnit === null || theUnit === undefined) && (retMsg === '')) {
      retMsg.unshift(`Unable to find unit for name = ${uName}.`);
    }

    return [theUnit, retUnitString, retMsg];

  } // end getSpecifiedUnit


  /**
   * This method retrieves a list of units commensurable, i.e., that can be
   * converted from and to, a specified unit.  Returns an error if the "from"
   * unit cannot be found.
   *
   * @param fromName the name/unit string of the "from" unit
   * @returns an array containing two elements;
   *   first element is the list of commensurable units if any were found
   *   second element is an error message if the "from" unit is not found
   */
  commensurablesList(fromName) {

    let retMsg = [];
    let commUnits = null ;
    let parseResp = this.getSpecifiedUnit(fromName);
    let fromUnit = parseResp[0];
    if (parseResp[2].length > 0)
      retMsg = parseResp[2] ;
    if (!fromUnit) {
      retMsg.push(`Could not find unit ${fromName}.`);
    }
    else {
      let dimVec = null ;
      let fromDim = fromUnit.getProperty('dim_');
      try {
        dimVec = fromDim.getProperty('dimVec_');
      }
      catch (err) {
        if (err.message ===
            "Dimension does not have requested property(dimVec_)")
          dimVec = null ;
      }
      if (dimVec) {
        let utab = UnitTables.getInstance();
        commUnits = utab.getUnitsByDimension(dimVec);
      }
    } // end if we found a "from" unit
    return [commUnits , retMsg];
  } // end commensurablesList


  /**
   * Creates a file containing a list of the units.  The file is created
   * in the current directory.
   */
  printUnits() {

    // for now, create a list of the units created and save it to a file
    // for debugging.  This is a temporary file.
    let utab = UnitTables.getInstance();
    let uct = utab.unitsCount();
    let uList = utab.printUnits(true);
    console.log('in ucumLhcUtils.printUnits, about to write file.  uList ' +
                'length = ' + uList.length + '; uct = ' + uct);
    fs.writeFileSync('JsonUnitsList.txt', uList,
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
