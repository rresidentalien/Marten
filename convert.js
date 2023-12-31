// Find all elements containing the euro symbol (€) or "EUR"
const euroElements = Array.from(document.querySelectorAll('*')).filter(element => {
    return Array.from(element.childNodes).some(node => node.textContent.includes('€') || node.textContent.includes('EUR'));
});

// Outline the euro symbol, "EUR", and numbers in grey
euroElements.forEach(element => {
    Array.from(element.childNodes).forEach(node => {
        if (node.nodeType === Node.TEXT_NODE && (node.nodeValue.includes('€') || node.nodeValue.includes('EUR') || /\d/.test(node.nodeValue))) {
            const newNode = document.createElement('span');
            newNode.style.color = 'grey';
            newNode.textContent = node.nodeValue;
            node.replaceWith(newNode);
        }
    });
});

// When hovering over the highlighted text, show the equivalent amount in kuna (7,53450x than euro) next to the cursor
document.addEventListener('mouseover', event => {
    const target = event.target;
    if (target.style.color === 'grey') {
        // Extract the number from the text content of the target node
        let amount = target.textContent.match(/\d+(,\d+)?/)[0];
        // Remove "EUR" or "€" if it's attached to the number
        amount = amount.replace('EUR', '').replace('€', '');
        amount = parseFloat(amount.replace(/,/, '.'));
        const kuna = amount * 7.53450;
        const kunaText = kuna.toFixed(2).replace(/\./, ',');
        target.title = `${kunaText} kn`;
    }
});