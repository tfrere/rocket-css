
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


	//mouseParallaxService.init();


});
