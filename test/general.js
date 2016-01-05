/**
 * This file contains the javascript used by the conversions test page index.html
 */
/**
 *  The unit tables object
 */
Ucum.unitTables_ = null;

/**
 *  The prefix tables object
 */
Ucum.prefixTables_ = null;

/**
 *  The list of unit names
 */
Ucum.unitNames_ = null;

/**
 *  The Functions object
 */
Ucum.functions_ = null ;

/*
 * This includes general functions, such as initialization steps
 */
Ucum.init = function() {

  Ucum.functions_ = new Functions() ;

  // create the UnitTables singleton
  Ucum.unitTables_ = new UnitTables() ;

  // Load the input data into the unit tables
  new UnitsInput();

  // create the array of unit names
  Ucum.unitNames_ = Ucum.unitTables_.getAllUnitNames() ;


}

Ucum.doConversion = function() {
  let fromName = document.getElementById("convertFrom").value ;
  // I am using parseFloat here because using parseInt cuts down 12.2222222 ...
  let fromMag = parseFloat(document.getElementById("convertNum").value);
  let toName = document.getElementById("convertTo").value;
  // create a from unit
  let fromUnit = Ucum.unitTables_.getUnitByName(fromName) ;
  let toUnit = Ucum.unitTables_.getUnitByName(toName) ;

  // call Unit.convertFrom on it
  let toMag = toUnit.convertFrom(fromMag, fromUnit);

  let resultString = document.getElementById("resultString");
  resultString.innerHTML = fromMag.toString() + " " + fromName + " units = " +
                           toMag.toString() + " " + toName + " units"

  // put result on page
} // end doConversion



