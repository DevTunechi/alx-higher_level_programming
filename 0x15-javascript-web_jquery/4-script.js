// Use jQuery to add a click event handler to the <div> with id "toggle_header"
$(document).ready(function() {
    $('#toggle_header').click(function() {
        const headerElement = $('header');
        if (headerElement.hasClass('red')) {
            headerElement.removeClass('red').addClass('green');
        } else {
            headerElement.removeClass('green').addClass('red');
        }
    });
});
