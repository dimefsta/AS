function openGoogleMaps() {
    // Replace the business name and address with your actual details
    var address = "ΑΦΟΙ ΣΠΗΛΙΟΠΟΥΛΟΙ E.B.E.E., Λεωφ. Αμφιθέας 144, Παλαιό Φάληρο 175 62";
    var googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(address);
    window.open(googleMapsUrl, '_blank');
}

function toggleLanguage() {
    const currentLanguage = document.documentElement.lang;
    const newLanguage = currentLanguage === 'el' ? 'en' : 'el';

    // Construct the filename based on the selected language
    const filename = `index_${newLanguage}.html`;

    // Load the new HTML file
    fetch(filename)
        .then(response => response.text())
        .then(html => {
            const newDocument = new DOMParser().parseFromString(html, 'text/html');
            document.documentElement.replaceWith(newDocument.documentElement);

            // Add event listener for the new language button
            const newLanguageButton = document.getElementById("languageButton");
            newLanguageButton.addEventListener("click", toggleLanguage);
        })
        .catch(error => console.error('Error loading HTML:', error));
}


document.getElementById("mapButton").addEventListener("click", openGoogleMaps);
