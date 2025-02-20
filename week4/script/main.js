let userInput;
do {
    userInput = prompt("Enter your name:");
} while (!userInput || /\d/.test(userInput) || userInput.length <= 1);

alert(`Welcome, ${userInput}!`);

for (let i = 2; i <= 1024; i *= 2) {
    console.log(i);
}

let i = 2;
while (i <= 1024) {
    console.log(i);
    i *= 2;
}

let students = [
    {
        name: "Cristian",
        age: 30,
        location: "Vancouver"
    },
    {
        name: "James",
        age: 40,
        location: "Toronto"
    },
    {
        name: "Garry",
        age: 20,
        location: "Vancouver"
    }
];

function findVancouverStudents(students) {
    let vancouverStudents = [];
    for (let student of students) {
        if (student.location === "Vancouver") {
            vancouverStudents.push(student);
        }
    }
    return vancouverStudents;
}

function findStudentOlderThan25(students) {
    let studentsOlderThan25 = [];
    for (let student of students) {
        if (student.age > 25) {
            studentsOlderThan25.push(student);
        }
    }
    return studentsOlderThan25;
}

console.log(findVancouverStudents(students));
console.log(findStudentOlderThan25(students));