/**
 * Created by sjale on 1/13/2016.
 */



var desiInfo=angular.module("desiInfo",['headerFooterDirective','ngRoute','ngAnimate','ui.bootstrap']);
console.log("hello");

desiInfo.config([ '$routeProvider', function($routeProvider) {
    $routeProvider.when('/home',{
        templateUrl:'../Views/Banner.html',
        controller:'CarouselDemoCtrl'
    }).when('/signUp', {
        templateUrl : '../Views/signup.html',
        controller : 'signupCtrl'
    }).when('/register', {
            templateUrl : '../Views/register.html',
            controller : 'registerCtrl'
    }).otherwise('/',{
            templateUrl:'../Views/Banner.html',
            controller:'CarouselDemoCtrl'
        });
    //$locationProvider.html5Mode(true);

}]);