
app.controller('formCtrl', function ($cookies, $scope, $timeout) {

  $scope.data = {
    sector:"",
    email:"",
    fname:"",
    lname:"",
    phone:"",
    company:""
  };

  $scope.step = 1;
  $scope.maxStep = 1;
  $scope.totalStep = 6;

  var progressBar = angular.element(document.querySelector('.progress .bar'));
  var nav = angular.element(document.querySelector('.navigation-handler'));

  var updateBar = function() {
    progressBar.css({ width: ($scope.step * 100 / $scope.totalStep) + '%' });
  };

  var updateNav = function() {
    var currentNav = angular.element(nav[0].childNodes);
    var currentDot = angular.element(nav[0].childNodes[$scope.step - 1]);
    currentNav.removeClass("current");
    currentNav.removeClass("clickable");
    for (var i = 0; i < $scope.maxStep; i++)
    {
        var currentClickable = angular.element(nav[0].childNodes[i]);
        currentClickable.addClass("clickable");
    }
    currentDot.addClass("current");
  };

  $timeout(function(){
    updateBar();
  });

  $scope.goTo = function ($event, number) {
    if (number <= $scope.maxStep)
    {
        $scope.step = number;
        updateBar();
        updateNav();
    }
  };

  $scope.next = function (form) {
    if (!form.$invalid) {
        $scope.step++;
        if ($scope.maxStep < $scope.step)
        {
            $scope.maxStep++;
        }
        updateBar();
        updateNav();
    }
  };


});
