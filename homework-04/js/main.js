const students = ["Олександр", "Олена", "Ігор", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const getPairs = students => {
    const pairs = [];
    for(let i = 0; i < students.length; i++) {
        if(i % 2){
            pairs.push([students[i], students[i - 1]])
        }
    }
    return pairs
}

const makePairsByThemes = (pairs, themes) => {
    const pairsByThemes = [];
    pairs.map((pair, index) => {
        const getherPair = [`${pair[0]} і ${pair[1]}`, themes[index]]
        pairsByThemes.push(getherPair)
    });
    return pairsByThemes;
}

const putMarks = (students, marks) => {
    const studentsMarks = [];
    students.forEach((student, index) => {
        studentsMarks.push([student, marks[index]])
    })
    
    return studentsMarks;
}

const putMarksForPairs = list => {
    const result = []
    const minMark = 1;
    const maxMark = 5;
    pairsByThemes.forEach(pair => {
        const randomMark = Math.floor(Math.random() * (maxMark - minMark + 1) + minMark);
        result.push([...pair, randomMark])
    })
    
    return result
} 


const pairs = getPairs(students);
console.log(pairs);

const pairsByThemes = makePairsByThemes(pairs, themes)
console.log(pairsByThemes)

const studentsMarks = putMarks(students, marks);
console.log(studentsMarks)

const marksForPairs = putMarksForPairs(pairsByThemes)
console.log(marksForPairs)