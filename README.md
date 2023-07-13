# ucum-lhc
This is the LHC implementation of validation and conversion services based on
the [Unified Code for Units of Measure](http://unitsofmeasure.org) (UCUM) code
system created by the Regenstrief Institute, Inc.  

See our [overview page](https://ucum.nlm.nih.gov/ucum-lhc) for
general information.

This is a work in progress so more capabilities will probably be introduced.

## Check out the Demo page

We have a [demo page](https://ucum.nlm.nih.gov/ucum-lhc/demo.html) that 
shows various capabilities.  That includes the validation and conversion
functions described below.  You might want to try that out first.

## Get the code

The ucum-lhc code is written in the ECMAScript 6 version of Javascript.
Since that version is not yet universally supported, the code is compiled to 
standard Javascript using the [Babel](https://babeljs.io) compiler. 

Currently we have code to serve multiple purposes.  The core code supports
the validation and conversion of UCUM unit expressions as well as a function
to search for commensurable units for a specified unit expression.  Other code is 
concerned with importing and exporting the UCUM data, and in supporting the
demo page (noted above).  If you are looking to include the ucum-lhc core code 
in your application, download the code as an [npm](https://www.npmjs.com) package.

### Getting the code as an npm package

You can use the [npm](https://www.npmjs.com) package manager 
to install the ucum-lhc npm package.  (npm is 
[automatically installed](https://www.npmjs.com/get-npm) with Node.js.)

    npm install @lhncbc/ucum-lhc --save

This will install the @lhncbc/ucum-lhc directory in your node_modules diretory. 
The dist subdirectory will contain ucum-lhc.js and ucum-lhc.min.js (minimized
version of ucum-lhc.js).

### Getting the code as a bower package

You can use the [bower](https://bower.io) package manager to install the
ucum-lhc bower package.   (If you do not have bower installed on your machine
you can install it using npm.  See https://bower.io).  Install the ucum-lhc
package using the bower install command

    bower install ucum-lhc
    
This will install the ucum-lhc directory in your bower_components directory.
The dist subdirectory will contain ucum-lhc.js and ucum-lhc.min.js (minimized
version of ucum-lhc.js).

## Using the code 

The ucum-lhc.min.js file (which is the minimized version of the ucum-lhc.js 
file) includes the source code you need for the validation, conversion and 
commensurable units functions as well as the ucum code definitions file.  We 
assume that your main motivation for including the ucum-lhc code is to have 
those capabilities for units of measure on your system.  

### Server side
To access those capabilities from your server side code, require the npm package
and create a UcumLhcUtils object that contains those functions.

    var ucum = require('@lhncbc/ucum-lhc');
    var utils = ucum.UcumLhcUtils.getInstance();
  
### Client side

To access those capabilities from your client side code, include the 
ucum-lhc.min.js package in your html file.  

    <script src="path-to-installed-package/dist/ucum-lhc.min.js"></script>

The validation, conversion and commensurable units functions are available from 
the _ucumPkg.UcumLhcUtils_ class.  In your client side javascript code access 
those functions via the ucumPkg object.  For example, 

    var parseResp = ucumPkg.UcumLhcUtils.getInstance().validateUnitString(uStr, true);
        
### Function descriptions
        
Below is documentation for the public functions on the UcumLhcUtils instance.
*  [validateUnitString](#validateUnitString)
*  [convertUnitTo](#convertUnitTo)
*  [checkSynonyms](#checkSynonyms)
*  [convertToBaseUnits](#convertToBaseUnits)

<a id="validateUnitString"></a>
#### validateUnitString(uStr, suggest)

This method validates a unit string.  It first checks to see if the string passed 
in is a unit code that is found in the unit codes table. If it is not found it 
parses the string to see if it resolves to a valid unit string.

If a valid unit cannot be found, the string is tested for some common errors,
such as missing brackets or a missing multiplication operator.  If found, the
error is reported in the messages array that is returned.

If a valid unit cannot be found and an error cannot be discerned, this may
return, if requested, a list of suggested units in the suggestions array
that is returned.  Suggestions are based on matching the expression with
unit names and synonyms.

* _@param_ uStr the string to be validated;
* _@param_ suggest a boolean to indicate whether or not suggestions are
    requested for a string that cannot be resolved to a valid unit;
    true indicates suggestions are wanted; false indicates they are not,
    and is the default if the parameter is not specified;
* _@returns_ an object with five properties:
   * 'status' will be 'valid' (the uStr is a valid UCUM code), 'invalid'
        (the uStr is not a valid UCUM code, and substitutions or
        suggestions may or may not be returned, depending on what was
        requested and found); or 'error' (an input or programming error
        occurred);
   * 'ucumCode' the valid ucum code, which may differ from what was passed
        in (e.g., if 'Gauss' is passed in, this will contain 'G') OR null if
        the string was flagged as invalid or an error occurred; 
   * 'msg' is an array of messages, if the string is invalid or an
        error occurred, indicating the problem, or an explanation of a
        substitution such as the substitution of 'G' for 'Gauss', or
        an empty array if no messages were generated ;
   * 'unit' which is null if no unit is found, or a hash for a unit found:
     * 'code' is the unit's ucum code (G in the above example);
     * 'name' is the unit's name (Gauss in the above example); and
     * 'guidance' is the unit's guidance/description data.
   * 'suggestions' if suggestions were requested and found, this is an array
         of one or more hash objects.  Each hash contains three elements:
     * 'msg' which is a message indicating what part of the uStr input
         parameter the suggestions are for;
     * 'invalidUnit' which is the unit expression the suggestions are
         for; and
     * 'units' which is an array of data for each suggested unit found.
          Each array will contain the unit code, the unit name and the
          unit guidance (if any).
        If no suggestions were requested and found, this property is not
        returned.

For example, to validate a unit string of m2/g4 (assuming you have created a
utils object as described above):

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
Validation_ section on the [demo page](https://ucum.nlm.nih.gov/ucum-lhc/demo.html).  
There is a button labeled "Show entry hints".  That will give you a short description 
of unit strings, and includes a link to the 
[UCUM Specification](http://unitsofmeasure.org/ucum.html), where you can find 
the full deal.

<a id="convertUnitTo"></a>
#### convertUnitTo(fromUnitCode, fromVal, toUnitCode, suggest, molecularWeight)

This method converts a number of one type of unit to the equivalent number of
another type of unit.  Note that the number returned is not trimmed or
rounded to any particular precision or significant digits.

Disclaimer:  Conversion results should be verified independently before
using them in actual clinical settings.

* _@param_ fromUnitCode the unit code/expression/string of the unit to be converted;
* _@param_ fromVal the number of "from" units to be converted to "to" units;
* _@param_ toUnitCode the unit code/expression/string of the unit that the from 
  field is to be converted to;
* _@param_ suggest a boolean to indicate whether or not suggestions are
   requested for a string that cannot be resolved to a valid unit;
   true indicates suggestions are wanted; false indicates they are not,
   and is the default if the parameter is not specified;
* _@param_ molecularWeight the molecular weight of the substance in question
   when a conversion is being requested from mass to moles and vice versa.
   It is ignored if neither unit includes a measurement in moles.  In such cases
   the mole-based unit must have a single mole unit in the numerator and the
   mass-based unit must have a single mass unit in the numerator.  
* _@returns_ a hash with six elements:
   * 'status' the will be: 'succeeded' if the conversion was successfully
      calculated; 'failed' if the conversion could not be made, e.g., if
      the units are not commensurable; or 'error' if an error occurred;
   * 'toVal' the numeric value indicating the conversion amount, or null
      if the conversion failed (e.g., the units are not commensurable);
   * 'msg' is an array of messages, if the string is invalid or an
      error occurred, indicating the problem, or an explanation of a
      substitution such as the substitution of 'G' for 'Gauss', or
      an empty array if no messages were generated;
   * 'suggestions' if suggestions were requested and found, this is a hash
        that contains at most two elements:
     * 'from' which, if the fromUnitCode input parameter or one or more of
         its components could not be found, is an array one or more hash
         objects.  Each hash contains three elements:
       * 'msg' which is a message indicating what unit expression the
           suggestions are for;
       * 'invalidUnit' which is the unit expression the suggestions are
           for; and
       * 'units' which is an array of data for each suggested unit found.
           Each array will contain the unit code, the unit name and the
           unit guidance (if any).
         If no suggestions were found for the fromUnitCode this element
         will not be included.
     * 'to' which, if the "to" unit expression or one or more of its
         components could not be found, is an array one or more hash
         objects.  Each hash contains three elements:
       * 'msg' which is a message indicating what part of the toUnitCode
           input parameter the suggestions are for;
       * 'invalidUnit' which is the unit expression the suggestions
           are for; and
       * 'units' which is an array of data for each suggested unit found.
           Each array will contain the unit code, the unit name and the
           unit guidance (if any).
         If no suggestions were found for the toUnitCode this element will
         not be included.
       No 'suggestions' element will be included in the returned hash
       object if none were found, whether or not they were requested.
   * 'fromUnit' the unit object for the fromUnitCode passed in; returned
      in case it's needed for additional data from the object; and
   * 'toUnit' the unit object for the toUnitCode passed in; returned
      in case it's needed for additional data from the object.

For example, to convert 27 U.S. fathoms to U.S. inches (assuming you have 
created a utils object as described above): 
 
    var returnObj = utils.convertUnitTo('[fth_us]', 27, '[in_us]');
    if (returnObj['status'] === 'succeeded')
      /* the conversion was successful.
         returnObj['toVal'] will contain the conversion result
           (~1943.9999999999998 - number, not formatted string)
         returnObj['msg'] will be null
         returnObj['fromUnit'] will contain the unit object for [fth_us]
         returnObj['toUnit'] will contain the unit object for [in_us]
       */
    else if (returnObj['status'] === 'failed')
      /* the conversion could not be made.
         returnObj['toVal'] will be null
         returnObj['msg'] will contain a message describing the failure
         returnObj['fromUnit'] will be null
         returnObj['toUnit'] will be null
       */
    else (returnObj['status'] === 'error)
      /* the conversion encountered an error
         returnObj['toVal'] will be null
         returnObj['msg'] will contain a message describing the error
         returnObj['fromUnit'] will be null
         returnObj['toUnit'] will be null
       */
      
If you want to know what unit types a particular unit can be converted to, the 
checkSynonyms function will provide a list of commensurable units for a specified
unit expression.

<a id="checkSynonyms"></a>
#### checkSynonyms(theSyn)

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

(assuming you have created a utils object as described above):

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

<a id="convertToBaseUnits"></a>
#### convertToBaseUnits(fromUnit, fromVal)

Converts the given unit string into its base units, their exponents, and
a magnitude, and returns that data.

**Parameters**:
1) fromUnit: the unit string to be converted to base units information
2) fromVal: the number of "from" units to be converted

**Returns**:  an object with the properties:
* status: indicates whether the result succeeded.  The value will be one of:
  * 'succeeded':  the conversion was successfully calculated (which can be
     true even if it was already in base units);
  * 'invalid':  fromUnit is not a valid UCUM code;
  * 'failed':  the conversion could not be made (e.g., if it is an "arbitrary" unit);
  * 'error':  if an error occurred (an input or programming error)
* msg: an array of messages (possibly empty), if the string is invalid or
       an error occurred, indicating the problem, or a suggestion of a
       substitution such as the substitution of 'G' for 'Gauss', or
       an empty array if no messages were generated.  There can also be a
       message that is just informational or warning.
* magnitude: the new value when fromVal units of fromUnits is expressed in the base units.
* fromUnitIsSpecial: whether the input unit fromUnit is a "special unit"
        as defined in UCUM.  This means there is some function applied to convert
        between fromUnit and the base units, so the returned magnitude is likely not
        useful as a scale factor for other conversions (i.e., it only has validity
        and usefulness for the input values that produced it).
* unitToExp: a map of base units in fromUnit to their exponent


### Download the GitHub repository

The code available here on GitHub includes functions and scripts to perform
additional functions, mainly to convert ucum data from various formats to 
the data used by our code as well as the code that supports the demo page.
Click on the green "Code" button above to download the repository.

    
### Building the code and data
If you wish to modify the code, the build process is simply:

    npm run build

If you wish to modify or update either of the source data files (ucum-essence.xml or ucum.csv), see impexp/README.md for instructions on build steps for data changes.
