// Function to verify a valid service quality was entered
function verifyServiceQuality(serviceQuality) {
    const validQualities = ['great', 'ok', 'poor'];
    if (validQualities.includes(serviceQuality.toLowerCase())) {
        return true;
    } else {
        alert("Invalid service quality entered. Please select 'Great', 'Ok', or 'Poor'.");
        return false;
    }
}

// Function to verify the service amount input
function verifyServiceAmount(serviceAmount) {
    if (serviceAmount >= 5.00 && serviceAmount <= 500.00) {
        return true;
    } else {
        alert("Invalid service amount entered. Please enter a value between $5.00 and $500.00.");
        return false;
    }
}

// Function to calculate the tip amount based on service quality
function calculateTipAmount(serviceAmount, serviceQuality) {
    let tipPercentage;

    switch (serviceQuality.toLowerCase()) {
        case 'great':
            tipPercentage = 0.20;
            break;
        case 'ok':
            tipPercentage = 0.15;
            break;
        case 'poor':
            tipPercentage = 0.10;
            break;
    }

    return serviceAmount * tipPercentage;
}

// Main function to calculate the tip
function calculateTip() {
    const serviceAmount = parseFloat(document.getElementById('service-amount').value);
    const serviceQuality = document.getElementById('service-quality').value;

    // Verify inputs
    if (!verifyServiceAmount(serviceAmount) || !verifyServiceQuality(serviceQuality)) {
        return; // Exit if any input is invalid
    }

    // Calculate the tip
    const tipAmount = calculateTipAmount(serviceAmount, serviceQuality);

    // Display the result to the user
    document.getElementById('tip-result').textContent = `For a service amount of $${serviceAmount.toFixed(2)} with ${serviceQuality} service, the recommended tip is $${tipAmount.toFixed(2)}.`;
}
