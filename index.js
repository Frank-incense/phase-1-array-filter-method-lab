// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(arr, str){
    let found = arr.filter(function(driver){
        if (str.toLowerCase() === driver.toLowerCase()){
            return driver;
        }
        
    })
    return found
}

function fuzzyMatch(arr, str){
    let found = arr.filter(function(driver){
        if (str === driver.substr(0,2)){
            return driver
        }
    })
    return found;
}

function matchName(arr, str){
    let found = arr.filter(function(driver){
        if (driver.name === str){
            return driver
        }
    })
    return found
}
console.log((drivers, "Bobby"))