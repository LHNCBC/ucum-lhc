# Agent Instructions

## Environment Setup

Before running any terminal commands, source the environment file:

```bash
source bashrc.ucum-lhc
```

This sets up the correct Node.js version, PATH, and other required environment variables for the project.

Treat `rg` as unavailable in this project environment. Use portable alternatives such as `grep`/`find` unless availability has been explicitly verified.

## Testing

Before running tests, if any files in `source/` have been modified and you are not running the tests via "npm run test", first run:

```bash
npm run build
```

This regenerates the built CommonJS files under `source-cjs/` that the test suite uses.  If you are running "npm run test", then "npm run build" is not necessary because that test task also runs the build.

## Build Artifacts

Files under `source-cjs/` are generated build artifacts created from `source/`.
Do not edit files in `source-cjs/` directly.
Make code changes in `source/`, then run `npm run build` to regenerate `source-cjs/`.
