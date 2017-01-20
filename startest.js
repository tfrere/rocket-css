// Retrieve all users who starred a repository on github with CasperJS
// Configure the repository url below
// Run this bot with: casperjs --ssl-protocol=any 2_github_stargazers.js
// Check our awesome CasperJS cheatsheet: http://bit.ly/phantom-cheatsheet


// 1. Variables Initialization


var casper, repo, repoStargazers, stargazers;

var casper = require('casper').create({   
	    verbose: true, 
		    logLevel: 'debug',
			    pageSettings: {
         loadImages:  false,         // The WebPage instance used by Casper will
          loadPlugins: false,         // use these settings
           userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
}
});
github = 'http://github.com';
repo = github + '/WordPress/WordPress';
repoStargazers = repo + '/stargazers';
stargazers = [];

// 2. Retrieve All Stargazers (Only for First Page)


casper.start(repoStargazers);

casper.then(function() {
		stargazers = this.evaluate(function() {
			return [].map.call(document.querySelectorAll('.follow-list-name a'), function(link) {
				console.log(link.getAttribute('href'));
				return link.getAttribute('href');
				});
			});
		});


// 3. Retrieve Information about Each Stargazer


casper.then(function() {
		this.eachThen(stargazers, function(r) {
			this.thenOpen((github + r.data), function() {
				var email, website;

				email = this.evaluate(function() {
					return document.querySelector('a.email').innerText;
					});

				website = this.evaluate(function() {
					return document.querySelector('a.url').innerText;
					});

				this.wait(2 * 1000);

				message = 'This user (' + this.getCurrentUrl() + ') can be contacted by ';

				if (email !== null) message += 'email: ' + email + ' ; ';
				if (website !== null) message += 'website: ' + website + ' ; ';
				if (email !== null || website !== null ) console.log(message);
				});
			});
});


// 4. Run Casper

casper.run();

