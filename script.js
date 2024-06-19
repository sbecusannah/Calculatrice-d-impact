function calculateImpact() {
    // Récupérer la quantité de câble réemployé en km
    var cableQuantity = document.getElementById('cableQuantity').value;

    // Facteurs d'impact environnemental par km de câble
    var co2PerKm = 1.8; // en tonnes de CO2
    var copperPerKm = 26; // en kg de cuivre
    var waterPerKm = 65; // en m3 d'eau
    var plasticPerKm = 50; // en kg de plastique

    // Calculer les impacts évités
    var co2Avoided = cableQuantity * co2PerKm;
    var copperAvoided = cableQuantity * copperPerKm;
    var waterAvoided = cableQuantity * waterPerKm;
    var plasticAvoided = cableQuantity * plasticPerKm;

    // Afficher les résultats
    document.getElementById('co2Result').innerText = 'CO2 évité : ' + co2Avoided.toFixed(2) + ' tonnes';
    document.getElementById('copperResult').innerText = 'Cuivre évité : ' + copperAvoided.toFixed(2) + ' kg';
    document.getElementById('waterResult').innerText = 'Eau évitée : ' + waterAvoided.toFixed(2) + ' m3';
    document.getElementById('plasticResult').innerText = 'Plastique évité : ' + plasticAvoided.toFixed(2) + ' kg';
}
