/**
 * This validates unit strings found in a column in a csv (comma separated values)
 * file and returns the validation result in specified columns added to the
 * file.  This uses the node-csv package (https://github.com/wdavidw/node-csv)
 * to handle the input and output processing.
 *
 */
var fs = require('browserify-fs');
var sanitizeHtml = require('sanitize-html');

var stream = require('stream');
var parse = require('csv-parse') ;
var transform = require('stream-transform');
var stringify = require('csv-stringify');
var str = require('string-to-stream') ;

var UcumLhcUtils = require("./ucumLhcUtils.js").UcumLhcUtils;
var Ucum = require('./config.js').Ucum;

export class UcumFileValidator {

  constructor() {
    // Make this a singleton.  See UnitTables constructor for details.

    let holdThis = UcumFileValidator.prototype;
    UcumFileValidator = function () {
      throw (new Error('UcumFileValidator is a Singleton.  ' +
          'Use UcumFileValidator.getInstance() instead.'));
    };
    if (exports)
      exports.UcumFileValidator = UcumFileValidator;
    UcumFileValidator.prototype = holdThis;

    let self = this ;
    UcumFileValidator.getInstance = function(){return self} ;
  }

  /**
   * This method reads the rows of the input csv file, checks the validity
   * of the unit string in the identified column, and outputs the result of
   * the test as well as any notes.  New columns are added to the rows, at
   * the end of each row, to contain confirmation of the unit string tested,
   * the result of the test, and any notes from the test.
   *
   * @param inputFile this is the input file obtained from the HTML file type
   *  input field
   * @param sourceCol this is the name of the column containing the unit
   *  string to be tested.
   * @param fileSaveFunction the function to be called that will save the
   *  file.  It will be passed one parameter, which will be the Ojbect URL
   *  for the data to be written.
   * @param msgHandler the function to be called on errors.  This function
   *  should handle error reporting.  It should take 2 parameters - source,
   *  which receives the name of the stream throwing the error, and err,
   *  which should be the error text.   See UcumDemo.fileValidationError for
   *  an example.
   *
   * @returns nothing
   */
  validateFile(inputFile, sourceCol, fileSaveFunction, msgHandler) {

    var unitTestedCol = 'Unit String Tested';
    var resultCol = 'Validation Result';
    var commentCol = 'Notes';

    // The file reader reads the input file into the str readable stream
    var reader = new FileReader();
    reader.readAsText(inputFile);

    var utils = UcumLhcUtils.getInstance();

    // The parser pulls each row out of the readable stream and passes it
    // along the pipeline to the transformer as a hash
    var parser = parse({columns: true});

    // The transformer receives each row from the parser.  It calls the code
    // to validate the string found in the specified source
    // column and places the results in the specified result columns.  The
    // updated hash is passed along the pipeline to the stringifier.
    var transformer = transform(function (record) {

      if (!record[sourceCol]) {
        transformer.emit('error', 'The ' + sourceCol + ' column was not ' +
                  'found in the file.  Validation is not possible.');
      }
      else {
        let uStr = record[sourceCol];
        let parseResp = [];
        record[unitTestedCol] = uStr;

        try {
          let parseResp = utils.validUnitString(uStr);
          if (parseResp['status'] === 'valid')
            record[resultCol] = parseResp['ucumCode'] + " is a valid UCUM unit.";
          else
            record[resultCol] = uStr + " is not a valid UCUM unit.";
          if (parseResp['msg'] && parseResp['msg'].length > 0)
            record[commentCol] = parseResp['msg'].join('; ');
          else
            record[commentCol] = '';
        }
        catch (err) {
          record[resultCol] = 'ERROR';
          record[commentCol] = err.message;
        }
      }
      return record;
    }); // end transform function

    // The stringifier gets the updated hash from the transformer and
    // puts it into csv format, then passes it along the pipeline to the
    // output stream.
    var stringifier = stringify({header: true});

    // The output stream gets the csv formatted row and writes it to the
    // stream's data buffer.
    var outStream = new stream.Writable({objectMode: true});
    outStream.data = '*' + Ucum.bracesMsg_ + '\r\n';
    outStream._write = function (record, encoding, done) {
      this.data += record;
      done();
    };

    // When all the data has been written to the output stream, create a Blob
    // object from the data string and an Object URL for the Blob.  Then pass
    // the URL to the function that will actually save the blob to a file.
    var blob = '';
    var bUrl = null;
    outStream.on('finish', function () {
      blob = new Blob([this.data], {type: 'text/csv'});
      bUrl = URL.createObjectURL(blob);
      fileSaveFunction(bUrl);
    });

    // Start the data moving once the file reader is ready (has read in all
    // the data).
    var intSet = setInterval(pipeFunc, 10);
    function pipeFunc() {
      if (reader.readyState == FileReader.DONE) {
        clearInterval(intSet);
        str(reader.result)
            .on('error', function (err){msgHandler('inputStream', err)})
            .pipe(parser).on('error', function (err){msgHandler('parser', err)})
            .pipe(transformer).on('error', function (err){msgHandler('transformer', err)})
            .pipe(stringifier).on('error', function (err){msgHandler('stringifier', err)})
            .pipe(outStream).on('error', function (err){msgHandler('outStream', err)});
      }
    }; // end pipeFunc
  } // end validateFile

} // end UcumFileValidator


/**
 *  This function exists ONLY until the original UcumFileValidator constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton UcumFileValidator object.  This is based on the UnitTables singleton
 *  implementation; see more detail in the UnitTables constructor description.
 *
 *  @return the singleton UcumFileValidator object.
 */
UcumFileValidator.getInstance = function(){
  return new UcumFileValidator();
}

// Perform the first request for the validator object, to get the
// getInstance method set.
UcumFileValidator.getInstance();