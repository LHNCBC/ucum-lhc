/**
 * This class handles the parsing of a unit string into a unit object
 */

var Ucum = require('./config.js').Ucum;
var Unit = require('./unit.js').Unit;
var UnitTables = require('./unitTables.js').UnitTables;
var PrefixTables = require('./prefixTables.js').PrefixTables;

export class UnitString {

  /**
   * Constructor
   */
  constructor() {

    // Set emphasis characters to blanks.  When set (see useHTMLInMessage) these
    // are used to emphasize certain characters or strings in user messages.
    // They should be used when output will go to a web page and blank
    // when output will go to a file.  The useHTMLInMessages method should be
    // called to set them to the appropriate HTML for the webpage display.
    this.openEmph_ = '';
    this.closeEmph_ = '';

    // Set the braces message to blank.  This message is displayed for each
    // validation request on the web page, but is included separately as
    // a note on the validation spreadsheet.  The useBraceMsgForEachString
    // method should be used to set the message to be displayed for each
    // unit string.
    this.bracesMsg_ = '';

    // Set the flags used, with indices, as place holders in unit strings
    // for parenthetical strings and strings within braces.
    this.parensFlag_ = "parens_placeholder" ; // in lieu of Jehoshaphat
    this.braceFlag_ = "braces_placeholder"; // in lieu of Nebuchadnezzar

    // Make this a singleton.  See UnitTables constructor for details.
    let holdThis = UnitString.prototype;
    UnitString = function () {
      throw (new Error('UnitString is a Singleton. ' +
          'Use UnitString.getInstance() instead.'));
    };
    if (exports)
      exports.UnitString = UnitString;
    UnitString.prototype = holdThis;

    let self = this ;
    UnitString.getInstance = function(){return self} ;
  }


