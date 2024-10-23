/**
 * This class provides a single point of access to the LHC UCUM utilities
 *
 * @author Lee Mericle
 *
 */
var Ucum = require('./config.js').Ucum;
import {ucumJsonDefs} from './ucumJsonDefs.js';
var UnitTables = require('./unitTables.js').UnitTables;
var UnitString = require('./unitString.js').UnitString;

import * as intUtils_ from "./ucumInternalUtils.js";

/**
 * UCUM external utilities class
 */
export class UcumLhcUtils {

  /**
   * Constructor.  This loads the json prefix and unit definitions if
   * they haven't been loaded already and creates itself as a singleton object.
   *
   */
  constructor() {

    if (UnitTables.getInstance().unitsCount() === 0) {

      // Load the prefix and unit objects
      ucumJsonDefs.loadJsonDefs();
    }

    // Get the UnitString parser that will be used with this instance
    // of the LHC Utilities
    this.uStrParser_ = UnitString.getInstance();

    // Get a copy of the mass dimension index.
    this.massDimIndex_ =  UnitTables.getInstance().getMassDimensionIndex();
  } // end constructor


  /**
   * This method calls the useHTMLInMessages method on the UnitString
   * object.  It should be called by web applications that use
   * these utilities.
   *
   * @param use flag indicating whether or not to use the braces message;
   *  defaults to true
   */
  useHTMLInMessages(use) {
    if (use === undefined)
      use = true ;
    this.uStrParser_.useHTMLInMessages(use);
  }


  /**
   * This method calls the useBraceMsgForEachString method on the UnitString
   * object.  It should be called by web applications where unit
   * strings are validated individually (as opposed to validating a whole
   * file of unit strings).
   *
   * @param use flag indicating whether or not to use the braces message;
   *  defaults to true
   */
  useBraceMsgForEachString(use) {
    if (use === undefined)
      use = true ;
    this.uStrParser_.useBraceMsgForEachString(use);
  }


  /**
   * This method validates a unit string.  It first checks to see if the
   * string passed in is a unit code that is found in the unit codes table.
   * If it is not found it parses the string to see if it resolves to a
   * valid unit string.
   *
   * If a valid unit cannot be found, the string is tested for some common
   * errors, such as missing brackets or a missing multiplication operator.
   * If found, the error is reported in the messages array that is returned.
   *
   * If a valid unit cannot be found and an error cannot be discerned, this
   * may return, if requested, a list of suggested units in the messages
   * array that is returned.  Suggestions are based on matching the expression
   * with unit names and synonyms.
   *
   * @param uStr the string to be validated
   * @param suggest a boolean to indicate whether or not suggestions are
   *  requested for a string that cannot be resolved to a valid unit;
   *  true indicates suggestions are wanted; false indicates they are not,
   *  and is the default if the parameter is not specified;
   * @param valConv a string indicating if this validation request was initiated
   *  by a validation task ('validate') or a conversion task ('convert'),
   *  used only for the demo code, and the default is 'Validator' if the
   *  parameter is not specified;
   * @returns an object with five properties:
   *  'status' will be 'valid' (the uStr is a valid UCUM code), 'invalid'
   *     (the uStr is not a valid UCUM code, and substitutions or
   *     suggestions may or may not be returned, depending on what was
   *     requested and found); or 'error' (an input or programming error
   *     occurred);
   *  'ucumCode' the valid ucum code, which may differ from what was passed
   *    in (e.g., if 'Gauss' is passed in, this will contain 'G') OR null if
   *    the string was flagged as invalid or an error occurred;
   *  'msg' is an array of one or more messages, if the string is invalid or
   *        an error occurred, indicating the problem, or an explanation of a
   *        substitution such as the substitution of 'G' for 'Gauss', or
   *        an empty array if no messages were generated;
   *  'unit' which is null if no unit is found, or a hash for a unit found:
   *    'code' is the unit's ucum code (G in the above example;
   *    'name' is the unit's name (Gauss in the above example); and
   *    'guidance' is the unit's guidance/description data; and
   *  'suggestions' if suggestions were requested and found, this is an array
   *     of one or more hash objects.  Each hash contains three elements:
   *     'msg' which is a message indicating what part of the uStr input
   *        parameter the suggestions are for;
   *     'invalidUnit' which is the unit expression the suggestions are
   *        for; and
   *     'units' which is an array of data for each suggested unit found.
   *        Each array will contain the unit code, the unit name and the
   *        unit guidance (if any).
   *     If no suggestions were requested and found, this property is not
   *     returned.
   */
  validateUnitString(uStr, suggest, valConv) {

    if (suggest === undefined)
      suggest = false ;

    if (valConv === undefined)
      valConv = 'validate' ;

    let resp = this.getSpecifiedUnit(uStr, valConv, suggest);
    let theUnit = resp['unit'];
    let retObj = !theUnit ? {'ucumCode': null} :
      {'ucumCode': resp['origString'],
       'unit': {'code': theUnit.csCode_,
                'name': theUnit.name_,
                'guidance': theUnit.guidance_ }};
    retObj.status = resp.status;
    if (resp['suggestions']) {
      retObj['suggestions'] = resp['suggestions'];
    }
    retObj['msg'] = resp['retMsg'];
    return retObj;

  } // end validateUnitString


// Note that below when the value of ConversionType is mol|mass, it refers to
// either a conversion from mol to mass or from mass to mol.
/**
 * @typedef {
 *   'normal',
 *   'mol|mass',
 *   'eq|mass',
 *   'eq|mol',
 *   'eq|mol|mass'
 * } ConversionType
 */

