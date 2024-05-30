$(document).ready(function() {
    // Fetch the list of movies from the URL
    $.get('https://swapi-api.alx-tools.com/api/films/?format=json', function(data) {
        // Iterate over the results and append each movie title to the UL#list_movies
        data.results.forEach(function(movie) {
            const listItem = $('<li></li>').text(movie.title);
            $('#list_movies').append(listItem);
        });
    });
});
