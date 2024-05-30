$(document).ready(function() {
    $('#add_item').click(function() {
        // Add a new <li> element to UL.my_list
        $('.my_list').append('<li>Item</li>');
    });

    $('#remove_item').click(function() {
        // Remove the last <li> element from UL.my_list
        $('.my_list li:last').remove();
    });

    $('#clear_list').click(function() {
        // Remove all <li> elements from UL.my_list
        $('.my_list').empty();
    });
});
