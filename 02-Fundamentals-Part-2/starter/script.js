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
// *******************************************
//Basic Array Operations
/*
const friends = ['Michael', 'Steven', 'Peter'];
// adds elements
const newLength = friends.push('Jay') // end of array
console.log(friends);
console.log(newLength);


friends.unshift('John')// begining of array
console.log(friends);

//remove elements
friends.pop(); //last element from array
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift(); // first element from array
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}
*/
// *******************************************
//Introduction to Objects
/*
const evaArray = ['Eva', 'Paceva', '2037 - 1982', 'QA', ['Michael', 'Peter', 'Steven']];

const eva = {
    firstName: 'Eva',
    lastName: 'Paceva',
    age: 2037 - 1982,
    job: 'QA',
    friends: ['Michael', 'Peter', 'Steven']
};
*/
// *******************************************
// Dot vs.Bracket Notation
/*
const eva = {
    firstName: 'Eva',
    lastName: 'Paceva',
    age: 2037 - 1982,
    job: 'QA',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(eva);
console.log(eva.lastName);
console.log(eva['lastName']);

const nameKey = 'Name';
console.log(eva['first' + nameKey]);
console.log(eva['last' + nameKey]);

//console.log(eva.'last' + nameKey); not working

// const interestedIn = prompt('What do you want to know about Eva? Choose between firstName, lastName, age, job and friends ');

// if (eva[interestedIn]) {
//     console.log(eva[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
// }
eva.location = 'Bulgaria';
eva['facebook'] = 'N/A';
console.log(eva);

//challenge
//Eva has 3 friends, and her best friend is called Michael"
console.log(`${eva.firstName} has ${eva.friends.length} friends, and her best friend is called ${eva.friends[0]}.`);
*/
// *******************************************
// Object Methods
/*
const eva = {
    firstName: 'Eva',
    lastName: 'Paceva',
    birthYear: 1982,
    job: 'QA',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-years old ${eva.job}, and she has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(eva.calcAge(1982));
console.log(eva['calcAge'](1982));
console.log(eva.age);

//Chalenge
console.log(eva.getSummary());
*/
// *******************************************
//Iteration: The for Loop
/*
console.log('Lifting weights repetition 1');

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}
*/
// *******************************************
//Looping Arrays, Breaking and Continuing
/*
const eva = [
    'Eva',
    'Paceva',
    2037 - 1982,
    'QA',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];


for (let i = 0; i < eva.length; i++) {
    //reading array
    console.log(eva[i], typeof eva[i]);
    //Filling types aray
    // types[i] = typeof eva[i];
    types.push(typeof eva[i]);
};

console.log(types);

const years = [1991, 2007, 1982, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
console.log('----ONLY STRINGS-----')
for (let i = 0; i < eva.length; i++) {
    if (typeof eva[i] !== 'string') continue;
    console.log(eva[i], typeof eva[i]);
}
console.log('----BREAK WITH NUMBER-----')
for (let i = 0; i < eva.length; i++) {
    if (typeof eva[i] === 'number') break;
    console.log(eva[i], typeof eva[i]);
}
*/
// *******************************************
// Looping Backwards and Loops in Loops
/*
const eva = [
    'Eva',
    'Paceva',
    2037 - 1982,
    'QA',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = eva.length; i >= 0; i--) {
    console.log(i, eva[i]);
}

//Loop in loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----Starting exercise ${exercise}---`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weght repetition ${rep}`);
    }
}
*/
// *******************************************
// The while Loop
/*
// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weghts repetition ${rep}`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log('Loop is about to end...')
    }
}
*/