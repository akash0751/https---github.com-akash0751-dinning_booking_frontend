function submitForm() {
    const name = document.getElementById("name").value;
    const people = document.getElementById("people").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (name && people && date && time) {
        updateBookingStatus(`Table booked for ${people} people on ${date} at ${time}. Thank you, ${name}!`);
        clearForm();
    } else {
        updateBookingStatus("Please fill in all fields before submitting.");
    }
}

function updateBookingStatus(message) {
    const statusMessage = document.getElementById("status-message");
    statusMessage.textContent = message;
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("people").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
}
