(function () {
'use strict';

angular.module('Item', [])
.component('item', {
  templateUrl: 'src/menuapp/templates/item-detail.template.html',
  bindings: {
    items: '<'
  }
});

})();
