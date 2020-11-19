const getMaxDigit = number => {
    const splitedNumber = number.toString().split('');
    let maxDigit = 0;

    splitedNumber.forEach(digit => {
        if(+digit > maxDigit){
            maxDigit = digit;
        }
    });

    return maxDigit;   
};

const powNumber = (number, power) => {
    let result = number;

    for(let i = 1; i < power; i++){
        result *=  number;
    }

    return result;
};

const formatName = name => {
    const formatedName = name[0].toUpperCase() + name.substring(1).toLowerCase();    
    return formatedName;
};

const countClearProfit = function(salary, ...taxes){
    let totalTax = taxes.reduce((total, current) => total + current)
    const clearProfit = salary / 100 * (100 - totalTax) ;
    
    return clearProfit;
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

const getRandomPassword = (passwordLength = 8) => {
    const numbers = '0123456789';
    let password = '';
    
    for(let i = 0; i < passwordLength; i++){
        password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    return password;
}

const deleteLetters = (deleteLetter, string) => {
    let formatedString = '';

    const splitedString = string.split('');
    for(let letter of splitedString){
        if(letter === deleteLetter){
            continue;
        }
        formatedString += letter;
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
<div>Функція №2: ${powNumber(2,4)}</div>
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