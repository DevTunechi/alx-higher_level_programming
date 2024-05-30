$(document).ready(function() {
    // Fetch the translation of "hello" from the URL
    $.get('https://hellosalut.stefanbohacek.dev/?lang=fr', function(data) {
        // Update the text of the <div> with id "hello" with the translation
        $('#hello').text(data.hello);
    });
});
