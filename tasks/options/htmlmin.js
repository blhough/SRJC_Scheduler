module.exports = {                                    // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'build/index.html': 'index.html',     // 'destination': 'source'
      }
    },
}