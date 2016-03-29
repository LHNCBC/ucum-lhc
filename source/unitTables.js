/**
 * This class manages Hashtables that provide references to
 * defined units.
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */

var UC = require('./config.js');

export class UnitTables {


  /**
   * Constructor.  This creates the empty unit tables (hashes) once. After the
   * tables are created, it redefines this constructor to throw an error
   * stating that the constructor is no longer available and that the
   * getInstance function must be used.   Here's a description of the first
   * and then all subsequent calls to this constructor.
   *
   * First call to constructor:
   * 1. creates  OBJECT1
   * 2. initializes attributes of OBJECT1
   * 3. stores reference to OBJECT1.prototype in holdthis local variable
   * 4. redefines OBJECT1 as a function that throws an error
   * 5. defines the getInstance function (which is also defined outside of
   *    the class definition - see below).
   *
   * All subsequent calls to constructor:
   * 1. throw error message referring to getInstance
   * 2. call getInstance, returns this - which is OBJECT1.
   */
  constructor() {

    /**
     * Tracks units by name
     * @type hash - key is the name;
     *              value is an array of references to the Unit objects
     *              with the name.  More than one unit may have the same
     *              name, e.g., "second", which is shared by the base unit
     *              with the code = "s" and the unit with code = "'".
     */
    this.unitNames_ = {};

    /**
     * Tracks units by code using case-sensitive or case-insensitive -
     * whichever we're currently using.  See Ucum.caseSensitive_ in
     * config.js
     *
     * @type hash - key is the code;
     *              value is the reference to the Unit object.  Codes must
     *              be unique.
     */
    this.unitCodes_ = {};

    /**
     * Keeps track of the order in which units are defined.  The order is
     * important because unit definitions build on previous definitions.
     *
     * @type {Array}
     */
    this.codeOrder_ = [] ;

    /**
     * Tracks units by Dimension vector
     *
     * @type hash - key is the dimension vector;
     *              value is the reference to the Unit object
     * I don't think we want this.  Leave this here just in case it turns
     * out that we do.
     */
    //this.unitDims_ = {};

    // Make this a singleton - from mrme44 May 18 comment on
    // on GitHub Gist page of SanderLi/Singleton.js.  Modified
    // for this class.

    let holdThis = UnitTables.prototype;
    UnitTables = function(){throw "UnitTables is a Singleton.  " +
                                  'Use UnitTables.getInstance() instead.'};
    if (exports)
      exports.UnitTables = UnitTables ;
    UnitTables.prototype = holdThis;
    let self = this;
    UnitTables.getInstance = function(){return self};
  }


  /**
   * Provides the number of unit objects written to the tables, using the
   * codes table since codes must be unique.
   *
   * @returns count of the number of unit objects in the unitCodes_ table.
   */
  unitsCount() {
    return Object.keys(this.unitCodes_).length ;
  }


  /**
   * Adds a Unit object to the tables.
   *
   * @param theUnit the unit to be added
   * @returns nothing
   * @throws passes on an error if one is thrown by the called functions
   */
  addUnit(theUnit) {
    let uName = theUnit['name_'] ;
    if (uName) {
      this.addUnitName(theUnit);
    }

    let uCode = null ;
    if (UC.Ucum.caseSensitive_ == true)
      uCode = theUnit['csCode_'] ;
    else
      uCode = theUnit['ciCode_'] ;
    if (uCode) {
      this.addUnitCode(theUnit);
    }
  } // end addUnit


  /**
   * Adds a Unit object to the unitNames_ table.  More than one unit
   * can have the same name, e.g., the two units with the name "second",
   * where the code for one of them is 's' and the code for the other is
   * "'".  Because of this, an array of unit objects is stored for the
   * name.  In most cases it will be an array of one object, but this
   * clarifies that there may be more than one.
   *
   * @param theUnit the unit to be added
   * @returns nothing
   * @throws an error if the unit has no name
   */
  addUnitName(theUnit) {

    let uName = theUnit['name_'];

    if (uName) {
      if (this.unitNames_[uName])
        this.unitNames_[uName].push(theUnit);
      else
        this.unitNames_[uName] = [theUnit];
    }
    else
      throw('UnitTables.addUnitName called for a unit with no name.  ' +
            `Unit code = ${theUnit['csCode_']}.`);

  } // end addUnitName


  /**
   * Adds a Unit object to the unitCodes_ table and to the codeOrder_ table.
   *
   * @param theUnit the unit to be added
   * @returns nothing
   * @throws an error if the table already contains a unit with the code,
   *         or if the unit has no code of the type currently in use (case
   *         sensitive or insensitive)
   */
  addUnitCode(theUnit) {

    let uCode = null;
    if (UC.Ucum.caseSensitive_ == true)
      uCode = theUnit['csCode_'];
    else
      uCode = theUnit['ciCode_'];

    if (uCode) {
      if (this.unitCodes_[uCode])
        throw(`UnitTables.addUnitCode called, already contains entry for ` +
              `unit with code = ${uCode}`);
      else {
        this.unitCodes_[uCode] = theUnit;
        this.codeOrder_.push(uCode);
      }
    }
    else
      throw('UnitAtomsTable.addUnitCode called for unit that has no code.') ;

  } // end addUnitCode


