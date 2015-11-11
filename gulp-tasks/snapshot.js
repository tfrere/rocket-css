module.exports = function (gulp, plugins, paths) {
	return function () {
		plugins.nodemon({
		    script: paths.server.snapshot_file
		  , ext: ''
		  , ignore: 'dist'
		  , env: { 'NODE_ENV': 'development' }
		});
	};
};
