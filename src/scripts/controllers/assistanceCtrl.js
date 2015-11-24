
app.controller('assistanceCtrl', function ($scope, $http) {
	analytics.page({ path: '/assistance'});
	$scope.isGood = null;
	$scope.isSended = false;
 	var button = angular.element(document.getElementById('validate'));


	$scope.sendQuestion = function(form){
		if(form.$valid)
		{
			console.log(form.email);
			button.addClass('on');
			window.analytics.track('Question submitted');
			$http.post('http://app.tfrere.fr/api/question/', {email:form.email, name:form.name, msg:form.content})
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
});
