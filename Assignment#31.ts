// Task : 31 [No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.]

let users: string[] = [];

if(users.length > 0){ 
for(const username of users){
    console.log(`username: ${username}`);
}
}
else{console.log("We need to find some users!");}

users = [];

if (users.length === 0) {
    console.log("The list of users is now empty.");
}