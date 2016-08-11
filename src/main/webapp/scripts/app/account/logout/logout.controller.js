'use strict';

angular.module('minimumjavaApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
