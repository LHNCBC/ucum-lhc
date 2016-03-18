/**
 * This class handles the parsing of a unit string into a unit object
 */
var Utab = require('./unitTables.js');
var Pfx = require('./prefixTables.js');

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
   * @returns a unit object, or null if problems creating the unit
   */
  parseString(uStr) {

    let pt = Pfx.PrefixTables.getInstance();
    let ut = Utab.UnitTables.getInstance() ;
    let finalUnit = null ;

    // Check for parentheses in unit strings. We assume there aren't any,
    // so if some turn up we need to know so they can be parsed.  For now,
    // block further processing of strings with parentheses.
    let pCount = 0;
    let pArray = uStr.split('(') ;
    if (pArray.length > 1) {
      console.log('parens found in string: ', pArray.join());
      pCount += 1;
    }

    // separate string into pieces based on delimiters / (division) and .
    // (multiplication).  The idea is to get an array of units on which we
    // can then perform any operations (prefixes, multiplication, division).
    let uArray = [] ;

    // split the string on the division separator
    let dArray = uStr.split('/') ;
    let dLen = dArray.length ;

    // if there's nothing in the first element it means that the string
    // started with '/'.  I thought I'd dealt with all those, so if we come
    // upon another here, don't continue with this one.
    if (dArray[0] && dArray[0] !== "") {


      // If we only have one element after the split - and it's not multiple
      // elements connected by the multiplication operator (.), set the
      // units array unit attribute (un) to the one element and the operator
      // attribute (op) to nothing.
      if (dLen === 1 && dArray[0].indexOf('.') < 0) {
        uArray[0] = {un: dArray[0], op: ''};
      }

      // Otherwise split each element from the division split by the multiplication
      // operator (.).
      else {
        for (let d = 0, u = 0; d < dLen; d++, u++) {
          // create the current division array element and then try splitting
          // the unit string
          dArray[d] = {un: dArray[d], op: '/'};
          let mArray = dArray[d]['un'].split('.');
          let mLen = mArray.length;
          // if there was no multiplication operator in the division string,
          // transfer the object (string and operator) to the units array
          if (mLen == 1) {
            uArray[u] = dArray[d];
          }
          // Otherwise write each element from the split to the units array
          else {
            for (let m = 0; m < mLen; m++, u++) {
              uArray[u] = {un: mArray[m], op: '.'};
            }
            // drop u back one element - or we end up with empty cells in
            // uArray if we write anything else to it.
            u -= 1;
          } // end for each element from the multiplication split
        } // end for each element from the division split
      } // end if the division split gave more than one element


      // create a unit object out of each un element
      let uLen = uArray.length;
      for (let u1 = 0; u1 < uLen; u1++) {
        let curCode = uArray[u1]['un'];
        if (curCode) {
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

      if (uArray[0] == null || uArray == "'" || uArray[0]['un'] === undefined ||
          uArray[0]['un'] == null) {
        // assume this is an instance of /number or /something, e.g. "/24"
        // not sure what to do with this yet
      }
      else {
        let bypass = false;
        finalUnit = uArray[0]['un'];
        // If the first "un" element is a number - or is 4 (don't know why
        // this didn't work, but leave for now, don't try to handle yet.
        // Need to figure out what to start with since it's not a unit object.
        if (typeof finalUnit === 'number' || finalUnit === 4) {
          bypass = true;
        }
        else {
          for (var u2 = 1; u2 < uLen; u2++) {
            if (!bypass) {
              let nextUnit = uArray[u2]['un'] ;
              if ((typeof nextUnit !== 'number') && (!nextUnit.getProperty)) {
                  bypass = true;
              }
              if (!bypass) {
                // If the operation for the next unit/number is division,
                // do that now, applying the operation to the finalUnit
                if (uArray[u2]['op'] == '/') {
                  if (typeof nextUnit !== 'number')
                    finalUnit = finalUnit.divide(nextUnit);
                  else {
                    let fMag = finalUnit.getProperty('magnitude_');
                    fMag /= nextUnit;
                    finalUnit.assignVals({'magnitude_': fMag});
                  }
                }
                else {
                  // Otherwise do the multiplication
                  if (typeof nextUnit !== 'number') {
                    finalUnit = finalUnit.multiplyThese(nextUnit);
                  }
                  else {
                    let fMag = finalUnit.getProperty('magnitude_');
                    fMag *= nextUnit;
                    finalUnit.assignVals({'magnitude_': fMag});
                  }
                }
              } // end if not bypass
            } // also end if not bypass
          } // end do fo the units
        }
        if (bypass)
          finalUnit = null;
      } // if the first element is not null or '
    } // end if string doesn't start with '/'
    return finalUnit;
  } // end parseString



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
    let exp = '';
    let pfxVal = null;
    let pfxCode = null;
    let pfxExp = null ;
    let ulen = uCode.length ;

    // if the code is only one character, no parsing needed. Also block ones
    // that begin with 10 for now.
    if (ulen > 1 && uCode.substr(0,2) != "10") {

      // check for a prefix.  If we find one, move it and its value out of
      // the uCode string
      let pfxTabs = Pfx.PrefixTables.getInstance();
      let firstChar = uCode.charAt(0);
      if (pfxTabs.isDefined(firstChar)) {
        let pfxObj = pfxTabs.getPrefixByCode(firstChar);
        pfxVal = pfxObj.getValue();
        pfxCode = firstChar;
        pfxExp = pfxObj.getExp();
        uCode = uCode.substr(1);
        ulen -= 1;
      }
      // if the uCode begins with 10, e.g., 10*23 don't look for an exponent.
      // Not sure what to do with these yet.
      if (uCode.substr(0, 2) != "10") {
        let ulen = uCode.length;

        // check for an exponent working from the end of the code
        let lastChar = parseInt(uCode[ulen - 1]);
        while (typeof lastChar == 'number' && !isNaN(lastChar)) {
          exp = lastChar + exp;
          uCode = uCode.substring(0, ulen - 1);
          ulen = uCode.length;
          lastChar = parseInt(uCode.charAt(ulen - 1));
          // check for something like m2 or the code being just a number
          // in the case of m2, m was interpreted as a prefix (see fix below).
          if (uCode.length == 0 && pfxCode) {
            uCode = pfxCode;
            pfxCode = null;
            pfxVal = null ;
            pfxExp = null ;
            lastChar = '';
          }
        }  // end looking for exponent digits

        // check for a sign for the exponent
        if (exp && (uCode[ulen - 1] == '-' || uCode[ulen - 1] == '+')) {
          exp = uCode[ulen - 1] + exp;
          uCode = uCode.substring(0, ulen - 1);
        }
      }
    }
    let utabs = Utab.UnitTables.getInstance();

    // go get the unit for the code (without prefix or exponent)
    let origUnit = utabs.getUnitByCode(uCode);
    // if we didn't find the unit but we do have a prefix, see if we're
    // looking at a case where a base unit code was interpreted as a prefix,
    // e.g., m2
    if (!origUnit && pfxCode) {
      uCode = pfxCode + uCode ;
      pfxCode = null;
      pfxVal = null ;
      pfxExp = null ;
      origUnit = utabs.getUnitByCode(uCode) ;
    }
    let retUnit = null;
    if (origUnit) {
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
            exp *= pfxExp;
            pfxVal = Math.pow(10, exp);
          }
          // if the prefix base is not 10, it won't have an exponent.
          // At the moment I don't see any units using the prefixes
          // that aren't base 10.   Put out a warning if we come across
          // one.
          else {
            console.log('unit with prefix that is not base 10 ' +
                        'found; uCode = ' + uCode + '; prefix = ' +
                         pfxCode) ;
          }
        } // end if there's a prefix as well as the exponent
      } // end if there's an exponent

      // Now apply the prefix, if there is one, to the magnitude
      if (pfxVal) {
        theMag *= pfxVal ;
        retUnit.assignVals({'magnitude_': theMag})
      }
    } // end if we found a unit object
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
    }
    return ret ;
  }

} // end class UnitString

