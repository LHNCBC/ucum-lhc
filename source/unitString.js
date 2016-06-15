/**
 * This class handles the parsing of a unit string into a unit object
 */
var UnitTables = require('./unitTables.js').UnitTables;
var PrefixTables = require('./prefixTables.js').PrefixTables;

export class UnitString{

  /**
   * Constructor
   */
  constructor() {
    // nothing really to do here.
  }

  /**
   * Parses a unit string, returns a unit
   *
   * @params uStr the string defining the unit
   * @returns a unit object, or null if there were problems creating the unit
   * @throws an error if at least one valid unit could not be derived from the
   *  string;
   *  an error if a non-unit & non-number was parsed as an individual element
   *    from the string (shouldn't happen, but this is a safeguard);
   *  any errors thrown by called methods (see makeUnit,
   *    unit object division, multiplication, and getProperty).
   */
  parseString(uStr) {
    let finalUnit = null ;

    // Check for parentheses in unit strings.  If found, isolate a parenthesized
    // group and pass it to a recursive call of this method.  If it contains
    // a nested parenthetical group, that will be handled in the same way.
    // Units returned by a recursive call to this method are stored in the
    // parensUnits array, and a placeholder is placed in the units array
    // (uArray) which is reassembled after all parenthetical groups in the
    // current string are processed.  The placeholder consists of a pound sign
    // (#) followed by the index of the unit in the parensUnits array.

    let uArray = [];
    let uPos = 0;

    let parensUnits = [];
    let pu = 0;
    while (uStr !== "") {
      let openCt = 0;
      let closeCt = 0;
      let openPos = uStr.indexOf('(');

      // If an opening parenthesis was not found, transfer the unit string (uStr)
      // to the current uArray element.
      if (openPos < 0) {
        uArray[uPos] = uStr;
        uStr = "";
      }

      // Otherwise process the string that includes the parenthetical group
      else {
        openCt += 1;
        // Write the text before the parentheses (if any) to the units array
        let uLen = uStr.length;
        if (openPos > 0) {
          uArray[uPos++] = uStr.substr(0, openPos);
        }

        // Find the matching closePos, i.e., the one that closes the
        // parenthetical group that this one opens.
        let closePos = 0;
        let c = openPos + 1;
        for (; c < uLen && openCt != closeCt; c++) {
          if (uStr[c] === '(')
            openCt += 1;
          else if (uStr[c] === ')')
            closeCt += 1;
        }

        // Put a placeholder for the group in the units array and recursively
        // call this method for the parenthetical group.  Put the unit returned
        // in the parensUnit array.  Set the unit string to whatever follows
        // the position of the closing parenthesis for this group, to be
        // processed by the next iteration of this loop.  If there's nothing
        // left uStr is set to "".
        if (openCt === closeCt) {
          closePos = c;
          uArray[uPos++] = '#' + pu.toString();
          parensUnits[pu++] = this.parseString(uStr.substring(openPos + 1, closePos - 1));
          uStr = uStr.substr(closePos);
        }
        else {
          throw (new Error(`Missing close parenthesis for open parenthesis ` +
                           `at  ${uStr.substring(openPos)}`));
        }
      } // end if an opening parenthesis was found
    } // end do while the input string is not empty

    // Join all the unit array elements back into one string with no separators.
    uStr = uArray.join('');

    // Call makeUnitsArray to convert the string to an array of unit
    // descriptors with operators.
    uArray = this.makeUnitsArray(uStr);

    // create a unit object out of each un element
    let uLen = uArray.length;
    for (let u1 = 0; u1 < uLen; u1++) {
      let curCode = uArray[u1]['un'];

      // If the current unit array element is a unit stored in the parensUnits
      // array (from a parenthesized string), get that unit and put it in the
      /// units array.
      if (curCode[0] === '#') {
        let uIdx = curCode.substr(1);
        uArray[u1]['un'] = parensUnits[uIdx];
      }

      // Else if it's not a number, call makeUnit to create a unit for it.
      else {
        let curCodeNum = Number(curCode);
        // if the current unit string is NOT a number, call makeUnit to create
        // the unit object for it
        if (isNaN(curCodeNum)) {
          uArray[u1]['un'] = this.makeUnit(curCode);
        }
        // Otherwise write the numeric version of the number back to
        // the uArray 'un' element
        else {
          uArray[u1]['un'] = curCodeNum;
        }
      }
    }

    // Process the units (and numbers) to create one final unit object
    if (uArray[0] === null || uArray == "'" || uArray[0]['un'] === undefined ||
        uArray[0]['un'] == null) {
      // not sure what this might be, but this is a safeguard
      throw (new Error(`Unit string (${uStr}) did not contain anything that ` +
             'could be used to create a unit, or else something that is not ' +
             'handled yet by this package.  Sorry'));
    }

    finalUnit = uArray[0]['un'];

    // Perform the arithmetic for the units, starting with the first 2.
    // We only need to do the arithmetic if we have more than one unit
    for (var u2 = 1; u2 < uLen; u2++) {
      let nextUnit = uArray[u2]['un'];
      if (nextUnit === null ||
          ((typeof nextUnit !== 'number') && (!nextUnit.getProperty))) {
        throw (new Error(`Unit string (${uStr}) contains unrecognized ` +
            `element (${nextUnit.toString()}); could not parse full ` +
            'string.  Sorry'));
      }

      // Is the operation division?
      let thisOp = uArray[u2]['op'] ;
      let isDiv = thisOp === '/' ;

      // Perform the operation based on the type(s) of the operands

      if (typeof nextUnit !== 'number') {
        // both are unit objects
        if (typeof finalUnit !== 'number') {
          isDiv ? finalUnit = finalUnit.divide(nextUnit) :
              finalUnit = finalUnit.multiplyThese(nextUnit);
        }
        // finalUnit is a number; nextUnit is a unit object
        else {
          let nMag = nextUnit.getProperty('magnitude_');
          isDiv ? nMag = finalUnit/nMag : nMag *= finalUnit ;
          let theName = finalUnit.toString() + thisOp +
                        nextUnit.getProperty('name_') ;
          finalUnit = nextUnit;
          finalUnit.assignVals({'name_': theName, 'magnitude_': nMag});
        }
      } // end if nextUnit is not a number

      else {
        // nextUnit is a number; finalUnit is a unit object
        if (typeof finalUnit !== 'number') {
          let fMag = finalUnit.getProperty('magnitude_');
          isDiv ? fMag /= nextUnit :
              fMag *= nextUnit;
          let theName = finalUnit.getProperty('name_') + thisOp +
                        nextUnit.toString();
          finalUnit.assignVals({'name_': theName, 'magnitude_': fMag});
        }
        // both are numbers
        else {
          isDiv ? finalUnit /= nextUnit :
              finalUnit *= nextUnit ;
          let theName = finalUnit.toString() + thisOp + nextUnit.toString();
          // well great - now what?  I don't have anywhere to put this.
          // TODO: figure out where the heck to put this.
          throw (new Error(`Unit string (${uStr}) contains 2 adjoining ` +
                 `elements that are numbers.  At least one must be a unit.`));
        }
      } // end if nextUnit is a number
    } // end do for each unit after the first one

    return finalUnit;
  } // end parseString


