# AGENTS.md

Guidance for AI coding agents working in **ucum-demo**: the static demo website
(Validator + Converter) for the [`@lhncbc/ucum-lhc`](https://github.com/lhncbc/ucum-lhc)
UCUM units library. It is published via GitHub Pages from the `docs/` directory
(`gh-pages` branch).

## Environment setup

- Node version is pinned in `bashrc.ucum-lhc` (`NODE_DIR=node-v22.11.0`, expected at `~/node-v22.11.0`).
  Run `source bashrc.ucum-lhc` first. This also adds `node_modules/.bin` to `PATH`, so you can run
  `grunt` and `cypress` directly.
- `npm ci` (or `npm install`) to install dependencies.

## Build & test

- `npm run build` → `grunt build` → `build:demo` (see `Gruntfile.js`), in order:
  1. `clean:demo`: deletes `docs/*.js`, `docs/*.css`, `docs/*.js.map`
  2. `ssi`: flattens `<!--#include file="..." -->` in `demo/ssi-templates/pages/{index,demo,UcumEssenceModifications}.html` → `docs/*.html`
  3. `browserify:demo` + babelify (`@babel/preset-env`, `global: true` so `node_modules` such as `csv-parse` get transpiled too): `demo/main.js` → `docs/ucum-demo.js`, with UMD global **`demoPkg`**
  4. `extract_sourcemap:demo`, `cssmin` (`demo/stylesheets/ucumDemo.css` → `docs/ucumDemo.min.css`; Bootstrap CSS → `docs/bootstrap.min.css`)
  5. `uglify:demo` (→ `docs/ucum-demo.min.js` + map), `uglify:bootstrap` (→ `docs/bootstrap.bundle.min.js`)
- `npm test` → `cypress run`. Tests load the **built** pages (`cy.visit('docs/demo.html')`), so **always run
  `npm run build` before testing**. Config: `cypress.config.js` (all Cypress folders live under `demo-test/cypress/`, `testIsolation: false`).
- The tests call live external services (the autocompleter's clinical tables search API, CDNs), so they need network access.
- `demo-test/ucumDemo-conf.js` is a leftover Protractor/Jasmine config. It is unused, so don't add tests there.

## Source vs. generated files

- **Edit only** `demo/` (JS, CSS, SSI templates). Never hand-edit `docs/*.html`, `docs/*.js`, or `docs/*.css`.
  Regenerate them with `npm run build`.
- `docs/ucum-demo.js*` is git-ignored. `docs/ucum-demo.min.js(.map)`, the generated HTML, and the CSS **are committed**
  because GitHub Pages serves them. Commit rebuilt `docs/` output along with source changes.
- `docs/assets/` holds static assets. The clean step does not touch it.

## Architecture

- `demo/main.js`: browserify entry. It exports `UcumDemoConfig`, `UcumDemo`, and `UcumFileValidator`, and creates the `UcumDemo` instance.
- `demo/ucumDemo.js`: all page logic (`UcumDemo` class). It wraps `UcumLhcUtils` from `@lhncbc/ucum-lhc`
  (`validateUnitString`, `convertUnitTo`, `commensurablesList`) and sets up `Def.Autocompleter.Search` widgets
  (autocomplete-lhc, loaded from the CDN in `demo.html`, not from npm) for `#valString`, `#convertFrom`, and `#convertTo`.
- `demo/ucumFileValidator.js`: CSV batch validation. The pipeline is `FileReader` → `string-to-stream` → `csv-parse` →
  `stream-transform` → `csv-stringify` → Blob, saved through `file-saver` as `UnitStringValidations.csv`.
- `demo/demoConfig.js`: demo constants, including autocompleter categories/display fields, `baseSearchURL_`
  (`https://clin-table-search.lhc.nlm.nih.gov/api/ucum/v3/...`), and precision defaults.
- `demo/ssi-templates/`: shared fragments (`header.shtml`, `footer.shtml`, `common-head-tags.shtml`,
  `UcumExpressionHints.shtml`, `UcumEssenceVersion.shtml`) included into `pages/*.html`.

## Conventions

- **Singletons**: `UcumDemo` and `UcumFileValidator` replace their constructor so that it throws after the first
  instantiation. Always use `X.getInstance()`. Follow the same pattern for any new top-level class.
- **HTML ↔ JS wiring** uses inline handlers on the global bundle, e.g.
  `onclick="demoPkg.UcumDemo.getInstance().showConvertTab()"`. If you add a public method that the page calls,
  invoke it the same way.
- Before you call into ucum-lhc, set the message mode: `this.utils_.useHTMLInMessages(true)` and
  `useBraceMsgForEachString(true)` for UI output, or `false` for the CSV output (see `columnSpecified()`).
- Escape user input with `escape-html` before it goes into `innerHTML`. Use `_multipleReplace(msg, raw, escaped)`
  to sanitize messages returned by the library.
- Accessibility: announce dynamic changes through `_announce(msg)` (the `#liveRegion` ARIA live region). Keep the
  `aria-label`s and the Space-key handlers for `tabindex` links in `demo.html`.
- Valid and invalid states are shown by toggling the CSS classes `valid` and `invalid`.
- CDN assets (Bootstrap 5.3.3, jQuery, autocomplete-lhc 18.1.1) use SRI `integrity` hashes. Bootstrap falls back to
  local copies in `docs/` (`onerror` for the CSS, a `window.bootstrap` check for the JS). If you bump a CDN version,
  update the hash and the local fallback (the `bootstrap` devDependency) too.
- ES6 syntax plus CommonJS `require` for imports, transpiled for IE 11 (`.browserslistrc`).

## Maintenance workflow

- The usual change is a ucum-lhc bump. Update `@lhncbc/ucum-lhc` in `package.json`, run `npm install` and `npm audit fix`,
  then `npm run build` and `npm test`. Add a dated entry at the top of `CHANGELOG.md`
  (format: `## YYYY-MM-DD` / `### Updated|Fixed`, e.g. "ucum-lhc was updated to 7.1.9.").
- UCUM site links must use `ucum.org`, not `unitsofmeasure.org`, which no longer resolves.

