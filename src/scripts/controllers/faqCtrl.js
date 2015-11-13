app.controller('faqCtrl', function ($scope, $http, $document) {

	analytics.page({ path: '/faq'});
	
	$scope.trackQuestion = function(index) {
		window.analytics.track('question ' + index);
	};

	$scope.moveTo = function(id) {
		var offset = 100;
		var duration = 500;
		var someElement = angular.element(document.getElementById(id));
    	$document.scrollToElement(someElement, offset, duration);
	}

	$scope.isGood = null;
	$scope.isSended = false;
 	var button = angular.element(document.getElementById('validate'));


	$scope.sendQuestion = function(form){
		if(form.$valid)
		{
			console.log(form.email);
			button.addClass('on');
			window.analytics.track('Question submitted');
			$http.post('/sendQuestion/', {email:form.email, name:form.name, content:form.content})
			.success(function(){
				button.removeClass('on');
					$scope.isSended = true;
					$scope.isGood = true;
					console.log('YEAH');
			})
			.error(function(){
				button.removeClass('on');
				$scope.isSended = true;
				$scope.isGood = false;
				console.log('NOES');
			});
		}
	};
	// $scope.htmlReady();
});
