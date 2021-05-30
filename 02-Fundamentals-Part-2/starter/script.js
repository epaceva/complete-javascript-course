// Activating Strict Mode
'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense == true;
if (hasDriversLicense) console.log('I can drive');

//const interface = 'Audio';
//const private = 345;
*/
// *******************************************
// Functions
/*
function logger() {
    console.log('My name is Jonos');
}
//calling/ running/ involking function
logger();
logger(23);

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
console.log(fruitProcessor(2, 4));

Number('23');
console.log(Number('23'));
*/
// *******************************************
//Function Declarations vs. Expressions
/*
//Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1982);

//Function expression
const calcAge2 = function(birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1982);

console.log(age1, age2);
*/
// *******************************************
//Arrow Functions
/*
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1982);
console.log(age3);

const yearsUntilRetiremen = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement}`;
}
console.log(yearsUntilRetiremen(1982, 'Eva'));
*/
// *******************************************
//Functions Calling Other Functions
/*
function cutFuitePieses(fruit){
    return fruit * 4;
}

function fruitProssessor(apples, oranges) {
    const applePieses = cutFuitePieses(apples);
    const orangePieses = cutFuitePieses(oranges);

    const juice = `Juice with ${applePieses} pieces of apples and ${orangePieses} pieses of oranges.`;
    return juice;
}
console.log(fruitProssessor(2,3));
*/




