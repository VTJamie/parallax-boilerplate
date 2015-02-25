define(['angular'], function() {

    angular.module('modalResolver', [])

    .provider('modalResolver', function ModalResolverProvider() {
        this.resolve = function(location, additionalload) {
            var root = "components",
                base = "modal";

            return {
                templateUrl: root + "/" + base + "/" + location + "_template.html",
                controller: location.replace("/", "_") + "_modal",
                resolve: $.extend({
                        asyncController: ['$q', function($q) {
                            var defer = $q.defer(),
                                controllerfile = base + "/" + location + "_modal";

                            require([controllerfile], function() {
                                defer.resolve();
                            });
                            return defer.promise;
                        }]
                    },
                    additionalload)
            };
        };
        this.$get = [function viewResolverFactory() {
            return new ModalResolverProvider();
        }];
    });

});
