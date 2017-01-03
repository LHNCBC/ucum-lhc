(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ucumPkg = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={"prefixes":[{"code_":"E","name_":"exa","value_":1000000000000000000,"exp_":"18"},{"code_":"G","name_":"giga","value_":1000000000,"exp_":"9"},{"code_":"Gi","name_":"gibi","value_":1073741824,"exp_":null},{"code_":"Ki","name_":"kibi","value_":1024,"exp_":null},{"code_":"M","name_":"mega","value_":1000000,"exp_":"6"},{"code_":"Mi","name_":"mebi","value_":1048576,"exp_":null},{"code_":"P","name_":"peta","value_":1000000000000000,"exp_":"15"},{"code_":"T","name_":"tera","value_":1000000000000,"exp_":"12"},{"code_":"Ti","name_":"tebi","value_":1099511627776,"exp_":null},{"code_":"Y","name_":"yotta","value_":1e+24,"exp_":"24"},{"code_":"Z","name_":"zetta","value_":1e+21,"exp_":"21"},{"code_":"a","name_":"atto","value_":1e-18,"exp_":"-18"},{"code_":"c","name_":"centi","value_":0.01,"exp_":"-2"},{"code_":"d","name_":"deci","value_":0.1,"exp_":"-1"},{"code_":"da","name_":"deka","value_":10,"exp_":"1"},{"code_":"f","name_":"femto","value_":1e-15,"exp_":"-15"},{"code_":"h","name_":"hecto","value_":100,"exp_":"2"},{"code_":"k","name_":"kilo","value_":1000,"exp_":"3"},{"code_":"m","name_":"milli","value_":0.001,"exp_":"-3"},{"code_":"n","name_":"nano","value_":1e-9,"exp_":"-9"},{"code_":"p","name_":"pico","value_":1e-12,"exp_":"-12"},{"code_":"u","name_":"micro","value_":0.000001,"exp_":"-6"},{"code_":"y","name_":"yocto","value_":1.0000000000000001e-24,"exp_":"-24"},{"code_":"z","name_":"zepto","value_":1e-21,"exp_":"-21"}],"units":[{"isBase_":true,"name_":"meter","csCode_":"m","ciCode_":"M","property_":"length","magnitude_":1,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"meters; metres; distance","source_":"UCUM","loincProperty_":"Len","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"second - time","csCode_":"s","ciCode_":"S","property_":"time","magnitude_":1,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"s","class_":null,"isMetric_":false,"variable_":"T","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"seconds","source_":"UCUM","loincProperty_":"Time","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram","csCode_":"g","ciCode_":"G","property_":"mass","magnitude_":1,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"grams; gm; weight; dose; intake","source_":"UCUM","loincProperty_":"Mass","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"radian","csCode_":"rad","ciCode_":"RAD","property_":"plane angle","magnitude_":1,"dim_":{"dimVec_":[0,0,0,1,0,0,0]},"printSymbol_":"rad","class_":null,"isMetric_":false,"variable_":"A","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"radians","source_":"UCUM","loincProperty_":"Angle","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"degree Kelvin","csCode_":"K","ciCode_":"K","property_":"temperature","magnitude_":1,"dim_":{"dimVec_":[0,0,0,0,1,0,0]},"printSymbol_":"K","class_":null,"isMetric_":false,"variable_":"C","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Kelvin","source_":"LOINC","loincProperty_":"Temp","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"coulomb","csCode_":"C","ciCode_":"C","property_":"electric charge","magnitude_":1,"dim_":{"dimVec_":[0,0,0,0,0,1,0]},"printSymbol_":"C","class_":null,"isMetric_":false,"variable_":"Q","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"coulombs","source_":"UCUM","loincProperty_":"","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"candela","csCode_":"cd","ciCode_":"CD","property_":"luminous intensity","magnitude_":1,"dim_":{"dimVec_":[0,0,0,0,0,0,1]},"printSymbol_":"cd","class_":null,"isMetric_":false,"variable_":"F","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"candelas","source_":"UCUM","loincProperty_":"","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"the number ten for arbitrary powers","csCode_":"10*","ciCode_":"10*","property_":"number","magnitude_":"10","dim_":{},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"10^; 10 to the arbitrary powers","source_":"UCUM","loincProperty_":"Num","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"the number ten for arbitrary powers","csCode_":"10^","ciCode_":"10^","property_":"number","magnitude_":"10","dim_":{},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"10*; 10 to the arbitrary power","source_":"UCUM","loincProperty_":"Num","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"the number pi","csCode_":"[pi]","ciCode_":"[PI]","property_":"number","magnitude_":3.141592653589793,"dim_":{},"printSymbol_":"π","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"π","source_":"UCUM","loincProperty_":"","category_":"Constant","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"3.1415926535897932384626433832795028841971693993751058209749445923","baseFactor_":3.141592653589793,"defError_":false},{"isBase_":false,"name_":"","csCode_":"%","ciCode_":"%","property_":"fraction","magnitude_":0.01,"dim_":{},"printSymbol_":"%","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"percents","source_":"UCUM","loincProperty_":"FR; NFR; MFR; CFR; SFR Rto; etc. ","category_":"Clinical","csUnitString_":"10*-2","ciUnitString_":"10*-2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"parts per thousand","csCode_":"[ppth]","ciCode_":"[PPTH]","property_":"fraction","magnitude_":0.001,"dim_":{},"printSymbol_":"ppth","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ppth; 10^-3","source_":"UCUM","loincProperty_":"MCnc; MCnt","category_":"Clinical","csUnitString_":"10*-3","ciUnitString_":"10*-3","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"parts per million","csCode_":"[ppm]","ciCode_":"[PPM]","property_":"fraction","magnitude_":0.000001,"dim_":{},"printSymbol_":"ppm","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ppm; 10^-6","source_":"UCUM","loincProperty_":"MCnt; MCnc; SFr","category_":"Clinical","csUnitString_":"10*-6","ciUnitString_":"10*-6","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"parts per billion","csCode_":"[ppb]","ciCode_":"[PPB]","property_":"fraction","magnitude_":1e-9,"dim_":{},"printSymbol_":"ppb","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ppb; 10^-9","source_":"UCUM","loincProperty_":"MCnt; MCnc; SFr","category_":"Clinical","csUnitString_":"10*-9","ciUnitString_":"10*-9","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"parts per trillion","csCode_":"[pptr]","ciCode_":"[PPTR]","property_":"fraction","magnitude_":1e-12,"dim_":{},"printSymbol_":"pptr","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"pptr; 10^-12","source_":"UCUM","loincProperty_":"MCnt; MCnc; SFr","category_":"Clinical","csUnitString_":"10*-12","ciUnitString_":"10*-12","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"mole","csCode_":"mol","ciCode_":"MOL","property_":"amount of substance","magnitude_":6.0221367e+23,"dim_":{},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"moles","source_":"UCUM","loincProperty_":"Sub","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"steradian - solid angle","csCode_":"sr","ciCode_":"SR","property_":"solid angle","magnitude_":1,"dim_":{"dimVec_":[0,0,0,2,0,0,0]},"printSymbol_":"sr","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"square radian; rad2; rad^2","source_":"UCUM","loincProperty_":"Angle","category_":"Clinical","csUnitString_":"rad2","ciUnitString_":"RAD2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"hertz","csCode_":"Hz","ciCode_":"HZ","property_":"frequency","magnitude_":1,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"Hz","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Herz; frequency; frequencies","source_":"UCUM","loincProperty_":"Freq; Num","category_":"Clinical","csUnitString_":"s-1","ciUnitString_":"S-1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"newton","csCode_":"N","ciCode_":"N","property_":"force","magnitude_":1000,"dim_":{"dimVec_":[1,-2,1,0,0,0,0]},"printSymbol_":"N","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Newtons","source_":"UCUM","loincProperty_":"Force","category_":"Clinical","csUnitString_":"kg.m/s2","ciUnitString_":"KG.M/S2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"picoampere","csCode_":"Pa","ciCode_":"PAL","property_":"pressure","magnitude_":1000,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"Pa","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"picoamperes","source_":"LOINC","loincProperty_":"","category_":"Clinical","csUnitString_":"N/m2","ciUnitString_":"N/M2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"joule","csCode_":"J","ciCode_":"J","property_":"energy","magnitude_":1000,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"J","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"joules","source_":"UCUM","loincProperty_":"Enrg","category_":"Clinical","csUnitString_":"N.m","ciUnitString_":"N.M","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"watt","csCode_":"W","ciCode_":"W","property_":"power","magnitude_":1000,"dim_":{"dimVec_":[2,-3,1,0,0,0,0]},"printSymbol_":"W","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"watts","source_":"UCUM","loincProperty_":"EngRat","category_":"Clinical","csUnitString_":"J/s","ciUnitString_":"J/S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Ampere","csCode_":"A","ciCode_":"A","property_":"electric current","magnitude_":1,"dim_":{"dimVec_":[0,-1,0,0,0,1,0]},"printSymbol_":"A","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Amperes","source_":"UCUM","loincProperty_":"ElpotRat","category_":"Clinical","csUnitString_":"C/s","ciUnitString_":"C/S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"volt","csCode_":"V","ciCode_":"V","property_":"electric potential","magnitude_":1000,"dim_":{"dimVec_":[2,-2,1,0,0,-1,0]},"printSymbol_":"V","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"volts","source_":"UCUM","loincProperty_":"Elpot","category_":"Clinical","csUnitString_":"J/C","ciUnitString_":"J/C","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"farad","csCode_":"F","ciCode_":"F","property_":"electric capacitance","magnitude_":0.001,"dim_":{"dimVec_":[-2,2,-1,0,0,2,0]},"printSymbol_":"F","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"farads; electric capacitance","source_":"UCUM","loincProperty_":"","category_":"Clinical","csUnitString_":"C/V","ciUnitString_":"C/V","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"ohm","csCode_":"Ohm","ciCode_":"OHM","property_":"electric resistance","magnitude_":1000,"dim_":{"dimVec_":[2,-1,1,0,0,-2,0]},"printSymbol_":"Ω","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Ω; resistance","source_":"UCUM","loincProperty_":"","category_":"Clinical","csUnitString_":"V/A","ciUnitString_":"V/A","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"siemens","csCode_":"S","ciCode_":"SIE","property_":"electric conductance","magnitude_":0.001,"dim_":{"dimVec_":[-2,1,-1,0,0,2,0]},"printSymbol_":"S","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Reciprocal ohm; mho; Ω−1; conductance","source_":"UCUM","loincProperty_":"","category_":"Clinical","csUnitString_":"Ohm-1","ciUnitString_":"OHM-1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"weber","csCode_":"Wb","ciCode_":"WB","property_":"magentic flux","magnitude_":1000,"dim_":{"dimVec_":[2,-1,1,0,0,-1,0]},"printSymbol_":"Wb","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"magnetic flux","source_":"UCUM","loincProperty_":"","category_":"Clinical","csUnitString_":"V.s","ciUnitString_":"V.S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"degree Celsius","csCode_":"Cel","ciCode_":"CEL","property_":"temperature","magnitude_":1,"dim_":{"dimVec_":[0,0,0,0,1,0,0]},"printSymbol_":"°C","class_":"si","isMetric_":true,"variable_":null,"cnv_":"Cel","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"synonyms_":"°C","source_":"UCUM","loincProperty_":"Temp","category_":"Clinical","csUnitString_":"K","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"tesla","csCode_":"T","ciCode_":"T","property_":"magnetic flux density","magnitude_":1000,"dim_":{"dimVec_":[0,-1,1,0,0,-1,0]},"printSymbol_":"T","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Teslas; magnetic field","source_":"UCUM","loincProperty_":"","category_":"Clinical","csUnitString_":"Wb/m2","ciUnitString_":"WB/M2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"henry","csCode_":"H","ciCode_":"H","property_":"inductance","magnitude_":1000,"dim_":{"dimVec_":[2,0,1,0,0,-2,0]},"printSymbol_":"H","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"henries; inductance","source_":"UCUM","loincProperty_":"","category_":"Clinical","csUnitString_":"Wb/A","ciUnitString_":"WB/A","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"lumen","csCode_":"lm","ciCode_":"LM","property_":"luminous flux","magnitude_":1,"dim_":{"dimVec_":[0,0,0,2,0,0,1]},"printSymbol_":"lm","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"luminous flux; lumens","source_":"UCUM","loincProperty_":"","category_":"Clinical","csUnitString_":"cd.sr","ciUnitString_":"CD.SR","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"lux","csCode_":"lx","ciCode_":"LX","property_":"illuminance","magnitude_":1,"dim_":{"dimVec_":[-2,0,0,2,0,0,1]},"printSymbol_":"lx","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"illuminance","source_":"UCUM","loincProperty_":"","category_":"Clinical","csUnitString_":"lm/m2","ciUnitString_":"LM/M2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"becquerel","csCode_":"Bq","ciCode_":"BQ","property_":"radioactivity","magnitude_":1,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"Bq","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"activity; radiation; becquerels","source_":"UCUM","loincProperty_":"","category_":"Clinical","csUnitString_":"s-1","ciUnitString_":"S-1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"gray","csCode_":"Gy","ciCode_":"GY","property_":"energy dose","magnitude_":1,"dim_":{"dimVec_":[2,-2,0,0,0,0,0]},"printSymbol_":"Gy","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"absorbed doses; ionizing radiation doses; kerma","source_":"UCUM","loincProperty_":"EngCnt","category_":"Clinical","csUnitString_":"J/kg","ciUnitString_":"J/KG","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"sievert","csCode_":"Sv","ciCode_":"SV","property_":"dose equivalent","magnitude_":1,"dim_":{"dimVec_":[2,-2,0,0,0,0,0]},"printSymbol_":"Sv","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"sieverts; radiation dose quantities; equivalent doses; effective dose; operational dose; committed dose","source_":"UCUM","loincProperty_":"","category_":"Clinical","csUnitString_":"J/kg","ciUnitString_":"J/KG","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"degree - plane angle","csCode_":"deg","ciCode_":"DEG","property_":"plane angle","magnitude_":0.017453292519943295,"dim_":{},"printSymbol_":"°","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"°; degree of arc; arc degree; arcdegree; angle","source_":"UCUM","loincProperty_":"Angle","category_":"Clinical","csUnitString_":"[pi].rad/360","ciUnitString_":"[PI].RAD/360","baseFactorStr_":"2","baseFactor_":"2","defError_":false},{"isBase_":false,"name_":"gon","csCode_":"gon","ciCode_":"GON","property_":"plane angle","magnitude_":0.015707963267948967,"dim_":{},"printSymbol_":"□<sup>g</sup>","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"gon (grade)","source_":"UCUM","loincProperty_":"Angle","category_":"Nonclinical","csUnitString_":"deg","ciUnitString_":"DEG","baseFactorStr_":"0.9","baseFactor_":"0.9","defError_":false},{"isBase_":false,"name_":"arc minute","csCode_":"'","ciCode_":"'","property_":"plane angle","magnitude_":0.0002908882086657216,"dim_":{},"printSymbol_":"'","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"arcminutes; arcmin; arc minutes; arc mins","source_":"UCUM","loincProperty_":"Angle","category_":"Clinical","csUnitString_":"deg/60","ciUnitString_":"DEG/60","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"arc second","csCode_":"''","ciCode_":"''","property_":"plane angle","magnitude_":0.00000484813681109536,"dim_":{},"printSymbol_":"''","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"arcseconds; arcsecs","source_":"UCUM","loincProperty_":"Angle","category_":"Clinical","csUnitString_":"'/60","ciUnitString_":"'/60","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Liters","csCode_":"l","ciCode_":"L","property_":"volume","magnitude_":0.001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"l","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"cubic decimeters; decimeters cubed; decimetres; dm3; dm^3; litres; liters, LT","source_":"UCUM","loincProperty_":"Vol","category_":"Clinical","csUnitString_":"dm3","ciUnitString_":"DM3","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Liters","csCode_":"L","ciCode_":"","property_":"volume","magnitude_":0.001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"cubic decimeters; decimeters cubed; decimetres; dm3; dm^3; litres; liters, LT","source_":"UCUM","loincProperty_":"Vol","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"are","csCode_":"ar","ciCode_":"AR","property_":"area","magnitude_":100,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":"a","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"100 m2; 100 m^s; 100 square meter; meter squared; metre","source_":"UCUM","loincProperty_":"Area","category_":"Clinical","csUnitString_":"m2","ciUnitString_":"M2","baseFactorStr_":"100","baseFactor_":"100","defError_":false},{"isBase_":false,"name_":"minute","csCode_":"min","ciCode_":"MIN","property_":"time","magnitude_":60,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"min","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"minutes","source_":"UCUM","loincProperty_":"Time","category_":"Clinical","csUnitString_":"s","ciUnitString_":"S","baseFactorStr_":"60","baseFactor_":"60","defError_":false},{"isBase_":false,"name_":"hour","csCode_":"h","ciCode_":"HR","property_":"time","magnitude_":3600,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"h","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"hours; hrs; age","source_":"UCUM","loincProperty_":"Time","category_":"Clinical","csUnitString_":"min","ciUnitString_":"MIN","baseFactorStr_":"60","baseFactor_":"60","defError_":false},{"isBase_":false,"name_":"day","csCode_":"d","ciCode_":"D","property_":"time","magnitude_":86400,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"d","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"days; age; dy; 24 hours; 24 hrs","source_":"UCUM","loincProperty_":"Time","category_":"Clinical","csUnitString_":"h","ciUnitString_":"HR","baseFactorStr_":"24","baseFactor_":"24","defError_":false},{"isBase_":false,"name_":"tropical year","csCode_":"a_t","ciCode_":"ANN_T","property_":"time","magnitude_":31556925.216,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"a<sub>t</sub>","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"solar years; a tropical; years","source_":"UCUM","loincProperty_":"Time","category_":"Clinical","csUnitString_":"d","ciUnitString_":"D","baseFactorStr_":"365.24219","baseFactor_":"365.24219","defError_":false},{"isBase_":false,"name_":"mean Julian year","csCode_":"a_j","ciCode_":"ANN_J","property_":"time","magnitude_":31557600,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"a<sub>j</sub>","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mean Julian yr; a julian; years","source_":"UCUM","loincProperty_":"Time","category_":"Clinical","csUnitString_":"d","ciUnitString_":"D","baseFactorStr_":"365.25","baseFactor_":"365.25","defError_":false},{"isBase_":false,"name_":"mean Gregorian year","csCode_":"a_g","ciCode_":"ANN_G","property_":"time","magnitude_":31556952,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"a<sub>g</sub>","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mean Gregorian yr; a gregorian; years","source_":"UCUM","loincProperty_":"Time","category_":"Clinical","csUnitString_":"d","ciUnitString_":"D","baseFactorStr_":"365.2425","baseFactor_":"365.2425","defError_":false},{"isBase_":false,"name_":"year","csCode_":"a","ciCode_":"ANN","property_":"time","magnitude_":31557600,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"a","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"years; a; yr, yrs; annum","source_":"UCUM","loincProperty_":"Time","category_":"Clinical","csUnitString_":"a_j","ciUnitString_":"ANN_J","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"week","csCode_":"wk","ciCode_":"WK","property_":"time","magnitude_":604800,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"wk","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"weeks; wks","source_":"UCUM","loincProperty_":"Time","category_":"Clinical","csUnitString_":"d","ciUnitString_":"D","baseFactorStr_":"7","baseFactor_":"7","defError_":false},{"isBase_":false,"name_":"synodal month","csCode_":"mo_s","ciCode_":"MO_S","property_":"time","magnitude_":2551442.976,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"mo<sub>s</sub>","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Moon; synodic month; lunar month; mo-s; mo s","source_":"UCUM","loincProperty_":"Time","category_":"Nonclinical","csUnitString_":"d","ciUnitString_":"D","baseFactorStr_":"29.53059","baseFactor_":"29.53059","defError_":false},{"isBase_":false,"name_":"mean Julian month","csCode_":"mo_j","ciCode_":"MO_J","property_":"time","magnitude_":2629800,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"mo<sub>j</sub>","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mo-julian; mo Julian","source_":"UCUM","loincProperty_":"Time","category_":"Clinical","csUnitString_":"a_j/12","ciUnitString_":"ANN_J/12","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"mean Gregorian month","csCode_":"mo_g","ciCode_":"MO_G","property_":"time","magnitude_":2629746,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"mo<sub>g</sub>","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"months month-gregorian; mo-gregorian","source_":"UCUM","loincProperty_":"Time","category_":"Clinical","csUnitString_":"a_g/12","ciUnitString_":"ANN_G/12","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"month","csCode_":"mo","ciCode_":"MO","property_":"time","magnitude_":2629800,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"mo","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"months; duration","source_":"UCUM","loincProperty_":"Time","category_":"Clinical","csUnitString_":"mo_j","ciUnitString_":"MO_J","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"metric ton","csCode_":"t","ciCode_":"TNE","property_":"mass","magnitude_":1000000,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"t","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"tonnes; megagrams; tons","source_":"UCUM","loincProperty_":"Mass","category_":"Nonclinical","csUnitString_":"kg","ciUnitString_":"KG","baseFactorStr_":"1e3","baseFactor_":1000,"defError_":false},{"isBase_":false,"name_":"bar","csCode_":"bar","ciCode_":"BAR","property_":"pressure","magnitude_":3.15576e+27,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"bar","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"bars","source_":"UCUM","loincProperty_":"Pres","category_":"Nonclinical","csUnitString_":"Pa","ciUnitString_":"PAL","baseFactorStr_":"1e5","baseFactor_":100000,"defError_":false},{"isBase_":false,"name_":"unified atomic mass unit","csCode_":"u","ciCode_":"AMU","property_":"mass","magnitude_":1.6605402e-24,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"u","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"unified atomic mass units;  amu; Dalton; Da","source_":"UCUM","loincProperty_":"Mass","category_":"Clinical","csUnitString_":"g","ciUnitString_":"G","baseFactorStr_":"1.6605402e-24","baseFactor_":1.6605402e-24,"defError_":false},{"isBase_":false,"name_":"astronomic unit","csCode_":"AU","ciCode_":"ASU","property_":"length","magnitude_":149597870691,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"AU","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"AU","source_":"UCUM","loincProperty_":"Len","category_":"Clinical","csUnitString_":"Mm","ciUnitString_":"MAM","baseFactorStr_":"149597.870691","baseFactor_":"149597.870691","defError_":false},{"isBase_":false,"name_":"parsec","csCode_":"pc","ciCode_":"PRS","property_":"length","magnitude_":30856780000000000,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"pc","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"parsecs","source_":"UCUM","loincProperty_":"Len","category_":"Clinical","csUnitString_":"m","ciUnitString_":"M","baseFactorStr_":"3.085678e16","baseFactor_":30856780000000000,"defError_":false},{"isBase_":false,"name_":"velocity of light in a vacuum","csCode_":"[c]","ciCode_":"[C]","property_":"velocity","magnitude_":299792458,"dim_":{"dimVec_":[1,-1,0,0,0,0,0]},"printSymbol_":"<i>c</i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"speed of light","source_":"UCUM","loincProperty_":"Vel","category_":"Constant","csUnitString_":"m/s","ciUnitString_":"M/S","baseFactorStr_":"299792458","baseFactor_":"299792458","defError_":false},{"isBase_":false,"name_":"Planck constant","csCode_":"[h]","ciCode_":"[H]","property_":"action","magnitude_":6.6260755e-31,"dim_":{"dimVec_":[2,-1,1,0,0,0,0]},"printSymbol_":"<i>h</i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Planck's constant","source_":"UCUM","loincProperty_":"","category_":"Constant","csUnitString_":"J.s","ciUnitString_":"J.S","baseFactorStr_":"6.6260755e-34","baseFactor_":6.6260755e-34,"defError_":false},{"isBase_":false,"name_":"Boltzmann constant","csCode_":"[k]","ciCode_":"[K]","property_":"(unclassified)","magnitude_":1.380658e-20,"dim_":{"dimVec_":[2,-2,1,0,-1,0,0]},"printSymbol_":"<i>k</i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"k; kB","source_":"UCUM","loincProperty_":"","category_":"Constant","csUnitString_":"J/K","ciUnitString_":"J/K","baseFactorStr_":"1.380658e-23","baseFactor_":1.380658e-23,"defError_":false},{"isBase_":false,"name_":"permittivity of vacuum - electric","csCode_":"[eps_0]","ciCode_":"[EPS_0]","property_":"electric permittivity","magnitude_":8.854187817000001e-15,"dim_":{"dimVec_":[-3,2,-1,0,0,2,0]},"printSymbol_":"<i>ε<sub><r>0</r></sub></i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ε0; Electric Constant; vacuum permittivity; permittivity of free space ","source_":"UCUM","loincProperty_":"","category_":"Constant","csUnitString_":"F/m","ciUnitString_":"F/M","baseFactorStr_":"8.854187817e-12","baseFactor_":8.854187817e-12,"defError_":false},{"isBase_":false,"name_":"permeability of vacuum - magnetic","csCode_":"[mu_0]","ciCode_":"[MU_0]","property_":"magnetic permeability","magnitude_":0.0012566370614359172,"dim_":{"dimVec_":[1,0,1,0,0,-2,0]},"printSymbol_":"<i>μ<sub><r>0</r></sub></i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"μ0; vacuum permeability; permeability of free space; magnetic constant","source_":"UCUM","loincProperty_":"","category_":"Constant","csUnitString_":"N/A2","ciUnitString_":"4.[PI].10*-7.N/A2","baseFactorStr_":"1","baseFactor_":0.0000012566370614359173,"defError_":false},{"isBase_":false,"name_":"elementary charge","csCode_":"[e]","ciCode_":"[E]","property_":"electric charge","magnitude_":1.60217733e-19,"dim_":{"dimVec_":[0,0,0,0,0,1,0]},"printSymbol_":"<i>e</i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"e; q; electric charge","source_":"UCUM","loincProperty_":"","category_":"Constant","csUnitString_":"C","ciUnitString_":"C","baseFactorStr_":"1.60217733e-19","baseFactor_":1.60217733e-19,"defError_":false},{"isBase_":false,"name_":"electronvolt","csCode_":"eV","ciCode_":"EV","property_":"energy","magnitude_":1.60217733e-16,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"eV","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Electron Volts; electronvolts","source_":"UCUM","loincProperty_":"Eng","category_":"Clinical","csUnitString_":"[e].V","ciUnitString_":"[E].V","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"electron mass","csCode_":"[m_e]","ciCode_":"[M_E]","property_":"mass","magnitude_":9.1093897e-28,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"<i>m<sub><r>e</r></sub></i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"electron rest mass; me","source_":"UCUM","loincProperty_":"Mass","category_":"Constant","csUnitString_":"g","ciUnitString_":"g","baseFactorStr_":"9.1093897e-28","baseFactor_":9.1093897e-28,"defError_":false},{"isBase_":false,"name_":"proton mass","csCode_":"[m_p]","ciCode_":"[M_P]","property_":"mass","magnitude_":1.6726231e-24,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"<i>m<sub><r>p</r></sub></i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mp","source_":"UCUM","loincProperty_":"Mass","category_":"Constant","csUnitString_":"g","ciUnitString_":"g","baseFactorStr_":"1.6726231e-24","baseFactor_":1.6726231e-24,"defError_":false},{"isBase_":false,"name_":"Newtonian constant of gravitation","csCode_":"[G]","ciCode_":"[GC]","property_":"(unclassified)","magnitude_":6.67259e-14,"dim_":{"dimVec_":[3,-2,-1,0,0,0,0]},"printSymbol_":"<i>G</i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"G; gravitational constant; Newton's constant","source_":"UCUM","loincProperty_":"","category_":"Constant","csUnitString_":"m3.kg-1.s-2","ciUnitString_":"M3.KG-1.S-2","baseFactorStr_":"6.67259e-11","baseFactor_":6.67259e-11,"defError_":false},{"isBase_":false,"name_":"standard acceleration of free fall","csCode_":"[g]","ciCode_":"[G]","property_":"acceleration","magnitude_":9.80665,"dim_":{"dimVec_":[1,-2,0,0,0,0,0]},"printSymbol_":"<i>g<sub>n</sub></i>","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"standard gravity; g; ɡ0; ɡn","source_":"UCUM","loincProperty_":"Accel","category_":"Constant","csUnitString_":"m/s2","ciUnitString_":"M/S2","baseFactorStr_":"980665e-5","baseFactor_":"9.80665","defError_":false},{"isBase_":false,"name_":"Torr","csCode_":"Torr","ciCode_":"Torr","property_":"pressure","magnitude_":3.19757382e+27,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"Torr","class_":"const","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"torrs","source_":"UCUM","loincProperty_":"Pres","category_":"Clinical","csUnitString_":"Pa","ciUnitString_":"PAL","baseFactorStr_":"133.322","baseFactor_":"133.322","defError_":false},{"isBase_":false,"name_":"standard atmosphere","csCode_":"atm","ciCode_":"ATM","property_":"pressure","magnitude_":3.19757382e+27,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"atm","class_":"const","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"reference pressure; atmos; std atmosphere","source_":"UCUM","loincProperty_":"Pres","category_":"Clinical","csUnitString_":"Pa","ciUnitString_":"PAL","baseFactorStr_":"101325","baseFactor_":"101325","defError_":false},{"isBase_":false,"name_":"light-year","csCode_":"[ly]","ciCode_":"[LY]","property_":"length","magnitude_":9460730472580800,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"l.y.","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"light years; ly","source_":"UCUM","loincProperty_":"Len","category_":"Constant","csUnitString_":"[c].a_j","ciUnitString_":"[C].ANN_J","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"gram-force","csCode_":"gf","ciCode_":"GF","property_":"force","magnitude_":9.80665,"dim_":{"dimVec_":[1,-2,1,0,0,0,0]},"printSymbol_":"gf","class_":"const","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Newtons; gram forces","source_":"UCUM","loincProperty_":"Force","category_":"Clinical","csUnitString_":"g.[g]","ciUnitString_":"G.[G]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Kayser","csCode_":"Ky","ciCode_":"KY","property_":"lineic number","magnitude_":100,"dim_":{"dimVec_":[-1,0,0,0,0,0,0]},"printSymbol_":"K","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"wavenumbers","source_":"UCUM","loincProperty_":"InvLen","category_":"Clinical","csUnitString_":"cm-1","ciUnitString_":"CM-1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Gal","csCode_":"Gal","ciCode_":"GL","property_":"acceleration","magnitude_":0.01,"dim_":{"dimVec_":[1,-2,0,0,0,0,0]},"printSymbol_":"Gal","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"galileo","source_":"UCUM","loincProperty_":"Accel","category_":"Clinical","csUnitString_":"cm/s2","ciUnitString_":"CM/S2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"dyne","csCode_":"dyn","ciCode_":"DYN","property_":"force","magnitude_":0.01,"dim_":{"dimVec_":[1,-2,1,0,0,0,0]},"printSymbol_":"dyn","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"","source_":"UCUM","loincProperty_":"Force","category_":"Clinical","csUnitString_":"g.cm/s2","ciUnitString_":"G.CM/S2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"erg","csCode_":"erg","ciCode_":"ERG","property_":"energy","magnitude_":0.0001,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"erg","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"10^-7 Joules, 10-7 Joules; 100 nJ; 100 nanoJoules; 1 dyne cm; 1 g.cm2/s2","source_":"UCUM","loincProperty_":"Eng","category_":"Clinical","csUnitString_":"dyn.cm","ciUnitString_":"DYN.CM","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Poise","csCode_":"P","ciCode_":"P","property_":"dynamic viscosity","magnitude_":100,"dim_":{"dimVec_":[-1,-1,1,0,0,0,0]},"printSymbol_":"P","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"dynamic viscosity","source_":"UCUM","loincProperty_":"Visc","category_":"Clinical","csUnitString_":"dyn.s/cm2","ciUnitString_":"DYN.S/CM2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Biot","csCode_":"Bi","ciCode_":"BI","property_":"electric current","magnitude_":10,"dim_":{"dimVec_":[0,-1,0,0,0,1,0]},"printSymbol_":"Bi","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Bi; abamperes; abA","source_":"UCUM","loincProperty_":"ElpotRat","category_":"Clinical","csUnitString_":"A","ciUnitString_":"A","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"Stokes","csCode_":"St","ciCode_":"ST","property_":"kinematic viscosity","magnitude_":0.0001,"dim_":{"dimVec_":[2,-1,0,0,0,0,0]},"printSymbol_":"St","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kinematic viscosity","source_":"UCUM","loincProperty_":"Visc","category_":"Clinical","csUnitString_":"cm2/s","ciUnitString_":"CM2/S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Maxwell","csCode_":"Mx","ciCode_":"MX","property_":"flux of magnetic induction","magnitude_":0.00001,"dim_":{"dimVec_":[2,-1,1,0,0,-1,0]},"printSymbol_":"Mx","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"magnetix flux","source_":"UCUM","loincProperty_":"","category_":"Clinical","csUnitString_":"Wb","ciUnitString_":"WB","baseFactorStr_":"1e-8","baseFactor_":1e-8,"defError_":false},{"isBase_":false,"name_":"Gauss","csCode_":"G","ciCode_":"GS","property_":"magnetic flux density","magnitude_":0.1,"dim_":{"dimVec_":[0,-1,1,0,0,-1,0]},"printSymbol_":"Gs","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"magnetic field; magnetic flux density; induction; B","source_":"UCUM","loincProperty_":"magnetic","category_":"Clinical","csUnitString_":"T","ciUnitString_":"T","baseFactorStr_":"1e-4","baseFactor_":0.0001,"defError_":false},{"isBase_":false,"name_":"Oersted","csCode_":"Oe","ciCode_":"OE","property_":"magnetic field intensity","magnitude_":79.57747154594767,"dim_":{"dimVec_":[-1,-1,0,0,0,1,0]},"printSymbol_":"Oe","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"H magnetic B field","source_":"UCUM","loincProperty_":"","category_":"Clinical","csUnitString_":"A/m","ciUnitString_":"/[PI].A/M","baseFactorStr_":"250","baseFactor_":79.57747154594767,"defError_":false},{"isBase_":false,"name_":"Gilbert","csCode_":"Gb","ciCode_":"GB","property_":"magnetic tension","magnitude_":0.7957747154594768,"dim_":{"dimVec_":[0,-1,0,0,0,1,0]},"printSymbol_":"Gb","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Gi; magnetomotive force","source_":"UCUM","loincProperty_":"","category_":"Clinical","csUnitString_":"Oe.cm","ciUnitString_":"OE.CM","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"stilb","csCode_":"sb","ciCode_":"SB","property_":"lum. intensity density","magnitude_":8640000,"dim_":{"dimVec_":[-2,1,0,0,0,0,0]},"printSymbol_":"sb","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"","source_":"UCUM","loincProperty_":"","category_":"Obsolete","csUnitString_":"cd/cm2","ciUnitString_":"CD/CM2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Lambert","csCode_":"Lmb","ciCode_":"LMB","property_":"brightness","magnitude_":2750197.4166279514,"dim_":{"dimVec_":[-2,1,0,0,0,0,0]},"printSymbol_":"L","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"luminance; lamberts","source_":"UCUM","loincProperty_":"","category_":"Clinical","csUnitString_":"cd/cm2/[pi]","ciUnitString_":"CD/CM2/[PI]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"phot","csCode_":"ph","ciCode_":"PHT","property_":"illuminance","magnitude_":0.0001,"dim_":{"dimVec_":[-2,0,0,2,0,0,1]},"printSymbol_":"ph","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"phots","source_":"UCUM","loincProperty_":"","category_":"Clinical","csUnitString_":"lx","ciUnitString_":"LX","baseFactorStr_":"1e-4","baseFactor_":0.0001,"defError_":false},{"isBase_":false,"name_":"Curie","csCode_":"Ci","ciCode_":"CI","property_":"radioactivity","magnitude_":37000000000,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"Ci","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"curies","source_":"UCUM","loincProperty_":"","category_":"Obsolete","csUnitString_":"Bq","ciUnitString_":"BQ","baseFactorStr_":"37e9","baseFactor_":37000000000,"defError_":false},{"isBase_":false,"name_":"Roentgen","csCode_":"R","ciCode_":"ROE","property_":"ion dose","magnitude_":2.58e-7,"dim_":{"dimVec_":[0,0,-1,0,0,1,0]},"printSymbol_":"R","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"röntgen; Roentgens","source_":"UCUM","loincProperty_":"","category_":"Clinical","csUnitString_":"C/kg","ciUnitString_":"C/KG","baseFactorStr_":"2.58e-4","baseFactor_":0.000258,"defError_":false},{"isBase_":false,"name_":"radiation absorbed dose","csCode_":"RAD","ciCode_":"[RAD]","property_":"energy dose","magnitude_":0.01,"dim_":{"dimVec_":[2,-2,0,0,0,0,0]},"printSymbol_":"RAD","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"doses","source_":"UCUM","loincProperty_":"","category_":"Clinical","csUnitString_":"erg/g","ciUnitString_":"ERG/G","baseFactorStr_":"100","baseFactor_":"100","defError_":false},{"isBase_":false,"name_":"radiation equivalent man","csCode_":"REM","ciCode_":"[REM]","property_":"dose equivalent","magnitude_":0.01,"dim_":{"dimVec_":[2,-2,0,0,0,0,0]},"printSymbol_":"REM","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Roentgen Equivalent in Man; rems;  dose equivalents","source_":"UCUM","loincProperty_":"","category_":"Clinical","csUnitString_":"RAD","ciUnitString_":"[RAD]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"inch - international","csCode_":"[in_i]","ciCode_":"[IN_I]","property_":"length","magnitude_":0.025400000000000002,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"in","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"inches; in; international inch; body height","source_":"UCUM","loincProperty_":"Len","category_":"Clinical","csUnitString_":"cm","ciUnitString_":"CM","baseFactorStr_":"254e-2","baseFactor_":"2.54","defError_":false},{"isBase_":false,"name_":"foot - international","csCode_":"[ft_i]","ciCode_":"[FT_I]","property_":"length","magnitude_":0.3048,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"ft","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ft; fts; foot; international foot; feet; international feet; height","source_":"UCUM","loincProperty_":"Len","category_":"Clinical","csUnitString_":"[in_i]","ciUnitString_":"[IN_I]","baseFactorStr_":"12","baseFactor_":"12","defError_":false},{"isBase_":false,"name_":"yard - international","csCode_":"[yd_i]","ciCode_":"[YD_I]","property_":"length","magnitude_":0.9144000000000001,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"yd","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"international yards; yds; distance","source_":"UCUM","loincProperty_":"Len","category_":"Clinical","csUnitString_":"[ft_i]","ciUnitString_":"[FT_I]","baseFactorStr_":"3","baseFactor_":"3","defError_":false},{"isBase_":false,"name_":"mile - international","csCode_":"[mi_i]","ciCode_":"[MI_I]","property_":"length","magnitude_":1609.344,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"mi","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"international miles; mi I; statute mile","source_":"UCUM","loincProperty_":"Len","category_":"Clinical","csUnitString_":"[ft_i]","ciUnitString_":"[FT_I]","baseFactorStr_":"5280","baseFactor_":"5280","defError_":false},{"isBase_":false,"name_":"fathom - international","csCode_":"[fth_i]","ciCode_":"[FTH_I]","property_":"depth of water","magnitude_":1.8288000000000002,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"fth","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"international fathoms","source_":"UCUM","loincProperty_":"Len","category_":"Nonclinical","csUnitString_":"[ft_i]","ciUnitString_":"[FT_I]","baseFactorStr_":"6","baseFactor_":"6","defError_":false},{"isBase_":false,"name_":"nautical mile - international","csCode_":"[nmi_i]","ciCode_":"[NMI_I]","property_":"length","magnitude_":1852,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"n.mi","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nautical mile; nautical miles; international nautical mile; international nautical miles; nm; n.m.; nmi","source_":"UCUM","loincProperty_":"Len","category_":"Nonclinical","csUnitString_":"m","ciUnitString_":"M","baseFactorStr_":"1852","baseFactor_":"1852","defError_":false},{"isBase_":false,"name_":"knot - international","csCode_":"[kn_i]","ciCode_":"[KN_I]","property_":"velocity","magnitude_":0.5144444444444445,"dim_":{"dimVec_":[1,-1,0,0,0,0,0]},"printSymbol_":"knot","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kn; kt; international knots","source_":"UCUM","loincProperty_":"Vel","category_":"Nonclinical","csUnitString_":"[nmi_i]/h","ciUnitString_":"[NMI_I]/H","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"square inch - international","csCode_":"[sin_i]","ciCode_":"[SIN_I]","property_":"area","magnitude_":0.0006451600000000001,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"in2; in^2; inches squared; sq inch; inches squared","source_":"UCUM","loincProperty_":"Area","category_":"Clinical","csUnitString_":"[in_i]2","ciUnitString_":"[IN_I]2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"square foot - international","csCode_":"[sft_i]","ciCode_":"[SFT_I]","property_":"area","magnitude_":0.09290304,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ft2; ft^2; ft squared; sq ft; square feet; feet squared","source_":"UCUM","loincProperty_":"Area","category_":"Clinical","csUnitString_":"[ft_i]2","ciUnitString_":"[FT_I]2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"square yard - international","csCode_":"[syd_i]","ciCode_":"[SYD_I]","property_":"area","magnitude_":0.8361273600000002,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"yd2; yd^2; sq. yds; yards squared","source_":"UCUM","loincProperty_":"Area","category_":"Clinical","csUnitString_":"[yd_i]2","ciUnitString_":"[YD_I]2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"cubic inch - international","csCode_":"[cin_i]","ciCode_":"[CIN_I]","property_":"volume","magnitude_":0.000016387064000000003,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"in3; in^3; in*3; inches^3; inches*3; cu. in; cu in; cubic inches; inches cubed; cin","source_":"UCUM","loincProperty_":"Vol","category_":"Clinical","csUnitString_":"[in_i]3","ciUnitString_":"[IN_I]3","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"cubic foot - international","csCode_":"[cft_i]","ciCode_":"[CFT_I]","property_":"volume","magnitude_":0.028316846592000004,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ft3; ft^3; ft*3; cu. ft; cubic feet; cubed; [ft_i]3","source_":"UCUM","loincProperty_":"Vol","category_":"Clinical","csUnitString_":"[ft_i]3","ciUnitString_":"[FT_I]3","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"cubic yard - international","csCode_":"[cyd_i]","ciCode_":"[CYD_I]","property_":"volume","magnitude_":0.7645548579840002,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"cu.yd","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"cubic yards; cubic yds; cu yards; CYs; yards^3; yd^3; yds^3; yd3; yds3","source_":"UCUM","loincProperty_":"Vol","category_":"Nonclinical","csUnitString_":"[yd_i]3","ciUnitString_":"[YD_I]3","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"board foot - international","csCode_":"[bf_i]","ciCode_":"[BF_I]","property_":"volume","magnitude_":0.002359737216,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"BDFT; FBM; BF; board feet","source_":"UCUM","loincProperty_":"Vol","category_":"Nonclinical","csUnitString_":"[in_i]3","ciUnitString_":"[IN_I]3","baseFactorStr_":"144","baseFactor_":"144","defError_":false},{"isBase_":false,"name_":"cord - international","csCode_":"[cr_i]","ciCode_":"[CR_I]","property_":"volume","magnitude_":3.6245563637760005,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"crd I; international cords","source_":"UCUM","loincProperty_":"Vol","category_":"Nonclinical","csUnitString_":"[ft_i]3","ciUnitString_":"[FT_I]3","baseFactorStr_":"128","baseFactor_":"128","defError_":false},{"isBase_":false,"name_":"mil - international","csCode_":"[mil_i]","ciCode_":"[MIL_I]","property_":"length","magnitude_":0.000025400000000000004,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"mil","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"thou, thousandth; mils","source_":"UCUM","loincProperty_":"Len","category_":"Clinical","csUnitString_":"[in_i]","ciUnitString_":"[IN_I]","baseFactorStr_":"1e-3","baseFactor_":0.001,"defError_":false},{"isBase_":false,"name_":"circular mil - international","csCode_":"[cml_i]","ciCode_":"[CML_I]","property_":"area","magnitude_":5.067074790974979e-10,"dim_":{},"printSymbol_":"circ.mil","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"circular mils; cml i","source_":"UCUM","loincProperty_":"Area","category_":"Clinical","csUnitString_":"[pi]/4.[mil_i]2","ciUnitString_":"[PI]/4.[MIL_I]2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"hand - international","csCode_":"[hd_i]","ciCode_":"[HD_I]","property_":"height of horses","magnitude_":0.10160000000000001,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"hd","class_":"intcust","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"","source_":"UCUM","loincProperty_":"Len","category_":"Nonclinical","csUnitString_":"[in_i]","ciUnitString_":"[IN_I]","baseFactorStr_":"4","baseFactor_":"4","defError_":false},{"isBase_":false,"name_":"foot - US","csCode_":"[ft_us]","ciCode_":"[FT_US]","property_":"length","magnitude_":0.3048006096012192,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"ft<sub>us</sub>","class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"US foot; foot US; us ft; ft us; height; visual distance","source_":"UCUM","loincProperty_":"Len","category_":"Obsolete","csUnitString_":"m/3937","ciUnitString_":"M/3937","baseFactorStr_":"1200","baseFactor_":"1200","defError_":false},{"isBase_":false,"name_":"yard - US","csCode_":"[yd_us]","ciCode_":"[YD_US]","property_":"length","magnitude_":0.9144018288036575,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"US yards; us yds; distance","source_":"UCUM","loincProperty_":"Len; Nrat","category_":"Obsolete","csUnitString_":"[ft_us]","ciUnitString_":"[FT_US]","baseFactorStr_":"3","baseFactor_":"3","defError_":false},{"isBase_":false,"name_":"inch - US","csCode_":"[in_us]","ciCode_":"[IN_US]","property_":"length","magnitude_":0.0254000508001016,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"US inches; in us; us in;  inch US","source_":"UCUM","loincProperty_":"Len","category_":"Obsolete","csUnitString_":"[ft_us]/12","ciUnitString_":"[FT_US]/12","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"rod - US","csCode_":"[rd_us]","ciCode_":"[RD_US]","property_":"length","magnitude_":5.029210058420117,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"US rod; US rods; rd US; US rd","source_":"UCUM","loincProperty_":"Len","category_":"Obsolete","csUnitString_":"[ft_us]","ciUnitString_":"[FT_US]","baseFactorStr_":"16.5","baseFactor_":"16.5","defError_":false},{"isBase_":false,"name_":"Gunter's chain - US","csCode_":"[ch_us]","ciCode_":"[CH_US]","property_":"length","magnitude_":20.116840233680467,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"surveyor's chain; Surveyor's chain USA; Gunter’s measurement; surveyor’s measurement; Gunter's Chain USA","source_":"UCUM","loincProperty_":"Len","category_":"Obsolete","csUnitString_":"[rd_us]","ciUnitString_":"[RD_US]","baseFactorStr_":"4","baseFactor_":"4","defError_":false},{"isBase_":false,"name_":"link for Gunter's chain - US","csCode_":"[lk_us]","ciCode_":"[LK_US]","property_":"length","magnitude_":0.20116840233680466,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Links for Gunter's Chain USA","source_":"UCUM","loincProperty_":"Len","category_":"Obsolete","csUnitString_":"[ch_us]/100","ciUnitString_":"[CH_US]/100","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Ramden's chain - US","csCode_":"[rch_us]","ciCode_":"[RCH_US]","property_":"length","magnitude_":30.480060960121918,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Ramsden's chain; engineer's chain","source_":"UCUM","loincProperty_":"Len","category_":"Obsolete","csUnitString_":"[ft_us]","ciUnitString_":"[FT_US]","baseFactorStr_":"100","baseFactor_":"100","defError_":false},{"isBase_":false,"name_":"link for Ramden's chain - US","csCode_":"[rlk_us]","ciCode_":"[RLK_US]","property_":"length","magnitude_":0.3048006096012192,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"link for Ramsden's chain","source_":"UCUM","loincProperty_":"Len","category_":"Obsolete","csUnitString_":"[rch_us]/100","ciUnitString_":"[RCH_US]/100","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"fathom - US","csCode_":"[fth_us]","ciCode_":"[FTH_US]","property_":"length","magnitude_":1.828803657607315,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"US fathoms; fathom USA; fth us","source_":"UCUM","loincProperty_":"Len","category_":"Obsolete","csUnitString_":"[ft_us]","ciUnitString_":"[FT_US]","baseFactorStr_":"6","baseFactor_":"6","defError_":false},{"isBase_":false,"name_":"furlong - US","csCode_":"[fur_us]","ciCode_":"[FUR_US]","property_":"length","magnitude_":201.16840233680466,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"US furlongs; fur us","source_":"UCUM","loincProperty_":"Len","category_":"Nonclinical","csUnitString_":"[rd_us]","ciUnitString_":"[RD_US]","baseFactorStr_":"40","baseFactor_":"40","defError_":false},{"isBase_":false,"name_":"mile - US","csCode_":"[mi_us]","ciCode_":"[MI_US]","property_":"length","magnitude_":1609.3472186944373,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"U.S. Survey Miles; US statute miles; survey mi; US mi; distance","source_":"UCUM","loincProperty_":"Len","category_":"Nonclinical","csUnitString_":"[fur_us]","ciUnitString_":"[FUR_US]","baseFactorStr_":"8","baseFactor_":"8","defError_":false},{"isBase_":false,"name_":"acre - US","csCode_":"[acr_us]","ciCode_":"[ACR_US]","property_":"area","magnitude_":4046.872609874252,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Acre USA Survey; Acre USA; survey acre","source_":"UCUM","loincProperty_":"Area","category_":"Nonclinical","csUnitString_":"[rd_us]2","ciUnitString_":"[RD_US]2","baseFactorStr_":"160","baseFactor_":"160","defError_":false},{"isBase_":false,"name_":"square rod - US","csCode_":"[srd_us]","ciCode_":"[SRD_US]","property_":"area","magnitude_":25.292953811714074,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"rod2; rod^2; sq. rod; rods squared","source_":"UCUM","loincProperty_":"Area","category_":"Nonclinical","csUnitString_":"[rd_us]2","ciUnitString_":"[RD_US]2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"square mile - US","csCode_":"[smi_us]","ciCode_":"[SMI_US]","property_":"area","magnitude_":2589998.470319521,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mi2; mi^2; sq mi; miles squared","source_":"UCUM","loincProperty_":"Area","category_":"Nonclinical","csUnitString_":"[mi_us]2","ciUnitString_":"[MI_US]2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"section","csCode_":"[sct]","ciCode_":"[SCT]","property_":"area","magnitude_":2589998.470319521,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"sct","source_":"UCUM","loincProperty_":"Area","category_":"Nonclinical","csUnitString_":"[mi_us]2","ciUnitString_":"[MI_US]2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"township","csCode_":"[twp]","ciCode_":"[TWP]","property_":"area","magnitude_":93239944.93150276,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"twp","source_":"UCUM","loincProperty_":"Area","category_":"Nonclinical","csUnitString_":"[sct]","ciUnitString_":"[SCT]","baseFactorStr_":"36","baseFactor_":"36","defError_":false},{"isBase_":false,"name_":"mil - US","csCode_":"[mil_us]","ciCode_":"[MIL_US]","property_":"length","magnitude_":0.0000254000508001016,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"thou, thousandth; mils","source_":"UCUM","loincProperty_":"Len","category_":"Obsolete","csUnitString_":"[in_us]","ciUnitString_":"[IN_US]","baseFactorStr_":"1e-3","baseFactor_":0.001,"defError_":false},{"isBase_":false,"name_":"inch - British","csCode_":"[in_br]","ciCode_":"[IN_BR]","property_":"length","magnitude_":0.025399980000000003,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"imperial inches; imp in; br in; british inches","source_":"UCUM","loincProperty_":"Len","category_":"Obsolete","csUnitString_":"cm","ciUnitString_":"CM","baseFactorStr_":"2.539998","baseFactor_":"2.539998","defError_":false},{"isBase_":false,"name_":"foot - British","csCode_":"[ft_br]","ciCode_":"[FT_BR]","property_":"length","magnitude_":0.30479976000000003,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"British Foot; Imperial Foot; feet; imp fts; br fts","source_":"UCUM","loincProperty_":"Len","category_":"Obsolete","csUnitString_":"[in_br]","ciUnitString_":"[IN_BR]","baseFactorStr_":"12","baseFactor_":"12","defError_":false},{"isBase_":false,"name_":"rod - British","csCode_":"[rd_br]","ciCode_":"[RD_BR]","property_":"length","magnitude_":5.02919604,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"British rods; br rd","source_":"UCUM","loincProperty_":"Len","category_":"Obsolete","csUnitString_":"[ft_br]","ciUnitString_":"[FT_BR]","baseFactorStr_":"16.5","baseFactor_":"16.5","defError_":false},{"isBase_":false,"name_":"Gunter's chain - British","csCode_":"[ch_br]","ciCode_":"[CH_BR]","property_":"length","magnitude_":20.11678416,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Gunter's Chain British; Gunters Chain British; Surveyor's Chain British","source_":"UCUM","loincProperty_":"Len","category_":"Obsolete","csUnitString_":"[rd_br]","ciUnitString_":"[RD_BR]","baseFactorStr_":"4","baseFactor_":"4","defError_":false},{"isBase_":false,"name_":"link for Gunter's chain - British","csCode_":"[lk_br]","ciCode_":"[LK_BR]","property_":"length","magnitude_":0.2011678416,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Links for Gunter's Chain British","source_":"UCUM","loincProperty_":"Len","category_":"Obsolete","csUnitString_":"[ch_br]/100","ciUnitString_":"[CH_BR]/100","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"fathom - British","csCode_":"[fth_br]","ciCode_":"[FTH_BR]","property_":"length","magnitude_":1.82879856,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"British fathoms; imperial fathoms; br fth; imp fth","source_":"UCUM","loincProperty_":"Len","category_":"Obsolete","csUnitString_":"[ft_br]","ciUnitString_":"[FT_BR]","baseFactorStr_":"6","baseFactor_":"6","defError_":false},{"isBase_":false,"name_":"pace - British","csCode_":"[pc_br]","ciCode_":"[PC_BR]","property_":"length","magnitude_":0.7619994000000001,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"British paces; br pc","source_":"UCUM","loincProperty_":"Len","category_":"Nonclinical","csUnitString_":"[ft_br]","ciUnitString_":"[FT_BR]","baseFactorStr_":"2.5","baseFactor_":"2.5","defError_":false},{"isBase_":false,"name_":"yard - British","csCode_":"[yd_br]","ciCode_":"[YD_BR]","property_":"length","magnitude_":0.91439928,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"British yards; Br yds; distance","source_":"UCUM","loincProperty_":"Len","category_":"Obsolete","csUnitString_":"[ft_br]","ciUnitString_":"[FT_BR]","baseFactorStr_":"3","baseFactor_":"3","defError_":false},{"isBase_":false,"name_":"mile - British","csCode_":"[mi_br]","ciCode_":"[MI_BR]","property_":"length","magnitude_":1609.3427328000002,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"imperial miles; British miles; English statute miles; imp mi, br mi","source_":"UCUM","loincProperty_":"Len","category_":"Obsolete","csUnitString_":"[ft_br]","ciUnitString_":"[FT_BR]","baseFactorStr_":"5280","baseFactor_":"5280","defError_":false},{"isBase_":false,"name_":"nautical mile - British","csCode_":"[nmi_br]","ciCode_":"[NMI_BR]","property_":"length","magnitude_":1853.1825408000002,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"British nautical miles; Imperial nautical miles; Admiralty miles; n.m. br; imp nm","source_":"UCUM","loincProperty_":"Len","category_":"Obsolete","csUnitString_":"[ft_br]","ciUnitString_":"[FT_BR]","baseFactorStr_":"6080","baseFactor_":"6080","defError_":false},{"isBase_":false,"name_":"knot - British","csCode_":"[kn_br]","ciCode_":"[KN_BR]","property_":"velocity","magnitude_":0.5147729280000001,"dim_":{"dimVec_":[1,-1,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"British knots; kn br; kt","source_":"UCUM","loincProperty_":"Vel","category_":"Obsolete","csUnitString_":"[nmi_br]/h","ciUnitString_":"[NMI_BR]/H","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"acre - international","csCode_":"[acr_br]","ciCode_":"[ACR_BR]","property_":"area","magnitude_":4046.850049400269,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-length","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Imperial acres; British; a; ac; ar; acr","source_":"UCUM","loincProperty_":"Area","category_":"Nonclinical","csUnitString_":"[yd_br]2","ciUnitString_":"[YD_BR]2","baseFactorStr_":"4840","baseFactor_":"4840","defError_":false},{"isBase_":false,"name_":"gallon - US","csCode_":"[gal_us]","ciCode_":"[GAL_US]","property_":"fluid volume","magnitude_":0.0037854117840000006,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"US gallon; US liquid gallon; gal us; Queen Anne's wine gallon","source_":"LOINC","loincProperty_":"Vol","category_":"Nonclinical","csUnitString_":"[in_i]3","ciUnitString_":"[IN_I]3","baseFactorStr_":"231","baseFactor_":"231","defError_":false},{"isBase_":false,"name_":"barrel - US","csCode_":"[bbl_us]","ciCode_":"[BBL_US]","property_":"fluid volume","magnitude_":0.158987294928,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"bbl","source_":"UCUM","loincProperty_":"Vol","category_":"Nonclinical","csUnitString_":"[gal_us]","ciUnitString_":"[GAL_US]","baseFactorStr_":"42","baseFactor_":"42","defError_":false},{"isBase_":false,"name_":"quart - US","csCode_":"[qt_us]","ciCode_":"[QT_US]","property_":"fluid volume","magnitude_":0.0009463529460000001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"US quarts; us qts","source_":"UCUM","loincProperty_":"Vol","category_":"Clinical","csUnitString_":"[gal_us]/4","ciUnitString_":"[GAL_US]/4","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"pint - US","csCode_":"[pt_us]","ciCode_":"[PT_US]","property_":"fluid volume","magnitude_":0.00047317647300000007,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"US pints; pint US; liquid pint; pt us; us pt","source_":"UCUM","loincProperty_":"Vol","category_":"Clinical","csUnitString_":"[qt_us]/2","ciUnitString_":"[QT_US]/2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"gill - US","csCode_":"[gil_us]","ciCode_":"[GIL_US]","property_":"fluid volume","magnitude_":0.00011829411825000002,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"US gills; gil us","source_":"UCUM","loincProperty_":"Vol","category_":"Nonclinical","csUnitString_":"[pt_us]/4","ciUnitString_":"[PT_US]/4","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"fluid ounce - US","csCode_":"[foz_us]","ciCode_":"[FOZ_US]","property_":"fluid volume","magnitude_":0.000029573529562500005,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"oz fl","class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"US fluid ounces; fl ozs; FO; fl. oz.; foz us","source_":"UCUM","loincProperty_":"Vol","category_":"Clinical","csUnitString_":"[gil_us]/4","ciUnitString_":"[GIL_US]/4","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"fluid dram - US","csCode_":"[fdr_us]","ciCode_":"[FDR_US]","property_":"fluid volume","magnitude_":0.0000036966911953125006,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"US fluid drams; fdr us","source_":"UCUM","loincProperty_":"Vol","category_":"Nonclinical","csUnitString_":"[foz_us]/8","ciUnitString_":"[FOZ_US]/8","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"minim - US","csCode_":"[min_us]","ciCode_":"[MIN_US]","property_":"fluid volume","magnitude_":6.1611519921875e-8,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"min US; US min; ♏ US","source_":"UCUM","loincProperty_":"Vol","category_":"Obsolete","csUnitString_":"[fdr_us]/60","ciUnitString_":"[FDR_US]/60","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"cord - US","csCode_":"[crd_us]","ciCode_":"[CRD_US]","property_":"fluid volume","magnitude_":3.6245563637760005,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"US cord; US cords; crd us; us crd","source_":"UCUM","loincProperty_":"Vol","category_":"Nonclinical","csUnitString_":"[ft_i]3","ciUnitString_":"[FT_I]3","baseFactorStr_":"128","baseFactor_":"128","defError_":false},{"isBase_":false,"name_":"bushel - US","csCode_":"[bu_us]","ciCode_":"[BU_US]","property_":"dry volume","magnitude_":0.03523907016688001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"US bushels; US bsh; US bu","source_":"UCUM","loincProperty_":"Vol","category_":"Obsolete","csUnitString_":"[in_i]3","ciUnitString_":"[IN_I]3","baseFactorStr_":"2150.42","baseFactor_":"2150.42","defError_":false},{"isBase_":false,"name_":"gallon - historical","csCode_":"[gal_wi]","ciCode_":"[GAL_WI]","property_":"dry volume","magnitude_":0.004404883770860001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Corn Gallon British; Dry Gallon US; Gallons Historical; Grain Gallon British; Winchester Corn Gallon; historical winchester gallons; wi gal","source_":"UCUM","loincProperty_":"Vol","category_":"Obsolete","csUnitString_":"[bu_us]/8","ciUnitString_":"[BU_US]/8","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"peck - US","csCode_":"[pk_us]","ciCode_":"[PK_US]","property_":"dry volume","magnitude_":0.008809767541720002,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"US pecks; US pk","source_":"UCUM","loincProperty_":"Vol","category_":"Nonclinical","csUnitString_":"[bu_us]/4","ciUnitString_":"[BU_US]/4","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"dry quart - US","csCode_":"[dqt_us]","ciCode_":"[DQT_US]","property_":"dry volume","magnitude_":0.0011012209427150002,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"dry quart; dry quart US; US dry quart; dry qt; us dry qt; dqt; dqt us","source_":"UCUM","loincProperty_":"Vol","category_":"Nonclinical","csUnitString_":"[pk_us]/8","ciUnitString_":"[PK_US]/8","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"dry pint - US","csCode_":"[dpt_us]","ciCode_":"[DPT_US]","property_":"dry volume","magnitude_":0.0005506104713575001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"dry pint; dry pint US; US dry pint; dry pt; dpt; dpt us","source_":"UCUM","loincProperty_":"Vol","category_":"Nonclinical","csUnitString_":"[dqt_us]/2","ciUnitString_":"[DQT_US]/2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"tablespoon - US","csCode_":"[tbs_us]","ciCode_":"[TBS_US]","property_":"volume","magnitude_":0.000014786764781250002,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Tbs;  tbsp; tbs us; US tablespoons","source_":"UCUM","loincProperty_":"Vol","category_":"Clinical","csUnitString_":"[foz_us]/2","ciUnitString_":"[FOZ_US]/2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"teaspoon - US","csCode_":"[tsp_us]","ciCode_":"[TSP_US]","property_":"volume","magnitude_":0.0000049289215937500005,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"tsp; t; US teaspoons","source_":"UCUM","loincProperty_":"Vol","category_":"Nonclinical","csUnitString_":"[tbs_us]/3","ciUnitString_":"[TBS_US]/3","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"cup - US customary","csCode_":"[cup_us]","ciCode_":"[CUP_US]","property_":"volume","magnitude_":0.00023658823650000004,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"cup us; us cup","source_":"UCUM","loincProperty_":"Vol","category_":"Nonclinical","csUnitString_":"[tbs_us]","ciUnitString_":"[TBS_US]","baseFactorStr_":"16","baseFactor_":"16","defError_":false},{"isBase_":false,"name_":"fluid ounce - metric","csCode_":"[foz_m]","ciCode_":"[FOZ_M]","property_":"fluid volume","magnitude_":0.000029999999999999997,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"oz fl","class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"metric fluid ounces; fozs m; fl ozs m","source_":"UCUM","loincProperty_":"Vol","category_":"Clinical","csUnitString_":"mL","ciUnitString_":"ML","baseFactorStr_":"30","baseFactor_":"30","defError_":false},{"isBase_":false,"name_":"cup - US legal","csCode_":"[cup_m]","ciCode_":"[CUP_M]","property_":"volume","magnitude_":0.00023999999999999998,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"cup m; metric cup","source_":"UCUM","loincProperty_":"Vol","category_":"Clinical","csUnitString_":"mL","ciUnitString_":"ML","baseFactorStr_":"240","baseFactor_":"240","defError_":false},{"isBase_":false,"name_":"teaspoon - metric","csCode_":"[tsp_m]","ciCode_":"[TSP_M]","property_":"volume","magnitude_":0.0000049999999999999996,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"tsp; t; metric teaspoons","source_":"UCUM","loincProperty_":"Vol","category_":"Clinical","csUnitString_":"mL","ciUnitString_":"mL","baseFactorStr_":"5","baseFactor_":"5","defError_":false},{"isBase_":false,"name_":"tablespoon - metric","csCode_":"[tbs_m]","ciCode_":"[TBS_M]","property_":"volume","magnitude_":0.000014999999999999999,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"us-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"metric tablespoons; Tbs;  tbsp; T; tbs m","source_":"UCUM","loincProperty_":"Vol","category_":"Clinical","csUnitString_":"mL","ciUnitString_":"mL","baseFactorStr_":"15","baseFactor_":"15","defError_":false},{"isBase_":false,"name_":"gallon- British","csCode_":"[gal_br]","ciCode_":"[GAL_BR]","property_":"volume","magnitude_":0.004546090000000001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"imperial gallons, UK gallons; British gallons; br gal; imp gal","source_":"UCUM","loincProperty_":"Vol","category_":"Nonclinical","csUnitString_":"l","ciUnitString_":"L","baseFactorStr_":"4.54609","baseFactor_":"4.54609","defError_":false},{"isBase_":false,"name_":"peck - British","csCode_":"[pk_br]","ciCode_":"[PK_BR]","property_":"volume","magnitude_":0.009092180000000002,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"imperial pecks; British pecks; br pk; imp pk","source_":"UCUM","loincProperty_":"Vol","category_":"Nonclinical","csUnitString_":"[gal_br]","ciUnitString_":"[GAL_BR]","baseFactorStr_":"2","baseFactor_":"2","defError_":false},{"isBase_":false,"name_":"bushel - British","csCode_":"[bu_br]","ciCode_":"[BU_BR]","property_":"volume","magnitude_":0.03636872000000001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"British bushels; imperial; br bsh; br bu; imp","source_":"UCUM","loincProperty_":"Vol","category_":"Obsolete","csUnitString_":"[pk_br]","ciUnitString_":"[PK_BR]","baseFactorStr_":"4","baseFactor_":"4","defError_":false},{"isBase_":false,"name_":"quart - British","csCode_":"[qt_br]","ciCode_":"[QT_BR]","property_":"volume","magnitude_":0.0011365225000000002,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"British quarts; imperial quarts; br qts","source_":"UCUM","loincProperty_":"Vol","category_":"Clinical","csUnitString_":"[gal_br]/4","ciUnitString_":"[GAL_BR]/4","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"pint - British","csCode_":"[pt_br]","ciCode_":"[PT_BR]","property_":"volume","magnitude_":0.0005682612500000001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"British pints; imperial pints; pt br; br pt; imp pt; pt imp","source_":"UCUM","loincProperty_":"Vol","category_":"Clinical","csUnitString_":"[qt_br]/2","ciUnitString_":"[QT_BR]/2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"gill - British","csCode_":"[gil_br]","ciCode_":"[GIL_BR]","property_":"volume","magnitude_":0.00014206531250000003,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"imperial gills; British gills; imp gill, br gill","source_":"UCUM","loincProperty_":"Vol","category_":"Nonclinical","csUnitString_":"[pt_br]/4","ciUnitString_":"[PT_BR]/4","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"fluid ounce - British","csCode_":"[foz_br]","ciCode_":"[FOZ_BR]","property_":"volume","magnitude_":0.000028413062500000005,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"British fluid ounces; Imperial fluid ounces;  br fozs; imp fozs; br fl ozs","source_":"UCUM","loincProperty_":"Vol","category_":"Clinical","csUnitString_":"[gil_br]/5","ciUnitString_":"[GIL_BR]/5","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"fluid dram - British","csCode_":"[fdr_br]","ciCode_":"[FDR_BR]","property_":"volume","magnitude_":0.0000035516328125000006,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"British fluid dram; fdr br","source_":"UCUM","loincProperty_":"Vol","category_":"Nonclinical","csUnitString_":"[foz_br]/8","ciUnitString_":"[FOZ_BR]/8","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"minim - British","csCode_":"[min_br]","ciCode_":"[MIN_BR]","property_":"volume","magnitude_":5.919388020833334e-8,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":null,"class_":"brit-volumes","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"min br; br min; ♏ br","source_":"UCUM","loincProperty_":"Vol","category_":"Obsolete","csUnitString_":"[fdr_br]/60","ciUnitString_":"[FDR_BR]/60","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"grain","csCode_":"[gr]","ciCode_":"[GR]","property_":"mass","magnitude_":0.06479891,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"gr","source_":"UCUM","loincProperty_":"Mass","category_":"Nonclinical","csUnitString_":"mg","ciUnitString_":"MG","baseFactorStr_":"64.79891","baseFactor_":"64.79891","defError_":false},{"isBase_":false,"name_":"pound - international","csCode_":"[lb_av]","ciCode_":"[LB_AV]","property_":"mass","magnitude_":453.59237,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"lb","class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"avoirdupois pounds, international pounds; av lbs; pounds","source_":"UCUM","loincProperty_":"Mass","category_":"Clinical","csUnitString_":"[gr]","ciUnitString_":"[GR]","baseFactorStr_":"7000","baseFactor_":"7000","defError_":false},{"isBase_":false,"name_":"pound force - US","csCode_":"[lbf_av]","ciCode_":"[LBF_AV]","property_":"force","magnitude_":4448.2216152605,"dim_":{"dimVec_":[1,-2,1,0,0,0,0]},"printSymbol_":"lbf","class_":"const","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"lbfs; US lbf; US pound forces","source_":"UCUM","loincProperty_":"Force","category_":"Clinical","csUnitString_":"[lb_av].[g]","ciUnitString_":"[LB_AV].[G]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"ounce - international","csCode_":"[oz_av]","ciCode_":"[OZ_AV]","property_":"mass","magnitude_":28.349523125,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"oz","class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ounces; international ounces; avoirdupois ounces; av ozs","source_":"UCUM","loincProperty_":"Mass","category_":"Clinical","csUnitString_":"[lb_av]/16","ciUnitString_":"[LB_AV]/16","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Dram mass unit - international","csCode_":"[dr_av]","ciCode_":"[DR_AV]","property_":"mass","magnitude_":1.7718451953125,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Dram; dram avoirdupois; avoidupois dram; international dram","source_":"UCUM","loincProperty_":"Mass","category_":"Clinical","csUnitString_":"[oz_av]/16","ciUnitString_":"[OZ_AV]/16","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"short hundredweight","csCode_":"[scwt_av]","ciCode_":"[SCWT_AV]","property_":"mass","magnitude_":45359.237,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"hundredweights; s cwt; scwt; avoirdupois","source_":"UCUM","loincProperty_":"Mass","category_":"Nonclinical","csUnitString_":"[lb_av]","ciUnitString_":"[LB_AV]","baseFactorStr_":"100","baseFactor_":"100","defError_":false},{"isBase_":false,"name_":"long hundredweight","csCode_":"[lcwt_av]","ciCode_":"[LCWT_AV]","property_":"mass","magnitude_":50802.345440000005,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"imperial hundredweights; imp cwt; lcwt; avoirdupois","source_":"UCUM","loincProperty_":"Mass","category_":"Obsolete","csUnitString_":"[lb_av]","ciUnitString_":"[LB_AV]","baseFactorStr_":"112","baseFactor_":"112","defError_":false},{"isBase_":false,"name_":"short ton - US","csCode_":"[ston_av]","ciCode_":"[STON_AV]","property_":"mass","magnitude_":907184.74,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ton; US tons; avoirdupois tons","source_":"UCUM","loincProperty_":"Mass","category_":"Clinical","csUnitString_":"[scwt_av]","ciUnitString_":"[SCWT_AV]","baseFactorStr_":"20","baseFactor_":"20","defError_":false},{"isBase_":false,"name_":"long ton - British","csCode_":"[lton_av]","ciCode_":"[LTON_AV]","property_":"mass","magnitude_":1016046.9088000001,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"imperial tons; weight tons; British long tons; long ton avoirdupois","source_":"UCUM","loincProperty_":"Mass","category_":"Nonclinical","csUnitString_":"[lcwt_av]","ciUnitString_":"[LCWT_AV]","baseFactorStr_":"20","baseFactor_":"20","defError_":false},{"isBase_":false,"name_":"stone - British","csCode_":"[stone_av]","ciCode_":"[STONE_AV]","property_":"mass","magnitude_":6350.293180000001,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"avoirdupois","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"British stones; avoirdupois","source_":"UCUM","loincProperty_":"Mass","category_":"Nonclinical","csUnitString_":"[lb_av]","ciUnitString_":"[LB_AV]","baseFactorStr_":"14","baseFactor_":"14","defError_":false},{"isBase_":false,"name_":"pennyweight - troy","csCode_":"[pwt_tr]","ciCode_":"[PWT_TR]","property_":"mass","magnitude_":1.5551738400000001,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"troy","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"dwt; denarius weight","source_":"UCUM","loincProperty_":"Mass","category_":"Obsolete","csUnitString_":"[gr]","ciUnitString_":"[GR]","baseFactorStr_":"24","baseFactor_":"24","defError_":false},{"isBase_":false,"name_":"ounce - troy","csCode_":"[oz_tr]","ciCode_":"[OZ_TR]","property_":"mass","magnitude_":31.103476800000003,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"troy","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"troy ounces; tr ozs","source_":"UCUM","loincProperty_":"Mass","category_":"Nonclinical","csUnitString_":"[pwt_tr]","ciUnitString_":"[PWT_TR]","baseFactorStr_":"20","baseFactor_":"20","defError_":false},{"isBase_":false,"name_":"pound - troy","csCode_":"[lb_tr]","ciCode_":"[LB_TR]","property_":"mass","magnitude_":373.2417216,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"troy","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"troy pounds; tr lbs","source_":"UCUM","loincProperty_":"Mass","category_":"Nonclinical","csUnitString_":"[oz_tr]","ciUnitString_":"[OZ_TR]","baseFactorStr_":"12","baseFactor_":"12","defError_":false},{"isBase_":false,"name_":"scruple","csCode_":"[sc_ap]","ciCode_":"[SC_AP]","property_":"mass","magnitude_":1.2959782,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"apoth","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"scruples; sc ap","source_":"UCUM","loincProperty_":"Mass","category_":"Obsolete","csUnitString_":"[gr]","ciUnitString_":"[GR]","baseFactorStr_":"20","baseFactor_":"20","defError_":false},{"isBase_":false,"name_":"dram - apothecary","csCode_":"[dr_ap]","ciCode_":"[DR_AP]","property_":"mass","magnitude_":3.8879346,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"apoth","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ʒ; drachm; Apothecaries Dram; dr ap; dram ap","source_":"UCUM","loincProperty_":"Mass","category_":"Nonclinical","csUnitString_":"[sc_ap]","ciUnitString_":"[SC_AP]","baseFactorStr_":"3","baseFactor_":"3","defError_":false},{"isBase_":false,"name_":"ounce - apothecary","csCode_":"[oz_ap]","ciCode_":"[OZ_AP]","property_":"mass","magnitude_":31.1034768,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"apoth","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"apothecary ounces; oz ap; ap ozs; ozs ap","source_":"UCUM","loincProperty_":"Mass","category_":"Obsolete","csUnitString_":"[dr_ap]","ciUnitString_":"[DR_AP]","baseFactorStr_":"8","baseFactor_":"8","defError_":false},{"isBase_":false,"name_":"pound - apothecary","csCode_":"[lb_ap]","ciCode_":"[LB_AP]","property_":"mass","magnitude_":373.2417216,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"apoth","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"apothecary pounds; apothecaries pounds; ap lb; lb ap; ap lbs; lbs ap","source_":"UCUM","loincProperty_":"Mass","category_":"Obsolete","csUnitString_":"[oz_ap]","ciUnitString_":"[OZ_AP]","baseFactorStr_":"12","baseFactor_":"12","defError_":false},{"isBase_":false,"name_":"ounce - metric","csCode_":"[oz_m]","ciCode_":"[OZ_M]","property_":"mass","magnitude_":28,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":null,"class_":"apoth","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"metric ounces; m ozs","source_":"UCUM","loincProperty_":"Mass","category_":"Clinical","csUnitString_":"g","ciUnitString_":"g","baseFactorStr_":"28","baseFactor_":"28","defError_":false},{"isBase_":false,"name_":"line","csCode_":"[lne]","ciCode_":"[LNE]","property_":"length","magnitude_":0.002116666666666667,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"British lines; br L; L; l","source_":"UCUM","loincProperty_":"Len","category_":"Obsolete","csUnitString_":"[in_i]/12","ciUnitString_":"[IN_I]/12","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"point (typography)","csCode_":"[pnt]","ciCode_":"[PNT]","property_":"length","magnitude_":0.0003527777777777778,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"DTP points; desktop publishing point; pt; pnt","source_":"UCUM","loincProperty_":"Len","category_":"Nonclinical","csUnitString_":"[lne]/6","ciUnitString_":"[LNE]/6","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"pica (typography)","csCode_":"[pca]","ciCode_":"[PCA]","property_":"length","magnitude_":0.004233333333333334,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"picas","source_":"UCUM","loincProperty_":"Len","category_":"Nonclinical","csUnitString_":"[pnt]","ciUnitString_":"[PNT]","baseFactorStr_":"12","baseFactor_":"12","defError_":false},{"isBase_":false,"name_":"Printer's point (typography)","csCode_":"[pnt_pr]","ciCode_":"[PNT_PR]","property_":"length","magnitude_":0.00035145980000000004,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"pnt pr","source_":"UCUM","loincProperty_":"Len","category_":"Nonclinical","csUnitString_":"[in_i]","ciUnitString_":"[IN_I]","baseFactorStr_":"0.013837","baseFactor_":"0.013837","defError_":false},{"isBase_":false,"name_":"Printer's pica  (typography)","csCode_":"[pca_pr]","ciCode_":"[PCA_PR]","property_":"length","magnitude_":0.004217517600000001,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"pca pr; Printer's picas","source_":"UCUM","loincProperty_":"Len","category_":"Nonclinical","csUnitString_":"[pnt_pr]","ciUnitString_":"[PNT_PR]","baseFactorStr_":"12","baseFactor_":"12","defError_":false},{"isBase_":false,"name_":"pied","csCode_":"[pied]","ciCode_":"[PIED]","property_":"length","magnitude_":0.3248,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"pied du roi; Paris foot; royal; French; feet","source_":"UCUM","loincProperty_":"Len","category_":"Obsolete","csUnitString_":"cm","ciUnitString_":"CM","baseFactorStr_":"32.48","baseFactor_":"32.48","defError_":false},{"isBase_":false,"name_":"pouce","csCode_":"[pouce]","ciCode_":"[POUCE]","property_":"length","magnitude_":0.027066666666666666,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"historical French inches; French royal inches","source_":"UCUM","loincProperty_":"Len","category_":"Obsolete","csUnitString_":"[pied]/12","ciUnitString_":"[PIED]/12","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"ligne","csCode_":"[ligne]","ciCode_":"[LIGNE]","property_":"length","magnitude_":0.0022555555555555554,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Paris lines; lignes","source_":"UCUM","loincProperty_":"Len","category_":"Obsolete","csUnitString_":"[pouce]/12","ciUnitString_":"[POUCE]/12","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"didot","csCode_":"[didot]","ciCode_":"[DIDOT]","property_":"length","magnitude_":0.0003759259259259259,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Didot point; dd; Didots Point","source_":"UCUM","loincProperty_":"Len","category_":"Obsolete","csUnitString_":"[ligne]/6","ciUnitString_":"[LIGNE]/6","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"cicero","csCode_":"[cicero]","ciCode_":"[CICERO]","property_":"length","magnitude_":0.004511111111111111,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"typeset","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Didot's pica","source_":"UCUM","loincProperty_":"Len","category_":"Obsolete","csUnitString_":"[didot]","ciUnitString_":"[DIDOT]","baseFactorStr_":"12","baseFactor_":"12","defError_":false},{"isBase_":false,"name_":"degrees Fahrenheit","csCode_":"[degF]","ciCode_":"[DEGF]","property_":"temperature","magnitude_":0.5555555555555556,"dim_":{"dimVec_":[0,0,0,0,1,0,0]},"printSymbol_":"°F","class_":"heat","isMetric_":false,"variable_":null,"cnv_":"degF","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"synonyms_":"°F; deg F","source_":"UCUM","loincProperty_":"Temp","category_":"Clinical","csUnitString_":"K","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":0.5555555555555556,"defError_":false},{"isBase_":false,"name_":"degrees Rankine","csCode_":"[degR]","ciCode_":"[degR]","property_":"temperature","magnitude_":0.5555555555555556,"dim_":{"dimVec_":[0,0,0,0,1,0,0]},"printSymbol_":"°R","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"°R; °Ra; Rankine","source_":"UCUM","loincProperty_":"Temp","category_":"Obsolete","csUnitString_":"K/9","ciUnitString_":"K/9","baseFactorStr_":"5","baseFactor_":"5","defError_":false},{"isBase_":false,"name_":"degrees Réaumur","csCode_":"[degRe]","ciCode_":"[degRe]","property_":"temperature","magnitude_":1.25,"dim_":{"dimVec_":[0,0,0,0,1,0,0]},"printSymbol_":"°Ré","class_":"heat","isMetric_":false,"variable_":null,"cnv_":"degRe","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"synonyms_":"°Ré, °Re, °r; Réaumur; degree Reaumur; Reaumur","source_":"UCUM","loincProperty_":"Temp","category_":"Obsolete","csUnitString_":"K","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1.25,"defError_":false},{"isBase_":false,"name_":"calorie at 15°C","csCode_":"cal_[15]","ciCode_":"CAL_[15]","property_":"energy","magnitude_":4185.8,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"cal<sub>15°C</sub>","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"calorie 15 C; cals 15 C; calories at 15 C","source_":"UCUM","loincProperty_":"Enrg","category_":"Nonclinical","csUnitString_":"J","ciUnitString_":"J","baseFactorStr_":"4.18580","baseFactor_":"4.18580","defError_":false},{"isBase_":false,"name_":"calorie at 20°C","csCode_":"cal_[20]","ciCode_":"CAL_[20]","property_":"energy","magnitude_":4181.9,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"cal<sub>20°C</sub>","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"calorie 20 C; cal 20 C; calories at 20 C","source_":"UCUM","loincProperty_":"Enrg","category_":"Clinical","csUnitString_":"J","ciUnitString_":"J","baseFactorStr_":"4.18190","baseFactor_":"4.18190","defError_":false},{"isBase_":false,"name_":"mean calorie","csCode_":"cal_m","ciCode_":"CAL_M","property_":"energy","magnitude_":4190.0199999999995,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"cal<sub>m</sub>","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mean cals; mean calories","source_":"UCUM","loincProperty_":"Enrg","category_":"Clinical","csUnitString_":"J","ciUnitString_":"J","baseFactorStr_":"4.19002","baseFactor_":"4.19002","defError_":false},{"isBase_":false,"name_":"international table calorie","csCode_":"cal_IT","ciCode_":"CAL_IT","property_":"energy","magnitude_":4186.8,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"cal<sub>IT</sub>","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"calories IT; IT cals; international steam table calories","source_":"UCUM","loincProperty_":"Enrg","category_":"Nonclinical","csUnitString_":"J","ciUnitString_":"J","baseFactorStr_":"4.1868","baseFactor_":"4.1868","defError_":false},{"isBase_":false,"name_":"thermochemical calorie","csCode_":"cal_th","ciCode_":"CAL_TH","property_":"energy","magnitude_":4184,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"cal<sub>th</sub>","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"thermochemical calories; th cals","source_":"UCUM","loincProperty_":"Enrg","category_":"Clinical","csUnitString_":"J","ciUnitString_":"J","baseFactorStr_":"4.184","baseFactor_":"4.184","defError_":false},{"isBase_":false,"name_":"calorie","csCode_":"cal","ciCode_":"CAL","property_":"energy","magnitude_":4184,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"cal","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"gram calories; small calories","source_":"UCUM","loincProperty_":"Enrg","category_":"Clinical","csUnitString_":"cal_th","ciUnitString_":"CAL_TH","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"nutrition label Calories","csCode_":"[Cal]","ciCode_":"[CAL]","property_":"energy","magnitude_":4184000,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"Cal","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"food calories; Cal; kcal","source_":"UCUM","loincProperty_":"Eng","category_":"Clinical","csUnitString_":"kcal_th","ciUnitString_":"KCAL_TH","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"British thermal unit at 39°F","csCode_":"[Btu_39]","ciCode_":"[BTU_39]","property_":"energy","magnitude_":1059670,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"Btu<sub>39°F</sub>","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"BTU 39F; BTU 39 F; B.T.U. 39 F; B.Th.U. 39 F; BThU 39 F; British thermal units","source_":"UCUM","loincProperty_":"Eng","category_":"Nonclinical","csUnitString_":"kJ","ciUnitString_":"kJ","baseFactorStr_":"1.05967","baseFactor_":"1.05967","defError_":false},{"isBase_":false,"name_":"British thermal unit at 59°F","csCode_":"[Btu_59]","ciCode_":"[BTU_59]","property_":"energy","magnitude_":1054800,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"Btu<sub>59°F</sub>","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"BTU 59 F; BTU 59F; B.T.U. 59 F; B.Th.U. 59 F; BThU 59F; British thermal units","source_":"UCUM","loincProperty_":"Eng","category_":"Nonclinical","csUnitString_":"kJ","ciUnitString_":"kJ","baseFactorStr_":"1.05480","baseFactor_":"1.05480","defError_":false},{"isBase_":false,"name_":"British thermal unit at 60°F","csCode_":"[Btu_60]","ciCode_":"[BTU_60]","property_":"energy","magnitude_":1054680,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"Btu<sub>60°F</sub>","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"BTU 60 F; BTU 60F; B.T.U. 60 F; B.Th.U. 60 F; BThU 60 F; British thermal units 60 F","source_":"UCUM","loincProperty_":"Eng","category_":"Nonclinical","csUnitString_":"kJ","ciUnitString_":"kJ","baseFactorStr_":"1.05468","baseFactor_":"1.05468","defError_":false},{"isBase_":false,"name_":"mean British thermal unit","csCode_":"[Btu_m]","ciCode_":"[BTU_M]","property_":"energy","magnitude_":1055870,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"Btu<sub>m</sub>","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"BTU mean;  B.T.U. mean; B.Th.U. mean; BThU mean; British thermal units mean;","source_":"UCUM","loincProperty_":"Eng","category_":"Nonclinical","csUnitString_":"kJ","ciUnitString_":"kJ","baseFactorStr_":"1.05587","baseFactor_":"1.05587","defError_":false},{"isBase_":false,"name_":"international table British thermal unit","csCode_":"[Btu_IT]","ciCode_":"[BTU_IT]","property_":"energy","magnitude_":1055055.85262,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"Btu<sub>IT</sub>","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"BTU IT;  B.T.U. IT; B.Th.U. IT; BThU IT; British thermal units IT","source_":"UCUM","loincProperty_":"Eng","category_":"Nonclinical","csUnitString_":"kJ","ciUnitString_":"kJ","baseFactorStr_":"1.05505585262","baseFactor_":"1.05505585262","defError_":false},{"isBase_":false,"name_":"thermochemical British thermal unit","csCode_":"[Btu_th]","ciCode_":"[BTU_TH]","property_":"energy","magnitude_":1054350,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"Btu<sub>th</sub>","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"BTU Th;  B.T.U. Th; B.Th.U. Th; BThU Th; thermochemical British thermal units","source_":"UCUM","loincProperty_":"Eng","category_":"Nonclinical","csUnitString_":"kJ","ciUnitString_":"kJ","baseFactorStr_":"1.054350","baseFactor_":"1.054350","defError_":false},{"isBase_":false,"name_":"British thermal unit","csCode_":"[Btu]","ciCode_":"[BTU]","property_":"energy","magnitude_":1054350,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"btu","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"BTU; B.T.U. ; \nB.Th.U.; BThU; British thermal units","source_":"UCUM","loincProperty_":"Eng","category_":"Nonclinical","csUnitString_":"[Btu_th]","ciUnitString_":"[BTU_TH]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"horsepower - mechanical","csCode_":"[HP]","ciCode_":"[HP]","property_":"power","magnitude_":745699.8715822703,"dim_":{"dimVec_":[2,-3,1,0,0,0,0]},"printSymbol_":null,"class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"imperial horsepower","source_":"UCUM","loincProperty_":"EngRat","category_":"Nonclinical","csUnitString_":"[ft_i].[lbf_av]/s","ciUnitString_":"[FT_I].[LBF_AV]/S","baseFactorStr_":"550","baseFactor_":"550","defError_":false},{"isBase_":false,"name_":"tex","csCode_":"tex","ciCode_":"TEX","property_":"linear mass density (of textile thread)","magnitude_":0.001,"dim_":{"dimVec_":[-1,0,1,0,0,0,0]},"printSymbol_":"tex","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"linear mass density","source_":"UCUM","loincProperty_":"","category_":"Clinical","csUnitString_":"g/km","ciUnitString_":"G/KM","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Denier (linear mass density)","csCode_":"[den]","ciCode_":"[DEN]","property_":"linear mass density (of textile thread)","magnitude_":0.0001111111111111111,"dim_":{"dimVec_":[-1,0,1,0,0,0,0]},"printSymbol_":"den","class_":"heat","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"den","source_":"UCUM","loincProperty_":"","category_":"Nonclinical","csUnitString_":"g/9/km","ciUnitString_":"G/9/KM","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"meter of water column","csCode_":"m[H2O]","ciCode_":"M[H2O]","property_":"pressure","magnitude_":9806650,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"m HO<sub><r>2</r></sub>","class_":"clinical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mH2O; m H2O; meters of water column; metres; pressure","source_":"UCUM","loincProperty_":"Pres","category_":"Clinical","csUnitString_":"kPa","ciUnitString_":"KPAL","baseFactorStr_":"980665e-5","baseFactor_":"9.80665","defError_":false},{"isBase_":false,"name_":"meter of mercury column","csCode_":"m[Hg]","ciCode_":"M[HG]","property_":"pressure","magnitude_":133322000,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"m Hg","class_":"clinical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mHg; m Hg; meters of mercury column; metres; pressure","source_":"UCUM","loincProperty_":"Pres","category_":"Clinical","csUnitString_":"kPa","ciUnitString_":"KPAL","baseFactorStr_":"133.3220","baseFactor_":"133.3220","defError_":false},{"isBase_":false,"name_":"inch of water column","csCode_":"[in_i'H2O]","ciCode_":"[IN_I'H2O]","property_":"pressure","magnitude_":249088.91000000003,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"in HO<sub><r>2</r></sub>","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"inch WC; inAq; in H2O; inch of water gauge; iwg; pressure","source_":"UCUM","loincProperty_":"Pres","category_":"Clinical","csUnitString_":"m[H2O].[in_i]/m","ciUnitString_":"M[H2O].[IN_I]/M","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"inch of mercury column","csCode_":"[in_i'Hg]","ciCode_":"[IN_I'HG]","property_":"pressure","magnitude_":3386378.8000000003,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"in Hg","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"inHg; in Hg; pressure","source_":"UCUM","loincProperty_":"Pres","category_":"Clinical","csUnitString_":"m[Hg].[in_i]/m","ciUnitString_":"M[HG].[IN_I]/M","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"peripheral vascular resistance unit","csCode_":"[PRU]","ciCode_":"[PRU]","property_":"fluid resistance","magnitude_":133322000000,"dim_":{"dimVec_":[-4,-1,1,0,0,0,0]},"printSymbol_":"P.R.U.","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"peripheral vascular resistance units; peripheral resistance unit; peripheral resistance units; PRU","source_":"UCUM","loincProperty_":"FldResist","category_":"Clinical","csUnitString_":"mm[Hg].s/ml","ciUnitString_":"MM[HG].S/ML","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Wood unit","csCode_":"[wood'U]","ciCode_":"[WOOD'U]","property_":"fluid resistance","magnitude_":7999320000,"dim_":{"dimVec_":[-4,-1,1,0,0,0,0]},"printSymbol_":"Wood U.","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"hybrid reference units; HRU; mmHg.min/L; vascular resistance","source_":"UCUM","loincProperty_":"Pres","category_":"Clinical","csUnitString_":"mm[Hg].min/L","ciUnitString_":"MM[HG].MIN/L","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"diopter (lens)","csCode_":"[diop]","ciCode_":"[DIOP]","property_":"refraction of a lens","magnitude_":1,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"dpt","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":"inv","cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"diopters; diop; dioptre; dpt; refractive power","source_":"UCUM","loincProperty_":"InvLen","category_":"Clinical","csUnitString_":"m","ciUnitString_":"/M","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"prism diopter (magnifying power)","csCode_":"[p'diop]","ciCode_":"[P'DIOP]","property_":"refraction of a prism","magnitude_":0.017453292519943295,"dim_":{},"printSymbol_":"PD","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":"tanTimes100","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"synonyms_":"diopters; dioptres; p diops; pdiop; dpt; pdptr; Δ; cm/m; centimeter per meter; centimetre; metre","source_":"UCUM","loincProperty_":"Angle","category_":"Clinical","csUnitString_":"deg","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"percent of slope","csCode_":"%[slope]","ciCode_":"%[SLOPE]","property_":"slope","magnitude_":0.017453292519943295,"dim_":{},"printSymbol_":"%","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":"100tan","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"synonyms_":"% slope; %slope; percents slopes","source_":"UCUM","loincProperty_":"VelFr; ElpotRatFr; VelRtoFr; AccelFr","category_":"Clinical","csUnitString_":"deg","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"mesh","csCode_":"[mesh_i]","ciCode_":"[MESH_I]","property_":"lineic number","magnitude_":0.025400000000000002,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"clinical","isMetric_":false,"variable_":null,"cnv_":"inv","cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"","source_":"UCUM","loincProperty_":"NLen (lineic number)","category_":"Clinical","csUnitString_":"[in_i]","ciUnitString_":"/[IN_I]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"French (catheter gauge) ","csCode_":"[Ch]","ciCode_":"[CH]","property_":"gauge of catheters","magnitude_":0.0003333333333333333,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"Ch","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Charrière, French scale; French gauge; Fr, Fg, Ga, FR, Ch","source_":"LOINC","loincProperty_":"Len; Circ; Diam","category_":"Clinical","csUnitString_":"mm/3","ciUnitString_":"MM/3","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"drop - metric (1/20 mL)","csCode_":"[drp]","ciCode_":"[DRP]","property_":"volume","magnitude_":5e-8,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"drp","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"drop dosing units; metric drops; gtt","source_":"UCUM","loincProperty_":"Vol","category_":"Clinical","csUnitString_":"ml/20","ciUnitString_":"ML/20","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Hounsfield unit","csCode_":"[hnsf'U]","ciCode_":"[HNSF'U]","property_":"x-ray attenuation","magnitude_":1,"dim_":{},"printSymbol_":"HF","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"HU","source_":"UCUM","loincProperty_":"","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Metabolic Equivalent of Task ","csCode_":"[MET]","ciCode_":"[MET]","property_":"metabolic cost of physical activity","magnitude_":5.833333333333334e-11,"dim_":{"dimVec_":[3,-1,-1,0,0,0,0]},"printSymbol_":"MET","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"metabolic equivalents","source_":"UCUM","loincProperty_":"RelEngRat","category_":"Clinical","csUnitString_":"mL/min/kg","ciUnitString_":"ML/MIN/KG","baseFactorStr_":"3.5","baseFactor_":"3.5","defError_":false},{"isBase_":false,"name_":"homeopathic potency of decimal series (retired)","csCode_":"[hp'_X]","ciCode_":"[HP'_X]","property_":"homeopathic potency (retired)","magnitude_":1,"dim_":{},"printSymbol_":"X","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":"hpX","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"synonyms_":null,"source_":null,"loincProperty_":null,"category_":null,"csUnitString_":"1","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1,"defError_":false},{"isBase_":false,"name_":"homeopathic potency of centesimal series (retired)","csCode_":"[hp'_C]","ciCode_":"[HP'_C]","property_":"homeopathic potency (retired)","magnitude_":1,"dim_":{},"printSymbol_":"C","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":"hpC","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"synonyms_":null,"source_":null,"loincProperty_":null,"category_":null,"csUnitString_":"1","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1,"defError_":false},{"isBase_":false,"name_":"homeopathic potency of millesimal series (retired)","csCode_":"[hp'_M]","ciCode_":"[HP'_M]","property_":"homeopathic potency (retired)","magnitude_":1,"dim_":{},"printSymbol_":"M","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":"hpM","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"synonyms_":null,"source_":null,"loincProperty_":null,"category_":null,"csUnitString_":"1","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1,"defError_":false},{"isBase_":false,"name_":"homeopathic potency of quintamillesimal series (retired)","csCode_":"[hp'_Q]","ciCode_":"[HP'_Q]","property_":"homeopathic potency (retired)","magnitude_":1,"dim_":{},"printSymbol_":"Q","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":"hpQ","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"synonyms_":null,"source_":null,"loincProperty_":null,"category_":null,"csUnitString_":"1","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1,"defError_":false},{"isBase_":false,"name_":"homeopathic potency of decimal hahnemannian series","csCode_":"[hp_X]","ciCode_":"[HP_X]","property_":"homeopathic potency (Hahnemann)","magnitude_":1,"dim_":{},"printSymbol_":"X","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":null,"source_":null,"loincProperty_":null,"category_":null,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"homeopathic potency of centesimal hahnemannian series","csCode_":"[hp_C]","ciCode_":"[HP_C]","property_":"homeopathic potency (Hahnemann)","magnitude_":1,"dim_":{},"printSymbol_":"C","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":null,"source_":null,"loincProperty_":null,"category_":null,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"homeopathic potency of millesimal hahnemannian series","csCode_":"[hp_M]","ciCode_":"[HP_M]","property_":"homeopathic potency (Hahnemann)","magnitude_":1,"dim_":{},"printSymbol_":"M","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":null,"source_":null,"loincProperty_":null,"category_":null,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"homeopathic potency of quintamillesimal hahnemannian series","csCode_":"[hp_Q]","ciCode_":"[HP_Q]","property_":"homeopathic potency (Hahnemann)","magnitude_":1,"dim_":{},"printSymbol_":"Q","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":null,"source_":null,"loincProperty_":null,"category_":null,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"homeopathic potency of decimal korsakovian series","csCode_":"[kp_X]","ciCode_":"[KP_X]","property_":"homeopathic potency (Korsakov)","magnitude_":1,"dim_":{},"printSymbol_":"X","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":null,"source_":null,"loincProperty_":null,"category_":null,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"homeopathic potency of centesimal korsakovian series","csCode_":"[kp_C]","ciCode_":"[KP_C]","property_":"homeopathic potency (Korsakov)","magnitude_":1,"dim_":{},"printSymbol_":"C","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":null,"source_":null,"loincProperty_":null,"category_":null,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"homeopathic potency of millesimal korsakovian series","csCode_":"[kp_M]","ciCode_":"[KP_M]","property_":"homeopathic potency (Korsakov)","magnitude_":1,"dim_":{},"printSymbol_":"M","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":null,"source_":null,"loincProperty_":null,"category_":null,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"homeopathic potency of quintamillesimal korsakovian series","csCode_":"[kp_Q]","ciCode_":"[KP_Q]","property_":"homeopathic potency (Korsakov)","magnitude_":1,"dim_":{},"printSymbol_":"Q","class_":"clinical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":null,"source_":null,"loincProperty_":null,"category_":null,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"equivalent","csCode_":"eq","ciCode_":"EQ","property_":"amount of substance","magnitude_":6.0221367e+23,"dim_":{},"printSymbol_":"eq","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"equivalents","source_":"UCUM","loincProperty_":"Sub","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"osmole","csCode_":"osm","ciCode_":"OSM","property_":"amount of substance (dissolved particles)","magnitude_":6.0221367e+23,"dim_":{},"printSymbol_":"osm","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"osmoles; osmol","source_":"UCUM","loincProperty_":"Osmol","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"pH","csCode_":"[pH]","ciCode_":"[PH]","property_":"acidity","magnitude_":6.0221366999999994e+26,"dim_":{},"printSymbol_":"pH","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":"pH","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"synonyms_":"pH scale","source_":"UCUM","loincProperty_":"LogCnc","category_":"Clinical","csUnitString_":"mol/l","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"gram percent","csCode_":"g%","ciCode_":"G%","property_":"mass concentration","magnitude_":10000,"dim_":{"dimVec_":[-3,0,1,0,0,0,0]},"printSymbol_":"g%","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"gram %; gram%; gram per deciliter; g/dL; gm per dL","source_":"UCUM","loincProperty_":"MCnc","category_":"Clinical","csUnitString_":"g/dl","ciUnitString_":"G/DL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Svedberg unit","csCode_":"[S]","ciCode_":"[S]","property_":"sedimentation coefficient","magnitude_":1e-13,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"S","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Sv; 10^-13 seconds; 100 fs; 100 femtoseconds","source_":"UCUM","loincProperty_":"Time","category_":"Clinical","csUnitString_":"s","ciUnitString_":"10*-13.S","baseFactorStr_":"1","baseFactor_":1e-13,"defError_":false},{"isBase_":false,"name_":"high power field (microscope)","csCode_":"[HPF]","ciCode_":"[HPF]","property_":"view area in microscope","magnitude_":1,"dim_":{},"printSymbol_":"HPF","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"HPF","source_":"UCUM","loincProperty_":"Area","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"low power field (microscope)","csCode_":"[LPF]","ciCode_":"[LPF]","property_":"view area in microscope","magnitude_":1,"dim_":{},"printSymbol_":"LPF","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"LPF","source_":"UCUM","loincProperty_":"Area","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"100","baseFactor_":"100","defError_":false},{"isBase_":false,"name_":"katal","csCode_":"kat","ciCode_":"KAT","property_":"catalytic activity","magnitude_":6.0221367e+23,"dim_":{},"printSymbol_":"kat","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mol/secs; moles per second; mol*sec-1; mol*s-1; mol.s-1; katals; catalytic activity; enzymatic; enzyme units; activities","source_":"UCUM","loincProperty_":"CAct","category_":"Clinical","csUnitString_":"mol/s","ciUnitString_":"MOL/S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"enzyme unit","csCode_":"U","ciCode_":"U","property_":"catalytic activity","magnitude_":10036894500000000,"dim_":{},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"micromoles per minute; umol/min; umol per minute; umol min-1; enzymatic activity; enzyme activity","source_":"UCUM","loincProperty_":"CAct","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"international unit - arbitrary","csCode_":"[iU]","ciCode_":"[IU]","property_":"arbitrary","magnitude_":1,"dim_":{},"printSymbol_":"IU","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"international units; IE; F2","source_":"UCUM","loincProperty_":"Arb","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"international unit - arbitrary","csCode_":"[IU]","ciCode_":"[IU]","property_":"arbitrary","magnitude_":1,"dim_":{},"printSymbol_":"i.U.","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"international units; IE; F2","source_":"UCUM","loincProperty_":"Arb","category_":"Clinical","csUnitString_":"[iU]","ciUnitString_":"[IU]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"arbitary unit","csCode_":"[arb'U]","ciCode_":"[ARB'U]","property_":"arbitrary","magnitude_":1,"dim_":{},"printSymbol_":"arb. U","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"arbitary units; arb units; arbU","source_":"UCUM","loincProperty_":"Arb","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"United States Pharmacopeia unit","csCode_":"[USP'U]","ciCode_":"[USP'U]","property_":"arbitrary","magnitude_":1,"dim_":{},"printSymbol_":"U.S.P.","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"USP U; USP'U","source_":"UCUM","loincProperty_":"Arb","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"GPL unit","csCode_":"[GPL'U]","ciCode_":"[GPL'U]","property_":"biologic activity of anticardiolipin IgG","magnitude_":1,"dim_":{},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"GPL Units; GPL U; IgG anticardiolipin units; IgG Phospholipid","source_":"UCUM","loincProperty_":"ACnc; AMass","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"MPL unit","csCode_":"[MPL'U]","ciCode_":"[MPL'U]","property_":"biologic activity of anticardiolipin IgM","magnitude_":1,"dim_":{},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"MPL units; MPL U; MPL'U; IgM anticardiolipin units; IgM Phospholipid Units","source_":"UCUM","loincProperty_":"ACnc","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"APL unit","csCode_":"[APL'U]","ciCode_":"[APL'U]","property_":"biologic activity of anticardiolipin IgA","magnitude_":1,"dim_":{},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"APL units; APL U; IgA anticardiolipin; IgA Phospholipid; biologic activity of","source_":"UCUM","loincProperty_":"AMass; ACnc","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Bethesda unit","csCode_":"[beth'U]","ciCode_":"[BETH'U]","property_":"biologic activity of factor VIII inhibitor","magnitude_":1,"dim_":{},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"BU","source_":"UCUM","loincProperty_":"ACnc","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"anti factor Xa unit","csCode_":"[anti'Xa'U]","ciCode_":"[ANTI'XA'U]","property_":"biologic activity of factor Xa inhibitor (heparin)","magnitude_":1,"dim_":{},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"","source_":"UCUM","loincProperty_":"ACnc","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Todd unit","csCode_":"[todd'U]","ciCode_":"[TODD'U]","property_":"biologic activity antistreptolysin O","magnitude_":1,"dim_":{},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"","source_":"UCUM","loincProperty_":"InvThres; RtoThres","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Dye unit","csCode_":"[dye'U]","ciCode_":"[DYE'U]","property_":"biologic activity of amylase","magnitude_":1,"dim_":{},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"units","source_":"UCUM","loincProperty_":"CCnc","category_":"Obsolete","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Somogyi unit","csCode_":"[smgy'U]","ciCode_":"[SMGY'U]","property_":"biologic activity of amylase","magnitude_":1,"dim_":{},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"Somogyi units; smgy U","source_":"UCUM","loincProperty_":"CAct","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Bodansky unit","csCode_":"[bdsk'U]","ciCode_":"[BDSK'U]","property_":"biologic activity of phosphatase","magnitude_":1,"dim_":{},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"","source_":"UCUM","loincProperty_":"ACnc","category_":"Obsolete","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"King-Armstrong unit","csCode_":"[ka'U]","ciCode_":"[KA'U]","property_":"biologic activity of phosphatase","magnitude_":1,"dim_":{},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"King-Armstrong Units; King units","source_":"UCUM","loincProperty_":"AMass","category_":"Obsolete","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Kunkel unit","csCode_":"[knk'U]","ciCode_":"[KNK'U]","property_":"arbitrary biologic activity","magnitude_":1,"dim_":{},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":null,"source_":null,"loincProperty_":null,"category_":null,"csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Mac Lagan unit","csCode_":"[mclg'U]","ciCode_":"[MCLG'U]","property_":"arbitrary biologic activity","magnitude_":1,"dim_":{},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"galactose index; galactose tolerance test; thymol turbidity test unit; mclg U","source_":"UCUM","loincProperty_":"ACnc","category_":"Obsolete","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"tuberculin unit","csCode_":"[tb'U]","ciCode_":"[TB'U]","property_":"biologic activity of tuberculin","magnitude_":1,"dim_":{},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"TU; units","source_":"UCUM","loincProperty_":"Arb","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"50% cell culture infectious dose","csCode_":"[CCID_50]","ciCode_":"[CCID_50]","property_":"biologic activity (infectivity) of an infectious agent preparation","magnitude_":1,"dim_":{},"printSymbol_":"CCID<sub>50</sub>","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"CCID50; 50% cell culture infective dose","source_":"UCUM","loincProperty_":"NumThres","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"50% tissue culture infectious dose","csCode_":"[TCID_50]","ciCode_":"[TCID_50]","property_":"biologic activity (infectivity) of an infectious agent preparation","magnitude_":1,"dim_":{},"printSymbol_":"TCID<sub>50</sub>","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"TCID50; 50% tissue culture infective dose","source_":"UCUM","loincProperty_":"NumThres","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"50% embryo infectious dose","csCode_":"[EID_50]","ciCode_":"[EID_50]","property_":"biologic activity (infectivity) of an infectious agent preparation","magnitude_":1,"dim_":{},"printSymbol_":"EID<sub>50</sub>","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"EID50; 50% embryo infective doses; EID50 Egg Infective Dosage","source_":"UCUM","loincProperty_":"thresNum","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"plaque forming units","csCode_":"[PFU]","ciCode_":"[PFU]","property_":"amount of an infectious agent","magnitude_":1,"dim_":{},"printSymbol_":"PFU","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"PFU","source_":"UCUM","loincProperty_":"ACnc","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"focus forming units (cells)","csCode_":"[FFU]","ciCode_":"[FFU]","property_":"amount of an infectious agent","magnitude_":1,"dim_":{},"printSymbol_":"FFU","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"FFU","source_":"UCUM","loincProperty_":"EntNum","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"colony forming units","csCode_":"[CFU]","ciCode_":"[CFU]","property_":"amount of a proliferating organism","magnitude_":1,"dim_":{},"printSymbol_":"CFU","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"CFU","source_":"LOINC","loincProperty_":"Num","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"index of reactivity (allergen)","csCode_":"[IR]","ciCode_":"[IR]","property_":"amount of an allergen callibrated through in-vivo testing using the Stallergenes® method.","magnitude_":1,"dim_":{},"printSymbol_":"IR","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"IR","source_":"UCUM","loincProperty_":"Acnc","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"bioequivalent allergen unit","csCode_":"[BAU]","ciCode_":"[BAU]","property_":"amount of an allergen callibrated through in-vivo testing based on the ID50EAL method of (intradermal dilution for 50mm sum of erythema diameters","magnitude_":1,"dim_":{},"printSymbol_":"BAU","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"BAU; Bioequivalent Allergy Units; bioequivalent allergen units","source_":"UCUM","loincProperty_":"Arb","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"allergy unit","csCode_":"[AU]","ciCode_":"[AU]","property_":"procedure defined amount of an allergen using some reference standard","magnitude_":1,"dim_":{},"printSymbol_":"AU","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"allergy units; allergen units; AU","source_":"LOINC","loincProperty_":"Arb","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"allergen unit for Ambrosia artemisiifolia","csCode_":"[Amb'a'1'U]","ciCode_":"[AMB'A'1'U]","property_":"procedure defined amount of the major allergen of ragweed.","magnitude_":1,"dim_":{},"printSymbol_":"Amb a 1 U","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"Amb a 1 unit; Antigen E; AgE U","source_":"UCUM","loincProperty_":"Arb","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"protein nitrogen unit (allergen testing)","csCode_":"[PNU]","ciCode_":"[PNU]","property_":"procedure defined amount of a protein substance","magnitude_":1,"dim_":{},"printSymbol_":"PNU","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"protein nitrogen units; PNU","source_":"UCUM","loincProperty_":"Mass","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Limit of flocculation","csCode_":"[Lf]","ciCode_":"[LF]","property_":"procedure defined amount of an antigen substance","magnitude_":1,"dim_":{},"printSymbol_":"Lf","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"Lf doses","source_":"UCUM","loincProperty_":"Arb","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"D-antigen unit (polio)","csCode_":"[D'ag'U]","ciCode_":"[D'AG'U]","property_":"procedure defined amount of a poliomyelitis d-antigen substance","magnitude_":1,"dim_":{},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"DAgU","source_":"UCUM","loincProperty_":"Acnc","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"fibrinogen equivalent units","csCode_":"[FEU]","ciCode_":"[FEU]","property_":"amount of fibrinogen broken down into the measured d-dimers","magnitude_":1,"dim_":{},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"FEU","source_":"UCUM","loincProperty_":"MCnc","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"ELISA unit","csCode_":"[ELU]","ciCode_":"[ELU]","property_":"arbitrary ELISA unit","magnitude_":1,"dim_":{},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"Enzyme-Linked Immunosorbent Assay Units; ELU; EL. U","source_":"UCUM","loincProperty_":"ACnc","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Ehrlich units (urobilinogen)","csCode_":"[EU]","ciCode_":"[EU]","property_":"Ehrlich unit","magnitude_":1,"dim_":{},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"EU/dL; mg{urobilinogen}/dL","source_":"UCUM","loincProperty_":"ACnc","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"neper","csCode_":"Np","ciCode_":"NEP","property_":"level","magnitude_":1,"dim_":{},"printSymbol_":"Np","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"ln","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"synonyms_":"nepers","source_":"UCUM","loincProperty_":"LogRto","category_":"Clinical","csUnitString_":"1","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1,"defError_":false},{"isBase_":false,"name_":"bel","csCode_":"B","ciCode_":"B","property_":"level","magnitude_":1,"dim_":{},"printSymbol_":"B","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lg","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"synonyms_":"bels","source_":"UCUM","loincProperty_":"LogRto","category_":"Clinical","csUnitString_":"1","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1,"defError_":false},{"isBase_":false,"name_":"bel sound pressure","csCode_":"B[SPL]","ciCode_":"B[SPL]","property_":"pressure level","magnitude_":631152000000000100,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"B(SPL)","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lgTimes2","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"synonyms_":"bel SPL; B SPL; sound pressure bels","source_":"UCUM","loincProperty_":"LogRto","category_":"Clinical","csUnitString_":"Pa","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":0.00002,"defError_":false},{"isBase_":false,"name_":"bel volt","csCode_":"B[V]","ciCode_":"B[V]","property_":"electric potential level","magnitude_":1000,"dim_":{"dimVec_":[2,-2,1,0,0,-1,0]},"printSymbol_":"B(V)","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lgTimes2","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"synonyms_":"bel V; B V; volts bels","source_":"UCUM","loincProperty_":"LogRtoElp","category_":"Clinical","csUnitString_":"V","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"bel millivolt","csCode_":"B[mV]","ciCode_":"B[MV]","property_":"electric potential level","magnitude_":1,"dim_":{"dimVec_":[2,-2,1,0,0,-1,0]},"printSymbol_":"B(mV)","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lgTimes2","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"synonyms_":"bel mV; B mV; millivolt bels; 10^-3V bels; 10*-3V ","source_":"UCUM","loincProperty_":"LogRtoElp","category_":"Clinical","csUnitString_":"mV","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"bel microvolt","csCode_":"B[uV]","ciCode_":"B[UV]","property_":"electric potential level","magnitude_":0.001,"dim_":{"dimVec_":[2,-2,1,0,0,-1,0]},"printSymbol_":"B(μV)","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lgTimes2","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"synonyms_":"bel uV; B uV; microvolts bels; 10^-6V bel; 10*-6V bel","source_":"UCUM","loincProperty_":"LogRto","category_":"Clinical","csUnitString_":"uV","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"bel 10 nanovolt","csCode_":"B[10.nV]","ciCode_":"B[10.NV]","property_":"electric potential level","magnitude_":0.000010000000000000003,"dim_":{"dimVec_":[2,-2,1,0,0,-1,0]},"printSymbol_":"B(10 nV)","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lgTimes2","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"synonyms_":"bel 10 nV; B 10 nV; 10 nanovolts bels","source_":"UCUM","loincProperty_":"LogRtoElp","category_":"Clinical","csUnitString_":"nV","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"bel watt","csCode_":"B[W]","ciCode_":"B[W]","property_":"power level","magnitude_":1000,"dim_":{"dimVec_":[2,-3,1,0,0,0,0]},"printSymbol_":"B(W)","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lg","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"synonyms_":"bel W; b W; b Watt; Watts bels","source_":"UCUM","loincProperty_":"LogRto","category_":"Clinical","csUnitString_":"W","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"bel kilowatt","csCode_":"B[kW]","ciCode_":"B[KW]","property_":"power level","magnitude_":1000000,"dim_":{"dimVec_":[2,-3,1,0,0,0,0]},"printSymbol_":"B(kW)","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lg","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"synonyms_":"bel kW; B kW; kilowatt bel; kW bel; kW B","source_":"UCUM","loincProperty_":"LogRto","category_":"Clinical","csUnitString_":"kW","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"stere","csCode_":"st","ciCode_":"STR","property_":"volume","magnitude_":1,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"st","class_":"misc","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"stère; m3; cubic meter; m^3; meters cubed; metre","source_":"UCUM","loincProperty_":"Vol","category_":"Nonclinical","csUnitString_":"m3","ciUnitString_":"M3","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Ångström","csCode_":"Ao","ciCode_":"AO","property_":"length","magnitude_":1.0000000000000002e-10,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"Å","class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Å; Angstrom; Ao","source_":"UCUM","loincProperty_":"Len","category_":"Clinical","csUnitString_":"nm","ciUnitString_":"NM","baseFactorStr_":"0.1","baseFactor_":"0.1","defError_":false},{"isBase_":false,"name_":"barn","csCode_":"b","ciCode_":"BRN","property_":"action area","magnitude_":9.999999999999999e-29,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":"b","class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"","source_":"UCUM","loincProperty_":"Area","category_":"Clinical","csUnitString_":"fm2","ciUnitString_":"FM2","baseFactorStr_":"100","baseFactor_":"100","defError_":false},{"isBase_":false,"name_":"technical atmosphere","csCode_":"att","ciCode_":"ATT","property_":"pressure","magnitude_":98066499.99999999,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"at","class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"at; tech atm; tech atmosphere;  kgf/cm2","source_":"UCUM","loincProperty_":"Pres","category_":"Obsolete","csUnitString_":"kgf/cm2","ciUnitString_":"KGF/CM2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"mho","csCode_":"mho","ciCode_":"MHO","property_":"electric conductance","magnitude_":0.001,"dim_":{"dimVec_":[-2,1,-1,0,0,2,0]},"printSymbol_":"mho","class_":"misc","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"siemens; ohm reciprocals; Ω^−1; Ω-1 ","source_":"UCUM","loincProperty_":"","category_":"Obsolete","csUnitString_":"S","ciUnitString_":"S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"pound per square inch","csCode_":"[psi]","ciCode_":"[PSI]","property_":"pressure","magnitude_":6894757.293168359,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"psi","class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"psi; lb/in2; lb per in2","source_":"UCUM","loincProperty_":"Pres","category_":"Clinical","csUnitString_":"[lbf_av]/[in_i]2","ciUnitString_":"[LBF_AV]/[IN_I]2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"circle - plane angle","csCode_":"circ","ciCode_":"CIRC","property_":"plane angle","magnitude_":6.283185307179586,"dim_":{},"printSymbol_":"circ","class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"angles","source_":"UCUM","loincProperty_":"Angle","category_":"Clinical","csUnitString_":"[pi].rad","ciUnitString_":"[PI].RAD","baseFactorStr_":"2","baseFactor_":"2","defError_":false},{"isBase_":false,"name_":"spere - solid angle","csCode_":"sph","ciCode_":"SPH","property_":"solid angle","magnitude_":12.566370614359172,"dim_":{},"printSymbol_":"sph","class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"","source_":"UCUM","loincProperty_":"Angle","category_":"Clinical","csUnitString_":"[pi].sr","ciUnitString_":"[PI].SR","baseFactorStr_":"4","baseFactor_":"4","defError_":false},{"isBase_":false,"name_":"metric carat","csCode_":"[car_m]","ciCode_":"[CAR_M]","property_":"mass","magnitude_":0.2,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"ct<sub>m</sub>","class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"carats; ct; car m","source_":"UCUM","loincProperty_":"Mass","category_":"Nonclinical","csUnitString_":"g","ciUnitString_":"G","baseFactorStr_":"2e-1","baseFactor_":"0.2","defError_":false},{"isBase_":false,"name_":"carat of gold alloys","csCode_":"[car_Au]","ciCode_":"[CAR_AU]","property_":"mass fraction","magnitude_":0.041666666666666664,"dim_":{},"printSymbol_":"ct<sub><r>Au</r></sub>","class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"karats; k; kt; car au","source_":"UCUM","loincProperty_":"MFr","category_":"Nonclinical","csUnitString_":"/24","ciUnitString_":"/24","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Smoot","csCode_":"[smoot]","ciCode_":"[SMOOT]","property_":"length","magnitude_":1.7018000000000002,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":null,"class_":"misc","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"","source_":"UCUM","loincProperty_":"Len","category_":"Nonclinical","csUnitString_":"[in_i]","ciUnitString_":"[IN_I]","baseFactorStr_":"67","baseFactor_":"67","defError_":false},{"isBase_":false,"name_":"meter per square seconds per square root of hertz","csCode_":"[m/s2/Hz^(1/2)]","ciCode_":"[M/S2/HZ^(1/2)]","property_":"amplitude spectral density","magnitude_":1,"dim_":{"dimVec_":[2,-3,0,0,0,0,0]},"printSymbol_":null,"class_":"misc","isMetric_":false,"variable_":null,"cnv_":"sqrt","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"synonyms_":"m/s2/(Hz^.5); m/s2/(Hz^(1/2)); m per s2 per Hz^1/2","source_":"UCUM","loincProperty_":"","category_":"Constant","csUnitString_":"m2/s4/Hz","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"bit - logarithmic","csCode_":"bit_s","ciCode_":"BIT_S","property_":"amount of information","magnitude_":1,"dim_":{},"printSymbol_":"bit<sub>s</sub>","class_":"infotech","isMetric_":false,"variable_":null,"cnv_":"ld","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"synonyms_":"bit-s; bit s; bit logarithmic","source_":"UCUM","loincProperty_":"LogA","category_":"Nonclinical","csUnitString_":"1","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1,"defError_":false},{"isBase_":false,"name_":"bit","csCode_":"bit","ciCode_":"BIT","property_":"amount of information","magnitude_":1,"dim_":{},"printSymbol_":"bit","class_":"infotech","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"bits","source_":"UCUM","loincProperty_":"","category_":"Nonclinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"byte","csCode_":"By","ciCode_":"BY","property_":"amount of information","magnitude_":8,"dim_":{},"printSymbol_":"B","class_":"infotech","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"bytes","source_":"UCUM","loincProperty_":"","category_":"Nonclinical","csUnitString_":"bit","ciUnitString_":"bit","baseFactorStr_":"8","baseFactor_":"8","defError_":false},{"isBase_":false,"name_":"baud","csCode_":"Bd","ciCode_":"BD","property_":"signal transmission rate","magnitude_":1,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"Bd","class_":"infotech","isMetric_":true,"variable_":null,"cnv_":"inv","cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Bd; bauds","source_":"UCUM","loincProperty_":"Freq","category_":"Nonclinical","csUnitString_":"s","ciUnitString_":"/s","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"per twelve hour","csCode_":"/(12.h)","ciCode_":"HR","property_":"time","magnitude_":0.000023148148148148147,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"h","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"per 12 hours; 12hrs; 12 hrs; /12hrs","source_":"LOINC","loincProperty_":"Rat","category_":"Clinical","csUnitString_":"min","ciUnitString_":"MIN","baseFactorStr_":"60","baseFactor_":"60","defError_":false},{"isBase_":false,"name_":"per arbitrary unit","csCode_":"/[arb'U]","ciCode_":"[ARB'U]","property_":"arbitrary","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"arb. U","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"/arbU","source_":"LOINC","loincProperty_":"InvA ","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"per high power field","csCode_":"/[HPF]","ciCode_":"[HPF]","property_":"view area in microscope","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"HPF","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/HPF; per HPF","source_":"LOINC","loincProperty_":"Naric","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"per international unit","csCode_":"/[IU]","ciCode_":"[IU]","property_":"arbitrary","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"i.U.","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"international units; /IU; per IU","source_":"LOINC","loincProperty_":"InvA","category_":"Clinical","csUnitString_":"[iU]","ciUnitString_":"[IU]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"per low power field","csCode_":"/[LPF]","ciCode_":"[LPF]","property_":"view area in microscope","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"LPF","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/LPF; per LPF","source_":"LOINC","loincProperty_":"Naric","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"100","baseFactor_":"100","defError_":false},{"isBase_":false,"name_":"per 10 billion  ","csCode_":"/10*10","ciCode_":"10*","property_":"number","magnitude_":1e-10,"dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/10^10; per 10*10","source_":"LOINC","loincProperty_":"NFr","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"per trillion ","csCode_":"/10*12","ciCode_":"10*","property_":"number","magnitude_":1e-12,"dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/10^12; per 10*12","source_":"LOINC","loincProperty_":"NFr","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"per thousand","csCode_":"/10*3","ciCode_":"10*","property_":"number","magnitude_":0.001,"dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/10^3; per 10*3","source_":"LOINC","loincProperty_":"NFr","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"per million","csCode_":"/10*6","ciCode_":"10*","property_":"number","magnitude_":0.000001,"dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/10^6; per 10*6;","source_":"LOINC","loincProperty_":"NFr","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"per billion","csCode_":"/10*9","ciCode_":"10*","property_":"number","magnitude_":1e-9,"dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/10^9; per 10*9","source_":"LOINC","loincProperty_":"NFr","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"per 100","csCode_":"/100","ciCode_":"","property_":"","magnitude_":0.01,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":null,"isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"per hundred; 10^2; 10*2","source_":"LOINC","loincProperty_":"NFr","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"per 100 cells","csCode_":"/100{cells}","ciCode_":"","property_":"","magnitude_":0.01,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":null,"isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/100 cells; /100cells; per hundred","source_":"LOINC","loincProperty_":"EntMass; EntNum; NFr","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"per 100 neutrophils","csCode_":"/100{neutrophils}","ciCode_":"","property_":"","magnitude_":0.01,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":null,"isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/100 neutrophils; /100neutrophils; per hundred","source_":"LOINC","loincProperty_":"EntMass; EntNum; NFr","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"per 100 spermatozoa","csCode_":"/100{spermatozoa}","ciCode_":"","property_":"","magnitude_":0.01,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":null,"isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/100 spermatozoa; /100spermatozoa; per hundred","source_":"LOINC","loincProperty_":"NFr","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"per 100 white blood cells","csCode_":"/100{WBCs}","ciCode_":"","property_":"","magnitude_":0.01,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":null,"isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/100 WBCs; /100WBCs; per hundred","source_":"LOINC","loincProperty_":"Ratio; NFr","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"per year","csCode_":"/a","ciCode_":"ANN","property_":"time","magnitude_":3.168808781402895e-8,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"a","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/Years; /yrs; yearly","source_":"LOINC","loincProperty_":"NRat","category_":"Clinical","csUnitString_":"a_j","ciUnitString_":"ANN_J","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"per centimeter of water","csCode_":"/cm[H2O]","ciCode_":"M[H2O]","property_":"pressure","magnitude_":0.000010197162129779282,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"m HO<sub><r>2</r></sub>","class_":"clinical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/cmH2O; /cm H2O; centimeters; centimetres","source_":"LOINC","loincProperty_":"InvPress","category_":"Clinical","csUnitString_":"kPa","ciUnitString_":"KPAL","baseFactorStr_":"980665e-5","baseFactor_":"9.80665","defError_":false},{"isBase_":false,"name_":"per day","csCode_":"/d","ciCode_":"D","property_":"time","magnitude_":0.000011574074074074073,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"d","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/dy; per day","source_":"LOINC","loincProperty_":"NRat","category_":"Clinical","csUnitString_":"h","ciUnitString_":"HR","baseFactorStr_":"24","baseFactor_":"24","defError_":false},{"isBase_":false,"name_":"per deciliter","csCode_":"/dL","ciCode_":"","property_":"volume","magnitude_":10000,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"per dL; /deciliter; decilitre","source_":"LOINC","loincProperty_":"NCnc","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"per gram","csCode_":"/g","ciCode_":"G","property_":"mass","magnitude_":1,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/gm; /gram; per g","source_":"LOINC","loincProperty_":"NCnt","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"per hour","csCode_":"/h","ciCode_":"HR","property_":"time","magnitude_":0.0002777777777777778,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"h","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/hr; /hour; per hr","source_":"LOINC","loincProperty_":"NRat","category_":"Clinical","csUnitString_":"min","ciUnitString_":"MIN","baseFactorStr_":"60","baseFactor_":"60","defError_":false},{"isBase_":true,"name_":"per kilogram","csCode_":"/kg","ciCode_":"G","property_":"mass","magnitude_":0.001,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"per kg; per kilogram","source_":"LOINC","loincProperty_":"NCnt","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"per liter","csCode_":"/L","ciCode_":"","property_":"volume","magnitude_":1000,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/liter; litre","source_":"LOINC","loincProperty_":"NCnc","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"per square meter","csCode_":"/m2","ciCode_":"M","property_":"length","magnitude_":1,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/m^2; /m*2; /sq. m; per square meter; meter squared; metre","source_":"LOINC","loincProperty_":"Naric","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"per cubic meter","csCode_":"/m3","ciCode_":"M","property_":"length","magnitude_":1,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/m^3; /m*3; /cu. m; per cubic meter; meter cubed; per m3; metre","source_":"LOINC","loincProperty_":"NCncn","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"per milligram","csCode_":"/mg","ciCode_":"G","property_":"mass","magnitude_":1000,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/milligram; per mg","source_":"LOINC","loincProperty_":"NCnt","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"per minute","csCode_":"/min","ciCode_":"MIN","property_":"time","magnitude_":0.016666666666666666,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"min","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/minute; per mins; breaths beats per minute","source_":"LOINC","loincProperty_":"NRat","category_":"Clinical","csUnitString_":"s","ciUnitString_":"S","baseFactorStr_":"60","baseFactor_":"60","defError_":false},{"isBase_":false,"name_":"per milliliter","csCode_":"/mL","ciCode_":"","property_":"volume","magnitude_":1000000,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/milliliter; per mL; millilitre","source_":"LOINC","loincProperty_":"NCncn","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"per millimeter","csCode_":"/mm","ciCode_":"M","property_":"length","magnitude_":1000,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/millimeter; per mm; millimetre","source_":"LOINC","loincProperty_":"InvLen","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"per month","csCode_":"/mo","ciCode_":"MO","property_":"time","magnitude_":3.802570537683474e-7,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"mo","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/month; per mo; monthly; month","source_":"LOINC","loincProperty_":"NRat","category_":"Clinical","csUnitString_":"mo_j","ciUnitString_":"MO_J","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"per second","csCode_":"/s","ciCode_":"S","property_":"time","magnitude_":1,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"s","class_":null,"isMetric_":false,"variable_":"T","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/second; /sec; per sec; frequency; Hertz; Herz; Hz; becquerels; Bq; s-1; s^-1","source_":"LOINC","loincProperty_":"NRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"per enzyme unit","csCode_":"/U","ciCode_":"U","property_":"catalytic activity","magnitude_":9.963241120049633e-17,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/enzyme units; per U","source_":"LOINC","loincProperty_":"InvC; NCat","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"per microliter","csCode_":"/uL","ciCode_":"","property_":"volume","magnitude_":999999999.9999999,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/microliter; microlitre; /mcl; per uL","source_":"LOINC","loincProperty_":"ACnc","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"per week","csCode_":"/wk","ciCode_":"WK","property_":"time","magnitude_":0.0000016534391534391535,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"wk","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"/week; per wk; weekly, weeks","source_":"LOINC","loincProperty_":"NRat","category_":"Clinical","csUnitString_":"d","ciUnitString_":"D","baseFactorStr_":"7","baseFactor_":"7","defError_":false},{"isBase_":false,"name_":"APL unit per milliliter","csCode_":"[APL'U]/mL","ciCode_":"[APL'U]","property_":"biologic activity of anticardiolipin IgA","magnitude_":1000000,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"APL/mL; APL'U/mL; APL U/mL; APL/milliliter; IgA anticardiolipin units per milliliters; IgA Phospholipid Units; millilitres; biologic activity of","source_":"LOINC","loincProperty_":"ACnc","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"arbitrary unit per milliliter","csCode_":"[arb'U]/mL","ciCode_":"[ARB'U]","property_":"arbitrary","magnitude_":1000000,"dim_":{"dimVec_":null},"printSymbol_":"arb. U","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"arb'U/mL; arbU/mL; arb U/mL; arbitrary units per milliliter; millilitre","source_":"LOINC","loincProperty_":"ACnc","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"colony forming units per liter","csCode_":"[CFU]/L","ciCode_":"[CFU]","property_":"amount of a proliferating organism","magnitude_":1000,"dim_":{"dimVec_":null},"printSymbol_":"CFU","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"CFU per Liter; CFU/L","source_":"LOINC","loincProperty_":"NCnc","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"colony forming units per milliliter","csCode_":"[CFU]/mL","ciCode_":"[CFU]","property_":"amount of a proliferating organism","magnitude_":1000000,"dim_":{"dimVec_":null},"printSymbol_":"CFU","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"CFU per mL; CFU/mL","source_":"LOINC","loincProperty_":"NCnc","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"foot per foot - US","csCode_":"[ft_us]/[ft_us]","ciCode_":"[FT_US]","property_":"length","magnitude_":1,"dim_":{"dimVec_":[0,0,0,0,0,0,0]},"printSymbol_":"ft<sub>us</sub>","class_":"us-lengths","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ft/ft; ft per ft; feet per feet; visual acuity","source_":"","loincProperty_":"LenRto","category_":"Clinical","csUnitString_":"m/3937","ciUnitString_":"M/3937","baseFactorStr_":"1200","baseFactor_":"1200","defError_":false},{"isBase_":false,"name_":"GPL unit per milliliter","csCode_":"[GPL'U]/mL","ciCode_":"[GPL'U]","property_":"biologic activity of anticardiolipin IgG","magnitude_":1000000,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"GPL U/mL; GPL'U/mL; GPL/mL; GPL U per mL; IgG Phospholipid Units per milliliters; IgG anticardiolipin units; millilitres","source_":"LOINC","loincProperty_":"ACnc; AMass","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"international unit per 2 hour","csCode_":"[IU]/(2.h)","ciCode_":"[IU]","property_":"arbitrary","magnitude_":0.0001388888888888889,"dim_":{"dimVec_":null},"printSymbol_":"i.U.","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"IU/2hrs; IU/2 hours; IU per 2 hrs; international units per 2 hours","source_":"LOINC","loincProperty_":"ARat","category_":"Clinical","csUnitString_":"[iU]","ciUnitString_":"[IU]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"international unit per 24 hour","csCode_":"[IU]/(24.h)","ciCode_":"[IU]","property_":"arbitrary","magnitude_":0.000011574074074074073,"dim_":{"dimVec_":null},"printSymbol_":"i.U.","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"IU/24hr; IU/24 hours; IU per 24 hrs; international units per 24 hours","source_":"LOINC","loincProperty_":"ARat","category_":"Clinical","csUnitString_":"[iU]","ciUnitString_":"[IU]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"international unit per day","csCode_":"[IU]/d","ciCode_":"[IU]","property_":"arbitrary","magnitude_":0.000011574074074074073,"dim_":{"dimVec_":null},"printSymbol_":"i.U.","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"IU/dy; IU/days; IU per dys; international units per day","source_":"LOINC","loincProperty_":"ARat","category_":"Clinical","csUnitString_":"[iU]","ciUnitString_":"[IU]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"international unit per deciliter","csCode_":"[IU]/dL","ciCode_":"[IU]","property_":"arbitrary","magnitude_":10000,"dim_":{"dimVec_":null},"printSymbol_":"i.U.","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"IU/dL; IU per dL; international units per deciliters; decilitres","source_":"LOINC","loincProperty_":"ACnc","category_":"Clinical","csUnitString_":"[iU]","ciUnitString_":"[IU]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"international unit per gram","csCode_":"[IU]/g","ciCode_":"[IU]","property_":"arbitrary","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"i.U.","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"IU/gm; IU/gram; IU per gm; IU per g; international units per gram","source_":"LOINC","loincProperty_":"ACnt","category_":"Clinical","csUnitString_":"[iU]","ciUnitString_":"[IU]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"international unit per hour","csCode_":"[IU]/h","ciCode_":"[IU]","property_":"arbitrary","magnitude_":0.0002777777777777778,"dim_":{"dimVec_":null},"printSymbol_":"i.U.","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"IU/hrs; IU per hours; international units per hour","source_":"LOINC","loincProperty_":"ARat","category_":"Clinical","csUnitString_":"[iU]","ciUnitString_":"[IU]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"international unit per kilogram","csCode_":"[IU]/kg","ciCode_":"[IU]","property_":"arbitrary","magnitude_":0.001,"dim_":{"dimVec_":null},"printSymbol_":"i.U.","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"IU/kg; IU/kilogram; IU per kg; units","source_":"LOINC","loincProperty_":"ACnt","category_":"Clinical","csUnitString_":"[iU]","ciUnitString_":"[IU]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"international unit per kilogram per day","csCode_":"[IU]/kg/d","ciCode_":"[IU]","property_":"arbitrary","magnitude_":1.1574074074074074e-8,"dim_":{"dimVec_":null},"printSymbol_":"i.U.","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"IU/kg/dy; IU/kg/day; IU/kilogram/day; IU per kg per day; units","source_":"LOINC","loincProperty_":"ACntRat","category_":"Clinical","csUnitString_":"[iU]","ciUnitString_":"[IU]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"international unit per liter","csCode_":"[IU]/L","ciCode_":"[IU]","property_":"arbitrary","magnitude_":1000,"dim_":{"dimVec_":null},"printSymbol_":"i.U.","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"IU/L; IU/liter; IU per liter; units; litre","source_":"LOINC","loincProperty_":"ACnc","category_":"Clinical","csUnitString_":"[iU]","ciUnitString_":"[IU]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"international unit per minute","csCode_":"[IU]/min","ciCode_":"[IU]","property_":"arbitrary","magnitude_":0.016666666666666666,"dim_":{"dimVec_":null},"printSymbol_":"i.U.","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"IU/min; IU/minute; IU per minute; international units","source_":"LOINC","loincProperty_":"ARat","category_":"Clinical","csUnitString_":"[iU]","ciUnitString_":"[IU]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"international unit per milliliter","csCode_":"[IU]/mL","ciCode_":"[IU]","property_":"arbitrary","magnitude_":1000000,"dim_":{"dimVec_":null},"printSymbol_":"i.U.","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"IU/mL; IU per mL; international units per milliliter; millilitre","source_":"LOINC","loincProperty_":"ACnc","category_":"Clinical","csUnitString_":"[iU]","ciUnitString_":"[IU]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"MPL unit per milliliter","csCode_":"[MPL'U]/mL","ciCode_":"[MPL'U]","property_":"biologic activity of anticardiolipin IgM","magnitude_":1000000,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"MPL/mL; MPL U/mL; MPL'U/mL; IgM anticardiolipin units; IgM Phospholipid Units; millilitre","source_":"LOINC","loincProperty_":"ACnc","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"number per high power field","csCode_":"{#}/[HPF]","ciCode_":"[HPF]","property_":"view area in microscope","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"HPF","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"#/HPF; # per HPF; number/HPF; numbers per high power field","source_":"LOINC","loincProperty_":"Naric","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"number per low power field","csCode_":"{#}/[LPF]","ciCode_":"[LPF]","property_":"view area in microscope","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"LPF","class_":"chemical","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"#/LPF; # per LPF; number/LPF; numbers per low power field","source_":"LOINC","loincProperty_":"Naric","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"100","baseFactor_":"100","defError_":false},{"isBase_":false,"name_":"IgA antiphosphatidylserine unit ","csCode_":"{APS'U}","ciCode_":"","property_":"","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":null,"isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"APS Unit; Phosphatidylserine Antibody IgA Units","source_":"LOINC","loincProperty_":"ACnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"EIA index","csCode_":"{EIA_index}","ciCode_":"","property_":"","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":null,"isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"enzyme immunoassay index","source_":"LOINC","loincProperty_":"ACnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"kaolin clotting time","csCode_":"{KCT'U}","ciCode_":"","property_":"","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":null,"isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"KCT","source_":"LOINC","loincProperty_":"Time","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"IgM antiphosphatidylserine unit","csCode_":"{MPS'U}","ciCode_":"","property_":"","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":null,"class_":null,"isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Phosphatidylserine Antibody IgM Measurement ","source_":"LOINC","loincProperty_":"ACnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"trillion per liter","csCode_":"10*12/L","ciCode_":"10*","property_":"number","magnitude_":1000000000000000,"dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"10^12/L; 10*12 per Liter; trillion per liter; litre","source_":"LOINC","loincProperty_":"NCncn","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"10^3 (used for cell count)","csCode_":"10*3","ciCode_":"10*","property_":"number","magnitude_":1000,"dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"10^3; thousand","source_":"LOINC","loincProperty_":"Num","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"thousand per liter","csCode_":"10*3/L","ciCode_":"10*","property_":"number","magnitude_":1000000,"dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"10^3/L; 10*3 per liter; litre","source_":"LOINC","loincProperty_":"NCncn","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"thousand per milliliter","csCode_":"10*3/mL","ciCode_":"10*","property_":"number","magnitude_":1000000000,"dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"10^3/mL; 10*3 per mL; thousand per milliliter; millilitre","source_":"LOINC","loincProperty_":"NCncn","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"thousand per microliter","csCode_":"10*3/uL","ciCode_":"10*","property_":"number","magnitude_":999999999999.9999,"dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"10^3/uL; 10*3 per uL; thousand per microliter; microlitre","source_":"LOINC","loincProperty_":"NCncn","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"10 thousand per microliter","csCode_":"10*4/uL","ciCode_":"10*","property_":"number","magnitude_":10000000000000,"dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"10^4/uL; 10*4 per uL; microlitre","source_":"LOINC","loincProperty_":"NCncn","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"10^5 ","csCode_":"10*5","ciCode_":"10*","property_":"number","magnitude_":100000,"dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"one hundred thousand","source_":"LOINC","loincProperty_":"Num","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"10^6","csCode_":"10*6","ciCode_":"10*","property_":"number","magnitude_":1000000,"dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"","source_":"LOINC","loincProperty_":"Num","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"million colony forming unit per liter","csCode_":"10*6.[CFU]/L","ciCode_":"10*","property_":"number","magnitude_":1000000000,"dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"10*6 CFU/L; 10^6 CFU/L; 10^6CFU; 10^6 CFU per liter; million colony forming units; litre","source_":"LOINC","loincProperty_":"ACnc","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"million international unit","csCode_":"10*6.[IU]","ciCode_":"10*","property_":"number","magnitude_":1000000,"dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"10*6 IU; 10^6 IU; international units","source_":"LOINC","loincProperty_":"arb","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"million per 24 hour","csCode_":"10*6/(24.h)","ciCode_":"10*","property_":"number","magnitude_":11.574074074074074,"dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"10*6/24hrs; 10^6/24 hrs; 10*6 per 24 hrs; 10^6 per 24 hours","source_":"LOINC","loincProperty_":"NRat","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"million per kilogram","csCode_":"10*6/kg","ciCode_":"10*","property_":"number","magnitude_":1000,"dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"10^6/kg; 10*6 per kg; 10*6 per kilogram","source_":"LOINC","loincProperty_":"NCnt","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"million per liter","csCode_":"10*6/L","ciCode_":"10*","property_":"number","magnitude_":1000000000,"dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"10^6/L; 10*6 per Liter; 10^6 per Liter; litre;","source_":"LOINC","loincProperty_":"NCncn","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"million per milliliter","csCode_":"10*6/mL","ciCode_":"10*","property_":"number","magnitude_":1000000000000,"dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"10^6/mL; 10*6 per mL; 10*6 per milliliter; millilitre","source_":"LOINC","loincProperty_":"NCncn","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"million per microliter","csCode_":"10*6/uL","ciCode_":"10*","property_":"number","magnitude_":1000000000000000,"dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"10^6/uL; 10^6 per uL; 10^6/mcl; 10^6 per mcl; 10^6 per microliter; microlitre","source_":"LOINC","loincProperty_":"NCncn","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"10^8","csCode_":"10*8","ciCode_":"10*","property_":"number","magnitude_":100000000,"dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"100 million; one hundred million; 10^8","source_":"LOINC","loincProperty_":"Num","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"billion per liter","csCode_":"10*9/L","ciCode_":"10*","property_":"number","magnitude_":1000000000000,"dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"10^9/L; 10*9 per Liter; litre","source_":"LOINC","loincProperty_":"NCncn","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"billion per milliliter","csCode_":"10*9/mL","ciCode_":"10*","property_":"number","magnitude_":1000000000000000,"dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"10^9/mL; 10*9 per mL; 10^9 per mL; 10*9 per milliliter; millilitre","source_":"LOINC","loincProperty_":"NCncn","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"billion per microliter","csCode_":"10*9/uL","ciCode_":"10*","property_":"number","magnitude_":1000000000000000000,"dim_":{"dimVec_":null},"printSymbol_":"10","class_":"dimless","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"10^9/uL; 10^9 per uL; 10^9/mcl; 10^9 per mcl; 10*9 per uL; 10*9 per mcl; 10*9/mcl; 10^9 per microliter; microlitre","source_":"LOINC","loincProperty_":"NCncn","category_":"Clinical","csUnitString_":"1","ciUnitString_":"1","baseFactorStr_":"10","baseFactor_":"10","defError_":false},{"isBase_":false,"name_":"10 liter per minute per square meter","csCode_":"10.L/(min.m2)","ciCode_":"","property_":"volume","magnitude_":0.00016666666666666666,"dim_":{"dimVec_":[1,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"10 liters per minutes per square meter; 10 L per min per m2; m^2; 10 L/(min*m2); 10L/(min*m^2); litres; sq. meter; metre; meters squared","source_":"LOINC","loincProperty_":"ArVRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"10 liter per minute","csCode_":"10.L/min","ciCode_":"","property_":"volume","magnitude_":0.00016666666666666666,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"10 liters per minute; 10 L per min; 10L; 10 L/min; litre","source_":"LOINC","loincProperty_":"VRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"10 micronewton second per centimeter to the fifth power per square meter","csCode_":"10.uN.s/(cm5.m2)","ciCode_":"N","property_":"force","magnitude_":100000000,"dim_":{"dimVec_":[-6,-1,1,0,0,0,0]},"printSymbol_":"N","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"dyne second per centimeter5 and square meter; dyn.s/(cm5.m2) dyn.s/cm5/m2","source_":"LOINC","loincProperty_":"","category_":"Clinical","csUnitString_":"kg.m/s2","ciUnitString_":"KG.M/S2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"24 hour","csCode_":"24.h","ciCode_":"HR","property_":"time","magnitude_":86400,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"h","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"24hrs; 24 hrs; 24 hours; days; dy","source_":"LOINC","loincProperty_":"Time","category_":"Clinical","csUnitString_":"min","ciUnitString_":"MIN","baseFactorStr_":"60","baseFactor_":"60","defError_":false},{"isBase_":false,"name_":"ampere per meter","csCode_":"A/m","ciCode_":"A","property_":"electric current","magnitude_":1,"dim_":{"dimVec_":[-1,-1,0,0,0,1,0]},"printSymbol_":"A","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"A/m; amp/meter; magnetic field strength; H; B; amperes per meter; metre","source_":"LOINC","loincProperty_":"","category_":"Clinical","csUnitString_":"C/s","ciUnitString_":"C/S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"centigram","csCode_":"cg","ciCode_":"G","property_":"mass","magnitude_":0.01,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"centigrams; cg; cgm","source_":"LOINC","loincProperty_":"Mass","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"centiliter","csCode_":"cL","ciCode_":"","property_":"volume","magnitude_":0.00001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"centiliters; centilitres","source_":"LOINC","loincProperty_":"Vol","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"centimeter","csCode_":"cm","ciCode_":"M","property_":"length","magnitude_":0.01,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"centimeters; centimetres","source_":"LOINC","loincProperty_":"Len","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"centimeter of water","csCode_":"cm[H2O]","ciCode_":"M[H2O]","property_":"pressure","magnitude_":98066.5,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"m HO<sub><r>2</r></sub>","class_":"clinical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"cm H2O; cmH2O; centimetre; pressure","source_":"LOINC","loincProperty_":"Pres","category_":"Clinical","csUnitString_":"kPa","ciUnitString_":"KPAL","baseFactorStr_":"980665e-5","baseFactor_":"9.80665","defError_":false},{"isBase_":false,"name_":"centimeter of water per liter per second","csCode_":"cm[H2O]/L/s","ciCode_":"M[H2O]","property_":"pressure","magnitude_":98066500,"dim_":{"dimVec_":[-4,-3,1,0,0,0,0]},"printSymbol_":"m HO<sub><r>2</r></sub>","class_":"clinical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"cm[H2O]/(L/s); cm[H2O].s/L; cm H2O/L/sec; cmH2O/L/sec; cmH2O/Liter; cmH2O per L per secs; centimeters of water per liters per second; centimetres; litres; cm[H2O]/(L/s)","source_":"LOINC","loincProperty_":"PresRat","category_":"Clinical","csUnitString_":"kPa","ciUnitString_":"KPAL","baseFactorStr_":"980665e-5","baseFactor_":"9.80665","defError_":false},{"isBase_":false,"name_":"centimeter of water per second per meter","csCode_":"cm[H2O]/s/m","ciCode_":"M[H2O]","property_":"pressure","magnitude_":98066.5,"dim_":{"dimVec_":[-2,-3,1,0,0,0,0]},"printSymbol_":"m HO<sub><r>2</r></sub>","class_":"clinical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"cm[H2O]/(s.m); cm H2O/s/m; cmH2O; cmH2O/sec/m; cmH2O per secs per meters; centimeters of water per seconds per meter; centimetres; metre","source_":"LOINC","loincProperty_":"PresRat","category_":"Clinical","csUnitString_":"kPa","ciUnitString_":"KPAL","baseFactorStr_":"980665e-5","baseFactor_":"9.80665","defError_":false},{"isBase_":false,"name_":"centimeter of mercury","csCode_":"cm[Hg]","ciCode_":"M[HG]","property_":"pressure","magnitude_":1333220,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"m Hg","class_":"clinical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"centimeters of mercury; centimetres; cmHg; cm Hg","source_":"LOINC","loincProperty_":"Pres","category_":"Clinical","csUnitString_":"kPa","ciUnitString_":"KPAL","baseFactorStr_":"133.3220","baseFactor_":"133.3220","defError_":false},{"isBase_":true,"name_":"square centimeter","csCode_":"cm2","ciCode_":"M","property_":"length","magnitude_":0.0001,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"cm^2; sq cm; centimeters squared; square centimeters; centimetre; area","source_":"LOINC","loincProperty_":"Area","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"square centimeter per second","csCode_":"cm2/s","ciCode_":"M","property_":"length","magnitude_":0.0001,"dim_":{"dimVec_":[2,-1,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"cm^2/sec; square centimeters per second; sq cm per sec; cm2; centimeters squared; centimetres","source_":"LOINC","loincProperty_":"AreaRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"centipoise","csCode_":"cP","ciCode_":"P","property_":"dynamic viscosity","magnitude_":1,"dim_":{"dimVec_":[-1,-1,1,0,0,0,0]},"printSymbol_":"P","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"cps","source_":"LOINC","loincProperty_":"Visc","category_":"Clinical","csUnitString_":"dyn.s/cm2","ciUnitString_":"DYN.S/CM2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"centistoke","csCode_":"cSt","ciCode_":"ST","property_":"kinematic viscosity","magnitude_":0.0000010000000000000002,"dim_":{"dimVec_":[2,-1,0,0,0,0,0]},"printSymbol_":"St","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"centistokes","source_":"LOINC","loincProperty_":"Visc","category_":"Clinical","csUnitString_":"cm2/s","ciUnitString_":"CM2/S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"dekaliter per minute","csCode_":"daL/min","ciCode_":"","property_":"volume","magnitude_":0.00016666666666666666,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"dekalitres; dekaliters per minute; per min","source_":"LOINC","loincProperty_":"VRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"dekaliter per minute per square meter","csCode_":"daL/min/m2","ciCode_":"","property_":"volume","magnitude_":0.00016666666666666666,"dim_":{"dimVec_":[1,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"daL/min/m^2; daL/minute/m2; sq. meter; dekaliters per minutes per square meter; meter squared; dekalitres; metre","source_":"LOINC","loincProperty_":"ArVRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"decibel","csCode_":"dB","ciCode_":"B","property_":"level","magnitude_":0.1,"dim_":{"dimVec_":null},"printSymbol_":"B","class_":"levels","isMetric_":true,"variable_":null,"cnv_":"lg","cnvPfx_":1,"isSpecial_":true,"isArbitrary_":false,"synonyms_":"","source_":"LOINC","loincProperty_":"LogRto","category_":"Clinical","csUnitString_":"1","ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":1,"defError_":false},{"isBase_":false,"name_":"degree per second","csCode_":"deg/s","ciCode_":"DEG","property_":"plane angle","magnitude_":0.017453292519943295,"dim_":{"dimVec_":null},"printSymbol_":"°","class_":"iso1000","isMetric_":false,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"deg/sec; deg per sec; °/sec; twist rate; angular speed; rotational speed","source_":"LOINC","loincProperty_":"ARat","category_":"Clinical","csUnitString_":"[pi].rad/360","ciUnitString_":"[PI].RAD/360","baseFactorStr_":"2","baseFactor_":"2","defError_":false},{"isBase_":true,"name_":"decigram","csCode_":"dg","ciCode_":"G","property_":"mass","magnitude_":0.1,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"decigrams; dgm; 0.1 grams; 1/10 gm","source_":"LOINC","loincProperty_":"Mass","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"deciliter","csCode_":"dL","ciCode_":"","property_":"volume","magnitude_":0.0001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"deciliters; decilitres; 0.1 liters; 1/10 L","source_":"LOINC","loincProperty_":"Vol","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"decimeter","csCode_":"dm","ciCode_":"M","property_":"length","magnitude_":0.1,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"decimeters; decimetres; 0.1 meters; 1/10 m; 10 cm; centimeters","source_":"LOINC","loincProperty_":"Len","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"square decimeter per square second","csCode_":"dm2/s2","ciCode_":"M","property_":"length","magnitude_":0.010000000000000002,"dim_":{"dimVec_":[2,-2,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"dm2 per s2; dm^2/s^2; decimeters squared per second squared; sq dm; sq sec","source_":"LOINC","loincProperty_":"EngMass (massic energy)","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"dyne second per centimeter per square meter","csCode_":"dyn.s/(cm.m2)","ciCode_":"DYN","property_":"force","magnitude_":1,"dim_":{"dimVec_":[-2,-1,1,0,0,0,0]},"printSymbol_":"dyn","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"(dyn*s)/(cm*m2); (dyn*s)/(cm*m^2); dyn s per cm per m2; m^2; dyne seconds per centimeters per square meter; centimetres; sq. meter; squared","source_":"LOINC","loincProperty_":"","category_":"Clinical","csUnitString_":"g.cm/s2","ciUnitString_":"G.CM/S2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"dyne second per centimeter","csCode_":"dyn.s/cm","ciCode_":"DYN","property_":"force","magnitude_":1,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"dyn","class_":"cgs","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"(dyn*s)/cm; dyn sec per cm; seconds; centimetre","source_":"LOINC","loincProperty_":"","category_":"Clinical","csUnitString_":"g.cm/s2","ciUnitString_":"G.CM/S2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"equivalent per liter","csCode_":"eq/L","ciCode_":"EQ","property_":"amount of substance","magnitude_":6.0221366999999994e+26,"dim_":{"dimVec_":null},"printSymbol_":"eq","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"eq/liter; eq/litre; eqs; equivalents per liter; litre","source_":"LOINC","loincProperty_":"SCnc","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"equivalent per milliliter","csCode_":"eq/mL","ciCode_":"EQ","property_":"amount of substance","magnitude_":6.0221367e+29,"dim_":{"dimVec_":null},"printSymbol_":"eq","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"equivalent/milliliter; equivalents per milliliter; eq per mL; millilitre","source_":"LOINC","loincProperty_":"SCnc","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"equivalent per millimole","csCode_":"eq/mmol","ciCode_":"EQ","property_":"amount of substance","magnitude_":1000,"dim_":{"dimVec_":null},"printSymbol_":"eq","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"equivalent/millimole; equivalents per millimole; eq per mmol","source_":"LOINC","loincProperty_":"SRto","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"equivalent per micromole","csCode_":"eq/umol","ciCode_":"EQ","property_":"amount of substance","magnitude_":1000000,"dim_":{"dimVec_":null},"printSymbol_":"eq","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"equivalent/micromole; equivalents per micromole; eq per umol","source_":"LOINC","loincProperty_":"SRto","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"femtogram","csCode_":"fg","ciCode_":"G","property_":"mass","magnitude_":1e-15,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"fg; fgm; femtograms; weight","source_":"LOINC","loincProperty_":"Mass","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"femtoliter","csCode_":"fL","ciCode_":"","property_":"volume","magnitude_":1e-18,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"femtolitres; femtoliters","source_":"LOINC","loincProperty_":"Vol; EntVol","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"femtometer","csCode_":"fm","ciCode_":"M","property_":"length","magnitude_":1e-15,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"femtometres; femtometers","source_":"LOINC","loincProperty_":"Len","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"femtomole","csCode_":"fmol","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"femtomoles","source_":"LOINC","loincProperty_":"EntSub","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"femtomole per gram","csCode_":"fmol/g","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"femtomoles; fmol/gm; fmol per gm","source_":"LOINC","loincProperty_":"SCnt","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"femtomole per liter","csCode_":"fmol/L","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"femtomoles; fmol per liter; litre","source_":"LOINC","loincProperty_":"SCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"femtomole per milligram","csCode_":"fmol/mg","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"fmol per mg; femtomoles","source_":"LOINC","loincProperty_":"SCnt","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"femtomole per milliliter","csCode_":"fmol/mL","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"femtomoles; millilitre; fmol per mL; fmol per milliliter","source_":"LOINC","loincProperty_":"SCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":true,"name_":"gram meter","csCode_":"g.m","ciCode_":"G","property_":"mass","magnitude_":1,"dim_":{"dimVec_":[1,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"g*m; gxm","source_":"LOINC","loincProperty_":"Enrg","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per 100 gram","csCode_":"g/(100.g)","ciCode_":"G","property_":"mass","magnitude_":0.01,"dim_":{"dimVec_":[0,0,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"g/100 gm; 100gm; grams per 100 grams; gm per 100 gm","source_":"LOINC","loincProperty_":"MCnt","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per 12 hour","csCode_":"g/(12.h)","ciCode_":"G","property_":"mass","magnitude_":0.000023148148148148147,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"gm/12hrs; 12 hrs; gm per 12 hrs; 12hrs; grams per 12 hours","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per 24 hour","csCode_":"g/(24.h)","ciCode_":"G","property_":"mass","magnitude_":0.000011574074074074073,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"gm/24hrs; gm/24 hrs; gm per 24 hrs; 24hrs; grams per 24 hours; gm/dy; gm per dy; grams per day","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per 3 days","csCode_":"g/(3.d)","ciCode_":"G","property_":"mass","magnitude_":0.000003858024691358025,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"gm/3dy; gm/3 dy; gm per 3 days; grams","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per 4 hour","csCode_":"g/(4.h)","ciCode_":"G","property_":"mass","magnitude_":0.00006944444444444444,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"gm/4hrs; gm/4 hrs; gm per 4 hrs; 4hrs; grams per 4 hours","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per 48 hour","csCode_":"g/(48.h)","ciCode_":"G","property_":"mass","magnitude_":0.000005787037037037037,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"gm/48hrs; gm/48 hrs; gm per 48 hrs; 48hrs; grams per 48 hours","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per 5 hour","csCode_":"g/(5.h)","ciCode_":"G","property_":"mass","magnitude_":0.00005555555555555556,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"gm/5hrs; gm/5 hrs; gm per 5 hrs; 5hrs; grams per 5 hours","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per 6 hour","csCode_":"g/(6.h)","ciCode_":"G","property_":"mass","magnitude_":0.000046296296296296294,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"gm/6hrs; gm/6 hrs; gm per 6 hrs; 6hrs; grams per 6 hours","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per 72 hour","csCode_":"g/(72.h)","ciCode_":"G","property_":"mass","magnitude_":0.000003858024691358025,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"gm/72hrs; gm/72 hrs; gm per 72 hrs; 72hrs; grams per 72 hours","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per cubic centimeter","csCode_":"g/cm3","ciCode_":"G","property_":"mass","magnitude_":999999.9999999999,"dim_":{"dimVec_":[-3,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"g/cm^3; gm per cm3; g per cm^3; grams per centimeter cubed; cu. cm; centimetre; g/mL; gram per milliliter; millilitre","source_":"LOINC","loincProperty_":"MCnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per day","csCode_":"g/d","ciCode_":"G","property_":"mass","magnitude_":0.000011574074074074073,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"gm/dy; gm per dy; grams per day; gm/24hrs; gm/24 hrs; gm per 24 hrs; 24hrs; grams per 24 hours; serving","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per deciliter","csCode_":"g/dL","ciCode_":"G","property_":"mass","magnitude_":10000,"dim_":{"dimVec_":[-3,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"gm/dL; gm per dL; grams per deciliter; decilitre","source_":"LOINC","loincProperty_":"MCnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per gram","csCode_":"g/g","ciCode_":"G","property_":"mass","magnitude_":1,"dim_":{"dimVec_":[0,0,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"gm; grams","source_":"LOINC","loincProperty_":"MRto ","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per hour","csCode_":"g/h","ciCode_":"G","property_":"mass","magnitude_":0.0002777777777777778,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"gm/hr; gm per hr; grams; intake; output","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per hour per square meter","csCode_":"g/h/m2","ciCode_":"G","property_":"mass","magnitude_":0.0002777777777777778,"dim_":{"dimVec_":[-2,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"gm/hr/m2; gm/h/m2; /m^2; sq. m; g per hr per m2; grams per hours per square meter; meter squared; metre","source_":"LOINC","loincProperty_":"ArMRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per kilogram","csCode_":"g/kg ","ciCode_":"G","property_":"mass","magnitude_":0.001,"dim_":{"dimVec_":[0,0,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"g per kg; gram per kilograms","source_":"LOINC","loincProperty_":"MCnt","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per kilogram per 8 hour ","csCode_":"g/kg/(8.h)","ciCode_":"G","property_":"mass","magnitude_":3.472222222222222e-8,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"g/(8.kg.h); gm/kg/8hrs; 8 hrs; g per kg per 8 hrs; 8hrs; grams per kilograms per 8 hours; shift","source_":"LOINC","loincProperty_":"MCntRat; RelMRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per kilogram per day","csCode_":"g/kg/d","ciCode_":"G","property_":"mass","magnitude_":1.1574074074074074e-8,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"g/(kg.d); gm/kg/dy; gm per kg per dy; grams per kilograms per day","source_":"LOINC","loincProperty_":"RelMRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per kilogram per hour","csCode_":"g/kg/h","ciCode_":"G","property_":"mass","magnitude_":2.7777777777777776e-7,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"g/(kg.h); g/kg/hr; g per kg per hrs; grams per kilograms per hour","source_":"LOINC","loincProperty_":"MCntRat; RelMRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per kilogram per minute","csCode_":"g/kg/min","ciCode_":"G","property_":"mass","magnitude_":0.000016666666666666667,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"g/(kg.min); g/kg/min; g per kg per min; grams per kilograms per minute","source_":"LOINC","loincProperty_":"MCntRat; RelMRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per liter","csCode_":"g/L","ciCode_":"G","property_":"mass","magnitude_":1000,"dim_":{"dimVec_":[-3,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"gm per liter; g/liter; grams per liter; litre","source_":"LOINC","loincProperty_":"MCnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per square meter","csCode_":"g/m2","ciCode_":"G","property_":"mass","magnitude_":1,"dim_":{"dimVec_":[-2,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"g/m^2; gram/square meter; g/sq m; g per m2; g per m^2; grams per square meter; meters squared; metre","source_":"LOINC","loincProperty_":"ArMass","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per milligram","csCode_":"g/mg","ciCode_":"G","property_":"mass","magnitude_":1000,"dim_":{"dimVec_":[0,0,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"g per mg; grams per milligram","source_":"LOINC","loincProperty_":"MCnt; MRto","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per minute","csCode_":"g/min","ciCode_":"G","property_":"mass","magnitude_":0.016666666666666666,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"g per min; grams per minute; gram/minute","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per milliliter","csCode_":"g/mL","ciCode_":"G","property_":"mass","magnitude_":1000000,"dim_":{"dimVec_":[-3,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"g per mL; grams per milliliter; millilitre","source_":"LOINC","loincProperty_":"MCnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"gram per millimole","csCode_":"g/mmol","ciCode_":"G","property_":"mass","magnitude_":1.6605401866749388e-21,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"grams per millimole; g per mmol","source_":"LOINC","loincProperty_":"Ratio","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"joule per liter","csCode_":"J/L","ciCode_":"J","property_":"energy","magnitude_":1000000,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"J","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"joules per liter; litre; J per L","source_":"LOINC","loincProperty_":"EngCnc","category_":"Clinical","csUnitString_":"N.m","ciUnitString_":"N.M","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"degree Kelvin per Watt","csCode_":"K/W","ciCode_":"K","property_":"temperature","magnitude_":0.001,"dim_":{"dimVec_":[-2,3,-1,0,1,0,0]},"printSymbol_":"K","class_":null,"isMetric_":false,"variable_":"C","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"degree Kelvin/Watt; K per W; thermal ohm; thermal resistance","source_":"LOINC","loincProperty_":"TempEngRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"kilo international unit per liter","csCode_":"k[IU]/L","ciCode_":"[IU]","property_":"arbitrary","magnitude_":1000000,"dim_":{"dimVec_":null},"printSymbol_":"i.U.","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"kIU/L; kIU per L; kIU per liter; kilo international units; litre; allergens; allergy units","source_":"LOINC","loincProperty_":"ACnc","category_":"Clinical","csUnitString_":"[iU]","ciUnitString_":"[IU]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"kilo international unit per milliliter","csCode_":"k[IU]/mL","ciCode_":"[IU]","property_":"arbitrary","magnitude_":1000000000,"dim_":{"dimVec_":null},"printSymbol_":"i.U.","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"kIU/mL; kIU per mL; kIU per milliliter; kilo international units; millilitre; allergens; allergy units","source_":"LOINC","loincProperty_":"ACnc","category_":"Clinical","csUnitString_":"[iU]","ciUnitString_":"[IU]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"katal per kilogram","csCode_":"kat/kg","ciCode_":"KAT","property_":"catalytic activity","magnitude_":602213670000000000000,"dim_":{"dimVec_":null},"printSymbol_":"kat","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kat per kg; katals per kilogram; mol/s/kg; moles per seconds per kilogram","source_":"LOINC","loincProperty_":"CCnt","category_":"Clinical","csUnitString_":"mol/s","ciUnitString_":"MOL/S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"katal per liter","csCode_":"kat/L","ciCode_":"KAT","property_":"catalytic activity","magnitude_":6.0221366999999994e+26,"dim_":{"dimVec_":null},"printSymbol_":"kat","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kat per L; katals per liter; litre; mol/s/L; moles per seconds per liter","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"mol/s","ciUnitString_":"MOL/S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"kilocalorie","csCode_":"kcal","ciCode_":"CAL","property_":"energy","magnitude_":4184000,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"cal","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kilogram calories; large calories; food calories; kcals","source_":"LOINC","loincProperty_":"EngRat","category_":"Clinical","csUnitString_":"cal_th","ciUnitString_":"CAL_TH","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"kilocalorie per 24 hour","csCode_":"kcal/(24.h)","ciCode_":"CAL","property_":"energy","magnitude_":48.425925925925924,"dim_":{"dimVec_":[2,-3,1,0,0,0,0]},"printSymbol_":"cal","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kcal/24hrs; kcal/24 hrs; kcal per 24hrs; kilocalories per 24 hours; kilojoules; kJ/24hr; kJ/(24.h); kJ/dy; kilojoules per days; intake; calories burned; metabolic rate; food calories","source_":"","loincProperty_":"EngRat","category_":"Clinical","csUnitString_":"cal_th","ciUnitString_":"CAL_TH","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"kilocalorie per ounce - international","csCode_":"kcal/[oz_av]","ciCode_":"CAL","property_":"energy","magnitude_":147586.25679704445,"dim_":{"dimVec_":[2,-2,0,0,0,0,0]},"printSymbol_":"cal","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kcal/oz; kcal per ozs; large calories per ounces; food calories; servings","source_":"LOINC","loincProperty_":"EngCnt","category_":"Clinical","csUnitString_":"cal_th","ciUnitString_":"CAL_TH","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"kilocalorie per day","csCode_":"kcal/d","ciCode_":"CAL","property_":"energy","magnitude_":48.425925925925924,"dim_":{"dimVec_":[2,-3,1,0,0,0,0]},"printSymbol_":"cal","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kcal/dy; kcal per day; kilocalories per days; kilojoules; kJ/dy; kilojoules per days; intake; calories burned; metabolic rate; food calories","source_":"LOINC","loincProperty_":"EngRat","category_":"Clinical","csUnitString_":"cal_th","ciUnitString_":"CAL_TH","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"kilocalorie per hour","csCode_":"kcal/h","ciCode_":"CAL","property_":"energy","magnitude_":1162.2222222222222,"dim_":{"dimVec_":[2,-3,1,0,0,0,0]},"printSymbol_":"cal","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kcal/hrs; kcals per hr; intake; kilocalories per hours; kilojoules","source_":"LOINC","loincProperty_":"EngRat","category_":"Clinical","csUnitString_":"cal_th","ciUnitString_":"CAL_TH","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"kilocalorie per kilogram per 24 hour","csCode_":"kcal/kg/(24.h)","ciCode_":"CAL","property_":"energy","magnitude_":0.04842592592592593,"dim_":{"dimVec_":[2,-3,0,0,0,0,0]},"printSymbol_":"cal","class_":"heat","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kcal/kg/24hrs; 24 hrs; kcal per kg per 24hrs; kilocalories per kilograms per 24 hours; kilojoules","source_":"LOINC","loincProperty_":"EngCntRat","category_":"Clinical","csUnitString_":"cal_th","ciUnitString_":"CAL_TH","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"kilogram","csCode_":"kg","ciCode_":"G","property_":"mass","magnitude_":1000,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kilograms; kgs","source_":"LOINC","loincProperty_":"Mass","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"kilogram meter per second","csCode_":"kg.m/s","ciCode_":"G","property_":"mass","magnitude_":1000,"dim_":{"dimVec_":[1,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kg*m/s; kg.m per sec; kg*m per sec; p; momentum","source_":"LOINC","loincProperty_":"","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"kilogram per second per square meter","csCode_":"kg/(s.m2)","ciCode_":"G","property_":"mass","magnitude_":1000,"dim_":{"dimVec_":[-2,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kg/(s*m2); kg/(s*m^2); kg per s per m2; per sec; per m^2; kilograms per seconds per square meter; meter squared; metre","source_":"LOINC","loincProperty_":"ArMRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"kilogram per hour","csCode_":"kg/h","ciCode_":"G","property_":"mass","magnitude_":0.2777777777777778,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kg/hr; kg per hr; kilograms per hour","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"kilogram per liter","csCode_":"kg/L","ciCode_":"G","property_":"mass","magnitude_":1000000,"dim_":{"dimVec_":[-3,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kg per liter; litre; kilograms","source_":"LOINC","loincProperty_":"MCnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"kilogram per square meter","csCode_":"kg/m2","ciCode_":"G","property_":"mass","magnitude_":1000,"dim_":{"dimVec_":[-2,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kg/m^2; kg/sq. m; kg per m2; per m^2; per sq. m; kilograms; meter squared; metre; BMI","source_":"LOINC","loincProperty_":"Ratio","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"kilogram per cubic meter","csCode_":"kg/m3","ciCode_":"G","property_":"mass","magnitude_":1000,"dim_":{"dimVec_":[-3,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kg/m^3; kg/cu. m; kg per m3; per m^3; per cu. m; kilograms; meters cubed; metre","source_":"LOINC","loincProperty_":"MCnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"kilogram per minute","csCode_":"kg/min","ciCode_":"G","property_":"mass","magnitude_":16.666666666666668,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kilogram/minute; kg per min; kilograms per minute","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"kilogram per mole","csCode_":"kg/mol","ciCode_":"G","property_":"mass","magnitude_":1.6605401866749388e-21,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kilogram/mole; kg per mol; kilograms per mole","source_":"LOINC","loincProperty_":"SCnt","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"kilogram per second","csCode_":"kg/s","ciCode_":"G","property_":"mass","magnitude_":1000,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kg/sec; kilogram/second; kg per sec; kilograms; second","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"kiloliter","csCode_":"kL","ciCode_":"","property_":"volume","magnitude_":1,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kiloliters; kilolitres; m3; m^3; meters cubed; metre","source_":"LOINC","loincProperty_":"Vol","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"kilometer","csCode_":"km","ciCode_":"M","property_":"length","magnitude_":1000,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kilometers; kilometres; distance","source_":"LOINC","loincProperty_":"Len","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"kilopascal","csCode_":"kPa","ciCode_":"PAL","property_":"pressure","magnitude_":1000000,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"Pa","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kilopascals; pressure","source_":"LOINC","loincProperty_":"Pres; PPresDiff","category_":"Clinical","csUnitString_":"N/m2","ciUnitString_":"N/M2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"kilosecond","csCode_":"ks","ciCode_":"S","property_":"time","magnitude_":1000,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"s","class_":null,"isMetric_":false,"variable_":"T","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kiloseconds; ksec","source_":"LOINC","loincProperty_":"Time","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"kilo enzyme unit","csCode_":"kU","ciCode_":"U","property_":"catalytic activity","magnitude_":10036894500000000000,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"units; mmol/min; millimoles per minute","source_":"LOINC","loincProperty_":"CAct","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"kilo enzyme unit per gram","csCode_":"kU/g","ciCode_":"U","property_":"catalytic activity","magnitude_":10036894500000000000,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"units per grams; kU per gm","source_":"LOINC","loincProperty_":"CCnt","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"kilo enzyme unit per liter","csCode_":"kU/L","ciCode_":"U","property_":"catalytic activity","magnitude_":1.00368945e+22,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"units per liter; litre; enzymatic activity; enzyme activity per volume; activities","source_":"LOINC","loincProperty_":"ACnc; CCnc","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"kilo enzyme unit per milliliter","csCode_":"kU/mL","ciCode_":"U","property_":"catalytic activity","magnitude_":1.00368945e+25,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"kU per mL; units per milliliter; millilitre; enzymatic activity per volume; enzyme activities","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Liters per 24 hour","csCode_":"L/(24.h)","ciCode_":"","property_":"volume","magnitude_":1.1574074074074074e-8,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"L/24hrs; L/24 hrs; L per 24hrs; liters per 24 hours; day; dy; litres; volume flow rate","source_":"LOINC","loincProperty_":"VRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Liters per 8 hour","csCode_":"L/(8.h)","ciCode_":"","property_":"volume","magnitude_":3.472222222222222e-8,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"L/8hrs; L/8 hrs; L per 8hrs; liters per 8 hours; litres; volume flow rate; shift","source_":"LOINC","loincProperty_":"VRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Liters per minute per square meter","csCode_":"L/(min.m2) ","ciCode_":"","property_":"volume","magnitude_":0.000016666666666666667,"dim_":{"dimVec_":[1,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"L/(min.m2); L/min/m^2; L/min/sq. meter; L per min per m2; m^2; liters per minutes per square meter; meter squared; litres; metre ","source_":"LOINC","loincProperty_":"ArVRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Liters per day","csCode_":"L/d","ciCode_":"","property_":"volume","magnitude_":1.1574074074074074e-8,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"L/dy; L per day; 24hrs; 24 hrs; 24 hours; liters; litres","source_":"LOINC","loincProperty_":"VRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Liters per hour","csCode_":"L/h","ciCode_":"","property_":"volume","magnitude_":2.7777777777777776e-7,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"L/hr; L per hr; litres","source_":"LOINC","loincProperty_":"VRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Liters per kilogram","csCode_":"L/kg","ciCode_":"","property_":"volume","magnitude_":0.000001,"dim_":{"dimVec_":[3,0,-1,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"L per kg; litre","source_":"LOINC","loincProperty_":"VCnt","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Liters per liter","csCode_":"L/L","ciCode_":"","property_":"volume","magnitude_":1,"dim_":{"dimVec_":[0,0,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"L per L; liter/liter; litre","source_":"LOINC","loincProperty_":"VFr","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Liters per minute","csCode_":"L/min","ciCode_":"","property_":"volume","magnitude_":0.000016666666666666667,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"liters per minute; litre","source_":"LOINC","loincProperty_":"VRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Liters per minute per square meter","csCode_":"L/min/m2","ciCode_":"","property_":"volume","magnitude_":0.000016666666666666667,"dim_":{"dimVec_":[1,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"L/(min.m2); L/min/m^2; L/min/sq. meter; L per min per m2; m^2; liters per minutes per square meter; meter squared; litres; metre ","source_":"","loincProperty_":"ArVRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Liters per second","csCode_":"L/s","ciCode_":"","property_":"volume","magnitude_":0.001,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"L per sec; litres","source_":"LOINC","loincProperty_":"VRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Liters per second per square second","csCode_":"L/s/s2","ciCode_":"","property_":"volume","magnitude_":0.001,"dim_":{"dimVec_":[3,-3,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"L/s/s^2; L/sec/sec2; L/sec/sec^2; L/sec/sq. sec; L per s per s2; L per sec per sec2; s^2; sec^2; liters per seconds per square second; second squared; litres ","source_":"LOINC","loincProperty_":"ArVRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"lumen square meter","csCode_":"lm.m2","ciCode_":"LM","property_":"luminous flux","magnitude_":1,"dim_":{"dimVec_":[2,0,0,2,0,0,1]},"printSymbol_":"lm","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"lm*m2; lm*m^2; lumen meters squared; lumen sq. meters; metres","source_":"LOINC","loincProperty_":"","category_":"Clinical","csUnitString_":"cd.sr","ciUnitString_":"CD.SR","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"meter per second","csCode_":"m/s","ciCode_":"M","property_":"length","magnitude_":1,"dim_":{"dimVec_":[1,-1,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"meter/second; m per sec; meters per second; metres; velocity; speed","source_":"LOINC","loincProperty_":"Vel","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"meter per square second","csCode_":"m/s2","ciCode_":"M","property_":"length","magnitude_":1,"dim_":{"dimVec_":[1,-2,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"m/s^2; m/sq. sec; m per s2; per s^2; meters per square second; second squared; sq second; metres; acceleration","source_":"LOINC","loincProperty_":"Accel","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"milli international unit per liter","csCode_":"m[IU]/L","ciCode_":"[IU]","property_":"arbitrary","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"i.U.","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"mIU/L; m IU/L; mIU per liter; units; litre","source_":"LOINC","loincProperty_":"ACnc","category_":"Clinical","csUnitString_":"[iU]","ciUnitString_":"[IU]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milli  international unit per milliliter","csCode_":"m[IU]/mL","ciCode_":"[IU]","property_":"arbitrary","magnitude_":1000.0000000000001,"dim_":{"dimVec_":null},"printSymbol_":"i.U.","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"mIU/mL; m IU/mL; mIU per mL; milli international units per milliliter; millilitre","source_":"LOINC","loincProperty_":"ACnc","category_":"Clinical","csUnitString_":"[iU]","ciUnitString_":"[IU]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"square meter","csCode_":"m2","ciCode_":"M","property_":"length","magnitude_":1,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"m^2; sq m; square meters; meters squared; metres","source_":"LOINC","loincProperty_":"Area","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"square meter per second","csCode_":"m2/s","ciCode_":"M","property_":"length","magnitude_":1,"dim_":{"dimVec_":[2,-1,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"m^2/sec; m2 per sec; m^2 per sec; sq m/sec; meters squared/seconds; sq m per sec; meters squared; metres","source_":"LOINC","loincProperty_":"ArRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"cubic meter per second","csCode_":"m3/s","ciCode_":"M","property_":"length","magnitude_":1,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"m^3/sec; m3 per sec; m^3 per sec; cu m/sec; cubic meters per seconds; meters cubed; metres","source_":"LOINC","loincProperty_":"VRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"milliampere","csCode_":"mA","ciCode_":"A","property_":"electric current","magnitude_":0.001,"dim_":{"dimVec_":[0,-1,0,0,0,1,0]},"printSymbol_":"A","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mamp; milliamperes","source_":"LOINC","loincProperty_":"ElpotRat","category_":"Clinical","csUnitString_":"C/s","ciUnitString_":"C/S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"millibar","csCode_":"mbar","ciCode_":"BAR","property_":"pressure","magnitude_":3.15576e+24,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"bar","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"millibars","source_":"LOINC","loincProperty_":"Pres","category_":"Clinical","csUnitString_":"Pa","ciUnitString_":"PAL","baseFactorStr_":"1e5","baseFactor_":100000,"defError_":false},{"isBase_":false,"name_":"millibar second per liter","csCode_":"mbar.s/L","ciCode_":"BAR","property_":"pressure","magnitude_":3.15576e+27,"dim_":{"dimVec_":[-3,2,0,0,0,0,0]},"printSymbol_":"bar","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mbar*s/L; mbar.s per L; mbar*s per L; millibar seconds per liter; millibar second per litre","source_":"LOINC","loincProperty_":"","category_":"Clinical","csUnitString_":"Pa","ciUnitString_":"PAL","baseFactorStr_":"1e5","baseFactor_":100000,"defError_":false},{"isBase_":false,"name_":"millibar per liter per second","csCode_":"mbar/L/s","ciCode_":"BAR","property_":"pressure","magnitude_":3.15576e+27,"dim_":{"dimVec_":[-3,0,0,0,0,0,0]},"printSymbol_":"bar","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mbar/(L.s); mbar/L/sec; mbar/liter/second;  mbar per L per sec; mbar per liter per second; millibars per liters per seconds; litres","source_":"LOINC","loincProperty_":"PresCncRat","category_":"Clinical","csUnitString_":"Pa","ciUnitString_":"PAL","baseFactorStr_":"1e5","baseFactor_":100000,"defError_":false},{"isBase_":false,"name_":"milliequivalent","csCode_":"meq","ciCode_":"EQ","property_":"amount of substance","magnitude_":602213670000000000000,"dim_":{"dimVec_":null},"printSymbol_":"eq","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"milliequivalents; meqs","source_":"LOINC","loincProperty_":"Sub","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliequivalent per 2 hour","csCode_":"meq/(2.h)","ciCode_":"EQ","property_":"amount of substance","magnitude_":83640787500000000,"dim_":{"dimVec_":null},"printSymbol_":"eq","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"meq/2hrs; meq/2 hrs; meq per 2 hrs; milliequivalents per 2 hours","source_":"LOINC","loincProperty_":"SRat","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliequivalent per 24 hour","csCode_":"meq/(24.h)","ciCode_":"EQ","property_":"amount of substance","magnitude_":6970065625000000,"dim_":{"dimVec_":null},"printSymbol_":"eq","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"meq/24hrs; meq/24 hrs; meq per 24 hrs; milliequivalents per 24 hours","source_":"LOINC","loincProperty_":"SRat","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliequivalent per 8 hour","csCode_":"meq/(8.h)","ciCode_":"EQ","property_":"amount of substance","magnitude_":20910196875000000,"dim_":{"dimVec_":null},"printSymbol_":"eq","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"meq/8hrs; meq/8 hrs; meq per 8 hrs; milliequivalents per 8 hours; shift","source_":"LOINC","loincProperty_":"SRat","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliequivalent per day","csCode_":"meq/d","ciCode_":"EQ","property_":"amount of substance","magnitude_":6970065625000000,"dim_":{"dimVec_":null},"printSymbol_":"eq","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"meq/dy; meq per day; milliquivalents per days; meq/24hrs; meq/24 hrs; meq per 24 hrs; milliequivalents per 24 hours","source_":"LOINC","loincProperty_":"SRat","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliequivalent per deciliter","csCode_":"meq/dL","ciCode_":"EQ","property_":"amount of substance","magnitude_":6.022136699999999e+24,"dim_":{"dimVec_":null},"printSymbol_":"eq","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"meq per dL; milliequivalents per deciliter; decilitre","source_":"LOINC","loincProperty_":"SCnc","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliequivalent per gram","csCode_":"meq/g","ciCode_":"EQ","property_":"amount of substance","magnitude_":602213670000000000000,"dim_":{"dimVec_":null},"printSymbol_":"eq","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mgq/gm; meq per gm; milliequivalents per gram","source_":"LOINC","loincProperty_":"MCnt","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliequivalent per hour","csCode_":"meq/h","ciCode_":"EQ","property_":"amount of substance","magnitude_":167281575000000000,"dim_":{"dimVec_":null},"printSymbol_":"eq","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"meq/hrs; meq per hrs; milliequivalents per hour","source_":"LOINC","loincProperty_":"SRat","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliequivalent per kilogram","csCode_":"meq/kg","ciCode_":"EQ","property_":"amount of substance","magnitude_":602213670000000000,"dim_":{"dimVec_":null},"printSymbol_":"eq","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"meq per kg; milliequivalents per kilogram","source_":"LOINC","loincProperty_":"SCnt","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliequivalent per kilogram per hour","csCode_":"meq/kg/h","ciCode_":"EQ","property_":"amount of substance","magnitude_":167281575000000,"dim_":{"dimVec_":null},"printSymbol_":"eq","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"meq/(kg.h); meq/kg/hr; meq per kg per hr; milliequivalents per kilograms per hour","source_":"LOINC","loincProperty_":"SCntRat","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliequivalent per liter","csCode_":"meq/L","ciCode_":"EQ","property_":"amount of substance","magnitude_":6.0221367e+23,"dim_":{"dimVec_":null},"printSymbol_":"eq","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"milliequivalents per liter; litre; meq per l; acidity","source_":"LOINC","loincProperty_":"SCnc","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliequivalent per square meter","csCode_":"meq/m2","ciCode_":"EQ","property_":"amount of substance","magnitude_":602213670000000000000,"dim_":{"dimVec_":null},"printSymbol_":"eq","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"meq/m^2; meq/sq. m; milliequivalents per square meter; meter squared; metre","source_":"LOINC","loincProperty_":"ArSub","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliequivalent per minute","csCode_":"meq/min","ciCode_":"EQ","property_":"amount of substance","magnitude_":10036894500000000000,"dim_":{"dimVec_":null},"printSymbol_":"eq","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"meq per min; milliequivalents per minute","source_":"LOINC","loincProperty_":"SRat","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliequivalent per milliliter","csCode_":"meq/mL","ciCode_":"EQ","property_":"amount of substance","magnitude_":6.0221367e+26,"dim_":{"dimVec_":null},"printSymbol_":"eq","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"meq per mL; milliequivalents per milliliter; millilitre","source_":"LOINC","loincProperty_":"SCnc","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"milligram","csCode_":"mg","ciCode_":"G","property_":"mass","magnitude_":0.001,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"milligrams","source_":"LOINC","loincProperty_":"Mass","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"milligram per 10 hour","csCode_":"mg/(10.h)","ciCode_":"G","property_":"mass","magnitude_":2.7777777777777777e-8,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mg/10hrs; mg/10 hrs; mg per 10 hrs; milligrams per 10 hours","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"milligram per 12 hour","csCode_":"mg/(12.h)","ciCode_":"G","property_":"mass","magnitude_":2.3148148148148148e-8,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mg/12hrs; mg/12 hrs; per 12 hrs; 12hrs; milligrams per 12 hours","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"milligram per 2 hour","csCode_":"mg/(2.h)","ciCode_":"G","property_":"mass","magnitude_":1.3888888888888888e-7,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mg/2hrs; mg/2 hrs; mg per 2 hrs; 2hrs; milligrams per 2 hours","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"milligram per 24 hour","csCode_":"mg/(24.h)","ciCode_":"G","property_":"mass","magnitude_":1.1574074074074074e-8,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mg/24hrs; mg/24 hrs; milligrams per 24 hours; mg/kg/dy; mg per kg per day; milligrams per kilograms per days","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"milligram per 6 hour","csCode_":"mg/(6.h)","ciCode_":"G","property_":"mass","magnitude_":4.6296296296296295e-8,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mg/6hrs; mg/6 hrs; mg per 6 hrs; 6hrs; milligrams per 6 hours","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"milligram per 72 hour","csCode_":"mg/(72.h)","ciCode_":"G","property_":"mass","magnitude_":3.858024691358025e-9,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mg/72hrs;  mg/72 hrs; 72 hrs; 72hrs; milligrams per 72 hours","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"milligram per 8 hour","csCode_":"mg/(8.h)","ciCode_":"G","property_":"mass","magnitude_":3.472222222222222e-8,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mg/8hrs; mg/8 hrs; milligrams per 8 hours; shift","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"milligram per day","csCode_":"mg/d","ciCode_":"G","property_":"mass","magnitude_":1.1574074074074074e-8,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mg/24hrs; mg/24 hrs; milligrams per 24 hours; mg/dy; mg per day; milligrams","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"milligram per deciliter","csCode_":"mg/dL","ciCode_":"G","property_":"mass","magnitude_":10,"dim_":{"dimVec_":[-3,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mg per dL; milligrams per deciliter; decilitre","source_":"LOINC","loincProperty_":"MCnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"milligram per gram","csCode_":"mg/g","ciCode_":"G","property_":"mass","magnitude_":0.001,"dim_":{"dimVec_":[0,0,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mg per gm; milligrams per gram","source_":"LOINC","loincProperty_":"MCnt; MRto","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"milligram per hour","csCode_":"mg/h","ciCode_":"G","property_":"mass","magnitude_":2.7777777777777776e-7,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mg/hr; mg per hr; milligrams","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"milligram per kilogram","csCode_":"mg/kg","ciCode_":"G","property_":"mass","magnitude_":0.000001,"dim_":{"dimVec_":[0,0,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mg per kg; milligrams per kilograms","source_":"LOINC","loincProperty_":"MCnt","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"milligram per kilogram per 8 hour","csCode_":"mg/kg/(8.h)","ciCode_":"G","property_":"mass","magnitude_":3.472222222222222e-11,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mg/(8.h.kg); mg/kg/8hrs; mg/kg/8 hrs; mg per kg per 8hrs; 8 hrs; milligrams per kilograms per 8 hours; shift","source_":"LOINC","loincProperty_":"RelMRat; MCntRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"milligram per kilogram per day","csCode_":"mg/kg/d","ciCode_":"G","property_":"mass","magnitude_":1.1574074074074074e-11,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mg/(kg.d); mg/(kg.24.h)mg/kg/dy; mg per kg per day; milligrams per kilograms per days; mg/kg/(24.h); mg/kg/24hrs; 24 hrs; 24 hours","source_":"LOINC","loincProperty_":"RelMRat ","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"milligram per kilogram per hour","csCode_":"mg/kg/h","ciCode_":"G","property_":"mass","magnitude_":2.7777777777777777e-10,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mg/(kg.h); mg/kg/hr; mg per kg per hr; milligrams per kilograms per hour","source_":"LOINC","loincProperty_":"RelMRat; MCntRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"milligram per kilogram per minute","csCode_":"mg/kg/min","ciCode_":"G","property_":"mass","magnitude_":1.6666666666666667e-8,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mg/(kg.min); mg per kg per min; milligrams per kilograms per minute","source_":"LOINC","loincProperty_":"RelMRat; MCntRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"milligram per liter","csCode_":"mg/L","ciCode_":"G","property_":"mass","magnitude_":1,"dim_":{"dimVec_":[-3,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mg per l; milligrams per liter; litre","source_":"LOINC","loincProperty_":"MCnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"milligram per square meter","csCode_":"mg/m2","ciCode_":"G","property_":"mass","magnitude_":0.001,"dim_":{"dimVec_":[-2,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mg/m^2; mg/sq. m; mg per m2; mg per m^2; mg per sq. milligrams; meter squared; metre","source_":"LOINC","loincProperty_":"ArMass","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"milligram per cubic meter","csCode_":"mg/m3","ciCode_":"G","property_":"mass","magnitude_":0.001,"dim_":{"dimVec_":[-3,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mg/m^3; mg/cu. m; mg per m3; milligrams per cubic meter; meter cubed; metre","source_":"LOINC","loincProperty_":"MCnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"milligram per milligram","csCode_":"mg/mg","ciCode_":"G","property_":"mass","magnitude_":1,"dim_":{"dimVec_":[0,0,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mg per mg; milligrams; milligram/milligram","source_":"LOINC","loincProperty_":"MRto","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"milligram per minute","csCode_":"mg/min","ciCode_":"G","property_":"mass","magnitude_":0.000016666666666666667,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mg per min; milligrams per minutes; milligram/minute","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"milligram per milliliter","csCode_":"mg/mL","ciCode_":"G","property_":"mass","magnitude_":1000.0000000000001,"dim_":{"dimVec_":[-3,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mg per mL; milligrams per milliliters; millilitre","source_":"LOINC","loincProperty_":"MCnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"milligram per millimole","csCode_":"mg/mmol","ciCode_":"G","property_":"mass","magnitude_":1.660540186674939e-24,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mg per mmol; milligrams per millimole; ","source_":"LOINC","loincProperty_":"Ratio","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"milligram per week","csCode_":"mg/wk","ciCode_":"G","property_":"mass","magnitude_":1.6534391534391535e-9,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mg/week; mg per wk; milligrams per weeks; milligram/week","source_":"LOINC","loincProperty_":"Mrat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"milliliter","csCode_":"mL","ciCode_":"","property_":"volume","magnitude_":0.000001,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"milliliters; millilitres","source_":"LOINC","loincProperty_":"Vol","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per 10 hour","csCode_":"mL/(10.h)","ciCode_":"","property_":"volume","magnitude_":2.7777777777777777e-11,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ml/10hrs; ml/10 hrs; mL per 10hrs; 10 hrs; milliliters per 10 hours; millilitres","source_":"LOINC","loincProperty_":"VRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per 12 hour","csCode_":"mL/(12.h)","ciCode_":"","property_":"volume","magnitude_":2.3148148148148147e-11,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ml/12hrs; ml/12 hrs; mL per 12hrs; 12 hrs; milliliters per 12 hours; millilitres","source_":"LOINC","loincProperty_":"VRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per 2 hour","csCode_":"mL/(2.h)","ciCode_":"","property_":"volume","magnitude_":1.3888888888888888e-10,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ml/2hrs; ml/2 hrs; mL per 2hrs; 2 hrs; milliliters per 2 hours; millilitres ","source_":"LOINC","loincProperty_":"VRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per 24 hour","csCode_":"mL/(24.h)","ciCode_":"","property_":"volume","magnitude_":1.1574074074074074e-11,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ml/24hrs; ml/24 hrs; mL per 24hrs; 24 hrs; milliliters per 24 hours; millilitres; ml/dy; /day; ml per dy; days; fluid outputs; fluid inputs; flow rate","source_":"LOINC","loincProperty_":"VRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per 4 hour","csCode_":"mL/(4.h)","ciCode_":"","property_":"volume","magnitude_":6.944444444444444e-11,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ml/4hrs; ml/4 hrs; mL per 4hrs; 4 hrs; milliliters per 4 hours; millilitres","source_":"LOINC","loincProperty_":"VRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per 5 hour","csCode_":"mL/(5.h)","ciCode_":"","property_":"volume","magnitude_":5.5555555555555553e-11,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ml/5hrs; ml/5 hrs; mL per 5hrs; 5 hrs; milliliters per 5 hours; millilitres","source_":"LOINC","loincProperty_":"VRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per 6 hour","csCode_":"mL/(6.h)","ciCode_":"","property_":"volume","magnitude_":4.6296296296296294e-11,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ml/6hrs; ml/6 hrs; mL per 6hrs; 6 hrs; milliliters per 6 hours; millilitres","source_":"LOINC","loincProperty_":"VRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per 72 hour","csCode_":"mL/(72.h)","ciCode_":"","property_":"volume","magnitude_":3.8580246913580245e-12,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ml/72hrs; ml/72 hrs; mL per 72hrs; 72 hrs; milliliters per 72 hours; millilitres","source_":"LOINC","loincProperty_":"VRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per 8 hour","csCode_":"mL/(8.h)","ciCode_":"","property_":"volume","magnitude_":3.472222222222222e-11,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ml/8hrs; ml/8 hrs; mL per 8hrs; 8 hrs; milliliters per 8 hours; millilitres; shift","source_":"LOINC","loincProperty_":"VRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per 8 hour per kilogram","csCode_":"mL/(8.h)/kg","ciCode_":"","property_":"volume","magnitude_":3.472222222222222e-14,"dim_":{"dimVec_":[3,-1,-1,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mL/kg/(8.h); ml/8h/kg; ml/8 h/kg; ml/8hr/kg; ml/8 hr/kgr; mL per 8h per kg; 8 h; 8hr; 8 hr; milliliters per 8 hours per kilogram; millilitres; shift","source_":"LOINC","loincProperty_":"VRatCnt","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per square inch (international)","csCode_":"mL/[sin_i]","ciCode_":"","property_":"volume","magnitude_":0.0015500031000061998,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mL/sin; mL/in2; mL/in^2; mL per sin; in2; in^2; sq. in; milliliters per square inch; inch squared","source_":"LOINC","loincProperty_":"ArVol","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per centimeter of water","csCode_":"mL/cm[H2O]","ciCode_":"","property_":"volume","magnitude_":1.0197162129779282e-11,"dim_":{"dimVec_":[4,2,-1,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"milliliters per centimeter of water; millilitre per centimetre of water; millilitres per centimetre of water; mL/cmH2O; mL/cm H2O; mL per cmH2O; mL per cm H2O","source_":"LOINC","loincProperty_":"Compli","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per day","csCode_":"mL/d","ciCode_":"","property_":"volume","magnitude_":1.1574074074074074e-11,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ml/day; ml per day; milliliters per day; 24 hours; 24hrs; millilitre;","source_":"LOINC","loincProperty_":"VRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per deciliter","csCode_":"mL/dL","ciCode_":"","property_":"volume","magnitude_":0.009999999999999998,"dim_":{"dimVec_":[0,0,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mL per dL; millilitres; decilitre; milliliters","source_":"LOINC","loincProperty_":"VFr; VFrDiff","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per hour","csCode_":"mL/h","ciCode_":"","property_":"volume","magnitude_":2.7777777777777777e-10,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mL/hr; mL per hr; milliliters per hour; millilitres; fluid intake; fluid output","source_":"LOINC","loincProperty_":"VRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per kilogram","csCode_":"mL/kg","ciCode_":"","property_":"volume","magnitude_":9.999999999999999e-10,"dim_":{"dimVec_":[3,0,-1,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mL per kg; milliliters per kilogram; millilitres","source_":"LOINC","loincProperty_":"VCnt","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per kilogram per 8 hour","csCode_":"mL/kg/(8.h)","ciCode_":"","property_":"volume","magnitude_":3.472222222222222e-14,"dim_":{"dimVec_":[3,-1,-1,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mL/(8.h.kg); mL/kg/8hrs; mL/kg/8 hrs; mL per kg per 8hrs; 8 hrs; milliliters per kilograms per 8 hours; millilitres; shift","source_":"LOINC","loincProperty_":"VCntRat; RelEngRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per kilogram per day","csCode_":"mL/kg/d","ciCode_":"","property_":"volume","magnitude_":1.1574074074074072e-14,"dim_":{"dimVec_":[3,-1,-1,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mL/(kg.d); mL/kg/dy; mL per kg per day; milliliters per kilograms per day; mg/kg/24hrs; 24 hrs; per 24 hours millilitres","source_":"LOINC","loincProperty_":"VCntRat; RelEngRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per kilogram per hour","csCode_":"mL/kg/h","ciCode_":"","property_":"volume","magnitude_":2.7777777777777774e-13,"dim_":{"dimVec_":[3,-1,-1,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mL/(kg.h); mL/kg/hr; mL per kg per hr; milliliters per kilograms per hour; millilitres","source_":"LOINC","loincProperty_":"VCntRat; RelEngRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per kilogram per minute","csCode_":"mL/kg/min","ciCode_":"","property_":"volume","magnitude_":1.6666666666666664e-11,"dim_":{"dimVec_":[3,-1,-1,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mL/(kg.min); mL/kg/dy; mL per kg per day; milliliters per kilograms per day; millilitres","source_":"LOINC","loincProperty_":"RelEngRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per square meter","csCode_":"mL/m2","ciCode_":"","property_":"volume","magnitude_":0.000001,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mL/m^2; mL/sq. meter; mL per m2; m^2; sq. meter; milliliters per square meter; millilitres; meter squared","source_":"LOINC","loincProperty_":"ArVol","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per millibar","csCode_":"mL/mbar","ciCode_":"","property_":"volume","magnitude_":3.168808781402895e-31,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mL per mbar; milliliters per millibar; millilitres","source_":"LOINC","loincProperty_":"","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per minute","csCode_":"mL/min","ciCode_":"","property_":"volume","magnitude_":1.6666666666666667e-8,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mL per min; milliliters; millilitres","source_":"LOINC","loincProperty_":"VRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per minute per square meter","csCode_":"mL/min/m2","ciCode_":"","property_":"volume","magnitude_":1.6666666666666667e-8,"dim_":{"dimVec_":[1,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ml/min/m^2; ml/min/sq. meter; mL per min per m2; m^2; sq. meter; milliliters per minutes per square meter; millilitres; metre; meter squared","source_":"LOINC","loincProperty_":"ArVRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per millimeter","csCode_":"mL/mm","ciCode_":"","property_":"volume","magnitude_":0.001,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mL per mm; milliliters per millimeter; millilitres; millimetre","source_":"LOINC","loincProperty_":"Lineic Volume","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliliter per second","csCode_":"mL/s","ciCode_":"","property_":"volume","magnitude_":0.000001,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ml/sec; mL per sec; milliliters per second; millilitres","source_":"LOINC","loincProperty_":"Vel; VelRat; VRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"millimeter","csCode_":"mm","ciCode_":"M","property_":"length","magnitude_":0.001,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"millimeters; millimetres; height; length; diameter; thickness; axis; curvature; size","source_":"LOINC","loincProperty_":"Len","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"millimeter per hour","csCode_":"mm/h","ciCode_":"M","property_":"length","magnitude_":2.7777777777777776e-7,"dim_":{"dimVec_":[1,-1,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mm/hr; mm per hr; millimeters per hour; millimetres","source_":"LOINC","loincProperty_":"Vel","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"millimeter per minute","csCode_":"mm/min","ciCode_":"M","property_":"length","magnitude_":0.000016666666666666667,"dim_":{"dimVec_":[1,-1,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mm per min; millimeters per minute; millimetres","source_":"LOINC","loincProperty_":"Vel","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"millimeter of water","csCode_":"mm[H2O]","ciCode_":"M[H2O]","property_":"pressure","magnitude_":9806.65,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"m HO<sub><r>2</r></sub>","class_":"clinical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mmH2O; mm H2O; millimeters of water; millimetres","source_":"LOINC","loincProperty_":"Pres","category_":"Clinical","csUnitString_":"kPa","ciUnitString_":"KPAL","baseFactorStr_":"980665e-5","baseFactor_":"9.80665","defError_":false},{"isBase_":false,"name_":"millimeter of mercury","csCode_":"mm[Hg]","ciCode_":"M[HG]","property_":"pressure","magnitude_":133322,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"m Hg","class_":"clinical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mmHg; mm Hg; millimeters of mercury; millimetres","source_":"LOINC","loincProperty_":"Pres; PPres; Ratio","category_":"Clinical","csUnitString_":"kPa","ciUnitString_":"KPAL","baseFactorStr_":"133.3220","baseFactor_":"133.3220","defError_":false},{"isBase_":true,"name_":"square millimeter","csCode_":"mm2","ciCode_":"M","property_":"length","magnitude_":0.000001,"dim_":{"dimVec_":[2,0,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mm^2; sq. mm.; sq. millimeters; millimeters squared; millimetres","source_":"LOINC","loincProperty_":"Area","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"millimole","csCode_":"mmol","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"millimoles","source_":"LOINC","loincProperty_":"Sub","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"millimole per 12 hour","csCode_":"mmol/(12.h)","ciCode_":"MOL","property_":"amount of substance","magnitude_":13940131250000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mmol/12hrs; mmol/12 hrs; mmol per 12 hrs; 12hrs; millimoles per 12 hours","source_":"LOINC","loincProperty_":"SRat","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"millimole per 2 hour","csCode_":"mmol/(2.h)","ciCode_":"MOL","property_":"amount of substance","magnitude_":83640787500000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mmol/2hrs; mmol/2 hrs; mmol per 2 hrs; 2hrs; millimoles per 2 hours","source_":"LOINC","loincProperty_":"SRat","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"millimole per 24 hour","csCode_":"mmol/(24.h)","ciCode_":"MOL","property_":"amount of substance","magnitude_":6970065625000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mmol/24hrs; mmol/24 hrs; mmol per 24 hrs; 24hrs; millimoles per 24 hours","source_":"LOINC","loincProperty_":"SRat","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"millimole per 5 hour","csCode_":"mmol/(5.h)","ciCode_":"MOL","property_":"amount of substance","magnitude_":33456315000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mmol/5hrs; mmol/5 hrs; mmol per 5 hrs; 5hrs; millimoles per 5 hours","source_":"LOINC","loincProperty_":"SRat","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"millimole per 6 hour","csCode_":"mmol/(6.h)","ciCode_":"MOL","property_":"amount of substance","magnitude_":27880262500000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mmol/6hrs; mmol/6 hrs; mmol per 6 hrs; 6hrs; millimoles per 6 hours","source_":"LOINC","loincProperty_":"SRat","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"millimole per 8 hour","csCode_":"mmol/(8.h)","ciCode_":"MOL","property_":"amount of substance","magnitude_":20910196875000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mmol/8hrs; mmol/8 hrs; mmol per 8 hrs; 8hrs; millimoles per 8 hours; shift","source_":"LOINC","loincProperty_":"SRat","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"millimole per day","csCode_":"mmol/d","ciCode_":"MOL","property_":"amount of substance","magnitude_":6970065625000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mmol/24hrs; mmol/24 hrs; mmol per 24 hrs; 24hrs; millimoles per 24 hours","source_":"LOINC","loincProperty_":"SRat","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"millimole per deciliter","csCode_":"mmol/dL","ciCode_":"MOL","property_":"amount of substance","magnitude_":6.022136699999999e+24,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mmol per dL; millimoles; decilitre","source_":"LOINC","loincProperty_":"SCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"millimole per gram","csCode_":"mmol/g","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mmol per gram; millimoles","source_":"LOINC","loincProperty_":"SCnt","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"millimole per hour","csCode_":"mmol/h","ciCode_":"MOL","property_":"amount of substance","magnitude_":167281575000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mmol/hr; mmol per hr; millimoles per hour","source_":"LOINC","loincProperty_":"SRat","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"millimole per kilogram","csCode_":"mmol/kg","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mmol per kg; millimoles per kilogram","source_":"LOINC","loincProperty_":"SCnt","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"millimole per kilogram per 8 hour","csCode_":"mmol/kg/(8.h)","ciCode_":"MOL","property_":"amount of substance","magnitude_":20910196875000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mmol/(8.h.kg); mmol/kg/8hrs; mmol/kg/8 hrs; mmol per kg per 8hrs; 8 hrs; millimoles per kilograms per 8 hours; shift","source_":"LOINC","loincProperty_":"CCnt","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"millimole per kilogram per day","csCode_":"mmol/kg/d","ciCode_":"MOL","property_":"amount of substance","magnitude_":6970065625000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mmol/kg/dy; mmol/kg/day; mmol per kg per dy; millimoles per kilograms per day","source_":"LOINC","loincProperty_":"RelSRat","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"millimole per kilogram per hour","csCode_":"mmol/kg/h","ciCode_":"MOL","property_":"amount of substance","magnitude_":167281575000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mmol/kg/hr; mmol per kg per hr; millimoles per kilograms per hour","source_":"LOINC","loincProperty_":"CCnt","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"millimole per kilogram per minute","csCode_":"mmol/kg/min","ciCode_":"MOL","property_":"amount of substance","magnitude_":10036894500000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mmol/(kg.min); mmol/kg/min; mmol per kg per min; millimoles per kilograms per minute","source_":"LOINC","loincProperty_":"CCnt","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"millimole per liter","csCode_":"mmol/L","ciCode_":"MOL","property_":"amount of substance","magnitude_":6.0221367e+23,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mmol per L; millimoles per liter; litre","source_":"LOINC","loincProperty_":"SCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"millimole per square meter","csCode_":"mmol/m2","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mmol/m^2; mmol/sq. meter;  mmol per m2; m^2; sq. meter; millimoles; meter squared; metre","source_":"LOINC","loincProperty_":"ArSub","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"millimole per minute","csCode_":"mmol/min","ciCode_":"MOL","property_":"amount of substance","magnitude_":10036894500000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mmol per min; millimoles per minute","source_":"LOINC","loincProperty_":"Srat; CAct","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"millimole per millimole","csCode_":"mmol/mmol","ciCode_":"MOL","property_":"amount of substance","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mmol per mmol; millimoles per millimole","source_":"LOINC","loincProperty_":"SRto","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"millimole per mole","csCode_":"mmol/mol","ciCode_":"MOL","property_":"amount of substance","magnitude_":0.001,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mmol per mol; millimoles per mole","source_":"LOINC","loincProperty_":"SRto","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"millimole per second per liter","csCode_":"mmol/s/L","ciCode_":"MOL","property_":"amount of substance","magnitude_":6.0221367e+23,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mmol/sec/L; mmol per s per L; per sec; millimoles per seconds per liter; litre","source_":"LOINC","loincProperty_":"CCnc ","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"mole per kilogram","csCode_":"mol/kg","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mol per kg; moles","source_":"LOINC","loincProperty_":"SCnt","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"mole per kilogram per second","csCode_":"mol/kg/s","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mol/kg/sec; mol per kg per sec; moles per kilograms per second","source_":"LOINC","loincProperty_":"CCnt","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"mole per liter","csCode_":"mol/L","ciCode_":"MOL","property_":"amount of substance","magnitude_":6.0221366999999994e+26,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mol per L; moles per liter; litre","source_":"LOINC","loincProperty_":"SCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"mole per cubic meter","csCode_":"mol/m3","ciCode_":"MOL","property_":"amount of substance","magnitude_":6.0221367e+23,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mol/m^3; mol/cu. m; mol per m3; m^3; cu. meter; mols; moles; meters cubed; metre; mole per kiloliter; kilolitre; mol/kL","source_":"LOINC","loincProperty_":"SCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"mole per milliliter","csCode_":"mol/mL","ciCode_":"MOL","property_":"amount of substance","magnitude_":6.0221367e+29,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mol per mL; moles; millilitre","source_":"LOINC","loincProperty_":"SCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"mole per mole","csCode_":"mol/mol","ciCode_":"MOL","property_":"amount of substance","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mol per mol; moles per mol","source_":"LOINC","loincProperty_":"SRto","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"mole per second","csCode_":"mol/s","ciCode_":"MOL","property_":"amount of substance","magnitude_":6.0221367e+23,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mol per sec; moles per second","source_":"LOINC","loincProperty_":"SRat","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"milliosmole","csCode_":"mosm","ciCode_":"OSM","property_":"amount of substance (dissolved particles)","magnitude_":602213670000000000000,"dim_":{"dimVec_":null},"printSymbol_":"osm","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"milliosmoles","source_":"LOINC","loincProperty_":"Osmol","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliosmole per kilogram","csCode_":"mosm/kg","ciCode_":"OSM","property_":"amount of substance (dissolved particles)","magnitude_":602213670000000000,"dim_":{"dimVec_":null},"printSymbol_":"osm","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mosm per kg; milliosmoles per kilogram","source_":"LOINC","loincProperty_":"Osmol","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milliosmole per liter","csCode_":"mosm/L","ciCode_":"OSM","property_":"amount of substance (dissolved particles)","magnitude_":6.0221367e+23,"dim_":{"dimVec_":null},"printSymbol_":"osm","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mosm per liter; litre; milliosmoles","source_":"LOINC","loincProperty_":"Osmol","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"millipascal","csCode_":"mPa","ciCode_":"PAL","property_":"pressure","magnitude_":1,"dim_":{"dimVec_":[-1,-2,1,0,0,0,0]},"printSymbol_":"Pa","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"millipascals","source_":"LOINC","loincProperty_":"Pres","category_":"Clinical","csUnitString_":"N/m2","ciUnitString_":"N/M2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"millipascal second","csCode_":"mPa.s","ciCode_":"PAL","property_":"pressure","magnitude_":1,"dim_":{"dimVec_":[-1,-1,1,0,0,0,0]},"printSymbol_":"Pa","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mPa*s; millipoise; mP; dynamic viscosity","source_":"LOINC","loincProperty_":"Visc","category_":"Clinical","csUnitString_":"N/m2","ciUnitString_":"N/M2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"millisecond","csCode_":"Ms","ciCode_":"S","property_":"time","magnitude_":1000000,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"s","class_":null,"isMetric_":false,"variable_":"T","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"milliseconds; duration","source_":"LOINC","loincProperty_":"Time","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"milli enzyme unit per gram","csCode_":"mU/g","ciCode_":"U","property_":"catalytic activity","magnitude_":10036894500000,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mU per gm; milli enzyme units per gram; enzyme activity; enzymatic activity per mass","source_":"LOINC","loincProperty_":"CCnt","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milli enzyme unit per liter","csCode_":"mU/L","ciCode_":"U","property_":"catalytic activity","magnitude_":10036894500000000,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mU per liter; litre; milli enzyme units enzymatic activity per volume; enzyme activity","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milli enzyme unit per milligram","csCode_":"mU/mg","ciCode_":"U","property_":"catalytic activity","magnitude_":10036894500000000,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mU per mg; milli enzyme units per milligram","source_":"LOINC","loincProperty_":"CCnt","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milli enzyme unit per milliliter","csCode_":"mU/mL","ciCode_":"U","property_":"catalytic activity","magnitude_":10036894500000000000,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mU per mL; milli enzyme units per milliliter; millilitre; enzymatic activity per volume; enzyme activity","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"milli enzyme unit per milliliter per minute","csCode_":"mU/mL/min","ciCode_":"U","property_":"catalytic activity","magnitude_":167281575000000000,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mU per mL per min; mU per milliliters per minute; millilitres; milli enzyme units; enzymatic activity; enzyme activity","source_":"LOINC","loincProperty_":"CCncRat","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"millivolt","csCode_":"mV","ciCode_":"V","property_":"electric potential","magnitude_":1,"dim_":{"dimVec_":[2,-2,1,0,0,-1,0]},"printSymbol_":"V","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"millivolts","source_":"LOINC","loincProperty_":"Elpot","category_":"Clinical","csUnitString_":"J/C","ciUnitString_":"J/C","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Newton centimeter","csCode_":"N.cm","ciCode_":"N","property_":"force","magnitude_":10,"dim_":{"dimVec_":[2,-2,1,0,0,0,0]},"printSymbol_":"N","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"N*cm; Ncm; N cm; Newton*centimeters; Newton* centimetres; torque; work","source_":"LOINC","loincProperty_":"","category_":"Clinical","csUnitString_":"kg.m/s2","ciUnitString_":"KG.M/S2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Newton second","csCode_":"N.s","ciCode_":"N","property_":"force","magnitude_":1000,"dim_":{"dimVec_":[1,-1,1,0,0,0,0]},"printSymbol_":"N","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"Newton*seconds; N*s; N s; Ns; impulse; imp","source_":"LOINC","loincProperty_":"","category_":"Clinical","csUnitString_":"kg.m/s2","ciUnitString_":"KG.M/S2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"nanogram","csCode_":"ng","ciCode_":"G","property_":"mass","magnitude_":1e-9,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nanograms","source_":"LOINC","loincProperty_":"Mass","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"nanogram per 24 hour","csCode_":"ng/(24.h)","ciCode_":"G","property_":"mass","magnitude_":1.1574074074074075e-14,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ng/24hrs; ng/24 hrs; nanograms per 24 hours","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"nanogram per 8 hour","csCode_":"ng/(8.h)","ciCode_":"G","property_":"mass","magnitude_":3.4722222222222224e-14,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ng/8hrs; ng/8 hrs; nanograms per 8 hours","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"nanogram per million","csCode_":"ng/10*6","ciCode_":"G","property_":"mass","magnitude_":1e-15,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ng/10^6; ng per 10*6; 10^6; nanograms","source_":"LOINC","loincProperty_":"MNum","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"nanogram per day","csCode_":"ng/d","ciCode_":"G","property_":"mass","magnitude_":1.1574074074074075e-14,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ng/dy; ng per day; nanograms ","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"nanogram per deciliter","csCode_":"ng/dL","ciCode_":"G","property_":"mass","magnitude_":0.00001,"dim_":{"dimVec_":[-3,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ng per dL; nanograms per deciliter; decilitre","source_":"LOINC","loincProperty_":"MCnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"nanogram per gram","csCode_":"ng/g","ciCode_":"G","property_":"mass","magnitude_":1e-9,"dim_":{"dimVec_":[0,0,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ng/gm; ng per gm; nanograms per gram","source_":"LOINC","loincProperty_":"MCnt","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"nanogram per hour","csCode_":"ng/h","ciCode_":"G","property_":"mass","magnitude_":2.777777777777778e-13,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ng/hr; ng per hr; nanograms per hour","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"nanogram per kilogram","csCode_":"ng/kg","ciCode_":"G","property_":"mass","magnitude_":1e-12,"dim_":{"dimVec_":[0,0,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ng per kg; nanograms per kilogram","source_":"LOINC","loincProperty_":"MCnt","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"nanogram per kilogram per 8 hour","csCode_":"ng/kg/(8.h)","ciCode_":"G","property_":"mass","magnitude_":3.472222222222222e-17,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ng/(8.h.kg); ng/kg/8hrs; ng/kg/8 hrs; ng per kg per 8hrs; 8 hrs; nanograms per kilograms per 8 hours; shift","source_":"LOINC","loincProperty_":"MRtoRat ","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"nanogram per kilogram per hour","csCode_":"ng/kg/h","ciCode_":"G","property_":"mass","magnitude_":2.7777777777777775e-16,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ng/(kg.h); ng/kg/hr; ng per kg per hr; nanograms per kilograms per hour","source_":"LOINC","loincProperty_":"MRtoRat ","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"nanogram per kilogram per minute","csCode_":"ng/kg/min","ciCode_":"G","property_":"mass","magnitude_":1.6666666666666667e-14,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ng/(kg.min); ng per kg per min; nanograms per kilograms per minute","source_":"LOINC","loincProperty_":"MRtoRat ","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"nanogram per liter","csCode_":"ng/L","ciCode_":"G","property_":"mass","magnitude_":0.000001,"dim_":{"dimVec_":[-3,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ng per L; nanograms per liter; litre","source_":"LOINC","loincProperty_":"MCnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"nanogram per square meter","csCode_":"ng/m2","ciCode_":"G","property_":"mass","magnitude_":1e-9,"dim_":{"dimVec_":[-2,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ng/m^2; ng/sq. m; ng per m2; m^2; sq. meter; nanograms; meter squared; metre","source_":"LOINC","loincProperty_":"ArMass","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"nanogram per milligram","csCode_":"ng/mg","ciCode_":"G","property_":"mass","magnitude_":0.000001,"dim_":{"dimVec_":[0,0,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ng per mg; nanograms","source_":"LOINC","loincProperty_":"MCnt","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"nanogram per milligram per hour","csCode_":"ng/mg/h","ciCode_":"G","property_":"mass","magnitude_":2.7777777777777777e-10,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ng/mg/hr; ng per mg per hr; nanograms per milligrams per hour","source_":"LOINC","loincProperty_":"MRtoRat ","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"nanogram per minute","csCode_":"ng/min","ciCode_":"G","property_":"mass","magnitude_":1.6666666666666667e-11,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ng per min; nanograms","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"nanogram per millliiter","csCode_":"ng/mL","ciCode_":"G","property_":"mass","magnitude_":0.001,"dim_":{"dimVec_":[-3,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ng per mL; nanograms; millilitre","source_":"LOINC","loincProperty_":"MCnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"nanogram per milliliter per hour","csCode_":"ng/mL/h","ciCode_":"G","property_":"mass","magnitude_":2.7777777777777776e-7,"dim_":{"dimVec_":[-3,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ng/mL/hr; ng per mL per mL; nanograms per milliliter per hour; nanogram per millilitre per hour; nanograms per millilitre per hour; enzymatic activity per volume; enzyme activity per milliliters","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"nanogram per second","csCode_":"ng/s","ciCode_":"G","property_":"mass","magnitude_":1e-9,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ng/sec; ng per sec; nanograms per second","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"nanogram per enzyme unit","csCode_":"ng/U","ciCode_":"G","property_":"mass","magnitude_":9.963241120049634e-26,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ng per U; nanograms per enzyme unit","source_":"LOINC","loincProperty_":"CMass","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"nanokatal","csCode_":"nkat","ciCode_":"KAT","property_":"catalytic activity","magnitude_":602213670000000,"dim_":{"dimVec_":null},"printSymbol_":"kat","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nanokatals","source_":"LOINC","loincProperty_":"CAct","category_":"Clinical","csUnitString_":"mol/s","ciUnitString_":"MOL/S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"nanoliter","csCode_":"nL","ciCode_":"","property_":"volume","magnitude_":1.0000000000000002e-12,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nanoliters; nanolitres","source_":"LOINC","loincProperty_":"Vol","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"nanometer","csCode_":"nm","ciCode_":"M","property_":"length","magnitude_":1e-9,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nanometers; nanometres","source_":"LOINC","loincProperty_":"Len","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"nanometer per second per liter","csCode_":"nm/s/L","ciCode_":"M","property_":"length","magnitude_":0.000001,"dim_":{"dimVec_":[-2,-1,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nm/sec/liter; nm/sec/litre; nm per s per l; nm per sec per l; nanometers per second per liter; nanometre per second per litre; nanometres per second per litre","source_":"LOINC","loincProperty_":"VelCnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"nanomole","csCode_":"nmol","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nanomoles","source_":"LOINC","loincProperty_":"Sub","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"nanomole per 24 hour","csCode_":"nmol/(24.h)","ciCode_":"MOL","property_":"amount of substance","magnitude_":6970065625,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nmol/24hr; nmol/24 hr; nanomoles per 24 hours; nmol/day; nanomoles per day; nmol per day; nanomole/day; nanomol/day","source_":"LOINC","loincProperty_":"SRat","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"nanomole per day","csCode_":"nmol/d","ciCode_":"MOL","property_":"amount of substance","magnitude_":6970065625,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nmol/day; nanomoles per day; nmol per day; nanomole/day; nanomol/day; nmol/24hr; nmol/24 hr; nanomoles per 24 hours; ","source_":"LOINC","loincProperty_":"SRat","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"nanomole per deciliter","csCode_":"nmol/dL","ciCode_":"MOL","property_":"amount of substance","magnitude_":6022136700000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nmol per dL; nanomoles per deciliter; nanomole per decilitre; nanomoles per decilitre; nanomole/deciliter; nanomole/decilitre; nanomol/deciliter; nanomol/decilitre","source_":"LOINC","loincProperty_":"SCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"nanomole per gram","csCode_":"nmol/g","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nmol per gram; nanomoles per gram; nanomole/gram","source_":"LOINC","loincProperty_":"SCnt","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"nanomole per hour per liter","csCode_":"nmol/h/L","ciCode_":"MOL","property_":"amount of substance","magnitude_":167281575000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nmol/hrs/L; nmol per hrs per L; nanomoles per hours per liter; litre; enzymatic activity per volume; enzyme activities","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"nanomole per liter","csCode_":"nmol/L","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nmol per L; nanomoles per liter; litre","source_":"LOINC","loincProperty_":"SCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"nanomole per milligram","csCode_":"nmol/mg","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nmol per mg; nanomoles per milligram","source_":"LOINC","loincProperty_":"SCnt","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"nanomole per milligram per hour","csCode_":"nmol/mg/h","ciCode_":"MOL","property_":"amount of substance","magnitude_":167281575000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nmol/mg/hr; nmol per mg per hr; nanomoles per milligrams per hour","source_":"LOINC","loincProperty_":"SCntRat","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"nanomole per milligram of protein","csCode_":"nmol/mg{prot}","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nanomoles; nmol/mg prot; nmol per mg prot","source_":"LOINC","loincProperty_":"Ratio; CCnt","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"nanomole per minute","csCode_":"nmol/min","ciCode_":"MOL","property_":"amount of substance","magnitude_":10036894500000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nmol per min; nanomoles per minute; milli enzyme units; enzyme activity per volume; enzymatic activity","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"nanomole per minute per milliliter","csCode_":"nmol/min/mL","ciCode_":"MOL","property_":"amount of substance","magnitude_":10036894500000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nmol per min per mL; nanomoles per minutes per milliliter; millilitre; milli enzyme units per volume; enzyme activity; enzymatic activity","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"nanomole per milliliter","csCode_":"nmol/mL","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nmol per mL; nanomoles per milliliter; millilitre","source_":"LOINC","loincProperty_":"SCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"nanomole per milliliter per hour","csCode_":"nmol/mL/h","ciCode_":"MOL","property_":"amount of substance","magnitude_":167281575000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nmol/mL/hr; nmol per mL per hr; nanomoles per milliliters per hour; millilitres; milli enzyme units per volume; enzyme activity; enzymatic activity","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"nanomole per milliliter per minute","csCode_":"nmol/mL/min","ciCode_":"MOL","property_":"amount of substance","magnitude_":10036894500000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nmol per mL per min; nanomoles per milliliters per min; millilitres; milli enzyme units per volume; enzyme activity; enzymatic activity","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"nanomole per millimole","csCode_":"nmol/mmol","ciCode_":"MOL","property_":"amount of substance","magnitude_":0.000001,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nmol per mmol; nanomoles per millimole","source_":"LOINC","loincProperty_":"SRto","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"nanomole per millimole of creatinine","csCode_":"nmol/mmol{creat}","ciCode_":"MOL","property_":"amount of substance","magnitude_":0.000001,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nanomoles","source_":"LOINC","loincProperty_":"SRto","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"nanomole per mole","csCode_":"nmol/mol","ciCode_":"MOL","property_":"amount of substance","magnitude_":1e-9,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nmol per mole; nanomoles","source_":"LOINC","loincProperty_":"SRto","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"nanomole per nanomole","csCode_":"nmol/nmol","ciCode_":"MOL","property_":"amount of substance","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nmol per nmol; nanomoles","source_":"LOINC","loincProperty_":"SRto","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"nanomole per second","csCode_":"nmol/s","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nmol/sec; nmol per sec; nanomoles per sercond; milli enzyme units; enzyme activity; enzymatic activity","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"nanomole per second per liter","csCode_":"nmol/s/L","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nmol/sec/L; nmol per s per L; nmol per sec per L; nanomoles per seconds per liter; litre; milli enzyme units per volume; enzyme activity; enzymatic activity","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":true,"name_":"nanosecond","csCode_":"ns","ciCode_":"S","property_":"time","magnitude_":1e-9,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"s","class_":null,"isMetric_":false,"variable_":"T","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nanoseconds","source_":"LOINC","loincProperty_":"Time","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"nanoenzyme unit per milliliter","csCode_":"nU/mL","ciCode_":"U","property_":"catalytic activity","magnitude_":10036894500000,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"nU per mL; nanoenzyme units per milliliter; millilitre; enzymatic activity per volume; enzyme activity","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"Ohm meter","csCode_":"Ohm.m","ciCode_":"OHM","property_":"electric resistance","magnitude_":1000,"dim_":{"dimVec_":[3,-1,1,0,0,-2,0]},"printSymbol_":"Ω","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"metre; electric resistivity","source_":"LOINC","loincProperty_":"","category_":"Clinical","csUnitString_":"V/A","ciUnitString_":"V/A","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"osmole per kilogram","csCode_":"osm/kg","ciCode_":"OSM","property_":"amount of substance (dissolved particles)","magnitude_":602213670000000000000,"dim_":{"dimVec_":null},"printSymbol_":"osm","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"osm per kg; osmoles per kilogram","source_":"LOINC","loincProperty_":"Osmol","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"osmole per liter","csCode_":"osm/L","ciCode_":"OSM","property_":"amount of substance (dissolved particles)","magnitude_":6.0221366999999994e+26,"dim_":{"dimVec_":null},"printSymbol_":"osm","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"osm per L; osmoles per liter; litre","source_":"LOINC","loincProperty_":"Osmol","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"picogram","csCode_":"pg","ciCode_":"G","property_":"mass","magnitude_":1e-12,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"picograms","source_":"LOINC","loincProperty_":"Mass; EntMass","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"picogram per deciliter","csCode_":"pg/dL","ciCode_":"G","property_":"mass","magnitude_":9.999999999999999e-9,"dim_":{"dimVec_":[-3,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"pg per dL; picograms; decilitre","source_":"LOINC","loincProperty_":"MCnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"picogram per liter","csCode_":"pg/L","ciCode_":"G","property_":"mass","magnitude_":1e-9,"dim_":{"dimVec_":[-3,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"pg per L; picograms; litre","source_":"LOINC","loincProperty_":"MCnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"picogram per milligram","csCode_":"pg/mg","ciCode_":"G","property_":"mass","magnitude_":1e-9,"dim_":{"dimVec_":[0,0,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"pg per mg; picograms","source_":"LOINC","loincProperty_":"MCnt","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"picogram per milliliter","csCode_":"pg/mL","ciCode_":"G","property_":"mass","magnitude_":0.000001,"dim_":{"dimVec_":[-3,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"pg per mL; picograms per milliliter; millilitre","source_":"LOINC","loincProperty_":"MCnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"picogram per millimeter","csCode_":"pg/mm","ciCode_":"G","property_":"mass","magnitude_":1e-9,"dim_":{"dimVec_":[-1,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"pg per mm; picogram/millimeter; picogram/millimetre; picograms per millimeter; millimetre","source_":"LOINC","loincProperty_":"Lineic Mass","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"picokatal","csCode_":"pkat","ciCode_":"KAT","property_":"catalytic activity","magnitude_":602213670000,"dim_":{"dimVec_":null},"printSymbol_":"kat","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"pkats; picokatals","source_":"LOINC","loincProperty_":"CAct","category_":"Clinical","csUnitString_":"mol/s","ciUnitString_":"MOL/S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"picoliter","csCode_":"pL","ciCode_":"","property_":"volume","magnitude_":1e-15,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"picoliters; picolitres","source_":"LOINC","loincProperty_":"Vol","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"picometer","csCode_":"pm","ciCode_":"M","property_":"length","magnitude_":1e-12,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"picometers; picometres","source_":"LOINC","loincProperty_":"Len","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"picomole","csCode_":"pmol","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"picomoles; pmols","source_":"LOINC","loincProperty_":"Sub","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"picomole per 24 hour","csCode_":"pmol/(24.h)","ciCode_":"MOL","property_":"amount of substance","magnitude_":6970065.625,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"pmol/24hrs; pmol/24 hrs; pmol per 24 hrs; 24hrs; days; dy; picomoles per 24 hours","source_":"LOINC","loincProperty_":"SRat","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"picomole per day","csCode_":"pmol/d","ciCode_":"MOL","property_":"amount of substance","magnitude_":6970065.625,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"pmol/dy; pmol per day; 24 hours; 24hrs; 24 hrs; picomoles","source_":"LOINC","loincProperty_":"SRat","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"picomole per deciliter","csCode_":"pmol/dL","ciCode_":"MOL","property_":"amount of substance","magnitude_":6022136700000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"pmol per dL; picomoles per deciliter; decilitre","source_":"LOINC","loincProperty_":"SCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"picomole per gram","csCode_":"pmol/g","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"pmol per gm; picomoles per gram; picomole/gram","source_":"LOINC","loincProperty_":"SCnt","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"picomole per hour per milliliter ","csCode_":"pmol/h/mL","ciCode_":"MOL","property_":"amount of substance","magnitude_":167281575000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"pmol/hrs/mL; pmol per hrs per mL; picomoles per hour per milliliter; millilitre; micro enzyme units per volume; enzymatic activity; enzyme activity","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"picomole per liter","csCode_":"pmol/L","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"picomole/liter; pmol per L; picomoles; litre","source_":"LOINC","loincProperty_":"SCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"picomole per minute","csCode_":"pmol/min","ciCode_":"MOL","property_":"amount of substance","magnitude_":10036894500,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"picomole/minute; pmol per min; picomoles per minute; micro enzyme units; enzymatic activity; enzyme activity","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"picomole per milliliter","csCode_":"pmol/mL","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"picomole/milliliter; picomole/millilitre; pmol per mL; picomoles; millilitre","source_":"LOINC","loincProperty_":"SCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"picomole per micromole","csCode_":"pmol/umol","ciCode_":"MOL","property_":"amount of substance","magnitude_":0.000001,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"pmol/mcgmol; picomole/micromole; pmol per umol; pmol per mcgmol; picomoles ","source_":"LOINC","loincProperty_":"SRto","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":true,"name_":"picosecond","csCode_":"ps","ciCode_":"S","property_":"time","magnitude_":1e-12,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"s","class_":null,"isMetric_":false,"variable_":"T","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"picoseconds; psec","source_":"LOINC","loincProperty_":"Time","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"picotesla","csCode_":"pT","ciCode_":"T","property_":"magnetic flux density","magnitude_":1e-9,"dim_":{"dimVec_":[0,-1,1,0,0,-1,0]},"printSymbol_":"T","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"picoteslas","source_":"LOINC","loincProperty_":"","category_":"Clinical","csUnitString_":"Wb/m2","ciUnitString_":"WB/M2","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"enzyme unit per 12 hour","csCode_":"U/(12.h)","ciCode_":"U","property_":"catalytic activity","magnitude_":232335520833.33334,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"U/12hrs; U/ 12hrs; U per 12 hrs; 12hrs; enzyme units per 12 hours; enzyme activity; enzymatic activity per time; umol per min per 12 hours; micromoles per minute per 12 hours; umol/min/12hr","source_":"LOINC","loincProperty_":"CRat","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"enzyme unit per 2 hour","csCode_":"U/(2.h)","ciCode_":"U","property_":"catalytic activity","magnitude_":1394013125000,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"U/2hrs; U/ 2hrs; U per 2 hrs; 2hrs; enzyme units per 2 hours; enzyme activity; enzymatic activity per time; umol per minute per 2 hours; micromoles per minute; umol/min/2hr; umol per min per 2hr","source_":"LOINC","loincProperty_":"CRat","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"enzyme unit per 24 hour","csCode_":"U/(24.h)","ciCode_":"U","property_":"catalytic activity","magnitude_":116167760416.66667,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"U/24hrs; U/ 24hrs; U per 24 hrs; 24hrs; enzyme units per 24 hours; enzyme activity; enzymatic activity per time; micromoles per minute per 24 hours; umol/min/24hr; umol per min per 24hr","source_":"LOINC","loincProperty_":"CRat","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"enzyme unit per 10","csCode_":"U/10","ciCode_":"U","property_":"catalytic activity","magnitude_":1003689450000000,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"enzyme unit/10; U per 10; enzyme units per 10; enzymatic activity; enzyme activity; micromoles per minute; umol/min/10","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"enzyme unit per 10 billion","csCode_":"U/10*10","ciCode_":"U","property_":"catalytic activity","magnitude_":1003689.45,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"U per 10*10; enzyme units per 10*10; U per 10 billion; enzyme units; enzymatic activity; micromoles per minute per 10 billion; umol/min/10*10","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"enzyme unit per trillion","csCode_":"U/10*12","ciCode_":"U","property_":"catalytic activity","magnitude_":10036.8945,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"enzyme unit/10*12; U per 10*12; enzyme units per 10*12; enzyme units per trillion; enzymatic activity; micromoles per minute per trillion; umol/min/10*12; umol per min per 10*12","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"enzyme unit per million","csCode_":"U/10*6","ciCode_":"U","property_":"catalytic activity","magnitude_":10036894500,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"enzyme unit/10*6; U per 10*6; enzyme units per 10*6; enzyme units; enzymatic activity per volume; micromoles per minute per million; umol/min/10*6; umol per min per 10*6","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"enzyme unit per billion","csCode_":"U/10*9","ciCode_":"U","property_":"catalytic activity","magnitude_":10036894.5,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"enzyme unit/10*9; U per 10*9; enzyme units per 10*9; enzymatic activity per volume; micromoles per minute per billion; umol/min/10*9; umol per min per 10*9","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"enzyme unit per day","csCode_":"U/d","ciCode_":"U","property_":"catalytic activity","magnitude_":116167760416.66667,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"U/dy; enzyme units per day; enzyme units; enzyme activity; enzymatic activity per time; micromoles per minute per day; umol/min/day; umol per min per day","source_":"LOINC","loincProperty_":"CRat","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"enzyme unit per deciliter","csCode_":"U/dL","ciCode_":"U","property_":"catalytic activity","magnitude_":100368945000000000000,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"U per dL; enzyme units per deciliter; decilitre; micromoles per minute per deciliter; umol/min/dL; umol per min per dL","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"enzyme unit per gram","csCode_":"U/g","ciCode_":"U","property_":"catalytic activity","magnitude_":10036894500000000,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"U/gm; U per gm; enzyme units per gram; micromoles per minute per gram; umol/min/g; umol per min per g","source_":"LOINC","loincProperty_":"CCnt","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"enzyme unit per hour","csCode_":"U/h","ciCode_":"U","property_":"catalytic activity","magnitude_":2788026250000,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"U/hr; U per hr; enzyme units per hour; micromoles per minute per hour; umol/min/hr; umol per min per hr","source_":"LOINC","loincProperty_":"CRat","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"enzyme unit per liter","csCode_":"U/L","ciCode_":"U","property_":"catalytic activity","magnitude_":10036894500000000000,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"enzyme unit/liter; enzyme unit/litre; U per L; enzyme units per liter; enzyme unit per litre; micromoles per minute per liter; umol/min/L; umol per min per L","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"enzyme unit per minute","csCode_":"U/min","ciCode_":"U","property_":"catalytic activity","magnitude_":167281575000000,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"enzyme unit/minute; U per min; enzyme units; umol/min/min; micromoles per minute per minute; micromoles per min per min; umol","source_":"LOINC","loincProperty_":"CRat","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"enzyme unit per milliliter","csCode_":"U/mL","ciCode_":"U","property_":"catalytic activity","magnitude_":1.00368945e+22,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"U per mL; enzyme units per milliliter; millilitre; micromoles per minute per milliliter; umol/min/mL; umol per min per mL","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"enzyme unit per second","csCode_":"U/s","ciCode_":"U","property_":"catalytic activity","magnitude_":10036894500000000,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"U/sec; U per second; enzyme units per second; micromoles per minute per second; umol/min/sec; umol per min per sec","source_":"LOINC","loincProperty_":"CRat","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"micro international unit","csCode_":"u[IU]","ciCode_":"[IU]","property_":"arbitrary","magnitude_":0.000001,"dim_":{"dimVec_":null},"printSymbol_":"i.U.","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"uIU; u IU; microinternational units","source_":"LOINC","loincProperty_":"Arb","category_":"Clinical","csUnitString_":"[iU]","ciUnitString_":"[IU]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"micro international unit per liter","csCode_":"u[IU]/L","ciCode_":"[IU]","property_":"arbitrary","magnitude_":0.001,"dim_":{"dimVec_":null},"printSymbol_":"i.U.","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"uIU/L; u IU/L; uIU per L; microinternational units per liter; litre; ","source_":"LOINC","loincProperty_":"ACnc","category_":"Clinical","csUnitString_":"[iU]","ciUnitString_":"[IU]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"micro international unit per milliliter","csCode_":"u[IU]/mL","ciCode_":"[IU]","property_":"arbitrary","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"i.U.","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":true,"synonyms_":"uIU/mL; u IU/mL; uIU per mL; microinternational units per milliliter; millilitre","source_":"LOINC","loincProperty_":"ACnc","category_":"Clinical","csUnitString_":"[iU]","ciUnitString_":"[IU]","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"microequivalent","csCode_":"ueq","ciCode_":"EQ","property_":"amount of substance","magnitude_":602213670000000000,"dim_":{"dimVec_":null},"printSymbol_":"eq","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"microequivalents; 10^-6 equivalents; 10-6 equivalents","source_":"LOINC","loincProperty_":"Sub","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"microequivalent per liter","csCode_":"ueq/L","ciCode_":"EQ","property_":"amount of substance","magnitude_":602213670000000000000,"dim_":{"dimVec_":null},"printSymbol_":"eq","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ueq per liter; litre; microequivalents","source_":"LOINC","loincProperty_":"MCnc","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"microequivalent per milliliter","csCode_":"ueq/mL","ciCode_":"EQ","property_":"amount of substance","magnitude_":6.0221367000000003e+23,"dim_":{"dimVec_":null},"printSymbol_":"eq","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ueq per milliliter; millilitre; microequivalents","source_":"LOINC","loincProperty_":"MCnc","category_":"Clinical","csUnitString_":"mol","ciUnitString_":"MOL","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"microgram","csCode_":"ug","ciCode_":"G","property_":"mass","magnitude_":0.000001,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mcg; micrograms; 10^-6 grams; 10-6 grams","source_":"LOINC","loincProperty_":"Mass","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"microgram per 100 gram","csCode_":"ug/(100.g)","ciCode_":"G","property_":"mass","magnitude_":1e-8,"dim_":{"dimVec_":[0,0,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ug/100gm; ug/100 gm; mcg; ug per 100g; 100 gm; mcg per 100g; micrograms per 100 grams","source_":"LOINC","loincProperty_":"MCnt","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"microgram per 24 hour","csCode_":"ug/(24.h)","ciCode_":"G","property_":"mass","magnitude_":1.1574074074074074e-11,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ug/24hrs; ug/24 hrs; mcg/24hrs; ug per 24hrs; mcg per 24hrs; 24 hrs; micrograms per 24 hours","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"microgram per 8 hour","csCode_":"ug/(8.h)","ciCode_":"G","property_":"mass","magnitude_":3.472222222222222e-11,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ug/8hrs; ug/8 hrs; mcg/8hrs; ug per 8hrs; mcg per 8hrs; 8 hrs; micrograms per 8 hours; shift","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"microgram per square foot (international)","csCode_":"ug/[sft_i]","ciCode_":"G","property_":"mass","magnitude_":0.000010763910416709721,"dim_":{"dimVec_":[-2,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ug/sft; ug/ft2; ug/ft^2; ug/sq. ft; micrograms; sq. foot; foot squared","source_":"LOINC","loincProperty_":"ArMass","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"microgram per day","csCode_":"ug/d","ciCode_":"G","property_":"mass","magnitude_":1.1574074074074074e-11,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ug/dy; mcg/dy; ug per day; mcg; micrograms per day","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"microgram per deciliter","csCode_":"ug/dL","ciCode_":"G","property_":"mass","magnitude_":0.009999999999999998,"dim_":{"dimVec_":[-3,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ug per dL; mcg/dl; mcg per dl; micrograms per deciliter; decilitre","source_":"LOINC","loincProperty_":"MCnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"microgram per gram","csCode_":"ug/g","ciCode_":"G","property_":"mass","magnitude_":0.000001,"dim_":{"dimVec_":[0,0,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ug per gm; mcg/gm; mcg per g; micrograms per gram","source_":"LOINC","loincProperty_":"MCnt","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"microgram per hour","csCode_":"ug/h","ciCode_":"G","property_":"mass","magnitude_":2.7777777777777777e-10,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ug/hr; mcg/hr; mcg per hr; ug per hr; ug per hour; micrograms","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"microgram per kilogram","csCode_":"ug/kg","ciCode_":"G","property_":"mass","magnitude_":9.999999999999999e-10,"dim_":{"dimVec_":[0,0,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ug per kg; mcg/kg; mcg per kg; micrograms per kilogram","source_":"LOINC","loincProperty_":"MCnt","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"microgram per kilogram per 8 hour","csCode_":"ug/kg/(8.h)","ciCode_":"G","property_":"mass","magnitude_":3.472222222222222e-14,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ug/kg/8hrs; mcg/kg/8hrs; ug/kg/8 hrs; mcg/kg/8 hrs; ug per kg per 8hrs; 8 hrs; mcg per kg per 8hrs; micrograms per kilograms per 8 hours; shift","source_":"LOINC","loincProperty_":"","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"microgram per kilogram per day","csCode_":"ug/kg/d","ciCode_":"G","property_":"mass","magnitude_":1.1574074074074072e-14,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ug/(kg.d); ug/kg/dy; mcg/kg/day; ug per kg per dy; 24 hours; 24hrs; mcg; kilograms; microgram per kilogram and day","source_":"LOINC","loincProperty_":"","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"microgram per kilogram per hour","csCode_":"ug/kg/h","ciCode_":"G","property_":"mass","magnitude_":2.7777777777777774e-13,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ug/(kg.h); ug/kg/hr; mcg/kg/hr; ug per kg per hr; mcg per kg per hr; kilograms","source_":"LOINC","loincProperty_":"","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"microgram per kilogram per minute","csCode_":"ug/kg/min","ciCode_":"G","property_":"mass","magnitude_":1.6666666666666664e-11,"dim_":{"dimVec_":[0,-1,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ug/kg/min; ug/kg/min; mcg/kg/min; ug per kg per min; mcg; micrograms per kilograms per minute ","source_":"LOINC","loincProperty_":"","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"microgram per liter","csCode_":"ug/L","ciCode_":"G","property_":"mass","magnitude_":0.001,"dim_":{"dimVec_":[-3,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"mcg/L; ug per L; mcg; micrograms per liter; litre ","source_":"LOINC","loincProperty_":"MCnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"microgram per liter per 24 hour","csCode_":"ug/L/(24.h)","ciCode_":"G","property_":"mass","magnitude_":1.1574074074074074e-8,"dim_":{"dimVec_":[-3,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ug/L/24hrs; ug/L/24 hrs; mcg/L/24hrs; ug per L per 24hrs; 24 hrs; day; dy mcg; micrograms per liters per 24 hours; litres","source_":"LOINC","loincProperty_":"","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"microgram per square meter","csCode_":"ug/m2","ciCode_":"G","property_":"mass","magnitude_":0.000001,"dim_":{"dimVec_":[-2,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ug/m^2; ug/sq. m; mcg/m2; mcg/m^2; mcg/sq. m; ug per m2; m^2; sq. meter; mcg; micrograms per square meter; meter squared; metre","source_":"LOINC","loincProperty_":"ArMass","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"microgram per cubic meter","csCode_":"ug/m3","ciCode_":"G","property_":"mass","magnitude_":0.000001,"dim_":{"dimVec_":[-3,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ug/m^3; ug/cu. m; mcg/m3; mcg/m^3; mcg/cu. m; ug per m3; ug per m^3; ug per cu. m; mcg; micrograms per cubic meter; meter cubed; metre","source_":"LOINC","loincProperty_":"MCnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"microgram per milligram","csCode_":"ug/mg","ciCode_":"G","property_":"mass","magnitude_":0.001,"dim_":{"dimVec_":[0,0,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ug per mg; mcg/mg; mcg per mg; micromilligrams per milligram","source_":"LOINC","loincProperty_":"MCnt","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"microgram per minute","csCode_":"ug/min","ciCode_":"G","property_":"mass","magnitude_":1.6666666666666667e-8,"dim_":{"dimVec_":[0,-1,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ug per min; mcg/min; mcg per min; microminutes per minute","source_":"LOINC","loincProperty_":"MRat","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"microgram per milliliter","csCode_":"ug/mL","ciCode_":"G","property_":"mass","magnitude_":1,"dim_":{"dimVec_":[-3,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ug per mL; mcg/mL; mcg per mL; micrograms per milliliter; millilitre","source_":"LOINC","loincProperty_":"MCnc","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"microgram per millimole","csCode_":"ug/mmol","ciCode_":"G","property_":"mass","magnitude_":1.660540186674939e-27,"dim_":{"dimVec_":[0,0,1,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ug per mmol; mcg/mmol; mcg per mmol; micrograms per millimole","source_":"LOINC","loincProperty_":"Ratio","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"microgram per nanogram","csCode_":"ug/ng","ciCode_":"G","property_":"mass","magnitude_":999.9999999999999,"dim_":{"dimVec_":[0,0,0,0,0,0,0]},"printSymbol_":"g","class_":null,"isMetric_":false,"variable_":"M","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"ug per ng; mcg/ng; mcg per ng; micrograms per nanogram","source_":"LOINC","loincProperty_":"MCnt","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"microkatal","csCode_":"ukat","ciCode_":"KAT","property_":"catalytic activity","magnitude_":602213670000000000,"dim_":{"dimVec_":null},"printSymbol_":"kat","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"microkatals; ukats","source_":"LOINC","loincProperty_":"CAct","category_":"Clinical","csUnitString_":"mol/s","ciUnitString_":"MOL/S","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"microliter","csCode_":"uL","ciCode_":"","property_":"volume","magnitude_":1e-9,"dim_":{"dimVec_":[3,0,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"microliters; microlitres; mcl","source_":"LOINC","loincProperty_":"Vol","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"microliter per 2 hour","csCode_":"uL/(2.h)","ciCode_":"","property_":"volume","magnitude_":1.388888888888889e-13,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"uL/2hrs; uL/2 hrs; mcg/2hr; mcg per 2hr; uL per 2hr; uL per 2 hrs; microliters per 2 hours; microlitres ","source_":"LOINC","loincProperty_":"VRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"microliter per hour","csCode_":"uL/h","ciCode_":"","property_":"volume","magnitude_":2.777777777777778e-13,"dim_":{"dimVec_":[3,-1,0,0,0,0,0]},"printSymbol_":"L","class_":"iso1000","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"uL/hr; mcg/hr; mcg per hr; uL per hr; microliters per hour; microlitres","source_":"LOINC","loincProperty_":"VRat","category_":"Clinical","csUnitString_":"l","ciUnitString_":null,"baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"micrometer","csCode_":"um","ciCode_":"M","property_":"length","magnitude_":0.000001,"dim_":{"dimVec_":[1,0,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"micrometers; micrometres; μm; microns","source_":"LOINC","loincProperty_":"Len","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":true,"name_":"microns per second","csCode_":"um/s","ciCode_":"M","property_":"length","magnitude_":0.000001,"dim_":{"dimVec_":[1,-1,0,0,0,0,0]},"printSymbol_":"m","class_":null,"isMetric_":false,"variable_":"L","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"um/sec; micron/second; microns/second; um per sec; micrometers per second; micrometres","source_":"LOINC","loincProperty_":"Vel","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"micromole","csCode_":"umol","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"micromoles; umols","source_":"LOINC","loincProperty_":"Sub","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"micromole per 2 hour","csCode_":"umol/(2.h)","ciCode_":"MOL","property_":"amount of substance","magnitude_":83640787500000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"umol/2hrs; umol/2 hrs; umol per 2 hrs; 2hrs; micromoles per 2 hours","source_":"LOINC","loincProperty_":"SRat","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"micromole per 24 hour","csCode_":"umol/(24.h)","ciCode_":"MOL","property_":"amount of substance","magnitude_":6970065625000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"umol/24hrs; umol/24 hrs; umol per 24 hrs; per 24hrs; micromoles per 24 hours","source_":"LOINC","loincProperty_":"SRat","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"micromole per 8 hour","csCode_":"umol/(8.h)","ciCode_":"MOL","property_":"amount of substance","magnitude_":20910196875000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"umol/8hr; umol/8 hr; umol per 8 hr; umol per 8hr; umols per 8hr; umol per 8 hours; micromoles per 8 hours; shift","source_":"LOINC","loincProperty_":"SRat","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"micromole per day","csCode_":"umol/d","ciCode_":"MOL","property_":"amount of substance","magnitude_":6970065625000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"umol/day; umol per day; umols per day; umol per days; micromoles per days; umol/24hr; umol/24 hr; umol per 24 hr; umol per 24hr; umols per 24hr; umol per 24 hours; micromoles per 24 hours","source_":"LOINC","loincProperty_":"SRat","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"micromole per deciliter","csCode_":"umol/dL","ciCode_":"MOL","property_":"amount of substance","magnitude_":6.0221367e+21,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"micromole/deciliter; micromole/decilitre; umol per dL; micromoles per deciliters; micromole per decilitres","source_":"LOINC","loincProperty_":"SCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"micromole per gram","csCode_":"umol/g","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"micromole/gram; umol per g; micromoles per gram","source_":"LOINC","loincProperty_":"SCnt; Ratio","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"micromole per hour","csCode_":"umol/h","ciCode_":"MOL","property_":"amount of substance","magnitude_":167281575000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"umol/hr; umol per hr; umol per hour; micromoles per hours","source_":"LOINC","loincProperty_":"SRat","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"micromole per kilogram","csCode_":"umol/kg","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"umol per kg; micromoles per kilogram","source_":"LOINC","loincProperty_":"SCnt","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"micromole per liter","csCode_":"umol/L","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"micromole/liter; micromole/litre; umol per liter; micromoles per liter; litre","source_":"LOINC","loincProperty_":"SCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"micromole per liter per hour","csCode_":"umol/L/h","ciCode_":"MOL","property_":"amount of substance","magnitude_":167281575000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"umol/liter/hr; umol/litre/hr; umol per L per hr; umol per liter per hour; micromoles per liters per hour; litre","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"micromole per milligram","csCode_":"umol/mg","ciCode_":"MOL","property_":"amount of substance","magnitude_":602213670000000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"micromole/milligram; umol per mg; micromoles per milligram","source_":"LOINC","loincProperty_":"SCnt","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"micromole per minute","csCode_":"umol/min","ciCode_":"MOL","property_":"amount of substance","magnitude_":10036894500000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"micromole/minute; umol per min; micromoles per minute; enzyme units","source_":"LOINC","loincProperty_":"CAct","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"micromole per minute per gram","csCode_":"umol/min/g","ciCode_":"MOL","property_":"amount of substance","magnitude_":10036894500000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"umol/min/gm; umol per min per gm; micromoles per minutes per gram; U/g; enzyme units","source_":"LOINC","loincProperty_":"CCnt","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"micromole per minute per liter","csCode_":"umol/min/L","ciCode_":"MOL","property_":"amount of substance","magnitude_":10036894500000000000,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"umol/min/liter; umol/minute/liter; micromoles per minutes per liter; litre; enzyme units; U/L","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"micromole per milliliter","csCode_":"umol/mL","ciCode_":"MOL","property_":"amount of substance","magnitude_":6.0221367000000003e+23,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"umol per mL; micromoles per milliliter; millilitre","source_":"LOINC","loincProperty_":"SCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"micromole per milliliter per minute","csCode_":"umol/mL/min","ciCode_":"MOL","property_":"amount of substance","magnitude_":1.00368945e+22,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"umol per mL per min; micromoles per milliliters per minute; millilitres","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"micromole per millimole","csCode_":"umol/mmol","ciCode_":"MOL","property_":"amount of substance","magnitude_":0.001,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"umol per mmol; micromoles per millimole","source_":"LOINC","loincProperty_":"SRto","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"micromole per mole","csCode_":"umol/mol","ciCode_":"MOL","property_":"amount of substance","magnitude_":0.000001,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"umol per mol; micromoles per mole","source_":"LOINC","loincProperty_":"SRto","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"micromole per micromole","csCode_":"umol/umol","ciCode_":"MOL","property_":"amount of substance","magnitude_":1,"dim_":{"dimVec_":null},"printSymbol_":"mol","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"umol per umol; micromoles per micromole","source_":"LOINC","loincProperty_":"Srto; SFr; EntSRto","category_":"Clinical","csUnitString_":"10*23","ciUnitString_":"10*23","baseFactorStr_":"6.0221367","baseFactor_":"6.0221367","defError_":false},{"isBase_":false,"name_":"microOhm","csCode_":"uOhm","ciCode_":"OHM","property_":"electric resistance","magnitude_":0.001,"dim_":{"dimVec_":[2,-1,1,0,0,-2,0]},"printSymbol_":"Ω","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"microOhms; µΩ","source_":"LOINC","loincProperty_":"","category_":"Clinical","csUnitString_":"V/A","ciUnitString_":"V/A","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":true,"name_":"microsecond","csCode_":"us","ciCode_":"S","property_":"time","magnitude_":0.000001,"dim_":{"dimVec_":[0,1,0,0,0,0,0]},"printSymbol_":"s","class_":null,"isMetric_":false,"variable_":"T","cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"microseconds","source_":"LOINC","loincProperty_":"Time","category_":"Clinical","csUnitString_":null,"ciUnitString_":null,"baseFactorStr_":null,"baseFactor_":null,"defError_":false},{"isBase_":false,"name_":"micro enzyme unit per gram","csCode_":"uU/g","ciCode_":"U","property_":"catalytic activity","magnitude_":10036894500,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"uU per gm; micro enzyme units per gram; micro enzymatic activity per mass; enzyme activity","source_":"LOINC","loincProperty_":"CCnt","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"micro enzyme unit per liter","csCode_":"uU/L","ciCode_":"U","property_":"catalytic activity","magnitude_":10036894500000,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"uU per L; micro enzyme units per liter; litre; enzymatic activity per volume; enzyme activity ","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"micro enzyme unit per milliliter","csCode_":"uU/mL","ciCode_":"U","property_":"catalytic activity","magnitude_":10036894500000000,"dim_":{"dimVec_":null},"printSymbol_":"U","class_":"chemical","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"uU per mL; micro enzyme units per milliliter; millilitre; enzymatic activity per volume; enzyme activity","source_":"LOINC","loincProperty_":"CCnc","category_":"Clinical","csUnitString_":"umol/min","ciUnitString_":"UMOL/MIN","baseFactorStr_":"1","baseFactor_":"1","defError_":false},{"isBase_":false,"name_":"microvolt","csCode_":"uV","ciCode_":"V","property_":"electric potential","magnitude_":0.001,"dim_":{"dimVec_":[2,-2,1,0,0,-1,0]},"printSymbol_":"V","class_":"si","isMetric_":true,"variable_":null,"cnv_":null,"cnvPfx_":1,"isSpecial_":false,"isArbitrary_":false,"synonyms_":"microvolts","source_":"LOINC","loincProperty_":"Elpot","category_":"Clinical","csUnitString_":"J/C","ciUnitString_":"J/C","baseFactorStr_":"1","baseFactor_":"1","defError_":false}]}

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
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],5:[function(require,module,exports){
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
},{"base64-js":2,"ieee754":12,"isarray":6}],6:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],7:[function(require,module,exports){
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
},{"../../is-buffer/index.js":14}],8:[function(require,module,exports){
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
},{"_process":19,"buffer":5,"stream":31,"string_decoder":42,"util":45}],9:[function(require,module,exports){
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
},{"_process":19,"lodash.get":10,"stream":31,"util":45}],10:[function(require,module,exports){
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
},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
'use strict';
var numberIsNan = require('number-is-nan');

module.exports = Number.isFinite || function (val) {
	return !(typeof val !== 'number' || numberIsNan(val) || val === Infinity || val === -Infinity);
};

},{"number-is-nan":17}],16:[function(require,module,exports){
// https://github.com/paulmillr/es6-shim
// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isinteger
var isFinite = require("is-finite");
module.exports = Number.isInteger || function(val) {
  return typeof val === "number" &&
    isFinite(val) &&
    Math.floor(val) === val;
};

},{"is-finite":15}],17:[function(require,module,exports){
'use strict';
module.exports = Number.isNaN || function (x) {
	return x !== x;
};

},{}],18:[function(require,module,exports){
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
},{"_process":19}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
module.exports = require("./lib/_stream_duplex.js")

},{"./lib/_stream_duplex.js":21}],21:[function(require,module,exports){
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
},{"./_stream_readable":23,"./_stream_writable":25,"core-util-is":7,"inherits":13,"process-nextick-args":18}],22:[function(require,module,exports){
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
},{"./_stream_transform":24,"core-util-is":7,"inherits":13}],23:[function(require,module,exports){
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
},{"./_stream_duplex":21,"_process":19,"buffer":5,"core-util-is":7,"events":11,"inherits":13,"isarray":26,"process-nextick-args":18,"string_decoder/":42,"util":3}],24:[function(require,module,exports){
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
},{"./_stream_duplex":21,"core-util-is":7,"inherits":13}],25:[function(require,module,exports){
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
},{"./_stream_duplex":21,"_process":19,"buffer":5,"core-util-is":7,"events":11,"inherits":13,"process-nextick-args":18,"util-deprecate":43}],26:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],27:[function(require,module,exports){
module.exports = require("./lib/_stream_passthrough.js")

},{"./lib/_stream_passthrough.js":22}],28:[function(require,module,exports){
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

},{"./lib/_stream_duplex.js":21,"./lib/_stream_passthrough.js":22,"./lib/_stream_readable.js":23,"./lib/_stream_transform.js":24,"./lib/_stream_writable.js":25}],29:[function(require,module,exports){
module.exports = require("./lib/_stream_transform.js")

},{"./lib/_stream_transform.js":24}],30:[function(require,module,exports){
module.exports = require("./lib/_stream_writable.js")

},{"./lib/_stream_writable.js":25}],31:[function(require,module,exports){
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

},{"events":11,"inherits":13,"readable-stream/duplex.js":20,"readable-stream/passthrough.js":27,"readable-stream/readable.js":28,"readable-stream/transform.js":29,"readable-stream/writable.js":30}],32:[function(require,module,exports){
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
},{"_process":19,"stream":31,"util":45}],33:[function(require,module,exports){
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
},{"_process":19,"buffer":5,"inherits":13,"readable-stream":41}],34:[function(require,module,exports){
arguments[4][21][0].apply(exports,arguments)
},{"./_stream_readable":36,"./_stream_writable":38,"core-util-is":7,"dup":21,"inherits":13,"process-nextick-args":18}],35:[function(require,module,exports){
arguments[4][22][0].apply(exports,arguments)
},{"./_stream_transform":37,"core-util-is":7,"dup":22,"inherits":13}],36:[function(require,module,exports){
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
},{"./_stream_duplex":34,"_process":19,"buffer":5,"buffer-shims":39,"core-util-is":7,"events":11,"inherits":13,"isarray":40,"process-nextick-args":18,"string_decoder/":42,"util":3}],37:[function(require,module,exports){
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
},{"./_stream_duplex":34,"core-util-is":7,"inherits":13}],38:[function(require,module,exports){
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
},{"./_stream_duplex":34,"_process":19,"buffer":5,"buffer-shims":39,"core-util-is":7,"events":11,"inherits":13,"process-nextick-args":18,"util-deprecate":43}],39:[function(require,module,exports){
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
},{"buffer":5}],40:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"dup":6}],41:[function(require,module,exports){
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
},{"./lib/_stream_duplex.js":34,"./lib/_stream_passthrough.js":35,"./lib/_stream_readable.js":36,"./lib/_stream_transform.js":37,"./lib/_stream_writable.js":38,"_process":19}],42:[function(require,module,exports){
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

},{"buffer":5}],43:[function(require,module,exports){
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
},{}],44:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],45:[function(require,module,exports){
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
},{"./support/isBuffer":44,"_process":19,"inherits":13}],46:[function(require,module,exports){
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

var Ucum = exports.Ucum = {

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
  bracesMsg_: 'Annotations (text in curley braces {}) have no influence ' + 'on the processing of a unit string.',

  /**
   * Hash that matches unit column names to names used in the csv file
   * that is submitted to the data updater.
   */
  csvCols_: {
    'case-sensitive code': 'csCode_',
    'LOINC property': 'loincProperty_',
    'name (final)': 'name_',
    'synonyms': 'synonyms_',
    'source': 'source_',
    'category': 'category_'
  },

  /**
   * Name of the iey in the csv file that serves as the key
   */
  inputKey_: 'case-sensitive code'
};


},{}],47:[function(require,module,exports){
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


},{"./config.js":46,"is-integer":16}],48:[function(require,module,exports){
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


},{"./config.js":46}],49:[function(require,module,exports){
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


},{}],50:[function(require,module,exports){
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

var stream = require('stream');
var parse = require('csv-parse');
var transform = require('stream-transform');
var stringify = require('csv-stringify');
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
            if (_parseResp['status'] === 'valid') record[resultCol] = _parseResp['ucumCode'] + " is a valid UCUM unit.";else record[resultCol] = uStr + " is not a valid UCUM unit.";
            if (_parseResp['msg'] && _parseResp['msg'].length > 0) record[commentCol] = _parseResp['msg'].join('; ');else record[commentCol] = '';
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


},{"./config.js":46,"./ucumLhcUtils.js":53,"csv-parse":8,"csv-stringify":9,"stream":31,"stream-transform":32,"string-to-stream":33}],51:[function(require,module,exports){
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


},{}],52:[function(require,module,exports){
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

var Pfx = require("./prefix.js");
var PfxT = require("./prefixTables.js");
var Un = require("./unit.js");
var Utab = require('./unitTables.js');

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

      if (Utab.UnitTables.getInstance().unitsCount() === 0) {

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
      } // end if the data has not already been loaded
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


},{"../dist/data/ucumDefs.json":1,"./prefix.js":48,"./prefixTables.js":49,"./unit.js":55,"./unitTables.js":57}],53:[function(require,module,exports){
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
     * @returns an object with two properties:
     *  'status' either 'valid' or 'invalid'
     *  'ucumCode' the valid ucum code, which may differ from what was passed
     *    in (e.g., if 'pound' is passed in, this will contain '[lb_av]'); and
     *   'msg' contains a message, if the string is invalid, indicating
     *         the problem, or an explanation of a substitution such as the
     *         substitution of '[lb_av]' for 'pound'
     */

  }, {
    key: 'validUnitString',
    value: function validUnitString(uStr) {

      var resp = this.getSpecifiedUnit(uStr);
      var retObj = { 'status': resp[0] !== null ? 'valid' : 'invalid',
        'ucumCode': resp[1],
        'msg': resp[2] };
      return retObj;
    } // end validUnitString


    /**
     * This method converts one unit to another
     *
     * @param fromUnitCode the unit code/expression/string of the unit to be converted
     * @param fromVal the number of "from" units to be converted to "to" units
     * @param toUnitCode the unit code/expression/string of the unit that the from
     *  field is to be converted to
     * @param decDigits the maximum number of decimal digits to be displayed
     *  for the converted unit.  If not specified, the UCUM.decDigits_ value
     *  (defined in config.js) is used.
     * @returns an object with three elements:
     *  'status' either 'succeeded' or 'failed';
     *  'toVal' the numeric value indicating the conversion amount, or null
     *     null if the conversion failed (e.g., if the units are not commensurable)
     *  'msg' an array of any messages returned, including a description of
     *     a successful result or an error message if an error occurred.
     */

  }, {
    key: 'convertUnitTo',
    value: function convertUnitTo(fromUnitCode, fromVal, toUnitCode, decDigits) {

      if (decDigits === undefined) decDigits = Ucum.decDigits_;

      var resultMsg = [];
      var returnObj = { 'status': 'failed',
        'toVal': null };

      try {
        var fromUnit = null;

        var parseResp = this.getSpecifiedUnit(fromUnitCode);
        fromUnit = parseResp[0];
        if (parseResp[2].length > 0) resultMsg = parseResp[2];

        var toUnit = null;
        parseResp = this.getSpecifiedUnit(toUnitCode);
        toUnit = parseResp[0];
        if (parseResp[2].length > 0) {
          if (resultMsg.length > 0) resultMsg = resultMsg.concat(parseResp[2]);else resultMsg = parseResp[2];
        }

        if (fromUnit && toUnit) {
          try {
            var toVal = toUnit.convertFrom(fromVal, fromUnit);
            toVal = toVal.toFixed(decDigits).replace(/\.?0+$/, "");
            resultMsg.push(fromVal.toString() + " " + fromUnit.getProperty('csCode_') + " = " + toVal.toString() + " " + toUnit.getProperty('csCode_'));
            returnObj['toVal'] = toVal;
            returnObj['status'] = 'succeeded';
          } catch (err) {
            resultMsg.push(err.message);
          }
        } // end if we have the from and to units
      } catch (err) {
        resultMsg.push(err.message);
      }
      returnObj['msg'] = resultMsg;
      return returnObj;
    } // end convertUnitTo


    /**
     * This method parses a unit string to get (or try to get) the unit
     * represented by the string.
     *
     * @param uName the expression/string representing the unit
     * @returns an array containing the unit found for the string (or null if
     *  no unit was found), a (possibly) updated version of the string (for
     *  cases where a unit name was specified and the code was found for it)
     *  and a message array containing any returned
     */

  }, {
    key: 'getSpecifiedUnit',
    value: function getSpecifiedUnit(uName) {

      uName = uName.trim();

      var utab = UnitTables.getInstance();
      var retMsg = [];
      var retUnitString = null;
      var errorThrown = false;

      // go ahead and just try using the name as the code.  This may or may not
      // work, but if it does, it cuts out a lot of parsing.
      var theUnit = utab.getUnitByCode(uName);

      // If we found it, set the returned unit string to what was passed in;
      // otherwise try parsing as a unit string
      if (theUnit) {
        retUnitString = uName;
      } else {
        try {
          var uStrParser = UnitString.getInstance();
          var parseResp = uStrParser.parseString(uName);
          theUnit = parseResp[0];
          retUnitString = parseResp[1];
          retMsg = parseResp[2];
        } catch (err) {
          console.log('Unit requested for unit string ' + uName + '.' + 'request unsuccessful; error thrown = ' + err.message);
          if (uName) retMsg.unshift(uName + ' is not a valid unit.  ' + err.message);else retMsg.unshift(err.message);
          errorThrown = true;
        }
      }

      // if no error was thrown but no unit was found, create a not found message
      if ((theUnit === null || theUnit === undefined) && !errorThrown) {
        retMsg.unshift(uName + ' is not a valid unit expression.');
      }

      return [theUnit, retUnitString, retMsg];
    } // end getSpecifiedUnit


    /**
     * This method retrieves a list of units commensurable, i.e., that can be
     * converted from and to, a specified unit.  Returns an error if the "from"
     * unit cannot be found.
     *
     * @param fromName the name/unit string of the "from" unit
     * @returns an array containing two elements;
     *   first element is the list of commensurable units if any were found
     *   second element is an error message if the "from" unit is not found
     */

  }, {
    key: 'commensurablesList',
    value: function commensurablesList(fromName) {

      var retMsg = [];
      var commUnits = null;
      var parseResp = this.getSpecifiedUnit(fromName);
      var fromUnit = parseResp[0];
      if (parseResp[2].length > 0) retMsg = parseResp[2];
      if (!fromUnit) {
        retMsg.push('Could not find unit ' + fromName + '.');
      } else {
        var dimVec = null;
        var fromDim = fromUnit.getProperty('dim_');
        try {
          dimVec = fromDim.getProperty('dimVec_');
        } catch (err) {
          if (err.message === "Dimension does not have requested property(dimVec_)") dimVec = null;
        }
        if (dimVec) {
          var utab = UnitTables.getInstance();
          commUnits = utab.getUnitsByDimension(dimVec);
        }
      } // end if we found a "from" unit
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


},{"./config.js":46,"./prefix.js":48,"./ucumJsonDefs.js":52,"./unit.js":55,"./unitString.js":56,"./unitTables.js":57,"fs":4}],54:[function(require,module,exports){
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


},{"./config.js":46,"./ucumFileValidator.js":50,"./ucumLhcUtils.js":53,"./unitTables.js":57}],55:[function(require,module,exports){
"use strict";

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
var Dimension = require('./dimension.js').Dimension;
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
  } // end constructor


  /**
   * Assign the unity (= dimensionless unit 1) to this unit.
   *
   * @return this unit
   */


  _createClass(Unit, [{
    key: "assignUnity",
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
    key: "assignVals",
    value: function assignVals(vals) {
      for (var key in vals) {
        var uKey = !key.charAt(key.length - 1) === '_' ? key + '_' : key;
        if (this.hasOwnProperty(uKey)) this[uKey] = vals[key];else throw new Error("Parameter error; " + key + " is not a property of a Unit");
      }
    } // end assignVals


    /**
     * This creates a clone of this unit.
     *
     * @return the clone
     */

  }, {
    key: "clone",
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
    key: "assign",
    value: function assign(unit2) {
      var _this2 = this;

      Object.getOwnPropertyNames(unit2).forEach(function (val) {
        if (_this2.val !== undefined) {
          if (val === 'dim_') {
            _this2['dim_'] = new Dimension(_this2.dim_.dimVec_);
          } else {
            _this2[val] = _this2[val];
          }
        } else throw new Error("Parameter error; " + val + " is not a property of a Unit");
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
    key: "equals",
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
    key: "getProperty",
    value: function getProperty(propertyName) {
      var uProp = propertyName.charAt(propertyName.length - 1) === '_' ? propertyName : propertyName + '_';
      if (!this.hasOwnProperty(uProp)) throw new Error("Unit does not have requested property (" + propertyName + "),  " + ("unit code = " + this.csCode_));else return this[uProp];
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
    key: "convertFrom",
    value: function convertFrom(num, fromUnit) {
      var newNum = 0.0;

      // reject request if the dimensions are not equal
      if (!fromUnit.dim_.equals(this.dim_)) {
        throw new Error("Sorry.  " + fromUnit.csCode_ + " cannot be converted " + ("to " + this.csCode_ + "."));
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
    key: "convertTo",
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
    key: "convertCoherent",
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
    key: "mutateCoherent",
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
        if (uA == null) throw new Error("Can't find base unit for dimension " + i);
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
    key: "mutateRatio",
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
    key: "multiplyThis",
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
    key: "multiplyThese",
    value: function multiplyThese(unit2) {
      if (this.cnv_ != null) {
        if (unit2.cnv_ == null && unit2.dim_.isZero()) this.cnvPfx_ *= unit2.magnitude_;else throw new Error("Attempt to multiply non-ratio unit " + this.name_ + " " + 'failed.');
      } else {
        if (unit2.cnv_ != null) {
          if (this.cnv_ == null && this.dim_.isZero()) {
            var cp = this.magnitude_;
            assign(unit2);
            this.cnvPfx_ *= cp;
          } else throw new Error("Attempt to multiply non-ratio unit " + u2Nname);
        } else {
          this.name_ = this.mulString(this.name_, unit2.name_);
          this.csCode_ = this.mulString(this.csCode_, unit2.csCode_);
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
    key: "divide",
    value: function divide(unit2) {

      if (this.cnv_ != null) throw new Error("Attempt to divide non-ratio unit " + this.name_);
      if (unit2.cnv_ != null) throw new Error("Attempt to divide by non-ratio unit " + unit2.name_);

      this.name_ = this.divString(this.name_, unit2.name_);
      this.csCode_ = this.divString(this.csCode_, unit2.csCode_);

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
    key: "invert",
    value: function invert() {

      if (this.cnv_ != null) throw new Error("Attempt to invert a non-ratio unit - " + this.name_);

      if (this.name_.length > 0) {
        var nameRep = this.name_.replace('/', "!").replace('.', '/').replace("!", '.');
        switch (nameRep.charAt(0)) {
          case '.':
            this.name_ = nameRep.substr(1);break;
          case '/':
            this.name_ = nameRep;break;
          default:
            this.name_ = "/" + nameRep;
        }
      }
      this.magnitude_ = 1 / this.magnitude_;
      this.dim_.minus();
      return this;
    } // end invert


    /**
     * Raises this unit to a power.  For example
     *  kg.m/s2 raised to the -2 power would be kg-2.m-2/s-4
     *
     * If this unit is not on a ratio scale an error is thrown. Mutating
     * to a ratio scale unit is not possible for a unit, only for a
     * measurement (magnitude and dimension).
     *
     * This is based on the pow method in Gunter Schadow's java version,
     * although it uses javascript capabilities to simplify the processing.
     *
     *
     * This unit is modified by this function
     * @param p the power to with this unit is to be raise
     * @return this unit after it is raised
     * @throws an error if this unit is not on a ratio scale.
     */

  }, {
    key: "power",
    value: function power(p) {

      if (this.cnv_ != null) throw new Error("Attempt to raise a non-ratio unit, " + this.name_ + ", " + 'to a power.');

      //this.name_ = UnitString.pow(this.name_, p);
      // the above line is replaced with the code below, as the pow method
      // never actually existing in the UnitString class.  (Tried to use
      // Schadow java code but this way ended up being a lot easier).
      var uStr = this.csCode_;
      var uArray = uStr.match(/([./]|[^./]+)/g);
      var arLen = uArray.length;

      for (var i = 0; i < arLen; i++) {
        var un = uArray[i];
        if (un !== '/' && un !== '.') {
          var nun = parseInt(un);
          if (isInteger(nun)) uArray[i] = Math.pow(nun, p).toString();else {
            var uLen = un.length;
            for (var u = uLen - 1; u >= 0; u--) {
              var uChar = parseInt(un[u]);
              if (!isInteger(uChar)) {
                if (un[u] === '-' || un[u] === '+') {
                  u--;
                }
                if (u < uLen - 1) {
                  var exp = parseInt(un.substr(u));
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


    /**
     * Creates a unit string that indicates multiplication of the two
     * units referenced by the codes passed in.
     *
     * @params s1 string representing the first unit
     * @params s2 string representing the second unit
     * @returns a string representing the two units multiplied
     */

  }, {
    key: "mulString",
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
    key: "divString",
    value: function divString(s1, s2) {
      var ret = null;
      if (s2.length == 0) ret = s1;else {
        var supPos = s2.indexOf('<sup>');
        var s2Sup = null;
        if (supPos > 0) {
          s2Sup = s2.substr(supPos);
          s2 = s2.substr(0, supPos);
        }
        var t = s2.replace('/', '~').replace('.', '/').replace('~', '.');

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

  return Unit;
}(); // end Unit class


},{"./dimension.js":47,"./ucumFunctions.js":51,"is-integer":16}],56:[function(require,module,exports){
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
var Unit = require('./unit.js').Unit;
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
     * Parses a unit string, returns a unit, a possibly updated version of
     * the string passed in, and messages where appropriate.
     *
     * The string returned may be updated if the input string contained unit
     * names, e.g., "pound".  The unit code ([lb_av] for pound) is placed in
     * the string returned, a the returned messages array includes a note
     * explaining the substitution.
     *
     * @param uStr the string defining the unit
     * @param origString the original unit string passed in; used when this is
     *  called recursively; set to uStr if not provided.
     * @param retMsg the array of messages to be returned; optional, used when
     *  this is called recursively.
     * @returns an array containing: 1) the unit object (or null if there were
     *  problems creating the unit); 2) the possibly updated unit string passed
     *  in; and 2) an array of user messages (informational, error or warning).
     * @throws an error if nothing was specified.
     */

  }, {
    key: 'parseString',
    value: function parseString(uStr, origString, retMsg) {

      uStr = uStr.trim();

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

      // An array of messages (warnings and errors) to be returned;;
      // initialized if not provided.
      if (retMsg === undefined) var retMsg = [];

      // Extract any annotations, i.e., text enclosed in braces ({}) from the
      // string before further processing.  Store each one in the annotations
      // array and put a placeholder in the string for the annotation.  Do
      // this before other processing in case an annotation contains characters
      // that will be interpreted as parenthetical markers or operators in
      // subsequent processing.
      var annotations = [];
      uStr = this.getAnnotations(uStr, annotations, retMsg);

      // Flag used to block further processing on an unrecoverable error
      var endProcessing = retMsg.length > 0;

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
              var parseResp = this.parseString(origString.substring(openPos + 1, _closePos - 1), origString, retMsg);
              parensUnits[pu++] = parseResp[0];
              //origString = parseResp[1];
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
        /*    if (firstCall)
              origString = uStr ;*/
        uArray = this.makeUnitsArray(uStr);

        // Create a unit object out of each un element
        var _uLen = uArray.length;
        for (var u1 = 0; u1 < _uLen && !endProcessing; u1++) {
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
                else if (this.bracesMsg_) {
                    var dup = false;
                    for (var r = 0; !dup && r < retMsg.length; r++) {
                      dup = retMsg[r] === this.bracesMsg_;
                    }
                    if (!dup) retMsg.push(this.bracesMsg_);
                  }
              } // end if the text following the parentheses is an annotation
            } // end if the ending parenthesis is not at the end of the code

            // If we're good, put the unit in the uArray and replace the placeholder
            // in the original string with the unit name.
            if (!endProcessing) {
              var nIdx = parseInt(pIdx);
              uArray[u1]['un'] = parensUnits[nIdx];
              origString = origString.replace(this.parensFlag_ + pIdx + this.parensFlag_, '(' + parensUnits[nIdx]['name_'] + ')');
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
                  var uRet = this.makeUnit(curCode, annotations, retMsg, origString);
                  if (uRet[0] == null) endProcessing = true;else {
                    uArray[u1]['un'] = uRet[0];
                    origString = uRet[1];
                  }
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
            var msgString = 'Unit string (' + origString + ') contains unrecognized ' + 'element';
            if (nextUnit) {
              msgString += ' (' + this.openEmph_ + nextUnit.toString() + (this.closeEmph_ + ')');
            }
            msgString += '; could not parse full string.  Sorry';
            retMsg.push(msgString);
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
                    var theCode = finalUnit.toString() + thisOp + nextUnit.getProperty('csCode_');
                    finalUnit = nextUnit;
                    finalUnit.assignVals({ 'csCode_': theCode,
                      'name_': theName,
                      'magnitude_': nMag });
                  }
              } // end if nextUnit is not a number

              else {
                  // nextUnit is a number; finalUnit is a unit object
                  if (typeof finalUnit !== 'number') {
                    var fMag = finalUnit.getProperty('magnitude_');
                    isDiv ? fMag /= nextUnit : fMag *= nextUnit;
                    var _theName = finalUnit.getProperty('name_') + thisOp + nextUnit.toString();
                    var _theCode = finalUnit.getProperty('csCode_') + thisOp + nextUnit.toString();
                    finalUnit.assignVals({ 'csCode_': _theCode,
                      'name_': _theName,
                      'magnitude_': fMag });
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

      // check for any annotation flags still there and replace them with
      // the annotations
      var anoLen = annotations.length;
      for (var a = 0; a < anoLen; a++) {
        origString = origString.replace(this.braceFlag_ + a + this.braceFlag_, annotations[a]);
      }

      // Do a final check to make sure that finalUnit is a unit and not
      // just a number.  Something like "1/{HCP}" will return a "unit" of 1
      // - which is not a unit.  Do this only when this is the first/outer
      // call to this method.
      if (finalUnit && firstCall && !isNaN(finalUnit) && finalUnit !== 1) {
        //console.log('at end of parseString, uStr = ' + uStr + '; origString = ' +
        //    origString + '; finalUnit = ' + JSON.stringify(finalUnit) );
        var newUnit = new Unit({ 'csCode_': origString });
        if (newUnit) {
          newUnit['magnitude_'] = finalUnit;
        } else {
          throw new Error('error processing numerical unit');
        }
        finalUnit = newUnit;
      }
      return [finalUnit, origString, retMsg];
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
          openBrace = -1;
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
     * @returns an array containing:  1) a unit object, or null if there were
     *  problems creating the unit; and 2) the origString passed in, which may
     *  be updated if a unit name was translated to a unit code
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
      var origCode = uCode;

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
              if (this.bracesMsg_) {
                var dup = false;
                for (var r = 0; !dup && r < retMsg.length; r++) {
                  dup = retMsg[r] === this.bracesMsg_;
                }
                if (!dup) retMsg.push(this.bracesMsg_);
              }
              retUnit = 1;
              endProcessing = true;
            } // end if the annotation is a standalone

            // Else we have an annotation that follows a unit expression (probably).
            // Put in an interpretation note and trim the annotation off the uCode.
            else {
                //let lead1 = (origString.substr(0,1) === '/') ? '1' : '' ;
                //let wString = origString.replace(anText, this.openEmph_ + anText +
                //                                         this.closeEmph_) ;
                origString = origString.replace(this.braceFlag_ + anIdx + this.braceFlag_, anText);
                if (this.bracesMsg_) {
                  var _dup = false;
                  for (var _r = 0; !_dup && _r < retMsg.length; _r++) {
                    _dup = retMsg[_r] === this.bracesMsg_;
                  }
                  if (!_dup) retMsg.push(this.bracesMsg_);
                }
                uCode = uCode.substr(0, anOpen);
              } // end if the annotation follows the unit expression
        } // end if we found an open and a close brace
      } // end if we found an open brace


      // Continue if we did not hit an annotation error
      if (!endProcessing) {

        // Check to make sure that the uCode is not simply a number.  This can
        // happen if an annotation was stripped off, or if the uCode was JUST
        // an annotation.  In either case, digits are not units, but return the
        // digits.
        endProcessing = !isNaN(uCode);
        retUnit = Number(uCode);
      }
      if (!endProcessing) {
        ulen = uCode.length;
        var utabs = UnitTables.getInstance();

        // First look for the full string as a code
        origUnit = utabs.getUnitByCode(uCode);

        // If we didn't find it, try it as a name
        if (!origUnit) {
          var origUnitAry = utabs.getUnitByName(uCode);
          if (origUnitAry && origUnitAry.length > 0) {
            origUnit = origUnitAry[0];
            var mString = '(The UCUM code for ' + uCode + ' is ' + origUnit.csCode_ + ')';
            var dupMsg = false;
            for (var _r2 = 0; _r2 < retMsg.length && !dupMsg; _r2++) {
              dupMsg = retMsg[_r2] === mString;
            }if (!dupMsg) retMsg.push(mString);
            var rStr = new RegExp('(^|[.\/({])(' + uCode + ')($|[.\/)}])');
            var res = origString.match(rStr);
            origString = origString.replace(rStr, res[1] + origUnit.csCode_ + res[3]);
            uCode = origUnit.csCode_;
          }
        }

        // If that didn't work, peel off the exponent and try it
        if (!origUnit) {
          // This particular regex has been tweaked several times.  This one
          // works with the following test strings:
          // "m[H2O]-21] gives ["m{H2O]-21", "m[H2)]", "-21"]
          // "m[H2O]+21] gives ["m{H2O]+21", "m[H2)]", "+21"]
          // "m[H2O]21] gives ["m{H2O]-21", "m[H2)]", "21"]
          // "s2" gives ["s2", "s, "2"]
          // "kg" gives null
          var _res = uCode.match(/(^[^\-\+]+?)([\-\+\d]+)$/);

          // if we got an exponent, separate it from the unit and try
          // to get the unit again
          if (_res && _res[2] && _res[2] !== "") {
            // Make sure that there were no characters after the last digit.
            // If there are, the reassembled string ends at the last digit,
            // dropping off everything after that.  Characters after an
            // exponent (except for subsequent units after a division or
            // multiplication operator) are invalid.
            var reassemble = _res[1] + _res[2];
            if (reassemble === uCode) {
              uCode = _res[1];
              exp = _res[2];
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
          retMsg.push('Unable to find unit for ' + origCode);
          retUnit = null;
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
          var theCode = retUnit.csCode_;
          if (pfxVal) {
            theName = pfxName + theName;
            theCode = pfxCode + theCode;
            retUnit.assignVals({ 'name_': theName,
              'csCode_': theCode });
          }
          if (exp) {
            theName = theName + '<sup>' + exp.toString() + '</sup>';
            theCode = theCode + exp.toString();
            retUnit.assignVals({ 'name_': theName,
              'csCode_': theCode });
          }
        } // end if not endProcessing set from no unit found
      } // end if not endProcessing set from annotation error

      return [retUnit, origString];
    } // end makeUnit

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


},{"./config.js":46,"./prefixTables.js":49,"./unit.js":55,"./unitTables.js":57}],57:[function(require,module,exports){
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
var UcumJsonDefs = require('./ucumJsonDefs.js').UcumJsonDefs;

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
     * @param sep separator character (or string) to be used to separate each
     *  column in the output.  Optional, defaults to '|' if not specified.
     *  (Used to use ; but the synonyms use that extensively).
     * @returns {string} buffer containing all the listings
     */

  }, {
    key: 'printUnits',
    value: function printUnits(doLong, sep) {
      if (doLong === undefined) doLong = false;
      if (sep === undefined) sep = '|';
      var codeList = '';
      var uLen = this.codeOrder_.length;
      var unitString = 'csCode' + sep;
      if (doLong) {
        unitString += 'ciCode' + sep;
      }
      unitString += 'name' + sep;
      if (doLong) unitString += 'isBase' + sep;
      unitString += 'magnitude' + sep + 'dimension' + sep + 'from unit(s)' + sep + 'value' + sep + 'function' + sep;
      if (doLong) unitString += 'property' + sep + 'printSymbol' + sep + 'synonyms' + sep + 'source' + sep + 'class' + sep + 'isMetric' + sep + 'variable' + sep + 'isSpecial' + sep + 'isAbitrary' + sep;
      unitString += 'comment';
      codeList = unitString + '\n';

      for (var u = 0; u < uLen; u++) {
        var curUnit = this.getUnitByCode(this.codeOrder_[u]);
        unitString = this.codeOrder_[u] + sep;
        if (doLong) {
          unitString += curUnit.getProperty('ciCode_') + sep;
        }
        unitString += curUnit.getProperty('name_') + sep;
        if (doLong) {
          if (curUnit.getProperty('isBase_')) unitString += 'true' + sep;else unitString += 'false' + sep;
        }
        unitString += curUnit.getProperty('magnitude_') + sep;
        var curDim = curUnit.getProperty('dim_');
        if (curDim) {
          unitString += curDim.dimVec_ + sep;
        } else {
          unitString += 'null' + sep;
        }
        if (curUnit.csUnitString_) unitString += curUnit.csUnitString_ + sep + curUnit.baseFactor_ + sep;else unitString += 'null' + sep + 'null' + sep;

        if (curUnit.cnv_) unitString += curUnit.cnv_ + sep;else unitString += 'null' + sep;

        if (doLong) {
          unitString += curUnit.getProperty('property_') + sep + curUnit.getProperty('printSymbol_') + sep + curUnit.getProperty('synonyms_') + sep + curUnit.getProperty('source_') + sep + curUnit.getProperty('class_') + sep + curUnit.getProperty('isMetric_') + sep + curUnit.getProperty('variable_') + sep + curUnit.getProperty('isSpecial_') + sep + curUnit.getProperty('isArbitrary_') + sep;
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


},{"./config.js":46,"./ucumJsonDefs.js":52}]},{},[54])(54)
});