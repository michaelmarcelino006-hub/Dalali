// Get filter elements
const priceFilter = document.getElementById('priceFilter');
const bedroomsFilter = document.getElementById('bedroomsFilter');
const bathroomsFilter = document.getElementById('bathroomsFilter');
const propertyTypeFilter = document.getElementById('propertyTypeFilter');
const areaFilter = document.getElementById('areaFilter');
const resetBtn = document.getElementById('resetFilters');
const propertiesContainer = document.getElementById('propertiesContainer');
const resultsCount = document.getElementById('resultsCount');

// Add event listeners
priceFilter.addEventListener('change', filterProperties);
bedroomsFilter.addEventListener('change', filterProperties);
bathroomsFilter.addEventListener('change', filterProperties);
propertyTypeFilter.addEventListener('change', filterProperties);
areaFilter.addEventListener('change', filterProperties);
resetBtn.addEventListener('click', resetFilters);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    displayProperties(properties);
});

// Filter properties based on selected criteria
function filterProperties() {
    const selectedPrice = priceFilter.value;
    const selectedBedrooms = bedroomsFilter.value;
    const selectedBathrooms = bathroomsFilter.value;
    const selectedType = propertyTypeFilter.value;
    const selectedArea = areaFilter.value;

    const filtered = properties.filter(property => {
        // Price filter
        if (selectedPrice !== 'all') {
            if (selectedPrice === '0-100000' && property.price > 100000) return false;
            if (selectedPrice === '100000-300000' && (property.price < 100000 || property.price > 300000)) return false;
            if (selectedPrice === '300000-500000' && (property.price < 300000 || property.price > 500000)) return false;
            if (selectedPrice === '500000-1000000' && (property.price < 500000 || property.price > 1000000)) return false;
            if (selectedPrice === '1000000+' && property.price < 1000000) return false;
        }

        // Bedrooms filter
        if (selectedBedrooms !== 'all') {
            if (selectedBedrooms === '5+' && property.bedrooms < 5) return false;
            if (selectedBedrooms !== '5+' && property.bedrooms !== parseInt(selectedBedrooms)) return false;
        }

        // Bathrooms filter
        if (selectedBathrooms !== 'all') {
            if (selectedBathrooms === '4+' && property.bathrooms < 4) return false;
            if (selectedBathrooms !== '4+' && property.bathrooms !== parseInt(selectedBathrooms)) return false;
        }

        // Property type filter
        if (selectedType !== 'all' && property.type !== selectedType) return false;

        // Area filter
        if (selectedArea !== 'all' && property.area !== selectedArea) return false;

        return true;
    });

    displayProperties(filtered);
}

// Display properties on the page
function displayProperties(propertiesToDisplay) {
    propertiesContainer.innerHTML = '';
    resultsCount.textContent = propertiesToDisplay.length;

    if (propertiesToDisplay.length === 0) {
        propertiesContainer.innerHTML = '<div class="no-results">No properties match your criteria. Try adjusting your filters!</div>';
        return;
    }

    propertiesToDisplay.forEach(property => {
        const propertyCard = createPropertyCard(property);
        propertiesContainer.appendChild(propertyCard);
    });
}

// Create a property card element
function createPropertyCard(property) {
    const card = document.createElement('div');
    card.className = 'property-card';
    card.innerHTML = `
        <div class="property-image" data-type="${property.type}">
            ${property.image}
        </div>
        <div class="property-content">
            <h3 class="property-title">${property.title}</h3>
            <p class="property-location">📍 ${property.location}</p>
            <p class="property-price">$${property.price.toLocaleString()}</p>
            <div class="property-details">
                <div class="detail-item">
                    <span class="detail-label">Bedrooms</span>
                    <span class="detail-value">${property.bedrooms}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Bathrooms</span>
                    <span class="detail-value">${property.bathrooms}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Type</span>
                    <span class="detail-value">${property.type}</span>
                </div>
            </div>
            <p class="property-description">${property.description}</p>
            <button class="contact-btn" onclick="contactAboutProperty(${property.id})">Contact Agent</button>
        </div>
    `;
    return card;
}

// Handle contact button click
function contactAboutProperty(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    alert(`Thanks for your interest in: ${property.title}\n\nPrice: $${property.price.toLocaleString()}\n\nAn agent will contact you soon!`);
    // You can replace this with actual contact form or email integration
}

// Reset all filters
function resetFilters() {
    priceFilter.value = 'all';
    bedroomsFilter.value = 'all';
    bathroomsFilter.value = 'all';
    propertyTypeFilter.value = 'all';
    areaFilter.value = 'all';
    displayProperties(properties);
}
