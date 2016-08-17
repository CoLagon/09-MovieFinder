(function() {
    'use strict';

    angular
        .module('movieApp')
        .controller('detailController', detailController);

    detailController.$inject = ['movieFactory', '$stateParams'];

    /* @ngInject */
    function detailController(movieFactory, $stateParams) {
        var vm = this;
        vm.title = 'detailController';

        vm.shark = $stateParams.movietag;

        movieFactory.movieDetailData(vm.shark).then(function(response){
            vm.movieCamels = response.data;
        });
        activate();
        ////////////////

        function activate() {
        }
    }
})();