# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [4.1.3] 2020-04-20
### Fixed
- Fixed to work in IE 11.

## [4.1.2] 2020-04-03
### Changes
- Updated dependencies to get patches for security vulnerabilities.

## [4.1.1] 2020-03-09
### Changes
- removed unnecessary index.html

## [4.1.0] 2020-03-05
### Changes
- the sizes of ucumDefs.json and related files reduced

## [4.0.2] 2020-03-02
### Fixed
- ucumDefs.json generation: baseFactor_ and magnitude_ should be numbers
### Added
- added impexp/README.md about generating ucumDef.json

## [4.0.1] 2020-02-14
### Fixed
- 4.0.0 was just published today, and is missing a data file in the npm package.
  This version fixes that.

## [4.0.0] 2020-01-27
### Changed
- This main file of the npm package is now a file that uses CommonJS modules
  (i.e., NodeJs-compatible) instead of a browserified bundle.  The problem with
  serving a browserfied bundle via npm was that if you pulled it in and then
  tried to browserify it along with application code, an exception would be thrown
  because browserify has already run on part of the code.  The change should be
  transparent to the user of the package, but just in case there is some
  unforeseen consequence, I am incrementing the major version.   If your
  application needs the browserified version, that is still available in the
  browser-dist directory.

## [3.0.1] 2020-01-07
### Fixed
- Corrected processing so that strings like "1e2" are no longer considered valid
  units.

## [3.0.0] - 2019-09-26
### Fixed
- Updated dependencies to get patches for security vulnerabilities.
- Minor corrections to the UCUM data (mostly with regard to extra properties we
  added like "guidance").
### Changed
- As result of the dependency update, the build process needed to be revised,
  and the individual transpiled files were removed.  The package.json "main"
  file has changed.  This is not expected to cause a problem for normal usage of
  the package (relying on the "main" file), and the API has not changed, but due
  to the upheaval, a semver-major change seemed warranted.

## [2.6.4] - 2019-06-05
### Fixed
- Updated dependencies to get patches for security vulnerabilities.

## [2.6.3] - 2019-04-29
### Fixed
- Demo page: The validation message on the Validator tab was displayed
  vertically when the unit was valid.

## [2.6.2] - 2019-03-29
### Fixed
- Demo page changes:  fixed processing flow problem that allowed an attempt to
convert an invalid unit;  tweaked flow on initial display of converter tab;
added meta data to the page to increase visibility to search engines.

## [2.6.1] - 2019-03-22
### Added
- Added mass<-> moles conversion to the UCUM Demo page, with a request to the
user to supply a molecular weight when such a conversion is requested.

## [2.6.0] - 2019-03-08
### Added
- Added capability to existing convertUnitTo library function to convert mass
to moles expression.

## [2.5.5] - 2019-02-28
### Fixed
- Fixed mismatches with version numbers as well as problem with library
distribution on 2.5.2.

## [2.5.2] - 2019-02-05
### Fixed
- Fixed problem with 2.5.0 where not all files were being included in the
source-es5/ucumPkg.js package.

## [2.5.0] - 2019-01-07
### Changed
- The changes made by browserify have been removed from the ucum-lhc package
available to node.js users, necessitating the creation of separate distributions.
The distribution of the library code starts at the source-es5/ucumPkg.js file.
The distribution in the browser-dist directory contains server side code that
includes browser related code. The distribution in the demo-dist directory
continues to contain the code related to the UCUM-LHC demo page.

## [2.4.4] - 2018-12-13
### Fixed
- fixed bug where validation of a unit string that contains an operator, such
as B[10.nV] is a valid string and validates correctly as a single valid UCUM
code, but did not validate correctly when preceded by a prefix, e.g., dB[10.nV].

## [2.4.3] - 2018-11-06
### Fixed
- fixed bug where validation of a unit string terminated with an operator
returned an incorrect response.  It correctly flagged the string as an
invalid unit expression but included a coding error message that should
not have been included.

## [2.4.2] - 2018-11-05
### Fixed
- blocked division and multiplication operations as well as conversion
operations on arbitrary units

## [2.4.1] - 2018-10-25
### Added
- Added capability to open directly to converter page using url
https://ucum.nlm.nih.gov/ucum-lhc/demo.html#converter

## [2.4.0] - 2018-10-10
### Changed
- redesigned validator tab on Demo page to move messages closer to the
unit expression input field
- redesigned converter tab on Demo page to resemble an equation for the
conversion

## [2.3.4] - 2018-08-15
### Fixed
- Updated npm packages growl and semver to avoid critical security
vulnerabilities flagged by GitHub

## [2.3.3] - 2018-08-15
### Fixed
- Updated conversion code to properly handle conversion of unitless
measurements, such as moles.
- Updated code to make text for combined units, e.g., 2.(mmol/L), more
explicit in regards to evaluation order.

## [2.3.2] - 2018-06-27
### Fixed
- fixed appearance of the demo page converter tab so that when the page is
widened in the browser the text all anchors on the left.  One portion
of the text was anchored to the right, which made a widened version look
wrong.

