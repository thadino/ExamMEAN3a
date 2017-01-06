'use strict';


var app = angular.module('myApp', []);
app.controller ("MyController", function ($scope, $http) {


  $scope.getItems = function () {
    $http({method: 'GET', url: 'http://localhost:3000/get'})
        .success(function (data) {
          $scope.getItem = data;

        });
  }

  $scope.delete = function () {
    $http({method: 'DELETE', url: 'http://localhost:3000/delete'})
        .success(function (data) {
          $scope.deleteItem = data;


        });
  }

  $scope.getUpdate = function () {
    $http({method: 'PUT', url: 'http://localhost:3000/update'})
        .success(function (data) {
          $scope.updateItem = data;

        });
  }

  $scope.insert = function () {
    $http({method: 'POST', url: 'http://localhost:3000/create'})
        .success(function (data) {
          $scope.insertItem = data;

        });
  }
})
