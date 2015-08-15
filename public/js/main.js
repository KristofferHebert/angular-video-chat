angular.module('app', ['btford.socket-io'])
    .config(['$interpolateProvider', function($interpolateProvider) {

        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    }])
    .constant("APIKEY", "WZa1EHbSsqlvYPWusslJO54ywYQStCjDYrJfIL3VLLoi")
    .controller('MainCtrl', ['$scope', function($scope) {}])