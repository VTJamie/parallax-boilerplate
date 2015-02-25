module.exports = function(grunt) {

	grunt.config('copy', {
		dist: {
			files: [{
				expand: true,
				dot: true,
				cwd: '<%= yeoman.app %>',
				dest: '<%= yeoman.dist %>',
				src: [
					'**',
                    '!**/*.js',
					'!assets/css/sass/**',
                    '!assets/css/less/**',
                    '!**/.gitignore',
                    '!libs/'
				],
                filter: function(filepath) {
                    return ! grunt.file.isDir(filepath) || require('fs').readdirSync(filepath).length > 0;
                }
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');

};
