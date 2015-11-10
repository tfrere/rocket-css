
app.controller('questionStatutCtrl', function ($scope, $http, $sce) {

	analytics.page({ path: '/faq/statut'});
	
	$scope.trackQuestion = function(index) {
		window.analytics.track('questionApp ' + index);
	};

	$http.get('../ressources/question_statut.json').success(function (data){

	    var questions = [];

	    for(var i=0;i<data.length;i++){
	      var content = data[i].content;
	      var title = data[i].title;

	      content = $sce.trustAsHtml(content);
	      
	      questions.push({index:i, content:content, title:title});
	    }
	    $scope.questions = questions;

    });


});