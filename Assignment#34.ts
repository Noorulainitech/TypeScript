// Task # 34 [Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
// and then use a for loop to print the name of each pizza.]
let fav_pizza: string[] = ['BBQ chicken tikka','Mashroom pizza','Cheese pizza'];

for(const pizza of fav_pizza){
    console.log(pizza);
}

for(const pizza of fav_pizza){
    console.log(`I like ${pizza}`);
}

console.log(`\n I really love pizza!`);