 /**
  * Detects the type of conversion between two units.
  *
  * @param {Object} fromUnit - The unit to convert from.
  * @param {Object} toUnit - The unit to convert to.
  * @returns {ConversionType} conversionType - The type of conversion as a string.
  */
  detectConversionType(fromUnit, toUnit) {
    /** @type {ConversionType} */
    let conversionType;
    if (fromUnit.moleExp_ == toUnit.moleExp_ &&
        fromUnit.equivalentExp_ == toUnit.equivalentExp_) {
      // Since the powers of the equivalents and mole in the units are the same in both
      // units, no conversion is going to happen between mass, mol, and eq.
      // There is the possibility that someone is trying to convert 'g' to 'g2',
      // but we will handle that as the "normal" case (and later find it invalid).
      conversionType = 'normal';
    }
    else if (fromUnit.equivalentExp_ == toUnit.equivalentExp_) {
      // In this case, the units have the same power of equivalents, so (because
      // it is not the first case) the units have different powers of mol and mass,
      // so this must be a conversion between mol and mass.
      conversionType = 'mol|mass';
    }
    else if (fromUnit.moleExp_ == toUnit.moleExp_) {
      // In this case, the units have the same power of mol, so (because
      // it is not the first case) the units have different powers of equivalents and mass,
      // so this must be a conversion between equivalents and mass.
      conversionType = 'eq|mass';
    }
    else if (fromUnit.dim_.getElementAt(this.massDimIndex_) ==
          toUnit.dim_.getElementAt(this.massDimIndex_)) {
      // In this case, the units have the same power of mass, so (because
      // it is not the first case) the units have different powers of equivalents and mol,
      // so this must be a conversion between equivalents and moles.
      conversionType = 'eq|mol';
    }
    else {
      // In this case, the units have different powers of mass, mol, and
      // equivalents, so there is a conversion between mass, mol, and
      // equivalents.
      conversionType = 'eq|mol|mass';
    }

    return conversionType;
  } // end detectConversionType


  /**
   * @typedef {{
   *   status: 'succeeded' | 'failed' | 'error',
   *   toVal: number | null,
   *   msg: string[],
   *   suggestions: {
   *     from: {
   *       msg: string,
   *       invalidUnit: string,
   *       units: string[]
   *     },
   *     to: {
   *       msg: string,
   *       invalidUnit: string,
   *       units: string[]
   *     }
   *   },
   *  fromUnit: string,
   *  toUnit: string
   * }} ConvertUnitResult
   */


