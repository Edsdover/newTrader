'use strict';

angular.module('newTrader')
.factory('Profile', function($rootScope, $firebaseObject){

    function Profile(){
    }
    Profile.get = function(){
      var profile = $rootScope.fbUser.child('profile');
      return $firebaseObject(profile);
    };

    Profile.save = function(profile){
      $rootScope.afUser.profile = profile;
      return $rootScope.afUser.$save();
    };
    return Profile;
  });
