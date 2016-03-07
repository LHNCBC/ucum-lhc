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

var xmldoc = require('../../node_modules/xmldoc/lib/xmldoc');
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

      if (curUA.attr.isSpecial) {
        attrs['isSpecial'] = curUA.attr.isSpecial === "yes";
        let funcNode = valNode.childNamed('function');
        attrs['cnv'] = funcNode.attr.name;
        attrs['csBaseUnit'] = funcNode.attr.Unit;
        if (attrs['csBaseUnit'] === '1') {

        }
        else {
          let slashPos = attrs['csBaseUnit'].indexOf('/');

          // unit = K/9 or K/4 or mol/1 or m2/s4/Hz
          if (slashPos >= 0) {
            let ar = attrs['csBaseUnit'].split('/');
            if (ar.length === 2) {
              attrs['csBaseUnit'] = ar[0];
              attrs['baseFactor'] =
                  parseInt(funcNode.attr.value + '/' + ar[1]);
            }
            else {
              attrs['baseFactor'] = funcNode.attr.value;
            }
          }
          // K, deg, 10*-5.PAL, V, mV, uV, nV, W, kW
          else {
            attrs['baseFactor'] = funcNode.attr.value;
            //if (attrs['csBaseUnit'] === '10*-5.Pa') {
            //  ; // not sure what to do with this.
            //}
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
          console.log('unexpected dimless unit definition, unit code ' +
                      'is ' + attrs['csCode']) ;
        }
      } // end if this is a unit with class = dimless

      else {

        // Make sure there's a unit string to base the new unit on.  There
        // should be, but I'm just checking here to make sure.
        if (attrs['csBaseUnit'] && attrs['csBaseUnit'] !== '1') {
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
            let newMag = ret.getProperty('magnitude');
            newMag *= attrs['baseFactor'];
            attrs['magnitude'] = newMag;
            attrs['dimension'] = ret.getProperty('dim');
          }
          // if there's no unit string, report an error
          else {
            console.log('unit definition missing base string; code = ' +
                attrs['csCode']);
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

      // for now, add the unit created to the list we're writing out to
      // a file for debugging.  The file is overwritten each time here.
      // I'm doing this here instead of after all units are written
      // because I'm still running into errors that cause the program
      // to crash.
      let uList = '\n' + 'after adding ' + newUnit.csCode_ + '\n' +
                  utab.printUnits();

      fs.writeFileSync('/home/lmericle/ucum/test/UnitsList.txt', uList,
                       {encoding: 'utf8', mode: 0o666, flag: 'w'} );
    } // end for a => - to alen
    // let newUnit = new Un.Unit(attrs);

  } // end parseUnitAtoms

} // end UcumXmlDocument

