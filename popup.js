document.addEventListener('DOMContentLoaded', function() {
    const euroInput = document.querySelector('#euroInput');
    const kunaOutput = document.querySelector('#kunaOutput');

    euroInput.addEventListener('input', event => {
        const euro = parseFloat(euroInput.value);
        if (!isNaN(euro)) {
            const kuna = euro * 7.53450;
            kunaOutput.textContent = `${kuna.toFixed(2)} kn`;
        } else {
            kunaOutput.textContent = '';
        }
    });
});