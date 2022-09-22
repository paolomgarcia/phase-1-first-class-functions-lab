// index.js
//     returnFirstTwoDrivers()
//       1) should return a new array containing the first two drivers from the passed-in array
//     returnLastTwoDrivers()
//       2) should return an array of the last two drivers
//     selectingDrivers
//       3) has the `returnFirstTwoDrivers` function to as its first element
//       4) has the `returnLastTwoDrivers` function to as its last element
//       5) allows us to invoke either function from the array
//     createFareMultiplier()
//       6) returns a function
//       7) should multiply a given value using the created multiplier
//     fareDoubler()
//       8) is a function
//       9) doubles fares
//     fareTripler()
//       10) is a function
//       11) triples fares
//     selectDifferentDrivers(arrayOfDrivers, function)
//       12) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
//       13) returns the last two drivers when passed returnLastTwoDrivers() as the second argument


const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };


  const fareDoubler = createFareMultiplier(2);

  const fareTripler = createFareMultiplier(3);

  const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  }

