// Retrieve all users who starred a repository on github with CasperJS
// Configure the repository url below
// Run this bot with: casperjs --ssl-protocol=any 2_github_stargazers.js
// Check our awesome CasperJS cheatsheet: http://bit.ly/phantom-cheatsheet


// 1. Variables Initialization


var casper, repo, repoStargazers, stargazers;

var data = {
	nationality: "fr",
};

var casper = require('casper').create({
	verbose: true,
	logLevel: 'debug',
	pageSettings: {
		loadImages:  false,         // The WebPage instance used by Casper will
		loadPlugins: false,         // use these settings
		userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
	}
});

dest = 'https://wwwd.caf.fr/wps/portal/caffr/aidesetservices/lesservicesenligne/estimervosdroits/lelogement';

casper.start(dest);

casper.then(function() {
		console.log(document.querySelectorAll('div.radio input'));
});

casper.run();
