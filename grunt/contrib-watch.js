module.exports = function(grunt) {

	grunt.config('watch', {
		compass: {
			files: ['<%= yeoman.app %>/assets/css/**/*.scss'],
			tasks: ['compass'],
			options: {
				livereload: true
			}
		},
		gruntfile: {
			files: ['Gruntfile.js']
		},
		livereload: {
			options: {
				livereload: '<%= connect.options.livereload %>'
			},
			files: [
				'<%= yeoman.app %>/**/*.html',
                '<%= yeoman.app %>/**/*.js',
				'<%= yeoman.app %>/assets/css/**/*.css',
				'<%= yeoman.app %>/assets/images/*.{png,jpg,jpeg,gif,webp,svg}'
			]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');

};
