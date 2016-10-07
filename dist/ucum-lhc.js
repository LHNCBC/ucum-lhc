(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ucumPkg = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={"prefixes":[{"code_":"E","name_":"exa","value_":1000000000000000000,"exp_":"18"},{"code_":"G","name_":"giga","value_":1000000000,"exp_":"9"},{"code_":"Gi","name_":"gibi","value_":1073741824,"exp_":null},{"code_":"Ki","name_":"kibi","value_":1024,"exp_":null},{"code_":"M","name_":"mega","value_":1000000,"exp_":"6"},{"code_":"Mi","name_":"mebi","value_":1048576,"exp_":null},{"code_":"P","name_":"peta","value_":1000000000000000,"exp_":"15"},{"code_":"T","name_":"tera","value_":1000000000000,"exp_":"12"},{"code_":"Ti","name_":"tebi","value_":1099511627776,"exp_":null},{"code_":"Y","name_":"yotta","value_":1e+24,"exp_":"24"},{"code_":"Z","name_":"zetta","value_":1e+21,"exp_":"21"},{"code_":"a","name_":"atto","value_":1e-18,"exp_":"-18"},{"code_":"c","name_":"centi","value_":0.01,"exp_":"-2"},{"code_":"d","name_":"deci","value_":0.1,"exp_":"-1"},{"code_":"da","name_":"deka","value_":10,"exp_":"1"},{"code_":"f","name_":"femto","value_":1e-15,"exp_":"-15"},{"code_":"h","name_":"hecto","value_":100,"exp_":"2"},{"code_":"k","name_":"kilo","value_":1000,"exp_":"3"},{"code_":"m","name_":"milli","value_":0.001,"exp_":"-3"},{"code_":"n","name_":"nano","value_":1e-9,"exp_":"-9"},{"code_":"p","name_":"pico","value_":1e-12,"exp_":"-12"},{"code_":"u","name_":"micro","value_":0.000001,"exp_":"-6"},{"code_":"y","name_":"yocto","value_":1.0000000000000001e-24,"exp_":"-24"},{"code_":"z","name_":"zepto","value_":1e-21,"exp_":"-21"}],"units":[{"isBase_":true,"name_":"meter","csCode_":"m","ciCode_":"M","property_":"length","magnitude_":1,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"second","csCode_":"s","ciCode_":"S","property_":"time","magnitude_":1,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"s","class_":null,"isMetric_":false,"variable_":"T","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram","csCode_":"g","ciCode_":"G","property_":"mass","magnitude_":1,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"radian","csCode_":"rad","ciCode_":"RAD","property_":"plane angle","magnitude_":1,"dim_":{"dimVec_":[0,0,0,1,0,0,0]},"printSymbol_":"rad","class_":null,"isMetric_":false,"variable_":"A","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"kelvin","csCode_":"K","ciCode_":"K","property_":"temperature","magnitude_":1,"dim_":{"dimVec_":[0,0,0,0,1,0,0]},"printSymbol_":"K","class_":null,"isMetric_":false,"variable_":"C","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"coulomb","csCode_":"C","ciCode_":"C","property_":"electric charge","magnitude_":1,"dim_":{"dimVec_":[0,0,0,0,0,1,0]},"printSymbol_":"C","class_":null,"isMetric_":false,"variable_":"Q","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"candela","csCode_":"cd","ciCode_":"CD","property_":"luminous intensity","magnitude_":1,"dim_":{"dimVec_":[0,0,0,0,0,0,1]},"printSymbol_":"cd","class_":null,"isMetric_":false,"variable_":"F","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"the number ten for arbitrary powers","csCode_":"10*","ciCode_":"10*","property_":"number","magnitude_":"10","dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"the number ten for arbitrary powers","csCode_":"10^","ciCode_":"10^","property_":"number","magnitude_":"10","dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"the number pi","csCode_":"[pi]","ciCode_":"[PI]","property_":"number","magnitude_":3.141592653589793,"dim_":{"dimVec_":null},"printSymbol_":"π","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"3.1415926535897932384626433832795028841971693993751058209749445923","baseFactor_":3.141592653589793,"defError_":false},{"isBase_":false,"name_":"percent","csCode_":"%","ciCode_":"%","property_":"fraction","magnitude_":0.01,"dim_":{"dimVec_":null},"printSymbol_":"%","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"10*-2","ciUnitString_":"10*-2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"parts per thousand","csCode_":"[ppth]","ciCode_":"[PPTH]","property_":"fraction","magnitude_":0.001,"dim_":{"dimVec_":null},"printSymbol_":"ppth","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"10*-3","ciUnitString_":"10*-3","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"parts per million","csCode_":"[ppm]","ciCode_":"[PPM]","property_":"fraction","magnitude_":0.000001,"dim_":{"dimVec_":null},"printSymbol_":"ppm","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"10*-6","ciUnitString_":"10*-6","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"parts per billion","csCode_":"[ppb]","ciCode_":"[PPB]","property_":"fraction","magnitude_":1e-9,"dim_":{"dimVec_":null},"printSymbol_":"ppb","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"10*-9","ciUnitString_":"10*-9","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"parts per trillion","csCode_":"[pptr]","ciCode_":"[PPTR]","property_":"fraction","magnitude_":1e-12,"dim_":{"dimVec_":null},"printSymbol_":"pptr","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"10*-12","ciUnitString_":"10*-12","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"mole","csCode_":"mol","ciCode_":"MOL","property_":"amount of substance","magnitude_":6.0221367e+23,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"steradian","csCode_":"sr","ciCode_":"SR","property_":"solid angle","magnitude_":1,"dim_":{"dimVec_":[0,0,0,2,0,0,0]},"printSymbol_":"sr","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"rad2","ciUnitString_":"RAD2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"hertz","csCode_":"Hz","ciCode_":"HZ","property_":"frequency","magnitude_":1,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"Hz","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"s-1","ciUnitString_":"S-1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"newton","csCode_":"N","ciCode_":"N","property_":"force","magnitude_":1000,"dim_":{"dimVec_":[1,-2,1,0,0,0,0]},"printSymbol_":"N","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"kg.m/s2","ciUnitString_":"KG.M/S2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},
  {"isBase_":false,"name_":"pascal","csCode_":"Pa","ciCode_":"PAL","property_":"pressure","magnitude_":1000,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"Pa","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"N/m2","ciUnitString_":"N/M2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"joule","csCode_":"J","ciCode_":"J","property_":"energy","magnitude_":1000,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"J","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"N.m","ciUnitString_":"N.M","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"watt","csCode_":"W","ciCode_":"W","property_":"power","magnitude_":1000,"dim_":{"dimVec_":[2,-3,1,0,0,0,0]},"printSymbol_":"W","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"J/s","ciUnitString_":"J/S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"ampère","csCode_":"A","ciCode_":"A","property_":"electric current","magnitude_":1,"dim_":{"dimVec_":[0,-1,0,0,0,1,0]},"printSymbol_":"A","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"C/s","ciUnitString_":"C/S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"volt","csCode_":"V","ciCode_":"V","property_":"electric potential","magnitude_":1000,"dim_":{"dimVec_":[2,-2,1,0,0,-1,0]},"printSymbol_":"V","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"J/C","ciUnitString_":"J/C","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"farad","csCode_":"F","ciCode_":"F","property_":"electric capacitance","magnitude_":0.001,"dim_":{"dimVec_":[-2,2,-1,0,0,2,0]},"printSymbol_":"F","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"C/V","ciUnitString_":"C/V","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"ohm","csCode_":"Ohm","ciCode_":"OHM","property_":"electric resistance","magnitude_":1000,"dim_":{"dimVec_":[2,-1,1,0,0,-2,0]},"printSymbol_":"Ω","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"V/A","ciUnitString_":"V/A","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"siemens","csCode_":"S","ciCode_":"SIE","property_":"electric conductance","magnitude_":0.001,"dim_":{"dimVec_":[-2,1,-1,0,0,2,0]},"printSymbol_":"S","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"Ohm-1","ciUnitString_":"OHM-1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"weber","csCode_":"Wb","ciCode_":"WB","property_":"magentic flux","magnitude_":1000,"dim_":{"dimVec_":[2,-1,1,0,0,-1,0]},"printSymbol_":"Wb","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"V.s","ciUnitString_":"V.S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"degree Celsius","csCode_":"Cel","ciCode_":"CEL","property_":"temperature","magnitude_":1,"dim_":{"dimVec_":[0,0,0,0,1,0,0]},"printSymbol_":"°C","class_":"si","isMetric_":true,"variable_":null,"cnv_":"Cel","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"K","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"tesla","csCode_":"T","ciCode_":"T","property_":"magnetic flux density","magnitude_":1000,"dim_":{"dimVec_":[0,-1,1,0,0,-1,0]},"printSymbol_":"T","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"Wb/m2","ciUnitString_":"WB/M2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"henry","csCode_":"H","ciCode_":"H","property_":"inductance","magnitude_":1000,"dim_":{"dimVec_":[2,0,1,0,0,-2,0]},"printSymbol_":"H","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"Wb/A","ciUnitString_":"WB/A","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"lumen","csCode_":"lm","ciCode_":"LM","property_":"luminous flux","magnitude_":1,"dim_":{"dimVec_":[0,0,0,2,0,0,1]},"printSymbol_":"lm","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"cd.sr","ciUnitString_":"CD.SR","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"lux","csCode_":"lx","ciCode_":"LX","property_":"illuminance","magnitude_":1,"dim_":{"dimVec_":[-2,0,0,2,0,0,1]},"printSymbol_":"lx","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"lm/m2","ciUnitString_":"LM/M2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"becquerel","csCode_":"Bq","ciCode_":"BQ","property_":"radioactivity","magnitude_":1,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"Bq","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"s-1","ciUnitString_":"S-1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"gray","csCode_":"Gy","ciCode_":"GY","property_":"energy dose","magnitude_":1,"dim_":{"dimVec_":[2,-2,0,0,0,0,0]},"printSymbol_":"Gy","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"J/kg","ciUnitString_":"J/KG","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"sievert","csCode_":"Sv","ciCode_":"SV","property_":"dose equivalent","magnitude_":1,"dim_":{"dimVec_":[2,-2,0,0,0,0,0]},"printSymbol_":"Sv","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"J/kg","ciUnitString_":"J/KG","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"degree","csCode_":"deg","ciCode_":"DEG","property_":"plane angle","magnitude_":0.017453292519943295,"dim_":{"dimVec_":null},"printSymbol_":"°","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pi].rad/360","ciUnitString_":"[PI].RAD/360","baseFactorStr_":"2","baseFactor_":"2","defError_":false},{"isBase_":false,"name_":"gon","csCode_":"gon","ciCode_":"GON","property_":"plane angle","magnitude_":0.015707963267948967,"dim_":{"dimVec_":null},"printSymbol_":"□<sup>g</sup>","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"deg","ciUnitString_":"DEG","baseFactorStr_":"0.9","baseFactor_":"0.9","defError_":false},{"isBase_":false,"name_":"minute","csCode_":"'","ciCode_":"'","property_":"plane angle","magnitude_":0.0002908882086657216,"dim_":{"dimVec_":null},"printSymbol_":"'","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"deg/60","ciUnitString_":"DEG/60","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"second","csCode_":"''","ciCode_":"''","property_":"plane angle","magnitude_":0.00000484813681109536,"dim_":{"dimVec_":null},"printSymbol_":"''","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"'/60","ciUnitString_":"'/60","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"liter","csCode_":"l","ciCode_":"L","property_":"volume","magnitude_":0.001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"l","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"dm3","ciUnitString_":"DM3","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"liter","csCode_":"L","ciCode_":"","property_":"volume","magnitude_":0.001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"are","csCode_":"ar","ciCode_":"AR","property_":"area","magnitude_":100,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":"a","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"m2","ciUnitString_":"M2","baseFactorStr_":"100","baseFactor_":"100","defError_":false},{"isBase_":false,"name_":"minute","csCode_":"min","ciCode_":"MIN","property_":"time","magnitude_":60,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"min","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"s","ciUnitString_":"S","baseFactorStr_":"60","baseFactor_":"60","defError_":false},{"isBase_":false,"name_":"hour","csCode_":"h","ciCode_":"HR","property_":"time","magnitude_":3600,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"h","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"min","ciUnitString_":"MIN","baseFactorStr_":"60","baseFactor_":"60","defError_":false},{"isBase_":false,"name_":"day","csCode_":"d","ciCode_":"D","property_":"time","magnitude_":86400,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"d","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"h","ciUnitString_":"HR","baseFactorStr_":"24","baseFactor_":"24","defError_":false},{"isBase_":false,"name_":"tropical year","csCode_":"a_t","ciCode_":"ANN_T","property_":"time","magnitude_":31556925.216,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"a<sub>t</sub>","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"d","ciUnitString_":"D","baseFactorStr_":"365.24219","baseFactor_":"365.24219","defError_":false},{"isBase_":false,"name_":"mean Julian year","csCode_":"a_j","ciCode_":"ANN_J","property_":"time","magnitude_":31557600,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"a<sub>j</sub>","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"d","ciUnitString_":"D","baseFactorStr_":"365.25","baseFactor_":"365.25","defError_":false},{"isBase_":false,"name_":"mean Gregorian year","csCode_":"a_g","ciCode_":"ANN_G","property_":"time","magnitude_":31556952,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"a<sub>g</sub>","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"d","ciUnitString_":"D","baseFactorStr_":"365.2425","baseFactor_":"365.2425","defError_":false},{"isBase_":false,"name_":"year","csCode_":"a","ciCode_":"ANN","property_":"time","magnitude_":31557600,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"a","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"a_j","ciUnitString_":"ANN_J","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"week","csCode_":"wk","ciCode_":"WK","property_":"time","magnitude_":604800,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"wk","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"d","ciUnitString_":"D","baseFactorStr_":"7","baseFactor_":"7","defError_":false},{"isBase_":false,"name_":"synodal month","csCode_":"mo_s","ciCode_":"MO_S","property_":"time","magnitude_":2551442.976,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"mo<sub>s</sub>","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"d","ciUnitString_":"D","baseFactorStr_":"29.53059","baseFactor_":"29.53059","defError_":false},{"isBase_":false,"name_":"mean Julian month","csCode_":"mo_j","ciCode_":"MO_J","property_":"time","magnitude_":2629800,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"mo<sub>j</sub>","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"a_j/12","ciUnitString_":"ANN_J/12","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"mean Gregorian month","csCode_":"mo_g","ciCode_":"MO_G","property_":"time","magnitude_":2629746,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"mo<sub>g</sub>","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"a_g/12","ciUnitString_":"ANN_G/12","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"month","csCode_":"mo","ciCode_":"MO","property_":"time","magnitude_":2629800,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"mo","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mo_j","ciUnitString_":"MO_J","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"tonne","csCode_":"t","ciCode_":"TNE","property_":"mass","magnitude_":1000000,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"t","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"kg","ciUnitString_":"KG","baseFactorStr_":"1e3","baseFactor_":1000,"defError_":false},{"isBase_":false,"name_":"bar","csCode_":"bar","ciCode_":"BAR","property_":"pressure","magnitude_":3.15576e+27,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"bar","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"Pa","ciUnitString_":"PAL","baseFactorStr_":"1e5","baseFactor_":100000,"defError_":false},{"isBase_":false,"name_":"unified atomic mass unit","csCode_":"u","ciCode_":"AMU","property_":"mass","magnitude_":1.6605402e-24,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"u","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"g","ciUnitString_":"G","baseFactorStr_":"1.6605402e-24","baseFactor_":1.6605402e-24,"defError_":false},{"isBase_":false,"name_":"astronomic unit","csCode_":"AU","ciCode_":"ASU","property_":"length","magnitude_":149597870691,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"AU","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"Mm","ciUnitString_":"MAM","baseFactorStr_":"149597.870691","baseFactor_":"149597.870691","defError_":false},{"isBase_":false,"name_":"parsec","csCode_":"pc","ciCode_":"PRS","property_":"length","magnitude_":30856780000000000,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"pc","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"m","ciUnitString_":"M","baseFactorStr_":"3.085678e16","baseFactor_":30856780000000000,"defError_":false},{"isBase_":false,"name_":"velocity of light","csCode_":"[c]","ciCode_":"[C]","property_":"velocity","magnitude_":299792458,"dim_":{"dimVec_":[1,-1,0,0,0,0,0]},"printSymbol_":"<i>c</i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"m/s","ciUnitString_":"M/S","baseFactorStr_":"299792458","baseFactor_":"299792458","defError_":false},{"isBase_":false,"name_":"Planck constant","csCode_":"[h]","ciCode_":"[H]","property_":"action","magnitude_":6.6260755e-31,"dim_":{"dimVec_":[2,-1,1,0,0,0,0]},"printSymbol_":"<i>h</i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"J.s","ciUnitString_":"J.S","baseFactorStr_":"6.6260755e-34","baseFactor_":6.6260755e-34,"defError_":false},{"isBase_":false,"name_":"Boltzmann constant","csCode_":"[k]","ciCode_":"[K]","property_":"(unclassified)","magnitude_":1.380658e-20,"dim_":{"dimVec_":[2,-2,1,0,-1,0,0]},"printSymbol_":"<i>k</i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"J/K","ciUnitString_":"J/K","baseFactorStr_":"1.380658e-23","baseFactor_":1.380658e-23,"defError_":false},{"isBase_":false,"name_":"permittivity of vacuum","csCode_":"[eps_0]","ciCode_":"[EPS_0]","property_":"electric permittivity","magnitude_":8.854187817000001e-15,"dim_":{"dimVec_":[-3,2,-1,0,0,2,0]},"printSymbol_":"<i>ε<sub><r>0</r></sub></i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"F/m","ciUnitString_":"F/M","baseFactorStr_":"8.854187817e-12","baseFactor_":8.854187817e-12,"defError_":false},{"isBase_":false,"name_":"permeability of vacuum","csCode_":"[mu_0]","ciCode_":"[MU_0]","property_":"magnetic permeability","magnitude_":0.0012566370614359172,"dim_":{"dimVec_":[1,0,1,0,0,-2,0]},"printSymbol_":"<i>μ<sub><r>0</r></sub></i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"N/A2","ciUnitString_":"4.[PI].10*-7.N/A2","baseFactorStr_":"1","baseFactor_":0.0000012566370614359173,"defError_":false},{"isBase_":false,"name_":"elementary charge","csCode_":"[e]","ciCode_":"[E]","property_":"electric charge","magnitude_":1.60217733e-19,"dim_":{"dimVec_":[0,0,0,0,0,1,0]},"printSymbol_":"<i>e</i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"C","ciUnitString_":"C","baseFactorStr_":"1.60217733e-19","baseFactor_":1.60217733e-19,"defError_":false},{"isBase_":false,"name_":"electronvolt","csCode_":"eV","ciCode_":"EV","property_":"energy","magnitude_":1.60217733e-16,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"eV","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[e].V","ciUnitString_":"[E].V","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"electron mass","csCode_":"[m_e]","ciCode_":"[M_E]","property_":"mass","magnitude_":9.1093897e-28,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"<i>m<sub><r>e</r></sub></i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"g","ciUnitString_":"g","baseFactorStr_":"9.1093897e-28","baseFactor_":9.1093897e-28,"defError_":false},{"isBase_":false,"name_":"proton mass","csCode_":"[m_p]","ciCode_":"[M_P]","property_":"mass","magnitude_":1.6726231e-24,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"<i>m<sub><r>p</r></sub></i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"g","ciUnitString_":"g","baseFactorStr_":"1.6726231e-24","baseFactor_":1.6726231e-24,"defError_":false},{"isBase_":false,"name_":"Newtonian constant of gravitation","csCode_":"[G]","ciCode_":"[GC]","property_":"(unclassified)","magnitude_":6.67259e-14,"dim_":{"dimVec_":[3,-2,-1,0,0,0,0]},"printSymbol_":"<i>G</i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"m3.kg-1.s-2","ciUnitString_":"M3.KG-1.S-2","baseFactorStr_":"6.67259e-11","baseFactor_":6.67259e-11,"defError_":false},{"isBase_":false,"name_":"standard acceleration of free fall","csCode_":"[g]","ciCode_":"[G]","property_":"acceleration","magnitude_":9.80665,"dim_":{"dimVec_":[1,-2,0,0,0,0,0]},"printSymbol_":"<i>g<sub>n</sub></i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"m/s2","ciUnitString_":"M/S2","baseFactorStr_":"980665e-5","baseFactor_":"9.80665","defError_":false},{"isBase_":false,"name_":"Torr","csCode_":"Torr","ciCode_":"Torr","property_":"pressure","magnitude_":3.19757382e+27,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"Torr","class_":"const","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"Pa","ciUnitString_":"PAL","baseFactorStr_":"133.322","baseFactor_":"133.322","defError_":false},{"isBase_":false,"name_":"standard atmosphere","csCode_":"atm","ciCode_":"ATM","property_":"pressure","magnitude_":3.19757382e+27,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"atm","class_":"const","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"Pa","ciUnitString_":"PAL","baseFactorStr_":"101325","baseFactor_":"101325","defError_":false},{"isBase_":false,"name_":"light-year","csCode_":"[ly]","ciCode_":"[LY]","property_":"length","magnitude_":9460730472580800,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"l.y.","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[c].a_j","ciUnitString_":"[C].ANN_J","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"gram-force","csCode_":"gf","ciCode_":"GF","property_":"force","magnitude_":9.80665,"dim_":{"dimVec_":[1,-2,1,0,0,0,0]},"printSymbol_":"gf","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"g.[g]","ciUnitString_":"G.[G]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Kayser","csCode_":"Ky","ciCode_":"KY","property_":"lineic number","magnitude_":100,"dim_":{"dimVec_":[-1,0,0,0,0,0,0]},"printSymbol_":"K","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"cm-1","ciUnitString_":"CM-1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Gal","csCode_":"Gal","ciCode_":"GL","property_":"acceleration","magnitude_":0.01,"dim_":{"dimVec_":[1,-2,0,0,0,0,0]},"printSymbol_":"Gal","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"cm/s2","ciUnitString_":"CM/S2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"dyne","csCode_":"dyn","ciCode_":"DYN","property_":"force","magnitude_":0.01,"dim_":{"dimVec_":[1,-2,1,0,0,0,0]},"printSymbol_":"dyn","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"g.cm/s2","ciUnitString_":"G.CM/S2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"erg","csCode_":"erg","ciCode_":"ERG","property_":"energy","magnitude_":0.0001,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"erg","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"dyn.cm","ciUnitString_":"DYN.CM","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Poise","csCode_":"P","ciCode_":"P","property_":"dynamic viscosity","magnitude_":100,"dim_":{"dimVec_":[-1,-1,1,0,0,0,0]},"printSymbol_":"P","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"dyn.s/cm2","ciUnitString_":"DYN.S/CM2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Biot","csCode_":"Bi","ciCode_":"BI","property_":"electric current","magnitude_":10,"dim_":{"dimVec_":[0,-1,0,0,0,1,0]},"printSymbol_":"Bi","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"A","ciUnitString_":"A","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"Stokes","csCode_":"St","ciCode_":"ST","property_":"kinematic viscosity","magnitude_":0.0001,"dim_":{"dimVec_":[2,-1,0,0,0,0,0]},"printSymbol_":"St","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"cm2/s","ciUnitString_":"CM2/S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Maxwell","csCode_":"Mx","ciCode_":"MX","property_":"flux of magnetic induction","magnitude_":0.00001,"dim_":{"dimVec_":[2,-1,1,0,0,-1,0]},"printSymbol_":"Mx","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"Wb","ciUnitString_":"WB","baseFactorStr_":"1e-8","baseFactor_":1e-8,"defError_":false},{"isBase_":false,"name_":"Gauss","csCode_":"G","ciCode_":"GS","property_":"magnetic flux density","magnitude_":0.1,"dim_":{"dimVec_":[0,-1,1,0,0,-1,0]},"printSymbol_":"Gs","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"T","ciUnitString_":"T","baseFactorStr_":"1e-4","baseFactor_":0.0001,"defError_":false},{"isBase_":false,"name_":"Oersted","csCode_":"Oe","ciCode_":"OE","property_":"magnetic field intensity","magnitude_":79.57747154594767,"dim_":{"dimVec_":[-1,-1,0,0,0,1,0]},"printSymbol_":"Oe","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"A/m","ciUnitString_":"/[PI].A/M","baseFactorStr_":"250","baseFactor_":79.57747154594767,"defError_":false},{"isBase_":false,"name_":"Gilbert","csCode_":"Gb","ciCode_":"GB","property_":"magnetic tension","magnitude_":0.7957747154594768,"dim_":{"dimVec_":[0,-1,0,0,0,1,0]},"printSymbol_":"Gb","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"Oe.cm","ciUnitString_":"OE.CM","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"stilb","csCode_":"sb","ciCode_":"SB","property_":"lum. intensity density","magnitude_":8640000,"dim_":{"dimVec_":[-2,1,0,0,0,0,0]},"printSymbol_":"sb","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"cd/cm2","ciUnitString_":"CD/CM2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Lambert","csCode_":"Lmb","ciCode_":"LMB","property_":"brightness","magnitude_":2750197.4166279514,"dim_":{"dimVec_":[-2,1,0,0,0,0,0]},"printSymbol_":"L","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"cd/cm2/[pi]","ciUnitString_":"CD/CM2/[PI]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"phot","csCode_":"ph","ciCode_":"PHT","property_":"illuminance","magnitude_":0.0001,"dim_":{"dimVec_":[-2,0,0,2,0,0,1]},"printSymbol_":"ph","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"lx","ciUnitString_":"LX","baseFactorStr_":"1e-4","baseFactor_":0.0001,"defError_":false},{"isBase_":false,"name_":"Curie","csCode_":"Ci","ciCode_":"CI","property_":"radioactivity","magnitude_":37000000000,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"Ci","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"Bq","ciUnitString_":"BQ","baseFactorStr_":"37e9","baseFactor_":37000000000,"defError_":false},{"isBase_":false,"name_":"Roentgen","csCode_":"R","ciCode_":"ROE","property_":"ion dose","magnitude_":2.58e-7,"dim_":{"dimVec_":[0,0,-1,0,0,1,0]},"printSymbol_":"R","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"C/kg","ciUnitString_":"C/KG","baseFactorStr_":"2.58e-4","baseFactor_":0.000258,"defError_":false},{"isBase_":false,"name_":"radiation absorbed dose","csCode_":"RAD","ciCode_":"[RAD]","property_":"energy dose","magnitude_":0.01,"dim_":{"dimVec_":[2,-2,0,0,0,0,0]},"printSymbol_":"RAD","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"erg/g","ciUnitString_":"ERG/G","baseFactorStr_":"100","baseFactor_":"100","defError_":false},{"isBase_":false,"name_":"radiation equivalent man","csCode_":"REM","ciCode_":"[REM]","property_":"dose equivalent","magnitude_":0.01,"dim_":{"dimVec_":[2,-2,0,0,0,0,0]},"printSymbol_":"REM","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"RAD","ciUnitString_":"[RAD]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"inch","csCode_":"[in_i]","ciCode_":"[IN_I]","property_":"length","magnitude_":0.025400000000000002,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"in","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"cm","ciUnitString_":"CM","baseFactorStr_":"254e-2","baseFactor_":"2.54","defError_":false},{"isBase_":false,"name_":"foot","csCode_":"[ft_i]","ciCode_":"[FT_I]","property_":"length","magnitude_":0.3048,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"ft","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_i]","ciUnitString_":"[IN_I]","baseFactorStr_":"12","baseFactor_":"12","defError_":false},{"isBase_":false,"name_":"yard","csCode_":"[yd_i]","ciCode_":"[YD_I]","property_":"length","magnitude_":0.9144000000000001,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"yd","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_i]","ciUnitString_":"[FT_I]","baseFactorStr_":"3","baseFactor_":"3","defError_":false},{"isBase_":false,"name_":"mile","csCode_":"[mi_i]","ciCode_":"[MI_I]","property_":"length","magnitude_":1609.344,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"mi","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_i]","ciUnitString_":"[FT_I]","baseFactorStr_":"5280","baseFactor_":"5280","defError_":false},{"isBase_":false,"name_":"fathom","csCode_":"[fth_i]","ciCode_":"[FTH_I]","property_":"depth of water","magnitude_":1.8288000000000002,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"fth","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_i]","ciUnitString_":"[FT_I]","baseFactorStr_":"6","baseFactor_":"6","defError_":false},{"isBase_":false,"name_":"nautical mile","csCode_":"[nmi_i]","ciCode_":"[NMI_I]","property_":"length","magnitude_":1852,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"n.mi","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"m","ciUnitString_":"M","baseFactorStr_":"1852","baseFactor_":"1852","defError_":false},{"isBase_":false,"name_":"knot","csCode_":"[kn_i]","ciCode_":"[KN_I]","property_":"velocity","magnitude_":0.5144444444444445,"dim_":{"dimVec_":[1,-1,0,0,0,0,0]},"printSymbol_":"knot","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[nmi_i]/h","ciUnitString_":"[NMI_I]/H","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"square inch","csCode_":"[sin_i]","ciCode_":"[SIN_I]","property_":"area","magnitude_":0.0006451600000000001,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_i]2","ciUnitString_":"[IN_I]2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"square foot","csCode_":"[sft_i]","ciCode_":"[SFT_I]","property_":"area","magnitude_":0.09290304,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_i]2","ciUnitString_":"[FT_I]2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"square yard","csCode_":"[syd_i]","ciCode_":"[SYD_I]","property_":"area","magnitude_":0.8361273600000002,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[yd_i]2","ciUnitString_":"[YD_I]2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"cubic inch","csCode_":"[cin_i]","ciCode_":"[CIN_I]","property_":"volume","magnitude_":0.000016387064000000003,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_i]3","ciUnitString_":"[IN_I]3","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"cubic foot","csCode_":"[cft_i]","ciCode_":"[CFT_I]","property_":"volume","magnitude_":0.028316846592000004,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_i]3","ciUnitString_":"[FT_I]3","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"cubic yard","csCode_":"[cyd_i]","ciCode_":"[CYD_I]","property_":"volume","magnitude_":0.7645548579840002,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"cu.yd","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[yd_i]3","ciUnitString_":"[YD_I]3","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"board foot","csCode_":"[bf_i]","ciCode_":"[BF_I]","property_":"volume","magnitude_":0.002359737216,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_i]3","ciUnitString_":"[IN_I]3","baseFactorStr_":"144","baseFactor_":"144","defError_":false},{"isBase_":false,"name_":"cord","csCode_":"[cr_i]","ciCode_":"[CR_I]","property_":"volume","magnitude_":3.6245563637760005,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_i]3","ciUnitString_":"[FT_I]3","baseFactorStr_":"128","baseFactor_":"128","defError_":false},{"isBase_":false,"name_":"mil","csCode_":"[mil_i]","ciCode_":"[MIL_I]","property_":"length","magnitude_":0.000025400000000000004,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"mil","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_i]","ciUnitString_":"[IN_I]","baseFactorStr_":"1e-3","baseFactor_":0.001,"defError_":false},{"isBase_":false,"name_":"circular mil","csCode_":"[cml_i]","ciCode_":"[CML_I]","property_":"area","magnitude_":5.067074790974979e-10,"dim_":{"dimVec_":null},"printSymbol_":"circ.mil","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pi]/4.[mil_i]2","ciUnitString_":"[PI]/4.[MIL_I]2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"hand","csCode_":"[hd_i]","ciCode_":"[HD_I]","property_":"height of horses","magnitude_":0.10160000000000001,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"hd","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_i]","ciUnitString_":"[IN_I]","baseFactorStr_":"4","baseFactor_":"4","defError_":false},{"isBase_":false,"name_":"foot","csCode_":"[ft_us]","ciCode_":"[FT_US]","property_":"length","magnitude_":0.3048006096012192,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"ft<sub>us</sub>","class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"m/3937","ciUnitString_":"M/3937","baseFactorStr_":"1200","baseFactor_":"1200","defError_":false},{"isBase_":false,"name_":"yard","csCode_":"[yd_us]","ciCode_":"[YD_US]","property_":"length","magnitude_":0.9144018288036575,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_us]","ciUnitString_":"[FT_US]","baseFactorStr_":"3","baseFactor_":"3","defError_":false},{"isBase_":false,"name_":"inch","csCode_":"[in_us]","ciCode_":"[IN_US]","property_":"length","magnitude_":0.0254000508001016,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_us]/12","ciUnitString_":"[FT_US]/12","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"rod","csCode_":"[rd_us]","ciCode_":"[RD_US]","property_":"length","magnitude_":5.029210058420117,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_us]","ciUnitString_":"[FT_US]","baseFactorStr_":"16.5","baseFactor_":"16.5","defError_":false},{"isBase_":false,"name_":"Gunter's chain","csCode_":"[ch_us]","ciCode_":"[CH_US]","property_":"length","magnitude_":20.116840233680467,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[rd_us]","ciUnitString_":"[RD_US]","baseFactorStr_":"4","baseFactor_":"4","defError_":false},{"isBase_":false,"name_":"link for Gunter's chain","csCode_":"[lk_us]","ciCode_":"[LK_US]","property_":"length","magnitude_":0.20116840233680466,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ch_us]/100","ciUnitString_":"[CH_US]/100","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Ramden's chain","csCode_":"[rch_us]","ciCode_":"[RCH_US]","property_":"length","magnitude_":30.480060960121918,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_us]","ciUnitString_":"[FT_US]","baseFactorStr_":"100","baseFactor_":"100","defError_":false},{"isBase_":false,"name_":"link for Ramden's chain","csCode_":"[rlk_us]","ciCode_":"[RLK_US]","property_":"length","magnitude_":0.3048006096012192,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[rch_us]/100","ciUnitString_":"[RCH_US]/100","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"fathom","csCode_":"[fth_us]","ciCode_":"[FTH_US]","property_":"length","magnitude_":1.828803657607315,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_us]","ciUnitString_":"[FT_US]","baseFactorStr_":"6","baseFactor_":"6","defError_":false},{"isBase_":false,"name_":"furlong","csCode_":"[fur_us]","ciCode_":"[FUR_US]","property_":"length","magnitude_":201.16840233680466,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[rd_us]","ciUnitString_":"[RD_US]","baseFactorStr_":"40","baseFactor_":"40","defError_":false},{"isBase_":false,"name_":"mile","csCode_":"[mi_us]","ciCode_":"[MI_US]","property_":"length","magnitude_":1609.3472186944373,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[fur_us]","ciUnitString_":"[FUR_US]","baseFactorStr_":"8","baseFactor_":"8","defError_":false},{"isBase_":false,"name_":"acre","csCode_":"[acr_us]","ciCode_":"[ACR_US]","property_":"area","magnitude_":4046.872609874252,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[rd_us]2","ciUnitString_":"[RD_US]2","baseFactorStr_":"160","baseFactor_":"160","defError_":false},{"isBase_":false,"name_":"square rod","csCode_":"[srd_us]","ciCode_":"[SRD_US]","property_":"area","magnitude_":25.292953811714074,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[rd_us]2","ciUnitString_":"[RD_US]2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"square mile","csCode_":"[smi_us]","ciCode_":"[SMI_US]","property_":"area","magnitude_":2589998.470319521,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[mi_us]2","ciUnitString_":"[MI_US]2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"section","csCode_":"[sct]","ciCode_":"[SCT]","property_":"area","magnitude_":2589998.470319521,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[mi_us]2","ciUnitString_":"[MI_US]2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"township","csCode_":"[twp]","ciCode_":"[TWP]","property_":"area","magnitude_":93239944.93150276,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[sct]","ciUnitString_":"[SCT]","baseFactorStr_":"36","baseFactor_":"36","defError_":false},{"isBase_":false,"name_":"mil","csCode_":"[mil_us]","ciCode_":"[MIL_US]","property_":"length","magnitude_":0.0000254000508001016,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_us]","ciUnitString_":"[IN_US]","baseFactorStr_":"1e-3","baseFactor_":0.001,"defError_":false},{"isBase_":false,"name_":"inch","csCode_":"[in_br]","ciCode_":"[IN_BR]","property_":"length","magnitude_":0.025399980000000003,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"cm","ciUnitString_":"CM","baseFactorStr_":"2.539998","baseFactor_":"2.539998","defError_":false},{"isBase_":false,"name_":"foot","csCode_":"[ft_br]","ciCode_":"[FT_BR]","property_":"length","magnitude_":0.30479976000000003,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_br]","ciUnitString_":"[IN_BR]","baseFactorStr_":"12","baseFactor_":"12","defError_":false},{"isBase_":false,"name_":"rod","csCode_":"[rd_br]","ciCode_":"[RD_BR]","property_":"length","magnitude_":5.02919604,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_br]","ciUnitString_":"[FT_BR]","baseFactorStr_":"16.5","baseFactor_":"16.5","defError_":false},{"isBase_":false,"name_":"Gunter's chain","csCode_":"[ch_br]","ciCode_":"[CH_BR]","property_":"length","magnitude_":20.11678416,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[rd_br]","ciUnitString_":"[RD_BR]","baseFactorStr_":"4","baseFactor_":"4","defError_":false},{"isBase_":false,"name_":"link for Gunter's chain","csCode_":"[lk_br]","ciCode_":"[LK_BR]","property_":"length","magnitude_":0.2011678416,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ch_br]/100","ciUnitString_":"[CH_BR]/100","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"fathom","csCode_":"[fth_br]","ciCode_":"[FTH_BR]","property_":"length","magnitude_":1.82879856,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_br]","ciUnitString_":"[FT_BR]","baseFactorStr_":"6","baseFactor_":"6","defError_":false},{"isBase_":false,"name_":"pace","csCode_":"[pc_br]","ciCode_":"[PC_BR]","property_":"length","magnitude_":0.7619994000000001,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_br]","ciUnitString_":"[FT_BR]","baseFactorStr_":"2.5","baseFactor_":"2.5","defError_":false},{"isBase_":false,"name_":"yard","csCode_":"[yd_br]","ciCode_":"[YD_BR]","property_":"length","magnitude_":0.91439928,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_br]","ciUnitString_":"[FT_BR]","baseFactorStr_":"3","baseFactor_":"3","defError_":false},{"isBase_":false,"name_":"mile","csCode_":"[mi_br]","ciCode_":"[MI_BR]","property_":"length","magnitude_":1609.3427328000002,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_br]","ciUnitString_":"[FT_BR]","baseFactorStr_":"5280","baseFactor_":"5280","defError_":false},{"isBase_":false,"name_":"nautical mile","csCode_":"[nmi_br]","ciCode_":"[NMI_BR]","property_":"length","magnitude_":1853.1825408000002,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_br]","ciUnitString_":"[FT_BR]","baseFactorStr_":"6080","baseFactor_":"6080","defError_":false},{"isBase_":false,"name_":"knot","csCode_":"[kn_br]","ciCode_":"[KN_BR]","property_":"velocity","magnitude_":0.5147729280000001,"dim_":{"dimVec_":[1,-1,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[nmi_br]/h","ciUnitString_":"[NMI_BR]/H","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"acre","csCode_":"[acr_br]","ciCode_":"[ACR_BR]","property_":"area","magnitude_":4046.850049400269,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[yd_br]2","ciUnitString_":"[YD_BR]2","baseFactorStr_":"4840","baseFactor_":"4840","defError_":false},{"isBase_":false,"name_":"Queen Anne's wine gallon","csCode_":"[gal_us]","ciCode_":"[GAL_US]","property_":"fluid volume","magnitude_":0.0037854117840000006,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_i]3","ciUnitString_":"[IN_I]3","baseFactorStr_":"231","baseFactor_":"231","defError_":false},{"isBase_":false,"name_":"barrel","csCode_":"[bbl_us]","ciCode_":"[BBL_US]","property_":"fluid volume","magnitude_":0.158987294928,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[gal_us]","ciUnitString_":"[GAL_US]","baseFactorStr_":"42","baseFactor_":"42","defError_":false},{"isBase_":false,"name_":"quart","csCode_":"[qt_us]","ciCode_":"[QT_US]","property_":"fluid volume","magnitude_":0.0009463529460000001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[gal_us]/4","ciUnitString_":"[GAL_US]/4","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"pint","csCode_":"[pt_us]","ciCode_":"[PT_US]","property_":"fluid volume","magnitude_":0.00047317647300000007,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[qt_us]/2","ciUnitString_":"[QT_US]/2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"gill","csCode_":"[gil_us]","ciCode_":"[GIL_US]","property_":"fluid volume","magnitude_":0.00011829411825000002,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pt_us]/4","ciUnitString_":"[PT_US]/4","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"fluid ounce","csCode_":"[foz_us]","ciCode_":"[FOZ_US]","property_":"fluid volume","magnitude_":0.000029573529562500005,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"oz fl","class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[gil_us]/4","ciUnitString_":"[GIL_US]/4","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"fluid dram","csCode_":"[fdr_us]","ciCode_":"[FDR_US]","property_":"fluid volume","magnitude_":0.0000036966911953125006,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[foz_us]/8","ciUnitString_":"[FOZ_US]/8","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"minim","csCode_":"[min_us]","ciCode_":"[MIN_US]","property_":"fluid volume","magnitude_":6.1611519921875e-8,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[fdr_us]/60","ciUnitString_":"[FDR_US]/60","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"cord","csCode_":"[crd_us]","ciCode_":"[CRD_US]","property_":"fluid volume","magnitude_":3.6245563637760005,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_i]3","ciUnitString_":"[FT_I]3","baseFactorStr_":"128","baseFactor_":"128","defError_":false},{"isBase_":false,"name_":"bushel","csCode_":"[bu_us]","ciCode_":"[BU_US]","property_":"dry volume","magnitude_":0.03523907016688001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_i]3","ciUnitString_":"[IN_I]3","baseFactorStr_":"2150.42","baseFactor_":"2150.42","defError_":false},{"isBase_":false,"name_":"historical winchester gallon","csCode_":"[gal_wi]","ciCode_":"[GAL_WI]","property_":"dry volume","magnitude_":0.004404883770860001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[bu_us]/8","ciUnitString_":"[BU_US]/8","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"peck","csCode_":"[pk_us]","ciCode_":"[PK_US]","property_":"dry volume","magnitude_":0.008809767541720002,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[bu_us]/4","ciUnitString_":"[BU_US]/4","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"dry quart","csCode_":"[dqt_us]","ciCode_":"[DQT_US]","property_":"dry volume","magnitude_":0.0011012209427150002,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pk_us]/8","ciUnitString_":"[PK_US]/8","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"dry pint","csCode_":"[dpt_us]","ciCode_":"[DPT_US]","property_":"dry volume","magnitude_":0.0005506104713575001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[dqt_us]/2","ciUnitString_":"[DQT_US]/2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"tablespoon","csCode_":"[tbs_us]","ciCode_":"[TBS_US]","property_":"volume","magnitude_":0.000014786764781250002,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[foz_us]/2","ciUnitString_":"[FOZ_US]/2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"teaspoon","csCode_":"[tsp_us]","ciCode_":"[TSP_US]","property_":"volume","magnitude_":0.0000049289215937500005,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[tbs_us]/3","ciUnitString_":"[TBS_US]/3","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"cup","csCode_":"[cup_us]","ciCode_":"[CUP_US]","property_":"volume","magnitude_":0.00023658823650000004,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[tbs_us]","ciUnitString_":"[TBS_US]","baseFactorStr_":"16","baseFactor_":"16","defError_":false},{"isBase_":false,"name_":"metric fluid ounce","csCode_":"[foz_m]","ciCode_":"[FOZ_M]","property_":"fluid volume","magnitude_":0.000029999999999999997,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"oz fl","class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mL","ciUnitString_":"ML","baseFactorStr_":"30","baseFactor_":"30","defError_":false},{"isBase_":false,"name_":"metric cup","csCode_":"[cup_m]","ciCode_":"[CUP_M]","property_":"volume","magnitude_":0.00023999999999999998,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mL","ciUnitString_":"ML","baseFactorStr_":"240","baseFactor_":"240","defError_":false},{"isBase_":false,"name_":"metric teaspoon","csCode_":"[tsp_m]","ciCode_":"[TSP_M]","property_":"volume","magnitude_":0.0000049999999999999996,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mL","ciUnitString_":"mL","baseFactorStr_":"5","baseFactor_":"5","defError_":false},{"isBase_":false,"name_":"metric tablespoon","csCode_":"[tbs_m]","ciCode_":"[TBS_M]","property_":"volume","magnitude_":0.000014999999999999999,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mL","ciUnitString_":"mL","baseFactorStr_":"15","baseFactor_":"15","defError_":false},{"isBase_":false,"name_":"gallon","csCode_":"[gal_br]","ciCode_":"[GAL_BR]","property_":"volume","magnitude_":0.004546090000000001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"l","ciUnitString_":"L","baseFactorStr_":"4.54609","baseFactor_":"4.54609","defError_":false},{"isBase_":false,"name_":"peck","csCode_":"[pk_br]","ciCode_":"[PK_BR]","property_":"volume","magnitude_":0.009092180000000002,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[gal_br]","ciUnitString_":"[GAL_BR]","baseFactorStr_":"2","baseFactor_":"2","defError_":false},{"isBase_":false,"name_":"bushel","csCode_":"[bu_br]","ciCode_":"[BU_BR]","property_":"volume","magnitude_":0.03636872000000001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pk_br]","ciUnitString_":"[PK_BR]","baseFactorStr_":"4","baseFactor_":"4","defError_":false},{"isBase_":false,"name_":"quart","csCode_":"[qt_br]","ciCode_":"[QT_BR]","property_":"volume","magnitude_":0.0011365225000000002,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[gal_br]/4","ciUnitString_":"[GAL_BR]/4","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"pint","csCode_":"[pt_br]","ciCode_":"[PT_BR]","property_":"volume","magnitude_":0.0005682612500000001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[qt_br]/2","ciUnitString_":"[QT_BR]/2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"gill","csCode_":"[gil_br]","ciCode_":"[GIL_BR]","property_":"volume","magnitude_":0.00014206531250000003,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pt_br]/4","ciUnitString_":"[PT_BR]/4","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"fluid ounce","csCode_":"[foz_br]","ciCode_":"[FOZ_BR]","property_":"volume","magnitude_":0.000028413062500000005,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[gil_br]/5","ciUnitString_":"[GIL_BR]/5","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"fluid dram","csCode_":"[fdr_br]","ciCode_":"[FDR_BR]","property_":"volume","magnitude_":0.0000035516328125000006,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[foz_br]/8","ciUnitString_":"[FOZ_BR]/8","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"minim","csCode_":"[min_br]","ciCode_":"[MIN_BR]","property_":"volume","magnitude_":5.919388020833334e-8,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[fdr_br]/60","ciUnitString_":"[FDR_BR]/60","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"grain","csCode_":"[gr]","ciCode_":"[GR]","property_":"mass","magnitude_":0.06479891,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mg","ciUnitString_":"MG","baseFactorStr_":"64.79891","baseFactor_":"64.79891","defError_":false},{"isBase_":false,"name_":"pound","csCode_":"[lb_av]","ciCode_":"[LB_AV]","property_":"mass","magnitude_":453.59237,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"lb","class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[gr]","ciUnitString_":"[GR]","baseFactorStr_":"7000","baseFactor_":"7000","defError_":false},{"isBase_":false,"name_":"pound force","csCode_":"[lbf_av]","ciCode_":"[LBF_AV]","property_":"force","magnitude_":4448.2216152605,"dim_":{"dimVec_":[1,-2,1,0,0,0,0]},"printSymbol_":"lbf","class_":"const","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[lb_av].[g]","ciUnitString_":"[LB_AV].[G]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"ounce","csCode_":"[oz_av]","ciCode_":"[OZ_AV]","property_":"mass","magnitude_":28.349523125,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"oz","class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[lb_av]/16","ciUnitString_":"[LB_AV]/16","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"dram","csCode_":"[dr_av]","ciCode_":"[DR_AV]","property_":"mass","magnitude_":1.7718451953125,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[oz_av]/16","ciUnitString_":"[OZ_AV]/16","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"short hundredweight","csCode_":"[scwt_av]","ciCode_":"[SCWT_AV]","property_":"mass","magnitude_":45359.237,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[lb_av]","ciUnitString_":"[LB_AV]","baseFactorStr_":"100","baseFactor_":"100","defError_":false},{"isBase_":false,"name_":"long hunderdweight","csCode_":"[lcwt_av]","ciCode_":"[LCWT_AV]","property_":"mass","magnitude_":50802.345440000005,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[lb_av]","ciUnitString_":"[LB_AV]","baseFactorStr_":"112","baseFactor_":"112","defError_":false},{"isBase_":false,"name_":"short ton","csCode_":"[ston_av]","ciCode_":"[STON_AV]","property_":"mass","magnitude_":907184.74,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[scwt_av]","ciUnitString_":"[SCWT_AV]","baseFactorStr_":"20","baseFactor_":"20","defError_":false},{"isBase_":false,"name_":"long ton","csCode_":"[lton_av]","ciCode_":"[LTON_AV]","property_":"mass","magnitude_":1016046.9088000001,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[lcwt_av]","ciUnitString_":"[LCWT_AV]","baseFactorStr_":"20","baseFactor_":"20","defError_":false},{"isBase_":false,"name_":"stone","csCode_":"[stone_av]","ciCode_":"[STONE_AV]","property_":"mass","magnitude_":6350.293180000001,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[lb_av]","ciUnitString_":"[LB_AV]","baseFactorStr_":"14","baseFactor_":"14","defError_":false},{"isBase_":false,"name_":"pennyweight","csCode_":"[pwt_tr]","ciCode_":"[PWT_TR]","property_":"mass","magnitude_":1.5551738400000001,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"troy","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[gr]","ciUnitString_":"[GR]","baseFactorStr_":"24","baseFactor_":"24","defError_":false},{"isBase_":false,"name_":"ounce","csCode_":"[oz_tr]","ciCode_":"[OZ_TR]","property_":"mass","magnitude_":31.103476800000003,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"troy","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pwt_tr]","ciUnitString_":"[PWT_TR]","baseFactorStr_":"20","baseFactor_":"20","defError_":false},{"isBase_":false,"name_":"pound","csCode_":"[lb_tr]","ciCode_":"[LB_TR]","property_":"mass","magnitude_":373.2417216,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"troy","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[oz_tr]","ciUnitString_":"[OZ_TR]","baseFactorStr_":"12","baseFactor_":"12","defError_":false},{"isBase_":false,"name_":"scruple","csCode_":"[sc_ap]","ciCode_":"[SC_AP]","property_":"mass","magnitude_":1.2959782,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"apoth","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[gr]","ciUnitString_":"[GR]","baseFactorStr_":"20","baseFactor_":"20","defError_":false},{"isBase_":false,"name_":"dram","csCode_":"[dr_ap]","ciCode_":"[DR_AP]","property_":"mass","magnitude_":3.8879346,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"apoth","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[sc_ap]","ciUnitString_":"[SC_AP]","baseFactorStr_":"3","baseFactor_":"3","defError_":false},{"isBase_":false,"name_":"ounce","csCode_":"[oz_ap]","ciCode_":"[OZ_AP]","property_":"mass","magnitude_":31.1034768,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"apoth","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[dr_ap]","ciUnitString_":"[DR_AP]","baseFactorStr_":"8","baseFactor_":"8","defError_":false},{"isBase_":false,"name_":"pound","csCode_":"[lb_ap]","ciCode_":"[LB_AP]","property_":"mass","magnitude_":373.2417216,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"apoth","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[oz_ap]","ciUnitString_":"[OZ_AP]","baseFactorStr_":"12","baseFactor_":"12","defError_":false},{"isBase_":false,"name_":"metric ounce","csCode_":"[oz_m]","ciCode_":"[OZ_M]","property_":"mass","magnitude_":28,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"apoth","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"g","ciUnitString_":"g","baseFactorStr_":"28","baseFactor_":"28","defError_":false},{"isBase_":false,"name_":"line","csCode_":"[lne]","ciCode_":"[LNE]","property_":"length","magnitude_":0.002116666666666667,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_i]/12","ciUnitString_":"[IN_I]/12","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"point","csCode_":"[pnt]","ciCode_":"[PNT]","property_":"length","magnitude_":0.0003527777777777778,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[lne]/6","ciUnitString_":"[LNE]/6","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"pica","csCode_":"[pca]","ciCode_":"[PCA]","property_":"length","magnitude_":0.004233333333333334,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pnt]","ciUnitString_":"[PNT]","baseFactorStr_":"12","baseFactor_":"12","defError_":false},{"isBase_":false,"name_":"Printer's point","csCode_":"[pnt_pr]","ciCode_":"[PNT_PR]","property_":"length","magnitude_":0.00035145980000000004,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_i]","ciUnitString_":"[IN_I]","baseFactorStr_":"0.013837","baseFactor_":"0.013837","defError_":false},{"isBase_":false,"name_":"Printer's pica","csCode_":"[pca_pr]","ciCode_":"[PCA_PR]","property_":"length","magnitude_":0.004217517600000001,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pnt_pr]","ciUnitString_":"[PNT_PR]","baseFactorStr_":"12","baseFactor_":"12","defError_":false},{"isBase_":false,"name_":"pied","csCode_":"[pied]","ciCode_":"[PIED]","property_":"length","magnitude_":0.3248,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"cm","ciUnitString_":"CM","baseFactorStr_":"32.48","baseFactor_":"32.48","defError_":false},{"isBase_":false,"name_":"pouce","csCode_":"[pouce]","ciCode_":"[POUCE]","property_":"length","magnitude_":0.027066666666666666,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pied]/12","ciUnitString_":"[PIED]/12","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"ligne","csCode_":"[ligne]","ciCode_":"[LIGNE]","property_":"length","magnitude_":0.0022555555555555554,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pouce]/12","ciUnitString_":"[POUCE]/12","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"didot","csCode_":"[didot]","ciCode_":"[DIDOT]","property_":"length","magnitude_":0.0003759259259259259,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ligne]/6","ciUnitString_":"[LIGNE]/6","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"cicero","csCode_":"[cicero]","ciCode_":"[CICERO]","property_":"length","magnitude_":0.004511111111111111,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[didot]","ciUnitString_":"[DIDOT]","baseFactorStr_":"12","baseFactor_":"12","defError_":false},{"isBase_":false,"name_":"degree Fahrenheit","csCode_":"[degF]","ciCode_":"[DEGF]","property_":"temperature","magnitude_":0.5555555555555556,"dim_":{"dimVec_":[0,0,0,0,1,0,0]},"printSymbol_":"°F","class_":"heat","isMetric_":false,"variable_":null,"cnv_":"degF","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"K","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":0.5555555555555556,"defError_":false},{"isBase_":false,"name_":"degree Rankine","csCode_":"[degR]","ciCode_":"[degR]","property_":"temperature","magnitude_":0.5555555555555556,"dim_":{"dimVec_":[0,0,0,0,1,0,0]},"printSymbol_":"°R","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"K/9","ciUnitString_":"K/9","baseFactorStr_":"5","baseFactor_":"5","defError_":false},{"isBase_":false,"name_":"degree Réaumur","csCode_":"[degRe]","ciCode_":"[degRe]","property_":"temperature","magnitude_":1.25,"dim_":{"dimVec_":[0,0,0,0,1,0,0]},"printSymbol_":"°Ré","class_":"heat","isMetric_":false,"variable_":null,"cnv_":"degRe","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"K","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1.25,"defError_":false},{"isBase_":false,"name_":"calorie at 15 °C","csCode_":"cal_[15]","ciCode_":"CAL_[15]","property_":"energy","magnitude_":4185.8,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"cal<sub>15°C</sub>","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"J","ciUnitString_":"J","baseFactorStr_":"4.18580","baseFactor_":"4.18580","defError_":false},{"isBase_":false,"name_":"calorie at 20 °C","csCode_":"cal_[20]","ciCode_":"CAL_[20]","property_":"energy","magnitude_":4181.9,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"cal<sub>20°C</sub>","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"J","ciUnitString_":"J","baseFactorStr_":"4.18190","baseFactor_":"4.18190","defError_":false},{"isBase_":false,"name_":"mean calorie","csCode_":"cal_m","ciCode_":"CAL_M","property_":"energy","magnitude_":4190.0199999999995,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"cal<sub>m</sub>","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"J","ciUnitString_":"J","baseFactorStr_":"4.19002","baseFactor_":"4.19002","defError_":false},{"isBase_":false,"name_":"international table calorie","csCode_":"cal_IT","ciCode_":"CAL_IT","property_":"energy","magnitude_":4186.8,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"cal<sub>IT</sub>","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"J","ciUnitString_":"J","baseFactorStr_":"4.1868","baseFactor_":"4.1868","defError_":false},{"isBase_":false,"name_":"thermochemical calorie","csCode_":"cal_th","ciCode_":"CAL_TH","property_":"energy","magnitude_":4184,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"cal<sub>th</sub>","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"J","ciUnitString_":"J","baseFactorStr_":"4.184","baseFactor_":"4.184","defError_":false},{"isBase_":false,"name_":"calorie","csCode_":"cal","ciCode_":"CAL","property_":"energy","magnitude_":4184,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"cal","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"cal_th","ciUnitString_":"CAL_TH","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"nutrition label Calories","csCode_":"[Cal]","ciCode_":"[CAL]","property_":"energy","magnitude_":4184000,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"Cal","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"kcal_th","ciUnitString_":"KCAL_TH","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"British thermal unit at 39 °F","csCode_":"[Btu_39]","ciCode_":"[BTU_39]","property_":"energy","magnitude_":1059670,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"Btu<sub>39°F</sub>","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"kJ","ciUnitString_":"kJ","baseFactorStr_":"1.05967","baseFactor_":"1.05967","defError_":false},{"isBase_":false,"name_":"British thermal unit at 59 °F","csCode_":"[Btu_59]","ciCode_":"[BTU_59]","property_":"energy","magnitude_":1054800,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"Btu<sub>59°F</sub>","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"kJ","ciUnitString_":"kJ","baseFactorStr_":"1.05480","baseFactor_":"1.05480","defError_":false},{"isBase_":false,"name_":"British thermal unit at 60 °F","csCode_":"[Btu_60]","ciCode_":"[BTU_60]","property_":"energy","magnitude_":1054680,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"Btu<sub>60°F</sub>","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"kJ","ciUnitString_":"kJ","baseFactorStr_":"1.05468","baseFactor_":"1.05468","defError_":false},{"isBase_":false,"name_":"mean British thermal unit","csCode_":"[Btu_m]","ciCode_":"[BTU_M]","property_":"energy","magnitude_":1055870,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"Btu<sub>m</sub>","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"kJ","ciUnitString_":"kJ","baseFactorStr_":"1.05587","baseFactor_":"1.05587","defError_":false},{"isBase_":false,"name_":"international table British thermal unit","csCode_":"[Btu_IT]","ciCode_":"[BTU_IT]","property_":"energy","magnitude_":1055055.85262,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"Btu<sub>IT</sub>","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"kJ","ciUnitString_":"kJ","baseFactorStr_":"1.05505585262","baseFactor_":"1.05505585262","defError_":false},{"isBase_":false,"name_":"thermochemical British thermal unit","csCode_":"[Btu_th]","ciCode_":"[BTU_TH]","property_":"energy","magnitude_":1054350,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"Btu<sub>th</sub>","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"kJ","ciUnitString_":"kJ","baseFactorStr_":"1.054350","baseFactor_":"1.054350","defError_":false},{"isBase_":false,"name_":"British thermal unit","csCode_":"[Btu]","ciCode_":"[BTU]","property_":"energy","magnitude_":1054350,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"btu","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[Btu_th]","ciUnitString_":"[BTU_TH]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"horsepower","csCode_":"[HP]","ciCode_":"[HP]","property_":"power","magnitude_":745699.8715822703,"dim_":{"dimVec_":[2,-3,1,0,0,0,0]},"printSymbol_":null,"class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_i].[lbf_av]/s","ciUnitString_":"[FT_I].[LBF_AV]/S","baseFactorStr_":"550","baseFactor_":"550","defError_":false},{"isBase_":false,"name_":"tex","csCode_":"tex","ciCode_":"TEX","property_":"linear mass density (of textile thread)","magnitude_":0.001,"dim_":{"dimVec_":[-1,0,1,0,0,0,0]},"printSymbol_":"tex","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"g/km","ciUnitString_":"G/KM","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Denier","csCode_":"[den]","ciCode_":"[DEN]","property_":"linear mass density (of textile thread)","magnitude_":0.0001111111111111111,"dim_":{"dimVec_":[-1,0,1,0,0,0,0]},"printSymbol_":"den","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"g/9/km","ciUnitString_":"G/9/KM","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"meter of water column","csCode_":"m[H2O]","ciCode_":"M[H2O]","property_":"pressure","magnitude_":9806650,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"m HO<sub><r>2</r></sub>","class_":"clinical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"kPa","ciUnitString_":"KPAL","baseFactorStr_":"980665e-5","baseFactor_":"9.80665","defError_":false},{"isBase_":false,"name_":"meter of mercury column","csCode_":"m[Hg]","ciCode_":"M[HG]","property_":"pressure","magnitude_":133322000,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"m Hg","class_":"clinical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"kPa","ciUnitString_":"KPAL","baseFactorStr_":"133.3220","baseFactor_":"133.3220","defError_":false},{"isBase_":false,"name_":"inch of water column","csCode_":"[in_i'H2O]","ciCode_":"[IN_I'H2O]","property_":"pressure","magnitude_":249088.91000000003,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"in HO<sub><r>2</r></sub>","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"m[H2O].[in_i]/m","ciUnitString_":"M[H2O].[IN_I]/M","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"inch of mercury column","csCode_":"[in_i'Hg]","ciCode_":"[IN_I'HG]","property_":"pressure","magnitude_":3386378.8000000003,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"in Hg","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"m[Hg].[in_i]/m","ciUnitString_":"M[HG].[IN_I]/M","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"peripheral vascular resistance unit","csCode_":"[PRU]","ciCode_":"[PRU]","property_":"fluid resistance","magnitude_":133322000000,"dim_":{"dimVec_":[-4,-1,1,0,0,0,0]},"printSymbol_":"P.R.U.","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mm[Hg].s/ml","ciUnitString_":"MM[HG].S/ML","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Wood unit","csCode_":"[wood'U]","ciCode_":"[WOOD'U]","property_":"fluid resistance","magnitude_":7999320000,"dim_":{"dimVec_":[-4,-1,1,0,0,0,0]},"printSymbol_":"Wood U.","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mm[Hg].min/L","ciUnitString_":"MM[HG].MIN/L","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"diopter","csCode_":"[diop]","ciCode_":"[DIOP]","property_":"refraction of a lens","magnitude_":1,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"dpt","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":"inv","cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"m","ciUnitString_":"/M","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"prism diopter","csCode_":"[p'diop]","ciCode_":"[P'DIOP]","property_":"refraction of a prism","magnitude_":0.017453292519943295,"dim_":{"dimVec_":null},"printSymbol_":"PD","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":"tanTimes100","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"deg","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"percent of slope","csCode_":"%[slope]","ciCode_":"%[SLOPE]","property_":"slope","magnitude_":0.017453292519943295,"dim_":{"dimVec_":null},"printSymbol_":"%","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":"100tan","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"deg","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"mesh","csCode_":"[mesh_i]","ciCode_":"[MESH_I]","property_":"lineic number","magnitude_":0.025400000000000002,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"clinical","isMetric_":false,"variable_":null,"cnv_":"inv","cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_i]","ciUnitString_":"/[IN_I]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Charrière","csCode_":"[Ch]","ciCode_":"[CH]","property_":"gauge of catheters","magnitude_":0.0003333333333333333,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"Ch","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mm/3","ciUnitString_":"MM/3","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"drop","csCode_":"[drp]","ciCode_":"[DRP]","property_":"volume","magnitude_":5e-8,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"drp","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"ml/20","ciUnitString_":"ML/20","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Hounsfield unit","csCode_":"[hnsf'U]","ciCode_":"[HNSF'U]","property_":"x-ray attenuation","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"HF","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"metabolic equivalent","csCode_":"[MET]","ciCode_":"[MET]","property_":"metabolic cost of physical activity","magnitude_":5.833333333333334e-11,"dim_":{"dimVec_":[3,-1,-1,0,0,0,0]},"printSymbol_":"MET","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mL/min/kg","ciUnitString_":"ML/MIN/KG","baseFactorStr_":"3.5","baseFactor_":"3.5","defError_":false},{"isBase_":false,"name_":"homeopathic potency of decimal series (retired)","csCode_":"[hp'_X]","ciCode_":"[HP'_X]","property_":"homeopathic potency (retired)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"X","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":"hpX","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1,"defError_":false},{"isBase_":false,"name_":"homeopathic potency of centesimal series (retired)","csCode_":"[hp'_C]","ciCode_":"[HP'_C]","property_":"homeopathic potency (retired)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"C","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":"hpC","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1,"defError_":false},{"isBase_":false,"name_":"homeopathic potency of millesimal series (retired)","csCode_":"[hp'_M]","ciCode_":"[HP'_M]","property_":"homeopathic potency (retired)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"M","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":"hpM","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1,"defError_":false},{"isBase_":false,"name_":"homeopathic potency of quintamillesimal series (retired)","csCode_":"[hp'_Q]","ciCode_":"[HP'_Q]","property_":"homeopathic potency (retired)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"Q","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":"hpQ","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1,"defError_":false},{"isBase_":false,"name_":"homeopathic potency of decimal hahnemannian series","csCode_":"[hp_X]","ciCode_":"[HP_X]","property_":"homeopathic potency (Hahnemann)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"X","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"homeopathic potency of centesimal hahnemannian series","csCode_":"[hp_C]","ciCode_":"[HP_C]","property_":"homeopathic potency (Hahnemann)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"C","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"homeopathic potency of millesimal hahnemannian series","csCode_":"[hp_M]","ciCode_":"[HP_M]","property_":"homeopathic potency (Hahnemann)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"M","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"homeopathic potency of quintamillesimal hahnemannian series","csCode_":"[hp_Q]","ciCode_":"[HP_Q]","property_":"homeopathic potency (Hahnemann)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"Q","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"homeopathic potency of decimal korsakovian series","csCode_":"[kp_X]","ciCode_":"[KP_X]","property_":"homeopathic potency (Korsakov)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"X","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"homeopathic potency of centesimal korsakovian series","csCode_":"[kp_C]","ciCode_":"[KP_C]","property_":"homeopathic potency (Korsakov)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"C","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"homeopathic potency of millesimal korsakovian series","csCode_":"[kp_M]","ciCode_":"[KP_M]","property_":"homeopathic potency (Korsakov)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"M","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"homeopathic potency of quintamillesimal korsakovian series","csCode_":"[kp_Q]","ciCode_":"[KP_Q]","property_":"homeopathic potency (Korsakov)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"Q","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"equivalents","csCode_":"eq","ciCode_":"EQ","property_":"amount of substance","magnitude_":6.0221367e+23,"dim_":{"dimVec_":null},"printSymbol_":"eq","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"osmole","csCode_":"osm","ciCode_":"OSM","property_":"amount of substance (dissolved particles)","magnitude_":6.0221367e+23,"dim_":{"dimVec_":null},"printSymbol_":"osm","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"pH","csCode_":"[pH]","ciCode_":"[PH]","property_":"acidity","magnitude_":6.0221366999999994e+26,"dim_":{"dimVec_":null},"printSymbol_":"pH","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":"pH","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"mol/l","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"gram percent","csCode_":"g%","ciCode_":"G%","property_":"mass concentration","magnitude_":10000,"dim_":{"dimVec_":[-3,0,1,0,0,0,0]},"printSymbol_":"g%","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"g/dl","ciUnitString_":"G/DL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Svedberg unit","csCode_":"[S]","ciCode_":"[S]","property_":"sedimentation coefficient","magnitude_":1e-13,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"S","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"s","ciUnitString_":"10*-13.S","baseFactorStr_":"1","baseFactor_":1e-13,"defError_":false},{"isBase_":false,"name_":"high power field","csCode_":"[HPF]","ciCode_":"[HPF]","property_":"view area in microscope","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"HPF","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"low power field","csCode_":"[LPF]","ciCode_":"[LPF]","property_":"view area in microscope","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"LPF","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"100","baseFactor_":"100","defError_":false},{"isBase_":false,"name_":"katal","csCode_":"kat","ciCode_":"KAT","property_":"catalytic activity","magnitude_":6.0221367e+23,"dim_":{"dimVec_":null},"printSymbol_":"kat","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mol/s","ciUnitString_":"MOL/S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Unit","csCode_":"U","ciCode_":"U","property_":"catalytic activity","magnitude_":10036894500000000,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"international unit","csCode_":"[iU]","ciCode_":"[IU]","property_":"arbitrary","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"IU","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"international unit","csCode_":"[IU]","ciCode_":"[IU]","property_":"arbitrary","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"i.U.","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"[iU]","ciUnitString_":"[IU]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"arbitary unit","csCode_":"[arb'U]","ciCode_":"[ARB'U]","property_":"arbitrary","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"arb. U","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"United States Pharmacopeia unit","csCode_":"[USP'U]","ciCode_":"[USP'U]","property_":"arbitrary","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"U.S.P.","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"GPL unit","csCode_":"[GPL'U]","ciCode_":"[GPL'U]","property_":"biologic activity of anticardiolipin IgG","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"MPL unit","csCode_":"[MPL'U]","ciCode_":"[MPL'U]","property_":"biologic activity of anticardiolipin IgM","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"APL unit","csCode_":"[APL'U]","ciCode_":"[APL'U]","property_":"biologic activity of anticardiolipin IgA","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Bethesda unit","csCode_":"[beth'U]","ciCode_":"[BETH'U]","property_":"biologic activity of factor VIII inhibitor","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"anti factor Xa unit","csCode_":"[anti'Xa'U]","ciCode_":"[ANTI'XA'U]","property_":"biologic activity of factor Xa inhibitor (heparin)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Todd unit","csCode_":"[todd'U]","ciCode_":"[TODD'U]","property_":"biologic activity antistreptolysin O","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Dye unit","csCode_":"[dye'U]","ciCode_":"[DYE'U]","property_":"biologic activity of amylase","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Somogyi unit","csCode_":"[smgy'U]","ciCode_":"[SMGY'U]","property_":"biologic activity of amylase","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Bodansky unit","csCode_":"[bdsk'U]","ciCode_":"[BDSK'U]","property_":"biologic activity of phosphatase","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"King-Armstrong unit","csCode_":"[ka'U]","ciCode_":"[KA'U]","property_":"biologic activity of phosphatase","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Kunkel unit","csCode_":"[knk'U]","ciCode_":"[KNK'U]","property_":"arbitrary biologic activity","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Mac Lagan unit","csCode_":"[mclg'U]","ciCode_":"[MCLG'U]","property_":"arbitrary biologic activity","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"tuberculin unit","csCode_":"[tb'U]","ciCode_":"[TB'U]","property_":"biologic activity of tuberculin","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"50% cell culture infectious dose","csCode_":"[CCID_50]","ciCode_":"[CCID_50]","property_":"biologic activity (infectivity) of an infectious agent preparation","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"CCID<sub>50</sub>","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"50% tissue culture infectious dose","csCode_":"[TCID_50]","ciCode_":"[TCID_50]","property_":"biologic activity (infectivity) of an infectious agent preparation","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"TCID<sub>50</sub>","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"50% embryo infectious dose","csCode_":"[EID_50]","ciCode_":"[EID_50]","property_":"biologic activity (infectivity) of an infectious agent preparation","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"EID<sub>50</sub>","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"plaque forming units","csCode_":"[PFU]","ciCode_":"[PFU]","property_":"amount of an infectious agent","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"PFU","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"focus forming units","csCode_":"[FFU]","ciCode_":"[FFU]","property_":"amount of an infectious agent","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"FFU","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"colony forming units","csCode_":"[CFU]","ciCode_":"[CFU]","property_":"amount of a proliferating organism","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"CFU","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"index of reactivity","csCode_":"[IR]","ciCode_":"[IR]","property_":"amount of an allergen callibrated through in-vivo testing using the Stallergenes® method.","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"IR","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"bioequivalent allergen unit","csCode_":"[BAU]","ciCode_":"[BAU]","property_":"amount of an allergen callibrated through in-vivo testing based on the ID50EAL method of (intradermal dilution for 50mm sum of erythema diameters","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"BAU","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"allergen unit","csCode_":"[AU]","ciCode_":"[AU]","property_":"procedure defined amount of an allergen using some reference standard","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"AU","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"allergen unit for Ambrosia artemisiifolia","csCode_":"[Amb'a'1'U]","ciCode_":"[AMB'A'1'U]","property_":"procedure defined amount of the major allergen of ragweed.","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"Amb a 1 U","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"protein nitrogen unit","csCode_":"[PNU]","ciCode_":"[PNU]","property_":"procedure defined amount of a protein substance","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"PNU","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Limit of flocculation","csCode_":"[Lf]","ciCode_":"[LF]","property_":"procedure defined amount of an antigen substance","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"Lf","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"D-antigen unit","csCode_":"[D'ag'U]","ciCode_":"[D'AG'U]","property_":"procedure defined amount of a poliomyelitis d-antigen substance","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"fibrinogen equivalent unit","csCode_":"[FEU]","ciCode_":"[FEU]","property_":"amount of fibrinogen broken down into the measured d-dimers","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"ELISA unit","csCode_":"[ELU]","ciCode_":"[ELU]","property_":"arbitrary ELISA unit","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Ehrlich unit","csCode_":"[EU]","ciCode_":"[EU]","property_":"Ehrlich unit","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"neper","csCode_":"Np","ciCode_":"NEP","property_":"level","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"Np","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"ln","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1,"defError_":false},{"isBase_":false,"name_":"bel","csCode_":"B","ciCode_":"B","property_":"level","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"B","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lg","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1,"defError_":false},{"isBase_":false,"name_":"bel sound pressure","csCode_":"B[SPL]","ciCode_":"B[SPL]","property_":"pressure level","magnitude_":631152000000000100,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"B(SPL)","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lgTimes2","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"Pa","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":0.00002,"defError_":false},{"isBase_":false,"name_":"bel volt","csCode_":"B[V]","ciCode_":"B[V]","property_":"electric potential level","magnitude_":1000,"dim_":{"dimVec_":[2,-2,1,0,0,-1,0]},"printSymbol_":"B(V)","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lgTimes2","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"V","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"bel millivolt","csCode_":"B[mV]","ciCode_":"B[MV]","property_":"electric potential level","magnitude_":1,"dim_":{"dimVec_":[2,-2,1,0,0,-1,0]},"printSymbol_":"B(mV)","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lgTimes2","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"mV","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"bel microvolt","csCode_":"B[uV]","ciCode_":"B[UV]","property_":"electric potential level","magnitude_":0.001,"dim_":{"dimVec_":[2,-2,1,0,0,-1,0]},"printSymbol_":"B(μV)","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lgTimes2","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"uV","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"bel 10 nanovolt","csCode_":"B[10.nV]","ciCode_":"B[10.NV]","property_":"electric potential level","magnitude_":0.000010000000000000003,"dim_":{"dimVec_":[2,-2,1,0,0,-1,0]},"printSymbol_":"B(10 nV)","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lgTimes2","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"nV","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"bel watt","csCode_":"B[W]","ciCode_":"B[W]","property_":"power level","magnitude_":1000,"dim_":{"dimVec_":[2,-3,1,0,0,0,0]},"printSymbol_":"B(W)","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lg","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"W","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"bel kilowatt","csCode_":"B[kW]","ciCode_":"B[KW]","property_":"power level","magnitude_":1000000,"dim_":{"dimVec_":[2,-3,1,0,0,0,0]},"printSymbol_":"B(kW)","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lg","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"kW","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"stere","csCode_":"st","ciCode_":"STR","property_":"volume","magnitude_":1,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"st","class_":"misc","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"m3","ciUnitString_":"M3","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Ångström","csCode_":"Ao","ciCode_":"AO","property_":"length","magnitude_":1.0000000000000002e-10,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"Å","class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"nm","ciUnitString_":"NM","baseFactorStr_":"0.1","baseFactor_":"0.1","defError_":false},{"isBase_":false,"name_":"barn","csCode_":"b","ciCode_":"BRN","property_":"action area","magnitude_":9.999999999999999e-29,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":"b","class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"fm2","ciUnitString_":"FM2","baseFactorStr_":"100","baseFactor_":"100","defError_":false},{"isBase_":false,"name_":"technical atmosphere","csCode_":"att","ciCode_":"ATT","property_":"pressure","magnitude_":98066499.99999999,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"at","class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"kgf/cm2","ciUnitString_":"KGF/CM2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"mho","csCode_":"mho","ciCode_":"MHO","property_":"electric conductance","magnitude_":0.001,"dim_":{"dimVec_":[-2,1,-1,0,0,2,0]},"printSymbol_":"mho","class_":"misc","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"S","ciUnitString_":"S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"pound per sqare inch","csCode_":"[psi]","ciCode_":"[PSI]","property_":"pressure","magnitude_":6894757.293168359,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"psi","class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[lbf_av]/[in_i]2","ciUnitString_":"[LBF_AV]/[IN_I]2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"circle","csCode_":"circ","ciCode_":"CIRC","property_":"plane angle","magnitude_":6.283185307179586,"dim_":{"dimVec_":null},"printSymbol_":"circ","class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pi].rad","ciUnitString_":"[PI].RAD","baseFactorStr_":"2","baseFactor_":"2","defError_":false},{"isBase_":false,"name_":"spere","csCode_":"sph","ciCode_":"SPH","property_":"solid angle","magnitude_":12.566370614359172,"dim_":{"dimVec_":null},"printSymbol_":"sph","class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pi].sr","ciUnitString_":"[PI].SR","baseFactorStr_":"4","baseFactor_":"4","defError_":false},{"isBase_":false,"name_":"metric carat","csCode_":"[car_m]","ciCode_":"[CAR_M]","property_":"mass","magnitude_":0.2,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"ct<sub>m</sub>","class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"g","ciUnitString_":"G","baseFactorStr_":"2e-1","baseFactor_":"0.2","defError_":false},{"isBase_":false,"name_":"carat of gold alloys","csCode_":"[car_Au]","ciCode_":"[CAR_AU]","property_":"mass fraction","magnitude_":0.041666666666666664,"dim_":{"dimVec_":null},"printSymbol_":"ct<sub><r>Au</r></sub>","class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"/24","ciUnitString_":"/24","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Smoot","csCode_":"[smoot]","ciCode_":"[SMOOT]","property_":"length","magnitude_":1.7018000000000002,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_i]","ciUnitString_":"[IN_I]","baseFactorStr_":"67","baseFactor_":"67","defError_":false},{"isBase_":false,"name_":"meter per square seconds per square root of hertz","csCode_":"[m/s2/Hz^(1/2)]","ciCode_":"[M/S2/HZ^(1/2)]","property_":"amplitude spectral density","magnitude_":1,"dim_":{"dimVec_":[2,-3,0,0,0,0,0]},"printSymbol_":null,"class_":"misc","isMetric_":false,"variable_":null,"cnv_":"sqrt","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"m2/s4/Hz","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"bit","csCode_":"bit_s","ciCode_":"BIT_S","property_":"amount of information","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"bit<sub>s</sub>","class_":"infotech","isMetric_":false,"variable_":null,"cnv_":"ld","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1,"defError_":false},{"isBase_":false,"name_":"bit","csCode_":"bit","ciCode_":"BIT","property_":"amount of information","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"bit","class_":"infotech","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"byte","csCode_":"By","ciCode_":"BY","property_":"amount of information","magnitude_":8,"dim_":{"dimVec_":null},"printSymbol_":"B","class_":"infotech","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"bit","ciUnitString_":"bit","baseFactorStr_":"8","baseFactor_":"8","defError_":false},{"isBase_":false,"name_":"baud","csCode_":"Bd","ciCode_":"BD","property_":"signal transmission rate","magnitude_":1,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"Bd","class_":"infotech","isMetric_":true,"variable_":null,"cnv_":"inv","cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"s","ciUnitString_":"/s","baseFactorStr_":"1","baseFactor_":"1","defError_":false}]}

},{}],2:[function(require,module,exports){
'use strict'

exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

function init () {
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i]
    revLookup[code.charCodeAt(i)] = i
  }

  revLookup['-'.charCodeAt(0)] = 62
  revLookup['_'.charCodeAt(0)] = 63
}

init()

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0

  // base64 is 4/3 + up to two characters of the original data
  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}

},{}],3:[function(require,module,exports){

},{}],4:[function(require,module,exports){
var leveljs = require('level-js');
var levelup = require('levelup');
var fs = require('level-filesystem');

var db = levelup('level-filesystem', {db:leveljs});
module.exports = fs(db);
},{"level-filesystem":6,"level-js":48,"levelup":66}],5:[function(require,module,exports){
var errno = require('errno');

Object.keys(errno.code).forEach(function(code) {
	var e = errno.code[code];

	exports[code] = function(path) {
		var err = new Error(code+', '+e.description+(path ? ' \''+path+'\'' : ''));
		err.errno = e.errno;
		err.code = code;
		err.path = path;
		return err;
	};
});
},{"errno":8}],6:[function(require,module,exports){
(function (process,Buffer){
var fwd = require('fwd-stream');
var sublevel = require('level-sublevel');
var blobs = require('level-blobs');
var peek = require('level-peek');
var once = require('once');
var octal = require('octal')
var errno = require('./errno');
var paths = require('./paths');
var watchers = require('./watchers');

var nextTick = function(cb, err, val) {
	process.nextTick(function() {
		cb(err, val);
	});
};

var noop = function() {};

module.exports = function(db, opts) {
	var fs = {};

	db = sublevel(db);

	var bl = blobs(db.sublevel('blobs'), opts);
	var ps = paths(db.sublevel('stats'));
	var links = db.sublevel('links');

	var listeners = watchers();
	var fds = [];

	var now = Date.now();
	var inc = function() {
		return ++now;
	};

	fs.mkdir = function(key, mode, cb) {
		if (typeof mode === 'function') return fs.mkdir(key, null, mode);
		if (!mode) mode = octal(777);
		if (!cb) cb = noop;

		ps.follow(key, function(err, stat, key) {
			if (err && err.code !== 'ENOENT') return cb(err);
			if (stat) return cb(errno.EEXIST(key));

			ps.put(key, {
				type:'directory',
				mode: mode,
				size: 4096
			}, listeners.cb(key, cb));
		});
	};

	fs.rmdir = function(key, cb) {
		if (!cb) cb = noop;
		ps.follow(key, function(err, stat, key) {
			if (err) return cb(err);
			fs.readdir(key, function(err, files) {
				if (err) return cb(err);
				if (files.length) return cb(errno.ENOTEMPTY(key));
				ps.del(key, listeners.cb(key, cb));
			});
		});

	};

	fs.readdir = function(key, cb) {
		ps.follow(key, function(err, stat, key) {
			if (err) return cb(err);
			if (!stat) return cb(errno.ENOENT(key));
			if (!stat.isDirectory()) return cb(errno.ENOTDIR(key));
			ps.list(key, cb);
		});
	};

	var stat = function(key, lookup, cb) {
		lookup(key, function(err, stat, key) {
			if (err) return cb(err);
			if (!stat.isFile()) return cb(null, stat);
			var blob = stat && stat.blob || key;
			bl.size(blob, function(err, size) {
				if (err) return cb(err);
				stat.size = size;
				cb(null, stat);
			});
		});
	};

	fs.stat = function(key, cb) {
		stat(key, ps.follow, cb);
	};

	fs.lstat = function(key, cb) {
		stat(key, ps.get, cb);
	};

	fs.exists = function(key, cb) {
		ps.follow(key, function(err) {
			cb(!err);
		});
	};

	var chmod = function(key, lookup, mode, cb) {
		if (!cb) cb = noop;
		lookup(key, function(err, stat, key) {
			if (err) return cb(err);
			ps.update(key, {mode:mode}, listeners.cb(key, cb));
		});
	};

	fs.chmod = function(key, mode, cb) {
		chmod(key, ps.follow, mode, cb);
	};

	fs.lchmod = function(key, mode, cb) {
		chmod(key, ps.get, mode, cb);
	};

	var chown = function(key, lookup, uid, gid, cb) {
		if (!cb) cb = noop;
		lookup(key, function(err, stat, key) {
			if (err) return cb(err);
			ps.update(key, {uid:uid, gid:gid}, listeners.cb(key, cb));
		});
	};

	fs.chown = function(key, uid, gid, cb) {
		chown(key, ps.follow, uid, gid, cb);
	};

	fs.lchown = function(key, uid, gid, cb) {
		chown(key, ps.get, uid, gid, cb);
	};

	fs.utimes = function(key, atime, mtime, cb) {
		if (!cb) cb = noop;
		ps.follow(key, function(err, stat, key) {
			if (err) return cb(err);
			var upd = {};
			if (atime) upd.atime = atime;
			if (mtime) upd.mtime = mtime;
			ps.update(key, upd, listeners.cb(key, cb));
		});
	};

	fs.rename = function(from, to, cb) {
		if (!cb) cb = noop;

		ps.follow(from, function(err, statFrom, from) {
			if (err) return cb(err);

			var rename = function() {
				cb = listeners.cb(to, listeners.cb(from, cb));
				ps.put(to, statFrom, function(err) {
					if (err) return cb(err);
					ps.del(from, cb);
				});
			};

			ps.follow(to, function(err, statTo, to) {
				if (err && err.code !== 'ENOENT') return cb(err);
				if (!statTo) return rename();
				if (statFrom.isDirectory() !== statTo.isDirectory()) return cb(errno.EISDIR(from));

				if (statTo.isDirectory()) {
					fs.readdir(to, function(err, list) {
						if (err) return cb(err);
						if (list.length) return cb(errno.ENOTEMPTY(from));
						rename();
					});
					return;
				}

				rename();
			});
		});
	};

	fs.realpath = function(key, cache, cb) {
		if (typeof cache === 'function') return fs.realpath(key, null, cache);
		ps.follow(key, function(err, stat, key) {
			if (err) return cb(err);
			cb(null, key);
		});
	};

	fs.writeFile = function(key, data, opts, cb) {
		if (typeof opts === 'function') return fs.writeFile(key, data, null, opts);
		if (typeof opts === 'string') opts = {encoding:opts};
		if (!opts) opts = {};
		if (!cb) cb = noop;

		if (!Buffer.isBuffer(data)) data = new Buffer(data, opts.encoding || 'utf-8');

		var flags = opts.flags || 'w';
		opts.append = flags[0] !== 'w';

		ps.follow(key, function(err, stat, key) {
			if (err && err.code !== 'ENOENT') return cb(err);
			if (stat && stat.isDirectory()) return cb(errno.EISDIR(key));
			if (stat && flags[1] === 'x') return cb(errno.EEXIST(key));

			var blob = stat && stat.blob || key;
			ps.writable(key, function(err) {
				if (err) return cb(err);

				bl.write(blob, data, opts, function(err) {
					if (err) return cb(err);

					ps.put(key, {
						ctime: stat && stat.ctime,
						mtime: new Date(),
						mode: opts.mode || octal(666),
						type:'file'
					}, listeners.cb(key, cb));
				});
			});
		});
	};

	fs.appendFile = function(key, data, opts, cb) {
		if (typeof opts === 'function') return fs.appendFile(key, data, null, opts);
		if (typeof opts === 'string') opts = {encoding:opts};
		if (!opts) opts = {};

		opts.flags = 'a';
		fs.writeFile(key, data, opts, cb);
	};

	fs.unlink = function(key, cb) {
		if (!cb) cb = noop;

		ps.get(key, function(err, stat, key) {
			if (err) return cb(err);
			if (stat.isDirectory()) return cb(errno.EISDIR(key));

			var clean = function(target) {
				peek(links, {start:target+'\xff', end:target+'\xff\xff'}, function(err) {
					if (err) return bl.remove(target, cb); // no more links
					cb();
				});
			};

			var onlink = function() {
				var target = stat.link.slice(0, stat.link.indexOf('\xff'));
				links.del(stat.link, function(err) {
					if (err) return cb(err);
					clean(target);
				});
			};

			ps.del(key, listeners.cb(key, function(err) {
				if (err) return cb(err);
				if (stat.link) return onlink();
				links.del(key+'\xff', function(err) {
					if (err) return cb(err);
					clean(key);
				});
			}));
		});
	};

	fs.readFile = function(key, opts, cb) {
		if (typeof opts === 'function') return fs.readFile(key, null, opts);
		if (typeof opts === 'string') opts = {encoding:opts};
		if (!opts) opts = {};

		var encoding = opts.encoding || 'binary';
		var flag = opts.flag || 'r';

		ps.follow(key, function(err, stat, key) {
			if (err) return cb(err);
			if (stat.isDirectory()) return cb(errno.EISDIR(key));

			var blob = stat && stat.blob || key;
			bl.read(blob, function(err, data) {
				if (err) return cb(err);
				cb(null, opts.encoding ? data.toString(opts.encoding) : data);
			});
		});
	};

	fs.createReadStream = function(key, opts) {
		if (!opts) opts = {};

		var closed = false;
		var rs = fwd.readable(function(cb) {
			ps.follow(key, function(err, stat, key) {
				if (err) return cb(err);
				if (stat.isDirectory()) return cb(errno.EISDIR(key));

				var blob = stat && stat.blob || key;
				var r = bl.createReadStream(blob, opts);

				rs.emit('open');
				r.on('end', function() {
					process.nextTick(function() {
						if (!closed) rs.emit('close');
					});
				});

				cb(null, r);
			});
		});

		rs.on('close', function() {
			closed = true;
		});

		return rs;
	};

	fs.createWriteStream = function(key, opts) {
		if (!opts) opts = {};

		var flags = opts.flags || 'w';
		var closed = false;
		var mode = opts.mode || octal(666);

		opts.append = flags[0] === 'a';

		var ws = fwd.writable(function(cb) {
			ps.follow(key, function(err, stat, key) {
				if (err && err.code !== 'ENOENT') return cb(err);
				if (stat && stat.isDirectory()) return cb(errno.EISDIR(key));
				if (stat && flags[1] === 'x') return cb(errno.EEXIST(key));

				var blob = stat && stat.blob || key;
				ps.writable(blob, function(err) {
					if (err) return cb(err);

					var ctime = stat ? stat.ctime : new Date();
					var s = {
						ctime: ctime,
						mtime: new Date(),
						mode: mode,
						type:'file'
					};

					ps.put(key, s, function(err) {
						if (err) return cb(err);

						var w = bl.createWriteStream(blob, opts);

						ws.emit('open');
						w.on('finish', function() {
							s.mtime = new Date();
							ps.put(key, s, function() {
								listeners.change(key);
								if (!closed) ws.emit('close');
							});
						});

						cb(null, w);
					});
				});
			});
		});

		ws.on('close', function() {
			closed = true;
		});

		return ws;
	};

	fs.truncate = function(key, len, cb) {
		ps.follow(key, function(err, stat, key) {
			if (err) return cb(err);

			var blob = stat && stat.blob || key;
			bl.size(blob, function(err, size) {
				if (err) return cb(err);

				ps.writable(key, function(err) {
					if (err) return cb(err);

					cb = once(listeners.cb(key, cb));
					if (!len) return bl.remove(blob, cb);

					var ws = bl.createWriteStream(blob, {
						start:size < len ? len-1 : len
					});

					ws.on('error', cb);
					ws.on('finish', cb);

					if (size < len) ws.write(new Buffer([0]));
					ws.end();
				});
			});
		});
	};

	fs.watchFile = function(key, opts, cb) {
		if (typeof opts === 'function') return fs.watchFile(key, null, opts);
		return listeners.watch(ps.normalize(key), cb);
	};

	fs.unwatchFile = function(key, cb) {
		listeners.unwatch(ps.normalize(key), cb);
	};

	fs.watch = function(key, opts, cb) {
		if (typeof opts === 'function') return fs.watch(key, null, opts)
		return listeners.watcher(ps.normalize(key), cb);
	};

	fs.notify = function(cb) {
		listeners.on('change', cb)
	}

	fs.open = function(key, flags, mode, cb) {
		if (typeof mode === 'function') return fs.open(key, flags, null, mode);

		ps.follow(key, function(err, stat, key) {
			if (err && err.code !== 'ENOENT') return cb(err);

			var fl = flags[0];
			var plus = flags[1] === '+' || flags[2] === '+';
			var blob = stat && stat.blob || key;

			var f = {
				key: key,
				blob: blob,
				mode: mode || octal(666),
				readable: fl === 'r' || ((fl === 'w' || fl === 'a') && plus),
				writable: fl === 'w' || fl === 'a' || (fl === 'r' && plus),
				append: fl === 'a'
			};

			if (fl === 'r' && err) return cb(err);
			if (flags[1] === 'x' && stat) return cb(errno.EEXIST(key));
			if (stat && stat.isDirectory()) return cb(errno.EISDIR(key));

			bl.size(blob, function(err, size) {
				if (err) return cb(err);

				if (f.append) f.writePos = size;

				ps.writable(key, function(err) {
					if (err) return cb(err);

					var onready = function(err) {
						if (err) return cb(err);

						var i = fds.indexOf(null);
						if (i === -1) i = 10+fds.push(fds.length+10)-1;

						f.fd = i;
						fds[i] = f;
						listeners.change(key);

						cb(null, f.fd);
					};

					var ontruncate = function(err) {
						if (err) return cb(err);
						if (stat) return onready();
						ps.put(blob, {ctime:stat && stat.ctime, type:'file'}, onready);
					};

					if (!f.append && f.writable) return bl.remove(blob, ontruncate);
					ontruncate();
				});
			});
		});
	};

	fs.close = function(fd, cb) {
		var f = fds[fd];
		if (!f) return nextTick(cb, errno.EBADF());

		fds[fd] = null;
		nextTick(listeners.cb(f.key, cb));
	};

	fs.write = function(fd, buf, off, len, pos, cb) {
		var f = fds[fd];
		if (!cb) cb = noop;
		if (!f || !f.writable) return nextTick(cb, errno.EBADF());

		if (pos === null) pos = f.writePos || 0;

		var slice = buf.slice(off, off+len);
		f.writePos = pos + slice.length;

		bl.write(f.blob, slice, {start:pos, append:true}, function(err) {
			if (err) return cb(err);
			cb(null, len, buf);
		});
	};

	fs.read = function(fd, buf, off, len, pos, cb) {
		var f = fds[fd];
		if (!cb) cb = noop;
		if (!f || !f.readable) return nextTick(cb, errno.EBADF());

		if (pos === null) pos = fs.readPos || 0;

		bl.read(f.blob, {start:pos, end:pos+len-1}, function(err, read) {
			if (err) return cb(err);
			var slice = read.slice(0, len);
			slice.copy(buf, off);
			fs.readPos = pos+slice.length;
			cb(null, slice.length, buf);
		});
	};

	fs.fsync = function(fd, cb) {
		var f = fds[fd];
		if (!cb) cb = noop;
		if (!f || !f.writable) return nextTick(cb, errno.EBADF());

		nextTick(cb);
	};

	fs.ftruncate = function(fd, len, cb) {
		var f = fds[fd];
		if (!cb) cb = noop;
		if (!f) return nextTick(cb, errno.EBADF());

		fs.truncate(f.blob, len, cb);
	};

	fs.fchown = function(fd, uid, gid, cb) {
		var f = fds[fd];
		if (!cb) cb = noop;
		if (!f) return nextTick(cb, errno.EBADF());

		fs.chown(f.key, uid, gid, cb);
	};

	fs.fchmod = function(fd, mode, cb) {
		var f = fds[fd];
		if (!cb) cb = noop;
		if (!f) return nextTick(cb, errno.EBADF());

		fs.chmod(f.key, mode, cb);
	};

	fs.futimes = function(fd, atime, mtime, cb) {
		var f = fds[fd];
		if (!cb) cb = noop;
		if (!f) return nextTick(cb, errno.EBADF());

		fs.utimes(f.key, atime, mtime, cb);
	};

	fs.fstat = function(fd, cb) {
		var f = fds[fd];
		if (!f) return nextTick(cb, errno.EBADF());

		fs.stat(f.key, cb);
	};

	fs.symlink = function(target, name, cb) {
		if (!cb) cb = noop;
		ps.follow(target, function(err, stat, target) {
			if (err) return cb(err);
			ps.get(name, function(err, stat) {
				if (err && err.code !== 'ENOENT') return cb(err);
				if (stat) return cb(errno.EEXIST(name));
				ps.put(name, {type:'symlink', target:target, mode:octal(777)}, cb);
			});
		});
	};

	fs.readlink = function(key, cb) {
		ps.get(key, function(err, stat) {
			if (err) return cb(err);
			if (!stat.target) return cb(errno.EINVAL(key));
			cb(null, stat.target);
		});
	};

	fs.link = function(target, name, cb) {
		if (!cb) cb = noop;
		ps.follow(target, function(err, stat, target) {
			if (err) return cb(err);
			if (!stat.isFile()) return cb(errno.EINVAL(target));
			ps.get(name, function(err, st) {
				if (err && err.code !== 'ENOENT') return cb(err);
				if (st) return cb(errno.EEXIST(name));
				var link = target+'\xff'+inc();
				links.put(target+'\xff', target, function(err) {
					if (err) return cb(err);
					links.put(link, target, function(err) {
						if (err) return cb(err);
						ps.put(name, {type:'file', link:link, blob:target, mode:stat.mode}, cb);
					});
				});
			});
		});
	};

	return fs;
};

}).call(this,require('_process'),require("buffer").Buffer)
},{"./errno":5,"./paths":45,"./watchers":47,"_process":106,"buffer":87,"fwd-stream":10,"level-blobs":19,"level-peek":27,"level-sublevel":30,"octal":42,"once":103}],7:[function(require,module,exports){
var prr = require('prr')

function init (type, message, cause) {
  prr(this, {
      type    : type
    , name    : type
      // can be passed just a 'cause'
    , cause   : typeof message != 'string' ? message : cause
    , message : !!message && typeof message != 'string' ? message.message : message

  }, 'ewr')
}

// generic prototype, not intended to be actually used - helpful for `instanceof`
function CustomError (message, cause) {
  Error.call(this)
  if (Error.captureStackTrace)
    Error.captureStackTrace(this, arguments.callee)
  init.call(this, 'CustomError', message, cause)
}

CustomError.prototype = new Error()

function createError (errno, type, proto) {
  var err = function (message, cause) {
    init.call(this, type, message, cause)
    //TODO: the specificity here is stupid, errno should be available everywhere
    if (type == 'FilesystemError') {
      this.code    = this.cause.code
      this.path    = this.cause.path
      this.errno   = this.cause.errno
      this.message =
        (errno.errno[this.cause.errno]
          ? errno.errno[this.cause.errno].description
          : this.cause.message)
        + (this.cause.path ? ' [' + this.cause.path + ']' : '')
    }
    Error.call(this)
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, arguments.callee)
  }
  err.prototype = !!proto ? new proto() : new CustomError()
  return err
}

module.exports = function (errno) {
  var ce = function (type, proto) {
    return createError(errno, type, proto)
  }
  return {
      CustomError     : CustomError
    , FilesystemError : ce('FilesystemError')
    , createError     : ce
  }
}

},{"prr":9}],8:[function(require,module,exports){
var all = module.exports.all = [
  {
    errno: -2,
    code: 'ENOENT',
    description: 'no such file or directory'
  },
  {
    errno: -1,
    code: 'UNKNOWN',
    description: 'unknown error'
  },
  {
    errno: 0,
    code: 'OK',
    description: 'success'
  },
  {
    errno: 1,
    code: 'EOF',
    description: 'end of file'
  },
  {
    errno: 2,
    code: 'EADDRINFO',
    description: 'getaddrinfo error'
  },
  {
    errno: 3,
    code: 'EACCES',
    description: 'permission denied'
  },
  {
    errno: 4,
    code: 'EAGAIN',
    description: 'resource temporarily unavailable'
  },
  {
    errno: 5,
    code: 'EADDRINUSE',
    description: 'address already in use'
  },
  {
    errno: 6,
    code: 'EADDRNOTAVAIL',
    description: 'address not available'
  },
  {
    errno: 7,
    code: 'EAFNOSUPPORT',
    description: 'address family not supported'
  },
  {
    errno: 8,
    code: 'EALREADY',
    description: 'connection already in progress'
  },
  {
    errno: 9,
    code: 'EBADF',
    description: 'bad file descriptor'
  },
  {
    errno: 10,
    code: 'EBUSY',
    description: 'resource busy or locked'
  },
  {
    errno: 11,
    code: 'ECONNABORTED',
    description: 'software caused connection abort'
  },
  {
    errno: 12,
    code: 'ECONNREFUSED',
    description: 'connection refused'
  },
  {
    errno: 13,
    code: 'ECONNRESET',
    description: 'connection reset by peer'
  },
  {
    errno: 14,
    code: 'EDESTADDRREQ',
    description: 'destination address required'
  },
  {
    errno: 15,
    code: 'EFAULT',
    description: 'bad address in system call argument'
  },
  {
    errno: 16,
    code: 'EHOSTUNREACH',
    description: 'host is unreachable'
  },
  {
    errno: 17,
    code: 'EINTR',
    description: 'interrupted system call'
  },
  {
    errno: 18,
    code: 'EINVAL',
    description: 'invalid argument'
  },
  {
    errno: 19,
    code: 'EISCONN',
    description: 'socket is already connected'
  },
  {
    errno: 20,
    code: 'EMFILE',
    description: 'too many open files'
  },
  {
    errno: 21,
    code: 'EMSGSIZE',
    description: 'message too long'
  },
  {
    errno: 22,
    code: 'ENETDOWN',
    description: 'network is down'
  },
  {
    errno: 23,
    code: 'ENETUNREACH',
    description: 'network is unreachable'
  },
  {
    errno: 24,
    code: 'ENFILE',
    description: 'file table overflow'
  },
  {
    errno: 25,
    code: 'ENOBUFS',
    description: 'no buffer space available'
  },
  {
    errno: 26,
    code: 'ENOMEM',
    description: 'not enough memory'
  },
  {
    errno: 27,
    code: 'ENOTDIR',
    description: 'not a directory'
  },
  {
    errno: 28,
    code: 'EISDIR',
    description: 'illegal operation on a directory'
  },
  {
    errno: 29,
    code: 'ENONET',
    description: 'machine is not on the network'
  },
  {
    errno: 31,
    code: 'ENOTCONN',
    description: 'socket is not connected'
  },
  {
    errno: 32,
    code: 'ENOTSOCK',
    description: 'socket operation on non-socket'
  },
  {
    errno: 33,
    code: 'ENOTSUP',
    description: 'operation not supported on socket'
  },
  {
    errno: 34,
    code: 'ENOENT',
    description: 'no such file or directory'
  },
  {
    errno: 35,
    code: 'ENOSYS',
    description: 'function not implemented'
  },
  {
    errno: 36,
    code: 'EPIPE',
    description: 'broken pipe'
  },
  {
    errno: 37,
    code: 'EPROTO',
    description: 'protocol error'
  },
  {
    errno: 38,
    code: 'EPROTONOSUPPORT',
    description: 'protocol not supported'
  },
  {
    errno: 39,
    code: 'EPROTOTYPE',
    description: 'protocol wrong type for socket'
  },
  {
    errno: 40,
    code: 'ETIMEDOUT',
    description: 'connection timed out'
  },
  {
    errno: 41,
    code: 'ECHARSET',
    description: 'invalid Unicode character'
  },
  {
    errno: 42,
    code: 'EAIFAMNOSUPPORT',
    description: 'address family for hostname not supported'
  },
  {
    errno: 44,
    code: 'EAISERVICE',
    description: 'servname not supported for ai_socktype'
  },
  {
    errno: 45,
    code: 'EAISOCKTYPE',
    description: 'ai_socktype not supported'
  },
  {
    errno: 46,
    code: 'ESHUTDOWN',
    description: 'cannot send after transport endpoint shutdown'
  },
  {
    errno: 47,
    code: 'EEXIST',
    description: 'file already exists'
  },
  {
    errno: 48,
    code: 'ESRCH',
    description: 'no such process'
  },
  {
    errno: 49,
    code: 'ENAMETOOLONG',
    description: 'name too long'
  },
  {
    errno: 50,
    code: 'EPERM',
    description: 'operation not permitted'
  },
  {
    errno: 51,
    code: 'ELOOP',
    description: 'too many symbolic links encountered'
  },
  {
    errno: 52,
    code: 'EXDEV',
    description: 'cross-device link not permitted'
  },
  {
    errno: 53,
    code: 'ENOTEMPTY',
    description: 'directory not empty'
  },
  {
    errno: 54,
    code: 'ENOSPC',
    description: 'no space left on device'
  },
  {
    errno: 55,
    code: 'EIO',
    description: 'i/o error'
  },
  {
    errno: 56,
    code: 'EROFS',
    description: 'read-only file system'
  },
  {
    errno: 57,
    code: 'ENODEV',
    description: 'no such device'
  },
  {
    errno: 58,
    code: 'ESPIPE',
    description: 'invalid seek'
  },
  {
    errno: 59,
    code: 'ECANCELED',
    description: 'operation canceled'
  }
]

module.exports.errno = {}
module.exports.code = {}

all.forEach(function (error) {
  module.exports.errno[error.errno] = error
  module.exports.code[error.code] = error
})

module.exports.custom = require('./custom')(module.exports)
module.exports.create = module.exports.custom.createError

},{"./custom":7}],9:[function(require,module,exports){
/*!
  * prr
  * (c) 2013 Rod Vagg <rod@vagg.org>
  * https://github.com/rvagg/prr
  * License: MIT
  */

(function (name, context, definition) {
  if (typeof module != 'undefined' && module.exports)
    module.exports = definition()
  else
    context[name] = definition()
})('prr', this, function() {

  var setProperty = typeof Object.defineProperty == 'function'
      ? function (obj, key, options) {
          Object.defineProperty(obj, key, options)
          return obj
        }
      : function (obj, key, options) { // < es5
          obj[key] = options.value
          return obj
        }

    , makeOptions = function (value, options) {
        var oo = typeof options == 'object'
          , os = !oo && typeof options == 'string'
          , op = function (p) {
              return oo
                ? !!options[p]
                : os
                  ? options.indexOf(p[0]) > -1
                  : false
            }

        return {
            enumerable   : op('enumerable')
          , configurable : op('configurable')
          , writable     : op('writable')
          , value        : value
        }
      }

    , prr = function (obj, key, value, options) {
        var k

        options = makeOptions(value, options)

        if (typeof key == 'object') {
          for (k in key) {
            if (Object.hasOwnProperty.call(key, k)) {
              options.value = key[k]
              setProperty(obj, k, options)
            }
          }
          return obj
        }

        return setProperty(obj, key, options)
      }

  return prr
})
},{}],10:[function(require,module,exports){
(function (process,Buffer){
var Writable = require('readable-stream/writable');
var Readable = require('readable-stream/readable');
var Duplex = require('readable-stream/duplex');

var DUMMY = new Buffer(0);
var noop = function() {};

var toFunction = function(fn) {
	if (typeof fn === 'function') return fn;
	return function(cb) {
		cb(null, fn);
	};
};

var onreadable = function(rs, init) {
	var reading = false;
	var destroyed = false;

	rs._read = function() {
		reading = true;
	};

	rs.destroy = function() {
		destroyed = true;
	};

	init(function(err, source) {
		if (err) return rs.emit('error', err);

		var fwd = function() {
			var data;
			while ((data = source.read()) !== null) {
				reading = false;
				rs.push(data);
			}
		};

		source.on('readable', function() {
			if (reading) fwd();
		});

		source.on('end', function() {
			fwd();
			rs.push(null);
		});

		source.on('error', function(err) {
			rs.emit('error', err);
		});

		source.on('close', function() {
			fwd();
			process.nextTick(function() {
				rs.emit('close');
			});
		});

		rs._read = function() {
			reading = true;
			fwd();
		};

		rs.destroy = function() {
			if (destroyed) return;
			destroyed = true;
			if (source.destroy) source.destroy();
		};

		if (destroyed) {
			destroyed = false;
			rs.destroy();
			return;
		}

		if (reading) fwd();
	});

	return rs;
};

var onwritable = function(ws, init) {
	var ready = noop;
	var destroyed = false;

	ws._write = function(data, enc, cb) {
		ready = cb;
	};

	ws.destroy = function() {
		destroyed = true;
	};

	ws.write(DUMMY);

	init(function(err, source) {
		if (err) return ws.emit('error', err);

		source.on('close', function() {
			ws.emit('close');
		});

		source.on('error', function(err) {
			ws.emit('error', err);
		});

		ws._write = function(data, enc, cb) {
			if (data === DUMMY) return cb();
			source.write(data, enc, cb);
		};

		var emit = ws.emit;

		source.on('finish', function() {
			emit.call(ws, 'finish');
		});

		ws.destroy = function() {
			if (destroyed) return;
			destroyed = true;
			if (source.destroy) source.destroy();
		};

		ws.emit = function(name) {
			if (name !== 'finish') return emit.apply(ws, arguments);
			source.end();
		};

		if (destroyed) {
			destroyed = false;
			ws.destroy();
			return;
		}

		ready();
	});

	return ws;
};

exports.readable = function(opts, init) {
	if (arguments.length === 1) return exports.readable(null, opts);
	if (!opts) opts = {};
	return onreadable(new Readable(opts), toFunction(init));
};

exports.writable = function(opts, init) {
	if (arguments.length === 1) return exports.writable(null, opts);
	if (!opts) opts = {};
	return onwritable(new Writable(opts), toFunction(init));
};

exports.duplex = function(opts, initWritable, initReadable) {
	if (arguments.length === 2) return exports.duplex(null, opts, initWritable);
	if (!opts) opts = {};
	var dupl = new Duplex(opts);
	onwritable(dupl, toFunction(initWritable));
	onreadable(dupl, toFunction(initReadable));
	return dupl;
};
}).call(this,require('_process'),require("buffer").Buffer)
},{"_process":106,"buffer":87,"readable-stream/duplex":11,"readable-stream/readable":17,"readable-stream/writable":18}],11:[function(require,module,exports){
module.exports = require("./lib/_stream_duplex.js")

},{"./lib/_stream_duplex.js":12}],12:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

module.exports = Duplex;

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}
/*</replacement>*/


/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var Readable = require('./_stream_readable');
var Writable = require('./_stream_writable');

util.inherits(Duplex, Readable);

forEach(objectKeys(Writable.prototype), function(method) {
  if (!Duplex.prototype[method])
    Duplex.prototype[method] = Writable.prototype[method];
});

function Duplex(options) {
  if (!(this instanceof Duplex))
    return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false)
    this.readable = false;

  if (options && options.writable === false)
    this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false)
    this.allowHalfOpen = false;

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended)
    return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  process.nextTick(this.end.bind(this));
}

function forEach (xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

}).call(this,require('_process'))
},{"./_stream_readable":14,"./_stream_writable":16,"_process":106,"core-util-is":90,"inherits":96}],13:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.

module.exports = PassThrough;

var Transform = require('./_stream_transform');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough))
    return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function(chunk, encoding, cb) {
  cb(null, chunk);
};

},{"./_stream_transform":15,"core-util-is":90,"inherits":96}],14:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Readable;

/*<replacement>*/
var isArray = require('isarray');
/*</replacement>*/


/*<replacement>*/
var Buffer = require('buffer').Buffer;
/*</replacement>*/

Readable.ReadableState = ReadableState;

var EE = require('events').EventEmitter;

/*<replacement>*/
if (!EE.listenerCount) EE.listenerCount = function(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

var Stream = require('stream');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var StringDecoder;

util.inherits(Readable, Stream);

function ReadableState(options, stream) {
  options = options || {};

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  this.highWaterMark = (hwm || hwm === 0) ? hwm : 16 * 1024;

  // cast to ints.
  this.highWaterMark = ~~this.highWaterMark;

  this.buffer = [];
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = false;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // In streams that never have any data, and do push(null) right away,
  // the consumer can miss the 'end' event if they do some I/O before
  // consuming the stream.  So, we don't emit('end') until some reading
  // happens.
  this.calledRead = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, becuase any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;


  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.
  this.ranOut = false;

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder)
      StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  if (!(this instanceof Readable))
    return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  Stream.call(this);
}

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function(chunk, encoding) {
  var state = this._readableState;

  if (typeof chunk === 'string' && !state.objectMode) {
    encoding = encoding || state.defaultEncoding;
    if (encoding !== state.encoding) {
      chunk = new Buffer(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function(chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit('error', er);
  } else if (chunk === null || chunk === undefined) {
    state.reading = false;
    if (!state.ended)
      onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var e = new Error('stream.unshift() after end event');
      stream.emit('error', e);
    } else {
      if (state.decoder && !addToFront && !encoding)
        chunk = state.decoder.write(chunk);

      // update the buffer info.
      state.length += state.objectMode ? 1 : chunk.length;
      if (addToFront) {
        state.buffer.unshift(chunk);
      } else {
        state.reading = false;
        state.buffer.push(chunk);
      }

      if (state.needReadable)
        emitReadable(stream);

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
}



// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended &&
         (state.needReadable ||
          state.length < state.highWaterMark ||
          state.length === 0);
}

// backwards compatibility.
Readable.prototype.setEncoding = function(enc) {
  if (!StringDecoder)
    StringDecoder = require('string_decoder/').StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
};

// Don't raise the hwm > 128MB
var MAX_HWM = 0x800000;
function roundUpToNextPowerOf2(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2
    n--;
    for (var p = 1; p < 32; p <<= 1) n |= n >> p;
    n++;
  }
  return n;
}

function howMuchToRead(n, state) {
  if (state.length === 0 && state.ended)
    return 0;

  if (state.objectMode)
    return n === 0 ? 0 : 1;

  if (n === null || isNaN(n)) {
    // only flow one buffer at a time
    if (state.flowing && state.buffer.length)
      return state.buffer[0].length;
    else
      return state.length;
  }

  if (n <= 0)
    return 0;

  // If we're asking for more than the target buffer level,
  // then raise the water mark.  Bump up to the next highest
  // power of 2, to prevent increasing it excessively in tiny
  // amounts.
  if (n > state.highWaterMark)
    state.highWaterMark = roundUpToNextPowerOf2(n);

  // don't have that much.  return null, unless we've ended.
  if (n > state.length) {
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    } else
      return state.length;
  }

  return n;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function(n) {
  var state = this._readableState;
  state.calledRead = true;
  var nOrig = n;
  var ret;

  if (typeof n !== 'number' || n > 0)
    state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 &&
      state.needReadable &&
      (state.length >= state.highWaterMark || state.ended)) {
    emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    ret = null;

    // In cases where the decoder did not receive enough data
    // to produce a full chunk, then immediately received an
    // EOF, state.buffer will contain [<Buffer >, <Buffer 00 ...>].
    // howMuchToRead will see this and coerce the amount to
    // read to zero (because it's looking at the length of the
    // first <Buffer > in state.buffer), and we'll end up here.
    //
    // This can only happen via state.decoder -- no other venue
    // exists for pushing a zero-length chunk into state.buffer
    // and triggering this behavior. In this case, we return our
    // remaining data and end the stream, if appropriate.
    if (state.length > 0 && state.decoder) {
      ret = fromList(n, state);
      state.length -= ret.length;
    }

    if (state.length === 0)
      endReadable(this);

    return ret;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;

  // if we currently have less than the highWaterMark, then also read some
  if (state.length - n <= state.highWaterMark)
    doRead = true;

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading)
    doRead = false;

  if (doRead) {
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0)
      state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
  }

  // If _read called its callback synchronously, then `reading`
  // will be false, and we need to re-evaluate how much data we
  // can return to the user.
  if (doRead && !state.reading)
    n = howMuchToRead(nOrig, state);

  if (n > 0)
    ret = fromList(n, state);
  else
    ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  }

  state.length -= n;

  // If we have nothing in the buffer, then we want to know
  // as soon as we *do* get something into the buffer.
  if (state.length === 0 && !state.ended)
    state.needReadable = true;

  // If we happened to read() exactly the remaining amount in the
  // buffer, and the EOF has been seen at this point, then make sure
  // that we emit 'end' on the very next tick.
  if (state.ended && !state.endEmitted && state.length === 0)
    endReadable(this);

  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;
  if (!Buffer.isBuffer(chunk) &&
      'string' !== typeof chunk &&
      chunk !== null &&
      chunk !== undefined &&
      !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}


function onEofChunk(stream, state) {
  if (state.decoder && !state.ended) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // if we've ended and we have some data left, then emit
  // 'readable' now to make sure it gets picked up.
  if (state.length > 0)
    emitReadable(stream);
  else
    endReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (state.emittedReadable)
    return;

  state.emittedReadable = true;
  if (state.sync)
    process.nextTick(function() {
      emitReadable_(stream);
    });
  else
    emitReadable_(stream);
}

function emitReadable_(stream) {
  stream.emit('readable');
}


// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(function() {
      maybeReadMore_(stream, state);
    });
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended &&
         state.length < state.highWaterMark) {
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;
    else
      len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function(n) {
  this.emit('error', new Error('not implemented'));
};

Readable.prototype.pipe = function(dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;

  var doEnd = (!pipeOpts || pipeOpts.end !== false) &&
              dest !== process.stdout &&
              dest !== process.stderr;

  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted)
    process.nextTick(endFn);
  else
    src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable) {
    if (readable !== src) return;
    cleanup();
  }

  function onend() {
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  function cleanup() {
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (!dest._writableState || dest._writableState.needDrain)
      ondrain();
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    unpipe();
    dest.removeListener('error', onerror);
    if (EE.listenerCount(dest, 'error') === 0)
      dest.emit('error', er);
  }
  // This is a brutally ugly hack to make sure that our error handler
  // is attached before any userland ones.  NEVER DO THIS.
  if (!dest._events || !dest._events.error)
    dest.on('error', onerror);
  else if (isArray(dest._events.error))
    dest._events.error.unshift(onerror);
  else
    dest._events.error = [onerror, dest._events.error];



  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    // the handler that waits for readable events after all
    // the data gets sucked out in flow.
    // This would be easier to follow with a .once() handler
    // in flow(), but that is too slow.
    this.on('readable', pipeOnReadable);

    state.flowing = true;
    process.nextTick(function() {
      flow(src);
    });
  }

  return dest;
};

function pipeOnDrain(src) {
  return function() {
    var dest = this;
    var state = src._readableState;
    state.awaitDrain--;
    if (state.awaitDrain === 0)
      flow(src);
  };
}

function flow(src) {
  var state = src._readableState;
  var chunk;
  state.awaitDrain = 0;

  function write(dest, i, list) {
    var written = dest.write(chunk);
    if (false === written) {
      state.awaitDrain++;
    }
  }

  while (state.pipesCount && null !== (chunk = src.read())) {

    if (state.pipesCount === 1)
      write(state.pipes, 0, null);
    else
      forEach(state.pipes, write);

    src.emit('data', chunk);

    // if anyone needs a drain, then we have to wait for that.
    if (state.awaitDrain > 0)
      return;
  }

  // if every destination was unpiped, either before entering this
  // function, or in the while loop, then stop flowing.
  //
  // NB: This is a pretty rare edge case.
  if (state.pipesCount === 0) {
    state.flowing = false;

    // if there were data event listeners added, then switch to old mode.
    if (EE.listenerCount(src, 'data') > 0)
      emitDataEvents(src);
    return;
  }

  // at this point, no one needed a drain, so we just ran out of data
  // on the next readable event, start it over again.
  state.ranOut = true;
}

function pipeOnReadable() {
  if (this._readableState.ranOut) {
    this._readableState.ranOut = false;
    flow(this);
  }
}


Readable.prototype.unpipe = function(dest) {
  var state = this._readableState;

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0)
    return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes)
      return this;

    if (!dest)
      dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    this.removeListener('readable', pipeOnReadable);
    state.flowing = false;
    if (dest)
      dest.emit('unpipe', this);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    this.removeListener('readable', pipeOnReadable);
    state.flowing = false;

    for (var i = 0; i < len; i++)
      dests[i].emit('unpipe', this);
    return this;
  }

  // try to find the right one.
  var i = indexOf(state.pipes, dest);
  if (i === -1)
    return this;

  state.pipes.splice(i, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1)
    state.pipes = state.pipes[0];

  dest.emit('unpipe', this);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function(ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data' && !this._readableState.flowing)
    emitDataEvents(this);

  if (ev === 'readable' && this.readable) {
    var state = this._readableState;
    if (!state.readableListening) {
      state.readableListening = true;
      state.emittedReadable = false;
      state.needReadable = true;
      if (!state.reading) {
        this.read(0);
      } else if (state.length) {
        emitReadable(this, state);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function() {
  emitDataEvents(this);
  this.read(0);
  this.emit('resume');
};

Readable.prototype.pause = function() {
  emitDataEvents(this, true);
  this.emit('pause');
};

function emitDataEvents(stream, startPaused) {
  var state = stream._readableState;

  if (state.flowing) {
    // https://github.com/isaacs/readable-stream/issues/16
    throw new Error('Cannot switch to old mode now.');
  }

  var paused = startPaused || false;
  var readable = false;

  // convert to an old-style stream.
  stream.readable = true;
  stream.pipe = Stream.prototype.pipe;
  stream.on = stream.addListener = Stream.prototype.on;

  stream.on('readable', function() {
    readable = true;

    var c;
    while (!paused && (null !== (c = stream.read())))
      stream.emit('data', c);

    if (c === null) {
      readable = false;
      stream._readableState.needReadable = true;
    }
  });

  stream.pause = function() {
    paused = true;
    this.emit('pause');
  };

  stream.resume = function() {
    paused = false;
    if (readable)
      process.nextTick(function() {
        stream.emit('readable');
      });
    else
      this.read(0);
    this.emit('resume');
  };

  // now make it start, just in case it hadn't already.
  stream.emit('readable');
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function(stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function() {
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length)
        self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function(chunk) {
    if (state.decoder)
      chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    //if (state.objectMode && util.isNullOrUndefined(chunk))
    if (state.objectMode && (chunk === null || chunk === undefined))
      return;
    else if (!state.objectMode && (!chunk || !chunk.length))
      return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (typeof stream[i] === 'function' &&
        typeof this[i] === 'undefined') {
      this[i] = function(method) { return function() {
        return stream[method].apply(stream, arguments);
      }}(i);
    }
  }

  // proxy certain important events.
  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
  forEach(events, function(ev) {
    stream.on(ev, self.emit.bind(self, ev));
  });

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function(n) {
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};



// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
function fromList(n, state) {
  var list = state.buffer;
  var length = state.length;
  var stringMode = !!state.decoder;
  var objectMode = !!state.objectMode;
  var ret;

  // nothing in the list, definitely empty.
  if (list.length === 0)
    return null;

  if (length === 0)
    ret = null;
  else if (objectMode)
    ret = list.shift();
  else if (!n || n >= length) {
    // read it all, truncate the array.
    if (stringMode)
      ret = list.join('');
    else
      ret = Buffer.concat(list, length);
    list.length = 0;
  } else {
    // read just some of it.
    if (n < list[0].length) {
      // just take a part of the first list item.
      // slice is the same for buffers and strings.
      var buf = list[0];
      ret = buf.slice(0, n);
      list[0] = buf.slice(n);
    } else if (n === list[0].length) {
      // first list is a perfect match
      ret = list.shift();
    } else {
      // complex case.
      // we have enough to cover it, but it spans past the first buffer.
      if (stringMode)
        ret = '';
      else
        ret = new Buffer(n);

      var c = 0;
      for (var i = 0, l = list.length; i < l && c < n; i++) {
        var buf = list[0];
        var cpy = Math.min(n - c, buf.length);

        if (stringMode)
          ret += buf.slice(0, cpy);
        else
          buf.copy(ret, c, 0, cpy);

        if (cpy < buf.length)
          list[0] = buf.slice(cpy);
        else
          list.shift();

        c += cpy;
      }
    }
  }

  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0)
    throw new Error('endReadable called on non-empty stream');

  if (!state.endEmitted && state.calledRead) {
    state.ended = true;
    process.nextTick(function() {
      // Check that we didn't get one last unshift.
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
      }
    });
  }
}

function forEach (xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf (xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}

}).call(this,require('_process'))
},{"_process":106,"buffer":87,"core-util-is":90,"events":94,"inherits":96,"isarray":100,"stream":118,"string_decoder/":129}],15:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

module.exports = Transform;

var Duplex = require('./_stream_duplex');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(Transform, Duplex);


function TransformState(options, stream) {
  this.afterTransform = function(er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb)
    return stream.emit('error', new Error('no writecb in Transform class'));

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined)
    stream.push(data);

  if (cb)
    cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}


function Transform(options) {
  if (!(this instanceof Transform))
    return new Transform(options);

  Duplex.call(this, options);

  var ts = this._transformState = new TransformState(options, this);

  // when the writable side finishes, then flush out anything remaining.
  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  this.once('finish', function() {
    if ('function' === typeof this._flush)
      this._flush(function(er) {
        done(stream, er);
      });
    else
      done(stream);
  });
}

Transform.prototype.push = function(chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function(chunk, encoding, cb) {
  throw new Error('not implemented');
};

Transform.prototype._write = function(chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform ||
        rs.needReadable ||
        rs.length < rs.highWaterMark)
      this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function(n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};


function done(stream, er) {
  if (er)
    return stream.emit('error', er);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var rs = stream._readableState;
  var ts = stream._transformState;

  if (ws.length)
    throw new Error('calling transform done when ws.length != 0');

  if (ts.transforming)
    throw new Error('calling transform done when still transforming');

  return stream.push(null);
}

},{"./_stream_duplex":12,"core-util-is":90,"inherits":96}],16:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// A bit simpler than readable streams.
// Implement an async ._write(chunk, cb), and it'll handle all
// the drain event emission and buffering.

module.exports = Writable;

/*<replacement>*/
var Buffer = require('buffer').Buffer;
/*</replacement>*/

Writable.WritableState = WritableState;


/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var Stream = require('stream');

util.inherits(Writable, Stream);

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
}

function WritableState(options, stream) {
  options = options || {};

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  this.highWaterMark = (hwm || hwm === 0) ? hwm : 16 * 1024;

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  // cast to ints.
  this.highWaterMark = ~~this.highWaterMark;

  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, becuase any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function(er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.buffer = [];

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;
}

function Writable(options) {
  var Duplex = require('./_stream_duplex');

  // Writable ctor is applied to Duplexes, though they're not
  // instanceof Writable, they're instanceof Readable.
  if (!(this instanceof Writable) && !(this instanceof Duplex))
    return new Writable(options);

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function() {
  this.emit('error', new Error('Cannot pipe. Not readable.'));
};


function writeAfterEnd(stream, state, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  process.nextTick(function() {
    cb(er);
  });
}

// If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  if (!Buffer.isBuffer(chunk) &&
      'string' !== typeof chunk &&
      chunk !== null &&
      chunk !== undefined &&
      !state.objectMode) {
    var er = new TypeError('Invalid non-string/buffer chunk');
    stream.emit('error', er);
    process.nextTick(function() {
      cb(er);
    });
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function(chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (Buffer.isBuffer(chunk))
    encoding = 'buffer';
  else if (!encoding)
    encoding = state.defaultEncoding;

  if (typeof cb !== 'function')
    cb = function() {};

  if (state.ended)
    writeAfterEnd(this, state, cb);
  else if (validChunk(this, state, chunk, cb))
    ret = writeOrBuffer(this, state, chunk, encoding, cb);

  return ret;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode &&
      state.decodeStrings !== false &&
      typeof chunk === 'string') {
    chunk = new Buffer(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);
  if (Buffer.isBuffer(chunk))
    encoding = 'buffer';
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret)
    state.needDrain = true;

  if (state.writing)
    state.buffer.push(new WriteReq(chunk, encoding, cb));
  else
    doWrite(stream, state, len, chunk, encoding, cb);

  return ret;
}

function doWrite(stream, state, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  if (sync)
    process.nextTick(function() {
      cb(er);
    });
  else
    cb(er);

  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er)
    onwriteError(stream, state, sync, er, cb);
  else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(stream, state);

    if (!finished && !state.bufferProcessing && state.buffer.length)
      clearBuffer(stream, state);

    if (sync) {
      process.nextTick(function() {
        afterWrite(stream, state, finished, cb);
      });
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished)
    onwriteDrain(stream, state);
  cb();
  if (finished)
    finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}


// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;

  for (var c = 0; c < state.buffer.length; c++) {
    var entry = state.buffer[c];
    var chunk = entry.chunk;
    var encoding = entry.encoding;
    var cb = entry.callback;
    var len = state.objectMode ? 1 : chunk.length;

    doWrite(stream, state, len, chunk, encoding, cb);

    // if we didn't call the onwrite immediately, then
    // it means that we need to wait until it does.
    // also, that means that the chunk and cb are currently
    // being processed, so move the buffer counter past them.
    if (state.writing) {
      c++;
      break;
    }
  }

  state.bufferProcessing = false;
  if (c < state.buffer.length)
    state.buffer = state.buffer.slice(c);
  else
    state.buffer.length = 0;
}

Writable.prototype._write = function(chunk, encoding, cb) {
  cb(new Error('not implemented'));
};

Writable.prototype.end = function(chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (typeof chunk !== 'undefined' && chunk !== null)
    this.write(chunk, encoding);

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished)
    endWritable(this, state, cb);
};


function needFinish(stream, state) {
  return (state.ending &&
          state.length === 0 &&
          !state.finished &&
          !state.writing);
}

function finishMaybe(stream, state) {
  var need = needFinish(stream, state);
  if (need) {
    state.finished = true;
    stream.emit('finish');
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished)
      process.nextTick(cb);
    else
      stream.once('finish', cb);
  }
  state.ended = true;
}

}).call(this,require('_process'))
},{"./_stream_duplex":12,"_process":106,"buffer":87,"core-util-is":90,"inherits":96,"stream":118}],17:[function(require,module,exports){
(function (process){
var Stream = require('stream'); // hack to fix a circular dependency issue when used with browserify
exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = Stream;
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');
if (!process.browser && process.env.READABLE_STREAM === 'disable') {
  module.exports = require('stream');
}

}).call(this,require('_process'))
},{"./lib/_stream_duplex.js":12,"./lib/_stream_passthrough.js":13,"./lib/_stream_readable.js":14,"./lib/_stream_transform.js":15,"./lib/_stream_writable.js":16,"_process":106,"stream":118}],18:[function(require,module,exports){
module.exports = require("./lib/_stream_writable.js")

},{"./lib/_stream_writable.js":16}],19:[function(require,module,exports){
(function (process,Buffer){
var Writable = require('readable-stream/writable');
var Readable = require('readable-stream/readable');
var peek = require('level-peek');
var util = require('util');
var once = require('once');

var EMPTY = new Buffer(0);
var ENCODER = {
	encode: function(data) {
		return typeof data === 'string' ? data = new Buffer(data) : data;
	},
	decode: function(data) {
		return Buffer.isBuffer(data) ? data : new Buffer(data);
	},
	buffer: true,
	type: 'raw'
};

var noop = function() {};

var pad = function(n) {
	n = n.toString(16);
	return '00000000'.slice(0, -n.length)+n;
};

var expand = function(buf, len) {
	var tmp = new Buffer(len);
	buf.copy(tmp);
	return tmp;
};

module.exports = function(db, opts) {
	if (!opts) opts = {};

	var blobs = {};

	var blockSize = opts.blockSize || 65536;
	var maxBatch = opts.batch || 100;
	var blank = new Buffer(blockSize);

	db.put('\x00', 'ignore', noop); // memdown#12 workaround

	var reservations = {};
	var mutateBlock = function(key, offset, block, append, cb) {
		var release = function() {
			if (!--reservations[key].locks) delete reservations[key];
		};

		var onreservation = function(r) {
			r.locks++;

			if (!r.block && !offset) {
				r.block = block;
				cb(null, r.block, release);
				return;
			}

			if (!r.block) r.block = new Buffer(blockSize);
			if (r.block.length < offset + block.length) r.block = expand(r.block, offset + block.length);

			block.copy(r.block, offset);

			if (!append && offset + block.length < r.block.length) r.block = r.block.slice(0, offset+block.length);
			cb(null, r.block, release);
		};

		if (reservations[key]) return onreservation(reservations[key]);

		db.get(key, {valueEncoding:ENCODER}, function(err, block) {
			if (err && !err.notFound) return cb(err);
			if (!reservations[key]) reservations[key] = {locks:0, block:block};
			onreservation(reservations[key]);
		});
	};

	var WriteStream = function(name, opts) {
		if (!(this instanceof WriteStream)) return new WriteStream(name, opts);
		if (!opts) opts = {};

		this.name = name;
		this.blocks = [];
		this.batch = [];
		this.bytesWritten = 0;
		this.truncate = !opts.append;
		this.append = opts.append;

		this._shouldInitAppend = this.append && opts.start === undefined;
		this._destroyed = false;
		this._init(opts.start || 0);

		Writable.call(this);
	};

	util.inherits(WriteStream, Writable);

	WriteStream.prototype._init = function(start) {
		this.blockIndex = (start / blockSize) | 0;
		this.blockOffset = start - this.blockIndex * blockSize;
		this.blockLength = this.blockOffset;
	};

	WriteStream.prototype._flush = function(cb) {
		if (!this.batch.length) return cb();

		var key = this.batch[this.batch.length-1].key;
		var batch = this.batch;
		this.batch = [];

		if (!this.truncate) return db.batch(batch, cb);
		this.truncate = false;
		this._truncate(batch, key, cb);
	};

	WriteStream.prototype._truncate = function(batch, key, cb) {
		cb = once(cb);

		var dels = [];
		var keys = db.createKeyStream({
			start: key,
			end: this.name+'\xff\xff'
		});

		keys.on('error', cb);

		keys.on('data', function(key) {
			dels.push({type:'del', key:key});
		});

		keys.on('end', function() {
			dels.push.apply(dels, batch);
			db.batch(dels, cb);
		});
	};

	WriteStream.prototype._writeBlock = function(cb) {
		var block = this.blocks.length === 1 ? this.blocks[0] : Buffer.concat(this.blocks, this.blockLength - this.blockOffset);
		var index = this.blockIndex;
		var offset = this.blockOffset;
		var self = this;

		this.blockOffset = 0;
		this.blockLength = 0;
		this.blockIndex++;
		this.blocks = [];

		var key = this.name+'\xff'+pad(index);

		var append = function(block, force, cb) {
			if (block.length) {
				self.batch.push({
					type: 'put',
					key: key,
					value: block,
					valueEncoding: ENCODER
				});
			}

			if (!force && self.batch.length < maxBatch) return cb();
			return self._flush(cb);
		};

		if (!offset && block.length === blockSize) return append(block, false, cb);
		if (!offset && !this.append) return append(block, false, cb);

		// partial write
		mutateBlock(key, offset, block, this.append, function(err, block, release) {
			if (err) return cb(err);
			append(block, true, function(err) {
				release();
				cb(err);
			});
		});
	};

	WriteStream.prototype._initAppend = function(data, enc, cb) {
		var self = this;
		this._shouldInitAppend = false;
		blobs.size(this.name, function(err, size) {
			if (err) return cb(err);
			self._init(size);
			self._write(data, enc, cb);
		});
	};

	WriteStream.prototype._write = function(data, enc, cb) {
		if (!data.length || this._destroyed) return cb();
		if (this._shouldInitAppend) return this._initAppend(data, enc, cb);

		var self = this;
		var overflow;
		var free = blockSize - this.blockLength;

		var done = function(err) {
			if (err) return cb(err);
			if (overflow) return self._write(overflow, enc, cb);
			cb();
		};

		if (data.length > free) {
			overflow = data.slice(free);
			data = data.slice(0, free);
		}

		this.bytesWritten += data.length;
		this.blockLength += data.length;
		this.blocks.push(data);

		if (data.length < free) return done();
		this._writeBlock(done);
	};

	WriteStream.prototype.destroy = function() {
		if (this._destroyed) return;
		this._destroyed = true;
		process.nextTick(this.emit.bind(this, 'close'));
	};

	WriteStream.prototype.end = function(data) {
		var self = this;
		var args = arguments;

		if (data && typeof data !== 'function') {
			this.write(data);
			data = EMPTY;
		}

		this.write(EMPTY, function() {
			self._writeBlock(function(err) {
				if (err) return self.emit('error', err);
				self._flush(function(err) {
					if (err) return self.emit('error', err);
					Writable.prototype.end.apply(self, args);
				});
			});
		});
	};

	var ReadStream = function(name, opts) {
		if (!opts) opts = {};

		var self = this;

		var start = opts.start || 0;
		var blockIndex = (start / blockSize) | 0;
		var blockOffset = start - blockIndex * blockSize;
		var key = name+'\xff'+pad(blockIndex);

		this.name = name;
		this._missing = (typeof opts.end === 'number' ? opts.end : Infinity) - start + 1;
		this._paused = false;
		this._destroyed = false;

		this._reader = db.createReadStream({
			start: key,
			end: name+'\xff\xff',
			valueEncoding: ENCODER
		});

		var onblock = function(val) {
			key = name+'\xff'+pad(++blockIndex);

			if (!self._missing) return false;

			if (blockOffset) {
				val = val.slice(blockOffset);
				blockOffset = 0;
				if (!val.length) return true;
			}

			if (val.length > self._missing) val = val.slice(0, self._missing);

			self._missing -= val.length;
			self._pause(!self.push(val));

			return !!self._missing;
		};

		this._reader.on('data', function(data) {
			while (data.key > key) {
				if (!onblock(blank)) return;
			}

			onblock(data.value);
		});

		this._reader.on('error', function(err) {
			self.emit('error', err);
		});

		this._reader.on('end', function() {
			self.push(null);
		});

		Readable.call(this);
	};

	util.inherits(ReadStream, Readable);

	ReadStream.prototype.destroy = function() {
		if (this._destroyed) return;
		this._destroyed = true;
		this._reader.destroy();
		process.nextTick(this.emit.bind(this, 'close'));
	};

	ReadStream.prototype._pause = function(paused) {
		if (this._paused === paused) return;
		this._paused = paused;
		if (this._paused) this._reader.pause();
		else this._reader.resume();
	};

	ReadStream.prototype._read = function() {
		this._pause(false);
	};

	blobs.remove = function(name, cb) {
		cb = once(cb || noop);

		var batch = [];
		var keys = db.createKeyStream({
			start: name+'\xff',
			end: name+'\xff\xff'
		});

		keys.on('error', cb);

		keys.on('data', function(key) {
			batch.push({type:'del', key:key});
		});

		keys.on('end', function() {
			db.batch(batch, cb);
		});
	};

	blobs.size = function(name, cb) {
		peek.last(db, {
			start: name+'\xff',
			end: name+'\xff\xff',
			valueEncoding:ENCODER
		}, function(err, latest, val) {
			if (err && err.message === 'range not found') return cb(null, 0);
			if (err) return cb(err);
			if (latest.slice(0, name.length+1) !== name+'\xff') return cb(null, 0);

			cb(null, parseInt(latest.toString().slice(name.length+1), 16) * blockSize + val.length);
		});
	};

	blobs.write = function(name, data, opts, cb) {
		if (typeof opts === 'function') return blobs.write(name, data, null, opts);
		if (!opts) opts = {};
		if (!cb) cb = noop;

		var ws = blobs.createWriteStream(name, opts);

		ws.on('error', cb);
		ws.on('finish', function() {
			cb();
		});

		ws.write(data);
		ws.end();
	}

	blobs.read = function(name, opts, cb) {
		if (typeof opts === 'function') return blobs.read(name, null, opts);
		if (!opts) opts = {};

		var rs = blobs.createReadStream(name, opts);
		var list = [];

		rs.on('error', cb);
		rs.on('data', function(data) {
			list.push(data);
		});
		rs.on('end', function() {
			cb(null, list.length === 1 ? list[0] : Buffer.concat(list));
		});
	};

	blobs.createReadStream = function(name, opts) {
		return new ReadStream(name, opts);
	};

	blobs.createWriteStream = function(name, opts) {
		return new WriteStream(name, opts);
	};

	return blobs;
};
}).call(this,require('_process'),require("buffer").Buffer)
},{"_process":106,"buffer":87,"level-peek":27,"once":103,"readable-stream/readable":25,"readable-stream/writable":26,"util":133}],20:[function(require,module,exports){
arguments[4][12][0].apply(exports,arguments)
},{"./_stream_readable":22,"./_stream_writable":24,"_process":106,"core-util-is":90,"dup":12,"inherits":96}],21:[function(require,module,exports){
arguments[4][13][0].apply(exports,arguments)
},{"./_stream_transform":23,"core-util-is":90,"dup":13,"inherits":96}],22:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Readable;

/*<replacement>*/
var isArray = require('isarray');
/*</replacement>*/


/*<replacement>*/
var Buffer = require('buffer').Buffer;
/*</replacement>*/

Readable.ReadableState = ReadableState;

var EE = require('events').EventEmitter;

/*<replacement>*/
if (!EE.listenerCount) EE.listenerCount = function(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

var Stream = require('stream');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var StringDecoder;


/*<replacement>*/
var debug = require('util');
if (debug && debug.debuglog) {
  debug = debug.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/


util.inherits(Readable, Stream);

function ReadableState(options, stream) {
  var Duplex = require('./_stream_duplex');

  options = options || {};

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~~this.highWaterMark;

  this.buffer = [];
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;


  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex)
    this.objectMode = this.objectMode || !!options.readableObjectMode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.
  this.ranOut = false;

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder)
      StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  var Duplex = require('./_stream_duplex');

  if (!(this instanceof Readable))
    return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  Stream.call(this);
}

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function(chunk, encoding) {
  var state = this._readableState;

  if (util.isString(chunk) && !state.objectMode) {
    encoding = encoding || state.defaultEncoding;
    if (encoding !== state.encoding) {
      chunk = new Buffer(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function(chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit('error', er);
  } else if (util.isNullOrUndefined(chunk)) {
    state.reading = false;
    if (!state.ended)
      onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var e = new Error('stream.unshift() after end event');
      stream.emit('error', e);
    } else {
      if (state.decoder && !addToFront && !encoding)
        chunk = state.decoder.write(chunk);

      if (!addToFront)
        state.reading = false;

      // if we want the data now, just emit it.
      if (state.flowing && state.length === 0 && !state.sync) {
        stream.emit('data', chunk);
        stream.read(0);
      } else {
        // update the buffer info.
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront)
          state.buffer.unshift(chunk);
        else
          state.buffer.push(chunk);

        if (state.needReadable)
          emitReadable(stream);
      }

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
}



// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended &&
         (state.needReadable ||
          state.length < state.highWaterMark ||
          state.length === 0);
}

// backwards compatibility.
Readable.prototype.setEncoding = function(enc) {
  if (!StringDecoder)
    StringDecoder = require('string_decoder/').StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 128MB
var MAX_HWM = 0x800000;
function roundUpToNextPowerOf2(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2
    n--;
    for (var p = 1; p < 32; p <<= 1) n |= n >> p;
    n++;
  }
  return n;
}

function howMuchToRead(n, state) {
  if (state.length === 0 && state.ended)
    return 0;

  if (state.objectMode)
    return n === 0 ? 0 : 1;

  if (isNaN(n) || util.isNull(n)) {
    // only flow one buffer at a time
    if (state.flowing && state.buffer.length)
      return state.buffer[0].length;
    else
      return state.length;
  }

  if (n <= 0)
    return 0;

  // If we're asking for more than the target buffer level,
  // then raise the water mark.  Bump up to the next highest
  // power of 2, to prevent increasing it excessively in tiny
  // amounts.
  if (n > state.highWaterMark)
    state.highWaterMark = roundUpToNextPowerOf2(n);

  // don't have that much.  return null, unless we've ended.
  if (n > state.length) {
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    } else
      return state.length;
  }

  return n;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function(n) {
  debug('read', n);
  var state = this._readableState;
  var nOrig = n;

  if (!util.isNumber(n) || n > 0)
    state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 &&
      state.needReadable &&
      (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended)
      endReadable(this);
    else
      emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0)
      endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  }

  if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0)
      state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
  }

  // If _read pushed data synchronously, then `reading` will be false,
  // and we need to re-evaluate how much data we can return to the user.
  if (doRead && !state.reading)
    n = howMuchToRead(nOrig, state);

  var ret;
  if (n > 0)
    ret = fromList(n, state);
  else
    ret = null;

  if (util.isNull(ret)) {
    state.needReadable = true;
    n = 0;
  }

  state.length -= n;

  // If we have nothing in the buffer, then we want to know
  // as soon as we *do* get something into the buffer.
  if (state.length === 0 && !state.ended)
    state.needReadable = true;

  // If we tried to read() past the EOF, then emit end on the next tick.
  if (nOrig !== n && state.ended && state.length === 0)
    endReadable(this);

  if (!util.isNull(ret))
    this.emit('data', ret);

  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;
  if (!util.isBuffer(chunk) &&
      !util.isString(chunk) &&
      !util.isNullOrUndefined(chunk) &&
      !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}


function onEofChunk(stream, state) {
  if (state.decoder && !state.ended) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync)
      process.nextTick(function() {
        emitReadable_(stream);
      });
    else
      emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}


// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(function() {
      maybeReadMore_(stream, state);
    });
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended &&
         state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;
    else
      len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function(n) {
  this.emit('error', new Error('not implemented'));
};

Readable.prototype.pipe = function(dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) &&
              dest !== process.stdout &&
              dest !== process.stderr;

  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted)
    process.nextTick(endFn);
  else
    src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable) {
    debug('onunpipe');
    if (readable === src) {
      cleanup();
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);
    src.removeListener('data', ondata);

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain &&
        (!dest._writableState || dest._writableState.needDrain))
      ondrain();
  }

  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    var ret = dest.write(chunk);
    if (false === ret) {
      debug('false write response, pause',
            src._readableState.awaitDrain);
      src._readableState.awaitDrain++;
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EE.listenerCount(dest, 'error') === 0)
      dest.emit('error', er);
  }
  // This is a brutally ugly hack to make sure that our error handler
  // is attached before any userland ones.  NEVER DO THIS.
  if (!dest._events || !dest._events.error)
    dest.on('error', onerror);
  else if (isArray(dest._events.error))
    dest._events.error.unshift(onerror);
  else
    dest._events.error = [onerror, dest._events.error];



  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function() {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain)
      state.awaitDrain--;
    if (state.awaitDrain === 0 && EE.listenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}


Readable.prototype.unpipe = function(dest) {
  var state = this._readableState;

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0)
    return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes)
      return this;

    if (!dest)
      dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest)
      dest.emit('unpipe', this);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++)
      dests[i].emit('unpipe', this);
    return this;
  }

  // try to find the right one.
  var i = indexOf(state.pipes, dest);
  if (i === -1)
    return this;

  state.pipes.splice(i, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1)
    state.pipes = state.pipes[0];

  dest.emit('unpipe', this);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function(ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  // If listening to data, and it has not explicitly been paused,
  // then call resume to start the flow of data on the next tick.
  if (ev === 'data' && false !== this._readableState.flowing) {
    this.resume();
  }

  if (ev === 'readable' && this.readable) {
    var state = this._readableState;
    if (!state.readableListening) {
      state.readableListening = true;
      state.emittedReadable = false;
      state.needReadable = true;
      if (!state.reading) {
        var self = this;
        process.nextTick(function() {
          debug('readable nexttick read 0');
          self.read(0);
        });
      } else if (state.length) {
        emitReadable(this, state);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function() {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    if (!state.reading) {
      debug('resume read 0');
      this.read(0);
    }
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    process.nextTick(function() {
      resume_(stream, state);
    });
  }
}

function resume_(stream, state) {
  state.resumeScheduled = false;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading)
    stream.read(0);
}

Readable.prototype.pause = function() {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  if (state.flowing) {
    do {
      var chunk = stream.read();
    } while (null !== chunk && state.flowing);
  }
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function(stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function() {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length)
        self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function(chunk) {
    debug('wrapped data');
    if (state.decoder)
      chunk = state.decoder.write(chunk);
    if (!chunk || !state.objectMode && !chunk.length)
      return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (util.isFunction(stream[i]) && util.isUndefined(this[i])) {
      this[i] = function(method) { return function() {
        return stream[method].apply(stream, arguments);
      }}(i);
    }
  }

  // proxy certain important events.
  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
  forEach(events, function(ev) {
    stream.on(ev, self.emit.bind(self, ev));
  });

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function(n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};



// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
function fromList(n, state) {
  var list = state.buffer;
  var length = state.length;
  var stringMode = !!state.decoder;
  var objectMode = !!state.objectMode;
  var ret;

  // nothing in the list, definitely empty.
  if (list.length === 0)
    return null;

  if (length === 0)
    ret = null;
  else if (objectMode)
    ret = list.shift();
  else if (!n || n >= length) {
    // read it all, truncate the array.
    if (stringMode)
      ret = list.join('');
    else
      ret = Buffer.concat(list, length);
    list.length = 0;
  } else {
    // read just some of it.
    if (n < list[0].length) {
      // just take a part of the first list item.
      // slice is the same for buffers and strings.
      var buf = list[0];
      ret = buf.slice(0, n);
      list[0] = buf.slice(n);
    } else if (n === list[0].length) {
      // first list is a perfect match
      ret = list.shift();
    } else {
      // complex case.
      // we have enough to cover it, but it spans past the first buffer.
      if (stringMode)
        ret = '';
      else
        ret = new Buffer(n);

      var c = 0;
      for (var i = 0, l = list.length; i < l && c < n; i++) {
        var buf = list[0];
        var cpy = Math.min(n - c, buf.length);

        if (stringMode)
          ret += buf.slice(0, cpy);
        else
          buf.copy(ret, c, 0, cpy);

        if (cpy < buf.length)
          list[0] = buf.slice(cpy);
        else
          list.shift();

        c += cpy;
      }
    }
  }

  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0)
    throw new Error('endReadable called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    process.nextTick(function() {
      // Check that we didn't get one last unshift.
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
      }
    });
  }
}

function forEach (xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf (xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}

}).call(this,require('_process'))
},{"./_stream_duplex":20,"_process":106,"buffer":87,"core-util-is":90,"events":94,"inherits":96,"isarray":100,"stream":118,"string_decoder/":129,"util":3}],23:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

module.exports = Transform;

var Duplex = require('./_stream_duplex');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(Transform, Duplex);


function TransformState(options, stream) {
  this.afterTransform = function(er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb)
    return stream.emit('error', new Error('no writecb in Transform class'));

  ts.writechunk = null;
  ts.writecb = null;

  if (!util.isNullOrUndefined(data))
    stream.push(data);

  if (cb)
    cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}


function Transform(options) {
  if (!(this instanceof Transform))
    return new Transform(options);

  Duplex.call(this, options);

  this._transformState = new TransformState(options, this);

  // when the writable side finishes, then flush out anything remaining.
  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  this.once('prefinish', function() {
    if (util.isFunction(this._flush))
      this._flush(function(er) {
        done(stream, er);
      });
    else
      done(stream);
  });
}

Transform.prototype.push = function(chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function(chunk, encoding, cb) {
  throw new Error('not implemented');
};

Transform.prototype._write = function(chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform ||
        rs.needReadable ||
        rs.length < rs.highWaterMark)
      this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function(n) {
  var ts = this._transformState;

  if (!util.isNull(ts.writechunk) && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};


function done(stream, er) {
  if (er)
    return stream.emit('error', er);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var ts = stream._transformState;

  if (ws.length)
    throw new Error('calling transform done when ws.length != 0');

  if (ts.transforming)
    throw new Error('calling transform done when still transforming');

  return stream.push(null);
}

},{"./_stream_duplex":20,"core-util-is":90,"inherits":96}],24:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// A bit simpler than readable streams.
// Implement an async ._write(chunk, cb), and it'll handle all
// the drain event emission and buffering.

module.exports = Writable;

/*<replacement>*/
var Buffer = require('buffer').Buffer;
/*</replacement>*/

Writable.WritableState = WritableState;


/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var Stream = require('stream');

util.inherits(Writable, Stream);

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
}

function WritableState(options, stream) {
  var Duplex = require('./_stream_duplex');

  options = options || {};

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex)
    this.objectMode = this.objectMode || !!options.writableObjectMode;

  // cast to ints.
  this.highWaterMark = ~~this.highWaterMark;

  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function(er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.buffer = [];

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;
}

function Writable(options) {
  var Duplex = require('./_stream_duplex');

  // Writable ctor is applied to Duplexes, though they're not
  // instanceof Writable, they're instanceof Readable.
  if (!(this instanceof Writable) && !(this instanceof Duplex))
    return new Writable(options);

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function() {
  this.emit('error', new Error('Cannot pipe. Not readable.'));
};


function writeAfterEnd(stream, state, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  process.nextTick(function() {
    cb(er);
  });
}

// If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  if (!util.isBuffer(chunk) &&
      !util.isString(chunk) &&
      !util.isNullOrUndefined(chunk) &&
      !state.objectMode) {
    var er = new TypeError('Invalid non-string/buffer chunk');
    stream.emit('error', er);
    process.nextTick(function() {
      cb(er);
    });
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function(chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  if (util.isFunction(encoding)) {
    cb = encoding;
    encoding = null;
  }

  if (util.isBuffer(chunk))
    encoding = 'buffer';
  else if (!encoding)
    encoding = state.defaultEncoding;

  if (!util.isFunction(cb))
    cb = function() {};

  if (state.ended)
    writeAfterEnd(this, state, cb);
  else if (validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function() {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function() {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing &&
        !state.corked &&
        !state.finished &&
        !state.bufferProcessing &&
        state.buffer.length)
      clearBuffer(this, state);
  }
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode &&
      state.decodeStrings !== false &&
      util.isString(chunk)) {
    chunk = new Buffer(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);
  if (util.isBuffer(chunk))
    encoding = 'buffer';
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret)
    state.needDrain = true;

  if (state.writing || state.corked)
    state.buffer.push(new WriteReq(chunk, encoding, cb));
  else
    doWrite(stream, state, false, len, chunk, encoding, cb);

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev)
    stream._writev(chunk, state.onwrite);
  else
    stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  if (sync)
    process.nextTick(function() {
      state.pendingcb--;
      cb(er);
    });
  else {
    state.pendingcb--;
    cb(er);
  }

  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er)
    onwriteError(stream, state, sync, er, cb);
  else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(stream, state);

    if (!finished &&
        !state.corked &&
        !state.bufferProcessing &&
        state.buffer.length) {
      clearBuffer(stream, state);
    }

    if (sync) {
      process.nextTick(function() {
        afterWrite(stream, state, finished, cb);
      });
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished)
    onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}


// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;

  if (stream._writev && state.buffer.length > 1) {
    // Fast case, write everything using _writev()
    var cbs = [];
    for (var c = 0; c < state.buffer.length; c++)
      cbs.push(state.buffer[c].callback);

    // count the one we are adding, as well.
    // TODO(isaacs) clean this up
    state.pendingcb++;
    doWrite(stream, state, true, state.length, state.buffer, '', function(err) {
      for (var i = 0; i < cbs.length; i++) {
        state.pendingcb--;
        cbs[i](err);
      }
    });

    // Clear buffer
    state.buffer = [];
  } else {
    // Slow case, write chunks one-by-one
    for (var c = 0; c < state.buffer.length; c++) {
      var entry = state.buffer[c];
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);

      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        c++;
        break;
      }
    }

    if (c < state.buffer.length)
      state.buffer = state.buffer.slice(c);
    else
      state.buffer.length = 0;
  }

  state.bufferProcessing = false;
}

Writable.prototype._write = function(chunk, encoding, cb) {
  cb(new Error('not implemented'));

};

Writable.prototype._writev = null;

Writable.prototype.end = function(chunk, encoding, cb) {
  var state = this._writableState;

  if (util.isFunction(chunk)) {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (util.isFunction(encoding)) {
    cb = encoding;
    encoding = null;
  }

  if (!util.isNullOrUndefined(chunk))
    this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished)
    endWritable(this, state, cb);
};


function needFinish(stream, state) {
  return (state.ending &&
          state.length === 0 &&
          !state.finished &&
          !state.writing);
}

function prefinish(stream, state) {
  if (!state.prefinished) {
    state.prefinished = true;
    stream.emit('prefinish');
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(stream, state);
  if (need) {
    if (state.pendingcb === 0) {
      prefinish(stream, state);
      state.finished = true;
      stream.emit('finish');
    } else
      prefinish(stream, state);
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished)
      process.nextTick(cb);
    else
      stream.once('finish', cb);
  }
  state.ended = true;
}

}).call(this,require('_process'))
},{"./_stream_duplex":20,"_process":106,"buffer":87,"core-util-is":90,"inherits":96,"stream":118}],25:[function(require,module,exports){
(function (process){
exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = require('stream');
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');
if (!process.browser && process.env.READABLE_STREAM === 'disable') {
  module.exports = require('stream');
}

}).call(this,require('_process'))
},{"./lib/_stream_duplex.js":20,"./lib/_stream_passthrough.js":21,"./lib/_stream_readable.js":22,"./lib/_stream_transform.js":23,"./lib/_stream_writable.js":24,"_process":106,"stream":118}],26:[function(require,module,exports){
arguments[4][18][0].apply(exports,arguments)
},{"./lib/_stream_writable.js":24,"dup":18}],27:[function(require,module,exports){
var fixRange = require('level-fix-range')
//get the first/last record in a range

exports = module.exports = peek
exports.first    = first
exports.last     = last

function once(emitter, events, listener) {
  var remove = []
  events.forEach(function (e) {
    function onEvent (arg) {
      if(listener(e, arg) === false) return
      remove.forEach(function (r) {
        r()
      })
    }
    emitter.on(e, onEvent)
    remove.push(function () {
      emitter.removeListener(e, onEvent)
    })
  })
  return emitter
}


function peek (db, opts, cb) {
  opts.limit = opts.reverse ? 2 : 1
  var stream = once(db.createReadStream(opts), 
    ['data', 'error', 'end'],
    function (event, data) {
      if(opts.reverse && data && opts.start 
        && (data.key.toString() > opts.start))
        return false
      if(event == 'error') cb(data)
      else if(event == 'end') cb(new Error('range not found'), null, null)
      else cb(null, data.key, data.value)
    })
}

function first (db, opts, cb) {
  if (!cb) {
    cb = opts;
    opts = {};
  }
  opts.reverse = false
  return peek(db, fixRange(opts), cb)  
}

//SO, this is pretty horrible,
//but it's works around an issue here
//https://github.com/rvagg/node-levelup/issues/110

function last (db, opts, cb) {
  if (!cb) {
    cb = opts;
    opts = {};
  }
  var start = opts.start
  opts.reverse = true
  return peek(db, fixRange(opts), function (err, key, value) {
    if(err) {
      var _start = opts.start
      opts.start = null
      peek (db, opts, function (_, key, value) {
        if(!key) return cb(err, null, null)
        var _key = key.toString()
        if(_key <= _start && (!opts.end || _key >= opts.end))
          cb(_, key, value)
        else cb(err, null, null)
      })
    }
    else cb(err, key, value)
  })
}


},{"level-fix-range":28}],28:[function(require,module,exports){

module.exports = 
function fixRange(opts) {
  var reverse = opts.reverse
  var end     = opts.end
  var start   = opts.start

  var range = [start, end]
  if(start != null && end != null)
    range.sort()
  if(reverse)
    range = range.reverse()

  opts.start   = range[0]
  opts.end     = range[1]
  return opts
}


},{}],29:[function(require,module,exports){
function addOperation (type, key, value, options) {
  var operation = {
    type: type,
    key: key,
    value: value,
    options: options
  }

  if (options && options.prefix) {
    operation.prefix = options.prefix
    delete options.prefix
  }

  this._operations.push(operation)

  return this
}

function Batch(sdb) {
  this._operations = []
  this._sdb = sdb

  this.put = addOperation.bind(this, 'put')
  this.del = addOperation.bind(this, 'del')
}

var B = Batch.prototype


B.clear = function () {
  this._operations = []
}

B.write = function (cb) {
  this._sdb.batch(this._operations, cb)
}

module.exports = Batch

},{}],30:[function(require,module,exports){
(function (process){
var EventEmitter = require('events').EventEmitter
var next         = process.nextTick
var SubDb        = require('./sub')
var Batch        = require('./batch')
var fixRange     = require('level-fix-range')

var Hooks   = require('level-hooks')

module.exports   = function (_db, options) {
  function DB () {}
  DB.prototype = _db
  var db = new DB()

  if (db.sublevel) return db

  options = options || {}

  //use \xff (255) as the seperator,
  //so that sections of the database will sort after the regular keys
  var sep = options.sep = options.sep || '\xff'
  db._options = options

  Hooks(db)

  db.sublevels = {}

  db.sublevel = function (prefix, options) {
    if(db.sublevels[prefix])
      return db.sublevels[prefix]
    return new SubDb(db, prefix, options || this._options)
  }

  db.methods = {}

  db.prefix = function (key) {
    return '' + (key || '')
  }

  db.pre = function (range, hook) {
    if(!hook)
      hook = range, range = {
        max  : sep
      }
    return db.hooks.pre(range, hook)
  }

  db.post = function (range, hook) {
    if(!hook)
      hook = range, range = {
        max : sep
      }
    return db.hooks.post(range, hook)
  }

  function safeRange(fun) {
    return function (opts) {
      opts = opts || {}
      opts = fixRange(opts)

      if(opts.reverse) opts.start = opts.start || sep
      else             opts.end   = opts.end || sep

      return fun.call(db, opts)
    }
  }

  db.readStream =
  db.createReadStream  = safeRange(db.createReadStream)
  db.keyStream =
  db.createKeyStream   = safeRange(db.createKeyStream)
  db.valuesStream =
  db.createValueStream = safeRange(db.createValueStream)

  var batch = db.batch
  db.batch = function (changes, opts, cb) {
    if(!Array.isArray(changes))
      return new Batch(db)
    changes.forEach(function (e) {
      if(e.prefix) {
        if('function' === typeof e.prefix.prefix)
          e.key = e.prefix.prefix(e.key)
        else if('string'  === typeof e.prefix)
          e.key = e.prefix + e.key
      }
    })
    batch.call(db, changes, opts, cb)
  }
  return db
}


}).call(this,require('_process'))
},{"./batch":29,"./sub":41,"_process":106,"events":94,"level-fix-range":31,"level-hooks":33}],31:[function(require,module,exports){
var clone = require('clone')

module.exports = 
function fixRange(opts) {
  opts = clone(opts)

  var reverse = opts.reverse
  var end     = opts.max || opts.end
  var start   = opts.min || opts.start

  var range = [start, end]
  if(start != null && end != null)
    range.sort()
  if(reverse)
    range = range.reverse()

  opts.start   = range[0]
  opts.end     = range[1]

  delete opts.min
  delete opts.max

  return opts
}

},{"clone":32}],32:[function(require,module,exports){
(function (Buffer){
'use strict';

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

// shim for Node's 'util' package
// DO NOT REMOVE THIS! It is required for compatibility with EnderJS (http://enderjs.com/).
var util = {
  isArray: function (ar) {
    return Array.isArray(ar) || (typeof ar === 'object' && objectToString(ar) === '[object Array]');
  },
  isDate: function (d) {
    return typeof d === 'object' && objectToString(d) === '[object Date]';
  },
  isRegExp: function (re) {
    return typeof re === 'object' && objectToString(re) === '[object RegExp]';
  },
  getRegExpFlags: function (re) {
    var flags = '';
    re.global && (flags += 'g');
    re.ignoreCase && (flags += 'i');
    re.multiline && (flags += 'm');
    return flags;
  }
};


if (typeof module === 'object')
  module.exports = clone;

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
*/

function clone(parent, circular, depth, prototype) {
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth == 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (util.isArray(parent)) {
      child = [];
    } else if (util.isRegExp(parent)) {
      child = new RegExp(parent.source, util.getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (util.isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      child = new Buffer(parent.length);
      parent.copy(child);
      return child;
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }
      
      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

}).call(this,require("buffer").Buffer)
},{"buffer":87}],33:[function(require,module,exports){
var ranges = require('string-range')

module.exports = function (db) {

  if(db.hooks) {
    return     
  }

  var posthooks = []
  var prehooks  = []

  function getPrefix (p) {
    return p && (
        'string' ===   typeof p        ? p
      : 'string' ===   typeof p.prefix ? p.prefix
      : 'function' === typeof p.prefix ? p.prefix()
      :                                  ''
      )
  }

  function getKeyEncoding (db) {
    if(db && db._getKeyEncoding)
      return db._getKeyEncoding(db)
  }

  function getValueEncoding (db) {
    if(db && db._getValueEncoding)
      return db._getValueEncoding(db)
  }

  function remover (array, item) {
    return function () {
      var i = array.indexOf(item)
      if(!~i) return false        
      array.splice(i, 1)
      return true
    }
  }

  db.hooks = {
    post: function (prefix, hook) {
      if(!hook) hook = prefix, prefix = ''
      var h = {test: ranges.checker(prefix), hook: hook}
      posthooks.push(h)
      return remover(posthooks, h)
    },
    pre: function (prefix, hook) {
      if(!hook) hook = prefix, prefix = ''
      var h = {
        test: ranges.checker(prefix),
        hook: hook,
        safe: false !== prefix.safe
      }
      prehooks.push(h)
      return remover(prehooks, h)
    },
    posthooks: posthooks,
    prehooks: prehooks
  }

  //POST HOOKS

  function each (e) {
    if(e && e.type) {
      posthooks.forEach(function (h) {
        if(h.test(e.key)) h.hook(e)
      })
    }
  }

  db.on('put', function (key, val) {
    each({type: 'put', key: key, value: val})
  })
  db.on('del', function (key, val) {
    each({type: 'del', key: key, value: val})
  })
  db.on('batch', function onBatch (ary) {
    ary.forEach(each)
  })

  //PRE HOOKS

  var put = db.put
  var del = db.del
  var batch = db.batch

  function callHooks (isBatch, b, opts, cb) {
    try {
    b.forEach(function hook(e, i) {
      prehooks.forEach(function (h) {
        if(h.test(String(e.key))) {
          //optimize this?
          //maybe faster to not create a new object each time?
          //have one object and expose scope to it?
          var context = {
            add: function (ch, db) {
              if(typeof ch === 'undefined') {
                return this
              }
              if(ch === false)
                return delete b[i]
              var prefix = (
                getPrefix(ch.prefix) || 
                getPrefix(db) || 
                h.prefix || ''
              )  
              //don't leave a circular json object there incase using multilevel.
              if(prefix) ch.prefix = prefix
              ch.key = prefix + ch.key
              if(h.safe && h.test(String(ch.key))) {
                //this usually means a stack overflow.
                throw new Error('prehook cannot insert into own range')
              }
              var ke = ch.keyEncoding   || getKeyEncoding(ch.prefix)
              var ve = ch.valueEncoding || getValueEncoding(ch.prefix)
              if(ke) ch.keyEncoding = ke
              if(ve) ch.valueEncoding = ve

              b.push(ch)
              hook(ch, b.length - 1)
              return this
            },
            put: function (ch, db) {
              if('object' === typeof ch) ch.type = 'put'
              return this.add(ch, db)
            },
            del: function (ch, db) {
              if('object' === typeof ch) ch.type = 'del'
              return this.add(ch, db)
            },
            veto: function () {
              return this.add(false)
            }
          }
          h.hook.call(context, e, context.add, b)
        }
      })
    })
    } catch (err) {
      return (cb || opts)(err)
    }
    b = b.filter(function (e) {
      return e && e.type //filter out empty items
    })

    if(b.length == 1 && !isBatch) {
      var change = b[0]
      return change.type == 'put' 
        ? put.call(db, change.key, change.value, opts, cb) 
        : del.call(db, change.key, opts, cb)  
    }
    return batch.call(db, b, opts, cb)
  }

  db.put = function (key, value, opts, cb ) {
    var batch = [{key: key, value: value, type: 'put'}]
    return callHooks(false, batch, opts, cb)
  }

  db.del = function (key, opts, cb) {
    var batch = [{key: key, type: 'del'}]
    return callHooks(false, batch, opts, cb)
  }

  db.batch = function (batch, opts, cb) {
    return callHooks(true, batch, opts, cb)
  }
}

},{"string-range":34}],34:[function(require,module,exports){

//force to a valid range
var range = exports.range = function (obj) {
  return null == obj ? {} : 'string' === typeof range ? {
      min: range, max: range + '\xff'
    } :  obj
}

//turn into a sub range.
var prefix = exports.prefix = function (range, within, term) {
  range = exports.range(range)
  var _range = {}
  term = term || '\xff'
  if(range instanceof RegExp || 'function' == typeof range) {
    _range.min = within
    _range.max   = within + term,
    _range.inner = function (k) {
      var j = k.substring(within.length)
      if(range.test)
        return range.test(j)
      return range(j)
    }
  }
  else if('object' === typeof range) {
    _range.min = within + (range.min || range.start || '')
    _range.max = within + (range.max || range.end   || (term || '~'))
    _range.reverse = !!range.reverse
  }
  return _range
}

//return a function that checks a range
var checker = exports.checker = function (range) {
  if(!range) range = {}

  if ('string' === typeof range)
    return function (key) {
      return key.indexOf(range) == 0
    }
  else if(range instanceof RegExp)
    return function (key) {
      return range.test(key)
    }
  else if('object' === typeof range)
    return function (key) {
      var min = range.min || range.start
      var max = range.max || range.end

      // fixes keys passed as ints from sublevels
      key = String(key)

      return (
        !min || key >= min
      ) && (
        !max || key <= max
      ) && (
        !range.inner || (
          range.inner.test 
            ? range.inner.test(key)
            : range.inner(key)
        )
      )
    }
  else if('function' === typeof range)
    return range
}
//check if a key is within a range.
var satifies = exports.satisfies = function (key, range) {
  return checker(range)(key)
}



},{}],35:[function(require,module,exports){
module.exports = hasKeys

function hasKeys(source) {
    return source !== null &&
        (typeof source === "object" ||
        typeof source === "function")
}

},{}],36:[function(require,module,exports){
var Keys = require("object-keys")
var hasKeys = require("./has-keys")

module.exports = extend

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        if (!hasKeys(source)) {
            continue
        }

        var keys = Keys(source)

        for (var j = 0; j < keys.length; j++) {
            var name = keys[j]
            target[name] = source[name]
        }
    }

    return target
}

},{"./has-keys":35,"object-keys":37}],37:[function(require,module,exports){
module.exports = Object.keys || require('./shim');


},{"./shim":40}],38:[function(require,module,exports){

var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};


},{}],39:[function(require,module,exports){

/**!
 * is
 * the definitive JavaScript type testing library
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

var objProto = Object.prototype;
var owns = objProto.hasOwnProperty;
var toString = objProto.toString;
var isActualNaN = function (value) {
  return value !== value;
};
var NON_HOST_TYPES = {
  "boolean": 1,
  "number": 1,
  "string": 1,
  "undefined": 1
};

/**
 * Expose `is`
 */

var is = module.exports = {};

/**
 * Test general.
 */

/**
 * is.type
 * Test if `value` is a type of `type`.
 *
 * @param {Mixed} value value to test
 * @param {String} type type
 * @return {Boolean} true if `value` is a type of `type`, false otherwise
 * @api public
 */

is.a =
is.type = function (value, type) {
  return typeof value === type;
};

/**
 * is.defined
 * Test if `value` is defined.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if 'value' is defined, false otherwise
 * @api public
 */

is.defined = function (value) {
  return value !== undefined;
};

/**
 * is.empty
 * Test if `value` is empty.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is empty, false otherwise
 * @api public
 */

is.empty = function (value) {
  var type = toString.call(value);
  var key;

  if ('[object Array]' === type || '[object Arguments]' === type) {
    return value.length === 0;
  }

  if ('[object Object]' === type) {
    for (key in value) if (owns.call(value, key)) return false;
    return true;
  }

  if ('[object String]' === type) {
    return '' === value;
  }

  return false;
};

/**
 * is.equal
 * Test if `value` is equal to `other`.
 *
 * @param {Mixed} value value to test
 * @param {Mixed} other value to compare with
 * @return {Boolean} true if `value` is equal to `other`, false otherwise
 */

is.equal = function (value, other) {
  var type = toString.call(value)
  var key;

  if (type !== toString.call(other)) {
    return false;
  }

  if ('[object Object]' === type) {
    for (key in value) {
      if (!is.equal(value[key], other[key])) {
        return false;
      }
    }
    return true;
  }

  if ('[object Array]' === type) {
    key = value.length;
    if (key !== other.length) {
      return false;
    }
    while (--key) {
      if (!is.equal(value[key], other[key])) {
        return false;
      }
    }
    return true;
  }

  if ('[object Function]' === type) {
    return value.prototype === other.prototype;
  }

  if ('[object Date]' === type) {
    return value.getTime() === other.getTime();
  }

  return value === other;
};

/**
 * is.hosted
 * Test if `value` is hosted by `host`.
 *
 * @param {Mixed} value to test
 * @param {Mixed} host host to test with
 * @return {Boolean} true if `value` is hosted by `host`, false otherwise
 * @api public
 */

is.hosted = function (value, host) {
  var type = typeof host[value];
  return type === 'object' ? !!host[value] : !NON_HOST_TYPES[type];
};

/**
 * is.instance
 * Test if `value` is an instance of `constructor`.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an instance of `constructor`
 * @api public
 */

is.instance = is['instanceof'] = function (value, constructor) {
  return value instanceof constructor;
};

/**
 * is.null
 * Test if `value` is null.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is null, false otherwise
 * @api public
 */

is['null'] = function (value) {
  return value === null;
};

/**
 * is.undefined
 * Test if `value` is undefined.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is undefined, false otherwise
 * @api public
 */

is.undefined = function (value) {
  return value === undefined;
};

/**
 * Test arguments.
 */

/**
 * is.arguments
 * Test if `value` is an arguments object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an arguments object, false otherwise
 * @api public
 */

is.arguments = function (value) {
  var isStandardArguments = '[object Arguments]' === toString.call(value);
  var isOldArguments = !is.array(value) && is.arraylike(value) && is.object(value) && is.fn(value.callee);
  return isStandardArguments || isOldArguments;
};

/**
 * Test array.
 */

/**
 * is.array
 * Test if 'value' is an array.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an array, false otherwise
 * @api public
 */

is.array = function (value) {
  return '[object Array]' === toString.call(value);
};

/**
 * is.arguments.empty
 * Test if `value` is an empty arguments object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an empty arguments object, false otherwise
 * @api public
 */
is.arguments.empty = function (value) {
  return is.arguments(value) && value.length === 0;
};

/**
 * is.array.empty
 * Test if `value` is an empty array.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an empty array, false otherwise
 * @api public
 */
is.array.empty = function (value) {
  return is.array(value) && value.length === 0;
};

/**
 * is.arraylike
 * Test if `value` is an arraylike object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an arguments object, false otherwise
 * @api public
 */

is.arraylike = function (value) {
  return !!value && !is.boolean(value)
    && owns.call(value, 'length')
    && isFinite(value.length)
    && is.number(value.length)
    && value.length >= 0;
};

/**
 * Test boolean.
 */

/**
 * is.boolean
 * Test if `value` is a boolean.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a boolean, false otherwise
 * @api public
 */

is.boolean = function (value) {
  return '[object Boolean]' === toString.call(value);
};

/**
 * is.false
 * Test if `value` is false.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is false, false otherwise
 * @api public
 */

is['false'] = function (value) {
  return is.boolean(value) && (value === false || value.valueOf() === false);
};

/**
 * is.true
 * Test if `value` is true.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is true, false otherwise
 * @api public
 */

is['true'] = function (value) {
  return is.boolean(value) && (value === true || value.valueOf() === true);
};

/**
 * Test date.
 */

/**
 * is.date
 * Test if `value` is a date.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a date, false otherwise
 * @api public
 */

is.date = function (value) {
  return '[object Date]' === toString.call(value);
};

/**
 * Test element.
 */

/**
 * is.element
 * Test if `value` is an html element.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an HTML Element, false otherwise
 * @api public
 */

is.element = function (value) {
  return value !== undefined
    && typeof HTMLElement !== 'undefined'
    && value instanceof HTMLElement
    && value.nodeType === 1;
};

/**
 * Test error.
 */

/**
 * is.error
 * Test if `value` is an error object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an error object, false otherwise
 * @api public
 */

is.error = function (value) {
  return '[object Error]' === toString.call(value);
};

/**
 * Test function.
 */

/**
 * is.fn / is.function (deprecated)
 * Test if `value` is a function.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a function, false otherwise
 * @api public
 */

is.fn = is['function'] = function (value) {
  var isAlert = typeof window !== 'undefined' && value === window.alert;
  return isAlert || '[object Function]' === toString.call(value);
};

/**
 * Test number.
 */

/**
 * is.number
 * Test if `value` is a number.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a number, false otherwise
 * @api public
 */

is.number = function (value) {
  return '[object Number]' === toString.call(value);
};

/**
 * is.infinite
 * Test if `value` is positive or negative infinity.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is positive or negative Infinity, false otherwise
 * @api public
 */
is.infinite = function (value) {
  return value === Infinity || value === -Infinity;
};

/**
 * is.decimal
 * Test if `value` is a decimal number.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a decimal number, false otherwise
 * @api public
 */

is.decimal = function (value) {
  return is.number(value) && !isActualNaN(value) && !is.infinite(value) && value % 1 !== 0;
};

/**
 * is.divisibleBy
 * Test if `value` is divisible by `n`.
 *
 * @param {Number} value value to test
 * @param {Number} n dividend
 * @return {Boolean} true if `value` is divisible by `n`, false otherwise
 * @api public
 */

is.divisibleBy = function (value, n) {
  var isDividendInfinite = is.infinite(value);
  var isDivisorInfinite = is.infinite(n);
  var isNonZeroNumber = is.number(value) && !isActualNaN(value) && is.number(n) && !isActualNaN(n) && n !== 0;
  return isDividendInfinite || isDivisorInfinite || (isNonZeroNumber && value % n === 0);
};

/**
 * is.int
 * Test if `value` is an integer.
 *
 * @param value to test
 * @return {Boolean} true if `value` is an integer, false otherwise
 * @api public
 */

is.int = function (value) {
  return is.number(value) && !isActualNaN(value) && value % 1 === 0;
};

/**
 * is.maximum
 * Test if `value` is greater than 'others' values.
 *
 * @param {Number} value value to test
 * @param {Array} others values to compare with
 * @return {Boolean} true if `value` is greater than `others` values
 * @api public
 */

is.maximum = function (value, others) {
  if (isActualNaN(value)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.arraylike(others)) {
    throw new TypeError('second argument must be array-like');
  }
  var len = others.length;

  while (--len >= 0) {
    if (value < others[len]) {
      return false;
    }
  }

  return true;
};

/**
 * is.minimum
 * Test if `value` is less than `others` values.
 *
 * @param {Number} value value to test
 * @param {Array} others values to compare with
 * @return {Boolean} true if `value` is less than `others` values
 * @api public
 */

is.minimum = function (value, others) {
  if (isActualNaN(value)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.arraylike(others)) {
    throw new TypeError('second argument must be array-like');
  }
  var len = others.length;

  while (--len >= 0) {
    if (value > others[len]) {
      return false;
    }
  }

  return true;
};

/**
 * is.nan
 * Test if `value` is not a number.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is not a number, false otherwise
 * @api public
 */

is.nan = function (value) {
  return !is.number(value) || value !== value;
};

/**
 * is.even
 * Test if `value` is an even number.
 *
 * @param {Number} value value to test
 * @return {Boolean} true if `value` is an even number, false otherwise
 * @api public
 */

is.even = function (value) {
  return is.infinite(value) || (is.number(value) && value === value && value % 2 === 0);
};

/**
 * is.odd
 * Test if `value` is an odd number.
 *
 * @param {Number} value value to test
 * @return {Boolean} true if `value` is an odd number, false otherwise
 * @api public
 */

is.odd = function (value) {
  return is.infinite(value) || (is.number(value) && value === value && value % 2 !== 0);
};

/**
 * is.ge
 * Test if `value` is greater than or equal to `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean}
 * @api public
 */

is.ge = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value >= other;
};

/**
 * is.gt
 * Test if `value` is greater than `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean}
 * @api public
 */

is.gt = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value > other;
};

/**
 * is.le
 * Test if `value` is less than or equal to `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean} if 'value' is less than or equal to 'other'
 * @api public
 */

is.le = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value <= other;
};

/**
 * is.lt
 * Test if `value` is less than `other`.
 *
 * @param {Number} value value to test
 * @param {Number} other value to compare with
 * @return {Boolean} if `value` is less than `other`
 * @api public
 */

is.lt = function (value, other) {
  if (isActualNaN(value) || isActualNaN(other)) {
    throw new TypeError('NaN is not a valid value');
  }
  return !is.infinite(value) && !is.infinite(other) && value < other;
};

/**
 * is.within
 * Test if `value` is within `start` and `finish`.
 *
 * @param {Number} value value to test
 * @param {Number} start lower bound
 * @param {Number} finish upper bound
 * @return {Boolean} true if 'value' is is within 'start' and 'finish'
 * @api public
 */
is.within = function (value, start, finish) {
  if (isActualNaN(value) || isActualNaN(start) || isActualNaN(finish)) {
    throw new TypeError('NaN is not a valid value');
  } else if (!is.number(value) || !is.number(start) || !is.number(finish)) {
    throw new TypeError('all arguments must be numbers');
  }
  var isAnyInfinite = is.infinite(value) || is.infinite(start) || is.infinite(finish);
  return isAnyInfinite || (value >= start && value <= finish);
};

/**
 * Test object.
 */

/**
 * is.object
 * Test if `value` is an object.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is an object, false otherwise
 * @api public
 */

is.object = function (value) {
  return value && '[object Object]' === toString.call(value);
};

/**
 * is.hash
 * Test if `value` is a hash - a plain object literal.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a hash, false otherwise
 * @api public
 */

is.hash = function (value) {
  return is.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval;
};

/**
 * Test regexp.
 */

/**
 * is.regexp
 * Test if `value` is a regular expression.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if `value` is a regexp, false otherwise
 * @api public
 */

is.regexp = function (value) {
  return '[object RegExp]' === toString.call(value);
};

/**
 * Test string.
 */

/**
 * is.string
 * Test if `value` is a string.
 *
 * @param {Mixed} value value to test
 * @return {Boolean} true if 'value' is a string, false otherwise
 * @api public
 */

is.string = function (value) {
  return '[object String]' === toString.call(value);
};


},{}],40:[function(require,module,exports){
(function () {
	"use strict";

	// modified from https://github.com/kriskowal/es5-shim
	var has = Object.prototype.hasOwnProperty,
		is = require('is'),
		forEach = require('foreach'),
		hasDontEnumBug = !({'toString': null}).propertyIsEnumerable('toString'),
		dontEnums = [
			"toString",
			"toLocaleString",
			"valueOf",
			"hasOwnProperty",
			"isPrototypeOf",
			"propertyIsEnumerable",
			"constructor"
		],
		keysShim;

	keysShim = function keys(object) {
		if (!is.object(object) && !is.array(object)) {
			throw new TypeError("Object.keys called on a non-object");
		}

		var name, theKeys = [];
		for (name in object) {
			if (has.call(object, name)) {
				theKeys.push(name);
			}
		}

		if (hasDontEnumBug) {
			forEach(dontEnums, function (dontEnum) {
				if (has.call(object, dontEnum)) {
					theKeys.push(dontEnum);
				}
			});
		}
		return theKeys;
	};

	module.exports = keysShim;
}());


},{"foreach":38,"is":39}],41:[function(require,module,exports){
var EventEmitter = require('events').EventEmitter
var inherits     = require('util').inherits
var ranges       = require('string-range')
var fixRange     = require('level-fix-range')
var xtend        = require('xtend')
var Batch        = require('./batch')

inherits(SubDB, EventEmitter)

function SubDB (db, prefix, options) {
  if('string' === typeof options) {
    console.error('db.sublevel(name, seperator<string>) is depreciated')
    console.error('use db.sublevel(name, {sep: separator})) if you must')
    options = {sep: options}
  }
  if(!(this instanceof SubDB)) return new SubDB(db, prefix, options)
  if(!db)     throw new Error('must provide db')
  if(!prefix) throw new Error('must provide prefix')

  options = options || {}
  options.sep = options.sep || '\xff'

  this._parent = db
  this._options = options
  this.options = options
  this._prefix = prefix
  this._root = root(this)
  db.sublevels[prefix] = this
  this.sublevels = {}
  this.methods = {}
  var self = this
  this.hooks = {
    pre: function () {
      return self.pre.apply(self, arguments)
    },
    post: function () {
      return self.post.apply(self, arguments)
    }
  }
}

var SDB = SubDB.prototype

SDB._key = function (key) {
  var sep = this._options.sep
  return sep
    + this._prefix
    + sep
    + key
}

SDB._getOptsAndCb = function (opts, cb) {
  if (typeof opts == 'function') {
    cb = opts
    opts = {}
  }
  return { opts: xtend(opts, this._options), cb: cb }
}

SDB.sublevel = function (prefix, options) {
  if(this.sublevels[prefix])
    return this.sublevels[prefix]
  return new SubDB(this, prefix, options || this._options)
}

SDB.put = function (key, value, opts, cb) {
  var res = this._getOptsAndCb(opts, cb)
  this._root.put(this.prefix(key), value, res.opts, res.cb)
}

SDB.get = function (key, opts, cb) {
  var res = this._getOptsAndCb(opts, cb)
  this._root.get(this.prefix(key), res.opts, res.cb)
}

SDB.del = function (key, opts, cb) {
  var res = this._getOptsAndCb(opts, cb)
  this._root.del(this.prefix(key), res.opts, res.cb)
}

SDB.batch = function (changes, opts, cb) {
  if(!Array.isArray(changes))
    return new Batch(this)
  var self = this,
      res = this._getOptsAndCb(opts, cb)
  changes.forEach(function (ch) {

    //OH YEAH, WE NEED TO VALIDATE THAT UPDATING THIS KEY/PREFIX IS ALLOWED
    if('string' === typeof ch.prefix)
      ch.key = ch.prefix + ch.key
    else
      ch.key = (ch.prefix || self).prefix(ch.key)

    if(ch.prefix) ch.prefix = null
  })
  this._root.batch(changes, res.opts, res.cb)
}

SDB._getKeyEncoding = function () {
  if(this.options.keyEncoding)
    return this.options.keyEncoding
  if(this._parent && this._parent._getKeyEncoding)
    return this._parent._getKeyEncoding()
}

SDB._getValueEncoding = function () {
  if(this.options.valueEncoding)
    return this.options.valueEncoding
  if(this._parent && this._parent._getValueEncoding)
    return this._parent._getValueEncoding()
}

SDB.prefix = function (key) {
  var sep = this._options.sep
  return this._parent.prefix() + sep + this._prefix + sep + (key || '')
}

SDB.keyStream =
SDB.createKeyStream = function (opts) {
  opts = opts || {}
  opts.keys = true
  opts.values = false
  return this.createReadStream(opts)
}

SDB.valueStream =
SDB.createValueStream = function (opts) {
  opts = opts || {}
  opts.keys = false
  opts.values = true
  opts.keys = false
  return this.createReadStream(opts)
}

function selectivelyMerge(_opts, opts) {
  [ 'valueEncoding'
  , 'encoding'
  , 'keyEncoding'
  , 'reverse'
  , 'values'
  , 'keys'
  , 'limit'
  , 'fillCache'
  ]
  .forEach(function (k) {
    if (opts.hasOwnProperty(k)) _opts[k] = opts[k]
  })
}

SDB.readStream =
SDB.createReadStream = function (opts) {
  opts = opts || {}
  var r = root(this)
  var p = this.prefix()

  var _opts = ranges.prefix(opts, p)
  selectivelyMerge(_opts, xtend(opts, this._options))

  var s = r.createReadStream(_opts)

  if(_opts.values === false) {
    var read = s.read
    if (read) {
      s.read = function (size) {
        var val = read.call(this, size)
        if (val) val = val.substring(p.length)
        return val
      }
    } else {
      var emit = s.emit
      s.emit = function (event, val) {
        if(event === 'data') {
          emit.call(this, 'data', val.substring(p.length))
        } else
          emit.call(this, event, val)
      }
    }
    return s
  } else if(_opts.keys === false)
    return s
  else {
    var read = s.read
    if (read) {
      s.read = function (size) {
        var d = read.call(this, size)
        if (d) d.key = d.key.substring(p.length)
        return d
      }
    } else {
      s.on('data', function (d) {
        //mutate the prefix!
        //this doesn't work for createKeyStream admittedly.
        d.key = d.key.substring(p.length)
      })
    }
    return s
  }
}


SDB.writeStream =
SDB.createWriteStream = function () {
  var r = root(this)
  var p = this.prefix()
  var ws = r.createWriteStream.apply(r, arguments)
  var write = ws.write

  var encoding = this._options.encoding
  var valueEncoding = this._options.valueEncoding
  var keyEncoding = this._options.keyEncoding

  // slight optimization, if no encoding was specified at all,
  // which will be the case most times, make write not check at all
  var nocheck = !encoding && !valueEncoding && !keyEncoding

  ws.write = nocheck
    ? function (data) {
        data.key = p + data.key
        return write.call(ws, data)
      }
    : function (data) {
        data.key = p + data.key

        // not merging all options here since this happens on every write and things could get slowed down
        // at this point we only consider encoding important to propagate
        if (encoding && typeof data.encoding === 'undefined')
          data.encoding = encoding
        if (valueEncoding && typeof data.valueEncoding === 'undefined')
          data.valueEncoding = valueEncoding
        if (keyEncoding && typeof data.keyEncoding === 'undefined')
          data.keyEncoding = keyEncoding

        return write.call(ws, data)
      }
  return ws
}

SDB.approximateSize = function () {
  var r = root(db)
  return r.approximateSize.apply(r, arguments)
}

function root(db) {
  if(!db._parent) return db
  return root(db._parent)
}

SDB.pre = function (range, hook) {
  if(!hook) hook = range, range = null
  range = ranges.prefix(range, this.prefix(), this._options.sep)
  var r = root(this._parent)
  var p = this.prefix()
  return r.hooks.pre(fixRange(range), function (ch, add, batch) {
    hook({
      key: ch.key.substring(p.length),
      value: ch.value,
      type: ch.type
    }, function (ch, _p) {
      //maybe remove the second add arg now
      //that op can have prefix?
      add(ch, ch.prefix ? _p : (_p || p))
    }, batch)
  })
}

SDB.post = function (range, hook) {
  if(!hook) hook = range, range = null
  var r = root(this._parent)
  var p = this.prefix()
  range = ranges.prefix(range, p, this._options.sep)
  return r.hooks.post(fixRange(range), function (data) {
    hook({key: data.key.substring(p.length), value: data.value, type: data.type})
  })
}

var exports = module.exports = SubDB


},{"./batch":29,"events":94,"level-fix-range":31,"string-range":34,"util":133,"xtend":36}],42:[function(require,module,exports){
module.exports = function (num, base) {
  return parseInt(num.toString(), base || 8)
}

},{}],43:[function(require,module,exports){
arguments[4][35][0].apply(exports,arguments)
},{"dup":35}],44:[function(require,module,exports){
var hasKeys = require("./has-keys")

module.exports = extend

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        if (!hasKeys(source)) {
            continue
        }

        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{"./has-keys":43}],45:[function(require,module,exports){
(function (process){
var path = require('path');
var once = require('once');
var concat = require('concat-stream');
var octal = require('octal')
var stat = require('./stat');
var xtend = require('xtend');
var errno = require('./errno');

var ROOT = stat({
	type: 'directory',
	mode: octal(777),
	size: 4096
});

var normalize = function(key) {
	key = key[0] === '/' ? key : '/' + key;
	key = path.normalize(key);
	if (key === '/') return key;
	return key[key.length-1] === '/' ? key.slice(0, -1) : key;
};

var prefix = function(key) {
	var depth = key.split('/').length.toString(36);
	return '0000000000'.slice(depth.length)+depth+key;
};

module.exports = function(db) {
	var that = {};

	that.normalize = normalize;

	that.get = function(key, cb) {
		key = normalize(key);
		if (key === '/') return process.nextTick(cb.bind(null, null, ROOT, '/'));
		db.get(prefix(key), {valueEncoding:'json'}, function(err, doc) {
			if (err && err.notFound) return cb(errno.ENOENT(key), null, key);
			if (err) return cb(err, null, key);
			cb(null, stat(doc), key);
		});
	};

	that.writable = function(key, cb) {
		key = normalize(key);
		if (key === '/') return process.nextTick(cb.bind(null, errno.EPERM(key)));
		that.follow(path.dirname(key), function(err, parent) {
			if (err) return cb(err);
			if (!parent.isDirectory()) return cb(errno.ENOTDIR(key));
			cb(null, key);
		});
	};

	that.list = function(key, cb) {
		key = normalize(key);

		var start = prefix(key === '/' ? key : key + '/');
		var keys = db.createKeyStream({start: start, end: start+'\xff'});

		cb = once(cb);

		keys.on('error', cb);
		keys.pipe(concat({encoding:'object'}, function(files) {
			files = files.map(function(file) {
				return file.split('/').pop();
			});

			cb(null, files);
		}));
	};

	var resolve = function(dir, cb) {
		var root = '/';
		var parts = dir.split('/').slice(1);

		var loop = function() {
			that.get(path.join(root, parts.shift()), function(err, doc, key) {
				if (err) return cb(err, doc, dir);
				root = doc.target || key;
				if (!parts.length) return cb(null, doc, key);
				loop();
			});
		};

		loop();
	};

	that.follow = function(key, cb) {
		resolve(normalize(key), function loop(err, doc, key) {
			if (err) return cb(err, null, key);
			if (doc.target) return that.get(doc.target, loop);
			cb(null, stat(doc), key);
		});
	};

	that.update = function(key, opts, cb) {
		that.get(key, function(err, doc, key) {
			if (err) return cb(err);
			if (key === '/') return cb(errno.EPERM(key));
			that.put(key, xtend(doc, opts), cb);
		});
	};

	that.put = function(key, opts, cb) {
		that.writable(key, function(err, key) {
			if (err) return cb(err);
			db.put(prefix(key), stat(opts), {valueEncoding:'json'}, cb);
		});
	};

	that.del = function(key, cb) {
		key = normalize(key);
		if (key === '/') return process.nextTick(cb.bind(null, errno.EPERM(key)));
		db.del(prefix(key), cb);
	};

	return that;
};

}).call(this,require('_process'))
},{"./errno":5,"./stat":46,"_process":106,"concat-stream":89,"octal":42,"once":103,"path":104,"xtend":44}],46:[function(require,module,exports){
var toDate = function(date) {
	if (!date) return new Date();
	if (typeof date === 'string') return new Date(date);
	return date;
};

var Stat = function(opts) {
	this.uid = opts.uid || 0;
	this.gid = opts.gid || 0;
	this.mode = opts.mode || 0;
	this.size = opts.size || 0;
	this.mtime = toDate(opts.mtime);
	this.atime = toDate(opts.atime);
	this.ctime = toDate(opts.ctime);
	this.type = opts.type;
	this.target = opts.target;
	this.link = opts.link;
	this.blob = opts.blob;
};

Stat.prototype.isDirectory = function() {
	return this.type === 'directory';
};

Stat.prototype.isFile = function() {
	return this.type === 'file';
};

Stat.prototype.isBlockDevice = function() {
	return false;
};

Stat.prototype.isCharacterDevice = function() {
	return false;
};

Stat.prototype.isSymbolicLink = function() {
	return this.type === 'symlink';
};

Stat.prototype.isFIFO = function() {
	return false;
};

Stat.prototype.isSocket = function() {
	return false;
};

module.exports = function(opts) {
	return new Stat(opts);
};
},{}],47:[function(require,module,exports){
var events = require('events');

module.exports = function() {
	var listeners = {};
	var that = new events.EventEmitter();

	that.watch = function(key, cb) {
		if (!listeners[key]) {
			listeners[key] = new events.EventEmitter();
			listeners[key].setMaxListeners(0);
		}

		if (cb) listeners[key].on('change', cb);
		return listeners[key];
	};

	that.watcher = function(key, cb) {
		var watcher = new events.EventEmitter();
		var onchange = function() {
			watcher.emit('change', 'change', key);
		};

		that.watch(key, onchange);
		if (cb) watcher.on('change', cb);
		watcher.close = function() {
			that.unwatch(key, onchange);
		};

		return watcher;
	};

	that.unwatch = function(key, cb) {
		if (!listeners[key]) return;
		if (cb) listeners[key].removeListener('change', cb);
		else listeners[key].removeAllListeners('change');
		if (!listeners[key].listeners('change').length) delete listeners[key];;
	};

	that.change = function(key) {
		if (listeners[key]) listeners[key].emit('change');
		that.emit('change', key);
	};

	that.cb = function(key, cb) {
		return function(err, val) {
			if (key) that.change(key);
			if (cb) cb(err, val);
		};
	};

	return that;
};
},{"events":94}],48:[function(require,module,exports){
(function (Buffer){
module.exports = Level

var IDB = require('idb-wrapper')
var AbstractLevelDOWN = require('abstract-leveldown').AbstractLevelDOWN
var util = require('util')
var Iterator = require('./iterator')
var isBuffer = require('isbuffer')
var xtend = require('xtend')
var toBuffer = require('typedarray-to-buffer')

function Level(location) {
  if (!(this instanceof Level)) return new Level(location)
  if (!location) throw new Error("constructor requires at least a location argument")
  this.IDBOptions = {}
  this.location = location
}

util.inherits(Level, AbstractLevelDOWN)

Level.prototype._open = function(options, callback) {
  var self = this
    
  var idbOpts = {
    storeName: this.location,
    autoIncrement: false,
    keyPath: null,
    onStoreReady: function () {
      callback && callback(null, self.idb)
    }, 
    onError: function(err) {
      callback && callback(err)
    }
  }
  
  xtend(idbOpts, options)
  this.IDBOptions = idbOpts
  this.idb = new IDB(idbOpts)
}

Level.prototype._get = function (key, options, callback) {
  this.idb.get(key, function (value) {
    if (value === undefined) {
      // 'NotFound' error, consistent with LevelDOWN API
      return callback(new Error('NotFound'))
    }
    // by default return buffers, unless explicitly told not to
    var asBuffer = true
    if (options.asBuffer === false) asBuffer = false
    if (options.raw) asBuffer = false
    if (asBuffer) {
      if (value instanceof Uint8Array) value = toBuffer(value)
      else value = new Buffer(String(value))
    }
    return callback(null, value, key)
  }, callback)
}

Level.prototype._del = function(id, options, callback) {
  this.idb.remove(id, callback, callback)
}

Level.prototype._put = function (key, value, options, callback) {
  if (value instanceof ArrayBuffer) {
    value = toBuffer(new Uint8Array(value))
  }
  var obj = this.convertEncoding(key, value, options)
  if (Buffer.isBuffer(obj.value)) {
    if (typeof value.toArrayBuffer === 'function') {
      obj.value = new Uint8Array(value.toArrayBuffer())
    } else {
      obj.value = new Uint8Array(value)
    }
  }
  this.idb.put(obj.key, obj.value, function() { callback() }, callback)
}

Level.prototype.convertEncoding = function(key, value, options) {
  if (options.raw) return {key: key, value: value}
  if (value) {
    var stringed = value.toString()
    if (stringed === 'NaN') value = 'NaN'
  }
  var valEnc = options.valueEncoding
  var obj = {key: key, value: value}
  if (value && (!valEnc || valEnc !== 'binary')) {
    if (typeof obj.value !== 'object') {
      obj.value = stringed
    }
  }
  return obj
}

Level.prototype.iterator = function (options) {
  if (typeof options !== 'object') options = {}
  return new Iterator(this.idb, options)
}

Level.prototype._batch = function (array, options, callback) {
  var op
  var i
  var k
  var copiedOp
  var currentOp
  var modified = []
  
  if (array.length === 0) return setTimeout(callback, 0)
  
  for (i = 0; i < array.length; i++) {
    copiedOp = {}
    currentOp = array[i]
    modified[i] = copiedOp
    
    var converted = this.convertEncoding(currentOp.key, currentOp.value, options)
    currentOp.key = converted.key
    currentOp.value = converted.value

    for (k in currentOp) {
      if (k === 'type' && currentOp[k] == 'del') {
        copiedOp[k] = 'remove'
      } else {
        copiedOp[k] = currentOp[k]
      }
    }
  }

  return this.idb.batch(modified, function(){ callback() }, callback)
}

Level.prototype._close = function (callback) {
  this.idb.db.close()
  callback()
}

Level.prototype._approximateSize = function (start, end, callback) {
  var err = new Error('Not implemented')
  if (callback)
    return callback(err)

  throw err
}

Level.prototype._isBuffer = function (obj) {
  return Buffer.isBuffer(obj)
}

Level.destroy = function (db, callback) {
  if (typeof db === 'object') {
    var prefix = db.IDBOptions.storePrefix || 'IDBWrapper-'
    var dbname = db.location
  } else {
    var prefix = 'IDBWrapper-'
    var dbname = db
  }
  var request = indexedDB.deleteDatabase(prefix + dbname)
  request.onsuccess = function() {
    callback()
  }
  request.onerror = function(err) {
    callback(err)
  }
}

var checkKeyValue = Level.prototype._checkKeyValue = function (obj, type) {
  if (obj === null || obj === undefined)
    return new Error(type + ' cannot be `null` or `undefined`')
  if (obj === null || obj === undefined)
    return new Error(type + ' cannot be `null` or `undefined`')
  if (isBuffer(obj) && obj.byteLength === 0)
    return new Error(type + ' cannot be an empty ArrayBuffer')
  if (String(obj) === '')
    return new Error(type + ' cannot be an empty String')
  if (obj.length === 0)
    return new Error(type + ' cannot be an empty Array')
}

}).call(this,require("buffer").Buffer)
},{"./iterator":49,"abstract-leveldown":52,"buffer":87,"idb-wrapper":54,"isbuffer":55,"typedarray-to-buffer":57,"util":133,"xtend":59}],49:[function(require,module,exports){
var util = require('util')
var AbstractIterator  = require('abstract-leveldown').AbstractIterator
var ltgt = require('ltgt')

module.exports = Iterator

function Iterator (db, options) {
  if (!options) options = {}
  this.options = options
  AbstractIterator.call(this, db)
  this._order = options.reverse ? 'DESC': 'ASC'
  this._limit = options.limit
  this._count = 0
  this._done  = false
  var lower = ltgt.lowerBound(options)
  var upper = ltgt.upperBound(options)
  try {
    this._keyRange = lower || upper ? this.db.makeKeyRange({
      lower: lower,
      upper: upper,
      excludeLower: ltgt.lowerBoundExclusive(options),
      excludeUpper: ltgt.upperBoundExclusive(options)
    }) : null
  } catch (e) {
    // The lower key is greater than the upper key.
    // IndexedDB throws an error, but we'll just return 0 results.
    this._keyRangeError = true
  }
  this.callback = null
}

util.inherits(Iterator, AbstractIterator)

Iterator.prototype.createIterator = function() {
  var self = this

  self.iterator = self.db.iterate(function () {
    self.onItem.apply(self, arguments)
  }, {
    keyRange: self._keyRange,
    autoContinue: false,
    order: self._order,
    onError: function(err) { console.log('horrible error', err) },
  })
}

// TODO the limit implementation here just ignores all reads after limit has been reached
// it should cancel the iterator instead but I don't know how
Iterator.prototype.onItem = function (value, cursor, cursorTransaction) {
  if (!cursor && this.callback) {
    this.callback()
    this.callback = false
    return
  }
  var shouldCall = true

  if (!!this._limit && this._limit > 0 && this._count++ >= this._limit)
    shouldCall = false

  if (shouldCall) this.callback(false, cursor.key, cursor.value)
  if (cursor) cursor['continue']()
}

Iterator.prototype._next = function (callback) {
  if (!callback) return new Error('next() requires a callback argument')
  if (this._keyRangeError) return callback()
  if (!this._started) {
    this.createIterator()
    this._started = true
  }
  this.callback = callback
}

},{"abstract-leveldown":52,"ltgt":56,"util":133}],50:[function(require,module,exports){
(function (process){
/* Copyright (c) 2013 Rod Vagg, MIT License */

function AbstractChainedBatch (db) {
  this._db         = db
  this._operations = []
  this._written    = false
}

AbstractChainedBatch.prototype._checkWritten = function () {
  if (this._written)
    throw new Error('write() already called on this batch')
}

AbstractChainedBatch.prototype.put = function (key, value) {
  this._checkWritten()

  var err = this._db._checkKeyValue(key, 'key', this._db._isBuffer)
  if (err) throw err
  err = this._db._checkKeyValue(value, 'value', this._db._isBuffer)
  if (err) throw err

  if (!this._db._isBuffer(key)) key = String(key)
  if (!this._db._isBuffer(value)) value = String(value)

  if (typeof this._put == 'function' )
    this._put(key, value)
  else
    this._operations.push({ type: 'put', key: key, value: value })

  return this
}

AbstractChainedBatch.prototype.del = function (key) {
  this._checkWritten()

  var err = this._db._checkKeyValue(key, 'key', this._db._isBuffer)
  if (err) throw err

  if (!this._db._isBuffer(key)) key = String(key)

  if (typeof this._del == 'function' )
    this._del(key)
  else
    this._operations.push({ type: 'del', key: key })

  return this
}

AbstractChainedBatch.prototype.clear = function () {
  this._checkWritten()

  this._operations = []

  if (typeof this._clear == 'function' )
    this._clear()

  return this
}

AbstractChainedBatch.prototype.write = function (options, callback) {
  this._checkWritten()

  if (typeof options == 'function')
    callback = options
  if (typeof callback != 'function')
    throw new Error('write() requires a callback argument')
  if (typeof options != 'object')
    options = {}

  this._written = true

  if (typeof this._write == 'function' )
    return this._write(callback)

  if (typeof this._db._batch == 'function')
    return this._db._batch(this._operations, options, callback)

  process.nextTick(callback)
}

module.exports = AbstractChainedBatch
}).call(this,require('_process'))
},{"_process":106}],51:[function(require,module,exports){
(function (process){
/* Copyright (c) 2013 Rod Vagg, MIT License */

function AbstractIterator (db) {
  this.db = db
  this._ended = false
  this._nexting = false
}

AbstractIterator.prototype.next = function (callback) {
  var self = this

  if (typeof callback != 'function')
    throw new Error('next() requires a callback argument')

  if (self._ended)
    return callback(new Error('cannot call next() after end()'))
  if (self._nexting)
    return callback(new Error('cannot call next() before previous next() has completed'))

  self._nexting = true
  if (typeof self._next == 'function') {
    return self._next(function () {
      self._nexting = false
      callback.apply(null, arguments)
    })
  }

  process.nextTick(function () {
    self._nexting = false
    callback()
  })
}

AbstractIterator.prototype.end = function (callback) {
  if (typeof callback != 'function')
    throw new Error('end() requires a callback argument')

  if (this._ended)
    return callback(new Error('end() already called on iterator'))

  this._ended = true

  if (typeof this._end == 'function')
    return this._end(callback)

  process.nextTick(callback)
}

module.exports = AbstractIterator

}).call(this,require('_process'))
},{"_process":106}],52:[function(require,module,exports){
(function (Buffer,process){
/* Copyright (c) 2013 Rod Vagg, MIT License */

var xtend                = require('xtend')
  , AbstractIterator     = require('./abstract-iterator')
  , AbstractChainedBatch = require('./abstract-chained-batch')

function AbstractLevelDOWN (location) {
  if (!arguments.length || location === undefined)
    throw new Error('constructor requires at least a location argument')

  if (typeof location != 'string')
    throw new Error('constructor requires a location string argument')

  this.location = location
}

AbstractLevelDOWN.prototype.open = function (options, callback) {
  if (typeof options == 'function')
    callback = options

  if (typeof callback != 'function')
    throw new Error('open() requires a callback argument')

  if (typeof options != 'object')
    options = {}

  if (typeof this._open == 'function')
    return this._open(options, callback)

  process.nextTick(callback)
}

AbstractLevelDOWN.prototype.close = function (callback) {
  if (typeof callback != 'function')
    throw new Error('close() requires a callback argument')

  if (typeof this._close == 'function')
    return this._close(callback)

  process.nextTick(callback)
}

AbstractLevelDOWN.prototype.get = function (key, options, callback) {
  var err

  if (typeof options == 'function')
    callback = options

  if (typeof callback != 'function')
    throw new Error('get() requires a callback argument')

  if (err = this._checkKeyValue(key, 'key', this._isBuffer))
    return callback(err)

  if (!this._isBuffer(key))
    key = String(key)

  if (typeof options != 'object')
    options = {}

  if (typeof this._get == 'function')
    return this._get(key, options, callback)

  process.nextTick(function () { callback(new Error('NotFound')) })
}

AbstractLevelDOWN.prototype.put = function (key, value, options, callback) {
  var err

  if (typeof options == 'function')
    callback = options

  if (typeof callback != 'function')
    throw new Error('put() requires a callback argument')

  if (err = this._checkKeyValue(key, 'key', this._isBuffer))
    return callback(err)

  if (err = this._checkKeyValue(value, 'value', this._isBuffer))
    return callback(err)

  if (!this._isBuffer(key))
    key = String(key)

  // coerce value to string in node, don't touch it in browser
  // (indexeddb can store any JS type)
  if (!this._isBuffer(value) && !process.browser)
    value = String(value)

  if (typeof options != 'object')
    options = {}

  if (typeof this._put == 'function')
    return this._put(key, value, options, callback)

  process.nextTick(callback)
}

AbstractLevelDOWN.prototype.del = function (key, options, callback) {
  var err

  if (typeof options == 'function')
    callback = options

  if (typeof callback != 'function')
    throw new Error('del() requires a callback argument')

  if (err = this._checkKeyValue(key, 'key', this._isBuffer))
    return callback(err)

  if (!this._isBuffer(key))
    key = String(key)

  if (typeof options != 'object')
    options = {}

  if (typeof this._del == 'function')
    return this._del(key, options, callback)

  process.nextTick(callback)
}

AbstractLevelDOWN.prototype.batch = function (array, options, callback) {
  if (!arguments.length)
    return this._chainedBatch()

  if (typeof options == 'function')
    callback = options

  if (typeof callback != 'function')
    throw new Error('batch(array) requires a callback argument')

  if (!Array.isArray(array))
    return callback(new Error('batch(array) requires an array argument'))

  if (typeof options != 'object')
    options = {}

  var i = 0
    , l = array.length
    , e
    , err

  for (; i < l; i++) {
    e = array[i]
    if (typeof e != 'object')
      continue

    if (err = this._checkKeyValue(e.type, 'type', this._isBuffer))
      return callback(err)

    if (err = this._checkKeyValue(e.key, 'key', this._isBuffer))
      return callback(err)

    if (e.type == 'put') {
      if (err = this._checkKeyValue(e.value, 'value', this._isBuffer))
        return callback(err)
    }
  }

  if (typeof this._batch == 'function')
    return this._batch(array, options, callback)

  process.nextTick(callback)
}

//TODO: remove from here, not a necessary primitive
AbstractLevelDOWN.prototype.approximateSize = function (start, end, callback) {
  if (   start == null
      || end == null
      || typeof start == 'function'
      || typeof end == 'function') {
    throw new Error('approximateSize() requires valid `start`, `end` and `callback` arguments')
  }

  if (typeof callback != 'function')
    throw new Error('approximateSize() requires a callback argument')

  if (!this._isBuffer(start))
    start = String(start)

  if (!this._isBuffer(end))
    end = String(end)

  if (typeof this._approximateSize == 'function')
    return this._approximateSize(start, end, callback)

  process.nextTick(function () {
    callback(null, 0)
  })
}

AbstractLevelDOWN.prototype._setupIteratorOptions = function (options) {
  var self = this

  options = xtend(options)

  ;[ 'start', 'end', 'gt', 'gte', 'lt', 'lte' ].forEach(function (o) {
    if (options[o] && self._isBuffer(options[o]) && options[o].length === 0)
      delete options[o]
  })

  options.reverse = !!options.reverse

  // fix `start` so it takes into account gt, gte, lt, lte as appropriate
  if (options.reverse && options.lt)
    options.start = options.lt
  if (options.reverse && options.lte)
    options.start = options.lte
  if (!options.reverse && options.gt)
    options.start = options.gt
  if (!options.reverse && options.gte)
    options.start = options.gte

  if ((options.reverse && options.lt && !options.lte)
    || (!options.reverse && options.gt && !options.gte))
    options.exclusiveStart = true // start should *not* include matching key

  return options
}

AbstractLevelDOWN.prototype.iterator = function (options) {
  if (typeof options != 'object')
    options = {}

  options = this._setupIteratorOptions(options)

  if (typeof this._iterator == 'function')
    return this._iterator(options)

  return new AbstractIterator(this)
}

AbstractLevelDOWN.prototype._chainedBatch = function () {
  return new AbstractChainedBatch(this)
}

AbstractLevelDOWN.prototype._isBuffer = function (obj) {
  return Buffer.isBuffer(obj)
}

AbstractLevelDOWN.prototype._checkKeyValue = function (obj, type) {

  if (obj === null || obj === undefined)
    return new Error(type + ' cannot be `null` or `undefined`')

  if (this._isBuffer(obj)) {
    if (obj.length === 0)
      return new Error(type + ' cannot be an empty Buffer')
  } else if (String(obj) === '')
    return new Error(type + ' cannot be an empty String')
}

module.exports.AbstractLevelDOWN    = AbstractLevelDOWN
module.exports.AbstractIterator     = AbstractIterator
module.exports.AbstractChainedBatch = AbstractChainedBatch

}).call(this,{"isBuffer":require("../../../../../is-buffer/index.js")},require('_process'))
},{"../../../../../is-buffer/index.js":97,"./abstract-chained-batch":50,"./abstract-iterator":51,"_process":106,"xtend":53}],53:[function(require,module,exports){
module.exports = extend

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],54:[function(require,module,exports){
/*global window:false, self:false, define:false, module:false */

/**
 * @license IDBWrapper - A cross-browser wrapper for IndexedDB
 * Version 1.7.0
 * Copyright (c) 2011 - 2016 Jens Arps
 * http://jensarps.de/
 *
 * Licensed under the MIT (X11) license
 */

(function (name, definition, global) {

    'use strict';

    if (typeof define === 'function') {
        define(definition);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = definition();
    } else {
        global[name] = definition();
    }
})('IDBStore', function () {

    'use strict';

    var defaultErrorHandler = function (error) {
        throw error;
    };
    var defaultSuccessHandler = function () {
    };

    var defaults = {
        storeName: 'Store',
        storePrefix: 'IDBWrapper-',
        dbVersion: 1,
        keyPath: 'id',
        autoIncrement: true,
        onStoreReady: function () {
        },
        onError: defaultErrorHandler,
        indexes: [],
        implementationPreference: [
            'indexedDB',
            'webkitIndexedDB',
            'mozIndexedDB',
            'shimIndexedDB'
        ]
    };

    /**
     *
     * The IDBStore constructor
     *
     * @constructor
     * @name IDBStore
     * @version 1.7.0
     *
     * @param {Object} [kwArgs] An options object used to configure the store and
     *  set callbacks
     * @param {String} [kwArgs.storeName='Store'] The name of the store
     * @param {String} [kwArgs.storePrefix='IDBWrapper-'] A prefix that is
     *  internally used to construct the name of the database, which will be
     *  kwArgs.storePrefix + kwArgs.storeName
     * @param {Number} [kwArgs.dbVersion=1] The version of the store
     * @param {String} [kwArgs.keyPath='id'] The key path to use. If you want to
     *  setup IDBWrapper to work with out-of-line keys, you need to set this to
     *  `null`
     * @param {Boolean} [kwArgs.autoIncrement=true] If set to true, IDBStore will
     *  automatically make sure a unique keyPath value is present on each object
     *  that is stored.
     * @param {Function} [kwArgs.onStoreReady] A callback to be called when the
     *  store is ready to be used.
     * @param {Function} [kwArgs.onError=throw] A callback to be called when an
     *  error occurred during instantiation of the store.
     * @param {Array} [kwArgs.indexes=[]] An array of indexData objects
     *  defining the indexes to use with the store. For every index to be used
     *  one indexData object needs to be passed in the array.
     *  An indexData object is defined as follows:
     * @param {Object} [kwArgs.indexes.indexData] An object defining the index to
     *  use
     * @param {String} kwArgs.indexes.indexData.name The name of the index
     * @param {String} [kwArgs.indexes.indexData.keyPath] The key path of the index
     * @param {Boolean} [kwArgs.indexes.indexData.unique] Whether the index is unique
     * @param {Boolean} [kwArgs.indexes.indexData.multiEntry] Whether the index is multi entry
     * @param {Array} [kwArgs.implementationPreference=['indexedDB','webkitIndexedDB','mozIndexedDB','shimIndexedDB']] An array of strings naming implementations to be used, in order or preference
     * @param {Function} [onStoreReady] A callback to be called when the store
     * is ready to be used.
     * @example
     // create a store for customers with an additional index over the
     // `lastname` property.
     var myCustomerStore = new IDBStore({
         dbVersion: 1,
         storeName: 'customer-index',
         keyPath: 'customerid',
         autoIncrement: true,
         onStoreReady: populateTable,
         indexes: [
             { name: 'lastname', keyPath: 'lastname', unique: false, multiEntry: false }
         ]
     });
     * @example
     // create a generic store
     var myCustomerStore = new IDBStore({
         storeName: 'my-data-store',
         onStoreReady: function(){
             // start working with the store.
         }
     });
     */
    var IDBStore = function (kwArgs, onStoreReady) {

        if (typeof onStoreReady == 'undefined' && typeof kwArgs == 'function') {
            onStoreReady = kwArgs;
        }
        if (Object.prototype.toString.call(kwArgs) != '[object Object]') {
            kwArgs = {};
        }

        for (var key in defaults) {
            this[key] = typeof kwArgs[key] != 'undefined' ? kwArgs[key] : defaults[key];
        }

        this.dbName = this.storePrefix + this.storeName;
        this.dbVersion = parseInt(this.dbVersion, 10) || 1;

        onStoreReady && (this.onStoreReady = onStoreReady);

        var env = typeof window == 'object' ? window : self;
        var availableImplementations = this.implementationPreference.filter(function (implName) {
            return implName in env;
        });
        this.implementation = availableImplementations[0];
        this.idb = env[this.implementation];
        this.keyRange = env.IDBKeyRange || env.webkitIDBKeyRange || env.mozIDBKeyRange;

        this.consts = {
            'READ_ONLY': 'readonly',
            'READ_WRITE': 'readwrite',
            'VERSION_CHANGE': 'versionchange',
            'NEXT': 'next',
            'NEXT_NO_DUPLICATE': 'nextunique',
            'PREV': 'prev',
            'PREV_NO_DUPLICATE': 'prevunique'
        };

        this.openDB();
    };

    /** @lends IDBStore.prototype */
    var proto = {

        /**
         * A pointer to the IDBStore ctor
         *
         * @private
         * @type {Function}
         * @constructs
         */
        constructor: IDBStore,

        /**
         * The version of IDBStore
         *
         * @type {String}
         */
        version: '1.7.0',

        /**
         * A reference to the IndexedDB object
         *
         * @type {IDBDatabase}
         */
        db: null,

        /**
         * The full name of the IndexedDB used by IDBStore, composed of
         * this.storePrefix + this.storeName
         *
         * @type {String}
         */
        dbName: null,

        /**
         * The version of the IndexedDB used by IDBStore
         *
         * @type {Number}
         */
        dbVersion: null,

        /**
         * A reference to the objectStore used by IDBStore
         *
         * @type {IDBObjectStore}
         */
        store: null,

        /**
         * The store name
         *
         * @type {String}
         */
        storeName: null,

        /**
         * The prefix to prepend to the store name
         *
         * @type {String}
         */
        storePrefix: null,

        /**
         * The key path
         *
         * @type {String}
         */
        keyPath: null,

        /**
         * Whether IDBStore uses autoIncrement
         *
         * @type {Boolean}
         */
        autoIncrement: null,

        /**
         * The indexes used by IDBStore
         *
         * @type {Array}
         */
        indexes: null,

        /**
         * The implemantations to try to use, in order of preference
         *
         * @type {Array}
         */
        implementationPreference: null,

        /**
         * The actual implementation being used
         *
         * @type {String}
         */
        implementation: '',

        /**
         * The callback to be called when the store is ready to be used
         *
         * @type {Function}
         */
        onStoreReady: null,

        /**
         * The callback to be called if an error occurred during instantiation
         * of the store
         *
         * @type {Function}
         */
        onError: null,

        /**
         * The internal insertID counter
         *
         * @type {Number}
         * @private
         */
        _insertIdCount: 0,

        /**
         * Opens an IndexedDB; called by the constructor.
         *
         * Will check if versions match and compare provided index configuration
         * with existing ones, and update indexes if necessary.
         *
         * Will call this.onStoreReady() if everything went well and the store
         * is ready to use, and this.onError() is something went wrong.
         *
         * @private
         *
         */
        openDB: function () {

            var openRequest = this.idb.open(this.dbName, this.dbVersion);
            var preventSuccessCallback = false;

            openRequest.onerror = function (error) {

                var gotVersionErr = false;
                if ('error' in error.target) {
                    gotVersionErr = error.target.error.name == 'VersionError';
                } else if ('errorCode' in error.target) {
                    gotVersionErr = error.target.errorCode == 12;
                }

                if (gotVersionErr) {
                    this.onError(new Error('The version number provided is lower than the existing one.'));
                } else {
                    this.onError(error);
                }
            }.bind(this);

            openRequest.onsuccess = function (event) {

                if (preventSuccessCallback) {
                    return;
                }

                if (this.db) {
                    this.onStoreReady();
                    return;
                }

                this.db = event.target.result;

                if (typeof this.db.version == 'string') {
                    this.onError(new Error('The IndexedDB implementation in this browser is outdated. Please upgrade your browser.'));
                    return;
                }

                if (!this.db.objectStoreNames.contains(this.storeName)) {
                    // We should never ever get here.
                    // Lets notify the user anyway.
                    this.onError(new Error('Object store couldn\'t be created.'));
                    return;
                }

                var emptyTransaction = this.db.transaction([this.storeName], this.consts.READ_ONLY);
                this.store = emptyTransaction.objectStore(this.storeName);

                // check indexes
                var existingIndexes = Array.prototype.slice.call(this.getIndexList());
                this.indexes.forEach(function (indexData) {
                    var indexName = indexData.name;

                    if (!indexName) {
                        preventSuccessCallback = true;
                        this.onError(new Error('Cannot create index: No index name given.'));
                        return;
                    }

                    this.normalizeIndexData(indexData);

                    if (this.hasIndex(indexName)) {
                        // check if it complies
                        var actualIndex = this.store.index(indexName);
                        var complies = this.indexComplies(actualIndex, indexData);
                        if (!complies) {
                            preventSuccessCallback = true;
                            this.onError(new Error('Cannot modify index "' + indexName + '" for current version. Please bump version number to ' + ( this.dbVersion + 1 ) + '.'));
                        }

                        existingIndexes.splice(existingIndexes.indexOf(indexName), 1);
                    } else {
                        preventSuccessCallback = true;
                        this.onError(new Error('Cannot create new index "' + indexName + '" for current version. Please bump version number to ' + ( this.dbVersion + 1 ) + '.'));
                    }

                }, this);

                if (existingIndexes.length) {
                    preventSuccessCallback = true;
                    this.onError(new Error('Cannot delete index(es) "' + existingIndexes.toString() + '" for current version. Please bump version number to ' + ( this.dbVersion + 1 ) + '.'));
                }

                preventSuccessCallback || this.onStoreReady();
            }.bind(this);

            openRequest.onupgradeneeded = function (/* IDBVersionChangeEvent */ event) {

                this.db = event.target.result;

                if (this.db.objectStoreNames.contains(this.storeName)) {
                    this.store = event.target.transaction.objectStore(this.storeName);
                } else {
                    var optionalParameters = {autoIncrement: this.autoIncrement};
                    if (this.keyPath !== null) {
                        optionalParameters.keyPath = this.keyPath;
                    }
                    this.store = this.db.createObjectStore(this.storeName, optionalParameters);
                }

                var existingIndexes = Array.prototype.slice.call(this.getIndexList());
                this.indexes.forEach(function (indexData) {
                    var indexName = indexData.name;

                    if (!indexName) {
                        preventSuccessCallback = true;
                        this.onError(new Error('Cannot create index: No index name given.'));
                    }

                    this.normalizeIndexData(indexData);

                    if (this.hasIndex(indexName)) {
                        // check if it complies
                        var actualIndex = this.store.index(indexName);
                        var complies = this.indexComplies(actualIndex, indexData);
                        if (!complies) {
                            // index differs, need to delete and re-create
                            this.store.deleteIndex(indexName);
                            this.store.createIndex(indexName, indexData.keyPath, {
                                unique: indexData.unique,
                                multiEntry: indexData.multiEntry
                            });
                        }

                        existingIndexes.splice(existingIndexes.indexOf(indexName), 1);
                    } else {
                        this.store.createIndex(indexName, indexData.keyPath, {
                            unique: indexData.unique,
                            multiEntry: indexData.multiEntry
                        });
                    }

                }, this);

                if (existingIndexes.length) {
                    existingIndexes.forEach(function (_indexName) {
                        this.store.deleteIndex(_indexName);
                    }, this);
                }

            }.bind(this);
        },

        /**
         * Deletes the database used for this store if the IDB implementations
         * provides that functionality.
         *
         * @param {Function} [onSuccess] A callback that is called if deletion
         *  was successful.
         * @param {Function} [onError] A callback that is called if deletion
         *  failed.
         */
        deleteDatabase: function (onSuccess, onError) {
            if (this.idb.deleteDatabase) {
                this.db.close();
                var deleteRequest = this.idb.deleteDatabase(this.dbName);
                deleteRequest.onsuccess = onSuccess;
                deleteRequest.onerror = onError;
            } else {
                onError(new Error('Browser does not support IndexedDB deleteDatabase!'));
            }
        },

        /*********************
         * data manipulation *
         *********************/

        /**
         * Puts an object into the store. If an entry with the given id exists,
         * it will be overwritten. This method has a different signature for inline
         * keys and out-of-line keys; please see the examples below.
         *
         * @param {*} [key] The key to store. This is only needed if IDBWrapper
         *  is set to use out-of-line keys. For inline keys - the default scenario -
         *  this can be omitted.
         * @param {Object} value The data object to store.
         * @param {Function} [onSuccess] A callback that is called if insertion
         *  was successful.
         * @param {Function} [onError] A callback that is called if insertion
         *  failed.
         * @returns {IDBTransaction} The transaction used for this operation.
         * @example
         // Storing an object, using inline keys (the default scenario):
         var myCustomer = {
             customerid: 2346223,
             lastname: 'Doe',
             firstname: 'John'
         };
         myCustomerStore.put(myCustomer, mySuccessHandler, myErrorHandler);
         // Note that passing success- and error-handlers is optional.
         * @example
         // Storing an object, using out-of-line keys:
         var myCustomer = {
             lastname: 'Doe',
             firstname: 'John'
         };
         myCustomerStore.put(2346223, myCustomer, mySuccessHandler, myErrorHandler);
         // Note that passing success- and error-handlers is optional.
         */
        put: function (key, value, onSuccess, onError) {
            if (this.keyPath !== null) {
                onError = onSuccess;
                onSuccess = value;
                value = key;
            }
            onError || (onError = defaultErrorHandler);
            onSuccess || (onSuccess = defaultSuccessHandler);

            var hasSuccess = false,
                result = null,
                putRequest;

            var putTransaction = this.db.transaction([this.storeName], this.consts.READ_WRITE);
            putTransaction.oncomplete = function () {
                var callback = hasSuccess ? onSuccess : onError;
                callback(result);
            };
            putTransaction.onabort = onError;
            putTransaction.onerror = onError;

            if (this.keyPath !== null) { // in-line keys
                this._addIdPropertyIfNeeded(value);
                putRequest = putTransaction.objectStore(this.storeName).put(value);
            } else { // out-of-line keys
                putRequest = putTransaction.objectStore(this.storeName).put(value, key);
            }
            putRequest.onsuccess = function (event) {
                hasSuccess = true;
                result = event.target.result;
            };
            putRequest.onerror = onError;

            return putTransaction;
        },

        /**
         * Retrieves an object from the store. If no entry exists with the given id,
         * the success handler will be called with null as first and only argument.
         *
         * @param {*} key The id of the object to fetch.
         * @param {Function} [onSuccess] A callback that is called if fetching
         *  was successful. Will receive the object as only argument.
         * @param {Function} [onError] A callback that will be called if an error
         *  occurred during the operation.
         * @returns {IDBTransaction} The transaction used for this operation.
         */
        get: function (key, onSuccess, onError) {
            onError || (onError = defaultErrorHandler);
            onSuccess || (onSuccess = defaultSuccessHandler);

            var hasSuccess = false,
                result = null;

            var getTransaction = this.db.transaction([this.storeName], this.consts.READ_ONLY);
            getTransaction.oncomplete = function () {
                var callback = hasSuccess ? onSuccess : onError;
                callback(result);
            };
            getTransaction.onabort = onError;
            getTransaction.onerror = onError;
            var getRequest = getTransaction.objectStore(this.storeName).get(key);
            getRequest.onsuccess = function (event) {
                hasSuccess = true;
                result = event.target.result;
            };
            getRequest.onerror = onError;

            return getTransaction;
        },

        /**
         * Removes an object from the store.
         *
         * @param {*} key The id of the object to remove.
         * @param {Function} [onSuccess] A callback that is called if the removal
         *  was successful.
         * @param {Function} [onError] A callback that will be called if an error
         *  occurred during the operation.
         * @returns {IDBTransaction} The transaction used for this operation.
         */
        remove: function (key, onSuccess, onError) {
            onError || (onError = defaultErrorHandler);
            onSuccess || (onSuccess = defaultSuccessHandler);

            var hasSuccess = false,
                result = null;

            var removeTransaction = this.db.transaction([this.storeName], this.consts.READ_WRITE);
            removeTransaction.oncomplete = function () {
                var callback = hasSuccess ? onSuccess : onError;
                callback(result);
            };
            removeTransaction.onabort = onError;
            removeTransaction.onerror = onError;

            var deleteRequest = removeTransaction.objectStore(this.storeName)['delete'](key);
            deleteRequest.onsuccess = function (event) {
                hasSuccess = true;
                result = event.target.result;
            };
            deleteRequest.onerror = onError;

            return removeTransaction;
        },

        /**
         * Runs a batch of put and/or remove operations on the store.
         *
         * @param {Array} dataArray An array of objects containing the operation to run
         *  and the data object (for put operations).
         * @param {Function} [onSuccess] A callback that is called if all operations
         *  were successful.
         * @param {Function} [onError] A callback that is called if an error
         *  occurred during one of the operations.
         * @returns {IDBTransaction} The transaction used for this operation.
         */
        batch: function (dataArray, onSuccess, onError) {
            onError || (onError = defaultErrorHandler);
            onSuccess || (onSuccess = defaultSuccessHandler);

            if (Object.prototype.toString.call(dataArray) != '[object Array]') {
                onError(new Error('dataArray argument must be of type Array.'));
            } else if (dataArray.length === 0) {
                return onSuccess(true);
            }

            var count = dataArray.length;
            var called = false;
            var hasSuccess = false;

            var batchTransaction = this.db.transaction([this.storeName], this.consts.READ_WRITE);
            batchTransaction.oncomplete = function () {
                var callback = hasSuccess ? onSuccess : onError;
                callback(hasSuccess);
            };
            batchTransaction.onabort = onError;
            batchTransaction.onerror = onError;


            var onItemSuccess = function () {
                count--;
                if (count === 0 && !called) {
                    called = true;
                    hasSuccess = true;
                }
            };

            dataArray.forEach(function (operation) {
                var type = operation.type;
                var key = operation.key;
                var value = operation.value;

                var onItemError = function (err) {
                    batchTransaction.abort();
                    if (!called) {
                        called = true;
                        onError(err, type, key);
                    }
                };

                if (type == 'remove') {
                    var deleteRequest = batchTransaction.objectStore(this.storeName)['delete'](key);
                    deleteRequest.onsuccess = onItemSuccess;
                    deleteRequest.onerror = onItemError;
                } else if (type == 'put') {
                    var putRequest;
                    if (this.keyPath !== null) { // in-line keys
                        this._addIdPropertyIfNeeded(value);
                        putRequest = batchTransaction.objectStore(this.storeName).put(value);
                    } else { // out-of-line keys
                        putRequest = batchTransaction.objectStore(this.storeName).put(value, key);
                    }
                    putRequest.onsuccess = onItemSuccess;
                    putRequest.onerror = onItemError;
                }
            }, this);

            return batchTransaction;
        },

        /**
         * Takes an array of objects and stores them in a single transaction.
         *
         * @param {Array} dataArray An array of objects to store
         * @param {Function} [onSuccess] A callback that is called if all operations
         *  were successful.
         * @param {Function} [onError] A callback that is called if an error
         *  occurred during one of the operations.
         * @returns {IDBTransaction} The transaction used for this operation.
         */
        putBatch: function (dataArray, onSuccess, onError) {
            var batchData = dataArray.map(function (item) {
                return {type: 'put', value: item};
            });

            return this.batch(batchData, onSuccess, onError);
        },

        /**
         * Like putBatch, takes an array of objects and stores them in a single
         * transaction, but allows processing of the result values.  Returns the
         * processed records containing the key for newly created records to the
         * onSuccess calllback instead of only returning true or false for success.
         * In addition, added the option for the caller to specify a key field that
         * should be set to the newly created key.
         *
         * @param {Array} dataArray An array of objects to store
         * @param {Object} [options] An object containing optional options
         * @param {String} [options.keyField=this.keyPath] Specifies a field in the record to update
         *  with the auto-incrementing key. Defaults to the store's keyPath.
         * @param {Function} [onSuccess] A callback that is called if all operations
         *  were successful.
         * @param {Function} [onError] A callback that is called if an error
         *  occurred during one of the operations.
         * @returns {IDBTransaction} The transaction used for this operation.
         *
         */
        upsertBatch: function (dataArray, options, onSuccess, onError) {
            // handle `dataArray, onSuccess, onError` signature
            if (typeof options == 'function') {
                onSuccess = options;
                onError = onSuccess;
                options = {};
            }

            onError || (onError = defaultErrorHandler);
            onSuccess || (onSuccess = defaultSuccessHandler);
            options || (options = {});

            if (Object.prototype.toString.call(dataArray) != '[object Array]') {
                onError(new Error('dataArray argument must be of type Array.'));
            }

            var keyField = options.keyField || this.keyPath;
            var count = dataArray.length;
            var called = false;
            var hasSuccess = false;
            var index = 0; // assume success callbacks are executed in order

            var batchTransaction = this.db.transaction([this.storeName], this.consts.READ_WRITE);
            batchTransaction.oncomplete = function () {
                if (hasSuccess) {
                    onSuccess(dataArray);
                } else {
                    onError(false);
                }
            };
            batchTransaction.onabort = onError;
            batchTransaction.onerror = onError;

            var onItemSuccess = function (event) {
                var record = dataArray[index++];
                record[keyField] = event.target.result;

                count--;
                if (count === 0 && !called) {
                    called = true;
                    hasSuccess = true;
                }
            };

            dataArray.forEach(function (record) {
                var key = record.key;

                var onItemError = function (err) {
                    batchTransaction.abort();
                    if (!called) {
                        called = true;
                        onError(err);
                    }
                };

                var putRequest;
                if (this.keyPath !== null) { // in-line keys
                    this._addIdPropertyIfNeeded(record);
                    putRequest = batchTransaction.objectStore(this.storeName).put(record);
                } else { // out-of-line keys
                    putRequest = batchTransaction.objectStore(this.storeName).put(record, key);
                }
                putRequest.onsuccess = onItemSuccess;
                putRequest.onerror = onItemError;
            }, this);

            return batchTransaction;
        },

        /**
         * Takes an array of keys and removes matching objects in a single
         * transaction.
         *
         * @param {Array} keyArray An array of keys to remove
         * @param {Function} [onSuccess] A callback that is called if all operations
         *  were successful.
         * @param {Function} [onError] A callback that is called if an error
         *  occurred during one of the operations.
         * @returns {IDBTransaction} The transaction used for this operation.
         */
        removeBatch: function (keyArray, onSuccess, onError) {
            var batchData = keyArray.map(function (key) {
                return {type: 'remove', key: key};
            });

            return this.batch(batchData, onSuccess, onError);
        },

        /**
         * Takes an array of keys and fetches matching objects
         *
         * @param {Array} keyArray An array of keys identifying the objects to fetch
         * @param {Function} [onSuccess] A callback that is called if all operations
         *  were successful.
         * @param {Function} [onError] A callback that is called if an error
         *  occurred during one of the operations.
         * @param {String} [arrayType='sparse'] The type of array to pass to the
         *  success handler. May be one of 'sparse', 'dense' or 'skip'. Defaults to
         *  'sparse'. This parameter specifies how to handle the situation if a get
         *  operation did not throw an error, but there was no matching object in
         *  the database. In most cases, 'sparse' provides the most desired
         *  behavior. See the examples for details.
         * @returns {IDBTransaction} The transaction used for this operation.
         * @example
         // given that there are two objects in the database with the keypath
         // values 1 and 2, and the call looks like this:
         myStore.getBatch([1, 5, 2], onError, function (data) { … }, arrayType);

         // this is what the `data` array will be like:

         // arrayType == 'sparse':
         // data is a sparse array containing two entries and having a length of 3:
         [Object, 2: Object]
         0: Object
         2: Object
         length: 3
         // calling forEach on data will result in the callback being called two
         // times, with the index parameter matching the index of the key in the
         // keyArray.

         // arrayType == 'dense':
         // data is a dense array containing three entries and having a length of 3,
         // where data[1] is of type undefined:
         [Object, undefined, Object]
         0: Object
         1: undefined
         2: Object
         length: 3
         // calling forEach on data will result in the callback being called three
         // times, with the index parameter matching the index of the key in the
         // keyArray, but the second call will have undefined as first argument.

         // arrayType == 'skip':
         // data is a dense array containing two entries and having a length of 2:
         [Object, Object]
         0: Object
         1: Object
         length: 2
         // calling forEach on data will result in the callback being called two
         // times, with the index parameter not matching the index of the key in the
         // keyArray.
         */
        getBatch: function (keyArray, onSuccess, onError, arrayType) {
            onError || (onError = defaultErrorHandler);
            onSuccess || (onSuccess = defaultSuccessHandler);
            arrayType || (arrayType = 'sparse');

            if (Object.prototype.toString.call(keyArray) != '[object Array]') {
                onError(new Error('keyArray argument must be of type Array.'));
            } else if (keyArray.length === 0) {
                return onSuccess([]);
            }

            var data = [];
            var count = keyArray.length;
            var called = false;
            var hasSuccess = false;
            var result = null;

            var batchTransaction = this.db.transaction([this.storeName], this.consts.READ_ONLY);
            batchTransaction.oncomplete = function () {
                var callback = hasSuccess ? onSuccess : onError;
                callback(result);
            };
            batchTransaction.onabort = onError;
            batchTransaction.onerror = onError;

            var onItemSuccess = function (event) {
                if (event.target.result || arrayType == 'dense') {
                    data.push(event.target.result);
                } else if (arrayType == 'sparse') {
                    data.length++;
                }
                count--;
                if (count === 0) {
                    called = true;
                    hasSuccess = true;
                    result = data;
                }
            };

            keyArray.forEach(function (key) {

                var onItemError = function (err) {
                    called = true;
                    result = err;
                    onError(err);
                    batchTransaction.abort();
                };

                var getRequest = batchTransaction.objectStore(this.storeName).get(key);
                getRequest.onsuccess = onItemSuccess;
                getRequest.onerror = onItemError;

            }, this);

            return batchTransaction;
        },

        /**
         * Fetches all entries in the store.
         *
         * @param {Function} [onSuccess] A callback that is called if the operation
         *  was successful. Will receive an array of objects.
         * @param {Function} [onError] A callback that will be called if an error
         *  occurred during the operation.
         * @returns {IDBTransaction} The transaction used for this operation.
         */
        getAll: function (onSuccess, onError) {
            onError || (onError = defaultErrorHandler);
            onSuccess || (onSuccess = defaultSuccessHandler);
            var getAllTransaction = this.db.transaction([this.storeName], this.consts.READ_ONLY);
            var store = getAllTransaction.objectStore(this.storeName);
            if (store.getAll) {
                this._getAllNative(getAllTransaction, store, onSuccess, onError);
            } else {
                this._getAllCursor(getAllTransaction, store, onSuccess, onError);
            }

            return getAllTransaction;
        },

        /**
         * Implements getAll for IDB implementations that have a non-standard
         * getAll() method.
         *
         * @param {IDBTransaction} getAllTransaction An open READ transaction.
         * @param {IDBObjectStore} store A reference to the store.
         * @param {Function} onSuccess A callback that will be called if the
         *  operation was successful.
         * @param {Function} onError A callback that will be called if an
         *  error occurred during the operation.
         * @private
         */
        _getAllNative: function (getAllTransaction, store, onSuccess, onError) {
            var hasSuccess = false,
                result = null;

            getAllTransaction.oncomplete = function () {
                var callback = hasSuccess ? onSuccess : onError;
                callback(result);
            };
            getAllTransaction.onabort = onError;
            getAllTransaction.onerror = onError;

            var getAllRequest = store.getAll();
            getAllRequest.onsuccess = function (event) {
                hasSuccess = true;
                result = event.target.result;
            };
            getAllRequest.onerror = onError;
        },

        /**
         * Implements getAll for IDB implementations that do not have a getAll()
         * method.
         *
         * @param {IDBTransaction} getAllTransaction An open READ transaction.
         * @param {IDBObjectStore} store A reference to the store.
         * @param {Function} onSuccess A callback that will be called if the
         *  operation was successful.
         * @param {Function} onError A callback that will be called if an
         *  error occurred during the operation.
         * @private
         */
        _getAllCursor: function (getAllTransaction, store, onSuccess, onError) {
            var all = [],
                hasSuccess = false,
                result = null;

            getAllTransaction.oncomplete = function () {
                var callback = hasSuccess ? onSuccess : onError;
                callback(result);
            };
            getAllTransaction.onabort = onError;
            getAllTransaction.onerror = onError;

            var cursorRequest = store.openCursor();
            cursorRequest.onsuccess = function (event) {
                var cursor = event.target.result;
                if (cursor) {
                    all.push(cursor.value);
                    cursor['continue']();
                }
                else {
                    hasSuccess = true;
                    result = all;
                }
            };
            cursorRequest.onError = onError;
        },

        /**
         * Clears the store, i.e. deletes all entries in the store.
         *
         * @param {Function} [onSuccess] A callback that will be called if the
         *  operation was successful.
         * @param {Function} [onError] A callback that will be called if an
         *  error occurred during the operation.
         * @returns {IDBTransaction} The transaction used for this operation.
         */
        clear: function (onSuccess, onError) {
            onError || (onError = defaultErrorHandler);
            onSuccess || (onSuccess = defaultSuccessHandler);

            var hasSuccess = false,
                result = null;

            var clearTransaction = this.db.transaction([this.storeName], this.consts.READ_WRITE);
            clearTransaction.oncomplete = function () {
                var callback = hasSuccess ? onSuccess : onError;
                callback(result);
            };
            clearTransaction.onabort = onError;
            clearTransaction.onerror = onError;

            var clearRequest = clearTransaction.objectStore(this.storeName).clear();
            clearRequest.onsuccess = function (event) {
                hasSuccess = true;
                result = event.target.result;
            };
            clearRequest.onerror = onError;

            return clearTransaction;
        },

        /**
         * Checks if an id property needs to present on a object and adds one if
         * necessary.
         *
         * @param {Object} dataObj The data object that is about to be stored
         * @private
         */
        _addIdPropertyIfNeeded: function (dataObj) {
            if (typeof dataObj[this.keyPath] == 'undefined') {
                dataObj[this.keyPath] = this._insertIdCount++ + Date.now();
            }
        },

        /************
         * indexing *
         ************/

        /**
         * Returns a DOMStringList of index names of the store.
         *
         * @return {DOMStringList} The list of index names
         */
        getIndexList: function () {
            return this.store.indexNames;
        },

        /**
         * Checks if an index with the given name exists in the store.
         *
         * @param {String} indexName The name of the index to look for
         * @return {Boolean} Whether the store contains an index with the given name
         */
        hasIndex: function (indexName) {
            return this.store.indexNames.contains(indexName);
        },

        /**
         * Normalizes an object containing index data and assures that all
         * properties are set.
         *
         * @param {Object} indexData The index data object to normalize
         * @param {String} indexData.name The name of the index
         * @param {String} [indexData.keyPath] The key path of the index
         * @param {Boolean} [indexData.unique] Whether the index is unique
         * @param {Boolean} [indexData.multiEntry] Whether the index is multi entry
         */
        normalizeIndexData: function (indexData) {
            indexData.keyPath = indexData.keyPath || indexData.name;
            indexData.unique = !!indexData.unique;
            indexData.multiEntry = !!indexData.multiEntry;
        },

        /**
         * Checks if an actual index complies with an expected index.
         *
         * @param {IDBIndex} actual The actual index found in the store
         * @param {Object} expected An Object describing an expected index
         * @return {Boolean} Whether both index definitions are identical
         */
        indexComplies: function (actual, expected) {
            var complies = ['keyPath', 'unique', 'multiEntry'].every(function (key) {
                // IE10 returns undefined for no multiEntry
                if (key == 'multiEntry' && actual[key] === undefined && expected[key] === false) {
                    return true;
                }
                // Compound keys
                if (key == 'keyPath' && Object.prototype.toString.call(expected[key]) == '[object Array]') {
                    var exp = expected.keyPath;
                    var act = actual.keyPath;

                    // IE10 can't handle keyPath sequences and stores them as a string.
                    // The index will be unusable there, but let's still return true if
                    // the keyPath sequence matches.
                    if (typeof act == 'string') {
                        return exp.toString() == act;
                    }

                    // Chrome/Opera stores keyPath squences as DOMStringList, Firefox
                    // as Array
                    if (!(typeof act.contains == 'function' || typeof act.indexOf == 'function')) {
                        return false;
                    }

                    if (act.length !== exp.length) {
                        return false;
                    }

                    for (var i = 0, m = exp.length; i < m; i++) {
                        if (!( (act.contains && act.contains(exp[i])) || act.indexOf(exp[i] !== -1) )) {
                            return false;
                        }
                    }
                    return true;
                }
                return expected[key] == actual[key];
            });
            return complies;
        },

        /**********
         * cursor *
         **********/

        /**
         * Iterates over the store using the given options and calling onItem
         * for each entry matching the options.
         *
         * @param {Function} onItem A callback to be called for each match
         * @param {Object} [options] An object defining specific options
         * @param {String} [options.index=null] A name of an IDBIndex to operate on
         * @param {String} [options.order=ASC] The order in which to provide the
         *  results, can be 'DESC' or 'ASC'
         * @param {Boolean} [options.autoContinue=true] Whether to automatically
         *  iterate the cursor to the next result
         * @param {Boolean} [options.filterDuplicates=false] Whether to exclude
         *  duplicate matches
         * @param {IDBKeyRange} [options.keyRange=null] An IDBKeyRange to use
         * @param {Boolean} [options.writeAccess=false] Whether grant write access
         *  to the store in the onItem callback
         * @param {Function} [options.onEnd=null] A callback to be called after
         *  iteration has ended
         * @param {Function} [options.onError=throw] A callback to be called
         *  if an error occurred during the operation.
         * @param {Number} [options.limit=Infinity] Limit the number of returned
         *  results to this number
         * @param {Number} [options.offset=0] Skip the provided number of results
         *  in the resultset
         * @param {Boolean} [options.allowItemRejection=false] Allows the onItem
         * function to return a Boolean to accept or reject the current item
         * @returns {IDBTransaction} The transaction used for this operation.
         */
        iterate: function (onItem, options) {
            options = mixin({
                index: null,
                order: 'ASC',
                autoContinue: true,
                filterDuplicates: false,
                keyRange: null,
                writeAccess: false,
                onEnd: null,
                onError: defaultErrorHandler,
                limit: Infinity,
                offset: 0,
                allowItemRejection: false
            }, options || {});

            var directionType = options.order.toLowerCase() == 'desc' ? 'PREV' : 'NEXT';
            if (options.filterDuplicates) {
                directionType += '_NO_DUPLICATE';
            }

            var hasSuccess = false;
            var cursorTransaction = this.db.transaction([this.storeName], this.consts[options.writeAccess ? 'READ_WRITE' : 'READ_ONLY']);
            var cursorTarget = cursorTransaction.objectStore(this.storeName);
            if (options.index) {
                cursorTarget = cursorTarget.index(options.index);
            }
            var recordCount = 0;

            cursorTransaction.oncomplete = function () {
                if (!hasSuccess) {
                    options.onError(null);
                    return;
                }
                if (options.onEnd) {
                    options.onEnd();
                } else {
                    onItem(null);
                }
            };
            cursorTransaction.onabort = options.onError;
            cursorTransaction.onerror = options.onError;

            var cursorRequest = cursorTarget.openCursor(options.keyRange, this.consts[directionType]);
            cursorRequest.onerror = options.onError;
            cursorRequest.onsuccess = function (event) {
                var cursor = event.target.result;
                if (cursor) {
                    if (options.offset) {
                        cursor.advance(options.offset);
                        options.offset = 0;
                    } else {
                        var onItemReturn = onItem(cursor.value, cursor, cursorTransaction);
                        if (!options.allowItemRejection || onItemReturn !== false) {
                            recordCount++;
                        }
                        if (options.autoContinue) {
                            if (recordCount + options.offset < options.limit) {
                                cursor['continue']();
                            } else {
                                hasSuccess = true;
                            }
                        }
                    }
                } else {
                    hasSuccess = true;
                }
            };

            return cursorTransaction;
        },

        /**
         * Runs a query against the store and passes an array containing matched
         * objects to the success handler.
         *
         * @param {Function} onSuccess A callback to be called when the operation
         *  was successful.
         * @param {Object} [options] An object defining specific options
         * @param {String} [options.index=null] A name of an IDBIndex to operate on
         * @param {String} [options.order=ASC] The order in which to provide the
         *  results, can be 'DESC' or 'ASC'
         * @param {Boolean} [options.filterDuplicates=false] Whether to exclude
         *  duplicate matches
         * @param {IDBKeyRange} [options.keyRange=null] An IDBKeyRange to use
         * @param {Function} [options.onError=throw] A callback to be called
         *  if an error occurred during the operation.
         * @param {Number} [options.limit=Infinity] Limit the number of returned
         *  results to this number
         * @param {Number} [options.offset=0] Skip the provided number of results
         *  in the resultset
         * @param {Function} [options.filter=null] A custom filter function to
         *  apply to query resuts before returning. Must return `false` to reject
         *  an item. Can be combined with keyRanges.
         * @returns {IDBTransaction} The transaction used for this operation.
         */
        query: function (onSuccess, options) {
            var result = [],
                processedItems = 0;
            options = options || {};
            options.autoContinue = true;
            options.writeAccess = false;
            options.allowItemRejection = !!options.filter;
            options.onEnd = function () {
                onSuccess(result, processedItems);
            };
            return this.iterate(function (item) {
                processedItems++;
                var accept = options.filter ? options.filter(item) : true;
                if (accept !== false) {
                    result.push(item);
                }
                return accept;
            }, options);
        },

        /**
         *
         * Runs a query against the store, but only returns the number of matches
         * instead of the matches itself.
         *
         * @param {Function} onSuccess A callback to be called if the opration
         *  was successful.
         * @param {Object} [options] An object defining specific options
         * @param {String} [options.index=null] A name of an IDBIndex to operate on
         * @param {IDBKeyRange} [options.keyRange=null] An IDBKeyRange to use
         * @param {Function} [options.onError=throw] A callback to be called if an error
         *  occurred during the operation.
         * @returns {IDBTransaction} The transaction used for this operation.
         */
        count: function (onSuccess, options) {

            options = mixin({
                index: null,
                keyRange: null
            }, options || {});

            var onError = options.onError || defaultErrorHandler;

            var hasSuccess = false,
                result = null;

            var cursorTransaction = this.db.transaction([this.storeName], this.consts.READ_ONLY);
            cursorTransaction.oncomplete = function () {
                var callback = hasSuccess ? onSuccess : onError;
                callback(result);
            };
            cursorTransaction.onabort = onError;
            cursorTransaction.onerror = onError;

            var cursorTarget = cursorTransaction.objectStore(this.storeName);
            if (options.index) {
                cursorTarget = cursorTarget.index(options.index);
            }
            var countRequest = cursorTarget.count(options.keyRange);
            countRequest.onsuccess = function (evt) {
                hasSuccess = true;
                result = evt.target.result;
            };
            countRequest.onError = onError;

            return cursorTransaction;
        },

        /**************/
        /* key ranges */
        /**************/

        /**
         * Creates a key range using specified options. This key range can be
         * handed over to the count() and iterate() methods.
         *
         * Note: You must provide at least one or both of "lower" or "upper" value.
         *
         * @param {Object} options The options for the key range to create
         * @param {*} [options.lower] The lower bound
         * @param {Boolean} [options.excludeLower] Whether to exclude the lower
         *  bound passed in options.lower from the key range
         * @param {*} [options.upper] The upper bound
         * @param {Boolean} [options.excludeUpper] Whether to exclude the upper
         *  bound passed in options.upper from the key range
         * @param {*} [options.only] A single key value. Use this if you need a key
         *  range that only includes one value for a key. Providing this
         *  property invalidates all other properties.
         * @return {IDBKeyRange} The IDBKeyRange representing the specified options
         */
        makeKeyRange: function (options) {
            /*jshint onecase:true */
            var keyRange,
                hasLower = typeof options.lower != 'undefined',
                hasUpper = typeof options.upper != 'undefined',
                isOnly = typeof options.only != 'undefined';

            switch (true) {
                case isOnly:
                    keyRange = this.keyRange.only(options.only);
                    break;
                case hasLower && hasUpper:
                    keyRange = this.keyRange.bound(options.lower, options.upper, options.excludeLower, options.excludeUpper);
                    break;
                case hasLower:
                    keyRange = this.keyRange.lowerBound(options.lower, options.excludeLower);
                    break;
                case hasUpper:
                    keyRange = this.keyRange.upperBound(options.upper, options.excludeUpper);
                    break;
                default:
                    throw new Error('Cannot create KeyRange. Provide one or both of "lower" or "upper" value, or an "only" value.');
            }

            return keyRange;

        }

    };

    /** helpers **/
    var empty = {};

    function mixin (target, source) {
        var name, s;
        for (name in source) {
            s = source[name];
            if (s !== empty[name] && s !== target[name]) {
                target[name] = s;
            }
        }
        return target;
    }

    IDBStore.prototype = proto;
    IDBStore.version = proto.version;

    return IDBStore;

}, this);

},{}],55:[function(require,module,exports){
var Buffer = require('buffer').Buffer;

module.exports = isBuffer;

function isBuffer (o) {
  return Buffer.isBuffer(o)
    || /\[object (.+Array|Array.+)\]/.test(Object.prototype.toString.call(o));
}

},{"buffer":87}],56:[function(require,module,exports){
(function (Buffer){

exports.compare = function (a, b) {

  if(Buffer.isBuffer(a)) {
    var l = Math.min(a.length, b.length)
    for(var i = 0; i < l; i++) {
      var cmp = a[i] - b[i]
      if(cmp) return cmp
    }
    return a.length - b.length
  }

  return a < b ? -1 : a > b ? 1 : 0
}

function has(obj, key) {
  return Object.hasOwnProperty.call(obj, key)
}

// to be compatible with the current abstract-leveldown tests
// nullish or empty strings.
// I could use !!val but I want to permit numbers and booleans,
// if possible.

function isDef (val) {
  return val !== undefined && val !== ''
}

function has (range, name) {
  return Object.hasOwnProperty.call(range, name)
}

function hasKey(range, name) {
  return Object.hasOwnProperty.call(range, name) && name
}

var lowerBoundKey = exports.lowerBoundKey = function (range) {
    return (
       hasKey(range, 'gt')
    || hasKey(range, 'gte')
    || hasKey(range, 'min')
    || (range.reverse ? hasKey(range, 'end') : hasKey(range, 'start'))
    || undefined
    )
}

var lowerBound = exports.lowerBound = function (range) {
  var k = lowerBoundKey(range)
  return k && range[k]
}

exports.lowerBoundInclusive = function (range) {
  return has(range, 'gt') ? false : true
}

exports.upperBoundInclusive =
  function (range) {
    return has(range, 'lt') || !range.minEx ? false : true
  }

var lowerBoundExclusive = exports.lowerBoundExclusive =
  function (range) {
    return has(range, 'gt') || range.minEx ? true : false
  }

var upperBoundExclusive = exports.upperBoundExclusive =
  function (range) {
    return has(range, 'lt') ? true : false
  }

var upperBoundKey = exports.upperBoundKey = function (range) {
    return (
       hasKey(range, 'lt')
    || hasKey(range, 'lte')
    || hasKey(range, 'max')
    || (range.reverse ? hasKey(range, 'start') : hasKey(range, 'end'))
    || undefined
    )
}

var upperBound = exports.upperBound = function (range) {
  var k = upperBoundKey(range)
  return k && range[k]
}

function id (e) { return e }

exports.toLtgt = function (range, _range, map, lower, upper) {
  _range = _range || {}
  map = map || id
  var defaults = arguments.length > 3
  var lb = exports.lowerBoundKey(range)
  var ub = exports.upperBoundKey(range)
  if(lb) {
    if(lb === 'gt') _range.gt = map(range.gt, false)
    else            _range.gte = map(range[lb], false)
  }
  else if(defaults)
    _range.gte = map(lower, false)

  if(ub) {
    if(ub === 'lt') _range.lt = map(range.lt, true)
    else            _range.lte = map(range[ub], true)
  }
  else if(defaults)
    _range.lte = map(upper, true)

  if(range.reverse != null)
    _range.reverse = !!range.reverse

  //if range was used mutably
  //(in level-sublevel it's part of an options object
  //that has more properties on it.)
  if(has(_range, 'max'))   delete _range.max
  if(has(_range, 'min'))   delete _range.min
  if(has(_range, 'start')) delete _range.start
  if(has(_range, 'end'))   delete _range.end

  return _range
}

exports.contains = function (range, key, compare) {
  compare = compare || exports.compare

  var lb = lowerBound(range)
  if(isDef(lb)) {
    var cmp = compare(key, lb)
    if(cmp < 0 || (cmp === 0 && lowerBoundExclusive(range)))
      return false
  }

  var ub = upperBound(range)
  if(isDef(ub)) {
    var cmp = compare(key, ub)
    if(cmp > 0 || (cmp === 0) && upperBoundExclusive(range))
      return false
  }

  return true
}

exports.filter = function (range, compare) {
  return function (key) {
    return exports.contains(range, key, compare)
  }
}

}).call(this,{"isBuffer":require("../../../../../is-buffer/index.js")})
},{"../../../../../is-buffer/index.js":97}],57:[function(require,module,exports){
(function (Buffer){
/**
 * Convert a typed array to a Buffer without a copy
 *
 * Author:   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * License:  MIT
 *
 * `npm install typedarray-to-buffer`
 */

module.exports = function (arr) {
  if (typeof Buffer._augment === 'function' && Buffer.TYPED_ARRAY_SUPPORT) {
    // If `Buffer` is from the `buffer` module and this browser supports typed arrays,
    // then augment it with all the `Buffer` methods.
    return Buffer._augment(arr)
  } else {
    // Otherwise, fallback to creating a `Buffer` with a copy.
    return new Buffer(arr)
  }
}

}).call(this,require("buffer").Buffer)
},{"buffer":87}],58:[function(require,module,exports){
arguments[4][35][0].apply(exports,arguments)
},{"dup":35}],59:[function(require,module,exports){
arguments[4][36][0].apply(exports,arguments)
},{"./has-keys":58,"dup":36,"object-keys":61}],60:[function(require,module,exports){
var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

var isFunction = function (fn) {
	var isFunc = (typeof fn === 'function' && !(fn instanceof RegExp)) || toString.call(fn) === '[object Function]';
	if (!isFunc && typeof window !== 'undefined') {
		isFunc = fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt;
	}
	return isFunc;
};

module.exports = function forEach(obj, fn) {
	if (!isFunction(fn)) {
		throw new TypeError('iterator must be a function');
	}
	var i, k,
		isString = typeof obj === 'string',
		l = obj.length,
		context = arguments.length > 2 ? arguments[2] : null;
	if (l === +l) {
		for (i = 0; i < l; i++) {
			if (context === null) {
				fn(isString ? obj.charAt(i) : obj[i], i, obj);
			} else {
				fn.call(context, isString ? obj.charAt(i) : obj[i], i, obj);
			}
		}
	} else {
		for (k in obj) {
			if (hasOwn.call(obj, k)) {
				if (context === null) {
					fn(obj[k], k, obj);
				} else {
					fn.call(context, obj[k], k, obj);
				}
			}
		}
	}
};


},{}],61:[function(require,module,exports){
arguments[4][37][0].apply(exports,arguments)
},{"./shim":63,"dup":37}],62:[function(require,module,exports){
var toString = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toString.call(value);
	var isArguments = str === '[object Arguments]';
	if (!isArguments) {
		isArguments = str !== '[object Array]'
			&& value !== null
			&& typeof value === 'object'
			&& typeof value.length === 'number'
			&& value.length >= 0
			&& toString.call(value.callee) === '[object Function]';
	}
	return isArguments;
};


},{}],63:[function(require,module,exports){
(function () {
	"use strict";

	// modified from https://github.com/kriskowal/es5-shim
	var has = Object.prototype.hasOwnProperty,
		toString = Object.prototype.toString,
		forEach = require('./foreach'),
		isArgs = require('./isArguments'),
		hasDontEnumBug = !({'toString': null}).propertyIsEnumerable('toString'),
		hasProtoEnumBug = (function () {}).propertyIsEnumerable('prototype'),
		dontEnums = [
			"toString",
			"toLocaleString",
			"valueOf",
			"hasOwnProperty",
			"isPrototypeOf",
			"propertyIsEnumerable",
			"constructor"
		],
		keysShim;

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object',
			isFunction = toString.call(object) === '[object Function]',
			isArguments = isArgs(object),
			theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError("Object.keys called on a non-object");
		}

		if (isArguments) {
			forEach(object, function (value) {
				theKeys.push(value);
			});
		} else {
			var name,
				skipProto = hasProtoEnumBug && isFunction;

			for (name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(name);
				}
			}
		}

		if (hasDontEnumBug) {
			var ctor = object.constructor,
				skipConstructor = ctor && ctor.prototype === object;

			forEach(dontEnums, function (dontEnum) {
				if (!(skipConstructor && dontEnum === 'constructor') && has.call(object, dontEnum)) {
					theKeys.push(dontEnum);
				}
			});
		}
		return theKeys;
	};

	module.exports = keysShim;
}());


},{"./foreach":60,"./isArguments":62}],64:[function(require,module,exports){
/* Copyright (c) 2012-2014 LevelUP contributors
 * See list at <https://github.com/rvagg/node-levelup#contributing>
 * MIT License
 * <https://github.com/rvagg/node-levelup/blob/master/LICENSE.md>
 */

var util          = require('./util')
  , WriteError    = require('./errors').WriteError

  , getOptions    = util.getOptions
  , dispatchError = util.dispatchError

function Batch (levelup) {
  this._levelup = levelup
  this.batch = levelup.db.batch()
  this.ops = []
}

Batch.prototype.put = function (key_, value_, options) {
  options = getOptions(this._levelup, options)

  var key   = util.encodeKey(key_, options)
    , value = util.encodeValue(value_, options)

  try {
    this.batch.put(key, value)
  } catch (e) {
    throw new WriteError(e)
  }
  this.ops.push({ type : 'put', key : key, value : value })

  return this
}

Batch.prototype.del = function (key_, options) {
  options = getOptions(this._levelup, options)

  var key = util.encodeKey(key_, options)

  try {
    this.batch.del(key)
  } catch (err) {
    throw new WriteError(err)
  }
  this.ops.push({ type : 'del', key : key })

  return this
}

Batch.prototype.clear = function () {
  try {
    this.batch.clear()
  } catch (err) {
    throw new WriteError(err)
  }

  this.ops = []
  return this
}

Batch.prototype.write = function (callback) {
  var levelup = this._levelup
    , ops     = this.ops

  try {
    this.batch.write(function (err) {
      if (err)
        return dispatchError(levelup, new WriteError(err), callback)
      levelup.emit('batch', ops)
      if (callback)
        callback()
    })
  } catch (err) {
    throw new WriteError(err)
  }
}

module.exports = Batch

},{"./errors":65,"./util":68}],65:[function(require,module,exports){
/* Copyright (c) 2012-2014 LevelUP contributors
 * See list at <https://github.com/rvagg/node-levelup#contributing>
 * MIT License
 * <https://github.com/rvagg/node-levelup/blob/master/LICENSE.md>
 */

var createError   = require('errno').create
  , LevelUPError  = createError('LevelUPError')
  , NotFoundError = createError('NotFoundError', LevelUPError)

NotFoundError.prototype.notFound = true
NotFoundError.prototype.status   = 404

module.exports = {
    LevelUPError        : LevelUPError
  , InitializationError : createError('InitializationError', LevelUPError)
  , OpenError           : createError('OpenError', LevelUPError)
  , ReadError           : createError('ReadError', LevelUPError)
  , WriteError          : createError('WriteError', LevelUPError)
  , NotFoundError       : NotFoundError
  , EncodingError       : createError('EncodingError', LevelUPError)
}

},{"errno":76}],66:[function(require,module,exports){
(function (process){
/* Copyright (c) 2012-2014 LevelUP contributors
 * See list at <https://github.com/rvagg/node-levelup#contributing>
 * MIT License
 * <https://github.com/rvagg/node-levelup/blob/master/LICENSE.md>
 */

var EventEmitter   = require('events').EventEmitter
  , inherits       = require('util').inherits
  , extend         = require('xtend')
  , prr            = require('prr')
  , DeferredLevelDOWN = require('deferred-leveldown')

  , WriteError     = require('./errors').WriteError
  , ReadError      = require('./errors').ReadError
  , NotFoundError  = require('./errors').NotFoundError
  , OpenError      = require('./errors').OpenError
  , EncodingError  = require('./errors').EncodingError
  , InitializationError = require('./errors').InitializationError

  , ReadStream     = require('./read-stream')
  , WriteStream    = require('./write-stream')
  , util           = require('./util')
  , Batch          = require('./batch')

  , getOptions     = util.getOptions
  , defaultOptions = util.defaultOptions
  , getLevelDOWN   = util.getLevelDOWN
  , dispatchError  = util.dispatchError

function getCallback (options, callback) {
  return typeof options == 'function' ? options : callback
}

// Possible LevelUP#_status values:
//  - 'new'     - newly created, not opened or closed
//  - 'opening' - waiting for the database to be opened, post open()
//  - 'open'    - successfully opened the database, available for use
//  - 'closing' - waiting for the database to be closed, post close()
//  - 'closed'  - database has been successfully closed, should not be
//                 used except for another open() operation

function LevelUP (location, options, callback) {
  if (!(this instanceof LevelUP))
    return new LevelUP(location, options, callback)

  var error

  EventEmitter.call(this)
  this.setMaxListeners(Infinity)

  if (typeof location == 'function') {
    options = typeof options == 'object' ? options : {}
    options.db = location
    location = null
  } else if (typeof location == 'object' && typeof location.db == 'function') {
    options = location
    location = null
  }

  if (typeof options == 'function') {
    callback = options
    options  = {}
  }

  if ((!options || typeof options.db != 'function') && typeof location != 'string') {
    error = new InitializationError(
        'Must provide a location for the database')
    if (callback) {
      return process.nextTick(function () {
        callback(error)
      })
    }
    throw error
  }

  options      = getOptions(this, options)
  this.options = extend(defaultOptions, options)
  this._status = 'new'
  // set this.location as enumerable but not configurable or writable
  prr(this, 'location', location, 'e')

  this.open(callback)
}

inherits(LevelUP, EventEmitter)

LevelUP.prototype.open = function (callback) {
  var self = this
    , dbFactory
    , db

  if (this.isOpen()) {
    if (callback)
      process.nextTick(function () { callback(null, self) })
    return this
  }

  if (this._isOpening()) {
    return callback && this.once(
        'open'
      , function () { callback(null, self) }
    )
  }

  this.emit('opening')

  this._status = 'opening'
  this.db      = new DeferredLevelDOWN(this.location)
  dbFactory    = this.options.db || getLevelDOWN()
  db           = dbFactory(this.location)

  db.open(this.options, function (err) {
    if (err) {
      return dispatchError(self, new OpenError(err), callback)
    } else {
      self.db.setDb(db)
      self.db = db
      self._status = 'open'
      if (callback)
        callback(null, self)
      self.emit('open')
      self.emit('ready')
    }
  })
}

LevelUP.prototype.close = function (callback) {
  var self = this

  if (this.isOpen()) {
    this._status = 'closing'
    this.db.close(function () {
      self._status = 'closed'
      self.emit('closed')
      if (callback)
        callback.apply(null, arguments)
    })
    this.emit('closing')
    this.db = null
  } else if (this._status == 'closed' && callback) {
    return process.nextTick(callback)
  } else if (this._status == 'closing' && callback) {
    this.once('closed', callback)
  } else if (this._isOpening()) {
    this.once('open', function () {
      self.close(callback)
    })
  }
}

LevelUP.prototype.isOpen = function () {
  return this._status == 'open'
}

LevelUP.prototype._isOpening = function () {
  return this._status == 'opening'
}

LevelUP.prototype.isClosed = function () {
  return (/^clos/).test(this._status)
}

LevelUP.prototype.get = function (key_, options, callback) {
  var self = this
    , key

  callback = getCallback(options, callback)

  if (typeof callback != 'function') {
    return dispatchError(
        this
      , new ReadError('get() requires key and callback arguments')
    )
  }

  if (!this._isOpening() && !this.isOpen()) {
    return dispatchError(
        this
      , new ReadError('Database is not open')
      , callback
    )
  }

  options = util.getOptions(this, options)
  key = util.encodeKey(key_, options)

  options.asBuffer = util.isValueAsBuffer(options)

  this.db.get(key, options, function (err, value) {
    if (err) {
      if ((/notfound/i).test(err)) {
        err = new NotFoundError(
            'Key not found in database [' + key_ + ']', err)
      } else {
        err = new ReadError(err)
      }
      return dispatchError(self, err, callback)
    }
    if (callback) {
      try {
        value = util.decodeValue(value, options)
      } catch (e) {
        return callback(new EncodingError(e))
      }
      callback(null, value)
    }
  })
}

LevelUP.prototype.put = function (key_, value_, options, callback) {
  var self = this
    , key
    , value

  callback = getCallback(options, callback)

  if (key_ === null || key_ === undefined
        || value_ === null || value_ === undefined) {
    return dispatchError(
        this
       , new WriteError('put() requires key and value arguments')
       , callback
    )
  }

  if (!this._isOpening() && !this.isOpen()) {
    return dispatchError(
        this
      , new WriteError('Database is not open')
      , callback
    )
  }

  options = getOptions(this, options)
  key     = util.encodeKey(key_, options)
  value   = util.encodeValue(value_, options)

  this.db.put(key, value, options, function (err) {
    if (err) {
      return dispatchError(self, new WriteError(err), callback)
    } else {
      self.emit('put', key_, value_)
      if (callback)
        callback()
    }
  })
}

LevelUP.prototype.del = function (key_, options, callback) {
  var self = this
    , key

  callback = getCallback(options, callback)

  if (key_ === null || key_ === undefined) {
    return dispatchError(
        this
      , new WriteError('del() requires a key argument')
      , callback
    )
  }

  if (!this._isOpening() && !this.isOpen()) {
    return dispatchError(
        this
      , new WriteError('Database is not open')
      , callback
    )
  }

  options = getOptions(this, options)
  key     = util.encodeKey(key_, options)

  this.db.del(key, options, function (err) {
    if (err) {
      return dispatchError(self, new WriteError(err), callback)
    } else {
      self.emit('del', key_)
      if (callback)
        callback()
    }
  })
}

LevelUP.prototype.batch = function (arr_, options, callback) {
  var self = this
    , keyEnc
    , valueEnc
    , arr

  if (!arguments.length)
    return new Batch(this)

  callback = getCallback(options, callback)

  if (!Array.isArray(arr_)) {
    return dispatchError(
        this
      , new WriteError('batch() requires an array argument')
      , callback
    )
  }

  if (!this._isOpening() && !this.isOpen()) {
    return dispatchError(
        this
      , new WriteError('Database is not open')
      , callback
    )
  }

  options  = getOptions(this, options)
  keyEnc   = options.keyEncoding
  valueEnc = options.valueEncoding

  arr = arr_.map(function (e) {
    if (e.type === undefined || e.key === undefined)
      return {}

    // inherit encoding
    var kEnc = e.keyEncoding || keyEnc
      , vEnc = e.valueEncoding || e.encoding || valueEnc
      , o

    // If we're not dealing with plain utf8 strings or plain
    // Buffers then we have to do some work on the array to
    // encode the keys and/or values. This includes JSON types.

    if (kEnc != 'utf8' && kEnc != 'binary'
        || vEnc != 'utf8' && vEnc != 'binary') {
      o = {
          type: e.type
        , key: util.encodeKey(e.key, options, e)
      }

      if (e.value !== undefined)
        o.value = util.encodeValue(e.value, options, e)

      return o
    } else {
      return e
    }
  })

  this.db.batch(arr, options, function (err) {
    if (err) {
      return dispatchError(self, new WriteError(err), callback)
    } else {
      self.emit('batch', arr_)
      if (callback)
        callback()
    }
  })
}

// DEPRECATED: prefer accessing LevelDOWN for this: db.db.approximateSize()
LevelUP.prototype.approximateSize = function (start_, end_, callback) {
  var self = this
    , start
    , end

  if (start_ === null || start_ === undefined
        || end_ === null || end_ === undefined
        || typeof callback != 'function') {
    return dispatchError(
        this
      , new ReadError('approximateSize() requires start, end and callback arguments')
      , callback
    )
  }

  start = util.encodeKey(start_, this.options)
  end   = util.encodeKey(end_, this.options)

  if (!this._isOpening() && !this.isOpen()) {
    return dispatchError(
        this
      , new WriteError('Database is not open')
      , callback
    )
  }

  this.db.approximateSize(start, end, function (err, size) {
    if (err) {
      return dispatchError(self, new OpenError(err), callback)
    } else if (callback) {
      callback(null, size)
    }
  })
}

LevelUP.prototype.readStream =
LevelUP.prototype.createReadStream = function (options) {
  var self = this
  options = extend(this.options, options)
  return new ReadStream(
      options
    , this
    , function (options) {
        return self.db.iterator(options)
      }
  )
}

LevelUP.prototype.keyStream =
LevelUP.prototype.createKeyStream = function (options) {
  return this.createReadStream(extend(options, { keys: true, values: false }))
}

LevelUP.prototype.valueStream =
LevelUP.prototype.createValueStream = function (options) {
  return this.createReadStream(extend(options, { keys: false, values: true }))
}

LevelUP.prototype.writeStream =
LevelUP.prototype.createWriteStream = function (options) {
  return new WriteStream(extend(options), this)
}

LevelUP.prototype.toString = function () {
  return 'LevelUP'
}

function utilStatic (name) {
  return function (location, callback) {
    getLevelDOWN()[name](location, callback || function () {})
  }
}

module.exports         = LevelUP
module.exports.copy    = util.copy
// DEPRECATED: prefer accessing LevelDOWN for this: require('leveldown').destroy()
module.exports.destroy = utilStatic('destroy')
// DEPRECATED: prefer accessing LevelDOWN for this: require('leveldown').repair()
module.exports.repair  = utilStatic('repair')

}).call(this,require('_process'))
},{"./batch":64,"./errors":65,"./read-stream":67,"./util":68,"./write-stream":69,"_process":106,"deferred-leveldown":71,"events":94,"prr":77,"util":133,"xtend":84}],67:[function(require,module,exports){
/* Copyright (c) 2012-2014 LevelUP contributors
 * See list at <https://github.com/rvagg/node-levelup#contributing>
 * MIT License <https://github.com/rvagg/node-levelup/blob/master/LICENSE.md>
 */

// NOTE: we are fixed to readable-stream@1.0.x for now
// for pure Streams2 across Node versions
var Readable      = require('readable-stream').Readable
  , inherits      = require('util').inherits
  , extend        = require('xtend')
  , EncodingError = require('./errors').EncodingError
  , util          = require('./util')

  , defaultOptions = { keys: true, values: true }

  , makeKeyValueData = function (key, value) {
      return {
          key: util.decodeKey(key, this._options)
        , value: util.decodeValue(value, this._options)
      }
    }
  , makeKeyData = function (key) {
      return util.decodeKey(key, this._options)
    }
  , makeValueData = function (_, value) {
      return util.decodeValue(value, this._options)
    }
  , makeNoData = function () { return null }

function ReadStream (options, db, iteratorFactory) {
  if (!(this instanceof ReadStream))
    return new ReadStream(options, db, iteratorFactory)

  Readable.call(this, { objectMode: true, highWaterMark: options.highWaterMark })

  // purely to keep `db` around until we're done so it's not GCed if the user doesn't keep a ref
  this._db = db

  options = this._options = extend(defaultOptions, options)

  this._keyEncoding   = options.keyEncoding   || options.encoding
  this._valueEncoding = options.valueEncoding || options.encoding

  if (typeof this._options.start != 'undefined')
    this._options.start = util.encodeKey(this._options.start, this._options)
  if (typeof this._options.end != 'undefined')
    this._options.end = util.encodeKey(this._options.end, this._options)
  if (typeof this._options.limit != 'number')
    this._options.limit = -1

  this._options.keyAsBuffer   = util.isKeyAsBuffer(this._options)

  this._options.valueAsBuffer = util.isValueAsBuffer(this._options)

  this._makeData = this._options.keys && this._options.values
    ? makeKeyValueData : this._options.keys
      ? makeKeyData : this._options.values
        ? makeValueData : makeNoData

  var self = this
  if (!this._db.isOpen()) {
    this._db.once('ready', function () {
      if (!self._destroyed) {
        self._iterator = iteratorFactory(self._options)
      }
    })
  } else
    this._iterator = iteratorFactory(this._options)
}

inherits(ReadStream, Readable)

ReadStream.prototype._read = function read () {
  var self = this
  if (!self._db.isOpen()) {
    return self._db.once('ready', function () { read.call(self) })
  }
  if (self._destroyed)
    return
 
  self._iterator.next(function(err, key, value) {
    if (err || (key === undefined && value === undefined)) {
      if (!err && !self._destroyed)
        self.push(null)
      return self._cleanup(err)
    }

    try {
      value = self._makeData(key, value)
    } catch (e) {
      return self._cleanup(new EncodingError(e))
    }
    if (!self._destroyed)
      self.push(value)
  })
}

ReadStream.prototype._cleanup = function (err) {
  if (this._destroyed)
    return

  this._destroyed = true

  var self = this
  if (err)
    self.emit('error', err)

  if (self._iterator) {
    self._iterator.end(function () {
      self._iterator = null
      self.emit('close')
    })
  } else {
    self.emit('close')
  }
}

ReadStream.prototype.destroy = function () {
  this._cleanup()
}

ReadStream.prototype.toString = function () {
  return 'LevelUP.ReadStream'
}

module.exports = ReadStream

},{"./errors":65,"./util":68,"readable-stream":83,"util":133,"xtend":84}],68:[function(require,module,exports){
(function (process,Buffer){
/* Copyright (c) 2012-2014 LevelUP contributors
 * See list at <https://github.com/rvagg/node-levelup#contributing>
 * MIT License
 * <https://github.com/rvagg/node-levelup/blob/master/LICENSE.md>
 */

var extend        = require('xtend')
  , LevelUPError  = require('./errors').LevelUPError

  , encodingNames = [
        'hex'
      , 'utf8'
      , 'utf-8'
      , 'ascii'
      , 'binary'
      , 'base64'
      , 'ucs2'
      , 'ucs-2'
      , 'utf16le'
      , 'utf-16le'
    ]

  , defaultOptions = {
        createIfMissing : true
      , errorIfExists   : false
      , keyEncoding     : 'utf8'
      , valueEncoding   : 'utf8'
      , compression     : true
    }

  , leveldown

  , encodings = (function () {
      function isBinary (data) {
        return data === undefined || data === null || Buffer.isBuffer(data)
      }

      var encodings = {}
      encodings.utf8 = encodings['utf-8'] = {
          encode : function (data) {
            return isBinary(data) ? data : String(data)
          }
        , decode : function (data) {
          return data
          }
        , buffer : false
        , type   : 'utf8'
      }
      encodings.json = {
          encode : JSON.stringify
        , decode : JSON.parse
        , buffer : false
        , type   : 'json'
      }
      encodingNames.forEach(function (type) {
        if (encodings[type])
          return
        encodings[type] = {
            encode : function (data) {
              return isBinary(data) ? data : new Buffer(data, type)
            }
          , decode : function (buffer) {
              return process.browser ? buffer.toString(type) : buffer;
            }
          , buffer : true
          , type   : type // useful for debugging purposes
        }
      })
      return encodings
    })()

  , encodingOpts = (function () {
      var eo = {}
      encodingNames.forEach(function (e) {
        eo[e] = { valueEncoding : e }
      })
      return eo
    }())

function copy (srcdb, dstdb, callback) {
  srcdb.readStream()
    .pipe(dstdb.writeStream())
    .on('close', callback ? callback : function () {})
    .on('error', callback ? callback : function (err) { throw err })
}

function getOptions (levelup, options) {
  var s = typeof options == 'string' // just an encoding
  if (!s && options && options.encoding && !options.valueEncoding)
    options.valueEncoding = options.encoding
  return extend(
      (levelup && levelup.options) || {}
    , s ? encodingOpts[options] || encodingOpts[defaultOptions.valueEncoding]
        : options
  )
}

function getLevelDOWN () {
  if (leveldown)
    return leveldown

  var requiredVersion       = require('../package.json').devDependencies.leveldown
    , missingLevelDOWNError = 'Could not locate LevelDOWN, try `npm install leveldown`'
    , leveldownVersion

  try {
    leveldownVersion = require('leveldown/package').version
  } catch (e) {
    throw new LevelUPError(missingLevelDOWNError)
  }

  if (!require('semver').satisfies(leveldownVersion, requiredVersion)) {
    throw new LevelUPError(
        'Installed version of LevelDOWN ('
      + leveldownVersion
      + ') does not match required version ('
      + requiredVersion
      + ')'
    )
  }

  try {
    return leveldown = require('leveldown')
  } catch (e) {
    throw new LevelUPError(missingLevelDOWNError)
  }
}

function dispatchError (levelup, error, callback) {
  return typeof callback == 'function'
    ? callback(error)
    : levelup.emit('error', error)
}

function getKeyEncoder (options, op) {
  var type = ((op && op.keyEncoding) || options.keyEncoding) || 'utf8'
  return encodings[type] || type
}

function getValueEncoder (options, op) {
  var type = (((op && (op.valueEncoding || op.encoding))
      || options.valueEncoding || options.encoding)) || 'utf8'
  return encodings[type] || type
}

function encodeKey (key, options, op) {
  return getKeyEncoder(options, op).encode(key)
}

function encodeValue (value, options, op) {
  return getValueEncoder(options, op).encode(value)
}

function decodeKey (key, options) {
  return getKeyEncoder(options).decode(key)
}

function decodeValue (value, options) {
  return getValueEncoder(options).decode(value)
}

function isValueAsBuffer (options, op) {
  return getValueEncoder(options, op).buffer
}

function isKeyAsBuffer (options, op) {
  return getKeyEncoder(options, op).buffer
}

module.exports = {
    defaultOptions  : defaultOptions
  , copy            : copy
  , getOptions      : getOptions
  , getLevelDOWN    : getLevelDOWN
  , dispatchError   : dispatchError
  , encodeKey       : encodeKey
  , encodeValue     : encodeValue
  , isValueAsBuffer : isValueAsBuffer
  , isKeyAsBuffer   : isKeyAsBuffer
  , decodeValue     : decodeValue
  , decodeKey       : decodeKey
}

}).call(this,require('_process'),require("buffer").Buffer)
},{"../package.json":85,"./errors":65,"_process":106,"buffer":87,"leveldown":3,"leveldown/package":3,"semver":3,"xtend":84}],69:[function(require,module,exports){
(function (process,global){
/* Copyright (c) 2012-2014 LevelUP contributors
 * See list at <https://github.com/rvagg/node-levelup#contributing>
 * MIT License
 * <https://github.com/rvagg/node-levelup/blob/master/LICENSE.md>
 */

var Stream       = require('stream').Stream
  , inherits     = require('util').inherits
  , extend       = require('xtend')
  , bl           = require('bl')

  , setImmediate = global.setImmediate || process.nextTick

  , getOptions   = require('./util').getOptions

  , defaultOptions = { type: 'put' }

function WriteStream (options, db) {
  if (!(this instanceof WriteStream))
    return new WriteStream(options, db)

  Stream.call(this)
  this._options = extend(defaultOptions, getOptions(db, options))
  this._db      = db
  this._buffer  = []
  this._status  = 'init'
  this._end     = false
  this.writable = true
  this.readable = false

  var self = this
    , ready = function () {
        if (!self.writable)
          return
        self._status = 'ready'
        self.emit('ready')
        self._process()
      }

  if (db.isOpen())
    setImmediate(ready)
  else
    db.once('ready', ready)
}

inherits(WriteStream, Stream)

WriteStream.prototype.write = function (data) {
  if (!this.writable)
    return false
  this._buffer.push(data)
  if (this._status != 'init')
    this._processDelayed()
  if (this._options.maxBufferLength &&
      this._buffer.length > this._options.maxBufferLength) {
    this._writeBlock = true
    return false
  }
  return true
}

WriteStream.prototype.end = function (data) {
  var self = this
  if (data)
    this.write(data)
  setImmediate(function () {
    self._end = true
    self._process()
  })
}

WriteStream.prototype.destroy = function () {
  this.writable = false
  this.end()
}

WriteStream.prototype.destroySoon = function () {
  this.end()
}

WriteStream.prototype.add = function (entry) {
  if (!entry.props)
    return
  if (entry.props.Directory)
    entry.pipe(this._db.writeStream(this._options))
  else if (entry.props.File || entry.File || entry.type == 'File')
    this._write(entry)
  return true
}

WriteStream.prototype._processDelayed = function () {
  var self = this
  setImmediate(function () {
    self._process()
  })
}

WriteStream.prototype._process = function () {
  var buffer
    , self = this

    , cb = function (err) {
        if (!self.writable)
          return
        if (self._status != 'closed')
          self._status = 'ready'
        if (err) {
          self.writable = false
          return self.emit('error', err)
        }
        self._process()
      }

  if (self._status != 'ready' && self.writable) {
    if (self._buffer.length && self._status != 'closed')
      self._processDelayed()
    return
  }

  if (self._buffer.length && self.writable) {
    self._status = 'writing'
    buffer       = self._buffer
    self._buffer = []

    self._db.batch(buffer.map(function (d) {
      return {
          type          : d.type || self._options.type
        , key           : d.key
        , value         : d.value
        , keyEncoding   : d.keyEncoding || self._options.keyEncoding
        , valueEncoding : d.valueEncoding
            || d.encoding
            || self._options.valueEncoding
      }
    }), cb)

    if (self._writeBlock) {
      self._writeBlock = false
      self.emit('drain')
    }

    // don't allow close until callback has returned
    return
  }

  if (self._end && self._status != 'closed') {
    self._status  = 'closed'
    self.writable = false
    self.emit('close')
  }
}

WriteStream.prototype._write = function (entry) {
  var key = entry.path || entry.props.path
    , self = this

  if (!key)
    return

  entry.pipe(bl(function (err, data) {
    if (err) {
      self.writable = false
      return self.emit('error', err)
    }

    if (self._options.fstreamRoot &&
        key.indexOf(self._options.fstreamRoot) > -1)
      key = key.substr(self._options.fstreamRoot.length + 1)

    self.write({ key: key, value: data.slice(0) })
  }))
}

WriteStream.prototype.toString = function () {
  return 'LevelUP.WriteStream'
}

module.exports = WriteStream

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./util":68,"_process":106,"bl":70,"stream":118,"util":133,"xtend":84}],70:[function(require,module,exports){
(function (Buffer){
var DuplexStream = require('readable-stream').Duplex
  , util         = require('util')

function BufferList (callback) {
  if (!(this instanceof BufferList))
    return new BufferList(callback)

  this._bufs  = []
  this.length = 0

  if (typeof callback == 'function') {
    this._callback = callback

    var piper = function (err) {
      if (this._callback) {
        this._callback(err)
        this._callback = null
      }
    }.bind(this)

    this.on('pipe', function (src) {
      src.on('error', piper)
    })
    this.on('unpipe', function (src) {
      src.removeListener('error', piper)
    })
  }
  else if (Buffer.isBuffer(callback))
    this.append(callback)
  else if (Array.isArray(callback)) {
    callback.forEach(function (b) {
      Buffer.isBuffer(b) && this.append(b)
    }.bind(this))
  }

  DuplexStream.call(this)
}

util.inherits(BufferList, DuplexStream)

BufferList.prototype._offset = function (offset) {
  var tot = 0, i = 0, _t
  for (; i < this._bufs.length; i++) {
    _t = tot + this._bufs[i].length
    if (offset < _t)
      return [ i, offset - tot ]
    tot = _t
  }
}

BufferList.prototype.append = function (buf) {
  this._bufs.push(Buffer.isBuffer(buf) ? buf : new Buffer(buf))
  this.length += buf.length
  return this
}

BufferList.prototype._write = function (buf, encoding, callback) {
  this.append(buf)
  if (callback)
    callback()
}

BufferList.prototype._read = function (size) {
  if (!this.length)
    return this.push(null)
  size = Math.min(size, this.length)
  this.push(this.slice(0, size))
  this.consume(size)
}

BufferList.prototype.end = function (chunk) {
  DuplexStream.prototype.end.call(this, chunk)

  if (this._callback) {
    this._callback(null, this.slice())
    this._callback = null
  }
}

BufferList.prototype.get = function (index) {
  return this.slice(index, index + 1)[0]
}

BufferList.prototype.slice = function (start, end) {
  return this.copy(null, 0, start, end)
}

BufferList.prototype.copy = function (dst, dstStart, srcStart, srcEnd) {
  if (typeof srcStart != 'number' || srcStart < 0)
    srcStart = 0
  if (typeof srcEnd != 'number' || srcEnd > this.length)
    srcEnd = this.length
  if (srcStart >= this.length)
    return dst || new Buffer(0)
  if (srcEnd <= 0)
    return dst || new Buffer(0)

  var copy   = !!dst
    , off    = this._offset(srcStart)
    , len    = srcEnd - srcStart
    , bytes  = len
    , bufoff = (copy && dstStart) || 0
    , start  = off[1]
    , l
    , i

  // copy/slice everything
  if (srcStart === 0 && srcEnd == this.length) {
    if (!copy) // slice, just return a full concat
      return Buffer.concat(this._bufs)

    // copy, need to copy individual buffers
    for (i = 0; i < this._bufs.length; i++) {
      this._bufs[i].copy(dst, bufoff)
      bufoff += this._bufs[i].length
    }

    return dst
  }

  // easy, cheap case where it's a subset of one of the buffers
  if (bytes <= this._bufs[off[0]].length - start) {
    return copy
      ? this._bufs[off[0]].copy(dst, dstStart, start, start + bytes)
      : this._bufs[off[0]].slice(start, start + bytes)
  }

  if (!copy) // a slice, we need something to copy in to
    dst = new Buffer(len)

  for (i = off[0]; i < this._bufs.length; i++) {
    l = this._bufs[i].length - start

    if (bytes > l) {
      this._bufs[i].copy(dst, bufoff, start)
    } else {
      this._bufs[i].copy(dst, bufoff, start, start + bytes)
      break
    }

    bufoff += l
    bytes -= l

    if (start)
      start = 0
  }

  return dst
}

BufferList.prototype.toString = function (encoding, start, end) {
  return this.slice(start, end).toString(encoding)
}

BufferList.prototype.consume = function (bytes) {
  while (this._bufs.length) {
    if (bytes > this._bufs[0].length) {
      bytes -= this._bufs[0].length
      this.length -= this._bufs[0].length
      this._bufs.shift()
    } else {
      this._bufs[0] = this._bufs[0].slice(bytes)
      this.length -= bytes
      break
    }
  }
  return this
}

BufferList.prototype.duplicate = function () {
  var i = 0
    , copy = new BufferList()

  for (; i < this._bufs.length; i++)
    copy.append(this._bufs[i])

  return copy
}

BufferList.prototype.destroy = function () {
  this._bufs.length = 0;
  this.length = 0;
  this.push(null);
}

;(function () {
  var methods = {
      'readDoubleBE' : 8
    , 'readDoubleLE' : 8
    , 'readFloatBE'  : 4
    , 'readFloatLE'  : 4
    , 'readInt32BE'  : 4
    , 'readInt32LE'  : 4
    , 'readUInt32BE' : 4
    , 'readUInt32LE' : 4
    , 'readInt16BE'  : 2
    , 'readInt16LE'  : 2
    , 'readUInt16BE' : 2
    , 'readUInt16LE' : 2
    , 'readInt8'     : 1
    , 'readUInt8'    : 1
  }

  for (var m in methods) {
    (function (m) {
      BufferList.prototype[m] = function (offset) {
        return this.slice(offset, offset + methods[m])[m](0)
      }
    }(m))
  }
}())

module.exports = BufferList

}).call(this,require("buffer").Buffer)
},{"buffer":87,"readable-stream":83,"util":133}],71:[function(require,module,exports){
(function (Buffer,process){
var util              = require('util')
  , AbstractLevelDOWN = require('abstract-leveldown').AbstractLevelDOWN

function DeferredLevelDOWN (location) {
  AbstractLevelDOWN.call(this, typeof location == 'string' ? location : '') // optional location, who cares?
  this._db         = undefined
  this._operations = []
}

util.inherits(DeferredLevelDOWN, AbstractLevelDOWN)

// called by LevelUP when we have a real DB to take its place
DeferredLevelDOWN.prototype.setDb = function (db) {
  this._db = db
  this._operations.forEach(function (op) {
    db[op.method].apply(db, op.args)
  })
}

DeferredLevelDOWN.prototype._open = function (options, callback) {
  return process.nextTick(callback)
}

// queue a new deferred operation
DeferredLevelDOWN.prototype._operation = function (method, args) {
  if (this._db)
    return this._db[method].apply(this._db, args)
  this._operations.push({ method: method, args: args })
}

// deferrables
'put get del batch approximateSize'.split(' ').forEach(function (m) {
  DeferredLevelDOWN.prototype['_' + m] = function () {
    this._operation(m, arguments)
  }
})

DeferredLevelDOWN.prototype._isBuffer = function (obj) {
  return Buffer.isBuffer(obj)
}

// don't need to implement this as LevelUP's ReadStream checks for 'ready' state
DeferredLevelDOWN.prototype._iterator = function () {
  throw new TypeError('not implemented')
}

module.exports = DeferredLevelDOWN

}).call(this,{"isBuffer":require("../../../../../is-buffer/index.js")},require('_process'))
},{"../../../../../is-buffer/index.js":97,"_process":106,"abstract-leveldown":74,"util":133}],72:[function(require,module,exports){
arguments[4][50][0].apply(exports,arguments)
},{"_process":106,"dup":50}],73:[function(require,module,exports){
arguments[4][51][0].apply(exports,arguments)
},{"_process":106,"dup":51}],74:[function(require,module,exports){
(function (Buffer,process){
/* Copyright (c) 2013 Rod Vagg, MIT License */

var xtend                = require('xtend')
  , AbstractIterator     = require('./abstract-iterator')
  , AbstractChainedBatch = require('./abstract-chained-batch')

function AbstractLevelDOWN (location) {
  if (!arguments.length || location === undefined)
    throw new Error('constructor requires at least a location argument')

  if (typeof location != 'string')
    throw new Error('constructor requires a location string argument')

  this.location = location
}

AbstractLevelDOWN.prototype.open = function (options, callback) {
  if (typeof options == 'function')
    callback = options

  if (typeof callback != 'function')
    throw new Error('open() requires a callback argument')

  if (typeof options != 'object')
    options = {}

  if (typeof this._open == 'function')
    return this._open(options, callback)

  process.nextTick(callback)
}

AbstractLevelDOWN.prototype.close = function (callback) {
  if (typeof callback != 'function')
    throw new Error('close() requires a callback argument')

  if (typeof this._close == 'function')
    return this._close(callback)

  process.nextTick(callback)
}

AbstractLevelDOWN.prototype.get = function (key, options, callback) {
  var err

  if (typeof options == 'function')
    callback = options

  if (typeof callback != 'function')
    throw new Error('get() requires a callback argument')

  if (err = this._checkKeyValue(key, 'key', this._isBuffer))
    return callback(err)

  if (!this._isBuffer(key))
    key = String(key)

  if (typeof options != 'object')
    options = {}

  if (typeof this._get == 'function')
    return this._get(key, options, callback)

  process.nextTick(function () { callback(new Error('NotFound')) })
}

AbstractLevelDOWN.prototype.put = function (key, value, options, callback) {
  var err

  if (typeof options == 'function')
    callback = options

  if (typeof callback != 'function')
    throw new Error('put() requires a callback argument')

  if (err = this._checkKeyValue(key, 'key', this._isBuffer))
    return callback(err)

  if (err = this._checkKeyValue(value, 'value', this._isBuffer))
    return callback(err)

  if (!this._isBuffer(key))
    key = String(key)

  // coerce value to string in node, don't touch it in browser
  // (indexeddb can store any JS type)
  if (!this._isBuffer(value) && !process.browser)
    value = String(value)

  if (typeof options != 'object')
    options = {}

  if (typeof this._put == 'function')
    return this._put(key, value, options, callback)

  process.nextTick(callback)
}

AbstractLevelDOWN.prototype.del = function (key, options, callback) {
  var err

  if (typeof options == 'function')
    callback = options

  if (typeof callback != 'function')
    throw new Error('del() requires a callback argument')

  if (err = this._checkKeyValue(key, 'key', this._isBuffer))
    return callback(err)

  if (!this._isBuffer(key))
    key = String(key)

  if (typeof options != 'object')
    options = {}

  if (typeof this._del == 'function')
    return this._del(key, options, callback)

  process.nextTick(callback)
}

AbstractLevelDOWN.prototype.batch = function (array, options, callback) {
  if (!arguments.length)
    return this._chainedBatch()

  if (typeof options == 'function')
    callback = options

  if (typeof callback != 'function')
    throw new Error('batch(array) requires a callback argument')

  if (!Array.isArray(array))
    return callback(new Error('batch(array) requires an array argument'))

  if (typeof options != 'object')
    options = {}

  var i = 0
    , l = array.length
    , e
    , err

  for (; i < l; i++) {
    e = array[i]
    if (typeof e != 'object')
      continue

    if (err = this._checkKeyValue(e.type, 'type', this._isBuffer))
      return callback(err)

    if (err = this._checkKeyValue(e.key, 'key', this._isBuffer))
      return callback(err)

    if (e.type == 'put') {
      if (err = this._checkKeyValue(e.value, 'value', this._isBuffer))
        return callback(err)
    }
  }

  if (typeof this._batch == 'function')
    return this._batch(array, options, callback)

  process.nextTick(callback)
}

//TODO: remove from here, not a necessary primitive
AbstractLevelDOWN.prototype.approximateSize = function (start, end, callback) {
  if (   start == null
      || end == null
      || typeof start == 'function'
      || typeof end == 'function') {
    throw new Error('approximateSize() requires valid `start`, `end` and `callback` arguments')
  }

  if (typeof callback != 'function')
    throw new Error('approximateSize() requires a callback argument')

  if (!this._isBuffer(start))
    start = String(start)

  if (!this._isBuffer(end))
    end = String(end)

  if (typeof this._approximateSize == 'function')
    return this._approximateSize(start, end, callback)

  process.nextTick(function () {
    callback(null, 0)
  })
}

AbstractLevelDOWN.prototype._setupIteratorOptions = function (options) {
  var self = this

  options = xtend(options)

  ;[ 'start', 'end', 'gt', 'gte', 'lt', 'lte' ].forEach(function (o) {
    if (options[o] && self._isBuffer(options[o]) && options[o].length === 0)
      delete options[o]
  })

  options.reverse = !!options.reverse

  // fix `start` so it takes into account gt, gte, lt, lte as appropriate
  if (options.reverse && options.lt)
    options.start = options.lt
  if (options.reverse && options.lte)
    options.start = options.lte
  if (!options.reverse && options.gt)
    options.start = options.gt
  if (!options.reverse && options.gte)
    options.start = options.gte

  if ((options.reverse && options.lt && !options.lte)
    || (!options.reverse && options.gt && !options.gte))
    options.exclusiveStart = true // start should *not* include matching key

  return options
}

AbstractLevelDOWN.prototype.iterator = function (options) {
  if (typeof options != 'object')
    options = {}

  options = this._setupIteratorOptions(options)

  if (typeof this._iterator == 'function')
    return this._iterator(options)

  return new AbstractIterator(this)
}

AbstractLevelDOWN.prototype._chainedBatch = function () {
  return new AbstractChainedBatch(this)
}

AbstractLevelDOWN.prototype._isBuffer = function (obj) {
  return Buffer.isBuffer(obj)
}

AbstractLevelDOWN.prototype._checkKeyValue = function (obj, type) {

  if (obj === null || obj === undefined)
    return new Error(type + ' cannot be `null` or `undefined`')

  if (this._isBuffer(obj)) {
    if (obj.length === 0)
      return new Error(type + ' cannot be an empty Buffer')
  } else if (String(obj) === '')
    return new Error(type + ' cannot be an empty String')
}

module.exports.AbstractLevelDOWN    = AbstractLevelDOWN
module.exports.AbstractIterator     = AbstractIterator
module.exports.AbstractChainedBatch = AbstractChainedBatch

}).call(this,{"isBuffer":require("../../../../../../../is-buffer/index.js")},require('_process'))
},{"../../../../../../../is-buffer/index.js":97,"./abstract-chained-batch":72,"./abstract-iterator":73,"_process":106,"xtend":84}],75:[function(require,module,exports){
arguments[4][7][0].apply(exports,arguments)
},{"dup":7,"prr":77}],76:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"./custom":75,"dup":8}],77:[function(require,module,exports){
arguments[4][9][0].apply(exports,arguments)
},{"dup":9}],78:[function(require,module,exports){
arguments[4][12][0].apply(exports,arguments)
},{"./_stream_readable":80,"./_stream_writable":82,"_process":106,"core-util-is":90,"dup":12,"inherits":96}],79:[function(require,module,exports){
arguments[4][13][0].apply(exports,arguments)
},{"./_stream_transform":81,"core-util-is":90,"dup":13,"inherits":96}],80:[function(require,module,exports){
arguments[4][14][0].apply(exports,arguments)
},{"_process":106,"buffer":87,"core-util-is":90,"dup":14,"events":94,"inherits":96,"isarray":100,"stream":118,"string_decoder/":129}],81:[function(require,module,exports){
arguments[4][15][0].apply(exports,arguments)
},{"./_stream_duplex":78,"core-util-is":90,"dup":15,"inherits":96}],82:[function(require,module,exports){
arguments[4][16][0].apply(exports,arguments)
},{"./_stream_duplex":78,"_process":106,"buffer":87,"core-util-is":90,"dup":16,"inherits":96,"stream":118}],83:[function(require,module,exports){
arguments[4][17][0].apply(exports,arguments)
},{"./lib/_stream_duplex.js":78,"./lib/_stream_passthrough.js":79,"./lib/_stream_readable.js":80,"./lib/_stream_transform.js":81,"./lib/_stream_writable.js":82,"_process":106,"dup":17,"stream":118}],84:[function(require,module,exports){
arguments[4][53][0].apply(exports,arguments)
},{"dup":53}],85:[function(require,module,exports){
module.exports={
  "name": "levelup",
  "description": "Fast & simple storage - a Node.js-style LevelDB wrapper",
  "version": "0.18.6",
  "contributors": [
    {
      "name": "Rod Vagg",
      "email": "r@va.gg",
      "url": "https://github.com/rvagg"
    },
    {
      "name": "John Chesley",
      "email": "john@chesl.es",
      "url": "https://github.com/chesles/"
    },
    {
      "name": "Jake Verbaten",
      "email": "raynos2@gmail.com",
      "url": "https://github.com/raynos"
    },
    {
      "name": "Dominic Tarr",
      "email": "dominic.tarr@gmail.com",
      "url": "https://github.com/dominictarr"
    },
    {
      "name": "Max Ogden",
      "email": "max@maxogden.com",
      "url": "https://github.com/maxogden"
    },
    {
      "name": "Lars-Magnus Skog",
      "email": "lars.magnus.skog@gmail.com",
      "url": "https://github.com/ralphtheninja"
    },
    {
      "name": "David Björklund",
      "email": "david.bjorklund@gmail.com",
      "url": "https://github.com/kesla"
    },
    {
      "name": "Julian Gruber",
      "email": "julian@juliangruber.com",
      "url": "https://github.com/juliangruber"
    },
    {
      "name": "Paolo Fragomeni",
      "email": "paolo@async.ly",
      "url": "https://github.com/hij1nx"
    },
    {
      "name": "Anton Whalley",
      "email": "anton.whalley@nearform.com",
      "url": "https://github.com/No9"
    },
    {
      "name": "Matteo Collina",
      "email": "matteo.collina@gmail.com",
      "url": "https://github.com/mcollina"
    },
    {
      "name": "Pedro Teixeira",
      "email": "pedro.teixeira@gmail.com",
      "url": "https://github.com/pgte"
    },
    {
      "name": "James Halliday",
      "email": "mail@substack.net",
      "url": "https://github.com/substack"
    }
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/rvagg/node-levelup.git"
  },
  "homepage": "https://github.com/rvagg/node-levelup",
  "keywords": [
    "leveldb",
    "stream",
    "database",
    "db",
    "store",
    "storage",
    "json"
  ],
  "main": "lib/levelup.js",
  "dependencies": {
    "bl": "~0.8.1",
    "deferred-leveldown": "~0.2.0",
    "errno": "~0.1.1",
    "prr": "~0.0.0",
    "readable-stream": "~1.0.26",
    "semver": "~2.3.1",
    "xtend": "~3.0.0"
  },
  "devDependencies": {
    "leveldown": "~0.10.0",
    "bustermove": "*",
    "tap": "*",
    "referee": "*",
    "rimraf": "*",
    "async": "*",
    "fstream": "*",
    "tar": "*",
    "mkfiletree": "*",
    "readfiletree": "*",
    "slow-stream": ">=0.0.4",
    "delayed": "*",
    "boganipsum": "*",
    "du": "*",
    "memdown": "*",
    "msgpack-js": "*"
  },
  "browser": {
    "leveldown": false,
    "leveldown/package": false,
    "semver": false
  },
  "scripts": {
    "test": "tap test/*-test.js --stderr",
    "functionaltests": "node ./test/functional/fstream-test.js && node ./test/functional/binary-data-test.js && node ./test/functional/compat-test.js",
    "alltests": "npm test && npm run-script functionaltests"
  },
  "license": "MIT",
  "gitHead": "213e989e2b75273e2b44c23f84f95e35bff7ea11",
  "bugs": {
    "url": "https://github.com/rvagg/node-levelup/issues"
  },
  "_id": "levelup@0.18.6",
  "_shasum": "e6a01cb089616c8ecc0291c2a9bd3f0c44e3e5eb",
  "_from": "levelup@>=0.18.2 <0.19.0",
  "_npmVersion": "1.4.14",
  "_npmUser": {
    "name": "rvagg",
    "email": "rod@vagg.org"
  },
  "maintainers": [
    {
      "name": "rvagg",
      "email": "rod@vagg.org"
    }
  ],
  "dist": {
    "shasum": "e6a01cb089616c8ecc0291c2a9bd3f0c44e3e5eb",
    "tarball": "https://registry.npmjs.org/levelup/-/levelup-0.18.6.tgz"
  },
  "directories": {},
  "_resolved": "https://registry.npmjs.org/levelup/-/levelup-0.18.6.tgz"
}

},{}],86:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],87:[function(require,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var rootParent = {}

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.foo = function () { return 42 }
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */
function Buffer (arg) {
  if (!(this instanceof Buffer)) {
    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
    if (arguments.length > 1) return new Buffer(arg, arguments[1])
    return new Buffer(arg)
  }

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    this.length = 0
    this.parent = undefined
  }

  // Common case.
  if (typeof arg === 'number') {
    return fromNumber(this, arg)
  }

  // Slightly less common case.
  if (typeof arg === 'string') {
    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
  }

  // Unusual.
  return fromObject(this, arg)
}

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function fromNumber (that, length) {
  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < length; i++) {
      that[i] = 0
    }
  }
  return that
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

  // Assumption: byteLength() return value is always < kMaxLength.
  var length = byteLength(string, encoding) | 0
  that = allocate(that, length)

  that.write(string, encoding)
  return that
}

function fromObject (that, object) {
  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

  if (isArray(object)) return fromArray(that, object)

  if (object == null) {
    throw new TypeError('must start with number, buffer, array or string')
  }

  if (typeof ArrayBuffer !== 'undefined') {
    if (object.buffer instanceof ArrayBuffer) {
      return fromTypedArray(that, object)
    }
    if (object instanceof ArrayBuffer) {
      return fromArrayBuffer(that, object)
    }
  }

  if (object.length) return fromArrayLike(that, object)

  return fromJsonObject(that, object)
}

function fromBuffer (that, buffer) {
  var length = checked(buffer.length) | 0
  that = allocate(that, length)
  buffer.copy(that, 0, 0, length)
  return that
}

function fromArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Duplicate of fromArray() to keep fromArray() monomorphic.
function fromTypedArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  // Truncating the elements is probably not what people expect from typed
  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
  // of the old Buffer constructor.
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(array)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromTypedArray(that, new Uint8Array(array))
  }
  return that
}

function fromArrayLike (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
// Returns a zero-length buffer for inputs that don't conform to the spec.
function fromJsonObject (that, object) {
  var array
  var length = 0

  if (object.type === 'Buffer' && isArray(object.data)) {
    array = object.data
    length = checked(array.length) | 0
  }
  that = allocate(that, length)

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
} else {
  // pre-set for values that may exist in the future
  Buffer.prototype.length = undefined
  Buffer.prototype.parent = undefined
}

function allocate (that, length) {
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that.length = length
  }

  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
  if (fromPool) that.parent = rootParent

  return that
}

function checked (length) {
  // Note: cannot use `length < kMaxLength` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (subject, encoding) {
  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

  var buf = new Buffer(subject, encoding)
  delete buf.parent
  return buf
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

  if (list.length === 0) {
    return new Buffer(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; i++) {
      length += list[i].length
    }
  }

  var buf = new Buffer(length)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

function byteLength (string, encoding) {
  if (typeof string !== 'string') string = '' + string

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'binary':
      // Deprecated
      case 'raw':
      case 'raws':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  start = start | 0
  end = end === undefined || end === Infinity ? this.length : end | 0

  if (!encoding) encoding = 'utf8'
  if (start < 0) start = 0
  if (end > this.length) end = this.length
  if (end <= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  return Buffer.compare(this, b)
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
  byteOffset >>= 0

  if (this.length === 0) return -1
  if (byteOffset >= this.length) return -1

  // Negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

  if (typeof val === 'string') {
    if (val.length === 0) return -1 // special case: looking for empty string always fails
    return String.prototype.indexOf.call(this, val, byteOffset)
  }
  if (Buffer.isBuffer(val)) {
    return arrayIndexOf(this, val, byteOffset)
  }
  if (typeof val === 'number') {
    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
    }
    return arrayIndexOf(this, [ val ], byteOffset)
  }

  function arrayIndexOf (arr, val, byteOffset) {
    var foundIndex = -1
    for (var i = 0; byteOffset + i < arr.length; i++) {
      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
      } else {
        foundIndex = -1
      }
    }
    return -1
  }

  throw new TypeError('val must be string, number or Buffer')
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) throw new Error('Invalid hex string')
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    var swap = encoding
    encoding = offset
    offset = length | 0
    length = swap
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'binary':
        return binaryWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function binarySlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
  }

  if (newBuf.length) newBuf.parent = this.parent || this

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('index out of range')
  if (offset < 0) throw new RangeError('index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; i--) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; i++) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function fill (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end < start) throw new RangeError('end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; i++) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"base64-js":2,"ieee754":95,"isarray":88}],88:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],89:[function(require,module,exports){
(function (Buffer){
var Writable = require('readable-stream').Writable
var inherits = require('inherits')

if (typeof Uint8Array === 'undefined') {
  var U8 = require('typedarray').Uint8Array
} else {
  var U8 = Uint8Array
}

function ConcatStream(opts, cb) {
  if (!(this instanceof ConcatStream)) return new ConcatStream(opts, cb)

  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }
  if (!opts) opts = {}

  var encoding = opts.encoding
  var shouldInferEncoding = false

  if (!encoding) {
    shouldInferEncoding = true
  } else {
    encoding =  String(encoding).toLowerCase()
    if (encoding === 'u8' || encoding === 'uint8') {
      encoding = 'uint8array'
    }
  }

  Writable.call(this, { objectMode: true })

  this.encoding = encoding
  this.shouldInferEncoding = shouldInferEncoding

  if (cb) this.on('finish', function () { cb(this.getBody()) })
  this.body = []
}

module.exports = ConcatStream
inherits(ConcatStream, Writable)

ConcatStream.prototype._write = function(chunk, enc, next) {
  this.body.push(chunk)
  next()
}

ConcatStream.prototype.inferEncoding = function (buff) {
  var firstBuffer = buff === undefined ? this.body[0] : buff;
  if (Buffer.isBuffer(firstBuffer)) return 'buffer'
  if (typeof Uint8Array !== 'undefined' && firstBuffer instanceof Uint8Array) return 'uint8array'
  if (Array.isArray(firstBuffer)) return 'array'
  if (typeof firstBuffer === 'string') return 'string'
  if (Object.prototype.toString.call(firstBuffer) === "[object Object]") return 'object'
  return 'buffer'
}

ConcatStream.prototype.getBody = function () {
  if (!this.encoding && this.body.length === 0) return []
  if (this.shouldInferEncoding) this.encoding = this.inferEncoding()
  if (this.encoding === 'array') return arrayConcat(this.body)
  if (this.encoding === 'string') return stringConcat(this.body)
  if (this.encoding === 'buffer') return bufferConcat(this.body)
  if (this.encoding === 'uint8array') return u8Concat(this.body)
  return this.body
}

var isArray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]'
}

function isArrayish (arr) {
  return /Array\]$/.test(Object.prototype.toString.call(arr))
}

function stringConcat (parts) {
  var strings = []
  var needsToString = false
  for (var i = 0; i < parts.length; i++) {
    var p = parts[i]
    if (typeof p === 'string') {
      strings.push(p)
    } else if (Buffer.isBuffer(p)) {
      strings.push(p)
    } else {
      strings.push(Buffer(p))
    }
  }
  if (Buffer.isBuffer(parts[0])) {
    strings = Buffer.concat(strings)
    strings = strings.toString('utf8')
  } else {
    strings = strings.join('')
  }
  return strings
}

function bufferConcat (parts) {
  var bufs = []
  for (var i = 0; i < parts.length; i++) {
    var p = parts[i]
    if (Buffer.isBuffer(p)) {
      bufs.push(p)
    } else if (typeof p === 'string' || isArrayish(p)
    || (p && typeof p.subarray === 'function')) {
      bufs.push(Buffer(p))
    } else bufs.push(Buffer(String(p)))
  }
  return Buffer.concat(bufs)
}

function arrayConcat (parts) {
  var res = []
  for (var i = 0; i < parts.length; i++) {
    res.push.apply(res, parts[i])
  }
  return res
}

function u8Concat (parts) {
  var len = 0
  for (var i = 0; i < parts.length; i++) {
    if (typeof parts[i] === 'string') {
      parts[i] = Buffer(parts[i])
    }
    len += parts[i].length
  }
  var u8 = new U8(len)
  for (var i = 0, offset = 0; i < parts.length; i++) {
    var part = parts[i]
    for (var j = 0; j < part.length; j++) {
      u8[offset++] = part[j]
    }
  }
  return u8
}

}).call(this,require("buffer").Buffer)
},{"buffer":87,"inherits":96,"readable-stream":115,"typedarray":130}],90:[function(require,module,exports){
(function (Buffer){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

}).call(this,{"isBuffer":require("../../is-buffer/index.js")})
},{"../../is-buffer/index.js":97}],91:[function(require,module,exports){
(function (process,Buffer){
// Generated by CoffeeScript 1.10.0
var Parser, StringDecoder, stream, util;

stream = require('stream');

util = require('util');

StringDecoder = require('string_decoder').StringDecoder;

module.exports = function() {
  var callback, called, chunks, data, options, parser;
  if (arguments.length === 3) {
    data = arguments[0];
    options = arguments[1];
    callback = arguments[2];
    if (typeof callback !== 'function') {
      throw Error("Invalid callback argument: " + (JSON.stringify(callback)));
    }
    if (!(typeof data === 'string' || Buffer.isBuffer(arguments[0]))) {
      return callback(Error("Invalid data argument: " + (JSON.stringify(data))));
    }
  } else if (arguments.length === 2) {
    if (typeof arguments[0] === 'string' || Buffer.isBuffer(arguments[0])) {
      data = arguments[0];
    } else {
      options = arguments[0];
    }
    if (typeof arguments[1] === 'function') {
      callback = arguments[1];
    } else {
      options = arguments[1];
    }
  } else if (arguments.length === 1) {
    if (typeof arguments[0] === 'function') {
      callback = arguments[0];
    } else {
      options = arguments[0];
    }
  }
  if (options == null) {
    options = {};
  }
  parser = new Parser(options);
  if (data != null) {
    process.nextTick(function() {
      parser.write(data);
      return parser.end();
    });
  }
  if (callback) {
    called = false;
    chunks = options.objname ? {} : [];
    parser.on('readable', function() {
      var chunk, results;
      results = [];
      while (chunk = parser.read()) {
        if (options.objname) {
          results.push(chunks[chunk[0]] = chunk[1]);
        } else {
          results.push(chunks.push(chunk));
        }
      }
      return results;
    });
    parser.on('error', function(err) {
      called = true;
      return callback(err);
    });
    parser.on('end', function() {
      if (!called) {
        return callback(null, chunks);
      }
    });
  }
  return parser;
};

Parser = function(options) {
  var base, base1, base10, base11, base12, base13, base14, base15, base16, base2, base3, base4, base5, base6, base7, base8, base9, k, v;
  if (options == null) {
    options = {};
  }
  options.objectMode = true;
  this.options = {};
  for (k in options) {
    v = options[k];
    this.options[k] = v;
  }
  stream.Transform.call(this, this.options);
  if ((base = this.options).rowDelimiter == null) {
    base.rowDelimiter = null;
  }
  if ((base1 = this.options).delimiter == null) {
    base1.delimiter = ',';
  }
  if ((base2 = this.options).quote == null) {
    base2.quote = '"';
  }
  if ((base3 = this.options).escape == null) {
    base3.escape = '"';
  }
  if ((base4 = this.options).columns == null) {
    base4.columns = null;
  }
  if ((base5 = this.options).comment == null) {
    base5.comment = '';
  }
  if ((base6 = this.options).objname == null) {
    base6.objname = false;
  }
  if ((base7 = this.options).trim == null) {
    base7.trim = false;
  }
  if ((base8 = this.options).ltrim == null) {
    base8.ltrim = false;
  }
  if ((base9 = this.options).rtrim == null) {
    base9.rtrim = false;
  }
  if ((base10 = this.options).auto_parse == null) {
    base10.auto_parse = false;
  }
  if ((base11 = this.options).auto_parse_date == null) {
    base11.auto_parse_date = false;
  }
  if ((base12 = this.options).relax == null) {
    base12.relax = false;
  }
  if ((base13 = this.options).relax_column_count == null) {
    base13.relax_column_count = false;
  }
  if ((base14 = this.options).skip_empty_lines == null) {
    base14.skip_empty_lines = false;
  }
  if ((base15 = this.options).max_limit_on_data_read == null) {
    base15.max_limit_on_data_read = 128000;
  }
  if ((base16 = this.options).skip_lines_with_empty_values == null) {
    base16.skip_lines_with_empty_values = false;
  }
  this.lines = 0;
  this.count = 0;
  this.skipped_line_count = 0;
  this.empty_line_count = 0;
  this.is_int = /^(\-|\+)?([1-9]+[0-9]*)$/;
  this.is_float = function(value) {
    return (value - parseFloat(value) + 1) >= 0;
  };
  this.decoder = new StringDecoder();
  this.buf = '';
  this.quoting = false;
  this.commenting = false;
  this.field = '';
  this.nextChar = null;
  this.closingQuote = 0;
  this.line = [];
  this.chunks = [];
  this.rawBuf = '';
  return this;
};

util.inherits(Parser, stream.Transform);

module.exports.Parser = Parser;

Parser.prototype._transform = function(chunk, encoding, callback) {
  var err, error;
  if (chunk instanceof Buffer) {
    chunk = this.decoder.write(chunk);
  }
  try {
    this.__write(chunk, false);
    return callback();
  } catch (error) {
    err = error;
    return this.emit('error', err);
  }
};

Parser.prototype._flush = function(callback) {
  var err, error;
  try {
    this.__write(this.decoder.end(), true);
    if (this.quoting) {
      this.emit('error', new Error("Quoted field not terminated at line " + (this.lines + 1)));
      return;
    }
    if (this.line.length > 0) {
      this.__push(this.line);
    }
    return callback();
  } catch (error) {
    err = error;
    return this.emit('error', err);
  }
};

Parser.prototype.__push = function(line) {
  var field, i, j, len, lineAsColumns, rawBuf, row;
  if (this.options.skip_lines_with_empty_values && line.join('').trim() === '') {
    return;
  }
  row = null;
  if (this.options.columns === true) {
    this.options.columns = line;
    rawBuf = '';
    return;
  } else if (typeof this.options.columns === 'function') {
    this.options.columns = this.options.columns(line);
    rawBuf = '';
    return;
  }
  if (!this.line_length && line.length > 0) {
    this.line_length = this.options.columns ? this.options.columns.length : line.length;
  }
  if (line.length === 1 && line[0] === '') {
    this.empty_line_count++;
  } else if (line.length !== this.line_length) {
    if (this.options.relax_column_count) {
      this.skipped_line_count++;
    } else if (this.options.columns != null) {
      throw Error("Number of columns on line " + this.lines + " does not match header");
    } else {
      throw Error("Number of columns is inconsistent on line " + this.lines);
    }
  } else {
    this.count++;
  }
  if (this.options.columns != null) {
    lineAsColumns = {};
    for (i = j = 0, len = line.length; j < len; i = ++j) {
      field = line[i];
      if (this.options.columns[i] === false) {
        continue;
      }
      lineAsColumns[this.options.columns[i]] = field;
    }
    if (this.options.objname) {
      row = [lineAsColumns[this.options.objname], lineAsColumns];
    } else {
      row = lineAsColumns;
    }
  } else {
    row = line;
  }
  if (this.options.raw) {
    this.push({
      raw: this.rawBuf,
      row: row
    });
    return this.rawBuf = '';
  } else {
    return this.push(row);
  }
};

Parser.prototype.__write = function(chars, end, callback) {
  var areNextCharsDelimiter, areNextCharsRowDelimiters, auto_parse, char, escapeIsQuote, i, isDelimiter, isEscape, isNextCharAComment, isQuote, isRowDelimiter, is_float, is_int, l, ltrim, nextCharPos, ref, remainingBuffer, results, rowDelimiter, rowDelimiterLength, rtrim, wasCommenting;
  is_int = (function(_this) {
    return function(value) {
      if (typeof _this.is_int === 'function') {
        return _this.is_int(value);
      } else {
        return _this.is_int.test(value);
      }
    };
  })(this);
  is_float = (function(_this) {
    return function(value) {
      if (typeof _this.is_float === 'function') {
        return _this.is_float(value);
      } else {
        return _this.is_float.test(value);
      }
    };
  })(this);
  auto_parse = (function(_this) {
    return function(value) {
      var m;
      if (_this.options.auto_parse && is_int(_this.field)) {
        _this.field = parseInt(_this.field);
      } else if (_this.options.auto_parse && is_float(_this.field)) {
        _this.field = parseFloat(_this.field);
      } else if (_this.options.auto_parse && _this.options.auto_parse_date) {
        m = Date.parse(_this.field);
        if (!isNaN(m)) {
          _this.field = new Date(m);
        }
      }
      return _this.field;
    };
  })(this);
  ltrim = this.options.trim || this.options.ltrim;
  rtrim = this.options.trim || this.options.rtrim;
  chars = this.buf + chars;
  l = chars.length;
  rowDelimiterLength = this.options.rowDelimiter ? this.options.rowDelimiter.length : 0;
  i = 0;
  if (this.lines === 0 && 0xFEFF === chars.charCodeAt(0)) {
    i++;
  }
  while (i < l) {
    if (!end) {
      remainingBuffer = chars.substr(i, l - i);
      if ((!this.commenting && l - i < this.options.comment.length && this.options.comment.substr(0, l - i) === remainingBuffer) || (this.options.rowDelimiter && l - i < rowDelimiterLength && this.options.rowDelimiter.substr(0, l - i) === remainingBuffer) || (this.options.rowDelimiter && this.quoting && l - i < (this.options.quote.length + rowDelimiterLength) && (this.options.quote + this.options.rowDelimiter).substr(0, l - i) === remainingBuffer) || (l - i <= this.options.delimiter.length && this.options.delimiter.substr(0, l - i) === remainingBuffer) || (l - i <= this.options.escape.length && this.options.escape.substr(0, l - i) === remainingBuffer)) {
        break;
      }
    }
    char = this.nextChar ? this.nextChar : chars.charAt(i);
    this.nextChar = l > i + 1 ? chars.charAt(i + 1) : '';
    if (this.options.raw) {
      this.rawBuf += char;
    }
    if (this.options.rowDelimiter == null) {
      if ((!this.quoting) && (char === '\n' || char === '\r')) {
        rowDelimiter = char;
        nextCharPos = i + 1;
      } else if (this.nextChar === '\n' || this.nextChar === '\r') {
        rowDelimiter = this.nextChar;
        nextCharPos = i + 2;
        if (this.raw) {
          rawBuf += this.nextChar;
        }
      }
      if (rowDelimiter) {
        if (rowDelimiter === '\r' && chars.charAt(nextCharPos) === '\n') {
          rowDelimiter += '\n';
        }
        this.options.rowDelimiter = rowDelimiter;
        rowDelimiterLength = this.options.rowDelimiter.length;
      }
    }
    if (!this.commenting && char === this.options.escape) {
      escapeIsQuote = this.options.escape === this.options.quote;
      isEscape = this.nextChar === this.options.escape;
      isQuote = this.nextChar === this.options.quote;
      if (!(escapeIsQuote && !this.field && !this.quoting) && (isEscape || isQuote)) {
        i++;
        char = this.nextChar;
        this.nextChar = chars.charAt(i + 1);
        this.field += char;
        if (this.options.raw) {
          this.rawBuf += char;
        }
        i++;
        continue;
      }
    }
    if (!this.commenting && char === this.options.quote) {
      if (this.quoting) {
        areNextCharsRowDelimiters = this.options.rowDelimiter && chars.substr(i + 1, this.options.rowDelimiter.length) === this.options.rowDelimiter;
        areNextCharsDelimiter = chars.substr(i + 1, this.options.delimiter.length) === this.options.delimiter;
        isNextCharAComment = this.nextChar === this.options.comment;
        if (this.nextChar && !areNextCharsRowDelimiters && !areNextCharsDelimiter && !isNextCharAComment) {
          if (this.options.relax) {
            this.quoting = false;
            this.field = "" + this.options.quote + this.field;
          } else {
            throw Error("Invalid closing quote at line " + (this.lines + 1) + "; found " + (JSON.stringify(this.nextChar)) + " instead of delimiter " + (JSON.stringify(this.options.delimiter)));
          }
        } else {
          this.quoting = false;
          this.closingQuote = this.options.quote.length;
          i++;
          if (end && i === l) {
            this.line.push(auto_parse(this.field));
            this.field = '';
          }
          continue;
        }
      } else if (!this.field) {
        this.quoting = true;
        i++;
        continue;
      } else if (this.field && !this.options.relax) {
        throw Error("Invalid opening quote at line " + (this.lines + 1));
      }
    }
    isRowDelimiter = this.options.rowDelimiter && chars.substr(i, this.options.rowDelimiter.length) === this.options.rowDelimiter;
    if (isRowDelimiter || (end && i === l - 1)) {
      this.lines++;
    }
    wasCommenting = false;
    if (!this.commenting && !this.quoting && this.options.comment && chars.substr(i, this.options.comment.length) === this.options.comment) {
      this.commenting = true;
    } else if (this.commenting && isRowDelimiter) {
      wasCommenting = true;
      this.commenting = false;
    }
    isDelimiter = chars.substr(i, this.options.delimiter.length) === this.options.delimiter;
    if (!this.commenting && !this.quoting && (isDelimiter || isRowDelimiter)) {
      if (isRowDelimiter && this.line.length === 0 && this.field === '') {
        if (wasCommenting || this.options.skip_empty_lines) {
          i += this.options.rowDelimiter.length;
          this.nextChar = chars.charAt(i);
          continue;
        }
      }
      if (rtrim) {
        if (!this.closingQuote) {
          this.field = this.field.trimRight();
        }
      }
      this.line.push(auto_parse(this.field));
      this.closingQuote = 0;
      this.field = '';
      if (isDelimiter) {
        i += this.options.delimiter.length;
        this.nextChar = chars.charAt(i);
        if (end && !this.nextChar) {
          isRowDelimiter = true;
          this.line.push('');
        }
      }
      if (isRowDelimiter) {
        this.__push(this.line);
        this.line = [];
        i += (ref = this.options.rowDelimiter) != null ? ref.length : void 0;
        this.nextChar = chars.charAt(i);
        continue;
      }
    } else if (!this.commenting && !this.quoting && (char === ' ' || char === '\t')) {
      if (!(ltrim && !this.field)) {
        this.field += char;
      }
      if (end && i + 1 === l) {
        if (this.options.trim || this.options.rtrim) {
          this.field = this.field.trimRight();
        }
      }
      i++;
    } else if (!this.commenting) {
      this.field += char;
      i++;
    } else {
      i++;
    }
    if (!this.commenting && this.field.length > this.options.max_limit_on_data_read) {
      throw Error("Delimiter not found in the file " + (JSON.stringify(this.options.delimiter)));
    }
    if (!this.commenting && this.line.length > this.options.max_limit_on_data_read) {
      throw Error("Row delimiter not found in the file " + (JSON.stringify(this.options.rowDelimiter)));
    }
  }
  if (end) {
    if (rtrim) {
      if (!this.closingQuote) {
        this.field = this.field.trimRight();
      }
    }
    if (this.field !== '') {
      this.line.push(auto_parse(this.field));
      this.field = '';
    }
    if (this.field.length > this.options.max_limit_on_data_read) {
      throw Error("Delimiter not found in the file " + (JSON.stringify(this.options.delimiter)));
    }
    if (l === 0) {
      this.lines++;
    }
    if (this.line.length > this.options.max_limit_on_data_read) {
      throw Error("Row delimiter not found in the file " + (JSON.stringify(this.options.rowDelimiter)));
    }
  }
  this.buf = '';
  results = [];
  while (i < l) {
    this.buf += chars.charAt(i);
    results.push(i++);
  }
  return results;
};

}).call(this,require('_process'),require("buffer").Buffer)
},{"_process":106,"buffer":87,"stream":118,"string_decoder":129,"util":133}],92:[function(require,module,exports){
(function (process){
// Generated by CoffeeScript 1.10.0
var Stringifier, get, stream, util;

stream = require('stream');

util = require('util');

get = require('lodash.get');

module.exports = function() {
  var callback, chunks, data, options, stringifier;
  if (arguments.length === 3) {
    data = arguments[0];
    options = arguments[1];
    callback = arguments[2];
  } else if (arguments.length === 2) {
    if (Array.isArray(arguments[0])) {
      data = arguments[0];
    } else {
      options = arguments[0];
    }
    if (typeof arguments[1] === 'function') {
      callback = arguments[1];
    } else {
      options = arguments[1];
    }
  } else if (arguments.length === 1) {
    if (typeof arguments[0] === 'function') {
      callback = arguments[0];
    } else if (Array.isArray(arguments[0])) {
      data = arguments[0];
    } else {
      options = arguments[0];
    }
  }
  if (options == null) {
    options = {};
  }
  stringifier = new Stringifier(options);
  if (data) {
    process.nextTick(function() {
      var d, j, len;
      for (j = 0, len = data.length; j < len; j++) {
        d = data[j];
        stringifier.write(d);
      }
      return stringifier.end();
    });
  }
  if (callback) {
    chunks = [];
    stringifier.on('readable', function() {
      var chunk, results;
      results = [];
      while (chunk = stringifier.read()) {
        results.push(chunks.push(chunk));
      }
      return results;
    });
    stringifier.on('error', function(err) {
      return callback(err);
    });
    stringifier.on('end', function() {
      return callback(null, chunks.join(''));
    });
  }
  return stringifier;
};

Stringifier = function(opts) {
  var base, base1, base10, base11, base12, base2, base3, base4, base5, base6, base7, base8, base9, k, options, v;
  if (opts == null) {
    opts = {};
  }
  options = {};
  for (k in opts) {
    v = opts[k];
    options[k] = v;
  }
  stream.Transform.call(this, options);
  this.options = options;
  if ((base = this.options).delimiter == null) {
    base.delimiter = ',';
  }
  if ((base1 = this.options).quote == null) {
    base1.quote = '"';
  }
  if ((base2 = this.options).quoted == null) {
    base2.quoted = false;
  }
  if ((base3 = this.options).quotedString == null) {
    base3.quotedString = false;
  }
  if ((base4 = this.options).eof == null) {
    base4.eof = true;
  }
  if ((base5 = this.options).escape == null) {
    base5.escape = '"';
  }
  if ((base6 = this.options).columns == null) {
    base6.columns = null;
  }
  if ((base7 = this.options).header == null) {
    base7.header = false;
  }
  if ((base8 = this.options).formatters == null) {
    base8.formatters = {};
  }
  if ((base9 = this.options.formatters).date == null) {
    base9.date = function(value) {
      return '' + value.getTime();
    };
  }
  if ((base10 = this.options.formatters).bool == null) {
    base10.bool = function(value) {
      if (value) {
        return '1';
      } else {
        return '';
      }
    };
  }
  if ((base11 = this.options.formatters).object == null) {
    base11.object = function(value) {
      return JSON.stringify(value);
    };
  }
  if ((base12 = this.options).rowDelimiter == null) {
    base12.rowDelimiter = '\n';
  }
  if (this.countWriten == null) {
    this.countWriten = 0;
  }
  switch (this.options.rowDelimiter) {
    case 'auto':
      this.options.rowDelimiter = null;
      break;
    case 'unix':
      this.options.rowDelimiter = "\n";
      break;
    case 'mac':
      this.options.rowDelimiter = "\r";
      break;
    case 'windows':
      this.options.rowDelimiter = "\r\n";
      break;
    case 'unicode':
      this.options.rowDelimiter = "\u2028";
  }
  return this;
};

util.inherits(Stringifier, stream.Transform);

module.exports.Stringifier = Stringifier;

Stringifier.prototype.headers = function() {
  var k, label, labels;
  if (!this.options.header) {
    return;
  }
  if (!this.options.columns) {
    return;
  }
  labels = this.options.columns;
  if (typeof labels === 'object') {
    labels = (function() {
      var results;
      results = [];
      for (k in labels) {
        label = labels[k];
        results.push(label);
      }
      return results;
    })();
  }
  if (this.options.eof) {
    labels = this.stringify(labels) + this.options.rowDelimiter;
  } else {
    labels = this.stringify(labels);
  }
  return stream.Transform.prototype.write.call(this, labels);
};

Stringifier.prototype.end = function(chunk, encoding, callback) {
  if (this.countWriten === 0) {
    this.headers();
  }
  return stream.Transform.prototype.end.apply(this, arguments);
};

Stringifier.prototype.write = function(chunk, encoding, callback) {
  var base, e, error, preserve;
  if (chunk == null) {
    return;
  }
  preserve = typeof chunk !== 'object';
  if (!preserve) {
    if (this.countWriten === 0 && !Array.isArray(chunk)) {
      if ((base = this.options).columns == null) {
        base.columns = Object.keys(chunk);
      }
    }
    try {
      this.emit('record', chunk, this.countWriten);
    } catch (error) {
      e = error;
      return this.emit('error', e);
    }
    if (this.options.eof) {
      chunk = this.stringify(chunk) + this.options.rowDelimiter;
    } else {
      chunk = this.stringify(chunk);
      if (this.options.header || this.countWriten) {
        chunk = this.options.rowDelimiter + chunk;
      }
    }
  }
  if (typeof chunk === 'number') {
    chunk = "" + chunk;
  }
  if (this.countWriten === 0) {
    this.headers();
  }
  if (!preserve) {
    this.countWriten++;
  }
  return stream.Transform.prototype.write.call(this, chunk, encoding, callback);
};

Stringifier.prototype._transform = function(chunk, encoding, callback) {
  this.push(chunk);
  return callback();
};

Stringifier.prototype.stringify = function(line) {
  var _line, column, columns, containsEscape, containsLinebreak, containsQuote, containsdelimiter, delimiter, escape, field, i, j, l, newLine, quote, ref, ref1, regexp, shouldQuote, value;
  if (typeof line !== 'object') {
    return line;
  }
  columns = this.options.columns;
  if (typeof columns === 'object' && columns !== null && !Array.isArray(columns)) {
    columns = Object.keys(columns);
  }
  delimiter = this.options.delimiter;
  quote = this.options.quote;
  escape = this.options.escape;
  if (!Array.isArray(line)) {
    _line = [];
    if (columns) {
      for (i = j = 0, ref = columns.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        column = columns[i];
        value = get(line, column);
        _line[i] = typeof value === 'undefined' || value === null ? '' : value;
      }
    } else {
      for (column in line) {
        _line.push(line[column]);
      }
    }
    line = _line;
    _line = null;
  } else if (columns) {
    line.splice(columns.length);
  }
  if (Array.isArray(line)) {
    newLine = '';
    for (i = l = 0, ref1 = line.length; 0 <= ref1 ? l < ref1 : l > ref1; i = 0 <= ref1 ? ++l : --l) {
      field = line[i];
      if (typeof field === 'string') {

      } else if (typeof field === 'number') {
        field = '' + field;
      } else if (typeof field === 'boolean') {
        field = this.options.formatters.bool(field);
      } else if (field instanceof Date) {
        field = this.options.formatters.date(field);
      } else if (typeof field === 'object' && field !== null) {
        field = this.options.formatters.object(field);
      }
      if (field) {
        containsdelimiter = field.indexOf(delimiter) >= 0;
        containsQuote = field.indexOf(quote) >= 0;
        containsEscape = field.indexOf(escape) >= 0 && (escape !== quote);
        containsLinebreak = field.indexOf('\r') >= 0 || field.indexOf('\n') >= 0;
        shouldQuote = containsQuote || containsdelimiter || containsLinebreak || this.options.quoted || (this.options.quotedString && typeof line[i] === 'string');
        if (shouldQuote && containsEscape) {
          regexp = escape === '\\' ? new RegExp(escape + escape, 'g') : new RegExp(escape, 'g');
          field = field.replace(regexp, escape + escape);
        }
        if (containsQuote) {
          regexp = new RegExp(quote, 'g');
          field = field.replace(regexp, escape + quote);
        }
        if (shouldQuote) {
          field = quote + field + quote;
        }
        newLine += field;
      } else if (this.options.quotedEmpty || ((this.options.quotedEmpty == null) && line[i] === '' && this.options.quotedString)) {
        newLine += quote + quote;
      }
      if (i !== line.length - 1) {
        newLine += delimiter;
      }
    }
    line = newLine;
  }
  return line;
};

}).call(this,require('_process'))
},{"_process":106,"lodash.get":93,"stream":118,"util":133}],93:[function(require,module,exports){
(function (global){
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8 which returns 'object' for typed array and weak map constructors,
  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],94:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],95:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],96:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],97:[function(require,module,exports){
/**
 * Determine if an object is Buffer
 *
 * Author:   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * License:  MIT
 *
 * `npm install is-buffer`
 */

module.exports = function (obj) {
  return !!(obj != null &&
    (obj._isBuffer || // For Safari 5-7 (missing Object.prototype.constructor)
      (obj.constructor &&
      typeof obj.constructor.isBuffer === 'function' &&
      obj.constructor.isBuffer(obj))
    ))
}

},{}],98:[function(require,module,exports){
'use strict';
var numberIsNan = require('number-is-nan');

module.exports = Number.isFinite || function (val) {
	return !(typeof val !== 'number' || numberIsNan(val) || val === Infinity || val === -Infinity);
};

},{"number-is-nan":102}],99:[function(require,module,exports){
// https://github.com/paulmillr/es6-shim
// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isinteger
var isFinite = require("is-finite");
module.exports = Number.isInteger || function(val) {
  return typeof val === "number" &&
    isFinite(val) &&
    Math.floor(val) === val;
};

},{"is-finite":98}],100:[function(require,module,exports){
module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

},{}],101:[function(require,module,exports){
var fs = require('fs')

function readFile (file, options, callback) {
  if (callback == null) {
    callback = options
    options = {}
  }

  fs.readFile(file, options, function (err, data) {
    if (err) return callback(err)

    var obj
    try {
      obj = JSON.parse(data, options ? options.reviver : null)
    } catch (err2) {
      err2.message = file + ': ' + err2.message
      return callback(err2)
    }

    callback(null, obj)
  })
}

function readFileSync (file, options) {
  options = options || {}
  if (typeof options === 'string') {
    options = {encoding: options}
  }

  var shouldThrow = 'throws' in options ? options.throws : true
  var content = fs.readFileSync(file, options)

  try {
    return JSON.parse(content, options.reviver)
  } catch (err) {
    if (shouldThrow) {
      err.message = file + ': ' + err.message
      throw err
    } else {
      return null
    }
  }
}

function writeFile (file, obj, options, callback) {
  if (callback == null) {
    callback = options
    options = {}
  }

  var spaces = typeof options === 'object' && options !== null
    ? 'spaces' in options
    ? options.spaces : this.spaces
    : this.spaces

  var str = ''
  try {
    str = JSON.stringify(obj, options ? options.replacer : null, spaces) + '\n'
  } catch (err) {
    if (callback) return callback(err, null)
  }

  fs.writeFile(file, str, options, callback)
}

function writeFileSync (file, obj, options) {
  options = options || {}

  var spaces = typeof options === 'object' && options !== null
    ? 'spaces' in options
    ? options.spaces : this.spaces
    : this.spaces

  var str = JSON.stringify(obj, options.replacer, spaces) + '\n'
  // not sure if fs.writeFileSync returns anything, but just in case
  return fs.writeFileSync(file, str, options)
}

var jsonfile = {
  spaces: null,
  readFile: readFile,
  readFileSync: readFileSync,
  writeFile: writeFile,
  writeFileSync: writeFileSync
}

module.exports = jsonfile

},{"fs":86}],102:[function(require,module,exports){
'use strict';
module.exports = Number.isNaN || function (x) {
	return x !== x;
};

},{}],103:[function(require,module,exports){
var wrappy = require('wrappy')
module.exports = wrappy(once)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

},{"wrappy":134}],104:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":106}],105:[function(require,module,exports){
(function (process){
'use strict';

if (!process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = nextTick;
} else {
  module.exports = process.nextTick;
}

function nextTick(fn) {
  var args = new Array(arguments.length - 1);
  var i = 0;
  while (i < args.length) {
    args[i++] = arguments[i];
  }
  process.nextTick(function afterTick() {
    fn.apply(null, args);
  });
}

}).call(this,require('_process'))
},{"_process":106}],106:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],107:[function(require,module,exports){
arguments[4][11][0].apply(exports,arguments)
},{"./lib/_stream_duplex.js":108,"dup":11}],108:[function(require,module,exports){
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

'use strict';

/*<replacement>*/

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var processNextTick = require('process-nextick-args');
/*</replacement>*/

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var Readable = require('./_stream_readable');
var Writable = require('./_stream_writable');

util.inherits(Duplex, Readable);

var keys = objectKeys(Writable.prototype);
for (var v = 0; v < keys.length; v++) {
  var method = keys[v];
  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  processNextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}
},{"./_stream_readable":110,"./_stream_writable":112,"core-util-is":90,"inherits":96,"process-nextick-args":105}],109:[function(require,module,exports){
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.

'use strict';

module.exports = PassThrough;

var Transform = require('./_stream_transform');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};
},{"./_stream_transform":111,"core-util-is":90,"inherits":96}],110:[function(require,module,exports){
(function (process){
'use strict';

module.exports = Readable;

/*<replacement>*/
var processNextTick = require('process-nextick-args');
/*</replacement>*/

/*<replacement>*/
var isArray = require('isarray');
/*</replacement>*/

/*<replacement>*/
var Buffer = require('buffer').Buffer;
/*</replacement>*/

Readable.ReadableState = ReadableState;

var EE = require('events');

/*<replacement>*/
var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream;
(function () {
  try {
    Stream = require('st' + 'ream');
  } catch (_) {} finally {
    if (!Stream) Stream = require('events').EventEmitter;
  }
})();
/*</replacement>*/

var Buffer = require('buffer').Buffer;

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

/*<replacement>*/
var debugUtil = require('util');
var debug = undefined;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var StringDecoder;

util.inherits(Readable, Stream);

var Duplex;
function ReadableState(options, stream) {
  Duplex = Duplex || require('./_stream_duplex');

  options = options || {};

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~ ~this.highWaterMark;

  this.buffer = [];
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.
  this.ranOut = false;

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

var Duplex;
function Readable(options) {
  Duplex = Duplex || require('./_stream_duplex');

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options && typeof options.read === 'function') this._read = options.read;

  Stream.call(this);
}

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;

  if (!state.objectMode && typeof chunk === 'string') {
    encoding = encoding || state.defaultEncoding;
    if (encoding !== state.encoding) {
      chunk = new Buffer(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit('error', er);
  } else if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var e = new Error('stream.unshift() after end event');
      stream.emit('error', e);
    } else {
      var skipAdd;
      if (state.decoder && !addToFront && !encoding) {
        chunk = state.decoder.write(chunk);
        skipAdd = !state.objectMode && chunk.length === 0;
      }

      if (!addToFront) state.reading = false;

      // Don't add to the buffer if we've decoded to an empty string chunk and
      // we're not in object mode
      if (!skipAdd) {
        // if we want the data now, just emit it.
        if (state.flowing && state.length === 0 && !state.sync) {
          stream.emit('data', chunk);
          stream.read(0);
        } else {
          // update the buffer info.
          state.length += state.objectMode ? 1 : chunk.length;
          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

          if (state.needReadable) emitReadable(stream);
        }
      }

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

function howMuchToRead(n, state) {
  if (state.length === 0 && state.ended) return 0;

  if (state.objectMode) return n === 0 ? 0 : 1;

  if (n === null || isNaN(n)) {
    // only flow one buffer at a time
    if (state.flowing && state.buffer.length) return state.buffer[0].length;else return state.length;
  }

  if (n <= 0) return 0;

  // If we're asking for more than the target buffer level,
  // then raise the water mark.  Bump up to the next highest
  // power of 2, to prevent increasing it excessively in tiny
  // amounts.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);

  // don't have that much.  return null, unless we've ended.
  if (n > state.length) {
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    } else {
      return state.length;
    }
  }

  return n;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  var state = this._readableState;
  var nOrig = n;

  if (typeof n !== 'number' || n > 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  }

  if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
  }

  // If _read pushed data synchronously, then `reading` will be false,
  // and we need to re-evaluate how much data we can return to the user.
  if (doRead && !state.reading) n = howMuchToRead(nOrig, state);

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  }

  state.length -= n;

  // If we have nothing in the buffer, then we want to know
  // as soon as we *do* get something into the buffer.
  if (state.length === 0 && !state.ended) state.needReadable = true;

  // If we tried to read() past the EOF, then emit end on the next tick.
  if (nOrig !== n && state.ended && state.length === 0) endReadable(this);

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;
  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    processNextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable) {
    debug('onunpipe');
    if (readable === src) {
      cleanup();
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    var ret = dest.write(chunk);
    if (false === ret) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      if (state.pipesCount === 1 && state.pipes[0] === dest && src.listenerCount('data') === 1 && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }
  // This is a brutally ugly hack to make sure that our error handler
  // is attached before any userland ones.  NEVER DO THIS.
  if (!dest._events || !dest._events.error) dest.on('error', onerror);else if (isArray(dest._events.error)) dest._events.error.unshift(onerror);else dest._events.error = [onerror, dest._events.error];

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var _i = 0; _i < len; _i++) {
      dests[_i].emit('unpipe', this);
    }return this;
  }

  // try to find the right one.
  var i = indexOf(state.pipes, dest);
  if (i === -1) return this;

  state.pipes.splice(i, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  // If listening to data, and it has not explicitly been paused,
  // then call resume to start the flow of data on the next tick.
  if (ev === 'data' && false !== this._readableState.flowing) {
    this.resume();
  }

  if (ev === 'readable' && !this._readableState.endEmitted) {
    var state = this._readableState;
    if (!state.readableListening) {
      state.readableListening = true;
      state.emittedReadable = false;
      state.needReadable = true;
      if (!state.reading) {
        processNextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this, state);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    processNextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  if (state.flowing) {
    do {
      var chunk = stream.read();
    } while (null !== chunk && state.flowing);
  }
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
  forEach(events, function (ev) {
    stream.on(ev, self.emit.bind(self, ev));
  });

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
function fromList(n, state) {
  var list = state.buffer;
  var length = state.length;
  var stringMode = !!state.decoder;
  var objectMode = !!state.objectMode;
  var ret;

  // nothing in the list, definitely empty.
  if (list.length === 0) return null;

  if (length === 0) ret = null;else if (objectMode) ret = list.shift();else if (!n || n >= length) {
    // read it all, truncate the array.
    if (stringMode) ret = list.join('');else if (list.length === 1) ret = list[0];else ret = Buffer.concat(list, length);
    list.length = 0;
  } else {
    // read just some of it.
    if (n < list[0].length) {
      // just take a part of the first list item.
      // slice is the same for buffers and strings.
      var buf = list[0];
      ret = buf.slice(0, n);
      list[0] = buf.slice(n);
    } else if (n === list[0].length) {
      // first list is a perfect match
      ret = list.shift();
    } else {
      // complex case.
      // we have enough to cover it, but it spans past the first buffer.
      if (stringMode) ret = '';else ret = new Buffer(n);

      var c = 0;
      for (var i = 0, l = list.length; i < l && c < n; i++) {
        var buf = list[0];
        var cpy = Math.min(n - c, buf.length);

        if (stringMode) ret += buf.slice(0, cpy);else buf.copy(ret, c, 0, cpy);

        if (cpy < buf.length) list[0] = buf.slice(cpy);else list.shift();

        c += cpy;
      }
    }
  }

  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('endReadable called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    processNextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
}).call(this,require('_process'))
},{"./_stream_duplex":108,"_process":106,"buffer":87,"core-util-is":90,"events":94,"inherits":96,"isarray":113,"process-nextick-args":105,"string_decoder/":129,"util":3}],111:[function(require,module,exports){
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

'use strict';

module.exports = Transform;

var Duplex = require('./_stream_duplex');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(Transform, Duplex);

function TransformState(stream) {
  this.afterTransform = function (er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
  this.writeencoding = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined) stream.push(data);

  cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = new TransformState(this);

  // when the writable side finishes, then flush out anything remaining.
  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  this.once('prefinish', function () {
    if (typeof this._flush === 'function') this._flush(function (er) {
      done(stream, er);
    });else done(stream);
  });
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

function done(stream, er) {
  if (er) return stream.emit('error', er);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var ts = stream._transformState;

  if (ws.length) throw new Error('calling transform done when ws.length != 0');

  if (ts.transforming) throw new Error('calling transform done when still transforming');

  return stream.push(null);
}
},{"./_stream_duplex":108,"core-util-is":90,"inherits":96}],112:[function(require,module,exports){
(function (process){
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.

'use strict';

module.exports = Writable;

/*<replacement>*/
var processNextTick = require('process-nextick-args');
/*</replacement>*/

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
/*</replacement>*/

/*<replacement>*/
var Buffer = require('buffer').Buffer;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: require('util-deprecate')
};
/*</replacement>*/

/*<replacement>*/
var Stream;
(function () {
  try {
    Stream = require('st' + 'ream');
  } catch (_) {} finally {
    if (!Stream) Stream = require('events').EventEmitter;
  }
})();
/*</replacement>*/

var Buffer = require('buffer').Buffer;

util.inherits(Writable, Stream);

function nop() {}

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

var Duplex;
function WritableState(options, stream) {
  Duplex = Duplex || require('./_stream_duplex');

  options = options || {};

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~ ~this.highWaterMark;

  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // create the two objects needed to store the corked requests
  // they are not a linked list, as no new elements are inserted in there
  this.corkedRequestsFree = new CorkedRequest(this);
  this.corkedRequestsFree.next = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function writableStateGetBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
    });
  } catch (_) {}
})();

var Duplex;
function Writable(options) {
  Duplex = Duplex || require('./_stream_duplex');

  // Writable ctor is applied to Duplexes, though they're not
  // instanceof Writable, they're instanceof Readable.
  if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe. Not readable.'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  processNextTick(cb, er);
}

// If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.
function validChunk(stream, state, chunk, cb) {
  var valid = true;

  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
    var er = new TypeError('Invalid non-string/buffer chunk');
    stream.emit('error', er);
    processNextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = new Buffer(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);

  if (Buffer.isBuffer(chunk)) encoding = 'buffer';
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;
  if (sync) processNextTick(cb, er);else cb(er);

  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
        afterWrite(stream, state, finished, cb);
      }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    while (entry) {
      buffer[count] = entry;
      entry = entry.next;
      count += 1;
    }

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    state.corkedRequestsFree = holder.next;
    holder.next = null;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequestCount = 0;
  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function prefinish(stream, state) {
  if (!state.prefinished) {
    state.prefinished = true;
    stream.emit('prefinish');
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    if (state.pendingcb === 0) {
      prefinish(stream, state);
      state.finished = true;
      stream.emit('finish');
    } else {
      prefinish(stream, state);
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) processNextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function (err) {
    var entry = _this.entry;
    _this.entry = null;
    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    if (state.corkedRequestsFree) {
      state.corkedRequestsFree.next = _this;
    } else {
      state.corkedRequestsFree = _this;
    }
  };
}
}).call(this,require('_process'))
},{"./_stream_duplex":108,"_process":106,"buffer":87,"core-util-is":90,"events":94,"inherits":96,"process-nextick-args":105,"util-deprecate":131}],113:[function(require,module,exports){
arguments[4][88][0].apply(exports,arguments)
},{"dup":88}],114:[function(require,module,exports){
module.exports = require("./lib/_stream_passthrough.js")

},{"./lib/_stream_passthrough.js":109}],115:[function(require,module,exports){
var Stream = (function (){
  try {
    return require('st' + 'ream'); // hack to fix a circular dependency issue when used with browserify
  } catch(_){}
}());
exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = Stream || exports;
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');

},{"./lib/_stream_duplex.js":108,"./lib/_stream_passthrough.js":109,"./lib/_stream_readable.js":110,"./lib/_stream_transform.js":111,"./lib/_stream_writable.js":112}],116:[function(require,module,exports){
module.exports = require("./lib/_stream_transform.js")

},{"./lib/_stream_transform.js":111}],117:[function(require,module,exports){
arguments[4][18][0].apply(exports,arguments)
},{"./lib/_stream_writable.js":112,"dup":18}],118:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Stream;

var EE = require('events').EventEmitter;
var inherits = require('inherits');

inherits(Stream, EE);
Stream.Readable = require('readable-stream/readable.js');
Stream.Writable = require('readable-stream/writable.js');
Stream.Duplex = require('readable-stream/duplex.js');
Stream.Transform = require('readable-stream/transform.js');
Stream.PassThrough = require('readable-stream/passthrough.js');

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;



// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};

},{"events":94,"inherits":96,"readable-stream/duplex.js":107,"readable-stream/passthrough.js":114,"readable-stream/readable.js":115,"readable-stream/transform.js":116,"readable-stream/writable.js":117}],119:[function(require,module,exports){
(function (process){
// Generated by CoffeeScript 1.9.2
var Transformer, stream, util,
  slice = [].slice;

stream = require('stream');

util = require('util');

module.exports = function() {
  var argument, callback, data, error, handler, i, j, k, len, options, result, transform, type, v;
  options = {};
  for (i = j = 0, len = arguments.length; j < len; i = ++j) {
    argument = arguments[i];
    type = typeof argument;
    if (argument === null) {
      type = 'null';
    } else if (type === 'object' && Array.isArray(argument)) {
      type = 'array';
    }
    if (i === 0) {
      if (type === 'function') {
        handler = argument;
      } else if (type !== null) {
        data = argument;
      }
      continue;
    }
    if (type === 'object') {
      for (k in argument) {
        v = argument[k];
        options[k] = v;
      }
    } else if (type === 'function') {
      if (handler && i === arguments.length - 1) {
        callback = argument;
      } else {
        handler = argument;
      }
    } else if (type !== 'null') {
      throw new Error('Invalid arguments');
    }
  }
  transform = new Transformer(options, handler);
  error = false;
  if (data) {
    process.nextTick(function() {
      var l, len1, row;
      for (l = 0, len1 = data.length; l < len1; l++) {
        row = data[l];
        if (error) {
          break;
        }
        transform.write(row);
      }
      return transform.end();
    });
  }
  if (callback || options.consume) {
    result = [];
    transform.on('readable', function() {
      var r, results;
      results = [];
      while ((r = transform.read())) {
        results.push(result.push(r));
      }
      return results;
    });
    transform.on('error', function(err) {
      error = true;
      if (callback) {
        return callback(err);
      }
    });
    transform.on('end', function() {
      if (callback && !error) {
        return callback(null, result);
      }
    });
  }
  return transform;
};

Transformer = function(options1, transform1) {
  var base;
  this.options = options1 != null ? options1 : {};
  this.transform = transform1;
  this.options.objectMode = true;
  if ((base = this.options).parallel == null) {
    base.parallel = 100;
  }
  stream.Transform.call(this, this.options);
  this.running = 0;
  this.started = 0;
  this.finished = 0;
  return this;
};

util.inherits(Transformer, stream.Transform);

module.exports.Transformer = Transformer;

Transformer.prototype._transform = function(chunk, encoding, cb) {
  var err;
  this.started++;
  this.running++;
  if (this.running < this.options.parallel) {
    cb();
    cb = null;
  }
  try {
    if (this.transform.length === 2) {
      this.transform.call(null, chunk, (function(_this) {
        return function() {
          var chunks, err;
          err = arguments[0], chunks = 2 <= arguments.length ? slice.call(arguments, 1) : [];
          return _this._done(err, chunks, cb);
        };
      })(this));
    } else {
      this._done(null, [this.transform.call(null, chunk)], cb);
    }
    return false;
  } catch (_error) {
    err = _error;
    return this._done(err);
  }
};

Transformer.prototype._flush = function(cb) {
  this._ending = function() {
    if (this.running === 0) {
      return cb();
    }
  };
  return this._ending();
};

Transformer.prototype._done = function(err, chunks, cb) {
  var chunk, j, len;
  this.running--;
  if (err) {
    return this.emit('error', err);
  }
  this.finished++;
  for (j = 0, len = chunks.length; j < len; j++) {
    chunk = chunks[j];
    if (typeof chunk === 'number') {
      chunk = "" + chunk;
    }
    if (chunk != null) {
      this.push(chunk);
    }
  }
  if (cb) {
    cb();
  }
  if (this._ending) {
    return this._ending();
  }
};

}).call(this,require('_process'))
},{"_process":106,"stream":118,"util":133}],120:[function(require,module,exports){
(function (process,Buffer){
module.exports = StringStream

var inherits = require('inherits')
var stream = require('readable-stream')

inherits(StringStream, stream.Readable)

function StringStream (str) {
  if (!(this instanceof StringStream)) return new StringStream(str)
  stream.Readable.call(this)
  this._str = str
}

StringStream.prototype._read = function () {
  if (!this.ended) {
    var self = this
    process.nextTick(function () {
      self.push(new Buffer(self._str))
      self.push(null)
    })
    this.ended = true
  }
}

}).call(this,require('_process'),require("buffer").Buffer)
},{"_process":106,"buffer":87,"inherits":96,"readable-stream":128}],121:[function(require,module,exports){
arguments[4][108][0].apply(exports,arguments)
},{"./_stream_readable":123,"./_stream_writable":125,"core-util-is":90,"dup":108,"inherits":96,"process-nextick-args":105}],122:[function(require,module,exports){
arguments[4][109][0].apply(exports,arguments)
},{"./_stream_transform":124,"core-util-is":90,"dup":109,"inherits":96}],123:[function(require,module,exports){
(function (process){
'use strict';

module.exports = Readable;

/*<replacement>*/
var processNextTick = require('process-nextick-args');
/*</replacement>*/

/*<replacement>*/
var isArray = require('isarray');
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = require('events').EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream;
(function () {
  try {
    Stream = require('st' + 'ream');
  } catch (_) {} finally {
    if (!Stream) Stream = require('events').EventEmitter;
  }
})();
/*</replacement>*/

var Buffer = require('buffer').Buffer;
/*<replacement>*/
var bufferShim = require('buffer-shims');
/*</replacement>*/

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

/*<replacement>*/
var debugUtil = require('util');
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var StringDecoder;

util.inherits(Readable, Stream);

var hasPrependListener = typeof EE.prototype.prependListener === 'function';

function prependListener(emitter, event, fn) {
  if (hasPrependListener) return emitter.prependListener(event, fn);

  // This is a brutally ugly hack to make sure that our error handler
  // is attached before any userland ones.  NEVER DO THIS. This is here
  // only because this code needs to continue to work with older versions
  // of Node.js that do not include the prependListener() method. The goal
  // is to eventually remove this hack.
  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

var Duplex;
function ReadableState(options, stream) {
  Duplex = Duplex || require('./_stream_duplex');

  options = options || {};

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~ ~this.highWaterMark;

  this.buffer = [];
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.
  this.ranOut = false;

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

var Duplex;
function Readable(options) {
  Duplex = Duplex || require('./_stream_duplex');

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options && typeof options.read === 'function') this._read = options.read;

  Stream.call(this);
}

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;

  if (!state.objectMode && typeof chunk === 'string') {
    encoding = encoding || state.defaultEncoding;
    if (encoding !== state.encoding) {
      chunk = bufferShim.from(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit('error', er);
  } else if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var _e = new Error('stream.unshift() after end event');
      stream.emit('error', _e);
    } else {
      var skipAdd;
      if (state.decoder && !addToFront && !encoding) {
        chunk = state.decoder.write(chunk);
        skipAdd = !state.objectMode && chunk.length === 0;
      }

      if (!addToFront) state.reading = false;

      // Don't add to the buffer if we've decoded to an empty string chunk and
      // we're not in object mode
      if (!skipAdd) {
        // if we want the data now, just emit it.
        if (state.flowing && state.length === 0 && !state.sync) {
          stream.emit('data', chunk);
          stream.read(0);
        } else {
          // update the buffer info.
          state.length += state.objectMode ? 1 : chunk.length;
          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

          if (state.needReadable) emitReadable(stream);
        }
      }

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

function howMuchToRead(n, state) {
  if (state.length === 0 && state.ended) return 0;

  if (state.objectMode) return n === 0 ? 0 : 1;

  if (n === null || isNaN(n)) {
    // only flow one buffer at a time
    if (state.flowing && state.buffer.length) return state.buffer[0].length;else return state.length;
  }

  if (n <= 0) return 0;

  // If we're asking for more than the target buffer level,
  // then raise the water mark.  Bump up to the next highest
  // power of 2, to prevent increasing it excessively in tiny
  // amounts.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);

  // don't have that much.  return null, unless we've ended.
  if (n > state.length) {
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    } else {
      return state.length;
    }
  }

  return n;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  var state = this._readableState;
  var nOrig = n;

  if (typeof n !== 'number' || n > 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  }

  if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
  }

  // If _read pushed data synchronously, then `reading` will be false,
  // and we need to re-evaluate how much data we can return to the user.
  if (doRead && !state.reading) n = howMuchToRead(nOrig, state);

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  }

  state.length -= n;

  // If we have nothing in the buffer, then we want to know
  // as soon as we *do* get something into the buffer.
  if (state.length === 0 && !state.ended) state.needReadable = true;

  // If we tried to read() past the EOF, then emit end on the next tick.
  if (nOrig !== n && state.ended && state.length === 0) endReadable(this);

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;
  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    processNextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable) {
    debug('onunpipe');
    if (readable === src) {
      cleanup();
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    var ret = dest.write(chunk);
    if (false === ret) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var _i = 0; _i < len; _i++) {
      dests[_i].emit('unpipe', this);
    }return this;
  }

  // try to find the right one.
  var i = indexOf(state.pipes, dest);
  if (i === -1) return this;

  state.pipes.splice(i, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  // If listening to data, and it has not explicitly been paused,
  // then call resume to start the flow of data on the next tick.
  if (ev === 'data' && false !== this._readableState.flowing) {
    this.resume();
  }

  if (ev === 'readable' && !this._readableState.endEmitted) {
    var state = this._readableState;
    if (!state.readableListening) {
      state.readableListening = true;
      state.emittedReadable = false;
      state.needReadable = true;
      if (!state.reading) {
        processNextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this, state);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    processNextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  if (state.flowing) {
    do {
      var chunk = stream.read();
    } while (null !== chunk && state.flowing);
  }
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
  forEach(events, function (ev) {
    stream.on(ev, self.emit.bind(self, ev));
  });

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
function fromList(n, state) {
  var list = state.buffer;
  var length = state.length;
  var stringMode = !!state.decoder;
  var objectMode = !!state.objectMode;
  var ret;

  // nothing in the list, definitely empty.
  if (list.length === 0) return null;

  if (length === 0) ret = null;else if (objectMode) ret = list.shift();else if (!n || n >= length) {
    // read it all, truncate the array.
    if (stringMode) ret = list.join('');else if (list.length === 1) ret = list[0];else ret = Buffer.concat(list, length);
    list.length = 0;
  } else {
    // read just some of it.
    if (n < list[0].length) {
      // just take a part of the first list item.
      // slice is the same for buffers and strings.
      var buf = list[0];
      ret = buf.slice(0, n);
      list[0] = buf.slice(n);
    } else if (n === list[0].length) {
      // first list is a perfect match
      ret = list.shift();
    } else {
      // complex case.
      // we have enough to cover it, but it spans past the first buffer.
      if (stringMode) ret = '';else ret = bufferShim.allocUnsafe(n);

      var c = 0;
      for (var i = 0, l = list.length; i < l && c < n; i++) {
        var _buf = list[0];
        var cpy = Math.min(n - c, _buf.length);

        if (stringMode) ret += _buf.slice(0, cpy);else _buf.copy(ret, c, 0, cpy);

        if (cpy < _buf.length) list[0] = _buf.slice(cpy);else list.shift();

        c += cpy;
      }
    }
  }

  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    processNextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
}).call(this,require('_process'))
},{"./_stream_duplex":121,"_process":106,"buffer":87,"buffer-shims":126,"core-util-is":90,"events":94,"inherits":96,"isarray":127,"process-nextick-args":105,"string_decoder/":129,"util":3}],124:[function(require,module,exports){
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

'use strict';

module.exports = Transform;

var Duplex = require('./_stream_duplex');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(Transform, Duplex);

function TransformState(stream) {
  this.afterTransform = function (er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
  this.writeencoding = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined) stream.push(data);

  cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = new TransformState(this);

  // when the writable side finishes, then flush out anything remaining.
  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  this.once('prefinish', function () {
    if (typeof this._flush === 'function') this._flush(function (er) {
      done(stream, er);
    });else done(stream);
  });
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('Not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

function done(stream, er) {
  if (er) return stream.emit('error', er);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var ts = stream._transformState;

  if (ws.length) throw new Error('Calling transform done when ws.length != 0');

  if (ts.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}
},{"./_stream_duplex":121,"core-util-is":90,"inherits":96}],125:[function(require,module,exports){
(function (process){
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.

'use strict';

module.exports = Writable;

/*<replacement>*/
var processNextTick = require('process-nextick-args');
/*</replacement>*/

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: require('util-deprecate')
};
/*</replacement>*/

/*<replacement>*/
var Stream;
(function () {
  try {
    Stream = require('st' + 'ream');
  } catch (_) {} finally {
    if (!Stream) Stream = require('events').EventEmitter;
  }
})();
/*</replacement>*/

var Buffer = require('buffer').Buffer;
/*<replacement>*/
var bufferShim = require('buffer-shims');
/*</replacement>*/

util.inherits(Writable, Stream);

function nop() {}

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

var Duplex;
function WritableState(options, stream) {
  Duplex = Duplex || require('./_stream_duplex');

  options = options || {};

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~ ~this.highWaterMark;

  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function writableStateGetBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
    });
  } catch (_) {}
})();

var Duplex;
function Writable(options) {
  Duplex = Duplex || require('./_stream_duplex');

  // Writable ctor is applied to Duplexes, though they're not
  // instanceof Writable, they're instanceof Readable.
  if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  processNextTick(cb, er);
}

// If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;
  // Always throw error if a null is written
  // if we are not in object mode then throw
  // if it is not a buffer, string, or undefined.
  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    processNextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = bufferShim.from(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);

  if (Buffer.isBuffer(chunk)) encoding = 'buffer';
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;
  if (sync) processNextTick(cb, er);else cb(er);

  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
        afterWrite(stream, state, finished, cb);
      }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    while (entry) {
      buffer[count] = entry;
      entry = entry.next;
      count += 1;
    }

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequestCount = 0;
  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function prefinish(stream, state) {
  if (!state.prefinished) {
    state.prefinished = true;
    stream.emit('prefinish');
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    if (state.pendingcb === 0) {
      prefinish(stream, state);
      state.finished = true;
      stream.emit('finish');
    } else {
      prefinish(stream, state);
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) processNextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function (err) {
    var entry = _this.entry;
    _this.entry = null;
    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    if (state.corkedRequestsFree) {
      state.corkedRequestsFree.next = _this;
    } else {
      state.corkedRequestsFree = _this;
    }
  };
}
}).call(this,require('_process'))
},{"./_stream_duplex":121,"_process":106,"buffer":87,"buffer-shims":126,"core-util-is":90,"events":94,"inherits":96,"process-nextick-args":105,"util-deprecate":131}],126:[function(require,module,exports){
(function (global){
'use strict';

var buffer = require('buffer');
var Buffer = buffer.Buffer;
var SlowBuffer = buffer.SlowBuffer;
var MAX_LEN = buffer.kMaxLength || 2147483647;
exports.alloc = function alloc(size, fill, encoding) {
  if (typeof Buffer.alloc === 'function') {
    return Buffer.alloc(size, fill, encoding);
  }
  if (typeof encoding === 'number') {
    throw new TypeError('encoding must not be number');
  }
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size > MAX_LEN) {
    throw new RangeError('size is too large');
  }
  var enc = encoding;
  var _fill = fill;
  if (_fill === undefined) {
    enc = undefined;
    _fill = 0;
  }
  var buf = new Buffer(size);
  if (typeof _fill === 'string') {
    var fillBuf = new Buffer(_fill, enc);
    var flen = fillBuf.length;
    var i = -1;
    while (++i < size) {
      buf[i] = fillBuf[i % flen];
    }
  } else {
    buf.fill(_fill);
  }
  return buf;
}
exports.allocUnsafe = function allocUnsafe(size) {
  if (typeof Buffer.allocUnsafe === 'function') {
    return Buffer.allocUnsafe(size);
  }
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size > MAX_LEN) {
    throw new RangeError('size is too large');
  }
  return new Buffer(size);
}
exports.from = function from(value, encodingOrOffset, length) {
  if (typeof Buffer.from === 'function' && (!global.Uint8Array || Uint8Array.from !== Buffer.from)) {
    return Buffer.from(value, encodingOrOffset, length);
  }
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }
  if (typeof value === 'string') {
    return new Buffer(value, encodingOrOffset);
  }
  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    var offset = encodingOrOffset;
    if (arguments.length === 1) {
      return new Buffer(value);
    }
    if (typeof offset === 'undefined') {
      offset = 0;
    }
    var len = length;
    if (typeof len === 'undefined') {
      len = value.byteLength - offset;
    }
    if (offset >= value.byteLength) {
      throw new RangeError('\'offset\' is out of bounds');
    }
    if (len > value.byteLength - offset) {
      throw new RangeError('\'length\' is out of bounds');
    }
    return new Buffer(value.slice(offset, offset + len));
  }
  if (Buffer.isBuffer(value)) {
    var out = new Buffer(value.length);
    value.copy(out, 0, 0, value.length);
    return out;
  }
  if (value) {
    if (Array.isArray(value) || (typeof ArrayBuffer !== 'undefined' && value.buffer instanceof ArrayBuffer) || 'length' in value) {
      return new Buffer(value);
    }
    if (value.type === 'Buffer' && Array.isArray(value.data)) {
      return new Buffer(value.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ' + 'ArrayBuffer, Array, or array-like object.');
}
exports.allocUnsafeSlow = function allocUnsafeSlow(size) {
  if (typeof Buffer.allocUnsafeSlow === 'function') {
    return Buffer.allocUnsafeSlow(size);
  }
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size >= MAX_LEN) {
    throw new RangeError('size is too large');
  }
  return new SlowBuffer(size);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"buffer":87}],127:[function(require,module,exports){
arguments[4][88][0].apply(exports,arguments)
},{"dup":88}],128:[function(require,module,exports){
(function (process){
var Stream = (function (){
  try {
    return require('st' + 'ream'); // hack to fix a circular dependency issue when used with browserify
  } catch(_){}
}());
exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = Stream || exports;
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');

if (!process.browser && process.env.READABLE_STREAM === 'disable' && Stream) {
  module.exports = Stream;
}

}).call(this,require('_process'))
},{"./lib/_stream_duplex.js":121,"./lib/_stream_passthrough.js":122,"./lib/_stream_readable.js":123,"./lib/_stream_transform.js":124,"./lib/_stream_writable.js":125,"_process":106}],129:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var Buffer = require('buffer').Buffer;

var isBufferEncoding = Buffer.isEncoding
  || function(encoding) {
       switch (encoding && encoding.toLowerCase()) {
         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
         default: return false;
       }
     }


function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.
var StringDecoder = exports.StringDecoder = function(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);
  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;
    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }

  // Enough space to store all bytes of a single character. UTF-8 needs 4
  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
  this.charBuffer = new Buffer(6);
  // Number of bytes received for the current incomplete multi-byte character.
  this.charReceived = 0;
  // Number of bytes expected for the current incomplete multi-byte character.
  this.charLength = 0;
};


// write decodes the given buffer and returns it as JS string that is
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .
StringDecoder.prototype.write = function(buffer) {
  var charStr = '';
  // if our last write ended with an incomplete multibyte character
  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var available = (buffer.length >= this.charLength - this.charReceived) ?
        this.charLength - this.charReceived :
        buffer.length;

    // add the new bytes to the char buffer
    buffer.copy(this.charBuffer, this.charReceived, 0, available);
    this.charReceived += available;

    if (this.charReceived < this.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    }

    // remove bytes belonging to the current character from the buffer
    buffer = buffer.slice(available, buffer.length);

    // get the character that was split
    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    var charCode = charStr.charCodeAt(charStr.length - 1);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }
    this.charReceived = this.charLength = 0;

    // if there are no more bytes in this buffer, just emit our char
    if (buffer.length === 0) {
      return charStr;
    }
    break;
  }

  // determine and set charLength / charReceived
  this.detectIncompleteChar(buffer);

  var end = buffer.length;
  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
    end -= this.charReceived;
  }

  charStr += buffer.toString(this.encoding, 0, end);

  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end);
  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    buffer.copy(this.charBuffer, 0, 0, size);
    return charStr.substring(0, end);
  }

  // or just emit the charStr
  return charStr;
};

// detectIncompleteChar determines if there is an incomplete UTF-8 character at
// the end of the given buffer. If so, it sets this.charLength to the byte
// length that character, and sets this.charReceived to the number of bytes
// that are available for this character.
StringDecoder.prototype.detectIncompleteChar = function(buffer) {
  // determine how many bytes we have to check at the end of this buffer
  var i = (buffer.length >= 3) ? 3 : buffer.length;

  // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.
  for (; i > 0; i--) {
    var c = buffer[buffer.length - i];

    // See http://en.wikipedia.org/wiki/UTF-8#Description

    // 110XXXXX
    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    }

    // 1110XXXX
    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    }

    // 11110XXX
    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = i;
};

StringDecoder.prototype.end = function(buffer) {
  var res = '';
  if (buffer && buffer.length)
    res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}

function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}

},{"buffer":87}],130:[function(require,module,exports){
var undefined = (void 0); // Paranoia

// Beyond this value, index getters/setters (i.e. array[0], array[1]) are so slow to
// create, and consume so much memory, that the browser appears frozen.
var MAX_ARRAY_LENGTH = 1e5;

// Approximations of internal ECMAScript conversion functions
var ECMAScript = (function() {
  // Stash a copy in case other scripts modify these
  var opts = Object.prototype.toString,
      ophop = Object.prototype.hasOwnProperty;

  return {
    // Class returns internal [[Class]] property, used to avoid cross-frame instanceof issues:
    Class: function(v) { return opts.call(v).replace(/^\[object *|\]$/g, ''); },
    HasProperty: function(o, p) { return p in o; },
    HasOwnProperty: function(o, p) { return ophop.call(o, p); },
    IsCallable: function(o) { return typeof o === 'function'; },
    ToInt32: function(v) { return v >> 0; },
    ToUint32: function(v) { return v >>> 0; }
  };
}());

// Snapshot intrinsics
var LN2 = Math.LN2,
    abs = Math.abs,
    floor = Math.floor,
    log = Math.log,
    min = Math.min,
    pow = Math.pow,
    round = Math.round;

// ES5: lock down object properties
function configureProperties(obj) {
  if (getOwnPropNames && defineProp) {
    var props = getOwnPropNames(obj), i;
    for (i = 0; i < props.length; i += 1) {
      defineProp(obj, props[i], {
        value: obj[props[i]],
        writable: false,
        enumerable: false,
        configurable: false
      });
    }
  }
}

// emulate ES5 getter/setter API using legacy APIs
// http://blogs.msdn.com/b/ie/archive/2010/09/07/transitioning-existing-code-to-the-es5-getter-setter-apis.aspx
// (second clause tests for Object.defineProperty() in IE<9 that only supports extending DOM prototypes, but
// note that IE<9 does not support __defineGetter__ or __defineSetter__ so it just renders the method harmless)
var defineProp
if (Object.defineProperty && (function() {
      try {
        Object.defineProperty({}, 'x', {});
        return true;
      } catch (e) {
        return false;
      }
    })()) {
  defineProp = Object.defineProperty;
} else {
  defineProp = function(o, p, desc) {
    if (!o === Object(o)) throw new TypeError("Object.defineProperty called on non-object");
    if (ECMAScript.HasProperty(desc, 'get') && Object.prototype.__defineGetter__) { Object.prototype.__defineGetter__.call(o, p, desc.get); }
    if (ECMAScript.HasProperty(desc, 'set') && Object.prototype.__defineSetter__) { Object.prototype.__defineSetter__.call(o, p, desc.set); }
    if (ECMAScript.HasProperty(desc, 'value')) { o[p] = desc.value; }
    return o;
  };
}

var getOwnPropNames = Object.getOwnPropertyNames || function (o) {
  if (o !== Object(o)) throw new TypeError("Object.getOwnPropertyNames called on non-object");
  var props = [], p;
  for (p in o) {
    if (ECMAScript.HasOwnProperty(o, p)) {
      props.push(p);
    }
  }
  return props;
};

// ES5: Make obj[index] an alias for obj._getter(index)/obj._setter(index, value)
// for index in 0 ... obj.length
function makeArrayAccessors(obj) {
  if (!defineProp) { return; }

  if (obj.length > MAX_ARRAY_LENGTH) throw new RangeError("Array too large for polyfill");

  function makeArrayAccessor(index) {
    defineProp(obj, index, {
      'get': function() { return obj._getter(index); },
      'set': function(v) { obj._setter(index, v); },
      enumerable: true,
      configurable: false
    });
  }

  var i;
  for (i = 0; i < obj.length; i += 1) {
    makeArrayAccessor(i);
  }
}

// Internal conversion functions:
//    pack<Type>()   - take a number (interpreted as Type), output a byte array
//    unpack<Type>() - take a byte array, output a Type-like number

function as_signed(value, bits) { var s = 32 - bits; return (value << s) >> s; }
function as_unsigned(value, bits) { var s = 32 - bits; return (value << s) >>> s; }

function packI8(n) { return [n & 0xff]; }
function unpackI8(bytes) { return as_signed(bytes[0], 8); }

function packU8(n) { return [n & 0xff]; }
function unpackU8(bytes) { return as_unsigned(bytes[0], 8); }

function packU8Clamped(n) { n = round(Number(n)); return [n < 0 ? 0 : n > 0xff ? 0xff : n & 0xff]; }

function packI16(n) { return [(n >> 8) & 0xff, n & 0xff]; }
function unpackI16(bytes) { return as_signed(bytes[0] << 8 | bytes[1], 16); }

function packU16(n) { return [(n >> 8) & 0xff, n & 0xff]; }
function unpackU16(bytes) { return as_unsigned(bytes[0] << 8 | bytes[1], 16); }

function packI32(n) { return [(n >> 24) & 0xff, (n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff]; }
function unpackI32(bytes) { return as_signed(bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], 32); }

function packU32(n) { return [(n >> 24) & 0xff, (n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff]; }
function unpackU32(bytes) { return as_unsigned(bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], 32); }

function packIEEE754(v, ebits, fbits) {

  var bias = (1 << (ebits - 1)) - 1,
      s, e, f, ln,
      i, bits, str, bytes;

  function roundToEven(n) {
    var w = floor(n), f = n - w;
    if (f < 0.5)
      return w;
    if (f > 0.5)
      return w + 1;
    return w % 2 ? w + 1 : w;
  }

  // Compute sign, exponent, fraction
  if (v !== v) {
    // NaN
    // http://dev.w3.org/2006/webapi/WebIDL/#es-type-mapping
    e = (1 << ebits) - 1; f = pow(2, fbits - 1); s = 0;
  } else if (v === Infinity || v === -Infinity) {
    e = (1 << ebits) - 1; f = 0; s = (v < 0) ? 1 : 0;
  } else if (v === 0) {
    e = 0; f = 0; s = (1 / v === -Infinity) ? 1 : 0;
  } else {
    s = v < 0;
    v = abs(v);

    if (v >= pow(2, 1 - bias)) {
      e = min(floor(log(v) / LN2), 1023);
      f = roundToEven(v / pow(2, e) * pow(2, fbits));
      if (f / pow(2, fbits) >= 2) {
        e = e + 1;
        f = 1;
      }
      if (e > bias) {
        // Overflow
        e = (1 << ebits) - 1;
        f = 0;
      } else {
        // Normalized
        e = e + bias;
        f = f - pow(2, fbits);
      }
    } else {
      // Denormalized
      e = 0;
      f = roundToEven(v / pow(2, 1 - bias - fbits));
    }
  }

  // Pack sign, exponent, fraction
  bits = [];
  for (i = fbits; i; i -= 1) { bits.push(f % 2 ? 1 : 0); f = floor(f / 2); }
  for (i = ebits; i; i -= 1) { bits.push(e % 2 ? 1 : 0); e = floor(e / 2); }
  bits.push(s ? 1 : 0);
  bits.reverse();
  str = bits.join('');

  // Bits to bytes
  bytes = [];
  while (str.length) {
    bytes.push(parseInt(str.substring(0, 8), 2));
    str = str.substring(8);
  }
  return bytes;
}

function unpackIEEE754(bytes, ebits, fbits) {

  // Bytes to bits
  var bits = [], i, j, b, str,
      bias, s, e, f;

  for (i = bytes.length; i; i -= 1) {
    b = bytes[i - 1];
    for (j = 8; j; j -= 1) {
      bits.push(b % 2 ? 1 : 0); b = b >> 1;
    }
  }
  bits.reverse();
  str = bits.join('');

  // Unpack sign, exponent, fraction
  bias = (1 << (ebits - 1)) - 1;
  s = parseInt(str.substring(0, 1), 2) ? -1 : 1;
  e = parseInt(str.substring(1, 1 + ebits), 2);
  f = parseInt(str.substring(1 + ebits), 2);

  // Produce number
  if (e === (1 << ebits) - 1) {
    return f !== 0 ? NaN : s * Infinity;
  } else if (e > 0) {
    // Normalized
    return s * pow(2, e - bias) * (1 + f / pow(2, fbits));
  } else if (f !== 0) {
    // Denormalized
    return s * pow(2, -(bias - 1)) * (f / pow(2, fbits));
  } else {
    return s < 0 ? -0 : 0;
  }
}

function unpackF64(b) { return unpackIEEE754(b, 11, 52); }
function packF64(v) { return packIEEE754(v, 11, 52); }
function unpackF32(b) { return unpackIEEE754(b, 8, 23); }
function packF32(v) { return packIEEE754(v, 8, 23); }


//
// 3 The ArrayBuffer Type
//

(function() {

  /** @constructor */
  var ArrayBuffer = function ArrayBuffer(length) {
    length = ECMAScript.ToInt32(length);
    if (length < 0) throw new RangeError('ArrayBuffer size is not a small enough positive integer');

    this.byteLength = length;
    this._bytes = [];
    this._bytes.length = length;

    var i;
    for (i = 0; i < this.byteLength; i += 1) {
      this._bytes[i] = 0;
    }

    configureProperties(this);
  };

  exports.ArrayBuffer = exports.ArrayBuffer || ArrayBuffer;

  //
  // 4 The ArrayBufferView Type
  //

  // NOTE: this constructor is not exported
  /** @constructor */
  var ArrayBufferView = function ArrayBufferView() {
    //this.buffer = null;
    //this.byteOffset = 0;
    //this.byteLength = 0;
  };

  //
  // 5 The Typed Array View Types
  //

  function makeConstructor(bytesPerElement, pack, unpack) {
    // Each TypedArray type requires a distinct constructor instance with
    // identical logic, which this produces.

    var ctor;
    ctor = function(buffer, byteOffset, length) {
      var array, sequence, i, s;

      if (!arguments.length || typeof arguments[0] === 'number') {
        // Constructor(unsigned long length)
        this.length = ECMAScript.ToInt32(arguments[0]);
        if (length < 0) throw new RangeError('ArrayBufferView size is not a small enough positive integer');

        this.byteLength = this.length * this.BYTES_PER_ELEMENT;
        this.buffer = new ArrayBuffer(this.byteLength);
        this.byteOffset = 0;
      } else if (typeof arguments[0] === 'object' && arguments[0].constructor === ctor) {
        // Constructor(TypedArray array)
        array = arguments[0];

        this.length = array.length;
        this.byteLength = this.length * this.BYTES_PER_ELEMENT;
        this.buffer = new ArrayBuffer(this.byteLength);
        this.byteOffset = 0;

        for (i = 0; i < this.length; i += 1) {
          this._setter(i, array._getter(i));
        }
      } else if (typeof arguments[0] === 'object' &&
                 !(arguments[0] instanceof ArrayBuffer || ECMAScript.Class(arguments[0]) === 'ArrayBuffer')) {
        // Constructor(sequence<type> array)
        sequence = arguments[0];

        this.length = ECMAScript.ToUint32(sequence.length);
        this.byteLength = this.length * this.BYTES_PER_ELEMENT;
        this.buffer = new ArrayBuffer(this.byteLength);
        this.byteOffset = 0;

        for (i = 0; i < this.length; i += 1) {
          s = sequence[i];
          this._setter(i, Number(s));
        }
      } else if (typeof arguments[0] === 'object' &&
                 (arguments[0] instanceof ArrayBuffer || ECMAScript.Class(arguments[0]) === 'ArrayBuffer')) {
        // Constructor(ArrayBuffer buffer,
        //             optional unsigned long byteOffset, optional unsigned long length)
        this.buffer = buffer;

        this.byteOffset = ECMAScript.ToUint32(byteOffset);
        if (this.byteOffset > this.buffer.byteLength) {
          throw new RangeError("byteOffset out of range");
        }

        if (this.byteOffset % this.BYTES_PER_ELEMENT) {
          // The given byteOffset must be a multiple of the element
          // size of the specific type, otherwise an exception is raised.
          throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.");
        }

        if (arguments.length < 3) {
          this.byteLength = this.buffer.byteLength - this.byteOffset;

          if (this.byteLength % this.BYTES_PER_ELEMENT) {
            throw new RangeError("length of buffer minus byteOffset not a multiple of the element size");
          }
          this.length = this.byteLength / this.BYTES_PER_ELEMENT;
        } else {
          this.length = ECMAScript.ToUint32(length);
          this.byteLength = this.length * this.BYTES_PER_ELEMENT;
        }

        if ((this.byteOffset + this.byteLength) > this.buffer.byteLength) {
          throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
        }
      } else {
        throw new TypeError("Unexpected argument type(s)");
      }

      this.constructor = ctor;

      configureProperties(this);
      makeArrayAccessors(this);
    };

    ctor.prototype = new ArrayBufferView();
    ctor.prototype.BYTES_PER_ELEMENT = bytesPerElement;
    ctor.prototype._pack = pack;
    ctor.prototype._unpack = unpack;
    ctor.BYTES_PER_ELEMENT = bytesPerElement;

    // getter type (unsigned long index);
    ctor.prototype._getter = function(index) {
      if (arguments.length < 1) throw new SyntaxError("Not enough arguments");

      index = ECMAScript.ToUint32(index);
      if (index >= this.length) {
        return undefined;
      }

      var bytes = [], i, o;
      for (i = 0, o = this.byteOffset + index * this.BYTES_PER_ELEMENT;
           i < this.BYTES_PER_ELEMENT;
           i += 1, o += 1) {
        bytes.push(this.buffer._bytes[o]);
      }
      return this._unpack(bytes);
    };

    // NONSTANDARD: convenience alias for getter: type get(unsigned long index);
    ctor.prototype.get = ctor.prototype._getter;

    // setter void (unsigned long index, type value);
    ctor.prototype._setter = function(index, value) {
      if (arguments.length < 2) throw new SyntaxError("Not enough arguments");

      index = ECMAScript.ToUint32(index);
      if (index >= this.length) {
        return undefined;
      }

      var bytes = this._pack(value), i, o;
      for (i = 0, o = this.byteOffset + index * this.BYTES_PER_ELEMENT;
           i < this.BYTES_PER_ELEMENT;
           i += 1, o += 1) {
        this.buffer._bytes[o] = bytes[i];
      }
    };

    // void set(TypedArray array, optional unsigned long offset);
    // void set(sequence<type> array, optional unsigned long offset);
    ctor.prototype.set = function(index, value) {
      if (arguments.length < 1) throw new SyntaxError("Not enough arguments");
      var array, sequence, offset, len,
          i, s, d,
          byteOffset, byteLength, tmp;

      if (typeof arguments[0] === 'object' && arguments[0].constructor === this.constructor) {
        // void set(TypedArray array, optional unsigned long offset);
        array = arguments[0];
        offset = ECMAScript.ToUint32(arguments[1]);

        if (offset + array.length > this.length) {
          throw new RangeError("Offset plus length of array is out of range");
        }

        byteOffset = this.byteOffset + offset * this.BYTES_PER_ELEMENT;
        byteLength = array.length * this.BYTES_PER_ELEMENT;

        if (array.buffer === this.buffer) {
          tmp = [];
          for (i = 0, s = array.byteOffset; i < byteLength; i += 1, s += 1) {
            tmp[i] = array.buffer._bytes[s];
          }
          for (i = 0, d = byteOffset; i < byteLength; i += 1, d += 1) {
            this.buffer._bytes[d] = tmp[i];
          }
        } else {
          for (i = 0, s = array.byteOffset, d = byteOffset;
               i < byteLength; i += 1, s += 1, d += 1) {
            this.buffer._bytes[d] = array.buffer._bytes[s];
          }
        }
      } else if (typeof arguments[0] === 'object' && typeof arguments[0].length !== 'undefined') {
        // void set(sequence<type> array, optional unsigned long offset);
        sequence = arguments[0];
        len = ECMAScript.ToUint32(sequence.length);
        offset = ECMAScript.ToUint32(arguments[1]);

        if (offset + len > this.length) {
          throw new RangeError("Offset plus length of array is out of range");
        }

        for (i = 0; i < len; i += 1) {
          s = sequence[i];
          this._setter(offset + i, Number(s));
        }
      } else {
        throw new TypeError("Unexpected argument type(s)");
      }
    };

    // TypedArray subarray(long begin, optional long end);
    ctor.prototype.subarray = function(start, end) {
      function clamp(v, min, max) { return v < min ? min : v > max ? max : v; }

      start = ECMAScript.ToInt32(start);
      end = ECMAScript.ToInt32(end);

      if (arguments.length < 1) { start = 0; }
      if (arguments.length < 2) { end = this.length; }

      if (start < 0) { start = this.length + start; }
      if (end < 0) { end = this.length + end; }

      start = clamp(start, 0, this.length);
      end = clamp(end, 0, this.length);

      var len = end - start;
      if (len < 0) {
        len = 0;
      }

      return new this.constructor(
        this.buffer, this.byteOffset + start * this.BYTES_PER_ELEMENT, len);
    };

    return ctor;
  }

  var Int8Array = makeConstructor(1, packI8, unpackI8);
  var Uint8Array = makeConstructor(1, packU8, unpackU8);
  var Uint8ClampedArray = makeConstructor(1, packU8Clamped, unpackU8);
  var Int16Array = makeConstructor(2, packI16, unpackI16);
  var Uint16Array = makeConstructor(2, packU16, unpackU16);
  var Int32Array = makeConstructor(4, packI32, unpackI32);
  var Uint32Array = makeConstructor(4, packU32, unpackU32);
  var Float32Array = makeConstructor(4, packF32, unpackF32);
  var Float64Array = makeConstructor(8, packF64, unpackF64);

  exports.Int8Array = exports.Int8Array || Int8Array;
  exports.Uint8Array = exports.Uint8Array || Uint8Array;
  exports.Uint8ClampedArray = exports.Uint8ClampedArray || Uint8ClampedArray;
  exports.Int16Array = exports.Int16Array || Int16Array;
  exports.Uint16Array = exports.Uint16Array || Uint16Array;
  exports.Int32Array = exports.Int32Array || Int32Array;
  exports.Uint32Array = exports.Uint32Array || Uint32Array;
  exports.Float32Array = exports.Float32Array || Float32Array;
  exports.Float64Array = exports.Float64Array || Float64Array;
}());

//
// 6 The DataView View Type
//

(function() {
  function r(array, index) {
    return ECMAScript.IsCallable(array.get) ? array.get(index) : array[index];
  }

  var IS_BIG_ENDIAN = (function() {
    var u16array = new(exports.Uint16Array)([0x1234]),
        u8array = new(exports.Uint8Array)(u16array.buffer);
    return r(u8array, 0) === 0x12;
  }());

  // Constructor(ArrayBuffer buffer,
  //             optional unsigned long byteOffset,
  //             optional unsigned long byteLength)
  /** @constructor */
  var DataView = function DataView(buffer, byteOffset, byteLength) {
    if (arguments.length === 0) {
      buffer = new exports.ArrayBuffer(0);
    } else if (!(buffer instanceof exports.ArrayBuffer || ECMAScript.Class(buffer) === 'ArrayBuffer')) {
      throw new TypeError("TypeError");
    }

    this.buffer = buffer || new exports.ArrayBuffer(0);

    this.byteOffset = ECMAScript.ToUint32(byteOffset);
    if (this.byteOffset > this.buffer.byteLength) {
      throw new RangeError("byteOffset out of range");
    }

    if (arguments.length < 3) {
      this.byteLength = this.buffer.byteLength - this.byteOffset;
    } else {
      this.byteLength = ECMAScript.ToUint32(byteLength);
    }

    if ((this.byteOffset + this.byteLength) > this.buffer.byteLength) {
      throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
    }

    configureProperties(this);
  };

  function makeGetter(arrayType) {
    return function(byteOffset, littleEndian) {

      byteOffset = ECMAScript.ToUint32(byteOffset);

      if (byteOffset + arrayType.BYTES_PER_ELEMENT > this.byteLength) {
        throw new RangeError("Array index out of range");
      }
      byteOffset += this.byteOffset;

      var uint8Array = new exports.Uint8Array(this.buffer, byteOffset, arrayType.BYTES_PER_ELEMENT),
          bytes = [], i;
      for (i = 0; i < arrayType.BYTES_PER_ELEMENT; i += 1) {
        bytes.push(r(uint8Array, i));
      }

      if (Boolean(littleEndian) === Boolean(IS_BIG_ENDIAN)) {
        bytes.reverse();
      }

      return r(new arrayType(new exports.Uint8Array(bytes).buffer), 0);
    };
  }

  DataView.prototype.getUint8 = makeGetter(exports.Uint8Array);
  DataView.prototype.getInt8 = makeGetter(exports.Int8Array);
  DataView.prototype.getUint16 = makeGetter(exports.Uint16Array);
  DataView.prototype.getInt16 = makeGetter(exports.Int16Array);
  DataView.prototype.getUint32 = makeGetter(exports.Uint32Array);
  DataView.prototype.getInt32 = makeGetter(exports.Int32Array);
  DataView.prototype.getFloat32 = makeGetter(exports.Float32Array);
  DataView.prototype.getFloat64 = makeGetter(exports.Float64Array);

  function makeSetter(arrayType) {
    return function(byteOffset, value, littleEndian) {

      byteOffset = ECMAScript.ToUint32(byteOffset);
      if (byteOffset + arrayType.BYTES_PER_ELEMENT > this.byteLength) {
        throw new RangeError("Array index out of range");
      }

      // Get bytes
      var typeArray = new arrayType([value]),
          byteArray = new exports.Uint8Array(typeArray.buffer),
          bytes = [], i, byteView;

      for (i = 0; i < arrayType.BYTES_PER_ELEMENT; i += 1) {
        bytes.push(r(byteArray, i));
      }

      // Flip if necessary
      if (Boolean(littleEndian) === Boolean(IS_BIG_ENDIAN)) {
        bytes.reverse();
      }

      // Write them
      byteView = new exports.Uint8Array(this.buffer, byteOffset, arrayType.BYTES_PER_ELEMENT);
      byteView.set(bytes);
    };
  }

  DataView.prototype.setUint8 = makeSetter(exports.Uint8Array);
  DataView.prototype.setInt8 = makeSetter(exports.Int8Array);
  DataView.prototype.setUint16 = makeSetter(exports.Uint16Array);
  DataView.prototype.setInt16 = makeSetter(exports.Int16Array);
  DataView.prototype.setUint32 = makeSetter(exports.Uint32Array);
  DataView.prototype.setInt32 = makeSetter(exports.Int32Array);
  DataView.prototype.setFloat32 = makeSetter(exports.Float32Array);
  DataView.prototype.setFloat64 = makeSetter(exports.Float64Array);

  exports.DataView = exports.DataView || DataView;

}());

},{}],131:[function(require,module,exports){
(function (global){

/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],132:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],133:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":132,"_process":106,"inherits":96}],134:[function(require,module,exports){
// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}

},{}],135:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* 
 * This defines the namespace for the UCUM classes and provides
 * a place for the definition of global variables and constants.
 *
 * The javascript for this UCUM implementation uses syntax as
 * defined by the ECMAScript 6 standard
 */

var Ucum = exports.Ucum = { // Namespace for UCUM classes

  /**
   *  Flag indicating whether or not we're using case sensitive labels
   *  I don't think we need this.  I think we're just going with
   *  case sensitive, per Clem.   Gunther's code has this flag, but I
   *  am removing it, at least for now.  lm, 6/2016
   */
  //caseSensitive_: true ,

  /**
   *  The number of elements in a Dimension array.   Currently this
   *  is set as a configuration variable, but when we get to the point
   *  of loading the unit definitions from a file, this value will be
   *  set from that.
   */
  dimLen_: 7,

  /**
   *  The number of decimal digits to be displayed for a unit amount
   */
  decDigits_: 4,

  /**
   * The string used to separate a unit code and unit name when they
   * are displayed together
   */
  codeSep_: ' - ',

  /**
   * Opening HTML used to emphasize portions of error messages.  Used when
   * displaying messages on a web site; should be blank when output is
   * to a file.  See UnitString.parseString where they start out blank in
   * the constructor.
   */
  openEmph_: '<span class="emphSpan">',

  /**
   * Closing HTML used to emphasize portions of error messages.  Used when
   * displaying messages on a web site; should be blank when output is
   * to a file.  See UnitString.parseString where they start out blank in
   * the constructor.
   */
  closeEmph_: '</span>',

  /**
   * Message that is displayed when annotations are included in a unit
   * string, to let the user know how they are interpreted.
   */
  bracesMsg_: 'Annotations (text in curley braces {}) have no influence ' + 'on the processing of a unit string.'

};


},{}],136:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class implements an object containing the vector of exponents for
 * a unit and its operations for addition, subtraction, and multiplication
 * with a scalar.
 *
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 */
var UC = require('./config.js');
var isInteger = require("is-integer");

var Dimension = exports.Dimension = function () {

  /**
   * Constructor.
   *
   * @param dimSetting an optional parameter that may be:
   *  null, which means that this object will be created with a vector
   *   containing all zeroes; or
   *  an array, which must be the length defined by Ucum.dimLen_, and
   *    whose contents will be copied to this new object's vector; or
   *  a number, which must be between 0 and 1 less than the vector length
   *    defined by Ucum.dimLen_.  This new object's vector will be
   *    initialize to zero for all elements except the one whose index
   *    matches the number passed in.  That element will be set to one.
    * @throws an error if the dimSetting parameter does not meet the types
   *  listed above.
   *  An error will also be thrown if Ucum.dimLen_ has not been set yet,
   *  i.e., is still zero.   Currently that won't happen, because the
   *  value is set in the config.js file.  But further down the road
   *  the setting will come from a definitions input file, so we check
   *  here anyway.
   *
   */
  function Dimension(dimSetting) {
    _classCallCheck(this, Dimension);

    if (UC.Ucum.dimLen_ === 0) {
      throw new Error('Dimension.setDimensionLen must be called before ' + 'Dimension constructor');
    }
    if (dimSetting === undefined || dimSetting === null) {
      //this.dimVec_ = new Array(UC.Ucum.dimLen_) ;
      //this.assignZero() ;
      this.dimVec_ = null;
    } else if (dimSetting instanceof Array) {
      if (dimSetting.length !== UC.Ucum.dimLen_) {
        throw new Error('Parameter error, incorrect length of vector passed to ' + 'Dimension constructor');
      }
      this.dimVec_ = [];
      for (var d = 0; d < UC.Ucum.dimLen_; d++) {
        this.dimVec_[d] = dimSetting[d];
      }
    }
    // In es6 this should be Number.isInteger(dimSetting).  But Babel
    // doesn't transpile that correctly, so we need to use the isInteger
    // module.  :0
    else if (isInteger(dimSetting)) {
        if (dimSetting < 0 || dimSetting >= UC.Ucum.dimLen_) {
          throw new Error('Parameter error, invalid element number specified for ' + 'Dimension constructor');
        }
        this.dimVec_ = new Array(UC.Ucum.dimLen_);
        this.assignZero();
        this.dimVec_[dimSetting] = 1;
      }
  } // end constructor


  /**
   * This function sets the number of elements in the dimension vector.
   * It may only be set once, presumably when unit definitions are being
   * loaded in.
   *
   * At the moment this is commented out because we are setting the value in
   * config.js.  In the future this value will come from the definitions file
   * - but we're not there yet.
   *
   * @param the number of dimensions
   * @throws an error if Ucum.dimLen_ has already been set (i.e., is not zero)
   */
  /*
  setDimensionLen(n) {
    if(Ucum.dimLen_ != 0)
      throw new IllegalStateException("setDimensionLen was called more than once");
    Ucum.dimLen_ = n;
  } // end setDimensionLen
  **/

  /**
   * Returns the current setting for Ucum.dimLen_
   *
   * @return the current setting
   * @throws an error if the value has not yet been set
   */


  _createClass(Dimension, [{
    key: 'getDimensionLen',
    value: function getDimensionLen() {
      if (UC.Ucum.dimLen_ == 0) {
        throw new Error('Dimension.setDimensionLen must be called before it can be ' + 'by Dimension.getLen');
      }
      return UC.Ucum.dimLen_;
    }

    /**
     * Sets the element at the specified position to 1 if the dimension vector
     * is not null; else nothing is changed.
     *
     * @param indexPos the index of the element to be set
     * @throws an exception if the specified position is invalid, i.e., not a
     *   number or is less than 0 or greater than Ucum.dimLen_
     **/

  }, {
    key: 'setElementAt',
    value: function setElementAt(indexPos) {

      if (!Number.isInteger(indexPos) || indexPos < 0 || indexPos >= UC.Ucum.dimLen_) {
        throw new Error('Dimension.setElementAt called with an invalid index ' + ('position (' + indexPos + ')'));
      }

      if (this.dimVec_) this.dimVec_[indexPos] = 1;
    }

    /**
     * Gets the value of the element at the specified position
     *
     * @param indexPos the index of the element whose value is to be returned
     * @return the value of the element at indexPos, or null if the dimension
     *  vector is null
     * @throws an exception if the specified position is invalid, i.e., not a
     *   number or is less than 0 or greater than Ucum.dimLen_
     **/

  }, {
    key: 'getElementAt',
    value: function getElementAt(indexPos) {
      if (!Number.isInteger(indexPos) || indexPos < 0 || indexPos >= UC.Ucum.dimLen_) {
        throw new Error('Dimension.getElementAt called with an invalid index ' + ('position (' + indexPos + ')'));
      }
      var ret = null;
      if (this.dimVec_) ret = this.dimVec_[indexPos];
      return ret;
    }

    /**
     * This returns the value of the property named by the parameter
     * passed in.  Although we currently only have one property, dimVec_,
     * that this will get, it's possible that we'll have additional
     * properties.   If we don't this could just be replaced by a
     * getVector function.
     *
     * @param propertyName name of the property to be returned, with
     *        or without the trailing underscore.
     * @return the requested property, if found for this Dimension
     * @throws an error if the property is not found for this Dimension
     */

  }, {
    key: 'getProperty',
    value: function getProperty(propertyName) {
      var uProp = !propertyName.endsWith('_') ? propertyName + '_' : propertyName;
      if (!this.hasOwnProperty(uProp)) throw new Error('Dimension does not have requested property ' + ('(' + propertyName + ')'));else return this[uProp];
    } // end getProperty


    /**
     * Return a string that represents the dimension vector.  Returns null if
     * the dimension vector is null.
     *
     * @return the string that represents the dimension vector.  The
     *         values are enclosed in square brackets, each separated
     *         by a comma and a space
     **/

  }, {
    key: 'toString',
    value: function toString() {
      var ret = null;
      if (this.dimVec_) ret = '[' + this.dimVec_.join(', ') + ']';
      return ret;
    }

    /**
     * Adds the vector of the dimension object passed in to this
     * dimension object's vector.  This object's vector is changed.
     * If either dimension vector is null, no changes are made to this object.
     *
     *
     * @param dim2 the dimension whose vector is to be added to this one
     * @return this object
     * @throws an exception if dim2 is not a Dimension object
     **/

  }, {
    key: 'add',
    value: function add(dim2) {
      if (!dim2 instanceof Dimension) {
        throw new Error('Dimension.add called with an invalid parameter - ' + ((typeof dim2 === 'undefined' ? 'undefined' : _typeof(dim2)) + ' instead of a Dimension object'));
      }
      if (this.dimVec_ && dim2.dimVec_) {
        for (var i = 0; i < UC.Ucum.dimLen_; i++) {
          this.dimVec_[i] += dim2.dimVec_[i];
        }
      }
      return this;
    }

    /**
     * Subtracts the vector of the dimension object passed in to this
     * dimension object's vector.  This object's vector is changed.
     * If either dimension vector is null, no changes are made to this object.
     *
     * @param dim2 the dimension whose vector is to be subtraced from this one
     * @return this object
     * @throws an exception if dim2 is not a Dimension object
     **/

  }, {
    key: 'sub',
    value: function sub(dim2) {
      if (!dim2 instanceof Dimension) {
        throw new Error('Dimension.sub called with an invalid parameter - ' + ((typeof dim2 === 'undefined' ? 'undefined' : _typeof(dim2)) + ' instead of a Dimension object'));
      }
      if (this.dimVec_ && dim2.dimVec_) {
        for (var i = 0; i < UC.Ucum.dimLen_; i++) {
          this.dimVec_[i] -= dim2.dimVec_[i];
        }
      }
      return this;
    }

    /**
     * Inverts this dimension object's vector (by multiplying each element
     * by negative 1).  This object's vector is changed - unless it is null,
     * in which case it stays that way.
     *
     * @return this object
     **/

  }, {
    key: 'minus',
    value: function minus() {
      if (this.dimVec_) {
        for (var i = 0; i < UC.Ucum.dimLen_; i++) {
          this.dimVec_[i] = -this.dimVec_[i];
        }
      }
      return this;
    }

    /**
     * Multiplies this dimension object's vector with a scalar.  This is used
     * when a unit is raised to a power.  This object's vector is changed unless
     * the vector is null, in which case it stays that way.
     *
     * @param s the scalar to use
     * @return this object
     * @throws an exception if s is not a number
     */

  }, {
    key: 'mul',
    value: function mul(s) {
      if (!isInteger(s)) {
        throw new Error('Dimension.sub called with an invalid parameter - ' + ((typeof dim2 === 'undefined' ? 'undefined' : _typeof(dim2)) + ' instead of a number'));
      }
      if (this.dimVec_) {
        for (var i = 0; i < UC.Ucum.dimLen_; i++) {
          this.dimVec_[i] *= s;
        }
      }
      return this;
    }

    /**
     * Tests for equality of this dimension object's vector and that of
     * the dimension object passed in.  If the dimension vector for one of
     * the objects is null, the dimension vector for the other object must
     * also be null for the two to be equal.  (I know - duh.  still)
     *
     * @param dim2 the dimension object whose vector is to be compared to this one
     * @return true if the two vectors are equal; false otherwise.
     * @throws an exception if dim2 is not a Dimension object
     */

  }, {
    key: 'equals',
    value: function equals(dim2) {
      if (!dim2 instanceof Dimension) {
        throw new Error('Dimension.equals called with an invalid parameter - ' + ((typeof dim2 === 'undefined' ? 'undefined' : _typeof(dim2)) + ' instead of a Dimension object'));
      }
      var isEqual = true;
      var dimVec2 = dim2.dimVec_;
      if (this.dimVec_ && dimVec2) {
        for (var i = 0; isEqual && i < UC.Ucum.dimLen_; i++) {
          isEqual = this.dimVec_[i] === dimVec2[i];
        }
      } else {
        isEqual = this.dimVec_ === null && dimVec2 === null;
      }
      return isEqual;
    }

    /**
     * Assigns the contents of the vector belonging to the dimension object
     * passed in to this dimension's vector.  If this dimension vector is null
     * and the other is not, this one will get the contents of the other.  If
     * this dimension vector is not null but the one passed in is null, this
     * one will be set to null.
     *
     * @param dim2 the dimension object with the vector whose contents are
     *  to be assigned to this dimension's vector
     * @return this object (not sure why)
     * @throws an exception if dim2 is not a Dimension object
     */

  }, {
    key: 'assignDim',
    value: function assignDim(dim2) {
      if (!dim2 instanceof Dimension) {
        throw new Error('Dimension.assignDim called with an invalid parameter - ' + ((typeof dim2 === 'undefined' ? 'undefined' : _typeof(dim2)) + ' instead of a Dimension object'));
      }
      var dimVec2 = dim2.dimVec_;
      if (this.dimVec_ === null && dimVec2 !== null) {
        this.dimVec = [];
      }

      if (this.dimVec_ && dimVec2) {
        for (var i = 0; i < UC.Ucum.dimLen_; i++) {
          this.dimVec_[i] = dimVec2[i];
        }
      } else {
        // dimVec2_ === null, this.dimVec_ may or may not be null
        this.dimVec_ = null;
      }

      return this;
    }

    /**
     * Sets all elements of this dimension object's vector to zero.
     * If this object's vector is null, it is created as a zero-filled vector.
     *
     * @return this object (not sure why)
     */

  }, {
    key: 'assignZero',
    value: function assignZero() {
      if (this.dimVec_ === null) this.dimVec_ = [];

      for (var i = 0; i < UC.Ucum.dimLen_; i++) {
        this.dimVec_[i] = 0;
      }
      return this;
    }

    /**
     * Tests for zero dimension.
     *
     * @return true if exponents (elements) of this dimension's vector are all zero;
     * false otherwise.
     *
     */

  }, {
    key: 'isZero',
    value: function isZero() {
      var allZero = this.dimVec_ !== null;
      if (this.dimVec_) {
        for (var i = 0; allZero && i < UC.Ucum.dimLen_; i++) {
          allZero = this.dimVec_[i] === 0;
        }
      }

      return allZero;
    }

    /**
     * Creates and returns a clone of this Dimension object
     *
     * @return the clone
     */

  }, {
    key: 'clone',
    value: function clone() {
      var that = new Dimension();
      that.assignDim(this);
      return that;
    }
  }]);

  return Dimension;
}(); // end Dimension class


},{"./config.js":135,"is-integer":99}],137:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Prefix objects are defined in this file.
 */

/**
 * This class implements the prefix object.  Prefixes are used as multipliers
 * for units, e.g., km for kilometers
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */
var Ucum = require('./config.js');

var Prefix = exports.Prefix = function () {

  /**
   * Creates a single prefix object.
   *
   * @param attrs a hash of the values to use in creating the prefix object.
   *  They should be:
   *   code_ - which is the code used for the prefix, e.g., k for kilo
   *   name_ - which is the name of the prefix, e.g., kilo
   *   value_ - which is teh value to use in multiplying the magnitude of
   *    a unit, e.g., for a prefix of c the value will be .01.
   *   exp_ - which is the exponent used to get the value. For decimal based
   *    prefixes the base is 10 and the exp_ is applied to 10, e.g., for a
   *    prefix of c, the exponent will be -2.  For prefixes that are not
   *    decimal based, this will be null (but must not be undefined).
   *
   * @throws an error if the not all required parameters are provided
   */
  function Prefix(attrs) {
    _classCallCheck(this, Prefix);

    if (attrs['code_'] === undefined || attrs['code_'] === null || attrs['name_'] === undefined || attrs['name_'] === null || attrs['value_'] === undefined || attrs['value_'] === null || attrs['exp_'] === undefined) {
      throw new Error('Prefix constructor called missing one or more parameters.  ' + 'Prefix codes (cs or ci), name, value and exponent must all be specified ' + 'and all but the exponent must not be null.');
    }

    /**
     * The prefix code, e.g., k for kilo.  This should be the case-sensitive
     * code.  Since there's no way to check to see if it's the case-sensitive
     * one as opposed to the case-insensitive one (because although
     * case-insensitive codes all seem to be uppercase, some case-sensitive
     * codes are also all uppercase), we'll just have to believe that the
     * right one was passed in.
     */
    this.code_ = attrs['code_'];

    /**
     * The prefix name, e.g., kilo
     */
    this.name_ = attrs['name_'];

    /**
     * The value to use in multiplying the magnitude of a unit
     */
    if (typeof attrs['value_'] === 'string') this.value_ = parseFloat(attrs['value_']);else this.value_ = attrs['value_'];

    /**
     * The exponent used to create the value from 10.  For prefixes that are
     * not based on 10, this will be null.
     */
    this.exp_ = attrs['exp_'];
  } // end constructor


  /**
   * Returns the value for the current prefix object
   * @return the value for the prefix object with the specified code
   * */


  _createClass(Prefix, [{
    key: 'getValue',
    value: function getValue() {
      return this.value_;
    }

    /**
     * Returns the prefix code for the current prefix object
     * @return the code for the current prefix object
     */

  }, {
    key: 'getCode',
    value: function getCode() {
      return this.code_;
    }

    /**
     * Returns the prefix name for the current prefix object
     * @return the name for the current prefix object
     */

  }, {
    key: 'getName',
    value: function getName() {
      return this.name_;
    }

    /**
     * Returns the exponent for the current prefix object
     * @return the exponent for the current prefix object
     */

  }, {
    key: 'getExp',
    value: function getExp() {
      return this.exp_;
    }

    /**
     * Provides way to tell if one prefix equals another.  The second prefix
     * must all attribute values.
     *
     * @param prefix2 prefix object to check for a match
     * @return true for a match; false if one or more attributes don't match
     */

  }, {
    key: 'equals',
    value: function equals(prefix2) {
      return this.code_ === prefix2.code_ && this.name_ === prefix2.name_ && this.value_ === prefix2.value_ && this.exp_ === prefix2.exp_;
    }
  }]);

  return Prefix;
}(); // end Prefix class


},{"./config.js":135}],138:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The tables of defined prefixes is defined in this file.
 */

/**
 * This class implements the table of multiplier prefixes.
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */
var PrefixTables = exports.PrefixTables = function () {

  /**
   * Constructor.  This creates the empty PrefixTable hashes once.
   * There is one hash whose key is the prefix code and one whose
   * key is the prefix value.
   *
   * Implementation of this as a singleton is based on the UnitTables
   * implementation.  See that class for details.
   */
  function PrefixTables() {
    _classCallCheck(this, PrefixTables);

    this.byCode_ = {};
    this.byValue_ = {};

    // Make this a singleton.  See UnitTables constructor for details.

    var holdThis = PrefixTables.prototype;
    PrefixTables = function PrefixTables() {
      throw new Error('PrefixTables is a Singleton. ' + 'Use PrefixTables.getInstance() instead.');
    };
    if (exports) exports.PrefixTables = PrefixTables;
    PrefixTables.prototype = holdThis;
    var self = this;
    PrefixTables.getInstance = function () {
      return self;
    };
  }

  /**
   * Provides the number of prefix objects in each table
   * @returns count of the number of prefix objects in each table
   */


  _createClass(PrefixTables, [{
    key: 'prefixCount',
    value: function prefixCount() {
      return Object.keys(this.byCode_).length;
    }

    /**
     * This is used to get all prefix objects by value.  Currently it is used
     * to create a csv file with all prefixes and units.
     * @returns csv string containing all prefix objects, ordered by value.
     */

  }, {
    key: 'allPrefixesByValue',
    value: function allPrefixesByValue() {
      console.log('in allPrefixesByValue, this.byValue_ length = ' + this.byValue_.length);
      var prefixBuff = '';
      var pList = Object.keys(this.byValue_);
      //pList.sort() ;
      var pLen = pList.length;
      for (var p = 0; p < pLen; p++) {
        var pfx = this.getPrefixByValue(pList[p]);
        prefixBuff += pfx.code_ + ',' + pfx.name_ + ',,' + pfx.value_ + '\r\n';
      }
      return prefixBuff;
    }

    /**
     * This is used to get all prefix objects.  Currently it is used
     * to get the objects to write to the json ucum definitions file
     * that is used to provide prefix and unit definition objects for
     * conversions and validations.
     *
     * @returns an array containing all prefix objects, ordered by code.
     */

  }, {
    key: 'allPrefixesByCode',
    value: function allPrefixesByCode() {
      var prefixList = [];
      var pList = Object.keys(this.byCode_);
      pList.sort();
      var pLen = pList.length;
      for (var p = 0; p < pLen; p++) {
        prefixList.push(this.getPrefixByCode(pList[p]));
      }
      return prefixList;
    }

    /**
     * Adds a prefix object to the tables
     *
     * @param prefixObj the object to be added to the tables
     */

  }, {
    key: 'add',
    value: function add(prefixObj) {
      this.byCode_[prefixObj.getCode()] = prefixObj;
      this.byValue_[prefixObj.getValue()] = prefixObj;
    }

    /**
     * Tests whether a prefix object is found for a specified code.  This
     * is used to determine whether or not a prefix object has been created
     * for the code.
     *
     * @param code the code to be used to find the prefix object
     * @return boolean indicating whether or not a prefix object was found
     *  for the specified code
     */

  }, {
    key: 'isDefined',
    value: function isDefined(code) {
      return this.byCode_[code] !== null && this.byCode_[code] !== undefined;
    }

    /**
     * Obtains a prefix object for a specified code.
     *
     * @param code the code to be used to find the prefix object
     * @return the prefix object found, or null if nothing was found
     */

  }, {
    key: 'getPrefixByCode',
    value: function getPrefixByCode(code) {
      return this.byCode_[code];
    }

    /**
     * Obtains a prefix object for a specified value.
     *
     * @param value the value to be used to find the prefix object
     * @return the prefix object found, or null if nothing was found
     */

  }, {
    key: 'getPrefixByValue',
    value: function getPrefixByValue(value) {
      return this.byValue_[value];
    }
  }]);

  return PrefixTables;
}(); // end PrefixTables class


/**
 *  This function exists ONLY until the original PrefixTables constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton PrefixTable object.  This is based on the UnitTables singleton
 *  implementation; see more detail in the UnitTables constructor description.
 *
 *  @return the singleton PrefixTables object.
 */


PrefixTables.getInstance = function () {
  return new PrefixTables();
};

// Perform the first request for the tables object, to get the
// getInstance method set.
PrefixTables.getInstance();


},{}],139:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This validates unit strings found in a column in a csv (comma separated values)
 * file and returns the validation result in specified columns added to the
 * file.  This uses the node-csv package (https://github.com/wdavidw/node-csv)
 * to handle the input and output processing.
 *
 */

var fs = require('browserify-fs');
var stream = require('stream');
var parse = require('csv-parse');
var transform = require('stream-transform');
var stringify = require('csv-stringify');
var process = require('process');
var str = require('string-to-stream');

var UcumLhcUtils = require("./ucumLhcUtils.js").UcumLhcUtils;
var Ucum = require('./config.js').Ucum;

var UcumFileValidator = exports.UcumFileValidator = function () {
  function UcumFileValidator() {
    _classCallCheck(this, UcumFileValidator);

    // Make this a singleton.  See UnitTables constructor for details.

    var holdThis = UcumFileValidator.prototype;
    UcumFileValidator = function UcumFileValidator() {
      throw new Error('UcumFileValidator is a Singleton.  ' + 'Use UcumFileValidator.getInstance() instead.');
    };
    if (exports) exports.UcumFileValidator = UcumFileValidator;
    UcumFileValidator.prototype = holdThis;

    var self = this;
    UcumFileValidator.getInstance = function () {
      return self;
    };
  }

  /**
   * This method reads the rows of the input csv file, checks the validity
   * of the unit string in the identified column, and outputs the result of
   * the test as well as any notes.  New columns are added to the rows, at
   * the end of each row, to contain confirmation of the unit string tested,
   * the result of the test, and any notes from the test.
   *
   * @param inputFile this is the input file obtained from the HTML file type
   *  input field
   * @param sourceCol this is the name of the column containing the unit
   *  string to be tested.
   * @param fileSaveFunction the function to be called that will save the
   *  file.  It will be passed one parameter, which will be the Ojbect URL
   *  for the data to be written.
   * @param msgHandler the function to be called on errors.  This function
   *  should handle error reporting.  It should take 2 parameters - source,
   *  which receives the name of the stream throwing the error, and err,
   *  which should be the error text.   See UcumDemo.fileValidationError for
   *  an example.
   *
   * @returns nothing
   */


  _createClass(UcumFileValidator, [{
    key: 'validateFile',
    value: function validateFile(inputFile, sourceCol, fileSaveFunction, msgHandler) {

      var unitTestedCol = 'Unit String Tested';
      var resultCol = 'Validation Result';
      var commentCol = 'Notes';

      // The file reader reads the input file into the str readable stream
      var reader = new FileReader();
      reader.readAsText(inputFile);

      var utils = UcumLhcUtils.getInstance();

      // The parser pulls each row out of the readable stream and passes it
      // along the pipeline to the transformer as a hash
      var parser = parse({ columns: true });

      // The transformer receives each row from the parser.  It calls the code
      // to validate the string found in the specified source
      // column and places the results in the specified result columns.  The
      // updated hash is passed along the pipeline to the stringifier.
      var transformer = transform(function (record) {

        if (!record[sourceCol]) {
          transformer.emit('error', 'The ' + sourceCol + ' column was not ' + 'found in the file.  Validation is not possible.');
        } else {
          var uStr = record[sourceCol];
          var parseResp = [];
          record[unitTestedCol] = uStr;

          try {
            var _parseResp = utils.validUnitString(uStr);
            if (_parseResp[0]) record[resultCol] = "Valid UCUM unit.";else record[resultCol] = "Not valid UCUM unit.";
            if (_parseResp[1].length > 0) record[commentCol] = _parseResp[1].join(' - ');else record[commentCol] = '';
          } catch (err) {
            record[resultCol] = 'ERROR';
            record[commentCol] = err.message;
          }
        }
        return record;
      }); // end transform function

      // The stringifier gets the updated hash from the transformer and
      // puts it into csv format, then passes it along the pipeline to the
      // output stream.
      var stringifier = stringify({ header: true });

      // The output stream gets the csv formatted row and writes it to the
      // stream's data buffer.
      var outStream = new stream.Writable({ objectMode: true });
      outStream.data = '*' + Ucum.bracesMsg_ + '\r\n';
      outStream._write = function (record, encoding, done) {
        this.data += record;
        done();
      };

      // When all the data has been written to the output stream, create a Blob
      // object from the data string and an Object URL for the Blob.  Then pass
      // the URL to the function that will actually save the blob to a file.
      var blob = '';
      var bUrl = null;
      outStream.on('finish', function () {
        blob = new Blob([this.data], { type: 'text/csv' });
        bUrl = URL.createObjectURL(blob);
        fileSaveFunction(bUrl);
      });

      // Start the data moving once the file reader is ready (has read in all
      // the data).
      var intSet = setInterval(pipeFunc, 10);
      function pipeFunc() {
        if (reader.readyState == FileReader.DONE) {
          clearInterval(intSet);
          str(reader.result).on('error', function (err) {
            msgHandler('inputStream', err);
          }).pipe(parser).on('error', function (err) {
            msgHandler('parser', err);
          }).pipe(transformer).on('error', function (err) {
            msgHandler('transformer', err);
          }).pipe(stringifier).on('error', function (err) {
            msgHandler('stringifier', err);
          }).pipe(outStream).on('error', function (err) {
            msgHandler('outStream', err);
          });
        }
      }; // end pipeFunc
    } // end validateFile

  }]);

  return UcumFileValidator;
}(); // end UcumFileValidator


/**
 *  This function exists ONLY until the original UcumFileValidator constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton UcumFileValidator object.  This is based on the UnitTables singleton
 *  implementation; see more detail in the UnitTables constructor description.
 *
 *  @return the singleton UcumFileValidator object.
 */


UcumFileValidator.getInstance = function () {
  return new UcumFileValidator();
};

// Perform the first request for the validator object, to get the
// getInstance method set.
UcumFileValidator.getInstance();


},{"./config.js":135,"./ucumLhcUtils.js":142,"browserify-fs":4,"csv-parse":91,"csv-stringify":92,"process":106,"stream":118,"stream-transform":119,"string-to-stream":120}],140:[function(require,module,exports){
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


},{}],141:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class handles opening, reading and loading the JSON file of ucum
 * definitions (prefixes, base units, and unit atoms).
 *
 * @author Lee Mericle
 *
 */

var Ucum = require('./config.js').Ucum;
var Pfx = require("./prefix.js");
var PfxT = require("./prefixTables.js");
var Un = require("./unit.js");
var Utab = require('./unitTables.js');

var jsonfile = require('jsonfile');
var util = require('util');
var fs = require('fs');
var path = require('path');

// requiring the file will take care of opening it for use
var jsonDefs_ = require('../dist/data/ucumDefs.json');

var UcumJsonDefs = exports.UcumJsonDefs = function () {

  /**
   * Constructor.  This reads the json file (essenceFile_) into the
   * jsonDefs hash and makes this a singlton object.
   *
   */
  function UcumJsonDefs() {
    _classCallCheck(this, UcumJsonDefs);

    // Make this a singleton.  See UnitTables constructor for details.

    var holdThis = UcumJsonDefs.prototype;
    UcumJsonDefs = function UcumJsonDefs() {
      throw new Error('UcumJsonDefs is a Singleton. ' + 'Use UcumJsonDefs.getInstance() instead.');
    };
    if (exports) exports.UcumJsonDefs = UcumJsonDefs;
    UcumJsonDefs.prototype = holdThis;
    var self = this;
    UcumJsonDefs.getInstance = function () {
      return self;
    };
  } // end constructor


  /**
   * This method loads the JSON prefix and unit objects into the prefix and
   * unit tables.
   *
   * @returns nothing
   */


  _createClass(UcumJsonDefs, [{
    key: "loadJsonDefs",
    value: function loadJsonDefs() {

      var pTab = PfxT.PrefixTables.getInstance();
      var prefixes = jsonDefs_["prefixes"];
      var plen = prefixes.length;

      for (var p = 0; p < plen; p++) {
        var newPref = new Pfx.Prefix(prefixes[p]);
        pTab.add(newPref);
      }

      var uTab = Utab.UnitTables.getInstance();
      var units = jsonDefs_["units"];
      var ulen = units.length;

      for (var u = 0; u < ulen; u++) {
        var newUnit = new Un.Unit(units[u]);
        uTab.addUnit(newUnit);
      }
    } // end loadJsonDefs

  }]);

  return UcumJsonDefs;
}(); // end UcumJsonDefs class

/**
 *  This function exists ONLY until the original UcumJsonDefs constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton UcumJsonDefs object.  This is based on the UnitTables singleton
 *  implementation; see more detail in the UnitTables constructor description.
 *
 *  @return the singleton UcumJsonDefs object.
 */


UcumJsonDefs.getInstance = function () {
  return new UcumJsonDefs();
};


},{"../dist/data/ucumDefs.json":1,"./config.js":135,"./prefix.js":137,"./prefixTables.js":138,"./unit.js":144,"./unitTables.js":146,"fs":86,"jsonfile":101,"path":104,"util":133}],142:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class provides a single point of access to the LHC UCUM utilities
 *
 * @author Lee Mericle
 *
 */
var Ucum = require('./config.js').Ucum;
var UcumJsonDefs = require('./ucumJsonDefs.js').UcumJsonDefs;
var UnitTables = require('./unitTables.js').UnitTables;
var UnitString = require('./unitString.js').UnitString;
var Unit = require('./unit.js').Unit;
var Prefix = require('./prefix.js').Prefix;
var fs = require('fs');
var path = require('path');

/**
 * Constructor; initiates load of the prefix and units objects
 */

var UcumLhcUtils = exports.UcumLhcUtils = function () {

  /**
   * Constructor.  This loads the json prefix and unit definitions and
   * creates itself as a singleton object.
   *
   */
  function UcumLhcUtils() {
    _classCallCheck(this, UcumLhcUtils);

    if (UnitTables.getInstance().unitsCount() === 0) {

      // Load the prefix and unit objects
      var uDefs = UcumJsonDefs.getInstance();
      uDefs.loadJsonDefs();
    }

    // Make this a singleton.  See UnitTables constructor for details.
    var holdThis = UcumLhcUtils.prototype;
    UcumLhcUtils = function UcumLhcUtils() {
      throw new Error('UcumLhcUtils is a Singleton. ' + 'Use UcumLhcUtils.getInstance() instead.');
    };
    if (exports) exports.UcumLhcUtils = UcumLhcUtils;
    UcumLhcUtils.prototype = holdThis;

    var self = this;
    UcumLhcUtils.getInstance = function () {
      return self;
    };
  } // end constructor


  /**
   * This method calls the useHTMLInMessages method on the (singleton)
   * UnitString object.  It should be called by web applications that use
   * these utilities.
   *
   * @param use flag indicating whether or not to use the braces message;
   *  defaults to true
   */


  _createClass(UcumLhcUtils, [{
    key: 'useHTMLInMessages',
    value: function useHTMLInMessages(use) {
      var us = UnitString.getInstance();
      if (use === undefined) use = true;
      us.useHTMLInMessages(use);
    }

    /**
     * This method calls the useBraceMsgForEachString method on the (singleton)
     * UnitString object.  It should be called by web applications where unit
     * strings are validated individually (as opposed to validating a whole
     * file of unit strings).
     *
     * @param use flag indicating whether or not to use the braces message;
     *  defaults to true
     */

  }, {
    key: 'useBraceMsgForEachString',
    value: function useBraceMsgForEachString(use) {
      var us = UnitString.getInstance();
      if (use === undefined) use = true;
      us.useBraceMsgForEachString(use);
    }

    /**
     * This method validates a unit string.  It first checks to see if the
     * string passed in is a unit code that is found in the unit codes table.
     * If it is not found it parses the string to see if it resolves to a
     * valid unit string.
     *
     * @param uStr the string to be validated
     * @returns an array containing the unit found for the string (or null if
     *  no unit was found) and a message string, if one was returned
     */

  }, {
    key: 'validUnitString',
    value: function validUnitString(uStr) {

      return this.getSpecifiedUnit(uStr);
    } // end validUnitString


    /**
     * This method converts one unit to another
     *
     * @param fromName the name of the unit to be converted
     * @param fromVal the number of "from" units to be converted to "to" units
     * @param toName the name of the unit that the from field is to be converted to
     * @param decDigits the maximum number of decimal digits to be displayed
     *  for the converted unit.  If not specified, the UCUM.decDigits_ value
     *  (defined in config.js) is used.
     * @returns a message indicating either the result of the conversion or an
     *  error message if an error occurred.
     */

  }, {
    key: 'convertUnitTo',
    value: function convertUnitTo(fromName, fromVal, toName, decDigits) {

      if (decDigits === undefined) decDigits = Ucum.decDigits_;

      var resultMsg = [];

      try {
        var parseResp = [];
        var fromUnit = null;

        parseResp = this.getSpecifiedUnit(fromName);
        fromUnit = parseResp[0];
        if (parseResp[1].length > 0) resultMsg = parseResp[1];

        var toUnit = null;
        parseResp = this.getSpecifiedUnit(toName);
        toUnit = parseResp[0];
        if (parseResp[1].length > 0) {
          if (resultMsg.length > 0) resultMsg = resultMsg.concat(parseResp[1]);else resultMsg = parseResp[1];
        }

        if (fromUnit && toUnit) {
          try {
            var toVal = toUnit.convertFrom(fromVal, fromUnit);
            toVal = toVal.toFixed(decDigits).replace(/\.?0+$/, "");
            resultMsg.push(fromVal.toString() + " " + fromUnit.getProperty('name_') + " units = " + toVal.toString() + " " + toUnit.getProperty('name_') + " units.");
          } catch (err) {
            resultMsg.push(err.message);
          }
        } // end if we have the from and to units
      } catch (err) {
        resultMsg.push(err.message);
      }
      return resultMsg;
    } // end convertUnitTo


    /**
     * This method parses a unit string to get (or try to get) the unit
     * represented by the string.
     *
     * @param uName the string representing the unit
     * @returns an array containing the unit found for the string (or null if
     *  no unit was found) and a message string, if one was returned
     * @throws a message if the unit is not found
     */

  }, {
    key: 'getSpecifiedUnit',
    value: function getSpecifiedUnit(uName) {

      uName = uName.trim();

      var utab = UnitTables.getInstance();
      var retMsg = [];

      // go ahead and just try using the name as the code.  This may or may not
      // work, but if it does, it cuts out a lot of parsing.
      var theUnit = utab.getUnitByCode(uName);

      // If we didn't find it, try parsing as a unit string
      if (!theUnit) {
        try {
          var uStrParser = UnitString.getInstance();
          var parseResp = uStrParser.parseString(uName);
          theUnit = parseResp[0];
          retMsg = parseResp[1];
        } catch (err) {
          console.log('Unit requested for unit string ' + uName + '.' + 'request unsuccessful; error thrown = ' + err.message);
          if (uName !== '' && uName !== null) retMsg.unshift(uName + ' is not a valid unit.  ' + err.message);else retMsg.unshift(err.message);
        }
      }

      // if no error was thrown but no unit was found, create a not found message
      if ((theUnit === null || theUnit === undefined) && retMsg === '') {
        retMsg.unshift('Unable to find unit for name = ' + uName + '.');
      }

      return [theUnit, retMsg];
    } // end getSpecifiedUnit


    /**
     * This method retrieves a list of unit commensurable, i.e., that can be
     * converted from and to, a specified unit.  Throws an error if the "from"
     * unit cannot be found or if no commensurable units are found.
     *
     * @param fromName the name/unit string of the "from" unit
     * @returns the list of commensurable units if any were found
     *  @throws an error if the "from" unit is not found or if no commensurable
     *   units were found
     */

  }, {
    key: 'commensurablesList',
    value: function commensurablesList(fromName) {

      var retMsg = [];

      var parseResp = this.getSpecifiedUnit(fromName);
      var fromUnit = parseResp[0];
      if (parseResp[1].length > 0) retMsg = parseResp[1];
      if (!fromUnit) {
        retMsg.push('Could not find unit ' + fromName + '.');
      }

      var commUnits = null;
      var fromDim = fromUnit.getProperty('dim_');
      var dimVec = fromDim.getProperty('dimVec_');
      if (dimVec) {
        var utab = UnitTables.getInstance();
        commUnits = utab.getUnitsByDimension(dimVec);
      }
      return [commUnits, retMsg];
    } // end commensurablesList


    /**
     * Creates a file containing a list of the units.  The file is created
     * in the current directory.
     */

  }, {
    key: 'printUnits',
    value: function printUnits() {

      // for now, create a list of the units created and save it to a file
      // for debugging.  This is a temporary file.
      var utab = UnitTables.getInstance();
      var uct = utab.unitsCount();
      var uList = utab.printUnits(true);
      console.log('in ucumLhcUtils.printUnits, about to write file.  uList ' + 'length = ' + uList.length + '; uct = ' + uct);
      fs.writeFileSync('JsonUnitsList.txt', uList, { encoding: 'utf8', mode: 438, flag: 'w' });
    }
  }]);

  return UcumLhcUtils;
}(); // end UcumLhcUtils class


/**
 *  This function exists ONLY until the original UcumLhcUtils constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton UcumLhcUtils object.  This is based on the UnitTables singleton
 *  implementation; see more detail in the UnitTables constructor description.
 *
 *  @return the singleton UcumLhcUtils object.
 */


UcumLhcUtils.getInstance = function () {
  return new UcumLhcUtils();
};

// Perform the first request for the utils object, to get the
// getInstance method set.
UcumLhcUtils.getInstance();


},{"./config.js":135,"./prefix.js":137,"./ucumJsonDefs.js":141,"./unit.js":144,"./unitString.js":145,"./unitTables.js":146,"fs":86,"path":104}],143:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This exports definitions for ucum classes that need references to them
 * available to the demo code.  The actual code will be in the ucumPkg
 * library found in the dist directory.  This file provides the hooks to
 * those classes within the library.
 */

var Ucum = exports.Ucum = require("./config.js").Ucum;
var UcumLhcUtils = exports.UcumLhcUtils = require("./ucumLhcUtils.js").UcumLhcUtils;
var UnitTables = exports.UnitTables = require("./unitTables.js").UnitTables;
var UcumFileValidator = exports.UcumFileValidator = require("./ucumFileValidator.js").UcumFileValidator;


},{"./config.js":135,"./ucumFileValidator.js":139,"./ucumLhcUtils.js":142,"./unitTables.js":146}],144:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var UnitString = require("./unitString.js").UnitString;
var UcumFunctions = require("./ucumFunctions.js").UcumFunctions;
var isInteger = require("is-integer");

var Unit = exports.Unit = function () {

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
  function Unit() {
    var attrs = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Unit);

    // If this instance is defined by a string, use the UnitParser
    // to create the unit.  Haven't tested this yet.
    // I don't know if we'll even need it.
    if (typeof attrs === 'string') {
      var parser = new UnitParser(attrs);
      try {
        parser.parse(attrs);
      } catch (x) {
        throw new Error('Parse error: ' + x.getMessage());
      }
    } // end if this instance is defined by a string

    else {
        // This instance is defined by a (possibly empty) hash of values.
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
        if (attrs['dim_'] !== null && attrs['dim_'] !== undefined) {
          if (attrs['dim_'] instanceof Array) {
            this.dim_ = new Dimension(attrs['dim_']);
          } else if (attrs['dim_'] instanceof Dimension) {
            this.dim_ = attrs['dim_'];
          } else if (isInteger(attrs['dim_'])) {
            this.dim_ = new Dimension(attrs['dim_']);
          } else {
            if (attrs['dim_'].dimVec_) {
              this.dim_ = new Dimension(attrs['dim_'].dimVec_);
            } else this.dim_ = new Dimension(attrs['dim_']);
          }
        } else {
          this.dim_ = new Dimension(null);
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
         * Used to compute dimension; storing for now until I complete
         * unit definition parsing
         */
        /*
         * Case sensitive (cs) and case insensitive (ci) unit strings,
         * includes exponent and prefix if applicable - specified in
         * <value Unit=x UNIT=X value="nnn">nnn</value> -- the unit part --
         * in the ucum-essence.xml file, and may be specified by a user
         * when requesting conversion or validation of a unit string.
         */
        this.csUnitString_ = attrs['csUnitString_'] || null;
        this.ciUnitString_ = attrs['ciUnitString_'] || null;

        /*
         * String and numeric versions of factor applied to base unit specified in
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
      } // end if this constructor uses a (possibly empty) hash
    // to define the instance
  } // end constructor


  /**
   * Assign the unity (= dimensionless unit 1) to this unit.
   *
   * @return this unit
   */


  _createClass(Unit, [{
    key: 'assignUnity',
    value: function assignUnity() {
      this.name_ = "";
      this.magnitude_ = 1;
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

  }, {
    key: 'assignVals',
    value: function assignVals(vals) {
      for (var key in vals) {
        var uKey = !key.charAt(key.length - 1) === '_' ? key + '_' : key;
        if (this.hasOwnProperty(uKey)) this[uKey] = vals[key];else throw new Error('Parameter error; ' + key + ' is not a property of a Unit');
      }
    } // end assignVals


    /**
     * This creates a clone of this unit.
     *
     * @return the clone
     */

  }, {
    key: 'clone',
    value: function clone() {
      var _this = this;

      var retUnit = new Unit();
      Object.getOwnPropertyNames(this).forEach(function (val) {
        if (val === 'dim_') {
          retUnit['dim_'] = new Dimension(_this.dim_.dimVec_);
        } else {
          retUnit[val] = _this[val];
        }
      });
      return retUnit;
    } // end clone


    /**
     * This assigns all properties of a unit passed to it to this unit.
     *
     * @param the unit whose properties are to be assigned to this one.
     * @return nothing; this unit is updated
     */

  }, {
    key: 'assign',
    value: function assign(unit2) {
      var _this2 = this;

      Object.getOwnPropertyNames(unit2).forEach(function (val) {
        if (_this2.val !== undefined) {
          if (val === 'dim_') {
            _this2['dim_'] = new Dimension(_this2.dim_.dimVec_);
          } else {
            _this2[val] = _this2[val];
          }
        } else throw new Error('Parameter error; ' + val + ' is not a property of a Unit');
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

  }, {
    key: 'equals',
    value: function equals(unit2) {

      return this.magnitude_ === unit2.magnitude_ && this.dim_.equals(unit2.dim_) && this.cnv_ === unit2.cnv_ && this.cnvPfx_ === unit2.cnvPfx_;
    } // end equals


    /**
     * This returns the value of the property named by the parameter
     * passed in.
     *
     * @param propertyName name of the property to be returned, with
     *        or without the trailing underscore.
     * @return the requested property, if found for this unit
     * @throws an error if the property is not found for this unit
     */

  }, {
    key: 'getProperty',
    value: function getProperty(propertyName) {
      var uProp = propertyName.charAt(propertyName.length - 1) === '_' ? propertyName : propertyName + '_';
      if (!this.hasOwnProperty(uProp)) throw new Error('Unit does not have requested property (' + propertyName + '),  ' + ('unit code = ' + this.csCode_));else return this[uProp];
    } // end getProperty


    /**
     * Takes a measurement consisting of a number of units and a unit and returns
     * the equivalent number of this unit.  So, 15 mL would translate
     * to 1 tablespoon if this object is a tablespoon.
     *
     * @param num the numnitude for the unit to be translated (e.g. 15 for 15 mL)
     * @param fromUnit the unit to be translated to one of this type (e.g. a mL unit)
     *
     * @return the number of converted units (e.g. 1 for 1 tablespoon)
     * @throws an error if the dimension of the fromUnit differs from this unit's
     * dimension
     */

  }, {
    key: 'convertFrom',
    value: function convertFrom(num, fromUnit) {
      var newNum = 0.0;

      // reject request if the dimensions are not equal
      if (!fromUnit.dim_.equals(this.dim_)) {
        throw new Error('Sorry.  ' + fromUnit.name_ + ' units cannot be converted ' + ('to ' + this.name_ + ' units.'));
      }
      var fromCnv = fromUnit.cnv_;
      var fromMag = fromUnit.magnitude_;

      // if both units are on a ratio scale, multiply the "from" unit's magnitude
      // by the number passed in and then divide that result by this unit's magnitude
      if (fromCnv == null && this.cnv_ == null) newNum = num * fromMag / this.magnitude_;

      // else use a function to get the number to be returned
      else {
          var x = 0.0;
          var funcs = UcumFunctions.getInstance();
          if (fromCnv != null) {
            // turn num * fromUnit.magnitude into its ratio scale equivalent
            var fromFunc = funcs.forName(fromCnv);
            x = fromFunc.cnvFrom(num * fromUnit.cnvPfx_) * fromMag;
          } else {
            x = num * fromMag;
          }

          if (this.cnv_ != null) {
            // turn mag * origUnit on ratio scale into a non-ratio unit
            var toFunc = funcs.forName(this.cnv_);
            newNum = toFunc.cnvTo(x / this.magnitude_) / this.cnvPfx_;
          } else {
            newNum = x / this.magnitude_;
          }
        } // end if both units are NOT on a ratio scale

      return newNum;
    } // end convertFrom


    /**
     * Takes a number and a target unit and returns the number for a measurement
     * of this unit that corresponds to the number of the target unit passed in.
     * So, 1 tablespoon (where this unit represents a tablespoon) would translate
     * to 15 mL.
     *
     * @param mag the magnitude for this unit (e.g. 1 for 1 tablespoon)
     * @param toUnit the unit to which this unit is to be translated
     *  (e.g. an mL unit)
     *
     * @return the converted number value (e.g. 15 mL)
     * @throws an error if the dimension of the toUnit differs from this unit's
     *   dimension
     */

  }, {
    key: 'convertTo',
    value: function convertTo(num, toUnit) {

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

  }, {
    key: 'convertCoherent',
    value: function convertCoherent(num) {

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

  }, {
    key: 'mutateCoherent',
    value: function mutateCoherent(num) {

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
      for (var i = 0, max = Dimension.getMax(); i < max; i++) {
        var elem = this.dim_.elementAt(i);
        var uA = UnitTables.getUnitByDim(new Dimension(i));
        if (uA == null) throw new Error('Can\'t find base unit for dimension ' + i);
        this.name_ = uA.name + elem;
      }
      return num;
    } // end mutateCoherent


    /**
     * Mutates this unit into a unit on a ratio scale and converts a specified
     * number of units to an appropriate value for this converted unit
     *
     * @param num the number of this unit before it's converted
     * @return the magnitude of this unit after it's converted
     * @throw an error if the dimensions differ
     */

  }, {
    key: 'mutateRatio',
    value: function mutateRatio(num) {
      if (this.cnv_ == null) return this.mutateCoherent(num);else return num;
    } // end mutateRatio


    /**
     * Multiplies this unit with a scalar. Special meaning for
     * special units so that (0.1*B) is 1 dB.
     *
     * This function modifies this unit.
     *
     * @param s the value by which this unit is to be multiplied
     * @return this unit after multiplication
     */

  }, {
    key: 'multiplyThis',
    value: function multiplyThis(s) {

      if (this.cnv_ != null) this.cnvPfx_ *= s;else this.magnitude_ *= s;
      return this;
    } // end multiplyThis


    /**
     * Multiplies this unit with another unit. If one of the
     * units is a non-ratio unit the other must be dimensionless or
     * else an exception is thrown. This special case treatment allows
     * us to scale non-ratio units.
     *
     * This function modifies this unit
     * @param unit2 the unit to be multiplied with this one
     * @return this unit after it is multiplied
     * @throws an error if one of the units is not on a ratio-scale
     *         and the other is not dimensionless.
     */

  }, {
    key: 'multiplyThese',
    value: function multiplyThese(unit2) {
      if (this.cnv_ != null) {
        if (unit2.cnv_ == null && unit2.dim_.isZero()) this.cnvPfx_ *= unit2.magnitude_;else throw new Error('Attempt to multiply non-ratio unit ' + this.name_ + ' ' + 'failed.');
      } else {
        if (unit2.cnv_ != null) {
          if (this.cnv_ == null && this.dim_.isZero()) {
            var cp = this.magnitude_;
            assign(unit2);
            this.cnvPfx_ *= cp;
          } else throw new Error('Attempt to multiply non-ratio unit ' + u2Nname);
        } else {
          var uString = UnitString.getInstance();
          this.name_ = uString.mulString(this.name_, unit2.name_);
          this.magnitude_ *= unit2.magnitude_;
          // for now, putting in this safeguard to get around a known error.
          // need to put in error handling later.
          if (unit2.dim_ && unit2.dim_.dimVec_ && this.dim_ && this.dim_.dimVec_) this.dim_.add(unit2.dim_);
        }
      }
      return this;
    } // end multiplyThese


    /**
     * Divides this unit by another unit. If this unit is not on a ratio
     * scale an exception is raised. Mutating to a ratio scale unit
     * is not possible for a unit, only for a measurement.
     *
     * This unit is modified by this function.
     * @param unit2 the unit by which to divide this one
     * @return this unit after it is divided by unit2
     * @throws an error if either of the units is not on a ratio scale.
     * */

  }, {
    key: 'divide',
    value: function divide(unit2) {

      if (this.cnv_ != null) throw new Error('Attempt to divide non-ratio unit ' + this.name_);
      if (unit2.cnv_ != null) throw new Error('Attempt to divide by non-ratio unit ' + unit2.name_);

      var uString = UnitString.getInstance();
      this.name_ = uString.divString(this.name_, unit2.name_);

      this.magnitude_ /= unit2.magnitude_;
      // for now, putting in this safeguard to get around a known error.
      // need to put in error handling later.
      if (unit2.dim_ && unit2.dim_.dimVec_ && this.dim_ && this.dim_.dimVec_) this.dim_.sub(unit2.dim_);

      return this;
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

  }, {
    key: 'invert',
    value: function invert() {

      if (this.cnv_ != null) throw new Error('Attempt to invert a non-ratio unit - ' + this.name_);

      this.name_ = UnitString.inv(this.name_);

      this.magnitude_ = 1 / this.magnitude_;
      this.dim_.minus();
      return this;
    } // end invert


    /**
     * Raises this unit to a power.  If this unit is not on a
     * ratio scale an error is thrown. Mutating to a ratio scale unit
     * is not possible for a unit, only for a measurement (magnitude
     * and dimension).
     *
     * This unit is modified by this function
     * @param p the power to with this unit is to be raise
     * @return this unit after it is raised
     * @throws an error if this unit is not on a ratio scale.
     */

  }, {
    key: 'power',
    value: function power(p) {

      if (this.cnv_ != null) throw new Error('Attempt to raise a non-ratio unit, ' + this.name_ + ', ' + 'to a power.');

      this.name_ = UnitString.pow(this.name_, p);
      this.magnitude_ = Math.pow(this.magnitude_, p);
      if (this.dim_) this.dim_.mul(p);
      return this;
    } // end power

  }]);

  return Unit;
}(); // end Unit class


},{"./config.js":135,"./dimension.js":136,"./ucumFunctions.js":140,"./unitString.js":145,"is-integer":99}],145:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class handles the parsing of a unit string into a unit object
 */
var Ucum = require('./config.js').Ucum;
var UnitTables = require('./unitTables.js').UnitTables;
var PrefixTables = require('./prefixTables.js').PrefixTables;

var UnitString = exports.UnitString = function () {

  /**
   * Constructor
   */
  function UnitString() {
    _classCallCheck(this, UnitString);

    // Set emphasis characters to blanks.  When set (see useHTMLInMessage) these
    // are used to emphasize certain characters or strings in user messages.
    // They should be used when output will go to a web page and blank
    // when output will go to a file.  The useHTMLInMessages method should be
    // called to set them to the appropriate HTML for the webpage display.
    this.openEmph_ = '';
    this.closeEmph_ = '';

    // Set the braces message to blank.  This message is displayed for each
    // validation request on the web page, but is included separately as
    // a note on the validation spreadsheet.  The useBraceMsgForEachString
    // method should be used to set the message to be displayed for each
    // unit string.
    this.bracesMsg_ = '';

    // Set the flags used, with indices, as place holders in unit strings
    // for parenthetical strings and strings within braces.
    this.parensFlag_ = "parens_placeholder"; // in lieu of Jehoshaphat
    this.braceFlag_ = "braces_placeholder"; // in lieu of Nebuchadnezzar

    // Make this a singleton.  See UnitTables constructor for details.
    var holdThis = UnitString.prototype;
    UnitString = function UnitString() {
      throw new Error('UnitString is a Singleton. ' + 'Use UnitString.getInstance() instead.');
    };
    if (exports) exports.UnitString = UnitString;
    UnitString.prototype = holdThis;

    var self = this;
    UnitString.getInstance = function () {
      return self;
    };
  }

  /**
   * Sets the emphasis strings to the HTML used in the webpage display - or
   * blanks them out, depending on the use parameter.
   *
   * @param use flag indicating whether or not to use the braces message;
   *  defaults to true
   */


  _createClass(UnitString, [{
    key: 'useHTMLInMessages',
    value: function useHTMLInMessages(use) {
      if (use === undefined || use) {
        this.openEmph_ = Ucum.openEmph_;
        this.closeEmph_ = Ucum.closeEmph_;
      } else {
        this.openEmph_ = '';
        this.closeEmph_ = '';
      }
    } // end useHTMLInMessages


    /**
     * Sets the braces message to be displayed for each unit string validation
     * requested, as appropriate.
     *
     * @param use flag indicating whether or not to use the braces message;
     *  defaults to true
     */

  }, {
    key: 'useBraceMsgForEachString',
    value: function useBraceMsgForEachString(use) {
      if (use === undefined || use) this.bracesMsg_ = Ucum.bracesMsg_;else this.bracesMsg_ = '';
    }

    /**
     * Parses a unit string, returns a unit
     *
     * @params uStr the string defining the unit
     * @params origString the original unit string passed in; used when this is
     *  called recursively; set to uStr if not provided.
     * @returns an array containing: 1) the unit object (or null if there were
     *  problems creating the unit); and 2) an array of user messages (error or
     *  warning).
     * @throws an error if nothing was specified.
     */

  }, {
    key: 'parseString',
    value: function parseString(uStr, origString) {

      // Used in error messages to provide context for messages
      if (origString === undefined) origString = uStr;

      // Make sure we have something to work with
      if (origString === '' || origString === null) {
        throw new Error('Please specify a unit expression to be validated.');
      }

      var firstCall = uStr === origString;

      // If this is the first call for the string, check for spaces and throw
      // an error if any are found.  The spec explicitly forbids spaces.
      if (firstCall && origString.indexOf(' ') > -1) {
        throw new Error('Blank spaces are not allowed in unit expressions.');
      } // end if this was called for the full string

      // Unit to be returned
      var finalUnit = null;

      // An array of messages (warnings and errors) to be returned
      var retMsg = [];

      // Flag used to block further processing on an unrecoverable error
      var endProcessing = false;

      // Extract any annotations, i.e., text enclosed in braces ({}) from the
      // string before further processing.  Store each one in the annotations
      // array and put a placeholder in the string for the annotation.  Do
      // this before other processing in case an annotation contains characters
      // that will be interpreted as parenthetical markers or operators in
      // subsequent processing.
      var annotations = [];
      uStr = this.getAnnotations(uStr, annotations, retMsg);

      // Check for parentheses in unit strings.  If found, isolate a parenthesized
      // group and pass it to a recursive call of this method.  If it contains
      // a nested parenthetical group, that will be handled in the same way.
      // Units returned by a recursive call to this method are stored in the
      // parensUnits array, and a placeholder is placed in the units array
      // (uArray) which is reassembled after all parenthetical groups in the
      // current string are processed.  The placeholder consists of the parenthesis
      // flag (this.parensFlag_) followed by the index of the unit in the
      // parensUnits array followed by the parensFlag_.

      // Units array and index
      var uArray = [];
      var uPos = 0;

      // Array of parenthetical strings and index
      var parensUnits = [];
      var pu = 0;

      // count of characters trimmed off the beginning of the unit string (uStr)
      // as units are removed from it; used for error messages, to provide
      // context.
      var trimmedCt = 0;

      // Break the unit string into pieces that consist of text outside of
      // parenthetical strings and placeholders for the parenthetical units.
      // This method is called recursively for parenthetical strings and the units
      // returned are stored in the parensUnits array.
      while (uStr !== "" && !endProcessing) {
        var openCt = 0;
        var closeCt = 0;
        var openPos = uStr.indexOf('(');

        // If an opening parenthesis was not found, check for an unmatched
        // close parenthesis.  If one was found report the error and end
        // processing.
        if (openPos < 0) {
          var closePos = uStr.indexOf(')');
          if (closePos >= 0) {
            var theMsg = 'Missing open parenthesis for close ' + ('parenthesis at ' + origString.substring(0, closePos + trimmedCt)) + ('' + this.openEmph_ + uStr.substr(closePos, 1) + this.closeEmph_);
            if (closePos < uStr.length - 1) {
              theMsg += uStr.substr(closePos + 1) + '.';
            } else {
              theMsg += '.';
            }
            retMsg.push(theMsg);
            endProcessing = true;
          }
          // If no parentheses were found in the current unit string, transfer
          // it to the units array and blank out the string, which will end
          // the search for parenthetical units.
          else {
              uArray[uPos] = uStr;
              uStr = "";
            }
        }

        // Otherwise an open parenthesis was found. Process the string that
        // includes the parenthetical group
        else {
            openCt += 1;
            // Write the text before the parentheses (if any) to the units array
            var uLen = uStr.length;
            if (openPos > 0) {
              uArray[uPos++] = uStr.substr(0, openPos);
            }

            // Find the matching closePos, i.e., the one that closes the
            // parenthetical group that this one opens.  Look also for
            // another open parenthesis, in case this includes nested parenthetical
            // strings.  This continues until it finds the same number of close
            // parentheses as open parentheses, or runs out of string to check.
            // In the case of nested parentheses this will identify the outer set
            // of parentheses.
            var _closePos = 0;
            var c = openPos + 1;
            for (; c < uLen && openCt != closeCt; c++) {
              if (uStr[c] === '(') openCt += 1;else if (uStr[c] === ')') closeCt += 1;
            }

            // Put a placeholder for the group in the units array and recursively
            // call this method for the parenthetical group.  Put the unit returned
            // in the parensUnit array.  Set the unit string to whatever follows
            // the position of the closing parenthesis for this group, to be
            // processed by the next iteration of this loop.  If there's nothing
            // left uStr is set to "".
            if (openCt === closeCt) {
              _closePos = c;
              uArray[uPos++] = this.parensFlag_ + pu.toString() + this.parensFlag_;
              var parseResp = this.parseString(uStr.substring(openPos + 1, _closePos - 1), origString);
              parensUnits[pu++] = parseResp[0];
              if (parseResp[1] != '') retMsg.push(parseResp[1]);
              uStr = uStr.substr(_closePos);
              trimmedCt = _closePos;
            }
            // If the number of open and close parentheses doesn't match, indicate
            // an error.
            else {
                retMsg.push('Missing close parenthesis for open parenthesis at ' + ('' + origString.substring(0, openPos + trimmedCt)) + ('' + this.openEmph_ + uStr.substr(openPos, 1)) + ('' + this.closeEmph_ + uStr.substr(openPos + 1) + '.'));
                endProcessing = true;
              }
          } // end if an opening parenthesis was found
      } // end do while the input string is not empty

      // Continue if we didn't hit a problem
      if (!endProcessing) {
        // Join all the unit array elements back into one string with no separators.
        uStr = uArray.join('');

        // Call makeUnitsArray to convert the string to an array of unit
        // descriptors with operators.
        uArray = this.makeUnitsArray(uStr);

        // Create a unit object out of each un element
        var _uLen = uArray.length;
        for (var u1 = 0; u1 < _uLen; u1++) {
          var curCode = uArray[u1]['un'];

          // If the current unit array element is a unit stored in the parensUnits
          // array (from a parenthesized string), get that unit and put it in the
          /// units array.
          var pfLen = this.parensFlag_.length;
          var anno = '';

          // If the parentheses flag is found at the beginning of the curCode,
          // make sure there is nothing following the parenthetical string (as
          // indicated by the index into the parensUnit array); throw an error
          // if there is - which will happen if there'a an operator missing
          // before the parenthetical string; transfer the unit to the uArray if
          // there is not.
          if (curCode.substr(0, pfLen) === this.parensFlag_) {
            // get the parenthetical index
            var sIdx = curCode.substr(pfLen);
            var endFlag = sIdx.lastIndexOf(this.parensFlag_);
            var pIdx = sIdx.substring(0, endFlag);
            sIdx = sIdx.substr(endFlag + pfLen);
            if (endFlag < sIdx.length - pfLen) {
              // first check to see if it's an annotation
              var braceStart = sIdx.indexOf(this.braceFlag_);
              if (braceStart >= 0) {
                var anLen = this.braceFlag_.length;
                var braceEnd = sIdx.lastIndexOf(this.braceFlag_);
                var aIdx = sIdx.substr(anLen, braceEnd - anLen);
                anno = annotations[aIdx];
                // check to see if text follows the annotation
                if (braceEnd + anLen < sIdx.length) {
                  sIdx = sIdx.substr(braceEnd + anLen);
                  var mString = origString.replace(')' + sIdx, ')' + this.openEmph_ + ('' + sIdx + this.closeEmph_));
                  var mString2 = 'Missing operator before ' + this.openEmph_ + ('' + sIdx + this.closeEmph_ + ' in ' + mString);
                  retMsg.push(mString2);
                  endProcessing = true;
                } // end if there is text following the annotation
                else {
                    //let lead1 = (origString.substr(0,1) === '/') ? '1' : '' ;
                    //let wString = origString.replace(anno, `${this.openEmph_}` +
                    //                                 `${anno}${this.closeEmph_}`);
                    //let w2String = origString.replace(anno, '');
                    //retMsg.push(`${wString} is interpreted as ${lead1}${w2String}`);
                    var dup = false;
                    for (var r = 0; !dup && r < retMsg.length; r++) {
                      dup = retMsg[r] === this.bracesMsg_;
                    }
                    if (!dup) retMsg.push(this.bracesMsg_);
                  }
              } // end if the text following the parentheses is an annotation
            } // end if the ending parenthesis is not at the end of the code

            // If we're good, put the unit in the uArray
            if (!endProcessing) {
              var nIdx = parseInt(pIdx);
              uArray[u1]['un'] = parensUnits[nIdx];
            }
          } // end if the parentheses flag is found at the beginning of curCode

          // Else if characters precede a parentheses flag, an operator is
          // missing between the characters and the unit referenced by the index.
          else if (curCode.indexOf(this.parensFlag_) > 0) {
              var _pIdx = curCode.indexOf(this.parensFlag_);
              var msAfter = curCode.substr(0, _pIdx);
              var _mString = origString.replace(msAfter + '(', '' + this.openEmph_ + ('' + msAfter + this.closeEmph_ + '('));
              retMsg.push('Missing operator after ' + this.openEmph_ + msAfter + (this.closeEmph_ + ' in ' + _mString));
              endProcessing = true;
            } // end if we found the parentheses flag in the wrong place

            // Else it's not a parenthetical unit.  If it's not a number, call
            // makeUnit to create a unit for it.
            else {
                var curCodeNum = Number(curCode);
                // if the current unit string is NOT a number, call makeUnit to create
                // the unit object for it.  Stop processing if no unit was returned.
                if (isNaN(curCodeNum)) {
                  uArray[u1]['un'] = this.makeUnit(curCode, annotations, retMsg, origString);
                  endProcessing = uArray[u1]['un'] == null;
                }
                // Otherwise write the numeric version of the number back to
                // the uArray 'un' element
                else {
                    uArray[u1]['un'] = curCodeNum;
                  }
              }
        }
      }
      // If we're still good, continue
      if (!endProcessing) {

        // Process the units (and numbers) to create one final unit object
        if (uArray[0] === null || uArray == "'" || uArray[0]['un'] === undefined || uArray[0]['un'] == null) {
          // not sure what this might be, but this is a safeguard
          retMsg.push('Unit string (' + origString + ') did not contain anything that ' + 'could be used to create a unit, or else something that is not ' + 'handled yet by this package.  Sorry');
          endProcessing = true;
        }
      }
      if (!endProcessing) {

        finalUnit = uArray[0]['un'];
        var _uLen2 = uArray.length;

        // Perform the arithmetic for the units, starting with the first 2 units.
        // We only need to do the arithmetic if we have more than one unit.
        for (var u2 = 1; u2 < _uLen2; u2++, !endProcessing) {
          var nextUnit = uArray[u2]['un'];
          if (nextUnit === null || typeof nextUnit !== 'number' && !nextUnit.getProperty) {
            retMsg.push('Unit string (' + origString + ') contains unrecognized ' + ('element (' + this.openEmph_ + nextUnit.toString()) + (this.closeEmph_ + '); could not parse full expression.  Sorry'));
            endProcessing = true;
          }
          if (!endProcessing) {
            try {
              // Is the operation division?
              var thisOp = uArray[u2]['op'];
              var isDiv = thisOp === '/';

              // Perform the operation based on the type(s) of the operands

              if (typeof nextUnit !== 'number') {
                // both are unit objects
                if (typeof finalUnit !== 'number') {
                  isDiv ? finalUnit = finalUnit.divide(nextUnit) : finalUnit = finalUnit.multiplyThese(nextUnit);
                }
                // finalUnit is a number; nextUnit is a unit object
                else {
                    var nMag = nextUnit.getProperty('magnitude_');
                    isDiv ? nMag = finalUnit / nMag : nMag *= finalUnit;
                    var theName = finalUnit.toString() + thisOp + nextUnit.getProperty('name_');
                    finalUnit = nextUnit;
                    finalUnit.assignVals({ 'name_': theName, 'magnitude_': nMag });
                  }
              } // end if nextUnit is not a number

              else {
                  // nextUnit is a number; finalUnit is a unit object
                  if (typeof finalUnit !== 'number') {
                    var fMag = finalUnit.getProperty('magnitude_');
                    isDiv ? fMag /= nextUnit : fMag *= nextUnit;
                    var _theName = finalUnit.getProperty('name_') + thisOp + nextUnit.toString();
                    finalUnit.assignVals({ 'name_': _theName, 'magnitude_': fMag });
                  }
                  // both are numbers
                  else {
                      isDiv ? finalUnit /= nextUnit : finalUnit *= nextUnit;
                    }
                } // end if nextUnit is a number
            } catch (err) {
              retMsg.unshift(err.message);
              endProcessing = true;
              finalUnit = null;
            }
          } // end if not endProceesing
        } // end do for each unit after the first one
      }

      // Do a final check to make sure that finalUnit is a unit and not
      // just a number.  Something like "1/{HCP}" will return a "unit" of 1
      // - which is not a unit.  Do this only when this is the first/outer
      // call to this method.
      if (firstCall && !isNaN(finalUnit) && finalUnit !== 1) finalUnit = null;

      return [finalUnit, retMsg];
    } // end parseString


    /**
     * Extracts all annotations from a unit string, replacing them with
     * placeholders for later evaluation.  The annotations are stored in the
     * annotations array.
     *
     * @param uStr the unit string being parsed
     * @param annotations the array to contain the extracted annotations
     * @param retMsg the array to contain any user messages (error and warning)
     * @returns the string after the annotations are replaced with placeholders
     */

  }, {
    key: 'getAnnotations',
    value: function getAnnotations(uString, annotations, retMsg) {
      var openBrace = uString.indexOf('{');
      while (openBrace >= 0) {

        var closeBrace = uString.indexOf('}');
        if (closeBrace < 0) {
          retMsg.push('Missing closing brace for annotation starting at ' + this.openEmph_ + uString.substr(openBrace) + this.closeEmph_);
        } else {
          var braceStr = uString.substring(openBrace, closeBrace + 1);
          var aIdx = annotations.length.toString();
          uString = uString.replace(braceStr, this.braceFlag_ + aIdx + this.braceFlag_);
          annotations.push(braceStr);
          openBrace = uString.indexOf('{');
        }
      } // end do while we have an opening brace
      return uString;
    } // end getAnnotations


    /**
     * Breaks the unit string into an array of unit descriptors and operators.
     *
     * @param uStr the unit string being parsed
     * @returns the array representing the unit string
     */

  }, {
    key: 'makeUnitsArray',
    value: function makeUnitsArray(uStr) {

      // Separate the string into pieces based on delimiters / (division) and .
      // (multiplication).  The idea is to get an array of units on which we
      // can then perform any operations (prefixes, multiplication, division).

      var uArray1 = uStr.match(/([./]|[^./]+)/g);

      // If the first element in the array is a division operator (/), the
      // string started with '/'.  Add a first element containing 1 to the
      // array, which will cause the correct computation to be performed (inversion).
      if (uArray1[0] === "/") {
        uArray1.unshift("1");
      }

      // Create an array of unit/operator objects.  The unit is, for now, the
      // string containing the unit code (e.g., Hz for hertz) including
      // a possible prefix and exponent.   The operator is the operator to be
      // applied to that unit and the one preceding it.  So, a.b would give
      // us two objects.  The first will have a unit of a, and a blank operator
      // (because it's the first unit).  The second would have a unit of b
      // and the multiplication operator (.).  REDO
      var u1 = uArray1.length;
      var uArray = [{ op: "", un: uArray1[0] }];
      for (var n = 1; n < u1; n++) {
        uArray.push({ op: uArray1[n++], un: uArray1[n] });
      }
      return uArray;
    } // end makeUnitsArray


    /**
     * Creates a unit object from a string defining one unit.  The string
     * should consist of a unit code for a unit already defined (base or
     * otherwise).  It may include a prefix and an exponent, e.g., cm2
     * (centimeter squared).
     *
     * @params uCode the string defining the unit
     * @param annotations the array to contain the extracted annotations
     * @param retMsg the array to contain any user messages (error and warning)
     * @param origString the original string to be parsed; used to provide
     *  context for messages
     * @returns a unit object, or null if there were problems creating the unit
     */

  }, {
    key: 'makeUnit',
    value: function makeUnit(uCode, annotations, retMsg, origString) {
      var exp = null;
      var pfxVal = null;
      var pfxCode = null;
      var pfxExp = null;
      var pfxName = null;
      var ulen = uCode.length;
      var origUnit = null;
      var retUnit = null;
      var endProcessing = false;

      // check annotations:
      // If it's JUST an annotation, replace with 1.  If we find text following
      // the annotation, mark it as an error.   Otherwise just remove it - the
      // placeholder, that is.
      // In any case, put a message in the retMsg array explaining either the
      // problem or how the annotation is interpreted.


      var anLen = this.braceFlag_.length;

      var anOpen = uCode.indexOf(this.braceFlag_);
      if (anOpen >= 0) {
        var anClose = uCode.substr(anOpen + 1).indexOf(this.braceFlag_) + anOpen + 1;

        // If no closing flag was found, we have a problem somewhere.
        if (anClose <= 0) {
          retMsg.push('Problem processing annotation; please check syntax');
          endProcessing = true;
        } else {
          var anIdx = parseInt(uCode.substring(anOpen + anLen, anClose));
          var anText = annotations[anIdx];

          // If the closing flag is not at the end of the uCode, text
          // follows the annotation - which is invalid.
          if (anClose + anLen < uCode.length) {
            var wString = origString.replace(anText, this.openEmph_ + anText + this.closeEmph_);
            retMsg.push('Text following annotation ' + anText + ' in ' + wString + ' ' + 'is invalid.');
            endProcessing = true;
          } // end if text follows the annotation

          // Else if there is no text preceding the opening flag, the
          // annotation is interpreted as 1.  Warn the user
          else if (anOpen === 0) {
              uCode = 1;
              //let lead1 = (origString.substr(0,1) === '/') ? '1' : '' ;
              //let wString = origString.replace(anText, this.openEmph_ + anText +
              //                                         this.closeEmph_) ;
              //let w2String = origString.replace(anText, this.openEmph_ + '1' +
              //                                          this.closeEmph_);
              //origString = origString.replace(anText, '1');
              //retMsg.push(`${wString} is interpreted as ${lead1}${w2String}.  ` +
              //            `Is this what you meant?`);
              var dup = false;
              for (var r = 0; !dup && r < retMsg.length; r++) {
                dup = retMsg[r] === this.bracesMsg_;
              }
              if (!dup) retMsg.push(this.bracesMsg_);
              retUnit = 1;
              endProcessing = true;
            } // end if the annotation is a standalone

            // Else we have an annotation that follows a unit expression (probably).
            // Put in an interpretation note and trim the annotation off the uCode.
            else {
                //let lead1 = (origString.substr(0,1) === '/') ? '1' : '' ;
                //let wString = origString.replace(anText, this.openEmph_ + anText +
                //                                         this.closeEmph_) ;
                origString = origString.replace(anText, '');
                //let updateExisting = false ;
                //for (let r = 0; r < retMsg.length; r++) {
                //  let idx1 = retMsg[r].indexOf(anText);
                //  if (idx1 >= 0) {
                //    // we've found the first one - emphasize it
                //    retMsg[r] = retMsg[r].replace(anText,
                //                     `${this.openEmph_}${anText}${this.closeEmph_}`);
                //    // now find the next one
                //    let idx2 = retMsg[r].lastIndexOf(anText) ;
                //    if (idx2 > idx1) {
                //      //let str2 = retMsg[r].substr(idx2);
                //      //let str2a = str2.replace(anText, '');
                //      retMsg[r] = retMsg[r].substr(0, idx2) +
                //                  retMsg[r].substr(idx2).replace(anText, '');
                //    }
                //    updateExisting = true ;
                //  }

                //if (!updateExisting) {
                //  retMsg.push(`${wString} is interpreted as ${lead1}${origString}.`);
                //}
                var _dup = false;
                for (var _r = 0; !_dup && _r < retMsg.length; _r++) {
                  _dup = retMsg[_r] === this.bracesMsg_;
                }
                if (!_dup) retMsg.push(this.bracesMsg_);
                uCode = uCode.substr(0, anOpen);
              } // end if the annotation follows the unit expression
        } // end if we found an open and a close brace
      } // end if we found an open brace


      // Continue if we did not hit an annotation error
      if (!endProcessing) {

        // Check to make sure that the uCode is not simply a number.  This can
        // happen if an annotation was stripped off, or if the uCode was JUST
        // an annotation.  In either case, digits are not units.
        endProcessing = !isNaN(uCode);
      }
      if (!endProcessing) {
        ulen = uCode.length;
        var utabs = UnitTables.getInstance();

        // First look for the full string
        origUnit = utabs.getUnitByCode(uCode);

        // If that didn't work, peel off the exponent and try it
        if (!origUnit) {
          // This particular regex has been tweaked several times.  This one
          // works with the following test strings:
          // "m[H2O]-21] gives ["m{H2O]-21", "m[H2)]", "-21"]
          // "m[H2O]+21] gives ["m{H2O]+21", "m[H2)]", "+21"]
          // "m[H2O]21] gives ["m{H2O]-21", "m[H2)]", "21"]
          // "s2" gives ["s2", "s, "2"]
          // "kg" gives null
          var res = uCode.match(/(^[^\-\+]+?)([\-\+\d]+)$/);

          // if we got an exponent, separate it from the unit and try
          // to get the unit again
          if (res && res[2] && res[2] !== "") {
            // Make sure that there were no characters after the last digit.
            // If there are, the reassembled string ends at the last digit,
            // dropping off everything after that.  Characters after an
            // exponent (except for subsequent units after a division or
            // multiplication operator) are invalid.
            var reassemble = res[1] + res[2];
            if (reassemble === uCode) {
              uCode = res[1];
              exp = res[2];
              origUnit = utabs.getUnitByCode(uCode);
            } // end if nothing followed the exponent (if there was one)
          } // end if we got an exponent
        } // end if we didn't get a unit for the full unit code

        // if we still don't have a unit, separate out the prefix
        // and try without it.

        if (!origUnit) {

          // Try for a single character prefix first.
          var pfxTabs = PrefixTables.getInstance();
          pfxCode = uCode.charAt(0);
          var pfxObj = pfxTabs.getPrefixByCode(pfxCode);

          // if we got a prefix, get its info and remove it from the unit code
          if (pfxObj) {
            pfxVal = pfxObj.getValue();
            pfxExp = pfxObj.getExp();
            pfxName = pfxObj.getName();
            var pCodeLen = pfxCode.length;
            uCode = uCode.substr(pCodeLen);
            ulen -= pCodeLen;

            // try again for the unit
            origUnit = utabs.getUnitByCode(uCode);

            // If we still don't have a unit, see if the prefix could be the
            // two character "da" (deka) prefix.  That's the only prefix with
            // two characters, and without this check it's interpreted as "d"
            // (deci) and the "a" is considered part of the unit code.

            if (!origUnit && pfxCode == 'd' && uCode.substr(0, 1) == 'a') {
              pfxCode = 'da';
              pfxObj = pfxTabs.getPrefixByCode(pfxCode);
              pfxVal = pfxObj.getValue();
              pfxExp = pfxObj.getExp();
              pfxName = pfxObj.getName();
              uCode = uCode.substr(1);
              ulen -= 1;

              // try one more time for the unit
              origUnit = utabs.getUnitByCode(uCode);
            }
          } // end if we found a prefix
        } // end if we didn't get a unit after removing an exponent

        // If we didn't find a unit, signal an error.  (We tried with the full
        // unit string, with the unit string without the exponent, and the
        // unit string without a prefix.  That's all we can try).
        if (!origUnit) {
          retMsg.push('Unable to find unit for ' + uCode);
          endProcessing = true;
        }
        if (!endProcessing) {
          // Otherwise we found a unit object.  Clone it and then apply the prefix
          // and exponent, if any, to it.

          retUnit = origUnit.clone();
          var theDim = retUnit.getProperty('dim_');
          var theMag = retUnit.getProperty('magnitude_');
          var theName = retUnit.getProperty('name_');
          // If there is an exponent for the unit, apply it to the dimension
          // and magnitude now
          if (exp) {
            exp = parseInt(exp);
            var expMul = exp;
            theDim = theDim.mul(exp);
            theMag = Math.pow(theMag, exp);
            retUnit.assignVals({ 'magnitude_': theMag });

            // If there is also a prefix, apply the exponent to the prefix.
            if (pfxVal) {

              // if the prefix base is 10 it will have an exponent.  Multiply the
              // current prefix exponent by the exponent for the unit we're
              // working with.  Then raise the prefix value to the level
              // defined by the exponent.
              if (pfxExp) {
                expMul *= pfxExp;
                pfxVal = Math.pow(10, expMul);
              }
              // if the prefix base is not 10, it won't have an exponent.
              // At the moment I don't see any units using the prefixes
              // that aren't base 10.   But if we get one the prefix value
              // will be applied to the magnitude (below), which is what
              // we want anyway.
            } // end if there's a prefix as well as the exponent
          } // end if there's an exponent

          // Now apply the prefix, if there is one, to the magnitude
          if (pfxVal) {
            theMag *= pfxVal;
            retUnit.assignVals({ 'magnitude_': theMag });
          }

          // if we have a prefix and/or an exponent, add them to the unit name
          if (pfxVal) {
            theName = pfxName + theName;
            retUnit.assignVals({ 'name_': theName });
          }
          if (exp) {
            theName = theName + '<sup>' + exp.toString() + '</sup>';
            retUnit.assignVals({ 'name_': theName });
          }
        } // end if not endProcessing set from no unit found
      } // end if not endProcessing set from annotation error

      return retUnit;
    } // end makeUnit


    /**
     * Creates a unit string that indicates multiplication of the two
     * units referenced by the codes passed in.
     *
     * @params s1 string representing the first unit
     * @params s2 string representing the second unit
     * @returns a string representing the two units multiplied
     */

  }, {
    key: 'mulString',
    value: function mulString(s1, s2) {
      return s1 + "." + s2;
    }

    /**
     * Creates a unit string that indicates division of the first unit by
     * the second unit, as referenced by the codes passed in.
     *
     * @params s1 string representing the first unit
     * @params s2 string representing the second unit
     * @returns a string representing the division of the first unit by the
     * second unit
     */

  }, {
    key: 'divString',
    value: function divString(s1, s2) {
      var ret = null;
      if (s2.length == 0) ret = s1;else {
        var supPos = s2.indexOf('<sup>');
        var s2Sup = null;
        if (supPos > 0) {
          s2Sup = s2.substr(supPos);
          s2 = s2.substr(0, supPos);
        }
        var t = s2.replace('/', '1').replace('.', '/').replace('1', '.');

        switch (t[0]) {
          case '.':
            ret = s1 + t;
            break;
          case '/':
            ret = s1 + t;
            break;
          default:
            ret = s1 + "/" + t;
        }
        if (s2Sup) ret += s2Sup;
      }
      return ret;
    } // end divString

  }]);

  return UnitString;
}(); // end class UnitString

/**
 *  This function exists ONLY until the original UnitString constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton UnitString object.  This is based on the UnitTables singleton
 *  implementation; see more detail in the UnitTables constructor description.
 *
 *  @return the singleton UnitString object.
 */


UnitString.getInstance = function () {
  return new UnitString();
};

// Perform the first request for the object, to set the getInstance method.
UnitString.getInstance();


},{"./config.js":135,"./prefixTables.js":138,"./unitTables.js":146}],146:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class manages Hashtables that provide references to
 * defined units.
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */

var Ucum = require('./config.js').Ucum;

var UnitTables = exports.UnitTables = function () {

  /**
   * Constructor.  This creates the empty unit tables (hashes) once. After the
   * tables are created, it redefines this constructor to throw an error
   * stating that the constructor is no longer available and that the
   * getInstance function must be used.   Here's a description of the first
   * and then all subsequent calls to this constructor.
   *
   * First call to constructor:
   * 1. creates  OBJECT1
   * 2. initializes attributes of OBJECT1
   * 3. stores reference to OBJECT1.prototype in holdthis local variable
   * 4. redefines OBJECT1 as a function that throws an error
   * 5. defines the getInstance function (which is also defined outside of
   *    the class definition - see below).
   *
   * All subsequent calls to constructor:
   * 1. throw error message referring to getInstance
   * 2. call getInstance, returns this - which is OBJECT1.
   */
  function UnitTables() {
    _classCallCheck(this, UnitTables);

    /**
     * Tracks units by name
     * @type hash - key is the name;
     *              value is an array of references to the Unit objects
     *              with the name.  More than one unit may have the same
     *              name, e.g., "second", which is shared by the base unit
     *              with the code = "s" and the unit with code = "'".
     */
    this.unitNames_ = {};

    /**
     * Tracks units by code using case-sensitive version.
     *
     * @type hash - key is the code;
     *              value is the reference to the Unit object.  Codes must
     *              be unique.
     */
    this.unitCodes_ = {};

    /**
     * Tracks units by code using an uppercase version, e.g., MG instead of
     * mg.  Searched if the code is not found in the unitCodes_ table.
     *
     * @type hash - key is the uppercase version of code;
     *              value is the reference to the Unit object.  Codes must
     *              be unique.
     */
    this.unitUcCodes_ = {};

    /**
     * Tracks units by code using an lowercase version, e.g., [ph] instead of
     * [pH].  Searched if the code is not found in the unitCodes_ table.
     *
     * @type hash - key is the lowercase version of code;
     *              value is the reference to the Unit object.  Codes must
     *              be unique.
     */
    this.unitLcCodes_ = {};

    /**
     * Keeps track of the order in which units are defined.  The order is
     * important because unit definitions build on previous definitions.
     *
     * @type {Array}
     */
    this.codeOrder_ = [];

    /**
     * Tracks units by unit strings, e.g., cm-1
     *
     * @type hash - key is the unit string
     *              value is an array of magnitude/unit reference objects
     *              with that unit string.
     */
    this.unitStrings_ = {};

    /**
     * Tracks units by Dimension vector
     *
     * @type hash - key is the dimension vector (not the object, just the
     *              vector);
     *              value is an array of references to the Unit objects
     *              with that vector.  More than one unit may have the same
     *              unit vector, and this can be used to provide a list
     *              of commensurable units.
     */
    this.unitDimensions_ = {};

    // Make this a singleton - from mrme44 May 18 comment on
    // on GitHub Gist page of SanderLi/Singleton.js.  Modified
    // for this class.

    var holdThis = UnitTables.prototype;
    UnitTables = function UnitTables() {
      throw new Error("UnitTables is a Singleton.  " + 'Use UnitTables.getInstance() instead.');
    };
    if (exports) exports.UnitTables = UnitTables;
    UnitTables.prototype = holdThis;
    var self = this;
    UnitTables.getInstance = function () {
      return self;
    };
  }

  /**
   * Provides the number of unit objects written to the tables, using the
   * codes table since codes must be unique.
   *
   * @returns count of the number of unit objects in the unitCodes_ table.
   */


  _createClass(UnitTables, [{
    key: 'unitsCount',
    value: function unitsCount() {
      return Object.keys(this.unitCodes_).length;
    }

    /**
     * Adds a Unit object to the tables.
     *
     * @param theUnit the unit to be added
     * @returns nothing
     * @throws passes on an error if one is thrown by the called functions for
     *  a problem with the unit code or unit name
     */

  }, {
    key: 'addUnit',
    value: function addUnit(theUnit) {

      var uName = theUnit['name_'];
      if (uName) {
        this.addUnitName(theUnit);
      }

      this.addUnitCode(theUnit);
      this.addUnitString(theUnit);

      try {
        if (theUnit['dim_'].getProperty('dimVec_')) this.addUnitDimension(theUnit);
      } catch (err) {
        // do nothing - throws error if the property is null
        // and that's OK here.
      }
    } // end addUnit


    /**
     * Adds a Unit object to the unitNames_ table.  More than one unit
     * can have the same name, e.g., the two units with the name "second",
     * where the code for one of them is 's' and the code for the other is
     * "'".  Because of this, an array of unit objects is stored for the
     * name.  In most cases it will be an array of one object, but this
     * clarifies that there may be more than one.
     *
     * @param theUnit the unit to be added
     * @returns nothing
     * @throws an error if the unit has no name
     */

  }, {
    key: 'addUnitName',
    value: function addUnitName(theUnit) {

      var uName = theUnit['name_'];

      if (uName) {
        if (this.unitNames_[uName]) this.unitNames_[uName].push(theUnit);else this.unitNames_[uName] = [theUnit];
      } else throw new Error('UnitTables.addUnitName called for a unit with no name.  ' + ('Unit code = ' + theUnit['csCode_'] + '.'));
    } // end addUnitName


    /**
     * Adds a Unit object to the unitCodes_, unitUcCodes_, unitLcCodes_ and
     * codeOrder_ tables.
     *
     * @param theUnit the unit to be added
     * @returns nothing
     * @throws an error if theunitCodes_ table already contains a unit with the code
     */

  }, {
    key: 'addUnitCode',
    value: function addUnitCode(theUnit) {

      var uCode = theUnit['csCode_'];
      if (uCode) {

        var upCode = uCode.toUpperCase();
        var downCode = uCode.toLowerCase();

        if (this.unitCodes_[uCode]) throw new Error('UnitTables.addUnitCode called, already contains entry for ' + ('unit with code = ' + uCode));else {
          this.unitCodes_[uCode] = theUnit;
          this.unitUcCodes_[upCode] = theUnit;
          this.unitLcCodes_[downCode] = theUnit;
          this.codeOrder_.push(uCode);
        }
      } else throw new Error('UnitAtomsTable.addUnitCode called for unit that has ' + 'no code.');
    } // end addUnitCode


    /**
     * Adds a magnitude:unit object to the unitStrings_ table.  More than one unit
     * can have the same string, so an array of magnitude:unit objects is stored
     * for the string.
     *
     * If the unit has no string, nothing is stored and no error is reported.
     *
     * @param theUnit the unit to be added
     * @returns nothing
     */

  }, {
    key: 'addUnitString',
    value: function addUnitString(theUnit) {

      var uString = null;
      if (Ucum.caseSensitive_ == true) uString = theUnit['csUnitString_'];else uString = theUnit['ciUnitString_'];

      if (uString) {
        var uEntry = { mag: theUnit['baseFactorStr_'], unit: theUnit };
        if (this.unitStrings_[uString]) this.unitStrings_[uString].push(uEntry);else this.unitStrings_[uString] = [uEntry];
      }
    } // end addUnitString


    /**
     * Adds a Unit object to the unitDimensions_ table.  More than one unit
     * can have the same dimension (commensurable units have the same dimension).
     * Because of this, an array of unit objects is stored for the
     * dimension.
     *
     * @param theUnit the unit to be added
     * @returns nothing
     * @throws an error if the unit has no dimension
     */

  }, {
    key: 'addUnitDimension',
    value: function addUnitDimension(theUnit) {

      var uDim = theUnit['dim_'].getProperty('dimVec_');

      if (uDim) {
        if (this.unitDimensions_[uDim]) this.unitDimensions_[uDim].push(theUnit);else this.unitDimensions_[uDim] = [theUnit];
      } else throw new Error('UnitTables.addUnitDimension called for a unit with no dimension.  ' + ('Unit code = ' + theUnit['csCode_'] + '.'));
    } // end addUnitDimension


    /**
     *  Returns a unit object based on the unit's code.  Tries first on
     *  the code as passed in and then, if the unit is not found, on a
     *  lower case version of the code and then an upper case version.
     *
     *  @param uCode the code of the unit to be returned
     *  @returns the unit object or null if it is not found
     */

  }, {
    key: 'getUnitByCode',
    value: function getUnitByCode(uCode) {
      var retUnit = null;
      if (uCode) {
        retUnit = this.unitCodes_[uCode];
        if (retUnit === undefined) {
          retUnit = this.unitLcCodes_[uCode.toLowerCase()];
          if (retUnit === undefined) {
            retUnit = this.unitUcCodes_[uCode.toUpperCase()];
            if (retUnit === undefined) retUnit = null;
          }
        }
      }
      return retUnit;
    }

    /**
     *  Returns a array of unit objects based on the unit's name.  Usually this
     *  will be an array of one, but there may be more, since unit names are
     *  not necessarily unique.
     *
     *  @param uName the name of the unit to be returned.  If more than one
     *  unit has the same name and you only want one specific unit, append the
     *  csCode of the unit you want to the end of the name, separated by the
     *  Ucum.codeSep_ value, e.g., inch - [in_i] vs. inch - [in_us].
     *  @returns null if no unit was found for the specified name OR an array of
     *  unit objects with the specified name.  Normally this will be an array
     *  of one object.
     *  @throws an error if no name is provided to search on
     *  logs an error to the console if no unit is found
     */

  }, {
    key: 'getUnitByName',
    value: function getUnitByName(uName) {

      if (uName === null || uName === undefined) {
        throw new Error('Unable to find unit by because when no name was provided.');
      }
      var sepPos = uName.indexOf(Ucum.codeSep_);
      var uCode = null;
      if (sepPos >= 1) {
        uCode = uName.substr(sepPos + Ucum.codeSep_.length);
        uName = uName.substr(0, sepPos);
      }
      var retUnits = this.unitNames_[uName];
      if (retUnits === undefined || retUnits === null) {
        console.log('Unable to find unit with name = ' + uName);
      } else {
        var uLen = retUnits.length;

        if (uCode && uLen > 1) {
          var i = 0;
          for (; retUnits[i].csCode_ !== uCode && i < uLen; i++) {}
          if (i < uLen) retUnits = [retUnits[i]];else {
            console.log('Unable to find unit with name = ' + uName + ' amd ' + ('unit code = ' + uCode));
            retUnits = null;
          }
        } // end if we need to find both a name and a code
      } // end if we got an array of units
      return retUnits;
    } // end getUnitByName


    /**
     *  Returns an array of unit objects with the specified unit string.
     *  The array may contain one or more magnitude:unit reference objects.
     *  Or none, if no units have a matching unit string (which is not
     *  considered an error)
     *
     *  @param name the name of the unit to be returned
     *  @returns the array of magnitude:unit references or null if none were found
     */

  }, {
    key: 'getUnitByString',
    value: function getUnitByString(uString) {
      var retAry = null;
      if (uString) {
        retAry = this.unitStrings_[uString];
        if (retAry === undefined) retAry = null;
      }
      return retAry;
    }

    /**
     *  Returns a array of unit objects based on the unit's dimension vector.
     *
     *  @param uName the deimension vector of the units to be returned.
     *
     *  @returns null if no unit was found for the specified vector OR an array of
     *  unit objects with the specified vector.
     *  @throws an error if no vector is provided to search on
     *  logs an error to the console if no unit is found
     */

  }, {
    key: 'getUnitsByDimension',
    value: function getUnitsByDimension(uDim) {

      var unitsArray = null;
      if (uDim === null || uDim === undefined) {
        throw new Error('Unable to find unit by because when no dimension ' + 'vector was provided.');
      }

      unitsArray = this.unitDimensions_[uDim];
      if (unitsArray === undefined || unitsArray === null) {
        console.log('Unable to find unit with dimension = ' + uDim);
      }

      return unitsArray;
    } // end getUnitsByDimension


    /**
     * Gets a list of all unit names in the Unit tables
     *
     * @returns an array of the unit names
     */

  }, {
    key: 'getAllUnitNames',
    value: function getAllUnitNames() {
      return Object.keys(this.unitNames_);
    } // end getAllUnitNames


    /**
     * Gets a list of all unit names in the tables.  Where more than one
     * unit has the same name, the unit code, in parentheses, is appended
     * to the end of the name.
     *
     * @returns {Array}
     */

  }, {
    key: 'getUnitNamesList',
    value: function getUnitNamesList() {
      var nameList = [];
      var codes = Object.keys(this.unitCodes_);
      codes.sort(this.compareCodes);
      var uLen = codes.length;
      for (var i = 0; i < uLen; i++) {
        nameList[i] = codes[i] + Ucum.codeSep_ + this.unitCodes_[codes[i]].name_;
      } // end do for each code
      return nameList;
    }

    /**
     * This provides a sort function for unit codes so that sorting ignores
     * square brackets and case.
     *
     * @param a first value
     * @param b second value
     * @returns -1 if a is should fall before b; otherwise 1.
     */

  }, {
    key: 'compareCodes',
    value: function compareCodes(a, b) {
      a = a.replace(/[\[\]]/g, '');
      a = a.toLowerCase();
      b = b.replace(/[\[\]]/g, '');
      b = b.toLowerCase();
      return a < b ? -1 : 1;
    }

    /**
     * Gets a list of all unit codes in the Unit tables
     *
     * @returns an array of the unit names
     */

  }, {
    key: 'getAllUnitCodes',
    value: function getAllUnitCodes() {
      return Object.keys(this.unitCodes_);
    } // end getAllUnitNames


    /**
     * This is used to get all unit objects.  Currently it is used
     * to get the objects to write to the json ucum definitions file
     * that is used to provide prefix and unit definition objects for
     * conversions and validations.
     *
     * @returns an array containing all unit objects, ordered by definition
     * order
     */

  }, {
    key: 'allUnitsByDef',
    value: function allUnitsByDef() {
      var unitsList = [];
      var uLen = this.codeOrder_.length;
      for (var u = 0; u < uLen; u++) {
        unitsList.push(this.getUnitByCode(this.codeOrder_[u]));
      }
      return unitsList;
    } // end allUnitsByDef


    /**
     * This is used to get all unit objects, ordered by unit name.  Currently it
     * is used to create a csv list of all units.
     *
     * @returns a buffer containing all unit objects, ordered by name
     * order
     */

  }, {
    key: 'allUnitsByName',
    value: function allUnitsByName() {
      var unitBuff = '';
      var unitsList = this.getAllUnitNames();
      var uLen = unitsList.length;
      for (var i = 0; i < uLen; i++) {
        var nameRecs = this.getUnitByName(unitsList[i]);
        for (var u = 0; u < nameRecs.length; u++) {
          var rec = nameRecs[u];
          unitBuff += rec.csCode_ + ',' + rec.name_ + ',' + rec.property_ + ',' + rec.csUnitString_ + ',' + rec.magnitude_;
          if (rec.dim_ !== null && rec.dim_.dimVec_ instanceof Array) unitBuff += ',[' + rec.dim_.dimVec_.join('') + ']\r\n';else unitBuff += '\r\n';
        }
      }
      return unitBuff;
    } // end allUnitsByName


    /**
     * This creates a list of all units in the tables.  It uses the byCode
     * table, and uses the codeOrder_ array to determine the order in which
     * the units are listed.
     *
     * @param doLong boolean indicating how much to output.  If true, all data
     *  from the unit objects is included.   If false, only a few major values
     *  are included.
     * @returns {string} buffer containing all the listings
     */

  }, {
    key: 'printUnits',
    value: function printUnits(doLong) {
      if (doLong === undefined) doLong = false;
      var codeList = '';
      var uLen = this.codeOrder_.length;
      var unitString = 'csCode; ';
      if (doLong) {
        unitString += 'ciCode; ';
      }
      unitString += 'name; ';
      if (doLong) unitString += 'isBase; ';
      unitString += 'magnitude; dimension; from unit(s); value; function; ';
      if (doLong) unitString += 'property; printSymbol; class; isMetric; variable; ' + 'isSpecial; isAbitrary; ';
      unitString += 'comment';
      codeList = unitString + '\n';

      for (var u = 0; u < uLen; u++) {
        var curUnit = this.getUnitByCode(this.codeOrder_[u]);
        unitString = this.codeOrder_[u] + '; ';
        if (doLong) {
          unitString += curUnit.getProperty('ciCode_') + '; ';
        }
        unitString += curUnit.getProperty('name_') + '; ';
        if (doLong) {
          if (curUnit.getProperty('isBase_')) unitString += 'true; ';else unitString += 'false; ';
        }
        unitString += curUnit.getProperty('magnitude_') + '; ';
        var curDim = curUnit.getProperty('dim_');
        if (curDim) {
          unitString += curDim.dimVec_ + '; ';
        } else {
          unitString += 'null; ';
        }
        if (curUnit.csUnitString_) unitString += curUnit.csUnitString_ + '; ' + curUnit.baseFactor_ + '; ';else unitString += 'null; null; ';

        if (curUnit.cnv_) unitString += curUnit.cnv_ + '; ';else unitString += 'null; ';

        if (doLong) {
          unitString += curUnit.getProperty('property_') + '; ' + curUnit.getProperty('printSymbol_') + '; ' + curUnit.getProperty('class_') + '; ' + curUnit.getProperty('isMetric_') + '; ' + curUnit.getProperty('variable_') + '; ' + curUnit.getProperty('isSpecial_') + '; ' + curUnit.getProperty('isArbitrary_') + '; ';
        }
        if (curUnit.defError_) unitString += 'problem parsing this one, deferred to later.';
        codeList += unitString + '\n';
      }
      return codeList;
    }
  }]);

  return UnitTables;
}(); // end UnitTables


/**
 *  This function exists ONLY until the original UnitTables constructor
 *  is called for the first time.  It's defined here in case getInstance
 *  is called before the constructor.   This calls the constructor.
 *
 *  The constructor redefines the getInstance function to return the
 *  singleton UnitTables object.  See more detail in the constructor
 *  description.
 *
 *  @returns the singleton UnitTables object.
 */


UnitTables.getInstance = function () {
  return new UnitTables();
};

// Perform the first request for the tables object, to get the
// getInstance method set.
UnitTables.getInstance();


},{"./config.js":135}]},{},[143])(143)
});