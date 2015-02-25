define(['angular'], function() {

    angular.module('viewResolver', [])

    .provider('viewResolver', function ViewResolverProvider() {
        this.resolve = function(base, location, additionalload) {
            var root = "components";
            return {
                templateUrl: root + "/" + base + "/" + location + "_template.html",
                controller: location.replace("/", "_") + "_controller",
                resolve: $.extend({
                        asyncController: ['$q', function($q) {
                            var defer = $q.defer(),
                                controllerfile = base + "/" + location + "_controller";

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
            return new ViewResolverProvider();
        }];
    });

});
