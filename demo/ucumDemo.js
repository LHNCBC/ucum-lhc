

/**
 * This is the code entry point for the demo web page.  It coordinates the
 * loading of the prefix and unit objects from the json definitions file and
 * populating the autocompleter unit lists.
 */

var fs = require('browserify-fs');
var Ucum = ucumPkg.Ucum;
var UcumLhcUtils = ucumPkg.UcumLhcUtils;
var UnitTables = ucumPkg.UnitTables;
var UcumFileValidator = ucumPkg.UcumFileValidator;

export class UcumDemo {

  constructor () {

    // run the constructors for the utils and unitTables classes to get
    // things initialized and data loaded.
    this.utils_ = UcumLhcUtils.getInstance();
    this.utabs_ = UnitTables.getInstance();

    // Get a full list of unit names and assign it to a prefetch autocompleter
    let unames = this.utabs_.getUnitNamesList();
    let autoList = new Def.Autocompleter.Prefetch('unitsList', unames);

    // Set up an autocompleter for the "to" conversion fields.  It will be
    // populated with commensurable units in based on what the user enters
    // in the "from" field.
    this.toAuto_ = new Def.Autocompleter.Prefetch('convertTo', []);

    // Make this a singleton.  See UnitTables constructor for details.

    let holdThis = UcumDemo.prototype;
    UcumDemo = function () {
      throw (new Error('UcumDemo is a Singleton.  ' +
                       'Use UcumDemo.getInstance() instead.'));
    };
    if (exports)
      exports.UcumDemo = UcumDemo;
    UcumDemo.prototype = holdThis;

    let self = this ;
    UcumDemo.getInstance = function(){return self} ;
  }


  /**
   * This method validates a string that is supposed to be representing a valid
   * unit. It indicates whether or not the string translates to a valid unit.
   *
   * @param elementID the ID of the web page element that contains the
   *  string to be validated
   * @param returnElementID the ID of the web page element to receive the
   *  return validation message
   * @returns nothing directly; return is the validation message
   */
  reportUnitStringValidity(elementID, returnElementID) {

    this.utils_.useHTMLInMessages(true);
    this.utils_.useBraceMsgForEachString(true);
    
    let uStr = document.getElementById(elementID).value;
    let valFld = document.getElementById(returnElementID);
    valFld.innerHTML = '';
    let retMsg = [];
    let valMsg = '';
    if (uStr === "") {
      retMsg.push("Please specify a unit string to be validated.");
    }
    else {
      try {
        let parseResp = this.utils_.validUnitString(uStr);
        if (parseResp[0])
          valMsg = `${uStr} is a valid unit.`;
        else
          valMsg = `${uStr} Is NOT a valid unit.`;
        if (parseResp[1].length > 0)
          retMsg = retMsg.concat(parseResp[1]);
      }
      catch (err) {
        retMsg.push(err.message);
      }
    }
    valFld.innerHTML = valMsg + '<br>' + retMsg.join('<br>');
  } // end reportUnitStringValidity


  /**
   * This method converts one unit to another
   *
   * @param fromField the ID of the field containing the name of the unit to
   *  be converted
   * @param numField the ID of the field containing the number of "from" units
   *  to be converted to "to" units
   * @param toField the ID of the field containing the name of the unit that
   *  the from field is to be converted to
   * @param decDigits the maximum number of decimal digits to be displayed
   *  for the converted unit.  If not specified, the UCUM.decDigits_ value
   *  (defined in config.js) is used.
   */
  convertUnit(fromField, numField, toField, decDigits) {

    this.utils_.useHTMLInMessages(true);
    this.utils_.useBraceMsgForEachString(true);

    if (decDigits === undefined)
      decDigits = Ucum.decDigits_;

    let fromName = document.getElementById(fromField).value ;
    let fromVal = parseFloat(document.getElementById(numField).value);
    let toName = document.getElementById(toField).value;
    let codePos = toName.indexOf(Ucum.codeSep_);
    if (codePos > 0)
      toName = toName.substr(0, codePos);

    let resultMsg = this.utils_.convertUnitTo(fromName, fromVal, toName, decDigits);

    // Put the message - conversion or error - on the page
    let resultString = document.getElementById("resultString");
    resultString.innerHTML = resultMsg.join('<BR>');
  } // end convertUnit


