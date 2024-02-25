// Task : 32 [Checking Usernames: Do the following to create a program that simulates how websites ensure that 
// everyone has a unique username.]

let current_user: string[] = ['nida','noor','sadia','samina','saba']; // Make a list of five or more usernames called current_users.

let new_users: string[] = ['naila','wanisha','samina','noor','sadia']; // Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

let current_user_list: string[] = current_user.map(user => user.toLowerCase())

for(let new_user of new_users){
    
    if(current_user_list.includes(new_user.toLowerCase())){
        console.log(`Sorry ${new_user}, that name is taken`);
    }
    
    else{
        console.log(`Yes ${new_user}, is still in available in list`);
    }
}