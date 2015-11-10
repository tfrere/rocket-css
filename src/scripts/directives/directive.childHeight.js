angular.module('toggleHeight', []).directive('toggleChildHeight', function($window) {
      return {
          scope: {
              index: '@'
          },
          link: function(scope, element, attrs) {

            var w = angular.element($window);
            var linkHeight = angular.element(element)[0].offsetHeight;

            element.parent().css({ height: linkHeight });

              element.bind('click', function() {
                element.parent().toggleClass('active');
                element.find("i").toggleClass('active');
              
                var actualHeight = angular.element(element.parent())[0].offsetHeight;
                var contentHeight = angular.element(element.next())[0].offsetHeight + 40;
                var totalHeight = linkHeight + contentHeight;
                  

                  if(totalHeight == actualHeight){
                    element.parent().css({ height: linkHeight });
                  }
                  else {
                    window.analytics.track('question ' + attrs.index);
                    element.parent().css({ height: totalHeight });
                  }
              });


              w.bind('resize', function () {
                var linkHeight = angular.element(element)[0].offsetHeight;

                element.parent().css({ height: linkHeight });

                  element.bind('click', function() {

                    console.log(element.parent());
                    element.parent().toggleClass('active');
                  
                    var actualHeight = angular.element(element.parent())[0].offsetHeight;
                    var contentHeight = angular.element(element.next())[0].offsetHeight + 40;
                    var totalHeight = linkHeight + contentHeight;

                      if(totalHeight == actualHeight)
                        element.parent().css({ height: linkHeight });
                      else
                        element.parent().css({ height: totalHeight });
                  });

              });

          }
      };
  });
