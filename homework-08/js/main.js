class Student {
    constructor(university, course, fullName) {
        this._university = university;
        this._course = course;
        this._fullName = fullName;
        this._marks = [5, 4, 4, 5];
        this.isDismissed = false;
    }
    
    get marks() { return !this.isDismissed ? this._marks : null; }
    
    set marks(mark) { return !this.isDismissed ? this._marks.push(mark) : null; }
    
    getInfo = () => console.log(`Студент ${this._course}го курсу ${this._university}, ${this._fullName}.`)

    getAverageMark = () => this._marks.reduce((acc, mark) => acc + mark) / this._marks.length;
    
    dismiss = () =>  this.isDismissed = true;

    recover = () => this.isDismissed = false;
}

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName)
        this.scholarship = 1400;
        this.getScholarship();
    }

    getScholarship = () => {
        if(!this.isDismissed && this.getAverageMark() >= 4) {
            setInterval(() => console.log(`Ви отримали ${this.scholarship} грн. стипендії`), 30000)
        }
    }
}

const student_1 = new Student('Вища Школа Психотерапії м.Одеса', 1, 'Остап Бендер')
const student_2 = new BudgetStudent('Вища Школа Психотерапії м.Одеса', 3, `Кіса Вороб'янінов`)
