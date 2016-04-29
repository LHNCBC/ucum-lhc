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


},{"./config.js":2,"is-integer":16}],4:[function(require,module,exports){
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


},{"./ucumLhcUtils.js":9,"./unitTables.js":12}],6:[function(require,module,exports){
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
var jsonDefs_ = require('../data/ucumDefs.json');

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


},{"../data/ucumDefs.json":1,"./config.js":2,"./prefix.js":6,"./prefixTables.js":7,"./unit.js":10,"./unitTables.js":12,"fs":13,"jsonfile":17,"path":19,"util":22}],9:[function(require,module,exports){
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

    this.fromAuto_ = null;
    this.toAuto_ = null;

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
   * This is used to retain a reference to the autocompleters used in the
   * "from" and "to" unit fields for unit conversions.  The list for the
   * "to" unit field is updated with commensurable units when a "from" unit
   * is specified.
   *
   * The autocompleters are set up in the main.js code and this is called
   * after they are first set up.
   *
   * @param from a reference to the autocompleter used for the "from" unit field
   * @param to a reference to the autocompleter used for the "to" unit field
   * @returns nothing
   */


  _createClass(UcumLhcUtils, [{
    key: 'setAutocompleters',
    value: function setAutocompleters(from, to) {
      this.fromAuto_ = from;
      this.toAuto_ = to;
    }

    /**
     * This method validates a string that is supposed to be representing a valid
     * unit. It indicates whether or not the string translates to a valid unit,
     * and if so, if that unit is a predefined UCUM unit or a combination of
     * them.  If the string resolves to multiple units, those are shown with
     * their magnitudes (which should in theory differ, but don't always).
     *
     * @param elementID the ID of the web page element that contains the
     *  string to be validated
     * @param returnElementID the ID of the web page element to receive the
     *  return validation message
     * @param validListID the ID of the web page element to receive a list
     *  of units that match the string when there are multiple elements
     * @returns nothing
     */

  }, {
    key: 'reportUnitStringValidity',
    value: function reportUnitStringValidity(elementID, returnElementID, validListID) {

      var uStr = document.getElementById(elementID).value;
      var valFld = document.getElementById(returnElementID);
      var valListFld = document.getElementById(validListID);
      valFld.innerHTML = '';
      valListFld.innerHTML = '';
      var retMsg = '';
      var listMsg = '';
      try {
        var ret = this.getSpecifiedUnit(uStr);
        if (ret['unit']) {
          retMsg = uStr + ' ';
          if (Array.isArray(ret['unit'])) {
            var aLen = ret['unit'].length;
            if (aLen === 1) {
              retMsg += ' is a valid unit string and is used, with a ' + 'magnitude of ' + ret['unit'][0]['mag'] + ' to define the unit ' + ret['unit'][0]['unit']['name_'] + '.';
            } else {
              retMsg += ' is a valid unit string and is used, with the ' + 'magnitude shown, to define the following units:';
              listMsg = '<table><th>magnitude</th><th>unit</th>';

              for (var i = 0; i < aLen; i++) {
                var aHash = ret['unit'][i];
                if (aHash['unit']) aHash = aHash['unit'];
                listMsg += '<tr><td>' + aHash['magnitude_'] + '</td>';
                listMsg += '<td>' + aHash['csCode_'] + ' - ' + aHash['name_'] + '</td></tr>';
              }
              listMsg += '</table>';
              valListFld.innerHTML = listMsg;
            }
          } else {

            if (ret['unit']['csUnitString_'] !== uStr) {
              retMsg += ' - ' + ret['unit']['name_'] + ' - ';
            } // end if the returned unit is a predefined unit        }
            retMsg += ' is a valid unit string.';
          } // end if the returned unit is/is not an array
        } else retMsg = ret['msg'];
      } catch (err) {
        retMsg = err.message;
      }

      valFld.innerHTML = retMsg;
    } // end reportUnitStringValidity

    /**
     * This method converts one unit to another
     *
     * @param fromField the ID of the field containing the name of the unit to
     *  be converted
     * @param numField the ID of the field containing the number of "from" units
     *  to be converted to "to" units
     * @param toField the ID of the field containing the name of the unit that
     *  the from field is to be converted to
     * @param decDigits the maximum number of decimal digits to be displayed
     *  for the converted unit.  If not specified, the UCUM.decDigits_ value
     *  (defined in config.js) is used.
     */

  }, {
    key: 'convertUnit',
    value: function convertUnit(fromField, numField, toField, decDigits) {

      if (decDigits === undefined) decDigits = Ucum.decDigits_;

      var fromName = document.getElementById(fromField).value;
      var fromMag = parseFloat(document.getElementById(numField).value);
      var toName = document.getElementById(toField).value;
      var codePos = toName.indexOf(Ucum.codeSep_);
      if (codePos > 0) toName = toName.substr(0, codePos);
      // create a from unit
      var resultMsg = '';

      try {
        var fromUnit = null;
        fromUnit = this.getSpecifiedUnit(fromName)['unit'];
        if (Array.isArray(fromUnit)) {
          fromUnit = fromUnit[0];
          if (fromUnit['unit']) {
            fromUnit = fromUnit['unit'];
          }
        }

        var toUnit = null;
        toUnit = this.getSpecifiedUnit(toName)['unit'];
        if (Array.isArray(toUnit)) {
          toUnit = toUnit[0];
          if (toUnit['unit']) {
            toUnit = toUnit['unit'];
          }
        }
        if (fromUnit && toUnit) {
          try {
            var toMag = toUnit.convertFrom(fromMag, fromUnit);
            toMag = toMag.toFixed(decDigits).replace(/\.?0+$/, "");

            resultMsg = fromMag.toString() + " " + fromUnit.getProperty('name_') + " units = " + toMag.toString() + " " + toUnit.getProperty('name_') + " units.";
          } catch (err) {
            resultMsg = err.message;
          }
        } // end if we have the from and to units
      } catch (err) {
        resultMsg = err.message;
      }

      // Put the message - conversion or error - on the page
      var resultString = document.getElementById("resultString");
      resultString.innerHTML = resultMsg;
    } // end convertUnit

    /**
     * This method takes a unit string and gets (or tries to get) the unit
     * represented by the string.   Using the string as the search criteria, it
     * tries the unit names table first.  If not found there, it tries the
     * unit codes table. If not found there it tries the unit strings table.
     * And if not found there, it tries to parse the string into a valid unit.
     *
     * @param uName the string representing the unit
     * @returns {{unit: the unit found for the string or null if not found,
     *            msg: a message indicating success or failure, with details}}
     */

  }, {
    key: 'getSpecifiedUnit',
    value: function getSpecifiedUnit(uName) {

      uName = uName.trim();
      var utab = UnitTables.getInstance();
      var retMsg = '';
      var theUnit = null;

      // try parsing as a unit string
      try {
        var uStrParser = new UnitString();
        theUnit = uStrParser.parseString(uName);
      } catch (err) {
        console.log('Unit requested for unit string ' + uName + '.' + 'request unsuccessful; error thrown = ' + err.message);
        if (retMsg !== '') retMsg += ' and ';
        retMsg += uName + ' is not a valid unit.';
      }

      // then try by unit name
      if ((theUnit === null || theUnit === undefined) && retMsg === '') {
        try {
          theUnit = utab.getUnitByName(uName);
        } catch (err) {
          console.log('Unit requested for unit string ' + uName + '.' + 'request unsuccessful; error thrown = ' + err.message);
          retMsg = 'An error occurred when trying to find ' + uName + '.';
        }
      }

      // if that didn't work, try by unit code
      if (theUnit === null && retMsg === '') {
        try {
          theUnit = utab.getUnitByCode(uName);
        } catch (err) {
          console.log('Unit requested for unit string ' + uName + '.' + 'request unsuccessful; error thrown = ' + err.message);
          if (retMsg !== '') retMsg += ' and ';
          retMsg += uName + ' is not a valid unit.';
        }
      } // end if no unit nor an error on attempt to find by name

      // if that didn't work, try by unit string
      if ((theUnit === null || theUnit === undefined) && retMsg === '') {
        try {
          theUnit = utab.getUnitByString(uName);
        } catch (err) {
          console.log('Unit requested for unit string ' + uName + '.' + 'request unsuccessful; error thrown = ' + err.message);
          if (retMsg !== '') retMsg += ' and ';
          retMsg += uName + ' is not a valid unit.';
        }
      } // end if no unit nor an error on attempt to find by name or code

      /*  // and finally, try parsing as a unit string
        if ((theUnit === null || theUnit === undefined) && (retMsg === '')) {
          try {
            let uStrParser = new UnitString();
            theUnit = uStrParser.parseString(uName);
          }
          catch(err) {
            console.log(`Unit requested for unit string ${uName}.` +
                'request unsuccessful; error thrown = ' + err.message);
            if (retMsg !== '')
              retMsg += ' and ';
            retMsg += `${uName} is not a valid unit.` ;
          }
        }*/
      if ((theUnit === null || theUnit === undefined) && retMsg === '') {
        retMsg = 'Unable to find unit for name = ' + uName + '.';
      }
      if (retMsg !== '') throw new Error(retMsg);

      return { 'unit': theUnit, 'msg': retMsg };
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
    key: 'getCommensurables',
    value: function getCommensurables(fromField, toField, resultField) {
      var toFld = document.getElementById(toField);
      toFld.innerHTML = '';
      this.toAuto_.setList('');
      var resultString = document.getElementById(resultField);
      resultString.innerHTML = '';

      var fromName = document.getElementById(fromField).value;
      var fromUnit = null;
      var resultMsg = null;
      try {
        fromUnit = this.getSpecifiedUnit(fromName)['unit'];
        if (Array.isArray(fromUnit)) {
          fromUnit = fromUnit[0];
          if (fromUnit['unit']) {
            fromUnit = fromUnit['unit'];
          }
        }
        if (!fromUnit) {
          throw new Error('Could not find unit ' + fromName + '.');
        }
      } catch (err) {
        resultMsg = err.message;
      }
      if (fromUnit) {
        try {
          var fromDim = fromUnit.getProperty('dim_');
          var dimVec = fromDim.getProperty('dimVec_');
          var commUnits = null;
          var utab = UnitTables.getInstance();
          if (dimVec) commUnits = utab.getUnitsByDimension(dimVec);
          // If we can't find any, don't panic.  The user could still enter one
          // that's not on our list but is commensurable.  So if none are found,
          // just move on.   Nothin' to see here.
          if (commUnits) {
            var cLen = commUnits.length;
            var commNames = [];
            for (var i = 0; i < cLen; i++) {
              commNames[i] = commUnits[i].getProperty('csCode_') + Ucum.codeSep_ + commUnits[i].getProperty('name_');
            }this.toAuto_.setList(commNames);
          }
        } catch (err) {
          resultMsg = err.message;
        }
      } // end if we found a unit
      if (resultMsg) {
        resultString.innerHTML = resultMsg;
      }
    } // end getCommensurables

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


},{"./config.js":2,"./functions.js":4,"./ucumJsonDefs.js":8,"./unit.js":10,"./unitString.js":11,"./unitTables.js":12,"fs":13,"path":19}],10:[function(require,module,exports){
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


},{"./config.js":2,"./dimension.js":3,"./functions.js":4,"./unitString.js":11,"is-integer":16}],11:[function(require,module,exports){
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
   * @throws an error if the unit string contains parentheses (not handled yet)
   *  an error if at least one valid unit could not be derived from the string
   *  an error if a non-unit & non-number was parsed as an individual element
   *    from the string (shouldn't happen, but this is a safeguard)
   *  any errors thrown by called methods (see makeUnit,
   *  unit object division, multiplication, and getProperty)
   */


  _createClass(UnitString, [{
    key: 'parseString',
    value: function parseString(uStr) {
      var finalUnit = null;

      // Check for parentheses in unit strings. We assume there aren't any,
      // so if some turn up we need to know so they can be parsed.  For now,
      // block further processing of strings with parentheses.
      var pArray = uStr.split('(');
      if (pArray.length > 1) {
        throw new Error('Unit string (' + uStr + ') contains parentheses, which ' + 'are not handled yet by this package.  Sorry');
      }

      // Call makeUnitsArray to convert the string to an array of unit
      // descriptors with operators.
      var uArray = this.makeUnitsArray(uStr);

      // create a unit object out of each un element
      var uLen = uArray.length;
      for (var u1 = 0; u1 < uLen; u1++) {
        var curCode = uArray[u1]['un'];
        if (curCode) {
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
      // string started with '/'.  Add A first element containing 1 to the
      // array, which will cause the correct computation to be performed (inversion).
      if (uArray1[0] == "/") {
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
      // Don't look for an exponent for H2O - the regex expression pulls
      // out the 2 and messes this stuff up.
      if (!origUnit && uCode.indexOf('m[H2O]') < 0) {
        var res = uCode.match(/([^-+\d]*)([-+\d]*)/);

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


},{"./prefixTables.js":7,"./unitTables.js":12}],12:[function(require,module,exports){
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
     * @type hash - key is the dimension vector (not the objeect, just the
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
     * @throws passes on an error if one is thrown by the called functions
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
     *  Returns a unit object based on the unit's code
     *
     *  @param name the name of the unit to be returned
     *  @returns the unit object or null if it is not found
     */

  }, {
    key: 'getUnitByCode',
    value: function getUnitByCode(uCode) {
      var retUnit = null;
      if (uCode) {
        retUnit = this.unitCodes_[uCode];
        if (retUnit === undefined) retUnit = null;
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


},{"./config.js":2}],13:[function(require,module,exports){

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
'use strict';
var numberIsNan = require('number-is-nan');

module.exports = Number.isFinite || function (val) {
	return !(typeof val !== 'number' || numberIsNan(val) || val === Infinity || val === -Infinity);
};

},{"number-is-nan":18}],16:[function(require,module,exports){
// https://github.com/paulmillr/es6-shim
// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isinteger
var isFinite = require("is-finite");
module.exports = Number.isInteger || function(val) {
  return typeof val === "number" &&
    isFinite(val) &&
    Math.floor(val) === val;
};

},{"is-finite":15}],17:[function(require,module,exports){
var _fs = require('fs')

function readFile (file, options, callback) {
  if (callback == null) {
    callback = options
    options = {}
  }

  if (typeof options === 'string') {
    options = {encoding: options}
  }

  options = options || {}
  var fs = options.fs || _fs

  var shouldThrow = true
  // DO NOT USE 'passParsingErrors' THE NAME WILL CHANGE!!!, use 'throws' instead
  if ('passParsingErrors' in options) {
    shouldThrow = options.passParsingErrors
  } else if ('throws' in options) {
    shouldThrow = options.throws
  }

  fs.readFile(file, options, function (err, data) {
    if (err) return callback(err)

    var obj
    try {
      obj = JSON.parse(data, options ? options.reviver : null)
    } catch (err2) {
      if (shouldThrow) {
        err2.message = file + ': ' + err2.message
        return callback(err2)
      } else {
        return callback(null, null)
      }
    }

    callback(null, obj)
  })
}

function readFileSync (file, options) {
  options = options || {}
  if (typeof options === 'string') {
    options = {encoding: options}
  }

  var fs = options.fs || _fs

  var shouldThrow = true
  // DO NOT USE 'passParsingErrors' THE NAME WILL CHANGE!!!, use 'throws' instead
  if ('passParsingErrors' in options) {
    shouldThrow = options.passParsingErrors
  } else if ('throws' in options) {
    shouldThrow = options.throws
  }

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
  options = options || {}
  var fs = options.fs || _fs

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
  var fs = options.fs || _fs

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

},{"fs":13}],18:[function(require,module,exports){
'use strict';
module.exports = Number.isNaN || function (x) {
	return x !== x;
};

},{}],19:[function(require,module,exports){
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
},{"_process":20}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],22:[function(require,module,exports){
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
},{"./support/isBuffer":21,"_process":20,"inherits":14}]},{},[5])(5)
});