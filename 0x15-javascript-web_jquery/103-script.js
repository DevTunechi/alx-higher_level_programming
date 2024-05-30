$(document).ready(function() {
    function fetchTranslation() {
        // Get the value of the input field with id "language_code"
        const langCode = $('#language_code').val().trim();
        
        if (langCode) {
            // Fetch the translation of "Hello" based on the language code
            $.get(`https://www.fourtonfish.com/hellosalut/hello/?lang=${langCode}`, function(data) {
                // Update the text of the <div> with id "hello" with the translation
                $('#hello').text(data.hello);
            });
        }
    }
    
    // Bind the click event to the button with id "btn_translate"
    $('#btn_translate').click(function() {
        fetchTranslation();
    });

    // Bind the keypress event to the input field with id "language_code"
    $('#language_code').keypress(function(event) {
        if (event.which === 13) {  // Check if the Enter key is pressed
            fetchTranslation();
        }
    });
});
