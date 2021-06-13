// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//Problem #1
const calcTempAmplitude = function(temp) {
    let max = temp[0];
    let min = temp[0];

    for(let i = 0; i < temp.length; i++){
        const curTemp = temp[i]
        if(typeof curTemp !== 'number') continue;

        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
    }
    console.log(min, max);
    return max - min;
};
 const amplitude = calcTempAmplitude(temperatures);
 console.log(amplitude);
 
//Problem #2

const calcTempAmplitudeNew = function(t1, t2) {
const temp = t1.concat(t2);
console.log(temp);

    let max = temp[0];
    let min = temp[0];

    for(let i = 0; i < temp.length; i++){
        const curTemp = temp[i]
        if(typeof curTemp !== 'number') continue;

        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
    }
    console.log(min, max);
    return max - min;
};
 const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
 console.log(amplitudeNew);
 */
//********************************
 //Debuging
/*
 const measureKelvin = function(){
     const measurement = {
         type: 'temp',
         unit: 'cels',
         
         // C) FIX
        //  value: Number(prompt('Degrees celsius:')),
        value: 10
     }

     // B) FIND
     console.table(measurement);

    //  console.log(measurement.value);
    //  console.warn(measurement.value);
    //  console.error(measurement.value);

     const kelvin = measurement.value + 273;
     return kelvin;
 };
// A) INDENTIFY
 console.log(measureKelvin());


 const calcTempAmplitudeBug = function(t1, t2) {
    const temp = t1.concat(t2);
    console.log(temp);
    
        let max = 0;
        let min = 0;
    
        for(let i = 0; i < temp.length; i++){
            const curTemp = temp[i]
            if(typeof curTemp !== 'number') continue;
    
            debugger;
            if(curTemp > max) max = curTemp;
            if(curTemp < min) min = curTemp;
        }
        console.log(min, max);
        return max - min;
    };
     const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
     // A) INDENTIFIED
     console.log(amplitudeBug);
     */
    //****************************
    //Challenge#1
    /*
    const arr1 = [17, 21, 23];
    const arr2 = [12,5, -5, 0, 4];

    const printForecast = function(arr){
        let str = '';
        for(let i = 0; i < arr.length; i++){
            str = str + `${arr[i]}ºC in ${i + 1}days ... `;
        }
        console.log('...' + str);
    }
    
    printForecast(arr1);
    printForecast(arr2);
*/
    