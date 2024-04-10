/**
 * This class handles the parsing of a unit string into a unit object
 */

var Ucum = require('./config.js').Ucum;
var Unit = require('./unit.js').Unit;
var UnitTables = require('./unitTables.js').UnitTables;
var PrefixTables = require('./prefixTables.js').PrefixTables;

import * as intUtils_ from "./ucumInternalUtils.js";

export class UnitString {

  /**
   * Constructor
   */
  constructor() {

    // Get instances of the unit and prefix tables and the utilities
    this.utabs_ = UnitTables.getInstance();
    this.pfxTabs_ = PrefixTables.getInstance();

    // Set emphasis characters to defaults.  These are used to emphasize
    // certain characters or strings in user messages.  They can be reset in
    // the useHTMLInMessages method.
    this.openEmph_ = Ucum.openEmph_;
    this.closeEmph_ = Ucum.closeEmph_;

    // Set the braces message to blank.  This message is displayed for each
    // validation request on the web page, but is included separately as
    // a note on the validation spreadsheet.  The useBraceMsgForEachString
    // method should be used to set the message to be displayed for each
    // unit string.
    this.bracesMsg_ = '';

    // Set the flags used, with indices, as place holders in unit strings
    // for parenthetical strings and strings within braces.
    this.parensFlag_ = "parens_placeholder"; // in lieu of Jehoshaphat
    this.pFlagLen_ = this.parensFlag_.length;
    this.braceFlag_ = "braces_placeholder"; // in lieu of Nebuchadnezzar
    this.bFlagLen_ = this.braceFlag_.length;

    // Initialize the message start/end strings, which will be set when
    // parseString is called.
    this.vcMsgStart_ = null;
    this.vcMsgEnd_ = null;

    // Arrays used by multiple methods within this class to hold persistent
    // data.  Just gets too bulky to pass these guys around.

    // Messages to be returned to the calling function
    this.retMsg_ = [] ;

    // Units for parenthetical unit strings
    this.parensUnits_ = [] ;

    // annotation text for annotations found in unit strings
    this.annotations_ = [] ;

    // suggestions for unit strings that for which no unit was found
    this.suggestions = [] ;
  } // end constructor


  // The start of an error message about an invalid annotation character.
  static INVALID_ANNOTATION_CHAR_MSG = 'An invalid character was found in the annotation ';

  // A regular expression for validating annotation strings.
  static VALID_ANNOTATION_REGEX = /^\{[!-z|~]*\}$/;

  /**
   * Sets the emphasis strings to the HTML used in the webpage display - or
   * blanks them out, depending on the use parameter.
   *
   * @param use flag indicating whether or not to use the html message format;
   *  defaults to true
   */
  useHTMLInMessages(use) {
    if (use === undefined || use) {
      this.openEmph_ = Ucum.openEmphHTML_;
      this.closeEmph_ = Ucum.closeEmphHTML_;
    }
    else {
      this.openEmph_ = Ucum.openEmph_;
      this.closeEmph_ = Ucum.closeEmph_;
    }
  } // end useHTMLInMessages


  /**
   * Sets the braces message to be displayed for each unit string validation
   * requested, as appropriate.
   *
   * @param use flag indicating whether or not to use the braces message;
   *  defaults to true
   */
  useBraceMsgForEachString(use) {
    if (use === undefined || use)
      this.bracesMsg_ = Ucum.bracesMsg_;
    else
      this.bracesMsg_ = '';
  }


  /**
   * Parses a unit string, returns a unit, a possibly updated version of
   * the string passed in, and messages and suggestions where appropriate.
   *
   * The string returned may be updated if the input string contained unit
   * names, e.g., "pound".  The unit code ([lb_av] for pound) is placed in
   * the string returned, a the returned messages array includes a note
   * explaining the substitution.
   *
   * @param uStr the string defining the unit
   * @param valConv indicates what type of request this is for - a request to
   *  validate (pass in 'validate') or a request to convert (pass in 'convert');
   *  optional, defaults to 'validate'
   * @param suggest a boolean to indicate whether or not suggestions are
   *  requested for a string that cannot be resolved to a valid unit;
   *  true indicates suggestions are wanted; false indicates they are not,
   *  and is the default if the parameter is not specified;
   * @returns an array containing:
   *   the unit object or null if a unit could not be created.  In cases where
   *     a fix was found for a problem string, .e.g., 2.mg for 2mg, a unit will
   *     be returned but an error message will also be returned, describing
   *     the substitution;
   *   the possibly updated unit string passed in;
   *   an array of any user messages (informational, error or warning)
   *     generated (or an empty array); and
   *   a suggestions array of hash objects (1 or more).  Each hash contains
   *   three elements:
   *     'msg' which is a message indicating what unit expression the
   *       suggestions are for;
   *     'invalidUnit' which is the unit expression the suggestions are
   *       for; and
   *     'units' which is an array of data for each suggested unit found.
   *        Each array will contain the unit code, the unit name and the
   *        unit guidance (if any).
   *   The return array will not contain a suggestions array if a valid unit
   *   was found or if suggestions were not requested.
   * @throws an error if nothing was specified.
   */
  parseString(uStr, valConv, suggest) {

    uStr = uStr.trim();
    // Make sure we have something to work with
    if (uStr === '' || uStr === null) {
      throw (new Error('Please specify a unit expression to be validated.'));
    }

    if (valConv === 'validate') {
      this.vcMsgStart_ = Ucum.valMsgStart_;
      this.vcMsgEnd_ = Ucum.valMsgEnd_;
    }
    else {
      this.vcMsgStart_ = Ucum.cnvMsgStart_;
      this.vcMsgEnd_ = Ucum.cnvMsgEnd_;
    }

    if (suggest === undefined || suggest === false) {
      this.suggestions_ = null;
    }
    else {
      this.suggestions_ = [] ;
    }

    this.retMsg_ = [];
    this.parensUnits_ = [];
    this.annotations_ = [] ;

    let origString = uStr;
    let retObj = [];

    // Extract any annotations, i.e., text enclosed in braces ({}) from the
    // string before further processing.  Store each one in this.annotations_
    // array and put a placeholder in the string for the annotation.  Do
    // this before other processing in case an annotation contains characters
    // that will be interpreted as parenthetical markers or operators in
    // subsequent processing.

    uStr = this._getAnnotations(uStr);
    if (this.retMsg_.length > 0) {
      retObj[0] = null;
      retObj[1] = null;
    }
    else {
      // Flag used to block further processing on an unrecoverable error
      let endProcessing = this.retMsg_.length > 0;

      // First check for one of the "special" units.  If it's one of those, put
      // in a substitution phrase for it to avoid having it separated on its
      // embedded operator.  This will only happen, by the way, if it is
      // preceded by a prefix or followed by an operator and another unit.
      let sUnit = null ;
      for (sUnit in Ucum.specUnits_) {
        while (uStr.indexOf(sUnit) !== -1)
          uStr = uStr.replace(sUnit, Ucum.specUnits_[sUnit]);
      }

      // Check for spaces and throw an error if any are found.  The spec
      // explicitly forbids spaces except in annotations, which is why any
      // annotations are extracted before this check is made.
      if (uStr.indexOf(' ') > -1) {
        throw (new Error('Blank spaces are not allowed in unit expressions.'));
      } // end if blanks were found in the string

      // assign the array returned to retObj.  It will contain 2 elements:
      //  the unit returned in position 0; and the origString (possibly
      //  modified) in position 1.  The origString in position 1 will not
      //  be changed by subsequent processing.
      retObj = this._parseTheString(uStr, origString);
      let finalUnit = retObj[0];

      // Do a final check to make sure that finalUnit is a unit and not
      // just a number.  Something like "8/{HCP}" will return a "unit" of 8
      // - which is not a unit.  Hm - evidently it is.  So just create a unit
      // object for it.
      if (intUtils_.isIntegerUnit(finalUnit) || typeof finalUnit === 'number') {
        finalUnit = new Unit({
          'csCode_': origString,
          'ciCode_': origString,
          'magnitude_': finalUnit,
          'name_': origString
        });
        retObj[0] = finalUnit;
      } // end final check
    } // end if no annotation errors were found

    retObj[2] = this.retMsg_;
    if (this.suggestions_ && this.suggestions_.length > 0)
      retObj[3] = this.suggestions_ ;
    return retObj;

  } // end parseString


