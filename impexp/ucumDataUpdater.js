/**
 * This updates the ucum json data with data from a csv file.
 * This uses the node-csv package (https://github.com/wdavidw/node-csv)
 * to handle the input processing.
 *
 */
var fs = require('fs');
var stream = require('stream');
var parse = require('csv-parse') ;
var transform = require('stream-transform');
var stringify = require('csv-stringify');
var str = require('string-to-stream') ;

var JDefs = require('../source-es5/ucumJsonDefs.js').UcumJsonDefs;
var Unit = require('../source-es5/unit.js').Unit;
var UnitTables = require('../source-es5/unitTables.js').UnitTables;
var UnitString = require('../source-es5/unitString.js').UnitString;
var UcumXmlDocument = require('../source-es5/ucumXmlDocument.js').UcumXmlDocument;

// Load the data from the JSON file
//var jdefs = JDefs.getInstance();
//jdefs.loadJsonDefs();

var UcumLhcUtils = require("../source-es5/ucumLhcUtils.js").UcumLhcUtils;
var Ucum = require('../source-es5/config.js').Ucum;

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
   * @param inputFile this is the input file name, including file path
    * @returns nothing
   */
  readFile(inputFileName) {

    var utils = UcumLhcUtils.getInstance();

    // The file reader reads the input file into the str readable stream
    var inFile = fs.createReadStream(inputFileName);

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
      if (existUnit) {
        console.log('existing unit found for key = ' +
                    record[Ucum.inputKey_]);
        upd.updateUnit(existUnit, record);
      }
      else {
        console.log('calling addNewUnit for key = ' +
                    record[Ucum.inputKey_]);
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
      let xdoc = UcumXmlDocument.getInstance();
      xdoc.writeJsonFile();
      let upd=UcumDataUpdater.getInstance();
      upd.msg('File write', 'write succeeded.', false);
    });
    //// Start the data moving once the file reader is ready (has read in all
    //// the data).
    //var intSet = setInterval(pipeFunc, 10);
    //function pipeFunc() {
    //  if (reader.readyState == FileReader.DONE) {
    //    clearInterval(intSet);
    //    str(reader.result)
    //        .on('error', function (err){msgHandler('inputStream', err)})
    //        .pipe(parser).on('error', function (err){msgHandler('parser', err)})
    //        .pipe(transformer).on('error', function (err){msgHandler('transformer', err)})
    //  }
    //}; // end pipeFunc
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
      if (colName != Ucum.inputKey_) {
        console.log('updating column = ' + Ucum.csvCols_[colName] + ' for ' +
            existingUnit['csCode_']);
        existingUnit[Ucum.csvCols_[colName]] = inputRec[colName];
        console.log('column ' + Ucum.csvCols_[colName] + ' in existing unit now = ' +
                    existingUnit[Ucum.csvCols_[colName]]);
      }
    }
  }

  /**
   * This adds a unit with the data from the input file.
   *
   * @param inputRec the row from the input file for the unit
   */
  addNewUnit(inputRec) {

    //let key = inputRec[Ucum.inputKey_] ;

    var us = UnitString.getInstance();
    var parseResp = us.parseString(inputRec[Ucum.inputKey_]);

    var newUnit = parseResp[0];
    if (newUnit) {
      // If this is an expression that is entirely an annotation, create
      // a new unit from that
      if (newUnit === 1) {
        newUnit = new Unit({});
      }
      var utab = UnitTables.getInstance();
      for (var colName in Ucum.csvCols_) {
        newUnit[Ucum.csvCols_[colName]] = inputRec[colName];
      }
      //console.log('new unit = ' + JSON.stringify(newUnit));
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