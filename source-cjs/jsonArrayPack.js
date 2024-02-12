"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.packArray = packArray;
exports.unpackArray = unpackArray;
/**
 * This file provides functions to reduce the size of an array of objects of the same structure in JSON.
 */
const pushFn = Array.prototype.push;
function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * Makes human readable config used to pack/unpack array of objects of the same structure to store with packed data.
 * @param {Object} refObj - reference item of array of objects of the same structure
 * @returns {Array}
 */
function createConfig(refObj) {
  return Object.keys(refObj).reduce((config, key) => {
    if (isObject(refObj[key])) {
      pushFn.apply(config, createConfig(refObj[key]).map(keyTail => [key, ...[].concat(keyTail)]));
    } else {
      config.push(key);
    }
    return config;
  }, []);
}

/**
 * Prepares config created with createConfig function to use in packItem/unpackItem functions.
 * @param {Array} config
 * @returns {Array}
 */
function prepareConfig(config) {
  return config.map(key => Array.isArray(key) ? key : [key]);
}

/**
 * Converts an object to an array of values in the order of keys from configuration array.
 * @param {Array} config - configuration array
 * @param {Object} item - input object
 * @returns {Array}
 */
function packItem(config, item) {
  if (config.join() !== prepareConfig(createConfig(item)).join()) {
    throw new Error('Object of unusual structure');
  }
  return config.map(keyArr => {
    let place = item;
    keyArr.forEach(key => {
      place = place[key];
      if (place === undefined) {
        throw new Error('Object of unusual structure');
      }
    });
    return place;
  });
}

/**
 * Performs the reverse of packItem function.
 * @param {Array} config - configuration array
 * @param {Array} item - input object
 * @returns {Object}
 */
function unpackItem(config, item) {
  let result = {};
  config.forEach((keyArr, i) => {
    let place = result;
    for (let i = 0; i < keyArr.length - 1; i++) {
      place = place[keyArr[i]] = place[keyArr[i]] || {};
    }
    place[keyArr[keyArr.length - 1]] = item[i];
  });
  return result;
}

/**
 * Reduces size of an array of objects of the same structure before serialize it to JSON
 * @param {Array} arr
 * @returns {Object}
 */
function packArray(arr) {
  if (arr && arr.length) {
    const config = createConfig(arr[0]),
      _config = prepareConfig(config);
    if (config.length) {
      return {
        config: config,
        data: arr.map(packItem.bind(null, _config))
      };
    }
  }
  return {
    config: [],
    data: arr
  };
}

/**
 * Restores an array of objects of the same structure after deserializing this object from JSON
 * @param {Object} obj
 * @returns {Array}
 */
function unpackArray(obj) {
  const config = obj && obj.config;
  if (config) {
    if (config.length && obj.data) {
      const _config = prepareConfig(config);
      return obj.data.map(unpackItem.bind(null, _config));
    } else {
      return obj.data;
    }
  }
  return obj;
}
//# sourceMappingURL=jsonArrayPack.js.map
