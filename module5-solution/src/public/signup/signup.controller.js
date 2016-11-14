(function () {
  'use strict';

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['MenuService', 'UserService'];
  function SignupController(MenuService, UserService){
    var signup = this;

    console.log(UserService);

    signup.complete = UserService.isUserSaved();

    signup.submit = function(){
      MenuService.getMenuItem(signup.user.short_name)
        .then(SuccessSignupHandler)
        .catch(ErrorSignupHandler);
    };

    function SuccessSignupHandler() {
      signup.dishError = false;
      UserService.saveUser(signup.user);
      signup.complete = true;
    }

    function ErrorSignupHandler() {
      signup.dishError = true;
    }
  }

})();
