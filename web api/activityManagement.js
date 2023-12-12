// Add new Activity-------------------------------------------------------------------------------------------

function addActivity() {
    var requestData = {
        reservationType: 'Activity',
        aActivityName: document.getElementById("ActivityName").value,
        aDestination: document.getElementById("departureDestination").value,
        aDate: document.getElementById("aDate").value,
        aActivityType: document.getElementById("Activitytype").value,
        aRating: parseInt(document.getElementById("aRating").value, 10),
        aPrice: parseFloat(document.getElementById("aPrice").value),
        aParticipants:parseInt(document.getElementById("participants").value),
        aAgeOfParticipants: parseInt(document.getElementById("Agelimit").value),

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

function clearFormFields() {
    
    var form = document.getElementById("addCruiseForm");
    form.reset();
}

// Update Activity-------------------------------------------------------------------------------------------------

function updateActivity() {

    var updateData = {
        reservationType: 'Activity',
        aActivityName: document.getElementById("ActivityName").value,
        aDestination: document.getElementById("departureDestination").value,
        aDate: document.getElementById("aDate").value,
        aActivityType: document.getElementById("Activitytype").value,
        aRating: parseInt(document.getElementById("aRating").value, 10),
        aPrice: parseFloat(document.getElementById("aPrice").value),
        aParticipants:parseInt(document.getElementById("participants").value),
        aAgeOfParticipants: parseInt(document.getElementById("Agelimit").value),

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
        document.getElementById("updateActivityForm").reset();
    })
    .catch(error => {
        alert("Something went wrong!. ");
    });
}

// ---------------------bulk Upload---------------------------------------------------

function activityuploadCSV() {
   
    var fileInput = document.getElementById("activitycsvFile");

    if (fileInput.files.length > 0) {
      
        var formData = new FormData();

        formData.append("csvFile", fileInput.files[0]);

        var apiUrl = 'https://enthusiastic-tick-school-uniform.cyclic.app/backoffice/bulk-upload';


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
            
            fileInput.value = "";
        })
        .catch(error => {
            alert("Something went wrong.");
        });
    } else {
        alert("File not selected!. ");
    }
}

//----------------Search Activity-----------------------------------------------------------------------------------------------------

function searchActivity() {
    var searchQuery = document.getElementById("searchActivity").value;
    var apiUrl = 'https://enthusiastic-tick-school-uniform.cyclic.app/backoffice/view-cruises?' + encodeURIComponent(searchQuery);


    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Data received:', data);
            activityTable(data);
        })
        .catch(error => {
            console.error('Error:', error);
            alert("No such record.");
        });
}

function activityTable(cruiseData) {

    var tableBody = document.getElementById("activityTableBody2");

    tableBody.innerHTML = '';


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
      
     
        cell1.textContent = cruise.aActivityName;
        cell2.textContent = cruise.aDestination;
        cell3.textContent = cruise.aDate;
        cell4.textContent = cruise.aActivityType;
        cell5.textContent = cruise.aRating;
        cell6.textContent = cruise.aPrice;
        cell7.textContent = cruise.aParticipants;
        cell8.textContent = cruise.aAgeOfParticipants;
 
    });
} 
}

// ---------------------delete Cruise -------------------------------------------------------------------------------------------------------

activityName = document.getElementById("cruiseName").value


function deleteActivity(activityName) {

    fetch(`https://enthusiastic-tick-school-uniform.cyclic.app/backoffice/delete/${activityName}`, {
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
