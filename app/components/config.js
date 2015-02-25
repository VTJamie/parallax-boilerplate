/*global $, define, require, debug*/
/*jslint nomen: true */
require.config({
    paths: {
        'optional'                          :   '../libs/requirejs/optional',
        // Common JS Libs
        'jquery'                            :   '../libs/jquery/jquery',
        'angular'                           :   '../libs/angular/angular',
        'angular-route'                     :   '../libs/angular-ui-router/angular-ui-router',
        'angular-utils'                     :   '../libs/angular-ui-utils/ui-utils',
        'angular-bootstrap-ui'              :   '../libs/angular-bootstrap/ui-bootstrap-tpls',
        'angular-file-upload'               :   '../libs/angular-file-upload/angular-file-upload',
        'snap'                              :   '../libs/Snap.js/snap',
        'angularSnap'                       :   '../libs/angular-snap/angular-snap',
        'view_resolver_module'              :   'modules/view_resolver',
        'modal_resolver_module'             :   'modules/modal_resolver',
        'storage_service'                   :   'services/storage_service',
        'url_service'                       :   'services/url_service',

        'famous-angular'                    :   '../libs/famous-angular/famous-angular',
        'famous'                            :   '../libs/famous/famous-global',
        'famous-global-fix'                 :   '../libs/famous/famous-global-fix'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-bootstrap-ui': {
            deps: ['angular']
        },

        'angular-utils': {
            deps: ['angular']
        },

        'angular-file-upload': {
            deps: ['angular']
        },
        'angularSnap': {
            deps: ['angular', 'jquery', 'snap']
        },
        'famous-angular': {
            deps: ['angular', 'famous-global-fix']
        }
    },
    map: {
        '*': {
            'jQuery': 'jquery',
            'angularUiBootstrap': 'angular-bootstrap-ui'
        }
    }
});
require(['init']);
