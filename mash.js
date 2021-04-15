var place = ["Texas", "New York", "Florida", "Tennessee", "Massachusetts"];
var salary = ["$140k", "$560k", "$50k", "$0", "$75k"];
var car = ["BMW", "Tesla", "Ford", "Honda", "Toyota"];
var career = ["Engineer", "Entrepenuer", "Game Developer", "Farmer", "Teacher"];
var house = ["Beach House", "Modern House", "Shack", "Apartment", "Condo"];

function randGenerator(value) {
    var randDecimal = Math.random() //return output between 0 and 1
    var randNum = randDecimal * value //returns output between 0 and 4
    var randInt = Math.floor(randNum);

    return randInt
}


console.log("You will live in a", house[randGenerator(house.length)], "with a job as a", 
career[randGenerator(career.length)])