  /**
   * Breaks the unit string into an array of unit descriptors and operators.
   *
   * @param uStr the unit string being parsed
   * @returns the array representing the unit string
   */
  makeUnitsArray(uStr) {

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
    // alphanumeric description of the unit (e.g., Hz for hertz) including
    // a possible prefix and exponent.   The operator is the operator to be
    // applied to that unit and the one preceding it.  So, a.b would give
    // us two objects.  The first will have a unit of a, and a blank operator
    // (because it's the first unit).  The second would have a unit of b
    // and the multiplication operator (.).
    let u1 = uArray1.length ;
    let uArray = [{un: uArray1[0], op: ""}] ;
    for (let n = 1; n < u1; n++) {
      uArray.push({op: uArray1[n++], un: uArray1[n]});
    }
    return uArray ;
  } // end makeUnitsArray


  /**
   * Creates a unit object from a string defining one unit.  The string
   * should consist of a unit code for a unit already defined (base or
   * otherwise).  It may include a prefix and an exponent, e.g., cm2
   * (centimeter squared).
   *
   * @params uCode the string defining the unit
   * @returns a unit object, or null if problems creating the unit
   */
  makeUnit(uCode) {
    let exp = null;
    let pfxVal = null;
    let pfxCode = null;
    let pfxExp = null;
    let pfxName = null;
    let ulen = uCode.length;
    let origUnit = null;
    let retUnit = null;

    let utabs = UnitTables.getInstance();

    // First look for the full string
    origUnit = utabs.getUnitByCode(uCode);

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

      // Try for a single character prefix first and then
      // try for a 2-character prefix if a single character prefix is not found.
      let pfxTabs = PrefixTables.getInstance();
      pfxCode = uCode.charAt(0);
      let pfxObj = pfxTabs.getPrefixByCode(pfxCode);
      if (!pfxObj && uCode.length > 2) {
        pfxCode = uCode.substr(0, 2);
        pfxObj = pfxTabs.getPrefixByCode(pfxCode);
      }

      // if we got a prefix, get its info and remove it from the unit code
      if (pfxObj) {
        pfxVal = pfxObj.getValue();
        pfxExp = pfxObj.getExp();
        pfxName = pfxObj.getName();
        let pCodeLen = pfxCode.length;
        uCode = uCode.substr(pCodeLen);
        ulen -= pCodeLen;

        // now try one more time for the unit
        origUnit = utabs.getUnitByCode(uCode);
      } // end if we found a prefix
    } // end if we didn't get a unit after removing an exponent

