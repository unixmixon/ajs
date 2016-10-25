;(function(){
  "use strict";
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective)
  .filter('highlight', SearchFilterFactory)
  .constant('APIUrl', 'https://davids-restaurant.herokuapp.com/menu_items.json');

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var narrowIt = this;

    //narrowIt.found = [];
    narrowIt.loading = false;

    narrowIt.getMatchedMenuItems = function(){
      narrowIt.found = [];
      if(narrowIt.searchTerm){
        narrowIt.loading = true;
        MenuSearchService.getMatchedMenuItems(narrowIt.searchTerm)
          .then(function(foundItems){
            narrowIt.found = foundItems;
            narrowIt.loading = false;
          });
      }
    };

    narrowIt.onRemove = function(index){
      narrowIt.found.splice(index, 1);
    };
  }

  MenuSearchService.$inject = ['$http', 'APIUrl'];
  function MenuSearchService($http, APIUrl){
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){
      return $http({url: APIUrl}).then(function (result) {
        var foundItems = result.data.menu_items.filter(function(c){
          return ~c.name.toLowerCase().indexOf(searchTerm.toLowerCase()) ||
                 ~c.description.toLowerCase().indexOf(searchTerm.toLowerCase());
        });

        return foundItems;
      });
    };
  }

  function FoundItemsDirective(){
    var ddo = {
      templateUrl: 'templates/foundItems.html',
      scope: {
        found: '<items',
        loading: '<',
        searchTerm: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'foundItems',
      bindToController: true
    };

    return ddo;
  }

  function FoundItemsDirectiveController(){
    var foundItems = this;

  }

  SearchFilterFactory.$inject = ['$sce'];
  function SearchFilterFactory($sce){
    return function(input, highlight){
      return $sce.trustAsHtml(
        input.replace(new RegExp(highlight, 'gi'), function(str) {
          return '<i class="text-success">'+str+'</i>'
        })
      );
    }
  }
})();
