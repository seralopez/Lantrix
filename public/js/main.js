function moverComa(params) {
  let numero = '-3456789';
  let parte1 = numero.slice(0, -5);
  let parte2 = numero.slice(-5);
  let nuevoNumero = parte1 + ',' + parte2;
  return nuevoNumero
}

var map = L.map('map-template').setView([-34.678073075739846, -58.37118015124706], 12);

const tileURL = 'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png' 
const tileURL2 = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png';

const tile = L.tileLayer(tileURL);

// Socket Io
const socket = io.connect();

// Marker
const marker = L.marker([-34.70666724950609, -58.390996874247314]);
marker.bindPopup('Lanus');
map.addLayer(marker);

// Geolocation
map.locate({enableHighAccuracy: true})
map.on('locationfound', (e) => {
  const coords = [e.latlng.lat, e.latlng.lng];
  const newMarker = L.marker(coords);
  newMarker.bindPopup('Tu ubicacion');
  map.addLayer(newMarker);
  socket.emit('userCoordinates', e.latlng);
});

// socket new User connected
socket.on('newUserCoordinates', (coords) => {
  let msgRecibido = '>!0001305/06/24,18:35:51,-3467.83,-05837.05,04,3,V,002,174,000,039,00;ID=7773;#8016;*76<';
  let msg         = '>!0001305/06/24,18:37:05,-3467.81,-05837.06,00,0,A,000,000,000,000,00;ID=7773;#8016;*6E<';
  msgRecibido = msgRecibido.replace(">!00013","").split(',');
  const fecha    = msgRecibido[0];
  const hora     = msgRecibido[1];
  const latitud  = msgRecibido[2].replace(".","");
  const longitud = msgRecibido[3].replace(".","").replace("-0","-");
  /*0: "05/06/24"
1: "18:35:51"
2: "-3467.83"
3: "-05837.05"
4: "04"
5: "3"
6: "V"
7: "002"
8: "174"
9: "000"
10: "039"
11: "00;ID=7773;#8016;*76<" */
  
  const userIcon = L.icon({
    iconUrl: '/img/ghost.png',
    iconSize: [38, 42],
  })
  const newUserMarker = L.marker([latitud, longitud], {
    icon: userIcon 
  });
  newUserMarker.bindPopup('BUUU');
  map.addLayer(newUserMarker);
}); 

map.addLayer(tile);

