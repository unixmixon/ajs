;(function(){
  'use strict';

  angular.module('MenuApp')
    .controller('CategoriesListController', CategoriesListController);

  function CategoriesListController(items){
    var categoriesList = this;

    categoriesList.items = items.data;
  }
})();
