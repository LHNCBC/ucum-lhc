/*
 * This class manages the special functions used by some units.
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */

class UcumFunctions {

  /**
   * Constructor
   *
   * Creates the singleton object that contains the list of functions used
   * to convert special units.
   */
  constructor() {

    // Create the hash containing the function pairs
    this.funcs = Object.create(null);

    // Celsius - convert to Celsius from kelvin and from Celsius to kelvin
    // where kelvin is the base unit for temperature
    this.funcs['cel'] = {cnvTo   : function(x){return x - 273.15;},
                      cnvFrom : function(x){return x + 273.15;}};

    // Fahrenheit - convert to Fahrenheit from kelvin and from Fahrenheit to
    // kelvin - which is the base unit for temperature
    this.funcs['degf'] = {cnvTo   : function(x){return x - 459.67;},
                       cnvFrom : function(x){return x + 459.67;}};

    // Reaumur - convert between Reaumur and Kelvin.   Because of the way the
    // calling code in the Units class is set up (in the convertFrom method),
    // what is given here as the convertTo function is actually the convert
    // from method and vice versa.
    //this.funcs['degre'] = {cnvTo   : function(x){return x + 273.15;},
    //                    cnvFrom : function(x){return x - 273.15;}};
    this.funcs['degre'] = {cnvTo   : function(x){return x - 273.15;},
                        cnvFrom : function(x){return x + 273.15;}};

    // pH - convert to pH from moles per liter and from moles per liter to pH
    // where a mole is an amount of a substance (a count of particles)
    this.funcs['ph'] = {cnvTo  : function(x){return - Math.log(x) / Math.LN10;},
                     cnvFrom : function(x){return Math.pow(10, -x);}};

    // ln - natural logarithm (base e 2.71828) - apply (cnvTo) and invert (cnvFrom)
    // and 2ln - two times the natural logarithm
    this.funcs['ln'] = {cnvTo : function(x){return Math.log(x);},
                     cnvFrom : function(x){return Math.exp(x);}};
    this.funcs['2ln'] = {cnvTo : function(x){return 2 * Math.log(x);},
                      cnvFrom : function(x){return Math.exp(x / 2);}};

    // lg - the decadic logarithm (base 10)
    this.funcs['lg'] = {cnvTo : function(x){return Math.log(x) / Math.LN10;},
                     cnvFrom : function(x){return Math.pow(10, x);}};
    this.funcs['10lg'] = {cnvTo : function(x){return 10 * Math.log(x)/Math.LN10;},
                       cnvFrom : function(x){return Math.pow(10, x / 10);}};
    this.funcs['20lg'] = {cnvTo : function(x){return 20 * Math.log(x)/Math.LN10;},
                       cnvFrom : function(x){return Math.pow(10, x / 20);}};
    // The plain text ucum units file uses '2lg'
    this.funcs['2lg'] = {cnvTo : function(x){return 2 * Math.log(x)/Math.LN10;},
                           cnvFrom : function(x){return Math.pow(10, x / 2);}};
    // The xml essence ucum file uses lgTimes2
    this.funcs['lgtimes2'] = this.funcs['2lg'];

    // ld - dual logarithm (base 2)
    this.funcs['ld'] = {cnvTo : function(x){return Math.log(x)/Math.LN2;},
                     cnvFrom : function(x){return Math.pow(2, x);}};

    // tan - tangent
    this.funcs['100tan'] = {cnvTo : function(x){return Math.tan(x) * 100;},
                         cnvFrom : function(x){return Math.atan(x/100);}};
    // The xml essence ucum file uses both 100tan and tanTimes100.  Keys must
    // be lowercase because forName and isDefined lowercase the name.
    this.funcs['tantimes100'] = this.funcs['100tan'] ;

    // sqrt - square root
    this.funcs['sqrt'] = {cnvTo : function(x){return Math.sqrt(x);},
                       cnvFrom : function(x){return x*x;}};

    // inv - inverse
    this.funcs['inv'] = {cnvTo : function(x){return 1.0 / x;},
                      cnvFrom : function(x){return 1.0 / x;}};

    // Pre-compute the natural logarithms of 10, 100, 1000, and 50000 for use in
    // the homeopathic potency functions
    const LN10 = Math.LN10;
    const LN100 = Math.log(100);
    const LN1000 = Math.log(1000);
    const LN50000 = Math.log(50000);

    // homeopathic potency functions
    this.funcs['hpx'] = {cnvTo : function(x){return -Math.log(x) / LN10;},
                      cnvFrom : function(x){return Math.pow(10, -x);}};

    this.funcs['hpc'] = {cnvTo : function(x){return -Math.log(x) / LN100;},
                       cnvFrom : function(x){return Math.pow(100, -x);}};

    this.funcs['hpm'] = {cnvTo : function(x){return -Math.log(x) / LN1000;},
                      cnvFrom : function(x){return Math.pow(1000, -x);}};

    this.funcs['hpq'] = {cnvTo : function(x){return -Math.log(x) / LN50000;},
                      cnvFrom : function(x){return Math.pow(50000, -x);}};

  } // end of constructor


  /**
   * Returns the pair of conversion functions with the specified name.
   *
   * @param {string} fname - the name of the function pair to be returned,
   *  e.g., "Cel" or "tanTimes100"; the name is case-insensitive
   * @returns {{cnvTo: function(number): number,
   *   cnvFrom: function(number): number}} the function pair, where cnvTo
   *  converts a value on the ratio scale to the special unit's scale and
   *  cnvFrom converts it back
   * @throws {Error} if no function pair with the specified name is defined
   */
  forName(fname) {
    let f = this.funcs[fname.toLowerCase()] ;
    if (f === undefined)
      throw(new Error(`Requested function ${fname} is not defined`));
    return f;
  }


  /**
   * Returns a flag indicating whether or not the function pair has been
   * defined.
   *
   * @param {string} fname - the name of the function pair in question; the
   *  name is case-insensitive
   * @returns {boolean} true if it has been defined; false if not
   */
  isDefined(fname) {
    fname = fname.toLowerCase();
    return this.funcs[fname] !== undefined;
  }

} // end of UcumFunctions class

export default new UcumFunctions(); // one singleton instance
