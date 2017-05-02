
module.exports = function (gulp, plugins, paths) {
  return function () {
    gulp.src(paths.plugins.files)
      .pipe(plugins.plumber())
      .pipe(plugins.concat(paths.plugins.name))
      .pipe(plugins.babel({
          presets: ['es2015']
      }))
      .pipe(plugins.jsmin())
      .pipe(gulp.dest(paths.plugins.dest))
      .pipe(plugins.livereload());

  };
};
