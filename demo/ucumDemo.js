
/**
 * This is the code entry point for the demo web page.  It coordinates the
 * loading of the prefix and unit objects from the json definitions file and
 * populating the autocompleter unit lists.
 */

var fs = require('browserify-fs');
var sanitizeHtml = require('sanitize-html');

var Ucum = ucumPkg.Ucum;
var UcumDemoConfig = require('./demoConfig').UcumDemoConfig;
var UcumLhcUtils = ucumPkg.UcumLhcUtils;
var UnitTables = ucumPkg.UnitTables;
var UcumFileValidator = ucumPkg.UcumFileValidator;

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
    this.valAuto_ = new Def.Autocompleter.Search('valString',
      urlOpts[0], urlOpts[1]);

    // Set up the default category and display column defaults for the
    // converter tab and call buildUrlAndOpts to build them
    this.urlConvCats_ = UcumDemoConfig.defCategories_ ;
    this.urlConvDispFlds_ = UcumDemoConfig.defCols_ ;
    let urlOpts = this.buildUrlAndOpts('convert');

    // Set up the search autocompleters for the "from" unit code input field
    // on the Converter tab section
    this.fromAuto_ = new Def.Autocompleter.Search('convertFrom',
                     urlOpts[0], urlOpts[1]);
    Def.Autocompleter.Event.observeListSelections('convertFrom',
      (function(demoInstance) {
        return function () {
          demoInstance.reportUnitStringValidity('convertFrom',
            'resultString', 'from');
        }
      })(this));

    this.toAuto_ = new Def.Autocompleter.Search('convertTo',
                     urlOpts[0], urlOpts[1]);
    Def.Autocompleter.Event.observeListSelections('convertTo',
      (function(demoInstance) {
        return function () {
          demoInstance.reportUnitStringValidity('convertTo',
            'resultString', 'to');
        }
      })(this));

    // Flags indicating validity of the "from" and "to" unit fields and
    // the from number field on the conversion tab.
    this.convFromUnit_ = false ;
    this.convToUnit_ = false ;
    this.convFromVal_ = false ;

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
    prec.value = Ucum.decDigits_ ;
  }


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
      settingsDiv.appendChild(theBox);
      let aSpan = document.createElement('span')
      let theText = document.createTextNode(theVal);
      theText.className = 'checkboxText' ;
      settingsDiv.appendChild(theText) ;
    }
  }  // end buildCheckBoxes


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
   * @param returnElementID the ID of the web page element to receive the
   *  return validation message
   * @param reportValid parameter used to indicate how to report a valid string.
   *  'display' indicates that a valid string message should be displayed in the
   *    page element specified by the returnElementID.
   *  'from' indicates that instead of a message, the convFromUnit flag should
   *    be set to true if the string is valid; false if it is not.
   *  'to' indicates that instead of a message, the convToUnit flag should be
   *    set to true if the string is valid; false if it is not.
   *  If the string is invalid the message is always displayed in the page
   *  specified by the returnElementID.
   * @returns nothing directly; return is the validation message as noted above
   */
  reportUnitStringValidity(elementID, returnElementID, reportValid) {

    this.utils_.useHTMLInMessages(true);
    this.utils_.useBraceMsgForEachString(true);
    
    let uStr = sanitizeHtml(document.getElementById(elementID).value);
    let valFld = document.getElementById(returnElementID);
    valFld.innerHTML = '';

    let retMsg = '';
    let parseResp = {};

    if (uStr === "") {
      if(reportValid === 'display') {
        retMsg = "Please specify a unit string to be validated.";
        valFld.setAttribute("class", "invalid");
      }
      else {
        this.setConvertValues(reportValid, false, true);
      }
    }
    else {
      try {
        parseResp = this.utils_.validateUnitString(uStr, true);
        if (parseResp['status'] === 'valid') {
          if (reportValid === 'display') {
            retMsg = `${parseResp['ucumCode']} is a valid unit expression.`;
            valFld.removeAttribute("class");
          }
          else if (reportValid === 'from' || reportValid === 'to') {
            this.setConvertValues(reportValid, true);
          }
          else {
            console.log(`Invalid reportValid parameter supplied - ${reportValid}`);
            retMsg = [`Sorry - an error occurred while trying to validate ${uStr}`];
            valFld.setAttribute("class", "invalid");
          }
        }
        // If the status is invalid and we have suggestions, put the suggestion
        // output in the return message.   If we don't have suggestions there
        // should be an explanation in the parse response's 'msg' element, and
        // will be transferred to the returned message below.
        else {
          this.setConvertValues(reportValid, false) ;
          valFld.setAttribute("class", "invalid")
          if (parseResp['status'] === 'invalid') {
            if (parseResp['suggestions'])
              retMsg = this._suggSetOutput(parseResp['suggestions']);
          }
          else { // assume status is 'error'
            console.log(retMsg.concat(parseResp['msg']));
            if (reportValid === 'display') {
              retMsg = [`Sorry - an error occurred while trying to validate ${uStr}`];
            }
            else {
              this.setConvertValues(reportValid, false);
            }
          }
        }
      }
      catch (err) {
        console.log(err.message);
        if (reportValid === 'display') {
          retMsg = [`Sorry - an error occurred while trying to validate ${uStr}`];
          valFld.setAttribute("class", "invalid");
        }
        else {
          this.setConvertValues(reportValid, false);
        }
      }
    }
    if (parseResp['msg']) {
      if (reportValid === 'display' || parseResp['status'] !== 'valid') {
        if (retMsg != '')
          retMsg += '<BR>';
        retMsg += parseResp['msg'].join('<BR>');
      }
    }
    if (retMsg != '')
      valFld.innerHTML = retMsg;
  } // end reportUnitStringValidity


  /**
   * This method is run when the Converter tab is displayed, to reset the
   * variables that track the validity of the three inputs ("from" unit code,
   * "from" value, and "to" unit code) that must be correct to attempt a
   * conversion.
   */
  showConvertTab(){
    this.convFromUnit_ = false ;
    let fromField = document.getElementById('convertFrom');
    fromField.value = null;
    fromField.removeAttribute("class");

    this.convFromVal_ = false ;
    let numField = document.getElementById('convertNum');
    numField.value = null;
    numField.removeAttribute("class");

    this.convToUnit_ = false ;
    let toField = document.getElementById('convertTo');
    toField.value = null;
    toField.removeAttribute("class");

    document.getElementById('resultString').innerHTML = null ;
    document.getElementById("doConversionButton").disabled = true;
  }


  /**
   * This method sets the appropriate validity variable and display attributes
   * (via the "invalid" class attribute) for one of the three inputs that
   * must be correct to allow the user to request conversion.
   *
   * This also checks to see if all three are correct and if they are, it
   * makes the convert button visible. If they are not the convert button
   * is hidden (or remains hidden).
   *
   * @param whichSetting indicates which input was checked:
   *   "from" means the "from" unit code field was checked;
   *   "to" means the "to" unit code fields was checked; and
   *   "fromNum" means the number of units field was checked.
   * @param value true indicates that the value is valid; false means it's not.
   * @param clear an optional bulletin that signals a request to remove
   *   highlighting (currently a red border) of the form element being updated.
   *   This should be passed as true when the user clears the contents of a
   *   field.  The input is not a valid value, but no message or highlighting
   *   is required.  Default value is false.
   *
   */
  setConvertValues(whichSetting, value, clear) {

    if (clear === undefined) {
      clear = false ;
    }
    let msgField = document.getElementById('resultString')
    let targetField = null ;
    if (whichSetting === 'from') {
      this.convFromUnit_ = value;
      targetField = document.getElementById('convertFrom');
    }
    else if (whichSetting === 'to') {
      this.convToUnit_ = value;
      targetField = document.getElementById('convertTo');
    }
    else { // assume from value
      this.convFromVal_ = value;
      targetField = document.getElementById('convertNum');
    }

    // set or remove the indicator (currently a red border) on the invalid field
    if (value === false && !clear) {
      targetField.setAttribute("class", "invalid");
      msgField.setAttribute("class", "invalid");
    }
    else {
      targetField.removeAttribute("class");
      msgField.removeAttribute("class");
    }

    let convertButton = document.getElementById("doConversionButton");
    if (this.convFromUnit_ === true && this.convToUnit_ === true &&
        this.convFromVal_ === true)
      convertButton.disabled = false ;
    else
      convertButton.disabled = true ;

  } // end setConvertValues


  /**
   * This method checks the number of units value to make sure it's a valid
   * number.  It calls setConvertValues to set the validity state flag for
   * the number of units field as appropriate.
   *
   * @param numField the name of the number of units field
   *
   */
  checkFromVal(numField) {
    let fromVal = document.getElementById(numField).value ;
    let resultString = document.getElementById("resultString");
    if (fromVal !== '') {
      let parsedNum = parseFloat(fromVal);
      if (isNaN(parsedNum)) {
        resultString.innerHTML = `${fromVal} is not a valid number.`;
        this.setConvertValues('fromNum', false);
      }
      else {
        this.setConvertValues('fromNum', true);
      }
    }
    else {
      resultString.innerHTML = '';
      this.setConvertValues('fromNum', false, true);
    }
  } // end checkFromVal


  /**
   * This method converts one unit to another
   *
   * @param fromField the ID of the field containing the name of the unit to
   *  be converted
   * @param numField the ID of the field containing the number of "from" units
   *  to be converted to "to" units
   * @param toField the ID of the field containing the name of the unit that
   *  the from field is to be converted to
   */
  convertUnit(fromField, numField, toField) {

    this.utils_.useHTMLInMessages(true);
    this.utils_.useBraceMsgForEachString(true);

    let prec = document.getElementById("precision");
    let decDigits = parseInt(prec.value);
    if (isNaN(decDigits)) {
      decDigits = Ucum.decDigits_;
      prec.value = decDigits;
    }

    let entryErrMsg = [];

    let fromName = sanitizeHtml(document.getElementById(fromField).value) ;
    if (fromName === '' || fromName === null) {
      entryErrMsg.push('Please specify a code for the units you want to convert.');
    }
    else {
      let hypIdx = fromName.indexOf(Ucum.codeSep_);
      if (hypIdx > 0)
        fromName = fromName.substr(0, hypIdx);
    }
    let fromVal = parseFloat(document.getElementById(numField).value);
    if (isNaN(fromVal)) {
      entryErrMsg.push('Please specify the number of units to be converted.');
    }
    let toName = sanitizeHtml(document.getElementById(toField).value);
    if (toName === '' || toName === null) {
      entryErrMsg.push('Please specify a code that you want the units to be converted to.');
    }
    else {
      let codePos = toName.indexOf(Ucum.codeSep_);
      if (codePos > 0)
        toName = toName.substr(0, codePos);
    }
    // Get the field to hold the response
    let resultString = document.getElementById("resultString");
    resultString.innerHTML = '';

    // if we don't have any entry messages, call the conversion code and put
    // the response in the form field.  Otherwise fill that field with the
    // entry message(s).
    if (entryErrMsg.length > 0) {
      resultString.innerHTML = entryErrMsg.join('<BR>');
    }
    else {
      let resultObj = this.utils_.convertUnitTo(fromName, fromVal, toName,
                                                true);
      if (resultObj['status'] === 'succeeded') {
        let toVal = resultObj['toVal'];
        // convert the value to a fixed value with the specified number of
        // decimal digits.  Remove trailing zeroes
        //toVal = toVal.toFixed(decDigits).replace(/\.?0+$/, "");
        // ----- OR ----
        // convert the value to a fixed value with the specified number of
        // decimal digits.  Do not remove trailing zeroes
        toVal = toVal.toFixed(decDigits);

        // Set the return message.   Use the UCUM code from the "from" and "to"
        // unit objects returned.  Although the user will PROBABLY enter a
        // valid unit code from the web page, they don't have to.
        resultString.innerHTML = `${fromVal.toString()} ` +
            `${resultObj['fromUnit'].getProperty('csCode_')} = ` +
            `${toVal.toString()} ` +
            `${resultObj['toUnit'].getProperty('csCode_')}`;
        if (resultObj['msg'].length > 0) {
          for (let r = 0; r < resultObj['msg'].length; r++)
          resultString.innerHTML += '<br>' + resultObj['msg'][r] ;
        }
      }
      // Else if an error was signalled, transfer the error message to
      // the result field
      else if (resultObj['status'] === 'error') {
        resultString.innerHTML = 'Sorry - an error occurred while trying to ' +
          'perform the conversion.';
      }
      // Else 1 or more invalid unit expressions were found (status = 'failed')
      else {
        // if suggestions were found, output any included messages followed
        // by the suggestions to the result field
        if (resultObj['suggestions']) {
          let suggString = '';
          if (resultObj['msg'])
            suggString = resultObj['msg'].join('<BR>') + '<BR>';
          if (resultObj['suggestions']['from'])
            suggString += this._suggSetOutput(resultObj['suggestions']['from']);
          if (resultObj['suggestions']['to'])
            suggString += this._suggSetOutput(resultObj['suggestions']['to']);          resultString.innerHTML = suggString ;
        }
        // if suggestions were not found, output whatever message(s) were
        // returned that would indicate the problem
        else
          resultString.innerHTML = resultObj['msg'].join('<BR>');
      } // end if conversion did/didn't succeed
    } // end if there were/weren't entry errors
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

    let fromName = sanitizeHtml(document.getElementById(fromField).value);
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
    let colName = sanitizeHtml(document.getElementById('colName').value);
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
      suggString += suggSet[s]['msg'] + '<BR>';
      for (let u = 0; u < suggSet[s]['units'].length; u++) {
        suggString += suggSet[s]['units'][u].join(', ') + '<BR>';
      } // end do for each unit
    }
    return suggString ;
  } // end suggSetOutput

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
