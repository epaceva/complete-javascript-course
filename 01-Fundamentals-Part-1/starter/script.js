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
// *******************************************

//if / else Statements
/*
const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving license`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/
// *******************************************
//Type Conversion and Coercion
/*
//type converion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonos'));
console.log(typeof NaN);

console.log(String(23), 23);

//coercion
console.log('I`m ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / 2);
console.log('23' > '18');

let n = '1' + 1; //10
n = n - 1;
console.log(n);
*/
// *******************************************
// Truthy and Falsy Values
/*
//5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 1;
if (money) {
    console.log("Don`t spend it all");
} else {
    console.log('You should get a job!')
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
*/
// *******************************************
// Equality Operators: == vs. ===
/*
const age = '18';
if (age === 18) console.log('You just became an adult (strict)');
if (age == 18) console.log('You just became an adult (loose)');

const favourite = Number(prompt('What`s your favourite number?'));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also cool number')
} else {
    console.log('Number is not 23 or 7');
}

if (favourite !== 23) {
    console.log('Why not 23?');
}
*/
// *******************************************
// Logical Operators
/*
const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive..');
// }

const isTired = false;
console.log(hasDriverLicense && hasGoodVision || isTired);


if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive..');
}
*/
// *******************************************
// The switch Statement
/*
const day = 'monday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :)');
        break;
    default:
        console.log('Not a valid day!');
}
*/
// *******************************************
// The Conditional (Ternary) Operator
/*
const age = 18;
age >= 18 ? console.log('I like to dring wine.') :
    console.log('I like drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/

