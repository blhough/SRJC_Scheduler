module.exports = {
	options: {
			sourceMap: true,
			separator: "\n\n\n\n"
	},
	dist: {
	src: [
	  'js/libs/*.js',
	  'js/_schedule.js',
	  'js/_course.js',
	  'js/_class.js',
	  'js/_session.js',
	  'js/_canvas.js',
	  'js/_info.js',
	  'js/_add.js',
	  'js/_button.js',
	  'js/_custom.js',
	  'js/main.js'
	],
	dest: 'js/build/production.js'
	}
}