  /**
   * Parses a unit string, returns a unit, a possibly updated version of
   * the string passed in, and messages where appropriate.  This should
   * only be called from within this class (or by test code).
   *
   * The string returned may be updated if the input string contained unit
   * names, e.g., "pound".  The unit code ([lb_av] for pound) is placed in
   * the string returned, a the returned messages array includes a note
   * explaining the substitution.
   *
   * @param uStr the string defining the unit
   * @param origString the original unit string passed in
   *
   * @returns
   *  an array containing:
   *    the unit object (or null if there were problems creating the unit); and
   *    the possibly updated unit string passed in.
   *
   * the this.retMsg_ array will be updated with any user messages
   *   (informational, error or warning) generated by this or called methods
   * the this.parensUnits_ array is referenced and possibly populated by
   *   methods called within this one
   * the this.annotations_ array is referenced by methods called within
   *   this one
   * the this.suggestions_ array may be populated by methods called within
   *   this one
   */
  _parseTheString(uStr, origString) {

    // Unit to be returned
    let finalUnit = null;

    // Flag used to block further processing on an unrecoverable error
    let endProcessing = this.retMsg_.length > 0;

    // Call _processParens to search for and process any/all parenthetical
    // strings in uStr.  Units created for parenthetical strings will be
    // stored in the this.parensUnits_ array.
    let parensResp = this._processParens(uStr, origString);
    endProcessing = parensResp[2];

    // The array used to hold the units and their operators.
    let uArray = [];

    // Continue if we didn't hit a problem
    if (!endProcessing) {
      uStr = parensResp[0];
      origString = parensResp[1];

      // Call _makeUnitsArray to convert the string to an array of unit
      // descriptors with operators.
      let mkUArray = this._makeUnitsArray(uStr, origString);

      endProcessing = mkUArray[2] ;
      if (!endProcessing) {
        uArray = mkUArray[0];
        origString = mkUArray[1];
        // Create a unit object out of each un element
        let uLen = uArray.length;
        for (let u1 = 0; u1 < uLen; u1++) {
          //for (let u1 = 0; u1 < uLen && !endProcessing; u1++) {
          let curCode = uArray[u1]['un'];

          // Determine the type of the "un" attribute of the current array element

          // Check to see if it's a number.  If so write the number version of
          // the number back to the "un" attribute and move on
          if (intUtils_.isIntegerUnit(curCode)) {
            uArray[u1]['un'] = Number(curCode);
          }

          else {
            // The current unit array element is a string.  Check now to see
            // if it is or contains a parenthesized unit from this.parensUnits_.
            // If so, call _getParens to process the string and get the unit.

            if (curCode.indexOf(this.parensFlag_) >= 0) {
              let parenUnit = this._getParensUnit(curCode, origString);
              // if we couldn't process the string, set the end flag and bypass
              // further processing.
              if (!endProcessing)
                endProcessing = parenUnit[1];

              // If we're good, put the unit in the uArray and replace the
              // curCode, which contains the parentheses placeholders, etc.,
              // with the unit's code - including any substitutions.
              if (!endProcessing) {
                uArray[u1]['un'] = parenUnit[0];
              }
            } // end if the curCode contains a parenthesized unit

            // Else it's not a parenthetical unit and not a number. Call
            // _makeUnit to create a unit for it.
            else {
              let uRet = this._makeUnit(curCode, origString);
              // If we didn't get a unit, set the endProcessing flag.
              if (uRet[0] === null) {
                endProcessing = true;
              }
              else {
                uArray[u1]['un'] = uRet[0];
                origString = uRet[1];
              }
            } // end if the curCode is not a parenthetical expression
          } // end if the "un" array is a not a number
        } // end do for each element in the units array
      } // end if _makeUnitsArray did not return an error
    } // end if _processParens did not find an error that causes a stop

    // If we're still good, continue
    if (!endProcessing) {
      // Process the units (and numbers) to create one final unit object
      if ((uArray[0] === null || uArray[0] === ' ' ||
           uArray[0]['un'] === undefined || uArray[0]['un'] === null)
          && this.retMsg_.length === 0) {
        // not sure what this might be, but this is a safeguard
        this.retMsg_.push(`Unit string (${origString}) did not contain ` +
          `anything that could be used to create a unit, or else something ` +
          `that is not handled yet by this package.  Sorry`);
        endProcessing = true;
      }
    }
    if (!endProcessing) {
      finalUnit = this._performUnitArithmetic(uArray, origString);
    }
    return [finalUnit, origString];
  } // end _parseTheString


  /**
   * Extracts all annotations from a unit string, replacing them with
   * placeholders for later evaluation.  The annotations are stored in the
   * this.annotations_ array.  This should only be called from within this
   * class (or by test code).
   *
   * @param uString the unit string being parsed
   * @returns the string after the annotations are replaced with placeholders
   *
   * the this.retMsg_ array will be updated with any user messages
   *   (informational, error or warning) generated by this or called methods
   * the this.annotations_ array is populated by this method
   */
  _getAnnotations(uString) {
    let openBrace = uString.indexOf('{');
    while (openBrace >= 0) {

      let closeBrace = uString.indexOf('}');
      if (closeBrace < 0) {
        this.retMsg_.push('Missing closing brace for annotation starting at ' +
          this.openEmph_ + uString.substr(openBrace) +
          this.closeEmph_);
        openBrace = -1;
      }
      else {
        let braceStr = uString.substring(openBrace, closeBrace + 1);
        // Check for valid characters in the annotation.
        if (!UnitString.VALID_ANNOTATION_REGEX.test(braceStr)) {
          this.retMsg_.push(UnitString.INVALID_ANNOTATION_CHAR_MSG +
            this.openEmph_ + braceStr + this.closeEmph_);
          openBrace = -1; // end search for annotations
        }
        else {
          let aIdx = this.annotations_.length.toString();
          uString = uString.replace(braceStr, this.braceFlag_ + aIdx +
            this.braceFlag_);
          this.annotations_.push(braceStr);
          openBrace = uString.indexOf('{');
        }
      }
    } // end do while we have an opening brace

    // check for a stray/unmatched closing brace
    if (this.retMsg_.length == 0) { // if there were no other errors above
      let closeBrace = uString.indexOf('}');
      if (closeBrace >= 0)
        this.retMsg_.push('Missing opening brace for closing brace found at ' +
          this.openEmph_ + uString.substring(0, closeBrace + 1) +
          this.closeEmph_);
    }
    return uString;
  } // end _getAnnotations


