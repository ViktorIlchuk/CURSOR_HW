const getRandomChinese = async (length) => {
    const delay = 1000;
    const numAmount = 5;
    let result = ''

    const hieroglyphDelay = (ms) => new Promise((resolve) => {
        setInterval(() => resolve(), ms)
    })

    const makeHieroglyph = () => {
        const sign = Date.now().toString().slice(-numAmount)
        return result += String.fromCharCode(sign)
    }
   
    while(length > 0) {
        await hieroglyphDelay(delay)
        makeHieroglyph()         
        length--
    }
    return result;
}

getRandomChinese(4)
    .then((res) => console.log(res))




