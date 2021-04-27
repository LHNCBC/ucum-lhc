var serveStatic = require('serve-static');

module.exports = function(grunt) {

  // Load grunt tasks automatically as needed ("jit")
  require('jit-grunt')(grunt, {
    clean: 'grunt-contrib-clean',
    connect: 'grunt-contrib-connect',
    cssmin: 'grunt-contrib-cssmin',
    extract_sourcemap: 'grunt-extract-sourcemap',
    protractor: 'grunt-protractor-runner',
    uglify: 'grunt-contrib-uglify'
  });

  // Time how long tasks take.  Just for fun
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // clean out directories
    clean: {
      demo: {
        files: [{
          cwd: '.',
          src: ['docs/*.js', 'docs/*.css', 'docs/*.js.map']
        }]
      }
    },

    // use browserify to prepare the files for client-side use
    // This is now also used for the npm package.  We need to transpile
    // for server-side use because of the use of ES6 modules.
    browserify: {
      demo: {
        options: {
          browserifyOptions: {
            debug: true,
            standalone: "demoPkg"
          },
          transform: [["babelify", {
            global: true, // transform node_modules (csv-parse)
            "presets": ["@babel/preset-env"]
          }]]
        },
        files: [{dest: "./docs/ucum-demo.js",
                 src: ["./demo/main.js"]}
        ]
      }
    },

    // use css min to minify the css files
    cssmin: {
      default: {
        files: [ {
          src: ['./demo/stylesheets/ucumDemo.css'],
          dest: './docs/ucumDemo.min.css'
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
          'docs': ['docs/ucum-demo.js']
        }
      },
    },

    // use uglify to minify the javascript files
    uglify: {
      options: { sourceMap: true, compress: true },
      demo: {
        options: {
          sourceMapIn: './docs/ucum-demo.js.map'
        },
        files: {
          './docs/ucum-demo.min.js' : ['./docs/ucum-demo.js']
        }
      }
    } ,

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
    ssi: { // see custom task below
      options: {
        configs: [{
          input: './demo/ssi-templates/pages/',
          output: './docs/',
          matcher: 'index.html'
        }, {
          input: './demo/ssi-templates/pages/',
          output: './docs/',
          matcher: 'demo.html'
        }, {
          input: './demo/ssi-templates/pages/',
          output: './docs/',
          matcher: 'UcumEssenceModifications.html'
        }]
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
              serveStatic('./docs')
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
    var configs = this.options().configs;
    for (let c of configs) {
      var files = new ssi( c.input, c.output, c.matcher) ;
      files.compile();
    }
  });

  grunt.registerTask("build:demo", ["clean:demo",
                                    "ssi",
                                    "browserify:demo",
                                    "extract_sourcemap:demo",
                                    "cssmin",
                                    "uglify:demo"]);
  grunt.registerTask("build", ["build:demo"]);
  grunt.registerTask("test", ['build',
                              'runProtractor']);
  // note that the webdriver manager must be running before the
  // protractor tests will run.  use webdriver-manager start & to
  // start the manager and the selenium server
  grunt.registerTask("runProtractor", ['connect', 'protractor']);

};
