module.exports = function(grunt) {
  grunt.initConfig({
    babel: {
      options: {
        compact: false,
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.',
          flatten: false,
          src: ['./source/*.js', './demo/*.js'],
          dest: 'dist/es5'
        }]
      }
    },
    browserify: {
      dist: {
        options: {
          //transform: [
          //  ["babelify", {
          //    comments: "true"
          //  }]
          //],
          browserifyOptions: {
            standalone: "ucumPkg"
          }
        },
        files: {
          "./dist/module.js": ["./dist/es5/demo/main.js"],
          "./demo/module.js": ["./dist/es5/demo/main.js"]
        }
      }
    },
    watch: {
      scripts: {
        files: ["./source/*.js", "./demo/*.js"],
        tasks: ["browserify"]
      }
    }
  });
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ['babel']);
  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("build", ["babel", "browserify"]);

};