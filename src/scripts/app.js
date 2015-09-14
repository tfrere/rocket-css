var app = angular.module('app', ['ui.router', 'duScroll', 'duParallax']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('nav', {
            abstract: true,
            templateUrl: 'templates/nav.html',
            controller: 'homeCtrl'
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
        .state('nav.whoami', {
            url: '/whoami',
            templateUrl: 'templates/whoami.html',
            controller: 'whoamiCtrl'
        })
        .state('form', {
            url: '/form',
            templateUrl: 'templates/form.html',
            controller: 'formCtrl'
        })

});

app.controller('faqCtrl', function ($scope) {


});

app.controller('whoamiCtrl', function ($scope) {


});

app.controller('homeCtrl', function ($scope) {


});

app.controller('formCtrl', function ($scope) {


});
