/**
 * Utility functions used by tests
 *
 *
 */

var JDefs = require('../source-es5/ucumJsonDefs.js').UcumJsonDefs;
var Unit = require('../source-es5/unit.js').Unit;
var UnitTables = require('../source-es5/unitTables.js').UnitTables;
var UnitString = require('../source-es5/unitString.js').UnitString;

var uTab = UnitTables.getInstance();

export class UcumTestUtils {

  constructor() {
  }

  /**
   * This method runs the unit strings for non-base units through the
   * parsing code to check for problems in unit creation, specifically
   * in the creation of dimension vectors for units that have them.
   *
   * @returns an array containing two arrays:
   *  the problems array - which contains a list of any problem units; and
   *  the skippedUnits array - which contains the unit code for any unit
   *    skipped and an indication of why it was skipped.
   */
  checkAllDimensions() {

    // the problems array is what is returned - hopefully empty
    let problems = [];

    // Load the data
    let jDefs = JDefs.getInstance();
    jDefs.loadJsonDefs();

    let uString = UnitString.getInstance();
    let parseResp = null;
    let curUnit = null;
    let parsedUnit = null;

    // get all units in creation order
    var allUnits = uTab.allUnitsByDef();
    var uLen = allUnits.length;
    for (var u = 0; u < uLen; u++) {
      let skipped = false;
      let whoCalled = '';
      let whoReturned = '';
      curUnit = allUnits[u];
      if (!curUnit.isBase_) {
        if (curUnit.source_ === 'UCUM') {
          if (curUnit.csUnitString_ && curUnit.csUnitString_ !== '1' &&
              curUnit.csUnitString_ !== 1 && !curUnit.isArbitrary_ &&
              curUnit.class_ !== 'dimless' && curUnit.csCode_ !== 'mol' &&
              curUnit.csCode_ !== '[car_Au]') {
            whoCalled = `parseString called on UCUM unit ${curUnit.csCode_} ` +
                        `for string = ${curUnit.csUnitString_}`;
            parseResp = uString.parseString(curUnit.csUnitString_);
            whoReturned = `parseString returned ${parseResp[0].csCode_} ` +
                `for string = ${parseResp[0].csUnitString_}`;
            parsedUnit = parseResp[0];
            if (parsedUnit) {
              var newMag = parsedUnit.magnitude_;
              newMag *= curUnit.baseFactor_;
              parsedUnit.magnitude_ = newMag;
            } // end if we got a parsed unit back
          } // end if the unit is one that gets a dimension vector
          else {
            skipped = true;
          } // end if the unit is one that doesn't get a dimension vector
        } // end if the unit is from the UCUM list

        // submit a LOINC unit's unit code for parsing
        else {
          whoCalled = `parseString called on LOINC unit ${curUnit.csCode_} ` +
              `for string = ${curUnit.csUnitString_}`;
          parseResp = uString.parseString(curUnit.csCode_);
          whoReturned = `parseString returned ${parseResp[0].csCode_} ` +
              `for string = ${parseResp[0].csUnitString_}`;
          parsedUnit = parseResp[0];
        } // end if this is a LOINC unit
        if (!skipped) {
          if (parsedUnit === null) {
            problems.push('Null return for attempt to parse string = ' +
                curUnit.csUnitString_ + ` for ${curUnit.csCode_}`);
            if (parseResp[2])
              problems = problems.concat(parseResp[2]);
            problems.push('');
          }
          else {
            if (!curUnit.dim_ && parsedUnit.dim_) {
              problems.push(`dim_ null for json unit ${curUnit.csCode_} with ` +
                  `csUnitString = ${curUnit.csUnitString_} but is ` +
                  `${JSON.stringify(parsedUnit.dim_.dimVec_)} for ` +
                  `parsed unit ${parsedUnit.csCode_}`);
              if (parseResp[2])
                problems = problems.concat(parseResp[2]);
              problems.push('');
            }
            else if (curUnit.dim_ && !parsedUnit.dim_) {
              problems.push(`dim_ null for parsed unit ${parsedUnit.csCode_} but is ` +
                  `${JSON.stringify(curUnit.dim_.dimVec_)} for json unit ` +
                  `${curUnit.csCode_} with csUnitString ${curUnit.csUnitString_}`);
              if (parseResp[2])
                problems = problems.concat(parseResp[2]);
              problems.push('');
            }
            else if (curUnit.dim_ && parsedUnit.dim_) {
              if (!curUnit.dim_.equals(parsedUnit.dim_)) {
                problems.push(whoCalled);
                problems.push(whoReturned);
                problems.push(`dimension mismatch; ${curUnit.source_} curUnit ` +
                    `${curUnit.csCode_} with csUnitString = ` +
                    `${curUnit.csUnitString_} has dim = ` +
                    `${JSON.stringify(curUnit.dim_.dimVec_)}`);
                problems.push(`                    ${parsedUnit.source_} ` +
                    `parsedUnit ${parsedUnit.csCode_} with csString = ` +
                    `${parsedUnit.csUnitString_} has dim = ` +
                    `${JSON.stringify(parsedUnit.dim_.dimVec_)}`);
                if (parseResp[2])
                  problems = problems.concat(parseResp[2]);
                problems.push('');
              } // end if we do/don't have a match
            } // else if both units have a dimension attribute
          } // end if we got a parsed unit back
        } // end if curUnit was not skipped
      } // end if this is not a base unit
    } // end do for each unit
    return problems;
  } // end checkDimensions


  /**
   * This method checks a single unit string, basically just passing the
   * string on UnitString.parseString.
   *
   * -- this should process a file, and hopefully will in the near future.
   */
  checkOneDimension(uString) {
    let uStr = UnitString.getInstance();
    let generatedUnit = uStr.parseString(uString);
    return generatedUnit ;
  }

} // end UcumTestUtils


