var app = angular.module('schedulemychild', ['ui.bootstrap', 'ui.router', 'ui.calendar']);


app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('home', {
            url: '/home',
            templateUrl: '/templates/home.html',
            controller: 'HomeCtrl'
        })

        $urlRouterProvider.otherwise('home');
    }]);


app.controller('HomeCtrl', [
    '$scope',
    '$state',
    function($scope, $state) {
    }]);
