"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
//import * as Ucum from "config.js" ;

var UnitsInput = (function () {

  /**
   * This creates the lists of prefixes and units, and then calls methods
   * to create objects for each entity.  On conclusion it overwrites this
   * class with a message that the class is closed - to avoid writing the
   * lists twice.
   *
   * It is anticipated that this will be replaced when acquisition and
   * interpretation of the ucum data from outside sources is implemented.
   * For now this gives us some data to work with.
   */

  function UnitsInput() {
    _classCallCheck(this, UnitsInput);

    /**
     *  The hash containing the prefixes
     */
    this.prefixesInput_ = [// key is the case-insensitive code
    { caseInsensCode: "YA",
      name: "yotta",
      caseSensCode: "Y",
      printSymbol: "Y",
      value1: "1e24",
      value2: "1 x 10",
      superscript: 24 }, { caseInsensCode: "ZA",
      caseSensCode: "Z",
      name: "zetta",
      printSymbol: "Z",
      value1: "1e21",
      value2: "1 × 10",
      superscript: 21 }, { caseInsensCode: "EX",
      caseSensCode: "E",
      name: "exa",
      printSymbol: "E",
      value1: "1e18",
      value2: "1 × 10",
      superscript: 18 }, { caseInsensCode: "PT",
      caseSensCode: "P",
      name: "peta",
      printSymbol: "P",
      value1: "1e15",
      value2: "1 × 10",
      superscript: 15 }, { caseInsensCode: "TR",
      caseSensCode: "T",
      name: "tera",
      printSymbol: "T",
      value1: "1e12",
      value2: "1 × 10",
      superscript: 12 }, { caseInsensCode: "GA",
      caseSensCode: "G",
      name: "giga",
      printSymbol: "G",
      value1: "1e9",
      value2: "1 × 10",
      superscript: 9 }, { caseInsensCode: "MA",
      caseSensCode: "M",
      name: "mega",
      printSymbol: "M",
      value1: "1e6",
      value2: "1 × 10",
      superscript: 6 }, { caseInsensCode: "K",
      caseSensCode: "k",
      name: "kilo",
      printSymbol: "k",
      value1: "1e3",
      value2: "1 × 10",
      superscript: 3 }, { caseInsensCode: "H",
      caseSensCode: "h",
      name: "hecto",
      printSymbol: "h",
      value1: "1e2",
      value2: "1 × 10",
      superscript: 2 }, { caseInsensCode: "DA",
      caseSensCode: "da",
      name: "deka",
      printSymbol: "da",
      value1: "1e1",
      value2: ">1 × 10",
      superscript: 1 }, { caseInsensCode: "D",
      caseSensCode: "d",
      name: "deci",
      printSymbol: "d",
      value1: "1e-1",
      value2: "1 × 10",
      superscript: -1 }, { caseInsensCode: "C",
      caseSensCode: "c",
      name: "centi",
      printSymbol: "c",
      value1: "1e-2",
      value2: "1 × 10",
      superscript: -2 }, { caseInsensCode: "M",
      caseSensCode: "m",
      name: "milli",
      printSymbol: "m",
      value1: "1e-3",
      value2: "1 × 10",
      superscript: -3 }, { caseInsensCode: "U",
      caseSensCode: "u",
      name: "micro",
      printSymbol: "μ",
      value1: "1e-6",
      value2: "1 × 10",
      superscript: -6 }, { caseInsensCode: "N",
      caseSensCode: "n",
      name: "nano",
      printSymbol: "n",
      value1: "1e-9",
      value2: "1 × 10",
      superscript: -9 }, { caseInsensCode: "P",
      caseSensCode: "p",
      name: "pico",
      printSymbol: "p",
      value1: "1e-12",
      value2: "1 × 10",
      superscript: -12 }, { caseInsensCode: "F",
      caseSensCode: "f",
      name: "femto",
      printSymbol: "f",
      value1: "1e-15",
      value2: "1 × 10",
      superscript: -15 }, { caseInsensCode: "A",
      caseSensCode: "a",
      name: "atto",
      printSymbol: "a",
      value1: "1e-18",
      value2: "1 × 10",
      superscript: -18 }, { caseInsensCode: "ZO",
      caseSensCode: "z",
      name: "zepto",
      printSymbol: "z",
      value1: "1e-21",
      value2: "1 × 10",
      superscript: -21 }, { caseInsensCode: "YO",
      caseSensCode: "y",
      name: "yocto",
      printSymbol: "y",
      value1: "1e-24",
      value2: "1 × 10",
      superscript: -24 }, { caseInsensCode: "KIB",
      caseSensCode: "Ki",
      name: "kibi",
      printSymbol: "Ki",
      value1: "1024",
      value2: 1024 }, { caseInsensCode: "MIB",
      caseSensCode: "Mi",
      name: "mebi",
      printSymbol: "Mi",
      value1: "1048576",
      value2: 1048576 }, { caseInsensCode: "GIB",
      caseSensCode: "Gi",
      name: "gibi",
      printSymbol: "Gi",
      value1: "1073741824",
      value2: 1073741824 }, { caseInsensCode: "TIB",
      caseSensCode: "Ti",
      name: "tebi",
      printSymbol: "Ti",
      value1: "1099511627776",
      value2: 1099511627776 }]; // end prefixesInput

    /**
     * The hash containing the input for the base units
     */
    this.baseUnitsInput_ = [{ ciCode: "M",
      csCode: "m",
      dim: "L",
      name: "meter",
      printSymbol: "m",
      property: "length",
      dimension: [1, 0, 0, 0, 0, 0, 0] }, { ciCode: "S",
      csCode: "s",
      dim: "T",
      name: "second",
      printSymbol: "s",
      property: "time",
      dimension: [0, 1, 0, 0, 0, 0, 0] }, { ciCode: "G",
      csCode: "g",
      dim: "M",
      name: "gram",
      printSymbol: "g",
      property: "mass",
      dimension: [0, 0, 1, 0, 0, 0, 0] }, { ciCode: "RAD",
      csCode: "rad",
      dim: "A",
      name: "radian",
      printSymbol: "rad",
      property: "plane angle",
      dimension: [0, 0, 0, 1, 0, 0, 0] }, { ciCode: "K",
      csCode: "K",
      dim: "C",
      name: "Kelvin",
      printSymbol: "K",
      property: "temperature",
      dimension: [0, 0, 0, 0, 1, 0, 0] }, { ciCode: "C",
      csCode: "C",
      dim: "Q",
      name: "Coulomb",
      printSymbol: "C",
      property: "electric charge",
      dimension: [0, 0, 0, 0, 0, 1, 0] }, { ciCode: "CD",
      csCode: "cd",
      dim: "F",
      name: "candela",
      printSymbol: "cd",
      property: "luminous intensity",
      dimension: [0, 0, 0, 0, 0, 0, 1] }]; // end baseUnitsInput_

    /**
     * The hash containing the unit atoms
     */
    this.unitAtomsInput_ = [{ ciCode: "AR",
      csCode: "ar",
      isMetric: "yes",
      class: "iso1000",
      name: "are",
      printSymbol: "a",
      property: "area",
      csBaseUnit: "m2",
      ciBaseUnit: "M2",
      baseFactorStr: "100",
      magnitude: 100,
      dimension: [2, 0, 0, 0, 0, 0, 0] }, { ciCode: "L",
      csCode: "l",
      isMetric: "yes",
      class: "iso1000",
      name: "liter",
      printSymbol: "l",
      property: "volume",
      csBaseUnit: "dm3",
      ciBaseUnit: "DM3",
      baseFactorStr: "1",
      magnitude: .001,
      dimension: [3, 0, 0, 0, 0, 0, 0] }, { caseInsensCode: "[C]",
      caseSensCode: "[c]",
      isMetric: "yes",
      class: "const",
      name: "velocity of light",
      printSymbol: "<i>c</i>",
      property: "velocity",
      csBaseUnit: "m/s",
      ciBaseunit: "M/S",
      baseFactorStr: "299792458",
      magnitude: 299792458,
      dimension: [1, -1, 0, 0, 0, 0, 0] }, { ciCode: "[G]",
      csCode: "[g]",
      isMetric: "yes",
      class: "const",
      name: "standard acceleration of free fall",
      printSymbol: "<i>g<sub>n</sub></i>",
      property: "acceleration",
      csBaseUnit: "m/s2",
      ciBaseunit: "M/S2",
      baseFactorStr: "980665e-5",
      magnitude: 9.80665,
      dimension: [1, -2, 0, 0, 0, 0, 0] }, { ciCode: "N",
      csCode: "N",
      isMetric: "yes",
      class: "si",
      name: "Newton",
      printSymbol: "N",
      property: "force",
      csBaseUnit: "kg.m/s2",
      ciBaseUnit: "KG.M/S2",
      baseFactorStr: "1",
      magnitude: 1,
      dimension: [1, -2, 1, 0, 0, 0, 0] }, { ciCode: "J",
      csCode: "J",
      isMetric: "yes",
      class: "si",
      name: "Joule",
      printSymbol: "J",
      property: "energy",
      csBaseUnit: "N.m",
      ciBaseUnit: "N.M",
      baseFactorStr: "1",
      magnitude: 1,
      dimension: [2, -2, 1, 0, 0, 0, 0] }, { ciCode: "A",
      csCode: "A",
      isMetric: "yes",
      class: "si",
      name: "Ampère",
      printSymbol: "A",
      property: "electric current",
      csBaseUnit: "C/s",
      ciBaseUnit: "C/S",
      baseFactorStr: "1",
      magnitude: 1,
      dimension: [0, -1, 0, 1, 0, 0, 0] }, { ciCode: "V",
      csCode: "V",
      isMetric: "yes",
      class: "si",
      name: "Volt",
      printSymbol: "V",
      property: "electric potential",
      csBaseUnit: "J/C",
      ciBaseUnit: "J/C",
      baseFactorStr: "1",
      magnitude: 1,
      dimension: [-3, 3, 1, 0, 0, 0, 0] }, { ciCode: "[DEGF]",
      csCode: "[degF]",
      isMetric: "no",
      class: "heat",
      name: "degree Fahrenheit",
      printSymbol: "°F",
      property: "temperature",
      magnitude: 5 / 9,
      cnv: "degF",
      dimension: [0, 0, 0, 0, 1, 0, 0] }, { ciCode: "CEL",
      csCode: "Cel",
      isMetric: "yes",
      class: "si",
      name: "degree Celsius",
      printSymbol: "°C",
      property: "temperature",
      magnitude: 1,
      cnv: "Cel",
      dimension: [0, 0, 0, 0, 1, 0, 0] }, { ciCode: "MIN",
      csCode: "min",
      isMetric: "no",
      class: "iso1000",
      name: "minute",
      printSymbol: "min",
      property: "time",
      magnitude: 60,
      dimension: [0, 1, 0, 0, 0, 0, 0] }, { ciCode: "H",
      csCode: "h",
      isMetric: "no",
      class: "iso1000",
      name: "hour",
      printSymbol: "h",
      property: "time",
      magnitude: 3600,
      dimension: [0, 1, 0, 0, 0, 0, 0] }, { ciCode: "D",
      csCode: "d",
      isMetric: "no",
      class: "iso1000",
      name: "day",
      printSymbol: "h",
      property: "time",
      magnitude: 86400,
      dimension: [0, 1, 0, 0, 0, 0, 0] }, { ciCode: "WK",
      csCode: "wk",
      isMetric: "no",
      class: "iso1000",
      name: "week",
      printSymbol: "wk",
      property: "time",
      magnitude: 604800,
      dimension: [0, 1, 0, 0, 0, 0, 0] }, { ciCode: "[FT_US]",
      csCode: "[ft_us]",
      isMetric: "no",
      class: "us-lengths",
      name: "foot (us)",
      printSymbol: "ft",
      property: "length",
      magnitude: 1200 / 3937,
      dimension: [1, 0, 0, 0, 0, 0, 0] }, { ciCode: "[YD_US]",
      csCode: "[yd_us]",
      isMetric: "no",
      class: "us-lengths",
      name: "yard (us)",
      printSymbol: "yd",
      property: "length",
      magnitude: 3600 / 3937,
      dimension: [1, 0, 0, 0, 0, 0, 0] }, { ciCode: "[IN_I]",
      csCode: "[in_i]",
      isMetric: "no",
      class: "intcust",
      name: "inch (international)",
      printSymbol: "in",
      property: "length",
      magnitude: .0254,
      dimension: [1, 0, 0, 0, 0, 0, 0] }, { ciCode: "[GAL_US]",
      csCode: "[gal_us]",
      isMetric: "no",
      class: "us-volumes",
      name: "Queen Anne's wine gallon",
      property: "fluid volume",
      magnitude: 0.003785412,
      dimension: [3, 0, 0, 0, 0, 0, 0] }, { ciCode: "[QT_US]",
      csCode: "[qt_us]",
      isMetric: "no",
      class: "us-volumes",
      name: "quart",
      property: "fluid volume",
      magnitude: 0.00094635,
      dimension: [3, 0, 0, 0, 0, 0, 0] }, { ciCode: "[PT_US]",
      csCode: "[pt_us]",
      isMetric: "no",
      class: "us-volumes",
      name: "pint",
      property: "fluid volume",
      magnitude: .000473177,
      dimension: [3, 0, 0, 0, 0, 0, 0] }, { ciCode: "[GIL_US]",
      csCode: "[gil_us]",
      isMetric: "no",
      class: "us-volumes",
      name: "gill",
      property: "fluid volume",
      magnitude: .000118294,
      dimension: [3, 0, 0, 0, 0, 0, 0] }, { ciCode: "[FOZ_US]",
      csCode: "[foz_us]",
      isMetric: "no",
      class: "us-volumes",
      name: "fluid ounce",
      printSymbol: "oz fl",
      property: "fluid volume",
      magnitude: .000029574,
      dimension: [3, 0, 0, 0, 0, 0, 0] }, { ciCode: "[TBS_US]",
      csCode: "[tbs_us]",
      isMetric: "no",
      class: "us-volumes",
      name: "tablespoon",
      property: "volume",
      magnitude: 0.000014787,
      dimension: [3, 0, 0, 0, 0, 0, 0] }]; // end unitAtomsInput

    this.loadPrefixes();
    this.loadUnits(this.baseUnitsInput_, true);
    this.loadUnits(this.unitAtomsInput_, false);

    // Block re-invocation of the class.  The data should only be loaded
    // once, so this prevents it being duplicated.
    UnitsInput = function () {
      throw 'Data has already been loaded. ' + 'The UnitsInput class is now closed.';
    };
  } // end constructor

  /**
   * Loads the prefix input data, i.e., creates Prefix objects for each
   * element in the prefixesInput_ list.  Note that the code used (case
   * sensitive or case insensitive is based on the current setting of
   * Ucum.caseSensitive and that the factor specified for the prefix is
   * the superscript if one is specified for the prefix, or else value2.
   * Superscripts are specified for base 10 prefixes; otherwise base 2
   * is assumed and value2 is used.
   */

  _createClass(UnitsInput, [{
    key: "loadPrefixes",
    value: function loadPrefixes() {
      var len = this.prefixesInput_.length;
      for (var i = 0; i < len; i++) {
        var pfx = this.prefixesInput_[i];
        var theCode = Ucum.caseSensitive ? pfx.caseSensCode : pfx.caseInsensCode;
        var theFactor = pfx.superscript ? pfx.superscript : pfx.value2;
        var np = new Prefix(theCode, pfx.name, theFactor);
      }
    } // end loadPrefixes

    /**
     * Loads unit input data. A unit object is created for each element in the
     * list.
     *
     * @param list the input list to be loaded.  Currently this can be either the
     *  baseUnitsInput_ list or the unitAtomsInput_ list.
     * @param isBase boolean indicating whether or not the list is of base units
     */

  }, {
    key: "loadUnits",
    value: function loadUnits(list, isBase) {
      //let ut = UnitTables.getInstance();
      var ut = Ucum.unitTables_;
      var len = list.length;
      for (var i = 0; i < len; i++) {
        var nb = new Unit(list[i]);
        nb.isBase = isBase;
        ut.addUnit(nb);
      }
    } // end loadUnits

  }]);

  return UnitsInput;
})(); // end unitsInput
