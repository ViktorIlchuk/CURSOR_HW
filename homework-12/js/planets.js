const redirectBtn = document.querySelector('.redirect');
const container = document.querySelector('.container');

redirectBtn.addEventListener('click', () => window.location.href = 'index.html');

const renderPlanets = () => {
    const planetsData = JSON.parse(localStorage.getItem('planets'));
    console.log(planetsData)

    planetsData.forEach( data => {
        const planet = document.createElement('div');
        planet.classList.add('planet');
        planet.innerHTML += `Name: ${data.name}<br/>
        Climate: ${data.climate}<br/>
        Diameter: ${data.diameter}<br/>`;
        container.append(planet);
    });
}

renderPlanets()

