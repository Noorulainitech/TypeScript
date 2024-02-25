//Task : 18 [Seeing the World: Think of at least five places in the world you’d like to visit.]
//Part : 1
// Store the locations in a array. Make sure the array is not in alphabetical order.
var fav_places = ['Paris', 'Europe', 'Istanbul'];
// Part : 2
// Print your array in its original order.
console.log("Original Order: ", fav_places);
// Part : 3
// Print your array in alphabetical order without modifying the actual list.
var arrange_placelist = fav_places.slice().sort();
console.log("Alphabetical Order: ", arrange_placelist);
// Part : 4
// Show that your array is still in its original order by printing it.
console.log("Original Order After Sorting: ", fav_places);
// Part : 5
// Print your array in reverse alphabetical order without changing the order of the original list.
var revplacelist = arrange_placelist.slice().reverse();
console.log("Alphabetical Reverse Order: ", revplacelist);
// Part : 6
// Show that your array is still in its original order by printing it again.
console.log("Original Order After Reverse Alphabetical Order: ", fav_places);
// Part : 7
// Reverse the order of your list. Print the array to show that its order has changed.
var revoriginallist = fav_places.slice().reverse();
console.log("Reverse Original Order: ", revoriginallist);
// Part : 8
// Reverse the order of your list again. Print the list to show it’s back to its original order.
var backtoorigin = revoriginallist.reverse();
console.log("Back to original: ", backtoorigin);
// Part : 9
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
var alphabetical_placelist = fav_places.sort();
console.log("Sort in Alphabetical Order: ", alphabetical_placelist);
// Part : 10
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var rev_alpha_list = alphabetical_placelist.reverse();
console.log("Reverse Alphabetical Order: ", rev_alpha_list);
