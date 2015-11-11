app.controller('navCtrl', function ($scope, $rootScope) {
	$scope.trackCreate = function() {
		window.analytics.track('Account Created');
	};
	$rootScope.$on('$stateChangeError', function(event) {
	  $state.go('404');
	});
 $scope.htmlReady();
});