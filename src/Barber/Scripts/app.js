(function () {
    'use strict';

    config.$inject = ['$routeProvider', '$locationProvider'];

    angular.module('barberApp', [
        'ngRoute', 'activitiesServices'
    ]).config(config);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/Views/list.html',
                controller: 'ActivitiesListController'
            })
            .when('/activities/add', {
                templateUrl: '/Views/add.html',
                controller: 'ActivitiesAddController'
            })
            .when('/activities/edit/:id', {
                templateUrl: '/Views/edit.html',
                controller: 'ActivitiesEditController'
            })
            .when('/activities/delete/:id', {
                templateUrl: '/Views/delete.html',
                controller: 'ActivitiesDeleteController'
            });

        $locationProvider.html5Mode(true);
    }

})();