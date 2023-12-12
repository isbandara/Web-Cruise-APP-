
// Add new Package-------------------------------------------------------------------------------------------

function addPackages() {
    var requestData = {
        reservationType: 'Package',
        pPackageName: document.getElementById("Packagename").value,
        pDestination: document.getElementById("pDestination").value,
        pDuration: parseFloat(document.getElementById("pDuration").value),
        pNumTravelers: parseInt(document.getElementById("pNumber").value),
        pSpecialty: document.getElementById("pSpeciality").value,
        pRating: parseInt(document.getElementById("pRating").value, 10),
        pPrice: parseFloat(document.getElementById("pPrice").value)
 
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

    var form = document.getElementById("addPackageForm");
    form.reset();
}

// Update Package-------------------------------------------------------------------------------------------------

function updatePackage() {

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

function packageuploadCSV() {
   
    var fileInput = document.getElementById("packageuploadForm");

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
            //reset the file input
            fileInput.value = "";
        })
        .catch(error => {
            alert("Something went wrong.");
        });
    } else {
        alert("File not selected!. ");
    }
}

//----------------Search Packege-----------------------------------------------------------------------------------------------------

function searchPackage() {
    var searchQuery = document.getElementById("searchPackage").value;
    var apiUrl = 'https://enthusiastic-tick-school-uniform.cyclic.app/backoffice/view-cruises?' + encodeURIComponent(searchQuery);

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
            packageTable(data);
        })
        .catch(error => {
            console.error('Error:', error);
            alert("No such record.");
        });
}

function packageTable(cruiseData) {

    var tableBody = document.getElementById("packageTableBody3");
 
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

        //  add data to cell
     
        cell1.textContent = cruise.pPackageName;
        cell2.textContent = cruise.pDestination;
        cell3.textContent = cruise.pDuration;
        cell4.textContent = cruise.pNumTravelers;
        cell5.textContent = cruise.pSpecialty;
        cell6.textContent = cruise.pRating;
        cell7.textContent = cruise.pPrice;
    });
} 
}

// ---------------------delete Package -------------------------------------------------------------------------------------------------------

packegeName = document.getElementById("cruiseName").value
// Call the function by cruiseName


function deletePackege(packegeName) {

    fetch(`https://enthusiastic-tick-school-uniform.cyclic.app/backoffice/delete/${packegeName}`, {
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