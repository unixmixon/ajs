(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

function UserService() {
  var service = this,
      user;

  service.isUserSaved = function(){
    return !!user;
  };
  service.saveUser = function(savingUser){
    console.log(savingUser);
    user = savingUser;
  };
  service.getUser = function(){
    return user;
  }

}



})();
