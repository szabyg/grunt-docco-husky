module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    jslint: {
      files: ['grunt.js', 'tasks/**/*.js', 'test/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    clean: {
      app: {
        src: ["docs"]
      }
    },
    docco_husky: {
      app: {
        src: ['*js', 'tasks/**/*js', 'test/**/*js'],
        dest: 'docs'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      },
      globals: {}
    }
  });

  // Load NPM tasks
  grunt.loadNpmTasks('grunt-jslint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Load local tasks.
  grunt.loadTasks('tasks');

  // Default task.
  grunt.registerTask('default', ['jslint', 'docco_husky']);

};
