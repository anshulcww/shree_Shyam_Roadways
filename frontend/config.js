import './style.css';

var angular = require('angular');
var angular_ui_router = require('@uirouter/angularjs')
var app = angular.module('app', ['ui.router']);
require('./js/controllers.js');


app.config(function ($stateProvider, $urlRouterProvider,$locationProvider) {
    $urlRouterProvider.otherwise("/");
    // $locationProvider.html5Mode('true');
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: '/frontend/templates/home.html',
            // template:'<div>dsdsds</div>',
            controller: 'HomeCtrl'
        })
        .state('booking', {
            url: "/booking",
            controller: 'BookingCtrl',
            templateUrl: "./frontend/templates/booking.html"
        })
})