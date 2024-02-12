"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Unit = void 0;
var _ucumFunctions = _interopRequireDefault(require("./ucumFunctions.js"));
var intUtils_ = _interopRequireWildcard(require("./ucumInternalUtils.js"));
function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }
function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * This class represents one unit of measure.  It includes
 * functions to cover constructor, accessor, and assignment tasks as
 * well as operators to calculate multiplication, division and raising
 * to a power.
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */
var Ucum = require('./config.js').Ucum;
var Dimension = require('./dimension.js').Dimension;
var UnitTables;
var isInteger = require("is-integer");
class Unit {
  /**
   * Constructor.
   *
   * @param attrs an optional parameter that may be:
   *  a string, which is parsed by the unit parser, which creates
   *  the unit from the parsed string; or
   *  a hash containing all or some values for the attributes of
   *  the unit, where the keys are the attribute names, without a
   *  trailing underscore, e.g., name instead of name_; or
   *  null, in which case an empty hash is created and used to
   *  set the values forthe attributes.
   *  If a hash (empty or not) is used, attributes for which no value
   *  is specified are assigned a default value.
   *
   */
  constructor(attrs = {}) {
    // Process the attrs hash passed in, which may be empty.
    // Create and assign values (from the attrs hash or defaults) to all
    // attributes.  From Class Declarations in Understanding ECMAScript,
    // https://leanpub.com/understandinges6/read/#leanpub-auto-class-declarations,
    //   "Own properties, properties that occur on the instance rather than the
    //    prototype, can only be created inside of a class constructor or method.
    //    It's recommended to create all possible own properties inside of the
    //    constructor function so there's a single place that's responsible for
    //    all of them."

    /*
     * Flag indicating whether or not this is a base unit
     */
    this.isBase_ = attrs['isBase_'] || false;

    /*
     * The unit name, e.g., meter
     */
    this.name_ = attrs['name_'] || '';

    /*
     * The unit's case-sensitive code, e.g., m
     */
    this.csCode_ = attrs['csCode_'] || '';

    /*
     * The unit's case-insensitive code, e.g., M
     */
    this.ciCode_ = attrs['ciCode_'] || '';

    /*
     * The unit's property, e.g., length
     */
    this.property_ = attrs['property_'] || '';

    /*
     * The magnitude of the unit, e.g., 3600/3937 for a yard,
     * where a yard - 3600/3973 * m(eter).  The Dimension
     * property specifies the meter - which is the unit on which
     * a yard is based, and this magnitude specifies how to figure
     * this unit based on the base unit.
     */
    this.magnitude_ = attrs['magnitude_'] || 1;

    /*
     * The Dimension object of the unit
     */
    if (attrs['dim_'] === undefined || attrs['dim_'] === null) {
      this.dim_ = new Dimension();
    }
    // When the unit data stored in json format is reloaded, the dimension data
    // is recognized as a a hash, not as a Dimension object.
    else if (attrs['dim_']['dimVec_'] !== undefined) {
      this.dim_ = new Dimension(attrs['dim_']['dimVec_']);
    } else if (attrs['dim_'] instanceof Dimension) {
      this.dim_ = attrs['dim_'];
    } else if (attrs['dim_'] instanceof Array || isInteger(attrs['dim_'])) {
      this.dim_ = new Dimension(attrs['dim_']);
    } else {
      this.dim_ = new Dimension();
    }
    /*
     * The print symbol of the unit, e.g., m
     */
    this.printSymbol_ = attrs['printSymbol_'] || null;

    /*
     * The class of the unit, where given, e.g., dimless
     */
    this.class_ = attrs['class_'] || null;

    /*
     * A flag indicating whether or not the unit is metric
     */
    this.isMetric_ = attrs['isMetric_'] || false;

    /*
     * The "variable" - which I think is used only for base units
     * The symbol for the variable as used in equations, e.g., s for distance
     */
    this.variable_ = attrs['variable_'] || null; // comes from 'dim' in XML

    /*
     * The conversion function
     */
    this.cnv_ = attrs['cnv_'] || null;

    /*
     * The conversion prefix
     */
    this.cnvPfx_ = attrs['cnvPfx_'] || 1;

    /*
     * Flag indicating whether or not this is a "special" unit, i.e., is
     * constructed using a function specific to the measurement, e.g.,
     * fahrenheit and celsius
     */
    this.isSpecial_ = attrs['isSpecial_'] || false;

    /*
     * Flag indicating whether or not this is an arbitrary unit
     */
    this.isArbitrary_ = attrs['isArbitrary_'] || false;

    /*
     * Integer indicating what level of exponent applies to a mole-based portion
     * of the unit.  So, for the unit "mol", this will be 1.  For "mol2" this
     * will be 2.  For "1/mol" this will be -1.  Any unit that does not include
     * a mole will have a 0 in this field.  This is used to determine
     * commensurability for mole<->mass conversions.
     */
    this.moleExp_ = attrs['moleExp_'] || 0;

    /*
     * Added when added LOINC list of units
     * synonyms are used by the autocompleter to enhance lookup capabilities
     * while source says where the unit first shows up.  Current sources are
     * UCUM - which are units from the unitsofmeasure.org list and LOINC -
     * which are units from the LOINC data.
     */
    this.synonyms_ = attrs['synonyms_'] || null;
    this.source_ = attrs['source_'] || null;
    this.loincProperty_ = attrs['loincProperty_'] || null;
    this.category_ = attrs['category_'] || null;
    this.guidance_ = attrs['guidance_'] || null;

    /*
     * Used to compute dimension; storing for now until I complete
     * unit definition parsing
     */
    /*
     * Case sensitive (cs) and case insensitive (ci) base unit strings,
     * includes exponent and prefix if applicable - specified in
     * <value Unit=x UNIT=X value="nnn">nnn</value> -- the unit part --
     * in the ucum-essence.xml file, and may be specified by a user
     * when requesting conversion or validation of a unit string.  The
     * magnitude (base factor) is used with this to determine the new unit.
     * For example, a Newton (unit code N) is created from the string
     * kg.m/s2, and the value of 1 (base factor defined below). An hour
     * (unit code h) is created from the unit min (minute) with a value
     * of 60.
     */
    this.csUnitString_ = attrs['csUnitString_'] || null;
    this.ciUnitString_ = attrs['ciUnitString_'] || null;

    /*
     * String and numeric versions of factor applied to unit specified in
     * <value Unit=x UNIT=X value="nnn">nnn</value> -- the value part
     */
    this.baseFactorStr_ = attrs['baseFactorStr_'] || null;
    this.baseFactor_ = attrs['baseFactor_'] || null;

    /*
     * Flag used to indicate units where the definition process failed
     * when parsing units from the official units definitions file
     * (currently using the ucum-essence.xml file).  We keep these
     * so that we can use them to at least validate them as valid
     * units, but we don't try to convert them.   This is temporary
     * and only to account for instances where the code does not
     * take into account various special cases in the xml file.
     *
     * This is NOT used when trying to validate a unit string
     * submitted during a conversion or validation attempt.
     */
    this.defError_ = attrs['defError_'] || false;
  } // end constructor