  /**
   * This method converts one unit to another
   *
   * @param {string} fromUnitCode - the unit code/expression/string of the unit to be converted
   * @param {number | string} fromVal - the number of "from" units to be converted to "to" units
   * @param {string} toUnitCode - the unit code/expression/string of the unit that the from field is to be converted to
   * @param {{
   *   suggest?: boolean,
   *   molecularWeight?: number
   *   charge?: number
   * }} options
   *  - suggest: a boolean to indicate whether or not suggestions are requested for a string that cannot be resolved to a valid unit;
   *    true indicates suggestions are wanted; false indicates they are not, and is the default if the parameter is not specified;
   *  - molecularWeight: the molecular weight of the substance in question when a conversion is being requested from mass to moles and vice versa.
   *    This is required when one of the units represents a value in moles.  It is ignored if neither unit includes a measurement in moles.
   *  - charge: the absolute value of the charge of the substance in question when a conversion is being requested from mass/moles to
   *    equivalents and vice versa. It is required when one of the units represents a value in equivalents and the other in mass or moles.
   *    It is ignored if neither unit includes an equivalent unit.
   * @returns {ConvertUnitResult}
   * - a hash with six elements:
   *   - 'status' that will be: 'succeeded' if the conversion was successfully
   *     calculated; 'failed' if the conversion could not be made, e.g., if
   *     the units are not commensurable; or 'error' if an error occurred;
   *   - 'toVal' the numeric value indicating the conversion amount, or null
   *     if the conversion failed (e.g., if the units are not commensurable);
   *   - 'msg' is an array message, if the string is invalid or an error occurred,
   *     indicating the problem, or an explanation of a substitution such as
   *     the substitution of 'G' for 'Gauss', or an empty array if no
   *     messages were generated;
   *   - 'suggestions' if suggestions were requested and found, this is a hash
   *     that contains at most two elements:
   *     - 'from' which, if the fromUnitCode input parameter or one or more of
   *       its components could not be found, is an array one or more hash
   *       objects.  Each hash contains three elements:
   *       - 'msg' which is a message indicating what unit expression the
   *          suggestions are for;
   *       - 'invalidUnit' which is the unit expression the suggestions
   *          are for; and
   *       - 'units' which is an array of data for each suggested unit found.
   *          Each array will contain the unit code, the unit name and the
   *          unit guidance (if any).
   *       If no suggestions were found for the fromUnitCode this element
   *       will not be included.
   *     - 'to' which, if the "to" unit expression or one or more of its
   *       components could not be found, is an array one or more hash objects.  Each hash
   *       contains three elements:
   *       - 'msg' which is a message indicating what toUnitCode input
   *          parameter the suggestions are for;
   *       - 'invalidUnit' which is the unit expression the suggestions
   *          are for; and
   *       - 'units' which is an array of data for each suggested unit found.
   *          Each array will contain the unit code, the unit name and the
   *          unit guidance (if any).
   *       If no suggestions were found for the toUnitCode this element
   *       will not be included.
   *       No 'suggestions' element will be included in the returned hash
   *       object if none were found, whether or not they were requested.
   *   - 'fromUnit' the unit object for the fromUnitCode passed in; returned
   *     in case it's needed for additional data from the object; and
   *   - 'toUnit' the unit object for the toUnitCode passed in; returned
   *     in case it's needed for additional data from the object.
   */
  convertUnitTo(fromUnitCode, fromVal, toUnitCode, options = {}) {
    let {suggest = false, molecularWeight = null, charge = null} = options;

    /** @type {ConvertUnitResult} */
    let returnObj = {
      'status': 'failed',
      'toVal': null,
      'msg': []
    };

    if (fromUnitCode) {
      fromUnitCode = fromUnitCode.trim();
    }
    if (!fromUnitCode || fromUnitCode == '') {
      returnObj['status'] = 'error';
      returnObj['msg'].push('No "from" unit expression specified.');
    }
    this._checkFromVal(fromVal, returnObj);
    if (toUnitCode) {
      toUnitCode = toUnitCode.trim();
    }
    if (!toUnitCode || toUnitCode == '') {
      returnObj['status'] = 'error';
      returnObj['msg'].push('No "to" unit expression specified.');
    }
    if (returnObj['status'] !== 'error') {
      let fromUnit = null;

      let parseResp = this.getSpecifiedUnit(fromUnitCode, 'convert', suggest);
      fromUnit = parseResp['unit'];
      if (parseResp['retMsg'])
        returnObj['msg'] = returnObj['msg'].concat(parseResp['retMsg']);
      if (parseResp['suggestions']) {
        returnObj['suggestions'] = {};
        returnObj['suggestions']['from'] = parseResp['suggestions'];
      }
      if (!fromUnit) {
        returnObj['msg'].push(`Unable to find a unit for ${fromUnitCode}, ` +
          `so no conversion could be performed.`);
      }

      let toUnit = null;
      parseResp = this.getSpecifiedUnit(toUnitCode, 'convert', suggest);
      toUnit = parseResp['unit'];
      if (parseResp['retMsg'])
        returnObj['msg'] = returnObj['msg'].concat(parseResp['retMsg']);
      if (parseResp['suggestions']) {
        if (!returnObj['suggestions'])
          returnObj['suggestions'] = {};
        returnObj['suggestions']['to'] = parseResp['suggestions'];
      }
      if (!toUnit) {
        returnObj['msg'].push(`Unable to find a unit for ${toUnitCode}, ` +
          `so no conversion could be performed.`);
      }

      if (fromUnit && toUnit) {
        const convertType = this.detectConversionType(fromUnit, toUnit);
        const msgCountBeforeConvert = returnObj['msg'].length;
        switch (convertType) {
          case 'normal':
            try {
              returnObj['toVal'] = toUnit.convertFrom(fromVal, fromUnit);
            } catch (err) {
              if (err.message == Ucum.needMoleWeightMsg_)
                returnObj['status'] = 'failed';
              else
                returnObj['status'] = 'error';
              returnObj['msg'].push(err.message);
            }
            break;
          case 'mol|mass':
            if (!fromUnit.isMolMassCommensurable(toUnit)) {
              returnObj['msg'].push(`Sorry.  ${fromUnitCode} cannot be ` +
                `converted to ${toUnitCode}.`);
              break;
            }
            if (!molecularWeight) {
              returnObj['msg'].push(Ucum.needMoleWeightMsg_);
              break;
            }
            returnObj['toVal'] = fromUnit.convertMolMass(fromVal, toUnit, molecularWeight);
            break;
          case 'eq|mass':
            if (!fromUnit.isEqMassCommensurable(toUnit)) {
              returnObj['msg'].push(`Sorry.  ${fromUnitCode} cannot be ` +
                `converted to ${toUnitCode}.`);
              break;
            }
            if (!molecularWeight) {
              returnObj['msg'].push(Ucum.needEqWeightMsg_);
            }
            if (!charge) {
              returnObj['msg'].push(Ucum.needEqChargeMsg_);
            }
            if (!returnObj['msg'].length) {
              returnObj['toVal'] = fromUnit.convertEqMass(fromVal, toUnit, molecularWeight, charge);
            }
            break;
          case 'eq|mol':
            if (!fromUnit.isEqMolCommensurable(toUnit)) {
              returnObj['msg'].push(`Sorry.  ${fromUnitCode} cannot be ` +
                `converted to ${toUnitCode}.`);
              break;
            }
            if (!charge) {
              returnObj['msg'].push(Ucum.needEqChargeMsg_);
              break;
            }
            returnObj['toVal'] = fromUnit.convertEqMol(fromVal, toUnit, charge);
            break;
          case 'eq|mol|mass':
            if (!fromUnit.isEqMolMassCommensurable(toUnit)) {
              returnObj['msg'].push(`Sorry.  ${fromUnitCode} cannot be ` +
                `converted to ${toUnitCode}.`);
              break;
            }
            if (!molecularWeight) {
              returnObj['msg'].push(Ucum.needEqWeightMsg_);
            }
            if (!charge) {
              returnObj['msg'].push(Ucum.needEqChargeMsg_);
            }
            if (!returnObj['msg'].length) {
              returnObj['toVal'] = fromUnit.convertEqMolMass(fromVal, toUnit, molecularWeight, charge);
            }
            break;
          default:
            returnObj['msg'].push("Unknown conversion type.  No conversion was attempted.");
        }
        if (returnObj['msg'].length > msgCountBeforeConvert) {
          // If one or more failure messages are pushed into returnObj['msg']
          // in the switch statement, mark the status as 'failed'.
          returnObj['status'] = 'failed';
        } else {
          // Set the return object to show success.
          returnObj['status'] = 'succeeded';
          returnObj['fromUnit'] = fromUnit;
          returnObj['toUnit'] = toUnit;
        }
      } // end if we have the from and to units
    }

    return returnObj;

  } // end convertUnitTo