  /**
   * This method retrieves a list of unit commensurable, i.e., that can be
   * converted from and to, a specified unit.  Throws an error if the "from"
   * unit cannot be found or if no commensurable units are found.
   *
   * @param fromField the ID of the field where the "from" unit is specified
   * @param toField the ID of the field to receive the list of commensurable
   *  units
   * @param resultField the ID of the field to receive an error message if one
   *  is thrown
   * @returns nothing but sets the autocompleter list in the "toField" to the
   *   commensurable units if any were found.  If an error from one of the
   *   functions called by this is caught, fills the result field with the error
   */
  getCommensurables(fromField, toField, resultField) {

    this.utils_.useHTMLInMessages(true);
    this.utils_.useBraceMsgForEachString(true);

    let toFld = document.getElementById(toField);
    toFld.innerHTML = '';
    this.toAuto_.setList('');
    let resultString = document.getElementById(resultField);
    resultString.innerHTML = '';

    let fromName = document.getElementById(fromField).value;
    let resultMsg = '';
    let parseResp = [];

    try {
      let parseResp = this.utils_.commensurablesList(fromName);
      let commUnits = parseResp[0];
      let resultMsg = parseResp[1];
      // If we can't find any, don't panic.  The user could still enter one
      // that's not on our list but is commensurable.  So if none are found,
      // just move on.   Nothin' to see here.
      if (commUnits) {
        let cLen = commUnits.length;
        let commNames = [];
        for (let i = 0; i < cLen; i++)
          commNames[i] = commUnits[i].getProperty('csCode_') + Ucum.codeSep_ +
              commUnits[i].getProperty('name_');
        commNames.sort(this.utabs_.compareCodes);
        this.toAuto_.setList(commNames)
      }
    }
    catch (err) {
      resultMsg.push(err.message);
    }
    if (resultMsg.length > 0) {
      resultString.innerHTML = resultMsg.join('<BR>') ;
    }
  } // end getCommensurables


  /**
   *  This toggles the display of a given form element.  It changes the
   *  style display state from "none" to "block" or "block" to "none"
   *  depending on its current state.
   *
   *  It also can change the text on the button specified.  This is optional.
   *
   * @param elementID the ID of the target element
   * @param buttonID the ID of the button whose text is to be changed.  This
   *  is optional, but if specified the following 2 text parameters must be
   *  supplied
   * @param blockText the text that shows on the button when the target element
   *  is currently not displayed (before being toggled).
   * @param noneText the text that shows on the button when the target element
   *  is currently displayed (before being toggled).
   *
   */
  toggleDisplay(elementID, buttonID, blockText, noneText) {

    this.utils_.useHTMLInMessages(true);
    this.utils_.useBraceMsgForEachString(true);

    let theElement = document.getElementById(elementID);
    let theButton = null;
    if (buttonID)
      theButton = document.getElementById(buttonID);
    if (theElement) {
      if (theElement.style.display === "none") {
        theElement.style.display = "block";
        if (theButton)
          theButton.innerText = theButton.innerText.replace(noneText, blockText);
      }
      else {
        theElement.style.display = "none";
        if (theButton)
          theButton.innerText = theButton.innerText.replace(blockText, noneText);
      }
    }
  }


  /**
   *  This method responds to the user's request to validate unit strings in
   *  a file.  When the user clicks on the inputfile button on the demo page,
   *  a file selector box is displayed.  When the user selects a file and clicks
   *  on the "Open" button, this method is called to display the column name
   *  division, which is hidden until the file is selected.
   */
  fileSelected() {
    let colDiv = document.getElementById('colNameDiv') ;
    colDiv.setAttribute('style', 'display:block');
  }


