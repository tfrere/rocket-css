app.controller('navCtrl', function ( LocaleService, $translate, $locale, $scope, $rootScope, $stateParams, $location, $translate) {
	
    $scope.trackCreate = function() {
        window.analytics.track('Account Created');
    };


	$rootScope.$on('$stateChangeError', function(event) {
	  $state.go('nav.404');
	});

});