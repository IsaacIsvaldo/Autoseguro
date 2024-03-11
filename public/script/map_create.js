const map = L.map('mapid').setView([-8.8533562, 13.2140633], 15);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);
//create icon 
const icon = L.icon({
    iconUrl: "/assets/img/map-marker.jpg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
   

})
let marker;

//Create and add map

map.on('click', (event ) => {
   const lat = event.latlng.lat;
   const lng = event.latlng.lng;

   document.querySelector('[name=lat]').value= lat;
   document.querySelector('[name=lng]').value= lng;
   //Remover icon
   marker && map.removeLayer(marker)
   //add icon
   marker = L.marker([lat, lng], {icon})
   .addTo(map)
})
