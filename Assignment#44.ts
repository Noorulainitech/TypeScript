// Task : 44 [Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
// using a different number of arguments each time.]

function ordered(...item: string[]):void {
    console.log("\n Sandwich Order: \n");
if(item.length === 0){
    console.log('No Ordered');
}
else{
    item.forEach(item => console.log(`${item}`));
    console.log("Enjoy your sandwich!");
}

}


ordered('bread','cheese','beef','chicken','tomato');
ordered('mayonese','frenh','garli');
ordered();