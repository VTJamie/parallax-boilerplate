define(['jquery',
        'templates',
        'angular',
        'app',
        'router',
        'storage_service',
        'url_service',
        'footer/footer_controller',
        'header/header_controller',
        'menu/menu_controller',
        'pages/main_controller',
        'pages/home_controller'
    ],
    function ($) {
        "use strict";
        angular.bootstrap(document, ['App']);
    });