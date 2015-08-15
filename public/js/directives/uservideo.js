angular.module('app')
    .directive('userVideos', ['APIKEY','$sce', function(APIKEY, $sce) {
        return {
            restrict: 'E',
            controller: function($scope) {

                var room = window.location.pathname;
                room = room.substr(1);

                var video = new Icecomm(APIKEY);
                $scope.peers = [];

                function localHandler(peer) {
                    function addStream() {
                        peer.stream = $sce.trustAsResourceUrl(peer.stream);
                        $scope.local = peer;
                    }
                    $scope.$apply(addStream);
                };

                function connectedHandler(peer) {
                    function addPeer() {
                        peer.stream = $sce.trustAsResourceUrl(peer.stream);
                        $scope.peers.push(peer);
                    }
                    $scope.$apply(addPeer);
                }

                function disconnectHandler(peer) {
                    function removePeer() {
                        $scope.peers.splice($scope.peers.indexOf(peer), 1);
                    }
                    $scope.$apply(removePeer);
                }

                video.connect(room, {audio:true});

                video.on('local', localHandler);
                video.on('connected', connectedHandler);
                video.on('disconnect', disconnectHandler);

            },
            templateUrl: "../template/uservideos.html"
        };
    }])
