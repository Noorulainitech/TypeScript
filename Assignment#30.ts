// Task : 30 [Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
// Imagine you are writing code that will print a greeting to each user after they log in to a website. 
// Loop through the array, and print a greeting to each user:]

let usersname: string[] = ["admin", "noor", "Eric", "aamir", "bisma"];

for(let user of usersname){
    if(user == "admin"){
    console.log("Hello admin, would you like to see a status report?");
    }
    else{
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
}