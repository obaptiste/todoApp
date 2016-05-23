(function(angular, undefined) {
'use strict';

angular.module('myAppApp.constants', [])

.constant('appConfig', {userRoles:['guest','user','admin']})

;
})(angular);