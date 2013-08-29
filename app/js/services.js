'use strict';

angular.
  module('ticketyTackety.services', []).
  service('fb', [
    'angularFireCollection',
    '$cookies',
    function(angularFireCollection, $cookies) {
      this.firebaseRef = new Firebase("https://tickety.firebaseio.com/games");
      $cookies.userId = $cookies.userId || Math.uuid(16);
      
      this.startGame = function() {
        this.gamesRef = this.firebaseRef.child('/games');
        this.games = angularFireCollection(this.gamesRef);
        this.games.push({players: [0]});
        
        console.log(this.gamesRef.limit(1).endAt());
      };

      // this.userRef = this.firebaseRef.child('/player/' + $cookies.userId);
      // console.log(this.userRef);
      // this.userInfo = angularFireCollection(this.userRef);
      // console.log(this.userInfo);
      // this.userInfo.add({ player: $cookies.userId })
    }
  ]);
