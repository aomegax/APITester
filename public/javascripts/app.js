/**
 * User: Francesco Cesareo
 * Email: cesareo.francesco@gmail.com
 */

var app = angular.module('apiTester', []);

app.controller("AppCtrl", ["$scope", "$http", function($scope, $http) {

    $scope.httpList = ["http://", "https://"];
    $scope.protocol = $scope.httpList[0];

    $scope.url = "";

    $scope.methodList = ["GET", "POST", "PUT", "DELETE", "OPTIONS"];
    $scope.method = $scope.methodList[0];

    $scope.contentTypeList = ["text/plain","application/json", "application/xml", "application/octet-stream", "application/soap+xml", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/tiff", "text/xml"];
    $scope.contentType = $scope.contentTypeList[0];

    $scope.input = "";

    $scope.successResponse = "";
    $scope.errorResponse = "";

    $scope.call = function() {

        g$scope.successResponse = "";
        $scope.errorResponse = "";

        if ($scope.url.trim().length > 0) {
            var request = {
                method: $scope.method,
                url: $scope.protocol + $scope.url,
                headers: {'Content-Type': $scope.contentType}
            };

            if ($scope.input.trim().length > 0) {
                request['data'] = JSON.stringify($scope.input);
            }

            $http(request)
                .then(function (e) {
                    $scope.successResponse = e;
                }, function (e) {
                    $scope.errorResponse = e;
                });
        }
    };

}]);
