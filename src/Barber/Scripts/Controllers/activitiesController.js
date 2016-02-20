﻿(function () {
    'use strict';

    angular
        .module('barberApp')
        .controller('ActivitiesListController', ActivitiesListController)
        .controller('ActivitiesAddController', ActivitiesAddController)
        .controller('ActivitiesEditController', ActivitiesEditController)
        .controller('ActivitiesDeleteController', ActivitiesDeleteController);

    ActivitiesListController.$inject = ['$scope', 'Activity'];

    function ActivitiesListController($scope, Activities) {
        $scope.activities = Activities.query();
    }

    ActivitiesAddController.$inject = ['$scope', '$location', 'Activity', 'Employee'];

    function ActivitiesAddController($scope, $location, Activity, Employee) {
        $scope.activity = new Activity();
        $scope.time = null;
        $scope.employees = Employee.query();
        console.log($scope.employees);

        $scope.add = function () {
            console.log($scope.activity);
            this.activity.Date.setHours(this.time.split(':')[0]);
            this.activity.Date.setMinutes(this.time.split(':')[0]);
            $scope.activity.$save(function() {
                $location.path('/');
            });
        };
    }

    ActivitiesEditController.$inject = ['$scope', '$routeParams', '$location', 'Activity', 'Employee'];

    function ActivitiesEditController($scope, $routeParams, $location, Activity, Employee) {
        $scope.activity = Activity.get({ id: $routeParams.id }, function(data) {
            $scope.time = data.Date.split('T')[1].slice(0, 5);
            $scope.activity.Date = data.Date.replace(/T.*/, "");
            $scope.activity.Date = Date.parse($scope.activity.Date);
            $scope.activity.Date = new Date($scope.activity.Date);
        });

        $scope.employees = Employee.query();
        $scope.edit = function () {
            console.log(this.activity.Date);
            this.activity.Date.setHours(this.time.split(':')[0]);
            this.activity.Date.setMinutes(this.time.split(':')[0]);
            console.log($scope.activity);
            $scope.activity.$save(function() {
                $location.path('/');
            });
        };
    }

    ActivitiesDeleteController.$inject = ['$scope', '$routeParams', '$location', 'Activity'];

    function ActivitiesDeleteController($scope, $routeParams, $location, Activity) {
        $scope.activity = Activity.get({ id: $routeParams.id });
        $scope.remove = function() {
            $scope.activity.$remove({ id: $scope.activity.Id }, function() {
                $location.path('/');
            });
        };
    }

})();