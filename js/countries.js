const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(data => countriesData(data));
}

loadCountries();

const countriesData = data =>{
    
    const countriesDiv = document.getElementById('countries');
    data.forEach(data => {
        const div = document.createElement('div');
        div.classList.add('countires');
        div.innerHTML = `
        <h3> ${data.name} </h3>
        <p> ${data.capital} </p>
        
        <button onclick="loadCountryDetail('${data.name}')">Details</button>`;


        

        

        countriesDiv.appendChild(div);
        // const h3 = document.createElement('h3');
        // div.appendChild(h3);
        // h3.innerText =`Country name: ${ data.name}`;
        // const p = document.createElement('p');
        // p.innerText = `Capital: ${data.capital}`;
        // countriesDiv.appendChild(div);
        // div.appendChild(p);
    })
}

const loadCountryDetail = name => {
    const url = `https://restcountries.com/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]));

}

const displayCountryDetail = country => {
    const countryDiv = document.getElementById('country-detail');

    countryDiv.innerHTML = `
    <h5> ${country.name} </h5>
    <p> population: ${country.population} </p>
    <img width="200px" src="${country.flag}">
    `




}