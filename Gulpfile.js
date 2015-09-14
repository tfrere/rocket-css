'use strict';

  var gulp          = require('gulp');
  var watch         = require('gulp-watch');
  var plugins       = require('gulp-load-plugins')();

  var paths = {

      clean: {
        files: './public'
      },
      serve : {
        port: '8000',
        root: './public'
      },
      fonts: {
        files: './src/assets/fonts/**/*',
        dest: './public/assets/fonts/',
        watch: ['./src/assets/fonts/**/*']
      },
      vendor: {
        name: 'vendor.min.js',
        dest: './public/vendor/',
        watch: './bower_components/*'
      },
      templates: {
          files: './src/**/*.jade',
          dest: './public/',
          watch: './src/**/*.jade'
      },
      styles: {
          files:  './src/styles/*.scss',
          dest: './public/styles/',
          watch: './src/styles/**/*.scss'
      },
      scripts: {
          files: ['./src/scripts/directives/*.js', './src/scripts/*.js'],
          dest: './public/scripts/',
          name: 'app.min.js',
          watch: './src/scripts/**/*.js'
      },
      assets : {
        files: ['./src/assets/imgs/**/*{png,svg}'],
        dest: './public/assets/imgs/',
        watch: './src/assets/imgs/**/*',
        clean: './public/assets/imgs/**/*'
      }
  }
  
  function getTask(task) {
      return require('./gulp-tasks/' + task)(gulp, plugins, paths);
  }

  gulp.task('clean', getTask('clean'));
  gulp.task('serve', getTask('serve'));
  gulp.task('style', getTask('style'));
  gulp.task('assets', getTask('assets'));
  gulp.task('jade', getTask('jade'));
  gulp.task('scripts', getTask('scripts'));
  gulp.task('vendor', getTask('vendor'));
  gulp.task('watch', getTask('watch'));
  gulp.task('test', getTask('test'));

  gulp.task('build-prod', function(cb) {
    plugins.runSequence('clean', 'style', 'jade', 'assets', 'vendor', 'scripts');
  });

  gulp.task('default', ['watch', 'serve']);
  gulp.task('production', ['build-prod']);