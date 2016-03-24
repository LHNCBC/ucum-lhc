/**
 * This class handles opening, reading and parsing the XML file of ucum
 * definitions (prefixes, base units, and unit atoms).
 *
 * @author Lee Mericle
 *
 */

var Ucum = require('./config.js');
var Pfx = require("./prefix.js");
var PfxT = require("./prefixTables.js");
var Un = require("./unit.js");
var Us = require("./unitString.js");
var Utab = require('./unitTables.js');
var jsonfile = require('jsonfile');

var xmldoc = require('../node_modules/xmldoc/lib/xmldoc.js');
var fs = require('fs');
var path = require('path');

var essenceFile_ = '/proj/defExtra/ucum/ucum-essence.xml';

/**
 * The full xml document
 * @type XmlDocument
 */
var xmlInput_ = null;

export class UcumXmlDocument {


  /**
   * Constructor.  This reads the XML document (essenceFile_) into the
   * xmldoc object, which is an object used by the xmldoc class available
   * from GitHub - https://github.com/nfarina/xmldoc.  The object provides
   * methods to read the file and access its contents.
   *
   */
  constructor() {
    // read the XML file and create an xmlDocument object from it.
    let data = fs.readFileSync(essenceFile_);
    xmlInput_ = new xmldoc.XmlDocument(data);
  }


