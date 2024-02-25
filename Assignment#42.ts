// Task : 42 [Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding 
// the phrase the Great to each magician’s name. Call show_magicians() to see that the 
// list has actually been modified.]

function make_great(magicians: string[]){
    for(const magician of magicians){
        console.log(`${magician} the great`)
    }
}

const magicians2: string[] = ['Ozaif','Usman','Shahrukh'];
make_great(magicians2);
