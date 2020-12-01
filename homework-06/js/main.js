const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

const getSubjects = function(student) {
    return Object.keys(student.subjects).map(subject => {
        const dividedWords = subject.split('_').join(' ')
        return dividedWords[0].toUpperCase() + dividedWords.slice(1).toLowerCase()        
    })
}

const getAverageMark = function(student) {
    const marks = Object.keys(student.subjects).reduce((acc, subMarks) => {
        return acc.concat(student.subjects[subMarks])
    }, [])
    return getAverage(...marks)
}

const getStudentInfo = function(student) {
    const {course, name} = student;
    const averageMark = getAverageMark(student)
    return {course, name, averageMark}
}

const getStudentsNames = function(students) {
    return students.reduce((acc, student) => {
       return acc.concat(student.name).sort()
    }, [])
}

const getBestStudent = function(students) {
    return students.sort((a, b) => getAverageMark(b) - getAverageMark[a])[0].name;
}

const calculateWordLetters = function(word) {
  const letters = {};
  word.split('').map(letter => {
    (letter in letters) ? letters[letter] += 1 : letters[letter] = 1
  })
  return letters;
} 




console.log('Subjects: ', getSubjects(students[0]))
console.log('AverageMark: ', getAverageMark(students[1]))
console.log('StudentInfo: ', getStudentInfo(students[1]))
console.log('StudentsNames: ', getStudentsNames(students))
console.log('BestStudent: ', getBestStudent(students))
console.log('calculateWordLetters: ', calculateWordLetters("тест"))