  /**
   *  Converts the given unit string into its base units, their exponents, and
   *  a magnitude, and returns that data.
   * @param fromUnit the unit string to be converted to base units information
   * @param fromVal the number of "from" units to be converted
   * @returns an object with the properties:
   *  'status' indicates whether the result succeeded.  The value will be one of:
   *    'succeeded':  the conversion was successfully calculated (which can be
   *      true even if it was already in base units);
   *    'invalid':  fromUnit is not a valid UCUM code;
   *    'failed':  the conversion could not be made (e.g., if it is an "arbitrary" unit);
   *    'error':  if an error occurred (an input or programming error)
   *  'msg': an array of messages (possibly empty) if the string is invalid or
   *        an error occurred, indicating the problem, or a suggestion of a
   *        substitution such as the substitution of 'G' for 'Gauss', or
   *        an empty array if no messages were generated.  There can also be a
   *        message that is just informational or warning.
   *  'magnitude': the new value when fromVal units of fromUnits is expressed in the base units.
   *  'fromUnitIsSpecial': whether the input unit fromUnit is a "special unit"
   *         as defined in UCUM.  This means there is some function applied to convert
   *         between fromUnit and the base units, so the returned magnitude is likely not
   *         useful as a scale factor for other conversions (i.e., it only has validity
   *         and usefulness for the input values that produced it).
   *  'unitToExp': a map of base units in fromUnit to their exponent
   */
  convertToBaseUnits(fromUnit, fromVal) {
    let retObj = {};
    this._checkFromVal(fromVal, retObj);
    if (!retObj.status) { // could be set to 'error' by _checkFromVal
      let inputUnitLookup = this.getSpecifiedUnit(fromUnit, 'validate');
      retObj = {status: inputUnitLookup.status == 'valid' ? 'succeeded' : inputUnitLookup.status};
      let unit = inputUnitLookup.unit;
      retObj.msg = inputUnitLookup.retMsg || [];
      if (!unit) {
        if (inputUnitLookup.retMsg?.length == 0)
          retObj.msg.push('Could not find unit information for '+fromUnit);
      }
      else if (unit.isArbitrary_) {
        retObj.msg.push('Arbitrary units cannot be converted to base units or other units.');
        retObj.status = 'failed';
      }
      else if (retObj.status == 'succeeded') {
        let unitToExp = {};
        let dimVec = unit.dim_?.dimVec_
        let baseUnitString = '1';
        if (dimVec) {
          let dimVecIndexToBaseUnit = UnitTables.getInstance().dimVecIndexToBaseUnit_;
          for (let i=0, len=dimVec.length; i<len; ++i) {
            let exp = dimVec[i];
            if (exp) {
              unitToExp[dimVecIndexToBaseUnit[i]] = exp;
              baseUnitString += '.' + dimVecIndexToBaseUnit[i] + exp;
            }
          }
        }

        // The unit might have a conversion function, which has to be applied; we
        // cannot just assume unit_.magnitude_ is the magnitude in base units.
        let retUnitLookup = this.getSpecifiedUnit(baseUnitString, 'validate');
        // There should not be any error in retUnitLookup, unless there is a bug.
        let retUnit = retUnitLookup.unit;
        if (retUnitLookup.status !== 'valid') {
          retObj.msg.push('Unable construct base unit string; tried '+baseUnitString);
          retObj.status = 'error';
        }
        else {
          try {
            retObj.magnitude = retUnit.convertFrom(fromVal, unit);
          }
          catch (e) {
            retObj.msg.push(e.toString());
            retObj.status = 'error';
          }
          if (retObj.status == 'succeeded') {
            retObj.unitToExp = unitToExp;
            retObj.fromUnitIsSpecial = unit.isSpecial_;
          }
        }
      }
    }
    return retObj;
  }


