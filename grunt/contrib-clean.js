module.exports = function(grunt) {

	grunt.config('clean', {
		dist: {
			files: [{
				dot: true,
				src: [
					'<%= yeoman.dist %>/*',
					'!<%= yeoman.dist %>/.git*'
				]
			}]
		},
        disttidy: {
            files: [{
                dot: true,
                src: [
                    '<%= yeoman.dist %>/libs',
                    '<%= yeoman.dist %>/components',
                ]
            }]
        }
	});

	grunt.loadNpmTasks('grunt-contrib-clean');

};