  /**
   * Assign the unity (= dimensionless unit 1) to this unit.
   *
   * @return this unit
   */
  assignUnity() {
    this.name_ = "";
    this.magnitude_ = 1;
    if (!this.dim_) this.dim_ = new Dimension();
    this.dim_.assignZero();
    this.cnv_ = null;
    this.cnvPfx_ = 1;
    return this;
  } // end assignUnity

  /**
   * This assigns one or more values, as provided in the hash passed in,
   * to this unit.
   *
   * @param vals hash of values to be assigned to the attributes
   *        specified by the key(s), which should be the attribute
   *        name without the trailing underscore, e.g., name instead
   *        of name_.
   * @return nothing
   */
  assignVals(vals) {
    for (let key in vals) {
      let uKey = !key.charAt(key.length - 1) === '_' ? key + '_' : key;
      if (this.hasOwnProperty(uKey)) this[uKey] = vals[key];else throw new Error(`Parameter error; ${key} is not a property of a Unit`);
    }
  } // end assignVals

  /**
   * This creates a clone of this unit.
   *
   * @return the clone
   */
  clone() {
    let retUnit = new Unit();
    Object.getOwnPropertyNames(this).forEach(val => {
      if (val === 'dim_') {
        if (this['dim_']) retUnit['dim_'] = this['dim_'].clone();else retUnit['dim_'] = null;
      } else retUnit[val] = this[val];
    });
    return retUnit;
  } // end clone

  /**
   * This assigns all properties of a unit passed to it to this unit.
   *
   * @param unit2 the unit whose properties are to be assigned to this one.
   * @return nothing; this unit is updated
   */
  assign(unit2) {
    Object.getOwnPropertyNames(unit2).forEach(val => {
      if (val === 'dim_') {
        if (unit2['dim_']) this['dim_'] = unit2['dim_'].clone();else this['dim_'] = null;
      } else {
        this[val] = unit2[val];
      }
    });
  } // end assign

