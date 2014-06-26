module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
			files: ['templates/*.hbs', 'jquery.survey.bootstrap.js'],
			tasks: ['htmlConvert', 'uglify']
		},
		htmlConvert: {
			options: {
				rename: function (moduleName) {
					return moduleName.replace(/^(?:.*|)\/([^\/]*)\.hbs$/, '$1');
				}
			},
			surveyTemplates: {
				src: ['templates/*.hbs'],
				dest: 'jquery.survey.bootstrap.templates.js'
			}
		},
		uglify: {
			dist: {
				files: {
					'dist/jquery.survey.bootstrap.min.js': [ 'jquery.survey.bootstrap.templates.js', 'jquery.survey.bootstrap.js' ]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-html-convert');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['htmlConvert', 'uglify']);

};