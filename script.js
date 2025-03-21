fetch("https://api.bcb.gov.br/dados/serie/bcdata.sgs.4189/dados?formato=json",{
    method: 'GET',
    headers: {'Accept': 'application/json'},
})
.then(response => response.json()).then(response=> console.log(JSON.stringify(response[response.length-1])))