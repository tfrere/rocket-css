angular.module('ng-tip', []).directive('tip', function(){
    return {
        restrict: 'C',
        link: function(scope, element, attrs){
            element.on("mouseover", function(event) {
              element.addClass("-visible");
      			});
            element.on("mouseout", function(event) {
              element.removeClass("-visible");
      			})
        }
    };
});