  /**
   * Finds and processes any/all parenthesized unit strings. This should only
   * be called from within this class (or by test code).
   *
   * Nested parenthesized strings are processed from the inside out.  The
   * parseString function is called from within this one for each parenthesized
   * unit string, and the resulting unit object is stored in this.parensUnits_,
   * to be processed after all strings are translated to units.
   *
   * A placeholder is placed in the unit string returned to indicate that the
   * unit object should be obtained from the this.parensUnits_ array.  The
   * placeholder consists of the parenthesis flag (this.parensFlag_) followed
   * by the index of the unit in this.parensUnits_ followed by this.parensFlag_.
   *
   * @param uString the unit string being parsed, where this will be the full
   *  string the first time this is called and parenthesized strings on any
   *  subsequent calls
   * @param origString the original string first passed in to parseString
   * @returns
   *  an array containing:
   *   the string after the parentheses are replaced;
   *   the original string; and
   *   a boolean flag indicating whether or not an error occurred that
   *     should stop processing.
   *
   * the this.retMsg_ array will be updated with any user messages
   *   (informational, error or warning) generated by this or called methods
   * this this.parensUnits_ array will be populated with units found for
   *   parenthetical unit strings
   */
  _processParens(uString, origString) {

    // Unit strings array and index
    let uStrArray = [];
    let uStrAryPos = 0;
    let stopProcessing = false;

    let pu = this.parensUnits_.length;

    // Count of characters trimmed off the beginning of the unit string (uString)
    // as units are removed from it; used for error messages to provide
    // context.
    let trimmedCt = 0;

    // Break the unit string into pieces that consist of text outside of
    // parenthetical strings and placeholders for the parenthetical units.
    // This method is called recursively for parenthetical strings and the units
    // returned are stored in the this.parensUnits_ array.
    while (uString !== "" && !stopProcessing) {
      let openCt = 0;
      let closeCt = 0;
      let openPos = uString.indexOf('(');

      // If an opening parenthesis was not found, check for an unmatched
      // close parenthesis.  If one was found report the error and end
      // processing.
      if (openPos < 0) {
        let closePos = uString.indexOf(')');
        if (closePos >= 0) {
          let theMsg = `Missing open parenthesis for close ` +
            `parenthesis at ${uString.substring(0, closePos + trimmedCt)}` +
            `${this.openEmph_}${uString.substr(closePos, 1)}${this.closeEmph_}`;
          if (closePos < uString.length - 1) {
            theMsg += `${uString.substr(closePos + 1)}`;
          }
          this.retMsg_.push(theMsg);
          uStrArray[uStrAryPos] = uString;
          stopProcessing = true;
        } // end if a close parenthesis was found

        // If no parentheses were found in the current unit string, transfer
        // it to the units array and blank out the string, which will end
        // the search for parenthetical units.
        else {
          uStrArray[uStrAryPos] = uString;
          uString = "";
        } // end if no close parenthesis was found
      } // end if no open parenthesis was found

      // Otherwise an open parenthesis was found. Process the string that
      // includes the parenthetical group
      else {
        openCt += 1;
        // Write the text before the parentheses (if any) to the unit strings array
        let uLen = uString.length;
        if (openPos > 0) {
          uStrArray[uStrAryPos++] = uString.substr(0, openPos);
        }

        // Find the matching closePos, i.e., the one that closes the
        // parenthetical group that this one opens.  Look also for
        // another open parenthesis, in case this includes nested parenthetical
        // strings.  This continues until it finds the same number of close
        // parentheses as open parentheses, or runs out of string to check.
        // In the case of nested parentheses this will identify the outer set
        // of parentheses.
        let closePos = 0;
        let c = openPos + 1;
        for (; c < uLen && openCt != closeCt; c++) {
          if (uString[c] === '(')
            openCt += 1;
          else if (uString[c] === ')')
            closeCt += 1;
        }

        // Put a placeholder for the group in the unit strings array and recursively
        // call this method for the parenthetical group.  Put the unit returned
        // in this.parensUnits_.  Set the unit string to whatever follows
        // the position of the closing parenthesis for this group, to be
        // processed by the next iteration of this loop.  If there's nothing
        // left uString is set to "".
        if (openCt === closeCt) {
          closePos = c;
          uStrArray[uStrAryPos++] = this.parensFlag_ + pu.toString() + this.parensFlag_;
          let parseResp = this._parseTheString(
            uString.substring(openPos + 1, closePos - 1), origString);
          if (parseResp[0] === null)
            stopProcessing = true;
          else if (uString[openPos + 1] === '/') {
            // If the term inside the parenthesis starts with '/', fail the validation. See LF-2854.
            this.retMsg_.push("Unary operator '/' is only allowed at the beginning of the main term, not inside a parenthesis.");
            stopProcessing = true;
          }
          else {
            origString = parseResp[1];
            this.parensUnits_[pu++] = parseResp[0];
            uString = uString.substr(closePos);
            trimmedCt = closePos;
          }
        } // end if the number of open and close parentheses matched

        // If the number of open and close parentheses doesn't match, indicate
        // an error.
        else {
          uStrArray.push(origString.substr(openPos));
          this.retMsg_.push(`Missing close parenthesis for open parenthesis at ` +
            `${origString.substring(0, openPos + trimmedCt)}` +
            `${this.openEmph_}${origString.substr(openPos, 1)}` +
            `${this.closeEmph_}${origString.substr(openPos + 1)}`);
          stopProcessing = true;
        }
      } // end if an open parenthesis was found
    } // end do while the input string is not empty
    if (stopProcessing)
      this.parensUnits_ = [];
    return [uStrArray.join(''), origString, stopProcessing]
  } // end _processParens


