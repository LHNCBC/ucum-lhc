/**
 * This class manages Hashtables that provide references to
 * defined units.
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */

var UC = require('/home/lmericle/ucum/dist/es5/config.js');

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
     *              value is the reference to the Unit object
     */
    this.unitNames_ = {};

    /**
     * Tracks units by code using case-sensitive or case-insensitive -
     * whichever we're currently using.  See Ucum.caseSensitive_ in
     * config.js
     *
     * @type hash - key is the code;
     *              value is the reference to the Unit object
     */
    this.unitCodes_ = {};

    this.codeOrder_ = [] ;

    /**
     * Tracks units by Dimension vector
     *
     * @type hash - key is the dimension vector;
     *              value is the reference to the Unit object
     * I don't think we want this.
     */
    //this.unitDims_ = {};

    // Make this a singleton - from mrme44 May 18 comment on
    // on GitHub Gist page of SanderLi/Singleton.js.  Modified
    // for this class.

    let holdThis = UnitTables.prototype;
    UnitTables = function(){throw "UnitTables is a Singleton.  " +
                                  'Use UnitTables.getInstance() instead.'};
    UnitTables.prototype = holdThis;
    UnitTables.getInstance = function(){return this};
  }


  /**
   * Clears all the atom tables.  Not sure if we really want this so
   * if there's no crying need for it, let's dump it.
   *
   * @param theUnit the unit to be added
   * @returns nothing
   * @throws an error if any of the tables already contain the unit
   *         based on the key value
   */
  resetDoWeWantThis() {
    /* for now, do nothing
    this.unitNames_ = {} ;
    this.unitCodes_ = {} ;
    this.unitDims_ = {} ;
    */
  }

  entries() {
    return Object.keys(this.unitCodes_).length ;
  }

  /**
   * Adds a Unit object to the three tables (or however many for
   * which the unit has key values)
   *
   * @param theUnit the unit to be added
   * @returns nothing
   * @throws an error if any of the tables already contain the unit
   *         based on the key value
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
   * Adds a Unit object to the unitNames_ table.
   *
   * @param theUnit the unit to be added
   * @returns nothing
   * @throws an error if table already contains a unit with the name,
   *         or if the unit has no name
   */
  addUnitName(theUnit) {

    let uName = theUnit['name_'];

    if (uName) {
      if (this.unitNames_[uName]) {
        console.log(`UnitAtomsTable.addUnitName called, already contains an ` +
            `entry for unit with name = ${uName}; appending (2) to ` +
            `name`);
        uName = uName + ' (2)';
      }
      this.unitNames_[uName] = theUnit;
    }
    else
      throw('UnitAtomsTable.addUnitName called for a unit with no name.');

  } // end addUnitName


  /**
   * Adds a Unit object to the unitCodes_ table.
   *
   * @param theUnit the unit to be added
   * @returns nothing
   * @throws an error if the table already contains a unit with the code,
   *         or if the unit has no code of the type currently in use
   */
  addUnitCode(theUnit) {

    let uCode = null;
    if (UC.Ucum.caseSensitive_ == true)
      uCode = theUnit['csCode_'];
    else
      uCode = theUnit['ciCode_'];

    if (uCode) {
      if (this.unitCodes_[uCode])
        throw(`UnitAtomsTable.addUnitCode called, already contains entry for ` +
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
   *  Returns a unit object based on the unit's name
   *
   *  @param name the name of the unit to be returned
   *  @returns the unit object or null if it is not found
   */
  getUnitByName(uName) {
    let retUnit = null ;
    if (uName) {
      retUnit = this.unitNames_[uName] ;
    }
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
   *  Returns a unit object based on the unit's dimension
   *
   *  @param name the name of the unit to be returned
   *  @returns the unit object or null if it is not found
   */
  /*
  getUnitByDim(uDim) {
    let retUnit = null ;
    if (uDim) {
      retUnit = this.unitDims_[uDim] ;
    }
    return retUnit ;
  }
  */

  /**
   * Gets a list of all unit names in the Unit tables
   *
   * @returns an array of the unit names
   */
  getAllUnitNames() {
    return Object.keys(this.unitNames_);
  } // end getAllUnitNames

  /**
   * Gets a list of all unit codes in the Unit tables
   *
   * @returns an array of the unit names
   */
  getAllUnitCodes() {
    return Object.keys(this.unitCodes_);
  } // end getAllUnitNames

  printUnits() {
    let codeList = '';
    let uLen = this.codeOrder_.length ;
    for (let u = 0; u < uLen; u++) {
      let curUnit = this.getUnitByCode(this.codeOrder_[u]);
      let unitString = this.codeOrder_[u] + '; ' +
                       curUnit.getProperty('name') +
                       '; ' + curUnit.getProperty('magnitude_') +
                       '; ' + curUnit.getProperty('dim_');
      if (curUnit.csBaseUnit_)
        unitString += '; ' + curUnit.csBaseUnit_ + '; ' +
                      curUnit.baseFactor_;
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
}