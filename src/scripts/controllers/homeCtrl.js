
app.controller('homeCtrl', function ($cookies, $scope, mouseParallaxService, $timeout) {

	$scope.setCookie = false;
	var favoriteCookie = $cookies.get('cookiePopup');

	if (favoriteCookie == 'true')
		$scope.setCookie = true;
	$scope.updateCookie = function() {
		$scope.setCookie = true;
		var expireDate = new Date();
		expireDate.setDate(expireDate.getDate() + 365);
		$cookies.put('cookiePopup', 'true', {'expires': expireDate});
	};

	$scope.isVideoClicked = false;

	$scope.videoClickMask = function() {
		$scope.isVideoClicked = true;
		window.analytics.track('videoOpened');
	}

	mouseParallaxService.init();

	$scope.trackCta1 = function() {
		window.analytics.track('cta1');
	};

	$scope.trackCta2 = function() {
		window.analytics.track('cta2');
	};

});