  /**
   * This determines whether or not object properties of the unit
   * passed in are equal to the corresponding properties in this unit.
   * The following properties are the only ones checked:
   *   magnitude_, dim_, cnv_ and cnvPfx_
   *
   * @param unit2 the unit whose properties are to be checked.
   * @return boolean indicating whether or not they match
   */
  equals(unit2) {
    return this.magnitude_ === unit2.magnitude_ && this.cnv_ === unit2.cnv_ && this.cnvPfx_ === unit2.cnvPfx_ && (this.dim_ === null && unit2.dim_ === null || this.dim_.equals(unit2.dim_));
  } // end equals

  /**
   * This method compares every attribute of two objects to determine
   * if they all match.
   *
   * @param unit2 the unit that is to be compared to this unit
   * @return boolean indicating whether or not every attribute matches
   */
  fullEquals(unit2) {
    let thisAttr = Object.keys(this).sort();
    let u2Attr = Object.keys(unit2).sort();
    let keyLen = thisAttr.length;
    let match = keyLen === u2Attr.length;

    // check each attribute.   Dimension objects have to checked using
    // the equals function of the Dimension class.
    for (let k = 0; k < keyLen && match; k++) {
      if (thisAttr[k] === u2Attr[k]) {
        if (thisAttr[k] === 'dim_') match = this.dim_.equals(unit2.dim_);else match = this[thisAttr[k]] === unit2[thisAttr[k]];
      } else match = false;
    } // end do for each key and attribute
    return match;
  } // end of fullEquals

  /**
   * This returns the value of the property named by the parameter
   * passed in.
   *
   * @param propertyName name of the property to be returned, with
   *        or without the trailing underscore.
   * @return the requested property, if found for this unit
   * @throws an error if the property is not found for this unit
   */
  getProperty(propertyName) {
    let uProp = propertyName.charAt(propertyName.length - 1) === '_' ? propertyName : propertyName + '_';
    return this[uProp];
  } // end getProperty

  /**
   * Takes a measurement consisting of a number of units and a unit and returns
   * the equivalent number of this unit.  So, 15 mL would translate
   * to 1 tablespoon if this object is a tablespoon.
   *
   * Note that the number returned may not be what is normally expected.
   * For example, converting 10 Celsius units to Fahrenheit would "normally"
   * return a value of 50.   But in this case you'll get back something like
   * 49.99999999999994.
   *
   * If either unit is an arbitrary unit an exception is raised.
   *
   * @param num the magnitude for the unit to be translated (e.g. 15 for 15 mL)
   * @param fromUnit the unit to be translated to one of this type (e.g. a mL unit)
   *
   * @return the number of converted units (e.g. 1 for 1 tablespoon)
   * @throws an error if the dimension of the fromUnit differs from this unit's
   * dimension
   */
  convertFrom(num, fromUnit) {
    let newNum = 0.0;
    if (this.isArbitrary_) throw new Error(`Attempt to convert to arbitrary unit "${this.csCode_}"`);
    if (fromUnit.isArbitrary_) throw new Error(`Attempt to convert arbitrary unit "${fromUnit.csCode_}"`);

    // reject request if both units have dimensions that are not equal
    if (fromUnit.dim_ && this.dim_ && !fromUnit.dim_.equals(this.dim_)) {
      // check first to see if a mole<->mass conversion is appropriate
      if (this.isMoleMassCommensurable(fromUnit)) {
        throw new Error(Ucum.needMoleWeightMsg_);
      } else {
        throw new Error(`Sorry.  ${fromUnit.csCode_} cannot be converted ` + `to ${this.csCode_}.`);
      }
    }
    // reject request if there is a "from" dimension but no "to" dimension
    if (fromUnit.dim_ && (!this.dim_ || this.dim_.isNull())) {
      throw new Error(`Sorry.  ${fromUnit.csCode_} cannot be converted ` + `to ${this.csCode_}.`);
    }

    // reject request if there is a "to" dimension but no "from" dimension
    if (this.dim_ && (!fromUnit.dim_ || fromUnit.dim_.isNull())) {
      throw new Error(`Sorry.  ${fromUnit.csCode_} cannot be converted ` + `to ${this.csCode_}.`);
    }
    let fromCnv = fromUnit.cnv_;
    let fromMag = fromUnit.magnitude_;
    let x;
    if (fromCnv != null) {
      // turn num * fromUnit.magnitude into its ratio scale equivalent,
      // e.g., convert Celsius to Kelvin
      let fromFunc = _ucumFunctions.default.forName(fromCnv);
      x = fromFunc.cnvFrom(num * fromUnit.cnvPfx_) * fromMag;
      //x = fromFunc.cnvFrom(num * fromMag) * fromUnit.cnvPfx_;
    } else {
      x = num * fromMag;
    }
    if (this.cnv_ != null) {
      // turn mag * origUnit on ratio scale into a non-ratio unit,
      // e.g. convert Kelvin to Fahrenheit
      let toFunc = _ucumFunctions.default.forName(this.cnv_);
      newNum = toFunc.cnvTo(x / this.magnitude_) / this.cnvPfx_;
    } else {
      newNum = x / this.magnitude_;
    }
    return newNum;
  } // end convertFrom

