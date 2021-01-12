console.log('It s alive');
var mymap = L.map('mapid').setView([51.505, -0.09], 13);
console.log('testing');
L.tileLayer('https://{s}.tile.openstreetmap.org/${z}/${x}/${y}.png',
{
	maxZoom: 5,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

