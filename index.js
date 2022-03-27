// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(){
    let firsttwo = [drivers[0], drivers[1]]
    return firsttwo
}

console.log(returnFirstTwoDrivers())


const returnLastTwoDrivers = function(){
    const last = drivers.length - 1
    const secLast = drivers.length -2
    let lastTwo = [drivers[secLast], drivers[last]]
    return lastTwo;
}

console.log(returnLastTwoDrivers())

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


console.log(selectingDrivers[0])

function createFareMultiplier(num){
    return function(mult) {return num * mult}
}


console.log(createFareMultiplier(5)(5))


function fareDoubler(num) {
    return createFareMultiplier(num)(2)
}

console.log(fareDoubler(4))

function fareTripler(num){
    return createFareMultiplier(num)(3)
}

console.log(fareTripler(3))

function selectDifferentDrivers(arrayOfDrivers, func){
    arrayOfDrivers = drivers
        return func()
        
    }
    

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers))
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers))