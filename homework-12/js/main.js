const BASEURL = 'https://swapi.dev/api/';

const heroesContainer = document.querySelector('.heroes-container');
const showHeroes = document.querySelector('.show-heroes');
const movieNum = document.querySelector('.movie-number');
const planetsContainer = document.querySelector('.planets-container');

let showCards = false;

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
    if(movieNum.value > 0 && movieNum.value <= 6){      
        heroesContainer.innerHTML = '';
        let charactersUrl;
        await axios.get(`${BASEURL}films/${movieNum.value}/`)
        .then(async res => {
            const characters = await Promise.all(res.data.characters.map(url => axios.get(url)));
            console.log(characters)
            characters.forEach(character => renderInfo(character.data));
        });          
    } else {
        alert('You wrote the wrong number of movie.');
    }
});

(async () => {
    let planets;
    await axios.get(`${BASEURL}planets/`)
        .then(res => planets = res.data.results)
    planets.forEach(p => renderPlanets(p))
    localStorage.setItem('planets', JSON.stringify(planets))
})();

const redirectBtn = document.querySelector('.redirect')

redirectBtn.addEventListener('click', () => window.location.href = 'planets.html')