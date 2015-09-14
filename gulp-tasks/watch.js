 module.exports = function (gulp, plugins, paths) {
  return function () {
    plugins.livereload({ start: true });
    plugins.livereload.listen();
    gulp.watch([paths.styles.watch], ['style']);
    gulp.watch([paths.templates.watch], ['jade']);
    gulp.watch([paths.assets.watch, paths.fonts.watch], ['assets']);
    gulp.watch([paths.vendor.watch], ['vendor']);
    gulp.watch(paths.scripts.watch, ['scripts']);
  };
};