  /**
   * Breaks the unit string into an array of unit descriptors and operators.
   * If a unit descriptor consists of a number preceding a unit code, with
   * no multiplication operator, e.g., 2mg instead of 2.mg, it is handled
   * as if it were a parenthetical expression.
   *
   * This should only be called from within this class (or by test code).
   *
   * @param uStr the unit string being parsed
   * @param origString the original string passed to parseString
   * @returns
   *  an array containing:
   *    the array representing the unit string;
   *    the original string passed in, possibly updated with corrections; and
   *    and a flag indicating whether or not processing can continue.
   *
   * the this.retMsg_ array will be updated with any user messages
   *   (informational, error or warning) generated by this or called methods
   */
  _makeUnitsArray(uStr, origString) {

    // Separate the string into pieces based on delimiters / (division) and .
    // (multiplication).  The idea is to get an array of units on which we
    // can then perform any operations (prefixes, multiplication, division).

    let uArray1 = uStr.match(/([./]|[^./]+)/g);
    let endProcessing = false ;
    let uArray = [];
    let startNumCheck = /(^[0-9]+)(\[?[a-zA-Z\_0-9a-zA-Z\_]+\]?$)/ ;

    // If the first element in the array is the division operator (/), the
    // string started with '/'.  Add a first element containing 1 to the
    // array, which will cause the correct computation to be performed (inversion).
    if (uArray1[0] === "/") {
      uArray1.unshift("1");
    }
    // If the first element in the array is the multiplication operator (.)
    // return an error.
    else if (uArray1[0] === '.') {
      this.retMsg_.push(`${origString} is not a valid UCUM code. ` +
          `The multiplication operator at the beginning of the expression is ` +
          `not valid. A multiplication operator must appear only between ` +
          `two codes.`);
      endProcessing = true ;
    }
    if (!endProcessing) {
      // Check to see if there is a number preceding a unit code, e.g., 2mg
      // If so, update the first element to remove the number (2mg -> mg) and
      // add two elements to the beginning of the array - the number and the
      // multiplication operator.

      if (!intUtils_.isNumericString(uArray1[0])) {
        let numRes = uArray1[0].match(startNumCheck);
        if (numRes && numRes.length === 3 && numRes[1] !== '' &&
          numRes[2] !== '' && numRes[2].indexOf(this.braceFlag_) !== 0) {
          let dispVal = numRes[2] ;

          if (!endProcessing && numRes[2].indexOf(this.parensFlag_) !== -1) {
            let parensback = this._getParensUnit(numRes[2], origString);
            numRes[2] = parensback[0]['csCode_'];
            dispVal = `(${numRes[2]})`;
            endProcessing = parensback[1];
          }
          if (!endProcessing) {
            this.retMsg_.push(`${numRes[1]}${dispVal} is not a valid UCUM code.` +
              `  ${this.vcMsgStart_}${numRes[1]}.${dispVal}${this.vcMsgEnd_}`);
            origString = origString.replace(`${numRes[1]}${dispVal}`,
              `${numRes[1]}.${dispVal}`);
            uArray1[0] = numRes[2];
            uArray1.unshift(numRes[1], '.');
          }
        }
      } // end if the first element is not a number (only)

      // Create an array of unit/operator objects.  The unit is, for now, the
      // string containing the unit code (e.g., Hz for hertz) including
      // a possible prefix and exponent.   The operator is the operator to be
      // applied to that unit and the one preceding it.  So, a.b would give
      // us two objects.  The first will have a unit of a, and a blank operator
      // (because it's the first unit).  The second would have a unit of b
      // and the multiplication operator (.).
      if (!endProcessing) {
        let u1 = uArray1.length;
        uArray = [{op: "", un: uArray1[0]}];
        for (let n = 1; n < u1; n++) {

          // check to make sure that we don't have two operators together, e.g.,
          // mg./K.  If so, let the user know the problem.
          let theOp = uArray1[n++];
          // oh wait - check to make sure something is even there, that the
          // user didn't end the expression with an operator.
          if (!uArray1[n]) {
            this.retMsg_.push(`${origString} is not a valid UCUM code. ` +
              `It is terminated with the operator ${this.openEmph_}` +
              `${theOp}${this.closeEmph_}.`);
            n = u1;
            endProcessing = true;
          }
          else if (Ucum.validOps_.indexOf(uArray1[n]) !== -1) {
            this.retMsg_.push(`${origString} is not a valid UCUM code. ` +
              `A unit code is missing between${this.openEmph_}` +
              `${theOp}${this.closeEmph_}and${this.openEmph_}` +
              `${uArray1[n]}${this.closeEmph_}in${this.openEmph_}` +
              `${theOp}${uArray1[n]}${this.closeEmph_}.`);
            n = u1;
            endProcessing = true;
          }
          else {
            // Check to see if a number precedes a unit code.
            // If so, send the element to _processParens, inserting the multiplication
            // operator where it belongs.  Treating it as parenthetical keeps it from
            // being interpreted incorrectly because of operator parentheses.  For
            // example, if the whole string is mg/2kJ we don't want to rewrite it as
            // mg/2.kJ - because mg/2 would be performed, followed by .kJ.  Instead,
            // handling 2kJ as a parenthesized unit will make sure mg is divided by
            // 2.kJ.
            if (!intUtils_.isNumericString(uArray1[n])) {
              let numRes2 = uArray1[n].match(startNumCheck);
              if (numRes2 && numRes2.length === 3 && numRes2[1] !== '' &&
                numRes2[2] !== '' && numRes2[2].indexOf(this.braceFlag_) !== 0) {
                let invalidString = numRes2[0];
                if (!endProcessing && numRes2[2].indexOf(this.parensFlag_) !== -1) {
                  let parensback = this._getParensUnit(numRes2[2], origString);
                  numRes2[2] = parensback[0]['csCode_'];
                  invalidString = `(${numRes2[2]})`;
                  endProcessing = parensback[1];
                  if (!endProcessing) {
                    this.retMsg_.push(`${numRes2[1]}${invalidString} is not a ` +
                      `valid UCUM code.  ${this.vcMsgStart_}${numRes2[1]}.${invalidString}` +
                      `${this.vcMsgEnd_}`);
                    let parensString = `(${numRes2[1]}.${invalidString})`;
                    origString = origString.replace(`${numRes2[1]}${invalidString}`,
                      parensString);
                    let nextParens = this._processParens(parensString, origString);
                    endProcessing = nextParens[2];
                    if (!endProcessing) {
                      uArray.push({op: theOp, un: nextParens[0]});
                    }
                    //uArray.push({op: '.', un: numRes2[2]});
                  }
                } // end if the string represents a parenthesized unit
                else {
                  let parensStr = '(' + numRes2[1] + '.' + numRes2[2] + ')';
                  let parensResp = this._processParens(parensStr, origString);
                  // if a "stop processing" flag was returned, set the n index to end
                  // the loop and set the endProcessing flag
                  if (parensResp[2]) {
                    n = u1;
                    endProcessing = true;
                  }
                  else {
                    this.retMsg_.push(`${numRes2[0]} is not a ` +
                      `valid UCUM code.  ${this.vcMsgStart_}${numRes2[1]}.${numRes2[2]}` +
                      `${this.vcMsgEnd_}`);
                    origString = origString.replace(numRes2[0], parensStr);
                    uArray.push({op: theOp, un: parensResp[0]});
                  } // end if no error on the processParens call
                } // end if the string does not represent a parenthesized unit
              } // end if the string is a number followed by a string
              else {
                uArray.push({op: theOp, un: uArray1[n]});
              }
            }
            else {
              uArray.push({op: theOp, un: uArray1[n]});
            }
          } // end if there isn't a missing operator or unit code
        } // end do for each element in uArray1
      } // end if a processing error didn't occur in getParensUnit
    } // end if the string did not begin with a '.' with no following digit
    return [uArray, origString, endProcessing];
  } // end _makeUnitsArray


