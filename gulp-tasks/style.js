module.exports = function (gulp, plugins, paths) {
    return function () {
       gulp.src(paths.styles.files)
      .pipe(plugins.plumber())
      .pipe(plugins.sass())
      //.pipe(plugins.minifyCss())
      .pipe(gulp.dest(paths.styles.dest))
      .pipe(plugins.livereload());
    };
};
