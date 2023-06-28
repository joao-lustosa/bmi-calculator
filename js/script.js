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
