# Agent Instructions

## Environment Setup

Before running any terminal commands, source the environment file:

```bash
source bashrc.ucum-lhc
```

This sets up the correct Node.js version, PATH, and other required environment variables for the project.

Treat `rg` as unavailable in this project environment. Use portable alternatives such as `grep`/`find` unless availability has been explicitly verified.

## Architecture

The library source is in `source/` (ES6 modules) and is transpiled to CommonJS
in `source-cjs/` (see Build Artifacts). Source files freely mix ES6
`import`/`export` with CommonJS `require()`; Babel handles both.

- `source/ucumPkg.js` is the package/browser entry point; it exports `Ucum`
  (global config/constants from `source/config.js`), `UcumLhcUtils`, and
  `UnitTables`.
- `source/ucumLhcUtils.js` (`UcumLhcUtils`) is the public API facade:
  `validateUnitString`, `convertUnitTo`, `checkSynonyms`, `convertToBaseUnits`,
  and `commensurablesList` (documented in `README.md`).
- Core classes are singletons: obtain them via `getInstance()` (`UcumLhcUtils`,
  `UnitTables`, `UnitString`, `PrefixTables`), never `new`. Their constructor
  redefines itself to throw after the first instantiation.
- Unit data must be loaded before use. `ucumJsonDefs.loadJsonDefs()` reads the
  packed `data/ucumDefs.min.json`, unpacks it (`source/jsonArrayPack.js`), and
  populates the `PrefixTables`/`UnitTables` singletons. `UcumLhcUtils`'s
  constructor does this automatically; standalone scripts and tests (e.g.,
  `bin/printUnits.js`, `bin/printSynonyms.js`) call it explicitly.

## Testing

Before running tests, if any files in `source/` have been modified and you are not running the tests via "npm run test", first run:

```bash
npm run build
```

This regenerates the built CommonJS files under `source-cjs/` that the test suite uses.  If you are running "npm run test", then "npm run build" is not necessary because that test task also runs the build.

Tests use Mocha (`grunt-mocha-test`) and live in `test/*.spec.js`. They
`require()` the built modules from `source-cjs/` (not `source/`), which is why a
build must run first. Shared helpers are in `test/ucumTestUtils.js`, and the
UCUM "Functional Tests" run from `test/UcumFunctionalTests.xml`. After building,
run a single spec file with:

```bash
npx mocha test/testUnitString.spec.js
```

## Build Artifacts

Files under `source-cjs/` are generated build artifacts created from `source/`.
Do not edit files in `source-cjs/` directly.
Make code changes in `source/`, then run `npm run build` to regenerate `source-cjs/`.

`npm run build` runs Grunt (`Gruntfile.js`) and produces two sets of artifacts:
the CommonJS modules in `source-cjs/` (via Babel) and the browser UMD bundles in
`browser-dist/` (`ucum-lhc.js` and `ucum-lhc.min.js`, via webpack). Neither
directory should be edited by hand. Granular tasks are `grunt build:npm` and
`grunt build:browser`.

The unit-definition data files `data/ucumDefs.json` and the packed
`data/ucumDefs.min.json` (the file loaded at runtime) are also generated
artifacts — do not hand-edit them. They are built from `data/ucum-essence.xml`
(official UCUM units) plus `data/ucum.csv` (LOINC synonyms/extra units). To
regenerate, run `npm run build`, then:

```bash
cd impexp && node updateDataBuild   # add --skip-ucum-csv to skip the CSV step
```

See `impexp/README.md` for details.
