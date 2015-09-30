module.exports = function (gulp, plugins, paths) {
    return function () {

    gulp.src(paths.scripts.files)
      .pipe(plugins.plumber())
      .pipe(plugins.concat(paths.scripts.name))
      .pipe(plugins.jsmin())
      .pipe(gulp.dest(paths.scripts.dest))
      .pipe(plugins.livereload());

    };
};