  /**
   * Takes a number and a target unit and returns the number for a measurement
   * of this unit that corresponds to the number of the target unit passed in.
   * So, 1 tablespoon (where this unit represents a tablespoon) would translate
   * to 15 mL.
   *
   * See the note on convertFrom about return values.
   *
   * @param mag the magnitude for this unit (e.g. 1 for 1 tablespoon)
   * @param toUnit the unit to which this unit is to be translated
   *  (e.g. an mL unit)
   *
   * @return the converted number value (e.g. 15 mL)
   * @throws an error if the dimension of the toUnit differs from this unit's
   *   dimension
   */
  convertTo(num, toUnit) {
    return toUnit.convertFrom(num, this);
  } // end convertTo

  /**
   * Takes a given number of this unit returns the number of this unit
   * if it is converted into a coherent unit.  Does not change this unit.
   *
   * If this is a coherent unit already, just gives back the number
   * passed in.
   *
   * @param num the number for the coherent version of this unit
   * @return the number for the coherent version of this unit
   */
  convertCoherent(num) {
    // convert mag' * u' into canonical number * u on ratio scale
    if (this.cnv_ !== null) num = this.cnv_.f_from(num / this.cnvPfx_) * this.magnitude_;
    return num;
  } // end convertCoherent

  /**
   * Mutates this unit into a coherent unit and converts a given number of
   * units to the appropriate value for this unit as a coherent unit
   *
   * @param num the number for this unit before conversion
   * @return the number of this unit after conversion
   * @throws an error if the dimensions differ
   */
  mutateCoherent(num) {
    // convert mu' * u' into canonical mu * u on ratio scale
    num = this.convertCoherent(num);

    // mutate to coherent unit
    this.magnitude_ = 1;
    this.cnv_ = null;
    this.cnvPfx_ = 1;
    this.name_ = "";

    // build a name as a term of coherent base units
    // This is probably ALL WRONG and a HORRIBLE MISTAKE
    // but until we figure out what the heck the name being
    // built here really is, it will have to stay.
    for (let i = 0, max = Dimension.getMax(); i < max; i++) {
      let elem = this.dim_.getElementAt(i);
      let tabs = this._getUnitTables();
      let uA = tabs.getUnitsByDimension(new Dimension(i));
      if (uA == null) throw new Error(`Can't find base unit for dimension ${i}`);
      this.name_ = uA.name + elem;
    }
    return num;
  } // end mutateCoherent

  /**
   * Calculates the number of units that would result from converting a unit
   * expressed in mass/grams to a unit expressed in moles.  The "this" unit is
   * the unit expressed in some form of mass (g, mg, mmg, kg, whatever) and the
   * target or "to" unit - the molUnit parameter - is a unit expressed in moles
   * - mol, umol, mmol, etc.  The unit expressions surrounding the moles and
   * mass must be convertible.  No validation of this requirement is performed.
   *
   * @param amt the quantity of this unit to be converted
   * @param molUnit the target/to unit for which the converted # is wanted
   * @param molecularWeight the molecular weight of the substance for which the
   *  conversion is being made
   * @return the equivalent amount in molUnit
   */
  convertMassToMol(amt, molUnit, molecularWeight) {
    // The prefix values that have been applied to this unit, which is the mass
    // (grams) unit, are reflected in the magnitude.  So the number of moles
    // represented by this unit equals the number of grams -- amount * magnitude
    // divided by the molecular Weight
    let molAmt = this.magnitude_ * amt / molecularWeight;
    // The molUnit's basic magnitude, before prefixes are applied,
    // is avogadro's number, get that and divide it out of the current magnitude.
    let tabs = this._getUnitTables();
    let avoNum = tabs.getUnitByCode('mol').magnitude_;
    let molesFactor = molUnit.magnitude_ / avoNum;
    // return the molAmt divided by the molesFactor as the number of moles
    // for the molUnit
    return molAmt / molesFactor;
  }

