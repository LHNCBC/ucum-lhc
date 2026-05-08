const path = require('path');

function babelRule() {
  return {
    test: /\.m?js$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env' ]],
        plugins: ["@babel/plugin-transform-modules-commonjs", "@babel/plugin-proposal-class-properties"]
      }
    }
  };
}

function commonConfig() {
  return {
    module: {
      rules: [babelRule()]
    }
  }
}

var configs = [];

var browserConfig = commonConfig();
browserConfig.entry = path.join(__dirname, './source/ucumPkg.js');
browserConfig.target = 'web';
browserConfig.mode = 'development';
browserConfig.devtool = 'source-map';
browserConfig.output = {
  path: path.join(__dirname, './browser-dist'),
  filename: 'ucum-lhc.js',
  library: {
    name: 'ucumPkg',
    type: 'umd'
  },
  globalObject: 'this'
};
configs.push(browserConfig);

var browserMinConfig = commonConfig();
browserMinConfig.entry = path.join(__dirname, './source/ucumPkg.js');
browserMinConfig.target = 'web';
browserMinConfig.mode = 'production';
browserMinConfig.devtool = 'source-map';
browserMinConfig.output = {
  path: path.join(__dirname, './browser-dist'),
  filename: 'ucum-lhc.min.js',
  library: {
    name: 'ucumPkg',
    type: 'umd'
  },
  globalObject: 'this'
};
configs.push(browserMinConfig);

var progConfig = commonConfig();
progConfig.target = 'node';
progConfig.mode = 'development';
progConfig.entry = path.join(__dirname, './impexp/updateData.js');
progConfig.externals = [
    function ({context, request}, callback) {
      if(/ucumDefs\.json/.test(request)) {
        return callback(null, 'commonjs ' + request);
      }
      callback();
    }
];
progConfig.output = {
  path: __dirname,
  filename: './impexp/updateDataBuild.js',
  library: 'ucum'
};
configs.push(progConfig);

module.exports = configs;
