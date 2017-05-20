var app = angular.module('app', ['hljs', 'ngProgress', 'ui.router', 'ngResource']);


app.directive('compileUnsafe', function ($compile) {
  return function (scope, element, attr) {
    scope.$watch(attr.compileUnsafe, function (val, oldVal) {
      if (!val || (val === oldVal && element[0].innerHTML)) return;
      element.html(val);
      $compile(element)(scope);
    });
  };
});

// app.config(function($httpProvider){
//     $httpProvider.defaults.useXDomain = true;
//     delete $httpProvider.defaults.headers.common['X-Requested-With'];
// });

app.directive('updateTitle', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    return {
      link: function(scope, element) {

        var listener = function(event, toState) {

          var title = 'CSS - Documentation';
          if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle;

          $timeout(function() {
            element.text(title + "");
          }, 0, false);
        };

        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }
]);


app.directive('updateDesc', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    return {
      link: function(scope, element) {

        var listener = function(event, toState) {

          var desc = "Peon, c'est bon mangez en";
          if (toState.data && toState.data.pageDesc) desc = toState.data.pageDesc;

          $timeout(function() {
            element.text(desc + "");
          }, 0, false);
        };

        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }
]);


app.controller('navCtrl', function ( $timeout, ngProgressFactory, $rootScope, $scope ) {
  $rootScope.progressBar = ngProgressFactory.createInstance();

  $rootScope.$on('$stateChangeStart',
  function(event, toState, toParams, fromState, fromParams){
    $rootScope.progressBar.reset();
    $rootScope.progressBar.start();
  })

  $rootScope.$on('$stateChangeSuccess',
  function(event, toState, toParams, fromState, fromParams){
    $rootScope.progressBar.complete();
  })
});

app.controller('homeCtrl', function ( $scope, $timeout) {

});

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
    // $locationProvider.hashPrefix('!');
    $urlRouterProvider.when('', '/');

    // For any unmatched url, send to 404
    $stateProvider
        .state('nav', {
            abstract: true,
            templateUrl: 'templates/nav.html',
            controller: 'navCtrl'
        })
        .state('nav.identity', {
            url: '/',
            templateUrl: 'templates/identity.html',
            controller: 'identityCtrl'
        })
        .state('nav.home', {
            url: '/',
            templateUrl: 'templates/typo.html',
            controller: 'typoCtrl'
        })
        .state('nav.typo', {
            url: '/typo',
            templateUrl: 'templates/typo.html',
            controller: 'typoCtrl'
        })
        .state('nav.color', {
            url: '/color',
            templateUrl: 'templates/color.html',
            controller: 'colorCtrl'
        })
        .state('nav.symbol', {
            url: '/symbol',
            templateUrl: 'templates/symbol.html',
            controller: 'symbolCtrl'
        })
        .state('nav.animation', {
            url: '/animation',
            templateUrl: 'templates/animation.html',
            controller: 'animationCtrl'
        })
        .state('nav.atom', {
            url: '/atom',
            templateUrl: 'templates/atom.html',
            controller: 'atomCtrl'
        })
        .state('nav.molecule', {
            url: '/molecule',
            templateUrl: 'templates/molecule.html',
            controller: 'atomCtrl'
        })
        .state('nav.modifier', {
            url: '/modifier',
            templateUrl: 'templates/modifier.html',
            controller: 'atomCtrl'
        })
        .state('nav.template', {
            url: '/template-Footer',
            templateUrl: 'templates/template.html',
            controller: 'atomCtrl'
        })
});