  /**
   * Calculates the number of units that would result from converting a unit
   * expressed in moles to a unit expressed in mass (grams).  The "this" unit
   * is the unit expressed in some form of moles, e.g., mol, umol, mmol, etc.,
   * and the target or "to" unit is a unit expressed in some form of mass, e.g.,
   * g, mg, mmg, kg, etc.  Any unit expressions surrounding the moles and mass
   * must be convertible. No validation of this requirement is performed.
   *
   * @param amt the quantity of this unit to be converted
   * @param massUnit the target/to unit for which the converted # is wanted
   * @param molecularWeight the molecular weight of the substance for which the
   *  conversion is being made
   * @return the equivalent amount in massUnit
   */
  convertMolToMass(amt, massUnit, molecularWeight) {
    // A simple mole unit has a magnitude of avogadro's number.  Get that
    // number now (since not everyone agrees on what it is, and what is
    // being used in this system might change).
    let tabs = this._getUnitTables();
    let avoNum = tabs.getUnitByCode('mol').magnitude_;
    // Determine what prefix values (mg or mg/dL, etc.) have been applied to
    // this unit by dividing the simple mole unit magnitude out of the
    // current mole unit magnitude.
    let molesFactor = this.magnitude_ / avoNum;
    // The number of grams (mass) is equal to the number of moles (amt)
    // times the molecular weight.  We also multiply that by the prefix values
    // applied to the current unit (molesFactor) to get the grams for this
    // particular unit.
    let massAmt = molesFactor * amt * molecularWeight;
    // Finally, we return the mass amount/grams for this particular unit
    // divided by any effects of prefixes applied to the "to" unit, which
    // is assumed to be some form of a gram unit
    return massAmt / massUnit.magnitude_;
  }

  /**
   * Mutates this unit into a unit on a ratio scale and converts a specified
   * number of units to an appropriate value for this converted unit
   *
   * @param num the number of this unit before it's converted
   * @return the magnitude of this unit after it's converted
   * @throw an error if the dimensions differ
   */
  mutateRatio(num) {
    if (this.cnv_ == null) return this.mutateCoherent(num);else return num;
  } // end mutateRatio

  /**
   * Multiplies this unit with a scalar. Special meaning for
   * special units so that (0.1*B) is 1 dB.
   *
   * This function DOES NOT modify this unit.
   *
   * @param s the value by which this unit is to be multiplied
   * @return a copy this unit multiplied by s
   * */
  multiplyThis(s) {
    let retUnit = this.clone();
    if (retUnit.cnv_ != null) retUnit.cnvPfx_ *= s;else retUnit.magnitude_ *= s;
    let mulVal = s.toString();
    retUnit.name_ = this._concatStrs(mulVal, '*', this.name_, '[', ']');
    retUnit.csCode_ = this._concatStrs(mulVal, '.', this.csCode_, '(', ')');
    retUnit.ciCode_ = this._concatStrs(mulVal, '.', this.ciCode_, '(', ')');
    retUnit.printSymbol_ = this._concatStrs(mulVal, '.', this.printSymbol_, '(', ')');
    return retUnit;
  } // end multiplyThis

