// script.js
function addToCart() {
    const activityName = document.querySelector('.activity-card h3').innerText;
    const participants = document.getElementById('participants').value;
    const age = document.getElementById('age').value;

    const cartList = document.getElementById('cartList');
    const listItem = document.createElement('li');
    listItem.innerHTML = `${activityName} - Participants: ${participants}, Age: ${age}`;
    cartList.appendChild(listItem);
}

function checkout() {
    const cartList = document.getElementById('cartList');
    
    // Implement the checkout logic here (e.g., payment processing, order confirmation, etc.)
    
    // Clear the cart after checkout
    cartList.innerHTML = '<p>Your cart is empty.</p>';
}

// ... (unchanged code)
