﻿(function () {
    'use strict';

    angular
        .module('barberApp')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$scope', '$location'];

    function NavbarController($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    }
})();
