var app = angular.module('app', ['ui.router', 'duScroll', 'duParallax', 'toggleHeight']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    
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
        .state('nav.apropos', {
            url: '/apropos',
            templateUrl: 'templates/apropos.html',
            controller: 'aproposCtrl'
        })
        .state('nav.contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html',
            controller: 'contactCtrl'
        })
});



