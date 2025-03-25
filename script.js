async function getCurrSelicTaxAndDate() {
    const resposta = await fetch("https://api.bcb.gov.br/dados/serie/bcdata.sgs.4189/dados?formato=json", {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
    })
    var lastValues = await resposta.json();
    lastValues = (lastValues[lastValues.length - 1])
    return lastValues; // Returns a JSON Object
}

async function getCurrSelicTax() {
    var currentTax = await getCurrSelicTaxAndDate();
    currentTax = parseFloat(currentTax.valor);
    console.log(typeof currentTax);
    return currentTax;
}