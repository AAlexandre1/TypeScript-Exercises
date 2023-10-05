class Student {
   studentName: string;
   studentAge: number;
   studentGrade: number;

   constructor(studentName: string, studentAge: number, studentGrade: number) {
      this.studentName = studentName;
      this.studentAge = studentAge;
      this.studentGrade = studentGrade;
   }

   displayInfo() {
      console.log(this.studentName, this.studentAge, this.studentGrade);
   }

   isPassing(gradeThreshold: number) {
      let result: boolean;
      if (this.studentGrade >= gradeThreshold) {
         result = true;
      } else {
         result = false;
      }

      return result;
   }
}

const taehyung = new Student('Taehyung', 27, 84);
taehyung.displayInfo();
taehyung.isPassing(85);

const suga = new Student('Suga', 30, 90);
suga.displayInfo();
suga.isPassing(85);

const jin = new Student('Jin', 30, 85);
jin.displayInfo();
jin.isPassing(85);