  /**
   * Multiplies this unit with another unit. If one of the
   * units is a non-ratio unit the other must be dimensionless or
   * else an exception is thrown.
   *
   * This function does NOT modify this unit
   * @param unit2 the unit to be multiplied with this one
   * @return this unit after it is multiplied
   * @throws an error if one of the units is not on a ratio-scale
   *         and the other is not dimensionless.
   */
  multiplyThese(unit2) {
    var retUnit = this.clone();
    if (retUnit.cnv_ != null) {
      if (unit2.cnv_ == null && (!unit2.dim_ || unit2.dim_.isZero())) retUnit.cnvPfx_ *= unit2.magnitude_;else throw new Error(`Attempt to multiply non-ratio unit ${retUnit.name_} ` + 'failed.');
    } // end if this unit has a conversion function
    else if (unit2.cnv_ != null) {
      if (!retUnit.dim_ || retUnit.dim_.isZero()) {
        retUnit.cnvPfx_ = unit2.cnvPfx_ * retUnit.magnitude_;
        retUnit.magnitude_ = unit2.magnitude_;
        retUnit.cnv_ = unit2.cnv_;
      } else throw new Error(`Attempt to multiply non-ratio unit ${unit2.name_}`);
    } // end if unit2 has a conversion function

    // else neither unit has a conversion function
    else {
      retUnit.magnitude_ *= unit2.magnitude_;
    } // end if unit2 does not have a conversion function

    // If this.dim_ isn't there, clone the dimension in unit2 - if dimVec_
    // is a dimension in unit2.dim_; else just transfer it to this dimension
    if (!retUnit.dim_ || retUnit.dim_ && !retUnit.dim_.dimVec_) {
      if (unit2.dim_) retUnit.dim_ = unit2.dim_.clone();else retUnit.dim_ = unit2.dim_;
    }
    // Else this.dim_ is there.  If there is a dimension for unit2,
    // add it to this one.
    else if (unit2.dim_ && unit2.dim_ instanceof Dimension) {
      retUnit.dim_.add(unit2.dim_);
    }

    // Concatenate the unit info (name, code, etc) for all cases
    // where the multiplication was performed (an error wasn't thrown)
    retUnit.name_ = this._concatStrs(retUnit.name_, '*', unit2.name_, '[', ']');
    retUnit.csCode_ = this._concatStrs(retUnit.csCode_, '.', unit2.csCode_, '(', ')');
    if (retUnit.ciCode_ && unit2.ciCode_) retUnit.ciCode_ = this._concatStrs(retUnit.ciCode_, '.', unit2.ciCode_, '(', ')');else if (unit2.ciCode_) retUnit.ciCode_ = unit2.ciCode_;
    retUnit.resetFieldsForDerivedUnit();
    if (retUnit.printSymbol_ && unit2.printSymbol_) retUnit.printSymbol_ = this._concatStrs(retUnit.printSymbol_, '.', unit2.printSymbol_, '(', ')');else if (unit2.printSymbol_) retUnit.printSymbol_ = unit2.printSymbol_;

    // Update the mole exponent count by adding the count for unit2 to the
    // count for this unit.
    retUnit.moleExp_ = retUnit.moleExp_ + unit2.moleExp_;

    // A unit that has the arbitrary attribute taints any unit created from it
    // via an arithmetic operation.  Taint accordingly
    // if (!retUnit.isMole_)
    //   retUnit.isMole_ = unit2.isMole_ ;
    if (!retUnit.isArbitrary_) retUnit.isArbitrary_ = unit2.isArbitrary_;

    // Likewise for special units
    if (!retUnit.isSpecial_) retUnit.isSpecial_ = unit2.isSpecial_;
    return retUnit;
  } // end multiplyThese

  /**
   *  Clears fields like isBase_, synonyms_, etc. when a unit has been cloned
   *  from a known unit but it being used to construct a derived unit.
   */
  resetFieldsForDerivedUnit() {
    this.guidance_ = '';
    this.synonyms_ = null;
    this.isBase_ = false;
  }

