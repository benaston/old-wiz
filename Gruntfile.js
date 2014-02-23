module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['public/javascripts/vendor/_cookie.js',
              'public/javascripts/vendor/invertebrate.js/invertebrate.js',
              'public/javascripts/vendor/invertebrate.js/**.js',
              'public/javascripts/application/wizerati.js',
              'public/javascripts/application/wizerati.core/services/**/*.js',
              'public/javascripts/application/wizerati.core/clients/**/*.js', 
              'public/javascripts/application/wizerati.core/Config.js', 
              'public/javascripts/application/wizerati.core/models/**/*.js', 
              'public/javascripts/application/wizerati.core/views/**/*.js', 
              'public/javascripts/application/wizerati.core/controllers/**/*.js', 
              'public/javascripts/application/wizerati.core/factories/**/*.js', 
              'public/javascripts/application/wizerati.core/caches/**/*.js', 
              'public/javascripts/application/wizerati.core/entities/**/*.js', 
              'public/javascripts/application/wizerati.core/repositories/**/*.js', 
              'public/javascripts/application/modules.js',
              'public/javascripts/application/wizerati.core/RouteRegistrar.js',
              'public/javascripts/application/wizerati.core/App.js',
              'public/javascripts/application/appStart.js'
              ],
        dest: 'public/javascripts/<%= pkg.name %>.js'
      },
      css: {
        src: [
          'public/stylesheets/**/lucid-*.css',
          'public/stylesheets/**/style-*.css'
        ],
        dest: 'public/stylesheets/<%= pkg.name %>.css'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'public/javascripts/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};
