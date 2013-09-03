module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// jshint javascript
		jshint: {
			all: ['js/src/*.js']
		},

		// concatenate and uglify javascript
		uglify: {
			dist: {
				files: {
					'js/app.min.js': ['js/src/test.js', 'js/src/app.js']
				}
			}
		},

		// compile scss into css
		sass: {
			dist: {
				options: {
					style: 'compact'
				},
				files: {
					'css/style.css': 'scss/style.scss'
				}
			}
		},

		// watch tasks for uglify and scss
		watch: {
			js: {
				files: 'js/src/*.js',
				tasks: ['jshint', 'uglify']
			},
			sass: {
				files: 'scss/*.scss',
				tasks: ['sass']
			}
		}
	});

	// Plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Task(s).
	grunt.registerTask('default', ['jshint', 'uglify', 'sass']);

};