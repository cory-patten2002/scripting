class Student {
    #grades;
    constructor(name){
        this.name = name;
        this.#grades = [];
    }

    addGrade(grade){
        this.#grades.push(grade);
    }

    sumGrades(){
        let sum = 0;
        this.#grades.forEach((grade) => sum += grade);
        return sum; 
    }

    avgGrade(){
        let sum = this.sumGrades();
        return sum / this.#grades.length;
    }

    displayGrades(){
        return this.#grades.join(", "); 
    }
}

const cory = new Student("Cory Patten");
cory.addGrade(90);
cory.addGrade(60);
cory.addGrade(50);
cory.addGrade(30);
cory.addGrade(75);
console.log(`Your grades are ${cory.displayGrades()}`);
console.log(`The sum of your grades are ${cory.sumGrades()}`);
console.log(`The average of your grades are ${cory.avgGrade()}`);