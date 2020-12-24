const createChineseChar = () => {
    const timeStamp = Date.now().toString();
    const charCode = timeStamp.substr(timeStamp.length - 5);
    
    return String.fromCharCode(charCode);
}

const wait = ms => new Promise( resolve => setInterval(resolve, ms));
    
const getRandomChinese = async (length) => {
    const array = Array.from({length});

    const charArray = await Promise.all(
        array.map(async (el, index) => {
            const creationTime = 50;
            
            await wait(creationTime * index);
            const char = createChineseChar();
            
            return char;
        })
    )

    const str = charArray.join('')

    return str;
};

getRandomChinese(4).then(el => console.log(el));




