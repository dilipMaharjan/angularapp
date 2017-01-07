var app = angular.module("app", ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/', {
                    templateUrl: 'partials/main.html',
                    controller: 'ServicesController'
                })
                .when('/about', {
                    templateUrl: 'partials/about.html'
                })
                .when('/services', {
                    templateUrl: 'partials/services.html',
                    controller: 'ServicesController'
                })
                .when('/contact', {
                    templateUrl: 'partials/contact.html',
                    controller: 'ContactController'
                })
                .otherwise('/');
    }])
        .controller('ServicesController', [
            '$scope', '$http', function ($scope, $http) {
                $http.get('services.json').then(function (response) {
                    $scope.services = response.data;
                });
            }
        ])
        .controller('ContactController', [
            '$scope', '$http', function ($scope, $http) {
                $http.get('locations.json').then(function (response) {
                    $scope.locations = response.data;
                });
            }
        ]);

