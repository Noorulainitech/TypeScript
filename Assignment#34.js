// Task # 34 [Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
// and then use a for loop to print the name of each pizza.]
var fav_pizza = ['BBQ chicken tikka', 'Mashroom pizza', 'Cheese pizza'];
for (var _i = 0, fav_pizza_1 = fav_pizza; _i < fav_pizza_1.length; _i++) {
    var pizza = fav_pizza_1[_i];
    console.log(pizza);
}
for (var _a = 0, fav_pizza_2 = fav_pizza; _a < fav_pizza_2.length; _a++) {
    var pizza = fav_pizza_2[_a];
    console.log("I like ".concat(pizza));
}
console.log("\n I really love pizza!");
