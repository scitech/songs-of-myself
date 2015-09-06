(function(){

var j;

window.Nav = {

  settings: {
    primaryContent: $( ".stanza" ).add( ".sec-heading" ).add( ".title" ),
    secondaryPanel: $( ".secondary" ),
    topItem: $( ".year-nav .menu-year" ),
    yearCloseButton: $( ".secondary .menu-year" ),
    navToggle: $( ".year-nav" )
  },

  init: function() {
    j = this.settings;
    this.bindUIActions();
  },

  bindUIActions: function() {
    j.navToggle.on("click", function() {
      Nav.toggleMenu();
    });
    j.yearCloseButton.on("click", function() {
      Nav.closePanel();
    });
  },

  toggleMenu: function() {
    j.topItem.nextAll().toggleClass( "hide" );
  },

  closePanel: function() {
    j.primaryContent.removeClass( "panel-left" );
    j.secondaryPanel.toggleClass( "hide" );
  }

};

})();