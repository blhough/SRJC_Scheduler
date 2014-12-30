module.exports = {
  options: {
    livereload: true,
    debounceDelay: 2000,
  },
  scripts: {
    files: ['js/*.js'],
    tasks: ['jshint', 'concat', 'uglify'],
    options: {
      spawn: false,
    }
  },
  css: {
    files: ['css/build/styles.css'],
    tasks: [/*'sass', */'autoprefixer', 'cssmin'],
    options: {
      spawn: false,
    }
  },
  images: {
    files: ['img/**/*.{png,jpg,gif}', 'img/*.{png,jpg,gif}'],
    tasks: ['imagemin'],
    options: {
      spawn: false,
    }
  },
  html:{
    files: ['index.html'],
    tasks: ['htmlmin'],
    options: {
      spawn: false
    }
  }
}