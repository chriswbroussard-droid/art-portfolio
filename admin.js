// Admin panel functionality

// Authentication credentials (in production, this would be server-side)
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
};

// Check if user is logged in
let isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

// Initialize admin panel on page load
document.addEventListener('DOMContentLoaded', () => {
    if (isLoggedIn) {
        showAdminPanel();
    }
    
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Logout button
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('submit', handleLogout);
    }
    
    // Upload form
    const uploadForm = document.getElementById('upload-form');
    if (uploadForm) {
        uploadForm.addEventListener('submit', handleUpload);
    }
    
    // Image preview
    const imageInput = document.getElementById('art-image');
    if (imageInput) {
        imageInput.addEventListener('change', handleImagePreview);
    }
}

// Handle login
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('login-error');
    
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        sessionStorage.setItem('isLoggedIn', 'true');
        isLoggedIn = true;
        showAdminPanel();
    } else {
        errorMsg.textContent = 'Invalid username or password';
    }
}

// Handle logout
function handleLogout() {
    sessionStorage.removeItem('isLoggedIn');
    isLoggedIn = false;
    location.reload();
}

// Show admin panel
function showAdminPanel() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('admin-panel').style.display = 'block';
    loadArtList();
}

// Handle image preview
function handleImagePreview(e) {
    const file = e.target.files[0];
    const preview = document.getElementById('image-preview');
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            preview.innerHTML = `<img src="${event.target.result}" alt="Preview">`;
        };
        reader.readAsDataURL(file);
    }
}

// Handle art upload
function handleUpload(e) {
    e.preventDefault();
    
    const fileInput = document.getElementById('art-image');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Please select an image');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(event) {
        const artData = {
            image: event.target.result,
            title: document.getElementById('art-title').value,
            width: document.getElementById('art-width').value,
            height: document.getElementById('art-height').value,
            slot: parseInt(document.getElementById('art-slot').value),
            description: document.getElementById('art-description').value
        };
        
        // Validate slot number
        if (artData.slot < 0 || artData.slot > 49) {
            alert('Slot position must be between 0 and 49');
            return;
        }
        
        // Save to localStorage
        const artPieces = getArtPieces();
        artPieces[artData.slot] = artData;
        saveArtPieces(artPieces);
        
        // Reset form
        document.getElementById('upload-form').reset();
        document.getElementById('image-preview').innerHTML = '';
        
        // Refresh art list
        loadArtList();
        
        alert('Art piece uploaded successfully!');
    };
    
    reader.readAsDataURL(file);
}

// Load art list for management
function loadArtList() {
    const artList = document.getElementById('art-list');
    const artPieces = getArtPieces();
    
    if (Object.keys(artPieces).length === 0) {
        artList.innerHTML = '<p style="text-align: center; color: #666;">No art pieces uploaded yet.</p>';
        return;
    }
    
    artList.innerHTML = '';
    
    // Sort by slot number
    const sortedSlots = Object.keys(artPieces).sort((a, b) => parseInt(a) - parseInt(b));
    
    sortedSlots.forEach(slot => {
        const art = artPieces[slot];
        const artItem = document.createElement('div');
        artItem.className = 'art-item';
        artItem.innerHTML = `
            <img src="${art.image}" alt="${art.title}">
            <div class="art-item-info">
                <h4>${art.title}</h4>
                <p>Slot: ${slot} | Dimensions: ${art.width}" × ${art.height}"</p>
                ${art.description ? `<p>${art.description}</p>` : ''}
            </div>
            <div class="art-item-actions">
                <button onclick="deleteArtPiece(${slot})">Delete</button>
            </div>
        `;
        artList.appendChild(artItem);
    });
}

// Delete art piece
function deleteArtPiece(slot) {
    if (confirm('Are you sure you want to delete this art piece?')) {
        const artPieces = getArtPieces();
        delete artPieces[slot];
        saveArtPieces(artPieces);
        loadArtList();
    }
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

// Add event listener to logout button
document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
});
