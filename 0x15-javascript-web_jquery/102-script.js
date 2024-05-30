$(document).ready(function() {
    $('#btn_translate').click(function() {
        // Get the value of the input field with id "language_code"
        const langCode = $('#language_code').val();
        
        // Fetch the translation of "Hello" based on the language code
        $.get(`https://www.fourtonfish.com/hellosalut/hello/?lang=${langCode}`, function(data) {
            // Update the text of the <div> with id "hello" with the translation
            $('#hello').text(data.hello);
        });
    });
});
