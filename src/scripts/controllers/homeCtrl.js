
app.controller('homeCtrl', function ($scope, mouseParallaxService, $timeout) {

	$scope.setCookie = false;
	
	$scope.updateCookie = function() {
		$scope.setCookie = true;
	};

	$scope.isVideoClicked = false;

	$scope.videoClickMask = function() {
		$scope.isVideoClicked = true;
		window.analytics.track('videoOpened');
	}

	mouseParallaxService.init();

	//console.log(document.getElementById('waypoint'));
	// $timeout(function(){
	// 	var waypoint = new Waypoint({
	// 	  element: document.getElementById('waypoint1'),
	// 	  handler: function(direction) {
	// 	    var e = document.getElementById('circle-image-1');
	// 	    angular.element(e).addClass('fly-right');
	// 	  },
	// 	  offset:450
	// 	});
	// 	var waypoint = new Waypoint({
	// 	  element: document.getElementById('waypoint2'),
	// 	  handler: function(direction) {
	// 	    var e = document.getElementById('circle-image-2');
	// 	    angular.element(e).addClass('fly-left');
	// 	  },
	// 	  offset:450
	// 	});
	// 	var waypoint = new Waypoint({
	// 	  element: document.getElementById('waypoint3'),
	// 	  handler: function(direction) {
	// 	    var e = document.getElementById('circle-image-3');
	// 	    angular.element(e).addClass('fly-right');
	// 	  },
	// 	  offset:450
	// 	});

	// }, 100);

	$scope.trackCta1 = function() {
		window.analytics.track('cta1');
	};

	$scope.trackCta2 = function() {
		window.analytics.track('cta2');
	};

    // $(document).ready(function(){
    //     $("body").smoothWheel();
    // });

});