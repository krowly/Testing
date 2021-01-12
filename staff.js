console.log('It s alive');
console.log('testing');

var mymap = L.map('mapid').setView([43.000869,41.01136 ], 16);
console.log('testing');
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2NhcnMiLCJhIjoiY2tqdHN6bDJjOGNkeDJ6bGdudWhzZ3RweCJ9.VQnPLd6-0ZwToBHHYjMr8Q'
}).addTo(mymap);

var marker1 = L.marker([43.004869,41.07136]).addTo(mymap);
var marker2 = L.marker([43.004869,41.07236]).addTo(mymap);
var marker3 = L.marker([43.004869,41.07336]).addTo(mymap);
marker1.bindPopup("Hello,suckers!").openPopup();
marker2.bindPopup("Hello,assholes!").openPopup();
marker3.bindPopup("helluva,bitcher!").openPopup();
var mymap = L.map('mapid').setView([51.505, -0.09], 13);
