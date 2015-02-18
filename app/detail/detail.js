//detail1.js
angular.module('myApp.detail', ['ngRoute'])
.controller('detailController',
    ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {
        $scope.vid = $routeParams.vid;
    }
]);