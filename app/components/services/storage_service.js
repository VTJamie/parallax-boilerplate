define(['jquery', 'angular', 'app'], function ($, angular, app) {
    "use strict";
    app.service('storageService', [function () {
        var StorageService = function () {
            return $.extend(this, {
                getLocal: function (name) {
                    var val = localStorage.getItem(window.location.pathname + name),
                        returnval = undefined;
                    if (val !== undefined && val !== "undefined" && val !== null) {
                        returnval = JSON.parse(val);
                    }
                    return returnval;
                },
                setLocal: function (name, value) {
                    localStorage.setItem(window.location.pathname + name, JSON.stringify(value));
                },
                removeLocal: function (name) {
                    localStorage.removeItem(window.location.pathname + name);
                },
                getSession: function (name) {
                    var val = sessionStorage.getItem(window.location.pathname + name),
                        returnval = undefined;

                    if (val !== undefined && val !== "undefined" && val !== null) {
                        returnval = JSON.parse(val);
                    }
                    return returnval;
                },
                setSession: function (name, value) {
                    sessionStorage.setItem(window.location.pathname + name, JSON.stringify(value));
                },
                removeSession: function (name) {
                    sessionStorage.removeItem(window.location.pathname + name);
                },
                clearSession: function () {
                    sessionStorage.clear();
                },
                clearLocalStorage: function () {
                    localStorage.clear();
                }
            });
        };

        return new StorageService();
    }]);
});