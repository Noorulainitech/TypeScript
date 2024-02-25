//Task : 17 [Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for 
// the dinner, and you have space for only two guests.]

// Part 1
// Add a new line that prints a message saying that you can invite only two people for dinner.

let guest: string[] = ['Bisma','Sobia','Aisha','Afia','Sanober','Washma'];
console.log('\n Due to limited space only two people can be invited for a dinner \n');

// Part 2
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

while(guest.length > 2){
    const removeguuest = guest.pop();
    console.log(`Sorry! ${removeguuest} You're no longer to invited in a dinner`);
}

// Part 3
// Print a message to each of the two people still on your list, letting them know they’re still invited.
//guest.map((items) => console.log(`\n Assalam o alikum! ${guest} You're still invited in a dinner`));
guest.forEach((guest) => {
    console.log(`\n Assalam o alikum! ${guest} You're still invited in a dinner`)
});