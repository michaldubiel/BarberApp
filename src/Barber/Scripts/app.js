(function () {
    'use strict';

    config.$inject = ['$routeProvider', '$locationProvider'];

    angular.module('barberApp', [
        'ngRoute', 'ui.bootstrap', 'activitiesServices', 'employeesServices', 'sharedDatesServices'
    ]).config(config);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            //Activity
            .when('/', {
                templateUrl: '/Views/Activity/list.html',
                controller: 'ActivitiesListController'
            })
            .when('/activities/add', {
                templateUrl: '/Views/Activity/add.html',
                controller: 'ActivitiesAddController'
            })
            .when('/activities/edit/:id', {
                templateUrl: '/Views/Activity/edit.html',
                controller: 'ActivitiesEditController'
            })
            .when('/activities/delete/:id', {
                templateUrl: '/Views/Activity/delete.html',
                controller: 'ActivitiesDeleteController'
            })
            .when('/employees/add', {
                templateUrl: '/Views/Employee/add.html',
                controller: 'EmployeesAddController'
            })
            .when('/employees/edit/:id', {
                templateUrl: '/Views/Employee/edit.html',
                controller: 'EmployeesEditController'
            })
            .when('/employees/delete/:id', {
                templateUrl: '/Views/Employee/delete.html',
                controller: 'EmployeesDeleteController'
            })
            .otherwise({
            redirectTo: "/"
            });

        $locationProvider.html5Mode(true);
    }

})();