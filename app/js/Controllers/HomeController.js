/**
 * Created by sadman on 8/25/15.
 */

movieViewer.controller("HomeController",
    function HomeController ($scope, MovieService, $location, $timeout) {
        var promise;

        var sendMoviesToUser = function () {
            MovieService.getMovies($scope.keyword).then(loadMoviesToScope);
        },

        loadMoviesToScope = function (data) {
            $scope.movies = data;
        };

        $scope.search = function () {
            $timeout.cancel(promise);
            promise = $timeout(sendMoviesToUser, 500);
        };

        $scope.go = function(path) {
            $location.path(path);
        };
    }
);