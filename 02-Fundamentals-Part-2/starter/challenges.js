'use strict';
//Challenge #1
/*
const calcAverage = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;
//poitn1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    } else {
        return `No winner`
    }
}

console.log(avgDolphins, avgKoalas);
console.log(checkWinner(avgDolphins, avgKoalas));
//point2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);
console.log(checkWinner(avgDolphins, avgKoalas));
*/
// *******************************************
//Challenge #2
/*
const calcTip = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2
};
const bills = [125, 555, 444];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills);
console.log(tips);
console.log(totals);
*/
// *******************************************
//Challenge #2
/*
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    weights: 78,
    heights: 1.69,

    calcBMI: function () {
        this.BMI = this.weights / this.heights ** 2;
        return this.BMI;
    }
};

const john = {
    firstName: 'John',
    lastName: 'Smith',
    weights: 92,
    heights: 1.95,

    calcBMI: function () {
        this.BMI = this.weights / this.heights ** 2;
        return this.BMI;
    }
};

const higherBMI = function () {
    if (mark.BMI > john.BMI) {
        console.log(`${mark.firstName} ${mark.lastName}'BMI (${mark.BMI}) is higher than ${john.firstName} ${john.lastName}'BMI (${john.BMI})!`);
    } else {
        console.log(`${john.firstName} ${john.lastName}'BMI (${john.BMI}) is higher than ${mark.firstName} ${mark.lastName}'BMI (${mark.BMI})!`);
    }
}
mark.calcBMI();
john.calcBMI();
higherBMI();
*/