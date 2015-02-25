module.exports = function(grunt) {

	grunt.config('connect', {
		options   : {
			port      : 9000,
			// Change this to '0.0.0.0' to access the server from outside.
			hostname  : '0.0.0.0',
			livereload: 35729
		},
		livereload: {
			options: {
				open: true,
				base: [
					'<%= yeoman.app %>'
				]
			}
		},

		dist      : {
			options: {
                open: true,
				base: '<%= yeoman.dist %>'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');

};