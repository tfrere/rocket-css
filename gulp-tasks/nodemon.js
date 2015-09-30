module.exports = function (gulp, plugins, paths) {
	return function () {
		plugins.livereload.listen();

		plugins.nodemon({
		    script: paths.server.file
		  , ext: ''
		  , ignore: 'dist'
		  , env: { 'NODE_ENV': 'development' }
		})
		.on('restart', function(){
			// when the app has restarted, run livereload.
			setTimeout(function() {
				gulp.src(paths.server.file).pipe(plugins.livereload());
			}, 2000);
		});
		setTimeout(function() {
			gulp.src('').pipe(plugins.open({uri: paths.server.url + ':' + paths.server.port}));
		}, 2000);
	};
};
