(function() {
    angular
        .module("myApp", ["ngAnimate", "720kb.fx"])
        .controller("mainCtrl", function($scope, $http, $timeout) {
            function getTime() {
                console.log("Getting time");
                function n(n) {
                    return n > 9 ? "" + n : "0" + n;
                }
                var d = new Date();
                $scope.hour = d.getHours();
                $scope.min = n(d.getMinutes());
                $scope.ampm = $scope.hour >= 12 ? "pm" : "am";
            }
            getTime(); //gitblock
            var timer = function() {
                getTime();
                $timeout(timer, 60000);
            };
            $timeout(timer, 60000);
            $http.get("https://favqs.com/api/qotd").then(function(response) {
                console.log(response);
                $scope.quote = response.data.quote.body;
                $scope.author = response.data.quote.author;
            });
        });
})();
/**
Weather
https://codepen.io/Ranjithkumar10/pen/MKbwQW?editors=1010
https://www.wunderground.com/weather/api/d/docs
http://api.wunderground.com/api/8e4fe888df4705c8/conditions/q/CA/San_Francisco.json + https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY

**/
