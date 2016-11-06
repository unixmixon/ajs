;(function(){
  'use strict';

  angular.module('MenuApp')
    .controller('ItemsListController', ItemsListController);

  function ItemsListController(items){
    var itemsList = this;

    itemsList.items = items.data.menu_items;
    itemsList.currentCategory = items.data.category.name;
  }
})();