  /**
   * This method controls parsing of the XML into objects used by this
   * program.  It uses separate methods to parse the prefixes, the
   * base units, and the units.
   *
   * @returns nothing
   */
  parseXml() {

    this.parsePrefixes(xmlInput_.childrenNamed("prefix"));
    this.parseBaseUnits(xmlInput_.childrenNamed("base-unit")) ;
    this.parseUnitAtoms(xmlInput_.childrenNamed("unit")) ;

    // Create the json file of the prefix and unit definitions
    this.writeJsonFile();

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
  parsePrefixes(prefixes) {


    let plen = prefixes.length ;

    for (let p = 0; p < plen; p++) {
      let curPfx = prefixes[p];
      let attrs = {} ;

      // use the version (case sensitive or case insensitive) of the
      // prefix code as indicated by the caseSensitive_ flag in the
      // configuration file
      if (Ucum.Ucum.caseSensitive_)
        attrs["code_"] = curPfx.attr.Code;
      else
        attrs["code_"] = curPfx.attr.CODE;

      attrs["name_"] = curPfx.childNamed('name').val;

      // Set the prefix value.  If there is a <sup> element in the
      // value node, then this is a base 10 based prefix (10 to the x power).
      // Set the value to 10 taken to the indicated power.
      // Otherwise this is not 10 based and the value contains the
      // actual value for the prefix.
      let pValNode = curPfx.childNamed('value') ;
      attrs["value_"] = null;
      attrs["exp_"] = pValNode.childNamed('sup');
      if (attrs["exp_"] != null) {
        attrs["exp_"] = attrs["exp_"].val;
        attrs["value_"] = Math.pow(10, attrs["exp_"]);
      }
      else {
        attrs["value_"] = pValNode.val;
        attrs["exp_"] = null;
      }

      // Make sure the prefix has not already been created.  If it hasn't,
      // create the prefix object and then add it to the prefix tables.
      let ptab = PfxT.PrefixTables.getInstance();
      if (ptab.isDefined(attrs["code_"])) {
        throw(`Prefix constructor called for prefix already defined; code ` +
              `= ${attrs["code_"]}`);
      }
      else {
        let newPref = new Pfx.Prefix(attrs);
        ptab.add(newPref);
      }
    }
  } // end parsePrefixes


  /**
   * Creates base unit objects from the xml nodes passed in and adds
   * them to the unit tables.
   *
   * @params baseUnits the array of base unit nodes from the xml file, in the
   *  order in which the nodes are defined in that file.  (Order is important
   *  for all units).
   *
   * @returns nothing
   */
  parseBaseUnits(baseUnits) {
    let blen = baseUnits.length ;
    let utab = Utab.UnitTables.getInstance() ;
    for (let b = 0; b < blen; b++) {
      let curBUnit = baseUnits[b];
      let attrs = {} ;
      attrs['isBase_'] = true ;
      attrs['name_'] = curBUnit.childNamed('name').val ;
      attrs['csCode_'] = curBUnit.attr.Code ;
      attrs['ciCode_'] = curBUnit.attr.CODE ;
      attrs['property_'] = curBUnit.childNamed('property').val;
      attrs['variable_'] = curBUnit.attr.dim ;
      attrs['printSymbol_'] = curBUnit.childNamed('printSymbol').val;
      attrs['dim_'] = b ;
      let newUnit = new Un.Unit(attrs);
      utab.addUnit(newUnit) ;
    }
  } // end parseBaseUnits


  /**
   * Creates non-base unit objects from the xml nodes passed in and adds
   * them to the unit tables.
   *
   * @params unitAtoms the array of non-base unit nodes from the xml file, in the
   *  order in which the nodes are defined in that file.  (Order is important
   *  for all units).
   *
   * @returns nothing
   */
  parseUnitAtoms(unitAtoms) {

    let utab = Utab.UnitTables.getInstance() ;
    let uStrParser = new Us.UnitString();
    let alen = unitAtoms.length ;
    for (let a = 0; a < alen; a++) {
      let curUA = unitAtoms[a];
      let attrs = {};
      attrs['isBase_'] = false;
      attrs['name_'] = curUA.childNamed('name').val;
      attrs['csCode_'] = curUA.attr.Code;
      attrs['ciCode_'] = curUA.attr.CODE;
      attrs['property_'] = curUA.childNamed('property').val;
      if (curUA.childNamed('printSymbol')) {
        attrs['printSymbol_'] = curUA.childNamed('printSymbol').val;
      }
      if (curUA.attr.isMetric === "yes")
        attrs['isMetric_'] = true ;
      else
        attrs['isMetric_'] = false ;
      if (curUA.attr.isArbitrary)
        attrs['isArbitrary_'] = true ;
      else
        attrs['isArbitrary_'] = false ;
      if (curUA.attr.class) {
        attrs['class_'] = curUA.attr.class;
      }
      let valNode = curUA.childNamed('value');

      // Process special units
      let parseBaseString = true ;
      if (curUA.attr.isSpecial) {
        attrs['isSpecial_'] = curUA.attr.isSpecial === "yes";
        let funcNode = valNode.childNamed('function');
        attrs['cnv_'] = funcNode.attr.name;
        attrs['csBaseUnit_'] = funcNode.attr.Unit;
        if (attrs['csBaseUnit_'] === '1') {
          attrs['baseFactor_'] = 1 ;
          parseBaseString = false ;
        }
        else {
          let slashPos = attrs['csBaseUnit_'].indexOf('/');
          let ar = [];

          // base unit = K/9 or K/4 or mol/1 or m2/s4/Hz
          if (slashPos >= 0) {
            ar = attrs['csBaseUnit_'].split('/');
          }
          // base unit = K/9 or K/4 or mol/1
          if ((slashPos >= 0) && (ar.length === 2)) {
            attrs['csBaseUnit_'] = ar[0];
            attrs['baseFactor_'] =
                  parseInt(funcNode.attr.value + '/' + ar[1]);
          }
          // base unit = 10*-5.Pa
          else if (attrs['csCode_'] === 'B[SPL]') {
            attrs['baseFactor_'] =  Math.pow(10, -5) * 2 ;
            attrs['csBaseUnit_'] = "Pa" ;
          }
          // base unit = m1/s4/Hz, K, deg, V, mV, uV, nV, W, kW
          else {
            attrs['baseFactor_'] = funcNode.attr.value;
          }
        } // end if the base unit is not 1
      } // end if the unit is special

      else {
        // what I'm calling the base unit is the string that defines the
        // unit based on other units, e.g., rad2 (radian squared) to define
        // a steradian unit.  It's not necessarily a proper base unit, although
        // it ultimately builds on base units.
        attrs['csBaseUnit_'] = valNode.attr.Unit;
        attrs['ciBaseUnit_'] = valNode.attr.UNIT;

        // what I'm calling the factor here (string and number versions)
        // is the magnitude used in conjunction with the base unit to define
        // the new unit, e.g., 3 for a yard that is based in the definition
        // of feet.
        attrs['baseFactorStr_'] = valNode.attr.value;
        if (attrs['csCode_'] === '[pi]')
          attrs['baseFactor_'] = parseFloat(attrs['baseFactorStr_']);
        else
          attrs['baseFactor_'] = valNode.val;
      } // end if this is not a special unit

      // Arbitrary units are defined in the UCUM spec as "not of any
      // specific dimension and are not commesurable with any other
      // unit" (3.2.24).  All arbitrary units in the units definition
      // XML file currently have a base unit of 1 and a base factor of 1
      // except the "international unit" with a code of [IU].  Its
      // base unit is the "international unit" with a code of [iU],
      // which is also an arbitrary unit - with a base unit of 1.
      // So I am assuming [IU] is just another code for the same unit.
      if (attrs['isArbitrary_'] === true) {
        attrs['magnitude_'] = 1;
        attrs['dim_'] = null;
      }

      // units with class = "dimless" don't have dimension arrays.
      // They're things like the number pi or the number 10 or percent.
      // Haven't figured out how to handle them yet.
      else if (attrs['class_'] === 'dimless' ||
               attrs['csCode_'] === 'mol') {
        attrs['dim_'] = null ;
        // figure the magnitude based on the base unit
        // if it's 1, the magnitude is the value specified for
        // the base factor, e.g., 3.141592653589793238462 ... for pi
        if (attrs['csBaseUnit_'] === '1') {
          attrs['magnitude_'] = attrs['baseFactor_'];
        }
        // else if the base unit starts with 10*, the magnitude is
        // 10 to the power specified following 10* e.g., unit = 10*-2
        // for the "%" unit.  Except for the mole, which is that
        // multiplied by the base factor, which in this case (only,
        // I think) is not 1.
        else if (attrs['csBaseUnit_'].substr(0,3) == "10*") {
          let exp = parseInt(attrs['csBaseUnit_'].substr(3));
          attrs['magnitude_'] = Math.pow(10, exp) ;
          if (attrs['baseFactor_'] !== '1') {
            attrs['magnitude_'] *= attrs['baseFactor_'];
          }
        }
        // else I don't know what it is.
        else {
          attrs['defError_'] = true ;
          console.log('unexpected dimless unit definition, unit code ' +
                      'is ' + attrs['csCode_']) ;
        }
      } // end if this is a unit with class = dimless

      // Handle carat of gold alloys - which doesn't get a dimension
      //
      else if (attrs['csCode_'] === "[car_Au]") {
        attrs['magnitude_'] = 1/24
      }
      // units with magnitude defined by 1 x 10 and a <sup> node for
      // the exponent.  Not quite sure how I want to do those yet.
      else if (valNode.childNamed('sup')){
        parseBaseString = false ;
        attrs['defError_'] = true ;
        console.log('unit definition error; code = ' + attrs['csCode_']);
      }
      else {

        // Make sure there's a unit string to base the new unit on.  There
        // should be, but I'm just checking here to make sure.
        if (attrs['csBaseUnit_'] && attrs['csBaseUnit_'] !== '1') {

          // Handle some special cases
          // 1. the Oersted unit, whose string is /[pi].A/m and whose
          //    value is 250.  Set the baseFactor to 250/[pi] and
          //    the unit string to A/m
          if (attrs['csCode_'] === 'Oe') {
            attrs['baseFactor_'] = 250/Math.PI ;
            attrs['csBaseUnit_'] = "A/m"
          }
          // 2.  Strings that start with '/'.  Set the function to
          //     the inverse function and trim the '/' off the front
          //     of the string.
          else if (attrs['csBaseUnit_'][0] === '/') {
            attrs['cnv_'] = 'inv' ;
            attrs['csBaseUnit_'] = attrs['csBaseUnit_'].substr(1) ;
          }
          // 3.  the Svedberg unit, whose string is 10*-13.s.  Set the
          //     base factor to 10*-13 and the unit string to s.
          else if (attrs['csCode_'] === '[S]') {
            attrs['baseFactor_'] = Math.pow(10, -13);
            attrs['csBaseUnit_'] = 's';
          }
          else if (attrs['csCode_'] === '[mu_0]') {
            attrs['baseFactor_'] = 4 * Math.PI * Math.pow(10, -7);
            attrs['csBaseUnit_'] = 'N/A2';
          }
          // The unit string parser will use the unit(s) named in the
          // string to create a new unit with the appropriate dimension
          // object and magnitude before it's multiplied by the one
          // specified in the input node.
          let ret = uStrParser.parseString(attrs['csBaseUnit_']);

          // Get the dimension object and magnitude (and adjust by
          // specified magnitude factor) from the unit created and
          // assign them to the attributes we'll use to create the
          // unit for this listing.
          if (ret) {
            attrs['dim_'] = ret.getProperty('dim_');
            console.log('writing dim to ' + attrs['csCode_'] +
                        '; dim = ' + attrs['dim_']);
            let newMag = ret.getProperty('magnitude_');
            newMag *= attrs['baseFactor_'];
            attrs['magnitude_'] = newMag ;
          }
          // if there's no unit string, report an error
          else {
            attrs['defError_'] = true ;
            console.log('unit definition error; code = ' + attrs['csCode_']);
            attrs['dim_'] = null;
            attrs['magnitude_'] = null;
          }
        } // end if there is a base string to parse
      } // end if this is not a dimless unit

      // Now create the unit we want based on the attributes we've
      // accumulated from the xml input and from figuring the dimension
      // and magnitude.  Add it to the unit tables
      let newUnit = new Un.Unit(attrs);
      utab.addUnit(newUnit) ;



    // for now, create a list of the units created and save it to a file
    // for debugging.  This is a temporary file.
    let uList = utab.printUnits();
    console.log('about to write UnitsList.txt');
    fs.writeFileSync('/home/lmericle/ucum/test/UnitsList.txt', uList,
        {encoding: 'utf8', mode: 0o666, flag: 'w'} );
    } // end for a => - to alen

  } // end parseUnitAtoms


  /**
   * Get an array containing all prefix objects and returns it in a hash
   * with the key being "prefixes" and the value being the array.
   *
   * @returns hash object
   */
  writeJsonFile() {

    let pfxTabs = PfxT.PrefixTables.getInstance() ;
    let pfxArray = pfxTabs.allPrefixesByCode();
    let uTabs = Utab.UnitTables.getInstance();
    let uArray = uTabs.allUnitsByDef();

    let defsHash = { 'prefixes' : pfxArray,
                     'units' : uArray}

    jsonfile.writeFileSync('../dist/data/ucumDefs.json', defsHash,
                          {encoding: 'utf8', mode: 0o666, flag: 'w'});
  } // end writeJsonFile


} // end UcumXmlDocument

