let bookedTables = [];

function bookTable(tableNumber) {
    if (bookedTables.includes(tableNumber)) {
        alert(`Table ${tableNumber} is already booked. Please select another table.`);
    } else {
        bookedTables.push(tableNumber);
        updateBookingStatus(`Table ${tableNumber} booked successfully!`);
    }
}

function updateBookingStatus(message) {
    const statusMessage = document.getElementById("status-message");
    statusMessage.textContent = message;
}
