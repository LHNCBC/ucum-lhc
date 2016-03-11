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

var xmldoc = require('../../node_modules/xmldoc/lib/xmldoc');
var fs = require('fs');
var path = require('path');

var essenceFile_ = '/proj/defExtra/ucum/ucum-essence.xml';
//var jsonFile_ = '/proj/defExtra/ucum/ucumDefs.json'
var jsonFile_ = '../dist/data/ucumDefs.json';

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
      let pCode = null;

      // use the version (case sensitive or case insensitive) of the
      // prefix code as indicated by the caseSensitive_ flag in the
      // configuration file
      if (Ucum.Ucum.caseSensitive_)
        pCode = curPfx.attr.Code;
      else
        pCode = curPfx.attr.CODE;

      let pName = curPfx.childNamed('name').val;

      // Set the prefix value.  If there is a <sup> element in the
      // value node, then this is a base 10 based prefix (10 to the x power).
      // Set the value to 10 taken to the indicated power.
      // Otherwise this is not 10 based and the value contains the
      // actual value for the prefix.
      let pValNode = curPfx.childNamed('value') ;
      let pVal = null;
      let pSup = pValNode.childNamed('sup');
      if (pSup) {
        pSup = pSup.val;
        pVal = Math.pow(10, pSup);
      }
      else {
        pVal = pValNode.val;
        pSup = null;
      }

      // Make sure the prefix has not already been created.  If it hasn't,
      // create the prefix object and then add it to the prefix tables.
      let ptab = PfxT.PrefixTables.getInstance();
      if (ptab.isDefined(pCode)) {
        throw(`Prefix constructor called for prefix already defined; code ` +
              `= ${pCode}`);
      }
      else {
        let newPref = new Pfx.Prefix(pCode, pName, pVal, pSup);
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
      attrs['isBase'] = true ;
      attrs['name'] = curBUnit.childNamed('name').val ;
      attrs['csCode'] = curBUnit.attr.Code ;
      attrs['ciCode'] = curBUnit.attr.CODE ;
      attrs['property'] = curBUnit.childNamed('property').val;
      attrs['variable'] = curBUnit.attr.dim ;
      attrs['printSymbol'] = curBUnit.childNamed('printSymbol').val;
      attrs['dimension'] = b ;
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
      attrs['isBase'] = false;
      attrs['name'] = curUA.childNamed('name').val;
      attrs['csCode'] = curUA.attr.Code;
      attrs['ciCode'] = curUA.attr.CODE;
      attrs['property'] = curUA.childNamed('property').val;
      if (curUA.childNamed('printSymbol')) {
        attrs['printSymbol'] = curUA.childNamed('printSymbol').val;
      }
      if (curUA.attr.isMetric === "yes")
        attrs['isMetric'] = true ;
      else
        attrs['isMetric'] = false ;
      if (curUA.attr.isArbitrary)
        attrs['isArbitrary'] = true ;
      else
        attrs['isArbitrary'] = false ;
      if (curUA.attr.class) {
        attrs['class'] = curUA.attr.class;
      }
      let valNode = curUA.childNamed('value');

      // Process special units
      let parseBaseString = true ;
      if (curUA.attr.isSpecial) {
        attrs['isSpecial'] = curUA.attr.isSpecial === "yes";
        let funcNode = valNode.childNamed('function');
        attrs['cnv'] = funcNode.attr.name;
        attrs['csBaseUnit'] = funcNode.attr.Unit;
        if (attrs['csBaseUnit'] === '1') {
          attrs['baseFactor'] = 1 ;
          parseBaseString = false ;
        }
        else {
          let slashPos = attrs['csBaseUnit'].indexOf('/');
          let ar = [];

          // base unit = K/9 or K/4 or mol/1 or m2/s4/Hz
          if (slashPos >= 0) {
            ar = attrs['csBaseUnit'].split('/');
          }
          // base unit = K/9 or K/4 or mol/1
          if ((slashPos >= 0) && (ar.length === 2)) {
            attrs['csBaseUnit'] = ar[0];
            attrs['baseFactor'] =
                  parseInt(funcNode.attr.value + '/' + ar[1]);
          }
          // base unit = 10*-5.Pa
          else if (attrs['csCode'] === 'B[SPL]') {
            attrs['baseFactor'] =  Math.pow(10, -5) * 2 ;
            attrs['csBaseUnit'] = "Pa" ;
          }
          // base unit = m1/s4/Hz, K, deg, V, mV, uV, nV, W, kW
          else {
            attrs['baseFactor'] = funcNode.attr.value;
          }
        } // end if the base unit is not 1
      } // end if the unit is special

      else {
        // what I'm calling the base unit is the string that defines the
        // unit based on other units, e.g., rad2 (radian squared) to define
        // a steradian unit.  It's not necessarily a proper base unit, although
        // it ultimately builds on base units.
        attrs['csBaseUnit'] = valNode.attr.Unit;
        attrs['ciBaseUnit'] = valNode.attr.UNIT;

        // what I'm calling the factor here (string and number versions)
        // is the magnitude used in conjunction with the base unit to define
        // the new unit, e.g., 3 for a yard that is based in the definition
        // of feet.
        attrs['baseFactorStr'] = valNode.attr.value;
        if (attrs['csCode'] === '[pi]')
          attrs['baseFactor'] = parseFloat(attrs['baseFactorStr']);
        else
          attrs['baseFactor'] = valNode.val;
      } // end if this is not a special unit

      // Arbitrary units are defined in the UCUM spec as "not of any
      // specific dimension and are not commesurable with any other
      // unit" (3.2.24).  All arbitrary units in the units definition
      // XML file currently have a base unit of 1 and a base factor of 1
      // except the "international unit" with a code of [IU].  Its
      // base unit is the "international unit" with a code of [iU],
      // which is also an arbitrary unit - with a base unit of 1.
      // So I am assuming [IU] is just another code for the same unit.
      if (attrs['isArbitrary'] === true) {
        attrs['magnitude'] = 1;
        attrs['dimension'] = null;
      }

      // units with class = "dimless" don't have dimension arrays.
      // They're things like the number pi or the number 10 or percent.
      // Haven't figured out how to handle them yet.
      else if (attrs['class'] === 'dimless' ||
               attrs['csCode'] === 'mol') {
        attrs['dimension'] = null ;
        // figure the magnitude based on the base unit
        // if it's 1, the magnitude is the value specified for
        // the base factor, e.g., 3.141592653589793238462 ... for pi
        if (attrs['csBaseUnit'] === '1') {
          attrs['magnitude'] = attrs['baseFactor'];
        }
        // else if the base unit starts with 10*, the magnitude is
        // 10 to the power specified following 10* e.g., unit = 10*-2
        // for the "%" unit.  Except for the mole, which is that
        // multiplied by the base factor, which in this case (only,
        // I think) is not 1.
        else if (attrs['csBaseUnit'].substr(0,3) == "10*") {
          let exp = parseInt(attrs['csBaseUnit'].substr(3));
          attrs['magnitude'] = Math.pow(10, exp) ;
          if (attrs['baseFactor'] !== '1') {
            attrs['magnitude'] *= attrs['baseFactor'];
          }
        }
        // else I don't know what it is.
        else {
          attrs['defError_'] = true ;
          console.log('unexpected dimless unit definition, unit code ' +
                      'is ' + attrs['csCode']) ;
        }
      } // end if this is a unit with class = dimless

      // Handle carat of gold alloys - which doesn't get a dimension
      //
      else if (attrs['csCode'] === "[car_Au]") {
        attrs['magnitude'] = 1/24
      }
      else {

        // Make sure there's a unit string to base the new unit on.  There
        // should be, but I'm just checking here to make sure.
        if (attrs['csBaseUnit'] && attrs['csBaseUnit'] !== '1') {

          // Handle some special cases
          // 1. the Oersted unit, whose string is /[pi].A/m and whose
          //    value is 250.  Set the baseFactor to 250/[pi] and
          //    the unit string to A/m
          if (attrs['csCode'] === 'Oe') {
            attrs['baseFactor'] = 250/Math.PI ;
            attrs['csBaseUnit'] = "A/m"
          }
          // 2.  Strings that start with '/'.  Set the function to
          //     the inverse function and trim the '/' off the front
          //     of the string.
          else if (attrs['csBaseUnit'][0] === '/') {
            attrs['cnv'] = 'inv' ;
            attrs['csBaseUnit'] = attrs['csBaseUnit'].substr(1) ;
          }
          // 3.  the Svedberg unit, whose string is 10*-13.s.  Set the
          //     base factor to 10*-13 and the unit string to s.
          else if (attrs['csCode'] === '[S]') {
            attrs['baseFactor'] = Math.pow(10, -13);
            attrs['csBaseUnit'] = 's';
          }
          else if (attrs['csCode'] === '[mu_0]') {
            attrs['baseFactor'] = 4 * Math.PI * Math.pow(10, -7);
            attrs['csBaseUnit'] = 'N/A2';
          }
          // The unit string parser will use the unit(s) named in the
          // string to create a new unit with the appropriate dimension
          // object and magnitude before it's multiplied by the one
          // specified in the input node.
          let ret = uStrParser.parseString(attrs['csBaseUnit']);

          // Get the dimension object and magnitude (and adjust by
          // specified magnitude factor) from the unit created and
          // assign them to the attributes we'll use to create the
          // unit for this listing.
          if (ret) {
            attrs['dimension'] = ret.getProperty('dim');
            let newMag = ret.getProperty('magnitude');
            newMag *= attrs['baseFactor'];
            attrs['magnitude'] = newMag ;
          }
          // if there's no unit string, report an error
          else {
            attrs['defError_'] = true ;
            console.log('unit definition error; code = ' + attrs['csCode']);
            attrs['dimension'] = null;
            attrs['magnitude'] = null;
          }
        } // end if there is a base string to parse
      } // end if this is not a dimless unit

      // Now create the unit we want based on the attributes we've
      // accumulated from the xml input and from figuring the dimension
      // and magnitude.  Add it to the unit tables
      let newUnit = new Un.Unit(attrs);
      utab.addUnit(newUnit) ;

    } // end for a => - to alen

    // for now, create a list of the units created and save it to a file
    // for debugging.  This is a temporary file.
    let uList = utab.printUnits();
    fs.writeFileSync('/home/lmericle/ucum/test/UnitsList.txt', uList,
        {encoding: 'utf8', mode: 0o666, flag: 'w'} );

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

    jsonfile.writeFileSync(jsonFile_, defsHash,
                          {encoding: 'utf8', mode: 0o666, flag: 'w'});
    //fs.writeFileSync('/home/lmericle/ucum/test/UnitsList.txt', uList,
    //    {encoding: 'utf8', mode: 0o666, flag: 'w'} );
  } // end writeJsonFile


} // end UcumXmlDocument

