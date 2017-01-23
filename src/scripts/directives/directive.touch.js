
angular.module('ng-touch', []).directive('touch', function(){
    return {
        restrict: 'C',
        link: function(scope, element, attrs){
            element.on("click", function(event) {
      				var elem, d, x, y;
      				if (element.find(".touch-elem").length === 0) {
      					element.prepend("<div class='touch-elem'></div>   " );
      				}
      				elem = element.find(".touch-elem");
      				elem.removeClass("animate");
              console.log(elem);
      				if(!elem.height() && !elem.width()){
      			 	   d = Math.max(element.outerWidth(), element.outerHeight());
      			 	   elem.css({height: d, width: d});
      				}
      				x = event.pageX - element.offset().left - elem.width()/2;
      			    y = event.pageY - element.offset().top - elem.height()/2;
      			    elem.css({top: y + 'px', left: x + 'px'}).addClass("animate");
      			})
        }
    };
});
