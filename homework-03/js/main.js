const getMaxDigit = number => {
    const splitedNumber = number.toString().split('');
    let maxDigit = 0;

    splitedNumber.forEach(digit => {
        if(digit > maxDigit){
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




const balanceAfterTaxes = function(salary, ...taxes){
    let totalTax = taxes.reduce((total, current) => total + current)
    const clearProfit = salary / 100 * (100 - totalTax) ;
    
    return clearProfit;
};


