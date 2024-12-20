// Sidebar Toggle for Mobile
const hamburgerIcon = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');
hamburgerIcon.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Search Functionality (You can extend it based on your requirements)
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    console.log('Search for:', query); // Replace with actual search functionality
    // You can send the query to a server or filter the products
});

// Cart Icon - Placeholder for cart functionality
const cartIcon = document.querySelector('.cart-icon');
cartIcon.addEventListener('click', () => {
    alert('View Cart clicked!');
});

// Newsletter form submission functionality
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from reloading the page
    const email = document.querySelector('.newsletter-form input').value;
    
    if (email) {
        alert('Thank you for subscribing! You will receive 10% off your first order.');
        document.querySelector('.newsletter-form input').value = ''; // Clear input field
    } else {
        alert('Please enter a valid email address.');
    }
});
