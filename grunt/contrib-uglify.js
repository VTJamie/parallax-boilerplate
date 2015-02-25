module.exports = function(grunt) {

	grunt.config('uglify', {
        dist: {
            files: [{
                expand: true,
                cwd: 'dist',
                src: ['**/*.js'],
                dest: 'dist'
            }]
        }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

};
