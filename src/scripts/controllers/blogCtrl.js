
app.controller('blogCtrl', function ($scope, $http, $sce, $timeout) {


	$timeout = twttr.widgets.load();

	analytics.page({ path: '/blog'});
 
	$scope.trackNewsletter = function() {
		window.analytics.track('NewsLetter add');
	};

    $http.get('../ressources/blog.json').success(function (data){

	    var articles = [];

	    for(var i=0;i<data.length;i++){
	      var content = data[i].content;
	      var title = data[i].title;
	      var date = data[i].date;
	      var tags = data[i].tags;
	      var img = data[i].img;

	      content = $sce.trustAsHtml(content);
	      
	      articles.push({index:i, content:content, title:title, date:date, tags:tags, img: img});
	    }
	    $scope.articles = articles;

    });

   $scope.isGood = null;
   $scope.isSended = false;


  $scope.sendEmail = function(form){
  	if(form.$valid)
  	{
  		console.log(form.email);

	  	window.analytics.track('NewsLetter add');
	    $http.post('/subscribeToMailchimp/', {email:form.email})
	    .success(function(){
  			$scope.isSended = true;
	    	$scope.isGood = true;
	    	console.log('YEAH');
	    });
	    // .error(function(){
	    // 	$scope.isSended = true;
	    // 	$scope.isGood = false;
	    // 	console.log('NOES');
	    // });
  	}
  };

});