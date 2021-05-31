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
// *******************************************
//Reviewing Functions 
/*
const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const yearsUntilRetiremen = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;

    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }
}

console.log(yearsUntilRetiremen(1982, 'Eva'));
console.log(yearsUntilRetiremen(1955, 'Svetoslav'));
*/
// *******************************************
//Intro to Arrays
/*
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2088, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

//frineds = ['Bob', 'Alice']; not possible

const jonos = ['Jonos', "Schmedtman", 2037 - 1991, 'teacher', friends];
console.log(jonos);
console.log(jonos.length);

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const year = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[year.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length - 1])];
console.log(ages);
*/