  /**
   * Divides this unit by another unit. If this unit is not on a ratio
   * scale an exception is raised. Mutating to a ratio scale unit
   * is not possible for a unit, only for a measurement.
   *
   * This unit is NOT modified by this function.
   * @param unit2 the unit by which to divide this one
   * @return this unit after it is divided by unit2
   * @throws an error if either of the units is not on a ratio scale.
   * */
  divide(unit2) {
    var retUnit = this.clone();
    if (retUnit.cnv_ != null) throw new Error(`Attempt to divide non-ratio unit ${retUnit.name_}`);
    if (unit2.cnv_ != null) throw new Error(`Attempt to divide by non-ratio unit ${unit2.name_}`);
    if (retUnit.name_ && unit2.name_) retUnit.name_ = this._concatStrs(retUnit.name_, '/', unit2.name_, '[', ']');else if (unit2.name_) retUnit.name_ = unit2.invertString(unit2.name_);
    retUnit.csCode_ = this._concatStrs(retUnit.csCode_, '/', unit2.csCode_, '(', ')');
    if (retUnit.ciCode_ && unit2.ciCode_) retUnit.ciCode_ = this._concatStrs(retUnit.ciCode_, '/', unit2.ciCode_, '(', ')');else if (unit2.ciCode_) retUnit.ciCode_ = unit2.invertString(unit2.ciCode_);
    retUnit.resetFieldsForDerivedUnit();
    retUnit.magnitude_ /= unit2.magnitude_;
    if (retUnit.printSymbol_ && unit2.printSymbol_) retUnit.printSymbol_ = this._concatStrs(retUnit.printSymbol_, '/', unit2.printSymbol_, '(', ')');else if (unit2.printSymbol_) retUnit.printSymbol_ = unit2.invertString(unit2.printSymbol_);

    // Continue if unit2 has a dimension object.
    // If this object has a dimension object, subtract unit2's dim_ object from
    // this one. The sub method will take care of cases where the dimVec_ arrays
    // are missing on one or both dim_ objects.
    if (unit2.dim_) {
      if (retUnit.dim_) {
        if (retUnit.dim_.isNull()) retUnit.dim_.assignZero();
        retUnit.dim_ = retUnit.dim_.sub(unit2.dim_);
      } // end if this.dim_ exists

      // Else if this dim_ object is missing, clone unit2's dim_ object
      // and give the inverted clone to this unit.
      else retUnit.dim_ = unit2.dim_.clone().minus();
    } // end if unit2 has a dimension object

    // Update the mole exponent count by subtracting the count for unit2 from
    // the // count for this unit.
    retUnit.moleExp_ = retUnit.moleExp_ - unit2.moleExp_;

    // A unit that has the arbitrary attribute taints any unit created from
    // it via an arithmetic operation.  Taint accordingly
    // if (!retUnit.isMole_)
    //   retUnit.isMole_ = unit2.isMole_ ;
    if (!retUnit.isArbitrary_) retUnit.isArbitrary_ = unit2.isArbitrary_;
    return retUnit;
  } // end divide

  /**
   * Invert this unit with respect to multiplication. If this unit is not
   * on a ratio scale an exception is thrown. Mutating to a ratio scale unit
   * is not possible for a unit, only for a measurement (the magnitude and
   * dimension).
   *
   *  This unit is modified by this function.
   * @return this unit after being inverted
   * @throws and error if this unit is not on a ratio scale
   */
  invert() {
    if (this.cnv_ != null) throw new Error(`Attempt to invert a non-ratio unit - ${this.name_}`);
    this.name_ = this.invertString(this.name_);
    this.magnitude_ = 1 / this.magnitude_;
    this.dim_.minus();
    return this;
  } // end invert

  /**
   * Inverts a string, where the string is assumed to be a code or a name
   * of a division operation where the string is the divisor and the dividend
   * is blank.
   *
   * @param the string to be inverted
   * @return the inverted string
   */
  invertString(theString) {
    if (theString.length > 0) {
      // replace('<!', '</') is here to make sure closing html tags like </sup> are intact. See LF-2830.
      let stringRep = theString.replace('/', "!").replace('.', '/').replace('<!', '</').replace("!", '.');
      switch (stringRep.charAt(0)) {
        case '.':
          theString = stringRep.substr(1);
          break;
        case '/':
          theString = stringRep;
          break;
        default:
          theString = "/" + stringRep;
      }
    }
    return theString;
  } // end invertString

  /**
   * This function handles concatenation of two strings and an operator.
   * It's called to build unit data, e.g., unit name, unit code, etc., from
   * two different units, joined by the specified operator.
   *
   * @param str1 the first string to appear in the result
   * @param operator the operator ('*', '.' or '/') to appear between the strings
   * @param str2 the second string to appear in the result
   * @param startChar the starting character to be used, when needed, to
   *  enclose a string
   * @param endChar the ending character to be used, when needed, to enclose
   *  a string
   * @returns the built string
   */
  _concatStrs(str1, operator, str2, startChar, endChar) {
    return this._buildOneString(str1, startChar, endChar) + operator + this._buildOneString(str2, startChar, endChar);
  }

