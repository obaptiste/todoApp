'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = [];

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });

      $scope.todos = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

      $scope.addTodo = function () {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
      };

      $scope.removeTodo = function (index) {
        $scope.todos.splice(index, 1);
      };
    }

    $onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
          this.socket.syncUpdates('thing', this.awesomeThings);
        });
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }
  }

  angular.module('myAppApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });
})();
