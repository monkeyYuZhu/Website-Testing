// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number
// Cannot contain a space or hyphen (-)
// Are case-sensitive

let firstName = 'Mosh'; 
let lastName = 'Hamedani';
const interestRate = 0.3;
//interestRate = 1;
console.log(interestRate);


// Primitives or value types\\ reference types
let name = 'Mosh'; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal


let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green'
selectedColors[3] = 1;
console.log(selectedColors.length);

// name here is a parameter
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

// Kyle here is an argument
greet('Kyle', 'Bieze');

let x = 10;
let y = 3;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// Increment (++)
console.log(x++);
console.log(x);


// Decrement (--)
