(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ucumPkg = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={"prefixes":[{"code_":"E","name_":"exa","value_":1000000000000000000,"exp_":"18"},{"code_":"G","name_":"giga","value_":1000000000,"exp_":"9"},{"code_":"Gi","name_":"gibi","value_":1073741824,"exp_":null},{"code_":"Ki","name_":"kibi","value_":1024,"exp_":null},{"code_":"M","name_":"mega","value_":1000000,"exp_":"6"},{"code_":"Mi","name_":"mebi","value_":1048576,"exp_":null},{"code_":"P","name_":"peta","value_":1000000000000000,"exp_":"15"},{"code_":"T","name_":"tera","value_":1000000000000,"exp_":"12"},{"code_":"Ti","name_":"tebi","value_":1099511627776,"exp_":null},{"code_":"Y","name_":"yotta","value_":1e+24,"exp_":"24"},{"code_":"Z","name_":"zetta","value_":1e+21,"exp_":"21"},{"code_":"a","name_":"atto","value_":1e-18,"exp_":"-18"},{"code_":"c","name_":"centi","value_":0.01,"exp_":"-2"},{"code_":"d","name_":"deci","value_":0.1,"exp_":"-1"},{"code_":"da","name_":"deka","value_":10,"exp_":"1"},{"code_":"f","name_":"femto","value_":1e-15,"exp_":"-15"},{"code_":"h","name_":"hecto","value_":100,"exp_":"2"},{"code_":"k","name_":"kilo","value_":1000,"exp_":"3"},{"code_":"m","name_":"milli","value_":0.001,"exp_":"-3"},{"code_":"n","name_":"nano","value_":1e-9,"exp_":"-9"},{"code_":"p","name_":"pico","value_":1e-12,"exp_":"-12"},{"code_":"u","name_":"micro","value_":0.000001,"exp_":"-6"},{"code_":"y","name_":"yocto","value_":1.0000000000000001e-24,"exp_":"-24"},{"code_":"z","name_":"zepto","value_":1e-21,"exp_":"-21"}],"units":[{"isBase_":true,"name_":"meter","csCode_":"m","ciCode_":"M","property_":"length","magnitude_":1,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"second","csCode_":"s","ciCode_":"S","property_":"time","magnitude_":1,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"s","class_":null,"isMetric_":false,"variable_":"T","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram","csCode_":"g","ciCode_":"G","property_":"mass","magnitude_":1,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"radian","csCode_":"rad","ciCode_":"RAD","property_":"plane angle","magnitude_":1,"dim_":{"dimVec_":[0,0,0,1,0,0,0]},"printSymbol_":"rad","class_":null,"isMetric_":false,"variable_":"A","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"kelvin","csCode_":"K","ciCode_":"K","property_":"temperature","magnitude_":1,"dim_":{"dimVec_":[0,0,0,0,1,0,0]},"printSymbol_":"K","class_":null,"isMetric_":false,"variable_":"C","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"coulomb","csCode_":"C","ciCode_":"C","property_":"electric charge","magnitude_":1,"dim_":{"dimVec_":[0,0,0,0,0,1,0]},"printSymbol_":"C","class_":null,"isMetric_":false,"variable_":"Q","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"candela","csCode_":"cd","ciCode_":"CD","property_":"luminous intensity","magnitude_":1,"dim_":{"dimVec_":[0,0,0,0,0,0,1]},"printSymbol_":"cd","class_":null,"isMetric_":false,"variable_":"F","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"the number ten for arbitrary powers","csCode_":"10*","ciCode_":"10*","property_":"number","magnitude_":"10","dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"the number ten for arbitrary powers","csCode_":"10^","ciCode_":"10^","property_":"number","magnitude_":"10","dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"the number pi","csCode_":"[pi]","ciCode_":"[PI]","property_":"number","magnitude_":3.141592653589793,"dim_":{"dimVec_":null},"printSymbol_":"π","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"3.1415926535897932384626433832795028841971693993751058209749445923","baseFactor_":3.141592653589793,"defError_":false},{"isBase_":false,"name_":"percent","csCode_":"%","ciCode_":"%","property_":"fraction","magnitude_":0.01,"dim_":{"dimVec_":null},"printSymbol_":"%","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"10*-2","ciUnitString_":"10*-2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"parts per thousand","csCode_":"[ppth]","ciCode_":"[PPTH]","property_":"fraction","magnitude_":0.001,"dim_":{"dimVec_":null},"printSymbol_":"ppth","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"10*-3","ciUnitString_":"10*-3","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"parts per million","csCode_":"[ppm]","ciCode_":"[PPM]","property_":"fraction","magnitude_":0.000001,"dim_":{"dimVec_":null},"printSymbol_":"ppm","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"10*-6","ciUnitString_":"10*-6","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"parts per billion","csCode_":"[ppb]","ciCode_":"[PPB]","property_":"fraction","magnitude_":1e-9,"dim_":{"dimVec_":null},"printSymbol_":"ppb","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"10*-9","ciUnitString_":"10*-9","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"parts per trillion","csCode_":"[pptr]","ciCode_":"[PPTR]","property_":"fraction","magnitude_":1e-12,"dim_":{"dimVec_":null},"printSymbol_":"pptr","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"10*-12","ciUnitString_":"10*-12","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"mole","csCode_":"mol","ciCode_":"MOL","property_":"amount of substance","magnitude_":6.0221367e+23,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"steradian","csCode_":"sr","ciCode_":"SR","property_":"solid angle","magnitude_":1,"dim_":{"dimVec_":[0,0,0,2,0,0,0]},"printSymbol_":"sr","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"rad2","ciUnitString_":"RAD2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"hertz","csCode_":"Hz","ciCode_":"HZ","property_":"frequency","magnitude_":1,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"Hz","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"s-1","ciUnitString_":"S-1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"newton","csCode_":"N","ciCode_":"N","property_":"force","magnitude_":1000,"dim_":{"dimVec_":[1,-2,1,0,0,0,0]},"printSymbol_":"N","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"kg.m/s2","ciUnitString_":"KG.M/S2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"pascal","csCode_":"Pa","ciCode_":"PAL","property_":"pressure","magnitude_":1000,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"Pa","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"N/m2","ciUnitString_":"N/M2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"joule","csCode_":"J","ciCode_":"J","property_":"energy","magnitude_":1000,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"J","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"N.m","ciUnitString_":"N.M","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"watt","csCode_":"W","ciCode_":"W","property_":"power","magnitude_":1000,"dim_":{"dimVec_":[2,-3,1,0,0,0,0]},"printSymbol_":"W","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"J/s","ciUnitString_":"J/S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"ampère","csCode_":"A","ciCode_":"A","property_":"electric current","magnitude_":1,"dim_":{"dimVec_":[0,-1,0,0,0,1,0]},"printSymbol_":"A","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"C/s","ciUnitString_":"C/S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"volt","csCode_":"V","ciCode_":"V","property_":"electric potential","magnitude_":1000,"dim_":{"dimVec_":[2,-2,1,0,0,-1,0]},"printSymbol_":"V","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"J/C","ciUnitString_":"J/C","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"farad","csCode_":"F","ciCode_":"F","property_":"electric capacitance","magnitude_":0.001,"dim_":{"dimVec_":[-2,2,-1,0,0,2,0]},"printSymbol_":"F","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"C/V","ciUnitString_":"C/V","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"ohm","csCode_":"Ohm","ciCode_":"OHM","property_":"electric resistance","magnitude_":1000,"dim_":{"dimVec_":[2,-1,1,0,0,-2,0]},"printSymbol_":"Ω","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"V/A","ciUnitString_":"V/A","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"siemens","csCode_":"S","ciCode_":"SIE","property_":"electric conductance","magnitude_":0.001,"dim_":{"dimVec_":[-2,1,-1,0,0,2,0]},"printSymbol_":"S","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"Ohm-1","ciUnitString_":"OHM-1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"weber","csCode_":"Wb","ciCode_":"WB","property_":"magentic flux","magnitude_":1000,"dim_":{"dimVec_":[2,-1,1,0,0,-1,0]},"printSymbol_":"Wb","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"V.s","ciUnitString_":"V.S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"degree Celsius","csCode_":"Cel","ciCode_":"CEL","property_":"temperature","magnitude_":1,"dim_":{"dimVec_":[0,0,0,0,1,0,0]},"printSymbol_":"°C","class_":"si","isMetric_":true,"variable_":null,"cnv_":"Cel","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"K","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"tesla","csCode_":"T","ciCode_":"T","property_":"magnetic flux density","magnitude_":1000,"dim_":{"dimVec_":[0,-1,1,0,0,-1,0]},"printSymbol_":"T","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"Wb/m2","ciUnitString_":"WB/M2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"henry","csCode_":"H","ciCode_":"H","property_":"inductance","magnitude_":1000,"dim_":{"dimVec_":[2,0,1,0,0,-2,0]},"printSymbol_":"H","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"Wb/A","ciUnitString_":"WB/A","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"lumen","csCode_":"lm","ciCode_":"LM","property_":"luminous flux","magnitude_":1,"dim_":{"dimVec_":[0,0,0,2,0,0,1]},"printSymbol_":"lm","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"cd.sr","ciUnitString_":"CD.SR","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"lux","csCode_":"lx","ciCode_":"LX","property_":"illuminance","magnitude_":1,"dim_":{"dimVec_":[-2,0,0,2,0,0,1]},"printSymbol_":"lx","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"lm/m2","ciUnitString_":"LM/M2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"becquerel","csCode_":"Bq","ciCode_":"BQ","property_":"radioactivity","magnitude_":1,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"Bq","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"s-1","ciUnitString_":"S-1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"gray","csCode_":"Gy","ciCode_":"GY","property_":"energy dose","magnitude_":1,"dim_":{"dimVec_":[2,-2,0,0,0,0,0]},"printSymbol_":"Gy","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"J/kg","ciUnitString_":"J/KG","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"sievert","csCode_":"Sv","ciCode_":"SV","property_":"dose equivalent","magnitude_":1,"dim_":{"dimVec_":[2,-2,0,0,0,0,0]},"printSymbol_":"Sv","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"J/kg","ciUnitString_":"J/KG","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"degree","csCode_":"deg","ciCode_":"DEG","property_":"plane angle","magnitude_":0.017453292519943295,"dim_":{"dimVec_":null},"printSymbol_":"°","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pi].rad/360","ciUnitString_":"[PI].RAD/360","baseFactorStr_":"2","baseFactor_":"2","defError_":false},{"isBase_":false,"name_":"gon","csCode_":"gon","ciCode_":"GON","property_":"plane angle","magnitude_":0.015707963267948967,"dim_":{"dimVec_":null},"printSymbol_":"□<sup>g</sup>","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"deg","ciUnitString_":"DEG","baseFactorStr_":"0.9","baseFactor_":"0.9","defError_":false},{"isBase_":false,"name_":"minute","csCode_":"'","ciCode_":"'","property_":"plane angle","magnitude_":0.0002908882086657216,"dim_":{"dimVec_":null},"printSymbol_":"'","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"deg/60","ciUnitString_":"DEG/60","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"second","csCode_":"''","ciCode_":"''","property_":"plane angle","magnitude_":0.00000484813681109536,"dim_":{"dimVec_":null},"printSymbol_":"''","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"'/60","ciUnitString_":"'/60","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"liter","csCode_":"l","ciCode_":"L","property_":"volume","magnitude_":0.001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"l","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"dm3","ciUnitString_":"DM3","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"liter","csCode_":"L","ciCode_":"","property_":"volume","magnitude_":0.001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"are","csCode_":"ar","ciCode_":"AR","property_":"area","magnitude_":100,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":"a","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"m2","ciUnitString_":"M2","baseFactorStr_":"100","baseFactor_":"100","defError_":false},{"isBase_":false,"name_":"minute","csCode_":"min","ciCode_":"MIN","property_":"time","magnitude_":60,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"min","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"s","ciUnitString_":"S","baseFactorStr_":"60","baseFactor_":"60","defError_":false},{"isBase_":false,"name_":"hour","csCode_":"h","ciCode_":"HR","property_":"time","magnitude_":3600,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"h","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"min","ciUnitString_":"MIN","baseFactorStr_":"60","baseFactor_":"60","defError_":false},{"isBase_":false,"name_":"day","csCode_":"d","ciCode_":"D","property_":"time","magnitude_":86400,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"d","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"h","ciUnitString_":"HR","baseFactorStr_":"24","baseFactor_":"24","defError_":false},{"isBase_":false,"name_":"tropical year","csCode_":"a_t","ciCode_":"ANN_T","property_":"time","magnitude_":31556925.216,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"a<sub>t</sub>","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"d","ciUnitString_":"D","baseFactorStr_":"365.24219","baseFactor_":"365.24219","defError_":false},{"isBase_":false,"name_":"mean Julian year","csCode_":"a_j","ciCode_":"ANN_J","property_":"time","magnitude_":31557600,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"a<sub>j</sub>","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"d","ciUnitString_":"D","baseFactorStr_":"365.25","baseFactor_":"365.25","defError_":false},{"isBase_":false,"name_":"mean Gregorian year","csCode_":"a_g","ciCode_":"ANN_G","property_":"time","magnitude_":31556952,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"a<sub>g</sub>","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"d","ciUnitString_":"D","baseFactorStr_":"365.2425","baseFactor_":"365.2425","defError_":false},{"isBase_":false,"name_":"year","csCode_":"a","ciCode_":"ANN","property_":"time","magnitude_":31557600,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"a","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"a_j","ciUnitString_":"ANN_J","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"week","csCode_":"wk","ciCode_":"WK","property_":"time","magnitude_":604800,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"wk","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"d","ciUnitString_":"D","baseFactorStr_":"7","baseFactor_":"7","defError_":false},{"isBase_":false,"name_":"synodal month","csCode_":"mo_s","ciCode_":"MO_S","property_":"time","magnitude_":2551442.976,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"mo<sub>s</sub>","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"d","ciUnitString_":"D","baseFactorStr_":"29.53059","baseFactor_":"29.53059","defError_":false},{"isBase_":false,"name_":"mean Julian month","csCode_":"mo_j","ciCode_":"MO_J","property_":"time","magnitude_":2629800,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"mo<sub>j</sub>","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"a_j/12","ciUnitString_":"ANN_J/12","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"mean Gregorian month","csCode_":"mo_g","ciCode_":"MO_G","property_":"time","magnitude_":2629746,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"mo<sub>g</sub>","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"a_g/12","ciUnitString_":"ANN_G/12","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"month","csCode_":"mo","ciCode_":"MO","property_":"time","magnitude_":2629800,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"mo","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mo_j","ciUnitString_":"MO_J","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"tonne","csCode_":"t","ciCode_":"TNE","property_":"mass","magnitude_":1000000,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"t","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"kg","ciUnitString_":"KG","baseFactorStr_":"1e3","baseFactor_":1000,"defError_":false},{"isBase_":false,"name_":"bar","csCode_":"bar","ciCode_":"BAR","property_":"pressure","magnitude_":3.15576e+27,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"bar","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"Pa","ciUnitString_":"PAL","baseFactorStr_":"1e5","baseFactor_":100000,"defError_":false},{"isBase_":false,"name_":"unified atomic mass unit","csCode_":"u","ciCode_":"AMU","property_":"mass","magnitude_":1.6605402e-24,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"u","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"g","ciUnitString_":"G","baseFactorStr_":"1.6605402e-24","baseFactor_":1.6605402e-24,"defError_":false},{"isBase_":false,"name_":"astronomic unit","csCode_":"AU","ciCode_":"ASU","property_":"length","magnitude_":149597870691,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"AU","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"Mm","ciUnitString_":"MAM","baseFactorStr_":"149597.870691","baseFactor_":"149597.870691","defError_":false},{"isBase_":false,"name_":"parsec","csCode_":"pc","ciCode_":"PRS","property_":"length","magnitude_":30856780000000000,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"pc","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"m","ciUnitString_":"M","baseFactorStr_":"3.085678e16","baseFactor_":30856780000000000,"defError_":false},{"isBase_":false,"name_":"velocity of light","csCode_":"[c]","ciCode_":"[C]","property_":"velocity","magnitude_":299792458,"dim_":{"dimVec_":[1,-1,0,0,0,0,0]},"printSymbol_":"<i>c</i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"m/s","ciUnitString_":"M/S","baseFactorStr_":"299792458","baseFactor_":"299792458","defError_":false},{"isBase_":false,"name_":"Planck constant","csCode_":"[h]","ciCode_":"[H]","property_":"action","magnitude_":6.6260755e-31,"dim_":{"dimVec_":[2,-1,1,0,0,0,0]},"printSymbol_":"<i>h</i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"J.s","ciUnitString_":"J.S","baseFactorStr_":"6.6260755e-34","baseFactor_":6.6260755e-34,"defError_":false},{"isBase_":false,"name_":"Boltzmann constant","csCode_":"[k]","ciCode_":"[K]","property_":"(unclassified)","magnitude_":1.380658e-20,"dim_":{"dimVec_":[2,-2,1,0,-1,0,0]},"printSymbol_":"<i>k</i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"J/K","ciUnitString_":"J/K","baseFactorStr_":"1.380658e-23","baseFactor_":1.380658e-23,"defError_":false},{"isBase_":false,"name_":"permittivity of vacuum","csCode_":"[eps_0]","ciCode_":"[EPS_0]","property_":"electric permittivity","magnitude_":8.854187817000001e-15,"dim_":{"dimVec_":[-3,2,-1,0,0,2,0]},"printSymbol_":"<i>ε<sub><r>0</r></sub></i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"F/m","ciUnitString_":"F/M","baseFactorStr_":"8.854187817e-12","baseFactor_":8.854187817e-12,"defError_":false},{"isBase_":false,"name_":"permeability of vacuum","csCode_":"[mu_0]","ciCode_":"[MU_0]","property_":"magnetic permeability","magnitude_":0.0012566370614359172,"dim_":{"dimVec_":[1,0,1,0,0,-2,0]},"printSymbol_":"<i>μ<sub><r>0</r></sub></i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"N/A2","ciUnitString_":"4.[PI].10*-7.N/A2","baseFactorStr_":"1","baseFactor_":0.0000012566370614359173,"defError_":false},{"isBase_":false,"name_":"elementary charge","csCode_":"[e]","ciCode_":"[E]","property_":"electric charge","magnitude_":1.60217733e-19,"dim_":{"dimVec_":[0,0,0,0,0,1,0]},"printSymbol_":"<i>e</i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"C","ciUnitString_":"C","baseFactorStr_":"1.60217733e-19","baseFactor_":1.60217733e-19,"defError_":false},{"isBase_":false,"name_":"electronvolt","csCode_":"eV","ciCode_":"EV","property_":"energy","magnitude_":1.60217733e-16,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"eV","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[e].V","ciUnitString_":"[E].V","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"electron mass","csCode_":"[m_e]","ciCode_":"[M_E]","property_":"mass","magnitude_":9.1093897e-28,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"<i>m<sub><r>e</r></sub></i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"g","ciUnitString_":"g","baseFactorStr_":"9.1093897e-28","baseFactor_":9.1093897e-28,"defError_":false},{"isBase_":false,"name_":"proton mass","csCode_":"[m_p]","ciCode_":"[M_P]","property_":"mass","magnitude_":1.6726231e-24,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"<i>m<sub><r>p</r></sub></i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"g","ciUnitString_":"g","baseFactorStr_":"1.6726231e-24","baseFactor_":1.6726231e-24,"defError_":false},{"isBase_":false,"name_":"Newtonian constant of gravitation","csCode_":"[G]","ciCode_":"[GC]","property_":"(unclassified)","magnitude_":6.67259e-14,"dim_":{"dimVec_":[3,-2,-1,0,0,0,0]},"printSymbol_":"<i>G</i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"m3.kg-1.s-2","ciUnitString_":"M3.KG-1.S-2","baseFactorStr_":"6.67259e-11","baseFactor_":6.67259e-11,"defError_":false},{"isBase_":false,"name_":"standard acceleration of free fall","csCode_":"[g]","ciCode_":"[G]","property_":"acceleration","magnitude_":9.80665,"dim_":{"dimVec_":[1,-2,0,0,0,0,0]},"printSymbol_":"<i>g<sub>n</sub></i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"m/s2","ciUnitString_":"M/S2","baseFactorStr_":"980665e-5","baseFactor_":"9.80665","defError_":false},{"isBase_":false,"name_":"standard atmosphere","csCode_":"atm","ciCode_":"ATM","property_":"pressure","magnitude_":3.19757382e+27,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"atm","class_":"const","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"Pa","ciUnitString_":"PAL","baseFactorStr_":"101325","baseFactor_":"101325","defError_":false},{"isBase_":false,"name_":"light-year","csCode_":"[ly]","ciCode_":"[LY]","property_":"length","magnitude_":9460730472580800,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"l.y.","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[c].a_j","ciUnitString_":"[C].ANN_J","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"gram-force","csCode_":"gf","ciCode_":"GF","property_":"force","magnitude_":9.80665,"dim_":{"dimVec_":[1,-2,1,0,0,0,0]},"printSymbol_":"gf","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"g.[g]","ciUnitString_":"G.[G]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Kayser","csCode_":"Ky","ciCode_":"KY","property_":"lineic number","magnitude_":100,"dim_":{"dimVec_":[-1,0,0,0,0,0,0]},"printSymbol_":"K","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"cm-1","ciUnitString_":"CM-1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Gal","csCode_":"Gal","ciCode_":"GL","property_":"acceleration","magnitude_":0.01,"dim_":{"dimVec_":[1,-2,0,0,0,0,0]},"printSymbol_":"Gal","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"cm/s2","ciUnitString_":"CM/S2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"dyne","csCode_":"dyn","ciCode_":"DYN","property_":"force","magnitude_":0.01,"dim_":{"dimVec_":[1,-2,1,0,0,0,0]},"printSymbol_":"dyn","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"g.cm/s2","ciUnitString_":"G.CM/S2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"erg","csCode_":"erg","ciCode_":"ERG","property_":"energy","magnitude_":0.0001,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"erg","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"dyn.cm","ciUnitString_":"DYN.CM","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Poise","csCode_":"P","ciCode_":"P","property_":"dynamic viscosity","magnitude_":100,"dim_":{"dimVec_":[-1,-1,1,0,0,0,0]},"printSymbol_":"P","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"dyn.s/cm2","ciUnitString_":"DYN.S/CM2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Biot","csCode_":"Bi","ciCode_":"BI","property_":"electric current","magnitude_":10,"dim_":{"dimVec_":[0,-1,0,0,0,1,0]},"printSymbol_":"Bi","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"A","ciUnitString_":"A","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"Stokes","csCode_":"St","ciCode_":"ST","property_":"kinematic viscosity","magnitude_":0.0001,"dim_":{"dimVec_":[2,-1,0,0,0,0,0]},"printSymbol_":"St","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"cm2/s","ciUnitString_":"CM2/S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Maxwell","csCode_":"Mx","ciCode_":"MX","property_":"flux of magnetic induction","magnitude_":0.00001,"dim_":{"dimVec_":[2,-1,1,0,0,-1,0]},"printSymbol_":"Mx","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"Wb","ciUnitString_":"WB","baseFactorStr_":"1e-8","baseFactor_":1e-8,"defError_":false},{"isBase_":false,"name_":"Gauss","csCode_":"G","ciCode_":"GS","property_":"magnetic flux density","magnitude_":0.1,"dim_":{"dimVec_":[0,-1,1,0,0,-1,0]},"printSymbol_":"Gs","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"T","ciUnitString_":"T","baseFactorStr_":"1e-4","baseFactor_":0.0001,"defError_":false},{"isBase_":false,"name_":"Oersted","csCode_":"Oe","ciCode_":"OE","property_":"magnetic field intensity","magnitude_":79.57747154594767,"dim_":{"dimVec_":[-1,-1,0,0,0,1,0]},"printSymbol_":"Oe","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"A/m","ciUnitString_":"/[PI].A/M","baseFactorStr_":"250","baseFactor_":79.57747154594767,"defError_":false},{"isBase_":false,"name_":"Gilbert","csCode_":"Gb","ciCode_":"GB","property_":"magnetic tension","magnitude_":0.7957747154594768,"dim_":{"dimVec_":[0,-1,0,0,0,1,0]},"printSymbol_":"Gb","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"Oe.cm","ciUnitString_":"OE.CM","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"stilb","csCode_":"sb","ciCode_":"SB","property_":"lum. intensity density","magnitude_":8640000,"dim_":{"dimVec_":[-2,1,0,0,0,0,0]},"printSymbol_":"sb","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"cd/cm2","ciUnitString_":"CD/CM2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Lambert","csCode_":"Lmb","ciCode_":"LMB","property_":"brightness","magnitude_":2750197.4166279514,"dim_":{"dimVec_":[-2,1,0,0,0,0,0]},"printSymbol_":"L","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"cd/cm2/[pi]","ciUnitString_":"CD/CM2/[PI]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"phot","csCode_":"ph","ciCode_":"PHT","property_":"illuminance","magnitude_":0.0001,"dim_":{"dimVec_":[-2,0,0,2,0,0,1]},"printSymbol_":"ph","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"lx","ciUnitString_":"LX","baseFactorStr_":"1e-4","baseFactor_":0.0001,"defError_":false},{"isBase_":false,"name_":"Curie","csCode_":"Ci","ciCode_":"CI","property_":"radioactivity","magnitude_":37000000000,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"Ci","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"Bq","ciUnitString_":"BQ","baseFactorStr_":"37e9","baseFactor_":37000000000,"defError_":false},{"isBase_":false,"name_":"Roentgen","csCode_":"R","ciCode_":"ROE","property_":"ion dose","magnitude_":2.58e-7,"dim_":{"dimVec_":[0,0,-1,0,0,1,0]},"printSymbol_":"R","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"C/kg","ciUnitString_":"C/KG","baseFactorStr_":"2.58e-4","baseFactor_":0.000258,"defError_":false},{"isBase_":false,"name_":"radiation absorbed dose","csCode_":"RAD","ciCode_":"[RAD]","property_":"energy dose","magnitude_":0.01,"dim_":{"dimVec_":[2,-2,0,0,0,0,0]},"printSymbol_":"RAD","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"erg/g","ciUnitString_":"ERG/G","baseFactorStr_":"100","baseFactor_":"100","defError_":false},{"isBase_":false,"name_":"radiation equivalent man","csCode_":"REM","ciCode_":"[REM]","property_":"dose equivalent","magnitude_":0.01,"dim_":{"dimVec_":[2,-2,0,0,0,0,0]},"printSymbol_":"REM","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"RAD","ciUnitString_":"[RAD]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"inch","csCode_":"[in_i]","ciCode_":"[IN_I]","property_":"length","magnitude_":0.025400000000000002,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"in","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"cm","ciUnitString_":"CM","baseFactorStr_":"254e-2","baseFactor_":"2.54","defError_":false},{"isBase_":false,"name_":"foot","csCode_":"[ft_i]","ciCode_":"[FT_I]","property_":"length","magnitude_":0.3048,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"ft","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_i]","ciUnitString_":"[IN_I]","baseFactorStr_":"12","baseFactor_":"12","defError_":false},{"isBase_":false,"name_":"yard","csCode_":"[yd_i]","ciCode_":"[YD_I]","property_":"length","magnitude_":0.9144000000000001,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"yd","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_i]","ciUnitString_":"[FT_I]","baseFactorStr_":"3","baseFactor_":"3","defError_":false},{"isBase_":false,"name_":"mile","csCode_":"[mi_i]","ciCode_":"[MI_I]","property_":"length","magnitude_":1609.344,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"mi","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_i]","ciUnitString_":"[FT_I]","baseFactorStr_":"5280","baseFactor_":"5280","defError_":false},{"isBase_":false,"name_":"fathom","csCode_":"[fth_i]","ciCode_":"[FTH_I]","property_":"depth of water","magnitude_":1.8288000000000002,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"fth","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_i]","ciUnitString_":"[FT_I]","baseFactorStr_":"6","baseFactor_":"6","defError_":false},{"isBase_":false,"name_":"nautical mile","csCode_":"[nmi_i]","ciCode_":"[NMI_I]","property_":"length","magnitude_":1852,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"n.mi","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"m","ciUnitString_":"M","baseFactorStr_":"1852","baseFactor_":"1852","defError_":false},{"isBase_":false,"name_":"knot","csCode_":"[kn_i]","ciCode_":"[KN_I]","property_":"velocity","magnitude_":0.5144444444444445,"dim_":{"dimVec_":[1,-1,0,0,0,0,0]},"printSymbol_":"knot","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[nmi_i]/h","ciUnitString_":"[NMI_I]/H","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"square inch","csCode_":"[sin_i]","ciCode_":"[SIN_I]","property_":"area","magnitude_":0.0006451600000000001,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_i]2","ciUnitString_":"[IN_I]2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"square foot","csCode_":"[sft_i]","ciCode_":"[SFT_I]","property_":"area","magnitude_":0.09290304,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_i]2","ciUnitString_":"[FT_I]2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"square yard","csCode_":"[syd_i]","ciCode_":"[SYD_I]","property_":"area","magnitude_":0.8361273600000002,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[yd_i]2","ciUnitString_":"[YD_I]2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"cubic inch","csCode_":"[cin_i]","ciCode_":"[CIN_I]","property_":"volume","magnitude_":0.000016387064000000003,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_i]3","ciUnitString_":"[IN_I]3","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"cubic foot","csCode_":"[cft_i]","ciCode_":"[CFT_I]","property_":"volume","magnitude_":0.028316846592000004,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_i]3","ciUnitString_":"[FT_I]3","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"cubic yard","csCode_":"[cyd_i]","ciCode_":"[CYD_I]","property_":"volume","magnitude_":0.7645548579840002,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"cu.yd","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[yd_i]3","ciUnitString_":"[YD_I]3","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"board foot","csCode_":"[bf_i]","ciCode_":"[BF_I]","property_":"volume","magnitude_":0.002359737216,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_i]3","ciUnitString_":"[IN_I]3","baseFactorStr_":"144","baseFactor_":"144","defError_":false},{"isBase_":false,"name_":"cord","csCode_":"[cr_i]","ciCode_":"[CR_I]","property_":"volume","magnitude_":3.6245563637760005,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_i]3","ciUnitString_":"[FT_I]3","baseFactorStr_":"128","baseFactor_":"128","defError_":false},{"isBase_":false,"name_":"mil","csCode_":"[mil_i]","ciCode_":"[MIL_I]","property_":"length","magnitude_":0.000025400000000000004,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"mil","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_i]","ciUnitString_":"[IN_I]","baseFactorStr_":"1e-3","baseFactor_":0.001,"defError_":false},{"isBase_":false,"name_":"circular mil","csCode_":"[cml_i]","ciCode_":"[CML_I]","property_":"area","magnitude_":5.067074790974979e-10,"dim_":{"dimVec_":null},"printSymbol_":"circ.mil","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pi]/4.[mil_i]2","ciUnitString_":"[PI]/4.[MIL_I]2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"hand","csCode_":"[hd_i]","ciCode_":"[HD_I]","property_":"height of horses","magnitude_":0.10160000000000001,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"hd","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_i]","ciUnitString_":"[IN_I]","baseFactorStr_":"4","baseFactor_":"4","defError_":false},{"isBase_":false,"name_":"foot","csCode_":"[ft_us]","ciCode_":"[FT_US]","property_":"length","magnitude_":0.3048006096012192,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"ft<sub>us</sub>","class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"m/3937","ciUnitString_":"M/3937","baseFactorStr_":"1200","baseFactor_":"1200","defError_":false},{"isBase_":false,"name_":"yard","csCode_":"[yd_us]","ciCode_":"[YD_US]","property_":"length","magnitude_":0.9144018288036575,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_us]","ciUnitString_":"[FT_US]","baseFactorStr_":"3","baseFactor_":"3","defError_":false},{"isBase_":false,"name_":"inch","csCode_":"[in_us]","ciCode_":"[IN_US]","property_":"length","magnitude_":0.0254000508001016,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_us]/12","ciUnitString_":"[FT_US]/12","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"rod","csCode_":"[rd_us]","ciCode_":"[RD_US]","property_":"length","magnitude_":5.029210058420117,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_us]","ciUnitString_":"[FT_US]","baseFactorStr_":"16.5","baseFactor_":"16.5","defError_":false},{"isBase_":false,"name_":"Gunter's chain","csCode_":"[ch_us]","ciCode_":"[CH_US]","property_":"length","magnitude_":20.116840233680467,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[rd_us]","ciUnitString_":"[RD_US]","baseFactorStr_":"4","baseFactor_":"4","defError_":false},{"isBase_":false,"name_":"link for Gunter's chain","csCode_":"[lk_us]","ciCode_":"[LK_US]","property_":"length","magnitude_":0.20116840233680466,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ch_us]/100","ciUnitString_":"[CH_US]/100","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Ramden's chain","csCode_":"[rch_us]","ciCode_":"[RCH_US]","property_":"length","magnitude_":30.480060960121918,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_us]","ciUnitString_":"[FT_US]","baseFactorStr_":"100","baseFactor_":"100","defError_":false},{"isBase_":false,"name_":"link for Ramden's chain","csCode_":"[rlk_us]","ciCode_":"[RLK_US]","property_":"length","magnitude_":0.3048006096012192,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[rch_us]/100","ciUnitString_":"[RCH_US]/100","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"fathom","csCode_":"[fth_us]","ciCode_":"[FTH_US]","property_":"length","magnitude_":1.828803657607315,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_us]","ciUnitString_":"[FT_US]","baseFactorStr_":"6","baseFactor_":"6","defError_":false},{"isBase_":false,"name_":"furlong","csCode_":"[fur_us]","ciCode_":"[FUR_US]","property_":"length","magnitude_":201.16840233680466,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[rd_us]","ciUnitString_":"[RD_US]","baseFactorStr_":"40","baseFactor_":"40","defError_":false},{"isBase_":false,"name_":"mile","csCode_":"[mi_us]","ciCode_":"[MI_US]","property_":"length","magnitude_":1609.3472186944373,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[fur_us]","ciUnitString_":"[FUR_US]","baseFactorStr_":"8","baseFactor_":"8","defError_":false},{"isBase_":false,"name_":"acre","csCode_":"[acr_us]","ciCode_":"[ACR_US]","property_":"area","magnitude_":4046.872609874252,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[rd_us]2","ciUnitString_":"[RD_US]2","baseFactorStr_":"160","baseFactor_":"160","defError_":false},{"isBase_":false,"name_":"square rod","csCode_":"[srd_us]","ciCode_":"[SRD_US]","property_":"area","magnitude_":25.292953811714074,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[rd_us]2","ciUnitString_":"[RD_US]2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"square mile","csCode_":"[smi_us]","ciCode_":"[SMI_US]","property_":"area","magnitude_":2589998.470319521,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[mi_us]2","ciUnitString_":"[MI_US]2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"section","csCode_":"[sct]","ciCode_":"[SCT]","property_":"area","magnitude_":2589998.470319521,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[mi_us]2","ciUnitString_":"[MI_US]2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"township","csCode_":"[twp]","ciCode_":"[TWP]","property_":"area","magnitude_":93239944.93150276,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[sct]","ciUnitString_":"[SCT]","baseFactorStr_":"36","baseFactor_":"36","defError_":false},{"isBase_":false,"name_":"mil","csCode_":"[mil_us]","ciCode_":"[MIL_US]","property_":"length","magnitude_":0.0000254000508001016,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_us]","ciUnitString_":"[IN_US]","baseFactorStr_":"1e-3","baseFactor_":0.001,"defError_":false},{"isBase_":false,"name_":"inch","csCode_":"[in_br]","ciCode_":"[IN_BR]","property_":"length","magnitude_":0.025399980000000003,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"cm","ciUnitString_":"CM","baseFactorStr_":"2.539998","baseFactor_":"2.539998","defError_":false},{"isBase_":false,"name_":"foot","csCode_":"[ft_br]","ciCode_":"[FT_BR]","property_":"length","magnitude_":0.30479976000000003,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_br]","ciUnitString_":"[IN_BR]","baseFactorStr_":"12","baseFactor_":"12","defError_":false},{"isBase_":false,"name_":"rod","csCode_":"[rd_br]","ciCode_":"[RD_BR]","property_":"length","magnitude_":5.02919604,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_br]","ciUnitString_":"[FT_BR]","baseFactorStr_":"16.5","baseFactor_":"16.5","defError_":false},{"isBase_":false,"name_":"Gunter's chain","csCode_":"[ch_br]","ciCode_":"[CH_BR]","property_":"length","magnitude_":20.11678416,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[rd_br]","ciUnitString_":"[RD_BR]","baseFactorStr_":"4","baseFactor_":"4","defError_":false},{"isBase_":false,"name_":"link for Gunter's chain","csCode_":"[lk_br]","ciCode_":"[LK_BR]","property_":"length","magnitude_":0.2011678416,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ch_br]/100","ciUnitString_":"[CH_BR]/100","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"fathom","csCode_":"[fth_br]","ciCode_":"[FTH_BR]","property_":"length","magnitude_":1.82879856,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_br]","ciUnitString_":"[FT_BR]","baseFactorStr_":"6","baseFactor_":"6","defError_":false},{"isBase_":false,"name_":"pace","csCode_":"[pc_br]","ciCode_":"[PC_BR]","property_":"length","magnitude_":0.7619994000000001,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_br]","ciUnitString_":"[FT_BR]","baseFactorStr_":"2.5","baseFactor_":"2.5","defError_":false},{"isBase_":false,"name_":"yard","csCode_":"[yd_br]","ciCode_":"[YD_BR]","property_":"length","magnitude_":0.91439928,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_br]","ciUnitString_":"[FT_BR]","baseFactorStr_":"3","baseFactor_":"3","defError_":false},{"isBase_":false,"name_":"mile","csCode_":"[mi_br]","ciCode_":"[MI_BR]","property_":"length","magnitude_":1609.3427328000002,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_br]","ciUnitString_":"[FT_BR]","baseFactorStr_":"5280","baseFactor_":"5280","defError_":false},{"isBase_":false,"name_":"nautical mile","csCode_":"[nmi_br]","ciCode_":"[NMI_BR]","property_":"length","magnitude_":1853.1825408000002,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_br]","ciUnitString_":"[FT_BR]","baseFactorStr_":"6080","baseFactor_":"6080","defError_":false},{"isBase_":false,"name_":"knot","csCode_":"[kn_br]","ciCode_":"[KN_BR]","property_":"velocity","magnitude_":0.5147729280000001,"dim_":{"dimVec_":[1,-1,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[nmi_br]/h","ciUnitString_":"[NMI_BR]/H","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"acre","csCode_":"[acr_br]","ciCode_":"[ACR_BR]","property_":"area","magnitude_":4046.850049400269,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[yd_br]2","ciUnitString_":"[YD_BR]2","baseFactorStr_":"4840","baseFactor_":"4840","defError_":false},{"isBase_":false,"name_":"Queen Anne's wine gallon","csCode_":"[gal_us]","ciCode_":"[GAL_US]","property_":"fluid volume","magnitude_":0.0037854117840000006,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_i]3","ciUnitString_":"[IN_I]3","baseFactorStr_":"231","baseFactor_":"231","defError_":false},{"isBase_":false,"name_":"barrel","csCode_":"[bbl_us]","ciCode_":"[BBL_US]","property_":"fluid volume","magnitude_":0.158987294928,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[gal_us]","ciUnitString_":"[GAL_US]","baseFactorStr_":"42","baseFactor_":"42","defError_":false},{"isBase_":false,"name_":"quart","csCode_":"[qt_us]","ciCode_":"[QT_US]","property_":"fluid volume","magnitude_":0.0009463529460000001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[gal_us]/4","ciUnitString_":"[GAL_US]/4","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"pint","csCode_":"[pt_us]","ciCode_":"[PT_US]","property_":"fluid volume","magnitude_":0.00047317647300000007,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[qt_us]/2","ciUnitString_":"[QT_US]/2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"gill","csCode_":"[gil_us]","ciCode_":"[GIL_US]","property_":"fluid volume","magnitude_":0.00011829411825000002,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pt_us]/4","ciUnitString_":"[PT_US]/4","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"fluid ounce","csCode_":"[foz_us]","ciCode_":"[FOZ_US]","property_":"fluid volume","magnitude_":0.000029573529562500005,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"oz fl","class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[gil_us]/4","ciUnitString_":"[GIL_US]/4","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"fluid dram","csCode_":"[fdr_us]","ciCode_":"[FDR_US]","property_":"fluid volume","magnitude_":0.0000036966911953125006,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[foz_us]/8","ciUnitString_":"[FOZ_US]/8","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"minim","csCode_":"[min_us]","ciCode_":"[MIN_US]","property_":"fluid volume","magnitude_":6.1611519921875e-8,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[fdr_us]/60","ciUnitString_":"[FDR_US]/60","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"cord","csCode_":"[crd_us]","ciCode_":"[CRD_US]","property_":"fluid volume","magnitude_":3.6245563637760005,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_i]3","ciUnitString_":"[FT_I]3","baseFactorStr_":"128","baseFactor_":"128","defError_":false},{"isBase_":false,"name_":"bushel","csCode_":"[bu_us]","ciCode_":"[BU_US]","property_":"dry volume","magnitude_":0.03523907016688001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_i]3","ciUnitString_":"[IN_I]3","baseFactorStr_":"2150.42","baseFactor_":"2150.42","defError_":false},{"isBase_":false,"name_":"historical winchester gallon","csCode_":"[gal_wi]","ciCode_":"[GAL_WI]","property_":"dry volume","magnitude_":0.004404883770860001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[bu_us]/8","ciUnitString_":"[BU_US]/8","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"peck","csCode_":"[pk_us]","ciCode_":"[PK_US]","property_":"dry volume","magnitude_":0.008809767541720002,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[bu_us]/4","ciUnitString_":"[BU_US]/4","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"dry quart","csCode_":"[dqt_us]","ciCode_":"[DQT_US]","property_":"dry volume","magnitude_":0.0011012209427150002,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pk_us]/8","ciUnitString_":"[PK_US]/8","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"dry pint","csCode_":"[dpt_us]","ciCode_":"[DPT_US]","property_":"dry volume","magnitude_":0.0005506104713575001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[dqt_us]/2","ciUnitString_":"[DQT_US]/2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"tablespoon","csCode_":"[tbs_us]","ciCode_":"[TBS_US]","property_":"volume","magnitude_":0.000014786764781250002,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[foz_us]/2","ciUnitString_":"[FOZ_US]/2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"teaspoon","csCode_":"[tsp_us]","ciCode_":"[TSP_US]","property_":"volume","magnitude_":0.0000049289215937500005,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[tbs_us]/3","ciUnitString_":"[TBS_US]/3","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"cup","csCode_":"[cup_us]","ciCode_":"[CUP_US]","property_":"volume","magnitude_":0.00023658823650000004,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[tbs_us]","ciUnitString_":"[TBS_US]","baseFactorStr_":"16","baseFactor_":"16","defError_":false},{"isBase_":false,"name_":"metric fluid ounce","csCode_":"[foz_m]","ciCode_":"[FOZ_M]","property_":"fluid volume","magnitude_":0.000029999999999999997,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"oz fl","class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mL","ciUnitString_":"ML","baseFactorStr_":"30","baseFactor_":"30","defError_":false},{"isBase_":false,"name_":"metric cup","csCode_":"[cup_m]","ciCode_":"[CUP_M]","property_":"volume","magnitude_":0.00023999999999999998,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mL","ciUnitString_":"ML","baseFactorStr_":"240","baseFactor_":"240","defError_":false},{"isBase_":false,"name_":"metric teaspoon","csCode_":"[tsp_m]","ciCode_":"[TSP_M]","property_":"volume","magnitude_":0.0000049999999999999996,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mL","ciUnitString_":"mL","baseFactorStr_":"5","baseFactor_":"5","defError_":false},{"isBase_":false,"name_":"metric tablespoon","csCode_":"[tbs_m]","ciCode_":"[TBS_M]","property_":"volume","magnitude_":0.000014999999999999999,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mL","ciUnitString_":"mL","baseFactorStr_":"15","baseFactor_":"15","defError_":false},{"isBase_":false,"name_":"gallon","csCode_":"[gal_br]","ciCode_":"[GAL_BR]","property_":"volume","magnitude_":0.004546090000000001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"l","ciUnitString_":"L","baseFactorStr_":"4.54609","baseFactor_":"4.54609","defError_":false},{"isBase_":false,"name_":"peck","csCode_":"[pk_br]","ciCode_":"[PK_BR]","property_":"volume","magnitude_":0.009092180000000002,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[gal_br]","ciUnitString_":"[GAL_BR]","baseFactorStr_":"2","baseFactor_":"2","defError_":false},{"isBase_":false,"name_":"bushel","csCode_":"[bu_br]","ciCode_":"[BU_BR]","property_":"volume","magnitude_":0.03636872000000001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pk_br]","ciUnitString_":"[PK_BR]","baseFactorStr_":"4","baseFactor_":"4","defError_":false},{"isBase_":false,"name_":"quart","csCode_":"[qt_br]","ciCode_":"[QT_BR]","property_":"volume","magnitude_":0.0011365225000000002,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[gal_br]/4","ciUnitString_":"[GAL_BR]/4","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"pint","csCode_":"[pt_br]","ciCode_":"[PT_BR]","property_":"volume","magnitude_":0.0005682612500000001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[qt_br]/2","ciUnitString_":"[QT_BR]/2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"gill","csCode_":"[gil_br]","ciCode_":"[GIL_BR]","property_":"volume","magnitude_":0.00014206531250000003,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pt_br]/4","ciUnitString_":"[PT_BR]/4","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"fluid ounce","csCode_":"[foz_br]","ciCode_":"[FOZ_BR]","property_":"volume","magnitude_":0.000028413062500000005,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[gil_br]/5","ciUnitString_":"[GIL_BR]/5","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"fluid dram","csCode_":"[fdr_br]","ciCode_":"[FDR_BR]","property_":"volume","magnitude_":0.0000035516328125000006,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[foz_br]/8","ciUnitString_":"[FOZ_BR]/8","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"minim","csCode_":"[min_br]","ciCode_":"[MIN_BR]","property_":"volume","magnitude_":5.919388020833334e-8,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[fdr_br]/60","ciUnitString_":"[FDR_BR]/60","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"grain","csCode_":"[gr]","ciCode_":"[GR]","property_":"mass","magnitude_":0.06479891,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mg","ciUnitString_":"MG","baseFactorStr_":"64.79891","baseFactor_":"64.79891","defError_":false},{"isBase_":false,"name_":"pound","csCode_":"[lb_av]","ciCode_":"[LB_AV]","property_":"mass","magnitude_":453.59237,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"lb","class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[gr]","ciUnitString_":"[GR]","baseFactorStr_":"7000","baseFactor_":"7000","defError_":false},{"isBase_":false,"name_":"pound force","csCode_":"[lbf_av]","ciCode_":"[LBF_AV]","property_":"force","magnitude_":4448.2216152605,"dim_":{"dimVec_":[1,-2,1,0,0,0,0]},"printSymbol_":"lbf","class_":"const","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[lb_av].[g]","ciUnitString_":"[LB_AV].[G]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"ounce","csCode_":"[oz_av]","ciCode_":"[OZ_AV]","property_":"mass","magnitude_":28.349523125,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"oz","class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[lb_av]/16","ciUnitString_":"[LB_AV]/16","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"dram","csCode_":"[dr_av]","ciCode_":"[DR_AV]","property_":"mass","magnitude_":1.7718451953125,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[oz_av]/16","ciUnitString_":"[OZ_AV]/16","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"short hundredweight","csCode_":"[scwt_av]","ciCode_":"[SCWT_AV]","property_":"mass","magnitude_":45359.237,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[lb_av]","ciUnitString_":"[LB_AV]","baseFactorStr_":"100","baseFactor_":"100","defError_":false},{"isBase_":false,"name_":"long hunderdweight","csCode_":"[lcwt_av]","ciCode_":"[LCWT_AV]","property_":"mass","magnitude_":50802.345440000005,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[lb_av]","ciUnitString_":"[LB_AV]","baseFactorStr_":"112","baseFactor_":"112","defError_":false},{"isBase_":false,"name_":"short ton","csCode_":"[ston_av]","ciCode_":"[STON_AV]","property_":"mass","magnitude_":907184.74,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[scwt_av]","ciUnitString_":"[SCWT_AV]","baseFactorStr_":"20","baseFactor_":"20","defError_":false},{"isBase_":false,"name_":"long ton","csCode_":"[lton_av]","ciCode_":"[LTON_AV]","property_":"mass","magnitude_":1016046.9088000001,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[lcwt_av]","ciUnitString_":"[LCWT_AV]","baseFactorStr_":"20","baseFactor_":"20","defError_":false},{"isBase_":false,"name_":"stone","csCode_":"[stone_av]","ciCode_":"[STONE_AV]","property_":"mass","magnitude_":6350.293180000001,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[lb_av]","ciUnitString_":"[LB_AV]","baseFactorStr_":"14","baseFactor_":"14","defError_":false},{"isBase_":false,"name_":"pennyweight","csCode_":"[pwt_tr]","ciCode_":"[PWT_TR]","property_":"mass","magnitude_":1.5551738400000001,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"troy","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[gr]","ciUnitString_":"[GR]","baseFactorStr_":"24","baseFactor_":"24","defError_":false},{"isBase_":false,"name_":"ounce","csCode_":"[oz_tr]","ciCode_":"[OZ_TR]","property_":"mass","magnitude_":31.103476800000003,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"troy","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pwt_tr]","ciUnitString_":"[PWT_TR]","baseFactorStr_":"20","baseFactor_":"20","defError_":false},{"isBase_":false,"name_":"pound","csCode_":"[lb_tr]","ciCode_":"[LB_TR]","property_":"mass","magnitude_":373.2417216,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"troy","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[oz_tr]","ciUnitString_":"[OZ_TR]","baseFactorStr_":"12","baseFactor_":"12","defError_":false},{"isBase_":false,"name_":"scruple","csCode_":"[sc_ap]","ciCode_":"[SC_AP]","property_":"mass","magnitude_":1.2959782,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"apoth","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[gr]","ciUnitString_":"[GR]","baseFactorStr_":"20","baseFactor_":"20","defError_":false},{"isBase_":false,"name_":"dram","csCode_":"[dr_ap]","ciCode_":"[DR_AP]","property_":"mass","magnitude_":3.8879346,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"apoth","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[sc_ap]","ciUnitString_":"[SC_AP]","baseFactorStr_":"3","baseFactor_":"3","defError_":false},{"isBase_":false,"name_":"ounce","csCode_":"[oz_ap]","ciCode_":"[OZ_AP]","property_":"mass","magnitude_":31.1034768,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"apoth","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[dr_ap]","ciUnitString_":"[DR_AP]","baseFactorStr_":"8","baseFactor_":"8","defError_":false},{"isBase_":false,"name_":"pound","csCode_":"[lb_ap]","ciCode_":"[LB_AP]","property_":"mass","magnitude_":373.2417216,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"apoth","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[oz_ap]","ciUnitString_":"[OZ_AP]","baseFactorStr_":"12","baseFactor_":"12","defError_":false},{"isBase_":false,"name_":"metric ounce","csCode_":"[oz_m]","ciCode_":"[OZ_M]","property_":"mass","magnitude_":28,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"apoth","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"g","ciUnitString_":"g","baseFactorStr_":"28","baseFactor_":"28","defError_":false},{"isBase_":false,"name_":"line","csCode_":"[lne]","ciCode_":"[LNE]","property_":"length","magnitude_":0.002116666666666667,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_i]/12","ciUnitString_":"[IN_I]/12","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"point","csCode_":"[pnt]","ciCode_":"[PNT]","property_":"length","magnitude_":0.0003527777777777778,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[lne]/6","ciUnitString_":"[LNE]/6","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"pica","csCode_":"[pca]","ciCode_":"[PCA]","property_":"length","magnitude_":0.004233333333333334,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pnt]","ciUnitString_":"[PNT]","baseFactorStr_":"12","baseFactor_":"12","defError_":false},{"isBase_":false,"name_":"Printer's point","csCode_":"[pnt_pr]","ciCode_":"[PNT_PR]","property_":"length","magnitude_":0.00035145980000000004,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_i]","ciUnitString_":"[IN_I]","baseFactorStr_":"0.013837","baseFactor_":"0.013837","defError_":false},{"isBase_":false,"name_":"Printer's pica","csCode_":"[pca_pr]","ciCode_":"[PCA_PR]","property_":"length","magnitude_":0.004217517600000001,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pnt_pr]","ciUnitString_":"[PNT_PR]","baseFactorStr_":"12","baseFactor_":"12","defError_":false},{"isBase_":false,"name_":"pied","csCode_":"[pied]","ciCode_":"[PIED]","property_":"length","magnitude_":0.3248,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"cm","ciUnitString_":"CM","baseFactorStr_":"32.48","baseFactor_":"32.48","defError_":false},{"isBase_":false,"name_":"pouce","csCode_":"[pouce]","ciCode_":"[POUCE]","property_":"length","magnitude_":0.027066666666666666,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pied]/12","ciUnitString_":"[PIED]/12","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"ligne","csCode_":"[ligne]","ciCode_":"[LIGNE]","property_":"length","magnitude_":0.0022555555555555554,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pouce]/12","ciUnitString_":"[POUCE]/12","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"didot","csCode_":"[didot]","ciCode_":"[DIDOT]","property_":"length","magnitude_":0.0003759259259259259,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ligne]/6","ciUnitString_":"[LIGNE]/6","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"cicero","csCode_":"[cicero]","ciCode_":"[CICERO]","property_":"length","magnitude_":0.004511111111111111,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[didot]","ciUnitString_":"[DIDOT]","baseFactorStr_":"12","baseFactor_":"12","defError_":false},{"isBase_":false,"name_":"degree Fahrenheit","csCode_":"[degF]","ciCode_":"[DEGF]","property_":"temperature","magnitude_":0.5555555555555556,"dim_":{"dimVec_":[0,0,0,0,1,0,0]},"printSymbol_":"°F","class_":"heat","isMetric_":false,"variable_":null,"cnv_":"degF","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"K","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":0.5555555555555556,"defError_":false},{"isBase_":false,"name_":"degree Rankine","csCode_":"[degR]","ciCode_":"[degR]","property_":"temperature","magnitude_":0.5555555555555556,"dim_":{"dimVec_":[0,0,0,0,1,0,0]},"printSymbol_":"°R","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"K/9","ciUnitString_":"K/9","baseFactorStr_":"5","baseFactor_":"5","defError_":false},{"isBase_":false,"name_":"degree Réaumur","csCode_":"[degRe]","ciCode_":"[degRe]","property_":"temperature","magnitude_":1.25,"dim_":{"dimVec_":[0,0,0,0,1,0,0]},"printSymbol_":"°Ré","class_":"heat","isMetric_":false,"variable_":null,"cnv_":"degRe","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"K","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1.25,"defError_":false},{"isBase_":false,"name_":"calorie at 15 °C","csCode_":"cal_[15]","ciCode_":"CAL_[15]","property_":"energy","magnitude_":4185.8,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"cal<sub>15°C</sub>","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"J","ciUnitString_":"J","baseFactorStr_":"4.18580","baseFactor_":"4.18580","defError_":false},{"isBase_":false,"name_":"calorie at 20 °C","csCode_":"cal_[20]","ciCode_":"CAL_[20]","property_":"energy","magnitude_":4181.9,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"cal<sub>20°C</sub>","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"J","ciUnitString_":"J","baseFactorStr_":"4.18190","baseFactor_":"4.18190","defError_":false},{"isBase_":false,"name_":"mean calorie","csCode_":"cal_m","ciCode_":"CAL_M","property_":"energy","magnitude_":4190.0199999999995,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"cal<sub>m</sub>","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"J","ciUnitString_":"J","baseFactorStr_":"4.19002","baseFactor_":"4.19002","defError_":false},{"isBase_":false,"name_":"international table calorie","csCode_":"cal_IT","ciCode_":"CAL_IT","property_":"energy","magnitude_":4186.8,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"cal<sub>IT</sub>","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"J","ciUnitString_":"J","baseFactorStr_":"4.1868","baseFactor_":"4.1868","defError_":false},{"isBase_":false,"name_":"thermochemical calorie","csCode_":"cal_th","ciCode_":"CAL_TH","property_":"energy","magnitude_":4184,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"cal<sub>th</sub>","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"J","ciUnitString_":"J","baseFactorStr_":"4.184","baseFactor_":"4.184","defError_":false},{"isBase_":false,"name_":"calorie","csCode_":"cal","ciCode_":"CAL","property_":"energy","magnitude_":4184,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"cal","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"cal_th","ciUnitString_":"CAL_TH","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"nutrition label Calories","csCode_":"[Cal]","ciCode_":"[CAL]","property_":"energy","magnitude_":4184000,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"Cal","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"kcal_th","ciUnitString_":"KCAL_TH","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"British thermal unit at 39 °F","csCode_":"[Btu_39]","ciCode_":"[BTU_39]","property_":"energy","magnitude_":1059670,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"Btu<sub>39°F</sub>","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"kJ","ciUnitString_":"kJ","baseFactorStr_":"1.05967","baseFactor_":"1.05967","defError_":false},{"isBase_":false,"name_":"British thermal unit at 59 °F","csCode_":"[Btu_59]","ciCode_":"[BTU_59]","property_":"energy","magnitude_":1054800,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"Btu<sub>59°F</sub>","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"kJ","ciUnitString_":"kJ","baseFactorStr_":"1.05480","baseFactor_":"1.05480","defError_":false},{"isBase_":false,"name_":"British thermal unit at 60 °F","csCode_":"[Btu_60]","ciCode_":"[BTU_60]","property_":"energy","magnitude_":1054680,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"Btu<sub>60°F</sub>","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"kJ","ciUnitString_":"kJ","baseFactorStr_":"1.05468","baseFactor_":"1.05468","defError_":false},{"isBase_":false,"name_":"mean British thermal unit","csCode_":"[Btu_m]","ciCode_":"[BTU_M]","property_":"energy","magnitude_":1055870,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"Btu<sub>m</sub>","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"kJ","ciUnitString_":"kJ","baseFactorStr_":"1.05587","baseFactor_":"1.05587","defError_":false},{"isBase_":false,"name_":"international table British thermal unit","csCode_":"[Btu_IT]","ciCode_":"[BTU_IT]","property_":"energy","magnitude_":1055055.85262,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"Btu<sub>IT</sub>","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"kJ","ciUnitString_":"kJ","baseFactorStr_":"1.05505585262","baseFactor_":"1.05505585262","defError_":false},{"isBase_":false,"name_":"thermochemical British thermal unit","csCode_":"[Btu_th]","ciCode_":"[BTU_TH]","property_":"energy","magnitude_":1054350,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"Btu<sub>th</sub>","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"kJ","ciUnitString_":"kJ","baseFactorStr_":"1.054350","baseFactor_":"1.054350","defError_":false},{"isBase_":false,"name_":"British thermal unit","csCode_":"[Btu]","ciCode_":"[BTU]","property_":"energy","magnitude_":1054350,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"btu","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[Btu_th]","ciUnitString_":"[BTU_TH]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"horsepower","csCode_":"[HP]","ciCode_":"[HP]","property_":"power","magnitude_":745699.8715822703,"dim_":{"dimVec_":[2,-3,1,0,0,0,0]},"printSymbol_":null,"class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[ft_i].[lbf_av]/s","ciUnitString_":"[FT_I].[LBF_AV]/S","baseFactorStr_":"550","baseFactor_":"550","defError_":false},{"isBase_":false,"name_":"tex","csCode_":"tex","ciCode_":"TEX","property_":"linear mass density (of textile thread)","magnitude_":0.001,"dim_":{"dimVec_":[-1,0,1,0,0,0,0]},"printSymbol_":"tex","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"g/km","ciUnitString_":"G/KM","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Denier","csCode_":"[den]","ciCode_":"[DEN]","property_":"linear mass density (of textile thread)","magnitude_":0.0001111111111111111,"dim_":{"dimVec_":[-1,0,1,0,0,0,0]},"printSymbol_":"den","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"g/9/km","ciUnitString_":"G/9/KM","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"meter of water column","csCode_":"m[H2O]","ciCode_":"M[H2O]","property_":"pressure","magnitude_":9806650,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"m HO<sub><r>2</r></sub>","class_":"clinical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"kPa","ciUnitString_":"KPAL","baseFactorStr_":"980665e-5","baseFactor_":"9.80665","defError_":false},{"isBase_":false,"name_":"meter of mercury column","csCode_":"m[Hg]","ciCode_":"M[HG]","property_":"pressure","magnitude_":133322000,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"m Hg","class_":"clinical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"kPa","ciUnitString_":"KPAL","baseFactorStr_":"133.3220","baseFactor_":"133.3220","defError_":false},{"isBase_":false,"name_":"inch of water column","csCode_":"[in_i'H2O]","ciCode_":"[IN_I'H2O]","property_":"pressure","magnitude_":249088.91000000003,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"in HO<sub><r>2</r></sub>","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"m[H2O].[in_i]/m","ciUnitString_":"M[H2O].[IN_I]/M","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"inch of mercury column","csCode_":"[in_i'Hg]","ciCode_":"[IN_I'HG]","property_":"pressure","magnitude_":3386378.8000000003,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"in Hg","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"m[Hg].[in_i]/m","ciUnitString_":"M[HG].[IN_I]/M","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"peripheral vascular resistance unit","csCode_":"[PRU]","ciCode_":"[PRU]","property_":"fluid resistance","magnitude_":133322000000,"dim_":{"dimVec_":[-4,-1,1,0,0,0,0]},"printSymbol_":"P.R.U.","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mm[Hg].s/ml","ciUnitString_":"MM[HG].S/ML","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Wood unit","csCode_":"[wood'U]","ciCode_":"[WOOD'U]","property_":"fluid resistance","magnitude_":7999320000,"dim_":{"dimVec_":[-4,-1,1,0,0,0,0]},"printSymbol_":"Wood U.","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mm[Hg].min/L","ciUnitString_":"MM[HG].MIN/L","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"diopter","csCode_":"[diop]","ciCode_":"[DIOP]","property_":"refraction of a lens","magnitude_":1,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"dpt","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":"inv","cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"m","ciUnitString_":"/M","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"prism diopter","csCode_":"[p'diop]","ciCode_":"[P'DIOP]","property_":"refraction of a prism","magnitude_":0.017453292519943295,"dim_":{"dimVec_":null},"printSymbol_":"PD","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":"tanTimes100","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"deg","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"percent of slope","csCode_":"%[slope]","ciCode_":"%[SLOPE]","property_":"slope","magnitude_":0.017453292519943295,"dim_":{"dimVec_":null},"printSymbol_":"%","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":"100tan","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"deg","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"mesh","csCode_":"[mesh_i]","ciCode_":"[MESH_I]","property_":"lineic number","magnitude_":0.025400000000000002,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"clinical","isMetric_":false,"variable_":null,"cnv_":"inv","cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_i]","ciUnitString_":"/[IN_I]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Charrière","csCode_":"[Ch]","ciCode_":"[CH]","property_":"gauge of catheters","magnitude_":0.0003333333333333333,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"Ch","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mm/3","ciUnitString_":"MM/3","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"drop","csCode_":"[drp]","ciCode_":"[DRP]","property_":"volume","magnitude_":5e-8,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"drp","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"ml/20","ciUnitString_":"ML/20","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Hounsfield unit","csCode_":"[hnsf'U]","ciCode_":"[HNSF'U]","property_":"x-ray attenuation","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"HF","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"metabolic equivalent","csCode_":"[MET]","ciCode_":"[MET]","property_":"metabolic cost of physical activity","magnitude_":5.833333333333334e-11,"dim_":{"dimVec_":[3,-1,-1,0,0,0,0]},"printSymbol_":"MET","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mL/min/kg","ciUnitString_":"ML/MIN/KG","baseFactorStr_":"3.5","baseFactor_":"3.5","defError_":false},{"isBase_":false,"name_":"homeopathic potency of decimal series (retired)","csCode_":"[hp'_X]","ciCode_":"[HP'_X]","property_":"homeopathic potency (retired)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"X","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":"hpX","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1,"defError_":false},{"isBase_":false,"name_":"homeopathic potency of centesimal series (retired)","csCode_":"[hp'_C]","ciCode_":"[HP'_C]","property_":"homeopathic potency (retired)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"C","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":"hpC","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1,"defError_":false},{"isBase_":false,"name_":"homeopathic potency of millesimal series (retired)","csCode_":"[hp'_M]","ciCode_":"[HP'_M]","property_":"homeopathic potency (retired)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"M","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":"hpM","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1,"defError_":false},{"isBase_":false,"name_":"homeopathic potency of quintamillesimal series (retired)","csCode_":"[hp'_Q]","ciCode_":"[HP'_Q]","property_":"homeopathic potency (retired)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"Q","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":"hpQ","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1,"defError_":false},{"isBase_":false,"name_":"homeopathic potency of decimal hahnemannian series","csCode_":"[hp_X]","ciCode_":"[HP_X]","property_":"homeopathic potency (Hahnemann)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"X","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"homeopathic potency of centesimal hahnemannian series","csCode_":"[hp_C]","ciCode_":"[HP_C]","property_":"homeopathic potency (Hahnemann)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"C","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"homeopathic potency of millesimal hahnemannian series","csCode_":"[hp_M]","ciCode_":"[HP_M]","property_":"homeopathic potency (Hahnemann)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"M","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"homeopathic potency of quintamillesimal hahnemannian series","csCode_":"[hp_Q]","ciCode_":"[HP_Q]","property_":"homeopathic potency (Hahnemann)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"Q","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"homeopathic potency of decimal korsakovian series","csCode_":"[kp_X]","ciCode_":"[KP_X]","property_":"homeopathic potency (Korsakov)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"X","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"homeopathic potency of centesimal korsakovian series","csCode_":"[kp_C]","ciCode_":"[KP_C]","property_":"homeopathic potency (Korsakov)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"C","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"homeopathic potency of millesimal korsakovian series","csCode_":"[kp_M]","ciCode_":"[KP_M]","property_":"homeopathic potency (Korsakov)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"M","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"homeopathic potency of quintamillesimal korsakovian series","csCode_":"[kp_Q]","ciCode_":"[KP_Q]","property_":"homeopathic potency (Korsakov)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"Q","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"equivalents","csCode_":"eq","ciCode_":"EQ","property_":"amount of substance","magnitude_":6.0221367e+23,"dim_":{"dimVec_":null},"printSymbol_":"eq","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"osmole","csCode_":"osm","ciCode_":"OSM","property_":"amount of substance (dissolved particles)","magnitude_":6.0221367e+23,"dim_":{"dimVec_":null},"printSymbol_":"osm","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"pH","csCode_":"[pH]","ciCode_":"[PH]","property_":"acidity","magnitude_":6.0221366999999994e+26,"dim_":{"dimVec_":null},"printSymbol_":"pH","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":"pH","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"mol/l","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"gram percent","csCode_":"g%","ciCode_":"G%","property_":"mass concentration","magnitude_":10000,"dim_":{"dimVec_":[-3,0,1,0,0,0,0]},"printSymbol_":"g%","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"g/dl","ciUnitString_":"G/DL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Svedberg unit","csCode_":"[S]","ciCode_":"[S]","property_":"sedimentation coefficient","magnitude_":1e-13,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"S","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"s","ciUnitString_":"10*-13.S","baseFactorStr_":"1","baseFactor_":1e-13,"defError_":false},{"isBase_":false,"name_":"high power field","csCode_":"[HPF]","ciCode_":"[HPF]","property_":"view area in microscope","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"HPF","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"low power field","csCode_":"[LPF]","ciCode_":"[LPF]","property_":"view area in microscope","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"LPF","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"100","baseFactor_":"100","defError_":false},{"isBase_":false,"name_":"katal","csCode_":"kat","ciCode_":"KAT","property_":"catalytic activity","magnitude_":6.0221367e+23,"dim_":{"dimVec_":null},"printSymbol_":"kat","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"mol/s","ciUnitString_":"MOL/S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Unit","csCode_":"U","ciCode_":"U","property_":"catalytic activity","magnitude_":10036894500000000,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"international unit","csCode_":"[iU]","ciCode_":"[IU]","property_":"arbitrary","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"IU","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"international unit","csCode_":"[IU]","ciCode_":"[IU]","property_":"arbitrary","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"i.U.","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"[iU]","ciUnitString_":"[IU]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"arbitary unit","csCode_":"[arb'U]","ciCode_":"[ARB'U]","property_":"arbitrary","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"arb. U","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"United States Pharmacopeia unit","csCode_":"[USP'U]","ciCode_":"[USP'U]","property_":"arbitrary","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"U.S.P.","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"GPL unit","csCode_":"[GPL'U]","ciCode_":"[GPL'U]","property_":"biologic activity of anticardiolipin IgG","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"MPL unit","csCode_":"[MPL'U]","ciCode_":"[MPL'U]","property_":"biologic activity of anticardiolipin IgM","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"APL unit","csCode_":"[APL'U]","ciCode_":"[APL'U]","property_":"biologic activity of anticardiolipin IgA","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Bethesda unit","csCode_":"[beth'U]","ciCode_":"[BETH'U]","property_":"biologic activity of factor VIII inhibitor","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"anti factor Xa unit","csCode_":"[anti'Xa'U]","ciCode_":"[ANTI'XA'U]","property_":"biologic activity of factor Xa inhibitor (heparin)","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Todd unit","csCode_":"[todd'U]","ciCode_":"[TODD'U]","property_":"biologic activity antistreptolysin O","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Dye unit","csCode_":"[dye'U]","ciCode_":"[DYE'U]","property_":"biologic activity of amylase","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Somogyi unit","csCode_":"[smgy'U]","ciCode_":"[SMGY'U]","property_":"biologic activity of amylase","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Bodansky unit","csCode_":"[bdsk'U]","ciCode_":"[BDSK'U]","property_":"biologic activity of phosphatase","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"King-Armstrong unit","csCode_":"[ka'U]","ciCode_":"[KA'U]","property_":"biologic activity of phosphatase","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Kunkel unit","csCode_":"[knk'U]","ciCode_":"[KNK'U]","property_":"arbitrary biologic activity","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Mac Lagan unit","csCode_":"[mclg'U]","ciCode_":"[MCLG'U]","property_":"arbitrary biologic activity","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"tuberculin unit","csCode_":"[tb'U]","ciCode_":"[TB'U]","property_":"biologic activity of tuberculin","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"50% cell culture infectious dose","csCode_":"[CCID_50]","ciCode_":"[CCID_50]","property_":"biologic activity (infectivity) of an infectious agent preparation","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"CCID<sub>50</sub>","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"50% tissue culture infectious dose","csCode_":"[TCID_50]","ciCode_":"[TCID_50]","property_":"biologic activity (infectivity) of an infectious agent preparation","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"TCID<sub>50</sub>","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"50% embryo infectious dose","csCode_":"[EID_50]","ciCode_":"[EID_50]","property_":"biologic activity (infectivity) of an infectious agent preparation","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"EID<sub>50</sub>","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"plaque forming units","csCode_":"[PFU]","ciCode_":"[PFU]","property_":"amount of an infectious agent","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"PFU","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"focus forming units","csCode_":"[FFU]","ciCode_":"[FFU]","property_":"amount of an infectious agent","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"FFU","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"colony forming units","csCode_":"[CFU]","ciCode_":"[CFU]","property_":"amount of a proliferating organism","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"CFU","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"index of reactivity","csCode_":"[IR]","ciCode_":"[IR]","property_":"amount of an allergen callibrated through in-vivo testing using the Stallergenes® method.","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"IR","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"bioequivalent allergen unit","csCode_":"[BAU]","ciCode_":"[BAU]","property_":"amount of an allergen callibrated through in-vivo testing based on the ID50EAL method of (intradermal dilution for 50mm sum of erythema diameters","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"BAU","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"allergen unit","csCode_":"[AU]","ciCode_":"[AU]","property_":"procedure defined amount of an allergen using some reference standard","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"AU","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"allergen unit for Ambrosia artemisiifolia","csCode_":"[Amb'a'1'U]","ciCode_":"[AMB'A'1'U]","property_":"procedure defined amount of the major allergen of ragweed.","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"Amb a 1 U","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"protein nitrogen unit","csCode_":"[PNU]","ciCode_":"[PNU]","property_":"procedure defined amount of a protein substance","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"PNU","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Limit of flocculation","csCode_":"[Lf]","ciCode_":"[LF]","property_":"procedure defined amount of an antigen substance","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"Lf","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"D-antigen unit","csCode_":"[D'ag'U]","ciCode_":"[D'AG'U]","property_":"procedure defined amount of a poliomyelitis d-antigen substance","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"fibrinogen equivalent unit","csCode_":"[FEU]","ciCode_":"[FEU]","property_":"amount of fibrinogen broken down into the measured d-dimers","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"ELISA unit","csCode_":"[ELU]","ciCode_":"[ELU]","property_":"arbitrary ELISA unit","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Ehrlich unit","csCode_":"[EU]","ciCode_":"[EU]","property_":"Ehrlich unit","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"neper","csCode_":"Np","ciCode_":"NEP","property_":"level","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"Np","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"ln","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1,"defError_":false},{"isBase_":false,"name_":"bel","csCode_":"B","ciCode_":"B","property_":"level","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"B","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lg","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1,"defError_":false},{"isBase_":false,"name_":"bel sound pressure","csCode_":"B[SPL]","ciCode_":"B[SPL]","property_":"pressure level","magnitude_":631152000000000100,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"B(SPL)","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lgTimes2","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"Pa","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":0.00002,"defError_":false},{"isBase_":false,"name_":"bel volt","csCode_":"B[V]","ciCode_":"B[V]","property_":"electric potential level","magnitude_":1000,"dim_":{"dimVec_":[2,-2,1,0,0,-1,0]},"printSymbol_":"B(V)","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lgTimes2","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"V","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"bel millivolt","csCode_":"B[mV]","ciCode_":"B[MV]","property_":"electric potential level","magnitude_":1,"dim_":{"dimVec_":[2,-2,1,0,0,-1,0]},"printSymbol_":"B(mV)","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lgTimes2","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"mV","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"bel microvolt","csCode_":"B[uV]","ciCode_":"B[UV]","property_":"electric potential level","magnitude_":0.001,"dim_":{"dimVec_":[2,-2,1,0,0,-1,0]},"printSymbol_":"B(μV)","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lgTimes2","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"uV","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"bel 10 nanovolt","csCode_":"B[10.nV]","ciCode_":"B[10.NV]","property_":"electric potential level","magnitude_":0.000010000000000000003,"dim_":{"dimVec_":[2,-2,1,0,0,-1,0]},"printSymbol_":"B(10 nV)","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lgTimes2","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"nV","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"bel watt","csCode_":"B[W]","ciCode_":"B[W]","property_":"power level","magnitude_":1000,"dim_":{"dimVec_":[2,-3,1,0,0,0,0]},"printSymbol_":"B(W)","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lg","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"W","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"bel kilowatt","csCode_":"B[kW]","ciCode_":"B[KW]","property_":"power level","magnitude_":1000000,"dim_":{"dimVec_":[2,-3,1,0,0,0,0]},"printSymbol_":"B(kW)","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lg","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"kW","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"stere","csCode_":"st","ciCode_":"STR","property_":"volume","magnitude_":1,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"st","class_":"misc","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"m3","ciUnitString_":"M3","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Ångström","csCode_":"Ao","ciCode_":"AO","property_":"length","magnitude_":1.0000000000000002e-10,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"Å","class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"nm","ciUnitString_":"NM","baseFactorStr_":"0.1","baseFactor_":"0.1","defError_":false},{"isBase_":false,"name_":"barn","csCode_":"b","ciCode_":"BRN","property_":"action area","magnitude_":9.999999999999999e-29,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":"b","class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"fm2","ciUnitString_":"FM2","baseFactorStr_":"100","baseFactor_":"100","defError_":false},{"isBase_":false,"name_":"technical atmosphere","csCode_":"att","ciCode_":"ATT","property_":"pressure","magnitude_":98066499.99999999,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"at","class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"kgf/cm2","ciUnitString_":"KGF/CM2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"mho","csCode_":"mho","ciCode_":"MHO","property_":"electric conductance","magnitude_":0.001,"dim_":{"dimVec_":[-2,1,-1,0,0,2,0]},"printSymbol_":"mho","class_":"misc","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"S","ciUnitString_":"S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"pound per sqare inch","csCode_":"[psi]","ciCode_":"[PSI]","property_":"pressure","magnitude_":6894757.293168359,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"psi","class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[lbf_av]/[in_i]2","ciUnitString_":"[LBF_AV]/[IN_I]2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"circle","csCode_":"circ","ciCode_":"CIRC","property_":"plane angle","magnitude_":6.283185307179586,"dim_":{"dimVec_":null},"printSymbol_":"circ","class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pi].rad","ciUnitString_":"[PI].RAD","baseFactorStr_":"2","baseFactor_":"2","defError_":false},{"isBase_":false,"name_":"spere","csCode_":"sph","ciCode_":"SPH","property_":"solid angle","magnitude_":12.566370614359172,"dim_":{"dimVec_":null},"printSymbol_":"sph","class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[pi].sr","ciUnitString_":"[PI].SR","baseFactorStr_":"4","baseFactor_":"4","defError_":false},{"isBase_":false,"name_":"metric carat","csCode_":"[car_m]","ciCode_":"[CAR_M]","property_":"mass","magnitude_":0.2,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"ct<sub>m</sub>","class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"g","ciUnitString_":"G","baseFactorStr_":"2e-1","baseFactor_":"0.2","defError_":false},{"isBase_":false,"name_":"carat of gold alloys","csCode_":"[car_Au]","ciCode_":"[CAR_AU]","property_":"mass fraction","magnitude_":0.041666666666666664,"dim_":{"dimVec_":null},"printSymbol_":"ct<sub><r>Au</r></sub>","class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"/24","ciUnitString_":"/24","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Smoot","csCode_":"[smoot]","ciCode_":"[SMOOT]","property_":"length","magnitude_":1.7018000000000002,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"[in_i]","ciUnitString_":"[IN_I]","baseFactorStr_":"67","baseFactor_":"67","defError_":false},{"isBase_":false,"name_":"meter per square seconds per square root of hertz","csCode_":"[m/s2/Hz^(1/2)]","ciCode_":"[M/S2/HZ^(1/2)]","property_":"amplitude spectral density","magnitude_":1,"dim_":{"dimVec_":[2,-3,0,0,0,0,0]},"printSymbol_":null,"class_":"misc","isMetric_":false,"variable_":null,"cnv_":"sqrt","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"m2/s4/Hz","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"bit","csCode_":"bit_s","ciCode_":"BIT_S","property_":"amount of information","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"bit<sub>s</sub>","class_":"infotech","isMetric_":false,"variable_":null,"cnv_":"ld","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1,"defError_":false},{"isBase_":false,"name_":"bit","csCode_":"bit","ciCode_":"BIT","property_":"amount of information","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"bit","class_":"infotech","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"byte","csCode_":"By","ciCode_":"BY","property_":"amount of information","magnitude_":8,"dim_":{"dimVec_":null},"printSymbol_":"B","class_":"infotech","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"bit","ciUnitString_":"bit","baseFactorStr_":"8","baseFactor_":"8","defError_":false},{"isBase_":false,"name_":"baud","csCode_":"Bd","ciCode_":"BD","property_":"signal transmission rate","magnitude_":1,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"Bd","class_":"infotech","isMetric_":true,"variable_":null,"cnv_":"inv","cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"csUnitString_":"s","ciUnitString_":"/s","baseFactorStr_":"1","baseFactor_":"1","defError_":false}]}

},{}],2:[function(require,module,exports){
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

//var Utab = require('/home/lmericle/ucum/dist/es5/unitTables.js');
//var Pfx = require('/home/lmericle/ucum/dist/es5/prefix.js');

var Ucum = exports.Ucum = { // Namespace for UCUM classes

  /**
   *  Flag indicating whether or not we're using case sensitive labels
   */
  caseSensitive_: true,

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
  codeSep_: ' - '

};

},{}],3:[function(require,module,exports){
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

},{"./config.js":2,"is-integer":25}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * This class manages the special functions used by some units.
 *
 * @author Lee Mericle, based on java version by Gunther Schadow
 *
 */

var Functions = function () {

  /**
   * Constructor
   *
   * Creates the singleton object that contains the list of functions used
   * to convert special units.
   */

  function Functions() {
    _classCallCheck(this, Functions);

    // Create the hash containing the function pairs
    this.fs = {};

    // Celsius - convert to Celsius from kelvin and from Celsius to kelvin
    // where kelvin is the base unit for temperature
    this.fs['cel'] = { cnvTo: function cnvTo(x) {
        return x - 273.15;
      },
      cnvFrom: function cnvFrom(x) {
        return x + 273.15;
      } };

    // Fahrenheit - convert to Fahrenheit from kelvin and from Fahrenheit to
    // kelvin - which is the base unit for temperature
    this.fs['degf'] = { cnvTo: function cnvTo(x) {
        return x - 459.67;
      },
      cnvFrom: function cnvFrom(x) {
        return x + 459.67;
      } };

    // Reaumur - convert between Reaumur and Kelvin.   Because of the way the
    // calling code in the Units class is set up (in the convertFrom method),
    // what is given here as the convertTo function is actually the convert
    // from method and vice versa.
    //this.fs['degre'] = {cnvTo   : function(x){return x + 273.15;},
    //                    cnvFrom : function(x){return x - 273.15;}};
    this.fs['degre'] = { cnvTo: function cnvTo(x) {
        return x - 273.15;
      },
      cnvFrom: function cnvFrom(x) {
        return x + 273.15;
      } };

    // pH - convert to pH from moles per liter and from moles per liter to pH
    // where a mole is an amount of a substance (a count of particles)
    this.fs['ph'] = { cnvTo: function cnvTo(x) {
        return -Math.log(x) / Math.LN10;
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(10, -x);
      } };

    // ln - natural logarithm (base e 2.71828) - apply (cnvTo) and invert (cnvFrom)
    // and 2ln - two times the natural logarithm
    this.fs['ln'] = { cnvTo: function cnvTo(x) {
        return Math.log(x);
      },
      cnvFrom: function cnvFrom(x) {
        return Math.exp(x);
      } };
    this.fs['2ln'] = { cnvTo: function cnvTo(x) {
        return 2 * Math.log(x);
      },
      cnvFrom: function cnvFrom(x) {
        return Math.exp(x / 2);
      } };

    // lg - the decadic logarithm (base 10)
    this.fs['lg'] = { cnvTo: function cnvTo(x) {
        return Math.log(x) / Math.LN10;
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(10, x);
      } };
    this.fs['10lg'] = { cnvTo: function cnvTo(x) {
        return 10 * Math.log(x) / Math.LN10;
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(10, x / 10);
      } };
    this.fs['20lg'] = { cnvTo: function cnvTo(x) {
        return 20 * Math.log(x) / Math.LN10;
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(10, x / 20);
      } };
    // The plain text ucum units file uses '2lg'
    this.fs['2lg'] = { cnvTo: function cnvTo(x) {
        return 2 * Math.log(x) / Math.LN10;
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(10, x / 2);
      } };
    // The xml essence ucum file uses lgTimes2
    this.fs['lgtimes2'] = this.fs['2lg'];

    // ld - dual logarithm (base 2)
    this.fs['ld'] = { cnvTo: function cnvTo(x) {
        return Math.log(x) / Math.LN2;
      },
      cnvFrom: function cnvFrom(x) {
        return Math.pow(2, x);
      } };

    // inv - inverse
    this.fs['inv'] = { cnvTo: function cnvTo(x) {
        return 1.0 / x;
      },
      cnvFrom: function cnvFrom(x) {
        return 1.0 / x;
      } };

    // Make this a singleton.  See UnitTables constructor for details.
    var holdThis = Functions.prototype;
    if (exports) exports.Functions = Functions;
    Functions = function Functions() {
      throw new Error('Functions is a Singleton. ' + 'Use Functions.getInstance() instead.');
    };
    Functions.prototype = holdThis;
    var self = this;
    Functions.getInstance = function () {
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


  _createClass(Functions, [{
    key: 'forName',
    value: function forName(fname) {
      fname = fname.toLowerCase();

      var f = this.fs[fname];
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
      return this.fs[fname] !== null;
    }
  }]);

  return Functions;
}(); // end of Functions class

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


Functions.getInstance = function () {
  return new Functions();
};
Functions.getInstance();

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startup = startup;
/**
 * This is the code entry point for the demo web page.  It coordinates the
 * loading of the prefix and unit objects from the json definitions file and
 * populating the autocompleter unit lists.
 */

var UcumLhcUtils = exports.UcumLhcUtils = require("./ucumLhcUtils.js").UcumLhcUtils;
var UnitTables = exports.UnitTables = require("./unitTables.js").UnitTables;

function startup() {
  var utils = UcumLhcUtils.getInstance();
  var utab = UnitTables.getInstance();
  var unames = utab.getUnitNamesList();
  var opts = { 'matchListValue': true };
  var autoFrom = new Def.Autocompleter.Prefetch('convertFrom', []); //, opts);
  var autoTo = new Def.Autocompleter.Prefetch('convertTo', []); //opts);
  var autoList = new Def.Autocompleter.Prefetch('unitsList', unames);
  utils.setAutocompleters(autoFrom, autoTo);
};

startup();


},{"./ucumLhcUtils.js":9,"./unitTables.js":13}],6:[function(require,module,exports){
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
     * The prefix code, e.g., k for kilo.  If we are in case-sensitive
     * mode (Ucum.caseSensitive_ is true), this should be the case-sensitive
     * code, and if we're not, it should be the case-insensitive code.  Since
     * there's no way to check to see if it's the right one (because although
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

},{"./config.js":2}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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
var jsonDefs_ = require('../../data/ucumDefs.json');

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

},{"../../data/ucumDefs.json":1,"./config.js":2,"./prefix.js":6,"./prefixTables.js":7,"./unit.js":11,"./unitTables.js":13,"fs":16,"jsonfile":26,"path":28,"util":47}],9:[function(require,module,exports){
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
var Fx = require('./functions.js');
var fs = require('fs');
var path = require('path');

//var utilsInstance = null;

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
   * This method validates a unit string.  It first checks to see if the
   * string passed in is a unit code that is found in the unit codes table.
   * If it is not found it parses the string to see if it resolves to a
   * valid unit string.
   *
   * @param uStr the string to be validated
   * @returns true for a valid string; false for an invalid string
   */


  _createClass(UcumLhcUtils, [{
    key: 'validUnitString',
    value: function validUnitString(uStr) {

      var retUnit = this.getSpecifiedUnit(uStr);
      return retUnit !== null;
    } // end validUnitString

    /**
     * This method converts one unit to another
     *
     * @param fromName the name of the unit to be converted
     * @param numVal the number of "from" units to be converted to "to" units
     * @param toName the name of the unit that the from field is to be converted to
     * @param decDigits the maximum number of decimal digits to be displayed
     *  for the converted unit.  If not specified, the UCUM.decDigits_ value
     *  (defined in config.js) is used.
     *
     * @returns a message indicating either the result of the conversion or an
     *  error message if an error occurred.
     */

  }, {
    key: 'convertUnitTo',
    value: function convertUnitTo(fromName, fromVal, toName, decDigits) {

      if (decDigits === undefined) decDigits = Ucum.decDigits_;

      var resultMsg = '';

      try {
        var fromUnit = null;
        fromUnit = this.getSpecifiedUnit(fromName);

        var toUnit = null;
        toUnit = this.getSpecifiedUnit(toName);

        if (fromUnit && toUnit) {
          try {
            var toVal = toUnit.convertFrom(fromVal, fromUnit);
            toVal = toVal.toFixed(decDigits).replace(/\.?0+$/, "");

            resultMsg = fromVal.toString() + " " + fromUnit.getProperty('name_') + " units = " + toVal.toString() + " " + toUnit.getProperty('name_') + " units.";
          } catch (err) {
            resultMsg = err.message;
          }
        } // end if we have the from and to units
      } catch (err) {
        resultMsg = err.message;
      }
      return resultMsg;
    } // end convertUnitTo

    /**
     * This method parses a unit string to get (or try to get) the unit
     * represented by the string.
     *
     * @param uName the string representing the unit
     * @returns the unit found for the string or null if not found
     * @throws a message if the unit is not found
     */

  }, {
    key: 'getSpecifiedUnit',
    value: function getSpecifiedUnit(uName) {

      uName = uName.trim();
      var utab = UnitTables.getInstance();
      var retMsg = '';

      // go ahead and just try using the name as the code.  This may or may not
      // work, but if it does, it cuts out a lot of parsing.
      var theUnit = utab.getUnitByCode(uName);

      // If we didn't find it, try parsing as a unit string
      if (!theUnit) {
        try {
          var uStrParser = new UnitString();
          theUnit = uStrParser.parseString(uName);
        } catch (err) {
          console.log('Unit requested for unit string ' + uName + '.' + 'request unsuccessful; error thrown = ' + err.message);
          if (retMsg !== '') retMsg += ' and ';
          retMsg += uName + ' is not a valid unit.';
        }
      }

      // if no error was thrown but no unit was found, create a not found message
      if ((theUnit === null || theUnit === undefined) && retMsg === '') {
        retMsg = 'Unable to find unit for name = ' + uName + '.';
      }
      if (retMsg !== '') throw new Error(retMsg);

      return theUnit;
    } // end getSpecifiedUnit

    /**
     * This method retrieves a list of unit commensurable, i.e., that can be
     * converted from and to, a specified unit.  Throws an error if the "from"
     * unit cannot be found or if no commensurable units are found.
     *
     * @param fromField the ID of the field where the "from" unit is specified
     * @param toField the ID of the field to receive the list of commensurable
     *  units
     * @param resultField the ID of the field to receive an error message if one
     *  is thrown
     * @returns nothing but sets the autocompleter list in the "toField" to the
     *   commensurable units if any were found
     *  @throws an error if the "from" unit is not found or if no commensurable
     *   units were found
     */

  }, {
    key: 'commensurablesList',
    value: function commensurablesList(fromName) {

      var fromUnit = this.getSpecifiedUnit(fromName);
      if (!fromUnit) {
        throw new Error('Could not find unit ' + fromName + '.');
      }

      var commUnits = null;
      var fromDim = fromUnit.getProperty('dim_');
      var dimVec = fromDim.getProperty('dimVec_');
      if (dimVec) {
        var utab = UnitTables.getInstance();
        commUnits = utab.getUnitsByDimension(dimVec);
      }
      return commUnits;
    } // end commensurablesList

    /**
     *  TODO: This provides a list of all unit codes.  The list is either case
     *  sensitive or case-insensitive, depending on the configuration
     *  setting in config.js
     */

  }, {
    key: 'allUnitCodes',
    value: function allUnitCodes() {}

    /**
     *  TODO: This provides a list of all unit names (descriptions).  The names
     *  are returned as an array of names.  For most units the array will
     *  contain one name, but because names are sometimes duplicated, not
     *  all of the arrays returned will contain just one entry.
     */

  }, {
    key: 'allUnitNames',
    value: function allUnitNames() {}

    /**
     * Creates a file containing a list of the units
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
      fs.writeFileSync('/home/lmericle/ucum/test/JsonUnitsList.txt', uList, { encoding: 'utf8', mode: 438, flag: 'w' });
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

},{"./config.js":2,"./functions.js":4,"./ucumJsonDefs.js":8,"./unit.js":11,"./unitString.js":12,"./unitTables.js":13,"fs":16,"path":28}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

//var xmldoc = require('../node_modules/xmldoc/lib/xmldoc.js');
var xmldoc = require('xmldoc');
var fs = require('fs');
var path = require('path');

var essenceFile_ = '/proj/defExtra/ucum/ucum-essence.xml';

/**
 * The full xml document
 * @type XmlDocument
 */
var xmlInput_ = null;

var UcumXmlDocument = exports.UcumXmlDocument = function () {

  /**
   * Constructor.  This reads the XML document (essenceFile_) into the
   * xmldoc object, which is an object used by the xmldoc class available
   * from GitHub - https://github.com/nfarina/xmldoc.  The object provides
   * methods to read the file and access its contents.
   *
   */

  function UcumXmlDocument() {
    _classCallCheck(this, UcumXmlDocument);

    // read the XML file and create an xmlDocument object from it.
    var data = fs.readFileSync(essenceFile_);
    xmlInput_ = new xmldoc.XmlDocument(data);
  }

  /**
   * This method controls parsing of the XML into objects used by this
   * program.  It uses separate methods to parse the prefixes, the
   * base units, and the units.
   *
   * @returns nothing
   */


  _createClass(UcumXmlDocument, [{
    key: "parseXml",
    value: function parseXml() {

      this.parsePrefixes(xmlInput_.childrenNamed("prefix"));
      this.parseBaseUnits(xmlInput_.childrenNamed("base-unit"));
      this.parseUnitStrings(xmlInput_.childrenNamed("unit"));

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

  }, {
    key: "parsePrefixes",
    value: function parsePrefixes(prefixes) {

      var plen = prefixes.length;

      for (var p = 0; p < plen; p++) {
        var curPfx = prefixes[p];
        var attrs = {};

        // use the version (case sensitive or case insensitive) of the
        // prefix code as indicated by the caseSensitive_ flag in the
        // configuration file
        if (Ucum.Ucum.caseSensitive_) attrs["code_"] = curPfx.attr.Code;else attrs["code_"] = curPfx.attr.CODE;

        attrs["name_"] = curPfx.childNamed('name').val;

        // Set the prefix value.  If there is a <sup> element in the
        // value node, then this is a base 10 based prefix (10 to the x power).
        // Set the value to 10 taken to the indicated power.
        // Otherwise this is not 10 based and the value contains the
        // actual value for the prefix.
        var pValNode = curPfx.childNamed('value');
        attrs["value_"] = null;
        attrs["exp_"] = pValNode.childNamed('sup');
        if (attrs["exp_"] != null) {
          attrs["exp_"] = attrs["exp_"].val;
          attrs["value_"] = Math.pow(10, attrs["exp_"]);
        } else {
          attrs["value_"] = pValNode.val;
          attrs["exp_"] = null;
        }

        // Make sure the prefix has not already been created.  If it hasn't,
        // create the prefix object and then add it to the prefix tables.
        var ptab = PfxT.PrefixTables.getInstance();
        if (ptab.isDefined(attrs["code_"])) {
          throw new Error('Prefix constructor called for prefix already ' + ("defined; code = " + attrs["code_"]));
        } else {
          var newPref = new Pfx.Prefix(attrs);
          ptab.add(newPref);
        }
      }
    } // end parsePrefixes

    /**
     * Creates base unit objects from the xml nodes passed in and adds
     * them to the unit tables.
     *
     * @params unitNodes the array of base unit nodes from the xml file, in the
     *  order in which the nodes are defined in that file.  (Order is important
     *  for all units).
     *
     * @returns nothing
     */

  }, {
    key: "parseBaseUnits",
    value: function parseBaseUnits(unitNodes) {
      var blen = unitNodes.length;
      var utab = Utab.UnitTables.getInstance();
      for (var b = 0; b < blen; b++) {
        var curBUnit = unitNodes[b];
        var attrs = {};
        attrs['isBase_'] = true;
        attrs['name_'] = curBUnit.childNamed('name').val;
        attrs['csCode_'] = curBUnit.attr.Code;
        attrs['ciCode_'] = curBUnit.attr.CODE;
        attrs['property_'] = curBUnit.childNamed('property').val;
        attrs['variable_'] = curBUnit.attr.dim;
        attrs['printSymbol_'] = curBUnit.childNamed('printSymbol').val;
        attrs['dim_'] = b;
        var newUnit = new Un.Unit(attrs);
        utab.addUnit(newUnit);
      }
    } // end parseBaseUnits

    /**
     * Creates non-base unit objects from the xml nodes passed in and adds
     * them to the unit tables.
     *
     * @params unitStrings the array of non-base unit nodes from the xml file, in the
     *  order in which the nodes are defined in that file.  (Order is important
     *  for all units).
     *
     * @returns nothing
     */

  }, {
    key: "parseUnitStrings",
    value: function parseUnitStrings(unitStrings) {

      var utab = Utab.UnitTables.getInstance();
      var uStrParser = new Us.UnitString();
      var alen = unitStrings.length;
      for (var a = 0; a < alen; a++) {
        var haveUnit = true;
        var curUA = unitAtoms[a];
        var attrs = {};
        attrs['isBase_'] = false;
        attrs['name_'] = curUA.childNamed('name').val;
        attrs['csCode_'] = curUA.attr.Code;
        attrs['ciCode_'] = curUA.attr.CODE;
        attrs['property_'] = curUA.childNamed('property').val;
        if (curUA.childNamed('printSymbol')) {
          var sym = curUA.childNamed('printSymbol');
          var symVal = sym.val;
          symVal = symVal.replace(/\n/g, "");
          symVal = symVal.trim();
          var symI = sym.childNamed('i');
          if (symI)
            //symVal = '<i>' + symI.val + '</>';
            symVal = symI.toString({ compressed: true });
          var sub = sym.childNamed('sub');
          var sup = sym.childNamed('sup');
          if (sub) symVal += sub.toString({ compressed: true });
          if (sup) symVal += sup.toString({ compressed: true });

          attrs['printSymbol_'] = symVal;
        }
        if (curUA.attr.isMetric === "yes") attrs['isMetric_'] = true;else attrs['isMetric_'] = false;
        if (curUA.attr.isArbitrary) attrs['isArbitrary_'] = true;else attrs['isArbitrary_'] = false;
        if (curUA.attr.class) {
          attrs['class_'] = curUA.attr.class;
        }
        var valNode = curUA.childNamed('value');

        // Process special units
        var parseUnitString = true;
        if (curUA.attr.isSpecial) {
          attrs['isSpecial_'] = curUA.attr.isSpecial === "yes";
          var funcNode = valNode.childNamed('function');
          attrs['cnv_'] = funcNode.attr.name;
          attrs['csUnitString_'] = funcNode.attr.Unit;
          if (attrs['csUnitString_'] === '1') {
            attrs['baseFactor_'] = 1;
            parseUnitString = false;
          } else if (attrs['csCode_'] === '[pH]') {
            attrs['baseFactor_'] = funcNode.attr.value;
          } else {
            var slashPos = attrs['csUnitString_'].indexOf('/');
            var ar = [];

            // unit string = K/9 or K/4 or m2/s4/Hz
            if (slashPos >= 0) {
              ar = attrs['csUnitString_'].split('/');
            }
            // unit string = K/9 or K/4
            if (slashPos >= 0 && ar.length === 2) {
              attrs['csUnitString_'] = ar[0];
              attrs['baseFactor_'] = parseFloat(funcNode.attr.value / ar[1]);
            }
            // unit string = 10*-5.Pa
            else if (attrs['csCode_'] === 'B[SPL]') {
                attrs['baseFactor_'] = Math.pow(10, -5) * 2;
                attrs['csUnitString_'] = "Pa";
              }
              // unit string = m1/s4/Hz, K, deg, V, mV, uV, nV, W, kW
              else {
                  attrs['baseFactor_'] = funcNode.attr.value;
                }
          } // end if the unit string is not 1
        } // end if the unit is special

        else {
            // what I'm calling the unit string is the string that defines the
            // unit based on other units, e.g., rad2 (radian squared) to define
            // a steradian unit.  It's not necessarily a proper base unit, although
            // it ultimately builds on base units.
            attrs['csUnitString_'] = valNode.attr.Unit;
            attrs['ciUnitString_'] = valNode.attr.UNIT;

            // what I'm calling the factor here (string and number versions)
            // is the magnitude used in conjunction with the unit string to define
            // the new unit, e.g., 3 for a yard that is based in the definition
            // of feet.

            attrs['baseFactorStr_'] = valNode.attr.value;
            if (attrs['csCode_'] === '[pi]') attrs['baseFactor_'] = parseFloat(attrs['baseFactorStr_']);else if (valNode.childNamed('sup')) {
              attrs['baseFactor_'] = parseFloat(valNode.attr.value);
            } else {
              attrs['baseFactor_'] = valNode.val;
            }
          } // end if this is not a special unit

        // Arbitrary units are defined in the UCUM spec as "not of any
        // specific dimension and are not commesurable with any other
        // unit" (3.2.24).  All arbitrary units in the units definition
        // XML file currently have a unit string of 1 and a base factor of 1
        // except the "international unit" with a code of [IU].  Its
        // unit string is the "international unit" with a code of [iU],
        // which is also an arbitrary unit - with a unit string of 1.
        // So I am assuming [IU] is just another code for the same unit.
        if (attrs['isArbitrary_'] === true) {
          attrs['magnitude_'] = 1;
          attrs['dim_'] = null;
        }

        // units with class = "dimless" don't have dimension arrays.
        // They're things like the number pi or the number 10 or percent.
        // Haven't figured out how to handle them yet.
        else if (attrs['class_'] === 'dimless' || attrs['csCode_'] === 'mol') {
            attrs['dim_'] = null;
            // figure the magnitude based on the unit string
            // if it's 1, the magnitude is the value specified for
            // the base factor, e.g., 3.141592653589793238462 ... for pi
            if (attrs['csUnitString_'] === '1') {
              attrs['magnitude_'] = attrs['baseFactor_'];
            }
            // else if the unit string starts with 10*, the magnitude is
            // 10 to the power specified following 10* e.g., unit = 10*-2
            // for the "%" unit.  Except for the mole, which is that
            // multiplied by the base factor, which in this case (only,
            // I think) is not 1.
            else if (attrs['csUnitString_'].substr(0, 3) == "10*") {
                var exp = parseInt(attrs['csUnitString_'].substr(3));
                attrs['magnitude_'] = Math.pow(10, exp);
                if (attrs['baseFactor_'] !== '1') {
                  attrs['magnitude_'] *= attrs['baseFactor_'];
                }
              }
              // else I don't know what it is.
              else {
                  attrs['defError_'] = true;
                  console.log('unexpected dimless unit definition, unit code ' + 'is ' + attrs['csCode_']);
                }
          } // end if this is a unit with class = dimless

          // Handle carat of gold alloys - which doesn't get a dimension
          //
          else if (attrs['csCode_'] === "[car_Au]") {
              attrs['magnitude_'] = 1 / 24;
            } else {

              // Make sure there's a unit string to base the new unit on.  There
              // should be, but I'm just checking here to make sure.  And omit
              // ones with a unit string of 1.  That won't do us any good.
              if (attrs['csUnitString_'] && attrs['csUnitString_'] !== '1' && attrs['csUnitString_'] !== 1) {

                haveUnit = false;
                // Handle some special cases
                // 1. the Oersted unit, whose string is /[pi].A/m and whose
                //    value is 250.  Set the baseFactor to 250/[pi] and
                //    the unit string to A/m
                if (attrs['csCode_'] === 'Oe') {
                  attrs['baseFactor_'] = 250 / Math.PI;
                  attrs['csUnitString_'] = "A/m";
                }
                // 2.  Strings that start with '/'.  Set the function to
                //     the inverse function and trim the '/' off the front
                //     of the string.
                else if (attrs['csUnitString_'][0] === '/') {
                    attrs['cnv_'] = 'inv';
                    attrs['csUnitString_'] = attrs['csUnitString_'].substr(1);
                  }
                  // 3.  the Svedberg unit, whose string is 10*-13.s.  Set the
                  //     base factor to 10*-13 and the unit string to s.
                  else if (attrs['csCode_'] === '[S]') {
                      attrs['baseFactor_'] = Math.pow(10, -13);
                      attrs['csUnitString_'] = 's';
                    }
                    // 4.  permeability of vaccuum - code [mu_0], unit given is
                    //     4.[pi].10*-7.N/A2
                    else if (attrs['csCode_'] === '[mu_0]') {
                        attrs['baseFactor_'] = 4 * Math.PI * Math.pow(10, -7);
                        attrs['csUnitString_'] = 'N/A2';
                      }
                // The unit string parser will use the unit(s) named in the
                // string to create a new unit with the appropriate dimension
                // object and magnitude before it's multiplied by the one
                // specified in the input node.
                try {
                  var ret = uStrParser.parseString(attrs['csUnitString_']);

                  // Get the dimension object and magnitude (and adjust by
                  // specified magnitude factor) from the unit created and
                  // assign them to the attributes we'll use to create the
                  // unit for this listing.
                  if (ret) {
                    attrs['dim_'] = ret.getProperty('dim_');
                    var newMag = ret.getProperty('magnitude_');
                    newMag *= attrs['baseFactor_'];
                    attrs['magnitude_'] = newMag;
                    haveUnit = true;
                  }
                  // if there's no unit string, report an error
                  else {
                      attrs['defError_'] = true;
                      console.log('unit definition error; code = ' + attrs['csCode_']);
                      attrs['dim_'] = null;
                      attrs['magnitude_'] = null;
                    }
                } catch (err) {
                  console.log('error thrown from unit parsing code for unit name ' + attrs['name_'] + '\n' + err.message);
                }
              } // end if there is a unit string to parse
            } // end if this is not a dimless unit

        if (haveUnit) {
          // Now create the unit we want based on the attributes we've
          // accumulated from the xml input and from figuring the dimension
          // and magnitude.  Add it to the unit tables
          var newUnit = new Un.Unit(attrs);
          utab.addUnit(newUnit);

          // for now, create a list of the units created and save it to a file
          // for debugging.  This is a temporary file.
          var uList = utab.printUnits();
          fs.writeFileSync('UnitsList.txt', uList, { encoding: 'utf8', mode: 438, flag: 'w' });
        } // end if have a parsed unit
      } // end for a => - to alen
    } // end parseUnitStrings

    /**
     * Get an array containing all prefix objects and returns it in a hash
     * with the key being "prefixes" and the value being the array.
     *
     * @returns hash object
     */

  }, {
    key: "writeJsonFile",
    value: function writeJsonFile() {

      var pfxTabs = PfxT.PrefixTables.getInstance();
      var pfxArray = pfxTabs.allPrefixesByCode();
      var uTabs = Utab.UnitTables.getInstance();
      var uArray = uTabs.allUnitsByDef();

      var defsHash = { 'prefixes': pfxArray,
        'units': uArray };

      jsonfile.writeFileSync('../dist/data/ucumDefs.json', defsHash, { encoding: 'utf8', mode: 420, flag: 'w' });
    } // end writeJsonFile

  }]);

  return UcumXmlDocument;
}(); // end UcumXmlDocument

},{"./config.js":2,"./prefix.js":6,"./prefixTables.js":7,"./unit.js":11,"./unitString.js":12,"./unitTables.js":13,"fs":16,"jsonfile":26,"path":28,"xmldoc":48}],11:[function(require,module,exports){
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
var Ucum = require('./config.js');
var Dim = require('./dimension.js');
var Us = require("./unitString.js");
var Fx = require("./functions.js");
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
            this.dim_ = new Dim.Dimension(attrs['dim_']);
          } else if (attrs['dim_'] instanceof Dim.Dimension) {
            this.dim_ = attrs['dim_'];
          } else if (isInteger(attrs['dim_'])) {
            this.dim_ = new Dim.Dimension(attrs['dim_']);
          } else {
            if (attrs['dim_'].dimVec_) {
              this.dim_ = new Dim.Dimension(attrs['dim_'].dimVec_);
            } else this.dim_ = new Dim.Dimension(attrs['dim_']);
          }
        } else {
          this.dim_ = new Dim.Dimension(null);
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
          retUnit['dim_'] = new Dim.Dimension(_this.dim_.dimVec_);
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
            _this2['dim_'] = new Dim.Dimension(_this2.dim_.dimVec_);
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
     * @throws an error if the dimension of the fromUnit differs from this unit's dimension
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
          var funcs = Fx.Functions.getInstance();
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
          var uString = new Us.UnitString();
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
      if (unit2.cnv_ != null) throw new Error('Attempt to divide non-ratio unit ' + unit2.name_);

      var uString = new Us.UnitString();
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

},{"./config.js":2,"./dimension.js":3,"./functions.js":4,"./unitString.js":12,"is-integer":25}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class handles the parsing of a unit string into a unit object
 */
var UnitTables = require('./unitTables.js').UnitTables;
var PrefixTables = require('./prefixTables.js').PrefixTables;

var UnitString = exports.UnitString = function () {

  /**
   * Constructor
   */

  function UnitString() {
    _classCallCheck(this, UnitString);
  }
  // nothing really to do here.


  /**
   * Parses a unit string, returns a unit
   *
   * @params uStr the string defining the unit
   * @returns a unit object, or null if there were problems creating the unit
   * @throws an error if the unit string contains parentheses (not handled yet);
   *  an error if at least one valid unit could not be derived from the string;
   *  an error if a non-unit & non-number was parsed as an individual element
   *    from the string (shouldn't happen, but this is a safeguard);
   *  any errors thrown by called methods (see makeUnit,
   *    unit object division, multiplication, and getProperty).
   */


  _createClass(UnitString, [{
    key: 'parseString',
    value: function parseString(uStr) {
      var finalUnit = null;

      // Check for parentheses in unit strings. We assume there aren't any,
      // so if some turn up we need to know so they can be parsed.  For now,
      // block further processing of strings with parentheses.
      //let pArray = uStr.split('(') ;
      //if (pArray.length > 1) {
      //  throw (new Error(`Unit string (${uStr}) contains parentheses, which ` +
      //         'are not handled yet by this package.  Sorry'));
      //}

      var uArray = [];
      var uPos = 0;
      // Break string into parenthetical groups - if any
      var pgArray = uStr.match(/([^\(]*)\(([^)]+)\)([^\(]*)/g);

      var parensUnits = [];
      var pu = 0;
      // If something was written to pArray, it will be the chunks of the
      // string that contain parenthetical groups.  (If no parentheses are
      // found, the return from match is null).
      if (pgArray) {
        for (var p = 0; p < pgArray.length; p++) {
          // Split the group into its parts
          var theGroup = pgArray[0].match(/([^\(]*)\(([^)]+)\)([^\(]*)/);
          if (theGroup.length === 4) {
            // there should be 4 elements in theGroup:
            // [0] should be the full group text
            // [1] should be the text preceding the parentheses, if any
            if (theGroup[1] != "") {
              uArray[uPos++] = theGroup[1];
            }
            // [2] should be the text within the parentheses .  This needs to
            // be passed to this method to be parsed.  Return will be a unit
            // that we'll put in the parensUnits array and store the index to
            // it in the uArrau.
            uArray[uPos++] = '#' + pu.toString();
            parensUnits[pu++] = this.parseString(theGroup[2]);

            // [3] should be the text after the parentheses, if any
            if (theGroup[3] !== "") {
              uArray[uPos++] = theGroup[3];
            }
          } // end if we have the right number of elements
        } // end do for each element
        // join the elements o uArray aso we have a string again.  We need
        // a string to do the next step, which is to split stuff out based on
        // the operators - done in makeUnitsArray
        uStr = uArray.join('');
      }

      // Call makeUnitsArray to convert the string to an array of unit
      // descriptors with operators.
      uArray = this.makeUnitsArray(uStr);

      // create a unit object out of each un element
      var uLen = uArray.length;
      for (var u1 = 0; u1 < uLen; u1++) {
        var curCode = uArray[u1]['un'];
        if (curCode[0] === '#') {
          var uIdx = curCode.substr(1);
          uArray[u1]['un'] = parensUnits[uIdx];
        } else {
          var curCodeNum = Number(curCode);
          // if the current unit string is NOT a number, call makeUnit to create
          // the unit object for it
          if (isNaN(curCodeNum)) {
            uArray[u1]['un'] = this.makeUnit(curCode);
          }
          // Otherwise write the numeric version of the number back to
          // the uArray 'un' element
          else {
              uArray[u1]['un'] = curCodeNum;
            }
        }
      }

      // Process the units (and numbers) to create one final unit object
      if (uArray[0] == null || uArray == "'" || uArray[0]['un'] === undefined || uArray[0]['un'] == null) {
        // not sure what this might be, but this is a safeguard
        throw new Error('Unit string (' + uStr + ') did not contain anything that ' + 'could be used to create a unit, or else something that is not ' + 'handled yet by this package.  Sorry');
      }

      finalUnit = uArray[0]['un'];

      // Perform the arithmetic for the units, starting with the first 2.
      // We only need to do the arithmetic if we have more than one unit
      for (var u2 = 1; u2 < uLen; u2++) {
        var nextUnit = uArray[u2]['un'];
        if (typeof nextUnit !== 'number' && !nextUnit.getProperty) {
          throw new Error('Unit string (' + uStr + ') contains unrecognized ' + ('element (' + nextUnit.toString() + '); could not parse full ') + 'string.  Sorry');
        }

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
                var _theName2 = finalUnit.toString() + thisOp + nextUnit.toString();
                // well great - now what?  I don't have anywhere to put this.
                // TODO: figure out where the heck to put this.
                throw new Error('Unit string (' + uStr + ') contains 2 adjoining ' + 'elements that are numbers.  At least one must be a unit.');
              }
          } // end if nextUnit is a number
      } // end do for each unit after the first one

      return finalUnit;
    } // end parseString

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
      // alphanumeric description of the unit (e.g., Hz for hertz) including
      // a possible prefix and exponent.   The operator is the operator to be
      // applied to that unit and the one preceding it.  So, a.b would give
      // us two objects.  The first will have a unit of a, and a blank operator
      // (because it's the first unit).  The second would have a unit of b
      // and the multiplication operator (.).
      var u1 = uArray1.length;
      var uArray = [{ un: uArray1[0], op: "" }];
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
     * @returns a unit object, or null if problems creating the unit
     */

  }, {
    key: 'makeUnit',
    value: function makeUnit(uCode) {
      var exp = null;
      var pfxVal = null;
      var pfxCode = null;
      var pfxExp = null;
      var pfxName = null;
      var ulen = uCode.length;
      var origUnit = null;
      var retUnit = null;

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

        // Try for a single character prefix first and then
        // try for a 2-character prefix if a single character prefix is not found.
        var pfxTabs = PrefixTables.getInstance();
        pfxCode = uCode.charAt(0);
        var pfxObj = pfxTabs.getPrefixByCode(pfxCode);
        if (!pfxObj && uCode.length > 2) {
          pfxCode = uCode.substr(0, 2);
          pfxObj = pfxTabs.getPrefixByCode(pfxCode);
        }

        // if we got a prefix, get its info and remove it from the unit code
        if (pfxObj) {
          pfxVal = pfxObj.getValue();
          pfxExp = pfxObj.getExp();
          pfxName = pfxObj.getName();
          var pCodeLen = pfxCode.length;
          uCode = uCode.substr(pCodeLen);
          ulen -= pCodeLen;

          // now try one more time for the unit
          origUnit = utabs.getUnitByCode(uCode);
        } // end if we found a prefix
      } // end if we didn't get a unit after removing an exponent

      // now, if we found a unit object, clone it and then apply the prefix
      // and exponent, if any, to it.

      if (origUnit) {
        // clone the unit we just got and then apply any exponent and/or prefix
        // to it
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
      } // end if we found a unit object
      return retUnit;
    } // ret makeUnit

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
    }
  }]);

  return UnitString;
}(); // end class UnitString

},{"./prefixTables.js":7,"./unitTables.js":13}],13:[function(require,module,exports){
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
     * Tracks units by code using case-sensitive or case-insensitive -
     * whichever we're currently using.  See Ucum.caseSensitive_ in
     * config.js
     *
     * @type hash - key is the code;
     *              value is the reference to the Unit object.  Codes must
     *              be unique.
     */
    this.unitCodes_ = {};

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
     * Adds a Unit object to the unitCodes_ table and to the codeOrder_ table.
     *
     * @param theUnit the unit to be added
     * @returns nothing
     * @throws an error if the table already contains a unit with the code,
     *         or if the unit has no code of the type currently in use (case
     *         sensitive or insensitive)
     */

  }, {
    key: 'addUnitCode',
    value: function addUnitCode(theUnit) {

      var uCode = null;
      if (Ucum.caseSensitive_ == true) uCode = theUnit['csCode_'];else uCode = theUnit['ciCode_'];

      if (uCode) {
        if (this.unitCodes_[uCode]) throw new Error('UnitTables.addUnitCode called, already contains entry for ' + ('unit with code = ' + uCode));else {
          this.unitCodes_[uCode] = theUnit;
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
     *  lowerCase version of the code
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
          retUnit = this.unitCodes_[uCode.toLowerCase()];
          if (retUnit === undefined) {
            retUnit = null;
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
     *  unit has the same name, append the csCode of the unit you want to
     *  the end of the name, enclosed in parentheses, e.g., inch ([in_i]) vs.
     *  inch ([in_us]).
     *  @returns null if no unit was found for the specified name OR an array of
     *  unit objects with the specified name.  Normally this will be an array
     *  of one object.
     *  @throws an error if no name is provided to search on
     *  logs an error to the console if no unit is found
     */

  }, {
    key: 'getUnitByName',
    value: function getUnitByName(uName) {

      var retUnit = null;
      if (uName === null || uName === undefined) {
        throw new Error('Unable to find unit by because when no name was provided.');
      }
      var sepPos = uName.indexOf(Ucum.codeSep_);
      var uCode = null;
      if (sepPos >= 1) {
        uCode = uName.substr(0, sepPos);
        uName = uName.substr(sepPos + Ucum.codeSep_.length);
      }
      var unitsArray = this.unitNames_[uName];
      if (unitsArray === undefined || unitsArray === null) {
        console.log('Unable to find unit with name = ' + uName);
      } else {
        var uLen = unitsArray.length;
        if (uLen === 1) retUnit = unitsArray[0];else if (uCode === null) {
          retUnit = unitsArray;
        } else {
          var i = 0;
          for (; unitsArray[i].csCode_ !== uCode && i < uLen; i++) {}
          if (i < uLen) retUnit = unitsArray[i];else console.log('Unable to find unit with name = ' + uName + ' amd ' + ('unit code = ' + uCode));
        }
      }
      return retUnit;
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

},{"./config.js":2}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){

},{}],16:[function(require,module,exports){
arguments[4][15][0].apply(exports,arguments)
},{"dup":15}],17:[function(require,module,exports){
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
},{"base64-js":14,"ieee754":21,"isarray":18}],18:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],19:[function(require,module,exports){
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
},{"../../is-buffer/index.js":23}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
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

},{}],23:[function(require,module,exports){
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

},{}],24:[function(require,module,exports){
'use strict';
var numberIsNan = require('number-is-nan');

module.exports = Number.isFinite || function (val) {
	return !(typeof val !== 'number' || numberIsNan(val) || val === Infinity || val === -Infinity);
};

},{"number-is-nan":27}],25:[function(require,module,exports){
// https://github.com/paulmillr/es6-shim
// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isinteger
var isFinite = require("is-finite");
module.exports = Number.isInteger || function(val) {
  return typeof val === "number" &&
    isFinite(val) &&
    Math.floor(val) === val;
};

},{"is-finite":24}],26:[function(require,module,exports){
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

},{"fs":16}],27:[function(require,module,exports){
'use strict';
module.exports = Number.isNaN || function (x) {
	return x !== x;
};

},{}],28:[function(require,module,exports){
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
},{"_process":30}],29:[function(require,module,exports){
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
},{"_process":30}],30:[function(require,module,exports){
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

},{}],31:[function(require,module,exports){
module.exports = require("./lib/_stream_duplex.js")

},{"./lib/_stream_duplex.js":32}],32:[function(require,module,exports){
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
},{"./_stream_readable":34,"./_stream_writable":36,"core-util-is":19,"inherits":22,"process-nextick-args":29}],33:[function(require,module,exports){
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
},{"./_stream_transform":35,"core-util-is":19,"inherits":22}],34:[function(require,module,exports){
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
},{"./_stream_duplex":32,"_process":30,"buffer":17,"core-util-is":19,"events":20,"inherits":22,"isarray":37,"process-nextick-args":29,"string_decoder/":44,"util":15}],35:[function(require,module,exports){
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
},{"./_stream_duplex":32,"core-util-is":19,"inherits":22}],36:[function(require,module,exports){
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
},{"./_stream_duplex":32,"_process":30,"buffer":17,"core-util-is":19,"events":20,"inherits":22,"process-nextick-args":29,"util-deprecate":45}],37:[function(require,module,exports){
arguments[4][18][0].apply(exports,arguments)
},{"dup":18}],38:[function(require,module,exports){
module.exports = require("./lib/_stream_passthrough.js")

},{"./lib/_stream_passthrough.js":33}],39:[function(require,module,exports){
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

},{"./lib/_stream_duplex.js":32,"./lib/_stream_passthrough.js":33,"./lib/_stream_readable.js":34,"./lib/_stream_transform.js":35,"./lib/_stream_writable.js":36}],40:[function(require,module,exports){
module.exports = require("./lib/_stream_transform.js")

},{"./lib/_stream_transform.js":35}],41:[function(require,module,exports){
module.exports = require("./lib/_stream_writable.js")

},{"./lib/_stream_writable.js":36}],42:[function(require,module,exports){
(function (Buffer){
;(function (sax) { // wrapper for non-node envs
  sax.parser = function (strict, opt) { return new SAXParser(strict, opt) }
  sax.SAXParser = SAXParser
  sax.SAXStream = SAXStream
  sax.createStream = createStream

  // When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.
  // When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),
  // since that's the earliest that a buffer overrun could occur.  This way, checks are
  // as rare as required, but as often as necessary to ensure never crossing this bound.
  // Furthermore, buffers are only tested at most once per write(), so passing a very
  // large string into write() might have undesirable effects, but this is manageable by
  // the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme
  // edge case, result in creating at most one complete copy of the string passed in.
  // Set to Infinity to have unlimited buffers.
  sax.MAX_BUFFER_LENGTH = 64 * 1024

  var buffers = [
    'comment', 'sgmlDecl', 'textNode', 'tagName', 'doctype',
    'procInstName', 'procInstBody', 'entity', 'attribName',
    'attribValue', 'cdata', 'script'
  ]

  sax.EVENTS = [
    'text',
    'processinginstruction',
    'sgmldeclaration',
    'doctype',
    'comment',
    'attribute',
    'opentag',
    'closetag',
    'opencdata',
    'cdata',
    'closecdata',
    'error',
    'end',
    'ready',
    'script',
    'opennamespace',
    'closenamespace'
  ]

  function SAXParser (strict, opt) {
    if (!(this instanceof SAXParser)) {
      return new SAXParser(strict, opt)
    }

    var parser = this
    clearBuffers(parser)
    parser.q = parser.c = ''
    parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH
    parser.opt = opt || {}
    parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags
    parser.looseCase = parser.opt.lowercase ? 'toLowerCase' : 'toUpperCase'
    parser.tags = []
    parser.closed = parser.closedRoot = parser.sawRoot = false
    parser.tag = parser.error = null
    parser.strict = !!strict
    parser.noscript = !!(strict || parser.opt.noscript)
    parser.state = S.BEGIN
    parser.strictEntities = parser.opt.strictEntities
    parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES)
    parser.attribList = []

    // namespaces form a prototype chain.
    // it always points at the current tag,
    // which protos to its parent tag.
    if (parser.opt.xmlns) {
      parser.ns = Object.create(rootNS)
    }

    // mostly just for error reporting
    parser.trackPosition = parser.opt.position !== false
    if (parser.trackPosition) {
      parser.position = parser.line = parser.column = 0
    }
    emit(parser, 'onready')
  }

  if (!Object.create) {
    Object.create = function (o) {
      function F () {}
      F.prototype = o
      var newf = new F()
      return newf
    }
  }

  if (!Object.keys) {
    Object.keys = function (o) {
      var a = []
      for (var i in o) if (o.hasOwnProperty(i)) a.push(i)
      return a
    }
  }

  function checkBufferLength (parser) {
    var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10)
    var maxActual = 0
    for (var i = 0, l = buffers.length; i < l; i++) {
      var len = parser[buffers[i]].length
      if (len > maxAllowed) {
        // Text/cdata nodes can get big, and since they're buffered,
        // we can get here under normal conditions.
        // Avoid issues by emitting the text node now,
        // so at least it won't get any bigger.
        switch (buffers[i]) {
          case 'textNode':
            closeText(parser)
            break

          case 'cdata':
            emitNode(parser, 'oncdata', parser.cdata)
            parser.cdata = ''
            break

          case 'script':
            emitNode(parser, 'onscript', parser.script)
            parser.script = ''
            break

          default:
            error(parser, 'Max buffer length exceeded: ' + buffers[i])
        }
      }
      maxActual = Math.max(maxActual, len)
    }
    // schedule the next check for the earliest possible buffer overrun.
    var m = sax.MAX_BUFFER_LENGTH - maxActual
    parser.bufferCheckPosition = m + parser.position
  }

  function clearBuffers (parser) {
    for (var i = 0, l = buffers.length; i < l; i++) {
      parser[buffers[i]] = ''
    }
  }

  function flushBuffers (parser) {
    closeText(parser)
    if (parser.cdata !== '') {
      emitNode(parser, 'oncdata', parser.cdata)
      parser.cdata = ''
    }
    if (parser.script !== '') {
      emitNode(parser, 'onscript', parser.script)
      parser.script = ''
    }
  }

  SAXParser.prototype = {
    end: function () { end(this) },
    write: write,
    resume: function () { this.error = null; return this },
    close: function () { return this.write(null) },
    flush: function () { flushBuffers(this) }
  }

  var Stream
  try {
    Stream = require('stream').Stream
  } catch (ex) {
    Stream = function () {}
  }

  var streamWraps = sax.EVENTS.filter(function (ev) {
    return ev !== 'error' && ev !== 'end'
  })

  function createStream (strict, opt) {
    return new SAXStream(strict, opt)
  }

  function SAXStream (strict, opt) {
    if (!(this instanceof SAXStream)) {
      return new SAXStream(strict, opt)
    }

    Stream.apply(this)

    this._parser = new SAXParser(strict, opt)
    this.writable = true
    this.readable = true

    var me = this

    this._parser.onend = function () {
      me.emit('end')
    }

    this._parser.onerror = function (er) {
      me.emit('error', er)

      // if didn't throw, then means error was handled.
      // go ahead and clear error, so we can write again.
      me._parser.error = null
    }

    this._decoder = null

    streamWraps.forEach(function (ev) {
      Object.defineProperty(me, 'on' + ev, {
        get: function () {
          return me._parser['on' + ev]
        },
        set: function (h) {
          if (!h) {
            me.removeAllListeners(ev)
            me._parser['on' + ev] = h
            return h
          }
          me.on(ev, h)
        },
        enumerable: true,
        configurable: false
      })
    })
  }

  SAXStream.prototype = Object.create(Stream.prototype, {
    constructor: {
      value: SAXStream
    }
  })

  SAXStream.prototype.write = function (data) {
    if (typeof Buffer === 'function' &&
      typeof Buffer.isBuffer === 'function' &&
      Buffer.isBuffer(data)) {
      if (!this._decoder) {
        var SD = require('string_decoder').StringDecoder
        this._decoder = new SD('utf8')
      }
      data = this._decoder.write(data)
    }

    this._parser.write(data.toString())
    this.emit('data', data)
    return true
  }

  SAXStream.prototype.end = function (chunk) {
    if (chunk && chunk.length) {
      this.write(chunk)
    }
    this._parser.end()
    return true
  }

  SAXStream.prototype.on = function (ev, handler) {
    var me = this
    if (!me._parser['on' + ev] && streamWraps.indexOf(ev) !== -1) {
      me._parser['on' + ev] = function () {
        var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments)
        args.splice(0, 0, ev)
        me.emit.apply(me, args)
      }
    }

    return Stream.prototype.on.call(me, ev, handler)
  }

  // character classes and tokens
  var whitespace = '\r\n\t '

  // this really needs to be replaced with character classes.
  // XML allows all manner of ridiculous numbers and digits.
  var number = '0124356789'
  var letter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

  // (Letter | "_" | ":")
  var quote = '\'"'
  var attribEnd = whitespace + '>'
  var CDATA = '[CDATA['
  var DOCTYPE = 'DOCTYPE'
  var XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace'
  var XMLNS_NAMESPACE = 'http://www.w3.org/2000/xmlns/'
  var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE }

  // turn all the string character sets into character class objects.
  whitespace = charClass(whitespace)
  number = charClass(number)
  letter = charClass(letter)

  // http://www.w3.org/TR/REC-xml/#NT-NameStartChar
  // This implementation works on strings, a single character at a time
  // as such, it cannot ever support astral-plane characters (10000-EFFFF)
  // without a significant breaking change to either this  parser, or the
  // JavaScript language.  Implementation of an emoji-capable xml parser
  // is left as an exercise for the reader.
  var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/

  var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040\.\d-]/

  var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/
  var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040\.\d-]/

  quote = charClass(quote)
  attribEnd = charClass(attribEnd)

  function charClass (str) {
    return str.split('').reduce(function (s, c) {
      s[c] = true
      return s
    }, {})
  }

  function isRegExp (c) {
    return Object.prototype.toString.call(c) === '[object RegExp]'
  }

  function is (charclass, c) {
    return isRegExp(charclass) ? !!c.match(charclass) : charclass[c]
  }

  function not (charclass, c) {
    return !is(charclass, c)
  }

  var S = 0
  sax.STATE = {
    BEGIN: S++, // leading byte order mark or whitespace
    BEGIN_WHITESPACE: S++, // leading whitespace
    TEXT: S++, // general stuff
    TEXT_ENTITY: S++, // &amp and such.
    OPEN_WAKA: S++, // <
    SGML_DECL: S++, // <!BLARG
    SGML_DECL_QUOTED: S++, // <!BLARG foo "bar
    DOCTYPE: S++, // <!DOCTYPE
    DOCTYPE_QUOTED: S++, // <!DOCTYPE "//blah
    DOCTYPE_DTD: S++, // <!DOCTYPE "//blah" [ ...
    DOCTYPE_DTD_QUOTED: S++, // <!DOCTYPE "//blah" [ "foo
    COMMENT_STARTING: S++, // <!-
    COMMENT: S++, // <!--
    COMMENT_ENDING: S++, // <!-- blah -
    COMMENT_ENDED: S++, // <!-- blah --
    CDATA: S++, // <![CDATA[ something
    CDATA_ENDING: S++, // ]
    CDATA_ENDING_2: S++, // ]]
    PROC_INST: S++, // <?hi
    PROC_INST_BODY: S++, // <?hi there
    PROC_INST_ENDING: S++, // <?hi "there" ?
    OPEN_TAG: S++, // <strong
    OPEN_TAG_SLASH: S++, // <strong /
    ATTRIB: S++, // <a
    ATTRIB_NAME: S++, // <a foo
    ATTRIB_NAME_SAW_WHITE: S++, // <a foo _
    ATTRIB_VALUE: S++, // <a foo=
    ATTRIB_VALUE_QUOTED: S++, // <a foo="bar
    ATTRIB_VALUE_CLOSED: S++, // <a foo="bar"
    ATTRIB_VALUE_UNQUOTED: S++, // <a foo=bar
    ATTRIB_VALUE_ENTITY_Q: S++, // <foo bar="&quot;"
    ATTRIB_VALUE_ENTITY_U: S++, // <foo bar=&quot
    CLOSE_TAG: S++, // </a
    CLOSE_TAG_SAW_WHITE: S++, // </a   >
    SCRIPT: S++, // <script> ...
    SCRIPT_ENDING: S++ // <script> ... <
  }

  sax.XML_ENTITIES = {
    'amp': '&',
    'gt': '>',
    'lt': '<',
    'quot': '"',
    'apos': "'"
  }

  sax.ENTITIES = {
    'amp': '&',
    'gt': '>',
    'lt': '<',
    'quot': '"',
    'apos': "'",
    'AElig': 198,
    'Aacute': 193,
    'Acirc': 194,
    'Agrave': 192,
    'Aring': 197,
    'Atilde': 195,
    'Auml': 196,
    'Ccedil': 199,
    'ETH': 208,
    'Eacute': 201,
    'Ecirc': 202,
    'Egrave': 200,
    'Euml': 203,
    'Iacute': 205,
    'Icirc': 206,
    'Igrave': 204,
    'Iuml': 207,
    'Ntilde': 209,
    'Oacute': 211,
    'Ocirc': 212,
    'Ograve': 210,
    'Oslash': 216,
    'Otilde': 213,
    'Ouml': 214,
    'THORN': 222,
    'Uacute': 218,
    'Ucirc': 219,
    'Ugrave': 217,
    'Uuml': 220,
    'Yacute': 221,
    'aacute': 225,
    'acirc': 226,
    'aelig': 230,
    'agrave': 224,
    'aring': 229,
    'atilde': 227,
    'auml': 228,
    'ccedil': 231,
    'eacute': 233,
    'ecirc': 234,
    'egrave': 232,
    'eth': 240,
    'euml': 235,
    'iacute': 237,
    'icirc': 238,
    'igrave': 236,
    'iuml': 239,
    'ntilde': 241,
    'oacute': 243,
    'ocirc': 244,
    'ograve': 242,
    'oslash': 248,
    'otilde': 245,
    'ouml': 246,
    'szlig': 223,
    'thorn': 254,
    'uacute': 250,
    'ucirc': 251,
    'ugrave': 249,
    'uuml': 252,
    'yacute': 253,
    'yuml': 255,
    'copy': 169,
    'reg': 174,
    'nbsp': 160,
    'iexcl': 161,
    'cent': 162,
    'pound': 163,
    'curren': 164,
    'yen': 165,
    'brvbar': 166,
    'sect': 167,
    'uml': 168,
    'ordf': 170,
    'laquo': 171,
    'not': 172,
    'shy': 173,
    'macr': 175,
    'deg': 176,
    'plusmn': 177,
    'sup1': 185,
    'sup2': 178,
    'sup3': 179,
    'acute': 180,
    'micro': 181,
    'para': 182,
    'middot': 183,
    'cedil': 184,
    'ordm': 186,
    'raquo': 187,
    'frac14': 188,
    'frac12': 189,
    'frac34': 190,
    'iquest': 191,
    'times': 215,
    'divide': 247,
    'OElig': 338,
    'oelig': 339,
    'Scaron': 352,
    'scaron': 353,
    'Yuml': 376,
    'fnof': 402,
    'circ': 710,
    'tilde': 732,
    'Alpha': 913,
    'Beta': 914,
    'Gamma': 915,
    'Delta': 916,
    'Epsilon': 917,
    'Zeta': 918,
    'Eta': 919,
    'Theta': 920,
    'Iota': 921,
    'Kappa': 922,
    'Lambda': 923,
    'Mu': 924,
    'Nu': 925,
    'Xi': 926,
    'Omicron': 927,
    'Pi': 928,
    'Rho': 929,
    'Sigma': 931,
    'Tau': 932,
    'Upsilon': 933,
    'Phi': 934,
    'Chi': 935,
    'Psi': 936,
    'Omega': 937,
    'alpha': 945,
    'beta': 946,
    'gamma': 947,
    'delta': 948,
    'epsilon': 949,
    'zeta': 950,
    'eta': 951,
    'theta': 952,
    'iota': 953,
    'kappa': 954,
    'lambda': 955,
    'mu': 956,
    'nu': 957,
    'xi': 958,
    'omicron': 959,
    'pi': 960,
    'rho': 961,
    'sigmaf': 962,
    'sigma': 963,
    'tau': 964,
    'upsilon': 965,
    'phi': 966,
    'chi': 967,
    'psi': 968,
    'omega': 969,
    'thetasym': 977,
    'upsih': 978,
    'piv': 982,
    'ensp': 8194,
    'emsp': 8195,
    'thinsp': 8201,
    'zwnj': 8204,
    'zwj': 8205,
    'lrm': 8206,
    'rlm': 8207,
    'ndash': 8211,
    'mdash': 8212,
    'lsquo': 8216,
    'rsquo': 8217,
    'sbquo': 8218,
    'ldquo': 8220,
    'rdquo': 8221,
    'bdquo': 8222,
    'dagger': 8224,
    'Dagger': 8225,
    'bull': 8226,
    'hellip': 8230,
    'permil': 8240,
    'prime': 8242,
    'Prime': 8243,
    'lsaquo': 8249,
    'rsaquo': 8250,
    'oline': 8254,
    'frasl': 8260,
    'euro': 8364,
    'image': 8465,
    'weierp': 8472,
    'real': 8476,
    'trade': 8482,
    'alefsym': 8501,
    'larr': 8592,
    'uarr': 8593,
    'rarr': 8594,
    'darr': 8595,
    'harr': 8596,
    'crarr': 8629,
    'lArr': 8656,
    'uArr': 8657,
    'rArr': 8658,
    'dArr': 8659,
    'hArr': 8660,
    'forall': 8704,
    'part': 8706,
    'exist': 8707,
    'empty': 8709,
    'nabla': 8711,
    'isin': 8712,
    'notin': 8713,
    'ni': 8715,
    'prod': 8719,
    'sum': 8721,
    'minus': 8722,
    'lowast': 8727,
    'radic': 8730,
    'prop': 8733,
    'infin': 8734,
    'ang': 8736,
    'and': 8743,
    'or': 8744,
    'cap': 8745,
    'cup': 8746,
    'int': 8747,
    'there4': 8756,
    'sim': 8764,
    'cong': 8773,
    'asymp': 8776,
    'ne': 8800,
    'equiv': 8801,
    'le': 8804,
    'ge': 8805,
    'sub': 8834,
    'sup': 8835,
    'nsub': 8836,
    'sube': 8838,
    'supe': 8839,
    'oplus': 8853,
    'otimes': 8855,
    'perp': 8869,
    'sdot': 8901,
    'lceil': 8968,
    'rceil': 8969,
    'lfloor': 8970,
    'rfloor': 8971,
    'lang': 9001,
    'rang': 9002,
    'loz': 9674,
    'spades': 9824,
    'clubs': 9827,
    'hearts': 9829,
    'diams': 9830
  }

  Object.keys(sax.ENTITIES).forEach(function (key) {
    var e = sax.ENTITIES[key]
    var s = typeof e === 'number' ? String.fromCharCode(e) : e
    sax.ENTITIES[key] = s
  })

  for (var s in sax.STATE) {
    sax.STATE[sax.STATE[s]] = s
  }

  // shorthand
  S = sax.STATE

  function emit (parser, event, data) {
    parser[event] && parser[event](data)
  }

  function emitNode (parser, nodeType, data) {
    if (parser.textNode) closeText(parser)
    emit(parser, nodeType, data)
  }

  function closeText (parser) {
    parser.textNode = textopts(parser.opt, parser.textNode)
    if (parser.textNode) emit(parser, 'ontext', parser.textNode)
    parser.textNode = ''
  }

  function textopts (opt, text) {
    if (opt.trim) text = text.trim()
    if (opt.normalize) text = text.replace(/\s+/g, ' ')
    return text
  }

  function error (parser, er) {
    closeText(parser)
    if (parser.trackPosition) {
      er += '\nLine: ' + parser.line +
        '\nColumn: ' + parser.column +
        '\nChar: ' + parser.c
    }
    er = new Error(er)
    parser.error = er
    emit(parser, 'onerror', er)
    return parser
  }

  function end (parser) {
    if (parser.sawRoot && !parser.closedRoot) strictFail(parser, 'Unclosed root tag')
    if ((parser.state !== S.BEGIN) &&
      (parser.state !== S.BEGIN_WHITESPACE) &&
      (parser.state !== S.TEXT)) {
      error(parser, 'Unexpected end')
    }
    closeText(parser)
    parser.c = ''
    parser.closed = true
    emit(parser, 'onend')
    SAXParser.call(parser, parser.strict, parser.opt)
    return parser
  }

  function strictFail (parser, message) {
    if (typeof parser !== 'object' || !(parser instanceof SAXParser)) {
      throw new Error('bad call to strictFail')
    }
    if (parser.strict) {
      error(parser, message)
    }
  }

  function newTag (parser) {
    if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]()
    var parent = parser.tags[parser.tags.length - 1] || parser
    var tag = parser.tag = { name: parser.tagName, attributes: {} }

    // will be overridden if tag contails an xmlns="foo" or xmlns:foo="bar"
    if (parser.opt.xmlns) {
      tag.ns = parent.ns
    }
    parser.attribList.length = 0
  }

  function qname (name, attribute) {
    var i = name.indexOf(':')
    var qualName = i < 0 ? [ '', name ] : name.split(':')
    var prefix = qualName[0]
    var local = qualName[1]

    // <x "xmlns"="http://foo">
    if (attribute && name === 'xmlns') {
      prefix = 'xmlns'
      local = ''
    }

    return { prefix: prefix, local: local }
  }

  function attrib (parser) {
    if (!parser.strict) {
      parser.attribName = parser.attribName[parser.looseCase]()
    }

    if (parser.attribList.indexOf(parser.attribName) !== -1 ||
      parser.tag.attributes.hasOwnProperty(parser.attribName)) {
      parser.attribName = parser.attribValue = ''
      return
    }

    if (parser.opt.xmlns) {
      var qn = qname(parser.attribName, true)
      var prefix = qn.prefix
      var local = qn.local

      if (prefix === 'xmlns') {
        // namespace binding attribute. push the binding into scope
        if (local === 'xml' && parser.attribValue !== XML_NAMESPACE) {
          strictFail(parser,
            'xml: prefix must be bound to ' + XML_NAMESPACE + '\n' +
            'Actual: ' + parser.attribValue)
        } else if (local === 'xmlns' && parser.attribValue !== XMLNS_NAMESPACE) {
          strictFail(parser,
            'xmlns: prefix must be bound to ' + XMLNS_NAMESPACE + '\n' +
            'Actual: ' + parser.attribValue)
        } else {
          var tag = parser.tag
          var parent = parser.tags[parser.tags.length - 1] || parser
          if (tag.ns === parent.ns) {
            tag.ns = Object.create(parent.ns)
          }
          tag.ns[local] = parser.attribValue
        }
      }

      // defer onattribute events until all attributes have been seen
      // so any new bindings can take effect. preserve attribute order
      // so deferred events can be emitted in document order
      parser.attribList.push([parser.attribName, parser.attribValue])
    } else {
      // in non-xmlns mode, we can emit the event right away
      parser.tag.attributes[parser.attribName] = parser.attribValue
      emitNode(parser, 'onattribute', {
        name: parser.attribName,
        value: parser.attribValue
      })
    }

    parser.attribName = parser.attribValue = ''
  }

  function openTag (parser, selfClosing) {
    if (parser.opt.xmlns) {
      // emit namespace binding events
      var tag = parser.tag

      // add namespace info to tag
      var qn = qname(parser.tagName)
      tag.prefix = qn.prefix
      tag.local = qn.local
      tag.uri = tag.ns[qn.prefix] || ''

      if (tag.prefix && !tag.uri) {
        strictFail(parser, 'Unbound namespace prefix: ' +
          JSON.stringify(parser.tagName))
        tag.uri = qn.prefix
      }

      var parent = parser.tags[parser.tags.length - 1] || parser
      if (tag.ns && parent.ns !== tag.ns) {
        Object.keys(tag.ns).forEach(function (p) {
          emitNode(parser, 'onopennamespace', {
            prefix: p,
            uri: tag.ns[p]
          })
        })
      }

      // handle deferred onattribute events
      // Note: do not apply default ns to attributes:
      //   http://www.w3.org/TR/REC-xml-names/#defaulting
      for (var i = 0, l = parser.attribList.length; i < l; i++) {
        var nv = parser.attribList[i]
        var name = nv[0]
        var value = nv[1]
        var qualName = qname(name, true)
        var prefix = qualName.prefix
        var local = qualName.local
        var uri = prefix === '' ? '' : (tag.ns[prefix] || '')
        var a = {
          name: name,
          value: value,
          prefix: prefix,
          local: local,
          uri: uri
        }

        // if there's any attributes with an undefined namespace,
        // then fail on them now.
        if (prefix && prefix !== 'xmlns' && !uri) {
          strictFail(parser, 'Unbound namespace prefix: ' +
            JSON.stringify(prefix))
          a.uri = prefix
        }
        parser.tag.attributes[name] = a
        emitNode(parser, 'onattribute', a)
      }
      parser.attribList.length = 0
    }

    parser.tag.isSelfClosing = !!selfClosing

    // process the tag
    parser.sawRoot = true
    parser.tags.push(parser.tag)
    emitNode(parser, 'onopentag', parser.tag)
    if (!selfClosing) {
      // special case for <script> in non-strict mode.
      if (!parser.noscript && parser.tagName.toLowerCase() === 'script') {
        parser.state = S.SCRIPT
      } else {
        parser.state = S.TEXT
      }
      parser.tag = null
      parser.tagName = ''
    }
    parser.attribName = parser.attribValue = ''
    parser.attribList.length = 0
  }

  function closeTag (parser) {
    if (!parser.tagName) {
      strictFail(parser, 'Weird empty close tag.')
      parser.textNode += '</>'
      parser.state = S.TEXT
      return
    }

    if (parser.script) {
      if (parser.tagName !== 'script') {
        parser.script += '</' + parser.tagName + '>'
        parser.tagName = ''
        parser.state = S.SCRIPT
        return
      }
      emitNode(parser, 'onscript', parser.script)
      parser.script = ''
    }

    // first make sure that the closing tag actually exists.
    // <a><b></c></b></a> will close everything, otherwise.
    var t = parser.tags.length
    var tagName = parser.tagName
    if (!parser.strict) {
      tagName = tagName[parser.looseCase]()
    }
    var closeTo = tagName
    while (t--) {
      var close = parser.tags[t]
      if (close.name !== closeTo) {
        // fail the first time in strict mode
        strictFail(parser, 'Unexpected close tag')
      } else {
        break
      }
    }

    // didn't find it.  we already failed for strict, so just abort.
    if (t < 0) {
      strictFail(parser, 'Unmatched closing tag: ' + parser.tagName)
      parser.textNode += '</' + parser.tagName + '>'
      parser.state = S.TEXT
      return
    }
    parser.tagName = tagName
    var s = parser.tags.length
    while (s-- > t) {
      var tag = parser.tag = parser.tags.pop()
      parser.tagName = parser.tag.name
      emitNode(parser, 'onclosetag', parser.tagName)

      var x = {}
      for (var i in tag.ns) {
        x[i] = tag.ns[i]
      }

      var parent = parser.tags[parser.tags.length - 1] || parser
      if (parser.opt.xmlns && tag.ns !== parent.ns) {
        // remove namespace bindings introduced by tag
        Object.keys(tag.ns).forEach(function (p) {
          var n = tag.ns[p]
          emitNode(parser, 'onclosenamespace', { prefix: p, uri: n })
        })
      }
    }
    if (t === 0) parser.closedRoot = true
    parser.tagName = parser.attribValue = parser.attribName = ''
    parser.attribList.length = 0
    parser.state = S.TEXT
  }

  function parseEntity (parser) {
    var entity = parser.entity
    var entityLC = entity.toLowerCase()
    var num
    var numStr = ''

    if (parser.ENTITIES[entity]) {
      return parser.ENTITIES[entity]
    }
    if (parser.ENTITIES[entityLC]) {
      return parser.ENTITIES[entityLC]
    }
    entity = entityLC
    if (entity.charAt(0) === '#') {
      if (entity.charAt(1) === 'x') {
        entity = entity.slice(2)
        num = parseInt(entity, 16)
        numStr = num.toString(16)
      } else {
        entity = entity.slice(1)
        num = parseInt(entity, 10)
        numStr = num.toString(10)
      }
    }
    entity = entity.replace(/^0+/, '')
    if (numStr.toLowerCase() !== entity) {
      strictFail(parser, 'Invalid character entity')
      return '&' + parser.entity + ';'
    }

    return String.fromCodePoint(num)
  }

  function beginWhiteSpace (parser, c) {
    if (c === '<') {
      parser.state = S.OPEN_WAKA
      parser.startTagPosition = parser.position
    } else if (not(whitespace, c)) {
      // have to process this as a text node.
      // weird, but happens.
      strictFail(parser, 'Non-whitespace before first tag.')
      parser.textNode = c
      parser.state = S.TEXT
    }
  }

  function charAt (chunk, i) {
    var result = ''
    if (i < chunk.length) {
      result = chunk.charAt(i)
    }
    return result
  }

  function write (chunk) {
    var parser = this
    if (this.error) {
      throw this.error
    }
    if (parser.closed) {
      return error(parser,
        'Cannot write after close. Assign an onready handler.')
    }
    if (chunk === null) {
      return end(parser)
    }
    if (typeof chunk === 'object') {
      chunk = chunk.toString()
    }
    var i = 0
    var c = ''
    while (true) {
      c = charAt(chunk, i++)
      parser.c = c
      if (!c) {
        break
      }
      if (parser.trackPosition) {
        parser.position++
        if (c === '\n') {
          parser.line++
          parser.column = 0
        } else {
          parser.column++
        }
      }
      switch (parser.state) {
        case S.BEGIN:
          parser.state = S.BEGIN_WHITESPACE
          if (c === '\uFEFF') {
            continue
          }
          beginWhiteSpace(parser, c)
          continue

        case S.BEGIN_WHITESPACE:
          beginWhiteSpace(parser, c)
          continue

        case S.TEXT:
          if (parser.sawRoot && !parser.closedRoot) {
            var starti = i - 1
            while (c && c !== '<' && c !== '&') {
              c = charAt(chunk, i++)
              if (c && parser.trackPosition) {
                parser.position++
                if (c === '\n') {
                  parser.line++
                  parser.column = 0
                } else {
                  parser.column++
                }
              }
            }
            parser.textNode += chunk.substring(starti, i - 1)
          }
          if (c === '<' && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
            parser.state = S.OPEN_WAKA
            parser.startTagPosition = parser.position
          } else {
            if (not(whitespace, c) && (!parser.sawRoot || parser.closedRoot)) {
              strictFail(parser, 'Text data outside of root node.')
            }
            if (c === '&') {
              parser.state = S.TEXT_ENTITY
            } else {
              parser.textNode += c
            }
          }
          continue

        case S.SCRIPT:
          // only non-strict
          if (c === '<') {
            parser.state = S.SCRIPT_ENDING
          } else {
            parser.script += c
          }
          continue

        case S.SCRIPT_ENDING:
          if (c === '/') {
            parser.state = S.CLOSE_TAG
          } else {
            parser.script += '<' + c
            parser.state = S.SCRIPT
          }
          continue

        case S.OPEN_WAKA:
          // either a /, ?, !, or text is coming next.
          if (c === '!') {
            parser.state = S.SGML_DECL
            parser.sgmlDecl = ''
          } else if (is(whitespace, c)) {
            // wait for it...
          } else if (is(nameStart, c)) {
            parser.state = S.OPEN_TAG
            parser.tagName = c
          } else if (c === '/') {
            parser.state = S.CLOSE_TAG
            parser.tagName = ''
          } else if (c === '?') {
            parser.state = S.PROC_INST
            parser.procInstName = parser.procInstBody = ''
          } else {
            strictFail(parser, 'Unencoded <')
            // if there was some whitespace, then add that in.
            if (parser.startTagPosition + 1 < parser.position) {
              var pad = parser.position - parser.startTagPosition
              c = new Array(pad).join(' ') + c
            }
            parser.textNode += '<' + c
            parser.state = S.TEXT
          }
          continue

        case S.SGML_DECL:
          if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
            emitNode(parser, 'onopencdata')
            parser.state = S.CDATA
            parser.sgmlDecl = ''
            parser.cdata = ''
          } else if (parser.sgmlDecl + c === '--') {
            parser.state = S.COMMENT
            parser.comment = ''
            parser.sgmlDecl = ''
          } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
            parser.state = S.DOCTYPE
            if (parser.doctype || parser.sawRoot) {
              strictFail(parser,
                'Inappropriately located doctype declaration')
            }
            parser.doctype = ''
            parser.sgmlDecl = ''
          } else if (c === '>') {
            emitNode(parser, 'onsgmldeclaration', parser.sgmlDecl)
            parser.sgmlDecl = ''
            parser.state = S.TEXT
          } else if (is(quote, c)) {
            parser.state = S.SGML_DECL_QUOTED
            parser.sgmlDecl += c
          } else {
            parser.sgmlDecl += c
          }
          continue

        case S.SGML_DECL_QUOTED:
          if (c === parser.q) {
            parser.state = S.SGML_DECL
            parser.q = ''
          }
          parser.sgmlDecl += c
          continue

        case S.DOCTYPE:
          if (c === '>') {
            parser.state = S.TEXT
            emitNode(parser, 'ondoctype', parser.doctype)
            parser.doctype = true // just remember that we saw it.
          } else {
            parser.doctype += c
            if (c === '[') {
              parser.state = S.DOCTYPE_DTD
            } else if (is(quote, c)) {
              parser.state = S.DOCTYPE_QUOTED
              parser.q = c
            }
          }
          continue

        case S.DOCTYPE_QUOTED:
          parser.doctype += c
          if (c === parser.q) {
            parser.q = ''
            parser.state = S.DOCTYPE
          }
          continue

        case S.DOCTYPE_DTD:
          parser.doctype += c
          if (c === ']') {
            parser.state = S.DOCTYPE
          } else if (is(quote, c)) {
            parser.state = S.DOCTYPE_DTD_QUOTED
            parser.q = c
          }
          continue

        case S.DOCTYPE_DTD_QUOTED:
          parser.doctype += c
          if (c === parser.q) {
            parser.state = S.DOCTYPE_DTD
            parser.q = ''
          }
          continue

        case S.COMMENT:
          if (c === '-') {
            parser.state = S.COMMENT_ENDING
          } else {
            parser.comment += c
          }
          continue

        case S.COMMENT_ENDING:
          if (c === '-') {
            parser.state = S.COMMENT_ENDED
            parser.comment = textopts(parser.opt, parser.comment)
            if (parser.comment) {
              emitNode(parser, 'oncomment', parser.comment)
            }
            parser.comment = ''
          } else {
            parser.comment += '-' + c
            parser.state = S.COMMENT
          }
          continue

        case S.COMMENT_ENDED:
          if (c !== '>') {
            strictFail(parser, 'Malformed comment')
            // allow <!-- blah -- bloo --> in non-strict mode,
            // which is a comment of " blah -- bloo "
            parser.comment += '--' + c
            parser.state = S.COMMENT
          } else {
            parser.state = S.TEXT
          }
          continue

        case S.CDATA:
          if (c === ']') {
            parser.state = S.CDATA_ENDING
          } else {
            parser.cdata += c
          }
          continue

        case S.CDATA_ENDING:
          if (c === ']') {
            parser.state = S.CDATA_ENDING_2
          } else {
            parser.cdata += ']' + c
            parser.state = S.CDATA
          }
          continue

        case S.CDATA_ENDING_2:
          if (c === '>') {
            if (parser.cdata) {
              emitNode(parser, 'oncdata', parser.cdata)
            }
            emitNode(parser, 'onclosecdata')
            parser.cdata = ''
            parser.state = S.TEXT
          } else if (c === ']') {
            parser.cdata += ']'
          } else {
            parser.cdata += ']]' + c
            parser.state = S.CDATA
          }
          continue

        case S.PROC_INST:
          if (c === '?') {
            parser.state = S.PROC_INST_ENDING
          } else if (is(whitespace, c)) {
            parser.state = S.PROC_INST_BODY
          } else {
            parser.procInstName += c
          }
          continue

        case S.PROC_INST_BODY:
          if (!parser.procInstBody && is(whitespace, c)) {
            continue
          } else if (c === '?') {
            parser.state = S.PROC_INST_ENDING
          } else {
            parser.procInstBody += c
          }
          continue

        case S.PROC_INST_ENDING:
          if (c === '>') {
            emitNode(parser, 'onprocessinginstruction', {
              name: parser.procInstName,
              body: parser.procInstBody
            })
            parser.procInstName = parser.procInstBody = ''
            parser.state = S.TEXT
          } else {
            parser.procInstBody += '?' + c
            parser.state = S.PROC_INST_BODY
          }
          continue

        case S.OPEN_TAG:
          if (is(nameBody, c)) {
            parser.tagName += c
          } else {
            newTag(parser)
            if (c === '>') {
              openTag(parser)
            } else if (c === '/') {
              parser.state = S.OPEN_TAG_SLASH
            } else {
              if (not(whitespace, c)) {
                strictFail(parser, 'Invalid character in tag name')
              }
              parser.state = S.ATTRIB
            }
          }
          continue

        case S.OPEN_TAG_SLASH:
          if (c === '>') {
            openTag(parser, true)
            closeTag(parser)
          } else {
            strictFail(parser, 'Forward-slash in opening tag not followed by >')
            parser.state = S.ATTRIB
          }
          continue

        case S.ATTRIB:
          // haven't read the attribute name yet.
          if (is(whitespace, c)) {
            continue
          } else if (c === '>') {
            openTag(parser)
          } else if (c === '/') {
            parser.state = S.OPEN_TAG_SLASH
          } else if (is(nameStart, c)) {
            parser.attribName = c
            parser.attribValue = ''
            parser.state = S.ATTRIB_NAME
          } else {
            strictFail(parser, 'Invalid attribute name')
          }
          continue

        case S.ATTRIB_NAME:
          if (c === '=') {
            parser.state = S.ATTRIB_VALUE
          } else if (c === '>') {
            strictFail(parser, 'Attribute without value')
            parser.attribValue = parser.attribName
            attrib(parser)
            openTag(parser)
          } else if (is(whitespace, c)) {
            parser.state = S.ATTRIB_NAME_SAW_WHITE
          } else if (is(nameBody, c)) {
            parser.attribName += c
          } else {
            strictFail(parser, 'Invalid attribute name')
          }
          continue

        case S.ATTRIB_NAME_SAW_WHITE:
          if (c === '=') {
            parser.state = S.ATTRIB_VALUE
          } else if (is(whitespace, c)) {
            continue
          } else {
            strictFail(parser, 'Attribute without value')
            parser.tag.attributes[parser.attribName] = ''
            parser.attribValue = ''
            emitNode(parser, 'onattribute', {
              name: parser.attribName,
              value: ''
            })
            parser.attribName = ''
            if (c === '>') {
              openTag(parser)
            } else if (is(nameStart, c)) {
              parser.attribName = c
              parser.state = S.ATTRIB_NAME
            } else {
              strictFail(parser, 'Invalid attribute name')
              parser.state = S.ATTRIB
            }
          }
          continue

        case S.ATTRIB_VALUE:
          if (is(whitespace, c)) {
            continue
          } else if (is(quote, c)) {
            parser.q = c
            parser.state = S.ATTRIB_VALUE_QUOTED
          } else {
            strictFail(parser, 'Unquoted attribute value')
            parser.state = S.ATTRIB_VALUE_UNQUOTED
            parser.attribValue = c
          }
          continue

        case S.ATTRIB_VALUE_QUOTED:
          if (c !== parser.q) {
            if (c === '&') {
              parser.state = S.ATTRIB_VALUE_ENTITY_Q
            } else {
              parser.attribValue += c
            }
            continue
          }
          attrib(parser)
          parser.q = ''
          parser.state = S.ATTRIB_VALUE_CLOSED
          continue

        case S.ATTRIB_VALUE_CLOSED:
          if (is(whitespace, c)) {
            parser.state = S.ATTRIB
          } else if (c === '>') {
            openTag(parser)
          } else if (c === '/') {
            parser.state = S.OPEN_TAG_SLASH
          } else if (is(nameStart, c)) {
            strictFail(parser, 'No whitespace between attributes')
            parser.attribName = c
            parser.attribValue = ''
            parser.state = S.ATTRIB_NAME
          } else {
            strictFail(parser, 'Invalid attribute name')
          }
          continue

        case S.ATTRIB_VALUE_UNQUOTED:
          if (not(attribEnd, c)) {
            if (c === '&') {
              parser.state = S.ATTRIB_VALUE_ENTITY_U
            } else {
              parser.attribValue += c
            }
            continue
          }
          attrib(parser)
          if (c === '>') {
            openTag(parser)
          } else {
            parser.state = S.ATTRIB
          }
          continue

        case S.CLOSE_TAG:
          if (!parser.tagName) {
            if (is(whitespace, c)) {
              continue
            } else if (not(nameStart, c)) {
              if (parser.script) {
                parser.script += '</' + c
                parser.state = S.SCRIPT
              } else {
                strictFail(parser, 'Invalid tagname in closing tag.')
              }
            } else {
              parser.tagName = c
            }
          } else if (c === '>') {
            closeTag(parser)
          } else if (is(nameBody, c)) {
            parser.tagName += c
          } else if (parser.script) {
            parser.script += '</' + parser.tagName
            parser.tagName = ''
            parser.state = S.SCRIPT
          } else {
            if (not(whitespace, c)) {
              strictFail(parser, 'Invalid tagname in closing tag')
            }
            parser.state = S.CLOSE_TAG_SAW_WHITE
          }
          continue

        case S.CLOSE_TAG_SAW_WHITE:
          if (is(whitespace, c)) {
            continue
          }
          if (c === '>') {
            closeTag(parser)
          } else {
            strictFail(parser, 'Invalid characters in closing tag')
          }
          continue

        case S.TEXT_ENTITY:
        case S.ATTRIB_VALUE_ENTITY_Q:
        case S.ATTRIB_VALUE_ENTITY_U:
          var returnState
          var buffer
          switch (parser.state) {
            case S.TEXT_ENTITY:
              returnState = S.TEXT
              buffer = 'textNode'
              break

            case S.ATTRIB_VALUE_ENTITY_Q:
              returnState = S.ATTRIB_VALUE_QUOTED
              buffer = 'attribValue'
              break

            case S.ATTRIB_VALUE_ENTITY_U:
              returnState = S.ATTRIB_VALUE_UNQUOTED
              buffer = 'attribValue'
              break
          }

          if (c === ';') {
            parser[buffer] += parseEntity(parser)
            parser.entity = ''
            parser.state = returnState
          } else if (is(parser.entity.length ? entityBody : entityStart, c)) {
            parser.entity += c
          } else {
            strictFail(parser, 'Invalid character in entity name')
            parser[buffer] += '&' + parser.entity + c
            parser.entity = ''
            parser.state = returnState
          }

          continue

        default:
          throw new Error(parser, 'Unknown state: ' + parser.state)
      }
    } // while

    if (parser.position >= parser.bufferCheckPosition) {
      checkBufferLength(parser)
    }
    return parser
  }

  /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
  if (!String.fromCodePoint) {
    (function () {
      var stringFromCharCode = String.fromCharCode
      var floor = Math.floor
      var fromCodePoint = function () {
        var MAX_SIZE = 0x4000
        var codeUnits = []
        var highSurrogate
        var lowSurrogate
        var index = -1
        var length = arguments.length
        if (!length) {
          return ''
        }
        var result = ''
        while (++index < length) {
          var codePoint = Number(arguments[index])
          if (
            !isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
            codePoint < 0 || // not a valid Unicode code point
            codePoint > 0x10FFFF || // not a valid Unicode code point
            floor(codePoint) !== codePoint // not an integer
          ) {
            throw RangeError('Invalid code point: ' + codePoint)
          }
          if (codePoint <= 0xFFFF) { // BMP code point
            codeUnits.push(codePoint)
          } else { // Astral code point; split in surrogate halves
            // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
            codePoint -= 0x10000
            highSurrogate = (codePoint >> 10) + 0xD800
            lowSurrogate = (codePoint % 0x400) + 0xDC00
            codeUnits.push(highSurrogate, lowSurrogate)
          }
          if (index + 1 === length || codeUnits.length > MAX_SIZE) {
            result += stringFromCharCode.apply(null, codeUnits)
            codeUnits.length = 0
          }
        }
        return result
      }
      if (Object.defineProperty) {
        Object.defineProperty(String, 'fromCodePoint', {
          value: fromCodePoint,
          configurable: true,
          writable: true
        })
      } else {
        String.fromCodePoint = fromCodePoint
      }
    }())
  }
})(typeof exports === 'undefined' ? this.sax = {} : exports)

}).call(this,require("buffer").Buffer)
},{"buffer":17,"stream":43,"string_decoder":44}],43:[function(require,module,exports){
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

},{"events":20,"inherits":22,"readable-stream/duplex.js":31,"readable-stream/passthrough.js":38,"readable-stream/readable.js":39,"readable-stream/transform.js":40,"readable-stream/writable.js":41}],44:[function(require,module,exports){
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

},{"buffer":17}],45:[function(require,module,exports){
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
},{}],46:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],47:[function(require,module,exports){
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
},{"./support/isBuffer":46,"_process":30,"inherits":22}],48:[function(require,module,exports){
// This file is just added for convenience so this repository can be
// directly checked out into a project's deps folder
module.exports = require('./lib/xmldoc');

},{"./lib/xmldoc":49}],49:[function(require,module,exports){
(function () {

var sax;

if (typeof module !== 'undefined' && module.exports) {
  // We're being used in a Node-like environment
  sax = require('sax');
}
else {
  // assume it's attached to the Window object in a browser
  sax = this.sax;

  if (!sax) // no sax for you!
    throw new Error("Expected sax to be defined. Make sure you're including sax.js before this file.");
}

/*
XmlElement is our basic building block. Everything is an XmlElement; even XmlDocument
behaves like an XmlElement by inheriting its attributes and functions.
*/

function XmlElement(tag) {
  // Capture the parser object off of the XmlDocument delegate
  var parser = delegates[delegates.length - 1].parser;

  this.name = tag.name;
  this.attr = tag.attributes || {};
  this.val = "";
  this.isValCdata = false;
  this.children = [];
  this.firstChild = null;
  this.lastChild = null;

  // Assign parse information
  this.line = parser.line;
  this.column = parser.column;
  this.position = parser.position;
  this.startTagPosition = parser.startTagPosition;
}

// SaxParser handlers

XmlElement.prototype._opentag = function(tag) {

  var child = new XmlElement(tag);
  
  // add to our children array
  this.children.push(child);

  // update first/last pointers
  if (!this.firstChild) this.firstChild = child;
  this.lastChild = child;

  delegates.unshift(child);
};

XmlElement.prototype._closetag = function() {
  delegates.shift();
};

XmlElement.prototype._text = function(text) {
  if (text) this.val += text;
};

XmlElement.prototype._cdata = function(cdata) {
  if (cdata) {
    this.val += cdata;
    this.isValCdata=true;
  }
};

XmlElement.prototype._error = function(err) {
  throw err;
};

// Useful functions

XmlElement.prototype.eachChild = function(iterator, context) {
  for (var i=0, l=this.children.length; i<l; i++)
    if (iterator.call(context, this.children[i], i, this.children) === false) return;
};

XmlElement.prototype.childNamed = function(name) {
  for (var i=0, l=this.children.length; i<l; i++) {
    var child = this.children[i];
    if (child.name === name) return child;
  }
  return undefined;
};

XmlElement.prototype.childrenNamed = function(name) {
  var matches = [];

  for (var i=0, l=this.children.length; i<l; i++)
    if (this.children[i].name === name)
      matches.push(this.children[i]);

  return matches;
};

XmlElement.prototype.childWithAttribute = function(name,value) {
  for (var i=0, l=this.children.length; i<l; i++) {
    var child = this.children[i];
    if ( (value && child.attr[name] === value) || (!value && child.attr[name]) )
      return child;
  }
  return undefined;
};

XmlElement.prototype.descendantWithPath = function(path) {
  var descendant = this;
  var components = path.split('.');

  for (var i=0, l=components.length; i<l; i++)
    if (descendant)
      descendant = descendant.childNamed(components[i]);
    else
      return undefined;

  return descendant;
};

XmlElement.prototype.valueWithPath = function(path) {
  var components = path.split('@');
  var descendant = this.descendantWithPath(components[0]);
  if (descendant)
    return components.length > 1 ? descendant.attr[components[1]] : descendant.val;
  else
    return undefined;
};

// String formatting (for debugging)

XmlElement.prototype.toString = function(options) {
  return this.toStringWithIndent("", options);
};

XmlElement.prototype.toStringWithIndent = function(indent, options) {
  var s = indent + "<" + this.name;
  var linebreak = options && options.compressed ? "" : "\n";
  var preserveWhitespace = options && options.preserveWhitespace;

  for (var name in this.attr)
    if (Object.prototype.hasOwnProperty.call(this.attr, name))
        s += " " + name + '="' + escapeXML(this.attr[name]) + '"';

  var finalVal = '';
  if (this.isValCdata){
    finalVal = '<![CDATA['+this.val+']]>';
  } else if (preserveWhitespace) {
    finalVal = escapeXML(this.val);
  } else{
    finalVal = escapeXML(this.val.trim());
  }
  if (options && options.trimmed && finalVal.length > 25)
    finalVal = finalVal.substring(0,25).trim() + "…";
  
  if (this.children.length) {
    s += ">" + linebreak;

    var childIndent = indent + (options && options.compressed ? "" : "  ");
    
    if (finalVal.length)
      s += childIndent + finalVal + linebreak;

    for (var i=0, l=this.children.length; i<l; i++)
      s += this.children[i].toStringWithIndent(childIndent, options) + linebreak;
    
    s += indent + "</" + this.name + ">";
  }
  else if (finalVal.length) {
    s += ">" + finalVal + "</" + this.name +">";
  }
  else s += "/>";
  
  return s;
};

/*
XmlDocument is the class we expose to the user; it uses the sax parser to create a hierarchy
of XmlElements.
*/

function XmlDocument(xml) {
  xml && (xml = xml.toString().trim());

  if (!xml)
    throw new Error("No XML to parse!");

  // Expose the parser to the other delegates while the parser is running
  this.parser = sax.parser(true); // strict
  addParserEvents(this.parser);

  // We'll use the file-scoped "delegates" var to remember what elements we're currently
  // parsing; they will push and pop off the stack as we get deeper into the XML hierarchy.
  // It's safe to use a global because JS is single-threaded.
  delegates = [this];
  
  this.parser.write(xml);

  // Remove the parser as it is no longer needed and should not be exposed to clients
  delete this.parser;
}

// make XmlDocument inherit XmlElement's methods
extend(XmlDocument.prototype, XmlElement.prototype);

XmlDocument.prototype._opentag = function(tag) {
  if (typeof this.children === 'undefined')
    // the first tag we encounter should be the root - we'll "become" the root XmlElement
    XmlElement.call(this,tag);
  else
    // all other tags will be the root element's children
    XmlElement.prototype._opentag.apply(this,arguments);
};

// file-scoped global stack of delegates
var delegates = null;

/*
Helper functions
*/

function addParserEvents(parser) {
  parser.onopentag = parser_opentag;
  parser.onclosetag = parser_closetag;
  parser.ontext = parser_text;
  parser.oncdata = parser_cdata;
  parser.onerror = parser_error;
}

// create these closures and cache them by keeping them file-scoped
function parser_opentag() { delegates[0]._opentag.apply(delegates[0],arguments) }
function parser_closetag() { delegates[0]._closetag.apply(delegates[0],arguments) }
function parser_text() { delegates[0]._text.apply(delegates[0],arguments) }
function parser_cdata() { delegates[0]._cdata.apply(delegates[0],arguments) }
function parser_error() { delegates[0]._error.apply(delegates[0],arguments) }

// a relatively standard extend method
function extend(destination, source) {
  for (var prop in source)
    if (source.hasOwnProperty(prop))
      destination[prop] = source[prop];
}

// escapes XML entities like "<", "&", etc.
function escapeXML(value){
  return value.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, '&amp;').replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

// Are we being used in a Node-like environment?
if (typeof module !== 'undefined' && module.exports)
    module.exports.XmlDocument = XmlDocument;
else
    this.XmlDocument = XmlDocument;

})();

},{"sax":42}]},{},[2,3,4,5,6,7,8,9,10,11,12,13])(13)
});