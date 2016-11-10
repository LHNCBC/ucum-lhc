(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.demoPkg = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* 
 * This defines the UCUM demo-specific global variables and constants.
 * See the config.js file for UCUM global definitions that are not specific
 * to the demo.
 *
 * The javascript for this UCUM implementation uses syntax as
 * defined by the ECMAScript 6 standard
 */

var UcumDemoConfig = exports.UcumDemoConfig = {

  /**
  * Categories that can be used to limit units listed by the autocompleter
  * in the Demo Unit Conversions page.   Separated into two arrays, with
  * the default categories in defCategories_ .
  */
  defCategories_: ['Clinical Use'],
  categories_: ['Non-Clinical Use', 'Obsolete'],

  /**
   * Hash that matches category display names with the corresponding
   * values used in the data
   */
  categoryValues_: { 'Clinical Use': 'Clinical',
    'Non-Clinical Use': 'Miscellaneous',
    'Obsolete': 'Obsolete' },

  /**
   * Fields that the user can select for display in the autocompleter list
   * that displays units in the Demo Unit Conversions page.   Separated into
   * two arrays, with the default categories in defDisplayFlds_ .
   */
  defDisplayFlds_: ['cs_code', 'name'],
  displayFlds_: ['category', 'synonyms', 'loinc_property', 'guidance', 'source'],

  /**
   * Base URL for an autocompleter search query on the clinical tables search
   * service for extended UCUM data
   */
  baseSearchURL_: 'https://lforms-service.nlm.nih.gov/api/ucum/v1/search',

  /**
   * Default column headers for an autocompleter search query when no display
   * fields are specified.  If no display fields are specified, these are the
   * columns that are displayed.  Once the user specifies columns to display,
   * the column headers are built from those column names.
   */
  defCols_: ['cs_code', 'name'],

  /**
   * Basic search opts used for all autocompleter search queries
   */
  baseSearchOpts_: { 'nonMatchSuggestions': false,
    'tableFormat': true,
    'valueCols': [0] }
};


},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * This is the code entry point for the demo web page.  It coordinates the
 * loading of the prefix and unit objects from the json definitions file and
 * populating the autocompleter unit lists.
 */

