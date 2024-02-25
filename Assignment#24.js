// Task :24 [More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and one False result 
// for each of the following:]
var name1 = "Noor Ul Ain";
var name2 = "Noor Ul Ain Yousuf";
var number1 = 5;
var number2 = 10;
var arr = ['Red', 'Orange', 'Green'];
// Part : 1
// Tests for equality and inequality with strings
console.log("Is name1 == name2? I predict False.");
console.log(name1 == name2);
console.log("Is name1 !== name2? I predict True.");
console.log(name1 !== name2);
// Part : 2
// Tests using the lower case function
console.log("Is name1.toLowerCase() == name2? I predict False.");
console.log(name1.toLowerCase() == name2);
console.log("Is name1.toLowerCase() !== name2? I predict True.");
console.log(name1.toLowerCase() !== name2);
// Part : 3
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is number1 == number2? I predict False.");
console.log(number1 == number2);
console.log("Is number1 !== number2? I predict True.");
console.log(number1 !== number2);
console.log("Is number1 > number2? I predict False.");
console.log(number1 > number2);
console.log("Is number1 < number2? I predict True.");
console.log(number1 < number2);
console.log("Is number1 >= number2? I predict False.");
console.log(number1 >= number2);
console.log("Is number1 <= number2? I predict True.");
console.log(number1 <= number2);
// Part : 4
// Tests using "and" and "or" operators
console.log("Is number1 < number2 || number1 > number2 ? I predict True.");
console.log(number1 < number2 || number1 > number2);
console.log("Is number1 == number2 && number1 < number2 ? I predict False.");
console.log(number1 == number2 && number1 < number2);
// Part : 5
// Test whether an item is in a array
console.log("\nArray inclusion test: Is 'Green' in the array? I predict True.");
console.log(arr.includes('Green'));
// Part : 6
// Test whether an item is not in a array
console.log("\nArray exclusion test: Is 'Purple' in the array? I predict True.");
console.log(!arr.includes('Purple'));
