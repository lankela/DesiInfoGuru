/**
 * Created by sjale on 1/13/2016.
 */
'use strict';
var headerFooterDirective = angular.module("headerFooterDirective",['ui.bootstrap']);

headerFooterDirective.directive("headerService",function(){
    return {
        restrict : 'EA',
        templateUrl :"../Views/common/header.html"
    };
});
headerFooterDirective.directive("navSection",function(){
    return {
        restrict : 'EA',
        templateUrl :"../Views/common/nav.html"
    };
});
headerFooterDirective.directive("footerSec",function(){
    return {
        restrict : 'EA',
        templateUrl :"../Views/common/footer.html"
    };
});
headerFooterDirective.directive("bannerSec",function(){
    return {
        restrict : 'EA',
        templateUrl :"../Views/Banner.html"
    };
});

headerFooterDirective.service('popupService',['$http','$q', function ($http,$q) {

    var getCityNames = [];
    console.log("var");
    var defered = $q.defer();
    console.log("world");

    $scope.getCityNames = function () {
        $http({
            method: 'GET',
            url: "../data/cities.json",
        }).success(function (data) {
            defered.resolve(data);
            console.log(data);
        }).error(function(){
            defered.reject("Error");
        });
        return defered.promise;
    }
}]);

headerFooterDirective.directive('myPop', function($compile, $templateCache, $q, $http) {
    console.log("gunu");
    var getTemplate = function(contentType) {
        var def = $q.defer();

        var template = '';
        switch (contentType) {
            case 'user':
                template = $templateCache.get("popup.html");
                if (typeof template === "undefined") {
                    $http.get("popup.html")
                        .success(function(data) {
                            $templateCache.put("popup.html", data);
                            def.resolve(data);
                        });
                }else {
                    def.resolve(template);
                }
                break;
        }
        return def.promise;
    }
    return {
        restrict: "EA",
        link: function(scope, element, attrs) {
            getTemplate("user").then(function(popOverContent) {
                var options = {
                    content: popOverContent,
                    placement: "bottom",
                    html: true,
                    date: scope.date
                };
                $(element).popover(options);
            });
        }
    };
});
