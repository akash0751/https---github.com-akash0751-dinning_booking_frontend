function initiatePayment() {
    const amount = document.getElementById('amount').value;
    if (!amount) {
      alert('Please enter the amount.');
      return;
    }
    // Simulate UPI payment initiation
    simulateUPIPayment(amount);
  }
  
  function simulateUPIPayment(amount) {
    // In a real-world scenario, this is where you would integrate with a payment gateway
    // and handle the actual UPI payment process securely.
    // For this example, we'll just simulate a successful payment.
    setTimeout(() => {
      document.getElementById('payment-status').innerText = `Payment successful! Amount: ₹${amount}`;
    }, 2000); // Simulating a delay of 2 seconds for payment processing
  }
  