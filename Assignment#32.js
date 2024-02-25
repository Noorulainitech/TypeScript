// Task : 32 [Checking Usernames: Do the following to create a program that simulates how websites ensure that 
// everyone has a unique username.]
var current_user = ['nida', 'noor', 'sadia', 'samina', 'saba']; // Make a list of five or more usernames called current_users.
var new_users = ['naila', 'wanisha', 'samina', 'noor', 'sadia']; // Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var current_user_list = current_user.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_user_list.includes(new_user.toLowerCase())) {
        console.log("Sorry ".concat(new_user, ", that name is taken"));
    }
    else {
        console.log("Yes ".concat(new_user, ", is still in available in list"));
    }
}