  /**
   * Sets the emphasis strings to the HTML used in the webpage display - or
   * blanks them out, depending on the use parameter.
   *
   * @param use flag indicating whether or not to use the braces message;
   *  defaults to true
   */
  useHTMLInMessages(use) {
    if (use === undefined || use) {
      this.openEmph_ = Ucum.openEmph_;
      this.closeEmph_ = Ucum.closeEmph_;
    }
    else {
      this.openEmph_ = '';
      this.closeEmph_ = '';
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
   * the string passed in, and messages where appropriate.
   *
   * The string returned may be updated if the input string contained unit
   * names, e.g., "pound".  The unit code ([lb_av] for pound) is placed in
   * the string returned, a the returned messages array includes a note
   * explaining the substitution.
   *
   * @param uStr the string defining the unit
   *
   * @returns an array containing: 1) the unit object (or null if there were
   *  problems creating the unit); 2) the possibly updated unit string passed
   *  in; and 2) an array of user messages (informational, error or warning).
   * @throws an error if nothing was specified.
   */
  parseString(uStr) {

    uStr = uStr.trim();
    // Make sure we have something to work with
    if (origString === '' || origString === null) {
      throw (new Error('Please specify a unit expression to be validated.'));
    }

    let origString = uStr ;
    let retMsg = [] ;
    let parensUnits = [] ;

    // Extract any annotations, i.e., text enclosed in braces ({}) from the
    // string before further processing.  Store each one in the annotations
    // array and put a placeholder in the string for the annotation.  Do
    // this before other processing in case an annotation contains characters
    // that will be interpreted as parenthetical markers or operators in
    // subsequent processing.
    let annotations = [];
    uStr = this._getAnnotations(uStr, annotations, retMsg) ;

    // Flag used to block further processing on an unrecoverable error
    let endProcessing = retMsg.length > 0;

    // If this is the first call for the string, check for spaces and throw
    // an error if any are found.  The spec explicitly forbids spaces
    // except in annotations, which is why this is done after the annotations
    // are extracted instead of in _parseTheString.
    if (uStr.indexOf(' ') > -1) {
      throw (new Error('Blank spaces are not allowed in unit expressions.'));
    } // end if this was called for the full string

    let retObj = this._parseTheString(uStr, origString, retMsg, parensUnits, annotations) ;
    let finalUnit = retObj[0];

    // Do a final check to make sure that finalUnit is a unit and not
    // just a number.  Something like "1/{HCP}" will return a "unit" of 1
    // - which is not a unit.
    if (finalUnit && !isNaN(finalUnit) && finalUnit !== 1) {
      let newUnit = new Unit({'csCode_': origString});
      if (newUnit) {
        newUnit['magnitude_'] = finalUnit;
      }
      else {
        throw (new Error('error processing numerical unit'));
      }
      retObj[0] = newUnit;
    } // end final check
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
   * @param retMsg the array of messages to be returned
   * @param parensUnits an array to to hold unit objects obtained from
   *  parenthetical strings
   * @param annotations an array to hold annotations found in the original
   *  string
   * @returns an array containing: 1) the unit object (or null if there were
   *  problems creating the unit); 2) the possibly updated unit string passed
   *  in; and 2) an array of user messages (informational, error or warning).
   */
  _parseTheString(uStr, origString, retMsg, parensUnits, annotations) {

    // Unit to be returned
    let finalUnit = null ;

    // Flag used to block further processing on an unrecoverable error
    let endProcessing = retMsg.length > 0;

    // Call _processParens to search for and process any/all parenthetical
    // strings in uStr.  Units created for parenthetical strings will be
    // stored in the parensUnits array.
    let parensResp = this._processParens(uStr, origString, parensUnits,
                                         annotations, retMsg);
    endProcessing = parensResp[2];

    // The array used to hold the units and their operators.
    let uArray = [];

    // Continue if we didn't hit a problem
    if (!endProcessing) {
      uStr = parensResp[0];
      origString = parensResp[1];

      // Call _makeUnitsArray to convert the string to an array of unit
      // descriptors with operators.
      uArray = this._makeUnitsArray(uStr);

      // Create a unit object out of each un element
      let uLen = uArray.length;
      for (let u1 = 0; u1 < uLen && !endProcessing; u1++) {
        let curCode = uArray[u1]['un'];
        // If the current unit array element is a unit stored in the parensUnits
        // array (from a parenthesized string), get that unit and put it in the
        /// units array.
        let pfLen = this.parensFlag_.length;
        let anno = '';

        // If the parentheses flag is found at the beginning of the curCode,
        // make sure there is nothing following the parenthetical string (as
        // indicated by the index into the parensUnit array); throw an error
        // if there is - which will happen if there'a an operator missing
        // before the parenthetical string; transfer the unit to the uArray if
        // there is not.
        if (curCode.substr(0, pfLen) === this.parensFlag_) {
          // get the parenthetical index
          let sIdx = curCode.substr(pfLen);
          let endFlag = sIdx.lastIndexOf(this.parensFlag_);
          let pIdx = sIdx.substring(0, endFlag) ;
          sIdx = sIdx.substr(endFlag + pfLen) ;
          if (endFlag < sIdx.length - pfLen) {
            // first check to see if it's an annotation
            let braceStart = sIdx.indexOf(this.braceFlag_) ;
            if (braceStart >= 0) {
              let anLen = this.braceFlag_.length;
              let braceEnd = sIdx.lastIndexOf(this.braceFlag_) ;
              let aIdx = sIdx.substr(anLen, braceEnd - anLen);
              anno = annotations[aIdx];
              // check to see if text follows the annotation
              if ((braceEnd + anLen) < sIdx.length) {
                sIdx = sIdx.substr(braceEnd + anLen);
                let mString = origString.replace(`)${sIdx}`, `)${this.openEmph_}` +
                    `${sIdx}${this.closeEmph_}`);
                let mString2 = `Missing operator before ${this.openEmph_}` +
                    `${sIdx}${this.closeEmph_} in ${mString}`;
                retMsg.push(mString2);
                endProcessing = true;
              } // end if there is text following the annotation
              else if (this.bracesMsg_) {
                let dup = false ;
                for (let r = 0; !dup && r < retMsg.length; r++) {
                  dup = (retMsg[r] === this.bracesMsg_);
                }
                if (!dup)
                  retMsg.push(this.bracesMsg_);
              }
            } // end if the text following the parentheses is an annotation
          } // end if the ending parenthesis is not at the end of the code

          // If we're good, put the unit in the uArray and replace the placeholder
          // in the original string with the unit name.
          if (!endProcessing) {
            let nIdx = parseInt(pIdx);
            if (parensUnits[nIdx]) {
              uArray[u1]['un'] = parensUnits[nIdx];
              origString = origString.replace(this.parensFlag_ + pIdx + this.parensFlag_,
                  '(' + parensUnits[nIdx]['name_'] + ')');
            }
          }
        } // end if the parentheses flag is found at the beginning of curCode

        // Else if characters precede a parentheses flag, an operator is
        // missing between the characters and the unit referenced by the index.
        else if (curCode.indexOf(this.parensFlag_) > 0) {
          let pIdx = curCode.indexOf(this.parensFlag_);
          let msAfter = curCode.substr(0, pIdx);
          let mString = origString.replace(`${msAfter}(`, `${this.openEmph_}` +
              `${msAfter}${this.closeEmph_}(`);
          retMsg.push(`Missing operator after ${this.openEmph_}${msAfter}` +
                      `${this.closeEmph_} in ${mString}`);
          endProcessing = true ;
        } // end if we found the parentheses flag in the wrong place

        // Else it's not a parenthetical unit.  If it's not a number, call
        // _makeUnit to create a unit for it.
        else {
          let curCodeNum = Number(curCode);
          // if the current unit string is NOT a number, call _makeUnit to create
          // the unit object for it.  Stop processing if no unit was returned.
          if (isNaN(curCodeNum)) {
            let uRet = this._makeUnit(curCode, annotations,
                                     retMsg, origString);
            if (uRet[0] === null)
              endProcessing = true;
            else {
              uArray[u1]['un'] = uRet[0];
              origString = uRet[1];
            }
          }
          // Otherwise write the numeric version of the number back to
          // the uArray 'un' element
          else {
            uArray[u1]['un'] = curCodeNum;
          }
        }
      }
    }
    // If we're still good, continue
    if (!endProcessing) {
      // Process the units (and numbers) to create one final unit object
      if (uArray[0] === null || uArray == "'" || uArray[0]['un'] === undefined ||
          uArray[0]['un'] == null) {
        // not sure what this might be, but this is a safeguard
        retMsg.push(`Unit string (${origString}) did not contain anything that ` +
            'could be used to create a unit, or else something that is not ' +
            'handled yet by this package.  Sorry');
        endProcessing = true;
      }
    }
    if (!endProcessing)
      finalUnit = this._performUnitArithmetic(uArray, retMsg, origString) ;


    // check for any annotation flags still there and replace them with
    // the annotations
    let anoLen = annotations.length;
    for (let a = 0; a < anoLen; a++) {
      origString = origString.replace(this.braceFlag_ + a +
          this.braceFlag_, annotations[a]);
    }
    return [finalUnit, origString, retMsg];
  } // end _parseTheString


  /**
   * Extracts all annotations from a unit string, replacing them with
   * placeholders for later evaluation.  The annotations are stored in the
   * annotations array.  This should only be called from within this class
   * (or by test code).
   *
   * @param uStr the unit string being parsed
   * @param annotations the array to contain the extracted annotations
   * @param retMsg the array to contain any user messages (error and warning)
   * @returns the string after the annotations are replaced with placeholders
   */
  _getAnnotations(uString, annotations, retMsg) {
    let openBrace = uString.indexOf('{');
    while (openBrace >= 0) {

      let closeBrace = uString.indexOf('}');
      if (closeBrace < 0) {
        retMsg.push('Missing closing brace for annotation starting at ' +
            this.openEmph_ + uString.substr(openBrace) +
            this.closeEmph_);
        openBrace = -1;
      }
      else {
        let braceStr = uString.substring(openBrace, closeBrace + 1);
        let aIdx = annotations.length.toString();
        uString = uString.replace(braceStr, this.braceFlag_ + aIdx +
            this.braceFlag_);
        annotations.push(braceStr);
        openBrace = uString.indexOf('{');
      }
    } // end do while we have an opening brace
    return uString ;
  } // end _getAnnotations


  /**
   * Finds and processes any/all parenthesized unit strings. This should only
   * be called from within this class (or by test code).
   *
   * Nested parenthesized strings are processed from the inside out.  The
   * parseString function is called from within this one for each parenthesized
   * unit string, and the resulting unit object is stored in the parensUnits
   * array, to be processed after all strings are translated to units.
   *
   * A placeholder is placed in the unit string returned to indicate that the
   * unit object should be obtained from the parensUnits array.  The placeholder
   * consists of the parenthesis flag (this.parensFlag_) followed by the index
   * of the unit in the parensUnits array followed by this.parensFlag_.
   *
   * @param uStr the unit string being parsed, where this will be the full
   *  string the first time this is called and parenthesized strings on any
   *  subsequent calls
   * @param origString the original string first passed in to parseString
   * @param parensUnits the array to contain the unit objects for the
   *  parenthesized unit strings
   * @param annotations the array that contains any annotations in the
   *  unit strings; passed through when _parseTheString called recursively
   * @param retMsg the array to contain any user messages (error and warning)
   * @returns the string after the parentheses are replaced with placeholders
   */
  _processParens(uString, origString, parensUnits, annotations, retMsg) {

    // Unit strings array and index
    let uStrArray = [];
    let uStrPos = 0;
    let stopProcessing = false ;

    let pu = parensUnits.length;

    // Count of characters trimmed off the beginning of the unit string (uString)
    // as units are removed from it; used for error messages to provide
    // context.
    let trimmedCt = 0;

    // Break the unit string into pieces that consist of text outside of
    // parenthetical strings and placeholders for the parenthetical units.
    // This method is called recursively for parenthetical strings and the units
    // returned are stored in the parensUnits array.
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
            theMsg += `${uString.substr(closePos + 1)}.`;
          }
          else {
            theMsg += '.';
          }
          retMsg.push(theMsg);
          uStrArray[uStrPos] = uString;
          stopProcessing = true;
        } // end if a close parenthesis was found

        // If no parentheses were found in the current unit string, transfer
        // it to the units array and blank out the string, which will end
        // the search for parenthetical units.
        else {
          uStrArray[uStrPos] = uString;
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
          uStrArray[uStrPos++] = uString.substr(0, openPos);
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
        // in the parensUnit array.  Set the unit string to whatever follows
        // the position of the closing parenthesis for this group, to be
        // processed by the next iteration of this loop.  If there's nothing
        // left uString is set to "".
        if (openCt === closeCt) {
          closePos = c;
          uStrArray[uStrPos++] = this.parensFlag_ + pu.toString() + this.parensFlag_;
          let parseResp = this._parseTheString(
              uString.substring(openPos + 1, closePos - 1),
              origString, retMsg, parensUnits, annotations);
          if (parseResp[0] === null)
            stopProcessing = true;
          else {
            origString = parseResp[1];
            parensUnits[pu++] = parseResp[0];
            uString = uString.substr(closePos);
            trimmedCt = closePos;
          }
        } // end if the number of open and close parentheses matched

        // If the number of open and close parentheses doesn't match, indicate
        // an error.
        else {
          uStrArray.push(origString.substr(openPos));
          retMsg.push(`Missing close parenthesis for open parenthesis at ` +
              `${origString.substring(0, openPos + trimmedCt)}` +
              `${this.openEmph_}${origString.substr(openPos, 1)}` +
              `${this.closeEmph_}${origString.substr(openPos + 1)}.`);
          stopProcessing = true;
        }
      } // end if an open parenthesis was found
    } // end do while the input string is not empty
    return [uStrArray.join(''), origString, stopProcessing]
  } // end _processParens


  /**
   * Breaks the unit string into an array of unit descriptors and operators.
   * This should only be called from within this class (or by test code).
   *
   * @param uStr the unit string being parsed
   * @returns the array representing the unit string
   */
  _makeUnitsArray(uStr) {

    // Separate the string into pieces based on delimiters / (division) and .
    // (multiplication).  The idea is to get an array of units on which we
    // can then perform any operations (prefixes, multiplication, division).

    let uArray1 = uStr.match(/([./]|[^./]+)/g) ;

    // If the first element in the array is a division operator (/), the
    // string started with '/'.  Add a first element containing 1 to the
    // array, which will cause the correct computation to be performed (inversion).
    if (uArray1[0] === "/") {
      uArray1.unshift("1");
    }

    // Create an array of unit/operator objects.  The unit is, for now, the
    // string containing the unit code (e.g., Hz for hertz) including
    // a possible prefix and exponent.   The operator is the operator to be
    // applied to that unit and the one preceding it.  So, a.b would give
    // us two objects.  The first will have a unit of a, and a blank operator
    // (because it's the first unit).  The second would have a unit of b
    // and the multiplication operator (.).  REDO
    let u1 = uArray1.length ;
    let uArray = [{op: "", un: uArray1[0]}] ;
    for (let n = 1; n < u1; n++) {
      uArray.push({op: uArray1[n++], un: uArray1[n]});
    }
    return uArray ;
  } // end _makeUnitsArray


  /**
   * Creates a unit object from a string defining one unit.  The string
   * should consist of a unit code for a unit already defined (base or
   * otherwise).  It may include a prefix and an exponent, e.g., cm2
   * (centimeter squared).  This should only be called from within this
   * class (or by test code).
   *
   * @params uCode the string defining the unit
   * @param annotations the array to contain the extracted annotations
   * @param retMsg the array to contain any user messages (error and warning)
   * @param origString the original string to be parsed; used to provide
   *  context for messages
   * @returns an array containing:  1) a unit object, or null if there were
   *  problems creating the unit; and 2) the origString passed in, which may
   *  be updated if a unit name was translated to a unit code
   */
  _makeUnit(uCode, annotations, retMsg, origString) {
    let exp = null;
    let pfxVal = null;
    let pfxCode = null;
    let pfxExp = null;
    let pfxName = null;
    let ulen = uCode.length;
    let origUnit = null;
    let retUnit = null;
    let endProcessing = false ;
    let origCode = uCode ;

    // check annotations:
    // If it's JUST an annotation, replace with 1.  If we find text following
    // the annotation, mark it as an error.   Otherwise just remove it - the
    // placeholder, that is.
    // In any case, put a message in the retMsg array explaining either the
    // problem or how the annotation is interpreted.


    let anLen = this.braceFlag_.length;
    let anOpen = uCode.indexOf(this.braceFlag_) ;
    if (anOpen >= 0) {
      let anClose = uCode.substr(anOpen + 1).indexOf(this.braceFlag_) +
                    anOpen + 1;

      // If no closing flag was found, we have a problem somewhere.
      if (anClose <= 0) {
        retMsg.push('Problem processing annotation; please check syntax');
        endProcessing = true ;
      }
      else {
        let anIdx = parseInt(uCode.substring(anOpen + anLen, anClose));
        let anText = annotations[anIdx] ;

        // If the closing flag is not at the end of the uCode, text
        // follows the annotation - which is invalid.
        if (anClose + anLen < uCode.length) {
          let wString = origString.replace(anText, this.openEmph_ + anText +
                                                   this.closeEmph_);
          retMsg.push(`Text following annotation ${anText} in ${wString} ` +
                      'is invalid.');
          endProcessing = true;
        } // end if text follows the annotation

        // Else if there is no text preceding the opening flag, the
        // annotation is interpreted as 1.  Warn the user
        else if (anOpen === 0) {
          uCode = 1 ;
          if (this.bracesMsg_) {
            let dup = false;
            for (let r = 0; !dup && r < retMsg.length; r++) {
              dup = (retMsg[r] === this.bracesMsg_);
            }
            if (!dup)
              retMsg.push(this.bracesMsg_);
          }
          retUnit = 1 ;
          endProcessing = true ;
        } // end if the annotation is a standalone

        // Else we have an annotation that follows a unit expression (probably).
        // Put in an interpretation note and trim the annotation off the uCode.
        else {
          //let lead1 = (origString.substr(0,1) === '/') ? '1' : '' ;
          //let wString = origString.replace(anText, this.openEmph_ + anText +
          //                                         this.closeEmph_) ;
          origString = origString.replace(this.braceFlag_ + anIdx +
                                          this.braceFlag_, anText);
          if (this.bracesMsg_) {
            let dup = false;
            for (let r = 0; !dup && r < retMsg.length; r++) {
              dup = (retMsg[r] === this.bracesMsg_);
            }
            if (!dup)
              retMsg.push(this.bracesMsg_);
          }
          uCode = uCode.substr(0, anOpen);
          origCode = uCode ;
        } // end if the annotation follows the unit expression
      } // end if we found an open and a close brace
    } // end if we found an open brace


    // Continue if we did not hit an annotation error
    if (!endProcessing) {

      // Check to make sure that the uCode is not simply a number.  This can
      // happen if an annotation was stripped off, or if the uCode was JUST
      // an annotation.  In either case, digits are not units, but return the
      // digits.
      endProcessing = !isNaN(uCode);
      retUnit = Number(uCode) ;
    }
    if (!endProcessing) {

      ulen = uCode.length;
      let utabs = UnitTables.getInstance();
      // First look for the full string as a code
      origUnit = utabs.getUnitByCode(uCode);
      // If we didn't find it, check to see if it uses a carat ^
      if (!origUnit && uCode.indexOf('^') > -1) {
        let tryCode = uCode.replace('^', '*') ;
        origUnit = utabs.getUnitByCode(tryCode) ;
        if (origUnit) {
          origUnit.csCode_ = origUnit.csCode_.replace('*', '^') ;
          origUnit.ciCode_ = origUnit.ciCode_.replace('*', '^') ;
        }
      }
      // If we didn't find it, try it as a name
      if (!origUnit) {
        let origUnitAry = utabs.getUnitByName(uCode);
        if (origUnitAry && origUnitAry.length > 0) {
          origUnit = origUnitAry[0];
          let mString = '(The UCUM code for ' + uCode + ' is ' +
              origUnit.csCode_ + ')';
          let dupMsg = false;
          for (let r = 0; r < retMsg.length && !dupMsg; r++)
            dupMsg = retMsg[r] === mString;
          if (!dupMsg)
            retMsg.push(mString);
          let rStr = new RegExp('(^|[.\/({])(' + uCode + ')($|[.\/)}])');
          let res = origString.match(rStr);
          origString = origString.replace(rStr, res[1] + origUnit.csCode_ + res[3]);
          uCode = origUnit.csCode_;
        }
      }

      // If that didn't work, peel off the exponent and try it
      if (!origUnit) {
        // This particular regex has been tweaked several times.  This one
        // works with the following test strings:
        // "m[H2O]-21] gives ["m{H2O]-21", "m[H2)]", "-21"]
        // "m[H2O]+21] gives ["m{H2O]+21", "m[H2)]", "+21"]
        // "m[H2O]21] gives ["m{H2O]-21", "m[H2)]", "21"]
        // "s2" gives ["s2", "s, "2"]
        // "kg" gives null
        let res = uCode.match(/(^[^\-\+]+?)([\-\+\d]+)$/);

        // if we got an exponent, separate it from the unit and try
        // to get the unit again
        if (res && res[2] && res[2] !== "") {
          // Make sure that there were no characters after the last digit.
          // If there are, the reassembled string ends at the last digit,
          // dropping off everything after that.  Characters after an
          // exponent (except for subsequent units after a division or
          // multiplication operator) are invalid.
          let reassemble = res[1] + res[2];
          if (reassemble === uCode) {
            uCode = res[1];
            exp = res[2];
            origUnit = utabs.getUnitByCode(uCode);
          } // end if nothing followed the exponent (if there was one)
        } // end if we got an exponent
      } // end if we didn't get a unit for the full unit code

      // if we still don't have a unit, separate out the prefix
      // and try without it.

      if (!origUnit) {
        // Try for a single character prefix first.
        let pfxTabs = PrefixTables.getInstance();
        pfxCode = uCode.charAt(0);
        let pfxObj = pfxTabs.getPrefixByCode(pfxCode);

        // if we got a prefix, get its info and remove it from the unit code
        if (pfxObj) {
          pfxVal = pfxObj.getValue();
          pfxExp = pfxObj.getExp();
          pfxName = pfxObj.getName();
          let pCodeLen = pfxCode.length;
          uCode = uCode.substr(pCodeLen);
          ulen -= pCodeLen;

          // try again for the unit
          origUnit = utabs.getUnitByCode(uCode);

          // If we still don't have a unit, see if the prefix could be the
          // two character "da" (deka) prefix.  That's the only prefix with
          // two characters, and without this check it's interpreted as "d"
          // (deci) and the "a" is considered part of the unit code.

          if (!origUnit && pfxCode == 'd' && uCode.substr(0, 1) == 'a') {
            pfxCode = 'da';
            pfxObj = pfxTabs.getPrefixByCode(pfxCode);
            pfxVal = pfxObj.getValue();
            pfxExp = pfxObj.getExp();
            pfxName = pfxObj.getName();
            uCode = uCode.substr(1);
            ulen -= 1;

            // try one more time for the unit
            origUnit = utabs.getUnitByCode(uCode);
          }

        } // end if we found a prefix
      } // end if we didn't get a unit after removing an exponent

      // One more thing.
      // If we didn't find a unit, signal an error.  (We tried with the full
      // unit string, with the unit string without the exponent, and the
      // unit string without a prefix.  That's all we can try).
      if (!origUnit) {
        retMsg.push(`Unable to find unit for ${origCode}`);
        retUnit = null;
        endProcessing = true;
      }
      if (!endProcessing) {
        // Otherwise we found a unit object.  Clone it and then apply the prefix
        // and exponent, if any, to it.
        retUnit = origUnit.clone();
        let theDim = retUnit.getProperty('dim_');
        let theMag = retUnit.getProperty('magnitude_');
        let theName = retUnit.getProperty('name_');
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
          if (pfxVal) {

            // if the prefix base is 10 it will have an exponent.  Multiply the
            // current prefix exponent by the exponent for the unit we're
            // working with.  Then raise the prefix value to the level
            // defined by the exponent.
            if (pfxExp) {
              expMul *= pfxExp;
              pfxVal = Math.pow(10, expMul);
            }
            // if the prefix base is not 10, it won't have an exponent.
            // At the moment I don't see any units using the prefixes
            // that aren't base 10.   But if we get one the prefix value
            // will be applied to the magnitude (below), which is what
            // we want anyway.
          } // end if there's a prefix as well as the exponent
        } // end if there's an exponent

        // Now apply the prefix, if there is one, to the magnitude
        if (pfxVal) {
          theMag *= pfxVal;
          retUnit.assignVals({'magnitude_': theMag})
        }

        // if we have a prefix and/or an exponent, add them to the unit name
        let theCode = retUnit.csCode_;
        if (pfxVal) {
          theName = pfxName + theName;
          theCode = pfxCode + theCode;
          retUnit.assignVals({
            'name_': theName,
            'csCode_': theCode
          });
        }
        if (exp) {
          theName = theName + '<sup>' + exp.toString() + '</sup>';
          theCode = theCode + exp.toString();
          retUnit.assignVals({
            'name_': theName,
            'csCode_': theCode
          });
        }
      } // end if not endProcessing set from no unit found
    } // end if not endProcessing set from annotation error
    return [retUnit, origString] ;
  } // end _makeUnit


  /**
   * Performs unit arithmetic for the units in the units array.  That array
   * contains units/numbers and the operators (division or multiplication) to
   * be performed on each unit/unit or unit/number pair in the array.  This
   * should only be called from within this class (or by test code).
   *
   * @params uArray the array that contains the units, numbers and operators
   *  derived from the unit string passed in to parseString
   * @param retMsg the array that contains any/all user messages (error and
   *  warning); may be empty when passed in or might not
   * @param origString the original string to be parsed; used to provide
   *  context for messages
   * @returns a single unit object that is the result of the unit arithmetic
   */
  _performUnitArithmetic(uArray, retMsg, origString) {

    let finalUnit = uArray[0]['un'];
    let uLen = uArray.length ;
    let endProcessing = false ;
    // Perform the arithmetic for the units, starting with the first 2 units.
    // We only need to do the arithmetic if we have more than one unit.
    for (var u2 = 1; u2 < uLen; u2++, !endProcessing) {
      let nextUnit = uArray[u2]['un'];
      if (nextUnit === null ||
          ((typeof nextUnit !== 'number') && (!nextUnit.getProperty))) {
        let msgString = `Unit string (${origString}) contains unrecognized ` +
                        'element' ;
        if (nextUnit) {
          msgString += ` (${this.openEmph_}${nextUnit.toString()}` +
                       `${this.closeEmph_})`;
        }
        msgString += '; could not parse full string.  Sorry';
        retMsg.push(msgString);
        endProcessing = true;
      }
      else {
        try {
          // Is the operation division?
          let thisOp = uArray[u2]['op'];
          let isDiv = thisOp === '/';

          // Perform the operation based on the type(s) of the operands

          // A.  nextUnit is a unit object:
          if (typeof nextUnit !== 'number') {

            // both are unit objects
            if (typeof finalUnit !== 'number') {
              isDiv ? finalUnit = finalUnit.divide(nextUnit) :
                  finalUnit = finalUnit.multiplyThese(nextUnit);
            }
            // finalUnit is a number; nextUnit is a unit object
            else {
              let nMag = nextUnit.getProperty('magnitude_');
              isDiv ? nMag = finalUnit / nMag : nMag *= finalUnit;
              let theName = finalUnit.toString() + thisOp +
                  nextUnit.getProperty('name_');
              let theCode = finalUnit.toString() + thisOp +
                  nextUnit.getProperty('csCode_');
              let theDim = nextUnit.getProperty('dim_');
              if (isDiv && theDim) {
                theDim = theDim.minus();
              }
              finalUnit = nextUnit;
              finalUnit.assignVals({'csCode_' : theCode,
                'name_' : theName,
                'dim_' : theDim,
                'magnitude_' : nMag});
            }
          } // end if nextUnit is not a number

          // B.  nextUnit is a number
          else {
            // nextUnit is a number; finalUnit is a unit object
            if (typeof finalUnit !== 'number') {
              let fMag = finalUnit.getProperty('magnitude_');
              isDiv ? fMag /= nextUnit :
                  fMag *= nextUnit;
              let theName = finalUnit.getProperty('name_') + thisOp +
                  nextUnit.toString();
              let theCode = finalUnit.getProperty('csCode_') + thisOp +
                  nextUnit.toString();
              finalUnit.assignVals({'csCode_' : theCode ,
                'name_': theName,
                'magnitude_': fMag});
            }
            // both are numbers
            else {
              isDiv ? finalUnit /= nextUnit :
                  finalUnit *= nextUnit;
            }
          } // end if nextUnit is a number
        }
        catch (err) {
          retMsg.unshift(err.message) ;
          endProcessing = true ;
          finalUnit = null ;
        }
      } // end if we have another valid unit/number to process
    } // end do for each unit after the first one
    return finalUnit ;
  }  // end _performUnitArithmetic

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

// Perform the first request for the object, to set the getInstance method.
UnitString.getInstance();
