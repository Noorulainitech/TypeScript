// Task : 39 [City Names: Write a function called city_country() that takes in the name of a city and its country. 
// The function should return a string formatted like this: "Lahore, Pakistan"]

function city_country(city: string, country: string): string {
    return `${city} ${country}`;
}

let result = city_country(`Lahore`,'Pakistan');
let result1 = city_country(`Islamabad`,'Pakistan');
let result2 = city_country(`Karachi`,'Pakistan');

console.log(result);
console.log(result1);
console.log(result2);