$(document).ready(function() {
    // Fetch the character name from the URL
    $.get('https://swapi-api.alx-tools.com/api/people/5/?format=json', function(data) {
        // Update the text of the <div> with id "character"
        $('#character').text(data.name);
    });
});
