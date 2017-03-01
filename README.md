# ucum-lhc
This is the LHC implementation of validation and conversion services based on
the [Unified Code for Units of Measure](http://unitsofmeasure.org) (UCUM) code
system created by the Regenstrief Institute, Inc.  

See our [overview page](https://lhncbc.github.io/ucum-lhc/index.html) for 
general information.

This is a work in progress so more capabilities will probably be introduced.

## Check out the Demo page

We have a [demo page](https://lhncbc.github.io/ucum-lhc/demo.html) that 
shows various capabilities.  That includes the validation and conversion
functions described below.  You might want to try that out first.

## Get the code

The ucum-lhc code is written in the ECMAScript 6 (developed by 
[Ecma International](http:www.ecma-international.org) version of Javascript.  
Since that version is not yet universally supported, the code is compiled to 
standard Javascript using the [Babel](https://babeljs.io) compiler. 
The code uses Node.js I/O functions and compatible packages, and browserify-fs
to replace the I/O functions with code that runs in a browser.

Currently we have code to serve multiple purposes.  The core code supports
the validation and conversion of UCUM unit expressions.  Other code is 
concerned with importing and exporting the UCUM data, and in supporting the
demo page (noted above).  If you are looking to include the ucum-lhc core code 
in your application, download the code with the [bower](https://bower.io) package
manager.

### Using the code in the ucum-lhc package
      
Use the [Bower](http://bower.io) package manager to install the code:

    bower install ucum-lhc

This will install the dist/ucum-lhc.js module package, which includes the
source code you need for the validation and conversion functions as well as the 
ucum code definitions file.  We assume that your main motivation for including 
the ucum-lhc code is to have the validation and conversion capabilities for 
units of measure on your system.  Those functions are available from the 
_ucumPkg.UcumLhcUtils_ class.  Here are the function descriptions:

**validateUnitString(uStr)**

This method validates a unit string.  It first checks to see if the string passed 
in is a unit code that is found in the unit codes table. If it is not found it 
parses the string to see if it resolves to a valid unit string.

* _@param_ uStr the string to be validated
* _@returns_ an object with four elements:
   * 'status' contains either 'valid' or 'invalid';
   * 'ucumCode' the valid ucum code, which may differ from what was passed
        in (e.g., if 'Gauss' is passed in, this will contain 'G'); 
   * 'msg' contains a message, if the string is invalid, indicating
        the problem, or an explanation of a substitution such as the
        substitution of 'G' for 'Gauss'; and
   * 'unit' which is null if no unit is found, or a hash for a unit found:
     * 'code' is the unit's ucum code (G in the above example);
     * 'name' is the unit's name (Gauss in the above example); and
     * 'guidance' is the unit's guidance/description data.

For example, to validate a unit string of m2/g4:
 
    var Pkg = require('ucum-lhc.js');  // include path to file where necessary
     
     var utils = Pkg.UcumLhcUtils.getInstance();
     var returnObj = utils.validateUnitString('m2/g4');
     if (returnObj['status'] === 'valid')
       /* the string is valid; returnObj['ucumCode'] will contain the valid 
          ucum code (may differ from what was entered), returnObj['msg'] may 
          contain a message or messages describing substitution(s) for the
          code entered, and retObj['unit'] will contain 3 pieces of data for the 
          unit - code, name and guidance (provides information about the unit, 
          such as how the unit is used, etc.)*/
     else
       /* returnObj['status'] will be 'invalid' and */
       /* returnOb['msg'] will have a message describing the problem */
       
For information on unit string formatting, look at the _Ucum Unit Expression 
Validation_ section on the [demo page](https://lhncbc.github.io/ucum-lhc/demo.html).  
There is a button labeled "Show entry hints".  That will give you a short description 
of unit strings, and includes a link to the 
[UCUM Specification](http://unitsofmeasure.org/ucum.html), where you can find 
the full deal.

**convertUnitTo(fromUnitCode, fromVal, toUnitCode, decDigits)**

This method converts a number of one type of unit to the equivalent number of
another type of unit.

* _@param_ fromUnitCode the unit code/expression/string of the unit to be converted
* _@param_ fromVal the number of "from" units to be converted to "to" units
* _@param_ toUnitCode the unit code/expression/string of the unit that the from 
  field is to be converted to
* _@param_ decDigits the maximum number of decimal digits to be displayed
  for the converted unit.  If not specified, the _UCUM.decDigits_ value
  (currently 4) is used.
* _@returns_ a hash with three elements:
   * 'status' contains either 'succeeded' or 'failed'; 
   * 'toVal' contains the number of "to" units resulting from the conversion, or
     null if the conversion failed; and
   * 'msg' contains a message describing either the result of the conversion or 
         an error message if an error occurred.

For example, to convert 27 U.S. fathoms to U.S. inches with 0 decimal digits
 
    var Pkg = require('ucum-lhc.js');   // include path to file where necessary
     
    var utils = Pkg.UcumLhcUtils.getInstance();
    var returnObj = utils.convertUnitTo('[fth_us]', 27, '[in_us]', 0);
    if (returnObj['status'] === 'succeeded')
      /* the conversion was successful.  The value (1944) for the "to" unit
         will be in returnObj['toVal'] and returnObj['msg'] will contain the
         text "27 fathom units = 1944 inch units."
       */
    else
      /* the conversion encountered an error that the string in returnObj['msg'] 
         will describe; returnObj['toVal'] will be null */
      
If you want to know what unit types a particular unit can be converted to, the 
_UCUM Unit Conversions_ section of the [demo page](https://lhncbc.github.io/ucum-lhc/demo.html) 
will show you a list of commensurable units when you enter the "from" unit code.  
(Valid UCUM unit codes are shown in the _UCUM Unit Expression Validation_ section).  
That list will be displayed in the "converted to" list.  

**checkSynonyms(theSyn)**

This method searches for units that include a single search term (theSyn) in the
unit's synonyms data and/or the unit name.  It returns all units found with a 
match.  This is useful when an exact match for a term is not found.  For example,
submitting the term "pound" to the _validUnitString_ method will result in a 
"not found" response.   Submitting it to this method will return with a list 
of possible pound units.

* _@param_ theSyn the term to search for
* _@returns_ a hash with three elements:
   * 'status' contains the status of the request, which can be 'error',
      'failed' or 'succeeded'; 
   * 'msg' contains a message for an error or if no units were found; and 
   * 'units' which is an array that contains one hash for each unit found:
     * 'code' is the unit's code;
     * 'name' is the unit's name; and
     * 'guidance' is the guidance, or description, for the unit.

   For example, the 'units' array returned for a search term of "pound" would be:
    * {"code":"\[lb_av\]","name":"pound - international","guidance":"standard unit used in the US and internationally"}
    * {"code":"\[lbf_av\]","name":"pound force - US","guidance":"only rarely needed in health care - see [lb_av] which is the more common unit to express weight"}
    * {"code":"\[lb_tr\]","name":"pound - troy","guidance":"only used for weighing precious metals"}
    * {"code":"\[lb_ap\]","name":"pound - apothecary","guidance":null}
    * {"code":"\[psi\]","name":"pound per square inch","guidance":null}

 
    var Pkg = require('ucum-lhc.js');   // include path to file where necessary
     
    var utils = Pkg.UcumLhcUtils.getInstance();
    var returnObj = utils.checkSynonyms('pound');
    if (returnObj['status'] === 'succeeded')
      /* one or more units was found.  returnObj['msg'] will be null and the 
         returnObj['units'] array will contain the data listed above */
    else if (returnObj['status'] === 'failed')
      /* no units were found and the returnObj['msg'] string will indicate that 
      */
    else
      /* returnObj['status'] will be 'error' and returnObj['msg'] will indicate
         what the error was. */
      

### Download the GitHub repository

The code available here on GitHub includes functions and scripts to perform
additional functions, mainly to convert ucum data from various formats to 
the data used by our code as well as the code that supports the demo page.
Click on the green "Clone or download" button above to download the repository.

