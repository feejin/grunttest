module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			files: {
				expand: true,
				flatten: true,
				src: 'js/*.js',
				dest: 'js/',
				ext: '.min.js',
			}
		},
		watch: {
			js: {
				files: 'js/*.src.js',
				tasks: ['uglify']
			}
		}
	});

	// Plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Task(s).
	grunt.registerTask('default', ['uglify']);

};