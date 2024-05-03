# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [demo-1.0.1] 2024-05-03
### Fixed
- An issue where the error message disappears the second time you validate
  an invalid code with some variation like a leading "/".

## [demo-1.0.0] 2023-06-01
### Fixed
- Updated ucum-lhc to 5.0.0 to get its fixes.
- Changed the "X (X-name) is a valid unit" message to not include the name if
  the name the same as the code, which it now can be (e.g., for '{z}').
