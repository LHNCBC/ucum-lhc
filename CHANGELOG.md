# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

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