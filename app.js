function carte(data) {
  // choix de la ville

  const choix = Math.floor(Math.random() * data.length);
  // la ligne ci-dessus permet de générer un nombre entier (grace à floor)
  // entre 0 et la longueur du tableau exclu (grace à random * la taille du tab)
  // exemple : si length = 11 , alors 0<choix<11 , 11 est exclu

  const ville = [data[choix].gps_lat, data[choix].gps_lng];

  // Carte
  const map = L.map('map').setView(ville, 6);
  L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {maxZoom: 15}).addTo(map);

  // Epingle
  const marker = L.marker(ville);
  marker.addTo(map);
  marker.bindPopup(data[choix].name);
}

// Chargement BdD JSON
fetch('./cities.json').then(response => {
  return response.json();
}).then(bdd => {
  carte(bdd);
}).catch(error => {
  console.error('repompa');
  console.error(error);
});
