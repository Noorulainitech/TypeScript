// Task : 26 [Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.]


// Version 1
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let aliens_color: string = "green";

if (aliens_color == "green"){
    console.log("Your earned 5 points for shooting the alien");
}
else {
    console.log("Your earned 10 points for shooting the alien");
}

// Version 2
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.

let alien_colors: string = "red";

if(alien_colors == "green"){
    console.log("Your earned 5 points for shooting the alien");
}
else {
    console.log("Your earned 10 points for shooting the alien");
}


