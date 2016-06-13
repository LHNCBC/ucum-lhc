/*
 * This class manages the special functions used by some units.
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */

class Functions {

  /**
   * Constructor
   *
   * Creates the singleton object that contains the list of functions used
   * to convert special units.
   */
  constructor() {

    // Create the hash containing the function pairs
    this.fs = {};

    // Celsius - convert to Celsius from kelvin and from Celsius to kelvin
    // where kelvin is the base unit for temperature
    this.fs['cel'] = {cnvTo   : function(x){return x - 273.15;},
                      cnvFrom : function(x){return x + 273.15;}};

    // Fahrenheit - convert to Fahrenheit from kelvin and from Fahrenheit to
    // kelvin - which is the base unit for temperature
    this.fs['degf'] = {cnvTo   : function(x){return x - 459.67;},
                       cnvFrom : function(x){return x + 459.67;}};

    // Reaumur - convert between Reaumur and Kelvin.   Because of the way the
    // calling code in the Units class is set up (in the convertFrom method),
    // what is given here as the convertTo function is actually the convert
    // from method and vice versa.
    //this.fs['degre'] = {cnvTo   : function(x){return x + 273.15;},
    //                    cnvFrom : function(x){return x - 273.15;}};
    this.fs['degre'] = {cnvTo   : function(x){return x - 273.15;},
                        cnvFrom : function(x){return x + 273.15;}};

    // pH - convert to pH from moles per liter and from moles per liter to pH
    // where a mole is an amount of a substance (a count of particles)
    this.fs['ph'] = {cnvTo  : function(x){return - Math.log(x) / Math.LN10;},
                     cnvFrom : function(x){return Math.pow(10, -x);}};

    // ln - natural logarithm (base e 2.71828) - apply (cnvTo) and invert (cnvFrom)
    // and 2ln - two times the natural logarithm
    this.fs['ln'] = {cnvTo : function(x){return Math.log(x);},
                     cnvFrom : function(x){return Math.exp(x);}};
    this.fs['2ln'] = {cnvTo : function(x){return 2 * Math.log(x);},
                      cnvFrom : function(x){return Math.exp(x / 2);}};

    // lg - the decadic logarithm (base 10)
    this.fs['lg'] = {cnvTo : function(x){return Math.log(x) / Math.LN10;},
                     cnvFrom : function(x){return Math.pow(10, x);}};
    this.fs['10lg'] = {cnvTo : function(x){return 10 * Math.log(x)/Math.LN10;},
                       cnvFrom : function(x){return Math.pow(10, x / 10);}};
    this.fs['20lg'] = {cnvTo : function(x){return 20 * Math.log(x)/Math.LN10;},
                       cnvFrom : function(x){return Math.pow(10, x / 20);}};
    // The plain text ucum units file uses '2lg'
    this.fs['2lg'] = {cnvTo : function(x){return 2 * Math.log(x)/Math.LN10;},
                           cnvFrom : function(x){return Math.pow(10, x / 2);}};
    // The xml essence ucum file uses lgTimes2
    this.fs['lgtimes2'] = this.fs['2lg'];

    // ld - dual logarithm (base 2)
    this.fs['ld'] = {cnvTo : function(x){return Math.log(x)/Math.LN2;},
                     cnvFrom : function(x){return Math.pow(2, x);}};

    // tan - tangent
    this.fs['100tan'] = {cnvTo : function(x){return Math.tan(x) * 100;},
                         cnvFrom : function(x){return Math.atan(x/100);}};
    // the xml essence ucum file uses both 100tan and tanTimes100
    this.fs['tanTimes100'] = this.fs['100tan'] ;

    // sqrt - square root
    this.fs['sqrt'] = {cnvTo : function(x){return Math.sqrt(x);},
                       cnvFrom : function(x){return x*x;}};

    // inv - inverse
    this.fs['inv'] = {cnvTo : function(x){return 1.0 / x;},
                      cnvFrom : function(x){return 1.0 / x;}};

    // homeopathic potency functions
    this.fs['hpX'] = {cnvTo : function(x){return -(this.fs['lg'](x));},
                      cnvFrom : function(x){return Math.pow(10, -x);}};

    this.fs['hpC'] = {cnvTo : function(x){
                              return -(this.fs['ln'](x))/this.fs['ln'](100);},
                       cnvFrom : function(x){return Math.pow(100, -x);}};

    this.fs['hpM'] = {cnvTo : function(x){
                              return -(this.fs['ln'](x))/this.fs['ln'](1000);},
                      cnvFrom : function(x){return Math.pow(1000, -x);}};

    this.fs['hpQ'] = {cnvTo : function(x){
                              return -(this.fs['ln'](x))/this.fs['ln'](50000);},
                      cnvFrom : function(x){return Math.pow(50000, -x);}};


    // Make this a singleton.  See UnitTables constructor for details.
    let holdThis = Functions.prototype;
    if (exports)
      exports.Functions = Functions ;
    Functions = function(){throw (new Error('Functions is a Singleton. ' +
                           'Use Functions.getInstance() instead.'))};
    Functions.prototype = holdThis;
    let self = this ;
    Functions.getInstance = function(){return self} ;

  } // end of constructor


  /**
   * Returns the function with the name specified
   *
   * @param fname name of the function to be returned
   * @return the function with the specified name
   * @throws an error message if the function is not found
   */
  forName(fname) {
    fname = fname.toLowerCase();
    
    let f = this.fs[fname] ;
    if (f === null)
      throw(new Error(`Requested function ${fname} is not defined`));
    return f;
  }


  /**
   * Returns a flag indicating whether or not the function has been
   * defined.
   *
   * @param fname name of the function in question
   * @return true if it has been defined; false if not
   */
  isDefined(fname) {
    fname = fname.toLowerCase();
    return this.fs[fname] !== null;
  }

} // end of Functions class


/**
 *  This function exists ONLY until the original Functions constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton Functions object.  This is based on the UnitTables singleton
 *  implementation; see more detail in the UnitTables constructor description.
 *
 *  @return the singleton Functions object.
 */
Functions.getInstance = function(){
  return new Functions();
}
Functions.getInstance();