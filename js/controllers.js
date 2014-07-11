angular.module('starter.controllers', [])

    .controller('DashCtrl', function($scope) {
    })

    .controller('MapCtrl', function($scope, $cordovaGeolocation) {
        var init = function () {

            // get coords
            $cordovaGeolocation.getCurrentPosition().then(function(position) {
                console.log("setting map");
                // http://angular-google-maps.org/use
                $scope.map = {
                    center: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    },
                    zoom: 8

                }, function(err) {
                    // error
                };
            });
        }

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