  /**
   * Takes a unit string containing parentheses flags and returns the unit they
   * represent.  Any text found before and/or after the parenthetical
   * expression is checked to see if we can tell what the user meant and
   * let them know what it should have been.  For example, 2(mg), which
   * would resolve to 2mg, should be 2.mg.
   *
   * This should only be called from within this class (or by test code).
   *
   * @param pStr the string being parsed
   * @param origString the original unit string passed in; passed through
   *  to _getAnnonText if annotation flags are found in any text preceding
   *  or following the parenthetical unit
   * @returns
   *   an array containing
   *     the unit object; and
   *     a flag indicating whether or not processing should be ended.
   *       True indicates that the string was invalid and no corrections
   *         (substitutions or suggestions) could be found;
   *       False indicates that it was either valid or substitutions/suggestions
   *          were made.
   *   the this.retMsg_ array will be updated with any user messages
   *     (informational, error or warning) generated by this or called methods
   *   this this.parensUnits_ array contains the units that are acquired by
   *     this method
   * @throws an error if an invalid parensUnit index was found.  This is
   *    a processing error.
   */
  _getParensUnit(pStr, origString) {
    let endProcessing = false;
    let retAry = [];
    let retUnit = null;
    let befAnnoText = null;
    let aftAnnoText = null;

    // Get the location of the flags.  We're assuming there are only two
    // because _processParens takes care of nesting.  By the time we get
    // here we should not be looking a nested parens.  Also get any text
    // before and after the parentheses.  Once we get the unit we update
    // the input string with the unit's csCode_, which will wipe out any
    // before and after text
    let psIdx = pStr.indexOf(this.parensFlag_);
    let befText = null;
    if (psIdx > 0) {
      befText = pStr.substr(0, psIdx - 1);
    }
    let peIdx = pStr.lastIndexOf(this.parensFlag_);
    let aftText = null;
    if (peIdx + this.pFlagLen_ < pStr.length) {
      aftText = pStr.substr(peIdx + this.pFlagLen_);
    }

    // Get the text between the flags
    let pNumText = pStr.substring(psIdx + this.pFlagLen_, peIdx);

    // Make sure the index is a number, and if it is, get the unit from the
    // this.parensUnits_ array
    if (intUtils_.isNumericString(pNumText)) {
      retUnit = this.parensUnits_[Number(pNumText)];
      if (!intUtils_.isIntegerUnit(retUnit)) {
        pStr = retUnit.csCode_;
      }
      else {
        pStr = retUnit ;
      }
    }
    // If it's not a number, it's a programming error.  Throw a fit.
    else {
      throw (new Error(`Processing error - invalid parens number ${pNumText} ` +
        `found in ${pStr}.`));
    }

    // If there's something in front of the starting parentheses flag, check to
    // see if it's a number or an annotation.
    if (befText) {
      // If it's a number, assume that multiplication was assumed
      if (intUtils_.isNumericString(befText)) {
        let nMag = retUnit.getProperty('magnitude_');
        nMag *= Number(befText);
        retUnit.assignVals({'magnitude_': nMag});
        pStr = `${befText}.${pStr}`;
        this.retMsg_.push(`${befText}${pStr} is not a valid UCUM code.\n` +
          this.vcMsgStart_ + pStr + this.vcMsgEnd_);
      }
      else {
        if (befText.indexOf(this.braceFlag_) >= 0) {
          let annoRet = this._getAnnoText(befText, origString);
          // if we found not only an annotation, but text before or after
          // the annotation (remembering that this is all before the
          // parentheses) throw an error - because we don't know what
          // to do with it.  Could it be missing an operator?
          if (annoRet[1] || annoRet[2]) {
            throw (new Error(`Text found before the parentheses (` +
              `${befText}) included an annotation along with other text ` +
              `for parenthetical unit ${retUnit.csCode_}`));
          }
          // Otherwise put the annotation after the unit string and note
          // the misplacement.
          pStr += annoRet[0];
          this.retMsg_.push(`The annotation ${annoRet[0]} before the unit ` +
            `code is invalid.\n` + this.vcMsgStart_ + pStr + this.vcMsgEnd_);
        }
        // else the text before the parentheses is neither a number nor
        // an annotation.  If suggestions were NOT requested, record an
        // error.
        else if (!this.suggestions_) {
          this.retMsg_.push(`${befText} preceding the unit code ${pStr} ` +
            `is invalid.  Unable to make a substitution.`);
          endProcessing = true;
        }
        // otherwise try for suggestions
        else {
          let suggestStat = this._getSuggestions(befText);
          endProcessing =  (suggestStat !== 'succeeded');

        } // end if a brace was found or, if not, suggestions were not or
          // were requested
      } // end if text preceding the parentheses was not a number
    } // end if there was text before the parentheses

    // Process any text after the parentheses
    if (aftText) {
      // if it's an annotation, get it and add it to the pStr
      if (aftText.indexOf(this.braceFlag_) >= 0) {
        let annoRet = this._getAnnoText(aftText, origString);
        // if we found not only an annotation, but text before or after
        // the annotation (remembering that this is all after the
        // parentheses) throw an error - because we don't know what
        // to do with it.  Could it be missing an operator?
        if (annoRet[1] || annoRet[2]) {
          throw (new Error(`Text found after the parentheses (` +
            `${aftText}) included an annotation along with other text ` +
            `for parenthetical unit ${retUnit.csCode_}`));
        }
        // Otherwise put the annotation after the unit string - no message
        // needed.
        pStr += annoRet[0];
      }
      // Otherwise check to see if it's an exponent.  If so, warn the
      // user that it's not valid - but try it anyway
      else {

        if (intUtils_.isNumericString(aftText)) {
          retUnit = null;
          let msg = `An exponent (${aftText}) following a parenthesis ` +
            `is invalid as of revision 1.9 of the UCUM Specification.`;
          // Add the suggestion only if the string in the parenthesis don't end with a number.
          if (!pStr.match(/\d$/)) {
            pStr += aftText;
            msg += '\n  ' + this.vcMsgStart_ + pStr + this.vcMsgEnd_;
          }
          this.retMsg_.push(msg);
          endProcessing = true;
        }
        // else the text after the parentheses is neither a number nor
        // an annotation.  If suggestions were NOT requested, record an
        // error.
        else if (!this.suggestions_) {
          this.retMsg_.push(`Text ${aftText} following the unit code ${pStr} ` +
            `is invalid.  Unable to make a substitution.`);
          endProcessing = true;
        }
        // otherwise try for suggestions
        else {
          let suggestStat = this._getSuggestions(befText);
          endProcessing =  (suggestStat !== 'succeeded');
        } // end if text following the parentheses not an exponent
      } // end if text following the parentheses is not an annotation
    } // end if there is text following the parentheses
    if (!endProcessing) {
      if (!retUnit) {
        retUnit = new Unit({
          'csCode_': pStr,
          'magnitude_': 1,
          'name_': pStr});
      }
      else if (intUtils_.isIntegerUnit(retUnit)) {
        retUnit = new Unit({'csCode_': retUnit,
        'magnitude_': retUnit,
        'name_': retUnit});
      }
      else {
        retUnit.csCode_ = pStr;
      }
    }
    return [retUnit, endProcessing];
  } // end _getParensUnit

  /**
   * Takes a unit string containing annotation flags and returns the
   * annotation they represent.  This also returns any text found before
   * the annotation and any found after the annotation.
   *
   * This should only be called from within this class (or by test code).
   * NEEDS FIX in next branch to handle string with multiple annotations.
   *
   * @param pStr the string being parsed
   * @param origString the original string being parsed; used in error msg
   *  thrown for an invalid index to the annotations array
   * @returns
   *  an array containing
   *    the annotation for the pStr;
   *    any text found before the annotation; and
   *    any text found after the annotation.
   *
   * the this.retMsg_ array will be updated with any user messages
   *   (informational, error or warning) generated by this or called methods
   * the this.annotations_ array is used as the source for the annotations text
   * @throws an error if for a processing error - an invalid annotation index.
   */
  _getAnnoText(pStr, origString) {

    // if the starting braces flag is not at index 0, get the starting
    // text and the adjust the pStr to omit it.
    let asIdx = pStr.indexOf(this.braceFlag_);
    let startText = (asIdx > 0) ? pStr.substring(0, asIdx) : null;
    if (asIdx !== 0) {
      pStr = pStr.substr(asIdx);
    }

    // Get the location of the end flag and, if text follows it, get the text
    let aeIdx = pStr.indexOf(this.braceFlag_, 1);
    let endText = ((aeIdx + this.bFlagLen_) < pStr.length) ?
      pStr.substr(aeIdx + this.bFlagLen_) : null;

    // Get the index of the annotation in this.annotations_.
    // Check it to make sure it's valid, and if not, throw an error
    let idx = pStr.substring(this.bFlagLen_, aeIdx);
    let idxNum = Number(idx);
    if (!intUtils_.isNumericString(idx) || idxNum >= this.annotations_.length) {
      throw (new Error(`Processing Error - invalid annotation index ${idx} found ` +
        `in ${pStr} that was created from ${origString}`));
    }

    // Replace the flags and annotation index with the annotation expression
    pStr = this.annotations_[idxNum];
    return [pStr, startText, endText];
  } // end _getAnnoText


