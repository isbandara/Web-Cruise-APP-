// script3.js

function uploadCSV() {
    const uploadForm = document.getElementById('uploadForm');
    const formData = new FormData(uploadForm);

    // Send formData to the server for processing (you'll need server-side code for this)
    // Example using the fetch API:
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Upload success:', data);
    })
    .catch(error => {
        console.error('Upload error:', error);
    });
}

function updateCruise() {
    const cruiseName = document.getElementById('cruiseName').value;
    // Get other fields as needed

    // Implement Cruise update logic
    console.log('Updating Cruise:', cruiseName);
}

function deleteCruise() {
    const cruiseID = document.getElementById('cruiseID').value;

    // Implement Cruise delete logic
    console.log('Deleting Cruise with ID:', cruiseID);
}
