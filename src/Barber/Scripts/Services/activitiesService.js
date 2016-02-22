(function () {
    'use strict';
    angular
        .module('activitiesServices', ['ngResource'])
        .factory('Activity', Activity);

    Activity.$inject = ['$resource'];

    function Activity($resource) {
        return $resource('/api/activities/:id', {}, {
            'update': { method: "PUT" }
        });
    }

})();
