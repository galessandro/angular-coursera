(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

  toBuy.buyItem = function (index, itemToBuy) {
    ShoppingListCheckOffService.removeItemToBuy(index);
    ShoppingListCheckOffService.addItemBought(itemToBuy);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.items = ShoppingListCheckOffService.getItemsBought();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of items to buy
  var itemsToBuy = [
    { name: "cookies", quantity: 10 },
    { name: "banana", quantity: 20 },
    { name: "orange", quantity: 30 },
    { name: "pineapple", quantity: 40 },
    { name: "apple", quantity: 50 }];

  // List of bought items
  var itemsBought = [];

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getItemsBought = function() {
    return itemsBought;
  }

  service.removeItemToBuy = function (itemIndex) {
    itemsToBuy.splice(itemIndex, 1);
  };

  service.addItemBought = function(item){
    itemsBought.push(item);
  };

}

})();