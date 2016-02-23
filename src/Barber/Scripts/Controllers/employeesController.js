(function () {
    'use strict';

    angular
        .module('barberApp')
        .controller('EmployeesListController', EmployeesListController)
        .controller('EmployeesAddController', EmployeesAddController)
        .controller('EmployeesEditController', EmployeesEditController)
        .controller('EmployeesDeleteController', EmployeesDeleteController)
        .controller('EmployeesDetailsController', EmployeesDetailsController);

    EmployeesListController.$inject = ['$scope', 'Employee'];

    function EmployeesListController($scope, Employees) {
        $scope.employees = Employees.query();
        console.log($scope.employees);
    }

    EmployeesAddController.$inject = ['$scope', '$location', 'Employee'];

    function EmployeesAddController($scope, $location, Employee) {
        $scope.employee = new Employee();
        $scope.add = function () {
            $scope.employee.$save(function () {
                $location.path('/employees/list');
            });
        };
    }

    EmployeesEditController.$inject = ['$scope', '$routeParams', '$location', 'Employee'];

    function EmployeesEditController($scope, $routeParams, $location, Employee) {
        $scope.employee = Employee.get({ id: $routeParams.id });
        $scope.edit = function () {
            $scope.employee.$update(function () {
                $location.path('/employees/list');
            });
        };
    }

    EmployeesDeleteController.$inject = ['$scope', '$routeParams', '$location', 'Employee'];

    function EmployeesDeleteController($scope, $routeParams, $location, Employee) {
        $scope.employee = Employee.get({ id: $routeParams.id });
        $scope.remove = function () {
            $scope.employee.$remove({ id: $scope.employee.Id }, function () {
                $location.path('/employees/list');
            });
        };
    }

    EmployeesDetailsController.$inject = ['$scope', '$routeParams', '$location', 'Employee', 'Activity'];

    function EmployeesDetailsController($scope, $routeParams, $location, Employee, Activity) {
        $scope.employee = Employee.get({ id: $routeParams.id });
    }

})();