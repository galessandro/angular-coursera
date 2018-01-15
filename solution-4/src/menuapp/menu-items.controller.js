(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemsController', MenuItemsController);


MenuItemsController.$inject = ['$stateParams', 'items'];
function MenuItemsController($stateParams, items) {	
  var catlist = this;
  var itemList = [];
  itemList = items.data.menu_items;
  catlist.items = itemList;
  catlist.name = items.data.category.name;
}


})();
