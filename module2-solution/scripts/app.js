;(function(){
  "use strict";
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;

    toBuy.list = ShoppingListCheckOffService.getToBuy();
    console.log(toBuy.list);

    toBuy.boughtItem = function(index){
      ShoppingListCheckOffService.boughtItem(index);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var alreadyBought = this;

    alreadyBought.list = ShoppingListCheckOffService.getAlreadyBought();
  }

  function ShoppingListCheckOffService(){
    var service = this;

    var toBuy = [
      {name: "cookies", quantity: 10},
      {name: "candies", quantity: 3},
      {name: "pepsi", quantity: 5},
      {name: "chips", quantity: 10},
      {name: "water", quantity: 3}
    ];

    var alreadyBought = [];

    service.boughtItem = function(index){
      alreadyBought.push(toBuy.splice(index, 1)[0]);
    };

    service.getToBuy = function(){
      return toBuy;
    };

    service.getAlreadyBought = function(){
      return alreadyBought;
    };
  }
})();
