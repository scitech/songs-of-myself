(function(){

var s;
window.Cf = {

  settings: {
    // topItem: $( ".menu-year" ),
    primaryContent: $( ".primary .stanza" ).add( ".primary .sec-heading" ).add( ".primary .title" ),
    secondaryPanel: $( ".secondary" ),
    thisPanel: null,
    oppositePanel: null,
    linkedLine: $( ".line" ).filter( "[data-ref]" )
  },

  init: function() {
    s = this.settings;
    this.bindUIActions();
  },

  bindUIActions: function() {
    s.linkedLine.on( "click", function() {
      
      //Toggle the panel layout
      //(later) lock this is an if statement
      Cf.togglePanels();
      Cf.scrollOpposite( $( this ) );
      //Cf.shout( $( this ) );
      //Load the appropriate content
      
    });
  },

  togglePanels: function() {
    // here's
    // nav example: s.topItem.nextAll().toggleClass( "hide" );
    if ( $( ".secondary" ).hasClass( "hide" ) ) {
      s.primaryContent.toggleClass( "panel-left" );
      s.secondaryPanel.toggleClass( "hide" );
    }
    

  },

  scrollOpposite: function(clickedLine) {
    
    
    // SET UP PANELS AND REFERENCE LINE
    var thisPanel, oppositePanel = null;
    if ( clickedLine.parents().hasClass( "primary" ) ) {
      thisPanel = ".primary";
      oppositePanel = ".secondary";
    }
    else {
      thisPanel = ".secondary";
      oppositePanel = ".primary";
    }
    var refLineNum = clickedLine.data( "ref" );
    var refLine = $( oppositePanel+" div[data-line-number="+refLineNum+"]" );
    var refOffsets = refLine.offset().top;


    // SCROLL THE OPPOSITE PANEL WHICH DEPENDS ON THE W
    if ( thisPanel == ".primary" ) {
      $( oppositePanel ).animate({
        // consider subtracting "oppositePanel's first child" instead of poem's first line
        scrollTop: refOffsets - $( oppositePanel+" div[data-line-number=1]" ).offset().top
      }, '400', 'swing');
    }
    else {
      $( "html,body" ).animate({
        scrollTop: refOffsets - $( oppositePanel+" div[data-line-number=1]" ).offset().top
      }, '400', 'swing');
    }

    refLine.addClass( 'highlight' );
    setTimeout(function() {
      refLine.removeClass( 'highlight' );
      }, 600);


    // DEBUG
    // console.log( "refLineNum is "+refLineNum );
    // console.log( "refLine is "+refLine.html() );
    // console.log( "opposite panel offsets are "+refOffsets );
    // console.log( "oppositePanel is "+oppositePanel );
  },

  shout: function(help) {
    alert( help.data( "ref" ) );
  }
};

})();