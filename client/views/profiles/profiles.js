'use strict';

angular.module('newTrader')
.controller('ProfileCtrl', function($scope, Profile){

  $scope.profile = Profile.get();

  $scope.save = function(profile){
    Profile.save(profile);
  };
});
