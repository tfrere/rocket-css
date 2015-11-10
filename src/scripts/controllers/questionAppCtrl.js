
app.controller('questionAppCtrl', function ($scope, $http, $sce) {

	analytics.page({ path: '/faq/app'});
	
	$scope.trackQuestion = function(index) {
		window.analytics.track('question ' + index);
	};

	$http.get('../ressources/question_app.json').success(function (data){

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

// questionAppCtrl.resolve = {
//     questions : function($q, $http) {
//         var deferred = $q.defer();

//         $http({method: 'GET', url: '../ressources/question_app.json'})
//             .success(function(data) {
//                 deferred.resolve(data)
//             })
//             .error(function(data){
//                 //actually you'd want deffered.reject(data) here
//                 //but to show what would happen on success..
//                 deferred.resolve("error value");
//             });

//         return deferred.promise;
//     }
// };