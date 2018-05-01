# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [2.2.1] - 2018-05-02
- added list selection listener to unit expression field on validation
tab of the demo page; fixed autofill problem on Edge browser.

## [2.1.12] - 2018-04-26
- changed unit name (not code) creation for constructed units to enclose
  the name in square brackets and use an asterisk (*) for multiplication
  instead of a period.
  
## [2.1.11] - 2018-04-23
- fix for overwritten units during data update process

## [2.1.10] - 2018-04-12
- updates to register bower package

## [2.1.9] - 2018-04-03
- updates to third party and UCUM LHC license information

## [2.1.8] - 2018-03-28
- fixes to csv file validator

## [2.1.7] - 2018-03-12
- cosmetic updates to overview and demo pages related to banner, titles

## [2.1.6] - 2018-03-07
- created npm package

## [2.1.5] - 2018-02-21
- shifts module tests to use distribution package
- moves ucumFileValidator to demo directory
- updates README

## [2.1.4] - 2018-02-16
- removes guidance text for constructed units, e.g., units that are created
on the fly, as they are specified for validation or conversion.   For example,
m\[H2O\]/cm is constructed from m\[H2O\] (meter of water column) divided by
cm (centimeter).  No guidance data is provided for this constructed unit.

## [2.1.3] - 2018-02-15
- added disclaimer concerning conversion results to demo page convert 
tab and to README.md page

## [2.1.2] - 2018-02-15
- completed bug fix for zero and negative number of units for conversions.

## [2.1.1] - 2018-01-25
- updated link at the top of the demo page to refer back to the
overview page - and the link at the top of the overview page to
refer back to itself.
- added text to the demo file validation to clarify that only
units are validated.  Prefixes on their own are not validated.
- updated the ucumDefs.json with version 2.1 (November 21, 2017) of the
ucum-essence.xml file from unitsofmeasure.org
- started fixes on a bug where a zero or negative number of units was considered an error.


## [2.1.0] - 2017-12-21
- Upgraded the validation processing for conversion request on the
demo page; validation is now performed on the fly as each element
is entered.  This is a change only to the demo page.

## [2.0.0] - 2017-12-01
- Added ability to get suggestions for invalid unit expressions.

## [1.2.0] - 2017-10-06
- Enhanced unit string validation to accommodate/correct:
  - missing multiplication operators, e.g., **2mg** instead of **2.mg**;
  - unit name specified instead of ucum code, e.g., **day** instead of **d**;
  - misplaced annotations, e.g., **{creatine}**mol** instead of mol**{creatine}**;
  - missing square brackets, e.g., **in_i** instead of **[in_i]**; and
  - braces instead of brackets, e.g., **{degF}** instead of **[degF]**. 

## [1.1.2] - 2017-08-07
- Updated unit creation process to include updates to case-insensitve codes 
and print symbol values when creating a unit from multiple units.
- Updated treatment of prefixes for special units that use conversion 
functions to record prefix values in the separate conversion prefix field.


## [1.1.1] - 2017-07-13
- Data file has been updated with enhanced synonyms and is also now written 
in a a readable JSON format.


## [1.1.0] - 2017-07-06
## Changed
- Autocompleters no longer return multiple-unit strings, e.g., kg/cm.  
Multiple-unit strings are still (very) valid, but the autocompleters just 
return one list single-unit strings at a time.  
- The commensurables list on the conversion tab's "convert to" field has been 
changed to just use the same autocompleter as used for the "convert from" field. 
The list will now include units that cannot be converted.


## [1.0.2] - 2017-06-23
## Fixed
- Allowed conversion of units with no dimensions
- added testing for the Unit.convertFrom and Unit.convertTo functions


## [1.0.1] - 2017-05-30
## Added
- This change log.

### Changed
- Streamlined divString function in Unit.js
- Moved parenthesized unit string processing to separate function
in UnitString.js (processParens).
- Added testing for the processParens function in testUnitString.spec.js

### Fixed
- Updated UcumFileValidator.js with previously changed function name 
(validUnitString -> validateUnitString in UcumLhcUtils.js).