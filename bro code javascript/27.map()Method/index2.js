const students = ["spongebob", "patrick", "squidward", "sandy"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsUpper);

function upperCase(element) {
    return element.toUpperCase();
}


function lowerCase(element) {
    return element.toLowerCase();
}