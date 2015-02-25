define(['angular', 'app'], function (angular, app) {
    "use strict";
    app.controller('home_controller', ['$scope', '$famous', function ($scope, $famous) {
        var Transform = $famous['famous/core/Transform'];
        //$scope.transform = Transform.multiply(Transform.translate(0, 0, 0), Transform.rotateY(0));
        //$scope.transform = Transform.rotateY(Math.PI);
    }]); 
});
