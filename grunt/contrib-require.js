module.exports = function(grunt) {

	grunt.config('requirejs', {
		compile: {
			options: {
				// baseUrl: '<%= yeoman.app %>',
				mainConfigFile: '<%= yeoman.app %>/components/config.js',
				paths: {
                	requireLib: '../libs/requirejs/require',
                    templates: '../../dist/components/templates'
               	},
                include: ['requireLib'],
				optimize: 'uglify2',
				uglify2: {
					mangle: false
				},
				name: 'config',
				removeCombined: true,
				preserveLicenseComments: false,
				wrapShim: true,
				out: '<%= yeoman.dist %>/main.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');

};
