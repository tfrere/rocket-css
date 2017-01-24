
app.controller('formCtrl', function ($cookies, $scope, $timeout) {

  $scope.data = {
    sector:"",
    email:"",
    fname:"",
    lname:"",
    phone:"",
    company:""
  };
  $scope.zipCode = "";
  $scope.isGetPositionLoading = false;
  $scope.isLastStepReached = false;
  $scope.countTo = 340;
  $scope.startTime = moment(new Date());
  $scope.step = 1;
  $scope.maxStep = 5;
  $scope.totalStep = 5;
  $scope.isLoadingFinished = false;

  $scope.getPosition = function() {
    var geocoder = new google.maps.Geocoder;
    var zip = "";
    console.log(navigator);
    $scope.isGetPositionLoading = true;
    // Try HTML5 gecolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        $timeout(function () {
          $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
            $scope.zipCode = data.zip;
            $scope.$applyAsync();
            $scope.isGetPositionLoading = false;
          });
        }, 50);
      });
    }
  }


  var extractZipCode = function(str) {
    const regex = /(?!\.).{1}(\d{5})/gm;
    let m, result;
    while ((m = regex.exec(str)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
            result = match;
        });
    }
    return result;
  }

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
    if ($scope.step == $scope.totalStep) {
      $scope.endTime = moment(new Date());
      var duration = moment.duration($scope.endTime.diff($scope.startTime));
      console.log(duration.format("h:mm:ss"));
      $scope.duration = duration.format("h:mm:ss");
    }
    else {
      $scope.step++;
      if ($scope.maxStep < $scope.step)
        $scope.maxStep++;
      if ($scope.maxStep == $scope.step) {
        $scope.isLastStepReached = true;
        $timeout(function () {
          $scope.isLoadingFinished = true;
        }, 2500);
      }
      updateBar();
      updateNav();
      $timeout(function () {
        console.log(angular.element($("form[name='step" + $scope.step + "'] input")));
        angular.element($("form[name='step" + $scope.step + "'] input")).focus();
      }, 250);
    }
  };

  $("body").keydown(function (event) {
      keyReport(event);
  });

  function keyReport(event) {
    if (event.which == 10 || event.which == 13) {
      event.preventDefault();
    }
    switch (event.which) {
      case 0:
        console.log("event.which not sure");
        break;
      case 32:
        console.log(" Spacebar");
        break;
      case 13:
        console.log(" Enter");
        //$scope.next();
        $('.button[ng-validate]').click();
        break;
      case 27:
        console.log(" Escape");
        break;
      case 35:
        console.log(" End");
        break;
      case 36:
        console.log(" Home");
        break;
      case 37:
        console.log(" Left");
        break;
      case 38:
        console.log(" Up");
        break;
      case 39:
        console.log(" Right");
        break;
      case 40:
        console.log(" Down");
        break;
    }
  }


  //
  // $scope.sendForm = function(form){
  //     if (form.$valid)
  //     {
  //       var text = document.getElementById('text').outerHTML;
  //       button.addClass('on');
  //       var keepData = angular.copy($scope.data);
  //       keepData.response = text;
  //       if (!$scope.isToken)
  //         keepData.sector = angular.copy($scope.data.sector.response);
  //       $http.post('/postDiagnostic', keepData)
  //           .success(function(a,b){
  //               if ($scope.isToken)
  //                 $state.go('nav.home', { context: 0 });
  //               else
  //               {
  //                 console.log(a, b);
  //                 $state.go('nav.home', { context: a.token });
  //               }
  //               calq.action.track('Opt-in', {"data": keepData});
  //               console.log(a,b);
  //           })
  //           .error(function(a,b){
  //               button.removeClass('on');
  //               console.log(a,b);
  //           });
  //     }
  // };

});