## [2.3.1] - 2018-06-13
### Fixed
- modifications to ensure that plain numbers, e.g., 7, are reported correctly.
### Added
- added unit name to demo output messages, where available, to make sure user
knows what unit is being reported as valid.

## [2.3.0] - 2018-05-23
### Added
- added information related to version number of the ucum-essence.xml
file used as well as changes made to it

## [2.2.1] - 2018-05-22
### Changed
- reformatted display of suggestions lists for the demo site to use a bulleted
list of suggestions rather than a plain text list.
## Fixed
- fixed a bug that prevented suggestion lists from being created for more than
one unit.

## [2.2.0] - 2018-05-02
### Changed
- added list selection listener to unit expression field on validation
tab of the demo page
### Fixed
- fixed autofill problem on Edge browser.

## [2.3.4] - 2018-05-?
- fixed positioning of text on converter tab of the demo page so that
it is consistent in how it lines up when the page is widened.

## [2.1.12] - 2018-04-26
### Changed
- changed unit name (not code) creation for constructed units to enclose
  the name in square brackets and use an asterisk (*) for multiplication
  instead of a period.

## [2.1.11] - 2018-04-23
### Fixed
- fix for overwritten units during data update process

## [2.1.10] - 2018-04-12
### Changed
- updates to register bower package

## [2.1.9] - 2018-04-03
### Changed
- updates to third party and UCUM LHC license information

## [2.1.8] - 2018-03-28
### Fixed
- fixes to csv file validator

## [2.1.7] - 2018-03-12
### Changed
- cosmetic updates to overview and demo pages related to banner, titles

## [2.1.6] - 2018-03-07
### Changed
- created npm package

## [2.1.5] - 2018-02-21
### Changed
- shifts module tests to use distribution package
- moves ucumFileValidator to demo directory
- updates README

## [2.1.4] - 2018-02-16
### Changed
- removes guidance text for constructed units, e.g., units that are created
on the fly, as they are specified for validation or conversion.   For example,
m\[H2O\]/cm is constructed from m\[H2O\] (meter of water column) divided by
cm (centimeter).  No guidance data is provided for this constructed unit.

## [2.1.3] - 2018-02-15
### Changed
- added disclaimer concerning conversion results to demo page convert
tab and to README.md page

## [2.1.2] - 2018-02-15
### Fixed
- completed bug fix for zero and negative number of units for conversions.

## [2.1.1] - 2018-01-25
### Changed
- updated link at the top of the demo page to refer back to the
overview page - and the link at the top of the overview page to
refer back to itself.
- added text to the demo file validation to clarify that only
units are validated.  Prefixes on their own are not validated.
- updated the ucumDefs.json with version 2.1 (November 21, 2017) of the
ucum-essence.xml file from unitsofmeasure.org
### Fixed
- started fixes on a bug where a zero or negative number of units was considered an error.


## [2.1.0] - 2017-12-21
### Changed
- Upgraded the validation processing for conversion request on the
demo page; validation is now performed on the fly as each element
is entered.  This is a change only to the demo page.

## [2.0.0] - 2017-12-01
### Added
- Added ability to get suggestions for invalid unit expressions.

## [1.2.0] - 2017-10-06
### Fixed
- Enhanced unit string validation to accommodate/correct:
  - missing multiplication operators, e.g., **2mg** instead of **2.mg**;
  - unit name specified instead of ucum code, e.g., **day** instead of **d**;
  - misplaced annotations, e.g., **{creatine}**mol** instead of mol**{creatine}**;
  - missing square brackets, e.g., **in_i** instead of **[in_i]**; and
  - braces instead of brackets, e.g., **{degF}** instead of **[degF]**.

## [1.1.2] - 2017-08-07
### Changed
- Updated unit creation process to include updates to case-insensitve codes
and print symbol values when creating a unit from multiple units.
- Updated treatment of prefixes for special units that use conversion
functions to record prefix values in the separate conversion prefix field.

## [1.1.1] - 2017-07-13
### Changed
- Data file has been updated with enhanced synonyms and is also now written
in a a readable JSON format.

## [1.1.0] - 2017-07-06
### Changed
- Autocompleters no longer return multiple-unit strings, e.g., kg/cm.
Multiple-unit strings are still (very) valid, but the autocompleters just
return one list single-unit strings at a time.
- The commensurables list on the conversion tab's "convert to" field has been
changed to just use the same autocompleter as used for the "convert from" field.
The list will now include units that cannot be converted.

## [1.0.2] - 2017-06-23
### Fixed
- Allowed conversion of units with no dimensions
- added testing for the Unit.convertFrom and Unit.convertTo functions

## [1.0.1] - 2017-05-30
### Added
- This change log.
### Changed
- Streamlined divString function in Unit.js
- Moved parenthesized unit string processing to separate function
in UnitString.js (processParens).
- Added testing for the processParens function in testUnitString.spec.js
### Fixed
- Updated UcumFileValidator.js with previously changed function name
(validUnitString -> validateUnitString in UcumLhcUtils.js).
