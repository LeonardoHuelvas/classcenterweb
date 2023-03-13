function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en', // Idioma de la página original
        includedLanguages: 'hi', // Idioma de destino (Hindi)
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL // Diseño del widget
    }, 'google_translate_element');
}