module.exports = function(grunt) {
  const sass = require('node-sass');
  const webpackConfig = require('./webpack.config');

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      options: {
        implementation: sass
      },
      dist: {
        files: {
          'dist/css/style.css': 'src/sass/style.scss'
        }
      }
    },

    postcss: {
      options: {
        processors: [require('autoprefixer')]
      },
      dist: {
        src: 'dist/css/style.css'
      }
    },

    csso: {
      minify: {
        files: {
          'dist/css/style.min.css': ['dist/css/style.css']
        }
      }
    },

    clean: {
      dist: {
        src: ['dist/']
      }
    },

    copy: {
      main: {
        expand: true,
        cwd: 'src/',
        src: ['assets/**'],
        dest: 'dist/'
      }
    },

    watch: {
      files: 'src/sass/**/*.scss',
      tasks: ['sass', 'postcss']
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: ['*.html', 'dist/css/*.css', 'dist/js/*.js']
        },
        options: {
          watchTask: true,
          server: './'
        }
      }
    },

    webpack: {
      options: {
        stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      },
      prod: webpackConfig,
      dev: Object.assign(
        {
          watch: true,
          mode: 'development'
        },
        webpackConfig
      )
    }
  });

  grunt.registerTask('build', ['clean', 'copy', 'sass', 'postcss', 'csso']);
  grunt.registerTask('serve', ['browserSync', 'watch']);
};
