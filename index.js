const returnFirstTwoDrivers= function(drivers=['Sally', 'Bob', 'Freddy', 'Claudia']){
        return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2,4)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(num1){
    return function(fare){
        return fare = fare * num1;
    }
}
const fareDoubler = function(createFareMultiplier){
    return createFareMultiplier * 2
}
const fareTripler = function(createFareMultiplier){
    return createFareMultiplier * 3
}
const selectDifferentDrivers = function(drivers,array){
    return (array(drivers))
}