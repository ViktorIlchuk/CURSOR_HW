const root = document.querySelector('.root');
const stringsList = [
    {
        name: 'A',
        audio: new Audio('audio/Low_E.mp3'),
        keyCode: 65
    },
    {
        name: 'S',
        audio: new Audio('audio/A.mp3'),
        keyCode: 83
    },
    {
        name: 'D',
        audio: new Audio('audio/D.mp3'),
        keyCode: 68
    },
    {
        name: 'H',
        audio: new Audio('audio/High_E.mp3'),
        keyCode: 72
    },
    {
        name: 'G',
        audio: new Audio('audio/B.mp3'),
        keyCode: 71
    },
    {
        name: 'F',
        audio: new Audio('audio/G.mp3'),
        keyCode: 70
    }
];

stringsList.forEach(el => {
    const button = document.createElement('button');
    button.innerHTML = el.name;
    button.classList.add('string');

    button.onclick = () => {
        button.classList.add('active')
        el.audio.currentTime = 0;
        el.audio.play();
    };
    
    document.addEventListener('mouseup', () => button.classList.remove('active'));

    document.addEventListener('keydown', event => {
        if(event.keyCode === el.keyCode) {
            el.audio.currentTime = 0;
            el.audio.play();
            button.classList.add('active');
        };
    });

    document.addEventListener('keyup', () => button.classList.remove('active'))

    root.append(button);
});