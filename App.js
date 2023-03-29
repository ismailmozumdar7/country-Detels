const loadCountry = async () => {
    const url = `https://restcountries.com/v3.1/all`
    const res = await fetch(url);
    const data = await res.json();
    displaydata(data)
}

const displaydata = (countrys) => {
    const liContainer = document.getElementById('ul-list-container');
    for (const country of countrys) {
        const li = document.createElement('li');
        li.innerHTML = `
    <a class="dropdown-item" href="#" onclick="countryDetels('${country.cca2}')">${country.name.common}</a>
    `;
        liContainer.appendChild(li);
    }
}

const countryDetels = (countryId) => {
    const url = `https://restcountries.com/v3.1/alpha/${countryId}`
    fetch(url)
        .then(res => res.json())
        .then(data => countryDetelsDisplay(data[0]))
}
const countryDetelsDisplay = (country) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    cardContainer.innerHTML = `
            <img src="${country.flags.png}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
              <h5 class="card-title">${country.name.common}</h5>
              <p class="card-text">Capital: ${country.capital[0]}</p>
              <p class="card-text"><small class="text-body-secondary">area: ${country.area}, </small>population: ${country.population}, region: ${country.region}</p>
            </div>
    `
}
loadCountry()