  /**
   * This function handles creation of one string to be included in a
   * concatenated string.   Basically it checks to see if the string
   * needs to be enclosed either in parentheses or square brackets.
   *
   * The string is enclosed if it is not a number, is not already enclosed in a pair of
   * parentheses or square brackets, and includes a period, and asterisk,
   * a slash or a blank space.
   *
   * @param str the string
   * @param startChar starting enclosing character
   * @param endChar ending enclosing character
   * @returns the string
   */
  _buildOneString(str, startChar, endChar) {
    let ret = '';
    if (intUtils_.isNumericString(str)) {
      ret = str;
    } else {
      if (str.charAt(0) === '(' && str.endsWith(')') || str.charAt(0) === '[' && str.endsWith(']')) {
        ret = str;
      } else if (/[./* ]/.test(str)) {
        ret = startChar + str + endChar;
      } else {
        ret = str;
      }
    }
    return ret;
  }

  /**
   * Raises the unit to a power.  For example
   *  kg.m/s2 raised to the -2 power would be kg-2.m-2/s-4
   *
   * If this unit is not on a ratio scale an error is thrown. Mutating
   * to a ratio scale unit is not possible for a unit, only for a
   * measurement (magnitude and dimension).
   *
   * This is based on the pow method in Gunter Schadow's java version,
   * although it uses javascript capabilities to simplify the processing.
   *
   * This unit is modified by this function
   *
   * @param p the power to with this unit is to be raise
   * @return this unit after it is raised
   * @throws an error if this unit is not on a ratio scale.
   */
  power(p) {
    if (this.cnv_ != null) throw new Error(`Attempt to raise a non-ratio unit, ${this.name_}, ` + 'to a power.');

    //this.name_ = UnitString.pow(this.name_, p);
    // the above line is replaced with the code below, as the pow method
    // never actually existing in the UnitString class.  (Tried to use
    // Schadow java code but this way ended up being a lot easier).
    let uStr = this.csCode_;
    let uArray = uStr.match(/([./]|[^./]+)/g);
    let arLen = uArray.length;
    for (let i = 0; i < arLen; i++) {
      let un = uArray[i];
      if (un !== '/' && un !== '.') {
        let nun = parseInt(un);
        if (isInteger(nun)) uArray[i] = Math.pow(nun, p).toString();else {
          let uLen = un.length;
          for (let u = uLen - 1; u >= 0; u--) {
            let uChar = parseInt(un[u]);
            if (!isInteger(uChar)) {
              if (un[u] === '-' || un[u] === '+') {
                u--;
              }
              if (u < uLen - 1) {
                let exp = parseInt(un.substr(u));
                exp = Math.pow(exp, p);
                uArray[i] = un.substr(0, u) + exp.toString();
                u = -1;
              } else {
                uArray[i] += p.toString();
                u = -1;
              } // end if there are/aren't some numbers at the end
              u = -1;
            } // end if this character is not a number
          } // end searching backwards for start of exponent
        } // end if this element is not a number
      } // end if the current element is not an operator
    } // end do for each element of the units array

    // reassemble the updated units array to a string
    this.csCode_ = uArray.join('');
    this.magnitude_ = Math.pow(this.magnitude_, p);
    if (this.dim_) {
      this.dim_.mul(p);
    }
    return this;
  } // end power

  /*
   * This function tests this unit against the unit passed in to see if the
   * two are mole to mass commensurable.  It assumes that one of the units
   * is a mole-based unit and the other is a mass-based unit.  It also assumes
   * that the mole-based unit has a single mole unit in the numerator and that
   * the mass-based unit has a single mass unit in the numerator.  It does NOT
   * check to validate those assumptions.
   *
   * The check is made by setting the dimension vector element corresponding
   * to the base mass unit (gram) in the mole unit, and then comparing the
   * two dimension vectors.  If they match, the units are commensurable.
   * Otherwise they are not.
   *
   * @param unit2 the unit to be compared to this one
   * @returns boolean indicating commensurability
   */
  isMoleMassCommensurable(unit2) {
    let tabs = this._getUnitTables();
    let d = tabs.getMassDimensionIndex();
    let commensurable = false;
    if (this.moleExp_ === 1 && unit2.moleExp_ === 0) {
      let testDim = this.dim_.clone();
      let curVal = testDim.getElementAt(d);
      testDim.setElementAt(d, curVal + this.moleExp_);
      commensurable = testDim.equals(unit2.dim_);
    } else if (unit2.moleExp_ === 1 && this.moleExp_ === 0) {
      let testDim = unit2.dim_.clone();
      let curVal = testDim.getElementAt(d);
      testDim.setElementAt(d, curVal + unit2.moleExp_);
      commensurable = testDim.equals(this.dim_);
    }
    return commensurable;
  }

  /**
   * This returns the UnitTables singleton object.  Including the require
   * statement included here causes a circular dependency condition that
   * resulted in the UnitTables object not being defined for the Unit object.
   * sigh.  Thanks, Paul, for figuring this out.
   *
   * @private
   */
  _getUnitTables() {
    if (!UnitTables) UnitTables = require('./unitTables.js').UnitTables;
    return UnitTables.getInstance();
  }
} // end Unit class
exports.Unit = Unit;
//# sourceMappingURL=unit.js.map
