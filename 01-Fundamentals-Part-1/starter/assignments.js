// LECTURE: Values and Variables
/*
let country = 'Bulgaria';
let continent = 'Europe';
let population = 6000000;

console.log(country);
console.log(continent);
console.log(population);
*/
// *******************************************

// LECTURE: Data Types
/*
let isIsland = false;
let language;
let country = 'Bulgaria';
let population = 6000000;

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof country);
console.log(typeof population);
*/
// *******************************************

// LECTURE: let, const and var
/*
language = 'bulgarian';
const country = 'Bulgaria';
const continent = 'Europe';
const isIsland = false;
*/
// *******************************************

// LECTURE: Basic Operators
/*
const country = 'Bulgaria';
const continent = 'Europe';
const population = 7000000;
let halfPopulation = population / 2;
console.log(halfPopulation);
halfPopulation++;
console.log(halfPopulation);
const finlandPopulation = 6000000;
console.log(population > finlandPopulation);
console.log(population <= 33000000);
const description = country + ' is in ' + continent + ', ans its ' + population + ' people speak bulgarian';
console.log(description);
*/
// *******************************************

//  Strings and Template Literals
/*
const country = 'Bulgaria';
const continent = 'Europe';
const population = 7000000;
const description = `${country} is in ${continent}, and its ${population} people speak bulgarian!`;
console.log(description);
*/
// *******************************************

//if / else Statements
/*
const country = 'Bulgaria';
const population = 7;
if (population >= 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} below average`);
}
*/
// *******************************************
//Type Conversion and Coercion
/*
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
*/
// *******************************************
// Equality Operators: == vs. ===
/*
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'))
if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}
*/
// *******************************************
// Logical Operators
/*
const language = 'bulgarian';
const population = 7;
const isIsland = true;
const country = 'Bulgaria';

if (language === 'english' && population < 50 && !isIsland) {
    console.log(`Sarah should live in ${country} :)`);
} else {
    console.log(`${country} does not meet Sarah's criteria :(`);
}
*/

