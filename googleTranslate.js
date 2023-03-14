// Codifica el texto en hindi usando el conjunto de caracteres Unicode de hindi
var hindiText = '\u092A\u0930\u0940\u0915\u094D\u0937\u093E'; // "परीक्षा"

// Muestra el texto codificado en hindi
console.log(hindiText); // "परीक्षा"

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en', // Idioma de la página original
        includedLanguages: 'hi', // Idioma de destino (Hindi)
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL // Diseño del widget
    }, 'google_translate_element');
}

// Traduce cualquier enlace que se cargue después de que la página haya terminado de cargar
$(document).ready(function() {
    $('a').on('click', function() {
        // Obtén la URL del enlace y agrega el parámetro "hl=hi" para traducir al hindi
        var url = $(this).attr('href');
        if (url && url.indexOf('http') === 0 && url.indexOf('google.com') === -1) {
            $(this).attr('href', url + (url.indexOf('?') === -1 ? '?' : '&') + 'hl=hi');
        }
    });
});

$(document).ready(function() {
    $('.main-nav-dropdown__close-button').click(function() {
        $('#lista-interactiva').toggle();
    });
});


//Para que los links hereden la traducción al hindi agregue este código

var translateLinks = document.querySelectorAll('.google-translate-link');

translateLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        var originalUrl = link.href;
        var originLang = link.getAttribute('data-origin-lang');
        var translateLang = link.getAttribute('data-translate-lang');

        var translateUrl = 'https://translate.google.com/translate?sl=' + originLang + '&tl=' + translateLang + '&u=' + encodeURIComponent(originalUrl);

        window.open(translateUrl, '_blank');
    });
});