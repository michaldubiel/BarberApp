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
    }

    ActivitiesAddController.$inject = ['$scope', '$location', 'Activity'];

    function ActivitiesAddController($scope, $location, Activity) {
        $scope.activity = new Activity();
        $scope.add = function() {
            $scope.activity.$save(function() {
                $location.path('/');
            });
        };
    }

    ActivitiesEditController.$inject = ['$scope', '$routeParams', '$location', 'Activity'];

    function ActivitiesEditController($scope, $routeParams, $location, Activity) {
        $scope.activity = Activity.get({ id: $routeParams.id });
        $scope.edit = function() {
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