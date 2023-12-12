// script-cruise.js

// Function to display cruises in the table
function displayCruises() {
    const tableBody = document.getElementById("cruiseTableBody");
   // tableBody.innerHTML = "";

    cruiseData.forEach(cruise => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${cruise.name}</td>
            <td>${cruise.departure}</td>
            <td>${cruise.arrival}</td>
            <!-- Add other columns as needed -->
            <td>
                <button onclick="openUpdateModal(${cruise.id})">Update</button>
                <button onclick="deleteCruise(${cruise.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to open the update modal
function openUpdateModal(cruiseId) {
    const modal = document.getElementById("updateModal");
    modal.style.display = "block";

    // Fetch cruise details by id and populate the modal form
    const cruise = cruiseData.find(c => c.id === cruiseId);
    // Populate the form fields with cruise details for updating
    document.getElementById("updateCruiseFormModal").elements["cruiseName"].value = cruise.name;
    // Populate other form fields as needed
}

// Function to close the update modal
function closeUpdateModal() {
    const modal = document.getElementById("updateModal");
    modal.style.display = "none";
}

// Function to update cruise details
function updateCruiseModal() {
    // Retrieve values from the modal form and update the cruiseData array
    // ...

    // Close the update modal
    closeUpdateModal();

    // Redisplay cruises
    displayCruises();
}

// Function to delete a cruise
function deleteCruise(cruiseId) {
    // Remove the cruise from cruiseData array
    // ...

    // Redisplay cruises
    displayCruises();
}

// Initial display of cruises
displayCruises();
