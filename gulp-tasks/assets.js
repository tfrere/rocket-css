var pngquant           = require('imagemin-pngquant');

module.exports = function (gulp, plugins, paths) {
    return function () {
		gulp.src(paths.fonts.files)
		.pipe(gulp.dest(paths.fonts.dest));

		gulp.src(paths.assets.files)
		.pipe(gulp.dest(paths.assets.dest))
		.pipe(plugins.livereload());

		// return gulp.src(paths.assets.files)
		// .pipe(plugins.plumber())
		// .pipe(plugins.imagemin({
		//   progressive: true,
		//   svgoPlugins: [{removeViewBox: false}],
		//   use: [pngquant()]
		// }))
		// .pipe(gulp.dest(paths.assets.dest))
		// .pipe(plugins.livereload());
    };
};