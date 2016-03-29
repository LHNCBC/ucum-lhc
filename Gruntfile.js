module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      dist: {
        options: {
          transform: [
            ["babelify", {
              comments: "true"
            }]
          ],
          browserifyOptions: {
            standalone: "ucumPkg"
          }
        },
        files: {
          "./dist/module.js": ["./source/main.js"]
        }
      }
    },
    watch: {
      scripts: {
        files: ["./source/*.js"],
        tasks: ["browserify"]
      }
    }
  });
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("build", ["browserify"]);

};