function submitForm() {
    const cardNumber = document.getElementById("card-number").value;
    const expiry = document.getElementById("expiry").value;
    const cvv = document.getElementById("cvv").value;
    const name = document.getElementById("name").value;

    if (cardNumber && expiry && cvv && name) {
        updatePaymentStatus(`Payment successful! Thank you, ${name}!`);
        clearForm();
    } else {
        updatePaymentStatus("Please fill in all fields before submitting.");
    }
}

function updatePaymentStatus(message) {
    const statusMessage = document.getElementById("status-message");
    statusMessage.textContent = message;
}

function clearForm() {
    document.getElementById("card-number").value = "";
    document.getElementById("expiry").value = "";
    document.getElementById("cvv").value = "";
    document.getElementById("name").value = "";
}
