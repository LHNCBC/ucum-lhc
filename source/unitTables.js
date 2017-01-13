/**
 * This class manages Hashtables that provide references to
 * defined units.
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */

var Ucum = require('./config.js').Ucum;
var UcumJsonDefs = require('./ucumJsonDefs.js').UcumJsonDefs;

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
     * Tracks units by code using case-sensitive version.
     *
     * @type hash - key is the code;
     *              value is the reference to the Unit object.  Codes must
     *              be unique.
     */
    this.unitCodes_ = {};

    /**
     * Tracks units by code using an uppercase version, e.g., MG instead of
     * mg.  Searched if the code is not found in the unitCodes_ table.
     *
     * @type hash - key is the uppercase version of code;
     *              value is the reference to the Unit object.  Codes must
     *              be unique.
     */
    this.unitUcCodes_ = {};

    /**
     * Tracks units by code using an lowercase version, e.g., [ph] instead of
     * [pH].  Searched if the code is not found in the unitCodes_ table.
     *
     * @type hash - key is the lowercase version of code;
     *              value is the reference to the Unit object.  Codes must
     *              be unique.
     */
    this.unitLcCodes_ = {};

    /**
     * Keeps track of the order in which units are defined.  The order is
     * important because unit definitions build on previous definitions.
     *
     * @type {Array}
     */
    this.codeOrder_ = [] ;

    /**
     * Tracks units by unit strings, e.g., cm-1
     *
     * @type hash - key is the unit string
     *              value is an array of magnitude/unit reference objects
     *              with that unit string.
     */
    this.unitStrings_ = {};

    /**
     * Tracks units by Dimension vector
     *
     * @type hash - key is the dimension vector (not the object, just the
     *              vector);
     *              value is an array of references to the Unit objects
     *              with that vector.  More than one unit may have the same
     *              unit vector, and this can be used to provide a list
     *              of commensurable units.
     */
    this.unitDimensions_ = {};

    // Make this a singleton - from mrme44 May 18 comment on
    // on GitHub Gist page of SanderLi/Singleton.js.  Modified
    // for this class.

    let holdThis = UnitTables.prototype;
    UnitTables = function(){throw (new Error("UnitTables is a Singleton.  " +
                                  'Use UnitTables.getInstance() instead.'))};
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
   * @throws passes on an error if one is thrown by the called functions for
   *  a problem with the unit code or unit name
   */
  addUnit(theUnit) {

    let uName = theUnit['name_'] ;
    if (uName) {
      this.addUnitName(theUnit);
    }

    this.addUnitCode(theUnit);
    this.addUnitString(theUnit);

    try {
      if (theUnit['dim_'].getProperty('dimVec_'))
        this.addUnitDimension(theUnit);
    }
    catch(err){
      // do nothing - throws error if the property is null
      // and that's OK here.
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
      throw(new Error('UnitTables.addUnitName called for a unit with no name.  ' +
            `Unit code = ${theUnit['csCode_']}.`));

  } // end addUnitName


  /**
   * Adds a Unit object to the unitCodes_, unitUcCodes_, unitLcCodes_ and
   * codeOrder_ tables.
   *
   * @param theUnit the unit to be added
   * @returns nothing
   * @throws an error if theunitCodes_ table already contains a unit with the code
   */
  addUnitCode(theUnit) {

    let uCode = theUnit['csCode_'];
    if (uCode) {

      let upCode = uCode.toUpperCase();
      let downCode = uCode.toLowerCase();

      if (this.unitCodes_[uCode])
        throw(new Error(`UnitTables.addUnitCode called, already contains entry for ` +
              `unit with code = ${uCode}`));
      else {
        this.unitCodes_[uCode] = theUnit;
        this.unitUcCodes_[upCode] = theUnit;
        this.unitLcCodes_[downCode] = theUnit;
        this.codeOrder_.push(uCode);
      }
    }
    else
      throw(new Error('UnitAtomsTable.addUnitCode called for unit that has ' +
                      'no code.')) ;

  } // end addUnitCode


  /**
   * Adds a magnitude:unit object to the unitStrings_ table.  More than one unit
   * can have the same string, so an array of magnitude:unit objects is stored
   * for the string.
   *
   * If the unit has no string, nothing is stored and no error is reported.
   *
   * @param theUnit the unit to be added
   * @returns nothing
   */
  addUnitString(theUnit) {

    let uString = null;
    if (Ucum.caseSensitive_ == true)
      uString = theUnit['csUnitString_'];
    else
      uString = theUnit['ciUnitString_'];

    if (uString) {
      let uEntry = {mag: theUnit['baseFactorStr_'], unit: theUnit};
      if (this.unitStrings_[uString])
        this.unitStrings_[uString].push(uEntry);
      else
        this.unitStrings_[uString] = [uEntry];
    }
  } // end addUnitString


  /**
   * Adds a Unit object to the unitDimensions_ table.  More than one unit
   * can have the same dimension (commensurable units have the same dimension).
   * Because of this, an array of unit objects is stored for the
   * dimension.
   *
   * @param theUnit the unit to be added
   * @returns nothing
   * @throws an error if the unit has no dimension
   */
  addUnitDimension(theUnit) {

    let uDim = theUnit['dim_'].getProperty('dimVec_');

    if (uDim) {
      if (this.unitDimensions_[uDim])
        this.unitDimensions_[uDim].push(theUnit);
      else
        this.unitDimensions_[uDim] = [theUnit];
    }
    else
      throw(new Error('UnitTables.addUnitDimension called for a unit with no dimension.  ' +
          `Unit code = ${theUnit['csCode_']}.`));

  } // end addUnitDimension


  /**
   *  Returns a unit object based on the unit's code.  Tries first on
   *  the code as passed in and then, if the unit is not found, on a
   *  lower case version of the code and then an upper case version.
   *
   *  @param uCode the code of the unit to be returned
   *  @returns the unit object or null if it is not found
   */
  getUnitByCode(uCode) {
    let retUnit = null ;
    if (uCode) {
      retUnit = this.unitCodes_[uCode] ;
      if (retUnit === undefined) {
        retUnit = this.unitLcCodes_[uCode.toLowerCase()];
        if (retUnit === undefined) {
          retUnit = this.unitUcCodes_[uCode.toUpperCase()];
          if (retUnit === undefined)
            retUnit = null;
        }
      }
    }
    return retUnit ;
  }


  /**
   *  Returns a array of unit objects based on the unit's name.  Usually this
   *  will be an array of one, but there may be more, since unit names are
   *  not necessarily unique.
   *
   *  @param uName the name of the unit to be returned.  If more than one
   *  unit has the same name and you only want one specific unit, append the
   *  csCode of the unit you want to the end of the name, separated by the
   *  Ucum.codeSep_ value, e.g., inch - [in_i] vs. inch - [in_us].
   *  @returns null if no unit was found for the specified name OR an array of
   *  unit objects with the specified name.  Normally this will be an array
   *  of one object.
   *  @throws an error if no name is provided to search on
   *  logs an error to the console if no unit is found
   */
  getUnitByName(uName) {

    if (uName === null || uName === undefined) {
      throw (new Error('Unable to find unit by because when no name was provided.'));
    }
    let sepPos = uName.indexOf(Ucum.codeSep_);
    let uCode = null;
    if (sepPos >= 1) {
      uCode = uName.substr(sepPos + Ucum.codeSep_.length);
      uName = uName.substr(0, sepPos);
    }
    let retUnits = this.unitNames_[uName] ;
    if (retUnits === undefined || retUnits === null) {
      console.log(`Unable to find unit with name = ${uName}`);
    }
    else {
      let uLen = retUnits.length ;

      if (uCode && uLen > 1) {
        let i = 0;
        for (; retUnits[i].csCode_ !== uCode && i < uLen; i++);
        if (i < uLen)
          retUnits = [retUnits[i]];
        else {
          console.log(`Unable to find unit with name = ${uName} amd ` +
              `unit code = ${uCode}`);
          retUnits = null;
        }
      } // end if we need to find both a name and a code
    } // end if we got an array of units
    return retUnits ;

  } // end getUnitByName


  /**
   *  Returns an array of unit objects with the specified unit string.
   *  The array may contain one or more magnitude:unit reference objects.
   *  Or none, if no units have a matching unit string (which is not
   *  considered an error)
   *
   *  @param name the name of the unit to be returned
   *  @returns the array of magnitude:unit references or null if none were found
   */
  getUnitByString(uString) {
    let retAry = null ;
    if (uString) {
      retAry = this.unitStrings_[uString] ;
      if (retAry === undefined)
        retAry = null;
    }
    return retAry ;
  }


  /**
   *  Returns a array of unit objects based on the unit's dimension vector.
   *
   *  @param uName the deimension vector of the units to be returned.
   *
   *  @returns null if no unit was found for the specified vector OR an array of
   *  unit objects with the specified vector.
   *  @throws an error if no vector is provided to search on
   *  logs an error to the console if no unit is found
   */
  getUnitsByDimension(uDim) {

    let unitsArray = null ;
    if (uDim === null || uDim === undefined) {
      throw (new Error('Unable to find unit by because when no dimension ' +
                       'vector was provided.'));
    }

    unitsArray = this.unitDimensions_[uDim] ;
    if (unitsArray === undefined || unitsArray === null) {
      console.log(`Unable to find unit with dimension = ${uDim}`);
    }

    return unitsArray ;

  } // end getUnitsByDimension


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
    let codes = Object.keys(this.unitCodes_);
    codes.sort(this.compareCodes) ;
    let uLen = codes.length;
    for (let i = 0; i < uLen; i++) {
      nameList[i] = codes[i] + Ucum.codeSep_ + this.unitCodes_[codes[i]].name_
    } // end do for each code
    return nameList ;
  }


  /**
   * This provides a sort function for unit codes so that sorting ignores
   * square brackets and case.
   *
   * @param a first value
   * @param b second value
   * @returns -1 if a is should fall before b; otherwise 1.
   */
  compareCodes(a, b) {
    a = a.replace(/[\[\]]/g, '');
    a = a.toLowerCase();
    b = b.replace(/[\[\]]/g, '');
    b = b.toLowerCase();
    return (a < b) ? -1 : 1 ;
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
   * This is used to get all unit objects, ordered by unit name.  Currently it
   * is used to create a csv list of all units.
   *
   * @returns a buffer containing all unit objects, ordered by name
   * order
   */
  allUnitsByName() {
    let unitBuff = '';
    let unitsList = this.getAllUnitNames();
    let uLen = unitsList.length;
    for (let i = 0; i < uLen; i++) {
      let nameRecs = this.getUnitByName(unitsList[i]);
      for (let u = 0; u < nameRecs.length; u++) {
        let rec = nameRecs[u];
        unitBuff += rec.csCode_ + ',' + rec.name_ + ',' + rec.property_ +
            ',' + rec.csUnitString_ + ',' + rec.magnitude_ ;
        if (rec.dim_ !== null && rec.dim_.dimVec_ instanceof Array)
          unitBuff += ',[' + rec.dim_.dimVec_.join('') + ']\r\n';
        else
          unitBuff += '\r\n';
      }
    }
    return unitBuff ;
  } // end allUnitsByName


  /**
   * This creates a list of all units in the tables.  It uses the byCode
   * table, and uses the codeOrder_ array to determine the order in which
   * the units are listed.
   *
   * @param doLong boolean indicating how much to output.  If true, all data
   *  from the unit objects is included.   If false, only a few major values
   *  are included.
   * @param sep separator character (or string) to be used to separate each
   *  column in the output.  Optional, defaults to '|' if not specified.
   *  (Used to use ; but the synonyms use that extensively).
   * @returns {string} buffer containing all the listings
   */
  printUnits(doLong, sep) {
    if (doLong === undefined)
      doLong = false ;
    if (sep === undefined)
      sep = '|';
    let codeList = '';
    let uLen = this.codeOrder_.length ;
    let unitString = 'csCode' + sep  ;
    if (doLong) {
      unitString += 'ciCode' + sep ;
    }
    unitString += 'name' + sep ;
    if (doLong)
      unitString += 'isBase' + sep ;
    unitString += 'magnitude' + sep + 'dimension' + sep + 'from unit(s)' + sep +
                  'value' + sep + 'function' + sep ;
    if (doLong)
      unitString += 'property' + sep + 'printSymbol' + sep + 'synonyms' + sep +
                    'source' + sep + 'class' + sep + 'isMetric' + sep +
                    'variable' + sep + 'isSpecial' + sep + 'isAbitrary' + sep
    unitString += 'comment';
    codeList = unitString + '\n' ;

    for (let u = 0; u < uLen; u++) {
      let curUnit = this.getUnitByCode(this.codeOrder_[u]);
      unitString = this.codeOrder_[u] + sep ;
      if (doLong) {
        unitString += curUnit.getProperty('ciCode_') + sep ;
      }
      unitString += curUnit.getProperty('name_') + sep ;
      if (doLong) {
        if (curUnit.getProperty('isBase_'))
          unitString += 'true' + sep ;
        else
          unitString += 'false' + sep ;
      }
      unitString += curUnit.getProperty('magnitude_')  + sep;
      let curDim = curUnit.getProperty('dim_');
      if (curDim) {
        unitString += curDim.dimVec_ + sep ;
      }
      else {
        unitString += 'null' + sep;
      }
      if (curUnit.csUnitString_)
        unitString += curUnit.csUnitString_ + sep + curUnit.baseFactor_ + sep ;
      else
        unitString += 'null' + sep + 'null' + sep;

      if (curUnit.cnv_)
        unitString += curUnit.cnv_ + sep ;
      else
        unitString += 'null' + sep ;

      if (doLong) {
        unitString += curUnit.getProperty('property_') + sep +
                      curUnit.getProperty('printSymbol_') + sep +
                      curUnit.getProperty('synonyms_') + sep +
                      curUnit.getProperty('source_') + sep +
                      curUnit.getProperty('class_') + sep +
                      curUnit.getProperty('isMetric_') + sep +
                      curUnit.getProperty('variable_') + sep +
                      curUnit.getProperty('isSpecial_') + sep +
                      curUnit.getProperty('isArbitrary_') + sep ;
      }
      if (curUnit.defError_)
        unitString += 'problem parsing this one, deferred to later.' ;
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