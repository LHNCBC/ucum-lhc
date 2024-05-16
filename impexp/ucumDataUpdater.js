/**
 * This updates the ucum json data with data from a csv file.
 * This uses the node-csv package (https://github.com/wdavidw/node-csv)
 * to handle the input processing.
 *
 * THIS ASSUMES that the columns named in the csvCols_ hash in config.js
 * exist in the csv file and that the data in those columns is the data
 * that should be written to the json file written by this code.
 *
 * This ALSO ASSUMES that the current ucum data file, as named and managed
 * by the ucumJsonDefs class, exists in the location specified by that class.
 *
 * Use babel to translate this to ECMA 5 code, i.e.,
 * babel ucumDataUpdater.js --out-file ucumDataUpdater5.js
 *
 * Then use updateData5.js to get the name of the input file and to run this
 * importer, i.e., node updateData5.js inputFileName
 *
 */
var fs = require('fs');
var stream = require('stream');
var parse = require('csv-parse') ;
var transform = require('stream-transform');
var stringify = require('csv-stringify');
var str = require('string-to-stream') ;

var JDefs = require('../source/ucumJsonDefs.js').UcumJsonDefs;
var Unit = require('../source/unit.js').Unit;
var Dimension = require('../source/dimension.js').Dimension;
var UnitTables = require('../source/unitTables.js').UnitTables;
var UnitString = require('../source/unitString.js').UnitString;
var UcumXmlDocument = require('../source/ucumXmlDocument.js').UcumXmlDocument;

var UcumLhcUtils = require("../source/ucumLhcUtils.js").UcumLhcUtils;
var Ucum = require('../source/config.js').Ucum;

export class UcumDataUpdater {

  constructor() {
    // Make this a singleton.  See UnitTables constructor for details.
    let holdThis = UcumDataUpdater.prototype;
    UcumDataUpdater = function () {
      throw (new Error('UcumDataUpdater is a Singleton.  ' +
          'Use UcumDataUpdater.getInstance() instead.'));
    };
    if (exports)
      exports.UcumDataUpdater = UcumDataUpdater;
    UcumDataUpdater.prototype = holdThis;

    let self = this ;
    UcumDataUpdater.getInstance = function(){return self} ;
  }

  /**
   * This method reads the rows of the input csv file, checks the validity
   * of the unit string in the identified column, and outputs the result of
   * the test as well as any notes.  New columns are added to the rows, at
   * the end of each row, to contain confirmation of the unit string tested,
   * the result of the test, and any notes from the test.
   *
   * @param inputFileName this is the input file name, including file path
   * @returns nothing
   */
  readFile(inputFileName) {

    var utils = UcumLhcUtils.getInstance();

    // The file reader reads the input file into the str readable stream
    var inFile = fs.createReadStream(inputFileName, {encoding: 'utf8'});

    // The parser pulls each row out of the readable stream and passes it
    // along the pipeline to the transformer as a hash
    var parser = parse({columns: true});

    // The transformer receives each row from the parser.  It calls the code
    // to validate the string found in the specified source
    // column and places the results in the specified result columns.  The
    // updated hash is passed along the pipeline to the stringifier.
    var transformer = transform(function (record) {

      // if already exists - based on unit code
      var utab = UnitTables.getInstance();
      var existUnit = utab.getUnitByCode(record[Ucum.inputKey_]);
      let upd = UcumDataUpdater.getInstance();
      // replace any carriage returns, tabs, or multiple spaces in the
      // synonyms with a single space (per instance).  Otherwise output
      // or the synonyms can get messed up.
      record['synonyms'] = record['synonyms'].replace(/\s+/g, " ")
      if (existUnit) {
        if (existUnit[Ucum.csvCols_[Ucum.inputKey_]] === record[Ucum.inputKey_])
         upd.updateUnit(existUnit, record);
        else
          console.log('Unit update error.  Trying to update existing record ' +
                      `${existUnit[Ucum.csvCols_[Ucum.inputKey_]]} with new ` +
                      `record ${record[Ucum.inputKey_]}`);
      }
      else {
        upd.addNewUnit(record);
      }

      //return record;
    }); // end transform function

    inFile.on('error', function(err){
                let upd=UcumDataUpdater.getInstance();
                upd.msg('inputStream', err)})
           .pipe(parser, {end: false}).on('error', function (err){
                let upd=UcumDataUpdater.getInstance();
                upd.msg('parser', err)})
           .pipe(transformer).on('error', function(err){
                let upd = UcumDataUpdater.getInstance();
                upd.msg('transformer', err)});

    inFile.on('end', function(){
      parser.end(); // in case last line of file does not end in newline
      let xdoc = UcumXmlDocument.getInstance();
      xdoc.writeJsonFile();
      let upd=UcumDataUpdater.getInstance();
      upd.msg('File write', 'write succeeded.', false);
    });
  } // end readFile


