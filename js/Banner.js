/**
 * Created by sjale on 1/21/2016.
 */
//desiInfo.directive('slider', function($timeout) {
//    console.log("shru");
//    var timer;
//    return {
//        restrict: 'AE',
//        replace: true,
//        scope: {
//            images: '='
//        },
//        templateUrl: "../Views/Banner.html",
//        link: function (scope, elem, attrs) {
//        }
//    };
//
//        var sliderFunc = function() {
//            timer = $timeout(function() {
//                scope.next();
//                timer = $timeout(sliderFunc, 1000);
//            }, 1000);
//        };
//        sliderFunc();
//
//        scope.$on('$destroy', function() {
//            $timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
//        });
//
//
//});

//desiInfo.controller('sliderController', function($scope) {
//    $scope.images = [{
//        src: 'Express-Raja-Nizam-Rights.jpg',
//        title: 'Pic 1'
//    }, {
//        src: 'maxresdefault.jpg',
//        title: 'Pic 2'
//    }, {
//        src: 'images/Official..-Jr-NTR-Sukumars-Nannaku-Prematho-Songs-Track-List-Released.jpg',
//        title: 'Pic 3'
//    }];
//});
desiInfo.controller('CarouselDemoCtrl',["$scope", function($scope) {
    $scope.myInterval = 1000;
    $scope.slides = [{
        image: '../images/displaypage-background-image-1440x960-69.jpg'
    }, {
        image: '../images/Express-Raja-Nizam-Rights.jpg'
    }, {
        image: 'http://lorempixel.com/400/200/sports'
    },
        {
            image: 'http://lorempixel.com/400/200/people'
        }];
}]);

//desiInfo.directive("carouselDir",function(){
//    return{
//        restrict:'EA',
//        templateUrl:"../Views/Banner.html"
//
//    };
//});