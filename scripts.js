


//In your HTML, include a ‘generate’ button, that when clicked, will generate a 
//new
// div container in the index.html. The new div should include some text that
// reads “Line #” and then a number specific to the number of times the generate
// button has been clicked. 


$(document).ready(function(){

	//creates a new div when button is clicked 
$( ".button" ).click(function() {
    $(this).next().toggle();
});

//counter for clicking generate new div button DOES NOT WORK
var counter = 0;

$("#update").click(function() {
   counter++;
});

// The Change Color button should change the
// background color of the div container relative to the Change Color button that
// was clicked. For the purpose of this challenge, you can add extra
// functionality that when clicked again, it can change the color back to the
// original, BUT THIS IS NOT REQUIRED. 


//this does not work
    $("#bgcolor").click(function() {
    $("#name").animate({
        backgroundColor: '#8B008B'
    }, "fast");
})

//The Remove Button should remove the parent Div container of the button that
//was clicked, removing the entire div, which  contains the text, and the two
//additional buttons (the Change Color and Remove  buttons).

//this does not work
$( "button" ).click(function() {
  $( "div" ).remove();
});


});