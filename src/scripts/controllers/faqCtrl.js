app.controller('faqCtrl', function ($translate, $sce, $stateParams, $scope, $http, $document) {

	analytics.page({ path: '/faq'});
	
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
			$http.post('https://app.peon.fr/api/questions/', {email:form.email, name:form.name, msg:form.content})
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

	analytics.page({ path: '/faq/' + $stateParams.id});
	
	$scope.trackQuestion = function(index) {
		window.analytics.track('questionApp ' + index);
	};

	console.log($stateParams);

	$http.get('https://app.peon.fr/api/infos').success(function (data){

	    var questions = [];
	    for(var i=0;i<data.length;i++){
	      
	      var content = data[i].content;
	      var title = data[i].title;
	      content = $sce.trustAsHtml(content);
	      
	      if (data[i].category === $stateParams.id)
	      	questions.push({index:i, content:content, title:title});
	    }
	    $scope.questions = questions;
	    console.log(questions);

    });

});