  /**
   * This updates an existing unit with the data from the input file.
   * Specifically, this updates the columns named in the csvCols_ hash
   * that is defined in the config.js file.
   *
   * @param existingUnit the existing unit object with the csCode that
   *  matches the case-sensitive code found in the input file
   * @param inputRec the row from the input file for the unit
   */
  updateUnit(existingUnit, inputRec) {
    for (var colName in Ucum.csvCols_) {
      if (colName != Ucum.inputKey_ && colName !== 'source') {
        existingUnit[Ucum.csvCols_[colName]] = inputRec[colName];
      }
    }
  }

  /**
   * This adds a unit with the data from the input file.
   *
   * @param inputRec the row from the input file for the unit
   */
  addNewUnit(inputRec) {

    var us = UnitString.getInstance();
    var parseResp = us.parseString(inputRec[Ucum.inputKey_], 'convert', false);

    var newUnit = parseResp[0];
    if (newUnit) {
      // If this is an expression that is entirely an annotation, create
      // a new unit from that.
      if (newUnit === 1) {
        newUnit = new Unit({"magnitude_" : 1});
      }
    }
    else if (parseResp[2].indexOf('Unable to find unit for') === 0) {
      newUnit = new Unit({});
    }
    if (newUnit) {
      // Transfer the csv column data to the unit created by parseString
      // (or for a return of "1")
      for (var colName in Ucum.csvCols_) {
        newUnit[Ucum.csvCols_[colName]] = inputRec[colName];
      }
      // If the ciCode fits the pattern "1/100{cells}", remove the preceding "1".
      if (/^1\/\d+{[a-zA-Z]+}$/.test(newUnit['ciCode_'])) {
        newUnit['ciCode_'] = newUnit['ciCode_'].substring(1);
      }
      var utab = UnitTables.getInstance();
      utab.addUnit(newUnit);
    }
    else {
      this.msg('Unit creation', 'error creating unit for unit string = ' +
                   inputRec[Ucum.inputKey_]);
      this.msg('Unit creation', 'error(s) reported were: ' + parseResp[2].join('\n'));
    }
  } // end addNewUnit


  /**
   * This handles message output.
   *
   * @param src the source of the error, e.g., parser, transformer, etc.
   * @param theMsg the message to be displayed
   * @param error boolean indicating whether or not this is an error; defaults
   *  to true
   */
  msg(src, theMsg, error) {
    if (error === undefined)
      error = true ;
    if (error) {
      console.log(src + ' error; err = ' + theMsg);
      console.log('Sorry - the data has not been updated');
    }
    else
      console.log("Message from " + src + '; ' + theMsg);
  } // end msg
} // end UcumDataUpdater


/**
 *  This function exists ONLY until the original UcumDataUpdater constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton UcumDataUpdater object.  This is based on the UnitTables singleton
 *  implementation; see more detail in the UnitTables constructor description.
 *
 *  @return the singleton UcumDataUpdater object.
 */
UcumDataUpdater.getInstance = function(){
  return new UcumDataUpdater();
}

// Perform the first request for the updater object, to get the
// getInstance method set.
UcumDataUpdater.getInstance();
