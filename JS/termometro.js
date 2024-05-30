function convertTemperature() {
    let tempInput = document.getElementById('tempInput').value;
    let tempCelsius = parseFloat(tempInput);

    if (isNaN(tempCelsius)) {
        alert('Por favor, ingrese un número válido.');
        document.getElementById('tempInput').value = '';
        document.getElementById('tempInput').focus();
        return;
    }

    let tempFahrenheit = (tempCelsius * 9/5) + 32;
    let tempKelvin = tempCelsius + 273.15;

    document.getElementById('result').innerHTML = 
      `<p>Temperatura en Fahrenheit: ${tempFahrenheit.toFixed(2)} °F</p>
        <p>Temperatura en Kelvin: ${tempKelvin.toFixed(2)} K</p>`;
}