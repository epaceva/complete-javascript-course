'use strict';
// Functions

function describeCountry(country, population, capitalCity) {
    return (`${country} has ${population} million people and its capital city is ${capitalCity}`);

}
const describeFinland = describeCountry('Finland', 6, 'Helsinki')
const describeBulgaria = describeCountry('Bulgaria', 7, 'Sofia')
const describeGreece = describeCountry('Greece', 11, 'Athene')
console.log(describeFinland, describeBulgaria, describeGreece);