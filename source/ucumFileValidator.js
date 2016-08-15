/**
 * This validates unit strings found in a column in a csv (comma separated values)
 * file and returns the validation result in specified columns added to the
 * file.  This uses the node-csv package (https://github.com/wdavidw/node-csv)
 * to handle the input and output processing.
 *
 */

var fs = require('browserify-fs');
var stream = require('stream');
var parse = require('csv-parse') ;
var transform = require('stream-transform');
var stringify = require('csv-stringify');
var process = require('process');
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

  // This method reads the rows of the input csv file, checks the validity
  // of the unit string in the identified column, and outputs the result of
  // the test as well as any notes.  New columns are added to the rows, at
  // the end of each row, to contain confirmation of the unit string tested,
  // the result of the test, and any notes from the test.
  //
  // @param inputFile this is the input file obtained from the HTML file type
  //  input field
  // @param sourceCol this is the name of the column containing the unit
  //  string to be tested.
  // @param fileSaveFunction the function to be called that will save the
  //  file.  It will be passed one parameter, which will be the Ojbect URL
  //  for the data to be written.
  //
  // @returns nothing
  //
  validateFile(inputFile, sourceCol, fileSaveFunction) {

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
        this.emit('error', new Error('The ' + sourceCol + ' column was not ' +
                  'found in the file.  Validation is not possible.'));
      }
      else {
        let uStr = record[sourceCol];
        let parseResp = [];
        record[unitTestedCol] = uStr;

        try {
          let parseResp = utils.validUnitString(uStr);
          if (parseResp[0])
            record[resultCol] = "Valid UCUM unit.";
          else
            record[resultCol] = "Not valid UCUM unit.";
          if (parseResp[1].length > 0)
            record[commentCol] = parseResp[1].join(' - ');
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

    // Send errors from any of the streams to the validationError function
    // For some reason, the string-to-stream package doesn't pass through an
    // on error event.  If an error does occur on a read I'm assuming it will
    // cascade down the pipeline until something blows up.  Then we'll just
    // have to use a debugger.
    //str.on('error', function(err){validationError(err, 'str')});
    parser.on('error', function(err){validationError(err, 'parser')});
    transformer.on('error', function(err){validationError(err, 'transformer')});
    stringifier.on('error', function(err){validationError(err, 'stringifier')});
    outStream.on('error', function (err){validationError(err, 'outStream')});

    // Start the data moving - but only after a little timeout.  Timing problems
    // were making this impossible to run.  Then I saw on the github/substack
    // stream handbook (https://github.com/substack/stream-handbook) a comment
    // about being needed because of operating system delays.  So I tried it
    // and voila!  Everything worked.  Note that the delay might be able to
    // be less, but because this will be running on the client's system, I
    // wasn't sure how much would be needed for a slower system.
    setTimeout(function () {
      str(reader.result).pipe(parser).pipe(transformer).pipe(stringifier).pipe(outStream);
    }, 200);
  } // end validateFile


  // This handles errors.  It puts up a general "So sorry" alert box, and
  // writes the error text to the console.  We should probably tell the
  // user what to do in this case, but I haven't figured out yet what that
  // would be.
  //
  // @param err the error object
  // @param source the source of the error (e.g., parser, transformer, etc.)
  //
  validationError(err, source) {
    console.log(source + ' error; err = ' + err);
    let aMsg = "So sorry!  Something has gone wrong with the validation " +
               "process.  Your validation file was not written.";
    alert(aMsg);

  } // end validationError

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