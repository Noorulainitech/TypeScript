// Task : 31 [No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.]
var users = [];
if (users.length > 0) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var username = users_1[_i];
        console.log("username: ".concat(username));
    }
}
else {
    console.log("We need to find some users!");
}
users = [];
if (users.length === 0) {
    console.log("The list of users is now empty.");
}
