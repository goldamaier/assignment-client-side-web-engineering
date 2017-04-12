'use strict'

const fs = require('fs')
const serveStatic = require('serve-static')

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt)
  require('time-grunt')(grunt)

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      watch: {
        files: {
          './dist/app.js': ['./src/app.js']
        },
        options: {
          transform: ['babelify']
        }
      },
      dist: {
        files: {
          './dist/app.js': ['./src/app.js']
        },
        options: {
          transform: ['babelify']
        }
      }
    },

    clean: {
      dist: ['./dist']
    },

    connect: {
      server: {
        options: {
          base: './dist',
          hostname: '0.0.0.0',
          livereload: true,
          open: true,
          port: 3300,
          middleware: (connect, options) => {
            const middlewares = []

            if (!Array.isArray(options.base)) {
              options.base = [options.base]
            }

            options.base.forEach(function(base) {
              middlewares.push(serveStatic(base))
            })

            // default: index.html
            middlewares.push((req, res) => {
              fs
                .createReadStream(`${options.base}/index.html`)
                .pipe(res)
            })
            return middlewares
          }
        }
      }
    },

    copy: {
      dist: {
        files: [
          // html
          {
            expand: true,
            cwd: 'src',
            src: '*.html',
            dest: './dist/'
          }
        ]

      }
    },

    watch: {
      static: {
        files: ['./src/**/*.css', './src/*.html'],
        tasks: ['copy'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['./src/**/*.js'],
        tasks: ['browserify:watch'],
        options: {
          livereload: true
        }
      }
    }
  })

  grunt.registerTask('default', ['clean', 'copy', 'browserify:dist'])
  grunt.registerTask('start', ['default', 'connect', 'watch'])

}
