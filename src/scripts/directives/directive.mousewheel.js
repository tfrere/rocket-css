(function() {

	angular.module('ngWheel', []).directive('ngScroll', ['$parse', function($parse) {
		return function(scope, element, attr) {
			var fn = $parse(attr.ngScroll);
				console.log('scroll!');

			element.bind('scroll', function(event) {
				console.log('scroll!');
				scope.$apply(function() {
					fn(scope, {
						$event: event
					});
				});
			});
		};
	}]);

}.call(this));