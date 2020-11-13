let minNum;
let maxNum;

do {
    minNum = Math.floor(prompt('Введіть початкове число діапазону', '0'));
    maxNum = Math.floor(prompt('Введіть кінцеве число діапазону', '0'));
} while (!Number.isInteger(minNum) || !Number.isInteger(maxNum) || minNum <= 0 || minNum > maxNum)

const skipEvenNum = confirm('Чи хочете Ви пропускати парні числа?')
let sum = 0;
if(skipEvenNum) {
    for(let i = minNum; i <= maxNum; i++){
        if(i%2 === 0) {
            sum += 0
        } else {
            sum += i
        }
    }
} else {
    for(let i = minNum; i <= maxNum; i++){
        sum += i;
    }
}

console.log(sum)