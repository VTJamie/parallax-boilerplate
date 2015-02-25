module.exports = function(grunt) {

	grunt.config('ngtemplates', {
        App:        {
            cwd:      '<%= yeoman.dist %>',
            src:      ['components/**/**.html'],
            dest:     'dist/components/templates.js',
            options: {
                htmlmin: {
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true
                },
                bootstrap:  function(module, script) {
                    return 'define(["app"], function(app) {app.run(["$templateCache", function($templateCache) {' + script + '}]);});';
                }
            }
        }
	});

	grunt.loadNpmTasks('grunt-angular-templates');

};
