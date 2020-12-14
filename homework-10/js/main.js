const animals = ['elephant', 'hyena', 'lion', 'jaguar', 'panther', 'zebra'];
const root = document.querySelector('.root')

const renderImg = function() {
    animals.forEach(animal => {
        const img = document.createElement('img');
        const voice = document.createElement('audio');
        
        img.classList.add(animal);
        img.src = `./img/${animal}.jpg`;
        img.style.height = '20vh';

        voice.src = `./audio/${animal}.mp3`;
        voice.classList.add(`${animal}Voice`);

        root.append(img);
        root.append(voice);
    })
}

root.addEventListener('click', event => {
    const animalVoice = document.querySelector(`.${event.target.classList[0]}Voice`);
    animalVoice.play();
})
    
renderImg()

