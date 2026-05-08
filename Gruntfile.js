module.exports = function(grunt) {

  // Load grunt tasks automatically as needed ("jit")
  require('jit-grunt')(grunt, {
    babel: 'grunt-babel',
    clean: 'grunt-contrib-clean',
    cssmin: 'grunt-contrib-cssmin',
    mochaTest: 'grunt-mocha-test',
    protractor: 'grunt-protractor-runner'
  });

  // Time how long tasks take.  Just for fun
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // clean out directories
    clean: {
      browser: {
        files: [{
          cwd: '.',
          src: ['tmp', 'browser-dist/*']
        }]
      } ,
      npm: {
        files: [{
          cwd: '.',
          src: ['source-cjs/*']
        }]
      }
    },

    // This configures the npm build (for which we just need the modules
    // converted to CommonJS modules).
    babel: {
      npm: {
        options: {
          sourceMap: true,
          plugins: ["@babel/plugin-transform-modules-commonjs", "@babel/plugin-proposal-class-properties"],
        },
        files: [{
          cwd: 'source',
          expand: true,
          src: '*.js',
          dest: './source-cjs/'
        }]
      }
    },

    // using mocha for the tests
    mochaTest: {
      options: {
        // require: '@babel/register', // Commenting out automatic transpilation so we can test the CommonJS (npm) build
        reporter: 'spec'
      } ,
      src: ['./test/*.spec.js']
    }


  });  // end grunt.initConfig

  // load and register the tasks
  grunt.loadNpmTasks("grunt-babel");

  grunt.registerTask("webpack", "Run webpack builds", function() {
    const done = this.async();
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config.js');

    webpack(webpackConfig, function(err, stats) {
      if (err) {
        grunt.log.error(err);
        done(false);
        return;
      }

      if (stats.hasErrors()) {
        grunt.log.error(stats.toString({colors: false}));
        done(false);
        return;
      }

      grunt.log.writeln(stats.toString({
        assets: true,
        chunks: false,
        colors: false,
        modules: false
      }));
      done();
    });
  });

  grunt.registerTask("build:npm", ["clean:npm", "babel:npm"]);
  grunt.registerTask("build:browser", ["clean:browser",
                                       "webpack"]);
  grunt.registerTask("build", ["build:browser",
                               "build:npm"]);
  grunt.registerTask("test", ['build',
                              'mochaTest']);
};
