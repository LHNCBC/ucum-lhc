# ucum-lhc
LHC implementation of UCUM validation and conversion services.  

This is a work in progress so more capabilities will probably be introduced.

## Check out the Demo page

We have a [demo page](https://lhncbc.github.io/ucum-lhc) that 
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
      
Use the [Bower}(bower.io) package manager to install the code:

    bower install ucum-lhc

This will install the dist/ucum-lhc.js module package, which includes the
source code you need for the validation and conversion functions as well as the 
ucum code definitions file.  We assume that your main motivation for including 
the ucum-lhc code is to have the validation and conversion capabilities for 
units of measure on your system.  Those functions are available from the 
**ucumPkg.UcumLhcUtils** class.  Here are the function descriptions:

**validUnitString(uStr)**

This method validates a unit string.  It first checks to see if the string passed 
in is a unit code that is found in the unit codes table. If it is not found it 
parses the string to see if it resolves to a valid unit string.

* _@param_ uStr the string to be validated
* _@returns_ an array containing the unit found for the string (or null if
  no unit was found) and a message string, if one was returned

For example, to validate a unit string of m2/g4:
 
    var Pkg = require('ucum-lhc.js');  // include path to file where necessary
     
     var utils = Pkg.UcumLhcUtils.getInstance();
     var returnArray = utils.validUnitString('m2/g4');
     if (returnArray[0] !== null)
       /* the string is valid */
     else
       /* signal the error in returnArray[1] */
       
For information on unit string formatting, look at the _Ucum Unit Expression 
Validation_ section on the demo page.  There is a button labeled "Show entry hints". 
That will give you a short description of unit strings, and includes a link to
the UCUM Specification, where you can find the full deal.

**convertUnitTo(fromName, fromVal, toName, decDigits)**

This method converts a number of one type of unit to the equivalent number of
another type of unit.

* _@param_ fromName the unit string of the unit to be converted
* _@param_ fromVal the number of "from" units to be converted to "to" units
* _@param_ toName the unit string of the unit that the from field is to be converted to
* _@param_ decDigits the maximum number of decimal digits to be displayed
 for the converted unit.  If not specified, the UCUM.decDigits_ value
  (currently 4) is used.
* _@returns_ a message indicating either the result of the conversion or an
  error message if an error occurred.

For example, to convert 27 U.S. fathoms to U.S. inches with 0 decimal digits
 
    var Pkg = require('ucum-lhc.js');   // include path to file where necessary
     
    var utils = Pkg.UcumLhcUtils.getInstance();
    var returnMsg = utils.convertUnitTo('[fth_us]', 27, '[in_us]', 0);
    if (returnMsg === "27 fathom units = 1944 inch units.")
      /* the conversion was successful */
    else
      /* the conversion encountered an error that returnMsg will describe */
      
If you want to know what unit types a particular unit can be converted to, the 
_UCUM Unit Conversions_ section of the demo page will show you a list of 
commensurable units when you enter the "from" unit code.  (Valid UCUM unit codes
are shown in the _Find Common UnitCodes_ section).  That list will 
be displayed in the "converted to" list.  It will not show that list for unit
strings that combine units, such as m2/g4.

### Download the GitHub repository

The code available here on GitHub includes functions and scripts to perform
additional functions, mainly to convert ucum data from various formats to 
the data used by our code as well as the code that supports the demo page.
Click on the green "Clone or download" button above to download the repository.

