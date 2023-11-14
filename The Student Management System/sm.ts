import inquirer from inquirer
import chalk from 'chalk';

console.log(chalk.blue("==================================== STUDENT MENGMENT PROGRAME ====================================="));

class Student {
    static idCounter: number = 87695;
    name: string;
    studentID: string;
    courses: string[];
    balance: number;

    constructor(name: string, courses: string[]) {
        this.name = name;
        this.studentID = String(Student.idCounter);
        Student.idCounter++;
        this.courses = courses;
        this.balance = 34000;
    }

    enroll(course: string) {
        this.courses.push(course);
    }

    viewBalance() {
        console.log(`Balance for ${this.name} is $${this.balance}`);
    }

    payTuition(amount: number) {
        this.balance -= amount;
        console.log(`Paid $${amount}`);
      console.log(chalk.magentaBright("----------------------------------------------------------------------------------------------------"))
    } 
    showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`Student ID: ${this.studentID}`);
        console.log(`Courses Enrolled: ${this.courses}`);
        console.log(`Balance: $${this.balance}`);
    }
}

// Usage
const student1 = new Student("Rameesha Alvi", ["Typescript", "Python"]);
student1.enroll("AI course");
student1.viewBalance();
student1.payTuition(8000);
student1.showStatus();