  /**
   * Takes a unit string and looks for suggested units.  This should be
   * called for unit strings that cannot be resolved to unit codes.  The
   * string is searched for in the synonyms table found in the UnitTables
   * class.  That table includes all synonyms and unit names for the units
   * in the unit data table.
   *
   * @param pStr the string being parsed
   * @returns an object that contains an element named 'status', whose
   *  value indicates the status of the request:
   *   'succeeded' indicates that synonyms were found;
   *   'failed' indicates that no synonyms were found; or
   *   'error' which indicates that an error occurred
   *
   * the this.retMsg_ array will be updated with a message indicating whether
   *  or not synonyms/suggestions  were found
   * the this.suggestions_ array will be updated with a hash (added to the
   *   array if it already contains others) that contains three elements:
   *   'msg' which is a message indicating what unit expression the
   *      suggestions are for;
   *   'invalidUnit' which is the unit expression the suggestions are for; and
   *   'units' which is an array of data for each suggested unit found.
   *       Each array will contain the unit code, the unit name and the
   *       unit guidance (if any).
   */
  _getSuggestions(pStr) {

    let retObj = intUtils_.getSynonyms(pStr);
    if (retObj['status'] === 'succeeded') {
      let suggSet = {} ;
      suggSet['msg'] = `${pStr} is not a valid UCUM code.  We found possible ` +
                       `units that might be what was meant:`;
      suggSet['invalidUnit'] = pStr ;
      let synLen = retObj['units'].length ;
      suggSet['units'] = [] ;
      for (let s = 0; s < synLen; s++) {
        let unit = retObj['units'][s];
        let unitArray = [unit['code'], unit['name'], unit['guidance']];

        suggSet['units'].push(unitArray) ;
      }
      this.suggestions_.push(suggSet);
    }
    else {
      this.retMsg_.push(`${pStr} is not a valid UCUM code.  No alternatives ` +
                  `were found.`);
    }
    return retObj['status'] ;
  } // end getSuggestions


  /**
   * Creates a unit object from a string defining one unit.  The string
   * should consist of a unit code for a unit already defined (base or
   * otherwise).  It may include a prefix and an exponent, e.g., cm2
   * (centimeter squared).  This should only be called from within this
   * class (or by test code).
   *
   * @params uCode the string defining the unit
   * @param origString the original string to be parsed; used to provide
   *  context for messages
   * @returns
   *  an array containing:
   *    a unit object, or null if there were problems creating the unit; and
   *    the origString passed in, which may be updated if a unit name was
   *    translated to a unit code.
   *
   *  the this.retMsg_ array will be updated with any user messages
   *    (informational, error or warning) generated by this or called methods
   *  the this.suggestions_ array will be populated if no unit (with or without
   *    substitutions) could be found and suggestions were requested
   */
  _makeUnit(uCode, origString) {

    // First try the code just as is, without looking for annotations,
    // prefixes, exponents, or elephants.
    let retUnit = this.utabs_.getUnitByCode(uCode);
    if (retUnit) {
      retUnit = retUnit.clone();
    }

    // If we found it, we're done.  No need to parse for those elephants (or
    // other stuff).
    else if (uCode.indexOf(this.braceFlag_) >= 0) {
      let getAnnoRet = this._getUnitWithAnnotation(uCode, origString);
      retUnit = getAnnoRet[0];
      if (retUnit) {
        origString = getAnnoRet[1];
      }
      // If a unit is not found, retUnit will be returned null and
      // the this.retMsg_ array will contain a message describing the problem.
      // If a unit is found, of course, all is good. So ... nothing left
      // to see here, move along.
    } // end if the uCode includes an annotation

    else {

      // So we didn't find a unit for the full uCode or for one with
      // annotations.  Try looking for a unit that uses a carat (^)
      // instead of an asterisk (*)

      if (uCode.indexOf('^') > -1) {
        let tryCode = uCode.replace('^', '*');
        retUnit = this.utabs_.getUnitByCode(tryCode);
        if (retUnit) {
          retUnit = retUnit.clone();
          retUnit.csCode_ = retUnit.csCode_.replace('*', '^');
          retUnit.ciCode_ = retUnit.ciCode_.replace('*', '^');
        }
      }
      // If that didn't work, check to see if it should have brackets
      // around it (uCode = degF when it should be [degF]
      if (!retUnit) {
        let addBrackets = '[' + uCode + ']' ;
        retUnit = this.utabs_.getUnitByCode(addBrackets);
        if (retUnit) {
          retUnit = retUnit.clone();
          origString = origString.replace(uCode, addBrackets);
          this.retMsg_.push(`${uCode} is not a valid unit expression, but ` +
            `${addBrackets} is.\n` + this.vcMsgStart_ +
            `${addBrackets} (${retUnit.name_})${this.vcMsgEnd_}`);
        } // end if we found the unit after adding brackets
      } // end trying to add brackets

      // If we didn't find it, try it as a name
      if (!retUnit) {
        let retUnitAry = this.utabs_.getUnitByName(uCode);
        if (retUnitAry && retUnitAry.length > 0) {
          retUnit = retUnitAry[0].clone();
          let mString = 'The UCUM code for ' + uCode + ' is ' +
            retUnit.csCode_ + '.\n' + this.vcMsgStart_ +
            retUnit.csCode_ + this.vcMsgEnd_;
          let dupMsg = false;
          for (let r = 0; r < this.retMsg_.length && !dupMsg; r++)
            dupMsg = this.retMsg_[r] === mString;
          if (!dupMsg)
            this.retMsg_.push(mString);
          let rStr = new RegExp('(^|[.\/({])(' + uCode + ')($|[.\/)}])');
          let res = origString.match(rStr);
          origString = origString.replace(rStr, res[1] + retUnit.csCode_ + res[3]);
          uCode = retUnit.csCode_;
        }
      }

      // If we still don't have a unit, try assuming a modifier (prefix and/or
      // exponent) and look for a unit without the modifier
      if (!retUnit) {

        // Well, first see if it's one of the special units.  If so,
        // replace the placeholder text with the actual unit string, keeping
        // whatever text (probably a prefix) goes with the unit string.
        let sUnit = null;
        for (sUnit in Ucum.specUnits_) {
          if (uCode.indexOf(Ucum.specUnits_[sUnit]) !== -1)
            uCode = uCode.replace(Ucum.specUnits_[sUnit], sUnit);
        }
        retUnit = this.utabs_.getUnitByCode(uCode);
        if (retUnit)
          retUnit = retUnit.clone();
      }
      if (!retUnit) {

        let origCode = uCode;
        let origUnit = null;
        let exp = null;
        let pfxCode = null;
        let pfxObj = null;
        let pfxVal = null;
        let pfxExp = null;

        // Look first for an exponent.  If we got one, separate it out and
        // try to get the unit again
        let codeAndExp = this._isCodeWithExponent(uCode);
        if (codeAndExp) {
          uCode = codeAndExp[0];
          exp = codeAndExp[1];
          origUnit = this.utabs_.getUnitByCode(uCode);
        }

        // If an exponent is found but it's not a valid number, e.g. "2-1",
        // mark the unit invalid. Otherwise, the "-1" part will be ignored
        // because parseInt("2-1") results in 2. See LF-2870.
        if (exp && isNaN(exp)) {
          retUnit = null;
          this.retMsg_.push(`${origCode} is not a valid UCUM code.`);
        }
        else {
          // If we still don't have a unit, separate out the prefix, if any,
          // and try without it.
          if (!origUnit) {
            // Try for a single character prefix first.
            pfxCode = uCode.charAt(0);
            pfxObj = this.pfxTabs_.getPrefixByCode(pfxCode);

            // if we got a prefix, get its info and remove it from the unit code
            if (pfxObj) {
              pfxVal = pfxObj.getValue();
              pfxExp = pfxObj.getExp();
              let pCodeLen = pfxCode.length;
              uCode = uCode.substr(pCodeLen);

              // try again for the unit
              origUnit = this.utabs_.getUnitByCode(uCode);

              // If we still don't have a unit, see if the prefix could be the
              // two character "da" (deka) prefix.  That's the only prefix with
              // two characters, and without this check it's interpreted as "d"
              // (deci) and the "a" is considered part of the unit code.

              if (!origUnit && pfxCode == 'd' && uCode.substr(0, 1) == 'a') {
                pfxCode = 'da';
                pfxObj = this.pfxTabs_.getPrefixByCode(pfxCode);
                pfxVal = pfxObj.getValue();
                uCode = uCode.substr(1);

                // try one more time for the unit
                origUnit = this.utabs_.getUnitByCode(uCode);
              }

              // Reject the unit we found if it might have another prefix.
              // Such things are in our tables through the LOINC source_
              // (ucum.csv) which has guidance and synonyms.  I think it should be
              // safe to exclude anything whose source is LOINC from having a
              // prefix.
              if (origUnit && origUnit.source_ == 'LOINC')
                origUnit = null;
            } // end if we found a prefix
          } // end if we didn't get a unit after removing an exponent

          // If we still haven't found anything, we're done looking.
          // (We tried with the full unit string, with the unit string
          // without the exponent, the unit string without a prefix,
          // common errors, etc. That's all we can try).
          if (!origUnit) {
            retUnit = null ;
            // BUT if the user asked for suggestions, at least look for them
            if (this.suggestions_) {
              let suggestStat = this._getSuggestions(origCode);
            }
            else {
              this.retMsg_.push(`${origCode} is not a valid UCUM code.`);
            }
          }
          else {
            // Otherwise we found a unit object.  Clone it and then apply the
            // prefix and exponent, if any, to it.  And remove the guidance.
            retUnit = origUnit.clone();
            // If we are here, this is only part of the full unit string, so it is
            // not a base unit, and the synonyms will mostly likely not be correct for the full
            // string.
            retUnit.resetFieldsForDerivedUnit();
            let theDim = retUnit.getProperty('dim_');
            let theMag = retUnit.getProperty('magnitude_');
            let theName = retUnit.getProperty('name_');
            let theCiCode = retUnit.getProperty('ciCode_');
            let thePrintSymbol = retUnit.getProperty('printSymbol_');
            // If there is an exponent for the unit, apply it to the dimension
            // and magnitude now
            if (exp) {
              exp = parseInt(exp);
              let expMul = exp;
              if (theDim)
                theDim = theDim.mul(exp);
              theMag = Math.pow(theMag, exp);
              retUnit.assignVals({'magnitude_': theMag});

              // If there is also a prefix, apply the exponent to the prefix.
              if (pfxObj) {

                // if the prefix base is 10 it will have an exponent.  Multiply
                // the current prefix exponent by the exponent for the unit
                // we're working with.  Then raise the prefix value to the level
                // defined by the exponent.
                if (pfxExp) {
                  expMul *= pfxObj.getExp();
                  pfxVal = Math.pow(10, expMul);
                }
                // If the prefix base is not 10, it won't have an exponent.
                // At the moment I don't see any units using the prefixes
                // that aren't base 10.   But if we get one the prefix value
                // will be applied to the magnitude (below) if the unit does
                // not have a conversion function, and to the conversion prefix
                // if it does.
              } // end if there's a prefix as well as the exponent
            } // end if there's an exponent

            // Now apply the prefix, if there is one, to the conversion
            // prefix or the magnitude
            if (pfxObj) {
              if (retUnit.cnv_) {
                retUnit.assignVals({'cnvPfx_': pfxVal});
              }
              else {
                theMag *= pfxVal;
                retUnit.assignVals({'magnitude_': theMag})
              }
            }
            // if we have a prefix and/or an exponent, add them to the unit
            // attributes - name, csCode, ciCode and print symbol
            let theCode = retUnit.csCode_;
            if (pfxObj) {
              theName = pfxObj.getName() + theName;
              theCode = pfxCode + theCode;
              theCiCode = pfxObj.getCiCode() + theCiCode;
              thePrintSymbol = pfxObj.getPrintSymbol() + thePrintSymbol;
              retUnit.assignVals({
                'name_': theName,
                'csCode_': theCode,
                'ciCode_': theCiCode,
                'printSymbol_': thePrintSymbol
              });
            }
            if (exp) {
              let expStr = exp.toString();
              retUnit.assignVals({
                'name_': theName + '<sup>' + expStr + '</sup>',
                'csCode_': theCode + expStr,
                'ciCode_': theCiCode + expStr,
                'printSymbol_': thePrintSymbol + '<sup>' + expStr + '</sup>'
              });
            }
          } // end if an original unit was found (without prefix and/or exponent)
        } // end if an invalid exponent wasn't found
      } // end if we didn't get a unit for the full unit code (w/out modifiers)
    } // end if we didn't find the unit on the first try, before parsing
    return [retUnit, origString];
  } // end _makeUnit


