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

      this.fromAuto_ = null;
      this.toAuto_ = null;

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
   * This is used to retain a reference to the autocompleters used in the
   * "from" and "to" unit fields for unit conversions.  The list for the
   * "to" unit field is updated with commensurable units when a "from" unit
   * is specified.
   *
   * The autocompleters are set up in the main.js code and this is called
   * after they are first set up.
   *
   * @param from a reference to the autocompleter used for the "from" unit field
   * @param to a reference to the autocompleter used for the "to" unit field
   * @returns nothing
   */
  setAutocompleters(from, to) {
    this.fromAuto_ = from ;
    this.toAuto_ = to ;
  }


  /**
   * This method validates a string that is supposed to be representing a valid
   * unit. It indicates whether or not the string translates to a valid unit,
   * and if so, if that unit is a predefined UCUM unit or a combination of
   * them.  If the string resolves to multiple units, those are shown with
   * their magnitudes (which should in theory differ, but don't always).
   *
   * @param elementID the ID of the web page element that contains the
   *  string to be validated
   * @param returnElementID the ID of the web page element to receive the
   *  return validation message
   * @returns nothing
   */
  reportUnitStringValidity(elementID, returnElementID) {

    let uStr = document.getElementById(elementID).value;
    let valFld = document.getElementById(returnElementID);
    valFld.innerHTML = '';
    let retMsg = '';

    try {
      let ret = this.getSpecifiedUnit(uStr);
      if (ret)
        retMsg = `${uStr} is a valid unit.` ;
    }
    catch(err) {
      retMsg = err.message
    }
    valFld.innerHTML = retMsg;
  } // end reportUnitStringValidity


  /**
   * This method converts one unit to another
   *
   * @param fromField the ID of the field containing the name of the unit to
   *  be converted
   * @param numField the ID of the field containing the number of "from" units
   *  to be converted to "to" units
   * @param toField the ID of the field containing the name of the unit that
   *  the from field is to be converted to
   * @param decDigits the maximum number of decimal digits to be displayed
   *  for the converted unit.  If not specified, the UCUM.decDigits_ value
   *  (defined in config.js) is used.
   */
  convertUnit(fromField, numField, toField, decDigits) {

    if (decDigits === undefined)
      decDigits = Ucum.decDigits_;

    let fromName = document.getElementById(fromField).value ;
    let fromMag = parseFloat(document.getElementById(numField).value);
    let toName = document.getElementById(toField).value;
    let codePos = toName.indexOf(Ucum.codeSep_);
    if (codePos > 0)
      toName = toName.substr(0, codePos);
    // create a from unit
    let resultMsg = '';

    try {
      let fromUnit = null;
      fromUnit = this.getSpecifiedUnit(fromName);

      let toUnit = null;
      toUnit = this.getSpecifiedUnit(toName);

      if (fromUnit && toUnit) {
        try {
          let toMag = toUnit.convertFrom(fromMag, fromUnit);
          toMag = toMag.toFixed(decDigits).replace(/\.?0+$/, "");

          resultMsg = fromMag.toString() + " " + fromUnit.getProperty('name_') +
                      " units = " + toMag.toString() + " " +
                      toUnit.getProperty('name_') + " units."
        }
        catch (err) {
          resultMsg = err.message;
        }
      }  // end if we have the from and to units
    }
    catch (err) {
      resultMsg = err.message;
    }

    // Put the message - conversion or error - on the page
    let resultString = document.getElementById("resultString");
    resultString.innerHTML = resultMsg;
  } // end convertUnit


  /**
   * This method parses a unit string to gets (or try to get) the unit
   * represented by the string.
   *
   * @param uName the string representing the unit
   * @returns the unit found for the string or null if not found
   * @throws a message if the unit is not found
   */
  getSpecifiedUnit(uName) {

    uName = uName.trim();
    let utab = UnitTables.getInstance();
    let retMsg = '';

    // go ahead and just try using the name as the code.  This may or may not
    // work, but if it does, it cuts out a lot of parsing.
    let theUnit = utab.getUnitByCode(uName);

    // If we didn't find it, try parsing as a unit string
    if (!theUnit) {
      try {
        let uStrParser = new UnitString();
        theUnit = uStrParser.parseString(uName);
      }
      catch (err) {
        console.log(`Unit requested for unit string ${uName}.` +
            'request unsuccessful; error thrown = ' + err.message);
        if (retMsg !== '')
          retMsg += ' and ';
        retMsg += `${uName} is not a valid unit.`;
      }
    }

    // if no error was thrown but no unit was found, create a not found message
    if ((theUnit === null || theUnit === undefined) && (retMsg === '')) {
      retMsg = `Unable to find unit for name = ${uName}.`;
    }
    if (retMsg !== '')
      throw (new Error(retMsg));

    return theUnit;

  } // end getSpecifiedUnit


  /**
   * This method retrieves a list of unit commensurable, i.e., that can be
   * converted from and to, a specified unit.  Throws an error if the "from"
   * unit cannot be found or if no commensurable units are found.
   *
   * @param fromField the ID of the field where the "from" unit is specified
   * @param toField the ID of the field to receive the list of commensurable
   *  units
   * @param resultField the ID of the field to receive an error message if one
   *  is thrown
   * @returns nothing but sets the autocompleter list in the "toField" to the
   *   commensurable units if any were found
   *  @throws an error if the "from" unit is not found or if no commensurable
   *   units were found
   */
  getCommensurables(fromField, toField, resultField) {
    let toFld = document.getElementById(toField);
    toFld.innerHTML = '';
    this.toAuto_.setList('');
    let resultString = document.getElementById(resultField);
    resultString.innerHTML = '';

    let fromName = document.getElementById(fromField).value;
    let fromUnit = null;
    let resultMsg = null;
    try {
      fromUnit = this.getSpecifiedUnit(fromName);
      if (!fromUnit) {
        throw (new Error(`Could not find unit ${fromName}.`));
      }
    }
    catch (err){
      resultMsg = err.message ;
    }
    if (fromUnit) {
      try {
        let fromDim = fromUnit.getProperty('dim_');
        let dimVec = fromDim.getProperty('dimVec_');
        let commUnits = null;
        let utab = UnitTables.getInstance();
        if (dimVec)
          commUnits = utab.getUnitsByDimension(dimVec);
        // If we can't find any, don't panic.  The user could still enter one
        // that's not on our list but is commensurable.  So if none are found,
        // just move on.   Nothin' to see here.
        if (commUnits) {
          let cLen = commUnits.length;
          let commNames = [];
          for (let i = 0; i < cLen; i++)
            commNames[i] = commUnits[i].getProperty('csCode_') + Ucum.codeSep_ +
                commUnits[i].getProperty('name_');
          this.toAuto_.setList(commNames)
        }
      }
      catch (err) {
        resultMsg = err.message;
      }
    } // end if we found a unit
    if (resultMsg) {
      resultString.innerHTML = resultMsg ;
    }
  } // end getCommensurables


  /**
   *  This toggles the display of a give form element.  It changes the
   *  style display state from "none" to "block" or "block" to "none"
   *  depending on its current state.
   *
   *  It also can change the text on the button specified.  This is optional.
   *
   * @param elementID the ID of the target element
   * @param buttonID the ID of the button whose text is to be changed.  This
   *  is optional, but if specified the following 2 text parameters must be
   *  supplied
   * @param blockText the text that shows on the button when the target element
   *  is currently not displayed (before being toggled).
   * @param noneText the text that shows on the button when the target element
   *  is currently displayed (before being toggled).
   *
   */
  toggleDisplay(elementID, buttonID, blockText, noneText) {
    let theElement = document.getElementById(elementID);
    let theButton = null;
    if (buttonID)
      theButton = document.getElementById(buttonID);
    if (theElement) {
      if (theElement.style.display === "none") {
        theElement.style.display = "block";
        if (theButton)
          theButton.innerText = theButton.innerText.replace(noneText, blockText);
      }
      else {
        theElement.style.display = "none";
        if (theButton)
          theButton.innerText = theButton.innerText.replace(blockText, noneText);
      }
    }
  }


  /**
   *  TODO: This provides a list of all unit codes.  The list is either case
   *  sensitive or case-insensitive, depending on the configuration
   *  setting in config.js
   */
  allUnitCodes() {

  }


  /**
   *  TODO: This provides a list of all unit names (descriptions).  The names
   *  are returned as an array of names.  For most units the array will
   *  contain one name, but because names are sometimes duplicated, not
   *  all of the arrays returned will contain just one entry.
   */
  allUnitNames() {

  }

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
