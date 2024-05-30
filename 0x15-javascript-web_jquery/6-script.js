// Use jQuery to add a click event handler to the <div> with id "update_header"
$(document).ready(function() {
    $('#update_header').click(function() {
        // Update the text of the <header> element to "New Header!!!"
        $('header').text('New Header!!!');
    });
});
