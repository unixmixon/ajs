;(function(){
  'use strict';

  angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiUrl', 'https://davids-restaurant.herokuapp.com/');

  MenuDataService.$inject = ['$http', 'ApiUrl'];
  function MenuDataService($http, ApiUrl){
    var service = this;

    service.getAllCategories = function () {
      return $http({
        method: 'GET',
        url: ApiUrl + 'categories.json'
      });
    };

    service.getItemsForCategory = function (categoryShortName) {
      return $http({
        method: 'GET',
        url: ApiUrl + 'menu_items.json?category=' + categoryShortName
      });
    }
  }
})();
