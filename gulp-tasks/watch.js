module.exports = function (gulp, plugins, paths) {
  return function () {
    gulp.watch([paths.styles.watch], ['style']);
    gulp.watch([paths.templates.watch], ['jade']);
    gulp.watch([paths.assets.watch, paths.fonts.watch], ['assets']);
    gulp.watch([paths.vendor.watch], ['vendor']);
    gulp.watch(paths.scripts.watch, ['scripts']);
    gulp.watch(paths.ressources.watch, ['ressources']);
  };
};