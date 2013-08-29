'use strict';

angular.
  module('ticketyTackety.services', []).
  service('fb', [
    'angularFireCollection',
    '$cookies',
    function(angularFireCollection, $cookies) {
      this.firebaseRef = new Firebase("https://tickety.firebaseio.com");
      $cookies.userId = $cookies.userId || Math.uuid(16);
      
      this.queueRef = this.firebaseRef.child('/queue');
      this.queue = angularFireCollection(this.queueRef);
      console.log(this.queue);
      
      // this.userRef = this.firebaseRef.child('/player/' + $cookies.userId);
      // console.log(this.userRef);
      // this.userInfo = angularFireCollection(this.userRef);
      // console.log(this.userInfo);
      // this.userInfo.add({ player: $cookies.userId })
    }
  ]);
