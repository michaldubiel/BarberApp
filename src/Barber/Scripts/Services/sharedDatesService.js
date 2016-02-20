(function () {
    'use strict';
    angular
        .module('sharedDatesServices', ['ngResource'])
        .factory('sharedDate', sharedDate);

    sharedDate.$inject = ['$resource'];

    function sharedDate($resource) {

        var date = null;

        return {
            getDate: function () {
                return date;
            },
            setDate: function (value) {
                date = value;
            }
        };
    }

})();
