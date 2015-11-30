
var app = angular.module('app', ['ngCookies', 'ui.router', 'ng-optimizely', 'duScroll', 'duParallax', 'toggleHeight', 'ngResource', 'ngAnimate']);

app.run(['optimizely', function(optimizely) {
  optimizely.loadProject('3529320510');
}]);

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});

app.config(function($httpProvider){
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.directive('updateTitle', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    return {
      link: function(scope, element) {

        var listener = function(event, toState) {

          var title = 'Default Title';
          if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle;

          $timeout(function() {
            element.text(title + " | Peon");
          }, 0, false);
        };

        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }
]);


app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

        moment.locale('fr', {
          months : "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
          monthsShort : "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
          weekdays : "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
          weekdaysShort : "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
          weekdaysMin : "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
          longDateFormat : {
            LT : "HH:mm",
            LTS : "HH:mm:ss",
            L : "DD/MM/YYYY",
            LL : "D MMMM YYYY",
            LLL : "D MMMM YYYY LT",
            LLLL : "dddd D MMMM YYYY LT"
          },
          calendar : {
            sameDay: "[Aujourd'hui à] LT",
            nextDay: '[Demain à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[Hier à] LT',
            lastWeek: 'dddd [dernier à] LT',
            sameElse: 'L'
          },
          relativeTime : {
            future : "dans %s",
            past : "il y a %s",
            s : "quelques secondes",
            m : "une minute",
            mm : "%d minutes",
            h : "une heure",
            hh : "%d heures",
            d : "un jour",
            dd : "%d jours",
            M : "un mois",
            MM : "%d mois",
            y : "une année",
            yy : "%d ans"
          },
          ordinalParse : /\d{1,2}(er| )/,
          ordinal : function (number) {
            return number + (number === 1 ? 'er' : '');
          },
          meridiemParse: /PD|MD/,
          isPM: function (input) {
            return input.charAt(0) === 'M';
          },
          // in case the meridiem units are not separated around 12, then implement
          // this function (look at locale/id.js for an example)
          // meridiemHour : function (hour, meridiem) {
          //     return /* 0-23 hour, given meridiem token and hour 1-12 */
          // },
          meridiem : function (hours, minutes, isLower) {
            return hours < 12 ? 'PD' : 'MD';
          },
          week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
          }
        });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });    
    $urlRouterProvider.when('', '/');
    $locationProvider.hashPrefix('!');

    // For any unmatched url, send to 404
    $urlRouterProvider.otherwise('/404');
    
    $stateProvider
        .state('nav', {
            abstract: true,
            templateUrl: 'templates/nav.html',
            controller: 'navCtrl'
        })
        .state('nav.home', {
            url: '/',
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl',
            data: {
              pageTitle: 'Home'
            }
        })
        .state('nav.faq', {
            url: '/faq',
            templateUrl: 'templates/faq.html',
            controller: 'faqCtrl',
            data: {
              pageTitle: 'Faq'
            }
        })
        .state('nav.faq.show', {
            url: '/question/:id',
            templateUrl: 'templates/question.html',
            controller: 'questionCtrl',
            data: {
              pageTitle: 'Faq'
            }
        })
        .state('nav.apropos', {
            url: '/apropos',
            templateUrl: 'templates/apropos.html',
            controller: 'aproposCtrl',
            data: {
              pageTitle: 'A propos'
            }
        })
        .state('nav.assistance', {
            url: '/assistance',
            templateUrl: 'templates/assistance.html',
            controller: 'assistanceCtrl',
            data: {
              pageTitle: 'Assistance'
            }
        })
        .state('nav.blog', {
            url: '/blog',
            templateUrl: 'templates/blog.html',
            controller: 'blogCtrl',
            data: {
              pageTitle: 'Blog'
            }
        })
        .state('nav.article', {
            url: '/blog/article/:slug',
            templateUrl: 'templates/article.html',
            controller: 'articleCtrl',
            data: {
              pageTitle: 'Article'
            }
        })
        .state('nav.cgu', {
            url: '/cgu',
            templateUrl: 'templates/cgu.html',
            data: {
              pageTitle: 'Cgu'
            }
        })
        .state('nav.404', {
            url: '/404',
            templateUrl: 'templates/404.html',
            controller: '404Ctrl',
            data: {
              pageTitle: '404'
            }
        })
        .state('nav.cookies', {
            url: '/cookies',
            templateUrl: 'templates/cookies.html',
            data: {
              pageTitle: 'Cookies'
            }
        })
});



