define(['app'
    ],
    function (app) {
        "use strict";

        app.config(['$stateProvider', '$urlRouterProvider', 'viewResolverProvider',
            function ($stateProvider, $urlRouterProvider, viewResolverProvider) {
                $urlRouterProvider.otherwise("/");
                $stateProvider

                    .state('main', {
                        views: {
                            "": viewResolverProvider.resolve('pages', 'main'),
                            "header@main": viewResolverProvider.resolve('header', 'header'),
                            "footer@main": viewResolverProvider.resolve('footer', 'footer'),
                            "menu@main": viewResolverProvider.resolve('menu', 'menu')
                        }
                    })
                    .state('main.home', {
                        url: '/',
                        views: {
                            "": viewResolverProvider.resolve('pages', 'home')
                        }
                    });
            }
        ]);

        app.run(['$rootScope', '$state', '$window', '$timeout',
            function ($rootScope, $state, $window, $timeout) {

                $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

                });

                $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                    $rootScope.global.title = "Angular Boilerplate";
                });

            }]);
    });