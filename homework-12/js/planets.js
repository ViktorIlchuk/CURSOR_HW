const BASEURL = 'https://swapi.dev/api/planets/';
const redirectBtn = document.querySelector('.redirect');
const container = document.querySelector('.container');

redirectBtn.addEventListener('click', () => window.location.href = 'index.html');

const renderPlanets = (res) => res.forEach( data => {
    const planetData = document.createElement('p');
    planetData.classList.add('planet-description');
    
    planetData.innerHTML += `Name: ${data.name}<br/>
    Climate: ${data.climate}<br/>
    Diameter: ${data.diameter}<br/>
    Population: ${data.population}`;
    const planet = document.createElement('div');
    planet.classList.add('planet')
    planet.style.width = `${data.diameter / 100}px`;
    planet.style.height = `${data.diameter / 100}px`;
    container.append(planet)
    container.append(planetData);
});


(async () => {
    const response = await axios.get(BASEURL);
    renderPlanets(response.data.results)
})()


