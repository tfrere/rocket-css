var app = angular.module('app', ['ngCookies', 'ui.router', 'ng-optimizely', 'duScroll', 'duParallax', 'toggleHeight', 'ngResource', 'ngAnimate']);

app.run(['optimizely', function(optimizely) {
  optimizely.loadProject('3529320510');
}]);

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
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



