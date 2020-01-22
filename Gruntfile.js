var serveStatic = require('serve-static');

module.exports = function(grunt) {

  // Load grunt tasks automatically as needed ("jit")
  require('jit-grunt')(grunt, {
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
      demo: {
        files: [{
          cwd: '.',
          src: ['demo-dist/*.js', 'demo-dist/*.css', 'demo-dist/*.js.map']
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
          transform: [["babelify", { "presets": ["@babel/preset-env"] }]]
        },
        debug: true,
        files: [{dest: "./browser-dist/ucum-lhc.js",
                 src: ["./source/ucumPkg.js"]}
        ]
      },
      demo: {
        options: {
          browserifyOptions: {
            debug: true,
            standalone: "demoPkg"
          },
          exclude: ['./browser-dist/*.js'],
          transform: [["babelify", {
            global: true, // transform node_modules (csv-parse)
            "presets": ["@babel/preset-env"]
          }]]
        },
        files: [{dest: "./demo-dist/ucum-demo.js",
                 src: ["./demo/main.js"]}
        ]
      }
    },

    // use css min to minify the css files
    cssmin: {
      default: {
        files: [ {
          src: ['./demo-dist/stylesheets/ucumDemo.css'],
          dest: './demo-dist/ucumDemo.min.css'
        }]
      }
    } ,

    extract_sourcemap: {
      browser: {
        files: {
          'browser-dist': ['browser-dist/ucum-lhc.js']
        }
      },
      demo: {
        files: {
          'demo-dist': ['demo-dist/ucum-demo.js']
        }
      },
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
      },
      demo: {
        options: {
          sourceMapIn: './demo-dist/ucum-demo.js.map'
        },
        files: {
          './demo-dist/ucum-demo.min.js' : ['./demo-dist/ucum-demo.js']
        }
      }
    } ,

    // using mocha for the tests
    mochaTest: {
      options: {
        require: '@babel/register',
        reporter: 'spec'
      } ,
      src: ['./test/*.spec.js']
    },


    // watch application files to see if they need to be re-browserified,
    // and bower components to see if they change
    watch: {
      scripts: {
        files: ["./source/*.js", "./demo/*.js"],
        tasks: ["browserify"]
      },
      files: ['bower_components/*'],
      tasks: ['wiredep']
    } ,

    // ssi to include html files in demo.html
    ssi: {
      options: {
        input: './demo/',
        output: './',
        matcher: 'demo*.html'
      }
    },

    // Server for protractor tests
    connect: {
      options: {
        hostname: '0.0.0.0'
      },
      test: {
        options: {
          port: require('./demo-test/ucumDemo-conf').config.port,
          middleware: function (connect) {
            return [
              serveStatic('.')
            ];
          }
        }
      }
    },


    // grunt protractor runner task
    protractor: {
      options: {
        configFile: "demo-test/ucumDemo-conf.js",
        keepAlive: false,
        noColor: false,
        args: {}
      } ,
      all: {
        options: {
          browser: 'firefox'
        }
      }
    }  // end protractor task

   });  // end grunt.initConfig

  // load and register the tasks
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('ssi', 'Flatten SSI includes in your HTML files.', function() {

    var ssi = require( 'ssi' );
    var opts = this.options();
    var files = new ssi( opts.input, opts.output, opts.matcher) ;
    files.compile();

  });

  grunt.registerTask("build:demo", ["clean:demo",
                                    "ssi",
                                    "browserify:demo",
                                    "extract_sourcemap:demo",
                                    "cssmin",
                                    "uglify:demo"]);
  grunt.registerTask("build", ["build:demo"]);
  grunt.registerTask("test", ['build',
                              'mochaTest',
                              'runProtractor']);
  // note that the webdriver manager must be running before the
  // protractor tests will run.  use webdriver-manager start & to
  // start the manager and the selenium server
  grunt.registerTask("runProtractor", ['connect', 'protractor']);

};
