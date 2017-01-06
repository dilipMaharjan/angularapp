var app = angular.module("app", ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
            .when('/', {templateUrl: 'partials/main.html'})
            .when('/about', {templateUrl: 'partials/about.html'})
            .when('/services', {templateUrl: 'partials/services.html'})
            .when('/contact', {templateUrl: 'partials/contact.html'})
            .otherwise('/');
});

