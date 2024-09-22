document.getElementById('converterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const unitInput = document.getElementById('unitInput').value;
    const outputUnit = document.getElementById('outputUnit').value;

    let convertedTemp;
    
    if (unitInput === 'C' && outputUnit === 'F') {
        convertedTemp = (tempInput * 9/5) + 32;
    } else if (unitInput === 'C' && outputUnit === 'K') {
        convertedTemp = tempInput + 273.15;
    } else if (unitInput === 'F' && outputUnit === 'C') {
        convertedTemp = (tempInput - 32) * 5/9;
    } else if (unitInput === 'F' && outputUnit === 'K') {
        convertedTemp = ((tempInput - 32) * 5/9) + 273.15;
    } else if (unitInput === 'K' && outputUnit === 'C') {
        convertedTemp = tempInput - 273.15;
    } else if (unitInput === 'K' && outputUnit === 'F') {
        convertedTemp = ((tempInput - 273.15) * 9/5) + 32;
    } else {
        convertedTemp = tempInput; 
    }

    let unitSymbol = outputUnit === 'C' ? '°C' : outputUnit === 'F' ? '°F' : 'K';
    document.getElementById('resultDisplay').textContent = `${convertedTemp.toFixed(2)} ${unitSymbol}`;

    let tempInCelsius;

    if (unitInput === 'C') {
        tempInCelsius = tempInput;
    } else if (unitInput === 'F') {
        tempInCelsius = (tempInput - 32) * 5/9;
    } else {
        tempInCelsius = tempInput - 273.15;
    }

    if (tempInCelsius <= 10) {
        document.body.classList.remove('warm-background', 'neutral-background');
        document.body.classList.add('cool-background');
    } else if (tempInCelsius >= 30) {
        document.body.classList.remove('cool-background', 'neutral-background');
        document.body.classList.add('warm-background');
    } else {
        document.body.classList.remove('cool-background', 'warm-background');
        document.body.classList.add('neutral-background');
    }
});
