const returnFirstTwoDrivers = function (array) {
    return [array[0], array[1]];
};

const returnLastTwoDrivers = function (array) {
    return array.slice(-2);
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (times) {
    return function (fare) {
        return fare*times;
    };
};

const fareDoubler = createFareMultiplier (2);

const fareTripler = createFareMultiplier (3);

function selectDifferentDrivers (arrayOfDrivers, aFunction) {
    return aFunction (arrayOfDrivers);
};