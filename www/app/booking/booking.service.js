(function () {
    'use strict';

    angular
        .module('pcb.booking')
        .factory('Booking', Booking);

    Booking.$inject = ['$q', '$http'];

    function Booking($q, $http) {

        var apiURL = 'http://local.drupal8:8888/v1/booking/11111111111/day/2015-05-18';
        var config = {};

        var booking = {
            getAll: getAll
        };

        return booking;

        ////////////////////////////////////////////////////////////////////////



        function getAll () {
            return httpRequest().then(function (data) {
                return data;
            });
        };

        function httpRequest () {
            return $http.get(apiURL, config)
                .then(httpRequestSuccess, httpRequestError);
        };

        function httpRequestSuccess (response) {
            return response.data;
        };

        function httpRequestError () {
            return FALSE;
        };

    }

})();