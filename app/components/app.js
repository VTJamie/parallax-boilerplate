define([
    'jquery',
    'angular',
    'angular-route',
    'angularSnap',
    'modal_resolver_module',
    'angular-bootstrap-ui',
    'angular-utils',
    'angular-file-upload',
    'view_resolver_module'//,
    //'famous-angular'
], function ($, angular) {
    "use strict";

    var app = angular.module('App', ['angularFileUpload', 'ui.router', 'viewResolver', 'modalResolver', 'ui.mask', 'ui.validate', 'ui.bootstrap', 'snap']);//, 'famous.angular']);
    app.config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$httpProvider',
        function ($controllerProvider, $compileProvider, $filterProvider, $provide, $httpProvider) {


            $provide.decorator('$sniffer', ['$delegate', function($sniffer) {
                var msie = parseInt((/msie (\d+)/.exec(angular.lowercase(navigator.userAgent)) || [])[1], 10);
                var _hasEvent = $sniffer.hasEvent;
                $sniffer.hasEvent = function(event) {
                    if (event === 'input' && msie === 10) {
                        return false;
                    }
                    _hasEvent.call(this, event);
                };
                return $sniffer;
            }]);
            // Let's keep the older references.
            app._controller = app.controller;
            app._service = app.service;
            app._factory = app.factory;
            app._value = app.value;
            app._directive = app.directive;
            app._filter = app.filter;
            // Provider-based controller.
            app.controller = function( name, constructor ) {

                $controllerProvider.register( name, constructor );
                return( this );

            };

            // Provider-based service.
            app.service = function( name, constructor ) {

                $provide.service( name, constructor );
                return( this );

            };

            // Provider-based service.
            app.filter = function( name, constructor ) {

                $filterProvider.register( name, constructor );
                return( this );

            };

            // Provider-based factory.
            app.factory = function( name, factory ) {

                $provide.factory( name, factory );
                return( this );

            };

            // Provider-based value.
            app.value = function( name, value ) {

                $provide.value( name, value );
                return( this );

            };

            // Provider-based directive.
            app.directive = function( name, factory ) {

                $compileProvider.directive( name, factory );
                return( this );

            };


            //initialize get if not there
            if (!$httpProvider.defaults.headers.get) {
                $httpProvider.defaults.headers.get = {};
            }
            $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
        }
    ]);
    app.run(['$rootScope', '$http', '$state', '$timeout', '$window', function($rootScope, $http, $state, $timeout, $window) {
        $rootScope.global = {};
    }]);
    return app;
});