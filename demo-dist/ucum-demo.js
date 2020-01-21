(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.demoPkg = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UcumDemoConfig = void 0;

/*
 * The license for the UCUM LHC code (demo and library code) is located at
 * https://github.com/lhncbc/ucum-lhc/blob/master/LICENSE.md
 *
 * This defines the UCUM demo-specific global variables and constants.
 * See the config.js file for UCUM global definitions that are not specific
 * to the demo.
 *
 * The javascript for this UCUM implementation uses syntax as
 * defined by the ECMAScript 6 standard
 */
var UcumDemoConfig = {
  /**
  * Categories that can be used to limit units listed by the autocompleter
  * in the Demo Unit Conversions page.   Separated into two arrays, with
  * the default categories in defCategories_ .
  */
  defCategories_: ['Clinical Use'],
  categories_: ['Nonclinical Use', 'Constants', 'Obsolete'],

  /**
   * Hash that matches category display names with the corresponding
   * values used in the data
   */
  categoryValues_: {
    'Clinical Use': 'Clinical',
    'Nonclinical Use': 'Nonclinical',
    'Constants': 'Constant',
    'Obsolete': 'Obsolete'
  },

  /**
   * Fields that the user can select for display in the autocompleter list
   * that displays units in the Demo Unit Conversions page.   Separated into
   * two arrays, with the default categories in defDisplayFlds_ .
   */
  defDisplayFlds_: ['cs_code', 'name', 'guidance'],
  displayFlds_: ['category', 'synonyms', 'loinc_property', 'source'],

  /**
   * Base URL for an autocompleter search query on the clinical tables search
   * service for extended UCUM data
   */
  baseSearchURL_: 'https://clin-table-search.lhc.nlm.nih.gov/api/ucum/v3/' + 'search?q=is_simple:true',

  /**
   * Default column headers for an autocompleter search query when no display
   * fields are specified.  If no display fields are specified, these are the
   * columns that are displayed.  Once the user specifies columns to display,
   * the column headers are built from those column names.
   */
  defCols_: ['cs_code', 'name', 'guidance'],

  /**
   * Basic search opts used for all autocompleter search queries
   */
  baseSearchOpts_: {
    'nonMatchSuggestions': false,
    'tableFormat': true,
    'valueCols': [0],
    'tokens': ['/', '.']
  },

  /**
   *  The default number of decimal digits to be displayed for a unit amount
   */
  decDigits_: 2,

  /**
   *  The maximum number of decimal digits to be displayed for a unit amount.
   */
  maxDecDigits_: 20,

  /**
   *  The default precision to be used
   */
  defaultPrecision_: 15
};
exports.UcumDemoConfig = UcumDemoConfig;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UcumFileValidator = exports.UcumDemo = exports.UcumDemoConfig = void 0;

/**
 * This is the code entry point for the demo web page.  It coordinates the
 * loading of the prefix and unit objects from the json definitions file and
 * populating the autocompleter unit lists.
 */
var UcumDemoConfig = require("./demoConfig.js").UcumDemoConfig;

exports.UcumDemoConfig = UcumDemoConfig;

var UcumDemo = require("./ucumDemo.js").UcumDemo;

exports.UcumDemo = UcumDemo;

var UcumFileValidator = require("./ucumFileValidator.js").UcumFileValidator;

exports.UcumFileValidator = UcumFileValidator;
var demo = UcumDemo.getInstance();

},{"./demoConfig.js":1,"./ucumDemo.js":3,"./ucumFileValidator.js":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UcumDemo = void 0;

function _templateObject() {
  var data = _taggedTemplateLiteral(["decimal digits.  It has been reset to the maximum number of digits "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * This is the code entry point for the demo web page.  It coordinates the
 * loading of the prefix and unit objects from the json definitions file and
 * populating the autocompleter unit lists.
 */
var fs = require('browserify-fs');

var escapeHtml = require('escape-html');

var Ucum = ucumPkg.Ucum;

var UcumDemoConfig = require('./demoConfig.js').UcumDemoConfig;

var UcumLhcUtils = ucumPkg.UcumLhcUtils;
var UnitTables = ucumPkg.UnitTables;

var UcumFileValidator = require('./ucumFileValidator.js').UcumFileValidator;

var UcumDemo =
/*#__PURE__*/
function () {
  function UcumDemo() {
    _classCallCheck(this, UcumDemo);

    // run the constructors for the utils and unitTables classes to get
    // things initialized and data loaded.
    this.utils_ = UcumLhcUtils.getInstance();
    this.utabs_ = UnitTables.getInstance(); // Set up the category and display column defaults for the validator
    // tab and call buildUrlAndOpts to build them

    this.urlValCats_ = UcumDemoConfig.defCategories_;
    this.urlValDispFlds_ = UcumDemoConfig.defCols_;
    urlOpts = this.buildUrlAndOpts('validate'); // Set up the search autocompleter for the unit expression field
    // on the validator tab

    this.valAuto_ = new Def.Autocompleter.Search('valString', urlOpts[0], urlOpts[1]);
    Def.Autocompleter.Event.observeListSelections('valString', function (demoInstance) {
      return function () {
        demoInstance.reportUnitStringValidity('valString', 'Validator', 'validationString');
      };
    }(this)); // Set up the default category and display column defaults for the
    // converter tab and call buildUrlAndOpts to build them

    this.urlConvCats_ = UcumDemoConfig.defCategories_;
    this.urlConvDispFlds_ = UcumDemoConfig.defCols_;
    var urlOpts = this.buildUrlAndOpts('convert'); // Set up the search autocompleters for the "from" and "to" unit code input
    // fields on the Converter tab section

    this.fromAuto_ = new Def.Autocompleter.Search('convertFrom', urlOpts[0], urlOpts[1]);
    Def.Autocompleter.Event.observeListSelections('convertFrom', function (demoInstance) {
      return function () {
        demoInstance.reportUnitStringValidity('convertFrom', 'Converter', 'convMsg');
      };
    }(this));
    this.toAuto_ = new Def.Autocompleter.Search('convertTo', urlOpts[0], urlOpts[1]);
    Def.Autocompleter.Event.observeListSelections('convertTo', function (demoInstance) {
      return function () {
        demoInstance.reportUnitStringValidity('convertTo', 'Converter', 'convMsg');
      };
    }(this)); // Flags indicating validity of the "from" and "to" unit code and number
    // fields on the conversion tab.

    this.convFrom_ = false;
    this.convFromNum_ = true;
    this.convTo_ = false;
    this.convToNum_ = true; // Flag used to track a first entry on the converter tab.   This is needed
    // to know when to blank out the "to" number field if the user first enters
    // a unit code when the converter tab is displayed.   After that point
    // blanking out a numeric field as appropriate is taken care of.

    this.firstConvEntry_ = true; // Remember which numeric value was last reported as the conversion result
    // and what field it was reported in

    this.lastResultFld_ = null;
    this.lastResult_ = 0; // Flag used to block execution of the location change event handler when
    // location is changed in the url as the result of the user clicking on
    // one of the tabs (validator or converter tabs) by the checkTabsSwitch
    // function.

    this.blockLocationChangeHandler = false; // Set up the prefetch autocompleter for the "to" conversion field.  It will
    // be populated with commensurable units in based on what the user enters
    // in the "from" field.  Changed to search autocompleter per Clem
    // this.toAuto_ = new Def.Autocompleter.Prefetch('convertTo', []);
    // Because this code is loaded with the page, there is no danger in
    // this being a singleton.

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
   * used for the "convert from" field on the converter tab and the
   * "unit expression to be validated" field on the validator tab.
   *
   * This uses the urlCategories_ and urlDisplayFlds_ arrays built in the
   * constructor to get the list of categories to be included and fields
   * to be displayed in the autocompleter list.
   *
   * This is called from the constructor, to build the initial url, and then
   * each time the user clicks on one of the checkboxes assigned to the
   * categories and display fields listed in the advanced settings of the
   * converter and validator tabs.
   *
   * This adds a minChars: 1 option to the end of options hash, to allow
   * searching to start as soon as the operator enters 1 character.
   *
   * @param tab the tab that the autocompleter is on - either 'convert' or
   *  'validate'
   * @return an array containing the new url [0] and a new options hash [1]
   */


  _createClass(UcumDemo, [{
    key: "buildUrlAndOpts",
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
        urlString += ' AND category:' + qString;
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
      opts['minChars'] = 1;
      return [urlString, opts];
    } // end buildUrlAndOpts

    /* This method controls the building of the "Advanced Settings" section that
     * appears on each tab of the demo page.  It is called when the page is
     * loaded.   The settings consist of configuration data from the config.js
     * file, so must be built whenever the page is built.
     *
     * This is called on the body onload event from the page html.
     */

  }, {
    key: "buildAdvancedSettings",
    value: function buildAdvancedSettings() {
      this.buildTabSettings('advancedSearchVal', 'val');
      this.buildTabSettings('advancedSearchCnv', 'cnv');
      var prec = document.getElementById("precision");
      prec.value = UcumDemoConfig.defaultPrecision_; // Clear the validator tab input field to avoid having a previous value
      // displayed when the form is reloaded.   This should not be necessary,
      // because the input field is defined with an attribute of
      // autocomplete="off".   But, Edge doesn't seem to feel like paying
      // attention to that.  So this is a workaround.  BAH!

      var valFld = document.getElementById("valString");
      valFld.innerHTML = "";
      valFld.setAttribute("autocomplete", "false"); // Check to see if the URL specified that the converter tab be
      // displayed first.

      if (window.location.hash === '#converter') {
        var convertTab = document.getElementById("conversion-link");
        convertTab.click();
      }
    } // end buildAdvancedSettings

    /**
     * This method builds the "Advanced Settings" section for one tab of the
     * demo page/site.  The settings consist of configuration data
     * from the config.js file, so must be built whenever the page is built.
     *
     * This is called once for each tab by the buildAdvancedSettings function.
     *
     * @param divName name of the div element to receive the settings html
     * @param boxSuffix suffix for the tab ('val' or 'cnv') that is included
     *  in the checkbox ids for the sections built, and is used to determine
     *  which tab is the target for the current call
     */

  }, {
    key: "buildTabSettings",
    value: function buildTabSettings(divName, boxSuffix) {
      // get the division that contains the advanced settings stuff
      var settingsDiv = document.getElementById(divName); // build the categories section

      var limitPara = document.createElement("P");
      var limitLine = document.createTextNode("Limit search to units in selected categories:");
      limitPara.appendChild(limitLine);
      settingsDiv.appendChild(limitPara);
      this.buildCheckBoxes(settingsDiv, UcumDemoConfig.defCategories_, true, 'category', boxSuffix);
      this.buildCheckBoxes(settingsDiv, UcumDemoConfig.categories_, false, 'category', boxSuffix); // build display fields section

      var dispPara = document.createElement("P");
      dispPara.className = 'topMargin20';
      var lineBreak = document.createElement('BR');
      dispPara.appendChild(lineBreak);
      var dispLine = document.createTextNode("Select unit fields to display:");
      dispPara.appendChild(dispLine);
      settingsDiv.appendChild(dispPara);
      this.buildCheckBoxes(settingsDiv, UcumDemoConfig.defDisplayFlds_, true, 'displayField', boxSuffix);
      this.buildCheckBoxes(settingsDiv, UcumDemoConfig.displayFlds_, false, 'displayField', boxSuffix);
    } // buildTabSettings

    /**
     * This method builds one set of checkboxes for the advanced settings section
     * on both tabs of the form.  The checkboxes are either checked as defaults or
     * are not.
     *
     * This is called on the body onload event.
     *
     * @param settingsDiv the element that contains the settings
     * @param namesArray the array that contains the names for the checkboxes
     *  to be created
     * @param defBox a flag indicating whether or not these boxes are to be
     *  checked as defaults
     * @param className a class name to be applied to the boxes.   Used to indicate
     *  the type of checkbox (category or display)
     * @param boxSuffix applied to the checkbox name to distinguish which tab
     *  the checkbox is on ('val' or 'cnv')
     * @return nothing
     */

  }, {
    key: "buildCheckBoxes",
    value: function buildCheckBoxes(settingsDiv, namesArray, defBox, className, boxSuffix) {
      var namesLen = namesArray.length;

      var _loop = function _loop(i) {
        var theVal = namesArray[i];
        var theBox = document.createElement("INPUT");
        theBox.setAttribute("type", "checkbox");
        theBox.checked = defBox;
        theBox.id = theVal + "_" + boxSuffix + "box";
        theBox.value = theVal;
        theBox.setAttribute("class", className);
        theBox.setAttribute("style", "margin-left: 10px; margin-right: 3px;");
        theBox.addEventListener("click", function () {
          demoPkg.UcumDemo.getInstance().updateSetting(theBox.id, boxSuffix);
        });
        var theSpan = document.createElement('label');
        theSpan.setAttribute("style", "display: inline-block");
        theSpan.appendChild(theBox);
        var theText = document.createTextNode(theVal);
        theText.className = 'checkboxText';
        theSpan.appendChild(theText);
        settingsDiv.appendChild(theSpan);
      };

      for (var i = 0; i < namesLen; i++) {
        _loop(i);
      }
    } // end buildCheckBoxes

    /**
     * This method checks the location value of the current URL to see if it
     * matched the current tab being displayed (or the one about to be
     * displayed).  This is here to make sure that when the user clicks on
     * the Validator or Converter tab, the "#converter" portion of the
     * url, if specified, is removed if the user clicked on the validator tab.
     *
     * This is called on the body onhashchange event.
     */

  }, {
    key: "checkTabSwitch",
    value: function checkTabSwitch() {
      if (this.blockLocationChangeHandler === false) {
        if (window.location.hash === '#converter') {
          var convertTab = document.getElementById("conversion-link");
          convertTab.click();
        } else {
          var validateTab = document.getElementById("validation-link");
          validateTab.click();
        }
      } else this.blockLocationChangeHandler = false;
    } // end checkTabSwitch

    /**
     * This method is run when the Converter tab is displayed, to reset the
     * variables that track the validity of the three inputs ("from" unit code,
     * "from" value, and "to" unit code) that must be correct to attempt a
     * conversion as well as to reset the molecular weight division to hidden
     * status and the associated moleWeight input field to null.
     */

  }, {
    key: "showConvertTab",
    value: function showConvertTab() {
      this.convFrom_ = false;
      var fromField = document.getElementById('convertFrom');
      fromField.value = null;
      fromField.classList.remove("invalid");
      var fromNameField = document.getElementById('convertFromName');
      fromNameField.innerHTML = '';
      this.convFromNum_ = true;
      var fromNumField = document.getElementById('convertFromNum');
      fromNumField.value = 1;
      fromNumField.classList.remove("invalid");
      this.convTo_ = false;
      var toField = document.getElementById('convertTo');
      toField.value = null;
      toField.classList.remove("invalid");
      var toNameField = document.getElementById('convertToName');
      toNameField.innerHTML = '';
      this.convToNum_ = true;
      var toNumField = document.getElementById('convertToNum');
      toNumField.value = 1;
      toNumField.classList.remove("invalid");
      var msgField = document.getElementById('convMsg');
      msgField.innerHTML = ''; // Make sure the number/code boxes are aligned properly and set the
      // first entry flag to true.

      this._sizeNameDivs();

      this.firstConvEntry_ = true;
      var mWeightDiv = document.getElementById('molecular-weight');
      mWeightDiv.style.visibility = 'hidden';
      var mWeightFld = document.getElementById('moleWeight');
      mWeightFld.value = null;

      if (window.location.hash !== '#converter' && window.location.hash !== '') {
        this.blockLocationChangeHandler = true;
        window.location.hash = '';
      }
    } // end showConvertTab

    /**
     * This method is run when the Validator tab is displayed, to reset the
     * ucum expression input field and the message field.  Otherwise they
     * retain their values when switching to the Converter tab and back.
     */

  }, {
    key: "showValidateTab",
    value: function showValidateTab() {
      var codeField = document.getElementById('valString');
      codeField.value = null;
      codeField.classList.remove("invalid");
      var msgField = document.getElementById('validationString');
      msgField.innerHTML = '';
      msgField.classList.remove("invalid");

      if (window.location.hash === '#converter') {
        this.blockLocationChangeHandler = true;
        window.location.hash = '';
        this.blockLocationChangeHandler = false;
      }
    } // end showValidateTab

    /**
     * This method updates one of the autocompleter URLs and options based advanced
     * search options selected by the user.  It is called on a click event
     * for each setting option (category selections as well as display field
     * selections).
     *
     * The autocompleter for the appropriate field on the one of the tabs of
     * the demo page is recreated each time this is called.
     *
     * @param ckBoxId id of the checkbox on which the click event occurred
     * @param tabSuffix suffix ('val' or 'cnv') used to determine which
     *  autocompleter needs to be updated
     */

  }, {
    key: "updateSetting",
    value: function updateSetting(ckBoxId, tabSuffix) {
      var ckBox = document.getElementById(ckBoxId);
      var clsName = ckBox.className;
      var boxVal = ckBox.value;
      var boxChecked = ckBox.checked;

      if (clsName === 'category') {
        var catsArray = tabSuffix === 'cnv' ? this.urlConvCats_ : this.urlValCats_;
        var idx = catsArray.indexOf(boxVal); // if the box is checked and the value is not already in the
        // categories array, add it to the array.

        if (boxChecked && idx < 0) {
          catsArray.push(boxVal); // if the box is unchecked and the value is in the array, remove
          // it from the array.
        } else if (!boxChecked && idx >= 0) {
          catsArray.splice(idx, 1);
        }
      } else if (clsName === 'displayField') {
        var dispArray = tabSuffix === 'cnv' ? this.urlConvDispFlds_ : this.urlValDispFlds_;

        var _idx = dispArray.indexOf(boxVal);

        if (boxChecked && _idx < 0) {
          dispArray.push(boxVal);
        } else if (!boxChecked && _idx >= 0) {
          dispArray.splice(_idx, 1);
        }
      } else throw new Error('An error occurred while specifying your choice.'); // call buildUrlAndOpts to build the url and options from the updated url
      // arrays (category and display field arrays).


      var tabName = tabSuffix === 'cnv' ? 'convert' : 'validate';
      var urlOpts = this.buildUrlAndOpts(tabName); // Call setOptions and setUrl to update the the autocompleter.
      // -- no, there is no setOptions at this point.  Leaving these lines in to remind
      // me to update this if/when a setOptions (or equivalent) function
      // becomes available.
      //this.fromAuto_.setOptions(urlOpts[1]);
      //this.fromAuto_.setURL(urlOpts[0]);
      // So, instead, we clear the cache and recreate the autocompleter(s).

      if (tabSuffix === 'cnv') {
        this.fromAuto_.clearCachedResults();
        this.fromAuto_.destroy();
        this.fromAuto_ = new Def.Autocompleter.Search('convertFrom', urlOpts[0], urlOpts[1]);
        this.toAuto_.clearCachedResults();
        this.toAuto_.destroy();
        this.toAuto_ = new Def.Autocompleter.Search('convertTo', urlOpts[0], urlOpts[1]);
      } else {
        this.valAuto_.clearCachedResults();
        this.valAuto_.destroy();
        this.valAuto_ = new Def.Autocompleter.Search('valString', urlOpts[0], urlOpts[1]);
      }
    } // end updateSetting

    /**
     * This method validates a string that is supposed to be representing a valid
     * unit. It indicates whether or not the string translates to a valid unit.
     *
     * @param elementID the ID of the web page element that contains the
     *  string to be validated
     * @param tabName the name of the tab ('Converter' or 'Validator') that
     *  contains the input field
     * @param msgElementID the ID of the web page element to receive messages
     *  (success and error).
     * @returns nothing directly; return is the success/error message
     */

  }, {
    key: "reportUnitStringValidity",
    value: function reportUnitStringValidity(elementID, tabName, msgElementID) {
      this.utils_.useHTMLInMessages(true);
      this.utils_.useBraceMsgForEachString(true);
      var valConv = tabName === 'Validator' ? 'validate' : 'convert';
      var retMsg = '';
      var valMsg = '';
      var parseResp = {};
      var suggsField = null;

      if (tabName === 'Converter') {
        suggsField = document.getElementById("convSuggestions");
        suggsField.innerHTML = '';
        suggsField.style.display = 'none'; // This is called by a change to one of the unit fields, so
        // hide the molecular weight division, clear the moleWeight input
        // value, and clear the value of the last result field, if any

        var mWeightDiv = document.getElementById('molecular-weight');
        mWeightDiv.style.visibility = 'hidden';
        var mWeightFld = document.getElementById('moleWeight');
        mWeightFld.value = null;
        /*
        if (this.lastResultFld_) {
          let rf = document.getElementById(this.lastResultFld_);
          rf.value = '';
        }
        */
        // If the user entered a unit code as soon as the converter tab was
        // displayed, blank out the number field of the opposite number/code set.

        if (this.firstConvEntry_) {
          this.firstConvEntry_ = false;

          if (elementID === 'convertFrom') {
            var clrFld = document.getElementById('convertToNum');
            clrFld.value = '';
          } else {
            var _clrFld = document.getElementById('convertFromNum');

            _clrFld.value = '';
          }
        }
      } // Clear the message field, but first hold onto the last message displayed.
      // This is used at the end of this function to make sure we don't redisplay
      // the same message.  This can happen if, for example, the user enters a
      // unit code that requires a substitution, e.g., 2mg instead of 2.mg, and
      // then enters another unit code in the other code field on the converter
      // tab.   When the 2mg unit code is checked for validity, a substitution
      // message is displayed.   When the second unit code is entered and the
      // conversion is performed, the substitution message gets repeated because
      // the conversion process will re-evaluate the 2mg unit code.  This avoids
      // that second display of the same, and no longer needed, message.


      var resFld = document.getElementById(msgElementID);
      var lastDispMsg = resFld.innerHTML;
      resFld.innerHTML = '';
      var valFld = document.getElementById(elementID);
      var valMsgFld = document.getElementById(elementID + 'Name');

      if (valMsgFld) {
        valMsgFld.innerHTML = '';
        valMsgFld.style.height = 'auto';
      }

      var uStr = valFld.value; // If the field was blanked out and we're on the converter tab, call
      // setConvertValues to set the validity flag for that field to false but not
      // designate it as an error (no error message, no red border around the field)

      if (uStr === '') {
        if (tabName === 'Converter') this.setConvertValues(elementID, false, true);
      } // Otherwise create a safe (to redisplay) copy of the field and
      // try to validate it
      else {
          var escVal = escapeHtml(valFld.value);
          var theStatus = '';

          try {
            parseResp = this.utils_.validateUnitString(uStr, true, valConv);
            theStatus = parseResp['status'];
            var theUnit = parseResp['unit']; // If we got a unit back and the status isn't 'error', we found a
            // unit (whether or not it matches the original string).

            if (theStatus !== 'error' && theUnit) {
              if (tabName === 'Converter') {
                this.setConvertValues(elementID, true); // If the last displayed message was displayed again, remove it here.
                // See above for description of how that can happen.

                if (resFld.innerHTML === lastDispMsg) {
                  resFld.innerHTML = '';
                } else {
                  retMsg = resFld.innerHTML;
                }
              } // If the status returned was 'invalid' it means we had to do a
              // substitution to get a unit.  Set the class on the output
              // strings to invalid.


              if (theStatus === 'invalid') {
                valFld.classList.add("invalid");
                resFld.classList.add("invalid");
                resFld.classList.remove("valid");
                valMsg = "".concat(parseResp['ucumCode'], " was substituted for ").concat(escVal, ".");
                valMsgFld.classList.add("invalid");
              } // Otherwise the status is valid.  If we're on the validator tab
              // set the appropriate classes for the output fields.  This has
              // already been done for the converter tab fields, in setConvertValues
              else {
                  if (tabName === 'Validator') {
                    valFld.classList.remove('invalid');
                    resFld.classList.remove('invalid');
                    resFld.classList.add('valid');
                  } // Assemble the valid value message.  If there is a unit name,
                  // use that.  If there's no name, just say that the code is valid.


                  valMsg = "".concat(parseResp['ucumCode'], " ");

                  if (theUnit.name) {
                    valMsg += "(".concat(theUnit.name, ") ");
                  }

                  valMsg += ' is a valid unit expression.'; // If there might be something that needs to be escaped in
                  // the message, do it now.

                  if (uStr !== escVal && uStr !== '') {
                    valMsg = this._multipleReplace(valMsg, uStr, escVal);
                  } // For the validator tab, make sure the valid unit message
                  // is the first one that is displayed.  It may be followed
                  // by a message about substitutions, but it should be first.


                  if (tabName === 'Validator') {
                    if (parseResp['msg'].length > 0) parseResp['msg'].unshift(valMsg);else parseResp['msg'] = [valMsg];
                  } // end if this is for the validator tab

                } // end if the status is 'valid'

            } // end if we have a unit and the status is not 'error'
            // Else the status returned is 'error' OR no unit was returned
            // (status could still be invalid)
            else {
                if (tabName === 'Converter') {
                  this.setConvertValues(elementID, false);
                  valMsg = "".concat(escVal, " ");

                  if (theUnit && theUnit.name) {
                    valMsg += "(".concat(theUnit.name, ") ");
                  }

                  valMsg += ' is NOT a valid unit expression.';
                } else {
                  valFld.classList.add("invalid");
                  resFld.classList.add("invalid");
                  resFld.classList.remove("valid");
                } // If the status is invalid and we have suggestions, put the suggestion
                // output in the return message.   This include a starting line
                // stating that the unit expression was invalid but we have
                // suggestions.  If we don't have suggestions there
                // should be an "invalid" message in the parse response's 'msg'
                // element which will be transferred to the retMsg below.


                if (parseResp['suggestions']) {
                  if (tabName === 'Validator') {
                    retMsg = this._suggSetOutput(parseResp['suggestions']);
                  } else {
                    suggsField.innerHTML = this._suggSetOutput(parseResp['suggestions']);
                    suggsField.style.display = 'block';
                  }
                }

                if (theStatus === 'error') {
                  console.log(retMsg.concat(parseResp['msg']));
                  retMsg = "Sorry - an error occurred while trying to validate ".concat(escVal);
                }
              } // end if parsing returned an error status

          } // end try
          catch (err) {
            console.log(err.message);
            retMsg = "Sorry - an error occurred while trying to validate ".concat(escVal);
            valFld.classList.add("invalid");
            resFld.classList.add("invalid");

            if (tabName === 'Converter') {
              this.setConvertValues(elementID, false);
            }
          } // end catch


          if (parseResp['msg'] && parseResp['msg'].length > 0) {
            var pMsgLen = parseResp['msg'].length;

            for (var m = 0; m < pMsgLen; m++) {
              if (!retMsg.includes(parseResp['msg'][m])) {
                if (retMsg != '') retMsg += '<BR>';
                retMsg += parseResp['msg'][m];
              }
            }
          } // end if there's a message from the parse request
          // If there's a message to be displayed (and it's not a repeat of
          // the last displayed message) do it now


          if (retMsg !== '' && retMsg !== lastDispMsg) {
            if (uStr !== escVal && uStr !== '') {
              retMsg = this._multipleReplace(retMsg, uStr, escVal);
            }

            resFld.innerHTML = retMsg;
          } // If we're on the converter tab, display any pending valid/invalid
          // message for the code just entered and set the class of the field
          // that gets that message (under the input field for the code)


          if (tabName === 'Converter') {
            valMsgFld.innerHTML = valMsg;
            if (theStatus === 'valid') valMsgFld.classList.remove('invalid');else valMsgFld.classList.add('invalid');
          }
        } // end if a value was specified
      // Make sure the number/code blocks are aligned


      if (tabName === 'Converter') {
        this._sizeNameDivs();
      }
    } // end reportUnitStringValidity

    /**
     * This method sets the appropriate validity variable and display attributes
     * (via the "invalid" class attribute) for one of the three inputs that
     * must be correct to allow the user to request conversion.
     *
     * This also checks to see if all three are correct and if they are, it
     * invokes the convertUnit function.
     *
     * @param elementID ID of the field that caused this to be called.
     * @param valid true indicates that the value is valid; false means it's not.
     * @param clear an optional boolean that signals a request to remove
     *   highlighting (currently a red border) of the form element being updated.
     *   This should be passed as true when the user clears the contents of a
     *   field.  The input is not a valid value, but no message or highlighting
     *   is required.  Default value is false.
     *
     */

  }, {
    key: "setConvertValues",
    value: function setConvertValues(elementID, valid, clear) {
      if (clear === undefined) {
        clear = false;
      }

      var msgField = document.getElementById('convMsg');
      var sourceField = document.getElementById(elementID);
      var resultSide = null;

      if (elementID === 'convertFrom') {
        this.convFrom_ = valid;
        var fromNumFld = document.getElementById('convertFromNum');
        if (fromNumFld.value == '') resultSide = 'from';else resultSide = 'to';
      } else if (elementID === 'convertTo') {
        this.convTo_ = valid;
        var toNumFld = document.getElementById('convertToNum');
        if (toNumFld.value === '') resultSide = 'to';else resultSide = 'from';
      } else if (elementID === 'convertFromNum') {
        this.convFromNum_ = valid;
        resultSide = 'to';
      } else if (elementID === 'convertToNum') {
        this.convToNum_ = valid;
        resultSide = 'from';
      } else {
        // assume moleWeight
        if (this.lastResultFld_ === 'convertFromNum') resultSide = 'from';else resultSide = 'to';
      } // set or remove the indicator (currently a red border) on the invalid field


      if (valid === false && !clear) {
        sourceField.classList.add("invalid");
        msgField.classList.add("invalid");
      } else {
        sourceField.classList.remove("invalid");
        msgField.classList.remove("invalid");
      } // if both code fields are valid, and the number field that is not
      // being calculated is valid, perform the conversion


      if (this.convFrom_ === true && this.convTo_ === true) {
        if (resultSide === 'from' && this.convToNum_) {
          this.convertUnit('convertTo', 'convertToNum', 'convertFrom', 'convertFromNum');
        } else if (resultSide === 'to' && this.convFromNum_) {
          this.convertUnit('convertFrom', 'convertFromNum', 'convertTo', 'convertToNum');
        }
      }
    } // end setConvertValues

    /**
     * This method checks a number of units value or the moleWeight value to make
     * it's a valid number.  It calls setConvertValues to set the validity state
     * flag for the number of units field as appropriate.
     *
     * @param numField the name of the input field to check
     *
     */

  }, {
    key: "checkNumVal",
    value: function checkNumVal(numField) {
      var checkFld = document.getElementById(numField);
      var checkVal = escapeHtml(checkFld.value);
      if (numField === 'moleWeight') var resFld = document.getElementById(this.lastResultFld_);else {
        resFld = numField === 'convertFromNum' ? document.getElementById('convertToNum') : document.getElementById('convertFromNum');
      }
      var resultString = document.getElementById('convMsg');
      resultString.innerHTML = '';

      if (checkVal !== '') {
        resFld.value = '';
        var parsedNum = "" + checkVal;

        if (isNaN(parsedNum) || isNaN(parseFloat(parsedNum))) {
          resultString.innerHTML = "".concat(checkVal, " is not a valid number.");
          this.setConvertValues(numField, false);
        } else {
          this.setConvertValues(numField, true);
        }
      } // end if a value was specified
      // Else the value is blank. call setConvertValues to set the validity
      // indicator to false and remove any red highlighting that might be there.
      else {
          this.setConvertValues(numField, false, true);
        } // Clear the first entry flag, make sure the number/code blocks are aligned


      if (this.firstConvEntry_) {
        this.firstConvEntry_ = false;
      }

      this._sizeNameDivs();
    } // end checkNumVal

    /**
     * This checks the value specified for number of decimal digits on the
     * Converter tab.  If the number is invalid it issues a message and resets
     * the value to the default.
     *
     * If the number is valid it resets both the
     * convert "from" and convert "to" numbers to the appropriate value, using
     * the stored values for those fields.  It does not reset a value for a
     * field that is blank.
     *
     * @param numField the name of the number of units field
     *
     */

  }, {
    key: "updatePrecision",
    value: function updatePrecision(msgFieldName) {
      var msgField = document.getElementById(msgFieldName);
      msgField.innerHTML = '';
      var prec = document.getElementById("precision");
      var precDigits = parseInt(prec.value);

      if (isNaN(precDigits) || precDigits < 0) {
        msgField.innerHTML = "Decimal digits must be specified as a number " + "between 0 and ".concat(UcumDemoConfig.maxDecDigits_, ".  ") + "It has been reset to the default value.";
        msgField.classList.add("invalid");
        precDigits = UcumDemoConfig.defaultPrecision_;
        prec.value = precDigits;
      } else if (precDigits > UcumDemoConfig.maxDecDigits_) {
        msgField.innerHTML = "".concat(escapeHtml(prec.value), " is not a valid value for ")(_templateObject()) + "allowed.";
        msgField.classList.add("invalid");
        precDigits = UcumDemoConfig.maxDecDigits_;
        prec.value = precDigits;
      } // Update the result field


      var numField = document.getElementById(this.lastResultFld_);
      var numVal = parseFloat(numField.value);

      if (numVal !== NaN) {
        numVal = this.lastResult_.toFixed(precDigits);
        numField.value = numVal;
      }
    } // end updatePrecision

    /**
     * This method converts one unit to another
     *
     * @param fromField the ID of the field containing the name of the unit to
     *  be converted
     * @param fromNumField the ID of the field containing the number of "from" units
     *  to be converted to "to" units
     * @param toField the ID of the field containing the name of the unit that
     *  the from field is to be converted to
     * @param toNumField the ID of the field to receive the number of "to" units
     */

  }, {
    key: "convertUnit",
    value: function convertUnit(fromField, fromNumField, toField, toNumField) {
      this.utils_.useHTMLInMessages(true);
      this.utils_.useBraceMsgForEachString(true);
      var resultMsg = '';
      var prec = document.getElementById("precision");
      var decDigits = parseInt(escapeHtml(prec.value));

      if (isNaN(decDigits)) {
        decDigits = Ucum.decDigits_;
        prec.value = decDigits;
      } // Start out with the precision not displayed


      var precLine = document.getElementById('precision-line');
      precLine.style.display = "none"; // Store the name of the result field so that we have it if a larger number
      // of digits is subsequently requested AND (for the result field name)
      // when a molecular weight is requested.

      this.lastResultFld_ = toNumField;
      var fromName = document.getElementById(fromField).value;
      var escFromName = escapeHtml(fromName);
      var fromVal = parseFloat(escapeHtml(document.getElementById(fromNumField).value));
      var toName = document.getElementById(toField).value;
      var escToName = escapeHtml(toName); // Get the field to hold an error message and the one to hold suggestions

      var msgField = document.getElementById("convMsg");
      msgField.innerHTML = '';
      var suggsField = document.getElementById("convSuggestions");
      suggsField.innerHTML = '';
      suggsField.style.display = 'none';
      var weightField = document.getElementById("moleWeight");
      var moleWeightVal = weightField.value;
      var resultObj = this.utils_.convertUnitTo(fromName, fromVal, toName, true, moleWeightVal);

      if (resultObj['status'] === 'succeeded') {
        var toVal = resultObj['toVal'];
        var toNumFld = document.getElementById(toNumField);
        if (toNumField === 'convertToNum') this.convToNum_ = true;else this.convFromNum_ = true; // Store the full result value number received so that we have it if a
        // larger number of digits is subsequently requested.

        this.lastResult_ = toVal; // convert the value to a fixed value with the specified number of
        // decimal digits.  Remove trailing zeroes
        //toVal = toVal.toFixed(decDigits).replace(/\.?0+$/, "");
        // ----- OR ----
        // convert the value to a fixed value with the specified number of
        // decimal digits.  Do not remove trailing zeroes
        // toVal = toVal.toFixed(decDigits);
        // ----- OR ----
        // convert the value to a value with 16 significant digits.  Use
        // 16 to avoid floating point rounding errors
        // if before/after parseFloat are not equal, show precision chooser
        // otherwise don't.   Only modify last result value

        var precVal = parseFloat(toVal.toPrecision(UcumDemoConfig.defaultPrecision_));
        toNumFld.value = precVal; // The precision chooser is on hold.  Don't display.
        //if (precVal !== toVal) {
        //  precLine.style.visibility = "visible";
        //}
        // If a message was returned, write that to the message area.  For a
        // successful conversion this might be a message about a substitution,
        // e.g., "2m is not a valid UCUM code.  We assumed you meant 2.m"

        if (resultObj['msg'].length > 0) {
          resultMsg = resultObj['msg'].join('<BR>');
        }
      } // Else if an error was signalled, transfer the error message to
      // the result field
      else if (resultObj['status'] === 'error') {
          resultMsg = 'Sorry - an error occurred while trying to ' + 'perform the conversion.';
        } // Else result status was failed.  Either a molecular weight is needed
        // for a mass<->moles conversion or 1 or more invalid unit expressions
        // were found (status = 'failed')
        else {
            if (resultObj['msg']) {
              var idx = resultObj['msg'].indexOf(Ucum.needMoleWeightMsg_);

              if (idx >= 0) {
                this._requestMolecularWeight();

                resultObj['msg'].splice(idx, 1);
                if (resultObj['msg'].length > 0) resultMsg = resultObj['msg'].join('<BR>');else resultMsg = '';
              } else {
                resultMsg = resultObj['msg'].join('<BR>');
              }
            } // if suggestions were found, output the suggestions to the suggestions
            // field


            if (resultObj['suggestions']) {
              var suggsSetString = this._suggSetOutput(resultObj['suggestions']);

              if (fromName !== escFromName && fromName !== '') {
                suggsSetString = this._multipleReplace(suggsSetString, fromName, escFromName);
              }

              if (toName !== escToName && toName !== '') {
                suggsSetString = this._multipleReplace(suggsSetString, toName, escToName);
              }

              suggsField.innerHTML = suggsSetString;
              suggsField.style.display = 'block';
            } // end if there were suggestions

          } // end if conversion did/didn't succeed


      if (resultMsg !== '') {
        if (fromName !== escFromName && fromName !== '') {
          resultMsg = this._multipleReplace(resultMsg, fromName, escFromName);
        }

        if (toName !== escToName && toName !== '') {
          resultMsg = this._multipleReplace(resultMsg, toName, escToName);
        }

        msgField.innerHTML = resultMsg;
      }
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
    key: "getCommensurables",
    value: function getCommensurables(fromField, toField, resultField) {
      this.utils_.useHTMLInMessages(true);
      this.utils_.useBraceMsgForEachString(true);
      var resultMsg = [];
      var toFld = document.getElementById(toField);
      toFld.innerHTML = '';
      this.toAuto_.setList('');
      var resultString = document.getElementById(resultField);
      resultString.innerHTML = '';
      var fromName = document.getElementById(fromField).value;
      var escFromName = escapeHtml(fromName);

      if (fromName === '' || fromName === null) {
        resultMsg.push('Please specify a code for the units you want to convert.');
      } else {
        var hypIdx = fromName.indexOf(Ucum.codeSep_);
        if (hypIdx > 0) fromName = fromName.substr(0, hypIdx);
        var parseResp = [];

        try {
          parseResp = this.utils_.commensurablesList(fromName);
          var commUnits = parseResp[0];
          resultMsg = parseResp[1]; // If we can't find any, don't panic.  The user could still enter one
          // that's not on our list but is commensurable.  So if none are found,
          // just make sure the text about commensurable units is hidden.

          var commText = document.getElementById('convertRight');

          if (commUnits) {
            var cLen = commUnits.length;
            var commNames = [];

            for (var i = 0; i < cLen; i++) {
              commNames[i] = commUnits[i].getProperty('csCode_') + Ucum.codeSep_ + commUnits[i].getProperty('name_');
            }

            commNames.sort(this.utabs_.compareCodes);
            this.toAuto_.setList(commNames);
            commText.style.visibility = "visible";
          } else commText.style.visibility = "hidden";
        } catch (err) {
          resultMsg.push(err.message);
        }
      }

      if (resultMsg.length > 0) {
        resultMsg = resultMsg.join('<BR>');

        if (fromName !== escFromName && fromName !== '') {
          resultMsg = this._multipleReplace(resultMsg, fromName, escFromName);
        }

        resultString.innerHTML = resultMsg;
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
    key: "toggleDisplay",
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
      } // end if we got the target element

    } // end toggleDisplay

    /**
     *  This method responds to the user's request to validate unit strings in
     *  a file.  When the user clicks on the inputfile button on the demo page,
     *  a file selector box is displayed.  When the user selects a file and clicks
     *  on the "Open" button, this method is called to display the column name
     *  division, which is hidden until the file is selected.
     */

  }, {
    key: "fileSelected",
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
    key: "columnSpecified",
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
    key: "initiateDownload",
    value: function initiateDownload(bUrl) {
      // create the download element,  give it the default file name to
      // create, and append it to the document.
      var a = document.createElement('a');
      a.id = 'downlink';
      a.href = bUrl;
      a.download = 'UnitStringValidations.csv';
      document.body.appendChild(a); // add a listener that gets rid of the download link once the
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

      window.addEventListener('focus', windowFocus, false); // Click on the download link to initiate display of the box and
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
     * It also clears the file name from the input file field.  The display of
     * the column name division is also blocked.
     *
     * @param src the source of the error - which should be the stream in which
     *  the error was encountered
     * @param err the error text
     *
    */

  }, {
    key: "fileValidationError",
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
    key: "resetFileInput",
    value: function resetFileInput() {
      var dia = document.getElementById("inputfile");
      dia.value = '';
      var colDiv = document.getElementById('colNameDiv');
      colDiv.setAttribute('style', 'display:none');
    }
    /**
     * This creates HTML output text for an array of suggestion sets.  A
     * suggestion set is returned by the parsing code for each suggestion
     * found (when suggestions were requested for unit strings found to be
     * invalid).  Each set is a hash object that includes two elements:
     *   'msg' - which is a message identifying the problem string; and
     *   'units' - which is an array of arrays, where each inner array is
     *             created for each suggestion.  The inner arrays contain
     *             the unit code, name and guidance text (if any) for a
     *             suggested unit.
     *
     * @param suggSet the array of sets for which to create HTML output text
     * @returns {string} the string containing the HTML
     * @private
     */

  }, {
    key: "_suggSetOutput",
    value: function _suggSetOutput(suggSet) {
      var suggString = '';

      for (var s = 0; s < suggSet.length; s++) {
        suggString += suggSet[s]['msg'] + '<ul>';

        for (var u = 0; u < suggSet[s]['units'].length; u++) {
          suggString += '<li>' + suggSet[s]['units'][u].join(', ') + '</li>';
        } // end do for each unit


        suggString += '</ul>';
      }

      return suggString;
    } // end suggSetOutput

    /**
     * This replaces multiple occurrences of a string within a string.
     * This was created at Paul Lynch's request.
     *
     * @param targetString the string containing the value to be replaced
     * @param toReplace the value to be replaced
     * @param replaceWith the value to replace toReplace
     * @returns {string} the string containing the replaced values
     * @private
     */

  }, {
    key: "_multipleReplace",
    value: function _multipleReplace(targetString, toReplace, replaceWith) {
      return targetString.replace(new RegExp(toReplace.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"), "g"), replaceWith);
    } // end _multipleReplace

    /**
     * This makes sure that the unit name areas on the unit
     * conversion tab (under the unit code input fields) are
     * the same heights).
     *
     * @private
     */

  }, {
    key: "_sizeNameDivs",
    value: function _sizeNameDivs() {
      var left = document.getElementById("convertFromName");
      var leftHeight = left.offsetHeight;
      var right = document.getElementById("convertToName");
      var rightHeight = right.offsetHeight;

      if (right.innerHTML === '' && left.innerHTML === '') {
        right.style.height = '0px';
        left.style.height = '0px';
      } else {
        if (leftHeight > rightHeight) {
          right.style.height = leftHeight + 'px';
        } else if (rightHeight > leftHeight) {
          left.style.height = rightHeight + 'px';
        }
      }
    } // end _sizeNameDivs

    /**
     * This makes the division with the request for molecular weight
     * visible.
     *
     * @private
     */

  }, {
    key: "_requestMolecularWeight",
    value: function _requestMolecularWeight() {
      var weightDiv = document.getElementById('molecular-weight');
      weightDiv.style.visibility = 'visible';
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


exports.UcumDemo = UcumDemo;

UcumDemo.getInstance = function () {
  return new UcumDemo();
}; // Perform the first request for the demo object, to get the
// getInstance method set.


UcumDemo.getInstance();

},{"./demoConfig.js":1,"./ucumFileValidator.js":4,"browserify-fs":15,"escape-html":28}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UcumFileValidator = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * This validates unit strings found in a column in a csv (comma separated values)
 * file and returns the validation result in specified columns added to the
 * file.  This uses the node-csv package (https://github.com/wdavidw/node-csv)
 * to handle the input and output processing.
 *
 */
var fs = require('browserify-fs');

var stream = require('stream');

var parse = require('csv-parse');

var transform = require('stream-transform');

var stringify = require('csv-stringify');

var str = require('string-to-stream');

var UcumLhcUtils = ucumPkg.UcumLhcUtils;
var Ucum = ucumPkg.Ucum;

var UcumFileValidator =
/*#__PURE__*/
function () {
  function UcumFileValidator() {
    _classCallCheck(this, UcumFileValidator);

    // Make this a singleton.  See UnitTables constructor for details.
    var holdThis = UcumFileValidator.prototype;

    UcumFileValidator = function UcumFileValidator() {
      throw new Error('UcumFileValidator is a Singleton.  ' + 'Use UcumFileValidator.getInstance() instead.');
    };

    if (exports) exports.UcumFileValidator = UcumFileValidator;
    UcumFileValidator.prototype = holdThis;
    var self = this;

    UcumFileValidator.getInstance = function () {
      return self;
    };
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


  _createClass(UcumFileValidator, [{
    key: "validateFile",
    value: function validateFile(inputFile, sourceCol, fileSaveFunction, msgHandler) {
      var unitTestedCol = 'Unit String Tested';
      var resultCol = 'Validation Result';
      var commentCol = 'Notes'; // The file reader reads the input file into the str readable stream

      var reader = new FileReader();
      reader.readAsText(inputFile);
      var utils = UcumLhcUtils.getInstance(); // The parser pulls each row out of the readable stream and passes it
      // along the pipeline to the transformer as a hash

      var parser = parse({
        columns: true
      }); // The transformer receives each row from the parser.  It calls the code
      // to validate the string found in the specified source
      // column and places the results in the specified result columns.  The
      // updated hash is passed along the pipeline to the stringifier.

      var transformer = transform(function (record) {
        if (record[sourceCol] === undefined) {
          transformer.emit('error', 'The ' + sourceCol + ' column was not ' + 'found in the file.  Validation is not possible.');
        } else {
          var uStr = record[sourceCol];
          var parseResp = [];
          record[unitTestedCol] = uStr;

          try {
            var _parseResp = utils.validateUnitString(uStr, true);

            if (_parseResp['status'] === 'valid') record[resultCol] = _parseResp['ucumCode'] + " is a valid UCUM unit.";else record[resultCol] = uStr + " is not a valid UCUM unit.";
            record[commentCol] = '';

            if (_parseResp['msg'] && _parseResp['msg'].length > 0) {
              record[commentCol] = _parseResp['msg'].join('; ');
              if (_parseResp['suggestions']) record[commentCol] += '\n';
            }

            if (_parseResp['suggestions']) {
              var suggSet = _parseResp['suggestions'];
              var suggString = '';

              for (var s = 0; s < suggSet.length; s++) {
                suggString += suggSet[s]['msg'] + '\n';

                for (var u = 0; u < suggSet[s]['units'].length; u++) {
                  suggString += suggSet[s]['units'][u].join(', ') + '\n';
                } // end do for each unit

              }

              record[commentCol] = suggString;
            }
          } catch (err) {
            record[resultCol] = 'ERROR';
            record[commentCol] = err.message;
          }
        }

        return record;
      }); // end transform function
      // The stringifier gets the updated hash from the transformer and
      // puts it into csv format, then passes it along the pipeline to the
      // output stream.

      var stringifier = stringify({
        header: true
      }); // The output stream gets the csv formatted row and writes it to the
      // stream's data buffer.

      var outStream = new stream.Writable({
        objectMode: true
      });
      outStream.data = '*' + Ucum.bracesMsg_ + '\r\n';

      outStream._write = function (record, encoding, done) {
        this.data += record;
        done();
      }; // When all the data has been written to the output stream, create a Blob
      // object from the data string and an Object URL for the Blob.  Then pass
      // the URL to the function that will actually save the blob to a file.


      var blob = '';
      var bUrl = null;
      outStream.on('finish', function () {
        blob = new Blob([this.data], {
          type: 'text/csv'
        });
        bUrl = URL.createObjectURL(blob);
        fileSaveFunction(bUrl);
      }); // Start the data moving once the file reader is ready (has read in all
      // the data).

      var intSet = setInterval(pipeFunc, 10);

      function pipeFunc() {
        if (reader.readyState == FileReader.DONE) {
          clearInterval(intSet);
          str(reader.result).on('error', function (err) {
            msgHandler('inputStream', err);
          }).pipe(parser).on('error', function (err) {
            msgHandler('parser', err);
          }).pipe(transformer).on('error', function (err) {
            msgHandler('transformer', err);
          }).pipe(stringifier).on('error', function (err) {
            msgHandler('stringifier', err);
          }).pipe(outStream).on('error', function (err) {
            msgHandler('outStream', err);
          });
        }
      }

      ; // end pipeFunc
    } // end validateFile

  }]);

  return UcumFileValidator;
}(); // end UcumFileValidator

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


exports.UcumFileValidator = UcumFileValidator;

UcumFileValidator.getInstance = function () {
  return new UcumFileValidator();
}; // Perform the first request for the validator object, to get the
// getInstance method set.


UcumFileValidator.getInstance();

},{"browserify-fs":15,"csv-parse":22,"csv-stringify":23,"stream":116,"stream-transform":117,"string-to-stream":119}],5:[function(require,module,exports){
(function (process){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* Copyright (c) 2017 Rod Vagg, MIT License */
function AbstractChainedBatch(db) {
  this._db = db;
  this._operations = [];
  this._written = false;
}

AbstractChainedBatch.prototype._serializeKey = function (key) {
  return this._db._serializeKey(key);
};

AbstractChainedBatch.prototype._serializeValue = function (value) {
  return this._db._serializeValue(value);
};

AbstractChainedBatch.prototype._checkWritten = function () {
  if (this._written) {
    throw new Error('write() already called on this batch');
  }
};

AbstractChainedBatch.prototype.put = function (key, value) {
  this._checkWritten();

  var err = this._db._checkKey(key, 'key');

  if (err) {
    throw err;
  }

  key = this._serializeKey(key);
  value = this._serializeValue(value);

  this._put(key, value);

  return this;
};

AbstractChainedBatch.prototype._put = function (key, value) {
  this._operations.push({
    type: 'put',
    key: key,
    value: value
  });
};

AbstractChainedBatch.prototype.del = function (key) {
  this._checkWritten();

  var err = this._db._checkKey(key, 'key');

  if (err) {
    throw err;
  }

  key = this._serializeKey(key);

  this._del(key);

  return this;
};

AbstractChainedBatch.prototype._del = function (key) {
  this._operations.push({
    type: 'del',
    key: key
  });
};

AbstractChainedBatch.prototype.clear = function () {
  this._checkWritten();

  this._operations = [];

  this._clear();

  return this;
};

AbstractChainedBatch.prototype._clear = function noop() {};

AbstractChainedBatch.prototype.write = function (options, callback) {
  this._checkWritten();

  if (typeof options === 'function') {
    callback = options;
  }

  if (typeof callback !== 'function') {
    throw new Error('write() requires a callback argument');
  }

  if (_typeof(options) !== 'object') {
    options = {};
  }

  this._written = true; // @ts-ignore

  if (typeof this._write === 'function') {
    return this._write(callback);
  }

  if (typeof this._db._batch === 'function') {
    return this._db._batch(this._operations, options, callback);
  }

  process.nextTick(callback);
};

module.exports = AbstractChainedBatch;

}).call(this,require('_process'))

},{"_process":100}],6:[function(require,module,exports){
(function (process){
"use strict";

/* Copyright (c) 2017 Rod Vagg, MIT License */
function AbstractIterator(db) {
  this.db = db;
  this._ended = false;
  this._nexting = false;
}

AbstractIterator.prototype.next = function (callback) {
  var self = this;

  if (typeof callback !== 'function') {
    throw new Error('next() requires a callback argument');
  }

  if (self._ended) {
    process.nextTick(callback, new Error('cannot call next() after end()'));
    return self;
  }

  if (self._nexting) {
    process.nextTick(callback, new Error('cannot call next() before previous next() has completed'));
    return self;
  }

  self._nexting = true;

  self._next(function () {
    self._nexting = false;
    callback.apply(null, arguments);
  });

  return self;
};

AbstractIterator.prototype._next = function (callback) {
  process.nextTick(callback);
};

AbstractIterator.prototype.end = function (callback) {
  if (typeof callback !== 'function') {
    throw new Error('end() requires a callback argument');
  }

  if (this._ended) {
    return process.nextTick(callback, new Error('end() already called on iterator'));
  }

  this._ended = true;

  this._end(callback);
};

AbstractIterator.prototype._end = function (callback) {
  process.nextTick(callback);
};

module.exports = AbstractIterator;

}).call(this,require('_process'))

},{"_process":100}],7:[function(require,module,exports){
(function (Buffer,process){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* Copyright (c) 2017 Rod Vagg, MIT License */
var xtend = require('xtend');

var AbstractIterator = require('./abstract-iterator');

var AbstractChainedBatch = require('./abstract-chained-batch');

var hasOwnProperty = Object.prototype.hasOwnProperty;
var rangeOptions = 'start end gt gte lt lte'.split(' ');

function AbstractLevelDOWN(location) {
  if (!arguments.length || location === undefined) {
    throw new Error('constructor requires at least a location argument');
  }

  if (typeof location !== 'string') {
    throw new Error('constructor requires a location string argument');
  }

  this.location = location;
  this.status = 'new';
}

AbstractLevelDOWN.prototype.open = function (options, callback) {
  var self = this;
  var oldStatus = this.status;

  if (typeof options === 'function') {
    callback = options;
  }

  if (typeof callback !== 'function') {
    throw new Error('open() requires a callback argument');
  }

  if (_typeof(options) !== 'object') {
    options = {};
  }

  options.createIfMissing = options.createIfMissing !== false;
  options.errorIfExists = !!options.errorIfExists;
  this.status = 'opening';

  this._open(options, function (err) {
    if (err) {
      self.status = oldStatus;
      return callback(err);
    }

    self.status = 'open';
    callback();
  });
};

AbstractLevelDOWN.prototype._open = function (options, callback) {
  process.nextTick(callback);
};

AbstractLevelDOWN.prototype.close = function (callback) {
  var self = this;
  var oldStatus = this.status;

  if (typeof callback !== 'function') {
    throw new Error('close() requires a callback argument');
  }

  this.status = 'closing';

  this._close(function (err) {
    if (err) {
      self.status = oldStatus;
      return callback(err);
    }

    self.status = 'closed';
    callback();
  });
};

AbstractLevelDOWN.prototype._close = function (callback) {
  process.nextTick(callback);
};

AbstractLevelDOWN.prototype.get = function (key, options, callback) {
  if (typeof options === 'function') {
    callback = options;
  }

  if (typeof callback !== 'function') {
    throw new Error('get() requires a callback argument');
  }

  var err = this._checkKey(key, 'key');

  if (err) return process.nextTick(callback, err);
  key = this._serializeKey(key);

  if (_typeof(options) !== 'object') {
    options = {};
  }

  options.asBuffer = options.asBuffer !== false;

  this._get(key, options, callback);
};

AbstractLevelDOWN.prototype._get = function (key, options, callback) {
  process.nextTick(function () {
    callback(new Error('NotFound'));
  });
};

AbstractLevelDOWN.prototype.put = function (key, value, options, callback) {
  if (typeof options === 'function') {
    callback = options;
  }

  if (typeof callback !== 'function') {
    throw new Error('put() requires a callback argument');
  }

  var err = this._checkKey(key, 'key');

  if (err) return process.nextTick(callback, err);
  key = this._serializeKey(key);
  value = this._serializeValue(value);

  if (_typeof(options) !== 'object') {
    options = {};
  }

  this._put(key, value, options, callback);
};

AbstractLevelDOWN.prototype._put = function (key, value, options, callback) {
  process.nextTick(callback);
};

AbstractLevelDOWN.prototype.del = function (key, options, callback) {
  if (typeof options === 'function') {
    callback = options;
  }

  if (typeof callback !== 'function') {
    throw new Error('del() requires a callback argument');
  }

  var err = this._checkKey(key, 'key');

  if (err) return process.nextTick(callback, err);
  key = this._serializeKey(key);

  if (_typeof(options) !== 'object') {
    options = {};
  }

  this._del(key, options, callback);
};

AbstractLevelDOWN.prototype._del = function (key, options, callback) {
  process.nextTick(callback);
};

AbstractLevelDOWN.prototype.batch = function (array, options, callback) {
  if (!arguments.length) {
    return this._chainedBatch();
  }

  if (typeof options === 'function') {
    callback = options;
  }

  if (typeof array === 'function') {
    callback = array;
  }

  if (typeof callback !== 'function') {
    throw new Error('batch(array) requires a callback argument');
  }

  if (!Array.isArray(array)) {
    return process.nextTick(callback, new Error('batch(array) requires an array argument'));
  }

  if (!options || _typeof(options) !== 'object') {
    options = {};
  }

  var serialized = new Array(array.length);

  for (var i = 0; i < array.length; i++) {
    if (_typeof(array[i]) !== 'object' || array[i] === null) {
      return process.nextTick(callback, new Error('batch(array) element must be an object and not `null`'));
    }

    var e = xtend(array[i]);

    if (e.type !== 'put' && e.type !== 'del') {
      return process.nextTick(callback, new Error("`type` must be 'put' or 'del'"));
    }

    var err = this._checkKey(e.key, 'key');

    if (err) return process.nextTick(callback, err);
    e.key = this._serializeKey(e.key);

    if (e.type === 'put') {
      e.value = this._serializeValue(e.value);
    }

    serialized[i] = e;
  }

  this._batch(serialized, options, callback);
};

AbstractLevelDOWN.prototype._batch = function (array, options, callback) {
  process.nextTick(callback);
};

AbstractLevelDOWN.prototype._setupIteratorOptions = function (options) {
  options = cleanRangeOptions(options);
  options.reverse = !!options.reverse;
  options.keys = options.keys !== false;
  options.values = options.values !== false;
  options.limit = 'limit' in options ? options.limit : -1;
  options.keyAsBuffer = options.keyAsBuffer !== false;
  options.valueAsBuffer = options.valueAsBuffer !== false;
  return options;
};

function cleanRangeOptions(options) {
  var result = {};

  for (var k in options) {
    if (!hasOwnProperty.call(options, k)) continue;
    if (isRangeOption(k) && isEmptyRangeOption(options[k])) continue;
    result[k] = options[k];
  }

  return result;
}

function isRangeOption(k) {
  return rangeOptions.indexOf(k) !== -1;
}

function isEmptyRangeOption(v) {
  return v === '' || v == null || isEmptyBuffer(v);
}

function isEmptyBuffer(v) {
  return Buffer.isBuffer(v) && v.length === 0;
}

AbstractLevelDOWN.prototype.iterator = function (options) {
  if (_typeof(options) !== 'object') {
    options = {};
  }

  options = this._setupIteratorOptions(options);
  return this._iterator(options);
};

AbstractLevelDOWN.prototype._iterator = function (options) {
  return new AbstractIterator(this);
};

AbstractLevelDOWN.prototype._chainedBatch = function () {
  return new AbstractChainedBatch(this);
};

AbstractLevelDOWN.prototype._serializeKey = function (key) {
  return Buffer.isBuffer(key) ? key : String(key);
};

AbstractLevelDOWN.prototype._serializeValue = function (value) {
  if (value == null) return '';
  return Buffer.isBuffer(value) || process.browser ? value : String(value);
};

AbstractLevelDOWN.prototype._checkKey = function (obj, type) {
  if (obj === null || obj === undefined) {
    return new Error(type + ' cannot be `null` or `undefined`');
  }

  if (Buffer.isBuffer(obj) && obj.length === 0) {
    return new Error(type + ' cannot be an empty Buffer');
  }

  if (String(obj) === '') {
    return new Error(type + ' cannot be an empty String');
  }
};

module.exports = AbstractLevelDOWN;

}).call(this,{"isBuffer":require("../is-buffer/index.js")},require('_process'))

},{"../is-buffer/index.js":50,"./abstract-chained-batch":5,"./abstract-iterator":6,"_process":100,"xtend":129}],8:[function(require,module,exports){
"use strict";

exports.AbstractLevelDOWN = require('./abstract-leveldown');
exports.AbstractIterator = require('./abstract-iterator');
exports.AbstractChainedBatch = require('./abstract-chained-batch');

},{"./abstract-chained-batch":5,"./abstract-iterator":6,"./abstract-leveldown":7}],9:[function(require,module,exports){
(function (global){
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var objectAssign = require('object-assign'); // compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */


function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }

  if (y < x) {
    return 1;
  }

  return 0;
}

function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }

  return !!(b != null && b._isBuffer);
} // based on node assert, original notice:
// NB: The URL to the CommonJS spec is kept just for tradition.
//     node-assert has evolved a lot since then, both in API and behavior.
// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


var util = require('util/');

var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;

var functionsHaveNames = function () {
  return function foo() {}.name === 'foo';
}();

function pToString(obj) {
  return Object.prototype.toString.call(obj);
}

function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }

  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }

  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }

  if (!arrbuf) {
    return false;
  }

  if (arrbuf instanceof DataView) {
    return true;
  }

  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }

  return false;
} // 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.


var assert = module.exports = ok; // 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/; // based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js

function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }

  if (functionsHaveNames) {
    return func.name;
  }

  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}

assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;

  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }

  var stackStartFunction = options.stackStartFunction || fail;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();

    if (err.stack) {
      var out = err.stack; // try to strip useless frames

      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);

      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
}; // assert.AssertionError instanceof Error


util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}

function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }

  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' + name + ']';
}

function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' + self.operator + ' ' + truncate(inspect(self.expected), 128);
} // At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.
// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.


function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
} // EXTENSION! allows for well behaved errors defined elsewhere.


assert.fail = fail; // 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}

assert.ok = ok; // 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
}; // 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);


assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
}; // 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);


assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0; // 7.2. If the expected value is a Date object, the actual value is
    // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime(); // 7.3 If the expected value is a RegExp object, the actual value is
    // equivalent if it is also a RegExp object with the same source and
    // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase; // 7.4. Other pairs that do not both pass typeof value == 'object',
    // equivalence is determined by ==.
  } else if ((actual === null || _typeof(actual) !== 'object') && (expected === null || _typeof(expected) !== 'object')) {
    return strict ? actual === expected : actual == expected; // If both values are instances of typed arrays, wrap their underlying
    // ArrayBuffers in a Buffer each to increase performance
    // This optimization requires the arrays to have the same type as checked by
    // Object.prototype.toString (aka pToString). Never perform binary
    // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
    // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) && pToString(actual) === pToString(expected) && !(actual instanceof Float32Array || actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer), new Uint8Array(expected.buffer)) === 0; // 7.5 For all other Object pairs, including Array objects, equivalence is
    // determined by having the same number of owned properties (as verified
    // with Object.prototype.hasOwnProperty.call), the same set of keys
    // (although not necessarily the same order), equivalent values for every
    // corresponding key, and an identical 'prototype' property. Note: this
    // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {
      actual: [],
      expected: []
    };
    var actualIndex = memos.actual.indexOf(actual);

    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);
    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined) return false; // if one is a primitive, the other must be same

  if (util.isPrimitive(a) || util.isPrimitive(b)) return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if (aIsArgs && !bIsArgs || !aIsArgs && bIsArgs) return false;

  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }

  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i; // having the same number of owned properties (keys incorporates
  // hasOwnProperty)

  if (ka.length !== kb.length) return false; //the same set of keys (although not necessarily the same order),

  ka.sort();
  kb.sort(); //~~~cheap key test

  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i]) return false;
  } //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test


  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects)) return false;
  }

  return true;
} // 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);


assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;

function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
} // 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);


assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
}; // 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);


assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {// Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;

  try {
    block();
  } catch (e) {
    error = e;
  }

  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);
  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') + (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if (isUnwantedException && userProvidedMessage && expectedException(actual, expected) || isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if (shouldThrow && actual && expected && !expectedException(actual, expected) || !shouldThrow && actual) {
    throw actual;
  }
} // 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);


assert.throws = function (block,
/*optional*/
error,
/*optional*/
message) {
  _throws(true, block, error, message);
}; // EXTENSION! This is annoying to write outside this module.


assert.doesNotThrow = function (block,
/*optional*/
error,
/*optional*/
message) {
  _throws(false, block, error, message);
};

assert.ifError = function (err) {
  if (err) throw err;
}; // Expose a strict only variant of assert


function strict(value, message) {
  if (!value) fail(value, true, message, '==', strict);
}

assert.strict = objectAssign(strict, assert, {
  equal: assert.strictEqual,
  deepEqual: assert.deepStrictEqual,
  notEqual: assert.notStrictEqual,
  notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

var objectKeys = Object.keys || function (obj) {
  var keys = [];

  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }

  return keys;
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"object-assign":95,"util/":12}],10:[function(require,module,exports){
"use strict";

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;

    var TempCtor = function TempCtor() {};

    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}

},{}],11:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function isBuffer(arg) {
  return arg && _typeof(arg) === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

},{}],12:[function(require,module,exports){
(function (process,global){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var formatRegExp = /%[sdj%]/g;

exports.format = function (f) {
  if (!isString(f)) {
    var objects = [];

    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }

    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function (x) {
    if (x === '%%') return '%';
    if (i >= len) return x;

    switch (x) {
      case '%s':
        return String(args[i++]);

      case '%d':
        return Number(args[i++]);

      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }

      default:
        return x;
    }
  });

  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }

  return str;
}; // Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.


exports.deprecate = function (fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function () {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;

  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }

      warned = true;
    }

    return fn.apply(this, arguments);
  }

  return deprecated;
};

var debugs = {};
var debugEnviron;

exports.debuglog = function (set) {
  if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();

  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;

      debugs[set] = function () {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function () {};
    }
  }

  return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */

/* legacy: obj, showHidden, depth, colors*/


function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  }; // legacy...

  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];

  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  } // set default options


  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}

exports.inspect = inspect; // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

inspect.colors = {
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],
  'white': [37, 39],
  'grey': [90, 39],
  'black': [30, 39],
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
}; // Don't use 'blue' not visible on cmd.exe

inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};

function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return "\x1B[" + inspect.colors[style][0] + 'm' + str + "\x1B[" + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}

function stylizeNoColor(str, styleType) {
  return str;
}

function arrayToHash(array) {
  var hash = {};
  array.forEach(function (val, idx) {
    hash[val] = true;
  });
  return hash;
}

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
  value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);

    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }

    return ret;
  } // Primitive types cannot have properties


  var primitive = formatPrimitive(ctx, value);

  if (primitive) {
    return primitive;
  } // Look up the keys of the object.


  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  } // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  } // Some type of object without properties can be shortcutted.


  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }

    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }

    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }

    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '',
      array = false,
      braces = ['{', '}']; // Make Array say that they are Array

  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  } // Make functions say that they are functions


  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  } // Make RegExps say that they are RegExps


  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  } // Make dates with properties first say the date


  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  } // Make error with message first say the error


  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);
  var output;

  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function (key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();
  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }

  if (isNumber(value)) return ctx.stylize('' + value, 'number');
  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

  if (isNull(value)) return ctx.stylize('null', 'null');
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];

  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }

  keys.forEach(function (key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || {
    value: value[key]
  };

  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }

  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }

  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }

      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function (line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function (line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }

  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }

    name = JSON.stringify('' + key);

    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function (prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
} // NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.


function isArray(ar) {
  return Array.isArray(ar);
}

exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}

exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}

exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}

exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}

exports.isString = isString;

function isSymbol(arg) {
  return _typeof(arg) === 'symbol';
}

exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}

exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}

exports.isRegExp = isRegExp;

function isObject(arg) {
  return _typeof(arg) === 'object' && arg !== null;
}

exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}

exports.isDate = isDate;

function isError(e) {
  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}

exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}

exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || _typeof(arg) === 'symbol' || // ES6 symbol
  typeof arg === 'undefined';
}

exports.isPrimitive = isPrimitive;
exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
} // log is just a thin wrapper to console.log that prepends a timestamp


exports.log = function () {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */


exports.inherits = require('inherits');

exports._extend = function (origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;
  var keys = Object.keys(add);
  var i = keys.length;

  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }

  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./support/isBuffer":11,"_process":100,"inherits":10}],13:[function(require,module,exports){
'use strict';

exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
} // Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications


revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens(b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  } // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42


  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
} // base64 is 4/3 + up to two characters of the original data


function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
  var i;

  for (i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];

  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }

  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3
  // go through the array every three bytes, we'll deal with trailing stuff later

  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  } // pad the end with zeros, but make sure to not forget the extra bytes


  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }

  return parts.join('');
}

},{}],14:[function(require,module,exports){
"use strict";

},{}],15:[function(require,module,exports){
"use strict";

var leveljs = require('level-js');

var levelup = require('levelup');

var fs = require('level-filesystem');

var db = levelup(leveljs('level-filesystem'));
module.exports = fs(db);

},{"level-filesystem":66,"level-js":75,"levelup":91}],16:[function(require,module,exports){
(function (Buffer){
"use strict";

var toString = Object.prototype.toString;
var isModern = typeof Buffer.alloc === 'function' && typeof Buffer.allocUnsafe === 'function' && typeof Buffer.from === 'function';

function isArrayBuffer(input) {
  return toString.call(input).slice(8, -1) === 'ArrayBuffer';
}

function fromArrayBuffer(obj, byteOffset, length) {
  byteOffset >>>= 0;
  var maxLength = obj.byteLength - byteOffset;

  if (maxLength < 0) {
    throw new RangeError("'offset' is out of bounds");
  }

  if (length === undefined) {
    length = maxLength;
  } else {
    length >>>= 0;

    if (length > maxLength) {
      throw new RangeError("'length' is out of bounds");
    }
  }

  return isModern ? Buffer.from(obj.slice(byteOffset, byteOffset + length)) : new Buffer(new Uint8Array(obj.slice(byteOffset, byteOffset + length)));
}

function fromString(string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  return isModern ? Buffer.from(string, encoding) : new Buffer(string, encoding);
}

function bufferFrom(value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (isArrayBuffer(value)) {
    return fromArrayBuffer(value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset);
  }

  return isModern ? Buffer.from(value) : new Buffer(value);
}

module.exports = bufferFrom;

}).call(this,require("buffer").Buffer)

},{"buffer":17}],17:[function(require,module,exports){
(function (Buffer){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

/* eslint-disable no-proto */
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var base64 = require('base64-js');

var ieee754 = require('ieee754');

var customInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
var K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */

Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') {
  console.error('This browser lacks typed array (Uint8Array) support which is required by ' + '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
}

function typedArraySupport() {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1);
    var proto = {
      foo: function foo() {
        return 42;
      }
    };
    Object.setPrototypeOf(proto, Uint8Array.prototype);
    Object.setPrototypeOf(arr, proto);
    return arr.foo() === 42;
  } catch (e) {
    return false;
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function get() {
    if (!Buffer.isBuffer(this)) return undefined;
    return this.buffer;
  }
});
Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function get() {
    if (!Buffer.isBuffer(this)) return undefined;
    return this.byteOffset;
  }
});

function createBuffer(length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"');
  } // Return an augmented `Uint8Array` instance


  var buf = new Uint8Array(length);
  Object.setPrototypeOf(buf, Buffer.prototype);
  return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */


function Buffer(arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError('The "string" argument must be of type string. Received type number');
    }

    return allocUnsafe(arg);
  }

  return from(arg, encodingOrOffset, length);
} // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97


if (typeof Symbol !== 'undefined' && Symbol.species != null && Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  });
}

Buffer.poolSize = 8192; // not used by this implementation

function from(value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset);
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value);
  }

  if (value == null) {
    throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + _typeof(value));
  }

  if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
    return fromArrayBuffer(value, encodingOrOffset, length);
  }

  if (typeof value === 'number') {
    throw new TypeError('The "value" argument must not be of type number. Received type number');
  }

  var valueOf = value.valueOf && value.valueOf();

  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length);
  }

  var b = fromObject(value);
  if (b) return b;

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
  }

  throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + _typeof(value));
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/


Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length);
}; // Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148


Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number');
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"');
  }
}

function alloc(size, fill, encoding) {
  assertSize(size);

  if (size <= 0) {
    return createBuffer(size);
  }

  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
  }

  return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/


Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding);
};

function allocUnsafe(size) {
  assertSize(size);
  return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */


Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */


Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size);
};

function fromString(string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding);
  }

  var length = byteLength(string, encoding) | 0;
  var buf = createBuffer(length);
  var actual = buf.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
  }

  return buf;
}

function fromArrayLike(array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  var buf = createBuffer(length);

  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255;
  }

  return buf;
}

function fromArrayBuffer(array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds');
  }

  var buf;

  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array);
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset);
  } else {
    buf = new Uint8Array(array, byteOffset, length);
  } // Return an augmented `Uint8Array` instance


  Object.setPrototypeOf(buf, Buffer.prototype);
  return buf;
}

function fromObject(obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    var buf = createBuffer(len);

    if (buf.length === 0) {
      return buf;
    }

    obj.copy(buf, 0, 0, len);
    return buf;
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0);
    }

    return fromArrayLike(obj);
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data);
  }
}

function checked(length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
  }

  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }

  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return b != null && b._isBuffer === true && b !== Buffer.prototype; // so Buffer.isBuffer(Buffer.prototype) will be false
};

Buffer.compare = function compare(a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);

  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
  }

  if (a === b) return 0;
  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;

  if (length === undefined) {
    length = 0;

    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;

  for (i = 0; i < list.length; ++i) {
    var buf = list[i];

    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf);
    }

    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    buf.copy(buffer, pos);
    pos += buf.length;
  }

  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }

  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength;
  }

  if (typeof string !== 'string') {
    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + 'Received type ' + _typeof(string));
  }

  var len = string.length;
  var mustMatch = arguments.length > 2 && arguments[2] === true;
  if (!mustMatch && len === 0) return 0; // Use a for loop to avoid recursion

  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;

      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length;

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;

      case 'hex':
        return len >>> 1;

      case 'base64':
        return base64ToBytes(string).length;

      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length; // assume utf8
        }

        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}

Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.
  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

  if (start === undefined || start < 0) {
    start = 0;
  } // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.


  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
} // This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154


Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;

  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }

  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }

  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;

  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }

  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }

  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;

  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }

  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }

  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.toLocaleString = Buffer.prototype.toString;

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
  if (this.length > max) str += ' ... ';
  return '<Buffer ' + str + '>';
};

if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
}

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength);
  }

  if (!Buffer.isBuffer(target)) {
    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + 'Received type ' + _typeof(target));
  }

  if (start === undefined) {
    start = 0;
  }

  if (end === undefined) {
    end = target ? target.length : 0;
  }

  if (thisStart === undefined) {
    thisStart = 0;
  }

  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }

  if (thisStart >= thisEnd) {
    return -1;
  }

  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
}; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf


function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1; // Normalize byteOffset

  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }

  byteOffset = +byteOffset; // Coerce to Number.

  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  } // Normalize byteOffset: negative offsets start from the end of the buffer


  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  } // Normalize val


  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  } // Finally, search either indexOf (if dir is true) or lastIndexOf


  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }

    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]

    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }

    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();

    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }

      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;

  if (dir) {
    var foundIndex = -1;

    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

    for (i = byteOffset; i >= 0; i--) {
      var found = true;

      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }

      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  }

  var strLen = string.length;

  if (length > strLen / 2) {
    length = strLen / 2;
  }

  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (numberIsNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }

  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0; // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0; // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0;

    if (isFinite(length)) {
      length = length >>> 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';
  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;

  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }

          break;

        case 2:
          secondByte = buf[i + 1];

          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }

      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
} // Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety


var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;

  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  } // Decode in chunks to avoid "call stack size exceeded".


  var res = '';
  var i = 0;

  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }

  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }

  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }

  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';

  for (var i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]];
  }

  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';

  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }

  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;
  var newBuf = this.subarray(start, end); // Return an augmented `Uint8Array` instance

  Object.setPrototypeOf(newBuf, Buffer.prototype);
  return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */


function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;

  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;

  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];

  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;
  byteLength = byteLength >>> 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  this[offset] = value & 0xff;
  this[offset + 1] = value >>> 8;
  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  this[offset] = value >>> 8;
  this[offset + 1] = value & 0xff;
  return offset + 2;
};

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  this[offset + 3] = value >>> 24;
  this[offset + 2] = value >>> 16;
  this[offset + 1] = value >>> 8;
  this[offset] = value & 0xff;
  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  this[offset] = value >>> 24;
  this[offset + 1] = value >>> 16;
  this[offset + 2] = value >>> 8;
  this[offset + 3] = value & 0xff;
  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset >>> 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  this[offset] = value & 0xff;
  this[offset + 1] = value >>> 8;
  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  this[offset] = value >>> 8;
  this[offset + 1] = value & 0xff;
  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  this[offset] = value & 0xff;
  this[offset + 1] = value >>> 8;
  this[offset + 2] = value >>> 16;
  this[offset + 3] = value >>> 24;
  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  this[offset] = value >>> 24;
  this[offset + 1] = value >>> 16;
  this[offset + 2] = value >>> 8;
  this[offset + 3] = value & 0xff;
  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  value = +value;
  offset = offset >>> 0;

  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  value = +value;
  offset = offset >>> 0;

  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }

  if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;

  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
  }

  return len;
}; // Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])


Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }

    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }

    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }

    if (val.length === 1) {
      var code = val.charCodeAt(0);

      if (encoding === 'utf8' && code < 128 || encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code;
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } else if (typeof val === 'boolean') {
    val = Number(val);
  } // Invalid ranges are not set to a default, so can range check early.


  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;

  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
    var len = bytes.length;

    if (len === 0) {
      throw new TypeError('The value "' + val + '" is invalid for argument "value"');
    }

    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
}; // HELPER FUNCTIONS
// ================


var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]; // Node strips out invalid characters like \n and \t from the string, base64-js does not

  str = str.trim().replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

  if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

  while (str.length % 4 !== 0) {
    str = str + '=';
  }

  return str;
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i); // is surrogate component

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } // valid lead


        leadSurrogate = codePoint;
        continue;
      } // 2 leads in a row


      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      } // valid surrogate pair


      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null; // encode utf8

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }

  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
} // ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166


function isInstance(obj, type) {
  return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}

function numberIsNaN(obj) {
  // For IE11 support
  return obj !== obj; // eslint-disable-line no-self-compare
} // Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219


var hexSliceLookupTable = function () {
  var alphabet = '0123456789abcdef';
  var table = new Array(256);

  for (var i = 0; i < 16; ++i) {
    var i16 = i * 16;

    for (var j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j];
    }
  }

  return table;
}();

}).call(this,require("buffer").Buffer)

},{"base64-js":13,"buffer":17,"ieee754":42}],18:[function(require,module,exports){
(function (Buffer){
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function objectToString(o) {
  return Object.prototype.toString.call(o);
} // shim for Node's 'util' package
// DO NOT REMOVE THIS! It is required for compatibility with EnderJS (http://enderjs.com/).


var util = {
  isArray: function isArray(ar) {
    return Array.isArray(ar) || _typeof(ar) === 'object' && objectToString(ar) === '[object Array]';
  },
  isDate: function isDate(d) {
    return _typeof(d) === 'object' && objectToString(d) === '[object Date]';
  },
  isRegExp: function isRegExp(re) {
    return _typeof(re) === 'object' && objectToString(re) === '[object RegExp]';
  },
  getRegExpFlags: function getRegExpFlags(re) {
    var flags = '';
    re.global && (flags += 'g');
    re.ignoreCase && (flags += 'i');
    re.multiline && (flags += 'm');
    return flags;
  }
};
if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object') module.exports = clone;
/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
*/

function clone(parent, circular, depth, prototype) {
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];
  var useBuffer = typeof Buffer != 'undefined';
  if (typeof circular == 'undefined') circular = true;
  if (typeof depth == 'undefined') depth = Infinity; // recurse this function so we don't reset allParents and allChildren

  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null) return null;
    if (depth == 0) return parent;
    var child;
    var proto;

    if (_typeof(parent) != 'object') {
      return parent;
    }

    if (util.isArray(parent)) {
      child = [];
    } else if (util.isRegExp(parent)) {
      child = new RegExp(parent.source, util.getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (util.isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      child = new Buffer(parent.length);
      parent.copy(child);
      return child;
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      } else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }

      allParents.push(parent);
      allChildren.push(child);
    }

    for (var i in parent) {
      var attrs;

      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }

      child[i] = _clone(parent[i], depth - 1);
    }

    return child;
  }

  return _clone(parent, depth);
}
/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */


clone.clonePrototype = function (parent) {
  if (parent === null) return null;

  var c = function c() {};

  c.prototype = parent;
  return new c();
};

}).call(this,require("buffer").Buffer)

},{"buffer":17}],19:[function(require,module,exports){
(function (Buffer){
"use strict";

var Writable = require('readable-stream').Writable;

var inherits = require('inherits');

var bufferFrom = require('buffer-from');

if (typeof Uint8Array === 'undefined') {
  var U8 = require('typedarray').Uint8Array;
} else {
  var U8 = Uint8Array;
}

function ConcatStream(opts, cb) {
  if (!(this instanceof ConcatStream)) return new ConcatStream(opts, cb);

  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }

  if (!opts) opts = {};
  var encoding = opts.encoding;
  var shouldInferEncoding = false;

  if (!encoding) {
    shouldInferEncoding = true;
  } else {
    encoding = String(encoding).toLowerCase();

    if (encoding === 'u8' || encoding === 'uint8') {
      encoding = 'uint8array';
    }
  }

  Writable.call(this, {
    objectMode: true
  });
  this.encoding = encoding;
  this.shouldInferEncoding = shouldInferEncoding;
  if (cb) this.on('finish', function () {
    cb(this.getBody());
  });
  this.body = [];
}

module.exports = ConcatStream;
inherits(ConcatStream, Writable);

ConcatStream.prototype._write = function (chunk, enc, next) {
  this.body.push(chunk);
  next();
};

ConcatStream.prototype.inferEncoding = function (buff) {
  var firstBuffer = buff === undefined ? this.body[0] : buff;
  if (Buffer.isBuffer(firstBuffer)) return 'buffer';
  if (typeof Uint8Array !== 'undefined' && firstBuffer instanceof Uint8Array) return 'uint8array';
  if (Array.isArray(firstBuffer)) return 'array';
  if (typeof firstBuffer === 'string') return 'string';
  if (Object.prototype.toString.call(firstBuffer) === "[object Object]") return 'object';
  return 'buffer';
};

ConcatStream.prototype.getBody = function () {
  if (!this.encoding && this.body.length === 0) return [];
  if (this.shouldInferEncoding) this.encoding = this.inferEncoding();
  if (this.encoding === 'array') return arrayConcat(this.body);
  if (this.encoding === 'string') return stringConcat(this.body);
  if (this.encoding === 'buffer') return bufferConcat(this.body);
  if (this.encoding === 'uint8array') return u8Concat(this.body);
  return this.body;
};

var isArray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

function isArrayish(arr) {
  return /Array\]$/.test(Object.prototype.toString.call(arr));
}

function isBufferish(p) {
  return typeof p === 'string' || isArrayish(p) || p && typeof p.subarray === 'function';
}

function stringConcat(parts) {
  var strings = [];
  var needsToString = false;

  for (var i = 0; i < parts.length; i++) {
    var p = parts[i];

    if (typeof p === 'string') {
      strings.push(p);
    } else if (Buffer.isBuffer(p)) {
      strings.push(p);
    } else if (isBufferish(p)) {
      strings.push(bufferFrom(p));
    } else {
      strings.push(bufferFrom(String(p)));
    }
  }

  if (Buffer.isBuffer(parts[0])) {
    strings = Buffer.concat(strings);
    strings = strings.toString('utf8');
  } else {
    strings = strings.join('');
  }

  return strings;
}

function bufferConcat(parts) {
  var bufs = [];

  for (var i = 0; i < parts.length; i++) {
    var p = parts[i];

    if (Buffer.isBuffer(p)) {
      bufs.push(p);
    } else if (isBufferish(p)) {
      bufs.push(bufferFrom(p));
    } else {
      bufs.push(bufferFrom(String(p)));
    }
  }

  return Buffer.concat(bufs);
}

function arrayConcat(parts) {
  var res = [];

  for (var i = 0; i < parts.length; i++) {
    res.push.apply(res, parts[i]);
  }

  return res;
}

function u8Concat(parts) {
  var len = 0;

  for (var i = 0; i < parts.length; i++) {
    if (typeof parts[i] === 'string') {
      parts[i] = bufferFrom(parts[i]);
    }

    len += parts[i].length;
  }

  var u8 = new U8(len);

  for (var i = 0, offset = 0; i < parts.length; i++) {
    var part = parts[i];

    for (var j = 0; j < part.length; j++) {
      u8[offset++] = part[j];
    }
  }

  return u8;
}

}).call(this,require("buffer").Buffer)

},{"buffer":17,"buffer-from":16,"inherits":49,"readable-stream":112,"typedarray":123}],20:[function(require,module,exports){
(function (Buffer){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }

  return objectToString(arg) === '[object Array]';
}

exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}

exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}

exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}

exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}

exports.isString = isString;

function isSymbol(arg) {
  return _typeof(arg) === 'symbol';
}

exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}

exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}

exports.isRegExp = isRegExp;

function isObject(arg) {
  return _typeof(arg) === 'object' && arg !== null;
}

exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}

exports.isDate = isDate;

function isError(e) {
  return objectToString(e) === '[object Error]' || e instanceof Error;
}

exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}

exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || _typeof(arg) === 'symbol' || // ES6 symbol
  typeof arg === 'undefined';
}

exports.isPrimitive = isPrimitive;
exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

}).call(this,{"isBuffer":require("../../is-buffer/index.js")})

},{"../../is-buffer/index.js":50}],21:[function(require,module,exports){
(function (Buffer){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ResizeableBuffer =
/*#__PURE__*/
function () {
  function ResizeableBuffer() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

    _classCallCheck(this, ResizeableBuffer);

    this.size = size;
    this.length = 0;
    this.buf = Buffer.alloc(size);
  }

  _createClass(ResizeableBuffer, [{
    key: "prepend",
    value: function prepend(val) {
      var length = this.length++;

      if (length === this.size) {
        this.resize();
      }

      var buf = this.clone();
      this.buf[0] = val;
      buf.copy(this.buf, 1, 0, length);
    }
  }, {
    key: "append",
    value: function append(val) {
      var length = this.length++;

      if (length === this.size) {
        this.resize();
      }

      this.buf[length] = val;
    }
  }, {
    key: "clone",
    value: function clone() {
      return Buffer.from(this.buf.slice(0, this.length));
    }
  }, {
    key: "resize",
    value: function resize() {
      var length = this.length;
      this.size = this.size * 2;
      var buf = Buffer.alloc(this.size);
      this.buf.copy(buf, 0, 0, length);
      this.buf = buf;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.buf.slice(0, this.length).toString();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.length = 0;
    }
  }]);

  return ResizeableBuffer;
}();

module.exports = ResizeableBuffer;

}).call(this,require("buffer").Buffer)

},{"buffer":17}],22:[function(require,module,exports){
(function (Buffer){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
CSV Parse

Please look at the [project documentation](https://csv.js.org/parse/) for additional
information.
*/
var _require = require('stream'),
    Transform = _require.Transform;

var ResizeableBuffer = require('./ResizeableBuffer');

var cr = 13;
var nl = 10;
var space = 32;
var tab = 9;
var bom_utf8 = Buffer.from([239, 187, 191]);

var Parser =
/*#__PURE__*/
function (_Transform) {
  _inherits(Parser, _Transform);

  function Parser() {
    var _this;

    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Parser);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Parser).call(this, _objectSpread({}, {
      readableObjectMode: true
    }, {}, opts)));
    var options = {}; // Merge with user options

    for (var opt in opts) {
      options[underscore(opt)] = opts[opt];
    } // Normalize option `bom`


    if (options.bom === undefined || options.bom === null || options.bom === false) {
      options.bom = false;
    } else if (options.bom !== true) {
      throw new Error("Invalid Option: bom must be true, got ".concat(JSON.stringify(options.bom)));
    } // Normalize option `cast`


    var fnCastField = null;

    if (options.cast === undefined || options.cast === null || options.cast === false || options.cast === '') {
      options.cast = undefined;
    } else if (typeof options.cast === 'function') {
      fnCastField = options.cast;
      options.cast = true;
    } else if (options.cast !== true) {
      throw new Error('Invalid Option: cast must be true or a function');
    } // Normalize option `cast_date`


    if (options.cast_date === undefined || options.cast_date === null || options.cast_date === false || options.cast_date === '') {
      options.cast_date = false;
    } else if (options.cast_date === true) {
      options.cast_date = function (value) {
        var date = Date.parse(value);
        return !isNaN(date) ? new Date(date) : value;
      };
    } else if (typeof options.cast_date !== 'function') {
      throw new Error('Invalid Option: cast_date must be true or a function');
    } // Normalize option `columns`


    var fnFirstLineToHeaders = null;

    if (options.columns === true) {
      // Fields in the first line are converted as-is to columns
      fnFirstLineToHeaders = undefined;
    } else if (typeof options.columns === 'function') {
      fnFirstLineToHeaders = options.columns;
      options.columns = true;
    } else if (Array.isArray(options.columns)) {
      options.columns = normalizeColumnsArray(options.columns);
    } else if (options.columns === undefined || options.columns === null || options.columns === false) {
      options.columns = false;
    } else {
      throw new Error("Invalid Option columns: expect an object or true, got ".concat(JSON.stringify(options.columns)));
    } // Normalize option `comment`


    if (options.comment === undefined || options.comment === null || options.comment === false || options.comment === '') {
      options.comment = null;
    } else {
      if (typeof options.comment === 'string') {
        options.comment = Buffer.from(options.comment);
      }

      if (!Buffer.isBuffer(options.comment)) {
        throw new Error("Invalid Option: comment must be a buffer or a string, got ".concat(JSON.stringify(options.comment)));
      }
    } // Normalize option `delimiter`


    if (options.delimiter === undefined || options.delimiter === null || options.delimiter === false) {
      options.delimiter = Buffer.from(',');
    } else if (Buffer.isBuffer(options.delimiter)) {
      if (options.delimiter.length === 0) {
        throw new Error("Invalid Option: delimiter must be a non empty buffer");
      } // Great, nothing to do

    } else if (typeof options.delimiter === 'string') {
      if (options.delimiter.length === 0) {
        throw new Error("Invalid Option: delimiter must be a non empty string");
      }

      options.delimiter = Buffer.from(options.delimiter);
    } else {
      throw new Error("Invalid Option: delimiter must be a string or a buffer, got ".concat(options.delimiter));
    } // Normalize option `escape`


    if (options.escape === undefined || options.escape === null) {
      options.escape = Buffer.from('"');
    } else if (typeof options.escape === 'string') {
      options.escape = Buffer.from(options.escape);
    }

    if (!Buffer.isBuffer(options.escape)) {
      throw new Error("Invalid Option: escape must be a buffer or a string, got ".concat(JSON.stringify(options.escape)));
    } else if (options.escape.length !== 1) {
      throw new Error("Invalid Option Length: escape must be one character, got ".concat(options.escape.length));
    } else {
      options.escape = options.escape[0];
    } // Normalize option `from`


    if (options.from === undefined || options.from === null) {
      options.from = 1;
    } else {
      if (typeof options.from === 'string' && /\d+/.test(options.from)) {
        options.from = parseInt(options.from);
      }

      if (Number.isInteger(options.from)) {
        if (options.from < 0) {
          throw new Error("Invalid Option: from must be a positive integer, got ".concat(JSON.stringify(opts.from)));
        }
      } else {
        throw new Error("Invalid Option: from must be an integer, got ".concat(JSON.stringify(options.from)));
      }
    } // Normalize option `from_line`


    if (options.from_line === undefined || options.from_line === null) {
      options.from_line = 1;
    } else {
      if (typeof options.from_line === 'string' && /\d+/.test(options.from_line)) {
        options.from_line = parseInt(options.from_line);
      }

      if (Number.isInteger(options.from_line)) {
        if (options.from_line <= 0) {
          throw new Error("Invalid Option: from_line must be a positive integer greater than 0, got ".concat(JSON.stringify(opts.from_line)));
        }
      } else {
        throw new Error("Invalid Option: from_line must be an integer, got ".concat(JSON.stringify(opts.from_line)));
      }
    } // Normalize option `info`


    if (options.info === undefined || options.info === null || options.info === false) {
      options.info = false;
    } else if (options.info !== true) {
      throw new Error("Invalid Option: info must be true, got ".concat(JSON.stringify(options.info)));
    } // Normalize option `max_record_size`


    if (options.max_record_size === undefined || options.max_record_size === null || options.max_record_size === false) {
      options.max_record_size = 0;
    } else if (Number.isInteger(options.max_record_size) && options.max_record_size >= 0) {// Great, nothing to do
    } else if (typeof options.max_record_size === 'string' && /\d+/.test(options.max_record_size)) {
      options.max_record_size = parseInt(options.max_record_size);
    } else {
      throw new Error("Invalid Option: max_record_size must be a positive integer, got ".concat(JSON.stringify(options.max_record_size)));
    } // Normalize option `objname`


    if (options.objname === undefined || options.objname === null || options.objname === false) {
      options.objname = undefined;
    } else if (Buffer.isBuffer(options.objname)) {
      if (options.objname.length === 0) {
        throw new Error("Invalid Option: objname must be a non empty buffer");
      }

      options.objname = options.objname.toString();
    } else if (typeof options.objname === 'string') {
      if (options.objname.length === 0) {
        throw new Error("Invalid Option: objname must be a non empty string");
      } // Great, nothing to do

    } else {
      throw new Error("Invalid Option: objname must be a string or a buffer, got ".concat(options.objname));
    } // Normalize option `quote`


    if (options.quote === null || options.quote === false || options.quote === '') {
      options.quote = null;
    } else {
      if (options.quote === undefined || options.quote === true) {
        options.quote = Buffer.from('"');
      } else if (typeof options.quote === 'string') {
        options.quote = Buffer.from(options.quote);
      }

      if (!Buffer.isBuffer(options.quote)) {
        throw new Error("Invalid Option: quote must be a buffer or a string, got ".concat(JSON.stringify(options.quote)));
      } else if (options.quote.length !== 1) {
        throw new Error("Invalid Option Length: quote must be one character, got ".concat(options.quote.length));
      } else {
        options.quote = options.quote[0];
      }
    } // Normalize option `raw`


    if (options.raw === undefined || options.raw === null || options.raw === false) {
      options.raw = false;
    } else if (options.raw !== true) {
      throw new Error("Invalid Option: raw must be true, got ".concat(JSON.stringify(options.raw)));
    } // Normalize option `record_delimiter`


    if (!options.record_delimiter) {
      options.record_delimiter = [];
    } else if (!Array.isArray(options.record_delimiter)) {
      options.record_delimiter = [options.record_delimiter];
    }

    options.record_delimiter = options.record_delimiter.map(function (rd) {
      if (typeof rd === 'string') {
        rd = Buffer.from(rd);
      }

      return rd;
    }); // Normalize option `relax`

    if (typeof options.relax === 'boolean') {// Great, nothing to do
    } else if (options.relax === undefined || options.relax === null) {
      options.relax = false;
    } else {
      throw new Error("Invalid Option: relax must be a boolean, got ".concat(JSON.stringify(options.relax)));
    } // Normalize option `relax_column_count`


    if (typeof options.relax_column_count === 'boolean') {// Great, nothing to do
    } else if (options.relax_column_count === undefined || options.relax_column_count === null) {
      options.relax_column_count = false;
    } else {
      throw new Error("Invalid Option: relax_column_count must be a boolean, got ".concat(JSON.stringify(options.relax_column_count)));
    } // Normalize option `skip_empty_lines`


    if (typeof options.skip_empty_lines === 'boolean') {// Great, nothing to do
    } else if (options.skip_empty_lines === undefined || options.skip_empty_lines === null) {
      options.skip_empty_lines = false;
    } else {
      throw new Error("Invalid Option: skip_empty_lines must be a boolean, got ".concat(JSON.stringify(options.skip_empty_lines)));
    } // Normalize option `skip_lines_with_empty_values`


    if (typeof options.skip_lines_with_empty_values === 'boolean') {// Great, nothing to do
    } else if (options.skip_lines_with_empty_values === undefined || options.skip_lines_with_empty_values === null) {
      options.skip_lines_with_empty_values = false;
    } else {
      throw new Error("Invalid Option: skip_lines_with_empty_values must be a boolean, got ".concat(JSON.stringify(options.skip_lines_with_empty_values)));
    } // Normalize option `skip_lines_with_error`


    if (typeof options.skip_lines_with_error === 'boolean') {// Great, nothing to do
    } else if (options.skip_lines_with_error === undefined || options.skip_lines_with_error === null) {
      options.skip_lines_with_error = false;
    } else {
      throw new Error("Invalid Option: skip_lines_with_error must be a boolean, got ".concat(JSON.stringify(options.skip_lines_with_error)));
    } // Normalize option `rtrim`


    if (options.rtrim === undefined || options.rtrim === null || options.rtrim === false) {
      options.rtrim = false;
    } else if (options.rtrim !== true) {
      throw new Error("Invalid Option: rtrim must be a boolean, got ".concat(JSON.stringify(options.rtrim)));
    } // Normalize option `ltrim`


    if (options.ltrim === undefined || options.ltrim === null || options.ltrim === false) {
      options.ltrim = false;
    } else if (options.ltrim !== true) {
      throw new Error("Invalid Option: ltrim must be a boolean, got ".concat(JSON.stringify(options.ltrim)));
    } // Normalize option `trim`


    if (options.trim === undefined || options.trim === null || options.trim === false) {
      options.trim = false;
    } else if (options.trim !== true) {
      throw new Error("Invalid Option: trim must be a boolean, got ".concat(JSON.stringify(options.trim)));
    } // Normalize options `trim`, `ltrim` and `rtrim`


    if (options.trim === true && opts.ltrim !== false) {
      options.ltrim = true;
    } else if (options.ltrim !== true) {
      options.ltrim = false;
    }

    if (options.trim === true && opts.rtrim !== false) {
      options.rtrim = true;
    } else if (options.rtrim !== true) {
      options.rtrim = false;
    } // Normalize option `to`


    if (options.to === undefined || options.to === null) {
      options.to = -1;
    } else {
      if (typeof options.to === 'string' && /\d+/.test(options.to)) {
        options.to = parseInt(options.to);
      }

      if (Number.isInteger(options.to)) {
        if (options.to <= 0) {
          throw new Error("Invalid Option: to must be a positive integer greater than 0, got ".concat(JSON.stringify(opts.to)));
        }
      } else {
        throw new Error("Invalid Option: to must be an integer, got ".concat(JSON.stringify(opts.to)));
      }
    } // Normalize option `to_line`


    if (options.to_line === undefined || options.to_line === null) {
      options.to_line = -1;
    } else {
      if (typeof options.to_line === 'string' && /\d+/.test(options.to_line)) {
        options.to_line = parseInt(options.to_line);
      }

      if (Number.isInteger(options.to_line)) {
        if (options.to_line <= 0) {
          throw new Error("Invalid Option: to_line must be a positive integer greater than 0, got ".concat(JSON.stringify(opts.to_line)));
        }
      } else {
        throw new Error("Invalid Option: to_line must be an integer, got ".concat(JSON.stringify(opts.to_line)));
      }
    }

    _this.info = {
      comment_lines: 0,
      empty_lines: 0,
      invalid_field_length: 0,
      lines: 1,
      records: 0
    };
    _this.options = options;
    _this.state = {
      bomSkipped: false,
      castField: fnCastField,
      commenting: false,
      enabled: options.from_line === 1,
      escaping: false,
      escapeIsQuote: options.escape === options.quote,
      expectedRecordLength: options.columns === null ? 0 : options.columns.length,
      field: new ResizeableBuffer(20),
      firstLineToHeaders: fnFirstLineToHeaders,
      info: Object.assign({}, _this.info),
      previousBuf: undefined,
      quoting: false,
      stop: false,
      rawBuffer: new ResizeableBuffer(100),
      record: [],
      recordHasError: false,
      record_length: 0,
      recordDelimiterMaxLength: options.record_delimiter.length === 0 ? 2 : Math.max.apply(Math, _toConsumableArray(options.record_delimiter.map(function (v) {
        return v.length;
      }))),
      trimChars: [Buffer.from(' ')[0], Buffer.from('\t')[0]],
      wasQuoting: false,
      wasRowDelimiter: false
    };
    return _this;
  } // Implementation of `Transform._transform`


  _createClass(Parser, [{
    key: "_transform",
    value: function _transform(buf, encoding, callback) {
      if (this.state.stop === true) {
        return;
      }

      var err = this.__parse(buf, false);

      if (err !== undefined) {
        this.state.stop = true;
      }

      callback(err);
    } // Implementation of `Transform._flush`

  }, {
    key: "_flush",
    value: function _flush(callback) {
      if (this.state.stop === true) {
        return;
      }

      var err = this.__parse(undefined, true);

      callback(err);
    } // Central parser implementation

  }, {
    key: "__parse",
    value: function __parse(nextBuf, end) {
      var _this$options = this.options,
          bom = _this$options.bom,
          comment = _this$options.comment,
          escape = _this$options.escape,
          from = _this$options.from,
          from_line = _this$options.from_line,
          info = _this$options.info,
          ltrim = _this$options.ltrim,
          max_record_size = _this$options.max_record_size,
          quote = _this$options.quote,
          raw = _this$options.raw,
          relax = _this$options.relax,
          rtrim = _this$options.rtrim,
          skip_empty_lines = _this$options.skip_empty_lines,
          to = _this$options.to,
          to_line = _this$options.to_line;
      var record_delimiter = this.options.record_delimiter;
      var _this$state = this.state,
          bomSkipped = _this$state.bomSkipped,
          previousBuf = _this$state.previousBuf,
          rawBuffer = _this$state.rawBuffer,
          escapeIsQuote = _this$state.escapeIsQuote,
          trimChars = _this$state.trimChars;
      var buf;

      if (previousBuf === undefined) {
        if (nextBuf === undefined) {
          // Handle empty string
          this.push(null);
          return;
        } else {
          buf = nextBuf;
        }
      } else if (previousBuf !== undefined && nextBuf === undefined) {
        buf = previousBuf;
      } else {
        buf = Buffer.concat([previousBuf, nextBuf]);
      } // Handle UTF BOM


      if (bomSkipped === false) {
        if (bom === false) {
          this.state.bomSkipped = true;
        } else if (buf.length < 3) {
          // No enough data
          if (end === false) {
            // Wait for more data
            this.state.previousBuf = buf;
            return;
          } // skip BOM detect because data length < 3

        } else {
          if (bom_utf8.compare(buf, 0, 3) === 0) {
            // Skip BOM
            buf = buf.slice(3);
          }

          this.state.bomSkipped = true;
        }
      }

      var bufLen = buf.length;
      var pos;

      for (pos = 0; pos < bufLen; pos++) {
        // Ensure we get enough space to look ahead
        // There should be a way to move this out of the loop
        if (this.__needMoreData(pos, bufLen, end)) {
          break;
        }

        if (this.state.wasRowDelimiter === true) {
          this.info.lines++;

          if (info === true && this.state.record.length === 0 && this.state.field.length === 0 && this.state.wasQuoting === false) {
            this.state.info = Object.assign({}, this.info);
          }

          this.state.wasRowDelimiter = false;
        }

        if (to_line !== -1 && this.info.lines > to_line) {
          this.state.stop = true;
          this.push(null);
          return;
        } // Auto discovery of record_delimiter, unix, mac and windows supported


        if (this.state.quoting === false && record_delimiter.length === 0) {
          var record_delimiterCount = this.__autoDiscoverRowDelimiter(buf, pos);

          if (record_delimiterCount) {
            record_delimiter = this.options.record_delimiter;
          }
        }

        var chr = buf[pos];

        if (raw === true) {
          rawBuffer.append(chr);
        }

        if ((chr === cr || chr === nl) && this.state.wasRowDelimiter === false) {
          this.state.wasRowDelimiter = true;
        } // Previous char was a valid escape char
        // treat the current char as a regular char


        if (this.state.escaping === true) {
          this.state.escaping = false;
        } else {
          // Escape is only active inside quoted fields
          if (this.state.quoting === true && chr === escape && pos + 1 < bufLen) {
            // We are quoting, the char is an escape chr and there is a chr to escape
            if (escapeIsQuote) {
              if (buf[pos + 1] === quote) {
                this.state.escaping = true;
                continue;
              }
            } else {
              this.state.escaping = true;
              continue;
            }
          } // Not currently escaping and chr is a quote
          // TODO: need to compare bytes instead of single char


          if (this.state.commenting === false && chr === quote) {
            if (this.state.quoting === true) {
              var nextChr = buf[pos + 1];

              var isNextChrTrimable = rtrim && this.__isCharTrimable(nextChr); // const isNextChrComment = nextChr === comment


              var isNextChrComment = comment !== null && this.__compareBytes(comment, buf, pos + 1, nextChr);

              var isNextChrDelimiter = this.__isDelimiter(nextChr, buf, pos + 1);

              var isNextChrRowDelimiter = record_delimiter.length === 0 ? this.__autoDiscoverRowDelimiter(buf, pos + 1) : this.__isRecordDelimiter(nextChr, buf, pos + 1); // Escape a quote
              // Treat next char as a regular character
              // TODO: need to compare bytes instead of single char

              if (chr === escape && nextChr === quote) {
                pos++;
              } else if (!nextChr || isNextChrDelimiter || isNextChrRowDelimiter || isNextChrComment || isNextChrTrimable) {
                this.state.quoting = false;
                this.state.wasQuoting = true;
                continue;
              } else if (relax === false) {
                var err = this.__error("Invalid Closing Quote: got \"".concat(String.fromCharCode(nextChr), "\" at line ").concat(this.info.lines, " instead of delimiter, row delimiter, trimable character (if activated) or comment"));

                if (err !== undefined) return err;
              } else {
                this.state.quoting = false;
                this.state.wasQuoting = true; // continue

                this.state.field.prepend(quote);
              }
            } else {
              if (this.state.field.length !== 0) {
                // In relax mode, treat opening quote preceded by chrs as regular
                if (relax === false) {
                  var _err = this.__error("Invalid opening quote at line ".concat(this.info.lines));

                  if (_err !== undefined) return _err;
                }
              } else {
                this.state.quoting = true;
                continue;
              }
            }
          }

          if (this.state.quoting === false) {
            var recordDelimiterLength = this.__isRecordDelimiter(chr, buf, pos);

            if (recordDelimiterLength !== 0) {
              // Do not emit comments which take a full line
              var skipCommentLine = this.state.commenting && this.state.wasQuoting === false && this.state.record.length === 0 && this.state.field.length === 0;

              if (skipCommentLine) {
                this.info.comment_lines++; // Skip full comment line
              } else {
                // Skip if line is empty and skip_empty_lines activated
                if (skip_empty_lines === true && this.state.wasQuoting === false && this.state.record.length === 0 && this.state.field.length === 0) {
                  this.info.empty_lines++;
                  pos += recordDelimiterLength - 1;
                  continue;
                } // Activate records emition if above from_line


                if (this.state.enabled === false && this.info.lines + (this.state.wasRowDelimiter === true ? 1 : 0) >= from_line) {
                  this.state.enabled = true;

                  this.__resetField();

                  this.__resetRow();

                  pos += recordDelimiterLength - 1;
                  continue;
                } else {
                  var errField = this.__onField();

                  if (errField !== undefined) return errField;

                  var errRecord = this.__onRow();

                  if (errRecord !== undefined) return errRecord;
                }

                if (to !== -1 && this.info.records >= to) {
                  this.state.stop = true;
                  this.push(null);
                  return;
                }
              }

              this.state.commenting = false;
              pos += recordDelimiterLength - 1;
              continue;
            }

            if (this.state.commenting) {
              continue;
            }

            var commentCount = comment === null ? 0 : this.__compareBytes(comment, buf, pos, chr);

            if (commentCount !== 0) {
              this.state.commenting = true;
              continue;
            }

            var delimiterLength = this.__isDelimiter(chr, buf, pos);

            if (delimiterLength !== 0) {
              var _errField = this.__onField();

              if (_errField !== undefined) return _errField;
              pos += delimiterLength - 1;
              continue;
            }
          }
        }

        if (this.state.commenting === false) {
          if (max_record_size !== 0 && this.state.record_length + this.state.field.length > max_record_size) {
            var _err2 = this.__error("Max Record Size: record exceed the maximum number of tolerated bytes of ".concat(max_record_size, " on line ").concat(this.info.lines));

            if (_err2 !== undefined) return _err2;
          }
        }

        var lappend = ltrim === false || this.state.quoting === true || this.state.field.length !== 0 || !this.__isCharTrimable(chr); // rtrim in non quoting is handle in __onField

        var rappend = rtrim === false || this.state.wasQuoting === false;

        if (lappend === true && rappend === true) {
          this.state.field.append(chr);
        } else if (rtrim === true && !this.__isCharTrimable(chr)) {
          var _err3 = this.__error("Invalid Closing Quote: found non trimable byte after quote at line ".concat(this.info.lines));

          if (_err3 !== undefined) return _err3;
        }
      }

      if (end === true) {
        if (this.state.quoting === true) {
          var _err4 = this.__error("Invalid Closing Quote: quote is not closed at line ".concat(this.info.lines));

          if (_err4 !== undefined) return _err4;
        } else {
          // Skip last line if it has no characters
          if (this.state.wasQuoting === true || this.state.record.length !== 0 || this.state.field.length !== 0) {
            var _errField2 = this.__onField();

            if (_errField2 !== undefined) return _errField2;

            var _errRecord = this.__onRow();

            if (_errRecord !== undefined) return _errRecord;
          } else if (this.state.wasRowDelimiter === true) {
            this.info.empty_lines++;
          } else if (this.state.commenting === true) {
            this.info.comment_lines++;
          }
        }
      } else {
        this.state.previousBuf = buf.slice(pos);
      }

      if (this.state.wasRowDelimiter === true) {
        this.info.lines++;
        this.state.wasRowDelimiter = false;
      }
    } // Helper to test if a character is a space or a line delimiter

  }, {
    key: "__isCharTrimable",
    value: function __isCharTrimable(chr) {
      return chr === space || chr === tab || chr === cr || chr === nl;
    }
  }, {
    key: "__onRow",
    value: function __onRow() {
      var _this$options2 = this.options,
          columns = _this$options2.columns,
          info = _this$options2.info,
          from = _this$options2.from,
          relax_column_count = _this$options2.relax_column_count,
          raw = _this$options2.raw,
          skip_lines_with_empty_values = _this$options2.skip_lines_with_empty_values;
      var _this$state2 = this.state,
          enabled = _this$state2.enabled,
          record = _this$state2.record; // Convert the first line into column names

      if (columns === true) {
        return this.__firstLineToColumns(record);
      }

      var recordLength = record.length;

      if (columns === false && this.info.records === 0) {
        this.state.expectedRecordLength = recordLength;
      } else if (enabled === true) {
        if (recordLength !== this.state.expectedRecordLength) {
          if (relax_column_count === true) {
            this.info.invalid_field_length++;
          } else {
            if (columns === false) {
              var err = this.__error("Invalid Record Length: expect ".concat(this.state.expectedRecordLength, ", got ").concat(recordLength, " on line ").concat(this.info.lines));

              if (err !== undefined) return err;
            } else {
              var _err5 = this.__error("Invalid Record Length: header length is ".concat(columns.length, ", got ").concat(recordLength, " on line ").concat(this.info.lines));

              if (_err5 !== undefined) return _err5;
            }
          }
        }
      }

      if (enabled === false) {
        return this.__resetRow();
      }

      if (skip_lines_with_empty_values === true) {
        if (record.map(function (field) {
          return field.trim();
        }).join('') === '') {
          this.__resetRow();

          return;
        }
      }

      if (this.state.recordHasError === true) {
        this.__resetRow();

        this.state.recordHasError = false;
        return;
      }

      this.info.records++;

      if (from === 1 || this.info.records >= from) {
        if (columns !== false) {
          var obj = {}; // Transform record array to an object

          for (var i in record) {
            if (columns[i] === undefined || columns[i].disabled) continue;
            obj[columns[i].name] = record[i];
          }

          var objname = this.options.objname;

          if (objname === undefined) {
            if (raw === true || info === true) {
              this.push(Object.assign({
                record: obj
              }, raw === true ? {
                raw: this.state.rawBuffer.toString()
              } : {}, info === true ? {
                info: this.state.info
              } : {}));
            } else {
              this.push(obj);
            }
          } else {
            if (raw === true || info === true) {
              this.push(Object.assign({
                record: [obj[objname], obj]
              }, raw === true ? {
                raw: this.state.rawBuffer.toString()
              } : {}, info === true ? {
                info: this.state.info
              } : {}));
            } else {
              this.push([obj[objname], obj]);
            }
          }
        } else {
          if (raw === true || info === true) {
            this.push(Object.assign({
              record: record
            }, raw === true ? {
              raw: this.state.rawBuffer.toString()
            } : {}, info === true ? {
              info: this.state.info
            } : {}));
          } else {
            this.push(record);
          }
        }
      }

      this.__resetRow();
    }
  }, {
    key: "__firstLineToColumns",
    value: function __firstLineToColumns(record) {
      var firstLineToHeaders = this.state.firstLineToHeaders;

      try {
        // record = record.filter(function(field){ return field !== undefined})
        var headers = firstLineToHeaders === undefined ? record : firstLineToHeaders.call(null, record);

        if (!Array.isArray(headers)) {
          return this.__error("Invalid Header Mapping: expect an array, got ".concat(JSON.stringify(headers)));
        }

        var normalizedHeaders = normalizeColumnsArray(headers);
        this.state.expectedRecordLength = normalizedHeaders.length;
        this.options.columns = normalizedHeaders;

        this.__resetRow();

        return;
      } catch (err) {
        return err;
      }
    }
  }, {
    key: "__resetRow",
    value: function __resetRow() {
      var info = this.options.info;

      if (this.options.raw === true) {
        this.state.rawBuffer.reset();
      }

      this.state.record = [];
      this.state.record_length = 0;
    }
  }, {
    key: "__onField",
    value: function __onField() {
      var _this$options3 = this.options,
          cast = _this$options3.cast,
          rtrim = _this$options3.rtrim,
          max_record_size = _this$options3.max_record_size;
      var _this$state3 = this.state,
          enabled = _this$state3.enabled,
          wasQuoting = _this$state3.wasQuoting; // Deal with from_to options

      if (this.options.columns !== true && enabled === false) {
        return this.__resetField();
      }

      var field = this.state.field.toString();

      if (rtrim === true && wasQuoting === false) {
        field = field.trimRight();
      }

      if (cast === true) {
        var _this$__cast = this.__cast(field),
            _this$__cast2 = _slicedToArray(_this$__cast, 2),
            err = _this$__cast2[0],
            f = _this$__cast2[1];

        if (err !== undefined) return err;
        field = f;
      }

      this.state.record.push(field); // Increment record length if record size must not exceed a limit

      if (max_record_size !== 0 && typeof field === 'string') {
        this.state.record_length += field.length;
      }

      this.__resetField();
    }
  }, {
    key: "__resetField",
    value: function __resetField() {
      this.state.field.reset();
      this.state.wasQuoting = false;
    } // Return a tuple with the error and the casted value

  }, {
    key: "__cast",
    value: function __cast(field) {
      var isColumns = Array.isArray(this.options.columns); // Dont loose time calling cast if the field wont be part of the final record

      if (isColumns === true && this.options.columns.length <= this.state.record.length) {
        return [undefined, undefined];
      }

      var context = {
        column: isColumns === true ? this.options.columns[this.state.record.length].name : this.state.record.length,
        empty_lines: this.info.empty_lines,
        header: this.options.columns === true,
        index: this.state.record.length,
        invalid_field_length: this.info.invalid_field_length,
        quoting: this.state.wasQuoting,
        lines: this.info.lines,
        records: this.info.records
      };

      if (this.state.castField !== null) {
        try {
          return [undefined, this.state.castField.call(null, field, context)];
        } catch (err) {
          return [err];
        }
      }

      if (this.__isFloat(field)) {
        return [undefined, parseFloat(field)];
      } else if (this.options.cast_date !== false) {
        return [undefined, this.options.cast_date.call(null, field, context)];
      }

      return [undefined, field];
    } // Keep it in case we implement the `cast_int` option
    // __isInt(value){
    //   // return Number.isInteger(parseInt(value))
    //   // return !isNaN( parseInt( obj ) );
    //   return /^(\-|\+)?[1-9][0-9]*$/.test(value)
    // }

  }, {
    key: "__isFloat",
    value: function __isFloat(value) {
      return value - parseFloat(value) + 1 >= 0; // Borrowed from jquery
    }
  }, {
    key: "__compareBytes",
    value: function __compareBytes(sourceBuf, targetBuf, pos, firtByte) {
      if (sourceBuf[0] !== firtByte) return 0;
      var sourceLength = sourceBuf.length;

      for (var i = 1; i < sourceLength; i++) {
        if (sourceBuf[i] !== targetBuf[pos + i]) return 0;
      }

      return sourceLength;
    }
  }, {
    key: "__needMoreData",
    value: function __needMoreData(i, bufLen, end) {
      if (end) {
        return false;
      }

      var _this$options4 = this.options,
          comment = _this$options4.comment,
          delimiter = _this$options4.delimiter,
          escape = _this$options4.escape;
      var _this$state4 = this.state,
          quoting = _this$state4.quoting,
          recordDelimiterMaxLength = _this$state4.recordDelimiterMaxLength;
      var numOfCharLeft = bufLen - i - 1;
      var requiredLength = Math.max( // Skip if the remaining buffer smaller than comment
      comment ? comment.length : 0, // Skip if the remaining buffer smaller than row delimiter
      recordDelimiterMaxLength, // Skip if the remaining buffer can be row delimiter following the closing quote
      // 1 is for quote.length
      quoting ? 1 + recordDelimiterMaxLength : 0, // Skip if the remaining buffer can be delimiter
      delimiter.length, // Skip if the remaining buffer can be escape sequence
      // 1 is for escape.length
      1);
      return numOfCharLeft < requiredLength;
    }
  }, {
    key: "__isDelimiter",
    value: function __isDelimiter(chr, buf, pos) {
      var delimiter = this.options.delimiter;
      var delLength = delimiter.length;
      if (delimiter[0] !== chr) return 0;

      for (var i = 1; i < delLength; i++) {
        if (delimiter[i] !== buf[pos + i]) return 0;
      }

      return delimiter.length;
    }
  }, {
    key: "__isRecordDelimiter",
    value: function __isRecordDelimiter(chr, buf, pos) {
      var record_delimiter = this.options.record_delimiter;
      var recordDelimiterLength = record_delimiter.length;

      loop1: for (var i = 0; i < recordDelimiterLength; i++) {
        var rd = record_delimiter[i];
        var rdLength = rd.length;

        if (rd[0] !== chr) {
          continue;
        }

        for (var j = 1; j < rdLength; j++) {
          if (rd[j] !== buf[pos + j]) {
            continue loop1;
          }
        }

        return rd.length;
      }

      return 0;
    }
  }, {
    key: "__autoDiscoverRowDelimiter",
    value: function __autoDiscoverRowDelimiter(buf, pos) {
      var chr = buf[pos];

      if (chr === cr) {
        if (buf[pos + 1] === nl) {
          this.options.record_delimiter.push(Buffer.from('\r\n'));
          this.state.recordDelimiterMaxLength = 2;
          return 2;
        } else {
          this.options.record_delimiter.push(Buffer.from('\r'));
          this.state.recordDelimiterMaxLength = 1;
          return 1;
        }
      } else if (chr === nl) {
        this.options.record_delimiter.push(Buffer.from('\n'));
        this.state.recordDelimiterMaxLength = 1;
        return 1;
      }

      return 0;
    }
  }, {
    key: "__error",
    value: function __error(msg) {
      var skip_lines_with_error = this.options.skip_lines_with_error;
      var err = new Error(msg);

      if (skip_lines_with_error) {
        this.state.recordHasError = true;
        this.emit('skip', err);
        return undefined;
      } else {
        return err;
      }
    }
  }]);

  return Parser;
}(Transform);

var parse = function parse() {
  var data, options, callback;

  for (var i in arguments) {
    var argument = arguments[i];

    var type = _typeof(argument);

    if (data === undefined && (typeof argument === 'string' || Buffer.isBuffer(argument))) {
      data = argument;
    } else if (options === undefined && isObject(argument)) {
      options = argument;
    } else if (callback === undefined && type === 'function') {
      callback = argument;
    } else {
      throw new Error("Invalid argument: got ".concat(JSON.stringify(argument), " at index ").concat(i));
    }
  }

  var parser = new Parser(options);

  if (callback) {
    var records = options === undefined || options.objname === undefined ? [] : {};
    parser.on('readable', function () {
      var record;

      while (record = this.read()) {
        if (options === undefined || options.objname === undefined) {
          records.push(record);
        } else {
          records[record[0]] = record[1];
        }
      }
    });
    parser.on('error', function (err) {
      callback(err, undefined, parser.info);
    });
    parser.on('end', function () {
      callback(undefined, records, parser.info);
    });
  }

  if (data !== undefined) {
    parser.write(data);
    parser.end();
  }

  return parser;
};

parse.Parser = Parser;
module.exports = parse;

var underscore = function underscore(str) {
  return str.replace(/([A-Z])/g, function (_, match, index) {
    return '_' + match.toLowerCase();
  });
};

var isObject = function isObject(obj) {
  return _typeof(obj) === 'object' && obj !== null && !Array.isArray(obj);
};

var normalizeColumnsArray = function normalizeColumnsArray(columns) {
  // console.log('columns', columns)
  var normalizedColumns = [];

  for (var i = 0; i < columns.length; i++) {
    var column = columns[i];

    if (column === undefined || column === null || column === false) {
      normalizedColumns[i] = {
        disabled: true
      };
    } else if (typeof column === 'string') {
      normalizedColumns[i] = {
        name: column
      };
    } else if (isObject(column)) {
      if (typeof column.name !== 'string') {
        throw new Error("Invalid Option columns: property \"name\" is required at position ".concat(i, " when column is an object literal"));
      }

      normalizedColumns[i] = column;
    } else {
      throw new Error("Invalid Option columns: expect a string or an object, got ".concat(JSON.stringify(column), " at position ").concat(i));
    }
  } // console.log(normalizedColumns)


  return normalizedColumns;
};

}).call(this,require("buffer").Buffer)

},{"./ResizeableBuffer":21,"buffer":17,"stream":116}],23:[function(require,module,exports){
(function (process){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Generated by CoffeeScript 1.12.7
var Stringifier, get, stream, util;
stream = require('stream');
util = require('util');
get = require('lodash.get');

module.exports = function () {
  var callback, chunks, data, options, stringifier;

  if (arguments.length === 3) {
    data = arguments[0];
    options = arguments[1];
    callback = arguments[2];
  } else if (arguments.length === 2) {
    if (Array.isArray(arguments[0])) {
      data = arguments[0];
    } else {
      options = arguments[0];
    }

    if (typeof arguments[1] === 'function') {
      callback = arguments[1];
    } else {
      options = arguments[1];
    }
  } else if (arguments.length === 1) {
    if (typeof arguments[0] === 'function') {
      callback = arguments[0];
    } else if (Array.isArray(arguments[0])) {
      data = arguments[0];
    } else {
      options = arguments[0];
    }
  }

  if (options == null) {
    options = {};
  }

  stringifier = new Stringifier(options);

  if (data) {
    process.nextTick(function () {
      var d, j, len;

      for (j = 0, len = data.length; j < len; j++) {
        d = data[j];
        stringifier.write(d);
      }

      return stringifier.end();
    });
  }

  if (callback) {
    chunks = [];
    stringifier.on('readable', function () {
      var chunk, results;
      results = [];

      while (chunk = stringifier.read()) {
        results.push(chunks.push(chunk));
      }

      return results;
    });
    stringifier.on('error', function (err) {
      return callback(err);
    });
    stringifier.on('end', function () {
      return callback(null, chunks.join(''));
    });
  }

  return stringifier;
};

Stringifier = function Stringifier(opts) {
  var base, base1, base10, base11, base12, base13, base2, base3, base4, base5, base6, base7, base8, base9, k, options, v;

  if (opts == null) {
    opts = {};
  }

  options = {};

  for (k in opts) {
    v = opts[k];
    options[k] = v;
  }

  stream.Transform.call(this, options);
  this.options = options;

  if ((base = this.options).delimiter == null) {
    base.delimiter = ',';
  }

  if ((base1 = this.options).quote == null) {
    base1.quote = '"';
  }

  if ((base2 = this.options).quoted == null) {
    base2.quoted = false;
  }

  if ((base3 = this.options).quotedEmpty == null) {
    base3.quotedEmpty = void 0;
  }

  if ((base4 = this.options).quotedString == null) {
    base4.quotedString = false;
  }

  if ((base5 = this.options).eof == null) {
    base5.eof = true;
  }

  if ((base6 = this.options).escape == null) {
    base6.escape = '"';
  }

  if ((base7 = this.options).columns == null) {
    base7.columns = null;
  }

  if ((base8 = this.options).header == null) {
    base8.header = false;
  }

  if ((base9 = this.options).formatters == null) {
    base9.formatters = {};
  }

  if ((base10 = this.options.formatters).date == null) {
    base10.date = function (value) {
      return '' + value.getTime();
    };
  }

  if ((base11 = this.options.formatters).bool == null) {
    base11.bool = function (value) {
      if (value) {
        return '1';
      } else {
        return '';
      }
    };
  }

  if ((base12 = this.options.formatters).object == null) {
    base12.object = function (value) {
      return JSON.stringify(value);
    };
  }

  if ((base13 = this.options).rowDelimiter == null) {
    base13.rowDelimiter = '\n';
  }

  if (this.countWriten == null) {
    this.countWriten = 0;
  }

  switch (this.options.rowDelimiter) {
    case 'auto':
      this.options.rowDelimiter = null;
      break;

    case 'unix':
      this.options.rowDelimiter = "\n";
      break;

    case 'mac':
      this.options.rowDelimiter = "\r";
      break;

    case 'windows':
      this.options.rowDelimiter = "\r\n";
      break;

    case 'unicode':
      this.options.rowDelimiter = "\u2028";
  }

  return this;
};

util.inherits(Stringifier, stream.Transform);
module.exports.Stringifier = Stringifier;

Stringifier.prototype.headers = function () {
  var k, label, labels;

  if (!this.options.header) {
    return;
  }

  if (!this.options.columns) {
    return;
  }

  labels = this.options.columns;

  if (_typeof(labels) === 'object') {
    labels = function () {
      var results;
      results = [];

      for (k in labels) {
        label = labels[k];
        results.push(label);
      }

      return results;
    }();
  }

  if (this.options.eof) {
    labels = this.stringify(labels) + this.options.rowDelimiter;
  } else {
    labels = this.stringify(labels);
  }

  return stream.Transform.prototype.write.call(this, labels);
};

Stringifier.prototype.end = function (chunk, encoding, callback) {
  if (this.countWriten === 0) {
    this.headers();
  }

  return stream.Transform.prototype.end.apply(this, arguments);
};

Stringifier.prototype.write = function (chunk, encoding, callback) {
  var base, e, preserve;

  if (chunk == null) {
    return;
  }

  preserve = _typeof(chunk) !== 'object';

  if (!preserve) {
    if (this.countWriten === 0 && !Array.isArray(chunk)) {
      if ((base = this.options).columns == null) {
        base.columns = Object.keys(chunk);
      }
    }

    try {
      this.emit('record', chunk, this.countWriten);
    } catch (error) {
      e = error;
      return this.emit('error', e);
    }

    if (this.options.eof) {
      chunk = this.stringify(chunk) + this.options.rowDelimiter;
    } else {
      chunk = this.stringify(chunk);

      if (this.options.header || this.countWriten) {
        chunk = this.options.rowDelimiter + chunk;
      }
    }
  }

  if (typeof chunk === 'number') {
    chunk = "" + chunk;
  }

  if (this.countWriten === 0) {
    this.headers();
  }

  if (!preserve) {
    this.countWriten++;
  }

  return stream.Transform.prototype.write.call(this, chunk, encoding, callback);
};

Stringifier.prototype._transform = function (chunk, encoding, callback) {
  this.push(chunk);
  return callback();
};

Stringifier.prototype.stringify = function (line) {
  var _line, column, columns, containsEscape, containsLinebreak, containsQuote, containsdelimiter, delimiter, escape, field, i, j, l, newLine, quote, ref, ref1, regexp, shouldQuote, value;

  if (_typeof(line) !== 'object') {
    return line;
  }

  columns = this.options.columns;

  if (_typeof(columns) === 'object' && columns !== null && !Array.isArray(columns)) {
    columns = Object.keys(columns);
  }

  delimiter = this.options.delimiter;
  quote = this.options.quote;
  escape = this.options.escape;

  if (!Array.isArray(line)) {
    _line = [];

    if (columns) {
      for (i = j = 0, ref = columns.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        column = columns[i];
        value = get(line, column);
        _line[i] = typeof value === 'undefined' || value === null ? '' : value;
      }
    } else {
      for (column in line) {
        _line.push(line[column]);
      }
    }

    line = _line;
    _line = null;
  } else if (columns) {
    line.splice(columns.length);
  }

  if (Array.isArray(line)) {
    newLine = '';

    for (i = l = 0, ref1 = line.length; 0 <= ref1 ? l < ref1 : l > ref1; i = 0 <= ref1 ? ++l : --l) {
      field = line[i];

      if (typeof field === 'string') {} else if (typeof field === 'number') {
        field = '' + field;
      } else if (typeof field === 'boolean') {
        field = this.options.formatters.bool(field);
      } else if (field instanceof Date) {
        field = this.options.formatters.date(field);
      } else if (_typeof(field) === 'object' && field !== null) {
        field = this.options.formatters.object(field);
      }

      if (field) {
        containsdelimiter = field.indexOf(delimiter) >= 0;
        containsQuote = field.indexOf(quote) >= 0;
        containsEscape = field.indexOf(escape) >= 0 && escape !== quote;
        containsLinebreak = field.indexOf('\r') >= 0 || field.indexOf('\n') >= 0;
        shouldQuote = containsQuote || containsdelimiter || containsLinebreak || this.options.quoted || this.options.quotedString && typeof line[i] === 'string';

        if (shouldQuote && containsEscape) {
          regexp = escape === '\\' ? new RegExp(escape + escape, 'g') : new RegExp(escape, 'g');
          field = field.replace(regexp, escape + escape);
        }

        if (containsQuote) {
          regexp = new RegExp(quote, 'g');
          field = field.replace(regexp, escape + quote);
        }

        if (shouldQuote) {
          field = quote + field + quote;
        }

        newLine += field;
      } else if (this.options.quotedEmpty || this.options.quotedEmpty == null && line[i] === '' && this.options.quotedString) {
        newLine += quote + quote;
      }

      if (i !== line.length - 1) {
        newLine += delimiter;
      }
    }

    line = newLine;
  }

  return line;
};

}).call(this,require('_process'))

},{"_process":100,"lodash.get":93,"stream":116,"util":127}],24:[function(require,module,exports){
"use strict";

var AbstractIterator = require('abstract-leveldown').AbstractIterator;

var inherits = require('inherits');

function DeferredIterator(options) {
  AbstractIterator.call(this, options);
  this._options = options;
  this._iterator = null;
  this._operations = [];
}

inherits(DeferredIterator, AbstractIterator);

DeferredIterator.prototype.setDb = function (db) {
  var it = this._iterator = db.iterator(this._options);

  this._operations.forEach(function (op) {
    it[op.method].apply(it, op.args);
  });
};

DeferredIterator.prototype._operation = function (method, args) {
  if (this._iterator) return this._iterator[method].apply(this._iterator, args);

  this._operations.push({
    method: method,
    args: args
  });
};

'next end'.split(' ').forEach(function (m) {
  DeferredIterator.prototype['_' + m] = function () {
    this._operation(m, arguments);
  };
});
module.exports = DeferredIterator;

},{"abstract-leveldown":8,"inherits":49}],25:[function(require,module,exports){
"use strict";

var AbstractLevelDOWN = require('abstract-leveldown').AbstractLevelDOWN;

var inherits = require('inherits');

var DeferredIterator = require('./deferred-iterator');

var deferrables = 'put get del batch'.split(' ');

function DeferredLevelDOWN(db) {
  AbstractLevelDOWN.call(this, '');
  this._db = db;
  this._operations = [];
  this._iterators = [];
  closed(this);
}

inherits(DeferredLevelDOWN, AbstractLevelDOWN);

DeferredLevelDOWN.prototype._open = function (options, callback) {
  var self = this;

  this._db.open(options, function (err) {
    if (err) return callback(err);

    self._operations.forEach(function (op) {
      self._db[op.method].apply(self._db, op.args);
    });

    self._operations = [];

    self._iterators.forEach(function (it) {
      it.setDb(self._db);
    });

    self._iterators = [];
    open(self);
    callback();
  });
};

DeferredLevelDOWN.prototype._close = function (callback) {
  var self = this;

  this._db.close(function (err) {
    if (err) return callback(err);
    closed(self);
    callback();
  });
};

function open(self) {
  deferrables.concat('iterator').forEach(function (m) {
    self['_' + m] = function () {
      return this._db[m].apply(this._db, arguments);
    };
  });

  if (self._db.approximateSize) {
    self.approximateSize = function () {
      return this._db.approximateSize.apply(this._db, arguments);
    };
  }
}

function closed(self) {
  deferrables.forEach(function (m) {
    self['_' + m] = function () {
      this._operations.push({
        method: m,
        args: arguments
      });
    };
  });

  if (typeof self._db.approximateSize === 'function') {
    self.approximateSize = function () {
      this._operations.push({
        method: 'approximateSize',
        args: arguments
      });
    };
  }

  self._iterator = function (options) {
    var it = new DeferredIterator(options);

    this._iterators.push(it);

    return it;
  };
}

DeferredLevelDOWN.prototype._serializeKey = function (key) {
  return key;
};

DeferredLevelDOWN.prototype._serializeValue = function (value) {
  return value;
};

module.exports = DeferredLevelDOWN;
module.exports.DeferredIterator = DeferredIterator;

},{"./deferred-iterator":24,"abstract-leveldown":8,"inherits":49}],26:[function(require,module,exports){
"use strict";

var prr = require('prr');

function init(type, message, cause) {
  if (!!message && typeof message != 'string') {
    message = message.message || message.name;
  }

  prr(this, {
    type: type,
    name: type // can be passed just a 'cause'
    ,
    cause: typeof message != 'string' ? message : cause,
    message: message
  }, 'ewr');
} // generic prototype, not intended to be actually used - helpful for `instanceof`


function CustomError(message, cause) {
  Error.call(this);
  if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
  init.call(this, 'CustomError', message, cause);
}

CustomError.prototype = new Error();

function createError(errno, type, proto) {
  var err = function err(message, cause) {
    init.call(this, type, message, cause); //TODO: the specificity here is stupid, errno should be available everywhere

    if (type == 'FilesystemError') {
      this.code = this.cause.code;
      this.path = this.cause.path;
      this.errno = this.cause.errno;
      this.message = (errno.errno[this.cause.errno] ? errno.errno[this.cause.errno].description : this.cause.message) + (this.cause.path ? ' [' + this.cause.path + ']' : '');
    }

    Error.call(this);
    if (Error.captureStackTrace) Error.captureStackTrace(this, err);
  };

  err.prototype = !!proto ? new proto() : new CustomError();
  return err;
}

module.exports = function (errno) {
  var ce = function ce(type, proto) {
    return createError(errno, type, proto);
  };

  return {
    CustomError: CustomError,
    FilesystemError: ce('FilesystemError'),
    createError: ce
  };
};

},{"prr":101}],27:[function(require,module,exports){
"use strict";

var all = module.exports.all = [{
  errno: -2,
  code: 'ENOENT',
  description: 'no such file or directory'
}, {
  errno: -1,
  code: 'UNKNOWN',
  description: 'unknown error'
}, {
  errno: 0,
  code: 'OK',
  description: 'success'
}, {
  errno: 1,
  code: 'EOF',
  description: 'end of file'
}, {
  errno: 2,
  code: 'EADDRINFO',
  description: 'getaddrinfo error'
}, {
  errno: 3,
  code: 'EACCES',
  description: 'permission denied'
}, {
  errno: 4,
  code: 'EAGAIN',
  description: 'resource temporarily unavailable'
}, {
  errno: 5,
  code: 'EADDRINUSE',
  description: 'address already in use'
}, {
  errno: 6,
  code: 'EADDRNOTAVAIL',
  description: 'address not available'
}, {
  errno: 7,
  code: 'EAFNOSUPPORT',
  description: 'address family not supported'
}, {
  errno: 8,
  code: 'EALREADY',
  description: 'connection already in progress'
}, {
  errno: 9,
  code: 'EBADF',
  description: 'bad file descriptor'
}, {
  errno: 10,
  code: 'EBUSY',
  description: 'resource busy or locked'
}, {
  errno: 11,
  code: 'ECONNABORTED',
  description: 'software caused connection abort'
}, {
  errno: 12,
  code: 'ECONNREFUSED',
  description: 'connection refused'
}, {
  errno: 13,
  code: 'ECONNRESET',
  description: 'connection reset by peer'
}, {
  errno: 14,
  code: 'EDESTADDRREQ',
  description: 'destination address required'
}, {
  errno: 15,
  code: 'EFAULT',
  description: 'bad address in system call argument'
}, {
  errno: 16,
  code: 'EHOSTUNREACH',
  description: 'host is unreachable'
}, {
  errno: 17,
  code: 'EINTR',
  description: 'interrupted system call'
}, {
  errno: 18,
  code: 'EINVAL',
  description: 'invalid argument'
}, {
  errno: 19,
  code: 'EISCONN',
  description: 'socket is already connected'
}, {
  errno: 20,
  code: 'EMFILE',
  description: 'too many open files'
}, {
  errno: 21,
  code: 'EMSGSIZE',
  description: 'message too long'
}, {
  errno: 22,
  code: 'ENETDOWN',
  description: 'network is down'
}, {
  errno: 23,
  code: 'ENETUNREACH',
  description: 'network is unreachable'
}, {
  errno: 24,
  code: 'ENFILE',
  description: 'file table overflow'
}, {
  errno: 25,
  code: 'ENOBUFS',
  description: 'no buffer space available'
}, {
  errno: 26,
  code: 'ENOMEM',
  description: 'not enough memory'
}, {
  errno: 27,
  code: 'ENOTDIR',
  description: 'not a directory'
}, {
  errno: 28,
  code: 'EISDIR',
  description: 'illegal operation on a directory'
}, {
  errno: 29,
  code: 'ENONET',
  description: 'machine is not on the network'
}, {
  errno: 31,
  code: 'ENOTCONN',
  description: 'socket is not connected'
}, {
  errno: 32,
  code: 'ENOTSOCK',
  description: 'socket operation on non-socket'
}, {
  errno: 33,
  code: 'ENOTSUP',
  description: 'operation not supported on socket'
}, {
  errno: 34,
  code: 'ENOENT',
  description: 'no such file or directory'
}, {
  errno: 35,
  code: 'ENOSYS',
  description: 'function not implemented'
}, {
  errno: 36,
  code: 'EPIPE',
  description: 'broken pipe'
}, {
  errno: 37,
  code: 'EPROTO',
  description: 'protocol error'
}, {
  errno: 38,
  code: 'EPROTONOSUPPORT',
  description: 'protocol not supported'
}, {
  errno: 39,
  code: 'EPROTOTYPE',
  description: 'protocol wrong type for socket'
}, {
  errno: 40,
  code: 'ETIMEDOUT',
  description: 'connection timed out'
}, {
  errno: 41,
  code: 'ECHARSET',
  description: 'invalid Unicode character'
}, {
  errno: 42,
  code: 'EAIFAMNOSUPPORT',
  description: 'address family for hostname not supported'
}, {
  errno: 44,
  code: 'EAISERVICE',
  description: 'servname not supported for ai_socktype'
}, {
  errno: 45,
  code: 'EAISOCKTYPE',
  description: 'ai_socktype not supported'
}, {
  errno: 46,
  code: 'ESHUTDOWN',
  description: 'cannot send after transport endpoint shutdown'
}, {
  errno: 47,
  code: 'EEXIST',
  description: 'file already exists'
}, {
  errno: 48,
  code: 'ESRCH',
  description: 'no such process'
}, {
  errno: 49,
  code: 'ENAMETOOLONG',
  description: 'name too long'
}, {
  errno: 50,
  code: 'EPERM',
  description: 'operation not permitted'
}, {
  errno: 51,
  code: 'ELOOP',
  description: 'too many symbolic links encountered'
}, {
  errno: 52,
  code: 'EXDEV',
  description: 'cross-device link not permitted'
}, {
  errno: 53,
  code: 'ENOTEMPTY',
  description: 'directory not empty'
}, {
  errno: 54,
  code: 'ENOSPC',
  description: 'no space left on device'
}, {
  errno: 55,
  code: 'EIO',
  description: 'i/o error'
}, {
  errno: 56,
  code: 'EROFS',
  description: 'read-only file system'
}, {
  errno: 57,
  code: 'ENODEV',
  description: 'no such device'
}, {
  errno: 58,
  code: 'ESPIPE',
  description: 'invalid seek'
}, {
  errno: 59,
  code: 'ECANCELED',
  description: 'operation canceled'
}];
module.exports.errno = {};
module.exports.code = {};
all.forEach(function (error) {
  module.exports.errno[error.errno] = error;
  module.exports.code[error.code] = error;
});
module.exports.custom = require('./custom')(module.exports);
module.exports.create = module.exports.custom.createError;

},{"./custom":26}],28:[function(require,module,exports){
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
'use strict';
/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;
/**
 * Module exports.
 * @public
 */

module.exports = escapeHtml;
/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;

      case 38:
        // &
        escape = '&amp;';
        break;

      case 39:
        // '
        escape = '&#39;';
        break;

      case 60:
        // <
        escape = '&lt;';
        break;

      case 62:
        // >
        escape = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}

},{}],29:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var objectCreate = Object.create || objectCreatePolyfill;
var objectKeys = Object.keys || objectKeysPolyfill;
var bind = Function.prototype.bind || functionBindPolyfill;

function EventEmitter() {
  if (!this._events || !Object.prototype.hasOwnProperty.call(this, '_events')) {
    this._events = objectCreate(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}

module.exports = EventEmitter; // Backwards-compat with node 0.10.x

EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.

var defaultMaxListeners = 10;
var hasDefineProperty;

try {
  var o = {};
  if (Object.defineProperty) Object.defineProperty(o, 'x', {
    value: 0
  });
  hasDefineProperty = o.x === 0;
} catch (err) {
  hasDefineProperty = false;
}

if (hasDefineProperty) {
  Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function get() {
      return defaultMaxListeners;
    },
    set: function set(arg) {
      // check whether the input is a positive number (whose value is zero or
      // greater and not a NaN).
      if (typeof arg !== 'number' || arg < 0 || arg !== arg) throw new TypeError('"defaultMaxListeners" must be a positive number');
      defaultMaxListeners = arg;
    }
  });
} else {
  EventEmitter.defaultMaxListeners = defaultMaxListeners;
} // Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.


EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || isNaN(n)) throw new TypeError('"n" argument must be a positive number');
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
}; // These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.


function emitNone(handler, isFn, self) {
  if (isFn) handler.call(self);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      listeners[i].call(self);
    }
  }
}

function emitOne(handler, isFn, self, arg1) {
  if (isFn) handler.call(self, arg1);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      listeners[i].call(self, arg1);
    }
  }
}

function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn) handler.call(self, arg1, arg2);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      listeners[i].call(self, arg1, arg2);
    }
  }
}

function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn) handler.call(self, arg1, arg2, arg3);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      listeners[i].call(self, arg1, arg2, arg3);
    }
  }
}

function emitMany(handler, isFn, self, args) {
  if (isFn) handler.apply(self, args);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      listeners[i].apply(self, args);
    }
  }
}

EventEmitter.prototype.emit = function emit(type) {
  var er, handler, len, args, i, events;
  var doError = type === 'error';
  events = this._events;
  if (events) doError = doError && events.error == null;else if (!doError) return false; // If there is no 'error' event listener then throw.

  if (doError) {
    if (arguments.length > 1) er = arguments[1];

    if (er instanceof Error) {
      throw er; // Unhandled 'error' event
    } else {
      // At least give some kind of context to the user
      var err = new Error('Unhandled "error" event. (' + er + ')');
      err.context = er;
      throw err;
    }

    return false;
  }

  handler = events[type];
  if (!handler) return false;
  var isFn = typeof handler === 'function';
  len = arguments.length;

  switch (len) {
    // fast cases
    case 1:
      emitNone(handler, isFn, this);
      break;

    case 2:
      emitOne(handler, isFn, this, arguments[1]);
      break;

    case 3:
      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
      break;

    case 4:
      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
      break;
    // slower

    default:
      args = new Array(len - 1);

      for (i = 1; i < len; i++) {
        args[i - 1] = arguments[i];
      }

      emitMany(handler, isFn, this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;
  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
  events = target._events;

  if (!events) {
    events = target._events = objectCreate(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object

      events = target._events;
    }

    existing = events[type];
  }

  if (!existing) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener];
    } else {
      // If we've already got an array, just append.
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    } // Check for listener leak


    if (!existing.warned) {
      m = $getMaxListeners(target);

      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' "' + String(type) + '" listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit.');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;

        if ((typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.warn) {
          console.warn('%s: %s', w.name, w.message);
        }
      }
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;

    switch (arguments.length) {
      case 0:
        return this.listener.call(this.target);

      case 1:
        return this.listener.call(this.target, arguments[0]);

      case 2:
        return this.listener.call(this.target, arguments[0], arguments[1]);

      case 3:
        return this.listener.call(this.target, arguments[0], arguments[1], arguments[2]);

      default:
        var args = new Array(arguments.length);

        for (var i = 0; i < args.length; ++i) {
          args[i] = arguments[i];
        }

        this.listener.apply(this.target, args);
    }
  }
}

function _onceWrap(target, type, listener) {
  var state = {
    fired: false,
    wrapFn: undefined,
    target: target,
    type: type,
    listener: listener
  };
  var wrapped = bind.call(onceWrapper, state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
}; // Emits a 'removeListener' event if and only if the listener was removed.


EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;
  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
  events = this._events;
  if (!events) return this;
  list = events[type];
  if (!list) return this;

  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = objectCreate(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;
    if (position === 0) list.shift();else spliceOne(list, position);
    if (list.length === 1) events[type] = list[0];
    if (events.removeListener) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;
  events = this._events;
  if (!events) return this; // not listening for removeListener, no need to emit

  if (!events.removeListener) {
    if (arguments.length === 0) {
      this._events = objectCreate(null);
      this._eventsCount = 0;
    } else if (events[type]) {
      if (--this._eventsCount === 0) this._events = objectCreate(null);else delete events[type];
    }

    return this;
  } // emit removeListener for all listeners on all events


  if (arguments.length === 0) {
    var keys = objectKeys(events);
    var key;

    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }

    this.removeAllListeners('removeListener');
    this._events = objectCreate(null);
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }

  return this;
};

function _listeners(target, type, unwrap) {
  var events = target._events;
  if (!events) return [];
  var evlistener = events[type];
  if (!evlistener) return [];
  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;

function listenerCount(type) {
  var events = this._events;

  if (events) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
}; // About 1.5x faster than the two-arg version of Array#splice().


function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

function arrayClone(arr, n) {
  var copy = new Array(n);

  for (var i = 0; i < n; ++i) {
    copy[i] = arr[i];
  }

  return copy;
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);

  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }

  return ret;
}

function objectCreatePolyfill(proto) {
  var F = function F() {};

  F.prototype = proto;
  return new F();
}

function objectKeysPolyfill(obj) {
  var keys = [];

  for (var k in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, k)) {
      keys.push(k);
    }
  }

  return k;
}

function functionBindPolyfill(context) {
  var fn = this;
  return function () {
    return fn.apply(context, arguments);
  };
}

},{}],30:[function(require,module,exports){
"use strict";

var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach(obj, fn, ctx) {
  if (toString.call(fn) !== '[object Function]') {
    throw new TypeError('iterator must be a function');
  }

  var l = obj.length;

  if (l === +l) {
    for (var i = 0; i < l; i++) {
      fn.call(ctx, obj[i], i, obj);
    }
  } else {
    for (var k in obj) {
      if (hasOwn.call(obj, k)) {
        fn.call(ctx, obj[k], k, obj);
      }
    }
  }
};

},{}],31:[function(require,module,exports){
(function (process,Buffer){
"use strict";

var Writable = require('readable-stream/writable');

var Readable = require('readable-stream/readable');

var Duplex = require('readable-stream/duplex');

var DUMMY = new Buffer(0);

var noop = function noop() {};

var toFunction = function toFunction(fn) {
  if (typeof fn === 'function') return fn;
  return function (cb) {
    cb(null, fn);
  };
};

var onreadable = function onreadable(rs, init) {
  var reading = false;
  var destroyed = false;

  rs._read = function () {
    reading = true;
  };

  rs.destroy = function () {
    destroyed = true;
  };

  init(function (err, source) {
    if (err) return rs.emit('error', err);

    var fwd = function fwd() {
      var data;

      while ((data = source.read()) !== null) {
        reading = false;
        rs.push(data);
      }
    };

    source.on('readable', function () {
      if (reading) fwd();
    });
    source.on('end', function () {
      fwd();
      rs.push(null);
    });
    source.on('error', function (err) {
      rs.emit('error', err);
    });
    source.on('close', function () {
      fwd();
      process.nextTick(function () {
        rs.emit('close');
      });
    });

    rs._read = function () {
      reading = true;
      fwd();
    };

    rs.destroy = function () {
      if (destroyed) return;
      destroyed = true;
      if (source.destroy) source.destroy();
    };

    if (destroyed) {
      destroyed = false;
      rs.destroy();
      return;
    }

    if (reading) fwd();
  });
  return rs;
};

var onwritable = function onwritable(ws, init) {
  var ready = noop;
  var destroyed = false;

  ws._write = function (data, enc, cb) {
    ready = cb;
  };

  ws.destroy = function () {
    destroyed = true;
  };

  ws.write(DUMMY);
  init(function (err, source) {
    if (err) return ws.emit('error', err);
    source.on('close', function () {
      ws.emit('close');
    });
    source.on('error', function (err) {
      ws.emit('error', err);
    });

    ws._write = function (data, enc, cb) {
      if (data === DUMMY) return cb();
      source.write(data, enc, cb);
    };

    var emit = ws.emit;
    source.on('finish', function () {
      emit.call(ws, 'finish');
    });

    ws.destroy = function () {
      if (destroyed) return;
      destroyed = true;
      if (source.destroy) source.destroy();
    };

    ws.emit = function (name) {
      if (name !== 'finish') return emit.apply(ws, arguments);
      source.end();
    };

    if (destroyed) {
      destroyed = false;
      ws.destroy();
      return;
    }

    ready();
  });
  return ws;
};

exports.readable = function (opts, init) {
  if (arguments.length === 1) return exports.readable(null, opts);
  if (!opts) opts = {};
  return onreadable(new Readable(opts), toFunction(init));
};

exports.writable = function (opts, init) {
  if (arguments.length === 1) return exports.writable(null, opts);
  if (!opts) opts = {};
  return onwritable(new Writable(opts), toFunction(init));
};

exports.duplex = function (opts, initWritable, initReadable) {
  if (arguments.length === 2) return exports.duplex(null, opts, initWritable);
  if (!opts) opts = {};
  var dupl = new Duplex(opts);
  onwritable(dupl, toFunction(initWritable));
  onreadable(dupl, toFunction(initReadable));
  return dupl;
};

}).call(this,require('_process'),require("buffer").Buffer)

},{"_process":100,"buffer":17,"readable-stream/duplex":33,"readable-stream/readable":39,"readable-stream/writable":40}],32:[function(require,module,exports){
"use strict";

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

},{}],33:[function(require,module,exports){
"use strict";

module.exports = require("./lib/_stream_duplex.js");

},{"./lib/_stream_duplex.js":34}],34:[function(require,module,exports){
(function (process){
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
module.exports = Duplex;
/*<replacement>*/

var objectKeys = Object.keys || function (obj) {
  var keys = [];

  for (var key in obj) {
    keys.push(key);
  }

  return keys;
};
/*</replacement>*/

/*<replacement>*/


var util = require('core-util-is');

util.inherits = require('inherits');
/*</replacement>*/

var Readable = require('./_stream_readable');

var Writable = require('./_stream_writable');

util.inherits(Duplex, Readable);
forEach(objectKeys(Writable.prototype), function (method) {
  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
});

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);
  Readable.call(this, options);
  Writable.call(this, options);
  if (options && options.readable === false) this.readable = false;
  if (options && options.writable === false) this.writable = false;
  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;
  this.once('end', onend);
} // the no-half-open enforcer


function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return; // no more data can be written.
  // But allow more writes to happen in this tick.

  process.nextTick(this.end.bind(this));
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

}).call(this,require('_process'))

},{"./_stream_readable":36,"./_stream_writable":38,"_process":100,"core-util-is":20,"inherits":49}],35:[function(require,module,exports){
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.
module.exports = PassThrough;

var Transform = require('./_stream_transform');
/*<replacement>*/


var util = require('core-util-is');

util.inherits = require('inherits');
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);
  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

},{"./_stream_transform":37,"core-util-is":20,"inherits":49}],36:[function(require,module,exports){
(function (process){
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
module.exports = Readable;
/*<replacement>*/

var isArray = require('isarray');
/*</replacement>*/

/*<replacement>*/


var Buffer = require('buffer').Buffer;
/*</replacement>*/


Readable.ReadableState = ReadableState;

var EE = require('events').EventEmitter;
/*<replacement>*/


if (!EE.listenerCount) EE.listenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

var Stream = require('stream');
/*<replacement>*/


var util = require('core-util-is');

util.inherits = require('inherits');
/*</replacement>*/

var StringDecoder;
util.inherits(Readable, Stream);

function ReadableState(options, stream) {
  options = options || {}; // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"

  var hwm = options.highWaterMark;
  this.highWaterMark = hwm || hwm === 0 ? hwm : 16 * 1024; // cast to ints.

  this.highWaterMark = ~~this.highWaterMark;
  this.buffer = [];
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = false;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false; // In streams that never have any data, and do push(null) right away,
  // the consumer can miss the 'end' event if they do some I/O before
  // consuming the stream.  So, we don't emit('end') until some reading
  // happens.

  this.calledRead = false; // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, becuase any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.

  this.sync = true; // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.

  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false; // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away

  this.objectMode = !!options.objectMode; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.

  this.ranOut = false; // the number of writers that are awaiting a drain event in .pipe()s

  this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled

  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;

  if (options.encoding) {
    if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  if (!(this instanceof Readable)) return new Readable(options);
  this._readableState = new ReadableState(options, this); // legacy

  this.readable = true;
  Stream.call(this);
} // Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.


Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;

  if (typeof chunk === 'string' && !state.objectMode) {
    encoding = encoding || state.defaultEncoding;

    if (encoding !== state.encoding) {
      chunk = new Buffer(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
}; // Unshift should *always* be something directly out of read()


Readable.prototype.unshift = function (chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);

  if (er) {
    stream.emit('error', er);
  } else if (chunk === null || chunk === undefined) {
    state.reading = false;
    if (!state.ended) onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var e = new Error('stream.unshift() after end event');
      stream.emit('error', e);
    } else {
      if (state.decoder && !addToFront && !encoding) chunk = state.decoder.write(chunk); // update the buffer info.

      state.length += state.objectMode ? 1 : chunk.length;

      if (addToFront) {
        state.buffer.unshift(chunk);
      } else {
        state.reading = false;
        state.buffer.push(chunk);
      }

      if (state.needReadable) emitReadable(stream);
      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
} // if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.


function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
} // backwards compatibility.


Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
}; // Don't raise the hwm > 128MB


var MAX_HWM = 0x800000;

function roundUpToNextPowerOf2(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2
    n--;

    for (var p = 1; p < 32; p <<= 1) {
      n |= n >> p;
    }

    n++;
  }

  return n;
}

function howMuchToRead(n, state) {
  if (state.length === 0 && state.ended) return 0;
  if (state.objectMode) return n === 0 ? 0 : 1;

  if (n === null || isNaN(n)) {
    // only flow one buffer at a time
    if (state.flowing && state.buffer.length) return state.buffer[0].length;else return state.length;
  }

  if (n <= 0) return 0; // If we're asking for more than the target buffer level,
  // then raise the water mark.  Bump up to the next highest
  // power of 2, to prevent increasing it excessively in tiny
  // amounts.

  if (n > state.highWaterMark) state.highWaterMark = roundUpToNextPowerOf2(n); // don't have that much.  return null, unless we've ended.

  if (n > state.length) {
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    } else return state.length;
  }

  return n;
} // you can override either this method, or the async _read(n) below.


Readable.prototype.read = function (n) {
  var state = this._readableState;
  state.calledRead = true;
  var nOrig = n;
  var ret;
  if (typeof n !== 'number' || n > 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.

  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.

  if (n === 0 && state.ended) {
    ret = null; // In cases where the decoder did not receive enough data
    // to produce a full chunk, then immediately received an
    // EOF, state.buffer will contain [<Buffer >, <Buffer 00 ...>].
    // howMuchToRead will see this and coerce the amount to
    // read to zero (because it's looking at the length of the
    // first <Buffer > in state.buffer), and we'll end up here.
    //
    // This can only happen via state.decoder -- no other venue
    // exists for pushing a zero-length chunk into state.buffer
    // and triggering this behavior. In this case, we return our
    // remaining data and end the stream, if appropriate.

    if (state.length > 0 && state.decoder) {
      ret = fromList(n, state);
      state.length -= ret.length;
    }

    if (state.length === 0) endReadable(this);
    return ret;
  } // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.
  // if we need a readable event, then we need to do some reading.


  var doRead = state.needReadable; // if we currently have less than the highWaterMark, then also read some

  if (state.length - n <= state.highWaterMark) doRead = true; // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.

  if (state.ended || state.reading) doRead = false;

  if (doRead) {
    state.reading = true;
    state.sync = true; // if the length is currently zero, then we *need* a readable event.

    if (state.length === 0) state.needReadable = true; // call internal read method

    this._read(state.highWaterMark);

    state.sync = false;
  } // If _read called its callback synchronously, then `reading`
  // will be false, and we need to re-evaluate how much data we
  // can return to the user.


  if (doRead && !state.reading) n = howMuchToRead(nOrig, state);
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  }

  state.length -= n; // If we have nothing in the buffer, then we want to know
  // as soon as we *do* get something into the buffer.

  if (state.length === 0 && !state.ended) state.needReadable = true; // If we happened to read() exactly the remaining amount in the
  // buffer, and the EOF has been seen at this point, then make sure
  // that we emit 'end' on the very next tick.

  if (state.ended && !state.endEmitted && state.length === 0) endReadable(this);
  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;

  if (!Buffer.isBuffer(chunk) && 'string' !== typeof chunk && chunk !== null && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }

  return er;
}

function onEofChunk(stream, state) {
  if (state.decoder && !state.ended) {
    var chunk = state.decoder.end();

    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }

  state.ended = true; // if we've ended and we have some data left, then emit
  // 'readable' now to make sure it gets picked up.

  if (state.length > 0) emitReadable(stream);else endReadable(stream);
} // Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.


function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (state.emittedReadable) return;
  state.emittedReadable = true;
  if (state.sync) process.nextTick(function () {
    emitReadable_(stream);
  });else emitReadable_(stream);
}

function emitReadable_(stream) {
  stream.emit('readable');
} // at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.


function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(function () {
      maybeReadMore_(stream, state);
    });
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;

  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    stream.read(0);
    if (len === state.length) // didn't get any data, stop spinning.
      break;else len = state.length;
  }

  state.readingMore = false;
} // abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.


Readable.prototype._read = function (n) {
  this.emit('error', new Error('not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;

    case 1:
      state.pipes = [state.pipes, dest];
      break;

    default:
      state.pipes.push(dest);
      break;
  }

  state.pipesCount += 1;
  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted) process.nextTick(endFn);else src.once('end', endFn);
  dest.on('unpipe', onunpipe);

  function onunpipe(readable) {
    if (readable !== src) return;
    cleanup();
  }

  function onend() {
    dest.end();
  } // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.


  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  function cleanup() {
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup); // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.

    if (!dest._writableState || dest._writableState.needDrain) ondrain();
  } // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.


  function onerror(er) {
    unpipe();
    dest.removeListener('error', onerror);
    if (EE.listenerCount(dest, 'error') === 0) dest.emit('error', er);
  } // This is a brutally ugly hack to make sure that our error handler
  // is attached before any userland ones.  NEVER DO THIS.


  if (!dest._events || !dest._events.error) dest.on('error', onerror);else if (isArray(dest._events.error)) dest._events.error.unshift(onerror);else dest._events.error = [onerror, dest._events.error]; // Both close and finish should trigger unpipe, but only once.

  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }

  dest.once('close', onclose);

  function onfinish() {
    dest.removeListener('close', onclose);
    unpipe();
  }

  dest.once('finish', onfinish);

  function unpipe() {
    src.unpipe(dest);
  } // tell the dest that it's being piped to


  dest.emit('pipe', src); // start the flow if it hasn't been started already.

  if (!state.flowing) {
    // the handler that waits for readable events after all
    // the data gets sucked out in flow.
    // This would be easier to follow with a .once() handler
    // in flow(), but that is too slow.
    this.on('readable', pipeOnReadable);
    state.flowing = true;
    process.nextTick(function () {
      flow(src);
    });
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var dest = this;
    var state = src._readableState;
    state.awaitDrain--;
    if (state.awaitDrain === 0) flow(src);
  };
}

function flow(src) {
  var state = src._readableState;
  var chunk;
  state.awaitDrain = 0;

  function write(dest, i, list) {
    var written = dest.write(chunk);

    if (false === written) {
      state.awaitDrain++;
    }
  }

  while (state.pipesCount && null !== (chunk = src.read())) {
    if (state.pipesCount === 1) write(state.pipes, 0, null);else forEach(state.pipes, write);
    src.emit('data', chunk); // if anyone needs a drain, then we have to wait for that.

    if (state.awaitDrain > 0) return;
  } // if every destination was unpiped, either before entering this
  // function, or in the while loop, then stop flowing.
  //
  // NB: This is a pretty rare edge case.


  if (state.pipesCount === 0) {
    state.flowing = false; // if there were data event listeners added, then switch to old mode.

    if (EE.listenerCount(src, 'data') > 0) emitDataEvents(src);
    return;
  } // at this point, no one needed a drain, so we just ran out of data
  // on the next readable event, start it over again.


  state.ranOut = true;
}

function pipeOnReadable() {
  if (this._readableState.ranOut) {
    this._readableState.ranOut = false;
    flow(this);
  }
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState; // if we're not piping anywhere, then do nothing.

  if (state.pipesCount === 0) return this; // just one destination.  most common case.

  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;
    if (!dest) dest = state.pipes; // got a match.

    state.pipes = null;
    state.pipesCount = 0;
    this.removeListener('readable', pipeOnReadable);
    state.flowing = false;
    if (dest) dest.emit('unpipe', this);
    return this;
  } // slow case. multiple pipe destinations.


  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    this.removeListener('readable', pipeOnReadable);
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this);
    }

    return this;
  } // try to find the right one.


  var i = indexOf(state.pipes, dest);
  if (i === -1) return this;
  state.pipes.splice(i, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];
  dest.emit('unpipe', this);
  return this;
}; // set up data events if they are asked for
// Ensure readable listeners eventually get something


Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);
  if (ev === 'data' && !this._readableState.flowing) emitDataEvents(this);

  if (ev === 'readable' && this.readable) {
    var state = this._readableState;

    if (!state.readableListening) {
      state.readableListening = true;
      state.emittedReadable = false;
      state.needReadable = true;

      if (!state.reading) {
        this.read(0);
      } else if (state.length) {
        emitReadable(this, state);
      }
    }
  }

  return res;
};

Readable.prototype.addListener = Readable.prototype.on; // pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.

Readable.prototype.resume = function () {
  emitDataEvents(this);
  this.read(0);
  this.emit('resume');
};

Readable.prototype.pause = function () {
  emitDataEvents(this, true);
  this.emit('pause');
};

function emitDataEvents(stream, startPaused) {
  var state = stream._readableState;

  if (state.flowing) {
    // https://github.com/isaacs/readable-stream/issues/16
    throw new Error('Cannot switch to old mode now.');
  }

  var paused = startPaused || false;
  var readable = false; // convert to an old-style stream.

  stream.readable = true;
  stream.pipe = Stream.prototype.pipe;
  stream.on = stream.addListener = Stream.prototype.on;
  stream.on('readable', function () {
    readable = true;
    var c;

    while (!paused && null !== (c = stream.read())) {
      stream.emit('data', c);
    }

    if (c === null) {
      readable = false;
      stream._readableState.needReadable = true;
    }
  });

  stream.pause = function () {
    paused = true;
    this.emit('pause');
  };

  stream.resume = function () {
    paused = false;
    if (readable) process.nextTick(function () {
      stream.emit('readable');
    });else this.read(0);
    this.emit('resume');
  }; // now make it start, just in case it hadn't already.


  stream.emit('readable');
} // wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.


Readable.prototype.wrap = function (stream) {
  var state = this._readableState;
  var paused = false;
  var self = this;
  stream.on('end', function () {
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) self.push(chunk);
    }

    self.push(null);
  });
  stream.on('data', function (chunk) {
    if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode
    //if (state.objectMode && util.isNullOrUndefined(chunk))

    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;
    var ret = self.push(chunk);

    if (!ret) {
      paused = true;
      stream.pause();
    }
  }); // proxy all the other methods.
  // important when wrapping filters and duplexes.

  for (var i in stream) {
    if (typeof stream[i] === 'function' && typeof this[i] === 'undefined') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  } // proxy certain important events.


  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
  forEach(events, function (ev) {
    stream.on(ev, self.emit.bind(self, ev));
  }); // when we try to consume some more bytes, simply unpause the
  // underlying stream.

  self._read = function (n) {
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
}; // exposed for testing purposes only.


Readable._fromList = fromList; // Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.

function fromList(n, state) {
  var list = state.buffer;
  var length = state.length;
  var stringMode = !!state.decoder;
  var objectMode = !!state.objectMode;
  var ret; // nothing in the list, definitely empty.

  if (list.length === 0) return null;
  if (length === 0) ret = null;else if (objectMode) ret = list.shift();else if (!n || n >= length) {
    // read it all, truncate the array.
    if (stringMode) ret = list.join('');else ret = Buffer.concat(list, length);
    list.length = 0;
  } else {
    // read just some of it.
    if (n < list[0].length) {
      // just take a part of the first list item.
      // slice is the same for buffers and strings.
      var buf = list[0];
      ret = buf.slice(0, n);
      list[0] = buf.slice(n);
    } else if (n === list[0].length) {
      // first list is a perfect match
      ret = list.shift();
    } else {
      // complex case.
      // we have enough to cover it, but it spans past the first buffer.
      if (stringMode) ret = '';else ret = new Buffer(n);
      var c = 0;

      for (var i = 0, l = list.length; i < l && c < n; i++) {
        var buf = list[0];
        var cpy = Math.min(n - c, buf.length);
        if (stringMode) ret += buf.slice(0, cpy);else buf.copy(ret, c, 0, cpy);
        if (cpy < buf.length) list[0] = buf.slice(cpy);else list.shift();
        c += cpy;
      }
    }
  }
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState; // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.

  if (state.length > 0) throw new Error('endReadable called on non-empty stream');

  if (!state.endEmitted && state.calledRead) {
    state.ended = true;
    process.nextTick(function () {
      // Check that we didn't get one last unshift.
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
      }
    });
  }
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }

  return -1;
}

}).call(this,require('_process'))

},{"_process":100,"buffer":17,"core-util-is":20,"events":29,"inherits":49,"isarray":32,"stream":116,"string_decoder/":41}],37:[function(require,module,exports){
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.
module.exports = Transform;

var Duplex = require('./_stream_duplex');
/*<replacement>*/


var util = require('core-util-is');

util.inherits = require('inherits');
/*</replacement>*/

util.inherits(Transform, Duplex);

function TransformState(options, stream) {
  this.afterTransform = function (er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;
  var cb = ts.writecb;
  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));
  ts.writechunk = null;
  ts.writecb = null;
  if (data !== null && data !== undefined) stream.push(data);
  if (cb) cb(er);
  var rs = stream._readableState;
  rs.reading = false;

  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);
  Duplex.call(this, options);
  var ts = this._transformState = new TransformState(options, this); // when the writable side finishes, then flush out anything remaining.

  var stream = this; // start out asking for a readable event once data is transformed.

  this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.

  this._readableState.sync = false;
  this.once('finish', function () {
    if ('function' === typeof this._flush) this._flush(function (er) {
      done(stream, er);
    });else done(stream);
  });
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
}; // This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.


Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;

  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
}; // Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.


Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;

    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

function done(stream, er) {
  if (er) return stream.emit('error', er); // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided

  var ws = stream._writableState;
  var rs = stream._readableState;
  var ts = stream._transformState;
  if (ws.length) throw new Error('calling transform done when ws.length != 0');
  if (ts.transforming) throw new Error('calling transform done when still transforming');
  return stream.push(null);
}

},{"./_stream_duplex":34,"core-util-is":20,"inherits":49}],38:[function(require,module,exports){
(function (process){
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, cb), and it'll handle all
// the drain event emission and buffering.
module.exports = Writable;
/*<replacement>*/

var Buffer = require('buffer').Buffer;
/*</replacement>*/


Writable.WritableState = WritableState;
/*<replacement>*/

var util = require('core-util-is');

util.inherits = require('inherits');
/*</replacement>*/

var Stream = require('stream');

util.inherits(Writable, Stream);

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
}

function WritableState(options, stream) {
  options = options || {}; // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()

  var hwm = options.highWaterMark;
  this.highWaterMark = hwm || hwm === 0 ? hwm : 16 * 1024; // object stream flag to indicate whether or not this stream
  // contains buffers or objects.

  this.objectMode = !!options.objectMode; // cast to ints.

  this.highWaterMark = ~~this.highWaterMark;
  this.needDrain = false; // at the start of calling end()

  this.ending = false; // when end() has been called, and returned

  this.ended = false; // when 'finish' is emitted

  this.finished = false; // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.

  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.

  this.length = 0; // a flag to see when we're in the middle of a write.

  this.writing = false; // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, becuase any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.

  this.sync = true; // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.

  this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)

  this.onwrite = function (er) {
    onwrite(stream, er);
  }; // the callback that the user supplies to write(chunk,encoding,cb)


  this.writecb = null; // the amount that is being written when _write is called.

  this.writelen = 0;
  this.buffer = []; // True if the error was already emitted and should not be thrown again

  this.errorEmitted = false;
}

function Writable(options) {
  var Duplex = require('./_stream_duplex'); // Writable ctor is applied to Duplexes, though they're not
  // instanceof Writable, they're instanceof Readable.


  if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);
  this._writableState = new WritableState(options, this); // legacy.

  this.writable = true;
  Stream.call(this);
} // Otherwise people can pipe Writable streams, which is just wrong.


Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe. Not readable.'));
};

function writeAfterEnd(stream, state, cb) {
  var er = new Error('write after end'); // TODO: defer error events consistently everywhere, not just the cb

  stream.emit('error', er);
  process.nextTick(function () {
    cb(er);
  });
} // If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.


function validChunk(stream, state, chunk, cb) {
  var valid = true;

  if (!Buffer.isBuffer(chunk) && 'string' !== typeof chunk && chunk !== null && chunk !== undefined && !state.objectMode) {
    var er = new TypeError('Invalid non-string/buffer chunk');
    stream.emit('error', er);
    process.nextTick(function () {
      cb(er);
    });
    valid = false;
  }

  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
  if (typeof cb !== 'function') cb = function cb() {};
  if (state.ended) writeAfterEnd(this, state, cb);else if (validChunk(this, state, chunk, cb)) ret = writeOrBuffer(this, state, chunk, encoding, cb);
  return ret;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = new Buffer(chunk, encoding);
  }

  return chunk;
} // if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.


function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);
  if (Buffer.isBuffer(chunk)) encoding = 'buffer';
  var len = state.objectMode ? 1 : chunk.length;
  state.length += len;
  var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.

  if (!ret) state.needDrain = true;
  if (state.writing) state.buffer.push(new WriteReq(chunk, encoding, cb));else doWrite(stream, state, len, chunk, encoding, cb);
  return ret;
}

function doWrite(stream, state, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;

  stream._write(chunk, encoding, state.onwrite);

  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  if (sync) process.nextTick(function () {
    cb(er);
  });else cb(er);
  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;
  onwriteStateUpdate(state);
  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(stream, state);
    if (!finished && !state.bufferProcessing && state.buffer.length) clearBuffer(stream, state);

    if (sync) {
      process.nextTick(function () {
        afterWrite(stream, state, finished, cb);
      });
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  cb();
  if (finished) finishMaybe(stream, state);
} // Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.


function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
} // if there's something in the buffer waiting, then process it


function clearBuffer(stream, state) {
  state.bufferProcessing = true;

  for (var c = 0; c < state.buffer.length; c++) {
    var entry = state.buffer[c];
    var chunk = entry.chunk;
    var encoding = entry.encoding;
    var cb = entry.callback;
    var len = state.objectMode ? 1 : chunk.length;
    doWrite(stream, state, len, chunk, encoding, cb); // if we didn't call the onwrite immediately, then
    // it means that we need to wait until it does.
    // also, that means that the chunk and cb are currently
    // being processed, so move the buffer counter past them.

    if (state.writing) {
      c++;
      break;
    }
  }

  state.bufferProcessing = false;
  if (c < state.buffer.length) state.buffer = state.buffer.slice(c);else state.buffer.length = 0;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('not implemented'));
};

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (typeof chunk !== 'undefined' && chunk !== null) this.write(chunk, encoding); // ignore unnecessary end() calls.

  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(stream, state) {
  return state.ending && state.length === 0 && !state.finished && !state.writing;
}

function finishMaybe(stream, state) {
  var need = needFinish(stream, state);

  if (need) {
    state.finished = true;
    stream.emit('finish');
  }

  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);

  if (cb) {
    if (state.finished) process.nextTick(cb);else stream.once('finish', cb);
  }

  state.ended = true;
}

}).call(this,require('_process'))

},{"./_stream_duplex":34,"_process":100,"buffer":17,"core-util-is":20,"inherits":49,"stream":116}],39:[function(require,module,exports){
(function (process){
"use strict";

var Stream = require('stream'); // hack to fix a circular dependency issue when used with browserify


exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = Stream;
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');

if (!process.browser && process.env.READABLE_STREAM === 'disable') {
  module.exports = require('stream');
}

}).call(this,require('_process'))

},{"./lib/_stream_duplex.js":34,"./lib/_stream_passthrough.js":35,"./lib/_stream_readable.js":36,"./lib/_stream_transform.js":37,"./lib/_stream_writable.js":38,"_process":100,"stream":116}],40:[function(require,module,exports){
"use strict";

module.exports = require("./lib/_stream_writable.js");

},{"./lib/_stream_writable.js":38}],41:[function(require,module,exports){
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var Buffer = require('buffer').Buffer;

var isBufferEncoding = Buffer.isEncoding || function (encoding) {
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
    case 'raw':
      return true;

    default:
      return false;
  }
};

function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
} // StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.


var StringDecoder = exports.StringDecoder = function (encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);

  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;

    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;

    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;

    default:
      this.write = passThroughWrite;
      return;
  } // Enough space to store all bytes of a single character. UTF-8 needs 4
  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).


  this.charBuffer = new Buffer(6); // Number of bytes received for the current incomplete multi-byte character.

  this.charReceived = 0; // Number of bytes expected for the current incomplete multi-byte character.

  this.charLength = 0;
}; // write decodes the given buffer and returns it as JS string that is
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .


StringDecoder.prototype.write = function (buffer) {
  var charStr = ''; // if our last write ended with an incomplete multibyte character

  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var available = buffer.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : buffer.length; // add the new bytes to the char buffer

    buffer.copy(this.charBuffer, this.charReceived, 0, available);
    this.charReceived += available;

    if (this.charReceived < this.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    } // remove bytes belonging to the current character from the buffer


    buffer = buffer.slice(available, buffer.length); // get the character that was split

    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding); // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character

    var charCode = charStr.charCodeAt(charStr.length - 1);

    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }

    this.charReceived = this.charLength = 0; // if there are no more bytes in this buffer, just emit our char

    if (buffer.length === 0) {
      return charStr;
    }

    break;
  } // determine and set charLength / charReceived


  this.detectIncompleteChar(buffer);
  var end = buffer.length;

  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
    end -= this.charReceived;
  }

  charStr += buffer.toString(this.encoding, 0, end);
  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end); // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character

  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    buffer.copy(this.charBuffer, 0, 0, size);
    return charStr.substring(0, end);
  } // or just emit the charStr


  return charStr;
}; // detectIncompleteChar determines if there is an incomplete UTF-8 character at
// the end of the given buffer. If so, it sets this.charLength to the byte
// length that character, and sets this.charReceived to the number of bytes
// that are available for this character.


StringDecoder.prototype.detectIncompleteChar = function (buffer) {
  // determine how many bytes we have to check at the end of this buffer
  var i = buffer.length >= 3 ? 3 : buffer.length; // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.

  for (; i > 0; i--) {
    var c = buffer[buffer.length - i]; // See http://en.wikipedia.org/wiki/UTF-8#Description
    // 110XXXXX

    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    } // 1110XXXX


    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    } // 11110XXX


    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }

  this.charReceived = i;
};

StringDecoder.prototype.end = function (buffer) {
  var res = '';
  if (buffer && buffer.length) res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}

function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}

},{"buffer":17}],42:[function(require,module,exports){
"use strict";

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

},{}],43:[function(require,module,exports){
'use strict';

var types = [require('./nextTick'), require('./mutation.js'), require('./messageChannel'), require('./stateChange'), require('./timeout')];
var draining;
var currentQueue;
var queueIndex = -1;
var queue = [];
var scheduled = false;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    nextTick();
  }
} //named nextTick for less confusing stack traces


function nextTick() {
  if (draining) {
    return;
  }

  scheduled = false;
  draining = true;
  var len = queue.length;
  var timeout = setTimeout(cleanUpNextTick);

  while (len) {
    currentQueue = queue;
    queue = [];

    while (currentQueue && ++queueIndex < len) {
      currentQueue[queueIndex].run();
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  queueIndex = -1;
  draining = false;
  clearTimeout(timeout);
}

var scheduleDrain;
var i = -1;
var len = types.length;

while (++i < len) {
  if (types[i] && types[i].test && types[i].test()) {
    scheduleDrain = types[i].install(nextTick);
    break;
  }
} // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  var fun = this.fun;
  var array = this.array;

  switch (array.length) {
    case 0:
      return fun();

    case 1:
      return fun(array[0]);

    case 2:
      return fun(array[0], array[1]);

    case 3:
      return fun(array[0], array[1], array[2]);

    default:
      return fun.apply(null, array);
  }
};

module.exports = immediate;

function immediate(task) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(task, args));

  if (!scheduled && !draining) {
    scheduled = true;
    scheduleDrain();
  }
}

},{"./messageChannel":44,"./mutation.js":45,"./nextTick":46,"./stateChange":47,"./timeout":48}],44:[function(require,module,exports){
(function (global){
'use strict';

exports.test = function () {
  if (global.setImmediate) {
    // we can only get here in IE10
    // which doesn't handel postMessage well
    return false;
  }

  return typeof global.MessageChannel !== 'undefined';
};

exports.install = function (func) {
  var channel = new global.MessageChannel();
  channel.port1.onmessage = func;
  return function () {
    channel.port2.postMessage(0);
  };
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],45:[function(require,module,exports){
(function (global){
'use strict'; //based off rsvp https://github.com/tildeio/rsvp.js
//license https://github.com/tildeio/rsvp.js/blob/master/LICENSE
//https://github.com/tildeio/rsvp.js/blob/master/lib/rsvp/asap.js

var Mutation = global.MutationObserver || global.WebKitMutationObserver;

exports.test = function () {
  return Mutation;
};

exports.install = function (handle) {
  var called = 0;
  var observer = new Mutation(handle);
  var element = global.document.createTextNode('');
  observer.observe(element, {
    characterData: true
  });
  return function () {
    element.data = called = ++called % 2;
  };
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],46:[function(require,module,exports){
(function (process){
'use strict';

exports.test = function () {
  // Don't get fooled by e.g. browserify environments.
  return typeof process !== 'undefined' && !process.browser;
};

exports.install = function (func) {
  return function () {
    process.nextTick(func);
  };
};

}).call(this,require('_process'))

},{"_process":100}],47:[function(require,module,exports){
(function (global){
'use strict';

exports.test = function () {
  return 'document' in global && 'onreadystatechange' in global.document.createElement('script');
};

exports.install = function (handle) {
  return function () {
    // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
    // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
    var scriptEl = global.document.createElement('script');

    scriptEl.onreadystatechange = function () {
      handle();
      scriptEl.onreadystatechange = null;
      scriptEl.parentNode.removeChild(scriptEl);
      scriptEl = null;
    };

    global.document.documentElement.appendChild(scriptEl);
    return handle;
  };
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],48:[function(require,module,exports){
'use strict';

exports.test = function () {
  return true;
};

exports.install = function (t) {
  return function () {
    setTimeout(t, 0);
  };
};

},{}],49:[function(require,module,exports){
"use strict";

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;

      var TempCtor = function TempCtor() {};

      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}

},{}],50:[function(require,module,exports){
"use strict";

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};

function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
} // For Node v0.10 support. Remove this eventually.


function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
}

},{}],51:[function(require,module,exports){
"use strict";

module.exports = isTypedArray;
isTypedArray.strict = isStrictTypedArray;
isTypedArray.loose = isLooseTypedArray;
var toString = Object.prototype.toString;
var names = {
  '[object Int8Array]': true,
  '[object Int16Array]': true,
  '[object Int32Array]': true,
  '[object Uint8Array]': true,
  '[object Uint8ClampedArray]': true,
  '[object Uint16Array]': true,
  '[object Uint32Array]': true,
  '[object Float32Array]': true,
  '[object Float64Array]': true
};

function isTypedArray(arr) {
  return isStrictTypedArray(arr) || isLooseTypedArray(arr);
}

function isStrictTypedArray(arr) {
  return arr instanceof Int8Array || arr instanceof Int16Array || arr instanceof Int32Array || arr instanceof Uint8Array || arr instanceof Uint8ClampedArray || arr instanceof Uint16Array || arr instanceof Uint32Array || arr instanceof Float32Array || arr instanceof Float64Array;
}

function isLooseTypedArray(arr) {
  return names[toString.call(arr)];
}

},{}],52:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**!
 * is
 * the definitive JavaScript type testing library
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */
var objProto = Object.prototype;
var owns = objProto.hasOwnProperty;
var toString = objProto.toString;

var isActualNaN = function isActualNaN(value) {
  return value !== value;
};

var NON_HOST_TYPES = {
  "boolean": 1,
  "number": 1,
  "string": 1,
  "undefined": 1
};
/**
 * Expose `is`
 */

var is = module.exports = {};
/**
 * Test general.
 */

/**
 * is.type
 * Test if `value` is a type of `type`.
 *
 * @param {Mixed} value value to test
 * @param {String} type type
 * @return {Boolean} true if `value` is a type of `type`, false otherwise
 * @api public
 */

is.a = is.type = function (value, type) {
  return _typeof(value) === type;
};
/**
 * is.defined
 * Test if `value` is defined.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if 'value' is defined, false otherwise
 * @api public
 */


is.defined = function (value) {
  return value !== undefined;
};
/**
 * is.empty
 * Test if `value` is empty.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is empty, false otherwise
 * @api public
 */


is.empty = function (value) {
  var type = toString.call(value);
  var key;

  if ('[object Array]' === type || '[object Arguments]' === type) {
    return value.length === 0;
  }

  if ('[object Object]' === type) {
    for (key in value) {
      if (owns.call(value, key)) return false;
    }

    return true;
  }

  if ('[object String]' === type) {
    return '' === value;
  }

  return false;
};
/**
 * is.equal
 * Test if `value` is equal to `other`.
 *
 * @param {Mixed} value value to test
 * @param {Mixed} other value to compare with
 * @return {Boolean} true if `value` is equal to `other`, false otherwise
 */


is.equal = function (value, other) {
  var type = toString.call(value);
  var key;

  if (type !== toString.call(other)) {
    return false;
  }

  if ('[object Object]' === type) {
    for (key in value) {
      if (!is.equal(value[key], other[key])) {
        return false;
      }
    }

    return true;
  }

  if ('[object Array]' === type) {
    key = value.length;

    if (key !== other.length) {
      return false;
    }

    while (--key) {
      if (!is.equal(value[key], other[key])) {
        return false;
      }
    }

    return true;
  }

  if ('[object Function]' === type) {
    return value.prototype === other.prototype;
  }

  if ('[object Date]' === type) {
    return value.getTime() === other.getTime();
  }

  return value === other;
};
/**
 * is.hosted
 * Test if `value` is hosted by `host`.
 *
 * @param {Mixed} value to test
 * @param {Mixed} host host to test with
 * @return {Boolean} true if `value` is hosted by `host`, false otherwise
 * @api public
 */


is.hosted = function (value, host) {
  var type = _typeof(host[value]);

  return type === 'object' ? !!host[value] : !NON_HOST_TYPES[type];
};
/**
 * is.instance
 * Test if `value` is an instance of `constructor`.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an instance of `constructor`
 * @api public
 */


is.instance = is['instanceof'] = function (value, constructor) {
  return value instanceof constructor;
};
/**
 * is.null
 * Test if `value` is null.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is null, false otherwise
 * @api public
 */


is['null'] = function (value) {
  return value === null;
};
/**
 * is.undefined
 * Test if `value` is undefined.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is undefined, false otherwise
 * @api public
 */


is.undefined = function (value) {
  return value === undefined;
};
/**
 * Test arguments.
 */

/**
 * is.arguments
 * Test if `value` is an arguments object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an arguments object, false otherwise
 * @api public
 */


is.arguments = function (value) {
  var isStandardArguments = '[object Arguments]' === toString.call(value);
  var isOldArguments = !is.array(value) && is.arraylike(value) && is.object(value) && is.fn(value.callee);
  return isStandardArguments || isOldArguments;
};
/**
 * Test array.
 */

/**
 * is.array
 * Test if 'value' is an array.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an array, false otherwise
 * @api public
 */


is.array = function (value) {
  return '[object Array]' === toString.call(value);
};
/**
 * is.arguments.empty
 * Test if `value` is an empty arguments object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an empty arguments object, false otherwise
 * @api public
 */


is.arguments.empty = function (value) {
  return is.arguments(value) && value.length === 0;
};
/**
 * is.array.empty
 * Test if `value` is an empty array.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an empty array, false otherwise
 * @api public
 */


is.array.empty = function (value) {
  return is.array(value) && value.length === 0;
};
/**
 * is.arraylike
 * Test if `value` is an arraylike object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an arguments object, false otherwise
 * @api public
 */


is.arraylike = function (value) {
  return !!value && !is.boolean(value) && owns.call(value, 'length') && isFinite(value.length) && is.number(value.length) && value.length >= 0;
};
/**
 * Test boolean.
 */

/**
 * is.boolean
 * Test if `value` is a boolean.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a boolean, false otherwise
 * @api public
 */


is.boolean = function (value) {
  return '[object Boolean]' === toString.call(value);
};
/**
 * is.false
 * Test if `value` is false.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is false, false otherwise
 * @api public
 */


is['false'] = function (value) {
  return is.boolean(value) && (value === false || value.valueOf() === false);
};
/**
 * is.true
 * Test if `value` is true.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is true, false otherwise
 * @api public
 */


is['true'] = function (value) {
  return is.boolean(value) && (value === true || value.valueOf() === true);
};
/**
 * Test date.
 */

/**
 * is.date
 * Test if `value` is a date.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a date, false otherwise
 * @api public
 */


is.date = function (value) {
  return '[object Date]' === toString.call(value);
};
/**
 * Test element.
 */

/**
 * is.element
 * Test if `value` is an html element.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an HTML Element, false otherwise
 * @api public
 */


is.element = function (value) {
  return value !== undefined && typeof HTMLElement !== 'undefined' && value instanceof HTMLElement && value.nodeType === 1;
};
/**
 * Test error.
 */

/**
 * is.error
 * Test if `value` is an error object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an error object, false otherwise
 * @api public
 */


is.error = function (value) {
  return '[object Error]' === toString.call(value);
};
/**
 * Test function.
 */

/**
 * is.fn / is.function (deprecated)
 * Test if `value` is a function.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a function, false otherwise
 * @api public
 */


is.fn = is['function'] = function (value) {
  var isAlert = typeof window !== 'undefined' && value === window.alert;
  return isAlert || '[object Function]' === toString.call(value);
};
/**
 * Test number.
 */

/**
 * is.number
 * Test if `value` is a number.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a number, false otherwise
 * @api public
 */


is.number = function (value) {
  return '[object Number]' === toString.call(value);
};
/**
 * is.infinite
 * Test if `value` is positive or negative infinity.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is positive or negative Infinity, false otherwise
 * @api public
 */


is.infinite = function (value) {
  return value === Infinity || value === -Infinity;
};
/**
 * is.decimal
 * Test if `value` is a decimal number.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a decimal number, false otherwise
 * @api public
 */


is.decimal = function (value) {
  return is.number(value) && !isActualNaN(value) && !is.infinite(value) && value % 1 !== 0;
};
/**
 * is.divisibleBy
 * Test if `value` is divisible by `n`.
 *
 * @param {Number} value value to test
 * @param {Number} n dividend
 * @return {Boolean} true if `value` is divisible by `n`, false otherwise
 * @api public
 */


is.divisibleBy = function (value, n) {
  var isDividendInfinite = is.infinite(value);
  var isDivisorInfinite = is.infinite(n);
  var isNonZeroNumber = is.number(value) && !isActualNaN(value) && is.number(n) && !isActualNaN(n) && n !== 0;
  return isDividendInfinite || isDivisorInfinite || isNonZeroNumber && value % n === 0;
};
/**
 * is.int
 * Test if `value` is an integer.
 *
 * @param value to test
 * @return {Boolean} true if `value` is an integer, false otherwise
 * @api public
 */


is.int = function (value) {
  return is.number(value) && !isActualNaN(value) && value % 1 === 0;
};
/**
 * is.maximum
 * Test if `value` is greater than 'others' values.
 *
 * @param {Number} value value to test
 * @param {Array} others values to compare with
 * @return {Boolean} true if `value` is greater than `others` values
 * @api public
 */


is.maximum = function (value, others) {
  if (isActualNaN(value)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.arraylike(others)) {
    throw new TypeError('second argument must be array-like');
  }

  var len = others.length;

  while (--len >= 0) {
    if (value < others[len]) {
      return false;
    }
  }

  return true;
};
/**
 * is.minimum
 * Test if `value` is less than `others` values.
 *
 * @param {Number} value value to test
 * @param {Array} others values to compare with
 * @return {Boolean} true if `value` is less than `others` values
 * @api public
 */


is.minimum = function (value, others) {
  if (isActualNaN(value)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.arraylike(others)) {
    throw new TypeError('second argument must be array-like');
  }

  var len = others.length;

  while (--len >= 0) {
    if (value > others[len]) {
      return false;
    }
  }

  return true;
};
/**
 * is.nan
 * Test if `value` is not a number.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is not a number, false otherwise
 * @api public
 */


is.nan = function (value) {
  return !is.number(value) || value !== value;
};
/**
 * is.even
 * Test if `value` is an even number.
 *
 * @param {Number} value value to test
 * @return {Boolean} true if `value` is an even number, false otherwise
 * @api public
 */


is.even = function (value) {
  return is.infinite(value) || is.number(value) && value === value && value % 2 === 0;
};
/**
 * is.odd
 * Test if `value` is an odd number.
 *
 * @param {Number} value value to test
 * @return {Boolean} true if `value` is an odd number, false otherwise
 * @api public
 */


is.odd = function (value) {
  return is.infinite(value) || is.number(value) && value === value && value % 2 !== 0;
};
/**
 * is.ge
 * Test if `value` is greater than or equal to `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean}
 * @api public
 */


is.ge = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }

  return !is.infinite(value) && !is.infinite(other) && value >= other;
};
/**
 * is.gt
 * Test if `value` is greater than `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean}
 * @api public
 */


is.gt = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }

  return !is.infinite(value) && !is.infinite(other) && value > other;
};
/**
 * is.le
 * Test if `value` is less than or equal to `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean} if 'value' is less than or equal to 'other'
 * @api public
 */


is.le = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }

  return !is.infinite(value) && !is.infinite(other) && value <= other;
};
/**
 * is.lt
 * Test if `value` is less than `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean} if `value` is less than `other`
 * @api public
 */


is.lt = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }

  return !is.infinite(value) && !is.infinite(other) && value < other;
};
/**
 * is.within
 * Test if `value` is within `start` and `finish`.
 *
 * @param {Number} value value to test
 * @param {Number} start lower bound
 * @param {Number} finish upper bound
 * @return {Boolean} true if 'value' is is within 'start' and 'finish'
 * @api public
 */


is.within = function (value, start, finish) {
  if (isActualNaN(value) || isActualNaN(start) || isActualNaN(finish)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.number(value) || !is.number(start) || !is.number(finish)) {
    throw new TypeError('all arguments must be numbers');
  }

  var isAnyInfinite = is.infinite(value) || is.infinite(start) || is.infinite(finish);
  return isAnyInfinite || value >= start && value <= finish;
};
/**
 * Test object.
 */

/**
 * is.object
 * Test if `value` is an object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an object, false otherwise
 * @api public
 */


is.object = function (value) {
  return value && '[object Object]' === toString.call(value);
};
/**
 * is.hash
 * Test if `value` is a hash - a plain object literal.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a hash, false otherwise
 * @api public
 */


is.hash = function (value) {
  return is.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval;
};
/**
 * Test regexp.
 */

/**
 * is.regexp
 * Test if `value` is a regular expression.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a regexp, false otherwise
 * @api public
 */


is.regexp = function (value) {
  return '[object RegExp]' === toString.call(value);
};
/**
 * Test string.
 */

/**
 * is.string
 * Test if `value` is a string.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if 'value' is a string, false otherwise
 * @api public
 */


is.string = function (value) {
  return '[object String]' === toString.call(value);
};

},{}],53:[function(require,module,exports){
"use strict";

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],54:[function(require,module,exports){
(function (process,Buffer){
"use strict";

var Writable = require('readable-stream/writable');

var Readable = require('readable-stream/readable');

var peek = require('level-peek');

var util = require('util');

var once = require('once');

var EMPTY = new Buffer(0);
var ENCODER = {
  encode: function encode(data) {
    return typeof data === 'string' ? data = new Buffer(data) : data;
  },
  decode: function decode(data) {
    return Buffer.isBuffer(data) ? data : new Buffer(data);
  },
  buffer: true,
  type: 'raw'
};

var noop = function noop() {};

var pad = function pad(n) {
  n = n.toString(16);
  return '00000000'.slice(0, -n.length) + n;
};

var expand = function expand(buf, len) {
  var tmp = new Buffer(len);
  buf.copy(tmp);
  return tmp;
};

module.exports = function (db, opts) {
  if (!opts) opts = {};
  var blobs = {};
  var blockSize = opts.blockSize || 65536;
  var maxBatch = opts.batch || 100;
  var blank = new Buffer(blockSize);
  db.put('\x00', 'ignore', noop); // memdown#12 workaround

  var reservations = {};

  var mutateBlock = function mutateBlock(key, offset, block, append, cb) {
    var release = function release() {
      if (! --reservations[key].locks) delete reservations[key];
    };

    var onreservation = function onreservation(r) {
      r.locks++;

      if (!r.block && !offset) {
        r.block = block;
        cb(null, r.block, release);
        return;
      }

      if (!r.block) r.block = new Buffer(blockSize);
      if (r.block.length < offset + block.length) r.block = expand(r.block, offset + block.length);
      block.copy(r.block, offset);
      if (!append && offset + block.length < r.block.length) r.block = r.block.slice(0, offset + block.length);
      cb(null, r.block, release);
    };

    if (reservations[key]) return onreservation(reservations[key]);
    db.get(key, {
      valueEncoding: ENCODER
    }, function (err, block) {
      if (err && !err.notFound) return cb(err);
      if (!reservations[key]) reservations[key] = {
        locks: 0,
        block: block
      };
      onreservation(reservations[key]);
    });
  };

  var WriteStream = function WriteStream(name, opts) {
    if (!(this instanceof WriteStream)) return new WriteStream(name, opts);
    if (!opts) opts = {};
    this.name = name;
    this.blocks = [];
    this.batch = [];
    this.bytesWritten = 0;
    this.truncate = !opts.append;
    this.append = opts.append;
    this._shouldInitAppend = this.append && opts.start === undefined;
    this._destroyed = false;

    this._init(opts.start || 0);

    Writable.call(this);
  };

  util.inherits(WriteStream, Writable);

  WriteStream.prototype._init = function (start) {
    this.blockIndex = start / blockSize | 0;
    this.blockOffset = start - this.blockIndex * blockSize;
    this.blockLength = this.blockOffset;
  };

  WriteStream.prototype._flush = function (cb) {
    if (!this.batch.length) return cb();
    var key = this.batch[this.batch.length - 1].key;
    var batch = this.batch;
    this.batch = [];
    if (!this.truncate) return db.batch(batch, cb);
    this.truncate = false;

    this._truncate(batch, key, cb);
  };

  WriteStream.prototype._truncate = function (batch, key, cb) {
    cb = once(cb);
    var dels = [];
    var keys = db.createKeyStream({
      start: key,
      end: this.name + '\xff\xff'
    });
    keys.on('error', cb);
    keys.on('data', function (key) {
      dels.push({
        type: 'del',
        key: key
      });
    });
    keys.on('end', function () {
      dels.push.apply(dels, batch);
      db.batch(dels, cb);
    });
  };

  WriteStream.prototype._writeBlock = function (cb) {
    var block = this.blocks.length === 1 ? this.blocks[0] : Buffer.concat(this.blocks, this.blockLength - this.blockOffset);
    var index = this.blockIndex;
    var offset = this.blockOffset;
    var self = this;
    this.blockOffset = 0;
    this.blockLength = 0;
    this.blockIndex++;
    this.blocks = [];
    var key = this.name + '\xff' + pad(index);

    var append = function append(block, force, cb) {
      if (block.length) {
        self.batch.push({
          type: 'put',
          key: key,
          value: block,
          valueEncoding: ENCODER
        });
      }

      if (!force && self.batch.length < maxBatch) return cb();
      return self._flush(cb);
    };

    if (!offset && block.length === blockSize) return append(block, false, cb);
    if (!offset && !this.append) return append(block, false, cb); // partial write

    mutateBlock(key, offset, block, this.append, function (err, block, release) {
      if (err) return cb(err);
      append(block, true, function (err) {
        release();
        cb(err);
      });
    });
  };

  WriteStream.prototype._initAppend = function (data, enc, cb) {
    var self = this;
    this._shouldInitAppend = false;
    blobs.size(this.name, function (err, size) {
      if (err) return cb(err);

      self._init(size);

      self._write(data, enc, cb);
    });
  };

  WriteStream.prototype._write = function (data, enc, cb) {
    if (!data.length || this._destroyed) return cb();
    if (this._shouldInitAppend) return this._initAppend(data, enc, cb);
    var self = this;
    var overflow;
    var free = blockSize - this.blockLength;

    var done = function done(err) {
      if (err) return cb(err);
      if (overflow) return self._write(overflow, enc, cb);
      cb();
    };

    if (data.length > free) {
      overflow = data.slice(free);
      data = data.slice(0, free);
    }

    this.bytesWritten += data.length;
    this.blockLength += data.length;
    this.blocks.push(data);
    if (data.length < free) return done();

    this._writeBlock(done);
  };

  WriteStream.prototype.destroy = function () {
    if (this._destroyed) return;
    this._destroyed = true;
    process.nextTick(this.emit.bind(this, 'close'));
  };

  WriteStream.prototype.end = function (data) {
    var self = this;
    var args = arguments;

    if (data && typeof data !== 'function') {
      this.write(data);
      data = EMPTY;
    }

    this.write(EMPTY, function () {
      self._writeBlock(function (err) {
        if (err) return self.emit('error', err);

        self._flush(function (err) {
          if (err) return self.emit('error', err);
          Writable.prototype.end.apply(self, args);
        });
      });
    });
  };

  var ReadStream = function ReadStream(name, opts) {
    if (!opts) opts = {};
    var self = this;
    var start = opts.start || 0;
    var blockIndex = start / blockSize | 0;
    var blockOffset = start - blockIndex * blockSize;
    var key = name + '\xff' + pad(blockIndex);
    this.name = name;
    this._missing = (typeof opts.end === 'number' ? opts.end : Infinity) - start + 1;
    this._paused = false;
    this._destroyed = false;
    this._reader = db.createReadStream({
      start: key,
      end: name + '\xff\xff',
      valueEncoding: ENCODER
    });

    var onblock = function onblock(val) {
      key = name + '\xff' + pad(++blockIndex);
      if (!self._missing) return false;

      if (blockOffset) {
        val = val.slice(blockOffset);
        blockOffset = 0;
        if (!val.length) return true;
      }

      if (val.length > self._missing) val = val.slice(0, self._missing);
      self._missing -= val.length;

      self._pause(!self.push(val));

      return !!self._missing;
    };

    this._reader.on('data', function (data) {
      while (data.key > key) {
        if (!onblock(blank)) return;
      }

      onblock(data.value);
    });

    this._reader.on('error', function (err) {
      self.emit('error', err);
    });

    this._reader.on('end', function () {
      self.push(null);
    });

    Readable.call(this);
  };

  util.inherits(ReadStream, Readable);

  ReadStream.prototype.destroy = function () {
    if (this._destroyed) return;
    this._destroyed = true;

    this._reader.destroy();

    process.nextTick(this.emit.bind(this, 'close'));
  };

  ReadStream.prototype._pause = function (paused) {
    if (this._paused === paused) return;
    this._paused = paused;
    if (this._paused) this._reader.pause();else this._reader.resume();
  };

  ReadStream.prototype._read = function () {
    this._pause(false);
  };

  blobs.remove = function (name, cb) {
    cb = once(cb || noop);
    var batch = [];
    var keys = db.createKeyStream({
      start: name + '\xff',
      end: name + '\xff\xff'
    });
    keys.on('error', cb);
    keys.on('data', function (key) {
      batch.push({
        type: 'del',
        key: key
      });
    });
    keys.on('end', function () {
      db.batch(batch, cb);
    });
  };

  blobs.size = function (name, cb) {
    peek.last(db, {
      start: name + '\xff',
      end: name + '\xff\xff',
      valueEncoding: ENCODER
    }, function (err, latest, val) {
      if (err && err.message === 'range not found') return cb(null, 0);
      if (err) return cb(err);
      if (latest.slice(0, name.length + 1) !== name + '\xff') return cb(null, 0);
      cb(null, parseInt(latest.toString().slice(name.length + 1), 16) * blockSize + val.length);
    });
  };

  blobs.write = function (name, data, opts, cb) {
    if (typeof opts === 'function') return blobs.write(name, data, null, opts);
    if (!opts) opts = {};
    if (!cb) cb = noop;
    var ws = blobs.createWriteStream(name, opts);
    ws.on('error', cb);
    ws.on('finish', function () {
      cb();
    });
    ws.write(data);
    ws.end();
  };

  blobs.read = function (name, opts, cb) {
    if (typeof opts === 'function') return blobs.read(name, null, opts);
    if (!opts) opts = {};
    var rs = blobs.createReadStream(name, opts);
    var list = [];
    rs.on('error', cb);
    rs.on('data', function (data) {
      list.push(data);
    });
    rs.on('end', function () {
      cb(null, list.length === 1 ? list[0] : Buffer.concat(list));
    });
  };

  blobs.createReadStream = function (name, opts) {
    return new ReadStream(name, opts);
  };

  blobs.createWriteStream = function (name, opts) {
    return new WriteStream(name, opts);
  };

  return blobs;
};

}).call(this,require('_process'),require("buffer").Buffer)

},{"_process":100,"buffer":17,"level-peek":80,"once":97,"readable-stream/readable":61,"readable-stream/writable":62,"util":127}],55:[function(require,module,exports){
arguments[4][32][0].apply(exports,arguments)
},{"dup":32}],56:[function(require,module,exports){
(function (process){
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
module.exports = Duplex;
/*<replacement>*/

var objectKeys = Object.keys || function (obj) {
  var keys = [];

  for (var key in obj) {
    keys.push(key);
  }

  return keys;
};
/*</replacement>*/

/*<replacement>*/


var util = require('core-util-is');

util.inherits = require('inherits');
/*</replacement>*/

var Readable = require('./_stream_readable');

var Writable = require('./_stream_writable');

util.inherits(Duplex, Readable);
forEach(objectKeys(Writable.prototype), function (method) {
  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
});

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);
  Readable.call(this, options);
  Writable.call(this, options);
  if (options && options.readable === false) this.readable = false;
  if (options && options.writable === false) this.writable = false;
  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;
  this.once('end', onend);
} // the no-half-open enforcer


function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return; // no more data can be written.
  // But allow more writes to happen in this tick.

  process.nextTick(this.end.bind(this));
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

}).call(this,require('_process'))

},{"./_stream_readable":58,"./_stream_writable":60,"_process":100,"core-util-is":20,"inherits":49}],57:[function(require,module,exports){
arguments[4][35][0].apply(exports,arguments)
},{"./_stream_transform":59,"core-util-is":20,"dup":35,"inherits":49}],58:[function(require,module,exports){
(function (process){
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
module.exports = Readable;
/*<replacement>*/

var isArray = require('isarray');
/*</replacement>*/

/*<replacement>*/


var Buffer = require('buffer').Buffer;
/*</replacement>*/


Readable.ReadableState = ReadableState;

var EE = require('events').EventEmitter;
/*<replacement>*/


if (!EE.listenerCount) EE.listenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

var Stream = require('stream');
/*<replacement>*/


var util = require('core-util-is');

util.inherits = require('inherits');
/*</replacement>*/

var StringDecoder;
/*<replacement>*/

var debug = require('util');

if (debug && debug.debuglog) {
  debug = debug.debuglog('stream');
} else {
  debug = function debug() {};
}
/*</replacement>*/


util.inherits(Readable, Stream);

function ReadableState(options, stream) {
  var Duplex = require('./_stream_duplex');

  options = options || {}; // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"

  var hwm = options.highWaterMark;
  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm; // cast to ints.

  this.highWaterMark = ~~this.highWaterMark;
  this.buffer = [];
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false; // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.

  this.sync = true; // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.

  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false; // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away

  this.objectMode = !!options.objectMode;
  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.

  this.ranOut = false; // the number of writers that are awaiting a drain event in .pipe()s

  this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled

  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;

  if (options.encoding) {
    if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  var Duplex = require('./_stream_duplex');

  if (!(this instanceof Readable)) return new Readable(options);
  this._readableState = new ReadableState(options, this); // legacy

  this.readable = true;
  Stream.call(this);
} // Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.


Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;

  if (util.isString(chunk) && !state.objectMode) {
    encoding = encoding || state.defaultEncoding;

    if (encoding !== state.encoding) {
      chunk = new Buffer(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
}; // Unshift should *always* be something directly out of read()


Readable.prototype.unshift = function (chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);

  if (er) {
    stream.emit('error', er);
  } else if (util.isNullOrUndefined(chunk)) {
    state.reading = false;
    if (!state.ended) onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var e = new Error('stream.unshift() after end event');
      stream.emit('error', e);
    } else {
      if (state.decoder && !addToFront && !encoding) chunk = state.decoder.write(chunk);
      if (!addToFront) state.reading = false; // if we want the data now, just emit it.

      if (state.flowing && state.length === 0 && !state.sync) {
        stream.emit('data', chunk);
        stream.read(0);
      } else {
        // update the buffer info.
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
        if (state.needReadable) emitReadable(stream);
      }

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
} // if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.


function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
} // backwards compatibility.


Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
}; // Don't raise the hwm > 128MB


var MAX_HWM = 0x800000;

function roundUpToNextPowerOf2(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2
    n--;

    for (var p = 1; p < 32; p <<= 1) {
      n |= n >> p;
    }

    n++;
  }

  return n;
}

function howMuchToRead(n, state) {
  if (state.length === 0 && state.ended) return 0;
  if (state.objectMode) return n === 0 ? 0 : 1;

  if (isNaN(n) || util.isNull(n)) {
    // only flow one buffer at a time
    if (state.flowing && state.buffer.length) return state.buffer[0].length;else return state.length;
  }

  if (n <= 0) return 0; // If we're asking for more than the target buffer level,
  // then raise the water mark.  Bump up to the next highest
  // power of 2, to prevent increasing it excessively in tiny
  // amounts.

  if (n > state.highWaterMark) state.highWaterMark = roundUpToNextPowerOf2(n); // don't have that much.  return null, unless we've ended.

  if (n > state.length) {
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    } else return state.length;
  }

  return n;
} // you can override either this method, or the async _read(n) below.


Readable.prototype.read = function (n) {
  debug('read', n);
  var state = this._readableState;
  var nOrig = n;
  if (!util.isNumber(n) || n > 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.

  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.

  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  } // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.
  // if we need a readable event, then we need to do some reading.


  var doRead = state.needReadable;
  debug('need readable', doRead); // if we currently have less than the highWaterMark, then also read some

  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  } // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.


  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  }

  if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true; // if the length is currently zero, then we *need* a readable event.

    if (state.length === 0) state.needReadable = true; // call internal read method

    this._read(state.highWaterMark);

    state.sync = false;
  } // If _read pushed data synchronously, then `reading` will be false,
  // and we need to re-evaluate how much data we can return to the user.


  if (doRead && !state.reading) n = howMuchToRead(nOrig, state);
  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (util.isNull(ret)) {
    state.needReadable = true;
    n = 0;
  }

  state.length -= n; // If we have nothing in the buffer, then we want to know
  // as soon as we *do* get something into the buffer.

  if (state.length === 0 && !state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.

  if (nOrig !== n && state.ended && state.length === 0) endReadable(this);
  if (!util.isNull(ret)) this.emit('data', ret);
  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;

  if (!util.isBuffer(chunk) && !util.isString(chunk) && !util.isNullOrUndefined(chunk) && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }

  return er;
}

function onEofChunk(stream, state) {
  if (state.decoder && !state.ended) {
    var chunk = state.decoder.end();

    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }

  state.ended = true; // emit 'readable' now to make sure it gets picked up.

  emitReadable(stream);
} // Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.


function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;

  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) process.nextTick(function () {
      emitReadable_(stream);
    });else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
} // at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.


function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(function () {
      maybeReadMore_(stream, state);
    });
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;

  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length) // didn't get any data, stop spinning.
      break;else len = state.length;
  }

  state.readingMore = false;
} // abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.


Readable.prototype._read = function (n) {
  this.emit('error', new Error('not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;

    case 1:
      state.pipes = [state.pipes, dest];
      break;

    default:
      state.pipes.push(dest);
      break;
  }

  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted) process.nextTick(endFn);else src.once('end', endFn);
  dest.on('unpipe', onunpipe);

  function onunpipe(readable) {
    debug('onunpipe');

    if (readable === src) {
      cleanup();
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  } // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.


  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  function cleanup() {
    debug('cleanup'); // cleanup event handlers once the pipe is broken

    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);
    src.removeListener('data', ondata); // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.

    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  src.on('data', ondata);

  function ondata(chunk) {
    debug('ondata');
    var ret = dest.write(chunk);

    if (false === ret) {
      debug('false write response, pause', src._readableState.awaitDrain);
      src._readableState.awaitDrain++;
      src.pause();
    }
  } // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.


  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EE.listenerCount(dest, 'error') === 0) dest.emit('error', er);
  } // This is a brutally ugly hack to make sure that our error handler
  // is attached before any userland ones.  NEVER DO THIS.


  if (!dest._events || !dest._events.error) dest.on('error', onerror);else if (isArray(dest._events.error)) dest._events.error.unshift(onerror);else dest._events.error = [onerror, dest._events.error]; // Both close and finish should trigger unpipe, but only once.

  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }

  dest.once('close', onclose);

  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }

  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  } // tell the dest that it's being piped to


  dest.emit('pipe', src); // start the flow if it hasn't been started already.

  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;

    if (state.awaitDrain === 0 && EE.listenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState; // if we're not piping anywhere, then do nothing.

  if (state.pipesCount === 0) return this; // just one destination.  most common case.

  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;
    if (!dest) dest = state.pipes; // got a match.

    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this);
    return this;
  } // slow case. multiple pipe destinations.


  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this);
    }

    return this;
  } // try to find the right one.


  var i = indexOf(state.pipes, dest);
  if (i === -1) return this;
  state.pipes.splice(i, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];
  dest.emit('unpipe', this);
  return this;
}; // set up data events if they are asked for
// Ensure readable listeners eventually get something


Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn); // If listening to data, and it has not explicitly been paused,
  // then call resume to start the flow of data on the next tick.

  if (ev === 'data' && false !== this._readableState.flowing) {
    this.resume();
  }

  if (ev === 'readable' && this.readable) {
    var state = this._readableState;

    if (!state.readableListening) {
      state.readableListening = true;
      state.emittedReadable = false;
      state.needReadable = true;

      if (!state.reading) {
        var self = this;
        process.nextTick(function () {
          debug('readable nexttick read 0');
          self.read(0);
        });
      } else if (state.length) {
        emitReadable(this, state);
      }
    }
  }

  return res;
};

Readable.prototype.addListener = Readable.prototype.on; // pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.

Readable.prototype.resume = function () {
  var state = this._readableState;

  if (!state.flowing) {
    debug('resume');
    state.flowing = true;

    if (!state.reading) {
      debug('resume read 0');
      this.read(0);
    }

    resume(this, state);
  }

  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    process.nextTick(function () {
      resume_(stream, state);
    });
  }
}

function resume_(stream, state) {
  state.resumeScheduled = false;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);

  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }

  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);

  if (state.flowing) {
    do {
      var chunk = stream.read();
    } while (null !== chunk && state.flowing);
  }
} // wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.


Readable.prototype.wrap = function (stream) {
  var state = this._readableState;
  var paused = false;
  var self = this;
  stream.on('end', function () {
    debug('wrapped end');

    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) self.push(chunk);
    }

    self.push(null);
  });
  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);
    if (!chunk || !state.objectMode && !chunk.length) return;
    var ret = self.push(chunk);

    if (!ret) {
      paused = true;
      stream.pause();
    }
  }); // proxy all the other methods.
  // important when wrapping filters and duplexes.

  for (var i in stream) {
    if (util.isFunction(stream[i]) && util.isUndefined(this[i])) {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  } // proxy certain important events.


  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
  forEach(events, function (ev) {
    stream.on(ev, self.emit.bind(self, ev));
  }); // when we try to consume some more bytes, simply unpause the
  // underlying stream.

  self._read = function (n) {
    debug('wrapped _read', n);

    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
}; // exposed for testing purposes only.


Readable._fromList = fromList; // Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.

function fromList(n, state) {
  var list = state.buffer;
  var length = state.length;
  var stringMode = !!state.decoder;
  var objectMode = !!state.objectMode;
  var ret; // nothing in the list, definitely empty.

  if (list.length === 0) return null;
  if (length === 0) ret = null;else if (objectMode) ret = list.shift();else if (!n || n >= length) {
    // read it all, truncate the array.
    if (stringMode) ret = list.join('');else ret = Buffer.concat(list, length);
    list.length = 0;
  } else {
    // read just some of it.
    if (n < list[0].length) {
      // just take a part of the first list item.
      // slice is the same for buffers and strings.
      var buf = list[0];
      ret = buf.slice(0, n);
      list[0] = buf.slice(n);
    } else if (n === list[0].length) {
      // first list is a perfect match
      ret = list.shift();
    } else {
      // complex case.
      // we have enough to cover it, but it spans past the first buffer.
      if (stringMode) ret = '';else ret = new Buffer(n);
      var c = 0;

      for (var i = 0, l = list.length; i < l && c < n; i++) {
        var buf = list[0];
        var cpy = Math.min(n - c, buf.length);
        if (stringMode) ret += buf.slice(0, cpy);else buf.copy(ret, c, 0, cpy);
        if (cpy < buf.length) list[0] = buf.slice(cpy);else list.shift();
        c += cpy;
      }
    }
  }
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState; // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.

  if (state.length > 0) throw new Error('endReadable called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    process.nextTick(function () {
      // Check that we didn't get one last unshift.
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
      }
    });
  }
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }

  return -1;
}

}).call(this,require('_process'))

},{"./_stream_duplex":56,"_process":100,"buffer":17,"core-util-is":20,"events":29,"inherits":49,"isarray":55,"stream":116,"string_decoder/":63,"util":14}],59:[function(require,module,exports){
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.
module.exports = Transform;

var Duplex = require('./_stream_duplex');
/*<replacement>*/


var util = require('core-util-is');

util.inherits = require('inherits');
/*</replacement>*/

util.inherits(Transform, Duplex);

function TransformState(options, stream) {
  this.afterTransform = function (er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;
  var cb = ts.writecb;
  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));
  ts.writechunk = null;
  ts.writecb = null;
  if (!util.isNullOrUndefined(data)) stream.push(data);
  if (cb) cb(er);
  var rs = stream._readableState;
  rs.reading = false;

  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);
  Duplex.call(this, options);
  this._transformState = new TransformState(options, this); // when the writable side finishes, then flush out anything remaining.

  var stream = this; // start out asking for a readable event once data is transformed.

  this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.

  this._readableState.sync = false;
  this.once('prefinish', function () {
    if (util.isFunction(this._flush)) this._flush(function (er) {
      done(stream, er);
    });else done(stream);
  });
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
}; // This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.


Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;

  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
}; // Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.


Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (!util.isNull(ts.writechunk) && ts.writecb && !ts.transforming) {
    ts.transforming = true;

    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

function done(stream, er) {
  if (er) return stream.emit('error', er); // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided

  var ws = stream._writableState;
  var ts = stream._transformState;
  if (ws.length) throw new Error('calling transform done when ws.length != 0');
  if (ts.transforming) throw new Error('calling transform done when still transforming');
  return stream.push(null);
}

},{"./_stream_duplex":56,"core-util-is":20,"inherits":49}],60:[function(require,module,exports){
(function (process){
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, cb), and it'll handle all
// the drain event emission and buffering.
module.exports = Writable;
/*<replacement>*/

var Buffer = require('buffer').Buffer;
/*</replacement>*/


Writable.WritableState = WritableState;
/*<replacement>*/

var util = require('core-util-is');

util.inherits = require('inherits');
/*</replacement>*/

var Stream = require('stream');

util.inherits(Writable, Stream);

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
}

function WritableState(options, stream) {
  var Duplex = require('./_stream_duplex');

  options = options || {}; // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()

  var hwm = options.highWaterMark;
  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm; // object stream flag to indicate whether or not this stream
  // contains buffers or objects.

  this.objectMode = !!options.objectMode;
  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // cast to ints.

  this.highWaterMark = ~~this.highWaterMark;
  this.needDrain = false; // at the start of calling end()

  this.ending = false; // when end() has been called, and returned

  this.ended = false; // when 'finish' is emitted

  this.finished = false; // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.

  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.

  this.length = 0; // a flag to see when we're in the middle of a write.

  this.writing = false; // when true all writes will be buffered until .uncork() call

  this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.

  this.sync = true; // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.

  this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)

  this.onwrite = function (er) {
    onwrite(stream, er);
  }; // the callback that the user supplies to write(chunk,encoding,cb)


  this.writecb = null; // the amount that is being written when _write is called.

  this.writelen = 0;
  this.buffer = []; // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted

  this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams

  this.prefinished = false; // True if the error was already emitted and should not be thrown again

  this.errorEmitted = false;
}

function Writable(options) {
  var Duplex = require('./_stream_duplex'); // Writable ctor is applied to Duplexes, though they're not
  // instanceof Writable, they're instanceof Readable.


  if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);
  this._writableState = new WritableState(options, this); // legacy.

  this.writable = true;
  Stream.call(this);
} // Otherwise people can pipe Writable streams, which is just wrong.


Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe. Not readable.'));
};

function writeAfterEnd(stream, state, cb) {
  var er = new Error('write after end'); // TODO: defer error events consistently everywhere, not just the cb

  stream.emit('error', er);
  process.nextTick(function () {
    cb(er);
  });
} // If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.


function validChunk(stream, state, chunk, cb) {
  var valid = true;

  if (!util.isBuffer(chunk) && !util.isString(chunk) && !util.isNullOrUndefined(chunk) && !state.objectMode) {
    var er = new TypeError('Invalid non-string/buffer chunk');
    stream.emit('error', er);
    process.nextTick(function () {
      cb(er);
    });
    valid = false;
  }

  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  if (util.isFunction(encoding)) {
    cb = encoding;
    encoding = null;
  }

  if (util.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
  if (!util.isFunction(cb)) cb = function cb() {};
  if (state.ended) writeAfterEnd(this, state, cb);else if (validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, chunk, encoding, cb);
  }
  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;
  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;
    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.buffer.length) clearBuffer(this, state);
  }
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && util.isString(chunk)) {
    chunk = new Buffer(chunk, encoding);
  }

  return chunk;
} // if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.


function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);
  if (util.isBuffer(chunk)) encoding = 'buffer';
  var len = state.objectMode ? 1 : chunk.length;
  state.length += len;
  var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.

  if (!ret) state.needDrain = true;
  if (state.writing || state.corked) state.buffer.push(new WriteReq(chunk, encoding, cb));else doWrite(stream, state, false, len, chunk, encoding, cb);
  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  if (sync) process.nextTick(function () {
    state.pendingcb--;
    cb(er);
  });else {
    state.pendingcb--;
    cb(er);
  }
  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;
  onwriteStateUpdate(state);
  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(stream, state);

    if (!finished && !state.corked && !state.bufferProcessing && state.buffer.length) {
      clearBuffer(stream, state);
    }

    if (sync) {
      process.nextTick(function () {
        afterWrite(stream, state, finished, cb);
      });
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
} // Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.


function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
} // if there's something in the buffer waiting, then process it


function clearBuffer(stream, state) {
  state.bufferProcessing = true;

  if (stream._writev && state.buffer.length > 1) {
    // Fast case, write everything using _writev()
    var cbs = [];

    for (var c = 0; c < state.buffer.length; c++) {
      cbs.push(state.buffer[c].callback);
    } // count the one we are adding, as well.
    // TODO(isaacs) clean this up


    state.pendingcb++;
    doWrite(stream, state, true, state.length, state.buffer, '', function (err) {
      for (var i = 0; i < cbs.length; i++) {
        state.pendingcb--;
        cbs[i](err);
      }
    }); // Clear buffer

    state.buffer = [];
  } else {
    // Slow case, write chunks one-by-one
    for (var c = 0; c < state.buffer.length; c++) {
      var entry = state.buffer[c];
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;
      doWrite(stream, state, false, len, chunk, encoding, cb); // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.

      if (state.writing) {
        c++;
        break;
      }
    }

    if (c < state.buffer.length) state.buffer = state.buffer.slice(c);else state.buffer.length = 0;
  }

  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (util.isFunction(chunk)) {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (util.isFunction(encoding)) {
    cb = encoding;
    encoding = null;
  }

  if (!util.isNullOrUndefined(chunk)) this.write(chunk, encoding); // .end() fully uncorks

  if (state.corked) {
    state.corked = 1;
    this.uncork();
  } // ignore unnecessary end() calls.


  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(stream, state) {
  return state.ending && state.length === 0 && !state.finished && !state.writing;
}

function prefinish(stream, state) {
  if (!state.prefinished) {
    state.prefinished = true;
    stream.emit('prefinish');
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(stream, state);

  if (need) {
    if (state.pendingcb === 0) {
      prefinish(stream, state);
      state.finished = true;
      stream.emit('finish');
    } else prefinish(stream, state);
  }

  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);

  if (cb) {
    if (state.finished) process.nextTick(cb);else stream.once('finish', cb);
  }

  state.ended = true;
}

}).call(this,require('_process'))

},{"./_stream_duplex":56,"_process":100,"buffer":17,"core-util-is":20,"inherits":49,"stream":116}],61:[function(require,module,exports){
(function (process){
"use strict";

exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = require('stream');
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');

if (!process.browser && process.env.READABLE_STREAM === 'disable') {
  module.exports = require('stream');
}

}).call(this,require('_process'))

},{"./lib/_stream_duplex.js":56,"./lib/_stream_passthrough.js":57,"./lib/_stream_readable.js":58,"./lib/_stream_transform.js":59,"./lib/_stream_writable.js":60,"_process":100,"stream":116}],62:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"./lib/_stream_writable.js":60,"dup":40}],63:[function(require,module,exports){
arguments[4][41][0].apply(exports,arguments)
},{"buffer":17,"dup":41}],64:[function(require,module,exports){
"use strict";

var createError = require('errno').create;

var LevelUPError = createError('LevelUPError');
var NotFoundError = createError('NotFoundError', LevelUPError);
NotFoundError.prototype.notFound = true;
NotFoundError.prototype.status = 404;
module.exports = {
  LevelUPError: LevelUPError,
  InitializationError: createError('InitializationError', LevelUPError),
  OpenError: createError('OpenError', LevelUPError),
  ReadError: createError('ReadError', LevelUPError),
  WriteError: createError('WriteError', LevelUPError),
  NotFoundError: NotFoundError,
  EncodingError: createError('EncodingError', LevelUPError)
};

},{"errno":27}],65:[function(require,module,exports){
"use strict";

var errno = require('errno');

Object.keys(errno.code).forEach(function (code) {
  var e = errno.code[code];

  exports[code] = function (path) {
    var err = new Error(code + ', ' + e.description + (path ? ' \'' + path + '\'' : ''));
    err.errno = e.errno;
    err.code = code;
    err.path = path;
    return err;
  };
});

},{"errno":27}],66:[function(require,module,exports){
(function (process,Buffer){
"use strict";

var fwd = require('fwd-stream');

var sublevel = require('level-sublevel');

var blobs = require('level-blobs');

var peek = require('level-peek');

var once = require('once');

var octal = require('octal');

var errno = require('./errno');

var paths = require('./paths');

var watchers = require('./watchers');

var nextTick = function nextTick(cb, err, val) {
  process.nextTick(function () {
    cb(err, val);
  });
};

var noop = function noop() {};

module.exports = function (db, opts) {
  var fs = {};
  db = sublevel(db);
  var bl = blobs(db.sublevel('blobs'), opts);
  var ps = paths(db.sublevel('stats'));
  var links = db.sublevel('links');
  var listeners = watchers();
  var fds = [];
  var now = Date.now();

  var inc = function inc() {
    return ++now;
  };

  fs.mkdir = function (key, mode, cb) {
    if (typeof mode === 'function') return fs.mkdir(key, null, mode);
    if (!mode) mode = octal(777);
    if (!cb) cb = noop;
    ps.follow(key, function (err, stat, key) {
      if (err && err.code !== 'ENOENT') return cb(err);
      if (stat) return cb(errno.EEXIST(key));
      ps.put(key, {
        type: 'directory',
        mode: mode,
        size: 4096
      }, listeners.cb(key, cb));
    });
  };

  fs.rmdir = function (key, cb) {
    if (!cb) cb = noop;
    ps.follow(key, function (err, stat, key) {
      if (err) return cb(err);
      fs.readdir(key, function (err, files) {
        if (err) return cb(err);
        if (files.length) return cb(errno.ENOTEMPTY(key));
        ps.del(key, listeners.cb(key, cb));
      });
    });
  };

  fs.readdir = function (key, cb) {
    ps.follow(key, function (err, stat, key) {
      if (err) return cb(err);
      if (!stat) return cb(errno.ENOENT(key));
      if (!stat.isDirectory()) return cb(errno.ENOTDIR(key));
      ps.list(key, cb);
    });
  };

  var stat = function stat(key, lookup, cb) {
    lookup(key, function (err, stat, key) {
      if (err) return cb(err);
      if (!stat.isFile()) return cb(null, stat);
      var blob = stat && stat.blob || key;
      bl.size(blob, function (err, size) {
        if (err) return cb(err);
        stat.size = size;
        cb(null, stat);
      });
    });
  };

  fs.stat = function (key, cb) {
    stat(key, ps.follow, cb);
  };

  fs.lstat = function (key, cb) {
    stat(key, ps.get, cb);
  };

  fs.exists = function (key, cb) {
    ps.follow(key, function (err) {
      cb(!err);
    });
  };

  var chmod = function chmod(key, lookup, mode, cb) {
    if (!cb) cb = noop;
    lookup(key, function (err, stat, key) {
      if (err) return cb(err);
      ps.update(key, {
        mode: mode
      }, listeners.cb(key, cb));
    });
  };

  fs.chmod = function (key, mode, cb) {
    chmod(key, ps.follow, mode, cb);
  };

  fs.lchmod = function (key, mode, cb) {
    chmod(key, ps.get, mode, cb);
  };

  var chown = function chown(key, lookup, uid, gid, cb) {
    if (!cb) cb = noop;
    lookup(key, function (err, stat, key) {
      if (err) return cb(err);
      ps.update(key, {
        uid: uid,
        gid: gid
      }, listeners.cb(key, cb));
    });
  };

  fs.chown = function (key, uid, gid, cb) {
    chown(key, ps.follow, uid, gid, cb);
  };

  fs.lchown = function (key, uid, gid, cb) {
    chown(key, ps.get, uid, gid, cb);
  };

  fs.utimes = function (key, atime, mtime, cb) {
    if (!cb) cb = noop;
    ps.follow(key, function (err, stat, key) {
      if (err) return cb(err);
      var upd = {};
      if (atime) upd.atime = atime;
      if (mtime) upd.mtime = mtime;
      ps.update(key, upd, listeners.cb(key, cb));
    });
  };

  fs.rename = function (from, to, cb) {
    if (!cb) cb = noop;
    ps.follow(from, function (err, statFrom, from) {
      if (err) return cb(err);

      var rename = function rename() {
        cb = listeners.cb(to, listeners.cb(from, cb));
        ps.put(to, statFrom, function (err) {
          if (err) return cb(err);
          ps.del(from, cb);
        });
      };

      ps.follow(to, function (err, statTo, to) {
        if (err && err.code !== 'ENOENT') return cb(err);
        if (!statTo) return rename();
        if (statFrom.isDirectory() !== statTo.isDirectory()) return cb(errno.EISDIR(from));

        if (statTo.isDirectory()) {
          fs.readdir(to, function (err, list) {
            if (err) return cb(err);
            if (list.length) return cb(errno.ENOTEMPTY(from));
            rename();
          });
          return;
        }

        rename();
      });
    });
  };

  fs.realpath = function (key, cache, cb) {
    if (typeof cache === 'function') return fs.realpath(key, null, cache);
    ps.follow(key, function (err, stat, key) {
      if (err) return cb(err);
      cb(null, key);
    });
  };

  fs.writeFile = function (key, data, opts, cb) {
    if (typeof opts === 'function') return fs.writeFile(key, data, null, opts);
    if (typeof opts === 'string') opts = {
      encoding: opts
    };
    if (!opts) opts = {};
    if (!cb) cb = noop;
    if (!Buffer.isBuffer(data)) data = new Buffer(data, opts.encoding || 'utf-8');
    var flags = opts.flags || 'w';
    opts.append = flags[0] !== 'w';
    ps.follow(key, function (err, stat, key) {
      if (err && err.code !== 'ENOENT') return cb(err);
      if (stat && stat.isDirectory()) return cb(errno.EISDIR(key));
      if (stat && flags[1] === 'x') return cb(errno.EEXIST(key));
      var blob = stat && stat.blob || key;
      ps.writable(key, function (err) {
        if (err) return cb(err);
        bl.write(blob, data, opts, function (err) {
          if (err) return cb(err);
          ps.put(key, {
            ctime: stat && stat.ctime,
            mtime: new Date(),
            mode: opts.mode || octal(666),
            type: 'file'
          }, listeners.cb(key, cb));
        });
      });
    });
  };

  fs.appendFile = function (key, data, opts, cb) {
    if (typeof opts === 'function') return fs.appendFile(key, data, null, opts);
    if (typeof opts === 'string') opts = {
      encoding: opts
    };
    if (!opts) opts = {};
    opts.flags = 'a';
    fs.writeFile(key, data, opts, cb);
  };

  fs.unlink = function (key, cb) {
    if (!cb) cb = noop;
    ps.get(key, function (err, stat, key) {
      if (err) return cb(err);
      if (stat.isDirectory()) return cb(errno.EISDIR(key));

      var clean = function clean(target) {
        peek(links, {
          start: target + '\xff',
          end: target + '\xff\xff'
        }, function (err) {
          if (err) return bl.remove(target, cb); // no more links

          cb();
        });
      };

      var onlink = function onlink() {
        var target = stat.link.slice(0, stat.link.indexOf('\xff'));
        links.del(stat.link, function (err) {
          if (err) return cb(err);
          clean(target);
        });
      };

      ps.del(key, listeners.cb(key, function (err) {
        if (err) return cb(err);
        if (stat.link) return onlink();
        links.del(key + '\xff', function (err) {
          if (err) return cb(err);
          clean(key);
        });
      }));
    });
  };

  fs.readFile = function (key, opts, cb) {
    if (typeof opts === 'function') return fs.readFile(key, null, opts);
    if (typeof opts === 'string') opts = {
      encoding: opts
    };
    if (!opts) opts = {};
    var encoding = opts.encoding || 'binary';
    var flag = opts.flag || 'r';
    ps.follow(key, function (err, stat, key) {
      if (err) return cb(err);
      if (stat.isDirectory()) return cb(errno.EISDIR(key));
      var blob = stat && stat.blob || key;
      bl.read(blob, function (err, data) {
        if (err) return cb(err);
        cb(null, opts.encoding ? data.toString(opts.encoding) : data);
      });
    });
  };

  fs.createReadStream = function (key, opts) {
    if (!opts) opts = {};
    var closed = false;
    var rs = fwd.readable(function (cb) {
      ps.follow(key, function (err, stat, key) {
        if (err) return cb(err);
        if (stat.isDirectory()) return cb(errno.EISDIR(key));
        var blob = stat && stat.blob || key;
        var r = bl.createReadStream(blob, opts);
        rs.emit('open');
        r.on('end', function () {
          process.nextTick(function () {
            if (!closed) rs.emit('close');
          });
        });
        cb(null, r);
      });
    });
    rs.on('close', function () {
      closed = true;
    });
    return rs;
  };

  fs.createWriteStream = function (key, opts) {
    if (!opts) opts = {};
    var flags = opts.flags || 'w';
    var closed = false;
    var mode = opts.mode || octal(666);
    opts.append = flags[0] === 'a';
    var ws = fwd.writable(function (cb) {
      ps.follow(key, function (err, stat, key) {
        if (err && err.code !== 'ENOENT') return cb(err);
        if (stat && stat.isDirectory()) return cb(errno.EISDIR(key));
        if (stat && flags[1] === 'x') return cb(errno.EEXIST(key));
        var blob = stat && stat.blob || key;
        ps.writable(blob, function (err) {
          if (err) return cb(err);
          var ctime = stat ? stat.ctime : new Date();
          var s = {
            ctime: ctime,
            mtime: new Date(),
            mode: mode,
            type: 'file'
          };
          ps.put(key, s, function (err) {
            if (err) return cb(err);
            var w = bl.createWriteStream(blob, opts);
            ws.emit('open');
            w.on('finish', function () {
              s.mtime = new Date();
              ps.put(key, s, function () {
                listeners.change(key);
                if (!closed) ws.emit('close');
              });
            });
            cb(null, w);
          });
        });
      });
    });
    ws.on('close', function () {
      closed = true;
    });
    return ws;
  };

  fs.truncate = function (key, len, cb) {
    ps.follow(key, function (err, stat, key) {
      if (err) return cb(err);
      var blob = stat && stat.blob || key;
      bl.size(blob, function (err, size) {
        if (err) return cb(err);
        ps.writable(key, function (err) {
          if (err) return cb(err);
          cb = once(listeners.cb(key, cb));
          if (!len) return bl.remove(blob, cb);
          var ws = bl.createWriteStream(blob, {
            start: size < len ? len - 1 : len
          });
          ws.on('error', cb);
          ws.on('finish', cb);
          if (size < len) ws.write(new Buffer([0]));
          ws.end();
        });
      });
    });
  };

  fs.watchFile = function (key, opts, cb) {
    if (typeof opts === 'function') return fs.watchFile(key, null, opts);
    return listeners.watch(ps.normalize(key), cb);
  };

  fs.unwatchFile = function (key, cb) {
    listeners.unwatch(ps.normalize(key), cb);
  };

  fs.watch = function (key, opts, cb) {
    if (typeof opts === 'function') return fs.watch(key, null, opts);
    return listeners.watcher(ps.normalize(key), cb);
  };

  fs.notify = function (cb) {
    listeners.on('change', cb);
  };

  fs.open = function (key, flags, mode, cb) {
    if (typeof mode === 'function') return fs.open(key, flags, null, mode);
    ps.follow(key, function (err, stat, key) {
      if (err && err.code !== 'ENOENT') return cb(err);
      var fl = flags[0];
      var plus = flags[1] === '+' || flags[2] === '+';
      var blob = stat && stat.blob || key;
      var f = {
        key: key,
        blob: blob,
        mode: mode || octal(666),
        readable: fl === 'r' || (fl === 'w' || fl === 'a') && plus,
        writable: fl === 'w' || fl === 'a' || fl === 'r' && plus,
        append: fl === 'a'
      };
      if (fl === 'r' && err) return cb(err);
      if (flags[1] === 'x' && stat) return cb(errno.EEXIST(key));
      if (stat && stat.isDirectory()) return cb(errno.EISDIR(key));
      bl.size(blob, function (err, size) {
        if (err) return cb(err);
        if (f.append) f.writePos = size;
        ps.writable(key, function (err) {
          if (err) return cb(err);

          var onready = function onready(err) {
            if (err) return cb(err);
            var i = fds.indexOf(null);
            if (i === -1) i = 10 + fds.push(fds.length + 10) - 1;
            f.fd = i;
            fds[i] = f;
            listeners.change(key);
            cb(null, f.fd);
          };

          var ontruncate = function ontruncate(err) {
            if (err) return cb(err);
            if (stat) return onready();
            ps.put(blob, {
              ctime: stat && stat.ctime,
              type: 'file'
            }, onready);
          };

          if (!f.append && f.writable) return bl.remove(blob, ontruncate);
          ontruncate();
        });
      });
    });
  };

  fs.close = function (fd, cb) {
    var f = fds[fd];
    if (!f) return nextTick(cb, errno.EBADF());
    fds[fd] = null;
    nextTick(listeners.cb(f.key, cb));
  };

  fs.write = function (fd, buf, off, len, pos, cb) {
    var f = fds[fd];
    if (!cb) cb = noop;
    if (!f || !f.writable) return nextTick(cb, errno.EBADF());
    if (pos === null) pos = f.writePos || 0;
    var slice = buf.slice(off, off + len);
    f.writePos = pos + slice.length;
    bl.write(f.blob, slice, {
      start: pos,
      append: true
    }, function (err) {
      if (err) return cb(err);
      cb(null, len, buf);
    });
  };

  fs.read = function (fd, buf, off, len, pos, cb) {
    var f = fds[fd];
    if (!cb) cb = noop;
    if (!f || !f.readable) return nextTick(cb, errno.EBADF());
    if (pos === null) pos = fs.readPos || 0;
    bl.read(f.blob, {
      start: pos,
      end: pos + len - 1
    }, function (err, read) {
      if (err) return cb(err);
      var slice = read.slice(0, len);
      slice.copy(buf, off);
      fs.readPos = pos + slice.length;
      cb(null, slice.length, buf);
    });
  };

  fs.fsync = function (fd, cb) {
    var f = fds[fd];
    if (!cb) cb = noop;
    if (!f || !f.writable) return nextTick(cb, errno.EBADF());
    nextTick(cb);
  };

  fs.ftruncate = function (fd, len, cb) {
    var f = fds[fd];
    if (!cb) cb = noop;
    if (!f) return nextTick(cb, errno.EBADF());
    fs.truncate(f.blob, len, cb);
  };

  fs.fchown = function (fd, uid, gid, cb) {
    var f = fds[fd];
    if (!cb) cb = noop;
    if (!f) return nextTick(cb, errno.EBADF());
    fs.chown(f.key, uid, gid, cb);
  };

  fs.fchmod = function (fd, mode, cb) {
    var f = fds[fd];
    if (!cb) cb = noop;
    if (!f) return nextTick(cb, errno.EBADF());
    fs.chmod(f.key, mode, cb);
  };

  fs.futimes = function (fd, atime, mtime, cb) {
    var f = fds[fd];
    if (!cb) cb = noop;
    if (!f) return nextTick(cb, errno.EBADF());
    fs.utimes(f.key, atime, mtime, cb);
  };

  fs.fstat = function (fd, cb) {
    var f = fds[fd];
    if (!f) return nextTick(cb, errno.EBADF());
    fs.stat(f.key, cb);
  };

  fs.symlink = function (target, name, cb) {
    if (!cb) cb = noop;
    ps.follow(target, function (err, stat, target) {
      if (err) return cb(err);
      ps.get(name, function (err, stat) {
        if (err && err.code !== 'ENOENT') return cb(err);
        if (stat) return cb(errno.EEXIST(name));
        ps.put(name, {
          type: 'symlink',
          target: target,
          mode: octal(777)
        }, cb);
      });
    });
  };

  fs.readlink = function (key, cb) {
    ps.get(key, function (err, stat) {
      if (err) return cb(err);
      if (!stat.target) return cb(errno.EINVAL(key));
      cb(null, stat.target);
    });
  };

  fs.link = function (target, name, cb) {
    if (!cb) cb = noop;
    ps.follow(target, function (err, stat, target) {
      if (err) return cb(err);
      if (!stat.isFile()) return cb(errno.EINVAL(target));
      ps.get(name, function (err, st) {
        if (err && err.code !== 'ENOENT') return cb(err);
        if (st) return cb(errno.EEXIST(name));
        var link = target + '\xff' + inc();
        links.put(target + '\xff', target, function (err) {
          if (err) return cb(err);
          links.put(link, target, function (err) {
            if (err) return cb(err);
            ps.put(name, {
              type: 'file',
              link: link,
              blob: target,
              mode: stat.mode
            }, cb);
          });
        });
      });
    });
  };

  return fs;
};

}).call(this,require('_process'),require("buffer").Buffer)

},{"./errno":65,"./paths":69,"./watchers":71,"_process":100,"buffer":17,"fwd-stream":31,"level-blobs":54,"level-peek":80,"level-sublevel":82,"octal":96,"once":97}],67:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = hasKeys;

function hasKeys(source) {
  return source !== null && (_typeof(source) === "object" || typeof source === "function");
}

},{}],68:[function(require,module,exports){
"use strict";

var hasKeys = require("./has-keys");

module.exports = extend;

function extend() {
  var target = {};

  for (var i = 0; i < arguments.length; i++) {
    var source = arguments[i];

    if (!hasKeys(source)) {
      continue;
    }

    for (var key in source) {
      if (source.hasOwnProperty(key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
}

},{"./has-keys":67}],69:[function(require,module,exports){
(function (process){
"use strict";

var path = require('path');

var once = require('once');

var concat = require('concat-stream');

var octal = require('octal');

var stat = require('./stat');

var xtend = require('xtend');

var errno = require('./errno');

var ROOT = stat({
  type: 'directory',
  mode: octal(777),
  size: 4096
});

var normalize = function normalize(key) {
  key = key[0] === '/' ? key : '/' + key;
  key = path.normalize(key);
  if (key === '/') return key;
  return key[key.length - 1] === '/' ? key.slice(0, -1) : key;
};

var prefix = function prefix(key) {
  var depth = key.split('/').length.toString(36);
  return '0000000000'.slice(depth.length) + depth + key;
};

module.exports = function (db) {
  var that = {};
  that.normalize = normalize;

  that.get = function (key, cb) {
    key = normalize(key);
    if (key === '/') return process.nextTick(cb.bind(null, null, ROOT, '/'));
    db.get(prefix(key), {
      valueEncoding: 'json'
    }, function (err, doc) {
      if (err && err.notFound) return cb(errno.ENOENT(key), null, key);
      if (err) return cb(err, null, key);
      cb(null, stat(doc), key);
    });
  };

  that.writable = function (key, cb) {
    key = normalize(key);
    if (key === '/') return process.nextTick(cb.bind(null, errno.EPERM(key)));
    that.follow(path.dirname(key), function (err, parent) {
      if (err) return cb(err);
      if (!parent.isDirectory()) return cb(errno.ENOTDIR(key));
      cb(null, key);
    });
  };

  that.list = function (key, cb) {
    key = normalize(key);
    var start = prefix(key === '/' ? key : key + '/');
    var keys = db.createKeyStream({
      start: start,
      end: start + '\xff'
    });
    cb = once(cb);
    keys.on('error', cb);
    keys.pipe(concat({
      encoding: 'object'
    }, function (files) {
      files = files.map(function (file) {
        return file.split('/').pop();
      });
      cb(null, files);
    }));
  };

  var resolve = function resolve(dir, cb) {
    var root = '/';
    var parts = dir.split('/').slice(1);

    var loop = function loop() {
      that.get(path.join(root, parts.shift()), function (err, doc, key) {
        if (err) return cb(err, doc, dir);
        root = doc.target || key;
        if (!parts.length) return cb(null, doc, key);
        loop();
      });
    };

    loop();
  };

  that.follow = function (key, cb) {
    resolve(normalize(key), function loop(err, doc, key) {
      if (err) return cb(err, null, key);
      if (doc.target) return that.get(doc.target, loop);
      cb(null, stat(doc), key);
    });
  };

  that.update = function (key, opts, cb) {
    that.get(key, function (err, doc, key) {
      if (err) return cb(err);
      if (key === '/') return cb(errno.EPERM(key));
      that.put(key, xtend(doc, opts), cb);
    });
  };

  that.put = function (key, opts, cb) {
    that.writable(key, function (err, key) {
      if (err) return cb(err);
      db.put(prefix(key), stat(opts), {
        valueEncoding: 'json'
      }, cb);
    });
  };

  that.del = function (key, cb) {
    key = normalize(key);
    if (key === '/') return process.nextTick(cb.bind(null, errno.EPERM(key)));
    db.del(prefix(key), cb);
  };

  return that;
};

}).call(this,require('_process'))

},{"./errno":65,"./stat":70,"_process":100,"concat-stream":19,"octal":96,"once":97,"path":98,"xtend":68}],70:[function(require,module,exports){
"use strict";

var toDate = function toDate(date) {
  if (!date) return new Date();
  if (typeof date === 'string') return new Date(date);
  return date;
};

var Stat = function Stat(opts) {
  this.uid = opts.uid || 0;
  this.gid = opts.gid || 0;
  this.mode = opts.mode || 0;
  this.size = opts.size || 0;
  this.mtime = toDate(opts.mtime);
  this.atime = toDate(opts.atime);
  this.ctime = toDate(opts.ctime);
  this.type = opts.type;
  this.target = opts.target;
  this.link = opts.link;
  this.blob = opts.blob;
};

Stat.prototype.isDirectory = function () {
  return this.type === 'directory';
};

Stat.prototype.isFile = function () {
  return this.type === 'file';
};

Stat.prototype.isBlockDevice = function () {
  return false;
};

Stat.prototype.isCharacterDevice = function () {
  return false;
};

Stat.prototype.isSymbolicLink = function () {
  return this.type === 'symlink';
};

Stat.prototype.isFIFO = function () {
  return false;
};

Stat.prototype.isSocket = function () {
  return false;
};

module.exports = function (opts) {
  return new Stat(opts);
};

},{}],71:[function(require,module,exports){
"use strict";

var events = require('events');

module.exports = function () {
  var listeners = {};
  var that = new events.EventEmitter();

  that.watch = function (key, cb) {
    if (!listeners[key]) {
      listeners[key] = new events.EventEmitter();
      listeners[key].setMaxListeners(0);
    }

    if (cb) listeners[key].on('change', cb);
    return listeners[key];
  };

  that.watcher = function (key, cb) {
    var watcher = new events.EventEmitter();

    var onchange = function onchange() {
      watcher.emit('change', 'change', key);
    };

    that.watch(key, onchange);
    if (cb) watcher.on('change', cb);

    watcher.close = function () {
      that.unwatch(key, onchange);
    };

    return watcher;
  };

  that.unwatch = function (key, cb) {
    if (!listeners[key]) return;
    if (cb) listeners[key].removeListener('change', cb);else listeners[key].removeAllListeners('change');
    if (!listeners[key].listeners('change').length) delete listeners[key];
    ;
  };

  that.change = function (key) {
    if (listeners[key]) listeners[key].emit('change');
    that.emit('change', key);
  };

  that.cb = function (key, cb) {
    return function (err, val) {
      if (key) that.change(key);
      if (cb) cb(err, val);
    };
  };

  return that;
};

},{"events":29}],72:[function(require,module,exports){
"use strict";

module.exports = function fixRange(opts) {
  var reverse = opts.reverse;
  var end = opts.end;
  var start = opts.start;
  var range = [start, end];
  if (start != null && end != null) range.sort();
  if (reverse) range = range.reverse();
  opts.start = range[0];
  opts.end = range[1];
  return opts;
};

},{}],73:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ranges = require('string-range');

module.exports = function (db) {
  if (db.hooks) {
    return;
  }

  var posthooks = [];
  var prehooks = [];

  function getPrefix(p) {
    return p && ('string' === typeof p ? p : 'string' === typeof p.prefix ? p.prefix : 'function' === typeof p.prefix ? p.prefix() : '');
  }

  function getKeyEncoding(db) {
    if (db && db._getKeyEncoding) return db._getKeyEncoding(db);
  }

  function getValueEncoding(db) {
    if (db && db._getValueEncoding) return db._getValueEncoding(db);
  }

  function remover(array, item) {
    return function () {
      var i = array.indexOf(item);
      if (!~i) return false;
      array.splice(i, 1);
      return true;
    };
  }

  db.hooks = {
    post: function post(prefix, hook) {
      if (!hook) hook = prefix, prefix = '';
      var h = {
        test: ranges.checker(prefix),
        hook: hook
      };
      posthooks.push(h);
      return remover(posthooks, h);
    },
    pre: function pre(prefix, hook) {
      if (!hook) hook = prefix, prefix = '';
      var h = {
        test: ranges.checker(prefix),
        hook: hook,
        safe: false !== prefix.safe
      };
      prehooks.push(h);
      return remover(prehooks, h);
    },
    posthooks: posthooks,
    prehooks: prehooks
  }; //POST HOOKS

  function each(e) {
    if (e && e.type) {
      posthooks.forEach(function (h) {
        if (h.test(e.key)) h.hook(e);
      });
    }
  }

  db.on('put', function (key, val) {
    each({
      type: 'put',
      key: key,
      value: val
    });
  });
  db.on('del', function (key, val) {
    each({
      type: 'del',
      key: key,
      value: val
    });
  });
  db.on('batch', function onBatch(ary) {
    ary.forEach(each);
  }); //PRE HOOKS

  var put = db.put;
  var del = db.del;
  var batch = db.batch;

  function callHooks(isBatch, b, opts, cb) {
    try {
      b.forEach(function hook(e, i) {
        prehooks.forEach(function (h) {
          if (h.test(String(e.key))) {
            //optimize this?
            //maybe faster to not create a new object each time?
            //have one object and expose scope to it?
            var context = {
              add: function add(ch, db) {
                if (typeof ch === 'undefined') {
                  return this;
                }

                if (ch === false) return delete b[i];
                var prefix = getPrefix(ch.prefix) || getPrefix(db) || h.prefix || ''; //don't leave a circular json object there incase using multilevel.

                if (prefix) ch.prefix = prefix;
                ch.key = prefix + ch.key;

                if (h.safe && h.test(String(ch.key))) {
                  //this usually means a stack overflow.
                  throw new Error('prehook cannot insert into own range');
                }

                var ke = ch.keyEncoding || getKeyEncoding(ch.prefix);
                var ve = ch.valueEncoding || getValueEncoding(ch.prefix);
                if (ke) ch.keyEncoding = ke;
                if (ve) ch.valueEncoding = ve;
                b.push(ch);
                hook(ch, b.length - 1);
                return this;
              },
              put: function put(ch, db) {
                if ('object' === _typeof(ch)) ch.type = 'put';
                return this.add(ch, db);
              },
              del: function del(ch, db) {
                if ('object' === _typeof(ch)) ch.type = 'del';
                return this.add(ch, db);
              },
              veto: function veto() {
                return this.add(false);
              }
            };
            h.hook.call(context, e, context.add, b);
          }
        });
      });
    } catch (err) {
      return (cb || opts)(err);
    }

    b = b.filter(function (e) {
      return e && e.type; //filter out empty items
    });

    if (b.length == 1 && !isBatch) {
      var change = b[0];
      return change.type == 'put' ? put.call(db, change.key, change.value, opts, cb) : del.call(db, change.key, opts, cb);
    }

    return batch.call(db, b, opts, cb);
  }

  db.put = function (key, value, opts, cb) {
    var batch = [{
      key: key,
      value: value,
      type: 'put'
    }];
    return callHooks(false, batch, opts, cb);
  };

  db.del = function (key, opts, cb) {
    var batch = [{
      key: key,
      type: 'del'
    }];
    return callHooks(false, batch, opts, cb);
  };

  db.batch = function (batch, opts, cb) {
    return callHooks(true, batch, opts, cb);
  };
};

},{"string-range":118}],74:[function(require,module,exports){
(function (process){
"use strict";

var inherits = require('inherits');

var Readable = require('readable-stream').Readable;

var extend = require('xtend');

module.exports = ReadStream;
inherits(ReadStream, Readable);

function ReadStream(iterator, options) {
  if (!(this instanceof ReadStream)) return new ReadStream(iterator, options);
  options = options || {};
  Readable.call(this, extend(options, {
    objectMode: true
  }));
  this._iterator = iterator;
  this._options = options;
  this.on('end', this.destroy.bind(this, null, null));
}

ReadStream.prototype._read = function () {
  var self = this;
  var options = this._options;
  if (this.destroyed) return;

  this._iterator.next(function (err, key, value) {
    if (self.destroyed) return;
    if (err) return self.destroy(err);

    if (key === undefined && value === undefined) {
      self.push(null);
    } else if (options.keys !== false && options.values === false) {
      self.push(key);
    } else if (options.keys === false && options.values !== false) {
      self.push(value);
    } else {
      self.push({
        key: key,
        value: value
      });
    }
  });
};

ReadStream.prototype._destroy = function (err, callback) {
  var self = this;

  this._iterator.end(function (err2) {
    callback(err || err2); // TODO when the next readable-stream (mirroring node v10) is out:
    // remove this. Since nodejs/node#19836, streams always emit close.

    process.nextTick(function () {
      self.emit('close');
    });
  });
};

}).call(this,require('_process'))

},{"_process":100,"inherits":49,"readable-stream":112,"xtend":129}],75:[function(require,module,exports){
(function (Buffer){
/* global indexedDB */
'use strict';

module.exports = Level;

var AbstractLevelDOWN = require('abstract-leveldown').AbstractLevelDOWN;

var inherits = require('inherits');

var Iterator = require('./iterator');

var mixedToBuffer = require('./util/mixed-to-buffer');

var setImmediate = require('./util/immediate');

var support = require('./util/support');

var DEFAULT_PREFIX = 'level-js-';

function Level(location, opts) {
  if (!(this instanceof Level)) return new Level(location, opts);
  AbstractLevelDOWN.call(this, location);
  opts = opts || {};
  this.prefix = opts.prefix || DEFAULT_PREFIX;
  this.version = parseInt(opts.version || 1, 10);
}

inherits(Level, AbstractLevelDOWN); // Detect binary and array key support (IndexedDB Second Edition)

Level.binaryKeys = support.binaryKeys(indexedDB);
Level.arrayKeys = support.arrayKeys(indexedDB);

Level.prototype._open = function (options, callback) {
  var req = indexedDB.open(this.prefix + this.location, this.version);
  var self = this;

  req.onerror = function () {
    callback(req.error || new Error('unknown error'));
  };

  req.onsuccess = function () {
    self.db = req.result;
    callback();
  };

  req.onupgradeneeded = function (ev) {
    var db = ev.target.result;

    if (!db.objectStoreNames.contains(self.location)) {
      db.createObjectStore(self.location);
    }
  };
};

Level.prototype.store = function (mode) {
  var transaction = this.db.transaction([this.location], mode);
  return transaction.objectStore(this.location);
};

Level.prototype.await = function (request, callback) {
  var transaction = request.transaction; // Take advantage of the fact that a non-canceled request error aborts
  // the transaction. I.e. no need to listen for "request.onerror".

  transaction.onabort = function () {
    callback(transaction.error || new Error('aborted by user'));
  };

  transaction.oncomplete = function () {
    callback(null, request.result);
  };
};

Level.prototype._get = function (key, options, callback) {
  var store = this.store('readonly');

  try {
    var req = store.get(key);
  } catch (err) {
    return setImmediate(function () {
      callback(err);
    });
  }

  this.await(req, function (err, value) {
    if (err) return callback(err);

    if (value === undefined) {
      // 'NotFound' error, consistent with LevelDOWN API
      return callback(new Error('NotFound'));
    }

    if (options.asBuffer) {
      value = mixedToBuffer(value);
    }

    callback(null, value);
  });
};

Level.prototype._del = function (key, options, callback) {
  var store = this.store('readwrite');

  try {
    var req = store.delete(key);
  } catch (err) {
    return setImmediate(function () {
      callback(err);
    });
  }

  this.await(req, callback);
};

Level.prototype._put = function (key, value, options, callback) {
  var store = this.store('readwrite');

  try {
    // Will throw a DataError or DataCloneError if the environment
    // does not support serializing the key or value respectively.
    var req = store.put(value, key);
  } catch (err) {
    return setImmediate(function () {
      callback(err);
    });
  }

  this.await(req, callback);
}; // Valid key types in IndexedDB Second Edition:
//
// - Number, except NaN. Includes Infinity and -Infinity
// - Date, except invalid (NaN)
// - String
// - ArrayBuffer or a view thereof (typed arrays). In level-js we also support
//   Buffer (which is an Uint8Array) (and the primary binary type of Level).
// - Array, except cyclical and empty (e.g. Array(10)). Elements must be valid
//   types themselves.


Level.prototype._serializeKey = function (key) {
  if (Buffer.isBuffer(key)) {
    return Level.binaryKeys ? key : key.toString();
  } else if (Array.isArray(key)) {
    return Level.arrayKeys ? key.map(this._serializeKey, this) : String(key);
  } else if (typeof key === 'boolean' || typeof key === 'number' && isNaN(key)) {
    // These types are invalid per the IndexedDB spec and ideally we'd treat
    // them that way, but they're valid per the current abstract test suite.
    return String(key);
  } else {
    return key;
  }
};

Level.prototype._serializeValue = function (value) {
  return value == null ? '' : value;
};

Level.prototype._iterator = function (options) {
  return new Iterator(this.db, this.location, options);
};

Level.prototype._batch = function (operations, options, callback) {
  if (operations.length === 0) return setImmediate(callback);
  var store = this.store('readwrite');
  var transaction = store.transaction;
  var index = 0;
  var error;

  transaction.onabort = function () {
    callback(error || transaction.error || new Error('aborted by user'));
  };

  transaction.oncomplete = function () {
    callback();
  }; // Wait for a request to complete before making the next, saving CPU.


  function loop() {
    var op = operations[index++];
    var key = op.key;

    try {
      var req = op.type === 'del' ? store.delete(key) : store.put(op.value, key);
    } catch (err) {
      error = err;
      transaction.abort();
      return;
    }

    if (index < operations.length) {
      req.onsuccess = loop;
    }
  }

  loop();
};

Level.prototype._close = function (callback) {
  this.db.close();
  setImmediate(callback);
};

Level.destroy = function (location, prefix, callback) {
  if (typeof prefix === 'function') {
    callback = prefix;
    prefix = DEFAULT_PREFIX;
  }

  var request = indexedDB.deleteDatabase(prefix + location);

  request.onsuccess = function () {
    callback();
  };

  request.onerror = function (err) {
    callback(err);
  };
};

}).call(this,{"isBuffer":require("../is-buffer/index.js")})

},{"../is-buffer/index.js":50,"./iterator":76,"./util/immediate":77,"./util/mixed-to-buffer":78,"./util/support":79,"abstract-leveldown":8,"inherits":49}],76:[function(require,module,exports){
/* global IDBKeyRange */
'use strict';

var inherits = require('inherits');

var AbstractIterator = require('abstract-leveldown').AbstractIterator;

var ltgt = require('ltgt');

var mixedToBuffer = require('./util/mixed-to-buffer');

var setImmediate = require('./util/immediate');

var noop = function noop() {};

module.exports = Iterator;

function Iterator(db, location, options) {
  AbstractIterator.call(this, db);
  this._limit = options.limit;
  this._count = 0;
  this._callback = null;
  this._cache = [];
  this._completed = false;
  this._aborted = false;
  this._error = null;
  this._transaction = null;
  this._keyAsBuffer = options.keyAsBuffer;
  this._valueAsBuffer = options.valueAsBuffer;

  if (this._limit === 0) {
    this._completed = true;
    return;
  }

  try {
    var keyRange = this.createKeyRange(options);
  } catch (e) {
    // The lower key is greater than the upper key.
    // IndexedDB throws an error, but we'll just return 0 results.
    this._completed = true;
    return;
  }

  this.createIterator(location, keyRange, options.reverse);
}

inherits(Iterator, AbstractIterator);

Iterator.prototype.createKeyRange = function (options) {
  var lower = ltgt.lowerBound(options);
  var upper = ltgt.upperBound(options);
  var lowerOpen = ltgt.lowerBoundExclusive(options);
  var upperOpen = ltgt.upperBoundExclusive(options);

  if (lower !== undefined && upper !== undefined) {
    return IDBKeyRange.bound(lower, upper, lowerOpen, upperOpen);
  } else if (lower !== undefined) {
    return IDBKeyRange.lowerBound(lower, lowerOpen);
  } else if (upper !== undefined) {
    return IDBKeyRange.upperBound(upper, upperOpen);
  } else {
    return null;
  }
};

Iterator.prototype.createIterator = function (location, keyRange, reverse) {
  var self = this;
  var transaction = this.db.transaction([location], 'readonly');
  var store = transaction.objectStore(location);
  var req = store.openCursor(keyRange, reverse ? 'prev' : 'next');

  req.onsuccess = function (ev) {
    var cursor = ev.target.result;
    if (cursor) self.onItem(cursor);
  };

  this._transaction = transaction; // If an error occurs (on the request), the transaction will abort.

  transaction.onabort = function () {
    self.onAbort(self._transaction.error || new Error('aborted by user'));
  };

  transaction.oncomplete = function () {
    self.onComplete();
  };
};

Iterator.prototype.onItem = function (cursor) {
  this._cache.push(cursor.key, cursor.value);

  if (this._limit <= 0 || ++this._count < this._limit) {
    cursor['continue']();
  }

  this.maybeNext();
};

Iterator.prototype.onAbort = function (err) {
  this._aborted = true;
  this._error = err;
  this.maybeNext();
};

Iterator.prototype.onComplete = function () {
  this._completed = true;
  this.maybeNext();
};

Iterator.prototype.maybeNext = function () {
  if (this._callback) {
    this._next(this._callback);

    this._callback = null;
  }
};

Iterator.prototype._next = function (callback) {
  if (this._aborted) {
    // The error should be picked up by either next() or end().
    var err = this._error;
    this._error = null;
    setImmediate(function () {
      callback(err);
    });
  } else if (this._cache.length > 0) {
    var key = this._cache.shift();

    var value = this._cache.shift();

    if (this._keyAsBuffer) key = mixedToBuffer(key);
    if (this._valueAsBuffer) value = mixedToBuffer(value);
    setImmediate(function () {
      callback(null, key, value);
    });
  } else if (this._completed) {
    setImmediate(callback);
  } else {
    this._callback = callback;
  }
};

Iterator.prototype._end = function (callback) {
  if (this._aborted || this._completed) {
    var err = this._error;
    setImmediate(function () {
      callback(err);
    });
    return;
  } // Don't advance the cursor anymore, and the transaction will complete
  // on its own in the next tick. This approach is much cleaner than calling
  // transaction.abort() with its unpredictable event order.


  this.onItem = noop;
  this.onAbort = callback;
  this.onComplete = callback;
};

},{"./util/immediate":77,"./util/mixed-to-buffer":78,"abstract-leveldown":8,"inherits":49,"ltgt":94}],77:[function(require,module,exports){
"use strict";

module.exports = require('immediate');

},{"immediate":43}],78:[function(require,module,exports){
(function (Buffer){
'use strict';

var toBuffer = require('typedarray-to-buffer');

module.exports = function (value) {
  if (value instanceof Uint8Array) return toBuffer(value);else if (value instanceof ArrayBuffer) return Buffer.from(value);else return Buffer.from(String(value));
};

}).call(this,require("buffer").Buffer)

},{"buffer":17,"typedarray-to-buffer":122}],79:[function(require,module,exports){
'use strict';

exports.test = function (key) {
  return function test(impl) {
    try {
      impl.cmp(key, 0);
      return true;
    } catch (err) {
      return false;
    }
  };
};

exports.binaryKeys = exports.test(new Uint8Array(0));
exports.arrayKeys = exports.test([1]);

},{}],80:[function(require,module,exports){
"use strict";

var fixRange = require('level-fix-range'); //get the first/last record in a range


exports = module.exports = peek;
exports.first = first;
exports.last = last;

function once(emitter, events, listener) {
  var remove = [];
  events.forEach(function (e) {
    function onEvent(arg) {
      if (listener(e, arg) === false) return;
      remove.forEach(function (r) {
        r();
      });
    }

    emitter.on(e, onEvent);
    remove.push(function () {
      emitter.removeListener(e, onEvent);
    });
  });
  return emitter;
}

function peek(db, opts, cb) {
  opts.limit = opts.reverse ? 2 : 1;
  var stream = once(db.createReadStream(opts), ['data', 'error', 'end'], function (event, data) {
    if (opts.reverse && data && opts.start && data.key.toString() > opts.start) return false;
    if (event == 'error') cb(data);else if (event == 'end') cb(new Error('range not found'), null, null);else cb(null, data.key, data.value);
  });
}

function first(db, opts, cb) {
  if (!cb) {
    cb = opts;
    opts = {};
  }

  opts.reverse = false;
  return peek(db, fixRange(opts), cb);
} //SO, this is pretty horrible,
//but it's works around an issue here
//https://github.com/rvagg/node-levelup/issues/110


function last(db, opts, cb) {
  if (!cb) {
    cb = opts;
    opts = {};
  }

  var start = opts.start;
  opts.reverse = true;
  return peek(db, fixRange(opts), function (err, key, value) {
    if (err) {
      var _start = opts.start;
      opts.start = null;
      peek(db, opts, function (_, key, value) {
        if (!key) return cb(err, null, null);

        var _key = key.toString();

        if (_key <= _start && (!opts.end || _key >= opts.end)) cb(_, key, value);else cb(err, null, null);
      });
    } else cb(err, key, value);
  });
}

},{"level-fix-range":72}],81:[function(require,module,exports){
"use strict";

function addOperation(type, key, value, options) {
  var operation = {
    type: type,
    key: key,
    value: value,
    options: options
  };

  if (options && options.prefix) {
    operation.prefix = options.prefix;
    delete options.prefix;
  }

  this._operations.push(operation);

  return this;
}

function Batch(sdb) {
  this._operations = [];
  this._sdb = sdb;
  this.put = addOperation.bind(this, 'put');
  this.del = addOperation.bind(this, 'del');
}

var B = Batch.prototype;

B.clear = function () {
  this._operations = [];
};

B.write = function (cb) {
  this._sdb.batch(this._operations, cb);
};

module.exports = Batch;

},{}],82:[function(require,module,exports){
(function (process){
"use strict";

var EventEmitter = require('events').EventEmitter;

var next = process.nextTick;

var SubDb = require('./sub');

var Batch = require('./batch');

var fixRange = require('level-fix-range');

var Hooks = require('level-hooks');

module.exports = function (_db, options) {
  function DB() {}

  DB.prototype = _db;
  var db = new DB();
  if (db.sublevel) return db;
  options = options || {}; //use \xff (255) as the seperator,
  //so that sections of the database will sort after the regular keys

  var sep = options.sep = options.sep || '\xff';
  db._options = options;
  Hooks(db);
  db.sublevels = {};

  db.sublevel = function (prefix, options) {
    if (db.sublevels[prefix]) return db.sublevels[prefix];
    return new SubDb(db, prefix, options || this._options);
  };

  db.methods = {};

  db.prefix = function (key) {
    return '' + (key || '');
  };

  db.pre = function (range, hook) {
    if (!hook) hook = range, range = {
      max: sep
    };
    return db.hooks.pre(range, hook);
  };

  db.post = function (range, hook) {
    if (!hook) hook = range, range = {
      max: sep
    };
    return db.hooks.post(range, hook);
  };

  function safeRange(fun) {
    return function (opts) {
      opts = opts || {};
      opts = fixRange(opts);
      if (opts.reverse) opts.start = opts.start || sep;else opts.end = opts.end || sep;
      return fun.call(db, opts);
    };
  }

  db.readStream = db.createReadStream = safeRange(db.createReadStream);
  db.keyStream = db.createKeyStream = safeRange(db.createKeyStream);
  db.valuesStream = db.createValueStream = safeRange(db.createValueStream);
  var batch = db.batch;

  db.batch = function (changes, opts, cb) {
    if (!Array.isArray(changes)) return new Batch(db);
    changes.forEach(function (e) {
      if (e.prefix) {
        if ('function' === typeof e.prefix.prefix) e.key = e.prefix.prefix(e.key);else if ('string' === typeof e.prefix) e.key = e.prefix + e.key;
      }
    });
    batch.call(db, changes, opts, cb);
  };

  return db;
};

}).call(this,require('_process'))

},{"./batch":81,"./sub":88,"_process":100,"events":29,"level-fix-range":83,"level-hooks":73}],83:[function(require,module,exports){
"use strict";

var clone = require('clone');

module.exports = function fixRange(opts) {
  opts = clone(opts);
  var reverse = opts.reverse;
  var end = opts.max || opts.end;
  var start = opts.min || opts.start;
  var range = [start, end];
  if (start != null && end != null) range.sort();
  if (reverse) range = range.reverse();
  opts.start = range[0];
  opts.end = range[1];
  delete opts.min;
  delete opts.max;
  return opts;
};

},{"clone":18}],84:[function(require,module,exports){
"use strict";

module.exports = Object.keys || require('./shim');

},{"./shim":85}],85:[function(require,module,exports){
"use strict";

(function () {
  "use strict"; // modified from https://github.com/kriskowal/es5-shim

  var has = Object.prototype.hasOwnProperty,
      is = require('is'),
      forEach = require('foreach'),
      hasDontEnumBug = !{
    'toString': null
  }.propertyIsEnumerable('toString'),
      dontEnums = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
      keysShim;

  keysShim = function keys(object) {
    if (!is.object(object) && !is.array(object)) {
      throw new TypeError("Object.keys called on a non-object");
    }

    var name,
        theKeys = [];

    for (name in object) {
      if (has.call(object, name)) {
        theKeys.push(name);
      }
    }

    if (hasDontEnumBug) {
      forEach(dontEnums, function (dontEnum) {
        if (has.call(object, dontEnum)) {
          theKeys.push(dontEnum);
        }
      });
    }

    return theKeys;
  };

  module.exports = keysShim;
})();

},{"foreach":30,"is":52}],86:[function(require,module,exports){
arguments[4][67][0].apply(exports,arguments)
},{"dup":67}],87:[function(require,module,exports){
"use strict";

var Keys = require("object-keys");

var hasKeys = require("./has-keys");

module.exports = extend;

function extend() {
  var target = {};

  for (var i = 0; i < arguments.length; i++) {
    var source = arguments[i];

    if (!hasKeys(source)) {
      continue;
    }

    var keys = Keys(source);

    for (var j = 0; j < keys.length; j++) {
      var name = keys[j];
      target[name] = source[name];
    }
  }

  return target;
}

},{"./has-keys":86,"object-keys":84}],88:[function(require,module,exports){
"use strict";

var EventEmitter = require('events').EventEmitter;

var inherits = require('util').inherits;

var ranges = require('string-range');

var fixRange = require('level-fix-range');

var xtend = require('xtend');

var Batch = require('./batch');

inherits(SubDB, EventEmitter);

function SubDB(db, prefix, options) {
  if ('string' === typeof options) {
    console.error('db.sublevel(name, seperator<string>) is depreciated');
    console.error('use db.sublevel(name, {sep: separator})) if you must');
    options = {
      sep: options
    };
  }

  if (!(this instanceof SubDB)) return new SubDB(db, prefix, options);
  if (!db) throw new Error('must provide db');
  if (!prefix) throw new Error('must provide prefix');
  options = options || {};
  options.sep = options.sep || '\xff';
  this._parent = db;
  this._options = options;
  this.options = options;
  this._prefix = prefix;
  this._root = root(this);
  db.sublevels[prefix] = this;
  this.sublevels = {};
  this.methods = {};
  var self = this;
  this.hooks = {
    pre: function pre() {
      return self.pre.apply(self, arguments);
    },
    post: function post() {
      return self.post.apply(self, arguments);
    }
  };
}

var SDB = SubDB.prototype;

SDB._key = function (key) {
  var sep = this._options.sep;
  return sep + this._prefix + sep + key;
};

SDB._getOptsAndCb = function (opts, cb) {
  if (typeof opts == 'function') {
    cb = opts;
    opts = {};
  }

  return {
    opts: xtend(opts, this._options),
    cb: cb
  };
};

SDB.sublevel = function (prefix, options) {
  if (this.sublevels[prefix]) return this.sublevels[prefix];
  return new SubDB(this, prefix, options || this._options);
};

SDB.put = function (key, value, opts, cb) {
  var res = this._getOptsAndCb(opts, cb);

  this._root.put(this.prefix(key), value, res.opts, res.cb);
};

SDB.get = function (key, opts, cb) {
  var res = this._getOptsAndCb(opts, cb);

  this._root.get(this.prefix(key), res.opts, res.cb);
};

SDB.del = function (key, opts, cb) {
  var res = this._getOptsAndCb(opts, cb);

  this._root.del(this.prefix(key), res.opts, res.cb);
};

SDB.batch = function (changes, opts, cb) {
  if (!Array.isArray(changes)) return new Batch(this);

  var self = this,
      res = this._getOptsAndCb(opts, cb);

  changes.forEach(function (ch) {
    //OH YEAH, WE NEED TO VALIDATE THAT UPDATING THIS KEY/PREFIX IS ALLOWED
    if ('string' === typeof ch.prefix) ch.key = ch.prefix + ch.key;else ch.key = (ch.prefix || self).prefix(ch.key);
    if (ch.prefix) ch.prefix = null;
  });

  this._root.batch(changes, res.opts, res.cb);
};

SDB._getKeyEncoding = function () {
  if (this.options.keyEncoding) return this.options.keyEncoding;
  if (this._parent && this._parent._getKeyEncoding) return this._parent._getKeyEncoding();
};

SDB._getValueEncoding = function () {
  if (this.options.valueEncoding) return this.options.valueEncoding;
  if (this._parent && this._parent._getValueEncoding) return this._parent._getValueEncoding();
};

SDB.prefix = function (key) {
  var sep = this._options.sep;
  return this._parent.prefix() + sep + this._prefix + sep + (key || '');
};

SDB.keyStream = SDB.createKeyStream = function (opts) {
  opts = opts || {};
  opts.keys = true;
  opts.values = false;
  return this.createReadStream(opts);
};

SDB.valueStream = SDB.createValueStream = function (opts) {
  opts = opts || {};
  opts.keys = false;
  opts.values = true;
  opts.keys = false;
  return this.createReadStream(opts);
};

function selectivelyMerge(_opts, opts) {
  ['valueEncoding', 'encoding', 'keyEncoding', 'reverse', 'values', 'keys', 'limit', 'fillCache'].forEach(function (k) {
    if (opts.hasOwnProperty(k)) _opts[k] = opts[k];
  });
}

SDB.readStream = SDB.createReadStream = function (opts) {
  opts = opts || {};
  var r = root(this);
  var p = this.prefix();

  var _opts = ranges.prefix(opts, p);

  selectivelyMerge(_opts, xtend(opts, this._options));
  var s = r.createReadStream(_opts);

  if (_opts.values === false) {
    var read = s.read;

    if (read) {
      s.read = function (size) {
        var val = read.call(this, size);
        if (val) val = val.substring(p.length);
        return val;
      };
    } else {
      var emit = s.emit;

      s.emit = function (event, val) {
        if (event === 'data') {
          emit.call(this, 'data', val.substring(p.length));
        } else emit.call(this, event, val);
      };
    }

    return s;
  } else if (_opts.keys === false) return s;else {
    var read = s.read;

    if (read) {
      s.read = function (size) {
        var d = read.call(this, size);
        if (d) d.key = d.key.substring(p.length);
        return d;
      };
    } else {
      s.on('data', function (d) {
        //mutate the prefix!
        //this doesn't work for createKeyStream admittedly.
        d.key = d.key.substring(p.length);
      });
    }

    return s;
  }
};

SDB.writeStream = SDB.createWriteStream = function () {
  var r = root(this);
  var p = this.prefix();
  var ws = r.createWriteStream.apply(r, arguments);
  var write = ws.write;
  var encoding = this._options.encoding;
  var valueEncoding = this._options.valueEncoding;
  var keyEncoding = this._options.keyEncoding; // slight optimization, if no encoding was specified at all,
  // which will be the case most times, make write not check at all

  var nocheck = !encoding && !valueEncoding && !keyEncoding;
  ws.write = nocheck ? function (data) {
    data.key = p + data.key;
    return write.call(ws, data);
  } : function (data) {
    data.key = p + data.key; // not merging all options here since this happens on every write and things could get slowed down
    // at this point we only consider encoding important to propagate

    if (encoding && typeof data.encoding === 'undefined') data.encoding = encoding;
    if (valueEncoding && typeof data.valueEncoding === 'undefined') data.valueEncoding = valueEncoding;
    if (keyEncoding && typeof data.keyEncoding === 'undefined') data.keyEncoding = keyEncoding;
    return write.call(ws, data);
  };
  return ws;
};

SDB.approximateSize = function () {
  var r = root(db);
  return r.approximateSize.apply(r, arguments);
};

function root(db) {
  if (!db._parent) return db;
  return root(db._parent);
}

SDB.pre = function (range, hook) {
  if (!hook) hook = range, range = null;
  range = ranges.prefix(range, this.prefix(), this._options.sep);
  var r = root(this._parent);
  var p = this.prefix();
  return r.hooks.pre(fixRange(range), function (ch, add, batch) {
    hook({
      key: ch.key.substring(p.length),
      value: ch.value,
      type: ch.type
    }, function (ch, _p) {
      //maybe remove the second add arg now
      //that op can have prefix?
      add(ch, ch.prefix ? _p : _p || p);
    }, batch);
  });
};

SDB.post = function (range, hook) {
  if (!hook) hook = range, range = null;
  var r = root(this._parent);
  var p = this.prefix();
  range = ranges.prefix(range, p, this._options.sep);
  return r.hooks.post(fixRange(range), function (data) {
    hook({
      key: data.key.substring(p.length),
      value: data.value,
      type: data.type
    });
  });
};

var _exports = module.exports = SubDB;

},{"./batch":81,"events":29,"level-fix-range":83,"string-range":118,"util":127,"xtend":87}],89:[function(require,module,exports){
"use strict";

var WriteError = require('level-errors').WriteError;

var promisify = require('./promisify');

var getCallback = require('./common').getCallback;

var getOptions = require('./common').getOptions;

function Batch(levelup) {
  this._levelup = levelup;
  this.batch = levelup.db.batch();
  this.ops = [];
  this.length = 0;
}

Batch.prototype.put = function (key, value) {
  try {
    this.batch.put(key, value);
  } catch (e) {
    throw new WriteError(e);
  }

  this.ops.push({
    type: 'put',
    key: key,
    value: value
  });
  this.length++;
  return this;
};

Batch.prototype.del = function (key) {
  try {
    this.batch.del(key);
  } catch (err) {
    throw new WriteError(err);
  }

  this.ops.push({
    type: 'del',
    key: key
  });
  this.length++;
  return this;
};

Batch.prototype.clear = function () {
  try {
    this.batch.clear();
  } catch (err) {
    throw new WriteError(err);
  }

  this.ops = [];
  this.length = 0;
  return this;
};

Batch.prototype.write = function (options, callback) {
  var levelup = this._levelup;
  var ops = this.ops;
  var promise;
  callback = getCallback(options, callback);

  if (!callback) {
    callback = promisify();
    promise = callback.promise;
  }

  options = getOptions(options);

  try {
    this.batch.write(options, function (err) {
      if (err) {
        return callback(new WriteError(err));
      }

      levelup.emit('batch', ops);
      callback();
    });
  } catch (err) {
    throw new WriteError(err);
  }

  return promise;
};

module.exports = Batch;

},{"./common":90,"./promisify":92,"level-errors":64}],90:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.getCallback = function (options, callback) {
  return typeof options === 'function' ? options : callback;
};

exports.getOptions = function (options) {
  return _typeof(options) === 'object' && options !== null ? options : {};
};

},{}],91:[function(require,module,exports){
(function (process){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var EventEmitter = require('events').EventEmitter;

var inherits = require('util').inherits;

var extend = require('xtend');

var DeferredLevelDOWN = require('deferred-leveldown');

var IteratorStream = require('level-iterator-stream');

var Batch = require('./batch');

var errors = require('level-errors');

var assert = require('assert');

var promisify = require('./promisify');

var getCallback = require('./common').getCallback;

var getOptions = require('./common').getOptions;

var WriteError = errors.WriteError;
var ReadError = errors.ReadError;
var NotFoundError = errors.NotFoundError;
var OpenError = errors.OpenError;
var InitializationError = errors.InitializationError; // Possible AbstractLevelDOWN#status values:
//  - 'new'     - newly created, not opened or closed
//  - 'opening' - waiting for the database to be opened, post open()
//  - 'open'    - successfully opened the database, available for use
//  - 'closing' - waiting for the database to be closed, post close()
//  - 'closed'  - database has been successfully closed, should not be
//                 used except for another open() operation

function LevelUP(db, options, callback) {
  if (!(this instanceof LevelUP)) {
    return new LevelUP(db, options, callback);
  }

  var error;
  EventEmitter.call(this);
  this.setMaxListeners(Infinity);

  if (typeof options === 'function') {
    callback = options;
    options = {};
  }

  options = options || {};

  if (!db || _typeof(db) !== 'object') {
    error = new InitializationError('First argument must be an abstract-leveldown compliant store');

    if (typeof callback === 'function') {
      return process.nextTick(callback, error);
    }

    throw error;
  }

  assert.equal(_typeof(db.status), 'string', '.status required, old abstract-leveldown');
  this.options = getOptions(options);
  this._db = db;
  this.db = new DeferredLevelDOWN(db);
  this.open(callback);
}

LevelUP.prototype.emit = EventEmitter.prototype.emit;
LevelUP.prototype.once = EventEmitter.prototype.once;
inherits(LevelUP, EventEmitter);

LevelUP.prototype.open = function (callback) {
  var self = this;
  var promise;

  if (!callback) {
    callback = promisify();
    promise = callback.promise;
  }

  if (this.isOpen()) {
    process.nextTick(callback, null, self);
    return promise;
  }

  if (this._isOpening()) {
    this.once('open', function () {
      callback(null, self);
    });
    return promise;
  }

  this.emit('opening');
  this.db.open(this.options, function (err) {
    if (err) {
      return callback(new OpenError(err));
    }

    self.db = self._db;
    callback(null, self);
    self.emit('open');
    self.emit('ready');
  });
  return promise;
};

LevelUP.prototype.close = function (callback) {
  var self = this;
  var promise;

  if (!callback) {
    callback = promisify();
    promise = callback.promise;
  }

  if (this.isOpen()) {
    this.db.close(function () {
      self.emit('closed');
      callback.apply(null, arguments);
    });
    this.emit('closing');
    this.db = new DeferredLevelDOWN(this._db);
  } else if (this.isClosed()) {
    process.nextTick(callback);
  } else if (this.db.status === 'closing') {
    this.once('closed', callback);
  } else if (this._isOpening()) {
    this.once('open', function () {
      self.close(callback);
    });
  }

  return promise;
};

LevelUP.prototype.isOpen = function () {
  return this.db.status === 'open';
};

LevelUP.prototype._isOpening = function () {
  return this.db.status === 'opening';
};

LevelUP.prototype.isClosed = function () {
  return /^clos|new/.test(this.db.status);
};

LevelUP.prototype.get = function (key, options, callback) {
  if (key === null || key === undefined) {
    throw new ReadError('get() requires a key argument');
  }

  var promise;
  callback = getCallback(options, callback);

  if (!callback) {
    callback = promisify();
    promise = callback.promise;
  }

  if (maybeError(this, callback)) {
    return promise;
  }

  options = getOptions(options);
  this.db.get(key, options, function (err, value) {
    if (err) {
      if (/notfound/i.test(err) || err.notFound) {
        err = new NotFoundError('Key not found in database [' + key + ']', err);
      } else {
        err = new ReadError(err);
      }

      return callback(err);
    }

    callback(null, value);
  });
  return promise;
};

LevelUP.prototype.put = function (key, value, options, callback) {
  if (key === null || key === undefined) {
    throw new WriteError('put() requires a key argument');
  }

  var self = this;
  var promise;
  callback = getCallback(options, callback);

  if (!callback) {
    callback = promisify();
    promise = callback.promise;
  }

  if (maybeError(this, callback)) {
    return promise;
  }

  options = getOptions(options);
  this.db.put(key, value, options, function (err) {
    if (err) {
      return callback(new WriteError(err));
    }

    self.emit('put', key, value);
    callback();
  });
  return promise;
};

LevelUP.prototype.del = function (key, options, callback) {
  if (key === null || key === undefined) {
    throw new WriteError('del() requires a key argument');
  }

  var self = this;
  var promise;
  callback = getCallback(options, callback);

  if (!callback) {
    callback = promisify();
    promise = callback.promise;
  }

  if (maybeError(this, callback)) {
    return promise;
  }

  options = getOptions(options);
  this.db.del(key, options, function (err) {
    if (err) {
      return callback(new WriteError(err));
    }

    self.emit('del', key);
    callback();
  });
  return promise;
};

LevelUP.prototype.batch = function (arr, options, callback) {
  if (!arguments.length) {
    return new Batch(this);
  }

  if (!Array.isArray(arr)) {
    throw new WriteError('batch() requires an array argument');
  }

  var self = this;
  var promise;
  callback = getCallback(options, callback);

  if (!callback) {
    callback = promisify();
    promise = callback.promise;
  }

  if (maybeError(this, callback)) {
    return promise;
  }

  options = getOptions(options);
  this.db.batch(arr, options, function (err) {
    if (err) {
      return callback(new WriteError(err));
    }

    self.emit('batch', arr);
    callback();
  });
  return promise;
};

LevelUP.prototype.iterator = function (options) {
  return this.db.iterator(options);
};

LevelUP.prototype.readStream = LevelUP.prototype.createReadStream = function (options) {
  options = extend({
    keys: true,
    values: true
  }, options);

  if (typeof options.limit !== 'number') {
    options.limit = -1;
  }

  return new IteratorStream(this.db.iterator(options), options);
};

LevelUP.prototype.keyStream = LevelUP.prototype.createKeyStream = function (options) {
  return this.createReadStream(extend(options, {
    keys: true,
    values: false
  }));
};

LevelUP.prototype.valueStream = LevelUP.prototype.createValueStream = function (options) {
  return this.createReadStream(extend(options, {
    keys: false,
    values: true
  }));
};

LevelUP.prototype.toString = function () {
  return 'LevelUP';
};

function maybeError(db, callback) {
  if (!db._isOpening() && !db.isOpen()) {
    process.nextTick(callback, new ReadError('Database is not open'));
    return true;
  }
}

LevelUP.errors = errors;
module.exports = LevelUP.default = LevelUP;

}).call(this,require('_process'))

},{"./batch":89,"./common":90,"./promisify":92,"_process":100,"assert":9,"deferred-leveldown":25,"events":29,"level-errors":64,"level-iterator-stream":74,"util":127,"xtend":129}],92:[function(require,module,exports){
"use strict";

function promisify() {
  var callback;
  var promise = new Promise(function (resolve, reject) {
    callback = function callback(err, value) {
      if (err) reject(err);else resolve(value);
    };
  });
  callback.promise = promise;
  return callback;
}

module.exports = promisify;

},{}],93:[function(require,module,exports){
(function (global){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';
/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used as references for various `Number` constants. */

var INFINITY = 1 / 0;
/** `Object#toString` result references. */

var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';
/** Used to match property names within property paths. */

var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Detect free variable `global` from Node.js. */

var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */


function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;

  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }

  return result;
}
/** Used for built-in method references. */


var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */

var coreJsData = root['__core-js_shared__'];
/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/** Used to resolve the decompiled source of functions. */


var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/** Built-in value references. */

var _Symbol = root.Symbol,
    splice = arrayProto.splice;
/* Built-in method references that are verified to be native. */

var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */


function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */


function listCacheClear() {
  this.__data__ = [];
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */


function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }

  return index && index == length ? object : undefined;
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */


function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */


function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */


function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */


function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }

  var type = _typeof(value);

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */


function isKeyable(value) {
  var type = _typeof(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */


var stringToPath = memoize(function (string) {
  string = toString(string);
  var result = [];

  if (reLeadingDot.test(string)) {
    result.push('');
  }

  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */


function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */


function memoize(func, resolver) {
  if (typeof func != 'function' || resolver && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
} // Assign cache to `_.memoize`.


memoize.Cache = MapCache;
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq(value, other) {
  return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */


var isArray = Array.isArray;
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = _typeof(value);

  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return !!value && _typeof(value) == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */


function isSymbol(value) {
  return _typeof(value) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */


function toString(value) {
  return value == null ? '' : baseToString(value);
}
/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */


function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],94:[function(require,module,exports){
(function (Buffer){
"use strict";

exports.compare = function (a, b) {
  if (Buffer.isBuffer(a)) {
    var l = Math.min(a.length, b.length);

    for (var i = 0; i < l; i++) {
      var cmp = a[i] - b[i];
      if (cmp) return cmp;
    }

    return a.length - b.length;
  }

  return a < b ? -1 : a > b ? 1 : 0;
}; // to be compatible with the current abstract-leveldown tests
// nullish or empty strings.
// I could use !!val but I want to permit numbers and booleans,
// if possible.


function isDef(val) {
  return val !== undefined && val !== '';
}

function has(range, name) {
  return Object.hasOwnProperty.call(range, name);
}

function hasKey(range, name) {
  return Object.hasOwnProperty.call(range, name) && name;
}

var lowerBoundKey = exports.lowerBoundKey = function (range) {
  return hasKey(range, 'gt') || hasKey(range, 'gte') || hasKey(range, 'min') || (range.reverse ? hasKey(range, 'end') : hasKey(range, 'start')) || undefined;
};

var lowerBound = exports.lowerBound = function (range, def) {
  var k = lowerBoundKey(range);
  return k ? range[k] : def;
};

var lowerBoundInclusive = exports.lowerBoundInclusive = function (range) {
  return has(range, 'gt') ? false : true;
};

var upperBoundInclusive = exports.upperBoundInclusive = function (range) {
  return has(range, 'lt')
  /*&& !range.maxEx*/
  ? false : true;
};

var lowerBoundExclusive = exports.lowerBoundExclusive = function (range) {
  return !lowerBoundInclusive(range);
};

var upperBoundExclusive = exports.upperBoundExclusive = function (range) {
  return !upperBoundInclusive(range);
};

var upperBoundKey = exports.upperBoundKey = function (range) {
  return hasKey(range, 'lt') || hasKey(range, 'lte') || hasKey(range, 'max') || (range.reverse ? hasKey(range, 'start') : hasKey(range, 'end')) || undefined;
};

var upperBound = exports.upperBound = function (range, def) {
  var k = upperBoundKey(range);
  return k ? range[k] : def;
};

exports.start = function (range, def) {
  return range.reverse ? upperBound(range, def) : lowerBound(range, def);
};

exports.end = function (range, def) {
  return range.reverse ? lowerBound(range, def) : upperBound(range, def);
};

exports.startInclusive = function (range) {
  return range.reverse ? upperBoundInclusive(range) : lowerBoundInclusive(range);
};

exports.endInclusive = function (range) {
  return range.reverse ? lowerBoundInclusive(range) : upperBoundInclusive(range);
};

function id(e) {
  return e;
}

exports.toLtgt = function (range, _range, map, lower, upper) {
  _range = _range || {};
  map = map || id;
  var defaults = arguments.length > 3;
  var lb = exports.lowerBoundKey(range);
  var ub = exports.upperBoundKey(range);

  if (lb) {
    if (lb === 'gt') _range.gt = map(range.gt, false);else _range.gte = map(range[lb], false);
  } else if (defaults) _range.gte = map(lower, false);

  if (ub) {
    if (ub === 'lt') _range.lt = map(range.lt, true);else _range.lte = map(range[ub], true);
  } else if (defaults) _range.lte = map(upper, true);

  if (range.reverse != null) _range.reverse = !!range.reverse; //if range was used mutably
  //(in level-sublevel it's part of an options object
  //that has more properties on it.)

  if (has(_range, 'max')) delete _range.max;
  if (has(_range, 'min')) delete _range.min;
  if (has(_range, 'start')) delete _range.start;
  if (has(_range, 'end')) delete _range.end;
  return _range;
};

exports.contains = function (range, key, compare) {
  compare = compare || exports.compare;
  var lb = lowerBound(range);

  if (isDef(lb)) {
    var cmp = compare(key, lb);
    if (cmp < 0 || cmp === 0 && lowerBoundExclusive(range)) return false;
  }

  var ub = upperBound(range);

  if (isDef(ub)) {
    var cmp = compare(key, ub);
    if (cmp > 0 || cmp === 0 && upperBoundExclusive(range)) return false;
  }

  return true;
};

exports.filter = function (range, compare) {
  return function (key) {
    return exports.contains(range, key, compare);
  };
};

}).call(this,{"isBuffer":require("../is-buffer/index.js")})

},{"../is-buffer/index.js":50}],95:[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
'use strict';
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

},{}],96:[function(require,module,exports){
"use strict";

module.exports = function (num, base) {
  return parseInt(num.toString(), base || 8);
};

},{}],97:[function(require,module,exports){
"use strict";

var wrappy = require('wrappy');

module.exports = wrappy(once);
module.exports.strict = wrappy(onceStrict);
once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function value() {
      return once(this);
    },
    configurable: true
  });
  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function value() {
      return onceStrict(this);
    },
    configurable: true
  });
});

function once(fn) {
  var f = function f() {
    if (f.called) return f.value;
    f.called = true;
    return f.value = fn.apply(this, arguments);
  };

  f.called = false;
  return f;
}

function onceStrict(fn) {
  var f = function f() {
    if (f.called) throw new Error(f.onceError);
    f.called = true;
    return f.value = fn.apply(this, arguments);
  };

  var name = fn.name || 'Function wrapped with `once`';
  f.onceError = name + " shouldn't be called more than once";
  f.called = false;
  return f;
}

},{"wrappy":128}],98:[function(require,module,exports){
(function (process){
"use strict";

// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;

  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];

    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  } // if the path is allowed to go above the root, restore leading ..s


  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
} // path.resolve([from ...], to)
// posix version


exports.resolve = function () {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = i >= 0 ? arguments[i] : process.cwd(); // Skip empty and invalid entries

    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  } // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)
  // Normalize the path


  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {
    return !!p;
  }), !resolvedAbsolute).join('/');
  return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
}; // path.normalize(path)
// posix version


exports.normalize = function (path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/'; // Normalize the path

  path = normalizeArray(filter(path.split('/'), function (p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }

  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
}; // posix version


exports.isAbsolute = function (path) {
  return path.charAt(0) === '/';
}; // posix version


exports.join = function () {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function (p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }

    return p;
  }).join('/'));
}; // path.relative(from, to)
// posix version


exports.relative = function (from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;

    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;

    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));
  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;

  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];

  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));
  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47
  /*/*/
  ;
  var end = -1;
  var matchedSlash = true;

  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);

    if (code === 47
    /*/*/
    ) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';

  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }

  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';
  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47
    /*/*/
    ) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
} // Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here


exports.basename = function (path, ext) {
  var f = basename(path);

  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }

  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true; // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find

  var preDotState = 0;

  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);

    if (code === 47
    /*/*/
    ) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }

        continue;
      }

    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }

    if (code === 46
    /*.*/
    ) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
      } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }

  return path.slice(startDot, end);
};

function filter(xs, f) {
  if (xs.filter) return xs.filter(f);
  var res = [];

  for (var i = 0; i < xs.length; i++) {
    if (f(xs[i], i, xs)) res.push(xs[i]);
  }

  return res;
} // String.prototype.substr - negative index don't work in IE8


var substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {
  return str.substr(start, len);
} : function (str, start, len) {
  if (start < 0) start = str.length + start;
  return str.substr(start, len);
};

}).call(this,require('_process'))

},{"_process":100}],99:[function(require,module,exports){
(function (process){
'use strict';

if (typeof process === 'undefined' || !process.version || process.version.indexOf('v0.') === 0 || process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = {
    nextTick: nextTick
  };
} else {
  module.exports = process;
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }

  var len = arguments.length;
  var args, i;

  switch (len) {
    case 0:
    case 1:
      return process.nextTick(fn);

    case 2:
      return process.nextTick(function afterTickOne() {
        fn.call(null, arg1);
      });

    case 3:
      return process.nextTick(function afterTickTwo() {
        fn.call(null, arg1, arg2);
      });

    case 4:
      return process.nextTick(function afterTickThree() {
        fn.call(null, arg1, arg2, arg3);
      });

    default:
      args = new Array(len - 1);
      i = 0;

      while (i < args.length) {
        args[i++] = arguments[i];
      }

      return process.nextTick(function afterTick() {
        fn.apply(null, args);
      });
  }
}

}).call(this,require('_process'))

},{"_process":100}],100:[function(require,module,exports){
"use strict";

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

},{}],101:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * prr
  * (c) 2013 Rod Vagg <rod@vagg.org>
  * https://github.com/rvagg/prr
  * License: MIT
  */
(function (name, context, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition();else context[name] = definition();
})('prr', void 0, function () {
  var setProperty = typeof Object.defineProperty == 'function' ? function (obj, key, options) {
    Object.defineProperty(obj, key, options);
    return obj;
  } : function (obj, key, options) {
    // < es5
    obj[key] = options.value;
    return obj;
  },
      makeOptions = function makeOptions(value, options) {
    var oo = _typeof(options) == 'object',
        os = !oo && typeof options == 'string',
        op = function op(p) {
      return oo ? !!options[p] : os ? options.indexOf(p[0]) > -1 : false;
    };

    return {
      enumerable: op('enumerable'),
      configurable: op('configurable'),
      writable: op('writable'),
      value: value
    };
  },
      prr = function prr(obj, key, value, options) {
    var k;
    options = makeOptions(value, options);

    if (_typeof(key) == 'object') {
      for (k in key) {
        if (Object.hasOwnProperty.call(key, k)) {
          options.value = key[k];
          setProperty(obj, k, options);
        }
      }

      return obj;
    }

    return setProperty(obj, key, options);
  };

  return prr;
});

},{}],102:[function(require,module,exports){
"use strict";

module.exports = require('./lib/_stream_duplex.js');

},{"./lib/_stream_duplex.js":103}],103:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
'use strict';
/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/

/*<replacement>*/


var objectKeys = Object.keys || function (obj) {
  var keys = [];

  for (var key in obj) {
    keys.push(key);
  }

  return keys;
};
/*</replacement>*/


module.exports = Duplex;
/*<replacement>*/

var util = require('core-util-is');

util.inherits = require('inherits');
/*</replacement>*/

var Readable = require('./_stream_readable');

var Writable = require('./_stream_writable');

util.inherits(Duplex, Readable);
{
  // avoid scope creep, the keys array can then be collected
  var keys = objectKeys(Writable.prototype);

  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);
  Readable.call(this, options);
  Writable.call(this, options);
  if (options && options.readable === false) this.readable = false;
  if (options && options.writable === false) this.writable = false;
  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;
  this.once('end', onend);
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
}); // the no-half-open enforcer

function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return; // no more data can be written.
  // But allow more writes to happen in this tick.

  pna.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  get: function get() {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }

    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

Duplex.prototype._destroy = function (err, cb) {
  this.push(null);
  this.end();
  pna.nextTick(cb, err);
};

},{"./_stream_readable":105,"./_stream_writable":107,"core-util-is":20,"inherits":49,"process-nextick-args":99}],104:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.
'use strict';

module.exports = PassThrough;

var Transform = require('./_stream_transform');
/*<replacement>*/


var util = require('core-util-is');

util.inherits = require('inherits');
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);
  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

},{"./_stream_transform":106,"core-util-is":20,"inherits":49}],105:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/


module.exports = Readable;
/*<replacement>*/

var isArray = require('isarray');
/*</replacement>*/

/*<replacement>*/


var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;
/*<replacement>*/

var EE = require('events').EventEmitter;

var EElistenerCount = function EElistenerCount(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/


var Stream = require('./internal/streams/stream');
/*</replacement>*/

/*<replacement>*/


var Buffer = require('safe-buffer').Buffer;

var OurUint8Array = global.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*</replacement>*/

/*<replacement>*/


var util = require('core-util-is');

util.inherits = require('inherits');
/*</replacement>*/

/*<replacement>*/

var debugUtil = require('util');

var debug = void 0;

if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function debug() {};
}
/*</replacement>*/


var BufferList = require('./internal/streams/BufferList');

var destroyImpl = require('./internal/streams/destroy');

var StringDecoder;
util.inherits(Readable, Stream);
var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn); // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.

  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream) {
  Duplex = Duplex || require('./_stream_duplex');
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.

  var isDuplex = stream instanceof Duplex; // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"

  var hwm = options.highWaterMark;
  var readableHwm = options.readableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;else this.highWaterMark = defaultHwm; // cast to ints.

  this.highWaterMark = Math.floor(this.highWaterMark); // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()

  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false; // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.

  this.sync = true; // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.

  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false; // has it been destroyed

  this.destroyed = false; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // the number of writers that are awaiting a drain event in .pipe()s

  this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled

  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;

  if (options.encoding) {
    if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || require('./_stream_duplex');
  if (!(this instanceof Readable)) return new Readable(options);
  this._readableState = new ReadableState(options, this); // legacy

  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  get: function get() {
    if (this._readableState === undefined) {
      return false;
    }

    return this._readableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
  }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;

Readable.prototype._destroy = function (err, cb) {
  this.push(null);
  cb(err);
}; // Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.


Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;

      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }

      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
}; // Unshift should *always* be something directly out of read()


Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  var state = stream._readableState;

  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);

    if (er) {
      stream.emit('error', er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        stream.emit('error', new Error('stream.push() after EOF'));
      } else {
        state.reading = false;

        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
    }
  }

  return needMoreData(state);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    stream.emit('data', chunk);
    stream.read(0);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
    if (state.needReadable) emitReadable(stream);
  }

  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;

  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }

  return er;
} // if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.


function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
}; // backwards compatibility.


Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
}; // Don't raise the hwm > 8MB


var MAX_HWM = 0x800000;

function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }

  return n;
} // This function is designed to be inlinable, so please take care when making
// changes to the function body.


function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;

  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  } // If we're asking for more than the current hwm, then raise the hwm.


  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n; // Don't have enough

  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }

  return state.length;
} // you can override either this method, or the async _read(n) below.


Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;
  if (n !== 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.

  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.

  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  } // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.
  // if we need a readable event, then we need to do some reading.


  var doRead = state.needReadable;
  debug('need readable', doRead); // if we currently have less than the highWaterMark, then also read some

  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  } // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.


  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true; // if the length is currently zero, then we *need* a readable event.

    if (state.length === 0) state.needReadable = true; // call internal read method

    this._read(state.highWaterMark);

    state.sync = false; // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.

    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.

    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);
  return ret;
};

function onEofChunk(stream, state) {
  if (state.ended) return;

  if (state.decoder) {
    var chunk = state.decoder.end();

    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }

  state.ended = true; // emit 'readable' now to make sure it gets picked up.

  emitReadable(stream);
} // Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.


function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;

  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) pna.nextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
} // at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.


function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    pna.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;

  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length) // didn't get any data, stop spinning.
      break;else len = state.length;
  }

  state.readingMore = false;
} // abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.


Readable.prototype._read = function (n) {
  this.emit('error', new Error('_read() is not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;

    case 1:
      state.pipes = [state.pipes, dest];
      break;

    default:
      state.pipes.push(dest);
      break;
  }

  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) pna.nextTick(endFn);else src.once('end', endFn);
  dest.on('unpipe', onunpipe);

  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');

    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  } // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.


  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);
  var cleanedUp = false;

  function cleanup() {
    debug('cleanup'); // cleanup event handlers once the pipe is broken

    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);
    cleanedUp = true; // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.

    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  } // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.


  var increasedAwaitDrain = false;
  src.on('data', ondata);

  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);

    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }

      src.pause();
    }
  } // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.


  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  } // Make sure our error handler is attached before userland ones.


  prependListener(dest, 'error', onerror); // Both close and finish should trigger unpipe, but only once.

  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }

  dest.once('close', onclose);

  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }

  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  } // tell the dest that it's being piped to


  dest.emit('pipe', src); // start the flow if it hasn't been started already.

  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;

    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = {
    hasUnpiped: false
  }; // if we're not piping anywhere, then do nothing.

  if (state.pipesCount === 0) return this; // just one destination.  most common case.

  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;
    if (!dest) dest = state.pipes; // got a match.

    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  } // slow case. multiple pipe destinations.


  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, unpipeInfo);
    }

    return this;
  } // try to find the right one.


  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;
  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];
  dest.emit('unpipe', this, unpipeInfo);
  return this;
}; // set up data events if they are asked for
// Ensure readable listeners eventually get something


Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;

    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;

      if (!state.reading) {
        pna.nextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this);
      }
    }
  }

  return res;
};

Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
} // pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.


Readable.prototype.resume = function () {
  var state = this._readableState;

  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }

  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    pna.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);

  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }

  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);

  while (state.flowing && stream.read() !== null) {}
} // wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.


Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;
  stream.on('end', function () {
    debug('wrapped end');

    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });
  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode

    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);

    if (!ret) {
      paused = true;
      stream.pause();
    }
  }); // proxy all the other methods.
  // important when wrapping filters and duplexes.

  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  } // proxy certain important events.


  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  } // when we try to consume some more bytes, simply unpause the
  // underlying stream.


  this._read = function (n) {
    debug('wrapped _read', n);

    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.highWaterMark;
  }
}); // exposed for testing purposes only.

Readable._fromList = fromList; // Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.

function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;
  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }
  return ret;
} // Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.


function fromListPartial(n, list, hasStrings) {
  var ret;

  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }

  return ret;
} // Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.


function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;

  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;

    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }

      break;
    }

    ++c;
  }

  list.length -= c;
  return ret;
} // Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.


function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;

  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;

    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }

      break;
    }

    ++c;
  }

  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState; // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.

  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    pna.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }

  return -1;
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./_stream_duplex":103,"./internal/streams/BufferList":108,"./internal/streams/destroy":109,"./internal/streams/stream":110,"_process":100,"core-util-is":20,"events":29,"inherits":49,"isarray":53,"process-nextick-args":99,"safe-buffer":115,"string_decoder/":120,"util":14}],106:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.
'use strict';

module.exports = Transform;

var Duplex = require('./_stream_duplex');
/*<replacement>*/


var util = require('core-util-is');

util.inherits = require('inherits');
/*</replacement>*/

util.inherits(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;
  var cb = ts.writecb;

  if (!cb) {
    return this.emit('error', new Error('write callback called multiple times'));
  }

  ts.writechunk = null;
  ts.writecb = null;
  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);
  cb(er);
  var rs = this._readableState;
  rs.reading = false;

  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);
  Duplex.call(this, options);
  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }; // start out asking for a readable event once data is transformed.

  this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.

  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;
    if (typeof options.flush === 'function') this._flush = options.flush;
  } // When the writable side finishes, then flush out anything remaining.


  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function') {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
}; // This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.


Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('_transform() is not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;

  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
}; // Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.


Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;

    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  var _this2 = this;

  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);

    _this2.emit('close');
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);
  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data); // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided

  if (stream._writableState.length) throw new Error('Calling transform done when ws.length != 0');
  if (stream._transformState.transforming) throw new Error('Calling transform done when still transforming');
  return stream.push(null);
}

},{"./_stream_duplex":103,"core-util-is":20,"inherits":49}],107:[function(require,module,exports){
(function (process,global,setImmediate){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
'use strict';
/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/


module.exports = Writable;
/* <replacement> */

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
} // It seems a linked list but it is not
// there will be only 2 of these for each stream


function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/


var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
/*</replacement>*/

/*<replacement>*/

var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;
/*<replacement>*/

var util = require('core-util-is');

util.inherits = require('inherits');
/*</replacement>*/

/*<replacement>*/

var internalUtil = {
  deprecate: require('util-deprecate')
};
/*</replacement>*/

/*<replacement>*/

var Stream = require('./internal/streams/stream');
/*</replacement>*/

/*<replacement>*/


var Buffer = require('safe-buffer').Buffer;

var OurUint8Array = global.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*</replacement>*/


var destroyImpl = require('./internal/streams/destroy');

util.inherits(Writable, Stream);

function nop() {}

function WritableState(options, stream) {
  Duplex = Duplex || require('./_stream_duplex');
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.

  var isDuplex = stream instanceof Duplex; // object stream flag to indicate whether or not this stream
  // contains buffers or objects.

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()

  var hwm = options.highWaterMark;
  var writableHwm = options.writableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;else this.highWaterMark = defaultHwm; // cast to ints.

  this.highWaterMark = Math.floor(this.highWaterMark); // if _final has been called

  this.finalCalled = false; // drain event flag.

  this.needDrain = false; // at the start of calling end()

  this.ending = false; // when end() has been called, and returned

  this.ended = false; // when 'finish' is emitted

  this.finished = false; // has it been destroyed

  this.destroyed = false; // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.

  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.

  this.length = 0; // a flag to see when we're in the middle of a write.

  this.writing = false; // when true all writes will be buffered until .uncork() call

  this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.

  this.sync = true; // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.

  this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)

  this.onwrite = function (er) {
    onwrite(stream, er);
  }; // the callback that the user supplies to write(chunk,encoding,cb)


  this.writecb = null; // the amount that is being written when _write is called.

  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted

  this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams

  this.prefinished = false; // True if the error was already emitted and should not be thrown again

  this.errorEmitted = false; // count buffered requests

  this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two

  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];

  while (current) {
    out.push(current);
    current = current.next;
  }

  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})(); // Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.


var realHasInstance;

if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function value(object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;
      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function realHasInstance(object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || require('./_stream_duplex'); // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.
  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.

  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
    return new Writable(options);
  }

  this._writableState = new WritableState(options, this); // legacy.

  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;
    if (typeof options.writev === 'function') this._writev = options.writev;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
} // Otherwise people can pipe Writable streams, which is just wrong.


Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end'); // TODO: defer error events consistently everywhere, not just the cb

  stream.emit('error', er);
  pna.nextTick(cb, er);
} // Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.


function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;

  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }

  if (er) {
    stream.emit('error', er);
    pna.nextTick(cb, er);
    valid = false;
  }

  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
  if (typeof cb !== 'function') cb = nop;
  if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }
  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;
  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;
    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }

  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
}); // if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.

function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);

    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }

  var len = state.objectMode ? 1 : chunk.length;
  state.length += len;
  var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.

  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };

    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }

    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    pna.nextTick(cb, er); // this can emit finish, and it will always happen
    // after error

    pna.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er); // this can emit finish, but finish must
    // always follow error

    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;
  onwriteStateUpdate(state);
  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
} // Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.


function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
} // if there's something in the buffer waiting, then process it


function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;
    var count = 0;
    var allBuffers = true;

    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }

    buffer.allBuffers = allBuffers;
    doWrite(stream, state, true, state.length, buffer, '', holder.finish); // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite

    state.pendingcb++;
    state.lastBufferedRequest = null;

    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }

    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;
      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--; // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.

      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('_write() is not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks

  if (state.corked) {
    state.corked = 1;
    this.uncork();
  } // ignore unnecessary end() calls.


  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;

    if (err) {
      stream.emit('error', err);
    }

    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}

function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function') {
      state.pendingcb++;
      state.finalCalled = true;
      pna.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);

  if (need) {
    prefinish(stream, state);

    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');
    }
  }

  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);

  if (cb) {
    if (state.finished) pna.nextTick(cb);else stream.once('finish', cb);
  }

  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;

  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  }

  if (state.corkedRequestsFree) {
    state.corkedRequestsFree.next = corkReq;
  } else {
    state.corkedRequestsFree = corkReq;
  }
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  get: function get() {
    if (this._writableState === undefined) {
      return false;
    }

    return this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._writableState.destroyed = value;
  }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;

Writable.prototype._destroy = function (err, cb) {
  this.end();
  cb(err);
};

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("timers").setImmediate)

},{"./_stream_duplex":103,"./internal/streams/destroy":109,"./internal/streams/stream":110,"_process":100,"core-util-is":20,"inherits":49,"process-nextick-args":99,"safe-buffer":115,"timers":121,"util-deprecate":124}],108:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Buffer = require('safe-buffer').Buffer;

var util = require('util');

function copyBuffer(src, target, offset) {
  src.copy(target, offset);
}

module.exports = function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  BufferList.prototype.push = function push(v) {
    var entry = {
      data: v,
      next: null
    };
    if (this.length > 0) this.tail.next = entry;else this.head = entry;
    this.tail = entry;
    ++this.length;
  };

  BufferList.prototype.unshift = function unshift(v) {
    var entry = {
      data: v,
      next: this.head
    };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  };

  BufferList.prototype.shift = function shift() {
    if (this.length === 0) return;
    var ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
    --this.length;
    return ret;
  };

  BufferList.prototype.clear = function clear() {
    this.head = this.tail = null;
    this.length = 0;
  };

  BufferList.prototype.join = function join(s) {
    if (this.length === 0) return '';
    var p = this.head;
    var ret = '' + p.data;

    while (p = p.next) {
      ret += s + p.data;
    }

    return ret;
  };

  BufferList.prototype.concat = function concat(n) {
    if (this.length === 0) return Buffer.alloc(0);
    if (this.length === 1) return this.head.data;
    var ret = Buffer.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;

    while (p) {
      copyBuffer(p.data, ret, i);
      i += p.data.length;
      p = p.next;
    }

    return ret;
  };

  return BufferList;
}();

if (util && util.inspect && util.inspect.custom) {
  module.exports.prototype[util.inspect.custom] = function () {
    var obj = util.inspect({
      length: this.length
    });
    return this.constructor.name + ' ' + obj;
  };
}

},{"safe-buffer":115,"util":14}],109:[function(require,module,exports){
'use strict';
/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/
// undocumented cb() API, needed for core, not for public API


function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
      pna.nextTick(emitErrorNT, this, err);
    }

    return this;
  } // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks


  if (this._readableState) {
    this._readableState.destroyed = true;
  } // if this is a duplex stream mark the writable part as destroyed as well


  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      pna.nextTick(emitErrorNT, _this, err);

      if (_this._writableState) {
        _this._writableState.errorEmitted = true;
      }
    } else if (cb) {
      cb(err);
    }
  });

  return this;
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy
};

},{"process-nextick-args":99}],110:[function(require,module,exports){
"use strict";

module.exports = require('events').EventEmitter;

},{"events":29}],111:[function(require,module,exports){
"use strict";

module.exports = require('./readable').PassThrough;

},{"./readable":112}],112:[function(require,module,exports){
"use strict";

exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');

},{"./lib/_stream_duplex.js":103,"./lib/_stream_passthrough.js":104,"./lib/_stream_readable.js":105,"./lib/_stream_transform.js":106,"./lib/_stream_writable.js":107}],113:[function(require,module,exports){
"use strict";

module.exports = require('./readable').Transform;

},{"./readable":112}],114:[function(require,module,exports){
"use strict";

module.exports = require('./lib/_stream_writable.js');

},{"./lib/_stream_writable.js":107}],115:[function(require,module,exports){
"use strict";

/* eslint-disable node/no-deprecated-api */
var buffer = require('buffer');

var Buffer = buffer.Buffer; // alternative to using Object.keys for old browsers

function copyProps(src, dst) {
  for (var key in src) {
    dst[key] = src[key];
  }
}

if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer;
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports);
  exports.Buffer = SafeBuffer;
}

function SafeBuffer(arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length);
} // Copy static methods from Buffer


copyProps(Buffer, SafeBuffer);

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number');
  }

  return Buffer(arg, encodingOrOffset, length);
};

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number');
  }

  var buf = Buffer(size);

  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding);
    } else {
      buf.fill(fill);
    }
  } else {
    buf.fill(0);
  }

  return buf;
};

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number');
  }

  return Buffer(size);
};

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number');
  }

  return buffer.SlowBuffer(size);
};

},{"buffer":17}],116:[function(require,module,exports){
"use strict";

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
module.exports = Stream;

var EE = require('events').EventEmitter;

var inherits = require('inherits');

inherits(Stream, EE);
Stream.Readable = require('readable-stream/readable.js');
Stream.Writable = require('readable-stream/writable.js');
Stream.Duplex = require('readable-stream/duplex.js');
Stream.Transform = require('readable-stream/transform.js');
Stream.PassThrough = require('readable-stream/passthrough.js'); // Backwards-compat with node 0.4.x

Stream.Stream = Stream; // old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function (dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain); // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.

  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;

  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;
    dest.end();
  }

  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;
    if (typeof dest.destroy === 'function') dest.destroy();
  } // don't leave dangling pipes when there are errors.


  function onerror(er) {
    cleanup();

    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror); // remove all the event listeners that were added.

  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);
    source.removeListener('end', onend);
    source.removeListener('close', onclose);
    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);
    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);
    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);
  dest.on('close', cleanup);
  dest.emit('pipe', source); // Allow for unix-like usage: A.pipe(B).pipe(C)

  return dest;
};

},{"events":29,"inherits":49,"readable-stream/duplex.js":102,"readable-stream/passthrough.js":111,"readable-stream/readable.js":112,"readable-stream/transform.js":113,"readable-stream/writable.js":114}],117:[function(require,module,exports){
(function (process){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Generated by CoffeeScript 1.9.2
var Transformer,
    stream,
    util,
    slice = [].slice;
stream = require('stream');
util = require('util');

module.exports = function () {
  var argument, callback, data, error, handler, i, j, k, len, options, result, transform, type, v;
  options = {};

  for (i = j = 0, len = arguments.length; j < len; i = ++j) {
    argument = arguments[i];
    type = _typeof(argument);

    if (argument === null) {
      type = 'null';
    } else if (type === 'object' && Array.isArray(argument)) {
      type = 'array';
    }

    if (i === 0) {
      if (type === 'function') {
        handler = argument;
      } else if (type !== null) {
        data = argument;
      }

      continue;
    }

    if (type === 'object') {
      for (k in argument) {
        v = argument[k];
        options[k] = v;
      }
    } else if (type === 'function') {
      if (handler && i === arguments.length - 1) {
        callback = argument;
      } else {
        handler = argument;
      }
    } else if (type !== 'null') {
      throw new Error('Invalid arguments');
    }
  }

  transform = new Transformer(options, handler);
  error = false;

  if (data) {
    process.nextTick(function () {
      var len1, m, row;

      for (m = 0, len1 = data.length; m < len1; m++) {
        row = data[m];

        if (error) {
          break;
        }

        transform.write(row);
      }

      return transform.end();
    });
  }

  if (callback || options.consume) {
    result = [];
    transform.on('readable', function () {
      var r, results;
      results = [];

      while (r = transform.read()) {
        if (callback) {
          results.push(result.push(r));
        } else {
          results.push(void 0);
        }
      }

      return results;
    });
    transform.on('error', function (err) {
      error = true;

      if (callback) {
        return callback(err);
      }
    });
    transform.on('end', function () {
      if (callback && !error) {
        return callback(null, result);
      }
    });
  }

  return transform;
};

Transformer = function Transformer(options1, transform1) {
  var base;
  this.options = options1 != null ? options1 : {};
  this.transform = transform1;
  this.options.objectMode = true;

  if ((base = this.options).parallel == null) {
    base.parallel = 100;
  }

  stream.Transform.call(this, this.options);
  this.running = 0;
  this.started = 0;
  this.finished = 0;
  return this;
};

util.inherits(Transformer, stream.Transform);
module.exports.Transformer = Transformer;

Transformer.prototype._transform = function (chunk, encoding, cb) {
  var callback, err, l;
  this.started++;
  this.running++;

  if (this.running < this.options.parallel) {
    cb();
    cb = null;
  }

  try {
    l = this.transform.length;

    if (this.options.params != null) {
      l--;
    }

    if (l === 1) {
      this._done(null, [this.transform.call(null, chunk, this.options.params)], cb);
    } else if (l === 2) {
      callback = function (_this) {
        return function () {
          var chunks, err;
          err = arguments[0], chunks = 2 <= arguments.length ? slice.call(arguments, 1) : [];
          return _this._done(err, chunks, cb);
        };
      }(this);

      this.transform.call(null, chunk, callback, this.options.params);
    } else {
      throw Error("Invalid handler arguments");
    }

    return false;
  } catch (_error) {
    err = _error;
    return this._done(err);
  }
};

Transformer.prototype._flush = function (cb) {
  this._ending = function () {
    if (this.running === 0) {
      return cb();
    }
  };

  return this._ending();
};

Transformer.prototype._done = function (err, chunks, cb) {
  var chunk, j, len;
  this.running--;

  if (err) {
    return this.emit('error', err);
  }

  this.finished++;

  for (j = 0, len = chunks.length; j < len; j++) {
    chunk = chunks[j];

    if (typeof chunk === 'number') {
      chunk = "" + chunk;
    }

    if (chunk != null) {
      this.push(chunk);
    }
  }

  if (cb) {
    cb();
  }

  if (this._ending) {
    return this._ending();
  }
};

}).call(this,require('_process'))

},{"_process":100,"stream":116,"util":127}],118:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//force to a valid range
var range = exports.range = function (obj) {
  return null == obj ? {} : 'string' === typeof range ? {
    min: range,
    max: range + '\xff'
  } : obj;
}; //turn into a sub range.


var prefix = exports.prefix = function (range, within, term) {
  range = exports.range(range);
  var _range = {};
  term = term || '\xff';

  if (range instanceof RegExp || 'function' == typeof range) {
    _range.min = within;
    _range.max = within + term, _range.inner = function (k) {
      var j = k.substring(within.length);
      if (range.test) return range.test(j);
      return range(j);
    };
  } else if ('object' === _typeof(range)) {
    _range.min = within + (range.min || range.start || '');
    _range.max = within + (range.max || range.end || term || '~');
    _range.reverse = !!range.reverse;
  }

  return _range;
}; //return a function that checks a range


var checker = exports.checker = function (range) {
  if (!range) range = {};
  if ('string' === typeof range) return function (key) {
    return key.indexOf(range) == 0;
  };else if (range instanceof RegExp) return function (key) {
    return range.test(key);
  };else if ('object' === _typeof(range)) return function (key) {
    var min = range.min || range.start;
    var max = range.max || range.end; // fixes keys passed as ints from sublevels

    key = String(key);
    return (!min || key >= min) && (!max || key <= max) && (!range.inner || (range.inner.test ? range.inner.test(key) : range.inner(key)));
  };else if ('function' === typeof range) return range;
}; //check if a key is within a range.


var satifies = exports.satisfies = function (key, range) {
  return checker(range)(key);
};

},{}],119:[function(require,module,exports){
(function (process,Buffer){
"use strict";

module.exports = StringStream;

var inherits = require('inherits');

var stream = require('readable-stream');

inherits(StringStream, stream.Readable);

function StringStream(str) {
  if (!(this instanceof StringStream)) return new StringStream(str);
  stream.Readable.call(this);
  this._str = str;
}

StringStream.prototype._read = function () {
  if (!this.ended) {
    var self = this;
    process.nextTick(function () {
      self.push(new Buffer(self._str));
      self.push(null);
    });
    this.ended = true;
  }
};

}).call(this,require('_process'),require("buffer").Buffer)

},{"_process":100,"buffer":17,"inherits":49,"readable-stream":112}],120:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
/*<replacement>*/

var Buffer = require('safe-buffer').Buffer;
/*</replacement>*/


var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;

  switch (encoding && encoding.toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
    case 'raw':
      return true;

    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;

  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';

      case 'latin1':
      case 'binary':
        return 'latin1';

      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;

      default:
        if (retried) return; // undefined

        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
}

; // Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings

function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);

  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
} // StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.


exports.StringDecoder = StringDecoder;

function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;

  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;

    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;

    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;

    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }

  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;

  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }

  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End; // Returns only complete characters in a Buffer

StringDecoder.prototype.text = utf8Text; // Attempts to complete a partial non-UTF-8 character using bytes from a Buffer

StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }

  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
}; // Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.


function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
} // Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.


function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);

  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }

  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);

  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }

  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);

  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }

    return nb;
  }

  return 0;
} // Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.


function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return "\uFFFD";
  }

  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return "\uFFFD";
    }

    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return "\uFFFD";
      }
    }
  }
} // Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.


function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;

  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }

  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
} // Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.


function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
} // For UTF-8, a replacement character is added when ending on a partial
// character.


function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + "\uFFFD";
  return r;
} // UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.


function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);

    if (r) {
      var c = r.charCodeAt(r.length - 1);

      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }

    return r;
  }

  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
} // For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.


function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';

  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }

  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;

  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }

  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
} // Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)


function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

},{"safe-buffer":115}],121:[function(require,module,exports){
(function (setImmediate,clearImmediate){
"use strict";

var nextTick = require('process/browser.js').nextTick;

var apply = Function.prototype.apply;
var slice = Array.prototype.slice;
var immediateIds = {};
var nextImmediateId = 0; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  timeout.close();
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(window, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // That's not how node.js implements it but the exposed api is the same.


exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function (fn) {
  var id = nextImmediateId++;
  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
  immediateIds[id] = true;
  nextTick(function onNextTick() {
    if (immediateIds[id]) {
      // fn.call() is faster so we optimize for the common use-case
      // @see http://jsperf.com/call-apply-segu
      if (args) {
        fn.apply(null, args);
      } else {
        fn.call(null);
      } // Prevent ids from leaking


      exports.clearImmediate(id);
    }
  });
  return id;
};
exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function (id) {
  delete immediateIds[id];
};

}).call(this,require("timers").setImmediate,require("timers").clearImmediate)

},{"process/browser.js":100,"timers":121}],122:[function(require,module,exports){
(function (Buffer){
"use strict";

/**
 * Convert a typed array to a Buffer without a copy
 *
 * Author:   Feross Aboukhadijeh <https://feross.org>
 * License:  MIT
 *
 * `npm install typedarray-to-buffer`
 */
var isTypedArray = require('is-typedarray').strict;

module.exports = function typedarrayToBuffer(arr) {
  if (isTypedArray(arr)) {
    // To avoid a copy, use the typed array's underlying ArrayBuffer to back new Buffer
    var buf = Buffer.from(arr.buffer);

    if (arr.byteLength !== arr.buffer.byteLength) {
      // Respect the "view", i.e. byteOffset and byteLength, without doing a copy
      buf = buf.slice(arr.byteOffset, arr.byteOffset + arr.byteLength);
    }

    return buf;
  } else {
    // Pass through all other types to `Buffer.from`
    return Buffer.from(arr);
  }
};

}).call(this,require("buffer").Buffer)

},{"buffer":17,"is-typedarray":51}],123:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var undefined = void 0; // Paranoia
// Beyond this value, index getters/setters (i.e. array[0], array[1]) are so slow to
// create, and consume so much memory, that the browser appears frozen.

var MAX_ARRAY_LENGTH = 1e5; // Approximations of internal ECMAScript conversion functions

var ECMAScript = function () {
  // Stash a copy in case other scripts modify these
  var opts = Object.prototype.toString,
      ophop = Object.prototype.hasOwnProperty;
  return {
    // Class returns internal [[Class]] property, used to avoid cross-frame instanceof issues:
    Class: function Class(v) {
      return opts.call(v).replace(/^\[object *|\]$/g, '');
    },
    HasProperty: function HasProperty(o, p) {
      return p in o;
    },
    HasOwnProperty: function HasOwnProperty(o, p) {
      return ophop.call(o, p);
    },
    IsCallable: function IsCallable(o) {
      return typeof o === 'function';
    },
    ToInt32: function ToInt32(v) {
      return v >> 0;
    },
    ToUint32: function ToUint32(v) {
      return v >>> 0;
    }
  };
}(); // Snapshot intrinsics


var LN2 = Math.LN2,
    abs = Math.abs,
    floor = Math.floor,
    log = Math.log,
    min = Math.min,
    pow = Math.pow,
    round = Math.round; // ES5: lock down object properties

function configureProperties(obj) {
  if (getOwnPropNames && defineProp) {
    var props = getOwnPropNames(obj),
        i;

    for (i = 0; i < props.length; i += 1) {
      defineProp(obj, props[i], {
        value: obj[props[i]],
        writable: false,
        enumerable: false,
        configurable: false
      });
    }
  }
} // emulate ES5 getter/setter API using legacy APIs
// http://blogs.msdn.com/b/ie/archive/2010/09/07/transitioning-existing-code-to-the-es5-getter-setter-apis.aspx
// (second clause tests for Object.defineProperty() in IE<9 that only supports extending DOM prototypes, but
// note that IE<9 does not support __defineGetter__ or __defineSetter__ so it just renders the method harmless)


var defineProp;

if (Object.defineProperty && function () {
  try {
    Object.defineProperty({}, 'x', {});
    return true;
  } catch (e) {
    return false;
  }
}()) {
  defineProp = Object.defineProperty;
} else {
  defineProp = function defineProp(o, p, desc) {
    if (!o === Object(o)) throw new TypeError("Object.defineProperty called on non-object");

    if (ECMAScript.HasProperty(desc, 'get') && Object.prototype.__defineGetter__) {
      Object.prototype.__defineGetter__.call(o, p, desc.get);
    }

    if (ECMAScript.HasProperty(desc, 'set') && Object.prototype.__defineSetter__) {
      Object.prototype.__defineSetter__.call(o, p, desc.set);
    }

    if (ECMAScript.HasProperty(desc, 'value')) {
      o[p] = desc.value;
    }

    return o;
  };
}

var getOwnPropNames = Object.getOwnPropertyNames || function (o) {
  if (o !== Object(o)) throw new TypeError("Object.getOwnPropertyNames called on non-object");
  var props = [],
      p;

  for (p in o) {
    if (ECMAScript.HasOwnProperty(o, p)) {
      props.push(p);
    }
  }

  return props;
}; // ES5: Make obj[index] an alias for obj._getter(index)/obj._setter(index, value)
// for index in 0 ... obj.length


function makeArrayAccessors(obj) {
  if (!defineProp) {
    return;
  }

  if (obj.length > MAX_ARRAY_LENGTH) throw new RangeError("Array too large for polyfill");

  function makeArrayAccessor(index) {
    defineProp(obj, index, {
      'get': function get() {
        return obj._getter(index);
      },
      'set': function set(v) {
        obj._setter(index, v);
      },
      enumerable: true,
      configurable: false
    });
  }

  var i;

  for (i = 0; i < obj.length; i += 1) {
    makeArrayAccessor(i);
  }
} // Internal conversion functions:
//    pack<Type>()   - take a number (interpreted as Type), output a byte array
//    unpack<Type>() - take a byte array, output a Type-like number


function as_signed(value, bits) {
  var s = 32 - bits;
  return value << s >> s;
}

function as_unsigned(value, bits) {
  var s = 32 - bits;
  return value << s >>> s;
}

function packI8(n) {
  return [n & 0xff];
}

function unpackI8(bytes) {
  return as_signed(bytes[0], 8);
}

function packU8(n) {
  return [n & 0xff];
}

function unpackU8(bytes) {
  return as_unsigned(bytes[0], 8);
}

function packU8Clamped(n) {
  n = round(Number(n));
  return [n < 0 ? 0 : n > 0xff ? 0xff : n & 0xff];
}

function packI16(n) {
  return [n >> 8 & 0xff, n & 0xff];
}

function unpackI16(bytes) {
  return as_signed(bytes[0] << 8 | bytes[1], 16);
}

function packU16(n) {
  return [n >> 8 & 0xff, n & 0xff];
}

function unpackU16(bytes) {
  return as_unsigned(bytes[0] << 8 | bytes[1], 16);
}

function packI32(n) {
  return [n >> 24 & 0xff, n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff];
}

function unpackI32(bytes) {
  return as_signed(bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], 32);
}

function packU32(n) {
  return [n >> 24 & 0xff, n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff];
}

function unpackU32(bytes) {
  return as_unsigned(bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], 32);
}

function packIEEE754(v, ebits, fbits) {
  var bias = (1 << ebits - 1) - 1,
      s,
      e,
      f,
      ln,
      i,
      bits,
      str,
      bytes;

  function roundToEven(n) {
    var w = floor(n),
        f = n - w;
    if (f < 0.5) return w;
    if (f > 0.5) return w + 1;
    return w % 2 ? w + 1 : w;
  } // Compute sign, exponent, fraction


  if (v !== v) {
    // NaN
    // http://dev.w3.org/2006/webapi/WebIDL/#es-type-mapping
    e = (1 << ebits) - 1;
    f = pow(2, fbits - 1);
    s = 0;
  } else if (v === Infinity || v === -Infinity) {
    e = (1 << ebits) - 1;
    f = 0;
    s = v < 0 ? 1 : 0;
  } else if (v === 0) {
    e = 0;
    f = 0;
    s = 1 / v === -Infinity ? 1 : 0;
  } else {
    s = v < 0;
    v = abs(v);

    if (v >= pow(2, 1 - bias)) {
      e = min(floor(log(v) / LN2), 1023);
      f = roundToEven(v / pow(2, e) * pow(2, fbits));

      if (f / pow(2, fbits) >= 2) {
        e = e + 1;
        f = 1;
      }

      if (e > bias) {
        // Overflow
        e = (1 << ebits) - 1;
        f = 0;
      } else {
        // Normalized
        e = e + bias;
        f = f - pow(2, fbits);
      }
    } else {
      // Denormalized
      e = 0;
      f = roundToEven(v / pow(2, 1 - bias - fbits));
    }
  } // Pack sign, exponent, fraction


  bits = [];

  for (i = fbits; i; i -= 1) {
    bits.push(f % 2 ? 1 : 0);
    f = floor(f / 2);
  }

  for (i = ebits; i; i -= 1) {
    bits.push(e % 2 ? 1 : 0);
    e = floor(e / 2);
  }

  bits.push(s ? 1 : 0);
  bits.reverse();
  str = bits.join(''); // Bits to bytes

  bytes = [];

  while (str.length) {
    bytes.push(parseInt(str.substring(0, 8), 2));
    str = str.substring(8);
  }

  return bytes;
}

function unpackIEEE754(bytes, ebits, fbits) {
  // Bytes to bits
  var bits = [],
      i,
      j,
      b,
      str,
      bias,
      s,
      e,
      f;

  for (i = bytes.length; i; i -= 1) {
    b = bytes[i - 1];

    for (j = 8; j; j -= 1) {
      bits.push(b % 2 ? 1 : 0);
      b = b >> 1;
    }
  }

  bits.reverse();
  str = bits.join(''); // Unpack sign, exponent, fraction

  bias = (1 << ebits - 1) - 1;
  s = parseInt(str.substring(0, 1), 2) ? -1 : 1;
  e = parseInt(str.substring(1, 1 + ebits), 2);
  f = parseInt(str.substring(1 + ebits), 2); // Produce number

  if (e === (1 << ebits) - 1) {
    return f !== 0 ? NaN : s * Infinity;
  } else if (e > 0) {
    // Normalized
    return s * pow(2, e - bias) * (1 + f / pow(2, fbits));
  } else if (f !== 0) {
    // Denormalized
    return s * pow(2, -(bias - 1)) * (f / pow(2, fbits));
  } else {
    return s < 0 ? -0 : 0;
  }
}

function unpackF64(b) {
  return unpackIEEE754(b, 11, 52);
}

function packF64(v) {
  return packIEEE754(v, 11, 52);
}

function unpackF32(b) {
  return unpackIEEE754(b, 8, 23);
}

function packF32(v) {
  return packIEEE754(v, 8, 23);
} //
// 3 The ArrayBuffer Type
//


(function () {
  /** @constructor */
  var ArrayBuffer = function ArrayBuffer(length) {
    length = ECMAScript.ToInt32(length);
    if (length < 0) throw new RangeError('ArrayBuffer size is not a small enough positive integer');
    this.byteLength = length;
    this._bytes = [];
    this._bytes.length = length;
    var i;

    for (i = 0; i < this.byteLength; i += 1) {
      this._bytes[i] = 0;
    }

    configureProperties(this);
  };

  exports.ArrayBuffer = exports.ArrayBuffer || ArrayBuffer; //
  // 4 The ArrayBufferView Type
  //
  // NOTE: this constructor is not exported

  /** @constructor */

  var ArrayBufferView = function ArrayBufferView() {//this.buffer = null;
    //this.byteOffset = 0;
    //this.byteLength = 0;
  }; //
  // 5 The Typed Array View Types
  //


  function makeConstructor(bytesPerElement, pack, unpack) {
    // Each TypedArray type requires a distinct constructor instance with
    // identical logic, which this produces.
    var _ctor;

    _ctor = function ctor(buffer, byteOffset, length) {
      var array, sequence, i, s;

      if (!arguments.length || typeof arguments[0] === 'number') {
        // Constructor(unsigned long length)
        this.length = ECMAScript.ToInt32(arguments[0]);
        if (length < 0) throw new RangeError('ArrayBufferView size is not a small enough positive integer');
        this.byteLength = this.length * this.BYTES_PER_ELEMENT;
        this.buffer = new ArrayBuffer(this.byteLength);
        this.byteOffset = 0;
      } else if (_typeof(arguments[0]) === 'object' && arguments[0].constructor === _ctor) {
        // Constructor(TypedArray array)
        array = arguments[0];
        this.length = array.length;
        this.byteLength = this.length * this.BYTES_PER_ELEMENT;
        this.buffer = new ArrayBuffer(this.byteLength);
        this.byteOffset = 0;

        for (i = 0; i < this.length; i += 1) {
          this._setter(i, array._getter(i));
        }
      } else if (_typeof(arguments[0]) === 'object' && !(arguments[0] instanceof ArrayBuffer || ECMAScript.Class(arguments[0]) === 'ArrayBuffer')) {
        // Constructor(sequence<type> array)
        sequence = arguments[0];
        this.length = ECMAScript.ToUint32(sequence.length);
        this.byteLength = this.length * this.BYTES_PER_ELEMENT;
        this.buffer = new ArrayBuffer(this.byteLength);
        this.byteOffset = 0;

        for (i = 0; i < this.length; i += 1) {
          s = sequence[i];

          this._setter(i, Number(s));
        }
      } else if (_typeof(arguments[0]) === 'object' && (arguments[0] instanceof ArrayBuffer || ECMAScript.Class(arguments[0]) === 'ArrayBuffer')) {
        // Constructor(ArrayBuffer buffer,
        //             optional unsigned long byteOffset, optional unsigned long length)
        this.buffer = buffer;
        this.byteOffset = ECMAScript.ToUint32(byteOffset);

        if (this.byteOffset > this.buffer.byteLength) {
          throw new RangeError("byteOffset out of range");
        }

        if (this.byteOffset % this.BYTES_PER_ELEMENT) {
          // The given byteOffset must be a multiple of the element
          // size of the specific type, otherwise an exception is raised.
          throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.");
        }

        if (arguments.length < 3) {
          this.byteLength = this.buffer.byteLength - this.byteOffset;

          if (this.byteLength % this.BYTES_PER_ELEMENT) {
            throw new RangeError("length of buffer minus byteOffset not a multiple of the element size");
          }

          this.length = this.byteLength / this.BYTES_PER_ELEMENT;
        } else {
          this.length = ECMAScript.ToUint32(length);
          this.byteLength = this.length * this.BYTES_PER_ELEMENT;
        }

        if (this.byteOffset + this.byteLength > this.buffer.byteLength) {
          throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
        }
      } else {
        throw new TypeError("Unexpected argument type(s)");
      }

      this.constructor = _ctor;
      configureProperties(this);
      makeArrayAccessors(this);
    };

    _ctor.prototype = new ArrayBufferView();
    _ctor.prototype.BYTES_PER_ELEMENT = bytesPerElement;
    _ctor.prototype._pack = pack;
    _ctor.prototype._unpack = unpack;
    _ctor.BYTES_PER_ELEMENT = bytesPerElement; // getter type (unsigned long index);

    _ctor.prototype._getter = function (index) {
      if (arguments.length < 1) throw new SyntaxError("Not enough arguments");
      index = ECMAScript.ToUint32(index);

      if (index >= this.length) {
        return undefined;
      }

      var bytes = [],
          i,
          o;

      for (i = 0, o = this.byteOffset + index * this.BYTES_PER_ELEMENT; i < this.BYTES_PER_ELEMENT; i += 1, o += 1) {
        bytes.push(this.buffer._bytes[o]);
      }

      return this._unpack(bytes);
    }; // NONSTANDARD: convenience alias for getter: type get(unsigned long index);


    _ctor.prototype.get = _ctor.prototype._getter; // setter void (unsigned long index, type value);

    _ctor.prototype._setter = function (index, value) {
      if (arguments.length < 2) throw new SyntaxError("Not enough arguments");
      index = ECMAScript.ToUint32(index);

      if (index >= this.length) {
        return undefined;
      }

      var bytes = this._pack(value),
          i,
          o;

      for (i = 0, o = this.byteOffset + index * this.BYTES_PER_ELEMENT; i < this.BYTES_PER_ELEMENT; i += 1, o += 1) {
        this.buffer._bytes[o] = bytes[i];
      }
    }; // void set(TypedArray array, optional unsigned long offset);
    // void set(sequence<type> array, optional unsigned long offset);


    _ctor.prototype.set = function (index, value) {
      if (arguments.length < 1) throw new SyntaxError("Not enough arguments");
      var array, sequence, offset, len, i, s, d, byteOffset, byteLength, tmp;

      if (_typeof(arguments[0]) === 'object' && arguments[0].constructor === this.constructor) {
        // void set(TypedArray array, optional unsigned long offset);
        array = arguments[0];
        offset = ECMAScript.ToUint32(arguments[1]);

        if (offset + array.length > this.length) {
          throw new RangeError("Offset plus length of array is out of range");
        }

        byteOffset = this.byteOffset + offset * this.BYTES_PER_ELEMENT;
        byteLength = array.length * this.BYTES_PER_ELEMENT;

        if (array.buffer === this.buffer) {
          tmp = [];

          for (i = 0, s = array.byteOffset; i < byteLength; i += 1, s += 1) {
            tmp[i] = array.buffer._bytes[s];
          }

          for (i = 0, d = byteOffset; i < byteLength; i += 1, d += 1) {
            this.buffer._bytes[d] = tmp[i];
          }
        } else {
          for (i = 0, s = array.byteOffset, d = byteOffset; i < byteLength; i += 1, s += 1, d += 1) {
            this.buffer._bytes[d] = array.buffer._bytes[s];
          }
        }
      } else if (_typeof(arguments[0]) === 'object' && typeof arguments[0].length !== 'undefined') {
        // void set(sequence<type> array, optional unsigned long offset);
        sequence = arguments[0];
        len = ECMAScript.ToUint32(sequence.length);
        offset = ECMAScript.ToUint32(arguments[1]);

        if (offset + len > this.length) {
          throw new RangeError("Offset plus length of array is out of range");
        }

        for (i = 0; i < len; i += 1) {
          s = sequence[i];

          this._setter(offset + i, Number(s));
        }
      } else {
        throw new TypeError("Unexpected argument type(s)");
      }
    }; // TypedArray subarray(long begin, optional long end);


    _ctor.prototype.subarray = function (start, end) {
      function clamp(v, min, max) {
        return v < min ? min : v > max ? max : v;
      }

      start = ECMAScript.ToInt32(start);
      end = ECMAScript.ToInt32(end);

      if (arguments.length < 1) {
        start = 0;
      }

      if (arguments.length < 2) {
        end = this.length;
      }

      if (start < 0) {
        start = this.length + start;
      }

      if (end < 0) {
        end = this.length + end;
      }

      start = clamp(start, 0, this.length);
      end = clamp(end, 0, this.length);
      var len = end - start;

      if (len < 0) {
        len = 0;
      }

      return new this.constructor(this.buffer, this.byteOffset + start * this.BYTES_PER_ELEMENT, len);
    };

    return _ctor;
  }

  var Int8Array = makeConstructor(1, packI8, unpackI8);
  var Uint8Array = makeConstructor(1, packU8, unpackU8);
  var Uint8ClampedArray = makeConstructor(1, packU8Clamped, unpackU8);
  var Int16Array = makeConstructor(2, packI16, unpackI16);
  var Uint16Array = makeConstructor(2, packU16, unpackU16);
  var Int32Array = makeConstructor(4, packI32, unpackI32);
  var Uint32Array = makeConstructor(4, packU32, unpackU32);
  var Float32Array = makeConstructor(4, packF32, unpackF32);
  var Float64Array = makeConstructor(8, packF64, unpackF64);
  exports.Int8Array = exports.Int8Array || Int8Array;
  exports.Uint8Array = exports.Uint8Array || Uint8Array;
  exports.Uint8ClampedArray = exports.Uint8ClampedArray || Uint8ClampedArray;
  exports.Int16Array = exports.Int16Array || Int16Array;
  exports.Uint16Array = exports.Uint16Array || Uint16Array;
  exports.Int32Array = exports.Int32Array || Int32Array;
  exports.Uint32Array = exports.Uint32Array || Uint32Array;
  exports.Float32Array = exports.Float32Array || Float32Array;
  exports.Float64Array = exports.Float64Array || Float64Array;
})(); //
// 6 The DataView View Type
//


(function () {
  function r(array, index) {
    return ECMAScript.IsCallable(array.get) ? array.get(index) : array[index];
  }

  var IS_BIG_ENDIAN = function () {
    var u16array = new exports.Uint16Array([0x1234]),
        u8array = new exports.Uint8Array(u16array.buffer);
    return r(u8array, 0) === 0x12;
  }(); // Constructor(ArrayBuffer buffer,
  //             optional unsigned long byteOffset,
  //             optional unsigned long byteLength)

  /** @constructor */


  var DataView = function DataView(buffer, byteOffset, byteLength) {
    if (arguments.length === 0) {
      buffer = new exports.ArrayBuffer(0);
    } else if (!(buffer instanceof exports.ArrayBuffer || ECMAScript.Class(buffer) === 'ArrayBuffer')) {
      throw new TypeError("TypeError");
    }

    this.buffer = buffer || new exports.ArrayBuffer(0);
    this.byteOffset = ECMAScript.ToUint32(byteOffset);

    if (this.byteOffset > this.buffer.byteLength) {
      throw new RangeError("byteOffset out of range");
    }

    if (arguments.length < 3) {
      this.byteLength = this.buffer.byteLength - this.byteOffset;
    } else {
      this.byteLength = ECMAScript.ToUint32(byteLength);
    }

    if (this.byteOffset + this.byteLength > this.buffer.byteLength) {
      throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
    }

    configureProperties(this);
  };

  function makeGetter(arrayType) {
    return function (byteOffset, littleEndian) {
      byteOffset = ECMAScript.ToUint32(byteOffset);

      if (byteOffset + arrayType.BYTES_PER_ELEMENT > this.byteLength) {
        throw new RangeError("Array index out of range");
      }

      byteOffset += this.byteOffset;
      var uint8Array = new exports.Uint8Array(this.buffer, byteOffset, arrayType.BYTES_PER_ELEMENT),
          bytes = [],
          i;

      for (i = 0; i < arrayType.BYTES_PER_ELEMENT; i += 1) {
        bytes.push(r(uint8Array, i));
      }

      if (Boolean(littleEndian) === Boolean(IS_BIG_ENDIAN)) {
        bytes.reverse();
      }

      return r(new arrayType(new exports.Uint8Array(bytes).buffer), 0);
    };
  }

  DataView.prototype.getUint8 = makeGetter(exports.Uint8Array);
  DataView.prototype.getInt8 = makeGetter(exports.Int8Array);
  DataView.prototype.getUint16 = makeGetter(exports.Uint16Array);
  DataView.prototype.getInt16 = makeGetter(exports.Int16Array);
  DataView.prototype.getUint32 = makeGetter(exports.Uint32Array);
  DataView.prototype.getInt32 = makeGetter(exports.Int32Array);
  DataView.prototype.getFloat32 = makeGetter(exports.Float32Array);
  DataView.prototype.getFloat64 = makeGetter(exports.Float64Array);

  function makeSetter(arrayType) {
    return function (byteOffset, value, littleEndian) {
      byteOffset = ECMAScript.ToUint32(byteOffset);

      if (byteOffset + arrayType.BYTES_PER_ELEMENT > this.byteLength) {
        throw new RangeError("Array index out of range");
      } // Get bytes


      var typeArray = new arrayType([value]),
          byteArray = new exports.Uint8Array(typeArray.buffer),
          bytes = [],
          i,
          byteView;

      for (i = 0; i < arrayType.BYTES_PER_ELEMENT; i += 1) {
        bytes.push(r(byteArray, i));
      } // Flip if necessary


      if (Boolean(littleEndian) === Boolean(IS_BIG_ENDIAN)) {
        bytes.reverse();
      } // Write them


      byteView = new exports.Uint8Array(this.buffer, byteOffset, arrayType.BYTES_PER_ELEMENT);
      byteView.set(bytes);
    };
  }

  DataView.prototype.setUint8 = makeSetter(exports.Uint8Array);
  DataView.prototype.setInt8 = makeSetter(exports.Int8Array);
  DataView.prototype.setUint16 = makeSetter(exports.Uint16Array);
  DataView.prototype.setInt16 = makeSetter(exports.Int16Array);
  DataView.prototype.setUint32 = makeSetter(exports.Uint32Array);
  DataView.prototype.setInt32 = makeSetter(exports.Int32Array);
  DataView.prototype.setFloat32 = makeSetter(exports.Float32Array);
  DataView.prototype.setFloat64 = makeSetter(exports.Float64Array);
  exports.DataView = exports.DataView || DataView;
})();

},{}],124:[function(require,module,exports){
(function (global){
"use strict";

/**
 * Module exports.
 */
module.exports = deprecate;
/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate(fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;

  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }

      warned = true;
    }

    return fn.apply(this, arguments);
  }

  return deprecated;
}
/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */


function config(name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }

  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],125:[function(require,module,exports){
arguments[4][10][0].apply(exports,arguments)
},{"dup":10}],126:[function(require,module,exports){
arguments[4][11][0].apply(exports,arguments)
},{"dup":11}],127:[function(require,module,exports){
(function (process,global){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var formatRegExp = /%[sdj%]/g;

exports.format = function (f) {
  if (!isString(f)) {
    var objects = [];

    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }

    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function (x) {
    if (x === '%%') return '%';
    if (i >= len) return x;

    switch (x) {
      case '%s':
        return String(args[i++]);

      case '%d':
        return Number(args[i++]);

      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }

      default:
        return x;
    }
  });

  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }

  return str;
}; // Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.


exports.deprecate = function (fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function () {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;

  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }

      warned = true;
    }

    return fn.apply(this, arguments);
  }

  return deprecated;
};

var debugs = {};
var debugEnviron;

exports.debuglog = function (set) {
  if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();

  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;

      debugs[set] = function () {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function () {};
    }
  }

  return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */

/* legacy: obj, showHidden, depth, colors*/


function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  }; // legacy...

  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];

  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  } // set default options


  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}

exports.inspect = inspect; // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

inspect.colors = {
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],
  'white': [37, 39],
  'grey': [90, 39],
  'black': [30, 39],
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
}; // Don't use 'blue' not visible on cmd.exe

inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};

function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return "\x1B[" + inspect.colors[style][0] + 'm' + str + "\x1B[" + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}

function stylizeNoColor(str, styleType) {
  return str;
}

function arrayToHash(array) {
  var hash = {};
  array.forEach(function (val, idx) {
    hash[val] = true;
  });
  return hash;
}

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
  value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);

    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }

    return ret;
  } // Primitive types cannot have properties


  var primitive = formatPrimitive(ctx, value);

  if (primitive) {
    return primitive;
  } // Look up the keys of the object.


  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  } // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  } // Some type of object without properties can be shortcutted.


  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }

    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }

    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }

    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '',
      array = false,
      braces = ['{', '}']; // Make Array say that they are Array

  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  } // Make functions say that they are functions


  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  } // Make RegExps say that they are RegExps


  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  } // Make dates with properties first say the date


  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  } // Make error with message first say the error


  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);
  var output;

  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function (key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();
  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }

  if (isNumber(value)) return ctx.stylize('' + value, 'number');
  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

  if (isNull(value)) return ctx.stylize('null', 'null');
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];

  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }

  keys.forEach(function (key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || {
    value: value[key]
  };

  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }

  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }

  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }

      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function (line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function (line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }

  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }

    name = JSON.stringify('' + key);

    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function (prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
} // NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.


function isArray(ar) {
  return Array.isArray(ar);
}

exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}

exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}

exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}

exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}

exports.isString = isString;

function isSymbol(arg) {
  return _typeof(arg) === 'symbol';
}

exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}

exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}

exports.isRegExp = isRegExp;

function isObject(arg) {
  return _typeof(arg) === 'object' && arg !== null;
}

exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}

exports.isDate = isDate;

function isError(e) {
  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}

exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}

exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || _typeof(arg) === 'symbol' || // ES6 symbol
  typeof arg === 'undefined';
}

exports.isPrimitive = isPrimitive;
exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
} // log is just a thin wrapper to console.log that prepends a timestamp


exports.log = function () {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */


exports.inherits = require('inherits');

exports._extend = function (origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;
  var keys = Object.keys(add);
  var i = keys.length;

  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }

  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./support/isBuffer":126,"_process":100,"inherits":125}],128:[function(require,module,exports){
"use strict";

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy;

function wrappy(fn, cb) {
  if (fn && cb) return wrappy(fn)(cb);
  if (typeof fn !== 'function') throw new TypeError('need wrapper function');
  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k];
  });
  return wrapper;

  function wrapper() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    var ret = fn.apply(this, args);
    var cb = args[args.length - 1];

    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k];
      });
    }

    return ret;
  }
}

},{}],129:[function(require,module,exports){
"use strict";

module.exports = extend;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
  var target = {};

  for (var i = 0; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
}

},{}]},{},[2])(2)
});

//# sourceMappingURL=ucum-demo.js.map
