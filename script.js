async function getCurrSelicTaxAndDate() {
    const resposta = await fetch("https://api.bcb.gov.br/dados/serie/bcdata.sgs.4189/dados?formato=json", {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
    })
    let lastValues = await resposta.json();
    lastValues = (lastValues[lastValues.length - 1]);
    return lastValues; // Returns a JSON Object
}

function calculaRendimentoMensal(rendimentoAnual) {
    return parseFloat(rendimentoAnual / 12);
}

function calculaValorParcela(numParcelas, valorTotal) {
    return valorTotal / numParcelas;
}

async function quantoRende(numParcelas, valorTotal) {
    const currentTax = await getCurrSelicTaxAndDate();
    const mensalInterest = calculaRendimentoMensal(currentTax.valor);
    const valorParcela = calculaValorParcela(numParcelas, valorTotal);
    let currentVal = valorTotal; let rendimentoFinal = 0;
    for (var i = 0; i < numParcelas; i++) {
        rendimentoFinal += currentVal * (mensalInterest / 100);
        currentVal -= valorParcela; // O valor atual eh decrementado a cada mes que passa, simulando o pagamento da fatura.
                                    // Isso faz com que os rendimentos diminuam, ja que houve o debito da conta
        
    }
    return rendimentoFinal.toFixed(2);
}

(async () => {
    rendimento = await quantoRende(21, 250);
    console.log("Rendimento final: R$ " + rendimento);
})()

//TODO: Comparador: Vale a pena ou nao parcelar