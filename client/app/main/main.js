'use strict';

angular.module('myAppApp')
  .config(function($routeProvider) {
    $routeProvider.when('/', {
      template: '<main></main>'
    });
  });
