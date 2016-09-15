/**
 * This runs the code to test use of the built module available as
 * a bower task.  It tests the unit expression validation and conversion
 * functions.
 *
 * Babel is used to translate this to ECMA 5 code, i.e.,
 * babel testmodule.js --out-file testmodule5.js
 *
 * Run from the command line with node testmodule.js
 */

var Pkg = require("../dist/ucum-lhc.js");

var utils = Pkg.UcumLhcUtils.getInstance() ;

// Test unit expression validations
var returnArray = utils.validUnitString('m2/g4');
if (returnArray[0]) {
  console.log(`\nreturnArray[0] from m2/g4 validation:\n unit with code = ${returnArray[0].csCode_}`);
}
else {
  console.log(`\nreturnArray[0] from m2/g4 validation is null`);
}
console.log(`\nreturnArray[1] from m2/g4 validation:\n ${returnArray[1]}`);

returnArray = utils.validUnitString('m2/acr');
if (returnArray[0]) {
  console.log(`\nreturnArray[0] from m2/acr validation:\n ${returnArray[0].csCode_}`);
}
else {
  console.log(`\nreturnArray[0] from m2/acr validation is null`);
}
console.log(`\nreturnArray[1] from m2/acr validation:\n ${returnArray[1]}`);

// Test unit conversions
var returnMsg = utils.convertUnitTo('[fth_us]', 27, '[in_us]', 0);
console.log(`\nreturnMsg from conversion of 27 fathoms to inches:\n ${returnMsg}`);

returnMsg = utils.convertUnitTo('[fth_us]', 27, 'bar', 0);
console.log(`\nreturnMsg from conversion of 27 fathoms to bar units:\n ${returnMsg}`);

returnMsg = utils.convertUnitTo('[fth_us]', 27, 'acr', 0);
console.log(`\nreturnMsg from conversion of 27 fathoms to acr units:\n ${returnMsg}`);


