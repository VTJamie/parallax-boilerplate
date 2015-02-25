module.exports = function(grunt) {

	grunt.config('compass', {
		options: {
			sassDir: '<%= yeoman.app %>/assets/css/sass',
			cssDir: '<%= yeoman.app %>/assets/css',
			imagesDir: '<%= yeoman.app %>/assets/images',
			javascriptsDir: '<%= yeoman.app %>/libs',
			importPath: ['<%= yeoman.app %>/assets/css/sass'],
			relativeAssets: false,
			assetCacheBuster: false,
			raw: 'Sass::Script::Number.precision = 10\n',
            outputStyle: 'compressed',
            force: true
		},
		server: {
			options: {
				debugInfo: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');

};
