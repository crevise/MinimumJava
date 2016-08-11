'use strict';

angular.module('minimumjavaApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


