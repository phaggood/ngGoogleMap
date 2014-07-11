angular.module('starter.controllers', [])



    .controller('DashCtrl', function($scope) {
    })

    //http://codepen.io/udomsak/pen/Llzsj
    .controller('MapCtrl', function($scope, $cordovaGeolocation) {
        console.log("init map");
        $scope.msg = "";
        $scope.coords = [0,0];
        $scope.mapVisible = true;

        var init = function () {
            var mapOptions = {};
            var map = new google.maps.Map(document.getElementById("map"),
                mapOptions);

            $scope.map = map;

            // get coords
            $cordovaGeolocation.getCurrentPosition().then(function(position) {
                // Position here: position.coords.latitude, position.coords.longitude
                console.log("setting map");
                $scope.msg = position.coords.latitude + ":" + position.coords.longitude;
                $scope.updateCenter(parseFloat(position.coords.latitude), parseFloat(position.coords.longitude));
            }, function(err) {
                $scope.msg = "unable to determine location";
            });
        };


        $scope.updateCenter = function(lat, lng) {
            /*var mapOptions = {
                center: new google.maps.LatLng(0,0),
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };*/
            $scope.map.setCenter(new google.maps.LatLng(lat, lng));
            $scope.map.setZoom(16);
            $scope.centerLat = lat;
            $scope.centerLng = lng;
            $scope.mapVisible =true;
        };


        init();
    })



    .controller('FriendsCtrl', function($scope, Friends) {
        $scope.friends = Friends.all();
    })

    .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
        $scope.friend = Friends.get($stateParams.friendId);
    })

    .controller('AccountCtrl', function($scope) {
    });
