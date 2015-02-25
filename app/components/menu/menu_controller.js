define(['jquery', 'app'], function ($, app) {
    "use strict";
    app.controller('menu_controller', ['$scope', '$state', function ($scope, $state) {
        $scope.$state = $state;
    }]);
});