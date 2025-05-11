$(function(){
$("#draggable").draggable();

});


// dropable
$( function() {
  $( "#draggable1" ).draggable();
  $( "#droppable" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html( "Dropped!" );
    }
  });
} );
// accordian
$( function() {
  $( "#accordion" ).accordion();
} );

// autocom
$( function() {
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Aroung",
    "Asp",
    "BASIC",
    "Bangladesh",
    "Black",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $( "#tags" ).autocomplete({
    source: availableTags
  });
} );

// button
$( function() {
  $( ".widget input[type=submit], .widget a, .widget button" ).button();
  $( "button, input, a" ).on( "click", function( event ) {
    event.preventDefault();
  } );
} );

// menu
$( function() {
  $( "#menu" ).menu();
} );

// slider
$( function() {
  $( "#slider" ).slider();
} );


// tooltip
$( function() {
  $( document ).tooltip();
} );

// checkbox radio

$( function() {
  $( "input" ).checkboxradio();
} );


// color animation
$( function() {
  var state = true;
  $( "#button" ).on( "click", function() {
    if ( state ) {
      $( "#effect" ).animate({
        backgroundColor: "#aa0000",
        color: "#fff",
        width: 500
      }, 1000 );
    } else {
      $( "#effect" ).animate({
        backgroundColor: "#fff",
        color: "#000",
        width: 240
      }, 1000 );
    }
    state = !state;
  });
} );