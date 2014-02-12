'use strict';

angular.module('storiesWorthLivingApp')
  .service('Db', [
    '$firebase',
    function Db($firebase) {
      var storiesRef = new Firebase('https://davidchang.firebaseio.com/stories');

      return {
        getConn : function(path) {
          return this.get(path).conn;
        },
        getRef : function(path) {
          return this.get(path).ref;
        },
        get : function(path) {
          if (!path) {
            return { ref : storiesRef, conn : $firebase(storiesRef) };
          }

          var ref = storiesRef.child(path);
          return { ref : ref, conn : $firebase(ref) };
        }
      };
    }
  ]
);
