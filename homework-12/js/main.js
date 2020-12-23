const BASEURL = 'https://swapi.dev/api/';

const heroesContainer = document.querySelector('.heroes-container');
const showHeroes = document.querySelector('.show-heroes');
const movieNum = document.querySelector('.movie-number');
const planetsContainer = document.querySelector('.planets-container');

const data = {
    heroesData: []
};
let showCards = false;

const renderInfo = data => {
    const heroCard = document.createElement('div')
    heroCard.classList.add('hero-card')
    heroCard.innerHTML += `Name: ${data.name}<br/>
    Birth year: ${data.birthYear}<br/>
    Gender: ${data.gender}.`
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
        data.heroesData = [];       
        heroesContainer.innerHTML = '';
        let charactersUrl;
        await axios.get(`${BASEURL}films/${movieNum.value}/`)
        .then(res => {
            charactersUrl = res.data.characters;
        });
        const characters = await Promise.all(charactersUrl.map(url => axios.get(url)));
        characters.forEach(character => {
            data.heroesData.push({
                name: character.data.name,
                birthYear: character.data.birth_year,
                gender: character.data.gender
            });
        });
        
        data.heroesData.forEach((heroData) => renderInfo(heroData));            
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



    

