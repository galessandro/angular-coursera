(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoriesController', MainCategoriesController);

MainCategoriesController.$inject = ['categories'];
function MainCategoriesController(categories) {
  var list = this;
  list.categories = categories.data;  
};

})();
