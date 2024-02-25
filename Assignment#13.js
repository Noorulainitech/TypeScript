//Task : 13[Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
// and make a list that stores several examples. Use your list to print a series of statements about 
// these items, such as “I would like to own a Honda motorcycle.”]

var favorite_transportation = ["Audi Q7", "Testla Model S", "Toyota Prius"];
for (var _i = 0, favorite_transportation_1 = favorite_transportation; _i < favorite_transportation_1.length; _i++) {
    var vehicles = favorite_transportation_1[_i];
    console.log("I would like to own a ".concat(vehicles));
}