  /**
   *  Checks the given value as to whether it is suitable as a "from" value in a
   *  unit conversion.  If it is not, the responseObj will have its status set
   *  to 'error' and a message added.
   * @param fromVal The value to check
   * @param responseObj the object that will be updated if the value is not
   *  usable.
   */
  _checkFromVal(fromVal, responseObj) {
    if (fromVal === null || isNaN(fromVal) || (typeof fromVal !== 'number' &&
        !intUtils_.isNumericString(fromVal))) {
      responseObj.status = 'error';
      if (!responseObj.msg)
        responseObj.msg = [];
      responseObj.msg.push('No "from" value, or an invalid "from" value, ' +
                         'was specified.');
    }
  }


  /**
   * This method accepts a term and looks for units that include it as
   * a synonym - or that include the term in its name.
   *
   * @param theSyn the term to search for
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
  checkSynonyms(theSyn) {
    let retObj = {} ;
    if (theSyn === undefined || theSyn === null) {
      retObj['status'] = 'error';
      retObj['msg'] = 'No term specified for synonym search.'
    }
    else {
      retObj = intUtils_.getSynonyms(theSyn);
    } // end if a search synonym was supplied

    return retObj ;

  } // end checkSynonyms


  /**
   * This method parses a unit string to get (or try to get) the unit
   * represented by the string.  It returns an error message if no string was specified
   * or if any errors were encountered trying to get the unit.
   *
   * @param uName the expression/string representing the unit
   * @param valConv indicates what type of request this is for - a request to
   *  validate (pass in 'validate') or a request to convert (pass in 'convert')
   * @param suggest a boolean to indicate whether or not suggestions are
   *  requested for a string that cannot be resolved to a valid unit;
   *  true indicates suggestions are wanted; false indicates they are not,
   *  and is the default if the parameter is not specified;
   * @returns a hash containing:
   *   'status' will be 'valid' (uName is a valid UCUM code), 'invalid'
   *     (the uStr is not a valid UCUM code, and substitutions or
   *     suggestions may or may not be returned, depending on what was
   *     requested and found); or 'error' (an input or programming error
   *     occurred);
   *   'unit' the unit object (or null if there were problems creating the
   *     unit);
   *   'origString' the possibly updated unit string passed in;
   *   'retMsg' an array of user messages (informational, error or warning) if
   *     any were generated (IF any were generated, otherwise will be an
   *     empty array); and
   *   'suggestions' is an array of 1 or more hash objects.  Each hash
   *     contains three elements:
   *       'msg' which is a message indicating what unit expression the
   *          suggestions are for;
   *       'invalidUnit' which is the unit expression the suggestions are
   *          for; and
   *       'units' which is an array of data for each suggested unit found.
   *          Each array will contain the unit code, the unit name and the
   *          unit guidance (if any).
   *   The return hash will not contain a suggestions array if a valid unit
   *   was found or if suggestions were not requested and found.
   */
  getSpecifiedUnit(uName, valConv, suggest) {

    if (suggest === undefined)
      suggest = false ;

    let retObj = {};
    retObj['retMsg'] = [];

    if (!uName) {
      retObj['retMsg'].push('No unit string specified.');
    }
    else {
      let utab = UnitTables.getInstance();
      uName = uName.trim();

      // go ahead and just try using the name as the code.  This may or may not
      // work, but if it does, it cuts out a lot of parsing.
      let theUnit = utab.getUnitByCode(uName);

      // If we found it, set the returned unit string to what was passed in;
      // otherwise try parsing as a unit string
      if (theUnit) {
        retObj['unit'] = theUnit ;
        retObj['origString'] = uName;
      }
      else {
        try {
          let resp = this.uStrParser_.parseString(uName, valConv, suggest);
          retObj['unit'] = resp[0];
          retObj['origString'] = resp[1];
          if (resp[2])
            retObj['retMsg'] = resp[2];
          retObj['suggestions'] = resp[3];
        }
        catch (err) {
          console.log(`Unit requested for unit string ${uName}.` +
            'request unsuccessful; error thrown = ' + err.message);
            retObj['retMsg'].unshift(`${uName} is not a valid unit.  ` +
                                     `${err.message}`);
        }
      } // end if the unit was not found as a unit name
    } // end if a unit expression was specified

    // Set the status field
    if (!retObj.unit) {
      // No unit was found; check whether origString has a value
      retObj.status = !retObj.origString ? 'error' : 'invalid';
    }
    else {
      // Check whether substitutions were made to the unit string in order to
      // find the unit
      retObj.status = retObj.origString === uName ? 'valid': 'invalid';
    }

    return retObj;

  } // end getSpecifiedUnit


