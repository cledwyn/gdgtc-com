'use strict';

/* Controllers */


angular.module('myApp.controllers', []).
  controller('HomeController', ['$scope', '$rootScope', function($scope,$rootScope) {
    $rootScope.rootMenuActiveHome = 'active';
    $rootScope.rootMenuActiveAbout = '';
    $rootScope.rootMenuActiveConduct = '';
    $rootScope.rootMenuActiveContact = '';
    $rootScope.rootMenuActiveSponsor = '';
	  $scope.menuActiveHome = 'active';
    $rootScope.rootMenuActiveDevfest = '';
    $scope.active = 'Home'
  }])
  .controller('SponsorController', ['$scope', '$rootScope', function($scope,$rootScope) {
    $rootScope.rootMenuActiveHome = '';
    $rootScope.rootMenuActiveAbout = '';
    $rootScope.rootMenuActiveConduct = '';
    $rootScope.rootMenuActiveContact = '';
    $rootScope.rootMenuActiveSponsor = 'active';
    $rootScope.rootMenuActiveDevfest = '';
  }])
  .controller('ContactController', ['$scope','$rootScope', function($scope,$rootScope) {
    $rootScope.rootMenuActiveHome = '';
    $rootScope.rootMenuActiveAbout = '';
    $rootScope.rootMenuActiveConduct = '';
    $rootScope.rootMenuActiveContact = 'active';
    $rootScope.rootMenuActiveSponsor = '';
    $rootScope.rootMenuActiveDevfest = '';
  }])
  .controller('ConductController', ['$scope','$rootScope', function($scope,$rootScope) {
    $rootScope.rootMenuActiveHome = '';
    $rootScope.rootMenuActiveAbout = '';
    $rootScope.rootMenuActiveConduct = 'active';
    $rootScope.rootMenuActiveContact = '';
    $rootScope.rootMenuActiveSponsor = '';
    $rootScope.rootMenuActiveDevfest = '';
  }])
  .controller('AboutController', ['$scope','$rootScope', function($scope,$rootScope) {
    $rootScope.rootMenuActiveHome = '';
    $rootScope.rootMenuActiveAbout = 'active';
    $rootScope.rootMenuActiveConduct = '';
    $rootScope.rootMenuActiveContact = '';
    $rootScope.rootMenuActiveSponsor = '';
    $rootScope.rootMenuActiveDevfest = '';
  }])
  .controller('DevfestController', ['$scope','$rootScope', function($scope,$rootScope) {
    $rootScope.rootMenuActiveHome = '';
    $rootScope.rootMenuActiveAbout = '';
    $rootScope.rootMenuActiveConduct = '';
    $rootScope.rootMenuActiveContact = '';
    $rootScope.rootMenuActiveSponsor = '';
    $rootScope.rootMenuActiveDevfest = 'active';
  }])
  .controller('MainController', ['$scope', '$rootScope', function($scope,$rootScope) {
  }])
  .controller('AppCtrl', ['$scope','$rootScope', function($scope,$rootScope) {
  }]);

