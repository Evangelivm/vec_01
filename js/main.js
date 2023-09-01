// Function to create a vehicle card element
function createVehicleCard(vehicle, container) {
    // Create the <div class="vehicle-card"> element
    const vehicleCard = document.createElement('div');
    vehicleCard.classList.add('vehicle-card');

    // Create the internal content of the <div class="vehicle-card">
    const vehicleCardContent = `
        <div class="details">
            <div class="thumb-gallery">
                <img class="first" src="${vehicle.image1}" alt="Vehicle Image 1" />
                <img class="second" src="${vehicle.image2}" alt="Vehicle Image 2" />
            </div>
            <div class="info">
                <h3>${vehicle.brand}</h3>
                <p class= "model">${vehicle.model}</p>
                <div class="stars" data-stars="1">
                </div>
                <div class="price">
                    <span>Precio Negociable</span>
                    <h4>${vehicle.price}</h4>
                </div>
                <div class="ctas">
                    <a href="#" class="btn primary">Detalles</a>
                    <a href="#" class="btn secondary">Cotizar</a>
                    <div style="clear:both;"></div>
                </div>
                <div class="desc">
                    <p>${vehicle.description}</p>
                </div>
                <div class="specs">
                    <div class="spec mpg">
                        <span>Kilometraje</span>
                        <p>${vehicle.mileage} Km</p>
                    </div>
                    <div class="spec mpg">
                        <span>Año</span>
                        <p>${vehicle.year}</p>
                    </div>
                    <div class="spec mpg">
                        <span>Transmision</span>
                        <p>${vehicle.transmission}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Assign the content to the <div class="vehicle-card"> element
    vehicleCard.innerHTML = vehicleCardContent;

    // Add the <div class="vehicle-card"> element to the container
    container.appendChild(vehicleCard);
}
// Obtener una referencia al elemento contenedor donde se agregarán las tarjetas de vehículo
const vehicleContainer = document.querySelector('.wrapper');

// Realizar una solicitud de fetch para cargar el archivo JSON
fetch('vehiculos.json')
    .then(response => response.json())
    .then(data => {
        // Iterar sobre los elementos en 'data' y crear tarjetas para cada uno
        data.forEach(vehicle => {
            createVehicleCard(vehicle, vehicleContainer);
        });
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });