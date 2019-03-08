"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class handles opening, reading and parsing the XML file of ucum
 * definitions (prefixes, base units, and unit atoms).
 *
 * @author Lee Mericle
 *
 */
var Prefix = require("./prefix.js").Prefix;
var PrefixTables = require("./prefixTables.js").PrefixTables;
var Unit = require("./unit.js").Unit;
var UnitString = require("./unitString.js").UnitString;
var UnitTables = require('./unitTables.js').UnitTables;
var jsonfile = require('jsonfile');
var fs = require('fs');

var xmldoc = require('xmldoc');
var fs = require('fs');

var essenceFile_ = '../data/ucum-essence.xml';

/**
 * The full xml document
 * @type XmlDocument
 */
var xmlInput_ = null;

var UcumXmlDocument = exports.UcumXmlDocument = function () {

  /**
   * Constructor.  This reads the XML document (essenceFile_) into the
   * xmldoc object, which is an object used by the xmldoc class available
   * from GitHub - https://github.com/nfarina/xmldoc.  The object provides
   * methods to read the file and access its contents.
   *
   */
  function UcumXmlDocument() {
    _classCallCheck(this, UcumXmlDocument);

    // read the XML file and create an xmlDocument object from it.
    var data = fs.readFileSync(essenceFile_);
    xmlInput_ = new xmldoc.XmlDocument(data);

    // Make this a singleton.  See UnitTables constructor for details.

    var holdThis = UcumXmlDocument.prototype;
    UcumXmlDocument = function UcumXmlDocument() {
      throw new Error('UcumXmlDocument is a Singleton.  ' + 'Use UcumXmlDocument.getInstance() instead.');
    };
    if (exports) exports.UcumXmlDocument = UcumXmlDocument;
    UcumXmlDocument.prototype = holdThis;

    var self = this;
    UcumXmlDocument.getInstance = function () {
      return self;
    };
  }

  /**
   * This method controls parsing of the XML into objects used by this
   * program.  It uses separate methods to parse the prefixes, the
   * base units, and the units.
   *
   * @returns nothing
   */


  _createClass(UcumXmlDocument, [{
    key: "parseXml",
    value: function parseXml() {

      this.parsePrefixes(xmlInput_.childrenNamed("prefix"));
      this.parseBaseUnits(xmlInput_.childrenNamed("base-unit"));
      this.parseUnitStrings(xmlInput_.childrenNamed("unit"));

      // Create the json file of the prefix and unit definitions
      this.writeJsonFile();
      this.writeVersionText();
    }

    /**
     * Creates prefix objects from the xml prefix nodes passed in and gets
     * them added to the prefix tables.
     *
     * @params prefixes the array of prefix nodes from the xml file, in the
     *  order in which the nodes are defined in that file.
     *
     * @returns nothing
     */

  }, {
    key: "parsePrefixes",
    value: function parsePrefixes(prefixes) {

      var plen = prefixes.length;

      for (var p = 0; p < plen; p++) {
        var curPfx = prefixes[p];
        var attrs = {};

        attrs["code_"] = curPfx.attr.Code;
        attrs["ciCode_"] = curPfx.attr.CODE;
        attrs["name_"] = curPfx.childNamed('name').val;
        attrs["printSymbol_"] = curPfx.childNamed('printSymbol').val;

        // Set the prefix value.  If there is a <sup> element in the
        // value node, then this is a base 10 based prefix (10 to the x power).
        // Set the value to 10 taken to the indicated power.
        // Otherwise this is not 10 based and the value contains the
        // actual value for the prefix.
        var pValNode = curPfx.childNamed('value');
        attrs["value_"] = null;
        attrs["exp_"] = pValNode.childNamed('sup');
        if (attrs["exp_"] != null) {
          attrs["exp_"] = attrs["exp_"].val;
          attrs["value_"] = Math.pow(10, attrs["exp_"]);
        } else {
          attrs["value_"] = pValNode.val;
          attrs["exp_"] = null;
        }

        // Make sure the prefix has not already been created.  If it hasn't,
        // create the prefix object and then add it to the prefix tables.
        var ptab = PrefixTables.getInstance();
        if (ptab.isDefined(attrs["code_"])) {
          throw new Error('Prefix constructor called for prefix already ' + ("defined; code = " + attrs["code_"]));
        } else {
          var newPref = new Prefix(attrs);
          ptab.add(newPref);
        }
      }
    } // end parsePrefixes


    /**
     * Creates base unit objects from the xml nodes passed in and adds
     * them to the unit tables.
     *
     * @params unitNodes the array of base unit nodes from the xml file, in the
     *  order in which the nodes are defined in that file.  (Order is important
     *  for all units).
     *
     * @returns nothing
     */

  }, {
    key: "parseBaseUnits",
    value: function parseBaseUnits(unitNodes) {
      var blen = unitNodes.length;
      var utab = UnitTables.getInstance();
      for (var b = 0; b < blen; b++) {
        var curBUnit = unitNodes[b];
        var attrs = {};
        attrs['isBase_'] = true;
        attrs['name_'] = curBUnit.childNamed('name').val;
        attrs['csCode_'] = curBUnit.attr.Code;
        attrs['ciCode_'] = curBUnit.attr.CODE;
        attrs['property_'] = curBUnit.childNamed('property').val;
        attrs['variable_'] = curBUnit.attr.dim;
        attrs['printSymbol_'] = curBUnit.childNamed('printSymbol').val;
        attrs['dim_'] = b;
        attrs['source_'] = 'UCUM';
        var newUnit = new Unit(attrs);
        utab.addUnit(newUnit);
      }
    } // end parseBaseUnits


    /**
     * Creates non-base unit objects from the xml nodes passed in and adds
     * them to the unit tables.
     *
     * @params unitStrings the array of non-base unit nodes from the xml file, in the
     *  order in which the nodes are defined in that file.  (Order is important
     *  for all units).
     *
     * @returns nothing
     */

  }, {
    key: "parseUnitStrings",
    value: function parseUnitStrings(unitStrings) {

      var utab = UnitTables.getInstance();
      var uStrParser = UnitString.getInstance();
      var stopNow = false;
      var alen = unitStrings.length;
      for (var a = 0; a < alen && !stopNow; a++) {
        var haveUnit = true;
        var curUA = unitStrings[a];
        var attrs = {};
        attrs['isBase_'] = false;
        attrs['source_'] = 'UCUM';
        attrs['name_'] = curUA.childNamed('name').val;
        attrs['csCode_'] = curUA.attr.Code;
        if (curUA.attr.CODE) attrs['ciCode_'] = curUA.attr.CODE;else attrs['ciCode_'] = curUA.attr.Code.toUpperCase();
        attrs['property_'] = curUA.childNamed('property').val;
        if (curUA.childNamed('printSymbol')) {
          var sym = curUA.childNamed('printSymbol');
          var symVal = sym.val;
          symVal = symVal.replace(/\n/g, "");
          symVal = symVal.trim();
          var symI = sym.childNamed('i');
          if (symI)
            //symVal = '<i>' + symI.val + '</>';
            symVal = symI.toString({ compressed: true });
          var sub = sym.childNamed('sub');
          var sup = sym.childNamed('sup');
          if (sub) symVal += sub.toString({ compressed: true });
          if (sup) symVal += sup.toString({ compressed: true });

          attrs['printSymbol_'] = symVal;
        }
        if (curUA.attr.isMetric === "yes") attrs['isMetric_'] = true;else attrs['isMetric_'] = false;
        if (curUA.attr.isArbitrary) attrs['isArbitrary_'] = true;else attrs['isArbitrary_'] = false;
        if (curUA.attr.class) {
          attrs['class_'] = curUA.attr.class;
        }
        var valNode = curUA.childNamed('value');
        attrs['isMole_'] = curUA.attr.Code == 'mol';

        // Process special units
        if (curUA.attr.isSpecial) {
          attrs['isSpecial_'] = curUA.attr.isSpecial === "yes";
          var funcNode = valNode.childNamed('function');
          attrs['cnv_'] = funcNode.attr.name;
          attrs['csUnitString_'] = funcNode.attr.Unit;
          if (attrs['csUnitString_'] === '1') {
            attrs['baseFactor_'] = 1;
          } else if (attrs['csCode_'] === '[pH]') {
            attrs['baseFactor_'] = funcNode.attr.value;
          } else {
            var slashPos = attrs['csUnitString_'].indexOf('/');
            var ar = [];

            // unit string = K/9 or K/4 or m2/s4/Hz
            if (slashPos >= 0) {
              ar = attrs['csUnitString_'].split('/');
            }
            // unit string = K/9 or K/4
            if (slashPos >= 0 && ar.length === 2) {
              attrs['csUnitString_'] = ar[0];
              attrs['baseFactor_'] = parseFloat(funcNode.attr.value / ar[1]);
            }
            // unit string = 10*-5.Pa
            else if (attrs['csCode_'] === 'B[SPL]') {
                attrs['baseFactor_'] = Math.pow(10, -5) * 2;
                attrs['csUnitString_'] = "Pa";
              }
              // unit string = m1/s4/Hz, K, deg, V, mV, uV, nV, W, kW
              else {
                  attrs['baseFactor_'] = funcNode.attr.value;
                }
          } // end if the unit string is not 1
        } // end if the unit is special

        else {
            // what I'm calling the unit string is the string that defines the
            // unit based on other units, e.g., rad2 (radian squared) to define
            // a steradian unit.  It's not necessarily a proper base unit, although
            // it ultimately builds on base units.
            attrs['csUnitString_'] = valNode.attr.Unit;
            attrs['ciUnitString_'] = valNode.attr.UNIT;

            // what I'm calling the factor here (string and number versions)
            // is the magnitude used in conjunction with the unit string to define
            // the new unit, e.g., 3 for a yard that is based in the definition
            // of feet.

            attrs['baseFactorStr_'] = valNode.attr.value;
            if (attrs['csCode_'] === '[pi]') attrs['baseFactor_'] = parseFloat(attrs['baseFactorStr_']);else if (valNode.childNamed('sup')) {
              attrs['baseFactor_'] = parseFloat(valNode.attr.value);
            } else {
              attrs['baseFactor_'] = valNode.val;
            }
          } // end if this is not a special unit

        // Arbitrary units are defined in the UCUM spec as "not of any
        // specific dimension and are not commensurable with any other
        // unit" (3.2.24).  All arbitrary units in the units definition
        // XML file currently have a unit string of 1 and a base factor of 1
        // except the "international unit" with a code of [IU].  Its
        // unit string is the "international unit" with a code of [iU],
        // which is also an arbitrary unit - with a unit string of 1.
        // So I am assuming [IU] is just another code for the same unit.
        if (attrs['isArbitrary_'] === true) {
          attrs['magnitude_'] = 1;
          attrs['dim_'] = null;
        }

        // units with class = "dimless" don't have dimension arrays.
        // They're things like the number pi or the number 10 or percent.
        // Haven't figured out how to handle them yet.
        else if (attrs['class_'] === 'dimless' || attrs['csCode_'] === 'mol') {
            attrs['dim_'] = null;
            // figure the magnitude based on the unit string
            // if it's 1, the magnitude is the value specified for
            // the base factor, e.g., 3.141592653589793238462 ... for pi
            if (attrs['csUnitString_'] === '1') {
              attrs['magnitude_'] = attrs['baseFactor_'];
            }
            // else if the unit string starts with 10*, the magnitude is
            // 10 to the power specified following 10* e.g., unit = 10*-2
            // for the "%" unit.  Except for the mole, which is that
            // multiplied by the base factor, which in this case (only,
            // I think) is not 1.
            else if (attrs['csUnitString_'].substr(0, 3) == "10*") {
                var exp = parseInt(attrs['csUnitString_'].substr(3));
                attrs['magnitude_'] = Math.pow(10, exp);
                if (attrs['baseFactor_'] !== '1') {
                  attrs['magnitude_'] *= attrs['baseFactor_'];
                }
              }
              // else I don't know what it is.
              else {
                  attrs['defError_'] = true;
                  console.log('unexpected dimless unit definition, unit code ' + 'is ' + attrs['csCode_']);
                }
          } // end if this is a unit with class = dimless

          // Handle carat of gold alloys - which doesn't get a dimension
          //
          else if (attrs['csCode_'] === "[car_Au]") {
              attrs['magnitude_'] = 1 / 24;
              attrs['dim_'] = null;
            } else {

              // Make sure there's a unit string to base the new unit on.  There
              // should be, but I'm just checking here to make sure.  And omit
              // ones with a unit string of 1.  That won't do us any good.
              if (attrs['csUnitString_'] && attrs['csUnitString_'] !== '1' && attrs['csUnitString_'] !== 1) {

                haveUnit = false;
                // Handle some special cases
                // 1. the Oersted unit, whose string is /[pi].A/m and whose
                //    value is 250.  Set the baseFactor to 250/[pi] and
                //    the unit string to A/m
                if (attrs['csCode_'] === 'Oe') {
                  attrs['baseFactor_'] = 250 / Math.PI;
                  attrs['csUnitString_'] = "A/m";
                }
                // 2.  Strings that start with '/'.  Set the function to
                //     the inverse function and trim the '/' off the front
                //     of the string.
                else if (attrs['csUnitString_'][0] === '/') {
                    attrs['cnv_'] = 'inv';
                    attrs['csUnitString_'] = attrs['csUnitString_'].substr(1);
                  }
                  // 3.  the Svedberg unit, whose string is 10*-13.s.  Set the
                  //     base factor to 10*-13 and the unit string to s.
                  else if (attrs['csCode_'] === '[S]') {
                      attrs['baseFactor_'] = Math.pow(10, -13);
                      attrs['csUnitString_'] = 's';
                    }
                    // 4.  permeability of vaccuum - code [mu_0], unit given is
                    //     4.[pi].10*-7.N/A2
                    else if (attrs['csCode_'] === '[mu_0]') {
                        attrs['baseFactor_'] = 4 * Math.PI * Math.pow(10, -7);
                        attrs['csUnitString_'] = 'N/A2';
                      }
                // The unit string parser will use the unit(s) named in the
                // string to create a new unit with the appropriate dimension
                // object and magnitude before it's multiplied by the one
                // specified in the input node.
                try {
                  var retObj = uStrParser.parseString(attrs['csUnitString_'], 'validate', false);
                  var ret = retObj[0];
                  var retString = retObj[1];
                  var retMsg = retObj[2];

                  // Get the dimension object and magnitude (and adjust by
                  // specified magnitude factor) from the unit created and
                  // assign them to the attributes we'll use to create the
                  // unit for this listing.
                  if (ret) {
                    attrs['dim_'] = ret.getProperty('dim_');
                    var newMag = ret.getProperty('magnitude_');
                    newMag *= attrs['baseFactor_'];
                    attrs['magnitude_'] = newMag;
                    haveUnit = true;
                  }
                  // if there's no unit, report an error
                  else {
                      attrs['defError_'] = true;
                      console.log("unit definition error; code = " + attrs['csCode_'] + "; " + ("msg = " + retMsg));
                      attrs['dim_'] = null;
                      attrs['magnitude_'] = null;
                    }
                } catch (err) {
                  console.log('error thrown from unit parsing code for unit name ' + attrs['name_'] + '\n' + err.message);
                  stopNow = true;
                }
              } // end if there is a unit string to parse
            } // end if this is not a dimless unit

        if (haveUnit) {
          // Now create the unit we want based on the attributes we've
          // accumulated from the xml input and from figuring the dimension
          // and magnitude.  Add it to the unit tables
          var newUnit = new Unit(attrs);
          utab.addUnit(newUnit);

          // for now, create a list of the units created and save it to a file
          // for debugging.  This is a temporary file.
          var uList = utab.printUnits();
          fs.writeFileSync('UnitsList.txt', uList, { encoding: 'utf8', mode: 438, flag: 'w' });
        } // end if have a parsed unit
      } // end for a => - to alen
    } // end parseUnitStrings


    /**
     * This writes out the ucumDefs data file, which contains all prefixes and
     * units (base units and others) read and parsed from the XML file.
     *
     * This creates the file in the data directory and appends the
     * current Date object value to "ucumDefs" so that this does not run
     * into problems with a previously existing file.
     */

  }, {
    key: "writeJsonFile",
    value: function writeJsonFile() {

      var licenseText = "The following data (prefixes and units) was generated " + "by the UCUM LHC code from the UCUM data and selected " + "LOINC combinations of UCUM units.  The license for " + "the UCUM LHC code (demo and library code as well as " + "the combined units) is located at " + "https://github.com/lhncbc/ucum-lhc/blob/LICENSE.md.";
      var pfxTabs = PrefixTables.getInstance();
      var pfxArray = pfxTabs.allPrefixesByCode();
      var uTabs = UnitTables.getInstance();
      var uArray = uTabs.allUnitsByDef();

      var defsHash = { 'license': licenseText,
        'prefixes': pfxArray,
        'units': uArray };
      var dt = new Date();
      jsonfile.writeFileSync('../data/ucumDefs' + dt.valueOf() + '.json', defsHash, { spaces: 2, encoding: 'utf8', mode: 420, flag: 'w' });
    } // end writeJsonFile

    /**
     * This writes out the ucumDefs data file, which contains all prefixes and
     * units (base units and others) read and parsed from the XML file.
     *
     * This creates the file in the data directory and appends the
     * current Date object value to "ucumDefs" so that this does not run
     * into problems with a previously existing file.
     */

  }, {
    key: "writeVersionText",
    value: function writeVersionText() {

      var rootNode = xmlInput_;
      var versionNum = rootNode.attr.version;
      var revNum = rootNode.attr.revision;
      revNum = revNum.replace('$Revision:', '');
      revNum = revNum.replace('$', '');
      revNum = revNum.trim();
      var rootString = rootNode.toString({ compressed: true });
      var dateIdx = rootString.indexOf('$Date:');
      rootString = rootString.substr(dateIdx + 6);
      var nextDolIdx = rootString.indexOf('$');
      var revDate = rootString.substr(0, nextDolIdx).replace('$', '');
      revDate = revDate.trim();
      var versionText = "version " + versionNum + ", revision " + revNum + ", " + ("dated " + revDate);

      fs.writeFileSync('../data/ucumEssenceVersion.txt', versionText, { encoding: 'utf8', mode: 420, flag: 'w' });
    } // end writeVersionText

  }]);

  return UcumXmlDocument;
}(); // end UcumXmlDocument


/**
 *  This function exists ONLY until the original UcumXmlDocument constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton UcumXmlDocument object.  This is based on the UnitTables singleton
 *  implementation; see more detail in the UnitTables constructor description.
 *
 *  @return the singleton UcumXmlDocument object.
 */


UcumXmlDocument.getInstance = function () {
  return new UcumXmlDocument();
};

// Perform the first request for the document object, to get the
// getInstance method set.
UcumXmlDocument.getInstance();
//# sourceMappingURL=ucumXmlDocument.js.map