  /**
   * This method retrieves a list of units commensurable, i.e., that can be
   * converted from and to, a specified unit.  Returns an error if the "from"
   * unit cannot be found. If necessary, you can filter the list of units by
   * specifying a list of unit categories that should be in the resulting list.
   *
   * @param {string} fromName - the name/unit string of the "from" unit
   * @param {string[] | null} [categoryList] - the list of unit categories;
   *   this parameter is optional, defaults to null if not specified;
   *   possible list values: 'Clinical', 'Nonclinical', 'Obsolete', 'Constant'
   * @returns an array containing two elements;
   *   first element is the list of commensurable units if any were found;
   *   second element is an error message if the "from" unit is not found
   */
  commensurablesList(fromName, categoryList = null) {

    let retMsg = [];
    let commUnits = null ;
    let parseResp = this.getSpecifiedUnit(fromName, 'validate', false);
    let fromUnit = parseResp['unit'];
    if (parseResp['retMsg'].length > 0)
      retMsg = parseResp['retMsg'] ;
    if (!fromUnit) {
      retMsg.push(`Could not find unit ${fromName}.`);
    }
    else {
      let dimVec = null ;
      let fromDim = fromUnit.getProperty('dim_');
      if (!fromDim) {
        retMsg.push('No commensurable units were found for ' + fromName) ;
      }
      else {
        try {
          dimVec = fromDim.getProperty('dimVec_');
        }
        catch (err) {
          retMsg.push(err.message);
          if (err.message ===
            "Dimension does not have requested property(dimVec_)")
            dimVec = null;
        }
        if (dimVec) {
          let utab = UnitTables.getInstance();
          commUnits = utab.getUnitsByDimension(dimVec);
          if (categoryList) {
            commUnits = commUnits.filter((item) => {
              return categoryList.indexOf(item.category_) !== -1;
            });
          }
        }
      } // end if the from unit has a dimension vector
    } // end if we found a "from" unit
    return [commUnits , retMsg];
  } // end commensurablesList

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
 *  NO LONGER TRUE - not implemented as a singleton.  This method retained to
 *  avoid problems with calls to it that exist throughout the code.
 *
 *  @return the (formerly singleton) UcumLhcUtils object.
 */
UcumLhcUtils.getInstance = function(){
  return new UcumLhcUtils();
} ;
