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
   * @param validListID the ID of the web page element to receive a list
   *  of units that match the string when there are multiple elements
   * @returns nothing
   */
  reportUnitStringValidity(elementID, returnElementID, validListID) {

    let uStr = document.getElementById(elementID).value;
    let valFld = document.getElementById(returnElementID);
    let valListFld = document.getElementById(validListID);
    valFld.innerHTML = '';
    valListFld.innerHTML = '';
    let retMsg = '';
    let listMsg = '';
    try {
      let ret = this.getSpecifiedUnit(uStr);
      if (ret['unit']) {
        retMsg = `${uStr} `;
        if (Array.isArray(ret['unit'])) {
          let aLen = ret['unit'].length ;
          if (aLen === 1) {
            retMsg += ' is a valid unit string and is used, with a ' +
                      'magnitude of ' + ret['unit'][0]['mag'] +
                      ' to define the unit ' + ret['unit'][0]['unit']['name_'] + '.';
          }
          else {
            retMsg += ' is a valid unit string and is used, with the ' +
                      'magnitude shown, to define the following units:';
            listMsg = '<table><th>magnitude</th><th>unit</th>';

            for (let i = 0; i < aLen; i++) {
              let aHash = ret['unit'][i];
              if (aHash['unit'])
                aHash = aHash['unit'];
              listMsg += '<tr><td>' + aHash['magnitude_'] + '</td>';
              listMsg += '<td>' + aHash['csCode_'] + ' - ' +
                  aHash['name_'] + '</td></tr>';
            }
            listMsg += '</table>';
            valListFld.innerHTML = listMsg;
          }
        }
        else {

          if (ret['unit']['csUnitString_'] !== uStr) {
            retMsg += ' - ' + ret['unit']['name_'] + ' - ' ;
          } // end if the returned unit is a predefined unit        }
          retMsg += ' is a valid unit string.';

        } // end if the returned unit is/is not an array
      }
      else
        retMsg = ret['msg'];
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
      fromUnit = this.getSpecifiedUnit(fromName)['unit'];
      if (Array.isArray(fromUnit)) {
        fromUnit = fromUnit[0];
        if (fromUnit['unit']) {
          fromUnit = fromUnit['unit']
        }
      }

      let toUnit = null;
      toUnit = this.getSpecifiedUnit(toName)['unit'];
      if (Array.isArray(toUnit)) {
        toUnit = toUnit[0];
        if (toUnit['unit']) {
          toUnit = toUnit['unit'];
        }
      }
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
   * This method takes a unit string and gets (or tries to get) the unit
   * represented by the string.   Using the string as the search criteria, it
   * tries the unit names table first.  If not found there, it tries the
   * unit codes table. If not found there it tries the unit strings table.
   * And if not found there, it tries to parse the string into a valid unit.
   *
   * @param uName the string representing the unit
   * @returns {{unit: the unit found for the string or null if not found,
   *            msg: a message indicating success or failure, with details}}
   */
  getSpecifiedUnit(uName) {

    uName = uName.trim();
    let utab = UnitTables.getInstance();
    let retMsg = '';
    let theUnit = null;

    // try parsing as a unit string
    try {
      let uStrParser = new UnitString();
      theUnit = uStrParser.parseString(uName);
    }
    catch(err) {
      console.log(`Unit requested for unit string ${uName}.` +
          'request unsuccessful; error thrown = ' + err.message);
      if (retMsg !== '')
        retMsg += ' and ';
      retMsg += `${uName} is not a valid unit.` ;
    }

    // ACTUALLY - we're not using the rest of the checks at this point,
    // but I'm leaving them in to see if we will at some poin.
    // then try by unit name
    if ((theUnit === null || theUnit === undefined) && (retMsg === '')) {
      try {
        theUnit = utab.getUnitByName(uName)
      }
      catch (err) {
        console.log(`Unit requested for unit string ${uName}.` +
            'request unsuccessful; error thrown = ' + err.message);
        retMsg = `An error occurred when trying to find ${uName}.`;
      }
    }

    // if that didn't work, try by unit code
    if (theUnit === null && retMsg === '') {
      try {
        theUnit = utab.getUnitByCode(uName);
      }
      catch(err) {
        console.log(`Unit requested for unit string ${uName}.` +
            'request unsuccessful; error thrown = ' + err.message);
        if (retMsg !== '')
          retMsg += ' and ';
        retMsg += `${uName} is not a valid unit.` ;
      }
    } // end if no unit nor an error on attempt to find by name

    // if that didn't work, try by unit string
    if ((theUnit === null || theUnit === undefined) && retMsg === '') {
      try {
        theUnit = utab.getUnitByString(uName);
      }
      catch(err) {
        console.log(`Unit requested for unit string ${uName}.` +
            'request unsuccessful; error thrown = ' + err.message);
        if (retMsg !== '')
          retMsg += ' and ';
        retMsg += `${uName} is not a valid unit.` ;
      }
    } // end if no unit nor an error on attempt to find by name or code

    if ((theUnit === null || theUnit === undefined) && (retMsg === '')) {
      retMsg = `Unable to find unit for name = ${uName}.`;
    }
    if (retMsg !== '')
      throw (new Error(retMsg));

    return {'unit': theUnit, 'msg': retMsg};

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
      fromUnit = this.getSpecifiedUnit(fromName)['unit'];
      if (Array.isArray(fromUnit)) {
        fromUnit = fromUnit[0];
        if (fromUnit['unit']) {
          fromUnit = fromUnit['unit']
        }
      }
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
