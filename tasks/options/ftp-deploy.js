module.exports = {
  build: {
    auth: {
      host: 'srjcscheduler.com',
      port: 21,
      authKey: 'key1'
    },
    src: 'build/',
    dest: '/v2/',
    //exclusions: ['path/to/source/folder/**/.DS_Store', 'path/to/source/folder/**/Thumbs.db', 'path/to/dist/tmp']
  }
}