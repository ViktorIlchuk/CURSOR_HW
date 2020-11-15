const minNumMessage = 'Введіть початкове число діапазону';
const maxNumMessage = 'Введіть кінцеве число діапазону';
let minNum;
let maxNum;

function askNum(varName, message){
    do {
        varName = Math.floor(prompt(`${message}`, '0'))
    } while (!Number.isInteger(varName))

    return varName;
}

function calcSum(firstNum, secondNum, skipEvenNum) {
    let sum = 0;
    
    for(let i = firstNum; i <= secondNum; i++){
        if(skipEvenNum && i%2 === 0){
            continue;
        }
        sum += i;
    }
    
    return sum;
}

function checkData(){
    minNum = askNum(minNum, minNumMessage);
    maxNum = askNum(maxNum, maxNumMessage);

    if(minNum > maxNum && !!Math.sign(minNum) && !!Math.sign(maxNum)){
        alert('Початок діапазону не може бути менший за кінець.')
        checkData();
    }

    const skipEvenNum = confirm('Чи хочете Ви пропускати парні числа?')
    console.log(calcSum(minNum, maxNum, skipEvenNum));
}

checkData();