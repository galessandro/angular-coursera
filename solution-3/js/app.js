(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


function FoundItemDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}


function FoundItemDirectiveController() {
  var list = this;

}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrow = this;
  
  narrow.getMatchedMenuItems = function () {
    narrow.found = [];
    narrow.notFound = false;

    if(narrow.search === undefined || narrow.search === ""){
      narrow.notFound = true; 
      return;
    }

    var promise = MenuSearchService.getMatchedMenuItems(narrow.search);
  
    promise.then(function (response) {
      narrow.found = response;

      if (narrow.found.length === 0){
        narrow.notFound = true;
      } else {
        narrow.notFound = false;
      } 
    })
    .catch(function (error) {
      narrow.notFound = true;
      console.log(error);
    })
  };

  narrow.removeItem = function (itemIndex) {
    console.log("'this' is: ", this);
    MenuSearchService.removeItem(itemIndex);
  };
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  // List of shopping items
  var foundItems = [];


  service.getMatchedMenuItems = function (searchTerm) {
    console.log("searchTerm:", searchTerm);
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function(result){
      foundItems = result.data.menu_items.filter(function(value){
        return value.description.indexOf(searchTerm) !== -1;
      });

      return foundItems;
    });
  };


  service.removeItem = function (itemIndex) {
    foundItems.splice(itemIndex, 1);
  };
}
})();