var UcumDemoConfig = exports.UcumDemoConfig = require("./demoConfig.js").UcumDemoConfig;
var UcumDemo = exports.UcumDemo = require("./ucumDemo.js").UcumDemo;
var demo = UcumDemo.getInstance();


},{"./demoConfig.js":1,"./ucumDemo.js":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This is the code entry point for the demo web page.  It coordinates the
 * loading of the prefix and unit objects from the json definitions file and
 * populating the autocompleter unit lists.
 */

var Ucum = ucumPkg.Ucum;
var UcumDemoConfig = require('./demoConfig').UcumDemoConfig;
var UcumLhcUtils = ucumPkg.UcumLhcUtils;
var UnitTables = ucumPkg.UnitTables;
var UcumFileValidator = ucumPkg.UcumFileValidator;

var UcumDemo = exports.UcumDemo = function () {
  function UcumDemo() {
    _classCallCheck(this, UcumDemo);

    // run the constructors for the utils and unitTables classes to get
    // things initialized and data loaded.
    this.utils_ = UcumLhcUtils.getInstance();
    this.utabs_ = UnitTables.getInstance();

    // Set up the search autocompleter for the "from" unit code input field
    // on the Converter tab section
    this.urlConvCats_ = UcumDemoConfig.defCategories_;
    this.urlConvDispFlds_ = UcumDemoConfig.defCols_;
    var urlOpts = this.buildUrlAndOpts('convert');
    this.fromAuto_ = new Def.Autocompleter.Search('convertFrom', urlOpts[0], urlOpts[1]);

    // Set up the search autocompleter for the validation string input field
    // on the Validator tab section
    this.urlValCats_ = UcumDemoConfig.defCategories_;
    this.urlValDispFlds_ = UcumDemoConfig.defCols_;
    urlOpts = this.buildUrlAndOpts('validate');
    this.valAuto_ = new Def.Autocompleter.Search('valString', urlOpts[0], urlOpts[1]);

    // Set up the prefetch autocompleter for the "to" conversion field.  It will
    // be populated with commensurable units in based on what the user enters
    // in the "from" field.
    this.toAuto_ = new Def.Autocompleter.Prefetch('convertTo', []);

    // Make this a singleton.  See UnitTables constructor for details.
    var holdThis = UcumDemo.prototype;
    UcumDemo = function UcumDemo() {
      throw new Error('UcumDemo is a Singleton.  ' + 'Use UcumDemo.getInstance() instead.');
    };
    if (exports) exports.UcumDemo = UcumDemo;
    UcumDemo.prototype = holdThis;

    var self = this;
    UcumDemo.getInstance = function () {
      return self;
    };
  }

  /**
   * This method builds the URL and options array used by the search autocompleter
   * used for the "convert from" field on the converter tab.
   *
   * This uses the urlCategories_ and urlDisplayFlds_ arrays built in the
   * constructor to get the list of categories to be included and fields
   * to be displayed in the autocompleter list.
   *
   * This called from the constructor, to build the initial url, and then
   * each time the user clicks on one of the checkboxes assigned to the
   * categories and display fields listed in the advanced settings of the
   * converter tab.
   *
   * @param tab the tab that the autocompleter is on - either 'convert' or
   *  'validate'
   * @return an array containing the new url [0] and a new options hash [1]
   */


  _createClass(UcumDemo, [{
    key: 'buildUrlAndOpts',
    value: function buildUrlAndOpts(tab) {
      var urlString = UcumDemoConfig.baseSearchURL_;
      var opts = UcumDemoConfig.baseSearchOpts_;
      var catsArray = tab === 'convert' ? this.urlConvCats_ : this.urlValCats_;
      var dispArray = tab === 'convert' ? this.urlConvDispFlds_ : this.urlValDispFlds_;
      var catLen = catsArray.length;
      if (catLen > 0) {
        var qString = '';
        for (var c = 0; c < catLen; c++) {
          if (c > 0) qString += ' OR ';
          qString += UcumDemoConfig.categoryValues_[catsArray[c]];
        }
        if (catLen > 1) qString = '(' + qString + ')';
        urlString += '?q=category:' + qString;
      }
      var dispLen = dispArray.length;
      var colHdrs = UcumDemoConfig.defCols_;
      if (dispLen > 0) {
        colHdrs = dispArray;
        var dString = 'df=' + dispArray.join(',');
        if (catLen > 0) dString = '&' + dString;else dString = '?' + dString;
        urlString += dString;
      }
      opts['colHeaders'] = colHdrs;
      return [urlString, opts];
    }

    /**
     * This method builds the "Advanced Settings" section for the unit conversions
     * tab when the page is loaded.   The settings consist of configuration data
     * from the config.js file, so must be built whenever the page is built.
     *
     * This is called on the body onload event from the page html .
     *
     * @param none
     * @return nothing
     */

  }, {
    key: 'buildAdvancedSettings',
    value: function buildAdvancedSettings() {

      // get the division that contains the advanced settings stuff
      var settingsDiv = document.getElementById('advancedSearch');

      // build the categories section
      var limitPara = document.createElement("P");
      var limitLine = document.createTextNode("Limit search to units in selected categories:");
      limitPara.appendChild(limitLine);
      settingsDiv.appendChild(limitPara);

      this.buildCheckBoxes(settingsDiv, UcumDemoConfig.defCategories_, true, 'category');
      this.buildCheckBoxes(settingsDiv, UcumDemoConfig.categories_, false, 'category');

      // build display fields section
      var dispPara = document.createElement("P");
      dispPara.className = 'topMargin20';
      var dispLine = document.createTextNode("Select unit fields to display:");
      dispPara.appendChild(dispLine);
      settingsDiv.appendChild(dispPara);

      this.buildCheckBoxes(settingsDiv, UcumDemoConfig.defDisplayFlds_, true, 'displayField');
      this.buildCheckBoxes(settingsDiv, UcumDemoConfig.displayFlds_, false, 'displayField');
    } // buildAdvancedSettings


    /**
     * This method builds one set of checkboxes for the advanced settings section
     * of the converter tab.  The checkboxes are either checked as defaults or
     * are not.
     *
     * This is called on the body onload event.
     *
     * @param settingsDiv the element that contains the settings
     * @param namesArray the array that contains the names for the checkboxes
     *  to be created
     * @param defBox a flag indicating whether or not these boxes are to be
     *  checked as defaults
     * @className a class name to be applied to the boxes.   Used to indicate
     *  the type of checkbox (category or display)
     * @return nothing
     */

  }, {
    key: 'buildCheckBoxes',
    value: function buildCheckBoxes(settingsDiv, namesArray, defBox, className) {

      var namesLen = namesArray.length;

      var _loop = function _loop(i) {
        var theVal = namesArray[i];
        var theBox = document.createElement("INPUT");
        theBox.setAttribute("type", "checkbox");
        theBox.checked = defBox;
        theBox.id = theVal + "_box";
        theBox.value = theVal;
        theBox.setAttribute("class", className);
        theBox.setAttribute("style", "margin-left: 10px; margin-right: 3px;");
        theBox.addEventListener("click", function () {
          demoPkg.UcumDemo.getInstance().updateSetting(theBox.id);
        });
        settingsDiv.appendChild(theBox);
        var aSpan = document.createElement('span');
        var theText = document.createTextNode(theVal);
        theText.className = 'checkboxText';
        settingsDiv.appendChild(theText);
      };

      for (var i = 0; i < namesLen; i++) {
        _loop(i);
      }
    } // end buildCheckBoxes


    /**
     * This method updates the autocompleter URL and options based advanced
     * search options selected by the user.  It is called on a click event
     * for each setting option (category selections as well as display field
     * selections).
     *
     * The autocompleter for the convertFrom field on the Converter tab of
     * the demo page is recreated each time this is called.
     *
     * @param ckBoxId id of the checkbox on which the click event occurred
     */

  }, {
    key: 'updateSetting',
    value: function updateSetting(ckBoxId) {
      var ckBox = document.getElementById(ckBoxId);
      var clsName = ckBox.className;
      var boxVal = ckBox.value;
      var boxChecked = ckBox.checked;
      if (clsName === 'category') {
        var idx = this.urlConvCats_.indexOf(boxVal);
        // if the box is checked and the value is not already in the
        // categories array, add it to the array.
        if (boxChecked && idx < 0) this.urlConvCats_.push(boxVal);
        // if the box is unchecked and the value is in the array, remove
        // it from the array.
        else if (!boxChecked && idx >= 0) this.urlConvCats_.splice(idx, 1);
      } else if (clsName === 'displayField') {
        var _idx = this.urlConvDispFlds_.indexOf(boxVal);
        if (boxChecked && _idx < 0) this.urlConvDispFlds_.push(boxVal);else if (!boxChecked && _idx >= 0) this.urlConvDispFlds_.splice(_idx, 1);
      } else throw new Error('An error occured while specifying your choice.');

      // call buildUrlAndOpts to build the url and options from the updated url
      // arrays (category and display field arrays).
      var urlOpts = this.buildUrlAndOpts('convert');

      // Call setOptions and setUrl to update the the autocompleter.
      // -- no, there is no setOptions at this point.  Leaving these lines in to remind
      // me to update this if/when a setOptions (or equivalent) function
      // becomes available.
      //this.fromAuto_.setOptions(urlOpts[1]);
      //this.fromAuto_.setURL(urlOpts[0]);

      // So, instead, we clear the cache and recreate the autocompleter.
      this.fromAuto_.clearCachedResults();
      this.fromAuto_.destroy();
      this.fromAuto_ = new Def.Autocompleter.Search('convertFrom', urlOpts[0], urlOpts[1]);
    } // end updateSetting


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

  }, {
    key: 'reportUnitStringValidity',
    value: function reportUnitStringValidity(elementID, returnElementID) {

      this.utils_.useHTMLInMessages(true);
      this.utils_.useBraceMsgForEachString(true);

      var uStr = document.getElementById(elementID).value;
      var valFld = document.getElementById(returnElementID);
      valFld.innerHTML = '';
      var retMsg = [];
      var valMsg = '';
      if (uStr === "") {
        retMsg.push("Please specify a unit string to be validated.");
      } else {
        try {
          var parseResp = this.utils_.getSpecifiedUnit(uStr);
          if (parseResp[0]) valMsg = parseResp[1] + ' is a valid unit expression.';else {
            if (parseResp[2].length === 0) {
              valMsg = parseResp[1] + ' is NOT a valid unit expression.';
            }
          }
          if (parseResp[2].length > 0) retMsg = retMsg.concat(parseResp[2]);
        } catch (err) {
          retMsg.push(err.message);
        }
      }
      var finalMsg = retMsg.join('<br>');
      if (valMsg.length > 0) finalMsg = valMsg + '<br>' + finalMsg;
      valFld.innerHTML = finalMsg;
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

  }, {
    key: 'convertUnit',
    value: function convertUnit(fromField, numField, toField, decDigits) {

      this.utils_.useHTMLInMessages(true);
      this.utils_.useBraceMsgForEachString(true);

      if (decDigits === undefined) decDigits = Ucum.decDigits_;

      var fromName = document.getElementById(fromField).value;
      var fromVal = parseFloat(document.getElementById(numField).value);
      var hypIdx = fromName.indexOf(Ucum.codeSep_);
      if (hypIdx > 0) fromName = fromName.substr(0, hypIdx);
      var toName = document.getElementById(toField).value;
      var codePos = toName.indexOf(Ucum.codeSep_);
      if (codePos > 0) toName = toName.substr(0, codePos);

      var resultObj = this.utils_.convertUnitTo(fromName, fromVal, toName, decDigits);

      // Put the message - conversion or error - on the page
      var resultString = document.getElementById("resultString");
      resultString.innerHTML = resultObj['msg'].join('<BR>');
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

  }, {
    key: 'getCommensurables',
    value: function getCommensurables(fromField, toField, resultField) {

      this.utils_.useHTMLInMessages(true);
      this.utils_.useBraceMsgForEachString(true);

      var toFld = document.getElementById(toField);
      toFld.innerHTML = '';
      this.toAuto_.setList('');
      var resultString = document.getElementById(resultField);
      resultString.innerHTML = '';

      var fromName = document.getElementById(fromField).value;
      var hypIdx = fromName.indexOf(Ucum.codeSep_);
      if (hypIdx > 0) fromName = fromName.substr(0, hypIdx);
      var resultMsg = [];
      var parseResp = [];

      try {
        var _parseResp = this.utils_.commensurablesList(fromName);
        var commUnits = _parseResp[0];
        var _resultMsg = _parseResp[1];
        // If we can't find any, don't panic.  The user could still enter one
        // that's not on our list but is commensurable.  So if none are found,
        // just make sure the text about commensurable units is hidden.
        var commText = document.getElementById('convertRight');
        if (commUnits) {
          var cLen = commUnits.length;
          var commNames = [];
          for (var i = 0; i < cLen; i++) {
            commNames[i] = commUnits[i].getProperty('csCode_') + Ucum.codeSep_ + commUnits[i].getProperty('name_');
          }commNames.sort(this.utabs_.compareCodes);
          this.toAuto_.setList(commNames);
          commText.style.visibility = "visible";
        } else commText.style.visibility = "hidden";
      } catch (err) {
        resultMsg.push(err.message);
      }
      if (resultMsg.length > 0) {
        resultString.innerHTML = resultMsg.join('<BR>');
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

  }, {
    key: 'toggleDisplay',
    value: function toggleDisplay(elementID, buttonID, blockText, noneText) {

      this.utils_.useHTMLInMessages(true);
      this.utils_.useBraceMsgForEachString(true);

      var theElement = document.getElementById(elementID);
      var theButton = null;
      if (buttonID) theButton = document.getElementById(buttonID);
      if (theElement) {
        if (theElement.style.display === "none") {
          theElement.style.display = "block";
          if (theButton) theButton.innerText = theButton.innerText.replace(noneText, blockText);
        } else {
          theElement.style.display = "none";
          if (theButton) theButton.innerText = theButton.innerText.replace(blockText, noneText);
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

  }, {
    key: 'fileSelected',
    value: function fileSelected() {
      var colDiv = document.getElementById('colNameDiv');
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

  }, {
    key: 'columnSpecified',
    value: function columnSpecified() {
      var colName = document.getElementById('colName').value;
      this.utils_.useHTMLInMessages(false);
      this.utils_.useBraceMsgForEachString(false);

      var dia = document.getElementById("inputfile");
      var ufv = UcumFileValidator.getInstance();
      ufv.validateFile(dia.files[0], colName, this.initiateDownload, this.fileValidationError);
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

  }, {
    key: 'initiateDownload',
    value: function initiateDownload(bUrl) {

      // create the download element,  give it the default file name to
      // create, and append it to the document.
      var a = document.createElement('a');
      a.id = 'downlink';
      a.href = bUrl;
      a.download = 'UnitStringValidations.csv';
      document.body.appendChild(a);

      // add a listener that gets rid of the download link once the
      // user clicks save or cancel
      function windowFocus() {
        window.removeEventListener('focus', windowFocus, false);
        URL.revokeObjectURL(bUrl);
        var an = document.getElementById('downlink');
        an.parentElement.removeChild(an);
        var dia = document.getElementById("inputfile");
        dia.value = null;
        var colDiv = document.getElementById('colNameDiv');
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

  }, {
    key: 'fileValidationError',
    value: function fileValidationError(src, err) {
      console.log(src + ' error; err = ' + err);
      var aMsg = err + "\n\nSorry - your validation file could not be written.";
      alert(aMsg);
      var dia = document.getElementById("inputfile");
      dia.value = '';
      var colDiv = document.getElementById('colNameDiv');
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

  }, {
    key: 'resetFileInput',
    value: function resetFileInput() {
      var dia = document.getElementById("inputfile");
      dia.value = '';
      var colDiv = document.getElementById('colNameDiv');
      colDiv.setAttribute('style', 'display:none');
    }
  }]);

  return UcumDemo;
}(); // end class UcumDemo


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


UcumDemo.getInstance = function () {
  return new UcumDemo();
};

// Perform the first request for the demo object, to get the
// getInstance method set.
UcumDemo.getInstance();


},{"./demoConfig":1}]},{},[2])(2)
});