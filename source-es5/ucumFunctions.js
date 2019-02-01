'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * This class manages the special functions used by some units.
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */

var UcumFunctions = function () {

  /**
   * Constructor
   *
   * Creates the singleton object that contains the list of functions used
   * to convert special units.
   */
  function UcumFunctions() {
    _classCallCheck(this, UcumFunctions);

    // Create the hash containing the function pairs
    this.funcs = {};

    // Celsius - convert to Celsius from kelvin and from Celsius to kelvin
    // where kelvin is the base unit for temperature
    this.funcs['cel'] = { cnvTo: function cnvTo(x) {
        return x - 273.15;
      },
      cnvFrom: function cnvFrom(x) {
        return x + 273.15;
      } };

    // Fahrenheit - convert to Fahrenheit from kelvin and from Fahrenheit to
    // kelvin - which is the base unit for temperature
    this.funcs['degf'] = { cnvTo: function cnvTo(x) {
        return x - 459.67;
      },
      cnvFrom: function cnvFrom(x) {
        return x + 459.67;
      } };

    // Reaumur - convert between Reaumur and Kelvin.   Because of the way the
    // calling code in the Units class is set up (in the convertFrom method),
    // what is given here as the convertTo function is actually the convert
    // from method and vice versa.
    //this.funcs['degre'] = {cnvTo   : function(x){return x + 273.15;},
    //                    cnvFrom : function(x){return x - 273.15;}};
    this.funcs['degre'] = { cnvTo: function cnvTo(x) {
        return x - 273.15;
      },
      cnvFrom: function cnvFrom(x) {
        return x + 273.15;
      } };

    // pH - convert to pH from moles per liter and from moles per liter to pH
    // where a mole is an amount of a substance (a count of particles)
    this.funcs['ph'] = { cnvTo: function cnvTo(x) {
        return -Math.log(x) / Math.LN10;
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(10, -x);
      } };

    // ln - natural logarithm (base e 2.71828) - apply (cnvTo) and invert (cnvFrom)
    // and 2ln - two times the natural logarithm
    this.funcs['ln'] = { cnvTo: function cnvTo(x) {
        return Math.log(x);
      },
      cnvFrom: function cnvFrom(x) {
        return Math.exp(x);
      } };
    this.funcs['2ln'] = { cnvTo: function cnvTo(x) {
        return 2 * Math.log(x);
      },
      cnvFrom: function cnvFrom(x) {
        return Math.exp(x / 2);
      } };

    // lg - the decadic logarithm (base 10)
    this.funcs['lg'] = { cnvTo: function cnvTo(x) {
        return Math.log(x) / Math.LN10;
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(10, x);
      } };
    this.funcs['10lg'] = { cnvTo: function cnvTo(x) {
        return 10 * Math.log(x) / Math.LN10;
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(10, x / 10);
      } };
    this.funcs['20lg'] = { cnvTo: function cnvTo(x) {
        return 20 * Math.log(x) / Math.LN10;
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(10, x / 20);
      } };
    // The plain text ucum units file uses '2lg'
    this.funcs['2lg'] = { cnvTo: function cnvTo(x) {
        return 2 * Math.log(x) / Math.LN10;
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(10, x / 2);
      } };
    // The xml essence ucum file uses lgTimes2
    this.funcs['lgtimes2'] = this.funcs['2lg'];

    // ld - dual logarithm (base 2)
    this.funcs['ld'] = { cnvTo: function cnvTo(x) {
        return Math.log(x) / Math.LN2;
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(2, x);
      } };

    // tan - tangent
    this.funcs['100tan'] = { cnvTo: function cnvTo(x) {
        return Math.tan(x) * 100;
      },
      cnvFrom: function cnvFrom(x) {
        return Math.atan(x / 100);
      } };
    // the xml essence ucum file uses both 100tan and tanTimes100
    this.funcs['tanTimes100'] = this.funcs['100tan'];

    // sqrt - square root
    this.funcs['sqrt'] = { cnvTo: function cnvTo(x) {
        return Math.sqrt(x);
      },
      cnvFrom: function cnvFrom(x) {
        return x * x;
      } };

    // inv - inverse
    this.funcs['inv'] = { cnvTo: function cnvTo(x) {
        return 1.0 / x;
      },
      cnvFrom: function cnvFrom(x) {
        return 1.0 / x;
      } };

    // homeopathic potency functions
    this.funcs['hpX'] = { cnvTo: function cnvTo(x) {
        return -this.funcs['lg'](x);
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(10, -x);
      } };

    this.funcs['hpC'] = { cnvTo: function cnvTo(x) {
        return -this.func['ln'](x) / this.funcs['ln'](100);
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(100, -x);
      } };

    this.funcs['hpM'] = { cnvTo: function cnvTo(x) {
        return -this.funcs['ln'](x) / this.funcs['ln'](1000);
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(1000, -x);
      } };

    this.funcs['hpQ'] = { cnvTo: function cnvTo(x) {
        return -this.funcs['ln'](x) / this.funcs['ln'](50000);
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(50000, -x);
      } };

    // Make this a singleton.  See UnitTables constructor for details.
    var holdThis = UcumFunctions.prototype;
    if (exports) exports.UcumFunctions = UcumFunctions;
    UcumFunctions = function UcumFunctions() {
      throw new Error('UcumFunctions is a Singleton. ' + 'Use UcumFunctions.getInstance() instead.');
    };
    UcumFunctions.prototype = holdThis;
    var self = this;
    UcumFunctions.getInstance = function () {
      return self;
    };
  } // end of constructor


  /**
   * Returns the function with the name specified
   *
   * @param fname name of the function to be returned
   * @return the function with the specified name
   * @throws an error message if the function is not found
   */


  _createClass(UcumFunctions, [{
    key: 'forName',
    value: function forName(fname) {
      fname = fname.toLowerCase();

      var f = this.funcs[fname];
      if (f === null) throw new Error('Requested function ' + fname + ' is not defined');
      return f;
    }

    /**
     * Returns a flag indicating whether or not the function has been
     * defined.
     *
     * @param fname name of the function in question
     * @return true if it has been defined; false if not
     */

  }, {
    key: 'isDefined',
    value: function isDefined(fname) {
      fname = fname.toLowerCase();
      return this.funcs[fname] !== null;
    }
  }]);

  return UcumFunctions;
}(); // end of UcumFunctions class


/**
 *  This function exists ONLY until the original UcumFunctions constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton UcumFunctions object.  This is based on the UnitTables singleton
 *  implementation; see more detail in the UnitTables constructor description.
 *
 *  @return the singleton Functions object.
 */


UcumFunctions.getInstance = function () {
  return new UcumFunctions();
};
UcumFunctions.getInstance();
//# sourceMappingURL=ucumFunctions.js.map
