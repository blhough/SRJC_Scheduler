module.exports = {
  build: {
    auth: {
      host: 'srjcscheduler.com',
      port: 21,
      authKey: 'key1'
    },
    src: 'build/',
    dest: '/v2/',
    exclusions: ['build/js/main.js.map', 'build/js/.min.js']
  }
}