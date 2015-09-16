var app = angular.module('app', ['ui.router', 'ngWheel', 'duScroll', 'duParallax']);

app.config(function($stateProvider, $urlRouterProvider) {
    
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
        .state('nav.contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html',
            controller: 'contactCtrl'
        })

});


