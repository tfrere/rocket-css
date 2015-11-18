var app = angular.module('app', ['ui.router', 'duScroll', 'duParallax', 'toggleHeight', 'ngResource', 'ngAnimate']);

app.config(function($httpProvider){
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});


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
            controller: 'homeCtrl'
        })
        .state('nav.faq', {
            url: '/faq',
            templateUrl: 'templates/faq.html',
            controller: 'faqCtrl'
        })
        .state('nav.faq.application', {
            url: '/application',
            templateUrl: 'templates/question.html',
            controller: 'questionAppCtrl'
        })
        .state('nav.faq.statut', {
            url: '/statut',
            templateUrl: 'templates/question.html',
            controller: 'questionStatutCtrl'
        })
        .state('nav.apropos', {
            url: '/apropos',
            templateUrl: 'templates/apropos.html',
            controller: 'aproposCtrl'
        })
        .state('nav.assistance', {
            url: '/assistance',
            templateUrl: 'templates/assistance.html',
            controller: 'assistanceCtrl'
        })
        .state('nav.blog', {
            url: '/blog',
            templateUrl: 'templates/blog.html',
            controller: 'blogCtrl'
        })
        .state('nav.cgu', {
            url: '/cgu',
            templateUrl: 'templates/cgu.html',
            controller: 'cguCtrl'
        })
        .state('nav.404', {
            url: '/404',
            templateUrl: 'templates/404.html',
            controller: '404Ctrl'
        })
});



