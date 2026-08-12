const number = [1,2,3,4,5];
const squares = number.map(square)
const cubes = number.map(cube)
console.log(squares);
console.log(cubes);

function square(element) {
    return Math.pow(element, 2) 
}

function cube(element) {
    return Math.pow(element, 3)
}


const students = ["Samson", "Fiyin", "Temi", "Ife"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsUpper);
console.log(studentsLower);

function upperCase(element) {
    return element.toUpperCase();
}

function lowerCase(element) {
    return element.toLowerCase();
}


const dates = ["2024-1-10", "2025-2-20", "2025-3-30"];
const formattedDates = dates.map(format);

console.log(formattedDates);

function format(element) {
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}