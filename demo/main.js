

/**
 * This is the code entry point for the demo web page.  It coordinates the
 * loading of the prefix and unit objects from the json definitions file and
 * populating the autocompleter unit lists.
 */


export var UcumDemoConfig = require("./demoConfig.js").UcumDemoConfig;
export var UcumDemo = require("./ucumDemo.js").UcumDemo;
export var UcumFileValidator = require("./ucumFileValidator.js").UcumFileValidator;
var demo = UcumDemo.getInstance();

