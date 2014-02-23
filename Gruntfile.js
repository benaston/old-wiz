module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {

      dist: {
        options: {
          separator: ';'
        },
        src: [
          'public/javascripts/vendor/zepto.min.js',
          'public/javascripts/vendor/zepto-callbacks.js',
          'public/javascripts/vendor/zepto-deferred.js',
//          'public/javascripts/vendor/underscore.min.js',
          'public/javascripts/vendor/_cookie.js',
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
        dest: 'public/javascripts/<%= pkg.name %>.temp.js'
      },
      css: {
        src: [
          'public/stylesheets/style-reset.css',
          'public/stylesheets/style-reset-wizerati.css',
          'public/stylesheets/style-typography.css',
          'public/stylesheets/style-layout.css',
          'public/stylesheets/style-form-element.css',
          'public/stylesheets/style-table.css',
          'public/stylesheets/style-special.css',
          'public/stylesheets/style-cube.css',
          'public/stylesheets/style-wizerati.css',
          'public/stylesheets/lucid-style-buttons.css',
          'public/stylesheets/lucid-style-form-elements.css',
          'public/stylesheets/lucid-style-dialogs.css'
        ],
        dest: 'public/stylesheets/<%= pkg.name %>.css'
      },
      addunderscore: {
        options: {
          separator: ';'
        },
        src: [
          'public/javascripts/<%= pkg.name %>.min.temp.js',
          'public/javascripts/vendor/underscore.min.js'
        ],
        dest: 'public/javascripts/<%= pkg.name %>.ben.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
        preserveComments: false
      },
      dist: {
        files: {
          'public/javascripts/<%= pkg.name %>.min.temp.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    cssmin: {
      css: {
        src: 'public/stylesheets/<%= pkg.name %>.css',
        dest: 'public/stylesheets/<%= pkg.name %>.min.css'
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
  grunt.loadNpmTasks('grunt-css');

  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['concat:dist','concat:css', 'uglify', 'concat:addunderscore', 'cssmin']);

};
