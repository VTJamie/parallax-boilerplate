module.exports = function(grunt) {

	grunt.config('bower-linker', {

		dev: {
			options: {
				cwd   : '.',
				root  : 'app/libs',
				copy  : true,
				vendor: true,
				map   : {
					'*': '/'
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-bower-linker');

};