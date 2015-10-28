/**
 * This class manages Hashtables that provide references to
 * defined units.
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */

import * as Ucum from "config.js" ;
class UnitTables {


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

    /**
     * Tracks units by Dimension vector
     *
     * @type hash - key is the dimension vector;
     *              value is the reference to the Unit object
     */
    this.unitDims_ = {};

    // Make this a singleton - from mrme44 May 18 comment on
    // on GitHub Gist page of SanderLi/Singleton.js.  Modified
    // for this class.  CHECK TO SEE IF THIS WORKS WITHOUT EVAL.

    eval("let holdThis = UnitTables.prototype; " +
         "UnitTables = function(){throw 'UnitTables is a Singleton.  " +
         "Use UnitTables.getInstance() instead.'}" +
         "UnitTables.prototype = holdThis;" +
         "UnitTables.getInstance = function(){return this}");
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
    this.unitNames_ = {} ;
    this.unitCodes_ = {} ;
    this.unitDims_ = {} ;
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
    let uName = theUnit.getProperty(name) ;
    if (uName) {
      this.addUnitName(theUnit, uName);
    }

    let uCode = null ;
    if (Ucum.caseSensitive_ == true)
      uCode = theUnit.getProperty(csCode) ;
    else
      uCode = theUnit.getProperty(ciCode) ;
    if (uCode) {
      this.addUnitCode(theUnit, uCode);
    }

    let uDim = theUnit.getProperty(dim) ;
    if (uDim) {
      this.addUnitDim(theUnit, uDim);
    }
  } // end addUnit


  /**
   * Adds a Unit object to the unitNames_ table.
   *
   * @param theUnit the unit to be added
   * @param uName the name of the unit; optional, will be acquired from
   *        the unit object if not supplied
   * @returns nothing
   * @throws an error if table already contains a unit with the name,
   *         or if the unit has no name
   */
  addUnitName(theUnit, uName) {

    if (uName === undefined)
      uName = theUnit.getProperty(name);

    if (uName) {
      if (this.unitNames_[uName])
        throw(`UnitAtomsTable.addUnitName called, already contains entry for ` +
        `unit with name = ${uName}`);
      else
        this.unitNames_[uName] = theUnit;
    }
    else
      throw('UnitAtomsTable.addUnitName called for a unit with no name.');

  } // end addUnitName


  /**
   * Adds a Unit object to the unitCodes_ table.
   *
   * @param theUnit the unit to be added
   * @param uCode the for the unit; optional, will be acquired from
   *        the unit object if not supplied using either the case-sensitive
   *        or the case-insensitive code, based on Ucum.caseSensitive_.
   * @returns nothing
   * @throws an error if the table already contains a unit with the code,
   *         or if the unit has no code of the type currently in use
   */
  addUnitCode(theUnit, uCode) {

    if (uCode === undefined || uCode === null) {
      if (Ucum.caseSensitive_ == true)
        uCode = theUnit.getProperty(csCode);
      else
        uCode = theUnit.getProperty(ciCode);
    }
    if (uCode) {
      if (this.unitCodes_[uCode])
        throw(`UnitAtomsTable.addUnitCode called, already contains entry for ` +
        `unit with code = ${uCode}`);
      else
        this.unitCodes_[uCode] = theUnit;
    }
    else
      throw('UnitAtomsTable.addUnitCode called for unit that has no code.') ;

  } // end addUnitCode


  /**
   * Adds a Unit object to the unitDims_ table
   *
   * @param theUnit the unit to be added
   * @param uDim the dimension of the unit; optional, will be acquired from
   *        the unit object if not supplied
   * @returns nothing
   * @throws an error if the table already contains a unit with the dimension,
   *         or if the unit has no dimension
   */
  addUnitDim(theUnit, uDim) {

    if (uDim === undefined)
      uDim = theUnit.getProperty(dim);

    if (uDim) {
      if (this.unitDims_[uDim])
        throw(`UnitAtomsTable.addUnitDim called, already contains entry for ` +
              `unit with dim = ${uDim}`);
      else
        this.unitNames_[uName] = theUnit;
    }
    else
      throw('UnitAtomsTable.addUnitDim called for unit that does not have ` +
            `a dimension value.`) ;

  } // end addUnitDim


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
  getUnitByDim(uDim) {
    let retUnit = null ;
    if (uDim) {
      retUnit = this.unitDims_[uDim] ;
    }
    return retUnit ;
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
UnitTables.getInstance(){
  return new UnitTables();
}