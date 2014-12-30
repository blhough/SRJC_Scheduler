module.exports = {
	options : {
		sourceMap : true,
		sourceMapIncludeSources : true,
		sourceMapIn : 'js/build/production.js.map'
	},
	build: {
		src: 'js/build/production.js',
		dest: 'build/js/main.js'
	}
}