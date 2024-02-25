// Task : 33 [Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
// Most ordinal numbers end in th, except 1, 2, and 3.]
var num_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Store the numbers 1 through 9 in a array.
for (var _i = 0, num_arr_1 = num_arr; _i < num_arr_1.length; _i++) { // Loop through the array.
    var num = num_arr_1[_i];
    var ordinalEnding = void 0;
    if (num == 1) { // Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
        ordinalEnding = 'st';
    }
    else if (num == 2) {
        ordinalEnding = 'nd';
    }
    else if (num == 3) {
        ordinalEnding = 'rd';
    }
    else {
        ordinalEnding = 'th';
    }
    console.log("".concat(num).concat(ordinalEnding));
}
