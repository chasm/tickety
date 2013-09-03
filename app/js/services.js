'use strict';

angular.
  module('TicketyTackety.services', []).
  service('fb', [
    'angularFireCollection',
    '$cookies',
    function(angularFireCollection, $cookies) {
      this.gamesRef = new Firebase("https://tickety.firebaseio.com/games");
      // $cookies.userId = $cookies.userId || Math.uuid(16);
      
      this.startGame = function() {
        this.games = angularFireCollection(this.gamesRef);
        this.games.push({ boards: ["         "] });
        this.gamesRef.limit(1).once('value', function(dataSnapshot) {
          var ref = dataSnapshot.child('5').ref();
          ref.transaction(function(data) { console.log(data.players.length); });
        });
      };

      // this.userRef = this.firebaseRef.child('/player/' + $cookies.userId);
      // console.log(this.userRef);
      // this.userInfo = angularFireCollection(this.userRef);
      // console.log(this.userInfo);
      // this.userInfo.add({ player: $cookies.userId })
    }
  ]);
