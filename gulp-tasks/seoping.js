module.exports = function (gulp, plugins, paths) {
    return function () {
	    gulp.src(paths.ressources.files)
		 plugins.request('http://www.google.com/webmasters/tools/ping?sitemap=http://peon.fr/sitemap.xml');
		 plugins.request('http://www.bing.com/webmaster/ping.aspx?siteMap=http://peon.fr/sitemap.xml');
    };
};

