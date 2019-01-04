module.exports = function(grunt) {

  // Load grunt tasks automatically as needed ("jit")
  require('jit-grunt')(grunt, {
    clean: 'grunt-contrib-clean',
    cssmin: 'grunt-contrib-cssmin',
    uglify: 'grunt-contrib-uglify',
    mochaTest: 'grunt-mocha-test',
    protractor: 'grunt-protractor-runner'
  });

  // Time how long tasks take.  Just for fun
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // clean out directories
    clean: {
      dist: {   // the non-browser distribution files
        files: [{
          cwd: '.',
          src: ['source-es5/*']
        }]
      } ,
      browser: {
        files: [{
          cwd: '.',
          src: ['source-es5/*', 'browser-dist/*']
        }]
      } ,
      demo: {
        files: [{
          cwd: '.',
          src: ['demo-es5/*']
        }]
      } ,
      test: {
        files: [{
          cwd: '.',
          src: ['test-es5/*']
        }]
      }
    },

    // use babel to translate ES6 files to ES5 files
    babel: {
      options: {
        compact: false,
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {   // the non-browser distribution files
        files: [{
          expand: true,
          cwd: '.',
          flatten: true,
          src: ['./source/*.js'],
          dest: './source-es5'
        }]
      },
      browser: {
        files: [{
          expand: true,
          cwd: '.',
          flatten: true,
          src: ['./source/*.js'],
          dest: './source-es5'
        }]
      },
      demo: {
        files: [{
          expand: true,
          cwd: '.',
          flatten: true,
          src: ['./demo/*.js'],
          dest: './demo-es5'
        }]
      },
      test: {
        files: [{
          expand: true,
          cwd: '.',
          flatten: true,
          src: ['./test/*.js'],
          dest: './test-es5'
        }]
      }
    },

    // use browserify to prepare the files for client-side use
    browserify: {
      browser: {
        options: {
          browserifyOptions: {
            standalone: "ucumPkg"
          }
        },
        files: [{dest: "./browser-dist/ucum-lhc.js",
                 src: ["./source-es5/ucumPkg.js"]}
        ]
      },
      demo: {
        options: {
          browserifyOptions: {
            standalone: "demoPkg"
          },
          exclude: ['./source-es5/*.js']
        },
        files: [{dest: "./demo-dist/ucum-demo.js",
                 src: ["./demo-es5/main.js"]}
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

    // use uglify to minify the javascript files
    uglify: {
      options: { compress: true },
      browser: {
        files: {
          './browser-dist/ucum-lhc.min.js' : [ './browser-dist/ucum-lhc.js']
        }
      },
      demo: {
        files: {
          './demo-dist/ucum-demo.min.js' : ['./demo-dist/ucum-demo.js']
        }
      }
    } ,

    // using mocha for the tests
    mochaTest: {
      options: {
        reporter: 'spec'
      } ,
      src: ['./test-es5/*.spec.js']
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
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-mocha-test') ;
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.registerTask('ssi', 'Flatten SSI includes in your HTML files.', function() {

    var ssi = require( 'ssi' );
    var opts = this.options();
    var files = new ssi( opts.input, opts.output, opts.matcher) ;
    files.compile();

  });

  grunt.registerTask("build:dist", ["clean:dist",
                                    "babel:dist"]);
  grunt.registerTask("build:browser", ["clean:browser",
                                       "babel:browser",
                                       "browserify:browser",
                                       "uglify:browser"]);
  grunt.registerTask("build:demo", ["clean:demo",
                                    "ssi",
                                    "babel:demo",
                                    "browserify:demo",
                                    "cssmin",
                                    "uglify:demo"]);
  grunt.registerTask("build:test", ["clean:test",
                                    "babel:test"]);
  grunt.registerTask("build", ["build:dist",
                               "build:browser",
                               "build:demo",
                               "build:test"]);
  grunt.registerTask("test", ['build',
                              'mochaTest']);
  // note that the webdriver manager must be running before the
  // protractor tests will run.  use webdriver-manager start & to
  // start the manager and the selenium server
  grunt.registerTask("runProtractor", ['protractor']);

};
