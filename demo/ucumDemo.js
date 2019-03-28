
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

export class UcumDemo {

  constructor () {

    // run the constructors for the utils and unitTables classes to get
    // things initialized and data loaded.
    this.utils_ = UcumLhcUtils.getInstance();
    this.utabs_ = UnitTables.getInstance();

    // Set up the category and display column defaults for the validator
    // tab and call buildUrlAndOpts to build them
    this.urlValCats_ = UcumDemoConfig.defCategories_ ;
    this.urlValDispFlds_ = UcumDemoConfig.defCols_ ;
    urlOpts = this.buildUrlAndOpts('validate');

    // Set up the search autocompleter for the unit expression field
    // on the validator tab
    this.valAuto_ = new Def.Autocompleter.Search('valString',
      urlOpts[0], urlOpts[1]);
    Def.Autocompleter.Event.observeListSelections('valString',
      (function(demoInstance) {
        return function () {
          demoInstance.reportUnitStringValidity('valString',
            'Validator', 'validationString');
        }
      })(this));

    // Set up the default category and display column defaults for the
    // converter tab and call buildUrlAndOpts to build them
    this.urlConvCats_ = UcumDemoConfig.defCategories_ ;
    this.urlConvDispFlds_ = UcumDemoConfig.defCols_ ;
    let urlOpts = this.buildUrlAndOpts('convert');

    // Set up the search autocompleters for the "from" and "to" unit code input
    // fields on the Converter tab section
    this.fromAuto_ = new Def.Autocompleter.Search('convertFrom',
                     urlOpts[0], urlOpts[1]);
    Def.Autocompleter.Event.observeListSelections('convertFrom',
      (function(demoInstance) {
        return function () {
          demoInstance.reportUnitStringValidity('convertFrom',
            'Converter', 'convMsg');
        }
      })(this));

    this.toAuto_ = new Def.Autocompleter.Search('convertTo',
                     urlOpts[0], urlOpts[1]);
    Def.Autocompleter.Event.observeListSelections('convertTo',
      (function(demoInstance) {
        return function () {
          demoInstance.reportUnitStringValidity('convertTo',
            'Converter', 'convMsg');
        }
      })(this));

    // Flags indicating validity of the "from" and "to" unit code and number
    // fields on the conversion tab.
    this.convFrom_ = false ;
    this.convFromNum_ = true ;
    this.convTo_ = false ;
    this.convToNum_ = true ;

    // Flag used to track a first entry on the converter tab.   This is needed
    // to know when to blank out the "to" number field if the user first enters
    // a unit code when the converter tab is displayed.   After that point
    // blanking out a numeric field as appropriate is taken care of.
    this.firstConvEntry_ = true ;

    // Remember which numeric value was last reported as the conversion result
    // and what field it was reported in
    this.lastResultFld_ = null ;
    this.lastResult_ = 0;

    // Flag used to block execution of the location change event handler when
    // location is changed in the url as the result of the user clicking on
    // one of the tabs (validator or converter tabs) by the checkTabsSwitch
    // function.
    this.blockLocationChangeHandler = false ;

    // Set up the prefetch autocompleter for the "to" conversion field.  It will
    // be populated with commensurable units in based on what the user enters
    // in the "from" field.  Changed to search autocompleter per Clem
    // this.toAuto_ = new Def.Autocompleter.Prefetch('convertTo', []);

    // Because this code is loaded with the page, there is no danger in
    // this being a singleton.
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
  buildUrlAndOpts(tab){
    let urlString = UcumDemoConfig.baseSearchURL_;
    let opts = UcumDemoConfig.baseSearchOpts_ ;
    let catsArray = (tab === 'convert' ? this.urlConvCats_ : this.urlValCats_);
    let dispArray = (tab === 'convert' ? this.urlConvDispFlds_ : this.urlValDispFlds_);
    let catLen = catsArray.length;
    if (catLen > 0) {
      let qString = '';
      for (let c = 0; c < catLen; c++) {
        if (c > 0)
          qString += ' OR ';
        qString += UcumDemoConfig.categoryValues_[catsArray[c]] ;
      }
      if (catLen > 1)
        qString = '(' + qString + ')';
      urlString += ' AND category:' + qString ;
    }
    let dispLen = dispArray.length ;
    let colHdrs = UcumDemoConfig.defCols_;
    if (dispLen > 0){
      colHdrs = dispArray ;
      let dString = 'df=' + dispArray.join(',') ;
      if (catLen > 0)
        dString = '&' + dString;
      else
        dString = '?' + dString ;
      urlString += dString ;
    }
    opts['colHeaders'] = colHdrs ;
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
  buildAdvancedSettings() {
    this.buildTabSettings('advancedSearchVal', 'val') ;
    this.buildTabSettings('advancedSearchCnv', 'cnv') ;
    let prec = document.getElementById("precision");
    prec.value = UcumDemoConfig.defaultPrecision_ ;

    // Clear the validator tab input field to avoid having a previous value
    // displayed when the form is reloaded.   This should not be necessary,
    // because the input field is defined with an attribute of
    // autocomplete="off".   But, Edge doesn't seem to feel like paying
    // attention to that.  So this is a workaround.  BAH!
    let valFld = document.getElementById("valString");
    valFld.innerHTML = "";
    valFld.setAttribute("autocomplete", "false");

    // Check to see if the URL specified that the converter tab be
    // displayed first.
    if (window.location.hash === '#converter') {
      let convertTab = document.getElementById("conversion-link");
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
  buildTabSettings(divName, boxSuffix) {

    // get the division that contains the advanced settings stuff
    let settingsDiv = document.getElementById(divName);

    // build the categories section
    let limitPara = document.createElement("P");
    let limitLine = document.createTextNode("Limit search to units in selected categories:");
    limitPara.appendChild(limitLine);
    settingsDiv.appendChild(limitPara);

    this.buildCheckBoxes(settingsDiv, UcumDemoConfig.defCategories_, true,
                         'category', boxSuffix) ;
    this.buildCheckBoxes(settingsDiv, UcumDemoConfig.categories_, false,
                         'category', boxSuffix) ;

    // build display fields section
    let dispPara = document.createElement("P");
    dispPara.className = 'topMargin20' ;
    let lineBreak = document.createElement('BR');
    dispPara.appendChild(lineBreak);
    let dispLine = document.createTextNode("Select unit fields to display:");
    dispPara.appendChild(dispLine);
    settingsDiv.appendChild(dispPara);

    this.buildCheckBoxes(settingsDiv, UcumDemoConfig.defDisplayFlds_, true,
                         'displayField', boxSuffix);
    this.buildCheckBoxes(settingsDiv, UcumDemoConfig.displayFlds_, false,
                         'displayField', boxSuffix);
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
  buildCheckBoxes(settingsDiv, namesArray, defBox, className, boxSuffix){

    let namesLen = namesArray.length;
    for (let i = 0; i < namesLen; i++) {
      let theVal = namesArray[i];
      let theBox = document.createElement("INPUT");
      theBox.setAttribute("type", "checkbox");
      theBox.checked = defBox;
      theBox.id = theVal + "_" + boxSuffix + "box";
      theBox.value = theVal ;
      theBox.setAttribute("class", className);
      theBox.setAttribute("style", "margin-left: 10px; margin-right: 3px;");
      theBox.addEventListener("click", function() {
        demoPkg.UcumDemo.getInstance().updateSetting(theBox.id, boxSuffix);});
      let theSpan = document.createElement('label');
      theSpan.setAttribute("style", "display: inline-block");
      theSpan.appendChild(theBox);

      let theText = document.createTextNode(theVal);
      theText.className = 'checkboxText' ;
      theSpan.appendChild(theText) ;
      settingsDiv.appendChild(theSpan);
    }
  }  // end buildCheckBoxes


  /**
   * This method checks the location value of the current URL to see if it
   * matched the current tab being displayed (or the one about to be
   * displayed).  This is here to make sure that when the user clicks on
   * the Validator or Converter tab, the "#converter" portion of the
   * url, if specified, is removed if the user clicked on the validator tab.
   *
   * This is called on the body onhashchange event.
   */
  checkTabSwitch() {
    if (this.blockLocationChangeHandler === false) {
      if (window.location.hash === '#converter') {
        let convertTab = document.getElementById("conversion-link");
        convertTab.click();
      }
      else {
        let validateTab = document.getElementById("validation-link");
        validateTab.click();
      }
    }
    else
      this.blockLocationChangeHandler = false ;
    
  } // end checkTabSwitch


  /**
   * This method is run when the Converter tab is displayed, to reset the
   * variables that track the validity of the three inputs ("from" unit code,
   * "from" value, and "to" unit code) that must be correct to attempt a
   * conversion as well as to reset the molecular weight division to hidden
   * status and the associated moleWeight input field to null.
   */
  showConvertTab(){
    this.convFrom_ = false ;
    let fromField = document.getElementById('convertFrom');
    fromField.value = null;
    fromField.classList.remove("invalid");

    let fromNameField = document.getElementById('convertFromName');
    fromNameField.innerHTML = '';

    this.convFromNum_ = true ;
    let fromNumField = document.getElementById('convertFromNum');
    fromNumField.value = 1;
    fromNumField.classList.remove("invalid");

    this.convTo_ = false ;
    let toField = document.getElementById('convertTo');
    toField.value = null;
    toField.classList.remove("invalid");

    let toNameField = document.getElementById('convertToName');
    toNameField.innerHTML = '';

    this.convToNum_ = true;
    let toNumField = document.getElementById('convertToNum');
    toNumField.value = 1;
    toNumField.classList.remove("invalid");

    let msgField = document.getElementById('convMsg');
    msgField.innerHTML = '';

    // Make sure the number/code boxes are aligned properly and set the
    // first entry flag to true.
    this._sizeNameDivs();
    this.firstConvEntry_ = true ;

    let mWeightDiv = document.getElementById('molecular-weight');
    mWeightDiv.style.visibility = 'hidden';

    let mWeightFld = document.getElementById('moleWeight');
    mWeightFld.value = null ;

    if (window.location.hash !== '#converter' &&
        window.location.hash !== '') {
      this.blockLocationChangeHandler = true;
      window.location.hash = '';
    }
  } // end showConvertTab


  /**
   * This method is run when the Validator tab is displayed, to reset the
   * ucum expression input field and the message field.  Otherwise they
   * retain their values when switching to the Converter tab and back.
   */
  showValidateTab(){

    let codeField = document.getElementById('valString');
    codeField.value = null;
    codeField.classList.remove("invalid");

    let msgField = document.getElementById('validationString');
    msgField.innerHTML = '';
    msgField.classList.remove("invalid");

    if (window.location.hash === '#converter') {
      this.blockLocationChangeHandler = true;
      window.location.hash = '';
      this.blockLocationChangeHandler = false ;
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
  updateSetting(ckBoxId, tabSuffix) {
    let ckBox = document.getElementById(ckBoxId);
    let clsName = ckBox.className ;
    let boxVal = ckBox.value;
    let boxChecked = ckBox.checked ;

    if (clsName === 'category') {
      let catsArray = (tabSuffix === 'cnv' ? this.urlConvCats_ :
                                             this.urlValCats_);
      let idx = catsArray.indexOf(boxVal) ;
      // if the box is checked and the value is not already in the
      // categories array, add it to the array.
      if (boxChecked && idx < 0) {
        catsArray.push(boxVal);
        // if the box is unchecked and the value is in the array, remove
        // it from the array.
      }
      else if (!boxChecked && idx >= 0) {
        catsArray.splice(idx, 1) ;
      }
    }
    else if (clsName === 'displayField') {
      let dispArray = (tabSuffix === 'cnv' ? this.urlConvDispFlds_ :
                                             this.urlValDispFlds_);
      let idx = dispArray.indexOf(boxVal);
      if (boxChecked && idx < 0) {
        dispArray.push(boxVal);
      }
      else if (!boxChecked && idx >= 0) {
        dispArray.splice(idx, 1);
      }
    }
    else
      throw(new Error('An error occurred while specifying your choice.'));

    // call buildUrlAndOpts to build the url and options from the updated url
    // arrays (category and display field arrays).
    let tabName = (tabSuffix === 'cnv' ? 'convert' : 'validate') ;
    let urlOpts = this.buildUrlAndOpts(tabName) ;

    // Call setOptions and setUrl to update the the autocompleter.
    // -- no, there is no setOptions at this point.  Leaving these lines in to remind
    // me to update this if/when a setOptions (or equivalent) function
    // becomes available.
    //this.fromAuto_.setOptions(urlOpts[1]);
    //this.fromAuto_.setURL(urlOpts[0]);

    // So, instead, we clear the cache and recreate the autocompleter(s).
    if (tabSuffix === 'cnv') {
      this.fromAuto_.clearCachedResults();
      this.fromAuto_.destroy();
      this.fromAuto_ = new Def.Autocompleter.Search('convertFrom',
          urlOpts[0], urlOpts[1]);
      this.toAuto_.clearCachedResults();
      this.toAuto_.destroy();
      this.toAuto_ = new Def.Autocompleter.Search('convertTo',
          urlOpts[0], urlOpts[1]);
    } else {
      this.valAuto_.clearCachedResults();
      this.valAuto_.destroy();
      this.valAuto_ = new Def.Autocompleter.Search('valString',
          urlOpts[0], urlOpts[1]);
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
  reportUnitStringValidity(elementID, tabName, msgElementID) {

    this.utils_.useHTMLInMessages(true);
    this.utils_.useBraceMsgForEachString(true);

    let valConv = tabName === 'Validator' ? 'validate' : 'convert' ;

    let retMsg = '';
    let valMsg = '';
    let parseResp = {};
    let suggsField = null ;
    if (tabName === 'Converter') {
      suggsField = document.getElementById("convSuggestions");
      suggsField.innerHTML = '';
      suggsField.style.display = 'none';
      // This is called by a change to one of the unit fields, so
      // hide the molecular weight division, clear the moleWeight input
      // value, and clear the value of the last result field, if any
      let mWeightDiv = document.getElementById('molecular-weight');
      mWeightDiv.style.visibility = 'hidden';
      let mWeightFld = document.getElementById('moleWeight');
      mWeightFld.value = null ;
      /*
      if (this.lastResultFld_) {
        let rf = document.getElementById(this.lastResultFld_);
        rf.value = '';
      }
      */

      // If the user entered a unit code as soon as the converter tab was
      // displayed, blank out the number field of the opposite number/code set.
      if (this.firstConvEntry_) {
        this.firstConvEntry_ = false ;
        if (elementID = 'convertFrom') {
          let clrFld = document.getElementById('convertToNum');
          clrFld.value = '';
        }
        else {
          let clrFld = document.getElementById('convertFromNum');
          clrFld.value = '';
        }
      }
    }

    // Clear the message field, but first hold onto the last message displayed.
    // This is used at the end of this function to make sure we don't redisplay
    // the same message.  This can happen if, for example, the user enters a
    // unit code that requires a substitution, e.g., 2mg instead of 2.mg, and
    // then enters another unit code in the other code field on the converter
    // tab.   When the 2mg unit code is checked for validity, a substitution
    // message is displayed.   When the second unit code is entered and the
    // conversion is performed, the substitution message gets repeated because
    // the conversion process will re-evaluate the 2mg unit code.  This avoids
    // that second display of the same, and no longer needed, message.
    let resFld = document.getElementById(msgElementID);
    let lastDispMsg = resFld.innerHTML ;
    resFld.innerHTML = '';
    let valFld = document.getElementById(elementID);
    let valMsgFld = document.getElementById(elementID + 'Name') ;
    if (valMsgFld) {
       valMsgFld.innerHTML = '';
       valMsgFld.style.height = 'auto';
    }
    let uStr = valFld.value;

    // If the field was blanked out and we're on the converter tab, call
    // setConvertValues to set the validity flag for that field to false but not
    // designate it as an error (no error message, no red border around the field)
    if (uStr === '') {
      if (tabName === 'Converter')
        this.setConvertValues(elementID, false, true);
    }
    // Otherwise create a safe (to redisplay) copy of the field and
    // try to validate it
    else {
      let escVal = escapeHtml(valFld.value);
      let theStatus = '';
      try {
        parseResp = this.utils_.validateUnitString(uStr, true, valConv);
        theStatus = parseResp['status'];
        let theUnit = parseResp['unit'];
        // If we got a unit back and the status isn't 'error', we found a
        // unit (whether or not it matches the original string).
        if (theStatus !== 'error' && theUnit) {

          if (tabName === 'Converter') {
            this.setConvertValues(elementID, true);

            // If the last displayed message was displayed again, remove it here.
            // See above for description of how that can happen.
            if (resFld.innerHTML === lastDispMsg) {
              resFld.innerHTML = '';
            }
            else {
              retMsg = resFld.innerHTML ;
            }
          }
          // If the status returned was 'invalid' it means we had to do a
          // substitution to get a unit.  Set the class on the output
          // strings to invalid.
          if (theStatus === 'invalid') {
            valFld.classList.add("invalid");
            resFld.classList.add("invalid");
            resFld.classList.remove("valid");
            valMsg = `${parseResp['ucumCode']} was substituted for ${escVal}.` ;
            valMsgFld.classList.add("invalid");
          }
          // Otherwise the status is valid.  If we're on the validator tab
          // set the appropriate classes for the output fields.  This has
          // already been done for the converter tab fields, in setConvertValues
          else {
            if (tabName === 'Validator') {
              valFld.classList.remove('invalid');
              resFld.classList.remove('invalid');
              resFld.classList.add('valid');
            }
            // Assemble the valid value message.  If there is a unit name,
            // use that.  If there's no name, just say that the code is valid.
            valMsg = `${parseResp['ucumCode']} `;
            if (theUnit.name) {
              valMsg += `(${theUnit.name}) `;
            }
            valMsg += ' is a valid unit expression.';
            // If there might be something that needs to be escaped in
            // the message, do it now.
            if (uStr !== escVal && uStr !== '') {
              valMsg = this._multipleReplace(valMsg, uStr, escVal);
            }
            // For the validator tab, make sure the valid unit message
            // is the first one that is displayed.  It may be followed
            // by a message about substitutions, but it should be first.
            if (tabName === 'Validator') {
              if (parseResp['msg'].length > 0)
                parseResp['msg'].unshift(valMsg);
              else
                parseResp['msg'] = valMsg;
            } // end if this is for the validator tab
          }  // end if the status is 'valid'
        } // end if we have a unit and the status is not 'error'
        // Else the status returned is 'error' OR no unit was returned
        // (status could still be invalid)
        else {
          if (tabName === 'Converter') {
            this.setConvertValues(elementID, false);
            valMsg = `${escVal} `;
            if (theUnit && theUnit.name) {
              valMsg += `(${theUnit.name}) `;
            }
            valMsg += ' is NOT a valid unit expression.';
          }
          else {
            valFld.classList.add("invalid");
            resFld.classList.add("invalid");
            resFld.classList.remove("valid");
          }
          // If the status is invalid and we have suggestions, put the suggestion
          // output in the return message.   This include a starting line
          // stating that the unit expression was invalid but we have
          // suggestions.  If we don't have suggestions there
          // should be an "invalid" message in the parse response's 'msg'
          // element which will be transferred to the retMsg below.
          if (parseResp['suggestions']) {
            if (tabName === 'Validator') {
              retMsg = this._suggSetOutput(parseResp['suggestions']);
            }
            else {
              suggsField.innerHTML = this._suggSetOutput(parseResp['suggestions']);
              suggsField.style.display = 'block';
            }
          }

          if (theStatus === 'error') {
            console.log(retMsg.concat(parseResp['msg']));
            retMsg = `Sorry - an error occurred while trying to validate ${escVal}`;
          }
        } // end if parsing returned an error status
      } // end try
      catch (err) {
        console.log(err.message);
        retMsg = `Sorry - an error occurred while trying to validate ${escVal}`;
        valFld.classList.add("invalid");
        resFld.classList.add("invalid");
        if (tabName === 'Converter') {
          this.setConvertValues(elementID, false);
        }
      } // end catch

      if (parseResp['msg'] && parseResp['msg'].length > 0) {
        let pMsgLen = parseResp['msg'].length;
        if (retMsg != '') {
          retMsg += '<BR>';
        }
        for (let m = 0; m < pMsgLen; m++) {
          if (!retMsg.includes(parseResp['msg'][m]))
            retMsg += parseResp['msg'][m];
          if ((m + 1) < pMsgLen)
            retMsg += '<BR>';
        }
      } // end if there's a message from the parse request

      // If there's a message to be displayed (and it's not a repeat of
      // the last displayed message) do it now
      if (retMsg !== '' && retMsg !== lastDispMsg) {
        if (uStr !== escVal && uStr !== '') {
          retMsg = this._multipleReplace(retMsg, uStr, escVal);
        }
        resFld.innerHTML = retMsg;
      }

      // If we're on the converter tab, display any pending valid/invalid
      // message for the code just entered and set the class of the field
      // that gets that message (under the input field for the code)
      if (tabName === 'Converter') {
        valMsgFld.innerHTML = valMsg;
        if (theStatus === 'valid')
          valMsgFld.classList.remove('invalid');
        else
          valMsgFld.classList.add('invalid');
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
  setConvertValues(elementID, valid, clear) {

    if (clear === undefined) {
      clear = false ;
    }
    let msgField = document.getElementById('convMsg');
    let sourceField = document.getElementById(elementID) ;
    let resultSide = null ;
    if (elementID === 'convertFrom') {
      this.convFrom_ = valid;
      let fromNumFld = document.getElementById('convertFromNum');
      if (fromNumFld.value == '')
        resultSide = 'from';
      else
        resultSide = 'to';
    }
    else if (elementID === 'convertTo') {
      this.convTo_ = valid;
      let toNumFld = document.getElementById('convertToNum');
      if (toNumFld.value === '')
        resultSide = 'to';
      else
        resultSide = 'from';
    }
    else if (elementID === 'convertFromNum') {
      this.convFromNum_ = valid ;
      resultSide = 'to';
    }
    else if (elementID === 'convertToNum') {
      this.convToNum_ = valid;
      resultSide = 'from';
    }
    else { // assume moleWeight
      if (this.lastResultFld_ === 'convertFromNum')
        resultSide = 'from';
      else
        resultSide = 'to';
    }

    // set or remove the indicator (currently a red border) on the invalid field
    if (valid === false && !clear) {
      sourceField.classList.add("invalid");
      msgField.classList.add("invalid");
    }
    else {
      sourceField.classList.remove("invalid");
      msgField.classList.remove("invalid");
    }

    // if both code fields are valid, and the number field that is not
    // being calculated is valid, perform the conversion
    if (this.convFrom_ === true && this.convTo_ === true) {
      if (resultSide === 'from' && this.convToNum_) {
        this.convertUnit('convertTo',
                         'convertToNum',
                         'convertFrom',
                         'convertFromNum');
      }
      else if (resultSide === 'to' && this.convFromNum_) {
        this.convertUnit('convertFrom',
                         'convertFromNum',
                         'convertTo',
                         'convertToNum');
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
  checkNumVal(numField) {

    let checkFld = document.getElementById(numField);
    let checkVal = escapeHtml(checkFld.value);
    if (numField === 'moleWeight')
      var resFld = document.getElementById(this.lastResultFld_) ;
    else {
      resFld = numField === 'convertFromNum' ?
        document.getElementById('convertToNum') :
        document.getElementById('convertFromNum');
    }
    let resultString = document.getElementById('convMsg');
    resultString.innerHTML = '';

    if (checkVal !== '') {
      resFld.value = '';
      let parsedNum = "" + checkVal;
      if (isNaN(parsedNum) || isNaN(parseFloat(parsedNum))) {
        resultString.innerHTML = `${checkVal} is not a valid number.`;
        this.setConvertValues(numField, false);
      }
      else {
        this.setConvertValues(numField, true);
      }
    } // end if a value was specified

    // Else the value is blank. call setConvertValues to set the validity
    // indicator to false and remove any red highlighting that might be there.
    else {
      this.setConvertValues(numField, false, true);
    }

    // Clear the first entry flag, make sure the number/code blocks are aligned
    if (this.firstConvEntry_) {
      this.firstConvEntry_ = false ;
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
  updatePrecision(msgFieldName) {

    let msgField = document.getElementById(msgFieldName);
    msgField.innerHTML = '';
    let prec = document.getElementById("precision");
    let precDigits = parseInt(prec.value);
    if (isNaN(precDigits) || (precDigits < 0)) {
      msgField.innerHTML = `Decimal digits must be specified as a number `+
                           `between 0 and ${UcumDemoConfig.maxDecDigits_}.  ` +
                           `It has been reset to the default value.`;
      msgField.classList.add("invalid");
      precDigits = UcumDemoConfig.defaultPrecision_;
      prec.value = precDigits;
    }
    else if (precDigits > UcumDemoConfig.maxDecDigits_) {
      msgField.innerHTML = `${escapeHtml(prec.value)} is not a valid value for `
        `decimal digits.  It has been reset to the maximum number of digits ` +
        `allowed.`;
      msgField.classList.add("invalid");
      precDigits = UcumDemoConfig.maxDecDigits_;
      prec.value = precDigits;
    }
    // Update the result field
    let numField = document.getElementById(this.lastResultFld_);
    let numVal = parseFloat(numField.value);
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
  convertUnit(fromField, fromNumField, toField, toNumField) {

    this.utils_.useHTMLInMessages(true);
    this.utils_.useBraceMsgForEachString(true);

    let resultMsg = '';
    let prec = document.getElementById("precision");
    let decDigits = parseInt(escapeHtml(prec.value));
    if (isNaN(decDigits)) {
      decDigits = Ucum.decDigits_;
      prec.value = decDigits;
    }
    // Start out with the precision not displayed
    let precLine = document.getElementById('precision-line');
    precLine.style.display = "none";

    // Store the name of the result field so that we have it if a larger number
    // of digits is subsequently requested AND (for the result field name)
    // when a molecular weight is requested.
    this.lastResultFld_ = toNumField ;

    let fromName = document.getElementById(fromField).value ;
    let escFromName = escapeHtml(fromName);
    let fromVal = parseFloat(escapeHtml(document.getElementById(fromNumField).value));
    let toName = document.getElementById(toField).value;
    let escToName = escapeHtml(toName);

    // Get the field to hold an error message and the one to hold suggestions
    let msgField = document.getElementById("convMsg");
    msgField.innerHTML = '';
    let suggsField = document.getElementById("convSuggestions");
    suggsField.innerHTML = '';
    suggsField.style.display = 'none';

    let weightField = document.getElementById("moleWeight");
    let moleWeightVal = weightField.value ;

    let resultObj = this.utils_.convertUnitTo(fromName, fromVal, toName,
                                                true, moleWeightVal);

    if (resultObj['status'] === 'succeeded') {
      let toVal = resultObj['toVal'];
      let toNumFld = document.getElementById(toNumField);
      if (toNumField === 'convertToNum')
        this.convToNum_ = true ;
      else
        this.convFromNum_ = true;
      // Store the full result value number received so that we have it if a
      // larger number of digits is subsequently requested.
      this.lastResult_ = toVal;

      // convert the value to a fixed value with the specified number of
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
      let precVal = parseFloat(toVal.toPrecision(UcumDemoConfig.defaultPrecision_)) ;
      toNumFld.value = precVal;

      // The precision chooser is on hold.  Don't display.
      //if (precVal !== toVal) {
      //  precLine.style.visibility = "visible";
      //}

      // If a message was returned, write that to the message area.  For a
      // successful conversion this might be a message about a substitution,
      // e.g., "2m is not a valid UCUM code.  We assumed you meant 2.m"

      if (resultObj['msg'].length > 0) {
        resultMsg = resultObj['msg'].join('<BR>');
      }
    }
    // Else if an error was signalled, transfer the error message to
    // the result field
    else if (resultObj['status'] === 'error') {
      resultMsg = 'Sorry - an error occurred while trying to ' +
        'perform the conversion.';
    }

    // Else result status was failed.  Either a molecular weight is needed
    // for a mass<->moles conversion or 1 or more invalid unit expressions
    // were found (status = 'failed')
    else {
      if (resultObj['msg']) {
        let idx = resultObj['msg'].indexOf(Ucum.needMoleWeightMsg_);
        if (idx >= 0) {
          this._requestMolecularWeight();
          resultObj['msg'].splice(idx, 1);
          if (resultObj['msg'].length > 0)
            resultMsg = resultObj['msg'].join('<BR>');
          else
            resultMsg = '';
        } else {
          resultMsg = resultObj['msg'].join('<BR>');
        }
      }
      // if suggestions were found, output the suggestions to the suggestions
      // field
      if (resultObj['suggestions']) {
        let suggsSetString = this._suggSetOutput(resultObj['suggestions']);
        if (fromName !== escFromName && fromName !== '') {
          suggsSetString = this._multipleReplace(suggsSetString,
                                                 fromName, escFromName);
        }
        if (toName !== escToName && toName !== '') {
          suggsSetString = this._multipleReplace(suggsSetString,
                                                 toName, escToName);
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
  getCommensurables(fromField, toField, resultField) {

    this.utils_.useHTMLInMessages(true);
    this.utils_.useBraceMsgForEachString(true);
    let resultMsg = [];

    let toFld = document.getElementById(toField);
    toFld.innerHTML = '';
    this.toAuto_.setList('');
    let resultString = document.getElementById(resultField);
    resultString.innerHTML = '';

    let fromName = document.getElementById(fromField).value;
    let escFromName = escapeHtml(fromName);
    if (fromName === '' || fromName === null) {
      resultMsg.push('Please specify a code for the units you want to convert.');
    }
    else {
      let hypIdx = fromName.indexOf(Ucum.codeSep_);
      if (hypIdx > 0)
        fromName = fromName.substr(0, hypIdx);

      let parseResp = [];

      try {
        parseResp = this.utils_.commensurablesList(fromName);
        let commUnits = parseResp[0];
        resultMsg = parseResp[1];
        // If we can't find any, don't panic.  The user could still enter one
        // that's not on our list but is commensurable.  So if none are found,
        // just make sure the text about commensurable units is hidden.
        let commText = document.getElementById('convertRight');
        if (commUnits) {
          let cLen = commUnits.length;
          let commNames = [];
          for (let i = 0; i < cLen; i++)
            commNames[i] = commUnits[i].getProperty('csCode_') + Ucum.codeSep_ +
                commUnits[i].getProperty('name_');
          commNames.sort(this.utabs_.compareCodes);
          this.toAuto_.setList(commNames);
          commText.style.visibility = "visible";
        }
        else
          commText.style.visibility = "hidden";
      }
      catch (err) {
        resultMsg.push(err.message);
      }
    }
    if (resultMsg.length > 0) {
      resultMsg = resultMsg.join('<BR>');
      if (fromName !== escFromName && fromName !== '') {
        resultMsg = this._multipleReplace(resultMsg, fromName, escFromName);
      }
      resultString.innerHTML = resultMsg ;
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
    } // end if we got the target element
  } // end toggleDisplay


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
  _suggSetOutput(suggSet) {

    let suggString = '';
    for (let s = 0; s < suggSet.length; s++) {
      suggString += suggSet[s]['msg'] + '<ul>';
      for (let u = 0; u < suggSet[s]['units'].length; u++) {
        suggString += '<li>' + suggSet[s]['units'][u].join(', ') + '</li>';
      } // end do for each unit
      suggString += '</ul>';
    }
    return suggString ;
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
  _multipleReplace(targetString, toReplace, replaceWith) {

    return targetString.replace(new RegExp(
      toReplace.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"), "g"),
      replaceWith);

  } // end _multipleReplace


  /**
   * This makes sure that the unit name areas on the unit
   * conversion tab (under the unit code input fields) are
   * the same heights).
   *
   * @private
   */
  _sizeNameDivs() {

    let left = document.getElementById("convertFromName");
    let leftHeight = left.offsetHeight;

    let right = document.getElementById("convertToName");
    let rightHeight = right.offsetHeight;

    if (right.innerHTML === '' && left.innerHTML === '') {
      right.style.height = '0px';
      left.style.height = '0px';
    }
    else {
      if (leftHeight > rightHeight) {
        right.style.height = leftHeight + 'px' ;
      }
      else if (rightHeight > leftHeight) {
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
  _requestMolecularWeight() {
    let weightDiv = document.getElementById('molecular-weight');
    weightDiv.style.visibility = 'visible';
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
