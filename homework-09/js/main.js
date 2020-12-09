const createColor = function() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const generateBlocksInterval = function() {
    const squareSize = 50;
    const widthHeight = 5;
    const root = document.querySelector('.root');
    root.style.width = `${widthHeight * squareSize}px`;
    root.style.display = 'flex';
    root.style.flexWrap = 'wrap';


    setInterval(() => {
        root.innerHTML = '';
        for(let i = 0; i < widthHeight * widthHeight; i++){
            const square = document.createElement('div')
            square.style.width = `${squareSize}px`
            square.style.height = `${squareSize}px`
            square.style.backgroundColor = createColor()
            root.append(square)
        }
    }, 1000)
}

generateBlocksInterval()