  /**
   *  This method responds to the user's click on the Validate File button.
   *
   *  It calls the file validator validateFile method, passing it the file
   *  selected, the column name specified, the initiateDownload function in
   *  this object to be called when file validation is complete, and the
   *  fileValidationError function in this object to be called on an error.
   *
   *  It also disables the column name input field.
   */
  columnSpecified() {
    let colName = document.getElementById('colName').value;
    this.utils_.useHTMLInMessages(false);
    this.utils_.useBraceMsgForEachString(false);

    let dia = document.getElementById("inputfile");
    let ufv = UcumFileValidator.getInstance();
    ufv.validateFile(dia.files[0], colName, this.initiateDownload,
        this.fileValidationError) ;
  }

  /**
   *  This is called when validation of unit strings in a file is complete.
   *  It controls display (and disposal) of the download dialog box that
   *  lets the user choose where to store the output file and to change
   *  the name of the file to be stored if desired.
   *
   *  It also clears the file name from input file field and blocks display
   *  of the column name division.
   *
   * @param bUrl the object url of the blob that contains the validated file
   *  contents
   */
  initiateDownload(bUrl){

    // create the download element,  give it the default file name to
    // create, and append it to the document.
    let a = document.createElement('a') ;
    a.id = 'downlink';
    a.href = bUrl ;
    a.download = 'UnitStringValidations.csv';
    document.body.appendChild(a);

    // add a listener that gets rid of the download link once the
    // user clicks save or cancel
    function windowFocus(){
      window.removeEventListener('focus', windowFocus, false);
      URL.revokeObjectURL(bUrl);
      let an = document.getElementById('downlink');
      an.parentElement.removeChild(an);
      let dia = document.getElementById("inputfile");
      dia.value = null;
      let colDiv = document.getElementById('colNameDiv');
      colDiv.setAttribute('style', 'display:none');
    }
    window.addEventListener('focus', windowFocus, false);

    // Click on the download link to initiate display of the box and
    // then download (if the user selects SAVE).
    a.click();

  } // end initiate download


  /**
   * This method is called when an error occurs during the validation process,
   * by the code doing the validation.
   *
   * It writes the error, including the name of the stream in which the error
   * occurred, to the console.  It displays the error text to the user in an
   * alert box and lets the user know that the validation file was not written.
   *
   * It also re-enables the input file field and clears the file name from
   * that field.  The display of the column name division is also blocked.
   *
   * @param src the source of the error - which should be the stream in which
   *  the error was encountered
   * @param err the error text
   *
  */
  fileValidationError(src, err) {
    console.log(src + ' error; err = ' + err);
    let aMsg = err + "\n\nSorry - your validation file could not be written.";
    alert(aMsg);
    let dia = document.getElementById("inputfile");
    dia.value = '';
    let colDiv = document.getElementById('colNameDiv');
    colDiv.setAttribute('style', 'display:none');
  }


  /**
   * This method is called when the user clicks on the Cancel button for a
   * file validation request.  This clears out the file name chosen in the
   * input file field and hides the column stuff (request for column name,
   * validate file button, and cancel button).
   *
   * These cleanup steps are also used in the fileValidationError method and
   * the window_focus function defined in the initiateDownload method.  I tried
   * to reference this method from those but for some reason this method
   * could not been seen when called from those.  I'm not sure if it has to
   * do with a different context, where the fileValidationError is called
   * from the ucumFileValidator validateFile event emitter and the
   * window_focus method in the initiateDownload method is also an event, but
   * no matter what I tried it wouldn't work.   Sigh.
   */
  resetFileInput() {
    let dia = document.getElementById("inputfile");
    dia.value = '';
    let colDiv = document.getElementById('colNameDiv');
    colDiv.setAttribute('style', 'display:none');
  }

} // end class UcumDemo


/**
 *  This function exists ONLY until the original UcumDemo constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton UcumDemo object.  This is based on the UnitTables singleton
 *  implementation; see more detail in the UnitTables constructor description.
 *
 *  @return the singleton UcumDemo object.
 */
UcumDemo.getInstance = function(){
  return new UcumDemo();
}

// Perform the first request for the demo object, to get the
// getInstance method set.
UcumDemo.getInstance();
