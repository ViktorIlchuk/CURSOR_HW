const BASEURL = 'https://swapi.dev/api/';
const heroesContainer = document.querySelector('.heroes-container');
const showHeroes = document.querySelector('.show-heroes');
const movieNum = document.querySelector('.movie-number');
const planetsContainer = document.querySelector('.planets-container');

const renderInfo = data => {
    const heroCard = document.createElement('div')
    heroCard.classList.add('hero-card')
    heroCard.innerHTML += `Name: ${data.name}. 
    Birth year: ${data.birth_year}. 
    Gender: ${data.gender}.<br/>`
    heroesContainer.append(heroCard);
}

const renderPlanets = data => {
    const planet = document.createElement('div');
    planet.classList.add('planet');
    planet.innerHTML += `${data.name}`;
    planetsContainer.append(planet);
}

showHeroes.addEventListener('click', async () => { 
    const movieAmount = 6; 
    if(movieNum.value > 0 && movieNum.value <= movieAmount){      
        heroesContainer.innerHTML = '';        
        const response = await axios.get(`${BASEURL}films/${movieNum.value}/`)       
        const characters = await Promise.all(response.data.characters.map(url => axios.get(url)));
            characters.forEach(character => renderInfo(character.data));          
    } else {
        alert('You wrote the wrong number of movie.');
    }
});

(async () => {
    const response = await axios.get(`${BASEURL}planets/`)
    response.data.results.forEach(p => renderPlanets(p))
})();

const redirectBtn = document.querySelector('.redirect')

redirectBtn.addEventListener('click', () => window.location.href = 'planets.html')