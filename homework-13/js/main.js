function* createIdGenerator(){
    let i = 0;
    while(true) {
        yield console.log(++i);
    }
};

const idGenerator = createIdGenerator(1);
idGenerator.next().value
idGenerator.next().value


function* newFontGenerator(start){      
    let res = start;
    
    while(true) {
        const value = yield;
        if(value === 'up') res += 2;    
        if(value === 'down') res -= 2;
        yield res;
    }
}

const fontGenerator = newFontGenerator(14)

const increaseBtn = document.querySelector('.increase');
const reduceBtn = document.querySelector('.reduce');
const text = document.querySelector('.text');

increaseBtn.addEventListener('click', () => {
    let font = fontGenerator.next('up').value;
    text.style.fontSize = `${font}px`;
});

reduceBtn.addEventListener('click', () => {
    let font = fontGenerator.next('down').value;
    text.style.fontSize = `${font}px`;
})


