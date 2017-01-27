
app.controller('formCtrl', function ($cookies, $scope, $timeout) {

  $scope.data = {};
  $scope.zipCode = "";
  $scope.isGetPositionLoading = false;
  $scope.isLastStepReached = false;
  $scope.countTo = 340;
  $scope.startTime = moment(new Date());
  $scope.step = 1;
  $scope.maxStep = 7;
  $scope.totalStep = 7;
  $scope.isLoadingFinished = false;
  $scope.isGetPositionTriggered = false;
  $scope.forms = [];
  $scope.data = {};
  $scope.finalResult = {};
  $scope.finalResult.rsa = 0;
  $scope.finalResult.apl = 0;

  $scope.openModal = function() {
    console.log(1);
    $(".modal.modal-1").addClass("-opening");
    window.setTimeout(function() {
      $("body").addClass("no-scroll");
      $(".modal.modal-1").addClass("-open");
      $(".modal.modal-1").removeClass("-opening");
    }, 600);
  };
  $scope.closeModal = function() {
    console.log(1);
    $(".modal.modal-1").addClass("-closing");
    window.setTimeout(function() {
      $(".modal.modal-1").removeClass("-open");
      $(".modal.modal-1").removeClass("-closing");
      $("body").removeClass("no-scroll");
    }, 350);
  };

  $scope.openModal2 = function() {
    $(".modal.modal-2").addClass("-opening");
    window.setTimeout(function() {
      $("body").addClass("no-scroll");
      $(".modal.modal-2").addClass("-open");
      $(".modal.modal-2").removeClass("-opening");
    }, 600);
  };

  $scope.closeModal2 = function() {
    $(".modal.modal-2").addClass("-closing");
    window.setTimeout(function() {
      $(".modal.modal-2").removeClass("-open");
      $(".modal.modal-2").removeClass("-closing");
      $("body").removeClass("no-scroll");
    }, 350);
  };

  $scope.isEmailSended = false;

  $scope.sendEmail = function() {
    $(".modal .merge .button").addClass("loading");
    window.setTimeout(function() {
      $(".modal .merge .button").removeClass("loading");
      $scope.isEmailSended = true;
      $scope.$applyAsync();
    }, 650);
  }


  $scope.getPosition = function() {
  var geocoder = new google.maps.Geocoder;
  console.log(navigator);
  $scope.isGetPositionLoading = true;
  $scope.isGetPositionTriggered = true;
  // Try HTML5 gecolocation.
  window.setTimeout(function() {
    $scope.data.zip = "75004";
    $scope.isGetPositionLoading = false;
    $scope.$applyAsync();
  }, 650);
  // if (navigator.geolocation) {
    // navigator.geolocation.getCurrentPosition(function(position) {
    //   var pos = {
    //     lat: position.coords.latitude,
    //     lng: position.coords.longitude
    //   };
    //   geocoder.geocode({'location': pos}, function(results, status) {
    //       if (status === google.maps.GeocoderStatus.OK) {
    //         if (results[1]) {
    //           console.log(results);
    //           var concat = "";
    //           for(var i = 0; i < results.length; i++){
    //             concat += results[i].formatted_address;
    //           }
    //           console.log($scope.data.zip);
    //           $scope.data.zip = extractZipCode(concat);
    //           $scope.$applyAsync();
    //           $scope.isGetPositionLoading = false;
    //         } else {
    //           console.log("No result found");
    //           $scope.data.zip = "75004";
    //           $scope.$applyAsync();
    //           $scope.isGetPositionLoading = false;
    //         }
    //       } else {
    //         console.log('Geocoder failed due to: ' + status);
    //         $scope.data.zip = "75004";
    //         $scope.$applyAsync();
    //         $scope.isGetPositionLoading = false;
    //       }
    //     });
    // }, function() {
    //   $scope.isGeolocDisabled = true;
    //   // $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
    //   //   $scope.zipCode = data.zip;
    //   //   $scope.$applyAsync();
    //   //   $scope.isGetPositionLoading = false;
    //   // });
    // });
  // }
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
    //console.log($scope.forms);
  });

  $scope.goTo = function ($event, number) {
    if (number <= $scope.maxStep)
    {
        $scope.step = number;
        updateBar();
        updateNav();
    }
  };

  $scope.setForm = function (form, i) {
    $scope.forms.push(form);
  }

  $scope.next = function () {
    //console.log($scope.data);
    console.log("formValid", $scope.forms[$scope.step - 1].$valid);

    if ($scope.step == $scope.totalStep) {
      $scope.endTime = moment(new Date());
      var duration = moment.duration($scope.endTime.diff($scope.startTime));
      console.log(duration.format("h:mm:ss"));
      $scope.duration = duration.format("h:mm:ss");
    }
    else if($scope.forms[$scope.step - 1].$valid) {
      // to remove for debugging if($scope.forms[$scope.step - 1].$valid)
      $scope.step++;
      $scope.$applyAsync();
      if ($scope.maxStep < $scope.step)
        $scope.maxStep++;
      if ($scope.maxStep == $scope.step) {
        $scope.isLastStepReached = true;

        console.log(012345)
        $scope.calculate();

        $timeout(function () {
          $scope.isLoadingFinished = true;
        }, 2500);
      }
      updateBar();
      updateNav();
      $timeout(function () {
        $scope.focusOnFirstInput();
      }, 250);
    }
  };

  $scope.focusOnFirstInput = function() {
    angular.element($("form[name='step" + $scope.step + "'] input:not([type='checkbox']):not([type='radio']):first-of-type")).focus();
  }

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
        $('.button[ng-validate]').click();
        $scope.focusOnFirstInput();
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
  $scope.slider_ticks = {
      minValue: 50,
      value: 50,
      options: {
          ceil: 80,
          floor: 30,
          showTicks: true,
          step: 35
      }
  };
  $scope.dateUpdate = function() {
    $scope.isEndOfLastJob = true;
  };


  $scope.calculate = function() {
    var isRsa;
    var apl, purse;
    var rsa = 535.17;
    var minRsa = 470;
    var purse = 0;
    var minus = 60;
    var maxApl = 240;
    var ratio = 1;

    console.log(678910);

    var todayOld = moment().subtract(25, 'years');

    console.log("todayOld", todayOld);

    if (!$scope.data.isAlone)
     {
     	rsa = 802.76;
      console.log("isAlone", $scope.data.isAlone);
     }

    if (todayOld >= $scope.data.birthday || $scope.data.isPregnant === true) {
    	isRsa = true;
      console.log("isRsa", isRsa);
    } else {
    	isRsa = false;
    }

    if ($scope.data.isHelpedStudent) {
    	purse = 40;
      console.log("isHelpedStudent", true);
    }

    if ($scope.data.money > minRsa / 0.38) {
    	isRsa = false;
      console.log("calcRsa", true);
    }

    if ($scope.data.isColloc) {
    	minus = 90;
    	maxApl = 110;
      console.log("isColloc", true);
    }

    if ($scope.data.isWithFurniture) {
    	ratio = 0.7;
      console.log("isWithFurniture", true);
    }

    apl = $scope.data.rentPrice - minus * ratio;

    if (apl > maxApl) {
    	apl = maxApl;
    }

    apl += purse;

    console.log("APL FINAL", apl);


    if (isRsa) {
    	rsa -= apl;
    	if (rsa < minRsa) {
    		rsa = minRsa;
    	}
    }
    else {
      rsa = 0;
    }

    if (apl < 0) {
        apl = 0;
    }

    console.log("RSA FINAL", rsa);

    $scope.finalResult.rsa = rsa;
    $scope.finalResult.apl = apl;

    $scope.$applyAsync();

  };



}).directive('watchChange', function() {
    return {
        scope: {
            onchange: '&watchChange'
        },
        link: function(scope, element, attrs) {
            element.on('input', function() {
                console.log(1);
                scope.onchange();
            });
        }
    };
});
