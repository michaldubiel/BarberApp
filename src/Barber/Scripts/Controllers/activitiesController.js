(function () {
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
        $scope.test = function(date) {
            return "value";
        };
    }

    ActivitiesAddController.$inject = ['$scope', '$location', '$timeout', 'Activity', 'Employee'];

    function ActivitiesAddController($scope, $location, $timeout, Activity, Employee) {
        $scope.activity = new Activity();
        $scope.time = null;
        $scope.error = null;
        $scope.employees = Employee.query();

        $scope.add = function () {
            this.activity.Date.setUTCHours($scope.time.split(':')[0], $scope.time.split(':')[1]);
            $scope.activity.$save(function (data) {
                if (data.ErrorCode == "101") {
                    $scope.error = "Validation error. Error: " + data.ErrorCode;
                    $timeout(function() {
                        $scope.error = null;
                    }, 5000);
                    $scope.activity = $scope.activity;
                }
                $location.path('/activities/list');
            });
        };
    }

    ActivitiesEditController.$inject = ['$scope', '$routeParams', '$location', 'Activity', 'Employee'];

    function ActivitiesEditController($scope, $routeParams, $location, Activity, Employee) {
        $scope.activity = Activity.get({ id: $routeParams.id }, function (data) {
            $scope.time = moment($scope.activity.Date).format("HH:mm");
            $scope.activity.Date = data.Date.replace(/T.*/, "");
            $scope.activity.Date = Date.parse($scope.activity.Date);
            $scope.activity.Date = new Date($scope.activity.Date);
        });

        $scope.employees = Employee.query();
        $scope.edit = function () {
            this.activity.Date.setUTCHours($scope.time.split(':')[0], $scope.time.split(':')[1]);
            $scope.activity.$update(function () {
                $location.path('/activities/list');
            });
        };   
    }

    ActivitiesDeleteController.$inject = ['$scope', '$routeParams', '$location', 'Activity'];

    function ActivitiesDeleteController($scope, $routeParams, $location, Activity) {
        $scope.activity = Activity.get({ id: $routeParams.id });
        $scope.remove = function() {
            $scope.activity.$remove({ id: $scope.activity.Id }, function() {
                $location.path('/activities/list');
            });
        };
    }

})();