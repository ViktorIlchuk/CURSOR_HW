const root = document.querySelector('.root');
const keys = ['a', 's', 'd', 'h', 'g', 'f'];

const renderStrings = function() {
    keys.forEach( key => {
        const div = document.createElement('div')
        div.classList.add(key ,'string')
        div.innerHTML += `${key}`;
        root.append(div)
    })
}

document.addEventListener('keydown', event => {
    if(keys.indexOf(event.key) >= 0) {
        document.querySelector(`#${event.key}`).play();
        const currentString = document.querySelector(`.${event.key}`)
        currentString.classList.add('active')
    }
})

document.addEventListener('keyup', event => {
    const currentAudio = document.querySelector(`#${event.key}`)
    currentAudio.pause();
    currentAudio.currentTime = 0;
    const currentString = document.querySelector(`.${event.key}`)
    currentString.classList.remove('active')
})

renderStrings()

