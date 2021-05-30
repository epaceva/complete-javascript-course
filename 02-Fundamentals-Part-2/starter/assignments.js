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
