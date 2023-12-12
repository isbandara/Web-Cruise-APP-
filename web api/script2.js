// script10.js
function addToCart() {
    const packageName = document.querySelector('.package-card h3').innerText;
    const destination = document.querySelector('.package-card [data-destination]').innerText;
    const duration = document.querySelector('.package-card [data-duration]').innerText;
    const travelers = document.querySelector('.package-card [data-travelers]').innerText;
    const specialty = document.querySelector('.package-card [data-specialty]').innerText;

    const cartList = document.getElementById('cartList');
    const listItem = document.createElement('li');
    listItem.innerHTML = `${packageName} - Destination: ${destination}, Duration: ${duration}, Travelers: ${travelers}, Specialty: ${specialty}`;
    cartList.appendChild(listItem);
}

// ... (unchanged code)
