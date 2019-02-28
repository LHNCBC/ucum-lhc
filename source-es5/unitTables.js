'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class manages Hashtables that provide references to
 * defined units.
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */

var Ucum = require('./config.js').Ucum;
var UcumJsonDefs = require('./ucumJsonDefs.js').UcumJsonDefs;
var fs = require('fs');

var UnitTables = exports.UnitTables = function () {

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
  function UnitTables() {
    _classCallCheck(this, UnitTables);

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
     * Keeps track of the order in which units are defined.  The order is
     * important because unit definitions build on previous definitions.
     *
     * @type {Array}
     */
    this.codeOrder_ = [];

    /**
     * Tracks units by unit strings, e.g., cm-1
     *
     * @type hash - key is the unit string
     *              value is an array of unit objects with that ciUnitString.
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

    /**
     * Maps synonyms to units.   Not built until first requested.
     *
     * @type hash - key is the synonym
     *              value is an array of references to Unit objects that
     *              include that synonym.
     */
    this.unitSynonyms_ = {};

    // Make this a singleton - from mrme44 May 18 comment on
    // on GitHub Gist page of SanderLi/Singleton.js.  Modified
    // for this class.

    var holdThis = UnitTables.prototype;
    UnitTables = function UnitTables() {
      throw new Error("UnitTables is a Singleton.  " + 'Use UnitTables.getInstance() instead.');
    };
    if (exports) exports.UnitTables = UnitTables;
    UnitTables.prototype = holdThis;
    var self = this;
    UnitTables.getInstance = function () {
      return self;
    };
  }

  /**
   * Provides the number of unit objects written to the tables, using the
   * codes table since codes must be unique.
   *
   * @returns count of the number of unit objects in the unitCodes_ table.
   */


  _createClass(UnitTables, [{
    key: 'unitsCount',
    value: function unitsCount() {
      return Object.keys(this.unitCodes_).length;
    }

    /**
     * Adds a Unit object to the tables.
     *
     * @param theUnit the unit to be added
     * @returns nothing
     * @throws passes on an error if one is thrown by the called functions for
     *  a problem with the unit code or unit name
     */

  }, {
    key: 'addUnit',
    value: function addUnit(theUnit) {

      var uName = theUnit['name_'];
      if (uName) {
        this.addUnitName(theUnit);
      }

      this.addUnitCode(theUnit);
      this.addUnitString(theUnit);

      try {
        if (theUnit['dim_'].getProperty('dimVec_')) this.addUnitDimension(theUnit);
      } catch (err) {
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

  }, {
    key: 'addUnitName',
    value: function addUnitName(theUnit) {

      var uName = theUnit['name_'];

      if (uName) {
        if (this.unitNames_[uName]) this.unitNames_[uName].push(theUnit);else this.unitNames_[uName] = [theUnit];
      } else throw new Error('UnitTables.addUnitName called for a unit with no name.  ' + ('Unit code = ' + theUnit['csCode_'] + '.'));
    } // end addUnitName


    /**
     * Adds a Unit object to the unitCodes_, unitUcCodes_, unitLcCodes_ and
     * codeOrder_ tables.
     *
     * @param theUnit the unit to be added
     * @returns nothing
     * @throws an error if theunitCodes_ table already contains a unit with the code
     */

  }, {
    key: 'addUnitCode',
    value: function addUnitCode(theUnit) {

      var uCode = theUnit['csCode_'];
      if (uCode) {

        if (this.unitCodes_[uCode]) throw new Error('UnitTables.addUnitCode called, already contains entry for ' + ('unit with code = ' + uCode));else {
          this.unitCodes_[uCode] = theUnit;
          this.codeOrder_.push(uCode);
        }
      } else throw new Error('UnitTables.addUnitCode called for unit that has ' + 'no code.');
    } // end addUnitCode


    /**
     * Adds a unit object to the unitStrings_ table.  More than one unit
     * can have the same string, so an array of unit objects is stored
     * for the string.  The unit string is the string that creates a non-base
     * unit, e.g., a Newton has a unit code of N, a name of Newton, and a
     * unitString of kg.m/s2.
     *
     * If the unit has no string, nothing is stored and no error is reported.
     *
     * @param theUnit the unit to be added
     * @returns nothing
     */

  }, {
    key: 'addUnitString',
    value: function addUnitString(theUnit) {

      var uString = null;
      if (Ucum.caseSensitive_ == true) uString = theUnit['csUnitString_'];else uString = theUnit['ciUnitString_'];

      if (uString) {
        var uEntry = { mag: theUnit['baseFactorStr_'], unit: theUnit };
        if (this.unitStrings_[uString]) this.unitStrings_[uString].push(uEntry);else this.unitStrings_[uString] = [uEntry];
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

  }, {
    key: 'addUnitDimension',
    value: function addUnitDimension(theUnit) {

      var uDim = theUnit['dim_'].getProperty('dimVec_');

      if (uDim) {
        if (this.unitDimensions_[uDim]) this.unitDimensions_[uDim].push(theUnit);else this.unitDimensions_[uDim] = [theUnit];
      } else throw new Error('UnitTables.addUnitDimension called for a unit with no dimension.  ' + ('Unit code = ' + theUnit['csCode_'] + '.'));
    } // end addUnitDimension


    /**
     * Builds the unitSynonyms_ table. This is called the first time the
     * getUnitsBySynonym method is called.  The table/hash contains each word
     * (once) from each synonym as well as each word from each unit name.
     *
     * Hash keys are the words.  Hash values are an array of unit codes for
     * each unit that has that word in its synonyms or name.
     *
     * @returns nothing
     */

  }, {
    key: 'buildUnitSynonyms',
    value: function buildUnitSynonyms() {

      for (var code in this.unitCodes_) {
        var theUnit = this.unitCodes_[code];
        var uSyns = theUnit.synonyms_;

        // If the current unit has synonyms, process each synonym (often multiples)
        if (uSyns) {
          var synsAry = uSyns.split(';');
          if (synsAry[0] !== '') {
            var aLen = synsAry.length;
            for (var a = 0; a < aLen; a++) {
              var theSyn = synsAry[a].trim();

              // call addSynonymCodes to process each word in the
              // synonym, e.g., "British fluid ounces"
              this.addSynonymCodes(code, theSyn);
            } // end do for each synonym
          } // end if the current unit has a non-null synonym attribute
        } // end if the unit has any synonyms

        // Now call addSynonymCodes to process each word in the unit's name
        this.addSynonymCodes(code, theUnit.name_);
      } // end do for each unit
    } // end buildUnitSynonyms


    /**
     * Adds unit code entries to the synonyms table for a string containing
     * one or more words to be considered as synonyms.
     *
     * @param theCode the unit code to be connected to the synonyms
     * @param theSynonyms a string containing one or more words to be
     *  considered synonyms (and thus to be added to the unitSynonyms hash).
     */

  }, {
    key: 'addSynonymCodes',
    value: function addSynonymCodes(theCode, theSynonyms) {

      var words = theSynonyms.split(' ');
      var wLen = words.length;

      for (var w = 0; w < wLen; w++) {
        var word = words[w];

        // if there is already a synonyms entry for the word,
        // get the array of unit codes currently assigned to
        // the word and add the code for the current word to
        // the synonyms array if it's not already there.
        if (this.unitSynonyms_[word]) {
          var synCodes = this.unitSynonyms_[word];
          if (synCodes.indexOf(theCode) === -1) {
            this.unitSynonyms_[word].push(theCode);
          }
        }
        // else there are no synonyms entry for the word.  Create a
        // synonyms array for the word, setting it to contain the unit code.
        else {
            this.unitSynonyms_[word] = [theCode];
          }
      } // end do for each word in the synonyms being processed
    } // end addSynonymCodes


    /**
     *  Returns a unit object with a case-sensitive code matching the
     *  uCode parameter, or null if no unit is found with that code.
     *
     *  @param uCode the code of the unit to be returned
     *  @returns the unit object or null if it is not found
     */

  }, {
    key: 'getUnitByCode',
    value: function getUnitByCode(uCode) {
      var retUnit = null;
      if (uCode) {
        retUnit = this.unitCodes_[uCode];
      }
      return retUnit;
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
     */

  }, {
    key: 'getUnitByName',
    value: function getUnitByName(uName) {

      if (uName === null || uName === undefined) {
        throw new Error('Unable to find unit by name because no name was provided.');
      }
      var sepPos = uName.indexOf(Ucum.codeSep_);
      var uCode = null;
      if (sepPos >= 1) {
        uCode = uName.substr(sepPos + Ucum.codeSep_.length);
        uName = uName.substr(0, sepPos);
      }
      var retUnits = this.unitNames_[uName];
      if (retUnits) {
        var uLen = retUnits.length;

        if (uCode && uLen > 1) {
          var i = 0;
          for (; retUnits[i].csCode_ !== uCode && i < uLen; i++) {}
          if (i < uLen) retUnits = [retUnits[i]];else {
            retUnits = null;
          }
        } // end if we need to find both a name and a code
      } // end if we got an array of units
      return retUnits;
    } // end getUnitByName


    /**
     *  Returns an array of unit objects with the specified unit string.
     *  The array may contain one or more unit reference objects.
     *  Or none, if no units have a matching unit string (which is not
     *  considered an error)
     *
     *  @param name the name of the unit to be returned
     *  @returns the array of unit references or null if none were found
     */

  }, {
    key: 'getUnitByString',
    value: function getUnitByString(uString) {
      var retAry = null;
      if (uString) {
        retAry = this.unitStrings_[uString];
        if (retAry === undefined) retAry = null;
      }
      return retAry;
    }

    /**
     *  Returns a array of unit objects based on the unit's dimension vector.
     *
     *  @param uName the dimension vector of the units to be returned.
     *
     *  @returns null if no unit was found for the specified vector OR an array of
     *  one or more unit objects with the specified vector.
     *  @throws an error if no vector is provided to search on
     *  logs an error to the console if no unit is found
     */

  }, {
    key: 'getUnitsByDimension',
    value: function getUnitsByDimension(uDim) {

      var unitsArray = null;
      if (uDim === null || uDim === undefined) {
        throw new Error('Unable to find unit by because no dimension ' + 'vector was provided.');
      }

      unitsArray = this.unitDimensions_[uDim];
      if (unitsArray === undefined || unitsArray === null) {
        console.log('Unable to find unit with dimension = ' + uDim);
      }

      return unitsArray;
    } // end getUnitsByDimension


    /**
     *  Returns a array of unit objects that include the specified synonym.
     *
     *  @param uSyn the synonym of the units to be returned.
     *
     *  @returns an object with two of the following three elements:
     *   'status' will be error, failed or succeeded
     *   'msg' will be included for returns with status = error or failed and
     *     will explain why the request did not return any units
     *   'units' any array of unit objects with the specified synonym will be
     *     returned for requests with status = succeeded
     */

  }, {
    key: 'getUnitBySynonym',
    value: function getUnitBySynonym(uSyn) {

      var retObj = {};
      var unitsArray = [];

      try {
        if (uSyn === null || uSyn === undefined) {
          retObj['status'] = 'error';
          throw new Error('Unable to find unit by synonym because no synonym ' + 'was provided.');
        }
        // If this is the first request for a unit by synonym, build the hash map
        if (Object.keys(this.unitSynonyms_).length === 0) {
          this.buildUnitSynonyms();
        }
        var foundCodes = [];
        foundCodes = this.unitSynonyms_[uSyn];
        if (foundCodes) {
          retObj['status'] = 'succeeded';
          var fLen = foundCodes.length;
          for (var f = 0; f < fLen; f++) {
            unitsArray.push(this.unitCodes_[foundCodes[f]]);
          }
          retObj['units'] = unitsArray;
        }
        if (unitsArray.length === 0) {
          retObj['status'] = 'failed';
          retObj['msg'] = 'Unable to find any units with synonym = ' + uSyn;
        }
      } catch (err) {
        retObj['msg'] = err.message;
      }
      return retObj;
    } // end getUnitBySynonym


    /**
     * Gets a list of all unit names in the Unit tables
     *
     * @returns an array of the unit names
     */

  }, {
    key: 'getAllUnitNames',
    value: function getAllUnitNames() {
      return Object.keys(this.unitNames_);
    } // end getAllUnitNames


    /**
     * Gets a list of all unit names in the tables.  Where more than one
     * unit has the same name, the unit code, in parentheses, is appended
     * to the end of the name.
     *
     * @returns {Array}
     */

  }, {
    key: 'getUnitNamesList',
    value: function getUnitNamesList() {
      var nameList = [];
      var codes = Object.keys(this.unitCodes_);
      codes.sort(this.compareCodes);
      var uLen = codes.length;
      for (var i = 0; i < uLen; i++) {
        nameList[i] = codes[i] + Ucum.codeSep_ + this.unitCodes_[codes[i]].name_;
      } // end do for each code
      return nameList;
    }

    /**
     * This provides a sort function for unit codes so that sorting ignores
     * square brackets and case.
     *
     * @param a first value
     * @param b second value
     * @returns -1 if a is should fall before b; otherwise 1.
     */

  }, {
    key: 'compareCodes',
    value: function compareCodes(a, b) {
      a = a.replace(/[\[\]]/g, '');
      a = a.toLowerCase();
      b = b.replace(/[\[\]]/g, '');
      b = b.toLowerCase();
      return a < b ? -1 : 1;
    }

    /**
     * Gets a list of all unit codes in the Unit tables
     *
     * @returns an array of the unit names
     */

  }, {
    key: 'getAllUnitCodes',
    value: function getAllUnitCodes() {
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

  }, {
    key: 'allUnitsByDef',
    value: function allUnitsByDef() {

      var unitsList = [];
      var uLen = this.codeOrder_.length;
      for (var u = 0; u < uLen; u++) {
        unitsList.push(this.getUnitByCode(this.codeOrder_[u]));
      }
      return unitsList;
    } // end allUnitsByDef


    /**
     * This is used to get all unit objects, ordered by unit name.  Currently it
     * is used to create a csv list of all units.
     * @param sep separator character (or string) to be used to separate each
     *  column in the output.  Optional, defaults to '|' if not specified.
     *  (Used to use ; but the synonyms use that extensively).  Don't use a
     *  comma or any other punctuation found in the output data.
     * @returns a buffer containing all unit objects, ordered by name
     * order
     */

  }, {
    key: 'allUnitsByName',
    value: function allUnitsByName(cols, sep) {
      if (sep === undefined || sep === null) sep = '|';
      var unitBuff = '';
      var unitsList = this.getAllUnitNames();
      var uLen = unitsList.length;
      var cLen = cols.length;
      for (var i = 0; i < uLen; i++) {
        var nameRecs = this.getUnitByName(unitsList[i]);
        for (var u = 0; u < nameRecs.length; u++) {
          var rec = nameRecs[u];
          for (var c = 0; c < cLen; c++) {
            if (c > 0) unitBuff += sep;
            if (cols[c] === 'dim_') {
              if (rec.dim_ !== null && rec.dim_ !== undefined && rec.dim_.dimVec_ instanceof Array) unitBuff += '[' + rec.dim_.dimVec_.join(',') + ']';else unitBuff += '';
            } else {
              var cbuf = rec[cols[c]];
              if (typeof cbuf === 'string') unitBuff += cbuf.replace(/[\n\r]/g, ' ');else unitBuff += cbuf;
            }
          } // end do for each column requested
          unitBuff += '\r\n';
        } // end do for each unit in the unit names array
      }
      return unitBuff;
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

  }, {
    key: 'printUnits',
    value: function printUnits(doLong, sep) {
      if (doLong === undefined) doLong = false;
      if (sep === undefined) sep = '|';
      var codeList = '';
      var uLen = this.codeOrder_.length;
      var unitString = 'csCode' + sep;
      if (doLong) {
        unitString += 'ciCode' + sep;
      }
      unitString += 'name' + sep;
      if (doLong) unitString += 'isBase' + sep;
      unitString += 'magnitude' + sep + 'dimension' + sep + 'from unit(s)' + sep + 'value' + sep + 'function' + sep;
      if (doLong) unitString += 'property' + sep + 'printSymbol' + sep + 'synonyms' + sep + 'source' + sep + 'class' + sep + 'isMetric' + sep + 'variable' + sep + 'isSpecial' + sep + 'isAbitrary' + sep;
      unitString += 'comment';
      codeList = unitString + '\n';

      for (var u = 0; u < uLen; u++) {
        var curUnit = this.getUnitByCode(this.codeOrder_[u]);
        unitString = this.codeOrder_[u] + sep;
        if (doLong) {
          unitString += curUnit.getProperty('ciCode_') + sep;
        }
        unitString += curUnit.getProperty('name_') + sep;
        if (doLong) {
          if (curUnit.getProperty('isBase_')) unitString += 'true' + sep;else unitString += 'false' + sep;
        }
        unitString += curUnit.getProperty('magnitude_') + sep;
        var curDim = curUnit.getProperty('dim_');
        if (curDim) {
          unitString += curDim.dimVec_ + sep;
        } else {
          unitString += 'null' + sep;
        }
        if (curUnit.csUnitString_) unitString += curUnit.csUnitString_ + sep + curUnit.baseFactor_ + sep;else unitString += 'null' + sep + 'null' + sep;

        if (curUnit.cnv_) unitString += curUnit.cnv_ + sep;else unitString += 'null' + sep;

        if (doLong) {
          unitString += curUnit.getProperty('property_') + sep + curUnit.getProperty('printSymbol_') + sep + curUnit.getProperty('synonyms_') + sep + curUnit.getProperty('source_') + sep + curUnit.getProperty('class_') + sep + curUnit.getProperty('isMetric_') + sep + curUnit.getProperty('variable_') + sep + curUnit.getProperty('isSpecial_') + sep + curUnit.getProperty('isArbitrary_') + sep;
        }
        if (curUnit.defError_) unitString += 'problem parsing this one, deferred to later.';
        codeList += unitString + '\n';
      }
      return codeList;
    }

    /**
     * This creates a list of the synonyms in the unitSynonyms hash.  It writes
     * it in synonym order and in csv format, and includes the synonym, the number
     * of units for the synonym, and the list of unit codes for the synonym.
     * It uses | as a separator rather than a comma, to keep from interfering
     * with the JSON output for the unit code arrays kept for each synonym.
     *
     * @returns outputs to a file named "SynonymsList.txt'
     */

  }, {
    key: 'printSynonyms',
    value: function printSynonyms() {
      var sList = 'synonym|unit count|unit codes\n';
      var sKeys = Object.keys(this.unitSynonyms_).sort();
      var sLen = sKeys.length;
      for (var s = 0; s < sLen; s++) {
        var sKey = sKeys[s];
        var kLen = this.unitSynonyms_[sKey].length;
        var codes = JSON.stringify(this.unitSynonyms_[sKey]);
        codes = codes.substring(1, codes.length - 2);
        sList += sKey + '|' + kLen + '|' + codes + '\n';
      }
      fs.writeFileSync('SynonymsList.txt', sList, { encoding: 'utf8', mode: 438, flag: 'w' });
    } // printSynonyms

  }]);

  return UnitTables;
}(); // end UnitTables


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


UnitTables.getInstance = function () {
  return new UnitTables();
};

// Perform the first request for the tables object, to get the
// getInstance method set.
UnitTables.getInstance();
//# sourceMappingURL=unitTables.js.map