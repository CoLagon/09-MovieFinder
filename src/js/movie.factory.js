(function() {
    'use strict';

    angular
        .module('movieApp')
        .factory('movieFactory', movieFactory);

    movieFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function movieFactory($http, $q) {
        var service = {
            fetchMovieData: fetchMovieData,
            movieDetailData: movieDetailData

        };
        return service;

        ////////////////

        function fetchMovieData(title) {
        	return $http.get('http://www.omdbapi.com/?s=' + title + '&r=json');
        }
        function movieDetailData(title) {
            return $http.get('http://www.omdbapi.com/?t=' + title + '&r=json');
        }
    }
})();