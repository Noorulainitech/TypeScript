// Task : 16 [More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.]
let guests_lists = ['Bisma', 'Sobia', 'Afia'];

// Part 1
// Add one new guest to the beginning of your array.
let guest_beg: string = "Sanober";
guests_lists.push(guest_beg);
console.log(guests_lists);

// Part 2
// Add one new guest to the middle of your array.

guests_lists.splice(2,0,'Aisha');
console.log(guests_lists);

// Part 3
// Use append() to add one new guest to the end of your list.
let guest_end: string = "Washma";
guests_lists.push(guest_end);
console.log(guests_lists);

// Part 4
// Print a new set of invitation messages, one for each person in your list.

guests_lists.map((items) => console.log(`Assalam o Alikum! ${guests_lists} You're invited to a bigger dinner table.`));