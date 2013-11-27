'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/sponsor', {templateUrl: 'partials/sponsor.html', controller: 'SponsorController'});
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'});
    $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AboutController'});
    $routeProvider.when('/conduct', {templateUrl: 'partials/conduct.html', controller: 'ConductController'});
    $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactController'});
    $routeProvider.when('/devfest', {templateUrl: 'partials/devfest.html', controller: 'DevfestController'});
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
