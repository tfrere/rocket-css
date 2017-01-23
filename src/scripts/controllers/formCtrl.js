
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
        geocoder.geocode({'location': pos}, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
              if (results[1]) {
                console.log(results);
                var concat = "";
                for(var i = 0; i < results.length; i++){
                  concat += results[i].formatted_address;
                }
                console.log($scope.zipCode);
                $scope.zipCode = extractZipCode(concat);
                $scope.$applyAsync();
                $scope.isGetPositionLoading = false;
              } else {
                console.log("No result found");
              }
            } else {
              console.log('Geocoder failed due to: ' + status);
            }
          });
      }, function() {
        $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
          $scope.zipCode = data.zip;
          $scope.$applyAsync();
          $scope.isGetPositionLoading = false;
        });
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
    if ($scope.step == $scope.maxStep) {
      $scope.endTime = moment(new Date());
      var duration = moment.duration($scope.endTime.diff($scope.startTime));
      console.log(duration.format("h:mm:ss"));
      $scope.duration = duration.format("h:mm:ss");
    }
    if (!form.$invalid) {
        $scope.step++;
        if ($scope.maxStep < $scope.step)
          $scope.maxStep++;
        if ($scope.maxStep == $scope.step) {
          $scope.isLastStepReached = true;
          $timeout(function () {
            $scope.isLoadingFinished = true;
          }, 125500);
        }
        updateBar();
        updateNav();
    }
  };



      var theText = $("#theText");
      var theOutputText = $("#theOutputText");
      var theOutputKeyPress = $("#theOutputKeyPress");
      var theOutputKeyDown = $("#theOutputKeyDown");
      var theOutputKeyUp = $("#theOutputKeyUp");
      var theOutputFocusOut = $("#theOutputFocusOut");

      theText.keydown(function (event) {
          keyReport(event, theOutputKeyDown);
      });

      theText.keypress(function (event) {
          keyReport(event, theOutputKeyPress);
      });


      theText.keyup(function (event) {
          keyReport(event, theOutputKeyUp);
      });

      theText.focusout(function (event) {
          theOutputFocusOut.html(".focusout() fired!");
      });

      theText.focus(function (event) {
          theOutputFocusOut.html(".focus() fired!");
      });

      function keyReport(event, output) {
          // catch enter key = submit (Safari on iPhone=10)
          if (event.which == 10 || event.which == 13) {
              event.preventDefault();
          }
          // show event.which
          output.html(event.which + "&nbsp;&nbsp;&nbsp;&nbsp;event.keyCode " + event.keyCode);
          // report invisible keys
          switch (event.which) {
              case 0:
                  output.append("event.which not sure");
                  break;
              case 13:
                  output.append(" Enter");
                  break;
              case 27:
                  output.append(" Escape");
                  break;
              case 35:
                  output.append(" End");
                  break;
              case 36:
                  output.append(" Home");
                  break;
          }
          // show field content
          theOutputText.text(theText.val());
      }


});
