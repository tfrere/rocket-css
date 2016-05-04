
app.controller('articleCtrl', function ($stateParams, $scope, $http, $sce, $timeout) {

	console.log($stateParams);

    $http.get('https://app.peon.fr/api/posts/slug/' + $stateParams.slug).success(function (data){
    	var article = {};
    	article = data;
		article.content = $sce.trustAsHtml(data.content);
		article.date = moment(data.publishedAt).format("dddd, Do MMMM YYYY");
		$scope.article = article;
		console.log(data);
    });

	analytics.page({ path: '/blog/' + $stateParams.slug});
});