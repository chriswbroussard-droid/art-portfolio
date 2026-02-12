// Gallery functionality for displaying art pieces

// Initialize the gallery on page load
document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
});

// Load art pieces from localStorage
function loadGallery() {
    const artPieces = getArtPieces();
    
    // Check if we're on the series page
    const seriesGallery = document.getElementById('series-gallery');
    if (seriesGallery) {
        loadSeriesGallery(artPieces);
        return;
    }
    
    // Load landing page gallery (0-8)
    for (let i = 0; i <= 8; i++) {
        const artSlot = document.getElementById(`art-${i}`);
        if (artSlot && artPieces[i]) {
            displayArtPiece(artSlot, artPieces[i]);
        }
    }
}

// Load series gallery (all 50 slots)
function loadSeriesGallery(artPieces) {
    const seriesGallery = document.getElementById('series-gallery');
    seriesGallery.innerHTML = '';
    
    for (let i = 0; i < 50; i++) {
        const artSlot = document.createElement('div');
        artSlot.className = 'art-slot';
        artSlot.id = `series-art-${i}`;
        
        if (artPieces[i]) {
            displayArtPiece(artSlot, artPieces[i]);
        } else {
            artSlot.innerHTML = `<div class="placeholder"><span>Slot ${i + 1}</span></div>`;
        }
        
        seriesGallery.appendChild(artSlot);
    }
}

// Display a single art piece in a slot
function displayArtPiece(slot, artData) {
    slot.innerHTML = '';
    
    const img = document.createElement('img');
    img.src = artData.image;
    img.alt = artData.title;
    slot.appendChild(img);
    
    const info = document.createElement('div');
    info.className = 'art-info';
    info.innerHTML = `
        <h3>${artData.title}</h3>
        <p>${artData.width}" × ${artData.height}"</p>
        ${artData.description ? `<p>${artData.description}</p>` : ''}
    `;
    slot.appendChild(info);
}

// Get all art pieces from localStorage
function getArtPieces() {
    const stored = localStorage.getItem('artPieces');
    return stored ? JSON.parse(stored) : {};
}

// Save art pieces to localStorage
function saveArtPieces(artPieces) {
    localStorage.setItem('artPieces', JSON.stringify(artPieces));
}
