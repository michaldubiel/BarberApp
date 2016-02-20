(function () {
    'use strict';

    angular
        .module('barberApp')
        .controller('EmployeesListController', EmployeesListController)
        .controller('EmployeesAddController', EmployeesAddController)
        .controller('EmployeesEditController', EmployeesEditController)
        .controller('EmployeesDeleteController', EmployeesDeleteController);

    EmployeesListController.$inject = ['$scope', 'Employee'];

    function EmployeesListController($scope, Employees) {
        $scope.Employees = Employees.query();
        console.log($scope.Employees);
    }

    EmployeesAddController.$inject = ['$scope', '$location', 'Employee'];

    function EmployeesAddController($scope, $location, Employee) {
        $scope.employee = new Employee();
        $scope.add = function () {
            $scope.employee.$save(function () {
                $location.path('/');
            });
        };
    }

    EmployeesEditController.$inject = ['$scope', '$routeParams', '$location', 'Employee'];

    function EmployeesEditController($scope, $routeParams, $location, Employee) {
        $scope.employee = Employee.get({ id: $routeParams.id });
        $scope.edit = function () {
            $scope.employee.$save(function () {
                $location.path('/');
            });
        };
    }

    EmployeesDeleteController.$inject = ['$scope', '$routeParams', '$location', 'Employee'];

    function EmployeesDeleteController($scope, $routeParams, $location, Employee) {
        $scope.employee = Employee.get({ id: $routeParams.id });
        $scope.remove = function () {
            $scope.employee.$remove({ id: $scope.employee.Id }, function () {
                $location.path('/');
            });
        };
    }

})();