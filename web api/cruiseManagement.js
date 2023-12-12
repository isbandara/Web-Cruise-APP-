
// Add new cruise-------------------------------------------------------------------------------------------

function addCruise() {
    var requestData = {
        reservationType: 'Cruise',
        cCruiseName: document.getElementById("cruiseName").value,
        cDepartureDestination: document.getElementById("departureDestination").value,
        cArrivalDestination: document.getElementById("arrivalDestination").value,
        cDepartureDate: document.getElementById("departureDate").value,
        cArrivalDate: document.getElementById("arrivalDate").value,
        cDeck: parseInt(document.getElementById("deckNumber").value, 10),
        cCabinClass: document.getElementById("cabinClass").value,
        cPrice: parseFloat(document.getElementById("price").value),
        cRating: parseInt(document.getElementById("rating").value, 10),
        cDuration: parseFloat(document.getElementById("duration").value),
        cCruiseProvider: document.getElementById("cruiseProvider").value,
        cMealPreferences: document.getElementById("mealPreference").value,
        cCabinSelection: document.getElementById("cabinSelection").value
    };

    fetch('https://enthusiastic-tick-school-uniform.cyclic.app/backoffice/single-upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
       
        alert("Data Saved Successfully.");

    })
    .catch(error => {

        alert("Something went wrong.");

    });
}

    // clear all input fields
function clearFormFields() {
    
        var form = document.getElementById("addCruiseForm");
        form.reset();
    }

// Update Cruise-------------------------------------------------------------------------------------------------

function updateCruise() {

    var updateData = {
        "reservationType": "Cruise",
        "cCruiseName": document.getElementById("cCruiseName").value,
        "cDepartureDestination": document.getElementById("departureDestination").value,
        "cArrivalDestination": document.getElementById("arrivalDestination").value,
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
  
    };

  
    var apiUrl = 'https://enthusiastic-tick-school-uniform.cyclic.app/backoffice/update-products';


    fetch(apiUrl, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        alert("Data Updated Successfully.");
        document.getElementById("updateCruiseForm").reset();
    })
    .catch(error => {
        alert("Something went wrong!. ");
    });
}
//----------------Search Cruise-----------------------------------------------------------------------------------------------------

function searchCruise() {
    var searchQuery = document.getElementById("cCruiseName").value;
    var apiUrl = 'https://enthusiastic-tick-school-uniform.cyclic.app/backoffice/single-upload?' + encodeURIComponent(searchQuery);

    console.log('API URL:', apiUrl);

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Data received:', data);
            cruiseTable(data);
        })
        .catch(error => {
            console.error('Error:', error);
            alert("No such record.");
        });
}



function cruiseTable(cruiseData) {

    var tableBody = document.getElementById("cruiseTableBody1");
    // Clear existing table data
    tableBody.innerHTML = '';

    // Loop table
    if (cruiseData && Array.isArray(cruiseData.cruises)) {
       
        cruiseData.cruises.forEach(cruise => {
        var row = tableBody.insertRow();
        var cell1= row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
        var cell10 = row.insertCell(9);
        var cell11 = row.insertCell(10);
        var cell12= row.insertCell(11);
        var cell13 = row.insertCell(12);
        var cell14= row.insertCell(13);

        //  add data to cell
     
        cell1.textContent = cruise.reservationType;
        cell2.textContent = cruise.cCruiseName;
        cell3.textContent = cruise.cDepartureDestination;
        cell4.textContent = cruise.cArrivalDestination;
        cell5.textContent = cruise.cDepartureDate;
        cell6.textContent = cruise.cArrivalDate;
        cell7.textContent = cruise.cDeck;
        cell8.textContent = cruise.cCabinClass;
        cell9.textContent = cruise.cPrice;
        cell10.textContent = cruise.cRating;
        cell11.textContent = cruise.cDuration;
        cell12.textContent = cruise.cCruiseProvider;
        cell13.textContent = cruise.cMealPreferences;
        cell14.textContent = cruise.cCabinSelection;
 
    });
} 
}

// ---------------------delete Cruise -------------------------------------------------------------------------------------------------------

cruiseName = document.getElementById("cruiseName").value
// Call the function by cruiseName


function deleteCruise(cruiseName) {

    fetch(`https://enthusiastic-tick-school-uniform.cyclic.app/backoffice/delete/${cruiseName}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        alert("Record deleted.");
    })
    .catch(error => {
        console.error('Error deleting cruise:', error);
    });
}

// ---------------------bulk Upload---------------------------------------------------

function cruiseuploadCSV() {
   
    var fileInput = document.getElementById("cruiseuploadcsvForm");

    if (fileInput.files.length > 0) {
      
        var formData = new FormData();

        formData.append("csvFile", fileInput.files[0]);

        var apiUrl = 'https://enthusiastic-tick-school-uniform.cyclic.app/backoffice/bulk-upload';

        //POST request--------------
        fetch(apiUrl, {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {

            alert("File Upload Successfully.");
            //reset the file input
            fileInput.value = "";
        })
        .catch(error => {
            alert("Something went wrong.");
        });
    } 
        else {
        alert("File not selected!. ");
        }
}

