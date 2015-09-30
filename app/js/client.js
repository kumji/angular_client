require('angular/angular');

var notesApp = angular.module('studentsApp', []);

notesApp.controller('studentsController', ['$scope', function($scope) {
  $scope.greeting = 'hello world';
}]);
