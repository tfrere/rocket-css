/*==============================================================================*/
/* Casper generated Sat Jan 21 2017 16:13:31 GMT+0100 (CET) */
/*==============================================================================*/

var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 1412, height: 697};
casper.on('page.error', function(msg, trace) {
   this.echo('Error: ' + msg, 'ERROR');
   for(var i=0; i<trace.length; i++) {
       var step = trace[i];
       this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
   }
});
casper.test.begin('Resurrectio test', function(test) {
   casper.start('https://mes-aides.gouv.fr/foyer/demandeur');
   casper.waitForSelector("form[name=form] input[name='dateDeNaissance']",
       function success() {
           test.assertExists("form[name=form] input[name='dateDeNaissance']");
           this.click("form[name=form] input[name='dateDeNaissance']");
       },
       function fail() {
           test.assertExists("form[name=form] input[name='dateDeNaissance']");
   });
   casper.waitForSelector("form[name=form] input[name='dateDeNaissance']",
       function success() {
           test.assertExists("form[name=form] input[name='dateDeNaissance']");
           this.click("form[name=form] input[name='dateDeNaissance']");
       },
       function fail() {
           test.assertExists("form[name=form] input[name='dateDeNaissance']");
   });
   casper.waitForSelector("form[name=form] input[name='dateDeNaissance']",
       function success() {
           test.assertExists("form[name=form] input[name='dateDeNaissance']");
           this.click("form[name=form] input[name='dateDeNaissance']");
       },
       function fail() {
           test.assertExists("form[name=form] input[name='dateDeNaissance']");
   });
   casper.waitForSelector("form[name=form] input[name='dateDeNaissance']",
       function success() {
           test.assertExists("form[name=form] input[name='dateDeNaissance']");
           this.click("form[name=form] input[name='dateDeNaissance']");
       },
       function fail() {
           test.assertExists("form[name=form] input[name='dateDeNaissance']");
   });
   casper.waitForSelector("form[name=form] input[name='nationalite']",
       function success() {
           test.assertExists("form[name=form] input[name='nationalite']");
           this.click("form[name=form] input[name='nationalite']");
       },
       function fail() {
           test.assertExists("form[name=form] input[name='nationalite']");
   });
   casper.waitForSelector(".frame-foyer.ng-scope .radio:nth-child(3) abbr",
       function success() {
           test.assertExists(".frame-foyer.ng-scope .radio:nth-child(3) abbr");
           this.click(".frame-foyer.ng-scope .radio:nth-child(3) abbr");
       },
       function fail() {
           test.assertExists(".frame-foyer.ng-scope .radio:nth-child(3) abbr");
   });
   casper.waitForSelector("form[name=form] input[name='nationalite']",
       function success() {
           test.assertExists("form[name=form] input[name='nationalite']");
           this.click("form[name=form] input[name='nationalite']");
       },
       function fail() {
           test.assertExists("form[name=form] input[name='nationalite']");
   });
   casper.waitForSelector(".form-group.from-group-lg .checkbox:nth-child(1) label",
       function success() {
           test.assertExists(".form-group.from-group-lg .checkbox:nth-child(1) label");
           this.click(".form-group.from-group-lg .checkbox:nth-child(1) label");
       },
       function fail() {
           test.assertExists(".form-group.from-group-lg .checkbox:nth-child(1) label");
   });
   casper.waitForSelector("form[name=form] .ng-pristine.ng-untouched.ng-valid.ng-dirty-add.ng-valid-parse-add.ng-animate.ng-pristine-remove",
       function success() {
           test.assertExists("form[name=form] .ng-pristine.ng-untouched.ng-valid.ng-dirty-add.ng-valid-parse-add.ng-animate.ng-pristine-remove");
           this.click("form[name=form] .ng-pristine.ng-untouched.ng-valid.ng-dirty-add.ng-valid-parse-add.ng-animate.ng-pristine-remove");
       },
       function fail() {
           test.assertExists("form[name=form] .ng-pristine.ng-untouched.ng-valid.ng-dirty-add.ng-valid-parse-add.ng-animate.ng-pristine-remove");
   });
   casper.waitForSelector(".form-group.from-group-lg .checkbox.ng-scope:nth-child(3) .ng-binding",
       function success() {
           test.assertExists(".form-group.from-group-lg .checkbox.ng-scope:nth-child(3) .ng-binding");
           this.click(".form-group.from-group-lg .checkbox.ng-scope:nth-child(3) .ng-binding");
       },
       function fail() {
           test.assertExists(".form-group.from-group-lg .checkbox.ng-scope:nth-child(3) .ng-binding");
   });
   casper.waitForSelector("form[name=form] .ng-pristine.ng-untouched.ng-valid.ng-dirty-add.ng-valid-parse-add.ng-animate.ng-pristine-remove",
       function success() {
           test.assertExists("form[name=form] .ng-pristine.ng-untouched.ng-valid.ng-dirty-add.ng-valid-parse-add.ng-animate.ng-pristine-remove");
           this.click("form[name=form] .ng-pristine.ng-untouched.ng-valid.ng-dirty-add.ng-valid-parse-add.ng-animate.ng-pristine-remove");
       },
       function fail() {
           test.assertExists("form[name=form] .ng-pristine.ng-untouched.ng-valid.ng-dirty-add.ng-valid-parse-add.ng-animate.ng-pristine-remove");
   });
   casper.waitForSelector(".btn.btn-sm.btn-default:nth-child(1)",
       function success() {
           test.assertExists(".btn.btn-sm.btn-default:nth-child(1)");
           this.click(".btn.btn-sm.btn-default:nth-child(1)");
       },
       function fail() {
           test.assertExists(".btn.btn-sm.btn-default:nth-child(1)");
   });
   casper.waitForSelector("form[name=form] input[name='field.kpkezbmv5j30a03gqkbzhyqfr']",
       function success() {
           test.assertExists("form[name=form] input[name='field.kpkezbmv5j30a03gqkbzhyqfr']");
           this.click("form[name=form] input[name='field.kpkezbmv5j30a03gqkbzhyqfr']");
       },
       function fail() {
           test.assertExists("form[name=form] input[name='field.kpkezbmv5j30a03gqkbzhyqfr']");
   });
   casper.waitForSelector("form[name=form] button",
       function success() {
           test.assertExists("form[name=form] button");
           this.click("form[name=form] button");
       },
       function fail() {
           test.assertExists("form[name=form] button");
   });
   /* submit form */
   casper.waitForSelector(".col-sm-offset-4.col-sm-8 label",
       function success() {
           test.assertExists(".col-sm-offset-4.col-sm-8 label");
           this.click(".col-sm-offset-4.col-sm-8 label");
       },
       function fail() {
           test.assertExists(".col-sm-offset-4.col-sm-8 label");
   });
   casper.waitForSelector("form[name=form] input[name='disclaimerNonUe']",
       function success() {
           test.assertExists("form[name=form] input[name='disclaimerNonUe']");
           this.click("form[name=form] input[name='disclaimerNonUe']");
       },
       function fail() {
           test.assertExists("form[name=form] input[name='disclaimerNonUe']");
   });
   casper.waitForSelector("form[name=form] button",
       function success() {
           test.assertExists("form[name=form] button");
           this.click("form[name=form] button");
       },
       function fail() {
           test.assertExists("form[name=form] button");
   });
   /* submit form */

   casper.run(function() {test.done();});
});
