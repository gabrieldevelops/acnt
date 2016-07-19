
function HeaderService() {

}

HeaderService.prototype = {
  getMenu: function () {
      return [
        {
            name: "Home",
            subMenus: [{
                name:"Foi"
            }]
        },
         {
             name: "Serviços",
             subMenus: [{
                 name: "Foi"
             }]
         },
          {
              name: "Contato",
              subMenus: [{
                  name: "Foi"
              }]
          }
      ];
  }
};
