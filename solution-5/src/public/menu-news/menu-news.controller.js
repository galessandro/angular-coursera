(function () {
"use strict";

angular.module('public')
.controller('MenuNewsController', MenuNewsController);

MenuNewsController.$inject = ['MenuService', 'MyInfoService'];
function MenuNewsController(MenuService, MyInfoService) {
  var $ctrl = this;
  $ctrl.info = {};

  $ctrl.submit = function() {
      MenuService.getMenuItem($ctrl.info.favorite)
        .then(function(response) {
          $ctrl.invalidFavorite = false;
          $ctrl.submitted = true;
          MyInfoService.setInfo($ctrl.info);
        })
        .catch(function() {
          $ctrl.invalidFavorite = true;
        });


    }

    $ctrl.validateFavorite = function() {
      MenuService.getMenuItem($ctrl.info.favorite)
        .then(function () {
          $ctrl.invalidFavorite = false;
        })
        .catch(function() {
          $ctrl.invalidFavorite = true;
        });
    }

  };


})();
