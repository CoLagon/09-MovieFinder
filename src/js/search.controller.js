(function() {
    'use strict';

    angular
        .module('movieApp')
        .controller('searchController', searchController);

    searchController.$inject = ['movieFactory'];
    
    /* @ngInject */
    function searchController(movieFactory) {
        var vm = this;
        vm.title = 'searchController';

        vm.movieSearch = function(title) {
        	
            movieFactory.fetchMovieData(title).then(function(response) {
        		vm.results = response.data;
        	   
            });
        }

        activate();

        ////////////////

        function activate() {
        }
    }
})();