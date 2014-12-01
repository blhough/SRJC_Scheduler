module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'js/main.js',
        dest: 'js/build/main.min.js'
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'css/styles.css': 'css/sass/styles.scss'       // 'destination': 'source'
        }
      }
    },
    watch: {

     // js: {
      //  files: ['lib/*.js', 'css/**/*.scss', '!lib/dontwatch.js'],
     //   tasks: ['default'],
     // },
      css: {
        files: 'css/sass/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('watch', ['watch']);

};