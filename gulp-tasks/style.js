module.exports = function (gulp, plugins, paths) {
    return function () {
       gulp.src(paths.styles.files)
      .pipe(plugins.sass())
      //.pipe(plugins.minifyCss())
      .pipe(gulp.dest(paths.styles.dest))
      .pipe(plugins.connect.reload());
    };
};
