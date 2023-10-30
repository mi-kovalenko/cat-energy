const map = L.map('map').setView([41.729310, 44.769338], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const customIcon = L.icon({
    iconUrl: '../img/map-pin.png',
    iconSize: [100, 100],
    // iconAnchor: [16, 32], // Anchor point of the icon
    // popupAnchor: [0, -32] // Popup anchor point
});

L.marker([41.729310, 44.769338], { icon: customIcon }).addTo(map);





