// Function to calculate the Body Mass Index (BMI)
function calculateBmi() {
    // Get values from the HTML
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    const measurementSystem = document.getElementById('measurement-system').value;

    // Get error message elements
    const weightErrorMessage = document.getElementById('weight-error-message');
    const heightErrorMessage = document.getElementById('height-error-message');

    // Clear error messages
    weightErrorMessage.innerHTML = "";
    heightErrorMessage.innerHTML = "";

    // Check if input values are valid
    let isValid = true;
    if (weight <= 0) {
        weightErrorMessage.innerHTML = "Please enter a weight greater than 0";
        isValid = false;
    }
    if (height <= 0) {
        heightErrorMessage.innerHTML = "Please enter a height greater than 0";
        isValid = false;
    }

    // If input values are not valid, return from the function
    if (!isValid) {
        return;
    }

    // Convert weight and height to metric if using the imperial system
    if (measurementSystem === 'imperial') {
        const weightInKg = weight * 0.45359237;
        const heightInCm = height * 2.54;
        weight = weightInKg;
        height = heightInCm;
    }

    // Calculate BMI
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    // Display the calculated BMI
    document.getElementById('result').innerHTML = "Your BMI is " + bmi.toFixed(1);
}

// Function to change the measurement system (Metric or Imperial)
function changeMeasurementSystem() {
    // Get the selected measurement system
    const measurementSystem = document.getElementById('measurement-system').value;

    // Get the weight and height unit elements
    const weightUnit = document.getElementById('weight-unit');
    const heightUnit = document.getElementById('height-unit');

    // Update weight and height units based on the selected measurement system
    if (measurementSystem === 'metric') {
        weightUnit.innerText = '(kg)';
        heightUnit.innerText = '(cm)';
    } else {
        weightUnit.innerText = '(lb)';
        heightUnit.innerText = '(inches)';
    }
}
