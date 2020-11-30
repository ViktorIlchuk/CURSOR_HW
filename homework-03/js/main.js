const getMaxDigit = (number) => Math.max(... Array.from(String(number)).map((item) => parseInt(item)))

const powNumber = (number, power) => {
    let result = number;

    if(number !== 0 && power === 0){
        result = 0;
    }else if(number !== 0 && power < 0){
        let denominator = number;
        for(let i = 1; i < Math.abs(power); i++){
            denominator *= number 
        }
        result = 1 / denominator;
    }else{
        for(let i = 1; i < power; i++){
            result *=  number;
        }
    }
    
    return result;
};

const formatName = name => name[0].toUpperCase() + name.substring(1).toLowerCase();    

const countClearProfit = function(salary, ...taxes){
    let totalTax = taxes.reduce((total, current) => total + current)
    return salary / 100 * (100 - totalTax);
};

const getRandomNumber = (startDiapason, endDiapason) => {
    const randomNumber = Math.floor(Math.random() * (endDiapason - startDiapason + 1)) + startDiapason;
    return randomNumber;
}

const countLetter = (surchingLetter, string) => {
    let counter = 0;
    const splitedString = string.split('')
    
    for(let letter of splitedString){
        if(letter.toLowerCase() === surchingLetter.toLowerCase()) {
            counter++
        }
    }
    
    return counter;
}

const convertCurrency = (currency) => {
    const buyDollarCost = 28.409;
    const sellDollarCost = 28.050;
    let result = '';

    if(currency.toUpperCase().includes('UAH')){
        result = +currency.split('UAH')[0] / buyDollarCost;
    }else if(currency.toUpperCase().includes('$')){
        result = +currency.split('$')[0] * sellDollarCost;
    }else{
        result = alert('You entered an incorrect currency')
    }

    return result
}

const getRandomPassword = (passwordLength = 8) => Array.from({length: passwordLength}).map(() => Math.floor(Math.random() * 10)).join('');


const deleteLetters = (deleteLetter, string) => {
    let formatedString = '';

    const splitedString = string.split('');
    for(let letter of splitedString){
        if(letter !== deleteLetter){
            formatedString += letter;
        }
    }

    return formatedString;
}

const isPalyndrom = string => {
    const modyfiedString = string.split(' ').join('').toLowerCase();
    const reverseString = modyfiedString.split('').reverse().join('');
    return modyfiedString === reverseString;
}

const deleteDuplicateLetter = string => {
    const modyfiedString = string.toLowerCase().split('')
    let result = '';
    
    for(let letter of modyfiedString){
        if(string.toLowerCase().indexOf(letter) === string.toLowerCase().lastIndexOf(letter)){
            result += letter;
        }
    }

    return result;
}

document.writeln(`
<div>Функція №1: ${getMaxDigit(1236)}</div>
<div>Функція №2: ${powNumber(4,-2)}</div>
<div>Функція №3: ${formatName('вЛАД')}</div>
<div>Функція №4: ${countClearProfit(1000, 18, 1.5)}</div>
<div>Функція №5: ${getRandomNumber(1, 10)}</div>
<div>Функція №6: ${countLetter('а', 'Асталавіста')}</div>
<div>Функція №7: ${convertCurrency('100$')}</div>
<div>Функція №8: ${getRandomPassword()}</div>
<div>Функція №9: ${deleteLetters('a', 'blablabla')}</div>
<div>Функція №10: ${isPalyndrom('Я несу гусеня')}</div>
<div>Функція №11: ${deleteDuplicateLetter('Бісквіт був дуже ніжним')}</div>
`)