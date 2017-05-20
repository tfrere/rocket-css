module.exports = function (gulp, plugins, paths) {
    return function () {
        gulp.src(paths.ghpages.url)
              .pipe(plugins.ghPages());
    };
};
