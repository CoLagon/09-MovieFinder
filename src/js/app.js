(function() {
    'use strict';

    angular
        .module('movieApp', [
            'ui.router'
        ]) .config(function($stateProvider, $urlRouterProvider){
        	$urlRouterProvider.otherwise('/search');

        	$stateProvider
        	.state('search', {
        		url:'/search',
        		templateUrl: '/search.html',
        		controller: 'searchController as search'
        	})
        	.state('details', {
        		url:'/details/:movietag',
        		templateUrl: '/detail.html',
        		controller: "detailController as detail"

        	});
        });
})();