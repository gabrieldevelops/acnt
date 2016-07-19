angular
  .module('app')
  .component('headerComponent', {
    templateUrl: 'app/components/header/Header.html',
    controller: Header,
    bindings: {
      todos: '='
    }
  });

/** @ngInject */
function Header(headerService) {
    this.HeaderService = headerService;
    this.init();
}

Header.prototype = {
    init: function () {
        this.menu = [];
        this.createMenu();
    },
    createMenu: function () {
        this.menu = this.HeaderService.getMenu();
    },
    openMenu: function ($mdOpenMenu, ev) {
        $mdOpenMenu(ev);
    }
};
