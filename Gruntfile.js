'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  //  Define the configuration for all the tasks
  grunt.initConfig({

		pkg: require('./package.json'),

    // Project settings
    yeoman: {
      // configurable paths
      app: require('./bower.json').appPath || 'app',
      dist: 'dist'
    }
  });



	// load per-task config from separate files found in grunt directory
	grunt.loadTasks('grunt');

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'configureProxies', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'compass',
      'configureProxies',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('build', [
      'clean:dist',
      'compass',
      'copy:dist',
      'targethtml',
      'useminPrepare',
      'concat:generated',
      'cssmin:generated',
      'usemin',
      'htmlmin',
      'ngtemplates',
      'requirejs',
      'clean:disttidy'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
