// Code your solution in this file!
const someArray = ["1","2","3"];

const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);

const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


const createFareMultiplier = (fare) => {
    return function(multiplier) {
        return fare*multiplier
    }// end of inner fucntion
} // end of => fucntions

const fareDoubler = (fare) => createFareMultiplier(fare)(2)
    

const fareTripler = (fare) => createFareMultiplier(fare)(3)


const selectDifferentDrivers = (arrayOfDrivers, someFunction ) => someFunction(arrayOfDrivers);

console.log(selectDifferentDrivers(someArray,returnFirstTwoDrivers ));
console.log(selectDifferentDrivers(someArray,returnLastTwoDrivers ));