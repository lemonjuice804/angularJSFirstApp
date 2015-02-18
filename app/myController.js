//myController.js
'use strict';

// Declare app level module which depends on views, and components
var myController = angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.detail'
]);

myController.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'home/home.html',
            controller: 'homeController'
        }).
        when('/videos/:vid', {
            templateUrl: 'detail/detail.html',
            controller: 'detailController'
        }).
        otherwise({redirectTo: '/home'});
}]);
