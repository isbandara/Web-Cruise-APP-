function cruiseAddToCart() {
   
    // Parameters
    var addToCartData = {
        "bookerFname": document.getElementById("firstName").value,
        "bookerLname": document.getElementById("lastName").value,
        "bookerNIC": document.getElementById("nic").value,
        "bookerPhone": document.getElementById("phone").value,
        "bookerEmail": document.getElementById("email").value,
        "bookingDate": document.getElementById("date").value,
        "bookingOfficerName": document.getElementById("officerName").value,
        "bookingOfficerNic": document.getElementById("onic").value,
        "bookingOfficerMail": document.getElementById("oMail").value,
        "cCruiseName": document.getElementById("cCruiseName").value,
        "bookingDate": document.getElementById("cdate").value,
        "cDepartureDestination": document.getElementById("departure").value,
        "cArrivalDestination": document.getElementById("arrival").value,
        "cDepartureDate": document.getElementById("departureDate").value,
        "cArrivalDate": document.getElementById("arrivalDate").value,
        "cDeck": parseInt(document.getElementById("deckNumber").value, 10),
        "cCabinClass": document.getElementById("cabinClass").value,
        "cPrice": parseFloat(document.getElementById("price").value),
        "cRating": parseInt(document.getElementById("rating").value, 10),
        "cDuration": parseFloat(document.getElementById("duration").value),
        "cCruiseProvider": document.getElementById("cruiseProvider").value,
        "cMealPreferences": document.getElementById("mealPreference").value,
        "cCabinSelection": document.getElementById("cabinSelection").value
        }
    };

    
    var apiUrl = 'https://enthusiastic-tick-school-uniform.cyclic.app/travel-agent/add-to-cart';

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(addToCartData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        alert("Data Add to cart Successfully.");
    })
    .catch(error => {
        alert("someting went wrong.");
    });
    cruiseAddToCart()
