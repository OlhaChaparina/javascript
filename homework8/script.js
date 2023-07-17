class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this._dismissed = false;
    this._marks = [5, 4, 4, 5];
  }

  getInfo() {
    return `Студентка ${this.course}го курсу ${this.university}, ${this.fullName}`;
  }

  get marks() {
    return this._marks;
  }

  set marks(mark) {
    if (!this._dismissed) {
      this._marks.push(mark);
    }
  }

  getAverageMark() {
    if (this._marks.length === 0) {
      return 0;
    }

    const sum = this._marks.reduce((acc, mark) => acc + mark, 0);
    return sum / this._marks.length;
  }

  dismiss() {
    this._dismissed = true;
    this._marks = null;
  }

  recover() {
    this._dismissed = false;
    if (this._marks === null) {
      this._marks = [5, 4, 4, 5, 5];
    }
  }
}


let student = new Student("ЛНУ", 3, "Чапаріна Ольга Сергіївна");

console.log(student.getInfo()); 
console.log(student.marks); 
student.marks = 5;
console.log(student.marks); 
console.log(student.getAverageMark()); 
student.dismiss();
console.log(student.marks); 
student.recover();
console.log(student.marks); 

class BudgetStudent extends Student {
  getScholarship() {
     if (this.dismissed) {
       console.log("Ви не отримуєте стипендію, вас виключено.");
       return;
     }
   
     if (this.getAverageMark() >= 4.0) {
       console.log("Ви отримали 1400 гривень стипендії.");
     } else {
       console.log("Ви не отримуєте стипендію.");
     }
   }
   constructor(university, course, fullName) {
     super(university, course, fullName);
     setInterval(() => this.getScholarship(), 30000);
   }
   
}
const budgetStudent = new BudgetStudent;






 