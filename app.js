// Creamos objeto Hotel

var hotel = {
    name: "",
    location: ""
}

// Pide al asuario el nombre del hotel.

hotel.name = prompt("Introduce el nombre del hotel");

var hotelName = document.getElementById('hotel-name')
hotelName.innerHTML = `Hotel ${hotel.name}`;

// Pide al usuario la localización del hotel.

hotel['location'] = prompt("Introduce la ubicación del hotel");

var hotelLocation = document.getElementById('hotel-location')
hotelLocation.innerHTML = hotel.location;

