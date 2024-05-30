// Use jQuery to add a click event handler to the <div> with id "red_header"
$(document).ready(function() {
    $('#red_header').click(function() {
        $('header').css('color', '#FF0000');
    });
});