  /**
   * This method handles unit creation when an annotation is included
   * in the unit string.  This basically isolates and retrieves the
   * annotation and then calls _makeUnit to try to get a unit from
   * any text that precedes or follows the annotation.
   *
   * @param uCode the string defining the unit
   * @param origString the original full string submitted to parseString
   * @returns the unit object found, or null if one could not be found
   *
   * the this.retMsg_ array will be updated with any user messages
   *   (informational, error or warning) generated by this or called methods
   */
  _getUnitWithAnnotation(uCode, origString) {

    let retUnit = null;

    // Get the annotation and anything that precedes or follows it.
    let annoRet = this._getAnnoText(uCode, origString);
    let annoText = annoRet[0];
    let befAnnoText = annoRet[1];
    let aftAnnoText = annoRet[2];

    // Add the warning about annotations - just once.

    if (this.bracesMsg_ && this.retMsg_.indexOf(this.bracesMsg_) === -1)
      this.retMsg_.push(this.bracesMsg_);

    // If there's no text before or after the annotation, it's probably
    // something that should be interpreted as a 1, e.g., {KCT'U}.
    // HOWEVER, it could also be a case where someone used braces instead
    // of brackets, e.g., {degF} instead of [degF].  Check for that before
    // we assume it should be a 1.
    let msgLen = this.retMsg_.length;
    if (!befAnnoText && !aftAnnoText) {
      let tryBrackets = '[' + annoText.substring(1, annoText.length - 1) + ']';
      let mkUnitRet = this._makeUnit(tryBrackets, origString);

      // Nearly anything inside braces is valid, so we don't want to change the
      // unit, but we can put the found unit in the message as a sort of
      // warning.
      if (mkUnitRet[0]) {
        retUnit = uCode;
        this.retMsg_.push(`${annoText} is a valid unit expression, but ` +
          `did you mean ${tryBrackets} (${mkUnitRet[0].name_})?`);
      }
      else {
        // remove error message generated for trybrackets
        if (this.retMsg_.length > msgLen) {
          this.retMsg_.pop();
        }
      }

      // This is the case where the string is only this annotation.
      // Create and return a unit object, as we do for numeric units in
      // parseString.
      retUnit = new Unit({
        'csCode_': annoText,
        'ciCode_': annoText,
        'magnitude_': 1,
        'name_': annoText
      });

    } // end if it's only an annotation

    else {
      // if there's text before and no text after, assume the text before
      // the annotation is the unit code (with an annotation following it).
      // Call _makeUnit for the text before the annotation.
      if (befAnnoText && !aftAnnoText) {
        // make sure that what's before the annoText is not a number, e.g.,
        // /100{cells}.  But f it is a number, just set the return unit to
        // the number.
        if (intUtils_.isIntegerUnit(befAnnoText)) {
          retUnit = befAnnoText ;
        }
        // Otherwise try to find a unit
        else {
          let mkUnitRet = this._makeUnit(befAnnoText, origString);

          // if a unit was returned
          if (mkUnitRet[0]) {
            retUnit = mkUnitRet[0];
            retUnit.csCode_ += annoText;
            origString = mkUnitRet[1];
          }
          // Otherwise add a not found message
          else {
            this.retMsg_.push(`Unable to find a unit for ${befAnnoText} that ` +
              `precedes the annotation ${annoText}.`);
          }
        }
      }
      // else if there's only text after the annotation, try for a unit
      // from the after text and assume the user put the annotation in
      // the wrong place (and tell them)
      else if (!befAnnoText && aftAnnoText) {

        // Again, test for a number and if it is a number, set the return
        // unit to the number.
        if (intUtils_.isIntegerUnit(aftAnnoText)) {
          retUnit = aftAnnoText + annoText ;
          this.retMsg_.push(`The annotation ${annoText} before the `
            `${aftAnnoText} is invalid.\n` + this.vcMsgStart_ + retUnit +
            this.vcMsgEnd_);
        }
        else {
          let mkUnitRet = this._makeUnit(aftAnnoText, origString);
          if (mkUnitRet[0]) {
            retUnit = mkUnitRet[0];
            retUnit.csCode_ += annoText;
            origString = retUnit.csCode_;
            this.retMsg_.push(`The annotation ${annoText} before the unit ` +
              `code is invalid.\n` + this.vcMsgStart_ + retUnit.csCode_ +
              this.vcMsgEnd_);
          }
          // Otherwise add a not found message
          else {
            this.retMsg_.push(`Unable to find a unit for ${befAnnoText} that ` +
              `follows the annotation ${annoText}.`);
          }
        }
      }
      // else it's got text before AND after the annotation.  Now what?
      // For now this is an error.  This may be a case of a missing
      // operator but that is not handled yet.
      else {
        this.retMsg_.push(`Unable to find a unit for ${befAnnoText}${annoText}` +
          `${aftAnnoText}.\nWe are not sure how to interpret text both before ` +
          `and after the annotation.  Sorry`);
      }
    } // else if there's text before/and or after the annotation

    return [retUnit , origString];

  } // end _getUnitWithAnnotations


