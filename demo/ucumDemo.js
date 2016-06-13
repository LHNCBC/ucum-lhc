

/**
 * This is the code entry point for the demo web page.  It coordinates the
 * loading of the prefix and unit objects from the json definitions file and
 * populating the autocompleter unit lists.
 */

var Ucum = require('../source/config.js').Ucum;
var UcumLhcUtils = require("../source/ucumLhcUtils.js").UcumLhcUtils;
var UnitTables = require("../source/unitTables.js").UnitTables;

export class UcumDemo {

  constructor () {

    // run the constructors for the utils and unitTables classes to get
    // things initialized and data loaded.
    var utils = UcumLhcUtils.getInstance();
    var utab = UnitTables.getInstance();

    // Get a full list of unit names and assign it to a prefetch autocompleter
    var unames = utab.getUnitNamesList();
    var autoList = new Def.Autocompleter.Prefetch('unitsList', unames);

    // Set up an autocompleter for the "to" conversion fields.  It will be
    // populated with commensurable units in based on what the user enters
    // in the "from" field.
    this.toAuto_ = new Def.Autocompleter.Prefetch('convertTo', []);

    // Make this a singleton.  See UnitTables constructor for details.

    let holdThis = UcumDemo.prototype;
    UcumDemo = function () {
      throw (new Error('UcumDemo is a Singleton.  ' +
                       'Use UcumLhcDemo.getInstance() instead.'));
    };
    if (exports)
      exports.UcumDemo = UcumDemo;
    UcumDemo.prototype = holdThis;

    let self = this ;
    UcumDemo.getInstance = function(){return self} ;
  }


  /**
   * This method validates a string that is supposed to be representing a valid
   * unit. It indicates whether or not the string translates to a valid unit.
   *
   * @param elementID the ID of the web page element that contains the
   *  string to be validated
   * @param returnElementID the ID of the web page element to receive the
   *  return validation message
   * @returns nothing directly; return is the validation message
   */
  reportUnitStringValidity(elementID, returnElementID) {

    let uStr = document.getElementById(elementID).value;
    let valFld = document.getElementById(returnElementID);
    valFld.innerHTML = '';
    let retMsg = '';

    try {
      let utils = UcumLhcUtils.getInstance();
      let ret = utils.validUnitString(uStr);
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
    let fromVal = parseFloat(document.getElementById(numField).value);
    let toName = document.getElementById(toField).value;
    let codePos = toName.indexOf(Ucum.codeSep_);
    if (codePos > 0)
      toName = toName.substr(0, codePos);

    let utils = UcumLhcUtils.getInstance();
    let resultMsg = utils.convertUnitTo(fromName, fromVal,
                                               toName, decDigits);

    // Put the message - conversion or error - on the page
    let resultString = document.getElementById("resultString");
    resultString.innerHTML = resultMsg;
  } // end convertUnit


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
    let resultMsg = null;

    try {
      let utils = UcumLhcUtils.getInstance();
      let commUnits = utils.commensurablesList(fromName);
      // If we can't find any, don't panic.  The user could still enter one
      // that's not on our list but is commensurable.  So if none are found,
      // just move on.   Nothin' to see here.
      if (commUnits) {
        let cLen = commUnits.length;
        let commNames = [];
        for (let i = 0; i < cLen; i++)
          commNames[i] = commUnits[i].getProperty('csCode_') + Ucum.codeSep_ +
              commUnits[i].getProperty('name_');
        let utabs = UnitTables.getInstance();
        commNames.sort(utabs.compareCodes);
        this.toAuto_.setList(commNames)
      }
    }
    catch (err) {
      resultMsg = err.message;
    }
    if (resultMsg) {
      resultString.innerHTML = resultMsg ;
    }
  } // end getCommensurables


  /**
   *  This toggles the display of a given form element.  It changes the
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

} // end class UcumDemo


/**
 *  This function exists ONLY until the original UcumDemo constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton UcumLhcUtils object.  This is based on the UnitTables singleton
 *  implementation; see more detail in the UnitTables constructor description.
 *
 *  @return the singleton UcumLhcUtils object.
 */
UcumDemo.getInstance = function(){
  return new UcumDemo();
}

// Perform the first request for the demo object, to get the
// getInstance method set.
UcumDemo.getInstance();