  /**
   *  Returns a array of unit objects based on the unit's name.  Usually this
   *  will be an array of one, but there may be more, since unit names are
   *  not necessarily unique.
   *
   *  @param name the name of the unit to be returned.  If more than one
   *  unit has the same name, append the csCode of the unit you want to
   *  the end of the name, enclosed in parentheses, e.g., inch ([in_i]) vs.
   *  inch ([in_us]).
   *  @returns null if no unit was found for the specified name OR an array of
   *  unit objects with the specified name.  Normally this will be an array
   *  of one object.
   */
  getUnitByName(uName) {

    let retUnit = null ;
    if (uName) {
      let unitsArray = this.unitNames_[uName] ;
      if (unitsArray !== undefined && unitsArray !== null) {
        retUnit = unitsArray;
      }
      // Else we didn't find an entry with the specified name.  That should be
      // because the name has a code in parentheses after it.  Separate the
      // name and the code and try again.
      else {
        let parenPos = uName.indexOf('(');
        if (parenPos < 1) {
          console.log('error on finding unit by name with name = ' +
                      uName + ' and no parentheses (or paren at the start');
        }
        else {
          let dupName = uName.substring(0, parenPos - 1);
          let nameCode = uName.substring(parenPos + 1, uName.length - 1);
          unitsArray = this.unitNames_[dupName] ;
          if (unitsArray.length < 2)
            console.log('error on finding unit by name with name = ' + uName);
          else {
            let u = 0;
            let aLen = unitsArray.length;
            for (; unitsArray[u].csCode_ !== nameCode && u < aLen; u++);
            if (u < aLen)
              retUnit = unitsArray;
            else
              console.log('error on finding unit by name with dupName = ' +
                  dupName + '; nameCode = ' + nameCode);
          }
        } // end if we found parentheses in the name
      } // end if we didn't find anything with the original name passed in
    } // end if a name was passed in
    return retUnit ;
  }


  /**
   *  Returns a unit object based on the unit's code
   *
   *  @param name the name of the unit to be returned
   *  @returns the unit object or null if it is not found
   */
  getUnitByCode(uCode) {
    let retUnit = null ;
    if (uCode) {
      retUnit = this.unitCodes_[uCode] ;
    }
    return retUnit ;
  }


  /**
   * Gets a list of all unit names in the Unit tables
   *
   * @returns an array of the unit names
   */
  getAllUnitNames() {
    return Object.keys(this.unitNames_);
  } // end getAllUnitNames


  /**
   * Gets a list of all unit names in the tables.  Where more than one
   * unit has the same name, the unit code, in parentheses, is appended
   * to the end of the name.
   *
   * @returns {Array}
   */
  getUnitNamesList() {
    let nameList = [];
    let keys = this.getAllUnitNames();
    keys.sort() ;
    let uLen = keys.length;
    for (let i = 0, n = 0; i < uLen; i++, n++) {
      let curKeyAry = this.unitNames_[keys[i]];
      if (curKeyAry.length === 1)
        nameList[n] = keys[i];
      else {
        let kLen = curKeyAry.length ;
        for (let k = 0; k < kLen; k++) {
          nameList[n++] = keys[i] + ' (' +
              curKeyAry[k].csCode_ + ')';
        }
        n -= 1;
      } // end for names with multiple codes
    } // end do for each name
    return nameList ;
  }


  /**
   * Gets a list of all unit codes in the Unit tables
   *
   * @returns an array of the unit names
   */
  getAllUnitCodes() {
    return Object.keys(this.unitCodes_);
  } // end getAllUnitNames


  /**
   * This is used to get all unit objects.  Currently it is used
   * to get the objects to write to the json ucum definitions file
   * that is used to provide prefix and unit definition objects for
   * conversions and validations.
   *
   * @returns an array containing all unit objects, ordered by definition
   * order
   */
  allUnitsByDef() {
    let unitsList = [];
    let uLen = this.codeOrder_.length ;
    for (let u = 0; u < uLen; u++) {
      unitsList.push(this.getUnitByCode(this.codeOrder_[u]));
    }
    return unitsList ;
  } // end allUnitsByDef


  /**
   * This prints a list of all units in the tables.  It uses the byCode
   * table, and uses the codeOrder_ array to determine the order in which
   * the units are listed.
   *
   * @returns {string} buffer containing all the listings
   */
  printUnits() {
    let codeList = '';
    let uLen = this.codeOrder_.length ;
    for (let u = 0; u < uLen; u++) {
      let curUnit = this.getUnitByCode(this.codeOrder_[u]);
      let unitString = this.codeOrder_[u] + '; ' +
                       curUnit.getProperty('name') +
                       '; ' + curUnit.getProperty('magnitude_') ;
      let curDim = curUnit.getProperty('dim_');
      if (curDim) {
        unitString += '; ' + curDim.dimVec_ ;
      }
      else {
        unitString += '; null';
      }

      if (curUnit.csBaseUnit_)
        unitString += '; ' + curUnit.csBaseUnit_ + '; ' +
                      curUnit.baseFactor_;
      if (curUnit.cnv_)
        unitString += '; ' + curUnit.cnv_ + '; ' + curUnit.cnvPfx_ ;
      if (curUnit.defError_)
        unitString += '; problem parsing this one, deferred to later.' ;
      codeList += unitString + '\n' ;
    }
    return codeList ;
  }

} // end UnitTables


/**
 *  This function exists ONLY until the original UnitTables constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton UnitTables object.  See more detail in the constructor
 *  description.
 *
 *  @returns the singleton UnitTables object.
 */
UnitTables.getInstance = function(){
  return new UnitTables();
} ;

// Perform the first request for the tables object, to get the
// getInstance method set.
UnitTables.getInstance();