  /**
   * Performs unit arithmetic for the units in the units array.  That array
   * contains units/numbers and the operators (division or multiplication) to
   * be performed on each unit/unit or unit/number pair in the array.  This
   * should only be called from within this class (or by test code).
   *
   * @params uArray the array that contains the units, numbers and operators
   *  derived from the unit string passed in to parseString
   * @param origString the original string to be parsed; used to provide
   *  context for messages
   *
   * @returns a single unit object that is the result of the unit arithmetic
   *
   * the this.retMsg_ array will be updated with any user messages
   *   (informational, error or warning) generated by this or called methods
   */
  _performUnitArithmetic(uArray, origString) {

    let finalUnit = uArray[0]['un'];
    if (intUtils_.isIntegerUnit(finalUnit)) {
      finalUnit = new Unit({'csCode_' : finalUnit, 'ciCode_' : finalUnit,
        'magnitude_' : Number(finalUnit),
        'name_' : finalUnit}) ;
    }
    let uLen = uArray.length ;
    let endProcessing = false ;
    // Perform the arithmetic for the units, starting with the first 2 units.
    // We only need to do the arithmetic if we have more than one unit.
    for (let u2 = 1; (u2 < uLen) && !endProcessing; u2++) {
      let nextUnit = uArray[u2]['un'];
      if (intUtils_.isIntegerUnit(nextUnit)) {
        nextUnit = new Unit({'csCode_' : nextUnit, 'ciCode_' : nextUnit,
          'magnitude_' : Number(nextUnit),
          'name_': nextUnit});
      }
      if (nextUnit === null ||
          ((typeof nextUnit !== 'number') && (!nextUnit.getProperty))) {
        let msgString = `Unit string (${origString}) contains unrecognized ` +
                        'element' ;
        if (nextUnit) {
          msgString += ` (${this.openEmph_}${nextUnit.toString()}` +
                       `${this.closeEmph_})`;
        }
        msgString += '; could not parse full string.  Sorry';
        this.retMsg_.push(msgString);
        endProcessing = true;
      }
      else {
        try {
          // Is the operation division?
          let thisOp = uArray[u2]['op'];
          let isDiv = thisOp === '/';

          // Perform the operation.  Both the finalUnit and nextUnit
          // are unit objects.
          isDiv ? finalUnit = finalUnit.divide(nextUnit) :
                  finalUnit = finalUnit.multiplyThese(nextUnit);
        }
        catch (err) {
          this.retMsg_.unshift(err.message) ;
          endProcessing = true ;
          finalUnit = null ;
        }
      } // end if we have another valid unit/number to process
    } // end do for each unit after the first one
    return finalUnit ;
  }  // end _performUnitArithmetic


  /**
   * This tests a string to see if it starts with characters and ends with
   * digits.  This is used to test for an exponent on a UCUM code (or what
   * we think might be a UCUM code).  This is broken out to a separate
   * function so that the regular expression can be verified to provide the
   * results we expect, in case someone changes it.  (Per Paul Lynch)
   * See "Test _isCodeWithExponent method" in testUnitString.spec.js
   *
   * This particular regex has been tweaked several times.  This one
   * works with the following test strings:
   * "m[H2O]-21 gives ["m[H2O]-21", "m[H2O]", "-21"]
   * "m[H2O]+21 gives ["m[H2O]+21", "m[H2O]", "+21"]
   * "m[H2O]21 gives ["m[H2O]-21", "m[H2O]", "21"]
   * "s2" gives ["s2", "s, "2"]
   * "kg" gives null
   * "m[H2O]" gives null
   * "m[H2O]23X" gives null
   *
   * @params uCode the code being tested
   * @returns an array containing: (1) the code without the exponent (or
   *  trailing number); and (2) the exponent/trailing number.  Returns null
   *  if there is no trailing number or something follows the trailing
   *  number, or if the first part is not characters.
   */
  _isCodeWithExponent(uCode) {

    let ret = [] ;
    let res = uCode.match(/(^[^\-\+]+?)([\-\+\d]+)$/);

    // If we got a return with an exponent, separate the exponent from the
    // unit and return both (as separate values)
    if (res && res[2] && res[2] !== "") {
      ret.push(res[1]);
      ret.push(res[2]);
    } // end if we got an exponent
    else {
      ret = null ;
    }
    return ret ;
  } // end _isCodeWithExponent

} // end class UnitString


/**
 *  This function exists ONLY until the original UnitString constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton UnitString object.  This is based on the UnitTables singleton
 *  implementation; see more detail in the UnitTables constructor description.
 *
 *  @return the singleton UnitString object.
 */
UnitString.getInstance = function(){
  return new UnitString();
} ;

/*
// Perform the first request for the object, to set the getInstance method.
UnitString.getInstance();

*/
