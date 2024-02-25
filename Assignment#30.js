// Task : 30 [Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
// Imagine you are writing code that will print a greeting to each user after they log in to a website. 
// Loop through the array, and print a greeting to each user:]
var usersname = ["admin", "noor", "Eric", "aamir", "bisma"];
for (var _i = 0, usersname_1 = usersname; _i < usersname_1.length; _i++) {
    var user = usersname_1[_i];
    if (user == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again."));
    }
}
