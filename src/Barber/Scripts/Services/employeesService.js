(function () {
    'use strict';
    angular
        .module('employeesServices', ['ngResource'])
        .factory('Employee', Employee);

    Employee.$inject = ['$resource'];

    function Employee($resource) {
        return $resource('/api/employees/:id');
    }

})();
