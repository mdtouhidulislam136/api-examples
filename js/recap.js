const loadCodes = () => {
    fetch('https://api.kanye.rest/')
.then(response => response.json())
.then(data => loadKaye(data));
}


const loadKaye = quote => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;
}