module.exports = function (gulp, plugins, paths) {
    return function () {
        gulp.src(paths.templates.files)
              .pipe(plugins.plumber())
              .pipe(plugins.jade())
              .pipe(gulp.dest(paths.templates.dest))
              .pipe(plugins.livereload());
    };
};

