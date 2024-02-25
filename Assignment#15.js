//Task : 15 [Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to \
// send out a new set of invitations. You’ll have to think of someone else to invite.]

// Part 1
var guest_lists = ['Bisma', 'Shazia', 'Afia'];
console.log(guest_lists, "\n");
// Part 2
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
var unavailable_guest = "Shazia";
//• Remove Unavailable guest 'Shazia' and Add new guest 'Sobia'
guest_lists.splice(1, 1, 'Sobia');
//Send Invitation for Avalaible Guest
console.log("Assalam O Alikum \n Dear ".concat(guest_lists[1], "! \n You're cordially invited to join us for a delightful evening. Please save the date for a dinner party that promises to be memorable! \n"));
// Part 3
// Print a second set of invitation messages, one for each person who is still in your list.
console.log(guest_lists);
var new_list = guest_lists;
for (var _i = 0, new_list_1 = new_list; _i < new_list_1.length; _i++) {
    var guest = new_list_1[_i];
    console.log("Assalam O Alikum \n Dear ".concat(guest, "! \n You're cordially invited to join us for a delightful evening. Please save the date for a dinner party that promises to be memorable!"));
}
