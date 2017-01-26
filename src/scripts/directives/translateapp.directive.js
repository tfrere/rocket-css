(function() {

    angular.module('ngTranslateSelect', []).directive('ngTranslateLanguageSelect', function ($stateParams, LocaleService) { 'use strict';
        return {
            restrict: 'A',
            replace: true,
            template: ''+
            '<div class="select select-noimage">'+
                '<select class="uppercase" ng-init="currentLocaleDisplayName = currentLocaleFromUrl" ng-model="currentLocaleDisplayName"'+
                    'ng-options="localesDisplayName for localesDisplayName in localesDisplayNames"'+
                    'ng-change="changeLanguage(currentLocaleDisplayName)">'+
                    '<option value="" selected hidden />'+
                '</select>'+
            '</div>'+
            '',
            controller: function ($cookies, $translate, $scope, $timeout, $rootScope, $stateParams, $state) {

                // on init la lang depuis l'URL
                if($stateParams.lang == "en" || $stateParams.lang == "ru" || $stateParams.lang == "de")
                    LocaleService.setLocaleByDisplayName($stateParams.lang);
                else
                    LocaleService.setLocaleByDisplayName("fr");

                $timeout(function() {

                    if($stateParams.lang == "en" || $stateParams.lang == "ru" || $stateParams.lang == "de")
                        $scope.currentLocaleFromUrl = $stateParams.lang;
                    else
                        $scope.currentLocaleFromUrl = "fr";

                     // on set les variables de la directive
                    $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
                    $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
                    $scope.visible = $scope.localesDisplayNames &&
                    $scope.localesDisplayNames.length > 1;

                    // dès que ça change on update le service et l'url
                    $scope.changeLanguage = function (locale) {
                        console.log("UPDATED LOCALE from directive", locale);

                        $state.go($state.current.name, {lang:locale});
                    };

                });
            }
        };
    });

}.call(this));
