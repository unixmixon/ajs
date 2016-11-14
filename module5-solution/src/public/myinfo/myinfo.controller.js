(function () {
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['info', 'ApiPath', 'UserService'];
  function MyInfoController(info, ApiPath, UserService) {
    var myInfo = this;

    myInfo.info = info;
    myInfo.basePath = ApiPath;
    myInfo.user = UserService.getUser();
  }
})();
