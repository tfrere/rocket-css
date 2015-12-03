app.controller('questionCtrl', function ($translate, $sce, $stateParams, $scope, $http, $document) {
	
	$scope.moveTo = function(id) {
		var offset = 100;
		var duration = 500;
		var someElement = angular.element(document.getElementById(id));
    	$document.scrollToElement(someElement, offset, duration);
	}

	analytics.page({ path: '/faq/' + $stateParams.id});
	
	$scope.trackQuestion = function(index) {
		window.analytics.track('questionApp ' + index);
	};

	console.log($stateParams);

	$http.get('http://app.peon.fr/api/infos').success(function (data){

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