    // If we didn't find a unit, throw an error
    if (!origUnit) {
      throw (new Error(`Unable to find unit for ${uCode}`));
    }
    // Otherwise we found a unit object.  Clone it and then apply the prefix
    // and exponent, if any, to it.


    // clone the unit we just got and then apply any exponent and/or prefix
    // to it
    retUnit = origUnit.clone();
    let theDim = retUnit.getProperty('dim_');
    let theMag = retUnit.getProperty('magnitude_');
    let theName = retUnit.getProperty('name_');
    // If there is an exponent for the unit, apply it to the dimension
    // and magnitude now
    if (exp) {
      exp = parseInt(exp);
      let expMul = exp;
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
      theMag *= pfxVal ;
      retUnit.assignVals({'magnitude_': theMag})
    }

    // if we have a prefix and/or an exponent, add them to the unit name
    if (pfxVal) {
      theName = pfxName + theName ;
      retUnit.assignVals({'name_': theName});
    }
    if (exp) {
      theName = theName + '<sup>' + exp.toString() + '</sup>' ;
      retUnit.assignVals({'name_': theName});
    }

    return retUnit ;
  } // ret makeUnit


  /**
   * Creates a unit string that indicates multiplication of the two
   * units referenced by the codes passed in.
   *
   * @params s1 string representing the first unit
   * @params s2 string representing the second unit
   * @returns a string representing the two units multiplied
   */
  mulString(s1, s2) {
    return s1 + "." + s2;
  }


  /**
   * Creates a unit string that indicates division of the first unit by
   * the second unit, as referenced by the codes passed in.
   *
   * @params s1 string representing the first unit
   * @params s2 string representing the second unit
   * @returns a string representing the division of the first unit by the
   * second unit
   */
  divString(s1, s2) {
    let ret = null;
    if(s2.length == 0)
      ret = s1;
    else {
      let supPos = s2.indexOf('<sup>') ;
      let s2Sup = null;
      if (supPos > 0) {
        s2Sup = s2.substr(supPos) ;
        s2 = s2.substr(0, supPos);
      }
      let t = s2.replace('/','1').replace('.','/').replace('1','.');

      switch (t[0]) {
        case '.':
          ret = s1 + t;
          break ;
        case '/':
          ret =  s1 + t;
          break;
        default:
          ret = s1 + "/" + t;
      }
      if (s2Sup)
        ret += s2Sup;
    }
    return ret ;
  }

} // end class UnitString

