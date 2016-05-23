'use strict';

angular.module('myAppApp', ['myAppApp.constants', 'ngCookies', 'ngResource', 'ngSanitize',
    'ngRoute', 'btford.socket-io', 'ui.bootstrap', 'ui.sortable'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });
