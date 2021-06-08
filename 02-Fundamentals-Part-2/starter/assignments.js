'use strict';
// Functions
/*
function describeCountry(country, population, capitalCity) {
    return (`${country} has ${population} million people and its capital city is ${capitalCity}`);

}
const describeFinland = describeCountry('Finland', 6, 'Helsinki')
const describeBulgaria = describeCountry('Bulgaria', 7, 'Sofia')
const describeGreece = describeCountry('Greece', 11, 'Athene')
console.log(describeFinland, describeBulgaria, describeGreece);
*/
// *******************************************
//Function Declarations vs. Expressions
/*
//Function declaration
function percentageOfWorld1(population){
    return ((population / 7900)*100);
}
const populationChina1 = percentageOfWorld1(1441);
const populationBulgaria1 = percentageOfWorld1(7);
const populationPortugal1 = percentageOfWorld1(11);
console.log(populationChina1, populationBulgaria1, populationPortugal1);


//Function expression
const percentageOfWorld2 = function(population){
    return ((population / 7900)*100);
}

const populationChina2 = percentageOfWorld2(1441);
const populationBulgaria2 = percentageOfWorld2(7);
const populationPortugal2 = percentageOfWorld2(11);
console.log(populationChina2, populationBulgaria2, populationPortugal2);
*/
// *******************************************
//Arrow Functions
/*
const percentageOfWorld3 = population => (population / 7900) * 100;
const populationChina3 = percentageOfWorld3(1441);
const populationBulgaria3 = percentageOfWorld3(7);
const populationPortugal3 = percentageOfWorld3(11);
console.log(populationChina3, populationBulgaria3, populationPortugal3);
*/
// *******************************************
//Functions Calling Other Functions
/*
const percentageOfWorld3 = population => (population / 7900) * 100;

const describePopulation = function(country, population) {
    const percentage = percentageOfWorld3(population);
    return `${country} has ${population} million people with is about ${percentage} of the world.`
}


console.log(describePopulation('China',1441));
console.log(describePopulation('Bulgaria', 7));
console.log(describePopulation('Portugal', 11));
*/
// *******************************************
//Intro to Arrays
/*
const populations = ['10', '1441', '332', '83'];

console.log(populations.length === 4 ? true : false);

function percentageOfWorld1(population) {
    return ((population / 7900) * 100);
}

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);
*/
// *******************************************
//Basic Array Operations
/*
const neighbours = ['Greece', 'Macedonia', 'Serbia', 'Romania', 'Turkey'];
console.log(neighbours);
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D')
}
neighbours[neighbours.indexOf('Macedonia')] = 'North Macedonia';
console.log(neighbours);
*/
// *******************************************
//Introduction to Objects
/*
const myCountry = {
    country: 'Bulgaria',
    capital: 'Sofia',
    language: 'bulgarian',
    population: 7,
    neighbours: ['Greese', 'Macedonia', 'Serbia', 'Romania', 'Turkey']
};
*/
// *******************************************
// Dot vs.Bracket Notation
/*
const myCountry = {
    country: 'Bulgaria',
    capital: 'Sofia',
    language: 'bulgarian',
    population: 7,
    neighbours: ['Greese', 'Macedonia', 'Serbia', 'Romania', 'Turkey']
};
console.log(`${myCountry.country} has ${myCountry.population} millions ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring contries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);
*/
// *******************************************
// Object Methods
/*
const myCountry = {
    country: 'Bulgaria',
    capital: 'Sofia',
    language: 'bulgarian',
    population: 7,
    neighbours: ['Greese', 'Macedonia', 'Serbia', 'Romania', 'Turkey'],

    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true :
            false;
    }
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
*/
// *******************************************
//Iteration: The for Loop
/*
for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting!`);
}
*/
// *******************************************
//Looping Arrays, Breaking and Continuing
/*
const populations = ['10', '1441', '332', '83'];
const percentage = [];

function percentageOfWorld1(population) {
    return ((population / 7900) * 100);
}
for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentage.push(perc);
}

console.log(percentage);
*/
// *******************************************
// Looping Backwards and Loops in Loops
/*
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];


for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let y = 0; y < listOfNeighbours[i].length; y++) {
        console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
    }
}
*/