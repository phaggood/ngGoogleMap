angular.module('starter.controllers', [])

    .controller('DashCtrl', function($scope) {
    })

    .controller('MapCtrl', function($scope, $cordovaGeolocation) {
        $scope.msg = "";
        var init = function () {

            // get coords
            $cordovaGeolocation.getCurrentPosition().then(function(position) {
                // Position here: position.coords.latitude, position.coords.longitude
                console.log("setting map");
                $scope.msg = position.toString();
                // http://angular-google-maps.org/use
                $scope.map = {
                    center: {
                        latitude: parseFloat(position.coords.latitude),
                        longitude: parseFloat(position.coords.longitude)
                    },
                    zoom: 8
                }

            }, function(err) {
                // error
            });
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
