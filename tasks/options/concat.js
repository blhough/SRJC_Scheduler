module.exports = {
	options: {
			sourceMap: true
	},
	dist: {
	src: [
	  'js/libs/*.js',
	  'js/main.js'
	],
	dest: 'js/build/production.js'
	}
}