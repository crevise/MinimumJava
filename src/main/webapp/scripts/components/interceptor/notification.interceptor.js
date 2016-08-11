 'use strict';

angular.module('minimumjavaApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-minimumjavaApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-minimumjavaApp-params')});
                }
                return response;
            },
        };
    });