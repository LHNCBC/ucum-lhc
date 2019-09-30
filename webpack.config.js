// Currently this is used to build the two programs in the impexp directory
// (which need access to local files, and were difficult (if not impossible) to
// build using browserify).

const webpack = require('webpack');
const path = require('path');

function commonConfig() {
  return  {
    target: 'node',
    mode: 'development',
    output: {
      path: __dirname,
      library: 'ucum'
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          // exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env' ]]
            }
          }
        }
      ]
    }
  }
}

var configs = [];
var progConfig = commonConfig();
progConfig.entry = path.join(__dirname, './impexp/createUnitsFromXmlEssence.js'),
progConfig.output.filename = './impexp/createUnitsFromXmlEssenceBuild.js'
configs.push(progConfig);

progConfig = commonConfig();
progConfig.entry = path.join(__dirname, './impexp/updateData.js'),
progConfig.output.filename = './impexp/updateDataBuild.js'
configs.push(progConfig);

module.exports = configs;
