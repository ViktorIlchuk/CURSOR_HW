const getRandomArray = (length, min, max) => [...new Array(length)]
    .map(() => Math.floor(Math.random() * (max - min + 1) + min))

const getModa = function(...numbers) {
    const modaNumbers = {}; 
    let moda = 0;
    
    [...numbers].map(number => {
        (number in modaNumbers) ? modaNumbers[number] += 1 : modaNumbers[number] = 1;
    })

    for(let number in modaNumbers) {
        if(modaNumbers[number] > moda){
            moda = number;
        }
    }
    return moda;
}

const getAverage = function(...numbers) {
    const arrOfArguments = [...numbers];
    const sum = arrOfArguments.reduce((sum, number) => sum += number)

    return sum / arrOfArguments.length;
}

const getMedian = function(...numbers){
    let result = 0;
    const sortedArr = [...numbers].sort((a,b) => a - b)
    const mediumPosition = Math.floor(sortedArr.length / 2);

    if(sortedArr.length % 2){
        result = sortedArr[mediumPosition];
    }else{
        result = getAverage(sortedArr[mediumPosition - 1], sortedArr[mediumPosition])
    }

    return result;
}

const filterEvenNumbers = (...numbers) => [...numbers]
    .filter(number => number % 2 === 1);

const countPositiveNumbers = (...numbers) => [...numbers]
    .filter(numder => numder > 0).length;

const getDividedByFive = (...numbers) => [...numbers]
    .filter(number => number !== 0 && number % 5 === 0)


const replaceBadWords = function(string) {
    const badWords = ['shit', 'fuck'];
    const arrOfWords = string.split(' ')
    return arrOfWords.map(word => {
        for (const badWord of badWords) {
            if(word.includes(badWord)) {
                let amountOfStars = ''
                for(let i = 0; i < badWord.length; i++){
                    amountOfStars += '*';
                }
                word = word.replace(badWord, amountOfStars);
            }                
        }
        return word
    })
    .join(' ');
}

const divideByThree = function(word) {
    const charAmount = 3;
    const byLetters = word.split('').filter(letter => letter !== ' ');

    return byLetters.reduce(
        (string, letter, index) => {
            return ((index % charAmount) || !(index)) ? 
            string.concat(letter) : 
            string.concat(',', letter)
        }, '')
        .split(',')
}

const generateCombinations = function(word) {
    if(word.length <= 2) return word.length === 2 ? [word, word[1] + word[0]] : [word];

    return word.split('')
    .reduce(
        (acc, letter, i) => {
            return acc
                .concat(generateCombinations(word.slice(0, i) + word.slice(i + 1))
                .map(val => letter + val)
                )
        },[]);
}

// const randomArray = getRandomArray(10,1,10)
// console.log("randomArray:", randomArray)

// console.log("moda:", getModa(...randomArray))

// console.log("average value:", getAverage(...randomArray))

// console.log("median:", getMedian(...randomArray));

// console.log("EvenNumbers:", filterEvenNumbers(...randomArray))

// console.log("PositiveNumbers", countPositiveNumbers(-10, 10, 7, 10, 4, 6, 0, -6, 9))

// console.log("DividedByFive:" , getDividedByFive(...randomArray))

// console.log("replaceBadWords:", replaceBadWords('Holy shit!'))

// console.log("divideByThree:", divideByThree('jalcjzx nczx cnzjcx'))

// console.log("generateCombinations", generateCombinations('123'))
