// LECTURE: Values and Variables
/*
let js = 'amaizing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log('23');

let firstName = "Matilda";
console.log(firstName);
*/
// *******************************************

// LECTURE: Data Types
/*
let javascriptIsFun = true;
console.log(true);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonos');

javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/
// *******************************************

// LECTURE: let, const and var
/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programer';
job = 'teacher';

lastName = 'Paceva';
console.log(lastName);
*/
// *******************************************

// LECTURE: Basic Operators
/*
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Eva';
const lastName = 'Paceva';
console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25;
x *= 4 // x = x * 4 = 100;
x++; // x = x + 1 =  101;
x--; // x = x - 1 = 100;
console.log(x);

//Comparison operators
// >, <, >=, <=
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2020)
*/
// *******************************************

// Operator Precedence
/*
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/
// *******************************************

//  Strings and Template Literals
/*
const firstName = 'Jonas';
const job = 'teached';
const birthYear = '1991';
const year = 2037;

const jonas = "I`m " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log('String with \n\
multiple \n\
lines' );
console.log(`String with
multiple
lines`);
*/





