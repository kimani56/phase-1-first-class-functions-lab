// Code your solution in this file!
const returnFirstTwoDrivers = function(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    const newDrivers = drivers.slice(0, 2);
    console.log(newDrivers);
    return newDrivers ;
}
const returnLastTwoDrivers = function(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    const newDriverss = drivers.slice(-2);
    console.log(newDriverss);
    return newDriverss ;
}
 
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function(integer) {
  return function(fare) {
    return fare * integer;
  };
};

const fareDoubler = function(fare){
return fare *2
}
 fareDoubler(createFareMultiplier);
 
 const fareTripler = function(fare){
return fare *3;
 }
fareTripler(createFareMultiplier);

const selectDifferentDrivers = function(drivers, selectingFunction) {
    return selectingFunction(drivers);
  };