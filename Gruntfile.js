var serveStatic = require('serve-static');

module.exports = function(grunt) {

  // Load grunt tasks automatically as needed ("jit")
  require('jit-grunt')(grunt, {
    babel: 'grunt-babel',
    clean: 'grunt-contrib-clean',
    connect: 'grunt-contrib-connect',
    cssmin: 'grunt-contrib-cssmin',
    extract_sourcemap: 'grunt-extract-sourcemap',
    mochaTest: 'grunt-mocha-test',
    protractor: 'grunt-protractor-runner',
    uglify: 'grunt-contrib-uglify'
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

    // use browserify to prepare the files for client-side use
    // This is now also used for the npm package.  We need to transpile
    // for server-side use because of the use of ES6 modules.
    browserify: {
      browser: {
        options: {
          browserifyOptions: {
            debug: true,
            standalone: "ucumPkg"
          },
          transform: [["babelify", { "presets": ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-modules-commonjs", "@babel/plugin-proposal-class-properties"] }]]
        },
        debug: true,
        files: [{dest: "./browser-dist/ucum-lhc.js",
                 src: ["./source/ucumPkg.js"]}
        ]
      }
    },

    extract_sourcemap: {
      browser: {
        files: {
          'browser-dist': ['browser-dist/ucum-lhc.js']
        }
      }
    },

    // use uglify to minify the javascript files
    uglify: {
      options: { sourceMap: true, compress: true },
      browser: {
        options: {
          sourceMapIn: './browser-dist/ucum-lhc.js.map'
        },
        files: {
          './browser-dist/ucum-lhc.min.js' : [ './browser-dist/ucum-lhc.js']
        }
      }
    } ,

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
  grunt.loadNpmTasks("grunt-browserify");

  grunt.registerTask("build:npm", ["clean:npm", "babel:npm"]);
  grunt.registerTask("build:browser", ["clean:browser",
                                       "browserify:browser",
                                       "extract_sourcemap:browser",
                                       "uglify:browser"]);
  grunt.registerTask("build", ["build:browser",
                               "build:npm"]);
  grunt.registerTask("test", ['build',
                              'mochaTest']);
};
